import React, { useState } from "react"
import FlashCard from "./FlashCard"

import Data from "./Data/Data"

function Footer() {

	//Step 1 :
	const { productItems } = Data

	//Step 2 :
	const [CartItem, setCartItem] = useState([])

	//Step 4 :
	const addToCart = (product) => {
		// if hamro product alredy cart xa bhane  find garna help garxa
		const productExit = CartItem.find((item) => item.id === product.id)
		// if productExit chai alredy exit in cart then will run fun() => setCartItem
		// ani inside => setCartItem will run => map() ani yo map() chai each cart ma
		// gayara check garxa if item.id ra product.id chai match bhayo bhane
		// productExit product chai display garxa
		// ani increase  exits product QTY by 1
		// if item and product doesnt match then will add new items
		if (productExit) {
			setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
		} else {
			// but if the product doesnt exit in the cart that mean if card is empty
			// then new product is added in cart  and its qty is initalize to 1
			setCartItem([...CartItem, { ...product, qty: 1 }])
		}
	}


	return (
		<>

			<section className='flash'>
				<div className='container'>
					<div className='heading f_flex'>
						<h1>Nouveauté</h1>
					</div>
					<FlashCard productItems={productItems} addToCart={addToCart} />
				</div>
			</section>
		</>
	);
}

export default Footer;
