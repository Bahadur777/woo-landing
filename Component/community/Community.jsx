import './community.css'
import Image from 'next/image'
import leftImg from '../../public/Images/Rectangle 236.png'
import RoundBtn from '../Button/RoundBtn'
import rightImg from '../../public/Images/Rectangle 233.png'
const Community = () => {
  return (
    <div className='com'>
       <div className="community">
          <div className="community-top">
            <div className="top-image">
               <Image src={leftImg} className='leftimg'/>
            </div>
            <div className="top-content">
                <h1 className='top-title'>Develop Without Limits</h1>
                <p className="top-para">
                WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.
                </p>
                <RoundBtn roundTxt='Read the Documentation'/>
            </div>
          </div>

          <div className="community-bottom">
            <div className="bottom-content">
                <h1 className="bottom-title">
                Know our Global Community
                </h1>
                <p className="bottom-para">
                WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!
                </p>
                <RoundBtn roundTxt='Read the Documentation'/>
            </div>
            <div className="bottom-image">
                  <Image src={rightImg} className='right-img'></Image>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Community