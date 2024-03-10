import { Navbar } from "../(dashboard)/_components/navbar";

const UserPagesLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <Navbar/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default UserPagesLayout;