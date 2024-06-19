"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import Image from "next/image";

interface TabSectionProps {
  sections: {
    title: string;
    wordCloud: React.ReactNode;
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
      <div className="mt-6 lg:mt-8 xl:mt-10">
        {sections.map((section, i) => {
          return (
            <TabsContent
              className="flex justify-center"
              key={`section-content-${i + 1}`}
              value={section.title}
            >
              {section.wordCloud}
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
