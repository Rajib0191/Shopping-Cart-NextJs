import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'next/image';
import styles from '../styles/Discount.module.css';
import Img1 from '../assets/img/Home2/Add-left-pc.png';
import Img2 from '../assets/img/Home2/Add-right-pc.png';


const Discount = () => {
    return (
        <section className={styles.home_page_02_discount_section}>
            <Container>
                <Row>
                    <Col lg={3}>
                        <div className={styles.home_page_discount_left}>
                            <h2 className={styles.home_page_discount_left_heading}>
                                <span>50% off </span>
                                to winter collection
                            </h2>
                            <Link href="/">
                                <a className={styles.home_page_discount_left_button}>view more</a>
                            </Link>
                            <div className={styles.home_page_discount_left_img}>
                                <Image
                                    alt="Mountains"
                                    src={Img1}
                                    placeholder="blur"
                                // width={700}
                                // height={475}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.home_page_discount_mid_top}>
                            <h1 className={styles.home_page_discount_mid_heading}>
                                <span className={styles.discount_span}>25% off </span>
                                all winter organic fruit
                            </h1>
                        </div>
                        <div className={styles.home_page_discount_mid_bottom}>
                            <h1 className={styles.home_page_discount_mid_heading}>
                                <span className={styles.discount_span}>20% off </span>
                                all winter vegetable
                            </h1>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.home_page_discount_right}>
                            <h2 className={styles.home_page_discount_right_heading}>
                                <span>30% off </span>
                                to winter all fruit and vegetable collection
                            </h2>
                            <div className={styles.home_page_discount_right_img}>
                                <Image
                                    alt="Mountains"
                                    src={Img2}
                                    placeholder="blur"
                                // width={700}
                                // height={475}
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Discount;