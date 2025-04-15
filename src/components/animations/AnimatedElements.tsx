// File: components/animations/CakeAnimations.tsx
import { motion, useAnimation, Variants } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Basic animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Cake-specific animations
export const drizzleIn: Variants = {
  hidden: { opacity: 0, y: -30, scaleY: 0 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scaleY: 1, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

export const slideFromPlate: Variants = {
  hidden: { opacity: 0, y: 100, rotate: -5 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    } 
  }
};

export const rotateIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    } 
  }
};

export const bounceIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 300,
      damping: 10
    } 
  }
};

export const berryDrop: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: (i: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: i * 0.1,
      type: "spring",
      stiffness: 200,
      damping: 10
    } 
  })
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Container for staggered item reveals
export const StaggerContainer = ({ 
  children, 
  className,
  delay = 0,
  staggerDelay = 0.1
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay
      }
    }
  };
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Chocolate drizzle effect
export const ChocolateDrizzle = ({ className }: { className?: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={drizzleIn}
      initial="hidden"
      animate={controls}
      className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brown-800 to-transparent ${className}`}
      style={{ 
        clipPath: "polygon(5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%)"
      }}
    />
  );
};

// Animated cake layers
export const CakeLayer = ({ 
  color, 
  height, 
  delay, 
  className 
}: { 
  color: string; 
  height: string; 
  delay: number;
  className?: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const layerVariant = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { 
        delay,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={layerVariant}
      initial="hidden"
      animate={controls}
      className={`${className} w-full origin-left`}
      style={{ height, backgroundColor: color }}
    />
  );
};

// Animated image reveal with hover effect
export const AnimatedCakeImage = ({ 
  src, 
  alt, 
  className,
  variants = scaleIn,
}: { 
  src: string; 
  alt: string; 
  className?: string;
  variants?: Variants;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`overflow-hidden rounded-lg ${className}`}
      whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out"
        whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
      />
    </motion.div>
  );
};

// Title with underline animation
export const AnimatedTitle = ({ 
  children,
  className
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { 
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
      <motion.div
        variants={underlineVariants}
        initial="hidden"
        animate={controls}
        className="absolute -bottom-2 left-0 right-0 h-1 bg-brown-800 origin-left"
        style={{ backgroundColor: '#482c21' }} // Explicitly setting your color
      />
    </div>
  );
};