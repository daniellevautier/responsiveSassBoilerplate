/*
 * 	Easy Paginate 1.0 - jQuery plugin
 *	written by Alen Grakalic	
 *	http://cssglobe.com/
 *
 *	Copyright (c) 2011 Alen Grakalic (http://cssglobe.com)
 *	Dual licensed under the MIT (MIT-LICENSE.txt)
 *	and GPL (GPL-LICENSE.txt) licenses.
 *
 *	Built for jQuery library
 *	http://jquery.com
 *
 * 	Amended by Danielle Vautier
 */

(function($) {
		  
	$.fn.easyPaginate = function(options){

		var defaults = {				
			step: 8,
			delay: 0,
			numeric: true,
			nextprev: true,
			auto:false,
			loop:false,
			pause:4000,
			clickstop:true,
			controls: 'pagination',
			current: 'current',
			randomstart: false
		}; 
		
		var options = $.extend(defaults, options); 
		var step = options.step;
		var lower, upper;
		var children = $(this).children('li:visible');
		var count = children.length;
		var obj, next, prev;		
		var pages = Math.floor(count/step);
		var page = (options.randomstart) ? Math.floor(Math.random()*pages)+1 : 1;
		var timeout;
		var clicked = false;
		
		function show(){
			prev.addClass("disabled"); 
			clearTimeout(timeout);
			lower = ((page-1) * step);
			upper = lower+step;
			$(children).each(function(i){
				var child = $(this);
				child.hide();
				if(i>=lower && i<upper){ setTimeout(function(){ child.show() }, ( i-( Math.floor(i/step) * step) )*options.delay ); }
				if(options.nextprev){
					if(upper >= count) { 
						next.addClass("disabled");  
					
					} else { 
						next.show(); 
						next.removeClass("disabled"); 
					};
					if(lower >= 1) { 
						prev.removeClass("disabled");

					} else { 
						prev.addClass("disabled"); 
					
					};
				};
			});	
			$('li','#'+ options.controls).removeClass(options.current);
			$('li[data-index="'+page+'"]','#'+ options.controls).addClass(options.current);
			
			if(options.auto){
				if(options.clickstop && clicked){}else{ timeout = setTimeout(auto,options.pause); };
			};
		};
		
		function auto(){
			if(options.loop) if(upper >= count){ page=0; show(); }
			if(upper < count){ page++; show(); }				
		};
		
		this.each(function(){ 
			
			obj = this;
			
			if(count>step){
								
				if((count/step) > pages) pages++;
				
				var ol = $('<ol id="'+ options.controls +'"></ol>').insertAfter(obj);
				
				if(options.nextprev){
					prev = $('<li class="prev">Previous</li>')
						.show()
						.appendTo(ol)
						.click(function(){
							clicked = true;
							page--;
							show();
	
						});
				};
				
				if(options.numeric){

					for(var i=1;i<=pages;i++){
					$('<li data-index="'+ i +'">'+ 'PAGE ' + i + ' OF ' + pages +'</li>')
						.appendTo(ol)
						.click(function(){	
							clicked = true;
							page = $(this).attr('data-index');
							show();
						});					
					};		

				};
				
				if(options.nextprev){
					next = $('<li class="next">Next</li>')
						.hide()
						.appendTo(ol)
						.click(function(){
							clicked = true;			
							page++;
							show();
						});
				};
			
				show();
			};
		});	
		
	};	

})(jQuery);