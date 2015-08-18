$(document).ready(function() {
    $("[href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });

    $("a:has(img)").attr("target", "_blank");

	$('.code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});