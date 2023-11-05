import Link from "next/link"

import { siteConfig } from "@/config/site"

const SiteFooter = () => {
  return (
    <footer className="py-6 border-t md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          Built by{" "}
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Web3Crafter
          </Link>
          . The source code is available on{" "}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Github
          </Link>
        </p>
      </div>
    </footer>
  )
}
export default SiteFooter
