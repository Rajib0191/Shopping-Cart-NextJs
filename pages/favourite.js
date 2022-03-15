import { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import { Table } from 'react-bootstrap';
import styles from '../styles/Favourite.module.css';
import Empty from "../component/favourite/Empty";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Favourite = () => {
    const { dispatchCartAction } = useContext(CartContext);
    const { favouriteState, dispatchFavouriteAction } = useContext(FavouriteContext);
    console.log(favouriteState);

    const handleFavouriteProduct = (product) => {
        dispatchCartAction({ type: 'ADD_TO_CART', payload: product });
        dispatchFavouriteAction({ type: 'REMOVE_ITEM_FROM_FAVOURITE', payload: { id: product.id } });
    }
    const removeFavouriteItem = (product) => {
        dispatchFavouriteAction({ type: 'REMOVE_ITEM_FROM_FAVOURITE', payload: { id: product.id } });
    }
    return (
        <div className={styles.favoutite_section}>
            {favouriteState.length === 0 ? <Empty />
                :
                <Table className={styles.favourite_table} hover >
                    <thead className={styles.table_head}>
                        <tr className={styles.table_row}>
                            <th>
                                <span></span>
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className={styles.table_body}>
                        {favouriteState.map(item => {
                            return (
                                <tr key={item.id} className={styles.table_body_row}>
                                    <td>
                                        <FontAwesomeIcon className={styles.itemCrossBar} icon={faXmark} onClick={() => removeFavouriteItem(item)} />
                                    </td>
                                    <td className={styles.favourite_image}>
                                        <Image src={item.img.src} width={50} height={50} alt={item.title} />
                                        {/* <img src={item.img.src} alt={item.title} /> */}
                                    </td>
                                    <td>
                                        <p className={styles.title}>{item.title}</p>
                                    </td>
                                    <td>
                                        <p className={styles.price}>${item.price}</p>
                                    </td>
                                    <td>
                                        <button className={styles.favourite_btn} onClick={() => handleFavouriteProduct(item)}>Add to cart</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            }
        </div>
    );
};

export default Favourite;