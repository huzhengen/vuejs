$(function(){
	var id = getUrlId();
	var url = 'http://cnodejs.org/api/v1/topics?page=' + id;
	console.log(id);
	console.log(url);
	getDataByJson(url, pushDown);
	laypage({
        cont: $(".pagination"),
        pages: 100,
        curr: id,
        jump: function(e, first){
            if(!first){
                location.href = '?'+e.curr;
            }
        }
    });
});

//pushDown
function pushDown(data){
	// console.log(data);
	// for(var i=0; i<data.data.length; i++){
	// 	data.data[i].create_at = goodTime(data.data[i].create_at);
	// }

	Vue.filter('time', function(value){
		return goodTime(value)
	})
	

	var vm = new Vue({
		el: '#app',
		data: data
	});
}

//获取链接里的id
function getUrlId(){
	var host = window.location.href;
	var id = host.substring(host.indexOf('?')+1, host.length);
	return id;
}

//时间
function goodTime(str){
	var now = new Date().getTime();
	var oldTime = new Date(str).getTime();
	var difference = now - oldTime;
	var result = '';
	var minute = 1000*60;
	var hour = minute*60;
	var day = hour*24;
	var week = day*7
	var halfMonth = day*15;
	var month = day*30;
	var year = month*12;
	var _year = difference/year;
	var _month = difference/month;
	var _week = difference/week;
	var _day = difference/day;
	var _hour = difference/hour;
	var _minute = difference/minute;

	if(_year>=1){
		result = ~~(_year) + '年前';
	}else if(_month>=1){
		result = ~~(_month) + '个月前';
	}else if(_week>=1){
		result = ~~(_week) + '个星期前';
	}else if(_day>=1){
		result = ~~(_day) + '天前';
	}else if(_hour>=1){
		result = ~~(_hour) + '个小时前';
	}else if(_minute>=1){
		result = ~~(_minute) + '分钟前';
	}else{
		result = '刚刚';
	}
	return result;
}

//ajax方法
function getDataByJson(url, callback){
	$.ajax({
		type: 'get',
		url: url,
		dataType: 'json',
		success: function(data){
			if(data.success){
				callback(data);
			}else{
				alert('调用接口失败')
			}
		},
		error: function(data){
			alert(JSON.stringify(data))
		}
	})
}