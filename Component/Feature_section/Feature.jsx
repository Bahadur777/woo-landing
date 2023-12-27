import Image from "next/image"
import './feature.css'
import Card from "../Card/Card"

const Feature = () => {
  return (
    <div className='feature'>
        <div className="feature-header">
            <h1 className="feature-header-text">
            Your eCommerce made simple
            </h1>
        </div>
        <div className="card-section">
         <Card/>
        </div>
    </div>
  )
}

export default Feature