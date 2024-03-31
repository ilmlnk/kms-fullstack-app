import { LoginAccount } from "@/components/login-form";
import { SignIn } from "@clerk/nextjs";

export default function Home() {
    return (
        <LoginAccount />
    );
}