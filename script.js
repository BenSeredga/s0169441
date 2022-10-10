function multiply(){
	alert("Посчитать?");
	var num1, num2, result;
	num1 = document.getElementById('tprice').value;
	num1=parseInt(num1);
	num2=document.getElementById('tcount').value;
	num2=parseInt(num2);
	result=num1*num2;
	if (isNaN(result)){
		result="Ошибка";
		document.getElementById("outcost").innerHTML=result;
	}
	document.getElementById("outcost").innerHTML=result;
}
window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("counting_btn");
  //b.addEventListener("Посчитать", multiply);
});