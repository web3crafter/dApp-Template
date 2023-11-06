import Image from "next/image"
import { blo } from "blo"
import { generateAvatarURL } from "@cfx-kit/wallet-avatar"
import { cn } from "@/lib/utils"
import { AvatarType } from "@/types/web3"

interface AvatarProps {
  address: string
  className?: string
  avatarType?: AvatarType
}
const Avatar = ({
  address,
  className,
  avatarType = "identicons",
}: AvatarProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-full overflow-hidden",
        className
      )}
    >
      {avatarType === "identicons" ? (
        <Image
          src={blo(address as `0x${string}`)}
          alt="avatar"
          fill
          className="object-cover"
        />
      ) : (
        <Image
          src={generateAvatarURL(address as `0x${string}`)}
          alt="avatar"
          fill
          className="object-cover"
        />
      )}
    </div>
  )
}
export default Avatar
