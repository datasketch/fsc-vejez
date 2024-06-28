"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/Popover";
import Image from "next/image";
import { useState } from "react";

interface WrapperChartProps {
  children: React.ReactNode;
  description: string | string[];
  type?: "chart" | "content";
}

export default function WrapperChart({
  children,
  description,
  type = "chart",
}: WrapperChartProps) {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="mt-12 flex flex-col gap-y-4">
      <div>
        <Popover onOpenChange={(open) => setIsOpen(open)}>
          <PopoverTrigger>
            {!open ? (
              <Image
                width={112}
                height={73.59}
                src={
                  type === "chart"
                    ? "/images/how-to-read-this-chart.svg"
                    : "/images/what-this-means.svg"
                }
                alt={
                  type === "chart"
                    ? "how to read this chart image"
                    : "what this means image"
                }
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
            className="z-50 w-[351px] absolute shadow top-0 left-0 bg-white p-5 leading-[20.8px] text-eerie-black rounded-b-[10px] rounded-tr-[10px]"
            side="right"
            align="center"
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
      <div>{children}</div>
    </div>
  );
}
