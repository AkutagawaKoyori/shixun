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


var commodityData = [{
	"name": "天选2 日蚀灰",
	"peizi": "R7 RTX 3060 144Hz",
	"yuMoney": 7699,
	"xMoney": 7499,
	"imgPath": "img/11164510010251.jpg",
	"jieshao": "天选2 日蚀灰 锐龙R7 GeForce RTX 3060 16G内存 15.6英寸 144Hz 游戏本笔记本电脑"
}, {
	"name": "天选2 Plus 日蚀灰",
	"peizi": "R7 RTX 3060 17.3英寸",
	"yuMoney": 7999,
	"xMoney": 7799,
	"imgPath": "img/11143710051511.jpg",
	"jieshao": "天选2 Plus 日蚀灰 锐龙R7 GeForce RTX 3060 16G内存 17.3英寸 144Hz 游戏本笔记本电脑"
}, {
	"name": "天选2 魔幻青",
	"peizi": "R7 RTX 3050Ti 144Hz",
	"yuMoney": 6999,
	"xMoney": 6499,
	"imgPath": "img/11110899985553.jpg",
	"jieshao": "天选2 魔幻青 锐龙R7 GeForce RTX 3050Ti 16G内存 15.6英寸 游戏本笔记本电脑"
}, {
	"name": "天选2 魔幻青",
	"peizi": "11代i5/RTX 3050Ti 144Hz",
	"yuMoney": 6999,
	"xMoney": 6499,
	"imgPath": "img/11051497505510.jpg",
	"jieshao": "天选2 魔幻青 11代i5 GeForce RTX 3050Ti 16G内存 15.6英寸 144Hz 游戏本笔记本电脑"
}, {
	"name": "天选2 日蚀灰",
	"peizi": "R7 RTX 3050Ti 144Hz",
	"yuMoney": 6999,
	"xMoney": 6299,
	"imgPath": "img/11125897541025.jpg",
	"jieshao": "天选2 日蚀灰 锐龙R7 GeForce RTX 3050Ti 16G内存 15.6英寸 游戏本笔记本电脑"
}, {
	"name": "天选2 日蚀灰",
	"peizi": "R9 RTX 3070 2.5K165Hz",
	"yuMoney": 10499,
	"xMoney": 9999,
	"imgPath": "img/10510153975154.jpg",
	"jieshao": "天选2 日蚀灰 锐龙R9 GeForce RTX 3070 16G内存 15.6英寸 2.5K 165Hz 游戏本笔记本电脑"
}, {
	"name": "天选2 魔幻青",
	"peizi": "R9 RTX 3060 2.5K165Hz",
	"yuMoney": 8999,
	"xMoney": 7999,
	"imgPath": "img/10494557101101.jpg",
	"jieshao": "天选2 魔幻青 锐龙R9 GeForce RTX 3060 16G内存 15.6英寸 2.5K 165Hz 游戏本笔记本电脑"
}, {
	"name": "天选台式机",
	"peizi": "10代i7 RTX 3060 16G内存",
	"yuMoney": 7699,
	"xMoney": null,
	"imgPath": "img/09484848491015.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}, {
	"name": "a豆14 钛空银",
	"peizi": "锐龙5000系列高性能 ",
	"yuMoney": 4599,
	"xMoney": 3999,
	"imgPath": "img2/23023910297504.jpg",
	"jieshao": "a豆14 14英寸7nm锐龙六核高性能轻薄本 学生商务办公笔记本电脑(锐龙6核R5-5500U 16G 512G DC调光护眼屏)钛空银"
}, {
	"name": "a豆14 航天版 套装",
	"peizi": "八核高性能 100%sRGB",
	"yuMoney": 4899,
	"xMoney": 4599,
	"imgPath": "img2/23145648101991.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}, {
	"name": "无畏 Pro14",
	"peizi": "锐龙R5 / 2.8K OLED屏",
	"yuMoney": 5199,
	"xMoney": 4999,
	"imgPath": "img2/22180510048515.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}, {
	"name": "无畏 Pro14",
	"peizi": "锐龙R7 / 2.8K OLED屏",
	"yuMoney": 5799,
	"xMoney": 5299,
	"imgPath": "img2/11091155565410.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}, {
	"name": "灵耀Pro 14",
	"peizi": "锐龙R7 RTX 3050",
	"yuMoney": 7799,
	"xMoney": 6999,
	"imgPath": "img2/13554953535449.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}, {
	"name": "灵耀Pro16",
	"peizi": "标压锐龙9 AURA限定版",
	"yuMoney": 11499,
	"xMoney": 10499,
	"imgPath": "img2/14011699101575.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}, {
	"name": "VivoBook15 冰晶银",
	"peizi": "11代i5 锐炬Xe",
	"yuMoney": 4399,
	"xMoney": 4199,
	"imgPath": "img2/11071349101989.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}, {
	"name": "灵耀X双屏",
	"peizi": "酷睿i5 EVO认证",
	"yuMoney": 8999,
	"xMoney": 7999,
	"imgPath": "img2/00330110057491.jpg",
	"jieshao": "天选S501MC台式电脑主机（i7-10700/16G/512GB SSD/ GeForce® RTX3060 )"
}]


