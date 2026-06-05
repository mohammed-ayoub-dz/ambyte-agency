"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Backlight } from "../ui/backlight";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WebExpo() {
  const t = useTranslations("WebExpo");

  const images = [
    {
      id: 1,
      src: "https://ambyte-agency.com/assets/webexpo4-DOcd8IPm.jpg",
      alt: "Web Expo 2026 - Booth setup",
    },
    {
      id: 2,
      src: "https://ambyte-agency.com/assets/webexpo6-BHYIRMpE.jpg",
      alt: "Web Expo 2026 - Team presenting",
    },
    {
      id: 3,
      src: "https://ambyte-agency.com/assets/webexpo7-UOoVTpqh.jpg",
      alt: "Web Expo 2026 - Visitor interaction",
    },
    {
      id: 4,
      src: "https://ambyte-agency.com/assets/webexpo8-DLNrcOei.jpg",
      alt: "Web Expo 2026 - Keynote stage",
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    setIsDialogOpen(true);
    setDirection("next");
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedImageIndex(null);
  };

  const goPrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setDirection("prev");
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setDirection("next");
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const slideVariants = {
    enter: (direction: "next" | "prev") => ({
      x: direction === "next" ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="projects" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t("title")}
          </h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            {t("description")}
          </p>
          <div className="mt-4 h-1 w-20 mx-auto bg-gradient-to-r from-primary to-purple-500 rounded-full" />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {images.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => openImage(idx)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/20 border border-white/5 bg-secondary/10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              <Image
                alt={image.alt}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                src={image.src}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="p-3.5 bg-primary/20 text-primary border border-primary/30 rounded-full scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-xl text-white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
                  </svg>
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex flex-col">
                <span className="text-xs text-primary font-black uppercase tracking-wider">
                  {t("label")}
                </span>
                <span className="text-white/60 text-[10px]">
                  {t("photoCount", { count: idx + 1, total: images.length })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-full p-0 bg-black/95 border-white/20 rounded-2xl overflow-hidden">
          <div className="relative flex items-center justify-center w-full h-full">
            {selectedImageIndex !== null && selectedImageIndex > 0 && (
              <button
                onClick={goPrev}
                aria-label="Previous image"
                className="absolute left-4 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            {selectedImageIndex !== null && selectedImageIndex < images.length - 1 && (
              <button
                onClick={goNext}
                aria-label="Next image"
                className="absolute right-4 z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}

            <div className="flex items-center justify-center w-full h-full p-8 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                {currentImage && (
                  <motion.div
                    key={currentImage.src}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex items-center justify-center max-w-full max-h-full"
                  >
                    <Backlight blur={30} className="rounded-xl">
                      <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                        width={1200}
                        height={900}
                        style={{ width: "auto", height: "auto" }}
                      />
                    </Backlight>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
