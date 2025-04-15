'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const products = [
    {
      id: 1,
      name: 'Chocolate Fudge Cake',
      description: 'Rich, moist chocolate cake layered with decadent fudge frosting',
      price: 'KSh 2,500',
      image: '/api/placeholder/400/300'
    },
    {
      id: 2,
      name: 'Red Velvet Cupcakes',
      description: 'Classic red velvet cupcakes topped with cream cheese frosting',
      price: 'KSh 1,200 per dozen',
      image: '/api/placeholder/400/300'
    },
    {
      id: 3,
      name: 'New York Cheesecake',
      description: 'Creamy no-bake cheesecake with our signature in-house cream cheese',
      price: 'KSh 1,800',
      image: '/api/placeholder/400/300'
    },
    {
      id: 4,
      name: 'Vanilla Bean Cupcakes',
      description: 'Light vanilla cupcakes with real vanilla bean buttercream',
      price: 'KSh 1,200 per dozen',
      image: '/api/placeholder/400/300'
    }
  ];

  const nextProduct = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProduct = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      nextProduct();
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Product Image and Info */}
      <div className="relative h-96">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="relative">
                <img
                  src={products[currentIndex].image}
                  alt={products[currentIndex].name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-pink-500 mb-2">
                    {products[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {products[currentIndex].description}
                  </p>
                  <p className="text-lg font-bold text-gray-800 mb-6">
                    {products[currentIndex].price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-pink-600 transition-colors"
                  >
                    Order Now
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevProduct}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-pink-500 hover:text-pink-600 focus:outline-none"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        onClick={nextProduct}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-pink-500 hover:text-pink-600 focus:outline-none"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-pink-500 w-6" : "bg-pink-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;