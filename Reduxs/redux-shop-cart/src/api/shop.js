import _products from './products.json'

const TIMEOUT = 100

 const  getProducts = (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT)

 const  buyProducts = (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)

 export default {
     getProducts,
     buyProducts
 }
