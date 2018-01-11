$(function(){
    //menu
    $('#screen').css('height',$(window).height());
    $('#menu').on('click',function(){  
            $('#slide-menu').css('display','block');
            $('#screen-right').css('display','block');
            $('#screen').css('display','block');
    });
  
         $('#screen-right').on('click',function(e){   //点击右侧阴影处可使侧边栏消失
              if($('#slide-menu').css('display')=='block'){
                $('#slide-menu').css('display','none');
                $(this).css('display','none');
                $('#screen').css('display','none');
               }
              
         } );
        //  $('#screen').trigger('click');
         window.onscroll= function(){    //滚动条滚动也能让侧边栏消失
            if($('#slide-menu').css('display')=='block'){
                $('#slide-menu').css('display','none');
                $('#screen').css('display','none');
               }
         }  
    $('.menu-text').siblings($(this)).hide();
    $('.menu-text')
    $('.menu-text').on("click",function(){
        $(this).siblings($(this)).stop().slideToggle();      
    });



    //footer 的折叠菜单
    $('.item-title').siblings($(this)).css('width','100%');
    $('.item-title').on("click",function(){
        $(this).siblings($(this)).stop().slideToggle();      
    });
})