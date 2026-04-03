import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function  POST(req) {
    const secretToken = req.nextUrl.searchParams.get('secret')

    if(secretToken !== process.env.TOKEN_REVALIDATE_EVENTS)
        return NextResponse.json({message: "Token no valido"}, {status: 401})

    try {
        revalidatePath("/events")
        
        return NextResponse.json({revalidate: true, now: Date.now()}, {status: 201})
    } catch (error) {
        return NextResponse.json({ message: 'Error revalidando' }, { status: 500 });
    }
}