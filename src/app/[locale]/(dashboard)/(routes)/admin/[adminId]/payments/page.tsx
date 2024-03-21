'use client'

import { Button } from "@/components/ui/button";
import { PaymentTable } from "../../_components/payment-table";
import { PlusCircle, PlusCircleIcon } from "lucide-react";
import {
    Form,
    FormLabel,
    FormDescription,
    FormControl,
    FormField,
    FormMessage,
    FormItem,
} from '@/components/ui/form';
import axios from 'axios';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { DateTimePicker } from "@/components/date-time-picker";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    fullName: z.string(),
    email: z.string(),
    parentEmail: z.string(),
    parentPhoneNumber: z.string(),
    assignTo: z.string(),
    emailTo: z.string(),
    dueTo: z.date(),
    cost: z.string(),
    comment: z.string(),
})

export default function PaymentsPage() {
    const t = useTranslations();
    const pathname = usePathname();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            parentEmail: "",
            assignTo: "",
            dueTo: new Date(),
            cost: "",
            comment: "",
        }
    })

    const { isSubmitting, isValid } = form.formState;
    return (
        <div className="p-12">
            <div>
                <h1 className="text-3xl font-bold">Payments</h1>
                <div className="mt-12">
                    <PaymentTable />
                </div>
                <div className="mt-12">
                    <h1 className="text-3xl font-bold">Create payment</h1>
                    <div className="mt-12 p-[5rem] rounded-md dark:bg-background border-slate-200 border border-1 dark:border-slate-800 dark:border dark:border-1">
                        <Form {...form}>
                            <form>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {/*Full name*/}
                                                    Full name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled
                                                        placeholder="Input your full name"
                                                        {...field}
                                                    />

                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {/*Email*/}
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isSubmitting}
                                                        placeholder="Input email"
                                                        {...field}
                                                    />

                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="assignTo"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {/*First name*/}
                                                    Parent&apos;s Username
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isSubmitting}
                                                        placeholder="Input to assign to"
                                                        {...field}
                                                    />

                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="emailTo"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {/*First name*/}
                                                    Parent&apos;s Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isSubmitting}
                                                        placeholder="Input email to parent"
                                                        {...field}
                                                    />

                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="cost"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {/*First name*/}
                                                    Cost
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        disabled={isSubmitting}
                                                        placeholder="Input cost"
                                                        {...field}
                                                    />

                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="dueTo"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    {/*Due to*/}
                                                    Due to
                                                </FormLabel>
                                                <FormControl>
                                                    <DateTimePicker />

                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="comment"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                {/*Due to*/}
                                                Comment
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    disabled={isSubmitting}
                                                    placeholder="Input comment"
                                                    {...field}
                                                />

                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button
                                 className="mt-8"
                                    type='submit'>
                                    <PlusCircleIcon className="w-4 h-4 mr-2" />
                                    Create payment
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}