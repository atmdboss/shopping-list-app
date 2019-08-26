let form = document.getElementById("form");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");

function add(event){
	event.preventDefault();
	if(input.value.length > 0){
		createList();
	}
}
function createList(){
	let listItem = document.createElement("li");
	listItem.textContent = input.value;
	ul.appendChild(listItem);
	listItem.className = "original"
	listItem.onclick = function(){
		listItem.classList.toggle("done")
	}

		function createBtn(){
			let button = document.createElement("button");
			button.textContent = "X";
			button.className = "btn"
			listItem.appendChild(button);
			button.onclick = function(){
			button.parentNode.remove();
			}
}
createBtn();
input.value = "";
}

form.addEventListener("submit", add);