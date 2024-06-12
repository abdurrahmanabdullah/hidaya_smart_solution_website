// import React, { useState, useEffect } from "react";
// import Card from "./card/card"; // Make sure to adjust the path accordingly
// import styles from "../App.css";
// import coreurl from "../components/core_url/coreurl";
// const Product = () => {
//   const [homeData, setHomeData] = useState(null);

//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:1339/api/landing-pages?populate=*"
//         );
//         const data = await response.json();
//         setHomeData(data.data[0]);
//       } catch (error) {
//         console.error("Error fetching product data:", error);
//       }
//     };

//     fetchHomeData();
//   }, []);

//   return (
//     <div
//       style={{
//         flex: 1,
//         marginLeft: "70px",
//         marginRight: "70px",
//         marginBottom: "100px",
//       }}
//     >
//       {homeData && (
//         <>
//           <h1
//             style={{
//               fontWeight: "bolder",
//               fontSize: 40,
//               textAlign: "center",
//               color: "#3E8B94",
//               marginBottom: "50px",
//               marginTop: "70px",
//             }}
//           >
//             {homeData.attributes.heading}
//           </h1>
//           <p
//             style={{
//               fontFamily: "serif",
//               fontWeight: "bolder",
//               textAlign: "center",
//             }}
//           >
//             {homeData.attributes.hero.title}
//           </p>
//           <p
//             style={{
//               fontFamily: "helvetica",
//               textAlign: "center",
//               marginBottom: "60px",
//             }}
//           >
//             {homeData.attributes.hero.subtitle}
//           </p>
//           <div style={{ textAlign: "center" }}>
//             <button
//               style={{
//                 fontFamily: "Metropolis",
//                 cursor: "pointer",
//                 color: "white",
//                 backgroundColor: "#008b8b",
//                 borderRadius: "8px",
//                 padding: "10px 20px",
//                 border: "none",
//               }}
//               onClick={() =>
//                 (window.location.href =
//                   "https://transworldbd.com/index.php/products/productive-office")
//               }
//             >
//               {homeData.attributes.hero.button}
//             </button>
//           </div>

//           {/* Space between heading and image slider */}
//           <div style={{ marginBottom: "50px" }}></div>

//           {/* Card Section */}
//           <div>
//             {homeData.attributes.card.map((card) => (
//               <Card
//                 key={card.id}
//                 title={<div className="title-bold-center">{card.title}</div>}
//                 subtitle={<div className="subtitle">{card.subtitle}</div>}
//                 subhead={
//                   <div className="button-center">
//                     {card.button && (
//                       <a
//                         href={card.ReadMoreLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {card.button}
//                       </a>
//                     )}
//                   </div>
//                 }
//               />
//             ))}
//           </div>

//           {/* Additional Images */}
//           <div className="additional-images">
//             {homeData.attributes.image.data.map((image, index) => (
//               <img
//                 key={image.id}
//                 src={`http://localhost:1339${image.attributes.url}`}
//                 alt={image.attributes.name}
//                 style={{
//                   borderRadius: "10px",
//                   margin: "10px",
//                   padding: "23px",
//                 }}
//               />
//             ))}
//           </div>

//           {/* Footer Section */}
//           {homeData.attributes.footer && (
//             <div className="footer">
//               <p style={{ fontWeight: "bold" }}>{homeData.attributes.footer}</p>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default Product;

//-------------///-------------------------new home page design

import React, { useState, useEffect } from "react";
import Card from "./card/card"; // Make sure to adjust the path accordingly
import styles from "../App.css";
import Slider from "react-slick";
import CountUp from "react-countup";

import coreurl from "../components/core_url/coreurl";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo1 from "../Asset/home/logo/logo1.png";
import Logo2 from "../Asset/home/logo/logo2.png";
import Logo3 from "../Asset/home/logo/logo3.png";
import Logo4 from "../Asset/home/logo/logo4.jpeg";
import Logo5 from "../Asset/home/logo/logo5.png";
import Logo6 from "../Asset/home/logo/logo6.png";
import clienfeedbackimg from "../Asset/home/feedback2.png";
import Background from "../Asset/home/background.png";
import itemimg from "../Asset/home/HSS landing page content.png";
import Consultantimg from "../Asset/home/consultancy.jpeg";
import { Circle } from "@mui/icons-material";
import c1 from "../Asset/home/client_partner/c1.png";
import c2 from "../Asset/home/client_partner/c2.png";
import c3 from "../Asset/home/client_partner/c3.png";
import c4 from "../Asset/home/client_partner/c4.png";
import c5 from "../Asset/home/client_partner/c5.png";
import c6 from "../Asset/home/client_partner/dorbar.png";
import c7 from "../Asset/home/client_partner/c7.png";
import c8 from "../Asset/home/client_partner/getko.png";
const logosData = [
  { logo: Logo1, title: "Experience", time: "20" },
  { logo: Logo2, title: "IT Professional", time: "25" },
  { logo: Logo3, title: "Projects Completed", time: "60" },
  { logo: Logo4, title: "Flagship Products", time: "10" },
  { logo: Logo5, title: "Happy Clients", time: "40" },
  { logo: Logo6, title: "Tech Partners", time: "5" },
];

