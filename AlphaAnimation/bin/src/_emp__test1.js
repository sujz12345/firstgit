   Emp.page.setId('_BODY_20973025');
	var _nav_4323441 = new Emp.Nav({"id":"_nav_4323441","title":"动画展现15s"});
           Emp.page.add(_nav_4323441);
		var div = new Emp.Panel({"id":"div","height":"100","backgroundColor":"#ff00ff","width":"100"});
	div.addEvent('onClick',start);
           Emp.page.add(div);
			

function start(){
	var alphaAnimation = new $M.AlphaAnimation({
			fromAlpha : 0,
			toAlpha : 1.0,
			duration : 15000
		});
		div.addAnimation(alphaAnimation);
		div.startAnimation();
}



     Emp.page.render();