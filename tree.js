

var button = document.getElementById("button");

button.addEventListener("click", determineInput);


function determineInput (clickEvent) {
	
	var treeHeight = document.getElementById("height").value;
	var treeCharacter = document.getElementById("character").value;
	
	var treeDiv = document.getElementById("treeDiv");	
	
	var buildTreeObject = {
			height: treeHeight,
			character: treeCharacter
	};
	
	buildTree(buildTreeObject);
}


function buildTree (buildTreeObject) {	
	var characters = buildTreeObject.character;
	var spaceCount = buildTreeObject.height - 1;
	var characterCount = 1;
	
	for (i = 0; i < buildTree.height; i++) {
		var spaces = " ".repeat(spaceCount);
		var characterString = characters.repeat(characterCount);
		var tree = spaces + characterString;
		console.log(tree);
		spaceCount -= 1;
		characterCount += 2;
	}

}	