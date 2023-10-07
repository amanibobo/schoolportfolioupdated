import MaxWidthWrapper from "./MaxWidthWrapper"
import { NavigationMenuDemo } from "./navvy"
import { ButtonDemo } from "./SignButton"

export default function NavBar() {
    return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <navoth className="flex h-14 items-center justify-between border-b border-zinc-200">
                <span className="flex z-40 font-semibold">AB</span>
                <div className="hidden items-center space-x-4 sm:flex">
                    <NavigationMenuDemo />
                </div>
                <span className="flex z-40"><ButtonDemo /></span>
            </navoth>
        </MaxWidthWrapper>
      </nav>
    )
}