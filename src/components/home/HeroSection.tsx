import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
    
    // GSAP animation for the glasses elements
    const timeline = gsap.timeline();
    timeline.fromTo(".glasses-element", 
      { y: 100, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out"
      }
    );
    
    timeline.fromTo(".glasses-shine",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.2
      }
    );
    
    // Subtle floating animation for decorative elements
    gsap.to(".floating-element", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(4, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    });
    
  }, [controls]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative h-screen overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900"
    >
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div 
            key={i}
            className="floating-element absolute rounded-full bg-white/5 backdrop-blur-md"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/80 z-10" />
      
      {/* Hero content */}
      <div className="relative h-full flex items-center z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="text-white"
            >
              <motion.span 
                className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-blue-200 text-sm font-medium mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                La vision parfaite à portée de clic
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Votre regard mérite <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-indigo-300">
                  le meilleur de l'optique
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-blue-100 text-lg mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Découvrez notre sélection exclusive de lunettes, lentilles et accessoires, accompagnée d'un service personnalisé pour sublimer votre vision.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Button size="lg">Découvrir nos lunettes</Button>
                <Button size="lg" variant="outline">Tunnel de verres</Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative hidden md:block"
              style={{ y, opacity }}
            >
              {/* Main glasses image */}
              <motion.div 
                className="glasses-element absolute top-0 left-0 w-full h-full"
                initial={{ opacity: 0, rotateY: -20 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                  alt="Lunettes élégantes" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Shine effect */}
                <div className="glasses-shine absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/30 blur-2xl rounded-full"></div>
              </motion.div>
              
              {/* Decorative floating glasses */}
              <motion.div 
                className="glasses-element absolute -bottom-20 -right-20 w-48 h-48"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 0.8, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1629365258622-d2adb9a69c5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                  alt="Lunettes de soleil" 
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </motion.div>
              
              <motion.div 
                className="glasses-element absolute -top-10 -left-10 w-36 h-36"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1546914782-96b636ea44e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
                  alt="Lentilles de contact" 
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 2
        }}
      >
        <svg 
          className="w-6 h-12 text-white/70" 
          viewBox="0 0 24 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="0" width="8" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle className="animate-ping" cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M12 32 L5 39 L12 46 L19 39 L12 32" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSection;