// /---------------- slider scroll
const clientimg = [c1, c2, c3, c4];
const partnerimg = [c8, c6, c7, c5];
const highlighted1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000,
};

const highlighted2 = {
  dots: true,

  slidesToShow: 4,
};

const Product = () => {
  return (
    <div style={{ paddingInline: "6%" }}>
      <Row
        className="Hero"
        style={{
          padding: "70px",
          position: "relative",
          overflow: "hidden",
          marginTop: "3%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
            opacity: 0.5,
            zIndex: "-1",
          }}
        ></div>
        <Col style={{ display: "block", width: 150, marginLeft: "10px" }}>
          <div style={{ marginRight: "30px" }}>
            <h1 style={{ fontSize: "50px" }}>Hidayah Smart Solutions -HSS</h1>
            <h3>Your Customeized Solutions Provider</h3>
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: "140px", marginTop: "5%" }}>
            <p>
              Welcome to Hidayah Smart Solutions (HSS), where innovation meets
              excellence in software development. As a dynamic and
              forward-thinking company, we embark on a mission to redefine the
              digital landscape through cutting-edge solutions tailored to meet
              the diverse needs of our clients.
            </p>
          </div>
        </Col>
      </Row>

      <Row style={{ paddingLeft: "2%", marginTop: "30px" }}>
        {logosData.map((item, index) => (
          <Col key={index} md={6}>
            <div className="Home-vital-card">
              <div className="vital-card-content row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="logo">
                    <img
                      style={{ maxWidth: "60%", borderRadius: "20%" }}
                      src={item.logo}
                      alt={`logo${index + 1}`}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card-bod" style={{ padding: "5%" }}>
                    <p
                      style={{
                        fontWeight: "bolder",
                        fontSize: "20px",
                      }}
                    >
                      <span
                        style={{
                          color: "#7F97B4",
                          fontWeight: "bolder",
                          fontSize: "30px",
                          marginLeft: "20%",
                        }}
                      >
                        <CountUp end={item.time} duration={8} />
                        <span style={{ fontSize: "20px", marginLeft: "5px" }}>
                          +
                        </span>
                      </span>
                      <br />

                      <span
                        style={{
                          whiteSpace: "nowrap",
                          paddingBlock: "10%",
                          paddingInline: "10%",
                        }}
                      >
                        {item.title}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div
        className="hero-image"
        style={{ paddingInline: "2%", marginTop: "40px" }}
      >
        <img
          style={{ width: "100%", color: "#D4D4D4" }}
          src={itemimg}
          alt={"No image"}
        />
      </div>

      {/* <Row
        className="tech-consultancy"
        style={{ marginTop: "2%", marginLeft: "10%" }}
      >
        <Col style={{ display: "block", textAlign: "justify" }}>
          <div style={{ marginRight: "30px" }}>
            <h1 style={{ fontSize: "40px" }}>Tech Consultancy </h1>
            <p>
              Tech consultancy bridges the gap between innovation and practical
              implementation, offering tailored solutions to complex
              technological challenges. Our expertise guides businesses through
              digital transformations, optimizing processes and unlocking growth
              opportunities in the ever-evolving tech landscape.
            </p>
          </div>
        </Col>
        <Col>
          <div style={{ marginLeft: "140px" }}>
            {" "}
            <img style={{ maxWidth: "100%" }} src={Consultantimg} />
          </div>
        </Col>
      </Row> */}

      <div className="client-feedback">
        <img
          style={{
            width: "100%",
            paddingInline: "2%",
            marginTop: "40px",
          }}
          src={clienfeedbackimg}
        />
      </div>

      {/* ////-----------slider */}
      {/* 
      <Slider {...feedbackimg}>
        {feedbackUrls.map((url, index) => (
          <div key={index} className="">
        
            <img
              style={{
                width: "450%",
                marginTop: "20px",
                paddingLeft: "15%",
                paddingRight: "15%",
                paddingBottom: "10%",
                borderRadius: "20%",
              }}
              src={url}
              alt=""
            />
          </div>
        ))}
      </Slider> */}
      {/* ///------------client  */}
      {/* <div className="client-partner">
<h2>Our Featured Clients</h2>


      </div> */}
      <div className="clientlogo" style={{ paddingInline: "2%" }}>
        <div className="highlight client">
          <h2
            style={{
              textAlign: "center",
              paddingBlock: "2%",
            }}
          >
            OUR FEATURED CLIENTS
          </h2>

          <div className="">
            <div className="mt-20">
              <Slider {...highlighted1}>
                {clientimg.map((url, index) => (
                  <div key={index} className="">
                    {/* <a href="#" className=""></a> */}
                    <img
                      style={{ width: "40%", height: "40%" }}
                      src={url}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
