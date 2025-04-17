import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.2, rotate: 5 },
  };

  // Footer columns data
  const footerColumns = [
    {
      title: "Nos Produits",
      links: [
        { label: "Lunettes de Vue", url: "#" },
        { label: "Lunettes de Soleil", url: "#" },
        { label: "Lentilles de Contact", url: "#" },
        { label: "Produits d'Entretien", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Test de Vue Gratuit", url: "#" },
        { label: "Ajustement de Montures", url: "#" },
        { label: "Garantie Satisfaction", url: "#" },
        { label: "Service Après-Vente", url: "#" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À Propos", url: "#" },
        { label: "Carrières", url: "#" },
        { label: "Nos Magasins", url: "#" },
        { label: "Blog", url: "#" },
      ],
    },
  ];

  // Social media icons
  const socialIcons = [
    { name: "Facebook", icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z", url: "#" },
    { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", url: "#" },
    { name: "Twitter", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", url: "#" },
    { name: "YouTube", icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z", url: "#" },
  ];

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h2 
              className="text-3xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              OptiVision
            </motion.h2>
            <p className="text-blue-200 max-w-xs">
              Notre mission est de vous offrir une vision parfaite avec style et confort. Solutions optiques innovantes depuis 2005.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="text-white">
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {footerColumns.map((column, colIndex) => (
            <motion.div key={colIndex} variants={itemVariants} className="space-y-4">
              <h3 className="text-lg font-semibold text-white/90">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                    <a href={link.url} className="text-blue-200 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          variants={itemVariants}
          className="mt-16 py-8 border-t border-blue-800/50 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Restez informé</h3>
            <p className="text-blue-200 text-sm mb-4">
              Inscrivez-vous à notre newsletter pour recevoir nos offres exclusives et conseils optiques.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-l-md flex-1 text-gray-800 focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md font-medium"
              >
                S'inscrire
              </motion.button>
            </div>
          </div>

          <div className="text-sm text-blue-200">
            © {currentYear} OptiVision. Tous droits réservés.
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
