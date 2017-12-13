$(function(){
    //menu
    $('#screen').css('height',$(window).height());
    $('#menu').on('click',function(){  //显示
        $('#slide-menu').css('display','block');
        $('#screen').css('display','block');
    });
    $('#slide-menu').blur(function(){
        $('#slide-menu').css('display','none');
        $('#screen').css('display','none');
    });
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