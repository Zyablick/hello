// to run a simple server, cd in your terminal to the folder these files are in and run:
// python -m SimpleHTTPServer 3000
// then go to http://localhost:3000 in your browser

const SpeechRecognition = webkitSpeechRecognition; //eslint-disable-line

const APIKey = "c39f256d-8e6a-429a-bc00-7ad7d6ab4cf8"; // sign up and create an app to get one: https://developers.giphy.com/

document.querySelector("#my-button").onclick = () => {
	getSpeech();
};


const handleSpeechInput = (initialWords) => {
	console.log(initialWords)
	const lowerCased = initialWords.toLowerCase();

	if(initialWords === initialWords.toString()){
		return 1;
	}
	if(initialWords === initialWords.toString()){
		return 2;
	}
}

const getSpeech = () => {
	const recognition = new SpeechRecognition();
	recognition.lang = "en-US";
	recognition.start();

	recognition.onresult = (event) => {
		const speechResult = event.results[0][0].transcript;
		console.log(speechResult);

		document.querySelector("#speech-div").textContent = speechResult;

		const analyzedAnswer = handleSpeechInput(speechResult);
		getImg(analyzedAnswer);
	};

	recognition.onend = () => {
		console.log("it is over");
		recognition.stop();

	};

	recognition.onerror = (event) => {
		console.log("something went wrong: " + event.error);
	};
};


const getImg = (num) => {
	console.log("in get img");
	console.log('query: ',num);
	// let url = "http://api.giphy.com/v1/gifs/random?api_key=" + giphyAPIKey + "&tag=" + phrase;
	const catUrl = `https://api.thecatapi.com/v1/images/search?category_ids=${num}&api_key=${APIKey}`;
	// const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${phrase}`;
	fetch(catUrl, { mode: "cors" })
		.then((response) => response.json())
		.then((result) => {
			// const song = result.result[0];
			// console.log(result);
			let imgURL = result[0].url;

			// let imgUrl = result.data.image_url[0];
			document.querySelector("#the-gif").src = imgURL;
			console.log(imgURL);
		});
};
