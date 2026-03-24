import { NextResponse } from 'next/server';
import { getVehicleById } from '@/sanity/client';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        const data = await getVehicleById(id);
        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'no-store, max-age=0',
            }
        });
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
