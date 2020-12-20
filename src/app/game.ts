export interface Game {
    title: string;
    cover: string;
    price: number;
    owned?: boolean;
    inCart?: boolean;
    discount?: number;
  }