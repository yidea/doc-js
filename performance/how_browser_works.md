# How Browser Works

/*
   * @ How browser works (Reflow, Repaint)
   * ----------------------------------
   * http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
   *
   * - 1 Parsing HTML tag -> DOM tree (Nodes: Document, Element, Text)
   * - 2 Parsing CSS Style Parsing -> Style tree (Blocking)
   * - 3 Construct Render tree - based on 1,2, boxModel (has visual part of DOM tree and add text node, head/script/display:none will not in render tree)
   * - Reflow and Repaint on browser
   *
   * 1 Reflow (layout - calculate geometry change )
   * Attribute will trigger browser Reflow
   * -- DOM update/add/remove
   * -- CSS style and class change/add, font-size change
   * -- Resizing/scroll winodw event
   * -- .offsetHeight/width, .clentHeight/width, .scrollTop request
   * -- text change in input box
   * -- display: none (reflow+repaint) visibility: hidden (repaint)
   *
   * 2 Repaint (update screen)
   * Attribute will trigger browser Repaint
   * -- outline, background, color
   * -- visibility
   *
   * @@ Minimize Reflow & Repaint
   * - batch changes to dom, style, offline dom manipulation w documentFragment, cache dom ref
   * - avoid inline styles, use class
   * - apply animation to elements that position fixed/absolute
   * - use css hardware accelerating for animation
   *
   */
   
### Reference
- http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/
