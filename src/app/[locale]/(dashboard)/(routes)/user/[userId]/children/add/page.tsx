'use client'


import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function AddChildrenPage() {
    const router = useRouter();

    const goBack = () => {
        router.back();
    }

    return (
        <div className="p-8">
            <Button variant={"outline"} onClick={goBack}>
                <ChevronLeftIcon />
            </Button>
            <h2 className="mt-4">Add Children Page</h2>
        </div >
    )
}