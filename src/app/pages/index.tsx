// pages/index.tsx
'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {  AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Products from '../../components/Products';
import Testimonials from '../../components/Testimonials';
import ProductsPreview from '../../components/ProductsPreview';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50">
      <Head>
        <title>Sweet Tooth KE | Delicious Desserts Made Fresh</title>
        <meta name="description" content="Sweet Tooth KE - Where every day is the perfect time to indulge in something sweet." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Products />
              <Testimonials />
              <ProductsPreview />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}