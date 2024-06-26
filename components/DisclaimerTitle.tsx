"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import Image from "next/image";

interface DisclaimerTitleProps {
  children: React.ReactNode;
  message: string;
}

export default function DisclaimerTitle({
  children,
  message,
}: DisclaimerTitleProps) {
  return (
    <div className="flex items-start gap-x-2.5">
      <div>{children}</div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button className="flex-shrink-0 grid place-items-center translate-y-1.5">
              <Image
                src="/images/icons/information.svg"
                alt="information icon"
                width={21}
                height={21}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent className="text-center" side="top" sideOffset={10}>
            <p>{message}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
