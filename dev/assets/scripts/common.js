
(function(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.moveTo(0,432);
	ctx.lineTo(334,0);
	ctx.strokeStyle = "#ffffff";
	ctx.lineWidth = 1;
	ctx.setLineDash([]);
	ctx.stroke();
})();
$(document).ready(function() {
	$(document).on('click', '.burger', function(){
		var nav = $('.nav');
        $('.burger').toggleClass('active');
        nav.toggleClass('active');
		
	});
});