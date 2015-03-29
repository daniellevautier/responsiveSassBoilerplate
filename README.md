# Responsive SASS Boilerplate

This mobile first boilerplate can be run and compiled with middleman https://middlemanapp.com. Alternatively the */source* folder contains the static HTML. 

## It includes...

**A basic grid framework based on the following width classes:**
 + wrapper-100 
 + wrapper-33 
 + wrapper-50
 + wrapper-25
 + wrapper-75
 + wrapper-66

**Note:** wrapper-container should be used as an immediate parent for all wrapper options except wrapper-100 e.g.

``` 
<div class="wrapper-container">
	<div class="wrapper-50">Content</div>
	<div class="wrapper-50">Content</div>
</div>
```

**The ability to add equal margins** to wrappers with the class *.with-margin* added to the .wrapper-container.

**Equal padding** using the *.padded-content* class inside of the wrapper class e.g.

``` 
<div class="wrapper-50">
	<div class="padded-content">
		<h2>Wrapper 50</h2>		
	</div>
</div>
```

**Horizontal padding** using the *.horizontal* class in conjunction with the .padded-content class

**Retina media queries** using the mixin *highDPI*. Note: this won't be compiled in the IE stylesheet.

## Browser Support
Tested in Chrome, Firefox, IE10, IE9*, IE8*, IE7*, IOS7 but am confident other major browsers will be supported. * There are some alternative options for these browsers (see below). 

### Media queries
Media queries are not supported in Internet Explorer 8 or below by default. When compiled a style sheet will be compiled *ie.css* that ommits the media queries used in your SASS files.
**Note:** This requires the user of the mixin *@mixin viewport($width)*.

Alternatively you can use a polyfill such as respond.js https://github.com/scottjehl/Respond  

###Flexbox
Flexbox is not supported in Internet Explorer 9 or below. If you're wanting to use the flexbox class *.with-equal-height* with the fallback supplied, make sure you set your conditional statement to:

``` 
<!--[if lte IE 9]>
```

Flexbox for < iOS7 requires child elements to have a property of *float:none* to display.

**Author**: Danielle Vautier, I take no responsibility for your code.

##The MIT License (MIT)

Copyright (c) 2013

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.