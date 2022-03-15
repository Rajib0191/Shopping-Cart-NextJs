import { Col, Container, Row } from 'react-bootstrap';
import { products } from '../assets/data';
import SingleProduct from './product/SingleProduct';
import styles from '../styles/Products.module.css';

const Product = () => {
    return (
        <section className={styles.home_page_categories_product_section}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={styles.home_page_categories_product_heading}>
                            <h1>Product</h1>
                            <p>we Support environmetal awarness. just business practices, and health, and our selection illustrate that.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {products.map((product) => (
                        <Col key={product.id} lg={3} md={6}>
                            <SingleProduct product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Product;