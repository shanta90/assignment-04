Question 1:What is the difference between getElementById, getElementsByClassName,and querySelector/querySelectorAll??



Answer::
1.getElementById() selects an element using its id attribute. Since id is unique in an HTML document, it returns only one element.
It is less flexible because it works only with id, not with class, tag, or other selectors.
It returns a single element and the result is static, meaning it does not automatically update if the DOM changes.

2️. getElementsByClassName()
getElementsByClassName() selects elements based on their class name. Multiple elements can share the same class, so it usually returns more than one element.
It is limited in flexibility because it works only with class names.
It returns an HTMLCollection, which is a live collection. This means if elements are added or removed from the DOM, the collection updates automatically.

3️. querySelector()
querySelector() selects elements using a CSS selector. It can select by id, class, tag name, attribute, or complex CSS selectors.
It is more flexible than older methods because it supports full CSS selector syntax.
Even if multiple elements match, it returns only the first matching element.
The result is static, meaning it does not automatically update.

4️. querySelectorAll()
querySelectorAll() also uses CSS selectors, but it returns all matching elements.
It is very flexible because it supports all types of CSS selectors.
It returns a NodeList, which is a static collection. If the DOM changes, the NodeList does not update automatically.



Question 2:How do you create and insert a new element into the DOM??


Answer:1️. Create the Element
First, I create a new element using a DOM method.
At this stage, the element is created in memory only. It is not yet visible on the webpage because it is not attached to the document structure.
2️. Add Content or Attributes
After creating the element, I add text content, attributes such as id or class, or apply styles if necessary.
This step prepares the element before inserting it into the DOM.
3️. Insert the Element into the DOM
Finally, I insert the element into a parent element in the document.


Question 3::What is Event Bubbling?And how does it work??



Answer:Event Bubbling:
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


Answer:Event Delegation::
Event delegation is a technique in which I attach a single event listener to a parent element instead of adding event listeners to multiple child elements.
Because of event bubbling, when an event occurs on a child element, it bubbles up to the parent. I can catch that event on the parent and determine which child actually triggered it.
In simple words: I handle events at the parent level instead of each child individually.

Usefulness of Event Delegation: 
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



Answer:preventDefault() is used to stop the default action of an element. For example, a form normally submits data when I click the submit button, or a link navigates to another page when clicked. If I use preventDefault(), that default behavior will not happen, and I can implement my own custom behavior.
On the other hand, stopPropagation() is used to stop event bubbling. In JavaScript, events normally propagate from the target element to its parent elements. For example, if a button is inside a div and both have event listeners, clicking the button may trigger both events due to bubbling. If I use stopPropagation(), the event will not move to parent elements, and only the target element’s event handler will execute.