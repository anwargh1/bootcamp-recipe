const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/sanity', function (request, response) {
  response.send('OK');
});

app.get('/recipes/:ingredient', function (request, response) {
  const ingredient = request.params.ingredient;
  axios
    .get(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`)
    .then(function (recipesGoodness) {
      response.send(
        recipesGoodness.data.results.map((element) => {
          return {
            ingredients: element.ingredients,
            title: element.title,
            thumbnail: element.thumbnail,
            href: element.href,
          };
        })
      );
    })
    .catch(function (error) {
      console.log(error);
    });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Running server on port : ${port}`);
});
