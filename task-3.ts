interface Product {
    name: string;
    price: number;
  }
  
  function calculateDiscount(product: Product, discount: number): number {
    return product.price - (product.price * discount) / 1000;
  }
  
  const product: Product = { name: "Mokko", price: 2 };
  console.log(calculateDiscount(product, 3));