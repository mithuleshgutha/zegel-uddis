import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Decorative Blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-butterscotch/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-strawberry/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, -45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-10 md:pt-0">
        <motion.span
          className="inline-block py-1 px-3 border border-chocolate/20 rounded-full text-chocolate/80 text-xs md:text-sm font-semibold tracking-wider mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          ZEGEL BY UDDIS
        </motion.span>
        
        <motion.h1
          className="text-5xl md:text-8xl font-serif font-black text-chocolate mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Wiggle. Jiggle. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-chocolate to-coffee">Melt.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          It stands tall on the spoon, but don't be fooled. 
          <span className="font-semibold text-chocolate"> Zegel </span> 
          is a milk-based marvel designed to vanish the second it hits your tongue. 
          The edible disappearing act you've been waiting for.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <a
            href="#chocolate"
            className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-cream bg-chocolate rounded-full shadow-xl hover:shadow-2xl hover:bg-coffee transition-all transform hover:-translate-y-1"
          >
            Experience the Melt
          </a>
        </motion.div>
      </div>

      {/* Zegel graphic placeholder animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-chocolate/30 rounded-full flex justify-center pt-2">
           <motion.div 
             className="w-1 h-2 bg-chocolate/30 rounded-full"
             animate={{ height: [8, 16, 8] }}
             transition={{ duration: 1.5, repeat: Infinity }}
           />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;