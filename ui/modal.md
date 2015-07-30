# Modal

- Implementation Key
  * HTML structure
  
  ```html
  <div class="modal js-modal" role="dialog" aria-labelledby="modal1Title" aria-hidden="true" tabindex="-1" id="modal1">
    <div class="modal-backdrop js-modal-backdrop"></div>
    <div class="modal-dialog js-modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button class="modal-close js-modal-close" type="button" aria-label="close"><span>x</span></button>
          <h4 class="modal-title" id="modal1Title">Modal title</h4>
        </div>
        <div class="modal-body">Modal body</div>
        <div class="modal-footer">
          <button type="button">Next</button>
        </div>
      </div>
    </div>
  </div>
  ```
  
 * AIRA
 
   TO make Modal accessible, some AIRA attributes are needed
   - `role="dialog"` indicates the role of widget is dialog  
   - `aria-hidden="true"` indicates element and all children are not visible to user, will be skipped by Screen Reader, usually use it together with `display:none` which is not included in [Accessibility API](http://www.w3.org/WAI/PF/aria-implementation/#def_accessibility_api).
   - `aria-labelledby="modal1Title"` or `aria-describedby` used to associate widget with its heading title #id 
   
 * CSS
   ```css
   /* .modal on top w full screen,fixed,z-index and hide*/
   .modal { 
     display: none; /*toggle display to show modal*/
     position: fixed;
     top: 0; /*cover all window*/
     left: 0;
     right: 0;
     bottom: 0; 
     z-index: 1040;
     
     opacity: 0;
     overflow-x: hidden;
     overflow-y: auto; /*scroll w window*/
   }
   /* .modal-backdrop: has grey out bg & click for close*/
   .modal-backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      background: #000;
      opacity: 0;
   }
   /* .modal-dialog: center align + modal width*/
   /*http://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center*/
   .modal-dialog {
     position: relative;
     margin: 30px auto;
     width: 300px; 
   }
   ```
   
 * JS 
 
   To open modal `$(".js-modal").addClass("active");`
   To close modal `$(".js-modal-close, .js-modal-backdrop").on("click", closeModal)` 

- Demo
<iframe width="100%" height="350" src="http://jsbin.com/bopaco/latest/embed?js,output" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

- Reference 
  * http://getbootstrap.com/javascript/#modals 
  * http://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/

