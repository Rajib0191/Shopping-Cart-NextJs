import { useContext, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Single.module.css';
import { CartContext } from '../context/CartContext';

import { products } from "../assets/data";

export const getStaticPaths = async () => {
    const data = products;
    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        }
    })

    return {
        paths,
        fallback: true // false or 'blocking'
    };
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = products.find((item) => item.id === Number(id))
    return {
        props: {
            product: { ...data }
        }
    }
}

const SingleProductPage = ({ product }) => {

    const [value, setValue] = useState(1);
    const [plusDisable, setPlusDisable] = useState(false);
    const [minusDisable, setMinusDisable] = useState(false);
    const { dispatchCartAction } = useContext(CartContext);

    const handleMinus = () => {
        if (value === 0) {
            setMinusDisable(true)
        } else {
            setValue(value - 1)
            setPlusDisable(false)
        }
    }
    const handlePlus = () => {
        if (value === 10) {
            setPlusDisable(true)
        } else {
            setValue(value + 1)
            setMinusDisable(false)
        }
    }
    const handleAddToCart = () => {
        dispatchCartAction({ type: 'ADD_TO_CART_FROM_SINGLE_PAGE', payload: product, quantity: value })
    }

    return (
        <div className={styles.single_product_view_page}>
            <Container className={styles.single_product_container}>
                <Row>
                    <Col lg={4}>
                        <div className={styles.product_img_container}>
                            <Image src={product?.img.src} layout="fill" alt={product?.title} />
                            {/* <img src={product.img.src} alt={product.title} /> */}
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className={styles.product_details_container}>
                            <h2>{product?.title}</h2>
                            <span>Price: ${product?.price}</span>
                        </div>
                        {/*==================Buttons==================*/}
                        <div className={styles.product_details_quantity_container}>
                            <h6 className={styles.product_details_quantity}>Quantity</h6>
                            <div className={styles.product_details_quantity_button}>
                                <button className={styles.product_details_quantity_minus_button}
                                    onClick={handleMinus}
                                    disabled={minusDisable}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input type="text" className={styles.product_details_quantity_input_filed}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                                <button className={styles.product_details_quantity_plus_button}
                                    onClick={handlePlus}
                                    disabled={plusDisable}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                        </div>
                        {/*==============Buy and Cart Buttons========================*/}
                        <div className={styles.single_product_view_page_add_button}>
                            <Link href='/cart'>
                                <a className={styles.add_to_cart_buy_now_btn} onClick={handleAddToCart}>
                                    Buy Now
                                </a>
                            </Link>
                            <button className={styles.add_to_cart_btn} onClick={handleAddToCart}>
                                <span className={styles.pdp_button_text}>
                                    Add to Cart
                                </span>
                            </button>
                        </div>
                        {/*==============Share Buttons=======================*/}
                        <div className={styles.pd_share}>
                            <span>Share:</span>
                            <div className={styles.product_share}>
                                <Link href='/'>
                                    <a><FontAwesomeIcon icon={faFacebookF} /></a>
                                </Link>
                                <Link href="/">
                                    <a><FontAwesomeIcon icon={faTwitter} /></a>
                                </Link>
                                <Link href="/">
                                    <a><FontAwesomeIcon icon={faInstagram} /></a>
                                </Link>
                                <Link href="/">
                                    <a><FontAwesomeIcon icon={faGooglePlusG} /></a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default SingleProductPage;