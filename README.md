# Responsive Template

This mobile first boilerplate is run and compiled using middleman https://middlemanapp.com.


## It includes...

1. A basic grid framework based on the following widths:
* .wrapper-100 
* .wrapper-33 
* .wrapper-50
* .wrapper-25
* .wrapper-75
* .wrapper-66

**Note:** .wrapper-container should be used as an immediate parent for all wrapper options except wrapper-100 e.g.

``` 
<div class="wrapper-container">
	<div class="wrapper-50">Content</div>
	<div class="wrapper-50">Content</div>
</div>
```

2. The ability to add equal margins to wrappers with the class *.with-margin* added to the .wrapper-container.

3. Equal padding using the *.padded-content* class inside of the wrapper class e.g.

``` 
<div class="wrapper-50">
	<div class="padded-content
		<h2>Wrapper 50</h2>		
	</div>
</div>
```

4. Horizontal padding using the *.horizontal* class in conjunction with the .padded-content class

## Browser Support
All major browsers are supported.

### Media queries
Media queries are not supported in Internet Explorer 8 or below. On build a style sheet will be compiled *ie.css* that ommits the media queries form your SASS files.
**Note:** This requires the user of the mixin *@mixin viewport($width)*.

###Flexbox
Flexbox is not supported in Internet Explorer 9 or below. If wanting to use the flexbox class *.with-equal-height* make sure you set your conditional statement to:

``` 
<!--[if lte IE 9]>
```

Author: Danielle Vautier, I hold no responsibility for your broken code.