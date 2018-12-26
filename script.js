//Caching elements so we don't need to repeat this code every time.
var button = document.getElementById("enter"); //The enter button.
var input = document.getElementById("userinput"); //The input box.
var ul = document.querySelector("ul"); //The entire list.

function inputLength() { //Returns length of user input.
	return input.value.length;
}

function createListElement() { //Creates a new list item with delete button.
	var li = document.createElement("li"); //Creates new li element.
	var btn = document.createElement("button"); //Creates a new button.
	li.appendChild(document.createTextNode(input.value)); //Gets the value from input, creates a text node, and appends to the li.
	btn.appendChild(document.createTextNode("Delete")); //Creates a text node and appends it to button.
	ul.appendChild(li).appendChild(btn); //Appends btn to li, and li to ul.
	input.value = ""; //Resets input box.
}

function addListAfterClick() { //User clicks button.
	if (inputLength() > 0) { //If user input is not empty.
		createListElement();
	}
}

function addListAfterKeypress(event) { //User presses key.
	if (inputLength() > 0 && event.keyCode === 13) { //If user input is not empty and user presses enter.
		createListElement();
	}
}

function listClick(event) { //User clicked somewhere on the list.
	if (event.target && event.target.nodeName == "LI") { //If user clicked on list item.
		toggleDone();
	}

	if (event.target && event.target.nodeName == "BUTTON") { //If user clicked on list button.
		removeElement();
	}
}

function toggleDone() {
	event.target.classList.toggle("done"); //Toggles done class on or off.
}

function removeElement() {
	event.target.parentElement.remove(); //Removes list item.
}

button.addEventListener("click", addListAfterClick); //Listens for click on enter button.
input.addEventListener("keypress", addListAfterKeypress); //Listens for key press on inputbox.
ul.addEventListener("click", listClick); //Listens for click on list.
