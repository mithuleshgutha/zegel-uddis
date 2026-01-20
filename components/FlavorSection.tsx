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
      {/* Decorative Text Background */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none select-none flex items-center justify-center"
        style={{ y: yBg }}
      >
        <span className="text-[25vw] md:text-[20vw] font-black font-serif uppercase whitespace-nowrap" style={{ color: flavor.textColor }}>
          {flavor.name.split(' ')[0]}
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isLeft ? '' : 'md:flex-row-reverse'}`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              style={{ scale: scaleImg }}
              className="relative w-full max-w-sm md:max-w-md aspect-square"
            >
              {/* Zegel "Plate" Shadow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-[100%] blur-xl" />
              
              {/* Image Container with Wobble Hover */}
              <motion.div
                whileHover={{ 
                    scale: 1.05, 
                    rotate: isLeft ? 5 : -5,
                    borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 10, borderRadius: { duration: 4, repeat: Infinity, repeatType: "mirror" } }}
                className="w-full h-full overflow-hidden rounded-[30px] shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <img 
                    src={flavor.imageUrl} 
                    alt={flavor.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block text-base md:text-lg font-bold tracking-widest uppercase mb-4"
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
              className="text-lg md:text-xl leading-relaxed opacity-90 px-4 md:px-0"
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