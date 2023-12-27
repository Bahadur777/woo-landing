import Image from "next/image";
import Button from "../Button/Button";
import Hero_img from "../../public/Images/featured-image.png";
import './hero.css'

const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="hero">
        <div className="hero-left">
          <div className="hero-text">
            <h1 className="hero-header">Building exactly the eCommerce website you want.</h1>
            <p className="hero-para-text">
              WooCommerce is a customizable, open-source eCommerce platform
              built on WordPress. Get started quickly and make your way.
            </p>
          </div>
          <div className="hero-button-section">
            <div>
              <Button btnText="Start a New Store" />
            </div>
            <div className="custom">
                <span>Or</span>
                <span className="custom-text">Customize & Extend ›</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <Image src={Hero_img} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
