'use client'

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ProductsPreview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const images = [
    "/api/placeholder/200/200",
    "/api/placeholder/200/200",
    "/api/placeholder/200/200",
    "/api/placeholder/200/200"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Explore Our <span className="text-pink-500">Full Collection</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-pink-300 mx-auto mb-8"
          />
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-12"
          >
            We have many more delicious treats waiting for you to discover.
            From birthday cakes to seasonal specials, there's something for every sweet tooth!
          </motion.p>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-md"
              >
                <img 
                  src={image} 
                  alt={`Product ${index + 1}`} 
                  className="w-full h-40 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-pink-600 transition-colors"
            >
              View All Products
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsPreview;