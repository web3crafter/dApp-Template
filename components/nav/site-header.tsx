import { siteConfig } from "@/config/site"

import ThemeToggle from "@/components/buttons/theme-toggle"
import MainNav from "@/components/nav/main-nav"
import MobileNav from "@/components/nav/mobile-nav"
import Socials from "@/components/socials"
import CustomConnectButton from "@/components/buttons/custom-connect-button"

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex items-center justify-between h-16 space-x-4 sm:space-x-0">
        <MainNav items={siteConfig.mainNav} className="hidden md:flex" />
        <MobileNav items={siteConfig.mobileNav} className="md:hidden" />
        <div className="items-center justify-end flex-1 hidden space-x-4 md:flex">
          <nav className="flex items-center space-x-1">
            <CustomConnectButton
              chainStatus="icon"
              showBalance={false}
              variant={"secondary"}
              avatar={true}
              avatarType="identicons"
            />
            <Socials />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
export default SiteHeader
