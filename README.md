# To Do List App
## Creating HTML Elements Using DOM Methods

### What is the HTML DOM?

The HTML DOM (Document Object Model) is a representation of the structure and content of a web page. 
It is a tree-like structure that consists of nodes, which are objects that have properties and methods. 
The HTML DOM allows you to access and modify the page elements using JavaScript.

### What languages used?
- HTML
- CSS
- JavaScript

### How to create HTML elements using the DOM methods?

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
## Working with Loops

### What is Loops?

To execute a set of instructions, operations, or statements for several times until a specific condition is met. This process is known as iteration. You can implement the iteration process in scripts with the help of loops. A loop repeatedly runs through the set of instructions and stops execution on fulfilling the condition specified.

#### Types of Loops

- **for loop** - You can use this loop if you want to repeat the execution of a code block multiple times.

- **for/in loop** - This loop is a type of for loop. It iterates through the properties of a declared object.

- **while loop** - This loop executes the set of statements while the specified condition returns a true value. The moment the specified condition returns a false value, the while loop will not perform the iteration. Thus, the while loop checks the condition and then performs the iteration.

- **do/while loop** - This loop is a type of while loop. It first executes the code block and then checks if the condition is true. The do/while loop then repeats the execution until the condition returns a true value.


## Conclusion

In this project, I learned how to create HTML elements using the DOM methods and working with Loops. 
As well as learning how to create a simple To Do List page using HTML, CSS, and JavaScript. 
By using the DOM methods & Loops it can create and manipulate any page elements dynamically and add some interactivity and style to a web applications. 

I  enjoyed this exercise and learned something new. Happy coding!