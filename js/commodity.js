window.onload = function() {
	//公共函数
	//显示
	function show(dom) {
		dom.style.display = "block"
	}
	//影藏
	function hidden(dom) {
		dom.style.display = "none"
	}
	//步骤:
	// 1. 鼠标移入小盒子的时候,显示遮罩层,显示大盒子
	// 2. 鼠标在小盒子内移动,改变遮罩层位置
	// 3. 计算遮罩层在小盒子内移动的距离/遮罩层可以移动的最大距离
	// 4.0 实现大图片联动效果
	//1.0
	var left = document.getElementsByClassName("left")[0];
	var right = document.getElementsByClassName("right")[0];
	var mask = document.getElementsByClassName("mask")[0];
	var bigImage = document.getElementsByClassName("big-img")[0]

	var x = 0;
	var y = 0;

	//2.0鼠标移入小盒子(left)
	left.onmouseover = function() {
		//2.0.1显示
		show(mask);
		show(right)
	}
	//4.0移动鼠标
	left.onmousemove = function(evt) {
		var event = evt || window.event
		//4.0.1 获取鼠标的位置
		var x = event.pageX;
		var y = event.pageY;
		//4.0.2 计算遮罩层位置
		var left_value = x - this.offsetLeft
		var top_value = y - this.offsetTop
		//5.0 设置中点 减去mask宽高的一半
		left_value = left_value - (mask.offsetWidth / 2);
		top_value = top_value - (mask.offsetHeight / 2)

		//6.0遮罩层移动范围
		if (left_value <= 0) {
			left_value = 0;
		}
		if (left_value >= (left.offsetWidth - mask.offsetWidth)) {
			left_value = left.offsetWidth - mask.offsetWidth;
		}
		if (top_value <= 0) {
			top_value = 0;
		}
		if (top_value >= (left.offsetHeight - mask.offsetHeight)) {
			top_value = left.offsetHeight - mask.offsetHeight;
		}

		//7.0 设置遮罩层(mask)标签位置
		mask.style.left = left_value + "px";
		mask.style.top = top_value + "px";

		//8.0 计算比例
		var demoX = left_value / (left.offsetWidth - mask.offsetWidth)
		var demoY = top_value / (left.offsetHeight - mask.offsetHeight)

		//9.0 计算大图片的移动距离
		var distanceX = bigImage.offsetWidth - right.offsetWidth
		var distanceY = bigImage.offsetHeight - right.offsetHeight

		//10.0 根据比例移动大图片
		var dx = demoX * distanceX
		var dy = demoY * distanceY

		//11.0设置大图片的位置
		bigImage.style.left = -dx + "px"
		bigImage.style.top = -dy + "px"

	}
	//3.0鼠标离开小盒子(left)
	left.onmouseleave = function() {
		//3.0.1隐藏
		hidden(mask);
		hidden(right)
	}
}

var num_jia = document.getElementById("num-jia");
var num_jian = document.getElementById("num-jian");
var input_num = document.getElementById("input-num");

num_jia.onclick = function() {
	input_num.value = parseInt(input_num.value) + 1;
}

num_jian.onclick = function() {
	if (input_num.value <= 0) {
		input_num.value = 0;
	} else {

		input_num.value = parseInt(input_num.value) - 1;
	}
}

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

var userId = getCookie('userID')
let href = location.href
let commId = href.split('comm=')[1]
console.log(commId);
var commodityData = JSON.parse(localStorage.commodityData)
var userdata = JSON.parse(localStorage.userdata)
document.getElementById('commName').innerHTML = commodityData[commId].name
document.getElementById('peizi').innerHTML = commodityData[commId].peizi
document.getElementById('jiage').innerHTML = commodityData[commId].yuMoney
document.getElementsByClassName('small_img')[0].src = 'img/index/commodityImg/' + commodityData[commId].imgPath
document.getElementsByClassName('big-img')[0].src = 'img/index/commodityImg/' + commodityData[commId].imgPath

if (userdata[userId].order.commodityId) {
	var commodityIdG = userdata[userId].order.commodityId

} else {
	var commodityIdG = []
}

if (userdata[userId].order.commodityId) {
	var numberG = userdata[userId].order.number
} else {
	var numberG = []
}

function gomai() {
	let href = location.href
	let commId = href.split('comm=')[1]
	var userdata = JSON.parse(localStorage.userdata)
	userdata[userId].money = parseInt(userdata[userId].money)
	if (confirm('是否购买')) {
		if (document.getElementById('input-num').value != 0) {

			if (commodityData[commId].xMoney == null) {
				var xMoney = commodityData[commId].yuMoney
			} else {
				var xMoney = commodityData[commId].xMoney
			}

			if (userdata[userId].money > xMoney * document.getElementById('input-num').value) {
				userdata[userId].money -= parseInt(commodityData[commId].xMoney * document.getElementById('input-num')
					.value)
				commodityIdG.push(commId)
				numberG.push(document.getElementById('input-num').value)
				userdata[userId].order.commodityId = commodityIdG
				userdata[userId].order.number = numberG
				date = new Date().getTime()
				userdata[userId].order.orderTime.push(date)
				localStorage.userdata = JSON.stringify(userdata)
				alert('购买成功');
			} else {
				if (confirm('积分不足请充值')) {
					location.href = 'user_info.html'
				}
				return
			}

		} else {
			alert('请选择购买/加入购物车数量')
			return
		}
	}else{
		return
	}

}


if (userdata[userId].car.commodityId) {
	var userdata = JSON.parse(localStorage.userdata)
	var commodityIdC = userdata[userId].car.commodityId

} else {
	var commodityIdC = []
}

if (userdata[userId].car.commodityId) {
	var userdata = JSON.parse(localStorage.userdata)
	var numberC = userdata[userId].car.number
} else {
	var numberC = []
}


function gomuce() {
	let href = location.href
	let commId = href.split('comm=')[1]
	if (!confirm('是否加入')) {
		return
	} else {
		if (document.getElementById('input-num').value != 0) {
			commodityIdC.push(commId)
			numberC.push(document.getElementById('input-num').value)
			userdata[userId].car.commodityId = commodityIdC
			userdata[userId].car.number = numberC
			alert('加入成功')
			location.reload()
		} else {
			alert('请选择购买/加入购物车数量')
			return
		}
		localStorage.userdata = JSON.stringify(userdata)
	}
}
