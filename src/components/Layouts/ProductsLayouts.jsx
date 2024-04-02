"use client";

import { Spinner } from "flowbite-react";
import CardProduct from "../Fragments/CardProduct";

const ProductsLayouts = (props) => {
  const { products, handleAddToCompare } = props;

  if (products === null) {
    return (
      <div className="text-center  grow">
        <Spinner color="success" aria-label="Success spinner example" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center grow">
        Sorry, produk yang kamu cari gak ketemu :(
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:ml-4">
      {products.length > 0 &&
        products.map((product) => (
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
