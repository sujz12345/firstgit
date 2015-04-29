   Emp.page.setId('_BODY_25697577');
	var _nav_20085982 = new Emp.Nav({"id":"_nav_20085982","title":"测试AlphaAnimation"});
           Emp.page.add(_nav_20085982);
		var _input_27514236 = new Emp.Button({"id":"_input_27514236","value":"AlphaAnimation展现15秒"});
	_input_27514236.addEvent('onClick',test1);
           Emp.page.add(_input_27514236);
		var _input_18144103 = new Emp.Button({"id":"_input_18144103","value":"AlphaAnimation重复展现REVERSE"});
	_input_18144103.addEvent('onClick',test2);
           Emp.page.add(_input_18144103);
		var _input_5264135 = new Emp.Button({"id":"_input_5264135","value":"AlphaAnimation重复展现RESTART"});
	_input_5264135.addEvent('onClick',test3);
           Emp.page.add(_input_5264135);
			

function test1(){
	$M.page.goTo("/test1.html", {}, false);
}

function test2() {
	$M.page.goTo({url: "/test2.html", isDistroySelf: false});
}

function test3() {
	$M.page.goTo({url: "/test3.html", isDistroySelf: false});
}


     Emp.page.render();