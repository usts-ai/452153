import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { categories } from '../../data/products';
import CategoryCard from '../ui/CategoryCard';

const CategoriesSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Nos catégories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Explorez notre collection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection soigneusement choisie de lunettes, lentilles et produits d'entretien adaptés à tous vos besoins visuels.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            className="py-3 px-8 bg-transparent border-2 border-blue-500 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Voir toutes les catégories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
