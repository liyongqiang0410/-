// news 
	$(function(){
		var aImg=$('.switch_pic').children();
		var switch_ctrlspan=$('.switch_ctrl').children();
		var i=0;
		var firstInterval;
		interval();
		$('.switch_ctrl').children(":first").css("background","url(img/index.png)  -811px -94px ");
		$('.news_tab').children(":first").children().css("background","url(./img/newstab.png) 0px -28px");
		$(".luntan_tab").children().children().eq(0).css({"opacity":1,"transform":"translateY(-30px)","transition":"all 0.5s ease"});
		function showImg(i){
			$('.switch_ctrl').children().css("background","url(img/index.png)  -794px -211px ");
			$('.switch_ctrl').children().eq(i).css("background","url(img/index.png) -811px -94px");
			$('.switch_pic').children().eq(i).siblings().css({"opacity":0,"z-index":5,"display":"none"});
			$('.switch_pic').children().eq(i).css({"opacity":1,"z-index":999,"display":"block"});
		}
		function interval(){
			firstInterval=setInterval(function(){
				if (i>=aImg.length) {
					i=0;
				}
				showImg(i);
				i++;
			},2000);
		}
		tiao();
		function tiao(){
			$(".switch_pic").mouseenter(function(){
				clearInterval(firstInterval);
			});
			$(".switch_pic").mouseleave(function(){
				interval(i);
			});
			$(".switch_ctrl").children().mouseenter(function(){
				clearInterval(firstInterval);
				$(this).siblings().css("background","url(img/index.png)  -794px -211px ");
				$(this).css("background","url(img/index.png) -811px -94px");
				var imgIndex=$(".switch_ctrl").children().index($(this));
                showImg(imgIndex);
				i=imgIndex+1;
				interval(i);
			});
			// $(".switch_ctrl").mouseleave(function(){
			// });
		}
/*    box_title    */
/*box_title 与 news 联系*/
		$('.news_tab').children().mouseenter(function(){
		/* box_title 的子元素索引 */
			$('.news_tab').children().removeAttr("active1");
			var imgIndex=$(".news_tab").children().index($(this));
			var off_x=-imgIndex*83;
		/*news 清空类 active2 不展示*/
			$(".news").removeClass("active2");
		/*news 添加类 active2 类名 展示*/
			$(".news").eq(imgIndex).addClass("active2");
			if (imgIndex==0) {
				$('.news_tab').children().eq(1).children().css("background","url(img/newstab.png) -83px 0px");
				$('.news_tab').children().eq(2).children().css("background","url(img/newstab.png) -166px 0px");
				$('.news_tab').children().eq(3).children().css("background","url(img/newstab.png) -249px 0px");
				$(this).children().css("background","url(img/newstab.png) 0px -28px");
			}else{
				$('.news_tab').children().eq(0).children().css("background","url(img/newstab.png) 0px 0px");
				$('.news_tab').children().eq(1).children().css("background","url(img/newstab.png) -83px 0px");
				$('.news_tab').children().eq(2).children().css("background","url(img/newstab.png) -166px 0px");
				$('.news_tab').children().eq(3).children().css("background","url(img/newstab.png) -249px 0px");
				$(this).children().css("background","url(img/newstab.png) "+off_x+"px -28px");
			}
		});
		$('.news_tab').children().mouseleave(function(){
			var imgIndex=$(".news_tab").children().index($(this));
			var off_x=-imgIndex*83;
			$(this).children().css("background","url(img/newstab.png) "+off_x+"px -28px");
		});
/*icon-font-more*/
		$(".more").mouseover(function(){
			$(".more").css({"transform":"rotate(180deg)","transition":"all 0.8s ease "});
		});
		$(".more").mouseout(function(){
			$(".more").css({"transform":"rotate(0deg)","transition":"all 0.8s ease "});
		});

/*<!-- 游戏图赏 高清视屏 -->*/	
		$(".bz").mouseover(function(){
			$(".bz .flip_item_front").css({"transform":"rotateY(90deg)","transition":"all 0.25s ease","opacity":0});
			$(".bz .flip_item_back").css({"transform":"rotateY(0deg)","transition":"all 0.5s ease","transition-delay":"0.25s","opacity":1});
		})
		$(".bz").mouseleave(function(){
			$(".bz .flip_item_back").css({"transform":"rotateY(0deg)","transition":"all 0.25s ease","opacity":0});
			$(".bz .flip_item_front").css({"transform":"rotateY(0deg)","transition":"all 0.5s ease","transition-delay":"0.25s","opacity":1});
		})
		$(".video").mouseover(function(){
			$(".video .flip_item_front").css({"transform":"rotateY(90deg)","transition":"all 0.25s ease","opacity":0});
			$(".video .flip_item_back").css({"transform":"rotateY(0deg)","transition":"all 0.5s ease","transition-delay":"0.25s","opacity":1});
		})
		$(".video").mouseleave(function(){
			$(".video .flip_item_back").css({"transform":"rotateY(0deg)","transition":"all 0.25s ease","opacity":0});
			$(".video .flip_item_front").css({"transform":"rotateY(0deg)","transition":"all 0.5s ease","transition-delay":"0.25s","opacity":1});
		})
/*****论坛*****/
		$(".luntan_tab").children().mouseenter(function(){  //a
			var Index=$(".luntan_tab").children().index($(this));
			$(".luntan_tab").children().removeClass("active4");
			$(this).addClass("active4");
			$(".lun_news").children().removeClass("active5");
			$(".lun_news").children().eq(Index).addClass("active5");
			$(this).children().css({"opacity":1,"transform":"translateY(-30px)","transition":"all 0.5s ease"});
			$(this).siblings().children().css({"opacity":0,"transform":"translateY(0px)","transition":"all 0.5s ease"});
		})
		// $(".luntan_tab").children().mouseleave(function(){
		// 		$(".luntan_tab").children().removeClass("active4");
		// 	 	$(this).children().css({"opacity":0,"transform":"translateY(0px)","transition":"all 0.5s ease"});
		// })
/****论坛新闻****/		
		$(".news5").children(":odd").css({"padding-left":"12px","margin":"12px 0 0 45px","float":"right"});//索引奇数
		$(".news5").children(":even").css({"padding-left":"12px","margin":"12px 0 0 0","float":"left"});//索引偶数
		$(".icon-jia").parent().mouseenter(function(){
			$(".NIT_share_more").show();
		})
		$(".icon-jia").parent().mouseleave(function(){
			$(".NIT_share_more").children().mouseenter(function(){
				$(".NIT_share_more").show();
				$(this).css("background","#ccc");
			});
			$(".NIT_share_more").children().mouseleave(function(){
				$(this).css("background","#fff");
				$(".NIT_share_more").delay(2500).hide(0);
			});
		})
/******游戏目录******/
		$(".header1").mouseenter(function(){
			$(".display").stop(true);
			$(".display").slideDown(500);
		})
		$(".header1").mouseleave(function(){
			$(".display").slideUp(200);
		})


	})