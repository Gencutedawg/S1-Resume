var index = 0; // initialize index
document.getElementById('colorButton').addEventListener('click', function() {
    var colors = ['#15194B', '#C3F2CB', '#F4FABC', '#FABCDD'];
    var textColors = ['white', '#375C34', '#696B2E', '#8F2E66']; // corresponding text colors
    document.body.style.backgroundColor = colors[index];
    document.body.style.color = textColors[index]; // change text color
    document.getElementById('colorButton').style.backgroundColor = textColors[index]; // change button color
    index = (index + 1) % colors.length; // update index
});