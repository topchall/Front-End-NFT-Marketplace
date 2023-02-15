import { AbstractConnectorArguments, ConnectorUpdate } from '@web3-react/types'
import { AbstractConnector } from '@web3-react/abstract-connector'
import warning from 'tiny-warning'

import { SendReturnResult, SendReturn, Send, SendOld } from './types'

function parseSendReturn(sendReturn: SendReturnResult | SendReturn): any {
  return sendReturn.hasOwnProperty('result') ? sendReturn.result : sendReturn
}

export class NoEthereumProviderError extends Error {
  public constructor() {
    super()
    this.name = this.constructor.name
    this.message = 'No Ethereum provider was found on (window as any).bitkeep.ethereum.'
  }
}

export  class UserRejectedRequestError extends Error {
  public constructor() {
    super()
    this.name = this.constructor.name
    this.message = 'The user rejected the request.'
  }
}

export  class BitKeepConnector extends AbstractConnector {
  constructor(kwargs: AbstractConnectorArguments) {
    super(kwargs)
  }

  public async activate(): Promise<ConnectorUpdate> {
    
    const bitkeep = (window as any).bitkeep;
    if (bitkeep) {
      // try to activate + get account via eth_requestAccounts
      let account
      try {
        await bitkeep.ethereum.request({ method: 'eth_requestAccounts' });
        account = await bitkeep.ethereum.request({ method: 'eth_requestAccounts' }).then(
          (sendReturn: any) => parseSendReturn(sendReturn)[0]
        )
      } catch (error) {
        if ((error as any).code === 4001) {
          throw new UserRejectedRequestError()
        }
        warning(false, 'eth_requestAccounts was unsuccessful, falling back to enable')
      }

      // if unsuccessful, try enable
      if (!account) {
        // if enable is successful but doesn't return accounts, fall back to getAccount (not happy i have to do this...)
        account = await bitkeep.ethereum.enable().then((sendReturn: any) => sendReturn && parseSendReturn(sendReturn)[0])
      }

      return { provider: bitkeep.ethereum, ...(account ? { account } : {}) }
      } else {
      (window as any).open("https://bitkeep.com/download", "_blank");
      throw new Error('No Bitkeep wallet found');
    }
  }

  public async getProvider(): Promise<any> {
    return (window as any).bitkeep.ethereum
  }

  public async getChainId(): Promise<number | string> {
    if (!(window as any).bitkeep.ethereum) {
      throw new NoEthereumProviderError()
    }

    let chainId
    try {
      chainId = await ((window as any).bitkeep.ethereum.request as Send)('eth_chainId').then(parseSendReturn)
    } catch {
      warning(false, 'eth_chainId was unsuccessful, falling back to net_version')
    }

    if (!chainId) {
      try {
        chainId = await ((window as any).bitkeep.ethereum.send as Send)('net_version').then(parseSendReturn)
      } catch {
        warning(false, 'net_version was unsuccessful, falling back to net version v2')
      }
    }

    if (!chainId) {
      try {
        chainId = parseSendReturn(((window as any).bitkeep.ethereum.send as SendOld)({ method: 'net_version' }))
      } catch {
        warning(false, 'net_version v2 was unsuccessful, falling back to manual matches and static properties')
      }
    }

    if (!chainId) {
      if (((window as any).bitkeep.ethereum as any).isDapper) {
        chainId = parseSendReturn(((window as any).bitkeep.ethereum as any).cachedResults.net_version)
      } else {
        chainId =
          ((window as any).bitkeep.ethereum as any).chainId ||
          ((window as any).bitkeep.ethereum as any).netVersion ||
          ((window as any).bitkeep.ethereum as any).networkVersion ||
          ((window as any).bitkeep.ethereum as any)._chainId
      }
    }

    return chainId
  }

  public async getAccount(): Promise<null | string> {
    if (!(window as any).bitkeep.ethereum) {
      throw new NoEthereumProviderError()
    }

    let account
    try {
      account = await ((window as any).bitkeep.ethereum.send as Send)('eth_accounts').then(sendReturn => parseSendReturn(sendReturn)[0])
    } catch {
      warning(false, 'eth_accounts was unsuccessful, falling back to enable')
    }

    if (!account) {
      try {
        account = await (window as any).bitkeep.ethereum.enable().then((sendReturn: any) => parseSendReturn(sendReturn)[0])
      } catch {
        warning(false, 'enable was unsuccessful, falling back to eth_accounts v2')
      }
    }

    if (!account) {
      account = parseSendReturn(((window as any).bitkeep.ethereum.send as SendOld)({ method: 'eth_accounts' }))[0]
    }

    return account
  }

  public deactivate() {
  }

  public async isAuthorized(): Promise<boolean> {
    if (!(window as any).bitkeep.ethereum) {
      return false
    }

    try {
      return await ((window as any).bitkeep.ethereum.send as Send)('eth_accounts').then(sendReturn => {
        if (parseSendReturn(sendReturn).length > 0) {
          return true
        } else {
          return false
        }
      })
    } catch {
      return false
    }
  }
}