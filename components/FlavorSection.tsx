import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Flavor } from '../types';

interface FlavorSectionProps {
  flavor: Flavor;
}

const FlavorSection: React.FC<FlavorSectionProps> = ({ flavor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const isLeft = flavor.direction === 'left';

  return (
    <section
      id={flavor.id}
      ref={ref}
      className="relative min-h-screen py-20 md:py-24 flex items-center overflow-hidden scroll-mt-20 md:scroll-mt-24"
      style={{ backgroundColor: flavor.colorHex }}
    >
      {/* Decorative watermark text in background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none select-none flex items-center justify-center"
        style={{ y: yBg }}
      >
        <span
          className="text-[25vw] md:text-[20vw] font-black font-serif uppercase whitespace-nowrap"
          style={{ color: flavor.textColor }}
        >
          {flavor.name.split(' ')[0]}
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${isLeft ? '' : 'md:flex-row-reverse'}`}>

          {/* ── IMAGE SIDE ──────────────────────────────────────────────────
              CHECKERBOARD / FAKE-TRANSPARENCY KNOCKOUT TRICK:
              The product image has a white or light-gray checkerboard
              baked into its background (fake alpha channel from a PNG
              exported without true transparency).

              Fix — two layers working together:
              1. filter: brightness(1.25) contrast(1.08)
                 Pushes the light-gray grid squares toward pure white
                 before blending, so the knockout is complete.
              2. mix-blend-mode: multiply
                 White (255,255,255) × any color = that color (invisible).
                 Near-white × section bg ≈ section bg (invisible).
                 Dark product pixels × section bg = rich dark tones (kept).

              The section's solid backgroundColor is the blend target —
              do NOT put any background on the image wrapper or it
              will block the section color from showing through.
          ────────────────────────────────────────────────────────────── */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <motion.div
              style={{ scale: scaleImg }}
              className="relative w-full max-w-md md:max-w-lg"
            >
              <motion.div
                whileHover={{ scale: 1.04, rotate: isLeft ? 3 : -3 }}
                transition={{ type: 'spring', stiffness: 260, damping: 12 }}
                style={{
                  /*
                   * Radial mask: image is fully opaque in the centre and
                   * fades to transparent at the edges, so the product
                   * appears to float on the section colour with no hard
                   * rectangular crop.
                   */
                  maskImage: 'radial-gradient(ellipse 88% 88% at 50% 52%, black 40%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 88% 88% at 50% 52%, black 40%, transparent 100%)',
                }}
              >
                <img
                  src={flavor.imageUrl}
                  alt={flavor.name}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ── TEXT SIDE ─────────────────────────────────────────────────── */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: flavor.textColor }}
            >
              {flavor.tagline}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif font-black mb-6 md:mb-8 leading-tight"
              style={{ color: flavor.textColor }}
            >
              {flavor.name}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed opacity-90 px-4 md:px-0 max-w-md"
              style={{ color: flavor.textColor }}
            >
              {flavor.description}
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
