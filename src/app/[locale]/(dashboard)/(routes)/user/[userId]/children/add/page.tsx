'use client'


import { Button } from "@/components/ui/button"
import { ChevronLeftIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import toast from "react-hot-toast"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"

const addChildrenSchema: any = z.object({

    firstName: z.string(),
    lastName: z.string(),

})

export default function AddChildrenPage() {
    const router = useRouter();

    const form = useForm<z.infer<typeof addChildrenSchema>>({
        resolver: zodResolver(addChildrenSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof addChildrenSchema>) => {

        try {
            const addChildrenData = await axios.post('/api/children', values);
            toast.success("Children added");
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    const goBack = () => {
        router.back();
    }

    return (
        <div className="p-8">
            <Button variant={"outline"} onClick={goBack}>
                <ChevronLeftIcon />
            </Button>
            <h2 className="mt-4">Add Children Page</h2>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        First Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder='e.g. John'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Last Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder='e.g. Smith'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                </form>
            </Form>
        </div >
    )
}