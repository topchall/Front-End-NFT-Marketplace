export const goldypasspage_data = [
    {
        id: 17890,
        name: 'tori',
        stone: 'DEVA',
        type: 1,
    },
    {
        id: 99872,
        name: 'chika',
        stone: 'YAK',
        type: 2,
    },
    {
        id: 22678,
        name: 'bell',
        stone: 'OXIL',
        type: 3,
    },
    {
        id: 22678,
        name: 'baam',
        stone: 'GRANI',
        type: 4,
    },
    {
        id: 22678,
        name: 'gaga',
        stone: 'LACTO',
        type: 5,
    },
    {
        id: 22678,
        name: 'pomi',
        stone: 'OXIL',
        type: 6,
    },
    {
        id: 22678,
        name: 'aku',
        stone: 'GRANI',
        type: 7,
    },
    {
        id: 22678,
        name: 'rocky',
        stone: 'YAK',
        type: 8,
    },
    {
        id: 22678,
        name: 'bori',
        stone: 'LACTO',
        type: 9,
    },
    {
        id: 22678,
        name: 'goldy',
        stone: 'DEVA',
        type: 10,
    },
    {
        id: 22678,
        name: 'saya',
        stone: 'LACTO',
        type: 11,
    },
    {
        id: 22678,
        name: 'mato',
        stone: 'DEVA',
        type: 12,
    },
]

export const goldypet_attribute_text = {
    "get_mine": "the amount auto mined",
    "synthesis": "in Synthesis possibility",
    "mating": "in chance of breeding advantage",
    "hunger": "rate of Hunger value"
}

export const goldypetspage_data = [
    {
        name: 'Bono',
        image: '/images/pet1.svg',
        type: 0,
        attributes: {
            "get_mine": 3,
            "synthesis": 2,
            "mating": 1 ,
            "hunger": -0.1
        }       
    },
    {
        name: 'Dink',
        image: '/images/pet2.svg',
        type: 1,
        attributes: {
            "get_mine": 1,
            "synthesis": 10,
            "mating": 1,
            "hunger": -0.1
        }
    },
    {
        name: 'Inu',
        image: '/images/pet3.svg',
        type: 2,
        attributes: {
            "get_mine": 1,
            "synthesis": 2,
            "mating": 5,
            "hunger": -0.1
        }
    },
    {
        name: 'Alka',
        image: '/images/pet4.svg',
        type: 3,
        attributes: {
            "get_mine": 1,
            "synthesis": 2,
            "mating": 1,
            "hunger": -0.5
        }
    },
    {
        name: 'Dal',
        image: '/images/pet5.svg',
        type: 4,
        attributes: {
            "get_mine": 2,
            "synthesis": 5,
            "mating": 3,
            "hunger": -0.2
        }
    },
]

export const inventory_menu = [
    {
      title: 'Goldy',
      path: '/account/inventory/goldy'
    },
    {
      title: 'Goldy Pass',
      path: '/account/inventory/goldypass'
    },
    {
      title: 'Pets',
      path: '/account/inventory/pets'
    },
    {
      title: 'My GoldyPot',
      path: '/account/inventory/goldypot'
    },
    {
      title: 'Selling',
      path: '/account/inventory/selling'
    },
    
]

export const inventory_goldy_data = [
    {
      id: 32478,
      image: '/images/charAvartar/goldy2.png',
      stone: 'YAK',
      stone_image: '/images/goldypass/YAK.png',
      grade: 4,
      breed: 3,
      price: '?.????'
    },
    {
      id: 17890,
      image: '/images/charAvartar/g8.png',
      stone: 'OXIL',
      stone_image: '/images/goldypass/OXIL.png',
      grade: 4,
      breed: 1,
      price: '?.????'
    },
    {
      id: 44412,
      image: '/images/charAvartar/goldy4.png',
      stone: 'GRANI',
      stone_image: '/images/goldypass/GRANI.png',
      grade: 4,
      breed: 1,
      price: '?.????'
    },
    {
      id: 44413,
      image: '/images/charAvartar/goldy4.png',
      stone: 'GRANI',
      stone_image: '/images/goldypass/GRANI.png',
      grade: 4,
      breed: 1,
      price: '?.????'
    },    
]
  
export const inventory_goldypass_data = [
    {
      id: 22678,
      image: '/images/goldypass/goldy.png',
      stone: 'DEVA',
      stone_image: '/images/goldypass/DEVA.png',
    }
]
  
export const inventory_pets_data = [
    {
        name: 'Bono',
        image: '/images/pet1.png'
    }
]

export const inventory_goldypot_data = [
    {
      tournament: 1,
      no: '046',
      lucky_number: 3
    }
]
  
export const history_menu = [
    {
        title: 'Goldies',
        path: '/account/history/goldy'
    },
    {
        title: 'GoldyPass',
        path: '/account/history/pass'
    },
    {
        title: 'Pets History',
        path: '/account/history/pet'
    },
    {
        title: 'Ticket',
        path: '/account/history/ticket'
    },
    // {
    //     title: 'Transaction History',
    //     path: '/account/history/transaction'
    // },
]
export const history_menu_mobile = [
    {
        title: 'Goldies',
        path: '/account/history/goldy'
    },
    {
        title: 'GoldyPass',
        path: '/account/history/pass'
    },
    {
        title: 'Pets',
        path: '/account/history/pet'
    },
    {
        title: 'Ticket',
        path: '/account/history/ticket'
    },
    {
        title: 'Transaction History',
        path: '/account/history/transaction'
    },
]