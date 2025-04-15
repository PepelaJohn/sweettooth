'use client'

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-24 md:pt-32 pb-20 relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div 
        className="absolute top-20 right-10 w-24 h-24 rounded-full bg-pink-200 opacity-50 hidden md:block"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-yellow-200 opacity-50 hidden md:block"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Welcome to <span className="text-pink-500">Sweet Tooth KE!</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Where every day is the perfect time to indulge in something sweet.
            </motion.p>
            <motion.button
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-pink-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Order Now
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/images/desserts.jpg" 
                alt="Delicious desserts from Sweet Tooth KE" 
                className="rounded-3xl shadow-xl w-full"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg hidden md:block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="text-gray-700 font-medium">5.0 Rating</span>
                </div>
              </motion.div>
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-lg hidden md:block"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <div className="text-pink-500 font-bold">Fresh Daily</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
