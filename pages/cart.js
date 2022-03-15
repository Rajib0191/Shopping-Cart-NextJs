import Link from "next/link";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CartAction from "../component/cartComponent/CartAction";
import CartItem from "../component/cartComponent/CartItem";
import CartTotal from "../component/cartComponent/CartTotal";
import EmptyCart from "../component/cartComponent/EmptyCart";
import { CartContext } from "../context/CartContext";
import styles from '../styles/Cart.module.css';

const Cart = () => {

    const { cartState } = useContext(CartContext);
    // console.log(cartState)

    return (
        <section className={styles.cart_section}>
            <Container>
                {cartState.length === 0 ? (
                    <Row>
                        <EmptyCart />
                    </Row>
                ) : <Row>
                    <Col lg={8}>
                        <div className={styles.woocommerce_cart_form}>
                            <table className={styles.cart_table}>
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartState.map((item) => (
                                        <CartItem key={item.id} item={item} />
                                    ))}
                                    <CartAction />
                                </tbody>
                            </table>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <CartTotal />
                    </Col>
                </Row>
                }
            </Container>
        </section >
    );
};

export default Cart;