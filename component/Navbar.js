import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { FavouriteContext } from '../context/FavouriteContext';

const Navbar = () => {
    const { cartState } = useContext(CartContext);
    const { favouriteState } = useContext(FavouriteContext);
    // console.log(cartState, 'Navbar');
    return (
        <nav>
            <div className='logo'>
                <Link href='/'>
                    <h1 style={{ cursor: 'pointer' }}>Froots</h1>
                </Link>
            </div>
            <Link href='/'>
                <a className='home_nav_item'>Home</a>
            </Link>
            <Link href='/favourite'>
                <a>
                    <FontAwesomeIcon icon={faHeart} className="favourite_icon" />
                    <span className='cart_favourite_span'>{favouriteState.length}</span>
                </a>
            </Link>
            <Link href='/cart'>
                <a>
                    <FontAwesomeIcon icon={faShoppingBasket} className="cart_icon" />
                </a>
            </Link>
            <span className='cart_icon_span'>{cartState.length}</span>
        </nav>
    );
};

export default Navbar