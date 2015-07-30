# Tab

- Implementation Key
  * HTML structure
  
  ```html
  <div class="js-tab-widget tab-widget">
    <ul class="tab-nav">
      <li class="active"><a href="#pane1">2010s</a></li>
      <li><a href="#pane2">2000s</a></li>
      <li><a href="#pane3">1990s</a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-content-pane active" id="pane0" data-pane-id="0">pane0</div>
      <div class="tab-content-pane" id="pane1" data-pane-id="1">pane1</div>
      <div class="tab-content-pane" id="pane2" data-pane-id="2">pane2</div>
    </div>   
  </div>
  ```
  
  * AIRA
  
    TO make Modal accessible, some AIRA attributes are needed
    - `aria-expanded:true` mark element as currently expanded/visible  
  
  * CSS
  
  ```css
.tab-widget {
  .tab-nav {
		overflow: auto; /*simple clearfix*/
		zoom: 1;
		padding: 0;
		margin: 0
		list-style: none;
		
		> li {
			float: left;
			> a {
				display: block;
				padding: 10px 5px;
			}
			&.active > a {} /*active status*/
		}
	}
	.tab-content {
		> .tab-content-pane {
			display: none;
		}
		> .active {
			display: block;
		}
	}
}
  ```
  
  * JS
  
  ```js
  var Tab = {
    init: function(element) {
      this.$el = $(element);
      this.$el.on("click", ".tab-nav li", this._onClickNav); //not use:not() to handle href# page jump
      this.$el.on("show", this._onShow);
    },
    _onClickNav: function(ev) {
      ev.preventDefault();
      var $targetLi = $(ev.currentTarget),
          $targetPane,
          $prevLi,
          $prevPane;
      if (!$targetLi.hasClass("active")) {
        $targetPane = $($targetLi.find("a").attr("href"));
        $prevLi = this.$nav.find(".active:last");
        $prevPane = $($prevLi.find("a").attr("href"));
        $prevLi.removeClass("active");
        $prevPane.removeClass("active");
        $targetLi.addClass("active");
        $targetPane.addClass("active");
      }
    },
    _onShow: function(ev, index) { //0 based
      if (_.isUndefined(index) || index > this.size) return;
      this.$nav.find("li").eq(index).trigger("click");		
    }
  }
  //usage
  Tab.init($tabWidget);
  $tabWidget.trigger("show", [1]); //show 2nd tab
  ```

- Demo
<iframe width="100%" height="350" src="http://jsbin.com/mixaji/latest/embed?js,output" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- Reference 
  * http://css-tricks.com/transformer-tabs/
  * https://github.com/twbs/bootstrap/blob/master/js/tab.js
