import Link from 'next/link';
import styles from '../../styles/Cart.module.css';

const EmptyCart = () => {
    return (
        <div className={styles.empty_cart}>
            <h1 className={styles.cart_items_empty}>No Items Added</h1>
            <Link href='/'>
                <a className={styles.shop_button}>Shop Now</a>
            </Link>
        </div>
    );
};

export default EmptyCart;