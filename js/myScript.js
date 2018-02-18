/*==========Preloader=========*/
document.body.onload = function(){
	setTimeout((function(){
		var preloader = document.getElementById('preloader');
		if( !preloader.classList.contains('done')){
			preloader.classList.add('done');
			document.body.style.overflowY = 'scroll';
		}
	}), 2000);

}

/*========FIXED_MENU==========*/
var fixedMenu = document.getElementById('fixedMenu'),
section1 = document.getElementById('section1');

window.onscroll = function(){
	var otstyp = window.pageYoffset || document.documentElement.scrollTop;
		if( otstyp > section1.offsetTop){
			fixedMenu.classList.add('fixedM');
			section1.style.marginTop = '65px';
		}else{
			fixedMenu.classList.remove('fixedM');
			section1.style.marginTop = '';
		};
};
/*==========Scrolling===========*/
fixedMenu.onclick = function(e){
	e = e || window.event;
	e.preventDefault();
	var sections = document.getElementsByTagName('section');  //получаю все теги <section>
	var silki = document.getElementsByTagName('a');			  //получаю все теги <a> меню
	if(e.target.hasAttribute('href')){						  //этап делегирования т. к. кривая разметка html
		var zapisAttr = e.target.getAttribute('href');		  //получение аттрибута href у ссылки
		//console.log(zapisAttr);
		for(var i = 0; i<sections.length; i++){				
			if(sections[i].id == zapisAttr){				  //если айди у секции совпадает аттрибутом ссылки, то при клике запускаем прокрутку
				var otstyp2 = sections[i].offsetTop;
				//console.log(otstyp2);
				var m = 0;
				var timerID = setInterval(function(){
					if(m < otstyp2){
						m+=25;
						window.scrollTo(0,m);
					}else if(m > (otstyp2 - 320) && m < otstyp2){
						clearInterval(timerID);
					};
				},10);
				//document.documentElement.scrollTop = otstyp2;
			};
		};	
	};
}
/*==========BYTERBROD=========*/
var byterbrod = document.getElementById('byterbrod');
byterbrod.onclick = function(){
	var li = document.getElementsByTagName('li');
	for(var i = 0; i<li.length; i++){
		if(!li[i].classList.contains('logikLi')){
			li[i].classList.add('logikLi');
		}else{
			li[i].classList.remove('logikLi');
		};
	};
	console.log(li[1].style.cssTEXT);
}




/*==========NUMBER===========*/

var s = 0;
var timerId = setInterval(function(){
	var number = document.getElementById('number');
	var offsetSection3 = document.getElementById('section3').offsetTop;
	var val = 456;
	if(window.pageYoffset || document.documentElement.scrollTop >= offsetSection3 -150){
		if( s <= val){
			number.innerHTML = s;
			s += 19;
		}else{
			clearInterval(timerId);
		};
	};
		
}, 50);
var e = 0;
var timerId2 = setInterval(function(){
	var number = document.getElementsByClassName('number')[0];
	var offsetSection4 = document.getElementById('section4').offsetTop;
	var val = 854;
	if(window.pageYoffset || document.documentElement.scrollTop >= offsetSection4 -150){
		if( e <= val){
			number.innerHTML = e;
			e += 14;
		}else{
			clearInterval(timerId2);
		};
	};
		
}, 50);
var f = 0;
var timerId3 = setInterval(function(){
	var number = document.getElementsByClassName('number')[1];
	var offsetSection4 = document.getElementById('section5').offsetTop;
	var val = 854;
	if(window.pageYoffset || document.documentElement.scrollTop >= offsetSection4 -150){
		if( f <= val){
			number.innerHTML = f;
			f += 14;
		}else{
			clearInterval(timerId3);
		};
	};
		
}, 50);
