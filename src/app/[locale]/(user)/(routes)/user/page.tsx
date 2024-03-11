import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const UserProfilePage = () => {
    return (
        <div className="container pt-12">
            <div className="">
                <div className="grid grid-cols-2">
                    <Avatar className="w-[300px] h-[300px]">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="">
                        <h1 className="text-3xl font-semibold">First Name Last Name</h1>
                        <p>Description</p>
                    </div>
                </div>

                <div className="">
                    <h1 className="text-xl font-medium">Registered Children</h1>
                    
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;