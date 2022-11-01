import Product from '../Product/Product'
import './productlist.css'
const ProductList = () => {
    return(
        <div className="ProductList">
            <div className="ProductList-teks">
                <h1 className="ProductList-title">Create & Inspire. It's Yehoshua Yohan</h1>
                <p className='ProductList-desc'>
                    Yehoshua Yohan is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore soluta totam deserunt possimus fuga voluptate sequi. Voluptas perspiciatis rem similique sit nostrum, aut mollitia alias fugiat, est, excepturi quia!
                </p>
            </div>
            <div className="ProductList-list">
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
    )
    
}

export default ProductList