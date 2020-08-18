var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/d3js/5.12.0/d3.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
$(document).ready(function(){

    $.get("https://api.github.com/users/sashavinocurov", displayName)
    // Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
    function displayName(data) {
        console.log(data.login);
    };
});