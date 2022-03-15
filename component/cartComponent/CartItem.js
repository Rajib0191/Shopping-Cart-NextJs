import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from '../../styles/Cart.module.css';


const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [plusButtonDisable, setPlusButtonDisable] = useState(false);
    const [minusButtonDisable, setMinusButtonDisable] = useState(false);
    const { dispatchCartAction } = useContext(CartContext);

    const quantityHandler = (e) => {
        setQuantity(parseInt(e.target.value));
        dispatchCartAction({ type: 'CART_UPDATE', payload: { id: item.id, quantity: quantity } })
    }
    const handleMinusClick = () => {
        setQuantity(quantity - 1);
        dispatchCartAction({ type: 'CART_UPDATE', payload: { id: item.id, quantity: quantity - 1 } })
        if (quantity <= 1) {
            setMinusButtonDisable(true)
        } else {
            setPlusButtonDisable(false)
        }
    }
    const handlePlusClick = () => {
        setQuantity(quantity + 1);
        dispatchCartAction({ type: 'CART_UPDATE', payload: { id: item.id, quantity: quantity + 1 } })
        if (quantity >= 9) {
            setPlusButtonDisable(true)
        } else {
            setMinusButtonDisable(false)
        }
    }
    return (
        <>
            <tr key={item.id} className={styles.cart_item}>
                <td className={styles.product_remove} onClick={() => dispatchCartAction({ type: 'REMOVE_FROM_CART', payload: { id: item.id } })}>
                    <FontAwesomeIcon icon={faTimes} />
                </td>
                <td className={styles.product_thumb_title}>
                    <span className={styles.pd_image}>
                        <img src={item.img.src} alt={item.img} />
                    </span>
                    <span className={styles.product_name}>
                        {item.title}
                    </span>
                </td>
                <td className={styles.product_unit_price}>
                    <div className={styles.price}>
                        <span>
                            ${item.price}
                        </span>
                    </div>
                </td>
                <td className={styles.product_quantity}>
                    <div className={styles.quantity}>
                        <button className={styles.qtyBtn_btnMinus} onClick={handleMinusClick} disabled={minusButtonDisable}>-</button>
                        <input type="text" name="qty" value={quantity} onChange={(e) => quantityHandler(e)} className={styles.input_text_qty_text_carqty} />
                        <button className={styles.qtyBtn_btnPlus} onClick={handlePlusClick} disabled={plusButtonDisable}>+</button>
                    </div>
                </td>
                <td className={styles.product_total}>
                    <div className={styles.price}>
                        <span>
                            ${item.price * quantity}
                        </span>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default CartItem;