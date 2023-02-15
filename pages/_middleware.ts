import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req, ev) {
    const { pathname, origin } = req.nextUrl
    if (pathname == '/') {
        return NextResponse.redirect(`${origin}/goldypots`)
    }
    if (pathname == '/account/inventory') {
        return NextResponse.redirect(`${origin}/account/inventory/goldypass`)
    }
    if (pathname == '/account/history') {
        return NextResponse.redirect(`${origin}/account/history/pass`)
    }
    
    if (pathname.length == 11 && pathname.split('/').length == 2) {
        return NextResponse.redirect(`${origin}/goldypots?path=${pathname}`)
        
    }
    return NextResponse.next()
}