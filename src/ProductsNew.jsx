export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New product</h1>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" />
        </div>
        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input type="text" id="image_url" name="image_url" />
        </div>
        <button type="submit">Create product</button>
      </form>
    </div>
  );
}
