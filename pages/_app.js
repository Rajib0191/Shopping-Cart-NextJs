import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../component/Layout'
import CartProvider from '../context/CartContext';
import FavouriteProvider from '../context/FavouriteContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <FavouriteProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FavouriteProvider>
      </CartProvider>
    </>
  )

}

export default MyApp
