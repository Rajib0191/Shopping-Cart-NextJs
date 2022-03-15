import { useContext, useState } from 'react';
import Link from 'next/link';
import { faHeart, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartContext } from '../../context/CartContext';
import { FavouriteContext } from '../../context/FavouriteContext';
import styles from '../../styles/Products.module.css';

const SingleProduct = ({ product }) => {
    const [heartClick, setHeartClick] = useState(false)
    const { dispatchCartAction } = useContext(CartContext);
    const { dispatchFavouriteAction } = useContext(FavouriteContext);

    const handleFavouriteProduct = () => {
        dispatchFavouriteAction({ type: 'ADD_ITEM', payload: product });
        setHeartClick(true);
    }
    return (
        <div className={styles.home_page_categories_product_container}>
            <div className={styles.home_page_categories_product_img_container}>
                <Link href={`/${product.id}`}>
                    <a>
                        <img className={styles.home_page_categories_product_container_thumb} src={product.img.src} alt="ImgName" />
                    </a>
                </Link>
            </div>
            <div className={styles.home_page_categories_product_container_details}>
                <FontAwesomeIcon className={styles.fa_star} icon={faStar} />
                <FontAwesomeIcon className={styles.fa_star} icon={faStar} />
                <FontAwesomeIcon className={styles.fa_star} icon={faStar} />
                <FontAwesomeIcon className={styles.fa_star} icon={faStar} />
                <FontAwesomeIcon className={styles.fa_star} icon={faStar} />
                <h6>{product.title}</h6>
            </div>
            <div className={styles.home_page_categories_product_container_details_bottom_part}>
                <h6>${product.price}</h6>
                <div className={styles.home_page_categories_product_container_details_bottom_part_asset}>
                    <button className={styles.home_page_categories_product_container_details_bottom_part_asset_heart} onClick={handleFavouriteProduct} >
                        <FontAwesomeIcon className={heartClick ? styles.fa_heart_click : styles.fa_heart} icon={faHeart} />
                    </button>
                    <button onClick={() => dispatchCartAction({ type: 'ADD_TO_CART', payload: product })} className={styles.home_page_categories_product_container_details_bottom_part_asset_cart}>
                        <FontAwesomeIcon className={styles.fa_shopping_cart} icon={faShoppingCart} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;