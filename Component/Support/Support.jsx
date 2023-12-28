import './support.css'
import Image from 'next/image'
import PeopleImg from '../../public/Images/people.png'
import RoundBtn from '../Button/RoundBtn'

const Support = () => {
  return (
    <div className='support'>
        <div className="support-text">
            <h1 className="support-title">Supported by real people</h1>
            <p className="support-para">
            Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.
            </p>
        </div>
        <div className="support-people-image">
             <Image src={PeopleImg} className='people-img'/>
        </div>

        <div className="support-bottom">
               <div className="support-bottom-content">
                <div className="support-left">
                    <h1 className="support-text">WooCommerce - the most customizable eCommerce platform for building your online business.</h1>
                </div>
                <div className="support-right">
                    <RoundBtn roundTxt='GET STARTED'/>
                </div>
               </div>
        </div>
        

    </div>
  )
}

export default Support