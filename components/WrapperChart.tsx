"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import Image from "next/image";
import { useState } from "react";

interface WrapperChartProps {
  children: React.ReactNode;
  description: string | string[];
}

export default function WrapperChart({
  children,
  description,
}: WrapperChartProps) {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div>{children}</div>
      <div className="absolute bottom-0 left-0">
        <Popover onOpenChange={(open) => setIsOpen(open)}>
          <PopoverTrigger>
            {!open ? (
              <Image
                width={112}
                height={73.59}
                src="/images/how-to-read-this-chart.svg"
                alt="how to read this chart image"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <button className="text-[13px] text-dark-slate-gray underline">
                  Cerrar
                </button>
                <Image
                  width={62}
                  height={62}
                  src="/images/profile.svg"
                  alt="profile image"
                />
              </div>
            )}
          </PopoverTrigger>
          <PopoverContent
            className="z-50 w-[351px] absolute shadow bottom-0 left-0 bg-alabaster p-5 leading-[20.8px] text-eerie-black rounded-t-[10px] rounded-br-[10px]"
            side="right"
          >
            {!Array.isArray(description) ? (
              <p>{description}</p>
            ) : (
              <div className="space-y-2">
                {description.map((el, i) => (
                  <p key={i}>{el}</p>
                ))}
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}