"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import Image from "next/image";

interface TabSectionProps {
  sections: {
    title: string;
    srcImage: string;
  }[];
}

export default function TabSections({ sections }: TabSectionProps) {
  return (
    <Tabs defaultValue={sections[0].title}>
      <div className="flex justify-center">
        <TabsList>
          {sections.map((section, i) => {
            return (
              <TabsTrigger
                key={`section-trigger-${i + 1}`}
                value={section.title}
              >
                {section.title}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>
      {sections.map((section, i) => {
        return (
          <TabsContent key={`section-content-${i + 1}`} value={section.title}>
            <Image
              className="mx-auto"
              src={section.srcImage}
              alt={`${section.title} image`}
              width={600}
              height={600}
              objectFit="cover"
              objectPosition="center"
            />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
