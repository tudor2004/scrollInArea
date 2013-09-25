## Scroll in Area. A jQuery plugin.
jQuery ScrollInArea changes an element to be fixed inside a given container. This plugin works with jQuery 1.8.3 or later.

Usage
============
1. Download the source files.
2. Include ``<script src="path/to/js/jquery.scrollInArea.min.js"></script>`` in the body of your page
3. Add to your stylesheet the following rule:
```
.fixed-wrapp {
	position: relative;
}
```
4. Add the following code to your script:
```
$('#fix-scroll-1').scrollInArea({
	wrapper: '#fix-scroll-wrapper'
});
```
5. Refresh the page

Documentation
============
wrapper   -   this must be string, represents the element id

Authors
============

**Tudor Ravoiu**

[http://github.com/tudor2004](http://github.com/tudor2004)


Copyright and license
============

Copyright 2013 Sites-Webdesign under [GPL 2.0](http://www.gnu.org/licenses/gpl-2.0.html).


