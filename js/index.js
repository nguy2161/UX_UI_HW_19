console.log("Your index.js file is loaded correctly!");

document.getElementById('button').addEventListener("click", function()
 {
	document.querySelector('.modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.modal').style.display = "none";
});