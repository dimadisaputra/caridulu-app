import CardProduct from "../Fragments/CardProduct";

const ProductsLayouts = (props) => {
  const { products, handleAddToCompare } = props;
  return (
    <div className="w-9/12 grid grid-cols-5 gap-4 ml-4">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <div className="flex flex-col justify-between">
            <CardProduct.Body name={product.name} url={product.url} />
            <CardProduct.Footer
              handleAddToCompare={handleAddToCompare}
              showButton={true}
              id={product.id}
              price={product.price}
              marketplace={product.marketplace}
              rating={product.rating}
              sold={product.sold}
              location={product.location}
            />
          </div>
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsLayouts;
