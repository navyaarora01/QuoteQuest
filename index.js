let realData = "";
const quotes = document.getElementById("quotes");
const getNewQuotes = () => {
	let rnum = Math.floor(Math.random() * 10);
	// console.log(realData)
	quotes.innerText = `${realData[rnum].text}`;
};
const getQuotes = async () => {
	const api = "https://type.fit/api/quotes";

	try {
		let data = await fetch(api);
		realData = await data.json();
		getNewQuotes();
		// console.log(realData);
	} catch (error) {}
};
getQuotes();
