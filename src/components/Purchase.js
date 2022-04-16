import React from "react";
import { Select, Button, Modal, Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useMoralis } from "react-moralis";

const { Option } = Select;

function Purchase({ book }) {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [delivery, setDelivery] = useState("");
	const { Moralis, account, chainId } = useMoralis();

	const handleOk = async () => {
		// Getting Token Price
		const options = {
			address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
			chain: "eth",
		};

		const price = await Moralis.Web3API.token.getTokenPrice(options);
		const priceMatic = book.price / price.usdPrice;

		// Send Matic to Bookstore Owner
		const options1 = {
			type: "native",
			amount: Moralis.Units.ETH(priceMatic),
			receiver: "0x6F76d27FF309e4E21B810d7ddE8845e21c56f10b",
		};
		let result = await Moralis.transfer(options1);

		// Save transaction details to DB
		const Transaction = Moralis.Object.extend("Transaction");
		const transaction = new Transaction();

		transaction.set("Customer", account);
		transaction.set("Address", delivery);
		transaction.set("Product", book.name);

		transaction.save();

		setIsModalVisible(false);
	};

	return (
		<>
			<span className="price"> ${book.price}</span>
			<p>No Import Fees & Free Shipping Included</p>
			<h1 style={{ color: "green" }}> In Stock</h1>
			<h3>Quantity</h3>
			<Select defaultValue={1} style={{ width: "100%" }}>
				<Option value={1}>1</Option>
				<Option value={2}>2</Option>
				<Option value={3}>3</Option>
				<Option value={4}>4</Option>
				<Option value={5}>5</Option>
			</Select>
			<Button
				disabled={chainId !== "0x13881"}
				className="login"
				style={{ width: "100%", marginTop: "50px" }}
				onClick={() => setIsModalVisible(true)}>
				<ShoppingCartOutlined /> Buy Now
			</Button>

			{/* Modal */}
			<Modal
				title="Purchase Product"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={() => setIsModalVisible(false)}>
				<div style={{ display: "flex" }}>
					<img
						src={book.image}
						alt="Product"
						style={{ width: "200px" }}
					/>
					<div>
						<h3>{book.name}</h3>
						<h2>{book.price}</h2>
						<h4>Delivery Adress:</h4>
						<Input onChange={(value) => setDelivery(value)}></Input>
					</div>
				</div>
			</Modal>
		</>
	);
}

export default Purchase;
