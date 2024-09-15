import Logo from "./Logo"
import Counter from "./Counter"


export default function Header() {
    return (
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08] flex justify-between items-center px-[28px]">
            <Logo />
            <Counter />
        </header>
    )
}
