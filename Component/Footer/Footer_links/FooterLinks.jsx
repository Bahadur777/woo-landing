import './footerLinks.css'
import Link from 'next/link'
import AboutLinks from './AboutLinks'
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
        </div>

    </div>
  )
}

export default FooterLinks