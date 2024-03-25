import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { Layout, LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";

const SubjectPage = async ({
    params
}: {
    params: { subjectId: number }
}) => {



    const subject = await db.subject.findUnique({
        where: {
            id: params.subjectId
        }
    });

    if (!subject) {
        return redirect('/');
    }

    const requiredFields = [
        subject.title,
        subject.description,
        subject.image_url,
        subject.category_id,
    ];

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    
    const completionText = `(${completedFields}/${totalFields})`;

    return (
        <div className="p-8">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <div className="text-2xl font-medium">
                        <h1>Subject setup</h1>
                        <span className="text-sm text-slate-700 dark:text-slate-400">
                            Complete all fields {completionText}
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge size="sm" variant="success" icon={LayoutDashboard}/>
                        <h2 className="text-xl">
                            Customize your subject
                        </h2>
                    </div>
                    <TitleForm
                        initialData={subject}
                        subjectId={subject.id}
                    />
                    <DescriptionForm
                        initialData={subject}
                        subjectId={subject.id}
                    />
                    <ImageForm
                        initialData={subject}
                        subjectId={subject.id}
                    />
                </div>
            </div>
        </div>
    )
}

export default SubjectPage;