"use client"

import { useState } from "react"
import { RxViewVertical } from "react-icons/rx"

import { siteConfig } from "@/config/site"
import { Icons } from "@/constants/icons"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import MobileLink from "@/components/nav/mobile-link"
import { ScrollArea } from "@/components/ui/scroll-area"
import { NavItem } from "@/types/nav"
import Socials from "@/components/socials"
import ThemeToggle from "@/components/buttons/theme-toggle"
import { cn } from "@/lib/utils"
import CustomConnectButton from "@/components/buttons/custom-connect-button"

interface MobileNavProps {
  items?: NavItem[]
  className?: string
}
const MobileNav = ({ items, className }: MobileNavProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            "px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 ",
            className
          )}
        >
          <RxViewVertical className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <Icons.logo className="w-4 h-4 mr-2" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <CustomConnectButton handleModalClose={setOpen} className="mt-8 ml-6" />
        <ScrollArea className="mt-8 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {items?.map(
              (item) =>
                item.href && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={setOpen}
                  >
                    {item.title}
                  </MobileLink>
                )
            )}
          </div>
        </ScrollArea>
        <div className="flex items-center justify-end space-x-1">
          <Socials />
          <ThemeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav
