import { db } from "@/lib/db";

const SubjectPage = async ({
    params
}: {
    params: { subjectId: string }
}) => {
    const subject = await db.subject.findUnique({
        where: {
            id: params.subjectId
        }
    });
    return (
        <div>
            Subject Page: {params.subjectId}
        </div>
    )
}

export default SubjectPage;