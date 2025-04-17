import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const FeaturedProductsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  
  // Filter featured products
  const featuredProducts = products.filter(product => product.isFeatured);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background decorative elements */}
        <motion.div 
          className="absolute -left-32 -top-32 w-64 h-64 rounded-full bg-blue-100 opacity-30 blur-3xl"
          style={{ y }}
        />
        <motion.div 
          className="absolute -right-32 -bottom-32 w-64 h-64 rounded-full bg-indigo-100 opacity-30 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        />
        
        <motion.div
          className="text-center mb-16 relative z-10"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
            Produits Populaires
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre sélection tendance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez les modèles les plus prisés par nos clients, alliant style, confort et qualité visuelle.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center py-3 px-8 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            Voir tous les produits
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
