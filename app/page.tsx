import Web3Button from "@/components/buttons/web-3-button"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { acmNft } from "@/constants/acmNft"
import Link from "next/link"

export default function Home() {
  const tokenId = BigInt(Math.floor(Math.random() * 100000))
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
        <Web3Button
          buttonLabel="Claim"
          contractAddress="0x669514Ab9Ea173FfF229d2e5a025124E656B6330"
          contractAbi={acmNft}
          functionName="safeMint"
          args={["0xe524DB01941eB7DF5e42Feb8F56F705A0B324fdE", tokenId]}
        />
      </div>
    </section>
  )
}
