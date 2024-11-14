
export interface Iecom {
    
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: Rating;
      }
      interface Rating {
        rate: number;
        count: number;
      
}


export interface Iphone{
  id: number;
    name: string;
    brand: string;
    price: number;
    image: string;
    isAvailable: boolean;
}
