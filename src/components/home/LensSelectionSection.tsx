import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';

const LensSelectionSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentStep, setCurrentStep] = useState(1);
  
  // Lens selection steps
  const steps = [
    { id: 1, label: "Type de verres", icon: "👓" },
    { id: 2, label: "Correction", icon: "🔍" },
    { id: 3, label: "Traitements", icon: "🔆" },
    { id: 4, label: "Finition", icon: "✨" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Function to handle step change
  const handleStepChange = (step: number) => {
    setCurrentStep(step);
  };

  // Step content based on current step
  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sélectionnez le type de verres</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 1, name: "Verres unifocaux", description: "Vision nette à une seule distance" },
                { id: 2, name: "Verres progressifs", description: "Vision nette à toutes les distances" },
                { id: 3, name: "Verres anti-lumière bleue", description: "Protection contre les écrans" },
                { id: 4, name: "Verres photochromiques", description: "S'adaptent à la luminosité" }
              ].map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors"
                  onClick={() => handleStepChange(2)}
                >
                  <h4 className="font-medium text-gray-800">{type.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Saisissez votre correction</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Œil droit (OD)</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Sphère</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="-2.00" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Cylindre</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="-0.50" />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Œil gauche (OG)</label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Sphère</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="-1.75" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Cylindre</label>
                    <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="-0.25" />
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 mt-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Écart pupillaire (mm)</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md" placeholder="63" />
              </div>
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => handleStepChange(1)}>Retour</Button>
              <Button onClick={() => handleStepChange(3)}>Continuer</Button>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Choisissez vos traitements</h3>
            
            <div className="space-y-4">
              {[
                { id: 1, name: "Anti-reflets", description: "Élimine les reflets et améliore le confort visuel", price: "+30€" },
                { id: 2, name: "Anti-rayures", description: "Augmente la durabilité de vos verres", price: "+20€" },
                { id: 3, name: "Anti-UV", description: "Protection contre les rayons ultraviolets", price: "+15€" },
                { id: 4, name: "Aminci", description: "Verres plus fins et plus légers", price: "+45€" }
              ].map((treatment) => (
                <motion.div
                  key={treatment.id}
                  whileHover={{ scale: 1.01 }}
                  className="p-4 border border-gray-200 rounded-lg flex justify-between items-center hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors"
                >
                  <div>
                    <h4 className="font-medium text-gray-800">{treatment.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{treatment.description}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-blue-600 mr-3">{treatment.price}</span>
                    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => handleStepChange(2)}>Retour</Button>
              <Button onClick={() => handleStepChange(4)}>Continuer</Button>
            </div>
          </motion.div>
        );
      
      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Choisissez votre finition</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 1, name: "Standard", description: "Finition classique et économique", price: "Inclus" },
                { id: 2, name: "Premium", description: "Meilleure qualité optique", price: "+50€" },
                { id: 3, name: "Teinte légère", description: "Légère coloration des verres", price: "+35€" },
                { id: 4, name: "Polarisant", description: "Élimine les reflets éblouissants", price: "+65€" }
              ].map((finish) => (
                <motion.div
                  key={finish.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-colors flex flex-col"
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800">{finish.name}</h4>
                    <span className="text-sm font-medium text-blue-600">{finish.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{finish.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-medium text-gray-800 mb-2">Récapitulatif</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Verres progressifs</span>
                  <span>158,00 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Anti-reflets</span>
                  <span>30,00 €</span>
                </li>
                <li className="flex justify-between">
                  <span>Anti-rayures</span>
                  <span>20,00 €</span>
                </li>
                <li className="flex justify-between font-medium text-gray-800 pt-2 border-t border-gray-300 mt-2">
                  <span>Total</span>
                  <span>208,00 €</span>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline" onClick={() => handleStepChange(3)}>Retour</Button>
              <Button>Valider ma sélection</Button>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
            Expérience Interactive
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tunnel de Sélection des Verres
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Personnalisez vos verres en quelques clics pour une vision parfaite adapté à vos besoins spécifiques.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Progress bar */}
          <div className="bg-gray-50 px-6 py-4 border-b">
            <div className="flex justify-between">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  className={`flex flex-col items-center ${step.id <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}
                  variants={itemVariants}
                  onClick={() => step.id < currentStep && handleStepChange(step.id)}
                  style={{ cursor: step.id < currentStep ? 'pointer' : 'default' }}
                >
                  <div 
                    className={`w-10 h-10 flex items-center justify-center rounded-full mb-1 text-lg
                    ${step.id < currentStep 
                      ? 'bg-blue-600 text-white' 
                      : step.id === currentStep 
                        ? 'bg-blue-100 text-blue-600 border-2 border-blue-600' 
                        : 'bg-gray-100 text-gray-400'}`}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium">{step.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-blue-600"
                initial={{ width: '0%' }}
                animate={{ width: `${(currentStep - 1) / (steps.length - 1) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          
          {/* Step content */}
          <div className="p-6">{renderStepContent()}</div>
        </motion.div>
      </div>
    </section>
  );
};

export default LensSelectionSection;
