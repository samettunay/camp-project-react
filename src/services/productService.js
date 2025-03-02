import axios from "axios";

export default class ProductService {
    getProducts() {
        return axios.get("http://localhost:8080/api/products/getAll")
    }

    getProductByName(name) {
        return axios.get(`http://localhost:8080/api/products/getByProductName?productName=${name}`)
    }

    addProduct(product) {
        return axios.post("http://localhost:8080/api/products/add", product)
    }
}