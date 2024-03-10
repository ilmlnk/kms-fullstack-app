import Footer from "@/components/footer";
import Header from "@/components/header";

const PagesLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PagesLayout;