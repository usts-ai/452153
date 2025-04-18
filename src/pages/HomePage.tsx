import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedProductsSection from '../components/home/FeaturedProductsSection';
import LensSelectionSection from '../components/home/LensSelectionSection';
import { motion } from 'framer-motion';
import { testimonials } from '../data/products';
import TestimonialCard from '../components/ui/TestimonialCard';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <LensSelectionSection />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
              Avis Clients
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ce que nos clients disent de nous
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences de nos clients satisfaits et comment nos produits ont amélioré leur vision au quotidien.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Prêt à améliorer votre vision ?
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-blue-100 mb-10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Rejoignez les milliers de clients satisfaits et découvrez notre collection exclusive de lunettes, lentilles et accessoires optiques.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              Découvrir nos produits
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Prendre rendez-vous
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default HomePage;
