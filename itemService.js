import axios from "axios";

var catalog = [
  {
    _id: "5f40a6baac77a903d8f682c6",
    price: 12.32,
    stock: 13,
    title: "Pride Flag",
    image: "img-1.png",
    discount: 5,
    category: "Flag",
  },
  {
    _id: "5f40a6ba41d9e5044ced586c",
    price: 22.71,
    stock: 21,
    title: "Rainbow Polo Shirt",
    image: "product-6.png",
    discount: 10,
    category: "Apparel",
  },
  {
    _id: "5f40a6baa9e6e22fa1d5fac4",
    price: 32.0,
    stock: 20,
    title: "Rainbow Love Tank Top",
    image: "img-14.png",
    discount: 0,
    category: "Apparel",
  },
  {
    _id: "5f40a6baf0f068a497921d29",
    price: 6.99,
    stock: 10,
    title: "Rainbow Pride Flag T-Shirt",
    image: "img-4.png",
    discount: 0,
    category: "Apparel",
  },
  {
    _id: "5f40a866337a3bb00793da52",
    price: 16.39,
    stock: 34,
    title: "White Love Wins Rainbow T-Shirt",
    image: "img-5.png",
    discount: 4,
    category: "Apparel",
  },
  {
    _id: "5f40a866ea0a04e6891b7084",
    price: 14.0,
    stock: 14,
    title: "Black Love Wins Rainbow T-shirt",
    image: "product-10.png",
    discount: 0,
    category: "Apparel",
  },
  {
    _id: "5f40a866ea0a04e6891212333",
    price: 12.0,
    stock: 11,
    title: "All For Love, Love For All White Tee",
    image: "img-15.png",
    discount: 12,
    minimum: 6,
    category: "Apparel",
  },
  {
    _id: "5f40a866ea0a04e68911231328",
    price: 19.1,
    stock: 11,
    title: "Dream Big Fight Hard Live Proud Tee",
    image: "product-15.png",
    discount: 12,
    category: "Apparel",
  }
];

class ItemService {
  
  async getCatalog() {

    //put the logic to call a server
    //and retrieve an array of products

    let response = await axios.getCatalog("http://127.0.0.1:5000/api/catalog");

    return response.data;

    //return mock data
    //return catalog;
  }

  async saveItem(item) {
    console.log("Todo: send object to server");

    await axios.post("http://127.0.0.1:5000/api/catalog", item);
  }

  getItemDetails(id) {}

  //create a method to validate coupon code on server

  // /api/couponCodes/123asdf1223

  async validateCouponCode(code) {
    let response = await axios.getCatalog("http://127.0.0.1:5000/api/couponCodes/" + code);
    return response.data;
  }

  


}

export default ItemService;