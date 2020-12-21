export interface Game {
  id: string;
  title: string;
  cover: string;
  price: number;
  owned?: boolean;
  inCart?: boolean;
  discount?: number;
}