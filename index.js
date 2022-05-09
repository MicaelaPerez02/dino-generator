//Imports
const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch');


app.use(express.static('public'));

//telling the server to listen any request
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// creating the first route
const api_key = process.env.API_KEY;

app.get('/dinoname', async (request, response) => {
    const fetchApi = await fetch(
        'https://dinoipsum.com/api/?format=json&words=2&paragraphs=1',
        {
            method: 'GET',
            headers: {
                'x-rapidapi-key': api_key,
                'x-rapidapi-host': 'alexnormand-dino-ipsum.p.rapidapi.com',
            },
        }
    );

    const dinoNameResponse = await fetchApi.json();
    console.log(dinoNameResponse);
    response.json(dinoNameResponse);
});


app.get('/dinoimage', async (request, response) => {
	const fetchApi = await fetch(
		'https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=20',
		{
			method: 'GET',
			headers: {
                'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com',
                'X-RapidAPI-Key': 'ea488c1437msh9c4b648d3780cc3p110f43jsn71fe8b383ba1'
                //mantengo la key publica debido a que es una api freemiun y sin ella no me deja acceder a la imagen
		}}
	);

	const dinoImageResponse = await fetchApi.json();
	console.log(dinoImageResponse);
	response.json(dinoImageResponse);
});
