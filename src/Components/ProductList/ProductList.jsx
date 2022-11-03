import Product from '../Product/Product'
import './productlist.css'
import { ProductRentalCar, ProductPortofolio, ProductLandingPageExplore } from '../../data'
const ProductList = () => {
    return(
        <div className="ProductList">
            <div className="ProductList-teks">
                <h1 className="ProductList-title">Portofolios by Yehoshua Yohan AA</h1>
                <p className='ProductList-desc'>
                Yehoshua Yohan is a recent graduate from the Informatics and Computer Engineering Education programme at Satya Wacana Christian University. He is now pursuing the field of Front End Engineer and is currently participating in training at Binar Academy.
                </p>
            </div>

            <div className="ProductList-Container">
                    <div className="PoductList-One">
                        <div className='ProductList-Title'>
                            <h3>Car Rental</h3>
                            <p>Developed using the ReactJS Javascript framework, CSS using the Bootstrap framework, Responsive and there are API calls.</p>
                            <a href='https://carrenty99.netlify.app/'>Click here !!</a>
                        </div>
                        <div className="ProductList-list">
                            {ProductRentalCar.map((item) => (
                                <Product key={item.id} img={item.img} link={item.link}/>
                            ))}
                        </div>
                    </div>

                <div className="ProductList-tow">
                        <div className='ProductList-Title'>
                            <h3>Portofolio</h3>
                            <p>Developed using the ReactJS Javascript framework, EmailJS, Darkmode, Responsive.</p>
                            {/* <a href='https://carrenty99.netlify.app/'>Click here to try it</a> */}
                        </div>
                        <div className="ProductList-list">
                            {ProductPortofolio.map((item) => (
                                <Product key={item.id} img={item.img} link={item.link}/>
                            ))}
                        </div>
                    </div>
                    <div className="ProductList-three">
                        <div className='ProductList-Title'>
                            <h3>Simple Landing Page Tour Explore</h3>
                            <p>Developed using HTML,CSS, Bootstrap, Responsive.</p>
                            <a href='https://yehoshua99.github.io/explore-page-simple/'>Click here !!</a>
                        </div>
                        <div className="ProductList-list">
                            {ProductLandingPageExplore.map((item) => (
                                <Product key={item.id} img={item.img} link={item.link}/>
                            ))}
                        </div>
                    </div>

            </div>
            
        </div>
    )
    
}

export default ProductList