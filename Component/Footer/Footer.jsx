import './footer.css'
import Image from 'next/image';
import { PiArrowCircleUpRightBold } from "react-icons/pi";
import Logo from '../../public/Images/LOGO.svg'
import FooterLinks from './Footer_links/FooterLinks';
import FooterBottom from './FooterBottom.jsx/FooterBottom';
const Footer = () => {
  return (
    <div>
        <div className='footer-section'>
         <div className="footer-section-container">
            <div className="footer-top">
                <div className="footer-top-content">
                    <div className="top-content">
                        <div className="top-icons">
                        <PiArrowCircleUpRightBold />
                        </div>
                        <div className="content-text">
                            <p>30 day money back guarantee</p>
                        </div>
                    </div>
                    <div className="top-content">
                        <div className="top-icons">
                        <PiArrowCircleUpRightBold />
                        </div>
                        <div className="content-text">
                            <p>Support teams across the world</p>
                        </div>
                    </div>
                    <div className="top-content">
                        <div className="top-icons">
                        <PiArrowCircleUpRightBold />
                        </div>
                        <div className="content-text">
                            <p>Safe & Secure online payment</p>
                        </div>
                    </div>
                </div>
                <div className="footer-logo">
                   <Image src={Logo}/>
                </div>
                <div className="hr"></div>
            </div>
            <FooterLinks/>
            
         </div>
         
    </div>
    <FooterBottom/>
    </div>
  )
}

export default Footer