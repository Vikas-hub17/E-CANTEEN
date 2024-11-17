export interface MenuItem {
    id: number;
    name: string;
    price: number;
  }
  
  export interface Order {
    id: number;
    student: string;
    items: { name: string; quantity: number }[];
    status: 'Received' | 'Picked' | 'Prepared';
  }
  
  export const menuItems: MenuItem[] = [
    { id: 1, name: 'Burger', price: 100 },
    { id: 2, name: 'Pizza', price: 200 },
    { id: 3, name: 'Pasta', price: 150 },
  ];
  
  export const orders: Order[] = [
    {
      id: 1,
      student: 'John Doe',
      items: [{ name: 'Pizza', quantity: 1 }],
      status: 'Received',
    },
  ];
  