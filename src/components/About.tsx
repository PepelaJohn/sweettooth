'use client'

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            About <span className="text-pink-500">Sweet Tooth KE</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="w-24 h-1 bg-pink-300 mx-auto mb-8"></motion.div>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6">
            Sweet Tooth KE specializes in creating delectable desserts that bring joy to every occasion. Our passion for baking shines through in every creation, from our irresistible cakes to our delightful cupcakes and creamy no-bake cheesecakes.
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8">
            What sets us apart is our commitment to quality. We use only the finest ingredients, including our signature in-house cream cheese, to ensure that every bite is nothing short of extraordinary. Each dessert is made fresh to order, guaranteeing that you receive the most delicious treats for your special moments.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <FeatureCard icon="🍰" title="Made Fresh">
              All our desserts are made fresh to order
            </FeatureCard>
            <FeatureCard icon="🧀" title="Premium Ingredients">
              We use our special in-house cream cheese
            </FeatureCard>
            <FeatureCard icon="💝" title="Made with Love">
              Every dessert is crafted with passion and care
            </FeatureCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => (
  <div className="bg-pink-50 p-6 rounded-2xl shadow-md flex flex-col items-center text-center w-full md:w-64">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-bold text-gray-800 text-lg mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default About;
