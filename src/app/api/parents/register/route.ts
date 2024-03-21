import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';


export async function POST(
    req: Request,
) {
    function generateObjectId(): string {
        return 'id-xxxxxxxx-xxxx-2xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function generateTenantId(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    const genereateAuthorId = function (length = 6) {
        return Math.random().toString(36).substring(2, length + 2);
    };

    try {
        const {
            first_name,
            last_name,
            id_code,
            email,
            username,
            password,
            phone_number,
        } = await req.json();

        const objectId = generateObjectId();
        const authorId = genereateAuthorId();
        const tenantId = generateTenantId();
        const hashedPassword = await hash(password, 10);

        const parent = await db.parent.create({
            data: {
                object_id: String(objectId),
                author_id: String(authorId),
                tenant_id: String(tenantId),
                creation_date: new Date(),
                deleted: false,
                version_counter: 0,
                first_name: first_name,
                last_name: last_name,
                id_code: id_code,
                email: email,
                username: username,
                encrypted_password: hashedPassword,
                phone_number: phone_number,
            }
        });

        const user = await db.user.create({
            data: {
                parentId: parent.id,
                object_id: String(objectId),
                author_id: String(authorId),
                tenant_id: String(tenantId),
                creation_date: new Date(),
                deleted: false,
                version_counter: 0,
                role: 'parent',
                email: email,
                username: username,
                password: hashedPassword,
                phone_number: phone_number,
            }
        })

        return NextResponse.json({ user: parent, message: "User created successfully!" }, { status: 201 });
    } catch (error) {
        console.log('[PARENT]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}