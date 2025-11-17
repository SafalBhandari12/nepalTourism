"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function StaggeredMenuSimple({
  position = "right",
  colors = ["#B19EEF", "#5227FF", "#8A6BFF"],
  items = [
    { label: "Home", link: "/" },
    { label: "About", link: "#about" },
    { label: "Services", link: "#services" },
    { label: "Contact", link: "#contact" },
  ],
  socials = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/adarsh.school.dress?igsh=MTB5cTRnbjRyNGw4MA==",
    },
    { label: "WhatsApp", link: "https://wa.me/918449431638" },
  ],
}: {
  position?: "left" | "right";
  colors?: string[];
  items?: { label: string; link: string }[];
  socials?: { label: string; link: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const offClass =
    position === "left" ? "-translate-x-full" : "translate-x-full";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (link: string) => {
    // Close the menu first
    setOpen(false);
    setTimeout(() => {
      // Handle navigation
      if (link === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (link.startsWith("#")) {
        const sectionId = link.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = scrolled ? 70 : 96; // Adjust for navbar height
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      } else if (link.startsWith("/")) {
        let sectionId = "";
        if (link === "/about") sectionId = "about";
        else if (link === "/services") sectionId = "services";
        else if (link === "/contact") sectionId = "contact";
        if (sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerOffset = scrolled ? 70 : 96;
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }
      }
    }, 100);
  };

  return (
    <div className='relative w-full h-full'>
      {/* Header */}
      <header
        className={`absolute top-0 left-0 right-0 flex items-center justify-between z-[60] transition-all duration-500 ease-out w-full ${
          open
            ? "h-16 px-4 md:px-6 bg-transparent"
            : "h-16 px-4 md:px-6 bg-transparent"
        }`}
      >
        <div className='pointer-events-auto flex-shrink-0 max-w-[80px] md:max-w-[120px]'>
          <Image
            src='/logo.png'
            alt='logo'
            className={`object-contain transition-all duration-500 ease-out ${
              open || !scrolled
                ? "h-12 w-12 md:h-12 md:w-12"
                : "h-10 w-10 md:h-10 md:w-10"
            }`}
            width={120}
            height={48}
          />
        </div>

        <button
          aria-expanded={open}
          aria-controls='menu-panel'
          onClick={() => setOpen((s) => !s)}
          className={`pointer-events-auto cursor-pointer inline-flex items-center gap-3 bg-transparent hover:bg-white/10 text-white rounded-md focus:outline-none focus-visible:ring focus-visible:ring-white/30 transition-all duration-500 ease-out ${
            open || !scrolled ? "px-3 py-2" : "px-2 py-1.5"
          }`}
        >
          <span
            className={`inline-block font-medium transition-all duration-500 ease-out ${
              open ? "text-black" : "text-white"
            } ${open || !scrolled ? "w-12 text-sm" : "w-10 text-xs"}`}
          >
            {open ? "Close" : "Menu"}
          </span>

          {/* Hamburger Icon */}
          <span
            className={`relative inline-flex items-center justify-center transition-all duration-500 ease-out ${
              open ? "text-black" : "text-white"
            } ${open || !scrolled ? "w-4 h-4" : "w-3 h-3"}`}
          >
            <span
              className={`absolute left-1/2 top-1/2 block bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                open ? "rotate-45" : "rotate-0"
              } ${open || !scrolled ? "w-6 h-[2px]" : "w-4 h-[1.5px]"}`}
            />
            <span
              className={`absolute left-1/2 top-1/2 block bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                open ? "-rotate-45" : "rotate-90"
              } ${open || !scrolled ? "w-6 h-[2px]" : "w-4 h-[1.5px]"}`}
            />
          </span>
        </button>
      </header>

      {/* Overlay for mobile menu */}
      {open && (
        <div
          className='fixed inset-0 bg-black/50 z-40'
          onClick={() => setOpen(false)}
        />
      )}

      {/* Colored Background Layers */}
      <div
        aria-hidden
        className={`fixed top-0 bottom-0 ${
          position === "left" ? "left-0" : "right-0"
        } w-full md:w-[clamp(260px,38vw,420px)] pointer-events-none z-[45] overflow-hidden`}
      >
        {colors.slice(0, 3).map((c, i) => (
          <div
            key={i}
            style={{
              background: c,
              transitionDelay: open ? `${i * 150}ms` : `${(2 - i) * 150}ms`,
            }}
            className={`absolute inset-0 transition-transform duration-600 ease-out ${
              open ? "translate-x-0" : offClass
            }`}
          />
        ))}
      </div>

      {/* Menu Panel */}
      <aside
        id='menu-panel'
        className={`fixed top-0 bottom-0 h-full bg-white/95 backdrop-blur-md z-[50] p-6 md:p-24 w-full md:w-[clamp(260px,38vw,420px)] transition-transform duration-600 ease-out ${
          open ? "translate-x-0" : offClass
        } ${position === "left" ? "left-0" : "right-0"} ${
          scrolled ? "pt-16" : "pt-20"
        }`}
        style={{
          transitionDelay: open ? "450ms" : "0ms",
        }}
        aria-hidden={!open}
      >
        <nav className='flex flex-col h-full'>
          <ul className='flex-1 space-y-3'>
            {items.map((it, idx) => {
              const delay = `${450 + idx * 80}ms`;
              return (
                <li key={it.label} className='relative overflow-hidden'>
                  <a
                    href='#'
                    style={{ transitionDelay: open ? delay : "0ms" }}
                    className={`inline-block text-2xl md:text-4xl font-semibold uppercase transform transition-colors duration-150 ease-out text-black hover:text-[#0b3d91] cursor-pointer whitespace-normal break-words ${
                      open
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuClick(it.link);
                    }}
                  >
                    {it.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Socials */}
          <div className='mt-auto pt-6'>
            <h3 className='text-sm font-medium text-indigo-600 mb-3'>
              Socials
            </h3>
            <ul className='flex gap-4'>
              {socials.map((s, i) => (
                <li key={s.label}>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 text-black hover:text-[#0b3d91] cursor-pointer ${
                      open ? "opacity-100" : "opacity-0 translate-y-3"
                    }`}
                    style={{
                      transitionDelay: open ? `${600 + i * 60}ms` : "0ms",
                    }}
                  >
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  );
}
