interface NavbarItemProps {
    label: string;
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
    return (
        <div
            className="cursor-pointer text-white hover:text-zinc-500 transition"
        >
            {label}
        </div>
    )
}