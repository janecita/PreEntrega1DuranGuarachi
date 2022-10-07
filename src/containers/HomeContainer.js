import { Container } from "react-bootstrap"
import mainImg from "../assets/img/tienda.jpg"

function HomeContainer({ greeting }) {
	return (
		<Container className="text-center">
            
				<h2 className="text-center mt-5 pt-3">{greeting}</h2>
				<img src={mainImg}   style={{ width: 850, height: 500 }}   alt="Imagen tienda" />
				<h2 className="text-center p-2">Productos Electronicos Economicos</h2>
				<br />
		</Container>
	)
}

export default HomeContainer