export interface Product {
  id: number;
  name: string;
  category: 'lunettes' | 'lentilles' | 'entretien';
  subcategory?: string;
  price: number;
  image: string;
  description: string;
  isFeatured?: boolean;
  colors?: string[];
  rating?: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Lunettes de Vue Élégance Parisienne",
    category: "lunettes",
    subcategory: "vue",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Monture légère et élégante, parfaite pour un style professionnel et décontracté.",
    isFeatured: true,
    colors: ["noir", "écaille", "bordeaux"],
    rating: 4.8
  },
  {
    id: 2,
    name: "Lunettes de Soleil Riviera",
    category: "lunettes",
    subcategory: "soleil",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Protection UV complète avec un style contemporain pour les journées ensoleillées.",
    isFeatured: true,
    colors: ["noir mat", "bleu marine", "havane"],
    rating: 4.7
  },
  {
    id: 3,
    name: "Lentilles Journalières Confort+",
    category: "lentilles",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1616461046289-84a9106a1b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Lentilles respirantes pour un confort optimal tout au long de la journée.",
    isFeatured: false,
    rating: 4.5
  },
  {
    id: 4,
    name: "Solution Nettoyante Premium",
    category: "entretien",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Solution douce et efficace pour nettoyer vos lunettes et lentilles.",
    isFeatured: false,
    rating: 4.6
  },
  {
    id: 5,
    name: "Lunettes de Vue Tendance Urbaine",
    category: "lunettes",
    subcategory: "vue",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Design moderne avec monture légère pour un look urbain et contemporain.",
    isFeatured: true,
    colors: ["noir", "transparent", "rouge"],
    rating: 4.4
  },
  {
    id: 6,
    name: "Lunettes de Sport Performance",
    category: "lunettes",
    subcategory: "sport",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1604394882463-758ebce6c2cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Résistantes aux chocs et à la transpiration, idéales pour toutes vos activités sportives.",
    isFeatured: false,
    colors: ["noir/rouge", "bleu/gris", "vert/noir"],
    rating: 4.9
  }
];

export const categories = [
  {
    id: 1,
    name: "Lunettes de Vue",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Trouvez les lunettes parfaites pour votre style et votre vision"
  },
  {
    id: 2,
    name: "Lunettes de Soleil",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Protection et style pour vos journées ensoleillées"
  },
  {
    id: 3,
    name: "Lentilles",
    image: "https://images.unsplash.com/photo-1616461046289-84a9106a1b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Confort et liberté de mouvement sans compromis"
  },
  {
    id: 4,
    name: "Produits d'Entretien",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    description: "Prenez soin de vos lunettes et lentilles"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sophie Dubois",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    testimonial: "J'ai enfin trouvé des lunettes qui correspondent parfaitement à mon style et mes besoins. Le tunnel de sélection des verres a rendu le processus tellement simple !",
    rating: 5
  },
  {
    id: 2,
    name: "Thomas Martin",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    testimonial: "Service client exemplaire et livraison rapide. Je recommande vivement pour l'achat de lentilles de contact.",
    rating: 4
  },
  {
    id: 3,
    name: "Émilie Petit",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    testimonial: "Le choix de montures est impressionnant et les prix sont très compétitifs. Je suis ravie de mes nouvelles lunettes !",
    rating: 5
  }
];
