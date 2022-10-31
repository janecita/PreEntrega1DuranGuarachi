import Carousel from 'react-bootstrap/Carousel';

function HomeContainer({ greeting }) {
	return (

    <Carousel>
      <Carousel.Item interval={160}>
        <img
          className="d-block w-100"
          src="https://canalsalud.imq.es/hubfs/adiccion%20a%20las%20compras.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className="text-center mt-5 pt-3">{greeting}</h2>
          <p>Compra con nosotros.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={160}>
        <img
          className="d-block w-100"
          src="https://tvazteca.brightspotcdn.com/8b/42/73f89c0a985e421aed569fa636be/adiccompras2-2235350.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Compras Online</h3>
          <p>Compra con nosotros.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={160}>
        <img
          className="d-block w-100"
          src="https://gestion.pe/resizer/1Sp_u-4JVE8jt0TUF1end1lYGJA=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/EGFDWNSGDRFWBHSBLJOTQCJXCQ.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Compras Online</h3>
          <p>Compra con nosotros.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );	
}

export default HomeContainer