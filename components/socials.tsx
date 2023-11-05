import { Icons } from "@/constants/icons"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"

const Socials = () => {
  return (
    <div className="flex items-center space-x-1">
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <div className={buttonVariants({ size: "icon", variant: "ghost" })}>
          <Icons.gitHub className="w-5 h-5 fill-current" />
          <span className="sr-only">GitHub</span>
        </div>
      </Link>
      <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
        <div className={buttonVariants({ size: "icon", variant: "ghost" })}>
          <Icons.twitter className="w-4 h-4 fill-current" />
          <span className="sr-only">Twitter</span>
        </div>
      </Link>
    </div>
  )
}
export default Socials
