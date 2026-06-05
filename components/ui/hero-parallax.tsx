"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Image from "next/image";

export const HeroParallax = ({
  products,
  id,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  id?: string;
}) => {
  const total = products.length;
  const firstCount = Math.ceil(total / 3);
  const secondCount = Math.ceil((total - firstCount) / 2);

  const firstRow = products.slice(0, firstCount);
  const secondRow = products.slice(firstCount, firstCount + secondCount);
  const thirdRow = products.slice(firstCount + secondCount, total);

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      id={id}
      className="h-[300vh] bg-black z-0  py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        {firstRow.length > 0 && (
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product, i) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
                priority={i < 2}
              />
            ))}
          </motion.div>
        )}

        {secondRow.length > 0 && (
          <motion.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
        )}

        {thirdRow.length > 0 && (
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div id="hero" className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Ambyte Agency
        <br /> Empowering Your Digital Future
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        At Ambyte Agency, we merge creativity and technology to transform ideas
        into real digital experiences. Every byte we craft carries a touch of
        innovation and a spark of purpose.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  priority,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  priority?: boolean;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl relative h-full w-full">
        <Image
          src={product.thumbnail}
          fill
          sizes="(max-width: 768px) 100vw, 30rem"
          className="object-cover object-left-top"
          alt={product.title}
          priority={priority}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
