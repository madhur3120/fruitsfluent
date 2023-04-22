import Product from '../Home/Product'
import Footer from '../layout/Footer/Footer';
import Productsub from './productsub'
import Notecontext from '../context/notecontext';
import { useContext ,useState , useEffect} from 'react';

const Products = () => {

    let a = useContext(Notecontext)
    return (
        <>
            <h1 className='homeHeading'>Products Page </h1>
            <div className='container' id='container'>
            <Productsub></Productsub>
            </div>
            <Footer />
        </>
    )
}

export default Products