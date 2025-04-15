'use client'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Components with animations
const AnimatedSection = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })
  
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const heroControls = useAnimation()
  const collectionControls = useAnimation()
  const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true })
  const [collectionRef, collectionInView] = useInView({ threshold: 0.2, triggerOnce: true })
  
  useEffect(() => {
    if (heroInView) heroControls.start('visible')
    if (collectionInView) collectionControls.start('visible')
  }, [heroControls, heroInView, collectionControls, collectionInView])

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Sweet tooth ke - Sweet Chocolate Low Fat</title>
        <meta name="description" content="Premium cakes and pastries" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" />
      </Head>

      {/* Navigation */}
      <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold "
        >
          SWEET-TOOTH
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-8"
        >
          <a href="#" className="hover:text-pink-300 transition-colors">Home</a>
          <a href="#" className="hover:text-pink-300 transition-colors">Product</a>
          <a href="#" className="hover:text-pink-300 transition-colors">Gallery</a>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-md transition-colors"
        >
          Contact us
        </motion.button>
      </nav>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        variants={staggerContainer}
        initial="hidden"
        animate={heroControls}
        className="relative min-h-[100vh] flex items-center px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <motion.span variants={fadeIn} className="text-xl">01</motion.span>
              <motion.div variants={fadeIn} className="h-[1px] w-6 bg-white"></motion.div>
            </div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl font-bold leading-tight">
              Sweet chocolate<br /> 
              low fat <span className="text-pink-400">+</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-gray-400 max-w-md">
              Chocolate cake layer with vanilla, topped with thick chocolate and decorated with berries
            </motion.p>
            
            <motion.div variants={fadeIn} className="pt-6 flex gap-4">
              <img src="/images/google-play.png" alt="Google Play" width={120} height={40} className="h-15 w-auto" />
              <img src="/images/app-store.png" alt="App Store" width={120} height={40} className="h-15 w-auto" />
            </motion.div>
          </div>
          
          <motion.div
            variants={scaleIn}
            className="relative"
          >
            <Image 
              src="/images/chocolate-cake.png" 
              alt="Chocolate cake with raspberries" 
              width={600} 
              height={600}
              className=""
            />
            <motion.div 
              initial={{ opacity: 0, rotate: -5 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-black bg-opacity-70 rounded-full p-4 border border-gray-800"
            >
              <div className="text-xs text-center uppercase tracking-wider">
                <div>Sweet</div>
                <div>Low Fat</div>
                <div>Tasty</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Collection Section */}
      <section className="bg-[#482c21] bg-opacity-5 py-16 px-6">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gray-400 mb-2">Discovery the taste of</p>
          <h2 className="text-4xl md:text-5xl font-bold">Cake Collection</h2>
        </AnimatedSection>
        
        <motion.div 
          ref={collectionRef}
          variants={staggerContainer}
          initial="hidden"
          animate={collectionControls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {/* Cake 1 */}
          <motion.div variants={scaleIn} className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/images/raspberry-cake.jpg" 
                alt="Raspberry Cake" 
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium">Raspberry</h3>
            </div>
          </motion.div>
          
          {/* Cake 2 */}
          <motion.div variants={scaleIn} className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/images/berry-cream-cake.jpg" 
                alt="Berry Cream Cake" 
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium">Berry cream cake</h3>
            </div>
          </motion.div>
          
          {/* Cake 3 */}
          <motion.div variants={scaleIn} className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/images/chocolate-red.jpg" 
                alt="Chocolate Red" 
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium">Chocolate red</h3>
            </div>
          </motion.div>
          
          {/* Cake 4 */}
          <motion.div variants={scaleIn} className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <Image 
                src="/images/red-velvet.jpg" 
                alt="Red Velvet" 
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-medium">Red velvet</h3>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}