import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Faculty from '@/lib/models/Faculty';

export async function GET() {
    try {
        await dbConnect();
        const faculty = await Faculty.find({});
        return NextResponse.json(faculty);
    } catch (error) {
        console.error("Error fetching faculty data:", error);
        return NextResponse.json(
            { error: "Failed to fetch faculty data" },
            { status: 500 }
        );
    }
}
