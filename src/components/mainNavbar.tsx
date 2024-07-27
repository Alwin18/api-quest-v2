"use client";
import { usePathname, useRouter } from "next/navigation"

const MainNavbar = (() => {
    const route = useRouter()
    const pathName = usePathname();

    console.log(pathName)

    return (
        <>
            {pathName === "/" && <nav className="flex w-full justify-between px-10 py-4 bg-slate-700 text-white items-center">
                <div className="">Logo</div>
                <div className="">
                    <ul className="flex gap-5">
                        <li className="cursor-pointer">Products</li>
                        <li className="cursor-pointer">Learn</li>
                        <li className="cursor-pointer">Download</li>
                        <li className="cursor-pointer">Pricing</li>
                        <li className="cursor-pointer">API Hub</li>
                        <li className="cursor-pointer">Api Quest</li>
                    </ul>
                </div>
                <button onClick={() => route.push("/sign-in")} className="bg-blue-600 text-white px-5 py-2 rounded-lg">Login</button>
            </nav>}
        </>
    )
})

export default MainNavbar