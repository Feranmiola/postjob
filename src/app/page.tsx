"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let scrollTimer = 0;

    function updateScrollbar() {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight =
        (window.innerHeight / document.documentElement.scrollHeight) *
        window.innerHeight;
      const scrollTop =
        scrollPercentage * (window.innerHeight - scrollbarHeight);

      document.body.style.setProperty("--scroll-top", `${scrollTop}px`);
      document.body.style.setProperty(
        "--scrollbar-height",
        `${scrollbarHeight}px`
      );

      document.body.classList.add("is-scrolling");

      clearTimeout(scrollTimer);
      // @ts-ignore
      scrollTimer = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 1000);
    }
    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    updateScrollbar();

    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);
  return (
    <div className="bg-[#161815] min-h-screen h-full w-screen">
      <div></div>
    </div>
  );
}
