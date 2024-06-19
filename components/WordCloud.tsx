"use client";

import { useWindowSize } from "@uidotdev/usehooks";
import * as d3 from "d3";
import cloud from "d3-cloud";
import { useEffect, useRef } from "react";

interface WordCloudProps {
  words: {
    text: string;
    value: number;
  }[];
  color?: string;
  size?: number;
}

export default function WordCloud({
  words,
  color = "#fff",
  size = 8,
}: WordCloudProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (width && height) {
      const layout = cloud()
        .size([(width * 0.85), 600])
        .words(
          words.map((word) => ({
            text: word.text,
            size: word.value,
            value: word.value,
          }))
        )
        .padding(10)
        .rotate(() => 0)
        .fontSize((d: any) => d.size * size)
        .on("end", draw);

      layout.start();

      // @ts-ignore
      function draw(words: any) {
        const svg = d3
          .select(svgRef.current)
          .attr("width", layout.size()[0])
          .attr("height", layout.size()[1]);

        svg
          .append("rect")
          .attr("width", layout.size()[0])
          .attr("height", layout.size()[1])
          .style("fill", color);

        const g = svg
          .append("g")
          .attr(
            "transform",
            `translate(${layout.size()[0] / 2},${layout.size()[1] / 2})`
          );

        const tooltip = d3
          .select(tooltipRef.current)
          .style("position", "absolute")
          .style("visibility", "hidden")
          .style("background-color", "white")
          .style("border", "1px solid #ccc")
          .style("padding", "15px")
          .style("border-radius", "5px")
          .style("width", "247px");

        g.selectAll("text")
          .data(words)
          .enter()
          .append("text")
          .style("font-size", (d: any) => `${d.size}px`)
          .style(
            "fill",
            () => d3.schemeCategory10[Math.floor(Math.random() * 10)]
          )
          .attr("text-anchor", "middle")
          .attr("transform", (d: any) => {
            let x = d.x;
            let y = d.y;
            return `translate(${x},${y})rotate(${d.rotate})`;
          })
          .text((d: any) => d.text)
          .on("mouseover", (event, d: any) => {
            tooltip.style("visibility", "visible").html(
              `
                <div>
                  <h3>${d.text}</h3>
                  <p>
                  <span style="font-weight: 600; font-size: 31px">${d.value}</span> es la cantidad de veces que aparece la palabra en las conversaciones
                  </p>
                </div>
                `
            );
          })
          .on("mousemove", (event) => {
            tooltip
              .style("top", `${event.pageY - 150}px`)
              .style("left", `${event.pageX - 120}px`);
          })
          .on("mouseout", () => {
            tooltip.style("visibility", "hidden");
          });
      }
    }
  }, [words, width, height, color, size]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div ref={tooltipRef}></div>
    </div>
  );
}
