export interface BubbleType {
  id: number;
  description: string;
  name: string;
  image: string;
  price: number;
}

export interface BundleType {
  id: number;
  items: number[];
  name: string;
}

