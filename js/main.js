// 当鼠标放到导航条上时
// 在地址上
	$('.location, .city').hover (
		function() {
			$('.city').show();
			$('.location').addClass('nav-pull-down-action');
		},
		function() {
			$('.city').hide();
		}
	)

	/*在我的商城上*/
	$(".my-shop,.my-shop-panel").hover (
		function () {
			var locatOffset = $('.my-shop').offset();
			$('.my-shop-panel').show();
			$('.my-shop-panel').css('left', locatOffset.left + 'px');
			$('.my-shop-panel').css('top',(locatOffset.top + 35) + 'px');
		},
		function() {
			$('.my-shop-panel').hide();
		}
	)

	// 幻灯片
	var nowKey = 1;
	$('.carousel_img[name=1]').show();
	$('.icon i[name=1]').css('color', '#f00');
	objTime = setInterval(Carousel, 2500);
	

// 幻灯片
function Carousel() {
	var forKey = 1;
	nowKey++;
	//便利img标签
	$('.carousel_img').each(function(){
		//如果已显示
		if (!$(this).is(":hidden") && (nowKey-1) == forKey) {
			if (nowKey == 6) {
				nowKey = 1;
				$('.carousel_img[name=1]').fadeIn(800);
				console.log(nowKey);
			}else{
				$(this).next('img').fadeIn(800);
			}
			$(this).fadeOut(800);
		}
		forKey++;
	});
	
	//下面红点跟着幻灯片动
	if (nowKey == 1) {
		$(".icon i[name=1]").css("color", "#f00");
		$(".icon i[name=5]").css("color", "#fff");
	}else{
		$(".icon i[name="+nowKey+"]").css("color", "#f00");
		$(".icon i[name="+(nowKey-1)+"]").css("color", "#fff");
	}
}

// 鼠标放到幻灯片上暂停
$('.slide').hover (
	function() {
		clearInterval(objTime);
		$('.prevNext').show();
	},
	function() {
		objTime = setInterval(Carousel, 2500);
		$('.prevNext').hide();
	}
)

//点击幻灯片的小圆点
$('.icon i').hover(function(){
	//先消失
	tempKey = parseInt($(this).attr("name"));
	$(".icon i[name="+nowKey+"]").css("color", "#fff");
	//如果选中的和上一个不一样时
	if (tempKey != nowKey) {
		$(".carousel_img[name="+nowKey+"]").fadeOut(800);
	}
	nowKey = tempKey; 
	//再出现
	$(this).css("color", "#f00");
	$(".carousel_img[name="+nowKey+"]").fadeIn(800);

},function(){});

// 点击上一张下一张
function PrevNextClick(flag){
	if (flag == 1){
		if (nowKey>1) {
			$(".icon i[name="+nowKey+"]").css("color", "#fff");
			$(".carousel_img[name="+nowKey+"]").fadeOut(800);
			nowKey--;
		}
	} else if(flag == 2) {
		if (nowKey<5) {
			$(".icon i[name="+nowKey+"]").css("color", "#fff");
			$(".carousel_img[name="+nowKey+"]").fadeOut(800);
			nowKey++;
		}
	}
	$(".icon i[name="+nowKey+"]").css("color", "#f00");
	$(".carousel_img[name="+nowKey+"]").fadeIn(800);
}

// 倒计时
function countDowm(){
	var seconds = parseInt($('.count-down-seconds').html()),
	    hour    = parseInt($('.count-down-hour').html()),
	    minute  = parseInt($('.count-down-minute').html());

	if (seconds == 0) {
		$('.count-down-seconds').html('59');
		minute = minute - 1;

		if (minute < 10) {
			$('.count-down-minute').html('0' + minute);
		}else{
			$('.count-down-minute').html(minute);
		}	
	}else{
		seconds = seconds - 1;
		if (seconds < 10) {
			$('.count-down-seconds').html('0' + seconds);
			if (seconds == 0 && minute == 0) {
				clearInterval(objtime);
			}
		}else{
			$('.count-down-seconds').html(seconds);
		}
	}
}

objtime = setInterval(countDowm, 1000);

/*商城面板*/
$('.nav-side li,.detail-item-panel .panel').hover(  
	function() {
		var slideoffset = $('.nav-side').offset();
		var index = $(this).index();

		//$(".detail-item-panel").show();
		$(".detail-item-panel .panel").eq(index).show();

		$('.detail-item-panel .panel').css('left', (slideoffset.left + 200) + 'px');
		$('.detail-item-panel .panel').css('top', slideoffset.top + 'px');
	},
	function() {
		$(".detail-item-panel .panel").hide();
	}
)

//鼠标经过限时秒杀商品时向上移动
$('.seckill-item').hover(
	function() {
		$(this).children('.seckill-item-img').children('img').animate({
			'margin-top' : 0
		})
	},
	function() {
		$(this).children('.seckill-item-img').children('img').animate({
			'margin-top' : '8px'
		})
	}
)

// 鼠标经过电脑数码图片向左滑
$('.item-four-detail-img').hover (
	function() {
		$(this).children('img').animate ({
			'margin-left' : '-5px'
		})
	},
	function() {
		$(this).children('img').animate ({
			'margin-left' : '0'
		})
	}
)





