// Now it would be quite common to load a separate details page for the different
// products. And ofcourse, that is what we have essentially on any online shop.
// WE have a list of products, we can click on a product to view the details of
// that product.
// Now in order to do so what we would typically have is a separate page,
// maybe called ProductDetail and there we might want to show the Product
// specific data.
function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </>
  );
}

export default ProductsPage;
