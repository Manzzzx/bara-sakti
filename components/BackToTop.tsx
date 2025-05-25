"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { useNavStore } from "@/lib/store";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobileNavOpen = useNavStore((state: { isMobileNavOpen: boolean }) => state.isMobileNavOpen);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && !isMobileNavOpen && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-500 hover:bg-orange-600 text-white border-none"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </>
  );
};

export default BackToTop; 