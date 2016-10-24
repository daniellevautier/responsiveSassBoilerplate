# Responsive SASS Boilerplate

This mobile first boilerplate can be run and compiled with middleman https://middlemanapp.com. Alternatively the */source* folder contains the static HTML. 

###Ruby Versions
Currently the best combination for this project is: 
+ Ruby Version: 2.0.0p647 (not the x64 bit as this has compatibility issues)
+ Development Kit: DevKit-mingw64-32-4.7.2-20130224-1151-sfx (not the x64 bit as this has compatibility issues)

Windows users see [rubyinstaller.org](http://rubyinstaller.org/downloads/) for more details.

## Updates
+ [21.10.16](https://github.com/daniellevautier/responsiveSassBoilerplate/commit/e6e4429d641f8353bd33fe34b5f0bcc11e4b8133)
  + Included [several fixes / requests](https://github.com/daniellevautier/responsiveSassBoilerplate/issues?q=is%3Aissue+is%3Aclosed)
  + Changed layout order for Middleman partials (/source only)
  + Added mobile-margin and mobile-padding options
  + Added wrapper-80 and wrapper-20 to framework
  + Updated index.html with demo framework overview
+ 13.01.16 - Update to HTML, variables, removed and added mixins, prefixes and framework padding, see commit for more details
+ 12.05.15 - Update JQuery to 1.11.3
+ 10.02.15 - Added highDPI mixin  

## It includes...

**A basic grid framework based on the following width classes:**
 + wrapper-100 
 + wrapper-80 
 + wrapper-75
 + wrapper-66
 + wrapper-50
 + wrapper-33 
 + wrapper-25
 + wrapper-20

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

**padded-content spacing variables** these are now set at the start of _framework.scss

**Horizontal padding** using the *.horizontal* class in conjunction with the .padded-content class

**Retina media queries** using the mixin *highDPI*. Note: this won't be compiled in the IE stylesheet.

## Browser Support
Tested in Chrome, Firefox, IE10, IE9*, IE8*, IE7*, IOS7 but am confident other major browsers will be supported. * There are some alternative options for these browsers (see below). 

### Media queries
Media queries are not supported in Internet Explorer 8 or below by default. When compiled a style sheet will be compiled *ie.css* that ommits the media queries used in your SASS files.
**Note:** This requires the user of the mixin *@mixin viewport($width)*.

Alternatively you can use a polyfill such as respond.js https://github.com/scottjehl/Respond  

### Mixins
I have updated the mixins to use the relevant prefixes as well as including the following:
+ flexBox()
+ flexOrder()
+ flexWrap()
+ flexAlign()
+ cssTransform()
+ cssGradient()


###Flexbox
Flexbox is not supported in Internet Explorer 9 or below. If you're wanting to use any of the flexbox classes such as *.with-equal-height* or *vert-align* make sure you include your ie.css in the following conditional statement:

``` 
<!--[if lte IE 9]>
```

Flexbox for < iOS7 requires child elements to have a property of *float:none* to display.

For more support tables check out http://caniuse.com.

**Author**: Danielle Vautier, I take no responsibility for your code.

##The MIT License (MIT)

Copyright (c) 2013

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
