import { Icons } from "@/constants/icons"
import { siteConfig } from "@/config/site"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <Icons.logo className="w-6 h6" />
      <span className="inline-block font-bold">{siteConfig.name}</span>
    </Link>
  )
}
export default Logo
