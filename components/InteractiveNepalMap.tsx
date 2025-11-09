"use client";

import React, { useState, useRef, useEffect } from "react";
import { regionData } from "@/lib/regionData";

const InteractiveNepalMap: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("NPBA");
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const svgContainerRef = useRef<HTMLDivElement>(null);

  // Load SVG content
  useEffect(() => {
    const loadSVG = async () => {
      try {
        const response = await fetch("/np.svg");
        const content = await response.text();
        setSvgContent(content);
      } catch (error) {
        console.error("Error loading SVG:", error);
      }
    };

    loadSVG();
  }, []);

  // Attach event listeners to SVG paths
  useEffect(() => {
    if (!svgContent || !svgContainerRef.current) return;

    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const container = svgContainerRef.current;

    // Clear previous content
    container.innerHTML = "";

    // Create a copy of the SVG
    const svgClone = svgDoc.documentElement.cloneNode(true) as SVGElement;

    // Set SVG to fill container
    svgClone.setAttribute("width", "100%");
    svgClone.setAttribute("height", "100%");
    svgClone.setAttribute("viewBox", "0 0 1000 569");
    svgClone.setAttribute("preserveAspectRatio", "xMidYMid meet");

    // Style all paths
    const paths = svgClone.querySelectorAll("path");
    paths.forEach((path) => {
      const regionId = path.id;
      if (regionData[regionId]) {
        // Set default style
        path.setAttribute("fill", "#d4d4d8");
        path.setAttribute("stroke", "#ffffff");
        path.setAttribute("stroke-width", "1.5");
        path.style.cursor = "pointer";
        path.style.transition = "fill 0.3s ease";

        // Click handler
        path.addEventListener("click", () => {
          setSelectedRegionId(regionId);
        });

        // Hover handlers
        path.addEventListener("mouseenter", () => {
          if (selectedRegionId !== regionId) {
            path.setAttribute("fill", "#a1a1a6");
          }
        });

        path.addEventListener("mouseleave", () => {
          if (selectedRegionId !== regionId) {
            path.setAttribute("fill", "#d4d4d8");
          }
        });
      }
    });

    container.appendChild(svgClone);
  }, [svgContent, selectedRegionId]);

  // Update selected region color
  useEffect(() => {
    if (!svgContainerRef.current) return;

    const svg = svgContainerRef.current.querySelector("svg");
    if (!svg) return;

    const paths = svg.querySelectorAll("path");
    paths.forEach((path) => {
      const regionId = path.id;
      if (regionId === selectedRegionId) {
        path.setAttribute("fill", "#2c5aa0");
      } else if (regionData[regionId]) {
        path.setAttribute("fill", "#d4d4d8");
      }
    });
  }, [selectedRegionId]);

  const selectedRegion = regionData[selectedRegionId];
  const hoveredRegion = hoveredRegionId ? regionData[hoveredRegionId] : null;

  return (
    <section className='w-full bg-[#f7f5f0] flex flex-col justify-start px-6 py-20'>
      <div className='mx-auto max-w-7xl w-full'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='font-semibold text-black leading-[1.1] text-3xl md:text-4xl lg:text-5xl mb-4'>
            Explore Nepal's Regions
          </h2>
          <p className='text-lg md:text-xl text-black/80 max-w-2xl leading-relaxed'>
            Click on any region to discover its attractions and culture.
          </p>
        </div>

        {/* Main Grid - Map Left, Options Right */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left Side - Map */}
          <div className='lg:col-span-2'>
            <div
              ref={svgContainerRef}
              className='w-full relative'
              style={{ height: "400px", minHeight: "400px" }}
            >
              {!svgContent && (
                <div className='flex items-center justify-center h-full text-gray-400'>
                  <p className='font-medium'>Loading map...</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Region Buttons */}
          <div className='lg:col-span-1'>
            <div className='grid grid-cols-2 gap-2'>
              {Object.values(regionData).map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegionId(region.id)}
                  className={`px-2 py-1 rounded font-medium transition-all duration-200 text-xs ${
                    selectedRegionId === region.id
                      ? "bg-[#2c5aa0] text-white"
                      : "bg-white text-black border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description Section - Below */}
        {selectedRegion && (
          <div className='mt-12 w-full'>
            <div className='bg-white p-6 rounded-lg'>
              <h3 className='text-2xl font-semibold text-black mb-1'>
                {selectedRegion.name}
              </h3>
              {selectedRegion.capital && (
                <p className='text-black/70 text-sm mb-6'>
                  Capital:{" "}
                  <span className='font-medium'>{selectedRegion.capital}</span>
                </p>
              )}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
                {/* Quick Facts */}
                <div>
                  <h4 className='text-xs font-semibold text-black mb-3 uppercase tracking-wide'>
                    Quick Facts
                  </h4>
                  <div className='space-y-2 text-black/80 text-sm'>
                    <p>
                      <span className='font-medium'>Population:</span>{" "}
                      {selectedRegion.population}
                    </p>
                    <p>
                      <span className='font-medium'>Area:</span>{" "}
                      {selectedRegion.area}
                    </p>
                  </div>
                </div>

                {/* Major Attractions */}
                <div>
                  <h4 className='text-xs font-semibold text-black mb-3 uppercase tracking-wide'>
                    Top Attractions
                  </h4>
                  <ul className='space-y-1 text-black/80 text-sm'>
                    {selectedRegion.majorAttractions.map(
                      (attraction, index) => (
                        <li key={index}>• {attraction}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>

              {/* Description */}
              <div className='mt-6'>
                <h4 className='text-xs font-semibold text-black mb-2 uppercase tracking-wide'>
                  About {selectedRegion.name}
                </h4>
                <p className='text-black/80 leading-relaxed text-sm'>
                  {selectedRegion.description}
                </p>
              </div>

              {/* Learn More Button */}
              <button className='mt-6 px-6 py-2 bg-[#2c5aa0] text-white font-medium text-sm rounded hover:bg-[#1e4470] transition-colors'>
                Learn More About {selectedRegion.name}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveNepalMap;
