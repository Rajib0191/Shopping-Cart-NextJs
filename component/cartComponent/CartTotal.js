import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from '../../styles/Cart.module.css';


const CartTotal = () => {
    const { cartState } = useContext(CartContext);

    const totalPrice = cartState.reduce((price, item) => price + item.quantity * item.price, 0);

    return (
        <div className={styles.cart_totals}>
            <h4>Cart Total</h4>
            <table className={styles.shop_table}>
                <tbody>
                    <tr className={styles.cart_subtotal}>
                        <th>Subtotal</th>
                        <td>
                            <span className="">
                                <span>$</span>
                                {totalPrice}
                            </span>
                        </td>
                    </tr>
                    <tr className={styles.shipping}>
                        <th>Shipping</th>
                        <td>
                            <p>Enter your address to view shipping options.Calculate shipping</p>
                        </td>
                    </tr>
                    <tr className={styles.order_total}>
                        <th>Total</th>
                        <td>
                            <span className="">
                                <span>$</span>
                                {totalPrice}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.process_to_checkout}>
                <Link href="/checkout">
                    <a className={styles.checkout_btn}>Proceed to checkout</a>
                </Link>
            </div>
        </div>
    );
};

export default CartTotal;