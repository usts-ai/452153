import React from 'react';
import { motion } from 'framer-motion';

interface CategoryProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CategoryCardProps {
  category: CategoryProps;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, index }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1
      }}
    >
      <div className="aspect-w-16 aspect-h-9 h-64 overflow-hidden">
        <motion.img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
          whileHover={{ scale: 1.1 }}
        />
      </div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.h3 
          className="text-white text-xl font-bold mb-2"
          initial={{ y: 20, opacity: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          {category.name}
        </motion.h3>
        
        <motion.p 
          className="text-gray-200 text-sm mb-4 opacity-80"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 0.9 }}
          transition={{ delay: 0.2 }}
        >
          {category.description}
        </motion.p>
        
        <motion.button
          className="bg-white/20 backdrop-blur-sm text-white border border-white/30 py-2 px-4 rounded-lg text-sm font-medium w-max"
          whileHover={{ 
            scale: 1.05, 
            backgroundColor: "rgba(255, 255, 255, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Découvrir
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default CategoryCard;
