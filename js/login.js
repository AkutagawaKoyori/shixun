document.getElementById('loginClick').onclick = function() {
				document.getElementById('loginClick').style.color = "dodgerblue";
				document.getElementById('registerClick').style.color = "darkgrey";
				document.getElementById('loginBox').style.right = "0%";
			}
			document.getElementById('registerClick').onclick = function() {
				document.getElementById('loginClick').style.color = "darkgrey";
				document.getElementById('registerClick').style.color = "dodgerblue";
				document.getElementById('loginBox').style.right = "100%";
			}

			for (let h in document.getElementsByClassName('inputU')) {
				document.getElementsByClassName('inputU')[h].onfocus = function() {

					if (document.getElementsByClassName('inputU')[h].value.length < 6) {
						document.getElementsByClassName('errorU')[h].style.display = 'block'
					} else {
						document.getElementsByClassName('errorU')[h].style.display = 'none'
					}
				}
			}

			for (let h in document.getElementsByClassName('input')) {
				document.getElementsByClassName('input')[h].onfocus = function() {

					if (document.getElementsByClassName('input')[h].value.length < 6) {
						document.getElementsByClassName('errorP')[h].style.display = 'block'
					} else {
						document.getElementsByClassName('errorP')[h].style.display = 'none'
					}
				}
			}

			for (let h in document.getElementsByClassName('inputU')) {
				document.getElementsByClassName('inputU')[h].onblur = function() {

					if (document.getElementsByClassName('inputU')[h].value.length < 6) {
						document.getElementsByClassName('errorU')[h].style.display = 'block'
					} else {
						document.getElementsByClassName('errorU')[h].style.display = 'none'
					}
				}
			}

			for (let h in document.getElementsByClassName('input')) {
				document.getElementsByClassName('input')[h].onblur = function() {

					if (document.getElementsByClassName('input')[h].value.length < 6) {
						document.getElementsByClassName('errorP')[h].style.display = 'block'
					} else {
						document.getElementsByClassName('errorP')[h].style.display = 'none'
					}
				}
			}
			document.getElementsByClassName('loginBtn')[0].onclick = function() {
				var loginusername = document.getElementsByClassName('loginF')[0][0].value;
				var loginpassword = document.getElementsByClassName('loginF')[0][1].value;
				if (localStorage.userdata) {
					var userdata = JSON.parse(localStorage.userdata);
				} else {
					var userdata = []
				}


				if (!loginusername || !loginpassword) {
					alert("输入框不能为空");
					return
				}
				if (loginusername.length < 6) {
					document.getElementsByClassName('error')[0].style.display = 'block';
				}
				if (loginusername.split(" ").length != 1 || loginpassword.split(" ").length != 1) {
					alert("用户名或密码不能包含空格");
					return
				}

				for (let i = 0; i < userdata.length; i++) {
					if (userdata[i].username == loginusername) {
						if (loginusername == userdata[i].username && loginpassword == userdata[i].password) {
							if (document.getElementsByClassName('checkboxI')[0].checked) {
								document.cookie = 'userID=' + i + '; Expires=' + Date() + 7+ ';' ;
							} else {
								document.cookie = 'userID=' + i;
							}
							location.href = 'index.html';
							return
						} else {
							alert("密码错误");
							return
						}
					} else if (i == userdata.length - 1) {
						let re = confirm("该账号未注册是否注册");
						if (re) {
							document.getElementById('loginClick').style.color = "darkgrey";
							document.getElementById('registerClick').style.color = "dodgerblue";
							document.getElementById('loginBox').style.right = "100%";
							document.getElementsByClassName('register')[0][0].value = loginusername;
						}
					}
				}
			}
			document.getElementById('registerBtn').onclick = function() {
				if (localStorage.userdata) {
					var userdata = JSON.parse(localStorage.userdata);
				} else {
					var userdata = []
				}
				let reuaername = document.getElementsByClassName('register')[0][0].value;
				let repassword = document.getElementsByClassName('register')[0][1].value;
				let repassword1 = document.getElementsByClassName('register')[0][2].value;
				let reheadImg = document.getElementsByClassName('register')[0][3].value;
				if (reuaername.split(" ").length != 1 || repassword.split(" ").length != 1 || repassword1.split(" ")
					.length != 1) {
					alert("用户名或密码不能包含空格");
					return
				}

				for (let i = 0; i < userdata.length; i++) {
					if (userdata[i].username == reuaername) {
						alert("该账号已注册");
						return
					}
				}
				if (!reuaername || !repassword || !repassword1) {
					alert("输入框不能为空");
					return
				}
				if (repassword !== repassword1) {
					alert("输入的密码不相同");
					return
				}
				if (reheadImg) {
					data = {
						"username": reuaername,
						"password": repassword,
						"money": 114514,
						"headImg": reheadImg,
						"car": {
							"commodityId": [],
							"number": []
						},
						'order':{
							"commodityId": [],
							"number": [],
							"orderTime": []
						}
					}
				} else {
					data = {
						"username": reuaername,
						"password": repassword,
						"money": 114514,
						"headImg": "reheadImg",
						"car": {
							"commodityId": [],
							"number": []
						},
						'order':{
							"commodityId": [],
							"number": [],
							"orderTime": []
						}
					}
				}
				userdata.push(data);
				localStorage.userdata = JSON.stringify(userdata);
				alert("注册成功");
				document.getElementsByClassName('loginF')[0][0].value = reuaername;
				document.getElementById('loginClick').style.color = "dodgerblue";
				document.getElementById('registerClick').style.color = "darkgrey";
				document.getElementById('loginBox').style.right = "0%";
			}