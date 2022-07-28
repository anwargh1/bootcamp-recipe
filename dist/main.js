const renderRecipe = new Render();
$('.search>button').on('click', function () {
  const recipe = $('#recipe-input').val();
  $.get(`/recipes/${recipe}`, function (response) {
    renderRecipe.render(response);
  });
});

$('.recipes').on('click', 'img', function () {
  alert($(this).siblings('ul').find('li:first-child').text());
});
