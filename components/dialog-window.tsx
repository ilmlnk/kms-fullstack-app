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
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DialogWindow({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const language = pathname?.split("/")[1]; 
  const t = useTranslations();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {/*Who are you?*/}
            {t('landing-page.header.signup-dialog.heading')}
            </DialogTitle>
          <DialogDescription>
            {/*Choose who you are to start registration process.*/}
            {t('landing-page.header.signup-dialog.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button variant="outline">
            <Link href={`${language}/sign-up`} className="w-full">
              {/* I'm a Parent */}
              {t('landing-page.header.signup-dialog.parent')}
            </Link>
          </Button>

          <Button variant="outline">
            <Link href={`${language}/teacher-register`} className="w-full">
              {/*I'm a Teacher*/}
              {t('landing-page.header.signup-dialog.teacher')}
            </Link>
          </Button>

          <Button variant="outline">
            <Link href={`${language}/admin-register`} className="w-full">
              {/*I'm an Admin*/}
              {t('landing-page.header.signup-dialog.admin')}
            </Link>
          </Button>


        </div>
      </DialogContent>
    </Dialog >
  )
}
