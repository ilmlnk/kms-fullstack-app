import { DocumentTable } from "../../_components/document-table";

export default function DocumentsPage() {
    return (
        <div className="p-12">
            <div>
                <h1 className="text-3xl font-bold">Documents</h1>
                <div className="mt-12">
                    <DocumentTable />
                </div>
            </div>
        </div>
    )
}