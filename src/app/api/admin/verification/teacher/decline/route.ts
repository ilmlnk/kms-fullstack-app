import { db } from "@/lib/db";
import { NextResponse } from "next/server";


/**
 * Handles a POST request to decline a teacher.
 *
 * @param {Request} req - The request object.
 * @param {Object} params - The parameters object.
 * @param {number} params.teacherId - The ID of the teacher to decline.
 * @return {Promise<Response>} A promise that resolves to the response object.
 */

export async function POST(
    req: Request,
    { params }: { params: { teacherId: number } },
) {
    try {
        const { teacherId } = params;
        const declinedTeacher = await db.teacher.update({
            where: {
                id: params.teacherId
            },
            data: {
                acception_status: 'declined'
            }
        })
        return NextResponse.json(declinedTeacher);
    } catch (error) {
        console.error('[TEACHER]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

/**
 * Retrieves a list of declined teachers from the database and returns it as a JSON response.
 *
 * @param {Request} req - the request object
 * @return {Promise} a JSON response containing the list of declined teachers
 */

export async function GET(
    req: Request
) {
    try {
        const declinedTeachers = await db.teacher.findMany({
            where: {
                acception_status: 'declined'
            }
        })
        return NextResponse.json(declinedTeachers);
    } catch (error) {
        console.error('[TEACHER]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}