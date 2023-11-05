"use client"

import { useEffect, useState } from "react"
import {
  Abi,
  Narrow,
  TransactionReceiptNotFoundErrorType,
  UserRejectedRequestError,
  parseEther,
} from "viem"
import {
  useAccount,
  useContractWrite,
  useNetwork,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi"

import { Button, ButtonProps } from "@/components/ui/button"
import CustomConnectButton from "@/components/buttons/custom-connect-button"
import { Icons } from "@/constants/icons"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

interface Web3ButtonProps extends ButtonProps {
  buttonLabel: string
  contractAddress: string
  contractAbi: Narrow<readonly unknown[] | Abi>
  functionName: string
  className?: string
  buttonType?: "button" | "submit" | "reset"
  onSubmit?: () => void
  onSuccess?: () => void
  onError?: () => void
  isDisabled?: boolean
  isLoading?: boolean
  txValue?: string
  args?: any[]
}

const Web3Button = ({
  buttonLabel,
  buttonType = "button",
  className,
  contractAddress,
  functionName,
  contractAbi,
  onSubmit,
  onSuccess,
  onError,
  isDisabled,
  isLoading,
  txValue,
  args,
  ...props
}: Web3ButtonProps) => {
  const [buttonText, setButtonText] = useState(buttonLabel)

  const { isConnected } = useAccount()
  const { chain } = useNetwork()

  const { data, write } = useContractWrite({
    address: contractAddress as `0x${string}`,
    abi: contractAbi,
    functionName: functionName,
    onSuccess: () => setButtonText("Transaction pending"),
    onError: (e) => {
      const error = e as UserRejectedRequestError
      if (error.shortMessage === "User rejected the request.") {
        setButtonText(buttonLabel)
        toast.error("User Rejected Transaction")
      }
    },
  })

  const { status: transactionStatus } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      setButtonText(buttonLabel)
      onSuccess && onSuccess()
    },
    onError(e) {
      const error = e as TransactionReceiptNotFoundErrorType
      console.log("error:", error.shortMessage)
      setButtonText(buttonLabel)

      toast.error("Error:", {
        description: error.shortMessage,
      })
    },
  })

  const txLoading = transactionStatus === "loading"

  const handleTransactionAction = () => {
    setButtonText("Waiting for confirmation")
    write?.({
      args: args,
      value: txValue ? parseEther(txValue) : undefined,
    })
  }

  if (!isConnected || chain?.unsupported) {
    return <CustomConnectButton />
  }

  return (
    <Button
      type={buttonType}
      className={cn("flex gap-2", className)}
      disabled={txLoading || isDisabled}
      onClick={handleTransactionAction}
      {...props}
    >
      {txLoading || isLoading ? (
        <>
          <Icons.spinner className="animate-spin" />
          <span>{buttonText}</span>
        </>
      ) : (
        buttonText
      )}
    </Button>
  )
}

export default Web3Button
