import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

export function DialogWindow({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Who are you?</DialogTitle>
          <DialogDescription>
            Choose who you are to start registration process.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button variant="outline">
            <Link href="/sign-up" className="w-full">
              I&apos;m a Parent
            </Link>
          </Button>

          <Button variant="outline">
            <Link href="/teacher-register" className="w-full">
              I&apos;m a Teacher
            </Link>
          </Button>


        </div>
      </DialogContent>
    </Dialog >
  )
}
