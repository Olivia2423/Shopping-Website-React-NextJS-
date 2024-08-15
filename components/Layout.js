import Link from 'next/link';

import { useAtom } from 'jotai';

import { cartListAtom } from '../store';

import styles from '../styles/Home.module.css';


export default function Layout(props) {
  const [cartList, setCartList] = useAtom(cartListAtom);

  return (
    <div className={styles.layoutContainer}>
      <h2>Online Shopping</h2>
      <nav>
        <Link href="/"><a>Home</a></Link> | 
        <Link href="/products"><a>Products</a></Link> | 
        <Link href="/cart"><a>Shopping Cart <span>({cartList.length})</span></a></Link>
      </nav>
      <hr />
      {props.children}
    </div>
  );
}
