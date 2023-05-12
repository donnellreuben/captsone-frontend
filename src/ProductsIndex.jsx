export function ProductsIndex() {
  const products = [
    {
      name: "Product 1",
      description: "This is the first product",
      price: "$10.00",
      image_url: "<https://via.placeholder.com/150>",
    },
    {
      name: "Product 2",
      description: "This is the second product",
      price: "$20.00",
      image_url: "<https://via.placeholder.com/150>",
    },
    {
      name: "Product 3",
      description: "This is the third product",
      price: "$30.00",
      image_url: "<https://via.placeholder.com/150>",
    },
  ];

  return (
    <div id="products-index">
      <h1>All products</h1>
      {products.map((product) => (
        <div key={product.name}>
          <h2>{product.name}</h2>
          <img src={product.image_url} alt={product.name} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
