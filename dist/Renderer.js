class Render {
  render(data) {
    $('.recipes').empty();
    const source = $('#RecipesGoodness-template').html();
    const template = Handlebars.compile(source);
    const newHTML = template({ data });
    $('.recipes').append(newHTML);
  }
}
