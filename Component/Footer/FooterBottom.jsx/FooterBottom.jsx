import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import './footerBottom.css'
import Image from "next/image";
import FooterImg from '../../../public/Images/image 25.png'

const FooterBottom = () => {
  return (
    <div className='FooterBottom'>
        <div className="footer-bottom-container">
            <div className="icons-section">
            <FaXTwitter />
            <FaFacebook />
            <FaWifi />
            </div>
            <div className="copyright">
            <p>COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY</p>
        </div>
        <div className="footerImg">
            <Image src={FooterImg}/>
        </div>
        </div>
        
    </div>
  )
}

export default FooterBottom