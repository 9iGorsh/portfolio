import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
	
	constructor(){
		this.lazyImages =$(".lazyload");
		this.siteHeader =$(".site-header");
		this.headerTriggerElement =$(".large-hero__title");
		this.createHeaderWaypoint();
		this.scrollLink =$(".scroll-link");
		this.headerLinks =$(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}
	
	refreshWaypoints(){
		this.lazyImages.on('load', function(){
			Waypoint.refreshAll();
		});
	}
	
	addSmoothScrolling(){
		this.headerLinks.smoothScroll();
	}
	
	createHeaderWaypoint(){
		var that =this;
		new Waypoint({
			element:this.headerTriggerElement[0],
		//	element:document.querySelector(".large-hero__title"),
			handler:function(direction){
				if(direction=="down"){
					that.siteHeader.addClass("site-header--dark");
				}else{
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}
	
	createPageSectionWaypoints(){
		var that =this;
		this.scrollLink.each(function(){
			
			var currentPageSection =this;
			new Waypoint({
				element:currentPageSection,
				handler:function(direction){
				  if(direction=="down"){
					  var matchingHeaderLink =currentPageSection.getAttribute("data-match");
					  that.headerLinks.removeClass("is-current-link");
					  $(matchingHeaderLink).addClass("is-current-link");
				  }				  
				},
				offset:"20%"
			});
			new Waypoint({
				element:currentPageSection,
				handler:function(direction){
				  if(direction=="up"){
					  var matchingHeaderLink =currentPageSection.getAttribute("data-match");
					  that.headerLinks.removeClass("is-current-link");
					  $(matchingHeaderLink).addClass("is-current-link");
				  }				  
				},
				offset:"-40%"
			});
		});
	}
}

export default StickyHeader;