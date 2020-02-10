var liElement = document.getElementsByClassName("liclass");

for(var i=0;i<liElement.length;i++){
	liElement[i].addEventListener('click',function(e){
		if(e.target==this){
			e.target.style.color = "red";
		}else{
			e.target.style.color = "blue";
		}
	});
}

var elementArr = Array.from(liElement[2].parentNode.children).filter((child) =>
  child !== liElement[2]
);

console.log(elementArr);

var list = document.querySelector("ul");
console.log(list);

var childF1 = list.firstChild;
childF1.style.color = "#0dea28";
console.log(childF1);

var middleElement = document.getElementById("middleLi");
var getNextSibling = middleElement.nextElementSibling;
var getPreviousSibling = middleElement.previousElementSibling;
console.log(getNextSibling);
console.log(getPreviousSibling);