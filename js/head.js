function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

if (localStorage.userdata) {
	var userdata = JSON.parse(localStorage.userdata)
	var commodityData = JSON.parse(localStorage.commodityData)
	if (getCookie('userID')) {
		var userId = getCookie('userID')
		if (userdata[userId].car.commodityId.length > 0) {
			if (document.getElementsByClassName('cartBox')[0]) {
				document.getElementsByClassName('cartBox')[0].innerHTML =
					'<a class="cart">购物车(0)</a><div class="cartCenter1"><div id="car_Box"><div id="car_con""><img src="img-nz/img/1-1.jpg" id="car_img" ><div id="car_data" ><p id="car_name">dfgd</p><span id="car_money">￥555</span><span id="car_number">X1</span></div></div></div><div id="fff"><a id="jiagea" style="color: red;">￥455456</a><input type="button" name="" id="gomai" value="全部购买" onclick="qugomai()"/></div></div>'

			}
			let cardatatxt = ""
			var carid = userdata[userId].car.commodityId
			commNum = userdata[userId].car.number
			for (let i=0;i< carid.length;i++) {
				commId = carid[i]
				if (commodityData[commId].xMoney == null) {
					var money = commodityData[commId].yuMoney
				} else {
					var money = commodityData[commId].xMoney
				}
				cardatatxt += '<div class="car_con"><input type="text" class="commId" name=""value="' + commId +
					'" style="display: none;"/><img src="img/index/commodityImg/' + commodityData[commId].imgPath +
					'" id="car_img" ><div id="car_data" ><p id="car_name">' + commodityData[commId].name +
					'</p><span style="color:red;">￥</span><span id="car_money">' + money +
					'</span><span id="car_number">X' + commNum[i] + '</span></div></div>'
			}
			if (document.getElementsByClassName('cart')[0]) {
				document.getElementsByClassName('cart')[0].innerHTML = '购物车(' + carid.length + ')'
			}
			if (document.getElementById('car_Box')) {
				document.getElementById('car_Box').innerHTML = cardatatxt
			}


		} // else {
		// 	document.getElementsByClassName('cartBox')[0].innerHTML =
		// 		'<a class="cart">购物车(0)</a><div class="cartCenter">购物车中还没有商品，赶紧选购吧！</div>'
		// }
	}



	function exit() {
		document.cookie = "userID= 0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
		location.href = 'index.html'
	}


	if (userdata[userId].car.commodityId.length > 0) {
		if (document.getElementsByClassName('cartBox')[0]) {
			document.getElementsByClassName('cartBox')[0].onmousemove = function() {
				document.getElementsByClassName('cartCenter1')[0].style.height = parseInt(window.getComputedStyle(
					document
					.getElementById('car_Box')).height) + 40 + 'px'
				if (parseInt(document.getElementsByClassName('cartCenter1')[0].style.height) > 420) {
					document.getElementsByClassName('cartCenter1')[0].style.height = 420 + 40 + 'px'
					document.getElementById('car_Box').style.height = 420 + 'px'
					document.getElementById('car_Box').style.overflow = 'overlay'
				}
			}
			document.getElementsByClassName('cartBox')[0].onmouseout = function() {
				document.getElementsByClassName('cartCenter1')[0].style.height = 0 + 'px'
			}
		}



		if (document.getElementById('car_Box')) {
			for (let i = 0; i < document.getElementById('car_Box').childNodes.length; i++) {
				document.getElementById('car_Box').childNodes[i].onclick = function() {
					commid = document.getElementsByClassName('commId')[i].value
					location.href = 'commodity.html?comm=' + commid;
				}
			}
		}

		var jiage = 0

		for (let i = 0; i < userdata[userId].car.commodityId.length; i++) {
			if (document.getElementsByClassName('commId')[i]) {
				commid = document.getElementsByClassName('commId')[i].value
				if( commodityData[userdata[userId].car.commodityId[i]].xMoney==null){
					jiage += commodityData[userdata[userId].car.commodityId[i]].yuMoney * userdata[userId].car.number[i]
				}else{
					jiage += commodityData[userdata[userId].car.commodityId[i]].xMoney * userdata[userId].car.number[i]
				}
				
			}

		}
		if(document.getElementById('jiagea')){
			document.getElementById('jiagea').innerHTML = '￥' + jiage;
		}
		
	}
}

	var commodityData = JSON.parse(localStorage.commodityData)
	if (getCookie("userID")) {
		var a = "<a class='headerA' href='user_info.html'>" + userdata[getCookie("userID")].username +
			"</a><span>|</span><a class='headerA' onclick='exit()'>退出</a>" +
			'<div class="line"></div><a class="headerA" href="user_info.html?page=0">我的订单</a>';
		if (document.getElementById('inlogin')) {
			document.getElementById('inlogin').innerHTML = a
		}

	}



	function qugomai() {
		var userdata = JSON.parse(localStorage.userdata)
		userdata[userId].money = parseInt(userdata[userId].money)
		var allMoney = document.getElementById('jiagea').innerHTML.split('￥')[1]
		if (userdata[userId].money <= allMoney) {
			if (confirm('积分不足是否充值')) {
				location.href = 'user_info.html'
			}
			return
		}
		date = new Date()
		userdata[userId].money -= parseInt(allMoney)
		if (userdata[userId].order.commodityId.length >= 1) {
			var orderComm = userdata[userId].order.commodityId
			var orderNum = userdata[userId].order.number
			var orderTime = userdata[userId].order.orderTime
		} else {
			var orderComm = [];
			var orderTime = [];
			var orderNum = [];
		}

		for (let i = 0; i < userdata[userId].car.commodityId.length; i++) {
			orderComm.push(userdata[userId].car.commodityId[i])
			orderNum.push(userdata[userId].car.number[i])
			orderTime.push(date.getTime())
		}
		userdata[userId].order.commodityId = orderComm
		userdata[userId].order.number = orderNum
		userdata[userId].order.orderTime = orderTime
		userdata[userId].car.commodityId = []
		userdata[userId].car.number = []
		localStorage.userdata = JSON.stringify(userdata)
		alert('购买成功')
		location.reload()
	}
