import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 ">
        <Link href="/">
            <Image src="/hilink-logo.svg" alt="logo" height={29} width={74} />
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}
                    className="regular-16 text-gray-50 flex-center pb-1.5 transition-all hover:font-bold"
                    >
                        {link.label}
                    </Link>
                ))}
        </ul>

        <div className="lg:flexCenter hidden">
            <Button
                type="button"
                title="Log In"
                icon="/user.svg"
                variant="btn_dark_green"
            />
        </div>

        <img 
            src="menu.svg"
            alt="menu" 
            className="lg:hidden cursor-pointer inline-block"
            width={32}
            height={32}
        />
    </nav>
  )
}

export default Navbar