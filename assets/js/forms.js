$(function(){

	/**
	 * Checkbox
	 */
	$("input[type='checkbox']:checked").each(function(){
	    $(this).next('label.checkbox').addClass('checked');
	});

	$('label.checkbox').on('click', function(){
	    if( $(this).hasClass('checked') ){
	        $(this).prev('input[type=checkbox]').removeAttr('checked', 'checked');
	        $(this).removeClass('checked');
	    }else {
	        $(this).prev('input[type=checkbox]').attr('checked', 'checked');
	        $(this).addClass('checked');
	    }
	});


	/**
	 * Generating Selectbox Menus on the fly
	 */
	// Create the dropdown base
	$("<div class='selectWrap'><select class='select-style js-selectMenu' /></div>").appendTo(".leftNav");

	// Create default option "Go to..."
	$("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
	}).appendTo(".leftNav select");

	// Populate dropdown with menu items
	$(".leftNav ul li a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo(".leftNav select");
	});

	/**
	 * Selectbox page navigation
	 */
	$(".js-selectMenu").change(function() {
		window.location = $(this).find("option:selected").val();
	});



});