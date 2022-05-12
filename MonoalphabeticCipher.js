var shuffledArr;
let alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function shuffle(array) {
	let shuffledArray = array.slice(0,array.length)
	var currentIndex = shuffledArray.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = shuffledArray[currentIndex];
		shuffledArray[currentIndex] = shuffledArray[randomIndex];
		shuffledArray[randomIndex] = temporaryValue;
	}

	return shuffledArray;
}

function cipher(){
shuffledArr = shuffle(alphabetArr);
document.getElementById("Key").innerHTML = shuffledArr.join().replace(/,/g, '')

var textArr = document.getElementById("textbox").value.split("");
for(let k=0; k<textArr.length; k++){
if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
continue;

}else
textArr[k]=shuffledArr[alphabetArr.indexOf(textArr[k].toUpperCase())];
	}
document.getElementById("result").innerHTML = textArr.join().replace(/,/g, '')
}
	
	
function decipher(){
var textArr = document.getElementById("result").value.split("");
for(let k=0; k<textArr.length;k++){
if ((textArr[k] == ' ') || (textArr[k] == '\t') || (textArr[k] == '\n' || alphabetArr.indexOf(textArr[k].toUpperCase())==-1)){
continue;

}else
textArr[k]=alphabetArr[shuffledArr.indexOf(textArr[k].toUpperCase())];
}document.getElementById("result").innerHTML = textArr.join().replace(/,/g, '')
}
	

	document.getElementById("btn").onclick=function(){
	cipher();
	}
	
	document.getElementById("debtn").onclick=function(){
	decipher();
	}