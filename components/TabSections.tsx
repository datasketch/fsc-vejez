"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/Tabs";
import clsx from "clsx";
import Image from "next/image";

interface TabSectionProps {
  sections: {
    title: string;
    image?: {
      src: string;
      alt: string;
    };
    wordCloud?: React.ReactNode;
    wordContent?: React.ReactNode;
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
                className={clsx({
                  "flex items-center gap-x-2.5": section.image,
                })}
                value={section.title}
              >
                {section.image && (
                  <Image
                    width={20}
                    height={20}
                    src={section.image.src}
                    alt={section.image.alt}
                  />
                )}
                <p>{section.title}</p>
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
              {section.wordCloud && section.wordCloud}
              {section.wordContent && section.wordContent}
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
