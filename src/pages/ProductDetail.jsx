import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  // useParams hook gives us a params object if we call it like this
  // and this `params` object is a simple javascript object which contains
  // every dynamic path segment we defined in our route definition as a
  // property.
  // :productId
  // so after the colon is the identifier name which we can use as a property name
  // on that params object here
  // So that's how we can get hold of data that's encoded in the url!
  // And typically we encode things like ids of items or products in the URL
  // because then here in product detail, we could reach out to backend and
  // fetch the data for this product
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
