   Emp.page.setId('_BODY_33125150');
	var _nav_32827077 = new Emp.Nav({"id":"_nav_32827077","title":"动画重复展现"});
           Emp.page.add(_nav_32827077);
		var div = new Emp.Panel({"id":"div","height":"100","backgroundColor":"#ff00ff","width":"100"});
	div.addEvent('onClick',start);
           Emp.page.add(div);
			

function start(){
	var alphaAnimation = new $M.AlphaAnimation({
			fromAlpha : 0,
			toAlpha : 1.0,
			duration : 3000,
			repeatCount: 20,
			repeatMode: $M.Animation.REVERSE
		});
		div.addAnimation(alphaAnimation);
		div.startAnimation();
}



     Emp.page.render();