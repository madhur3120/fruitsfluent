import Product from '../Home/Product'
import Footer from '../layout/Footer/Footer';
import Productsub from './productsub'
import Notecontext from '../context/notecontext';
import { useContext ,useState , useEffect} from 'react';

const Products = () => {
    // const [items, setItems] = useState("");

    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items));
    // }, []);

    // setItems("siog")
    let a = useContext(Notecontext)
    console.log(a.name);
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