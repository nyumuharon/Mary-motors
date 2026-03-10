import { NextResponse } from 'next/server';
import { getVehicleById } from '@/sanity/client';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    try {
        const data = await getVehicleById(params.id);
        return NextResponse.json(data);
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
