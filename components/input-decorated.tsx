"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LucideIcon, Trash } from "lucide-react"
import * as React from "react"

interface InputDecoratedProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string
  icon?: LucideIcon
  iconLeft?: LucideIcon
  reset: () => void
}

const InputDecorated = React.forwardRef<HTMLInputElement, InputDecoratedProps>(
  (
    {
      className,
      type,
      reset,
      text,
      iconLeft: IconLeft,
      icon: Icon = Trash,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex items-center gap-2">
        {IconLeft && <IconLeft />}
        <div
          className={cn(
            "flex h-10 w-full items-center rounded-md border border-input bg-background text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 ",
            className
          )}
        >
          <input
            type={type}
            ref={ref}
            {...props}
            className="bg-transparent w-full px-3 py-2 focus-visible:outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button variant={"ghost"} size={"sm"} type="button" onClick={reset}>
            {text ? text : <Icon />}
          </Button>
        </div>
      </div>
    )
  }
)

InputDecorated.displayName = "Input"

export default InputDecorated
