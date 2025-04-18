import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ['0px 0px 0px rgba(0, 0, 0, 0)', '0px 4px 20px rgba(0, 0, 0, 0.1)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['#ffffff', '#333333']
  );

  // Animation variants
  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Mobile menu variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Menu items for desktop and mobile
  const menuItems = [
    { id: 1, label: "Lunettes de Vue", href: "#" },
    { id: 2, label: "Lunettes de Soleil", href: "#" },
    { id: 3, label: "Lentilles", href: "#" },
    { id: 4, label: "Produits d'Entretien", href: "#" },
    { id: 5, label: "Nos Magasins", href: "#" },
    { id: 6, label: "À Propos", href: "#" },
  ];

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
      }}
      className="px-6 py-4 backdrop-blur-sm transition-all duration-300"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <motion.span
              style={{ color: textColor }}
              className="text-2xl font-bold tracking-tight"
            >
              OptiVision
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.href}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                style={{ color: textColor }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
                }}
                className="font-medium text-sm relative"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
              }}
              style={{ backgroundColor: textColor }}
              className="block w-6 h-0.5 mb-1.5"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              style={{ backgroundColor: textColor }}
              className="block w-6 h-0.5 mb-1.5"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              style={{ backgroundColor: textColor }}
              className="block w-6 h-0.5"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <motion.div className="mt-4 pb-4 space-y-3 flex flex-col">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.href}
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  },
                  closed: { opacity: 0, y: 20 },
                }}
                style={{ color: textColor }}
                whileHover={{ x: 10 }}
                className="text-base font-medium py-2"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
