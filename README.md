Tab jQuery Plugin
====

Tab component allow to toggle tabs using CSS Transition rather than JS animations if possible.
You can toggle tabs with slide or fade effect. You can also load tab content with AJAX - in this case ther
e is no toggle animation and loaded content is just simply inserted into the tab content section. Before AJAX content is loaded the "div.ajax-loading" element is visible so you can create you own CSS for this. URL of content to be loaded is defined in navigation items "href" attribute.


###Configuration:
* contentSelector: tab content section selector
* tabContentItemSelector: css selector of tab content item (in context of whole tab section)
* navSelector: tab navigation section selector
* tabNavItemSelector: css selector of tab navigation item (in context of whole tab section)
* activeClass: css class added to active navigation item
* activeIndex: initially visible tab index
* showTime: value in ms
* hideTime: value in ms
* type: animation effect [slide, fade, ajax]
* ajaxContainer: CSS selector defining the part of loaded resource to be inserted into the tab content section (if "type" option is set to "ajax")

**Required libs**: jQuery, Modernizr with CSS Transition and prefixed modules
