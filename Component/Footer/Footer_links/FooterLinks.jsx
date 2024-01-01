import './FooterLinks.css'
import Link from 'next/link'
import AboutLinks from './AboutLinks'
import WooData from './WooData'
const FooterLinks = ({title, linksText}) => {
  return (
    <div className='footer-links'>
        <div className="footer-links-container">
            <div className="about">
                <h1>Who we are</h1>
                {
                  AboutLinks.map(({id,href, title})=>{
                     return(
                        <div key={id}>
                        <Link href={href}>
                        {title}
                        </Link>
                        </div>
                     )
                  })  
                }
            </div>
            <div className="Wo-commerce">
              <h1>Woocommerce</h1>
              {
               WooData.map(({id,href, title})=>{
                 return(
                  <div className="div"key={id}>
                    <Link href={href}>
                    {title}
                    </Link>
                  </div>
                 )
               })
              }
            </div>
        </div>

    </div>
  )
}

export default FooterLinks