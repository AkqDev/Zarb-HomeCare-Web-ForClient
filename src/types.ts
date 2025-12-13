// Product type for all products
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  variants: string[];
  reviews?: number;   // optional to fix TS type mismatch
  rating?: number;    // optional to fix TS type mismatch
  isNew?: boolean;
}

// CartItem extends Product with quantity and selectedVariant
export interface CartItem extends Product {
  quantity: number;
  selectedVariant: string;
}

// Function type for adding a product to cart
export type OnAddToCart = (product: Product, variant: string) => void;
