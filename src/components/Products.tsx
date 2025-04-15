'use client'

import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import ProductCarousel from './ProductsCarousel';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
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
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Product categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'cupcakes', name: 'Cupcakes' },
    { id: 'pastries', name: 'Pastries' },
    { id: 'cookies', name: 'Cookies' }
  ];

  // Featured products (simplified list)
  const featuredProducts = [
    {
      id: 1,
      name: 'Chocolate Fudge Cake',
      category: 'cakes',
      price: 'KSh 2,500',
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Red Velvet Cupcakes',
      category: 'cupcakes',
      price: 'KSh 1,200 per dozen',
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'New York Cheesecake',
      category: 'cakes',
      price: 'KSh 1,800',
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Vanilla Bean Cupcakes',
      category: 'cupcakes',
      price: 'KSh 1,200 per dozen',
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'Chocolate Chip Cookies',
      category: 'cookies',
      price: 'KSh 800 per dozen',
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'Apple Strudel',
      category: 'pastries',
      price: 'KSh 1,500',
      image: '/api/placeholder/300/300'
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Our <span className="text-pink-500">Sweet</span> Creations
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1 bg-pink-300 mx-auto mb-8"
            />
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              From mouthwatering cakes to delectable cupcakes, our handcrafted treats will satisfy your sweet cravings.
            </motion.p>
          </div>
          
          {/* Featured Product Carousel Section */}
          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Featured Products</h3>
            <ProductCarousel />
          </motion.div>
          
          {/* Category Filters */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-pink-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          {/* Product Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full font-medium hover:bg-pink-600 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
                  <p className="font-semibold text-pink-500">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-pink-600 transition-colors"
            >
              View Full Menu
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;