# To Do List App
### Creating HTML Elements Using DOM Methods

## What is the HTML DOM?

The HTML DOM (Document Object Model) is a representation of the structure and content of a web page. 
It is a tree-like structure that consists of nodes, which are objects that have properties and methods. 
The HTML DOM allows you to access and modify the page elements using JavaScript.

## What languages used?
- HTML
- CSS
- JavaScript

## How to create HTML elements using the DOM methods?

To create HTML elements using the DOM methods, you need to follow these steps:

1. Create the new element node using the method `document.createElement(element)`. This method takes the name of the element as a parameter and returns a reference to the new element node. For example, to create a new paragraph element, you can use the following code:

```javascript
var p = document.createElement("p");
```

2. Create the new text node using the method `document.createTextNode(text)`. This method takes the text content as a parameter and returns a reference to the new text node. For example, to create a new text node with the text "Hello, world!", you can use the following code:

```javascript
var text = document.createTextNode("Hello, world!");
```

3. Append the text node to the element node using the method `node.appendChild(node)`. This method takes a node as a parameter and adds it as the last child of the current node. For example, to append the text node to the paragraph element, you can use the following code:

```javascript
p.appendChild(text);
```

4. Once the element is created, you can set its attributes using the method `element.setAttribute(attribute, value)`. This method takes the name and value of the attribute as parameters and sets the attribute for the element. For example, to set the class attribute of the paragraph element to "greeting", you can use the following code:

```javascript
p.setAttribute("class", "greeting");

```
