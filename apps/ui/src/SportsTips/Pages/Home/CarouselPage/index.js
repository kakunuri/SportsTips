import React, { useState, useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import { Container, CarouselImage } from "./styles";
import { getCarouselImages } from "./service";
// function importAll(r) {
//   return r.keys().map(r);
// }
// const images = importAll(
//   require.context(
//     "../../../Resources/carousel-Images",
//     false,
//     /\.(png|jpe?g|svg)$/
//   )
// );
// import Images from "../../Resources/carousel-Images/IMAGE-1.png";
// import Images from "../../Resources/carousel-Images/IMAGE-1.png";
// import Images from "../../Resources/carousel-Images/IMAGE-1.png";

const CarouselPage = () => {
  const [images, setImages] = useState([]);
  function dataPolling() {
    getCarouselImages().then((imagesList) => {
      setImages(imagesList);
      setTimeout(() => {
        dataPolling();
      }, 1000);
    });
  }
  // });

  useEffect(() => {
    dataPolling();
  }, []);
  return (
    <Container>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
          interval={3000}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            {images.map((eachImage, id) => (
              <MDBCarouselItem itemId={id + 1}>
                <MDBView>
                  <CarouselImage
                    className="d-block w-100"
                    src={eachImage.href}
                    alt="First slide"
                  />
                </MDBView>
              </MDBCarouselItem>
            ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </Container>
  );
};

export default CarouselPage;
