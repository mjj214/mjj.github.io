window.onload=function(){
	// 搜素框样式
function $(id){
			return document.getElementById(id)}
			$("ss").oninput=function(){
				if($("ss").value==""){
					$("message").style.display="block";
				}
				else{
					$("message").style.display="none";
				}
			}

   // topbanner关闭
$("close").onclick=function(){
	$("topban").style.display="none";
}
// 登录框
$("dl").onclick=function(){
	$("bigbox").style.display="block"
	$("box").style.display="block";
}
$("close1").onclick=function(){
	$("box").style.display="none";
	$("bigbox").style.display="none"
}

// 菜单栏鼠标滑过变色

 
//  var hhs=document.getElementById("hh");
// for(var i=0;i<=hhs.length;i++){
// hhs[i].onmouseover=function(){
// 		hhs[i].style.backgroundColor="#fff";
// 		hhs[i].style.color="black";
// 	}
// }
// }
$("on1").onmouseover=function(){
	$("img").style.backgroundImage="url(images/slider1.jpg)";
}
$("on2").onmouseover=function(){
	$("img").style.backgroundImage="url(images/01.jpg)";
}

$("on3").onmouseover=function(){
	$("img").style.backgroundImage="url(images/0.jpg)";
}
$("on4").onmouseover=function(){
	$("img").style.backgroundImage="url(images/31.jpg)";
}
$("on5").onmouseover=function(){
	$("img").style.backgroundImage="url(images/4.jpg)";
}

}