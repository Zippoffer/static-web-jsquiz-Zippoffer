var treeArray = [];
var pineTree = {
	treeCharacter: "", 
	numHeight: ""
};

var myButton = document.getElementById('thisWillGrowATree');
myButton.addEventListener('click', getValues);
window.addEventListener('onkeyup', inputKeyUp);

function growTree(height) {
	var treeWidth  = height.treeCharacter;
	var treeHeight = height.numHeight;
	var emptySpace = " ";
	var centered = Math.ceil(height.numHeight / 2);
	console.log(emptySpace.repeat(centered + parseInt(height.numHeight)/2 - 1),treeWidth);
	
	

	for (var i = 0; i <= height.numHeight - 2; i++) {
		treeWidth = treeWidth + height.treeCharacter + height.treeCharacter;// + height.numHeight;
		console.log(emptySpace.repeat((centered - i) + parseInt(height.numHeight) / 2 - 1) + treeWidth);

		}
}

function inputKeyUp(event) {
	console.log("keyWasPressed", event);
    if(inputKeyUp.keyCode === 13) {
    	console.log("height", event);
    	growTree(treeArray);
    }    
}
function listenForClick() {
	growTree(treeArray);
}


function getValues (clickEvent) {
	
	pineTree.numHeight = document.getElementById('tree').value;
	pineTree.treeCharacter = document.getElementById('nut').value;

	if (pineTree.numHeight === '' || pineTree.treeCharacter === '') {
		alert("Get to stacking that wood!");
	}
	else if (pineTree.treeCharacter.length !== 1) {
		alert("single char only!");
	}
	else {growTree(pineTree)};	
	}




