import { NextResponse } from 'next/server';
import { getVehicles } from '@/sanity/client';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        const data = await getVehicles();
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
