import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"

function Product() {
    return (
      <div className="product">
        <div className="product__one">
          <img src={one} alt="img"></img>
          <p>Fogg Wood Extreme.Eau De Perfume.Long-Lasting Perfume,100ml</p>
        </div>
  
        <div className="product__one">
          <img src={two} alt="img"></img>
          <p>Fogg Wood Extreme.Eau De Perfume.Long-Lasting Perfume,100ml</p>
        </div>
  
        <div className="product__one">
          <img src={three} alt="img"></img>
          <p>Fogg Wood Extreme.Eau De Perfume.Long-Lasting Perfume,100ml</p>
        </div>
      </div>
    )
  }

  export default Product