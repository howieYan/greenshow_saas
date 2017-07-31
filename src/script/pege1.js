$(function () {
    var winWidth= $('.layui-layer-shade').width();
    var winHeight = $('.layui-layer-shade').height();
    var alertWidth = $('.alert_header').width();
    var alertHeight = $('.alert_header').height();
    $('.alert_header').css({
        'left':winWidth/2-alertWidth/2+'px',
        'top':winHeight/2-alertHeight/2+'px'
    })
})