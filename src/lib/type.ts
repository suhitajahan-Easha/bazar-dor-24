export interface Market {
  market: string,
 division: string,  
  min: number;
  max: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  markets: Market[];
  icon:string
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon:string,
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
 

}
   