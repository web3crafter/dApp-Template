import Image from "next/image"
import { blo } from "blo"
import { cn } from "@/lib/utils"

const Avatar = ({
  address,
  className,
}: {
  address: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-full overflow-hidden",
        className
      )}
    >
      <Image
        src={blo(address as `0x${string}`)}
        alt="avatar"
        fill
        className="object-cover"
      />
    </div>
  )
}
export default Avatar
