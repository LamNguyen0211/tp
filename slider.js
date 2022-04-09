var KichThuoc = document.getElementsByClassName("slider")[0].clientWidth;
var Slides = document.getElementsByClassName("slides")[0];
var Img = Slides.getElementsByTagName("img");
var Max = KichThuoc * Img.length;
Max -= KichThuoc;
var Chuyen = 0;
function Next(){
	if(Chuyen < Max) Chuyen += KichThuoc;
	else Chuyen = 0;
	Slides.style.marginLeft = '-' + Chuyen + 'px';
}

function Back(){
	if(Chuyen == 0) Chuyen = Max;
	else Chuyen -= KichThuoc;
	Slides.style.marginLeft = '-' + Chuyen + 'px';
}
// setInterval(function(){
// 	document.getElementsByClassName("fa-chevron-circle-right").addEventListener("click", Next());
// },5000);   