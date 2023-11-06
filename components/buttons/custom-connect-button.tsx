"use client"

import Avatar from "@/components/avatar"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn, formatAddress } from "@/lib/utils"
import { AvatarType } from "@/types/web3"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

interface CustomConnectButtonProps extends ButtonProps {
  handleModalClose?: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
  label?: string
  showBalance?: boolean
  chainStatus?: "full" | "icon" | "name" | "none"
  avatar?: boolean
  avatarType?: AvatarType
}
const CustomConnectButton = ({
  handleModalClose,
  className,
  label = "Connect Wallet",
  showBalance = true,
  chainStatus = "full",
  variant = "default",
  avatar = false,
  avatarType = "identicons",
  ...buttonProps
}: CustomConnectButtonProps) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading"
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated")

        return (
          <div>
            {!connected ? (
              <Button
                className={cn("", chain?.unsupported && "hidden", className)}
                onClick={() => {
                  if (handleModalClose) {
                    handleModalClose(false)
                  }
                  openConnectModal()
                }}
                {...buttonProps}
              >
                {label}
              </Button>
            ) : (
              <div className="flex space-x-2">
                {!chain.unsupported && chainStatus !== "none" && (
                  <Button
                    variant={variant}
                    onClick={openChainModal}
                    className="px-2 hidden md:block"
                    {...buttonProps}
                  >
                    <div className="flex space-x-1">
                      {chain.hasIcon && chainStatus !== "name" && (
                        <div className="relative w-5 h-5">
                          {chain.iconUrl && (
                            <Image
                              src={chain.iconUrl}
                              alt={chain.name ?? "Chain Icon"}
                              fill
                              className="object-contain"
                            />
                          )}
                        </div>
                      )}
                      <p>{chainStatus !== "icon" && chain.name}</p>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </Button>
                )}
                <Button
                  variant={variant}
                  className={cn(
                    "space-x-1",
                    chain.unsupported && "hidden",
                    className
                  )}
                  onClick={() => {
                    if (handleModalClose) {
                      handleModalClose(false)
                    }
                    openAccountModal()
                  }}
                  {...buttonProps}
                >
                  {avatar && (
                    <Avatar
                      address={account.address}
                      avatarType={avatarType}
                      className="w-5 h-5"
                    />
                  )}

                  <p>{account.displayName}</p>
                  {showBalance && account.displayBalance
                    ? ` (${account.displayBalance})`
                    : ""}
                </Button>
              </div>
            )}

            {chain?.unsupported && (
              <Button
                variant={"destructive"}
                onClick={() => {
                  if (handleModalClose) {
                    handleModalClose(false)
                  }
                  openChainModal()
                }}
                className={cn("", className)}
                {...buttonProps}
              >
                Wrong Network
              </Button>
            )}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
export default CustomConnectButton
