import Modal from "../Fragments/Modal";
import CardProduct from "../Fragments/CardProduct";

const CompareLayouts = (props) => {
    const {products , compare, modal, handleCloseModal} = props
  return (
    <Modal isOpen={modal} onClose={() => handleCloseModal()}>
      {compare.map((item) => {
        const product = products.find((product) => product.id === item.id);
        return (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} height="h-72" />
            <div className="flex flex-col justify-between">
              <CardProduct.Body name={product.name} url={product.url} />
              <CardProduct.Footer
                id={product.id}
                url={product.url}
                price={product.price}
                marketplace={product.marketplace}
                rating={product.rating}
                sold={product.sold}
                location={product.location}
              />
            </div>
          </CardProduct>
        );
      })}
    </Modal>
  );
};

export default CompareLayouts;
