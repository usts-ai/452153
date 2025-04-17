import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="absolute top-0 right-0 m-3 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-blue-800"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {product.category === 'lunettes' ? product.subcategory : product.category}
        </motion.div>
        <div className="h-64 overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform"
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800 line-clamp-2">{product.name}</h3>
          <motion.span 
            className="text-lg font-semibold text-blue-600"
            whileHover={{ scale: 1.1 }}
          >
            {product.price.toFixed(2)} €
          </motion.span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {product.colors && (
          <div className="flex space-x-2 mb-4">
            {product.colors.map((color, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600"
                whileHover={{ backgroundColor: "#EEF2FF", color: "#4F46E5" }}
              >
                {color}
              </motion.span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 0)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-gray-500">
              {product.rating?.toFixed(1)}
            </span>
          </div>
          
          <motion.button
            className="bg-blue-600 text-white py-1.5 px-4 rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.05, backgroundColor: "#4338CA" }}
            whileTap={{ scale: 0.95 }}
          >
            Voir détails
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
