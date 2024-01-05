import MainNav from "../navigation/MainNav";

import './AddProduct.css';

const AddProduct = function AddProduct() {
  return (
    <>
      <MainNav />
      <main>
        <form className="product-form" action="/admin/add-product" method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" />
          </div>

            <button type="submit">Add Product</button>
        </form>
      </main>
    </>
  );
}

export default AddProduct;
