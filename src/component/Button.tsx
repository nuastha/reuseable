type ButtonProps = {
    children: React.ReactNode
    buttonType: string
    type?: 'button' | 'submit' | 'reset'
    onClick?: () => Promise<void>
}

export default function Button({ children, buttonType, type, onClick }: ButtonProps) {
    return (
        <button type={type} className={`bg-[#472a2b] text-white rounded-[5px] h-[45px] w-full cursor-pointer hover:bg-[#322618] ${buttonType === "secondary" ? "opacity-80" : ''}`} onClick={onClick}>{children}</button>
    )
}
