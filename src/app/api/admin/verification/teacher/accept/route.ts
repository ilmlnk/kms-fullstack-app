import { NextResponse } from "next/server";
import { db } from "@/lib/db";



/**
 * Updates the acception status of a teacher in the database.
 *
 * @param {Request} req - The request object.
 * @param {{ params: { teacherId: number } }} - The parameters object containing the teacher ID.
 * @return {Promise<NextResponse>} - A promise that resolves to the updated teacher data as a JSON response.
 * @throws {Error} - If there is an error updating the teacher data, the promise will be rejected with an error object.
 */

export async function POST(
    req: Request,
    { params }: { params: { teacherId: number } },
) {
    try {
        const acceptedTeacher = await db.teacher.update({
            where: {
                id: params.teacherId
            },
            data: {
                acception_status: 'accepted'
            }
        })
        return NextResponse.json(acceptedTeacher);
    } catch (error) {
        console.error('[TEACHER]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}

/**
 * Retrieves the list of accepted teachers from the database and returns it as a JSON response.
 *
 * @param {Request} req - the request object
 * @return {Promise<Response>} the JSON response with the list of accepted teachers or an error response
 */
export async function GET(
    req: Request
) {
    try {
        const acceptedTeachers = await db.teacher.findMany({
            where: {
                acception_status: 'accepted'
            }
        })
        return NextResponse.json(acceptedTeachers);
    } catch (error) {
        console.error('[TEACHER]', error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}