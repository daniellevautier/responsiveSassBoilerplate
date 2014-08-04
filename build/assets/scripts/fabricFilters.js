//https://github.com/bigspotteddog/ScrollToFixed plugin miniied here
(function(a){a.isScrollToFixed=function(b){return !!a(b).data("ScrollToFixed")};a.ScrollToFixed=function(d,i){var l=this;l.$el=a(d);l.el=d;l.$el.data("ScrollToFixed",l);var c=false;var G=l.$el;var H;var E;var e;var y;var D=0;var q=0;var j=-1;var f=-1;var t=null;var z;var g;function u(){G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed");f=-1;D=G.offset().top;q=G.offset().left;if(l.options.offsets){q+=(G.offset().left-G.position().left)}if(j==-1){j=q}H=G.css("position");c=true;if(l.options.bottom!=-1){G.trigger("preFixed.ScrollToFixed");w();G.trigger("fixed.ScrollToFixed")}}function n(){var I=l.options.limit;if(!I){return 0}if(typeof(I)==="function"){return I.apply(G)}return I}function p(){return H==="fixed"}function x(){return H==="absolute"}function h(){return !(p()||x())}function w(){if(!p()){t.css({display:G.css("display"),width:G.outerWidth(true),height:G.outerHeight(true),"float":G.css("float")});cssOptions={"z-index":l.options.zIndex,position:"fixed",top:l.options.bottom==-1?s():"",bottom:l.options.bottom==-1?"":l.options.bottom,"margin-left":"0px"};if(!l.options.dontSetWidth){cssOptions.width=G.width()}G.css(cssOptions);G.addClass(l.options.baseClassName);if(l.options.className){G.addClass(l.options.className)}H="fixed"}}function b(){var J=n();var I=q;if(l.options.removeOffsets){I="";J=J-D}cssOptions={position:"absolute",top:J,left:I,"margin-left":"0px",bottom:""};if(!l.options.dontSetWidth){cssOptions.width=G.width()}G.css(cssOptions);H="absolute"}function k(){if(!h()){f=-1;t.css("display","none");G.css({"z-index":y,width:"",position:E,left:"",top:e,"margin-left":""});G.removeClass("scroll-to-fixed-fixed");if(l.options.className){G.removeClass(l.options.className)}H=null}}function v(I){if(I!=f){G.css("left",q-I);f=I}}function s(){var I=l.options.marginTop;if(!I){return 0}if(typeof(I)==="function"){return I.apply(G)}return I}function A(){if(!a.isScrollToFixed(G)){return}var K=c;if(!c){u()}else{if(h()){D=G.offset().top;q=G.offset().left}}var I=a(window).scrollLeft();var L=a(window).scrollTop();var J=n();if(l.options.minWidth&&a(window).width()<l.options.minWidth){if(!h()||!K){o();G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed")}}else{if(l.options.maxWidth&&a(window).width()>l.options.maxWidth){if(!h()||!K){o();G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed")}}else{if(l.options.bottom==-1){if(J>0&&L>=J-s()){if(!x()||!K){o();G.trigger("preAbsolute.ScrollToFixed");b();G.trigger("unfixed.ScrollToFixed")}}else{if(L>=D-s()){if(!p()||!K){o();G.trigger("preFixed.ScrollToFixed");w();f=-1;G.trigger("fixed.ScrollToFixed")}v(I)}else{if(!h()||!K){o();G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed")}}}}else{if(J>0){if(L+a(window).height()-G.outerHeight(true)>=J-(s()||-m())){if(p()){o();G.trigger("preUnfixed.ScrollToFixed");if(E==="absolute"){b()}else{k()}G.trigger("unfixed.ScrollToFixed")}}else{if(!p()){o();G.trigger("preFixed.ScrollToFixed");w()}v(I);G.trigger("fixed.ScrollToFixed")}}else{v(I)}}}}}function m(){if(!l.options.bottom){return 0}return l.options.bottom}function o(){var I=G.css("position");if(I=="absolute"){G.trigger("postAbsolute.ScrollToFixed")}else{if(I=="fixed"){G.trigger("postFixed.ScrollToFixed")}else{G.trigger("postUnfixed.ScrollToFixed")}}}var C=function(I){if(G.is(":visible")){c=false;A()}};var F=function(I){(!!window.requestAnimationFrame)?requestAnimationFrame(A):A()};var B=function(){var J=document.body;if(document.createElement&&J&&J.appendChild&&J.removeChild){var L=document.createElement("div");if(!L.getBoundingClientRect){return null}L.innerHTML="x";L.style.cssText="position:fixed;top:100px;";J.appendChild(L);var M=J.style.height,N=J.scrollTop;J.style.height="3000px";J.scrollTop=500;var I=L.getBoundingClientRect().top;J.style.height=M;var K=(I===100);J.removeChild(L);J.scrollTop=N;return K}return null};var r=function(I){I=I||window.event;if(I.preventDefault){I.preventDefault()}I.returnValue=false};l.init=function(){l.options=a.extend({},a.ScrollToFixed.defaultOptions,i);y=G.css("z-index");l.$el.css("z-index",l.options.zIndex);t=a("<div />");H=G.css("position");E=G.css("position");e=G.css("top");if(h()){l.$el.after(t)}a(window).bind("resize.ScrollToFixed",C);a(window).bind("scroll.ScrollToFixed",F);if(l.options.preFixed){G.bind("preFixed.ScrollToFixed",l.options.preFixed)}if(l.options.postFixed){G.bind("postFixed.ScrollToFixed",l.options.postFixed)}if(l.options.preUnfixed){G.bind("preUnfixed.ScrollToFixed",l.options.preUnfixed)}if(l.options.postUnfixed){G.bind("postUnfixed.ScrollToFixed",l.options.postUnfixed)}if(l.options.preAbsolute){G.bind("preAbsolute.ScrollToFixed",l.options.preAbsolute)}if(l.options.postAbsolute){G.bind("postAbsolute.ScrollToFixed",l.options.postAbsolute)}if(l.options.fixed){G.bind("fixed.ScrollToFixed",l.options.fixed)}if(l.options.unfixed){G.bind("unfixed.ScrollToFixed",l.options.unfixed)}if(l.options.spacerClass){t.addClass(l.options.spacerClass)}G.bind("resize.ScrollToFixed",function(){t.height(G.height())});G.bind("scroll.ScrollToFixed",function(){G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed");A()});G.bind("detach.ScrollToFixed",function(I){r(I);G.trigger("preUnfixed.ScrollToFixed");k();G.trigger("unfixed.ScrollToFixed");a(window).unbind("resize.ScrollToFixed",C);a(window).unbind("scroll.ScrollToFixed",F);G.unbind(".ScrollToFixed");t.remove();l.$el.removeData("ScrollToFixed")});C()};l.init()};a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1000,baseClassName:"scroll-to-fixed-fixed"};a.fn.scrollToFixed=function(b){return this.each(function(){(new a.ScrollToFixed(this,b))})}})(jQuery);

/*Fabric Swatch Script*/
$(function () {
$('.fabric-docker').scrollToFixed();

//Fabric code reset on load this may need tweaking
$('.fabric-samples-wrapper input').prop("disabled", false);
$('.sofa-samples-wrapper input').prop("disabled", false);
//$('.fabric-samples-wrapper input').prop("checked", false);


$('.fabric-samples-wrapper input:checked').each( function() {
	$(this).next('label').append("<img src='assets/images/icons/fabric-selected.png' class='selected' width='36' alt=''/>");
})

$('.sofa-samples-wrapper input:checked').each( function() {
	$(this).next('label').append("<img src='assets/images/icons/fabric-selected.png' class='selected' width='36' alt=''/>");
})

$('.fabric-samples-wrapper input[type="checkbox"]').hide();
$('.sofa-samples-wrapper input[type="checkbox"]').hide();

//Force IE8 and below to respect label for element
$(".lt-ie9 .fabric-samples-wrapper label").click(function(){
    if ($(this).siblings("input").is(':disabled')){
    	//do nothing
    } else {
	    if ($(this).attr("for") != "")
	    $("#" + $(this).attr("for")).click();
	}
});
$(".lt-ie9 .sofa-samples-wrapper label").click(function(){
	if ($(this).siblings("input").is(':disabled')){
		//do nothing
	} else {		
    if ($(this).attr("for") != "")
        $("#" + $(this).attr("for")).click();
   	}
});

//required for cleraing fabric pairs
var countPairs = function() {
	$('.fabric-samples-wrapper:visible.plain').each(function(i){
	$(this).removeClass('first');
    if(!(i%2))  
        $(this).addClass('first');
	})

	$('.fabric-samples-wrapper:visible.prints').each(function(i){
		$(this).removeClass('first');
    if(!(i%2))  
        $(this).addClass('first');
	})

	$('.fabric-samples-wrapper:visible.stripe').each(function(i){
		$(this).removeClass('first');
    if(!(i%2))  
        $(this).addClass('first');
	})

	$('.fabric-samples-wrapper:visible.leather').each(function(i){
		$(this).removeClass('first');
    if(!(i%2))  
        $(this).addClass('first');
	})

}
countPairs();


var revertoAll = function(){ 
	$(".fabric-filters.styles .all").trigger('click');
    var filterStyleActiveHref = $('.fabric-filters.styles .active').prop("hash");
    var filterStyleActiveHrefClass = filterStyleActiveHref.replace("#", ".");
    
	$('h2.styled').hide();
	 //Show Headings
	if (filterStyleActiveHrefClass == '.all') {

		$('.fabric-samples-wrapper:visible').each(function () {

			if ($(this).hasClass("prints")){
    			$('h2.prints').show();     
			} else if ($(this).hasClass("leather")){
    			$('h2.leather').show();     
			} else if ($(this).hasClass("plain")){
    			$('h2.plain').show();     
			} else if ($(this).hasClass("stripe")){
    			$('h2.stripe').show();     
			}
		})
	} 
	countPairs();
}

var countFabricSwatches = function() {
//Count Fabrics
	var countFabrics = $('.fabric-docker li').length;
	if (countFabrics == 8) { //8 is max
		//disable all non checked fabrics
		$(".fabric-docker").addClass("complete");
		$("button.complete").prop("disabled", false);
		$('.fabric-samples-wrapper input:not(:checked)').addClass("disabled");

		$('.fabric-samples-wrapper input[type="checkbox"]:not(:checked)').parent('li').addClass("disabled");
		$('.fabric-samples-wrapper input[type="checkbox"]:not(:checked)').attr("disabled", "disabled");
		$(".toomanyfabrics").hide();
	} else if (countFabrics > 8) {
		$(".toomanyfabrics").show();
		$("button.complete").prop("disabled", true);
		//disable all non checked fabrics
		$(".fabric-docker").addClass("complete");
		$('.fabric-samples-wrapper input:not(:checked)').addClass("disabled");
		$('.fabric-samples-wrapper input[type="checkbox"]:not(:checked)').parent('li').addClass("disabled");
		$('.fabric-samples-wrapper input[type="checkbox"]:not(:checked)').attr("disabled", "disabled");

	} else {
		//enable all  fabrics
		$(".toomanyfabrics").hide();
		$("button.complete").prop("disabled", false);
		$(".fabric-docker").removeClass("complete");
		$('.fabric-samples-wrapper input').prop("disabled", false);
		$('.fabric-samples-wrapper input:not(:checked)').parent('li').removeClass("disabled");
	}
}
countFabricSwatches();

//Fabric Checkbox Check
$('.fabric-samples-wrapper input[type="checkbox"]').change( function () {

	
	//Remove inital fabric sample
	if ( $( "#no-fabrics-selected" ).length ) {
		$( "#no-fabrics-selected" ).remove();
	}

	//Find ID and duplicate swatch into basket
	var assignDataAttr = $(this).attr('id') + "added";
	var swatchDescription =  $(this).siblings('label').children('img').attr('alt');
	var chosenSwatch = 
	$(this).parent('li').find('label .swatch')
	.clone() 
	.wrap('<li/>')
	.parent()
	.attr('id', assignDataAttr)
	.append("<a href='#' class='removeFabric'><img src='assets/images/icons/close-2x.png' alt='close' width='24'></a>")
	.append("<p>" + swatchDescription + "</p>");

	//If change to checked add tick and append
	if ($(this).is(':checked')) {
		$(this).next('label').append("<img src='assets/images/icons/fabric-selected.png' class='selected' width='36' alt=''/>");
		$(chosenSwatch).appendTo('.fabric-docker ul');
	} else if ($(this).not(':checked')){
		//If change to not checked remove tick and delete from basket
		$(".fabric-docker ul > li").each(function() {
			if($(this).html() == chosenSwatch.html()) { 
			$(this).remove();
		}        
	});

	//Remove tick image on fabric when removed from basket
	$(this).next('label').find('img.selected').remove();
	}

	
	countFabricSwatches();

})
//SOFA CHECKING
var countSofaFabricSwatches = function() {
//Sofa Count
	var countSofas = $('.fabric-docker.sofas li').length;
	if (countSofas == 2) { //8 is max
		//disable all non checked fabrics
		$(".fabric-docker.sofas").addClass("complete");
		$('.sofa-samples-wrapper input:not(:checked)').addClass("disabled");
		$('.sofa-samples-wrapper input[type=checkbox]:not(:checked)').parent('li').addClass("disabled");
		$('.sofa-samples-wrapper input[type=checkbox]:not(:checked)').attr("disabled", "disabled");

	} else {
		//enable all  fabrics
		$(".sofa-docker.sofas").removeClass("complete");
		$('.sofa-samples-wrapper input').prop("disabled", false);
		$('.sofa-samples-wrapper input:not(:checked)').parent('li').removeClass("disabled");
	}
}

//Fabric Checkbox Check
$('.sofa-samples-wrapper input[type="checkbox"]').change( function () {

	//Remove inital fabric sample
	if ( $( "#no-fabrics-selected" ).length ) {
		$( "#no-fabrics-selected" ).remove();
	}

	//Find ID and duplicate swatch into basket
	var assignDataAttr = $(this).attr('id') + "added";
	var swatchDescription =  $(this).siblings('label').children('img').attr('alt');
	var chosenSwatch = 
	$(this).parent('li').find('label .swatch')
	.clone() 
	.wrap('<li/>')
	.parent()
	.attr('id', assignDataAttr)
	.append("<a href='#' class='removeFabric'><img src='assets/images/icons/close-2x.png' alt='close' width='24'></a>")
	.append("<p>" + swatchDescription + "</p>");

	//If change to checked add tick and append
	if ($(this).is(':checked')) {
		$(this).next('label').append("<img src='assets/images/icons/fabric-selected.png' class='selected' width='36' alt=''/>");
		$(chosenSwatch).appendTo('.fabric-docker ul');
	} else if ($(this).not(':checked')){
		//If change to not checked remove tick and delete from basket
		$(".fabric-docker ul > li").each(function() {
			if($(this).html() == chosenSwatch.html()) { 
			$(this).remove();
		}        
	});

	//Remove tick image on fabric when removed from basket
	$(this).next('label').find('img.selected').remove();
	}

	
countSofaFabricSwatches();
})



//if removed from the docker find and uncheck swatch
$('.fabric-docker ul').on('click', 'a.removeFabric',  function(){
	var swatchID = $(this).parent().attr('id').replace('added', '');
	var swatchFound = document.getElementById(swatchID)

	$(swatchFound).siblings('label').children('.selected').remove();
	$(swatchFound).prop('checked', false);
	$(this).parent().remove();
	countFabricSwatches(); 
	countSofaFabricSwatches();
	return false;
});

	
//Fabric filters Type
$('.fabric-filters.type .clickable a').click( function() {

    $('.fabric-filters.type li a').removeClass("active");
    $(this).addClass("active");
    $('.fabric-filters.type li').removeClass("active");
    $(this).parent('li').addClass("active");
    //Hide relevant tabs
    findIfTabRequired();

    var CurrentFilterTypeNow = $(this).prop("hash");
    var CurrentFilterTypeClassNow = CurrentFilterTypeNow.replace("#", ".");
    //console.log(CurrentFilterTypeClassNow);
    var filterStyleActiveHref = $('.fabric-filters.styles .active').prop("hash");
    var filterStyleActiveHrefClass = filterStyleActiveHref.replace("#", ".");

    $('.fabric-samples-wrapper').hide();
    $('.fabric-samples-wrapper'+filterStyleActiveHrefClass+CurrentFilterTypeClassNow).show();
 	
 	countPairs();

    //Show Headings
    $('h2.styled').hide();
	if (filterStyleActiveHrefClass == '.all') {

		$('.fabric-samples-wrapper:visible').each(function () {
			if ($(this).hasClass("prints")){
    			$('h2.prints').show();     
			} else if ($(this).hasClass("leather")){
    			$('h2.leather').show();     
			} else if ($(this).hasClass("plain")){
    			$('h2.plain').show();     
			} else if ($(this).hasClass("stripe")){
    			$('h2.stripe').show();     
			}
		})
	}  
    if ($('.fabric-samples-wrapper'+filterStyleActiveHrefClass+CurrentFilterTypeClassNow).length == 0) {
      revertoAll();
    }

}); 


//Fabric filters Style
$('.fabric-filters.styles li a').click( function() {
    $('.fabric-filters.styles li a').removeClass("active");
    $(this).addClass("active");
     // findifClassExists();

    var CurrentFilterType = $('.fabric-filters.type a.active').prop("hash");
    var CurrentFilterTypeClass = CurrentFilterType.replace("#", ".");
    //console.log(CurrentFilterTypeClass);

    var clickfilterStyle = $(this).prop("hash");
    var clickfilterStyleClass = clickfilterStyle.replace("#", ".");
    $('.fabric-filters.styles li a').removeClass("active");
    $(this).addClass("active");

    $('.fabric-samples-wrapper').hide();
    $('.fabric-samples-wrapper'+clickfilterStyleClass+CurrentFilterTypeClass).show(); 
	countPairs();
 	$('h2.styled').hide();
	//Show Headings
	if (clickfilterStyleClass == '.all') {

		$('.fabric-samples-wrapper:visible').each(function () {
			if ($(this).hasClass("prints")){
    			$('h2.prints').show();     
			} else if ($(this).hasClass("leather")){
    			$('h2.leather').show();     
			} else if ($(this).hasClass("plain")){
    			$('h2.plain').show();     
			} else if ($(this).hasClass("stripe")){
    			$('h2.stripe').show();     
			}
		})
	}

}); 


//Detect last clicked Tab
var geturl = $(location).attr('href');
var hashValue = geturl.substring(geturl.indexOf("#")+1);

if (hashValue == 'loose' ) {
	$(".fabric-filters.type .loose").trigger('click');
} else if (hashValue == 'beds' ) {
	$(".fabric-filters.type .beds").trigger('click');
} else if (hashValue == 'fitted' ) {
	$(".fabric-filters.type .fitted").trigger('click');
}

/*Sofa Select Tabs*/
var loadSofaTab = function() {
$('.sofa-filter-type li.active a').each( function() {
    var CurrentActiveSofaLoad = $(this).prop("hash");
    var CurrentActiveSofaClassLoad = CurrentActiveSofaLoad.replace("#", ".");
    //console.log(CurrentFilterTypeClassNow);

    $('.sofa-samples-wrapper').hide();
    $('.sofa-samples-wrapper'+CurrentActiveSofaClassLoad).show();
 });

}
loadSofaTab();
//Fabric filters Type
$('.sofa-filter-type a').click( function() {
    $('.sofa-filter-type li a').removeClass("active");
    $(this).addClass("active");
    $('.sofa-filter-type li').removeClass("active");
    $(this).parent('li').addClass("active");
    //Hide relevant tabs

    loadSofaTab();
}); 


//Detect last clicked Tab
var getSofaurl = $(location).attr('href');
var hashValueSofa = getSofaurl.substring(getSofaurl.indexOf("#")+1);

if (hashValueSofa == 'classic-loose' ) {
	$(".sofa-filter-type .classic-loose").trigger('click');
} else if (hashValueSofa == 'beds-choice' ) {
	$(".sofa-filter-type .beds").trigger('click');
} else if (hashValueSofa == 'classic-fitted' ) {
	$(".sofa-filter-type .classic-fitted").trigger('click');
} else if (hashValueSofa == 'cantwait' ) {
	$(".sofa-filter-type .cantwait").trigger('click');
} else {
	//do nothing
}


}) /*END DOM READY */

//Function to hide tabs that do not have any swatches 
var findIfTabRequired = function(){ 
	//GEt current class for both style and type
	var filterTypeSelected = $('.fabric-filters.type a.active').prop("hash");
	var filterTypeSelectedClass = filterTypeSelected.replace("#", ".");
	var filterStyleSelected = $('.fabric-filters.styles .active').prop("hash");
	var filterStyleSelectedClass = filterStyleSelected.replace("#", ".");

	$('.fabric-filters.styles li a').each(function () {
		var filterThisStyle = $(this).prop("hash");
		var filterThisClass = filterThisStyle.replace("#", ".");

		if ($('.fabric-samples-wrapper'+filterThisClass+filterTypeSelectedClass).length == 0) {
			$(this).hide();
		} else {
			$(this).show();
		}
	});
}

//Function to set tabs on load
var setAllOnLoad = function(){
	//GEt current class for both style and type
	var filterTypeSelected = $('.fabric-filters.type .clickable a.active').prop("hash");
	var filterTypeSelectedClass = filterTypeSelected.replace("#", ".");
	var filterStyleSelected = $('.fabric-filters.styles .active').prop("hash");
	var filterStyleSelectedClass = filterStyleSelected.replace("#", ".");
	

	$('.fabric-samples-wrapper').hide();
	$('.fabric-samples-wrapper'+filterTypeSelectedClass+filterStyleSelectedClass).show();
	//console.log(filterStyleSelectedClass);
	
	 $('h2.styled').hide();
	 //Show Headings
	if (filterStyleSelectedClass == '.all') {

		$('.fabric-samples-wrapper:visible').each(function () {
			if ($(this).hasClass("prints")){
    			$('h2.prints').show();     
			} else if ($(this).hasClass("leather")){
    			$('h2.leather').show();     
			} else if ($(this).hasClass("plain")){
    			$('h2.plain').show();     
			} else if ($(this).hasClass("stripe")){
    			$('h2.stripe').show();     
			}
		})
	} 
}



function disableCheckbox() {
	$('input').each( function() {
	$(this).prop('disabled', true);
	console.log("disabled");
	})
}

function UpdateBackEndSelection(swatchNodeId, addOrRemove) {

	var listOfIds = "";
	
	$(".fabric-docker ul > li").each(function () {
		var id = $(this).attr('id');
		listOfIds += id + ",";
	});

	$.post("/static/fabric/UpdateSelectedFabrics.ashx", { swatchNodeIds: listOfIds, removeNodeId: swatchNodeId, addOrRemove: addOrRemove })
            .done(function (data) {

            });

}