'use client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// import { scaleIn } from '@/components/animations/AnimatedElements'
import { Menu, X } from 'lucide-react'
import ContactUs from '@/components/NewContact'

// Define types for our products
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Sample product data
const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Chocolate Cake',
    price: 2500,
    image: '/images/chocolate-cake.jpg'
  },
  {
    id: 2,
    name: 'Chocolate Red cake',
    price: 3000,
    image: '/images/chocolate-red.jpg'
  },
  {
    id: 3,
    name: 'Dessert',
    price: 3500,
    image: '/images/desserts.jpg'
  }
];


const Home: NextPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ firstName, lastName, email, message });
    // Reset form
    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='relative'>
      <Head>
        <title>Sweet Tooth KE</title>
        <meta name="description" content="Sweet Tooth KE - Delicious Desserts For Every Occasion" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Header/Navigation */}
      <motion.header 
        className={`py-4 px-6 md:px-10 flex justify-between fixed top-0 left-0 right-0 h-[80px] z-40 text-white items-center transition-colors duration-300 ease-in-out ${scrolled ? 'bg-black/30 backdrop-blur-3xl' : ''}`}
        initial={false}
        animate={{ backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0)' }}
      >
        <div className="logo">
          <a href="/" className="text-xl font-light">sweetooth</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav      className={`hidden md:flex space-x-6  ${scrolled ? 'bg-transparent   ' : ' bg-black/30 backdrop-blur-3xl '}  text-white p-4 rounded-full`}>
          <a href="/shop" className="text-sm hover:underline">Shop</a>
          <a href="/services" className="text-sm hover:underline">Services</a>
          <a href="/about" className="text-sm hover:underline">About</a>
          <a href="/contact" className="text-sm hover:underline">Contact</a>
          <a href="/cart" className="text-sm hover:underline">Cart</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center space-y-8">
                <a 
                  href="/shop" 
                  className="text-xl text-white hover:text-pink-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Shop
                </a>
                <a 
                  href="/services" 
                  className="text-xl text-white hover:text-pink-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="/about" 
                  className="text-xl text-white hover:text-pink-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/contact" 
                  className="text-xl text-white hover:text-pink-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <a 
                  href="/cart" 
                  className="text-xl text-white hover:text-pink-400 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cart
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-2"></div>
        <motion.div
          initial={{ opacity: 0, rotate: -1 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/images/output.jpg" 
            className='w-full h-full object-cover'
            alt="Dark minimalist scene with black pyramid" 
          />
        </motion.div>
        <div className="relative z-10 text-center px-6">
          <motion.div 
            className="mb-10 md:mb-0 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Welcome to <span className="text-pink-500">Sweet Tooth KE!</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Where every day is the perfect time to indulge in something sweet.
            </motion.p>
            <motion.button
              className="bg-pink-500 text-white px-8 py-3 cursor-pointer rounded-full text-lg font-medium shadow-lg hover:bg-pink-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Order Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-0">Featured Products</h2>
          <a href="/shop" className="border border-gray-300 rounded-full px-6 py-2 text-sm hover:bg-gray-100 transition">
            Shop all
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="product group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="aspect-square mb-4 bg-gray-100 relative overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-light">{product.name}</h3>
              <p className="text-sm text-gray-600">KES {product.price.toLocaleString()}/=</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Brand */}
      <section className="py-20 px-6 md:px-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="pr-0 md:pr-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-light mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              More about 
              <span className="text-pink-500"> sweettooth</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Sweet Tooth KE specializes in creating delectable desserts that bring joy to every occasion. Our passion for baking shines through in every creation, from our irresistible cakes to our delightful cupcakes and creamy no-bake cheesecakes.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              What sets us apart is our commitment to quality. We use only the finest ingredients, including our signature in-house cream cheese, to ensure that every bite is nothing short of extraordinary. Each dessert is made fresh to order, guaranteeing that you receive the most delicious treats for your special moments.
            </motion.p>
            
            <motion.a 
              href="/about" 
              className="inline-block bg-black text-white px-8 py-3 mt-6 hover:bg-gray-800 transition rounded-md"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Learn more
            </motion.a>
          </div>
          
          <motion.div 
            className="relative h-full "
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/images/red-velvet.jpg" 
              alt="Brand showcase" 
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
      </section>

  
      {/* Social Media */}
      <section className="py-20 px-6 md:px-10 text-center bg-white">
        <motion.h2 
          className="text-2xl md:text-3xl font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Follow us on social
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.div 
            className="aspect-square relative bg-gray-100 overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/images/chocolate-red.jpg" 
              alt="Social media post" 
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          
          <motion.div 
            className="aspect-square relative bg-gray-100 overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/images/desserts.jpg" 
              alt="Social media post" 
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          
          <motion.div 
            className="aspect-square relative bg-gray-100 overflow-hidden rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/images/berry-cream-cake.jpg" 
              alt="Social media post" 
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </div>
        
        <motion.a 
          href="https://www.instagram.com/sweettooth_ke/" 
          target='_blank'
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 mt-10 hover:from-pink-600 hover:to-purple-600 transition rounded-full shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Follow on Instagram
        </motion.a>
      </section>

     <ContactUs></ContactUs>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-light mb-6">Sweet Tooth KE</h3>
            <p className="text-sm text-gray-400 mb-6">
              Bringing sweetness to every occasion with our handcrafted desserts.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sweett00thke/" target="_blank" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                {/* Facebook icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sweettooth_ke/"  target='_blank' className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                {/* Instagram icon */}
               
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                
              </a>
              <a href="https://x.com/sweettooth_ke" target='blank' className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                {/* Twitter icon */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/shop" className="text-gray-400 hover:text-white transition">Shop</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Location</h4>
            <address className="text-gray-400 not-italic">
            Wanyee Rd<br />
              Nairobi, Kenya
            </address>
            <p className="text-gray-400 mt-4">
              <a href="https://www.google.com/maps?ll=-1.298544,36.752218&z=11&t=m&hl=en&gl=KE&mapclient=embed&cid=8801572761691225249" target='_blank'  className="hover:text-white transition">Get Directions</a>
            </p>
            </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <p className="text-gray-400">
              <a href="mailto:hello@sweettoothke.com" className="hover:text-white transition">hello@sweettoothke.com</a><br />
              <a href="tel:+254123456789" className="hover:text-white transition">+254 123 456 789</a>
            </p>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-pink-500 rounded-l-md"
                />
                <button 
                  type="submit"
                  className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sweet Tooth KE. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy" className="hover:text-white transition mx-2">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home