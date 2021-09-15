// to run a simple server, cd in your terminal to the folder these files are in and run:
// python -m SimpleHTTPServer 3000
// then go to http://localhost:3000 in your browser

const SpeechRecognition = webkitSpeechRecognition; //eslint-disable-line
// const giphyAPIKey = "FrOAIbQ7unfWpWi70vB7i7dhSvzYC32t"; // sign up and create an app to get one: https://developers.giphy.com/
const giphyAPIKey = "027eb8rCFX754MhNnOKVc2o6LWsDHQF5FFPrxrAivc6O7ijzlJEKXR7q"; // sign up and create an app to get one: https://developers.giphy.com/



const getSpeech = () => {
	const recognition = new SpeechRecognition();
	recognition.lang = "en-US";
	recognition.start();

	recognition.onresult = (event) => {
		const speechResult = event.results[0][0].transcript;
		console.log(speechResult);
		document.querySelector("#speech-div").textContent = speechResult;
		getGif(speechResult);
	};

	recognition.onend = () => {
		console.log("it is over");
		recognition.stop();

		getSpeech();
	};

	recognition.onerror = (event) => {
		console.log("something went wrong: " + event.error);
	};
};

const getGif = (phrase) => {
	// same as:
	// let url = "http://api.giphy.com/v1/gifs/random?api_key=" + giphyAPIKey + "&tag=" + phrase;
	// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

	const url = `https://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${phrase}`;

	// more info: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
	fetch(url, { mode: "cors" })
		.then((response) => response.json())
		.then((result) => {
			let imgUrl = result.data.image_url;
			document.querySelector("#the-gif").src = imgUrl;
			console.log(imgUrl);
		});
};

document.querySelector("#my-button").onclick = () => {
	getSpeech();
};
