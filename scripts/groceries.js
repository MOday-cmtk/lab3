	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli , 1lb. $1.99",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		Meats: false,
		price: 1.99,
	},
	{
		name: "Vegan cookies pack of 12. $2.99",
		vegetarian: false,
		glutenFree: false,
		Vegan: true,
		Organic: false,
		Meats: false,
		price: 2.99
	},
	{
		name: "chicken breast, by lb. $4.99",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Organic: false,
		Meats: true,
		price: 4.99
	},
	{
		name: "chicken thighs, by lb. $3.99",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Organic: false,
		Meats: true,
		price: 3.99
	},
	{
		name: "eggplant, 1lb. $1.99",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		Meats: false,
		price: 1.99
	},
	{
		name: "Cheese brick. $0.99",
		vegetarian: true,
		glutenFree: true,
		Vegan: false,
		Organic:false,
		Meats: false,
		price: 0.99
	},
	
	{
		name: "tomatoes, 1lb. $1.99",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		Meats: false,
		price: 1.99
	},
	{
		name: "potatoes, 1lb. $2.00",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: false,
		Meats: false,
		price: 2.00
	},
	{
		name: "burger, 1lb. $2.99",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Organic: false,
		Meats: true,
		price: 2.99
	},
	{
		name: "burger bread pack. $1.99",
		vegetarian: false,
		glutenFree: false,
		Vegan: true,
		Organic: false,
		Meats: false,
		price: 1.99
	},
	{
		name: "cucumber, 1lb. $1.99",
		vegetarian: true,
		glutenFree: true,
		Vegan: true,
		Organic: true,
		Meats: false,
		price: 1.99
	},
	{
		name: "bread pack. $2.35",
		vegetarian: true,
		glutenFree: false,
		Vegan: true,
		Organic: false,
		Meats: false,
		price: 2.35
	},
	{
		name: "salmon, by lb. $10.00",
		vegetarian: false,
		glutenFree: true,
		Vegan: false,
		Orgnanic: false,
		Meats: true,
		price: 10.00
	}

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian products") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree products") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "No dietary restrictions"){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Vegan products") && (prods[i].Vegan == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic products") && (prods[i].Organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Meats") && (prods[i].Meats == true)){
			product_names.push(prods[i].name)
		}
	}
	return product_names;
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}