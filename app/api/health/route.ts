import dbConnect from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await dbConnect();
        return NextResponse.json({ status: 'ok', message: 'Database connected successfully' });
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Database connection failed', error: (error as Error).message }, { status: 500 });
    }
}

