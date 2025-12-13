// Product type for all products
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  variants: string[];   // required (GOOD – fixes your Netlify error)
  reviews?: number;
  rating?: number;
  isNew?: boolean;
}

// CartItem extends Product with quantity and selectedVariant
export interface CartItem extends Product {
  quantity: number;
  selectedVariant: string;
}

// Function type for adding a product to cart
export type OnAddToCart = (product: Product, variant: string) => void;
