import { db } from "@/lib/db";

export async function GET(
    req: Request,
    { params }: { params: { eventId: number } }
) {
    try {
        const event = await db.event.findFirst({
            where: {
                id: params.eventId
            }
        })
    } catch (error) {
        
    }
}