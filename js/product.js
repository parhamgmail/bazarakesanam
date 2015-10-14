$(document).ready(function(){
	$('.products').click(function(){
		var img=$(this).find("img").attr("src");
		var title=$(this).find("div").text();
		$('#product .img').attr("src",img);
		$('#product .title').text(title);
		$('#gotoproductdetail').html("<a style='display:none;' href='#product' data-transition='slide'></a>");
		$('#gotoproductdetail a').click();
	});
});
