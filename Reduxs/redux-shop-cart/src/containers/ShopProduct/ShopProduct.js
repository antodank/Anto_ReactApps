import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/actions/productAction"
import Item from "../../components/Item/Item";
import "./ShopProduct.scss";

export default function ShopProduct() {

    const dispatch = useDispatch();
    const productData = useSelector((state) => state.ProductReducer.products);
  
    useEffect(() => {
      dispatch(getAllProducts());
      // setPrice(3);
      // setTaste("Sweet");
    }, [dispatch]);

    return (
        <div>
            {productData
        .map((item) => {
          return <Item key={item.id} productDetails={item} button={true} />;
        })}
        </div>
    )
}
