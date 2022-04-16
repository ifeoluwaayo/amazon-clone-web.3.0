import { Rate } from "antd";
import "./Product.css";
import Header from "../components/Header";
import { useLocation } from "react-router";
import Purchase from "../components/Purchase";

const Product = () => {
	let { state: book } = useLocation();

	return (
		<>
			<div className="container">
				<Header />

				<div className="product-content">
					<div>
						<div className="product-image">
							<img src={book.image} alt="product" width="100%" />
						</div>
						<p style={{ textAlign: "center" }}>
							Hover over image to zoom
						</p>
					</div>
					<div className="product-details">
						<h1>{book.name}</h1>
						<Rate value={book.rating} disabled={true}></Rate>
						<hr />
						<p>
							Price: <span className="price">${book.price}</span>
						</p>
						<p>No Import Fees & Shipping Fee Inculded</p>
						<hr />
						<h3>About this Item</h3>
						<p>{book.about}</p>
					</div>
					<div className="purchase-details">
						<Purchase book={book} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