localStorage.commodityData = JSON.stringify(commodityData)

if(localStorage.userdata){
	var userdata = JSON.parse(localStorage.userdata)
}

if (getCookie("userID")) {
	// let a = "<a class='headerA' href='user_info.html'>" +userdata[getCookie('userID')].username +
	// 	"</a><span>|</span><a class='headerA' onclick='exit()'>退出</a>";
	let b =
		'<a class="exit"onclick="exit()">退出登陆</a><img src="img/group/f_icon_no1.png" style="width: 50px"><div class="user"><span class="userName" style="display:block">' +
		userdata[getCookie('userID')].username + '</span><span class="integral">当前积分：' + userdata[getCookie('userID')]
		.money + '</span></div>';
	// document.getElementById('inlogin').innerHTML = a;
	document.getElementsByClassName('group3')[0].innerHTML = b;
} //else{alert(1)}
function exit() {
	document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	document.cookie = "money=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
	location.reload()
}


var data = ""
for (let i = 0; i <= 7; i++) {
	if (commodityData[i].xMoney==null) {
		tmpdata = '<a href="commodity.html?comm=' + i + '" class="moudle3Con"><div><img src="img/index/commodityImg/' +
			commodityData[i].imgPath +
			'" class="moudle3Conimg"><h2>' + commodityData[i].name + '</h2><p class="peizhi">' + commodityData[i]
			.peizi + '</p><p class="jiage"><span class="jiage1">￥' + commodityData[i].yuMoney +
			'</span></p></div></a>'
	} else {
		tmpdata = '<a href="commodity.html?comm=' + i + '" class="moudle3Con"><div><img src="img/index/commodityImg/' +
			commodityData[i].imgPath +
			'" class="moudle3Conimg"><h2>' + commodityData[i].name + '</h2><p class="peizhi">' + commodityData[i]
			.peizi + '</p><p class="jiage"><span class="jiage1">￥' + commodityData[i].yuMoney +
			'</span><span class="jiage2">￥' + commodityData[i].yuMoney + '</span></p></div></a>'
	}
	data += tmpdata
}
moudle3ConBox = document.getElementsByClassName('moudle3ConBox')[0]
moudle3ConBox.innerHTML = data

data = ""
for (let i = 8; i <= commodityData.length - 1; i++) {
	if (commodityData[i].xMoney) {
		tmpdata = '<a href="commodity.html?comm=' + i + '" class="moudle3Con"><div><img src="img/index/commodityImg/' +
			commodityData[i].imgPath +
			'" class="moudle3Conimg"><h2>' + commodityData[i].name + '</h2><p class="peizhi">' + commodityData[i]
			.peizi + '</p><p class="jiage"><span class="jiage1">￥' + commodityData[i].xMoney +
			'</span><span class="jiage2">￥' + commodityData[i].yuMoney + '</span></p></div></a>'
	} else {
		tmpdata = '<a href="commodity.html?comm=' + i + '" class="moudle3Con"><div><img src="img/index/commodityImg/' +
			commodityData[i].imgPath +
			'" class="moudle3Conimg"><h2>' + commodityData[i].name + '</h2><p class="peizhi">' + commodityData[i]
			.peizi + '</p><p class="jiage"><span class="jiage1">￥' + commodityData[i].yuMoney + '</span></p></div></a>'
	}
	data += tmpdata
}
moudle3ConBox = document.getElementsByClassName('moudle3ConBox')[1]
moudle3ConBox.innerHTML = data

if (!localStorage.commodityData) {
	localStorage.commodityData = JSON.stringify(commodityData);
}
