class ProductManager {
  id;
  products;

  constructor() {
    this.id = 1;
    this.products = [];
  }

  addProduct({ title, description, price, img, code, stock }) {
    if (!title || !description || !price || !img || !code || !stock) {
      return "Todos los campos son obligatorios";
    }

    const existingProduct = this.getProductByCode(code);
    if (existingProduct) {
      return `El código ${code} ya existe`;
    }

    const newProduct = {
      id: this.id,
      title,
      description,
      price,
      img,
      code,
      stock,
    };
    this.products.push(newProduct);
    this.id++;
    return "El producto fue añadido correctamente";
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      return `El ID ${id} no existe`;
    }
    return product;
  }

  getProductByCode(code) {
    return this.products.find((product) => product.code === code);
  }
}

const item = {
  title: "Reloj Rolex",
  description:
    "Es un sensor digital de tiempo y calidad relativa de buena precisión",
  price: 3500,
  img: "Sin imagen",
  code: "5cde",
  stock: 34,
};

const product = new ProductManager();
console.log(product.getProducts());
console.log(product.addProduct(item));
console.log(product.getProducts());
console.log(product.addProduct(item));
console.log(product.getProductById(1));
console.log(product.getProductById(2));
