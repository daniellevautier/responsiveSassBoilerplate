//Find First searches the list of products removing the class of first and reapply to the first item in the row. The list item that first is applied to varies

 var preventParentLink = function() {
$('.menu li.hasChild > a').click(function(e) {
   e.preventDefault();
});
}

 var enableParentLink = function() {
$('.menu li.hasChild > a').click(function(e) {
    return true;
});
}

var findFirst = function(){
    //setTimeout(findFirst,5000);
  //Detect the viewport width and set the number of columns
  if(window.innerWidth < 600){
    var columns = 1;
  }
  else if(window.innerWidth < 768){
    var columns = 2;
  }
  else if(window.innerWidth > 768){
    var columns = 4;
  }
  var i = 0;


  //Loop through each visible list item
  $('.range ul li:visible').each( function(){

    var item = $(this)
    var index = i++;
    //console.log(item.index() + " | " + index );

    var first = item.hasClass('first');

    //Check that the item is divisible by 4
    if(first && index % columns != 0){
      item.removeClass('first');
    }
    else if(index % columns === 0){
      item.addClass('first');
    }
  });
};

//Billing address show
var checkBillingEnabled = function() {
	if ($("input#billingdelivery").is(":checked")) {
		$(".billing-address").hide();
	} else {
		$(".billing-address").show();
	}
}

var checkShowroomSelected = function() {
	if ($("input#noVisit").is(":checked")) {
		$("select.showroomList").prop("disabled", true);
	} else {
		$("select.showroomList").prop("disabled", false);
	}
}


//Range reveal. This shows and hides more sofa fabrics on the model page.
var toggleInStockFabric = function(){

  //Triggers the addition of a class so that a css animation can take place.
  //Show or Hide fabrics out of stock
  $('.show-in-stock-fabrics').on("click", function(event){
    event.preventDefault();
    $(this).addClass('active');
    $('.show-all-fabrics').removeClass('active');
    $('.out-of-stock').fadeOut(250);
    $('.out-of-stock').hide();

  if($('.range ul li:visible').length === 0 && $('.range.out-of-stock-filter .out-of-stock-error').length === 0){
    $('.range.out-of-stock-filter ul').before("<div class='out-of-stock-error'>There are currently no 7 day delivery fabrics avaliable for this product</div>");
  }
    
    //findFirst();
  });

  $('.show-all-fabrics').on("click", function(event){
    event.preventDefault();

    $(this).addClass('active');
    $('.show-in-stock-fabrics').removeClass('active');

    //Hide no fabrics message if it is displayed
    if($('.range.out-of-stock-filter .out-of-stock-error').length > 0){
      $('.range.out-of-stock-filter .out-of-stock-error').remove();
    }

    $('.out-of-stock').fadeIn(250);
    $('.out-of-stock').show();


  if($('.range ul li:visible').length === 0 && $('.range.out-of-stock-filter .out-of-stock-error').length === 0){
    $('.range.out-of-stock-filter ul').before("<div class='out-of-stock-error'>There are currently no 7 day delivery fabrics avaliable for this product</div>");
  }
    //findFirst();
  });
};


//Placeholder for 3d spinner
var init3d = function(){

};



$(function() {
  // setTimeout(findFirst,5000);
 $('ul.jquery-tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      return false;
    });
  });


  $('.jquery-tabs').show();

  //reset tabs on load 
  $('ul.jquery-tabs li a').removeClass("active");
  $('ul.jquery-tabs li:first-child a').addClass("active");

  $('.viewToggle a').click( function() {
    $('.viewToggle a').removeClass('active'); 
    $(this).addClass('active');
    return false;
  })

  $(".frontView").click( function() {
    $('.frontViewImage').show();
    $('.sideViewImage').hide(); 
  })

  $(".sideView").click( function() {
    $('.frontViewImage').hide();
    $('.sideViewImage').show(); 
  })

  toggleInStockFabric();

$('.expanding-info-box').hide();
$('.expanding-tip').on('click', function(event){
    event.preventDefault();
    $(this).parent().siblings('.expanding-info-box').stop().slideToggle();
});

$('.protection-wrapper').hide();
$('.expandProtection').on('click', function(){
    $(this).siblings('.protection-wrapper').slideToggle("slow");
    return false;
});

checkBillingEnabled();
checkShowroomSelected();

$("input#billingdelivery").change( function() {
	checkBillingEnabled();
})

$("input#noVisit").change( function() {
	checkShowroomSelected();
})
$("input#yesVisit").change( function() {
	checkShowroomSelected();
})


  
 $('.menu > li').each(function(){

       if ($(this).find('ul').length > 0)
       {
          $(this).children('ul').hide();
          $(this).addClass('hasChild');
       }
    });


 $('.menu > li.hasChild').click( function () {
  $(this).children('ul').toggle();
 })


$(".hidden-locations").hide();
$("a.locations-link").click(function (){
  $(".hidden-locations").slideToggle();
  $(".hidden-locations").toggleClass("visible");

 
   $(".hidden-locations").siblings('p').children('a').html("Show details");
 $(".hidden-locations.visible").siblings('p').children('a').html("Hide details");


  return false;
});



}); /*end dom ready */


enquire.register("screen and (min-width:768px)", {
    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {

        enableParentLink();
    },   
     // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {
       
    }
      
});

enquire.register("screen and (max-width:767px)", {
    // OPTIONAL
    // If supplied, triggered when a media query matches.
    match : function() {
       preventParentLink(); 
    },   
     // OPTIONAL
    // If supplied, triggered when handler is unregistered. 
    // Place cleanup code here
    destroy : function() {
   
    }
      
});
// //Run Range Reveal when viewport is resized in order to reflow list of models
// enquire.register("screen and (min-width: 600px) and (max-width: 768px)", [
//   { match : function() { 
//       findFirst();
//     },
//   },
// ]);
// enquire.register("screen and (min-width: 768px) and (max-width: 960px)", [
//   { match : function() { 
//       findFirst();
//     },
//   },
// ]);
//  enquire.register("screen and (min-width: 960px)", [
//   { match : function() { 
//       findFirst();
//     },
//   },
// ]);
