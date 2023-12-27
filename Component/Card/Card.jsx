import data from "./Data"
import Image from "next/image"
import Link from "next/link"
import './card.css'

const Card = () => {
  return (
    <div className="card">
        {
            data.map(({id, title, img, para, link})=>{
             return(
                <div key={id}>
                    <Image src={img} className="car-img"/>
                    <div className="card-content">
                    <h1 className="card-title">{title}</h1>
                    <p className="card-para">{para}</p>
                    <Link href='/#' className="card-link">{link}</Link> 
                    </div>
                </div>
             )
            })
        }
    </div>
  )
}

export default Card