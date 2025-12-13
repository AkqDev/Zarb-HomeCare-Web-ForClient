// src/types.ts

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  variants: string[];
  reviews: number;
  rating: number;
  isNew?: boolean;
}

// Cart item extends Product with quantity and selected variant
export interface CartItem extends Product {
  quantity: number;
  selectedVariant: string;
}

// Function type for adding a product to cart
export type OnAddToCart = (product: Product, variant: string) => void;
    