Question 1:What is the difference between getElementById, getElementsByClassName,and querySelector/querySelectorAll??



Answer::


1️. Selector Type:
getElementById() selects a single element using its id attribute. Since an id is unique within the document, it always returns only one element. getElementsByClassName() selects elements based on their class name, which can be shared by multiple elements. On the other hand, querySelector() and querySelectorAll() use CSS selectors, allowing selection by id, class, tag, attribute, or even complex selectors.


2️. Return Type:
getElementById() returns a single HTMLElement, making it straightforward to work with. getElementsByClassName() returns an HTMLCollection, which can hold multiple elements. querySelector() returns the first matching element, while querySelectorAll() returns all matching elements as a NodeList.


3️. Live vs Static Collection:
getElementById() returns a single element, so live/static distinction is not applicable. getElementsByClassName() returns a live collection, meaning if elements are added or removed in the DOM, the collection updates automatically. querySelector() returns a single static element, and querySelectorAll() returns a static NodeList that does not update automatically when the DOM changes.


4️. Flexibility / Complexity:
getElementById() is simple and fast but limited to id selection. getElementsByClassName() only works with class names and cannot select by tag or attribute. querySelector() and querySelectorAll() are highly flexible as they support full CSS selector syntax, including pseudo-classes, attributes, and nested selectors.


5️. Performance Consideration:
getElementById() is the fastest because it targets a unique element. getElementsByClassName() can be slightly slower, especially on large DOMs. querySelector() and querySelectorAll() are relatively slower, particularly with complex CSS selectors, but they offer maximum flexibility.


6️. Selecting Single vs Multiple:
getElementById() always selects a single element. getElementsByClassName() can select multiple elements and returns a live collection. querySelector() selects the first matching element, whereas querySelectorAll() selects all matching elements, returning a static NodeList that does not automatically update with DOM changes.



Question 2:How do you create and insert a new element into the DOM??


Answer::

1️. Create the Element
First, I create a new element using a DOM method.
At this stage, the element is created in memory only. It is not yet visible on the webpage because it is not attached to the document structure.
2️. Add Content or Attributes
After creating the element, I add text content, attributes such as id or class, or apply styles if necessary.
This step prepares the element before inserting it into the DOM.
3️. Insert the Element into the DOM
Finally, I insert the element into a parent element in the document.


Question 3::What is Event Bubbling?And how does it work??



Answer::

Event Bubbling:
Event bubbling is a mechanism in the DOM event system where an event starts from the target element and then propagates upward through its parent elements until it reaches the root of the document.
In simple words, when I click on a child element, the event does not stop there. It moves upward to its parent, then to the grandparent, and continues up the DOM tree.
Mechanism of Event Bubbling :
When an event occurs on an element:
1️. The event is first triggered on the target element (the element that was actually clicked).
2️. After that, the same event moves upward to its parent element.
3️. Then it continues to the ancestor elements one by one.
4️. Finally, it reaches the document object.
This upward movement of the event is called bubbling, because it moves upward like a bubble in water.


Question 4.What is Event Delegation in Javascript?Why is it useful?


Answer::

Event Delegation::
Event delegation is a technique in which I attach a single event listener to a parent element instead of adding event listeners to multiple child elements.
Because of event bubbling, when an event occurs on a child element, it bubbles up to the parent. I can catch that event on the parent and determine which child actually triggered it.
In simple words: I handle events at the parent level instead of each child individually.


Usefulness of Event Delegation::
Event delegation is useful for several reasons:

 1.Performance Improvement:
If there are many child elements, adding separate event listeners to each one can be inefficient. Event delegation uses only one listener, which is better for performance.

 2.Works for Dynamic Elements:
If new child elements are added dynamically (after page load), they will automatically work with event delegation because the parent listener is already active.

 3.Reduces Memory Usage:
Fewer event listeners mean lower memory consumption.

 4.Easier Event Management:
Instead of managing many listeners, I manage only one.


Question 5:What is the difference between preventDefault() and stopPropagation() methods?



Answer::

preventDefault() is used to stop the default action of an element. For example, a form normally submits data when I click the submit button, or a link navigates to another page when clicked. If I use preventDefault(), that default behavior will not happen, and I can implement my own custom behavior.


On the other hand, stopPropagation() is used to stop event bubbling. In JavaScript, events normally propagate from the target element to its parent elements. For example, if a button is inside a div and both have event listeners, clicking the button may trigger both events due to bubbling. If I use stopPropagation(), the event will not move to parent elements, and only the target element’s event handler will execute.