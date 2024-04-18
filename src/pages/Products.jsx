// Here we're using Link instead of NavLink because we don't wanna highlight
// those links as being active once they're clicked because we're actually
// leaving this page when clicking one of these links here anyways.
import { Link } from 'react-router-dom';

// In reality, we would probably fetch the product data from some backend,
// from some database.
// And therefore we might have our product as an array which we're getting from
// the backend.
// Here we're hardcoding it in this dummy products constant but this could be a
// data coming from a backend.
const PRODUCTS = [
  { id: 'p1', title: 'Product 1' },
  { id: 'p2', title: 'Product 2' },
  { id: 'p3', title: 'Product 3' },
];

// Now it would be quite common to load a separate details page for the different
// products. And ofcourse, that is what we have essentially on any online shop.
// WE have a list of products, we can click on a product to view the details of
// that product.
// Now in order to do so what we would typically have is a separate page,
// maybe called ProductDetail and there we might want to show the Product
// specific data.
function ProductsPage() {
  // Since we're getting data from backend in reality, so instead of hard coding
  // our list items like this, we might be creating that list dynamically by
  // mapping through all these products
  // So now the link should be constructed dynamically
  // So now we're generating multiple list items with different links which
  // have different paths
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
