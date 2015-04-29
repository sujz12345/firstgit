   Emp.page.setId('_BODY_10015176');
	var _nav_16035349 = new Emp.Nav({"id":"_nav_16035349","title":"动画重复展现"});
           Emp.page.add(_nav_16035349);
		var div = new Emp.Panel({"id":"div","height":"100","backgroundColor":"#ff00ff","width":"100"});
	div.addEvent('onClick',start);
           Emp.page.add(div);
			

function start(){
	var alphaAnimation = new $M.AlphaAnimation({
			fromAlpha : 0,
			toAlpha : 1.0,
			duration : 3000,
			repeatCount: 20,
			repeatMode: $M.Animation.RESTART,
			interpolater: $M.Animation.Linear
		});
		div.addAnimation(alphaAnimation);
		div.startAnimation();
}



     Emp.page.render();