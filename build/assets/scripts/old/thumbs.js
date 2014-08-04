$(document).ready(function () {

    //check if a touch device or not.
    if(Modernizr.touch === 'false'){

        $("div.thumbs a").bind("mouseover", function (e) {
    
            $(".thumb-select").hide();
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
    
            var $this = $(this);
            var relAttr = $this.attr("rel");
            var id = $this.attr("id");
            var name = $this.attr("name");
            var url = $this.attr("href");
            var price = $this.attr("price");
            var imgClass = $this.attr("class");
            var nameValue = (name != null) ? "<span class='thumb-left'>&nbsp;&nbsp;" + name + "</span>" : "<span class='thumb-left'>&nbsp;</span>";
            var priceValue = (price) ? "<span class='thumb-right'>£" + price + "&nbsp;&nbsp;</span>" : "<span class='thumb-right'>&nbsp;</span>";
    
            var imgOffset = 200;
    
            var xOffset = 0;
            switch (imgClass) {
                case "r":
                    xOffset = -250;
                    break;
                case "m":
                    xOffset = -125;
                    break;
                case "l":
                    xOffset = 20;
                    break;
            }
    
            if (relAttr.length > 0) {
                $this.append('<span id="thumb"><img width="140px" height="140px" src="' + relAttr + '"/><br />' + nameValue + priceValue + '</span>');
                var parent = $(this).parent();
                $(parent).append("<span class='thumb-select'><a href=" + url + " class='" + id + "'>SELECT</a></span>");
                $("#thumb-select").show();
    
    
                $($this).mousemove(function (e) {
                    var y = e.pageY;
                    var yOffset = 20;
                    if ((y + imgOffset) > docViewBottom) {
                        yOffset = -200;
                    }
                    $("#thumb").css("top", e.pageY + yOffset);
                    $("#thumb").css("left", e.pageX + xOffset);
    
                   // $(".thumb-select").css("top", e.pageY + yOffset + 105);
                    $(".thumb-select").css("top", e.pageY + yOffset + 155);
                    $(".thumb-select").css("left", e.pageX + xOffset);
                });
            }
    
        });
    
        $("div.thumbs a").bind("mouseout", function () {
            $("#thumb").remove();
           // $(".thumb-select").remove();
           // $(".thumb-select").remove();
            
        });
    };


    /* $("#thumb-select a").click(function (event) {
    /* alert("~");
    window.location.assign("http://www.w3schools.com");#1#
    });*/

});