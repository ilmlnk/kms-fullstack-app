import { DataTable } from "../../../_components/data-table"

const columns = [
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
]

const data = [

    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
]

const StatisticsPage = () => {
    return (
        <div className="container">
            <div className="mt-12">
                <DataTable data={data} columns={columns} />
            </div>
        </div>
    )
}

export default StatisticsPage;