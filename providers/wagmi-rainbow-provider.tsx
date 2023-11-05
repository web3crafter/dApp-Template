"use client"
import "@rainbow-me/rainbowkit/styles.css"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
  lightTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit"
import { WagmiConfig, configureChains, createConfig, sepolia } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { useIsMounted } from "@/hooks/useIsMounted"
import Avatar from "@/components/avatar"

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_SEPOLIA_API_KEY! }),
    publicProvider(),
  ]
)

const appInfo = {
  appName: "dApp Template",
}

const { connectors } = getDefaultWallets({
  appName: appInfo.appName,
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID!,
  chains: [sepolia],
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const WagmiRainbowProvider = ({ children }: { children: React.ReactNode }) => {
  const isMounted = useIsMounted()
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={appInfo}
        avatar={Avatar}
        theme={midnightTheme({})}
        coolMode
      >
        {isMounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
export default WagmiRainbowProvider
