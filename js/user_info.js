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
userid = getCookie('userID');
var userdata = JSON.parse(localStorage.userdata)
var commodityData = JSON.parse(localStorage.commodityData)
document.getElementsByClassName('userName')[0].innerHTML = '你好，' + userdata[userid].username
document.getElementsByClassName('integralColor')[0].innerHTML = +userdata[userid].money
if (getCookie('sginUP in') == 1) {
	document.getElementsByClassName('integra')[0].innerHTML =
		'<span class="integraUse">积分使用记录 </span><a class="textBlueBoldSoild">点击查看></a><span class="signIn textBlue">您今天已经签到过了</span>'
}


function signin() {
	if (getCookie('sginUP in') == 1) {
		return
	}
	userdata[userid].money += 5
	document.getElementsByClassName('integralColor')[0].innerHTML = +userdata[userid].money
	document.getElementsByClassName('integra')[0].innerHTML =
		'<span class="integraUse">积分使用记录 </span><a class="textBlueBoldSoild">点击查看></a><span class="signIn textBlue">您今天已经签到过了</span>'
	localStorage.userdata = JSON.stringify(userdata)
	var date = new Date()
	let savetime = 1
	date.setDate(date.getDate() + savetime)
	document.cookie = 'sginUP in=1;expires=' + date.toGMTString() + 1
}


function formdate(now){
	let t= new Date(now)
	let year=t.getFullYear()
	let month=t.getMonth()+1
	let date=t.getDate()
	let hour=t.getHours()
	let minute=t.getMinutes()
	let second=t.getSeconds()
	return year+"-"+month+"-"+date+" "+hour+" : "+minute+" : "+second;

}
var userId=getCookie('userID')
var pageId = location.href.split('page=')[1]
if(pageId){
	document.getElementsByClassName('page')[pageId].classList.add('pageon')
}
if (pageId == 0) {
	document.getElementsByClassName('box3')[0].innerHTML ='<div class="jxx_top"><h2>我的订单</h2><ul class="clearfix"><li><a>全部订单</a></li></ul></div><div class="jxx_center clearfix"><table border="" cellspacing="" cellpadding="" id="table_Box"><tr style="background-color: #F6F6F6;line-height: 30px;"><th id="A">订单明细</th><th>订单金额</th><th>数量</th><th>时间</th></tr></table></div><div class="jxx_down""><img src="./img/user_info/nodata.png" alt="nodata"/><p>您暂无此类订单，赶快去下单吧！</p><a href="index.html">去逛逛</a></div>'
	if (userdata[userId].order.commodityId.length>0) {
		document.getElementsByClassName('jxx_down')[0].style.display='none'
		let orderData=document.getElementById('table_Box').innerHTML
		
		for(let r=0;r<userdata[userId].order.commodityId.length;r++){
			if (commodityData[userdata[userId].order.commodityId[r]].xMoney == null) {
				var money = commodityData[userdata[userId].order.commodityId[r]].yuMoney
			} else {
				var money = commodityData[userdata[userId].order.commodityId[r]].yuMoney
			}
			
			orderData+='<tr style="text-align: center;"><td style="text-align: left;"><img src="img/index/commodityImg/'
			+commodityData[userdata[userId].order.commodityId[r]].imgPath+' "style="width: 80px; display:block;float:left" ><p style="line-height: 80px;display: block;">'
			+commodityData[userdata[userId].order.commodityId[r]].name+'</p></td><td>'
			+money*userdata[userId].order.number[r]+'</td><td>'
			+userdata[userId].order.number[r]+'</td><td>'+formdate(userdata[userId].order.orderTime[r])+'</td></tr>'
		}
		
		document.getElementById('table_Box').innerHTML=orderData
	}
	
	
}



for (let i = 0; i < document.getElementsByClassName('page').length; i++) {
	document.getElementsByClassName('page')[i].onclick = function() {
		if (document.getElementsByClassName('page').length > 1) {
			for (let o = 0; o < document.getElementsByClassName('page').length; o++) {
				document.getElementsByClassName('page')[o].classList.remove('pageon')
			}
		}
		document.getElementsByClassName('page')[i].classList.add('pageon')
		location.href = 'user_info.html?page=' + i
	}
}
if (document.getElementById('recharge')) {
	document.getElementById('recharge').onclick = function() {
		userdata = JSON.parse(localStorage.userdata)
		userdata[userId].money = Number.parseInt(userdata[userId].money)
		let recharge_value = prompt('输入充值的积分')
		let reg = /^[0-9]*$/;
		if (!reg.test(recharge_value)) {
			alert('包含除数字外的符号')
			return
		}
		userdata[userId].money=parseInt(userdata[userId].money)
		userdata[userId].money += parseInt(recharge_value)
		localStorage.userdata = JSON.stringify(userdata)
		location.reload()
	}
}
