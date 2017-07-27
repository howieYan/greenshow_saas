$(function(){
	$("#all").click(function(){
	    if(this.checked){
	        $("#list>input:checkbox").prop("checked", true);
	    }else{
	        $("#list>input:checkbox").prop("checked", false);
	    }
	});
})
$(function(){
	$('#page1Add').click(function(){
		!function(){
            //页面一打开就执行，放入ready是为了layer所需配件（css、扩展模块）加载完毕
            layer.ready(function(){
                layer.open({
                    type: 2,
                    title: '添加页',
                    maxmin: true,
                    area: ['80%', '70%'],
                    content: '../html/addText.html'
                });
            });
    	}();
	})
})