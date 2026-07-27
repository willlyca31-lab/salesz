
export async function getProducts(){

  const response = await fetch("data/products.json")
    .catch(async () => {
      const fallback = await fetch("../data/products.json");
      return fallback;
    });

  const products = await response.json();

  return products;
}
