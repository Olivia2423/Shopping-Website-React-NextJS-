import { useAtom } from 'jotai';
import { cartListAtom } from '../store'; 

export default function Cart() {
  const [cartList, setCartList] = useAtom(cartListAtom);

  const removeProduct = (index) => {
    setCartList(cartList.filter((_, i) => i !== index));
  };

  return (
    <>
      <br />
      <ul>
        {cartList.map((product, index) => (
          <li key={index}>
            <img src={product.images[0]} style={{ maxWidth: "150px" }} /><br /><br />

            <strong>{product.title}</strong>: {product.description}<br />
            <strong>${product.price.toFixed(2)}</strong>
            <button onClick={() => removeProduct(index)}>Remove</button>
            <br /><br />
          </li>
        ))}
      </ul>
      <hr />
      <ul><li><strong>Total: ${cartList.reduce((total, prod) => total + prod.price, 0).toFixed(2)}</strong></li></ul>
    </>
  );
}
