import { NextResponse } from 'next/server'

export async function POST() {
  // Stub: wire Stripe Checkout here.
  return NextResponse.json({ ok: false, message: 'Not configured' }, { status: 501 })
}
