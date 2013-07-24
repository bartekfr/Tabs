var paginator;

(function ($) {
	var DEFAULT = {
		arrows: true,
		numeric: true,
		navClass: 'menu',
		itemClass: 'nav-item',
		prevText: '&laquo;',
		nextText: '&raquo;',
		icons: false,
		numericClass: 'item-number'
	};
	
	paginator = function(options) {
		var settings = $.extend({}, DEFAULT, options);
		var arrows = settings.arrows;
		var numeric = settings.numeric;
		var itemsNumber = settings.itemsNumber;
		var parent = settings.parent;
		var nextText = settings.nextText;
		var prevText = settings.prevText;
		var numericSelector = '.' + settings.numericClass;
		var prev = null;
		var next = null;
		var prevA = null;
		var nextA = null;
		var items = [];
		var icons;
		
		var navigationList = $('<ul>', {
				"class": settings.navClass + ' js-generated'
			});
		
		function generateNumericItems() {
			if(settings.icons) {
				createIconsArray();
			}
			for(var i = 0, max = itemsNumber; i < max; i++) {
				var content = i + 1;
				if (settings.icons) {
					content = '<img src="' + icons[i] + '" />';
				}
				var item = $('<li/>', {
					'class': settings.numericClass + ' ' + settings.itemClass
				}).append('<a href="#">' + content + '</a>');
				navigationList.append(item);
			}	
			items = $(numericSelector, navigationList);
		}

		function createIconsArray(){
			icons = [];
			parent.find(settings.itemSelector).each(function(){
				var src = $(this).data('thumb');
				icons.push(src);
			});	
		}
		
		function generateArrows(){
			prevA = $('<a href="#" />').html(prevText);
			prev = $('<li/>', {
				'class': settings.itemClass + ' prev'
			}).append(prevA);
			nextA = $('<a href="#" />').html(nextText);
			next = $('<li/>', {
				'class': settings.itemClass + ' next'
			}).append(nextA);
			
			navigationList.prepend(prev);
			navigationList.append(next);	
		}
		
		if(numeric){
			generateNumericItems();
		}
		
		if(arrows) {
			generateArrows();
		}
		
		parent.append(navigationList);
			
		return {
			container: navigationList,
			prevButton: prevA,
			nextButton: nextA,
			items: items
		};
	};
}(jQuery));