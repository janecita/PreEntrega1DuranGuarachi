import { useState } from "react"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";
function ItemCount({ stock, initial, onAdd }) {
	const [count, setCount] = useState(initial)

	return (
		<div>
			<Button  onClick={() => setCount(count - 1)}  variant="outline-dark"disabled={count === 1}>-</Button>
				<label className="fs-3 mx-4 text-success">{count}</label>
			<Button
				onClick={() => setCount(count + 1)}
				variant="outline-dark"
				disabled={count > stock - 1}>+</Button>
			<div className="text-center">
			    <br/>
				<Link to={`/cart`}>
				<Button
					onClick={() => {
						onAdd(count)
					}}
					variant="dark"
					disabled={stock === 0}>
					Agregar al Carrito
				</Button>
				</Link>
			</div>
		</div>
	)
}

export default ItemCount
