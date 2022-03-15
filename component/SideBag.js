import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const SideBag = () => {
    const { cartState } = useContext(CartContext);

    const totalPrice = cartState.reduce((price, item) => price + item.quantity * item.price, 0);
    return (
        <Link href='/cart'>
            <a className='sideBag_container'>
                <div className=''>
                    <div className='cart_amount'>
                        <label className='cart_currency'>
                            <span className='sp_currency'>$</span>
                            <span></span>
                        </label>
                        <label className='cart_amnt'>{totalPrice}</label>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default SideBag;