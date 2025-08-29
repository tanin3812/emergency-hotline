1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: 
getElementById: It selects a single element based on a unique id attribute.
getElementsByClassName: It selects all elements that share a specific class name.
querySelector / querySelectorAll: querySelector basically selects the first html element that matches a specific CSS selector while querySelectorAll selects all html elements.

2. How do you **create and insert a new element into the DOM**?
Answer:
We can create a new element using "document.createElement()"  & insert it into DOM using method like "appendChild()".

3. What is **Event Bubbling** and how does it work?
Answer:
Event Bubbling is a process in which an event starts from the primary element and then propagates upward through its parent elements until it reaches the 'document'.

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer:
It is a technique in js where instead of adding event listener to multiple child elements, we can add a single event listener to a common parent element.
It is useful as it reduces the number of event listener and make it simple.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:
preventDefault(): It blocks the browser's default action for a specific event. That means it prevents a link from navigating to a new page.
stopPropagation(): It prevents the event from bubbling up the DOM tree to the parent elements. It doesn't block the default browser action.
