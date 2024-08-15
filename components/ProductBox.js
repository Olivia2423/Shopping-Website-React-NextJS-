import Link from "next/link";
 import { cartListAtom } from '../store'; // used in /pages/products/[id].js

import { useAtom } from "jotai";



export default function ProductBox(props) {
  const { product } = props;
  const [cartList, setCartList] = useAtom(cartListAtom);

  //Add to cart
  function addToCart(product){
    console.log(product)
    const L = Array.isArray(cartList) ? cartList : [];
    setCartList([...L, product]);
  }

  return (
    <div style={{ margin: "30px", flexGrow: "1" }}>
      <div style={{ maxWidth: "300px" }}>
        <h3>{product.title}</h3>
        <img src={product.images[0]} style={{ maxWidth: "300px" }} /><br /><br />
        {product.description}<br /><br />
        <strong>${product.price.toFixed(2)}</strong><br /><br />
        <Link href={`/products/${product.id}`}><button>View Details</button></Link>&nbsp;&nbsp;<button onClick={e=>addToCart(product)}>Add to Cart</button>
      </div>
    </div>

  );

}