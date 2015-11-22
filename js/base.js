//获得DOM元素的属性
//getstyle(obj,"width")
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr]; //IE下的样式
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

// 获得下一个子节点
function getNextNode(node) {
	node = typeof node == "string" ? document.getElementById(node) : node;
	var nextNode = node.nextSibling; //ie下的属性
	if (!nextNode) return null;
	if (!document.all) {
		While(true) {
			if (nextNode.nodeType == 1) {
				break;
			} else {
				if (nextNode.Sibling) {

					nextNode = nextNode.nextSibling;
				} else {
					break;
				}

			}

		}

	}
	return nextNode;

}

//阻止冒泡事件

function cancelBubble(ev) {
	if (document.all) {
		ev.cancelBubble = true;
	} else {
		ev.stopPropagation();
	}
}

function trim(oStr) {
	return oStr.replace(/^\s+|\s+$/g, "");
}

function isNumber(s) {
	return !isNaN(s);
}

function isString(s) {
	return typeof s == "string";
}

function isArray(s) {
	return instanceof Array;
}

//对类的操作
function getByClass(oParent, sClass) {
	var aResult = [];
	var childNodes = oParent.getElementsByTagName("*");
	var re = new RegExp("\\b" + sClass + "\\b", "i");
	for (var i = 0; i < childNodes.length; i++) {
		if (re.test(childNodes[i].className)) {
			aResult.push(childNodes[i]);
		}


	}

	return aResult;
}

function addClass(node, str) {
	var re = new RegExp("\\b" + str + "\\b");
	if (!re.test(node.className)) {
		node.className = node.className + " " + str;
	}
}

function removeClass(node, str) {
	var re = new RegExp("\\b" + str + "\\b");
	node.className = node.className.replace(re, "");

}

function oAjax()
{
	  var request=null;
	  if(window.ActiveXObject())
	  {
	  	  request=new  ActiveXObject("Microsoft.XMLHTTP");
	  }
	  else
	  {
	  	   request=new XMLHttpRequest();
	  }
	  
	   return request;
}

// 时间中的补零操作
 function fillZero(num, digit)
	{
		var str=''+num;//将数字转化为字符串
		
		while(str.length<digit)
		{
			str='0'+str;
		}
		
		return str;
	}
