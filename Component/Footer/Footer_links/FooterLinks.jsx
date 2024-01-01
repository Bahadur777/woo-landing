import './FooterLinks.css'
import Link from 'next/link'
import AboutLinks from './AboutLinks'
import WooData from './WooData'
import ProductData from './Product'
import Support from './Support'
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
            <div className="OtherProducts">
              <h1>Other products</h1>
              {
                ProductData.map(({id, href, title})=>{
                  return(
                    <div className="porduct-data" key={id}>
                      <Link href={href}>
                        {title}
                      </Link>
                    </div>
                  )
                })
              }
            </div>
            <div className="recommend">
              <h1>We recommend</h1>
              {
                Support.map(({id, href, title})=>{
                  return(
                    <div className="support" key={id}>
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