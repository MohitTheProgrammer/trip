//CSS import
import "../styles/about.css";

//Image import
import Car from "../assets/images/car.png";
import Setting from "../assets/images/setting.png";
import AboutProfile from "../assets/images/aboutProfile.png";

const About = () => {
  return (
    <div className="about-section">
      <h3 className="about-main-heading">About Us</h3>
      <div className="first-about-partion">
        <div className="frist-about-partion-text-field">
          <h3 className="about-text-field-heading">Welcome To Trip to</h3>
          <h3 className="about-text-field-sub-heading">TRIP TO</h3>
          <p className="about-text-field-para">
            Welcome to our travel haven, where wanderlust meets convenience!
            Embark on a journey of discovery with our curated travel
            experiences. From breathtaking landscapes to cultural gems, our
            website is your gateway to seamless exploration of India. Let the
            adventure begin as you navigate through a world of possibilities.
            Happy travels!
          </p>
          <button className={"about-btn"}>READ MORE</button>
        </div>
        <div className="first-about-portion-img">
          <img
            src="https://p.w3layouts.com/demos_new/template_demo/12-12-2017/tourist-demo_Free/1002040083/web/images/package1.jpg"
            alt="img"
            className="about-portion-img"
          />
        </div>
        <div className="frist-about-partion-text-field">
          <h3
            className="about-text-field-heading"
            style={{ textAlign: "center", marginBottom: "15px" }}
          >
            Watch Our Recent Video Trip By{" "}
            <span className="traveling-nerd">Traveling Nerd</span>
          </h3>
          <p className="about-text-field-para">
            Roaming the globe for a year, I chased sunsets, explored cultures,
            and uncovered hidden treasures. From vibrant city lights to tranquil
            landscapes, each step brought new stories. This journey wasn't just
            about places; it was a profound exploration of self. Here's to a
            year of wanderlust, growth, and unforgettable moments.
          </p>
          <button className={"about-btn"}>WATCH NOW</button>
        </div>
      </div>
      <div className="second-about-partion">
        <a href="" className="about-service">
          <img src={Car} alt="Car" className="about-sevice-img" />
          <h3 className="about-service-heading">SERVICE 1</h3>
          <p className="about-service-para">
            Effortless travel begins with our premier car service. Experience
            comfort, reliability, and style as our professional drivers take you
            on seamless journeys, ensuring your adventures start stress-free.
          </p>
        </a>
        <a href="" className="about-service">
          <img src={AboutProfile} alt="Profile" className="about-sevice-img" />
          <h3 className="about-service-heading">SERVICE 2</h3>
          <p className="about-service-para">
            Our unwavering commitment to exceptional customer support sets us
            apart. With 24/7 assistance, friendly experts, and prompt solutions,
            we ensure a seamless and satisfying experience for every customer.
          </p>
        </a>
        <a href="" className="about-service">
          <img src={Setting} alt="Setting" className="about-sevice-img" />
          <h3 className="about-service-heading">SERVICE 3</h3>
          <p className="about-service-para">
            Powerful and efficient bus motors drive a smooth journey. Our
            cutting-edge technology ensures reliability, sustainability, and
            optimal performance on the road.
          </p>
        </a>
      </div>
    </div>
  );
};

export default About;
