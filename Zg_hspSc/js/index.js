    'use strict';

    window.onload = function(){
        // 左右切换
        function slider(obj,last,next){
            var oLast = document.querySelector(last);
            var oNext= document.querySelector(next);
            var oBox = document.querySelectorAll(obj)[0];

            oNext.onclick = function(){
                 oBox.style.marginLeft = '-1246px';
            };
            oLast.onclick = function(){
                 oBox.style.marginLeft = '0px';
            };
        }
        //播放选项卡
        function tab(btn,obj){
            var oBtn = document.querySelectorAll(btn);
            var oDiv = document.querySelectorAll(obj);

            for(var i = 0;i<oBtn.length;i++){
                oBtn[i].index = i;
                oBtn[i].onmouseover = function(){
                    for(var i = 0;i<oDiv.length;i++){
                        oDiv[i].style.display = 'none';  
                    }
                    oDiv[this.index].style.display = 'block';
                }
            }
          
        }

        //自动播放选项卡
        function tab_move(){
            var oBox = document.querySelector('.banner');  
            var aBtn = oBox.querySelectorAll('.banner>span');
            var aDiv = oBox.querySelectorAll('.banner>div');
            var iNow = 0;
            var timer = null;

            function show(){
                for(var i = 0;i<aBtn.length;i++){
                    aBtn[i].className = '';
                    aDiv[i].style.display = 'none';
                }
                aBtn[iNow].className = 'on';
                aDiv[iNow].style.display = 'block';
            }

            for(var i = 0;i<aBtn.length;i++){
                aBtn[i].index = i;
                aBtn[i].onclick = function(){
                    iNow = this.index;
                    show(); 
                };  
            }
            
            function next(){
                iNow++;
                if(iNow == aBtn.length){
                    iNow =0;
                }
                show();         
            }
            clearInterval(timer);
            timer = setInterval(next,3000);
            oBox.onmouseover = function(){
                clearInterval(timer);   
            };
            
            oBox.onmouseout = function(){
                timer = setInterval(next,3000);
            };
        };
        // 移动块
        // function move(){
        //     var aLi = document.querySelectorAll = '.box_ware>ul>li';
        //     var oBox = document.querySelectorAll = '.box_ware>ul>li>div';
            
        //     for(var i = 0;i<aLi.length;i++){
        //         aLi[i].index = i;

        //         aLi[i].onmouseover = function(){
        //             for(var i = 0;i<aLi.length;i++){

        //                 aLi[i].className = "";
        //             }
        //             aLi[this.index].className = "box_move";
        //         }
               
        //     }
        // }

        
        ;(function(){

            slider('.hc>ul','.last','.next');
            slider('.tj>ul','.lasts','.nexts');

            tab('.nav_list>ul>li','.nav_lt>ul');
            tab_move();
            // move();
        })() 

    };
    // placeholder兼容
	  if( !('placeholder' in document.createElement('input')) ){   

	    $('input[placeholder],textarea[placeholder]').each(function(){    
	      var that = $(this),    
	      text= that.attr('placeholder');    
	      if(that.val()===""){    
	        that.val(text).addClass('placeholder');    
	      }    
	      that.focus(function(){    
	        if(that.val()===text){    
	          that.val("").removeClass('placeholder');    
	        }    
	      })    
	      .blur(function(){    
	        if(that.val()===""){    
	          that.val(text).addClass('placeholder');    
	        }    
	      })    
	      .closest('form').submit(function(){    
	        if(that.val() === text){    
	          that.val('');    
	        }    
	      });    
	    });    
	  }   
 


