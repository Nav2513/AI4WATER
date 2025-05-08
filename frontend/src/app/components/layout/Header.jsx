import HeaderNavigationButton from "../ui/buttons/HeaderNavigation";

export default function Header() {


    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b">
            <div className="max-w-7xl mx-auto px-3 py-3 flex justify-between items-center">
               <div className="text-xl font-bold text-primary">
                AI4WATER
               </div>
               <div className="flex items-center gap-4">
                <HeaderNavigationButton name={"Home"} path={"/"} />
                <HeaderNavigationButton name={"Products"} path={"/products"} />
                <HeaderNavigationButton name={"About Us"} path={"/aboutUs"} />
               </div>
            </div>
        </header>
    )
}