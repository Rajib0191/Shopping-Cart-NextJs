import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from '../../styles/Cart.module.css';

const CartAction = () => {
    const { cartState, dispatchCartAction } = useContext(CartContext);

    return (
        <>
            <tr>
                <td colSpan="6" className={styles.actions}>
                    <div className={styles.coupon}>
                        <input type="text" name="coupon_code" placeholder="Coupon code" className={styles.coupon_code} />
                        <button type="submit" className={styles.apply_coupon_button} name="apply_name">Apply Coupopn</button>
                    </div>
                    <button type="submit" className={styles.clear_cart_btn} name="apply_name" onClick={() => dispatchCartAction({ type: 'CLEAR_CART' })}>
                        Clear All
                    </button>
                </td>
            </tr>
        </>
    );
};

export default CartAction;