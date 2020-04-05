import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import { Container, CarouselImage } from "./styles";
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../Resources/carousel-Images",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
// import Images from "../../Resources/carousel-Images/IMAGE-1.png";
// import Images from "../../Resources/carousel-Images/IMAGE-1.png";
// import Images from "../../Resources/carousel-Images/IMAGE-1.png";

const CarouselPage = () => {
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
            <MDBCarouselItem itemId="1">
              <MDBView>
                <CarouselImage
                  className="d-block w-100"
                  src={images[0]}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <CarouselImage
                  className="d-block w-100"
                  src={images[1]}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <CarouselImage
                  className="d-block w-100"
                  src={images[2]}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </Container>
  );
};

export default CarouselPage;
