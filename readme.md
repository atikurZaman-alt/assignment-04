1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
answer:-

  in javascript, getelementbyid, getElementbyCLassName, querySelector, and querySelector,  querySelectorAll are used to select elements from the dom. getelementbyid  selects one element by id  getelementsbyclassname selects element by class name, queryselector select the first matching element and queryselectorall selects all matching elemnets using css selector

2. How do you create and insert a new element into the DOM?
answer:- 

 we create a new element using document.createElement() and then insert it into the DOM using appendeChild(), append() or prepend()

3. What is Event Bubbling? And how does it work?
answer:- 

 event bubbling is a javascript event propagation mechanism where an event first triggers on thr target element and then propagates step by step up to the parent elements

4. What is Event Delegation in JavaScript? Why is it useful?
answer:-  

 event delegation is a javascript technique where an event listener is set on a parent element and the parent is used to handle events on its child elements 

5. What is the difference between preventDefault() and stopPropagation() methods?
answer:-
 preventDefault() stops the  browser's default action fpr an element while stopPropagation() prevents the event fromm bubbling up to parent elements