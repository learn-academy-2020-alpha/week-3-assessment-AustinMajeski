# ASSESSMENT 3: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What is object destructuring?

  Your answer:
	-	Taking an object's value out by using the name of the variable inside the object

  Researched answer:
	-	Unpacking values from arrays, or properties from objects, into distinct variables.



2. What are the three arguments that .map() can accept?

  Your answer:
	-	Map takes a function, but before that, I know it can take the value and the index of the array it's called from.

  Researched answer:
	-	(1) callback		:	the function that is called for every element in the array.  Each time callback executes, the returned value is added to the new array.
		(2)	currentValue	:	the current element being processed in the array.
		(3)	index			:	the index of the current element being processed in the array.



3. What is the difference between a class and an object?

  Your answer:
	-	Class	:	a blueprint for an object.
	-	Object	:	a collection of functions and other data, loosely organized under one Accessor name

  Researched answer:
	-	Class	:	It basically sets the rules for how an object instance is going to behave.  In short, it's like a mold or a factory for creating objects.
	-	Object	:	An object is simply the smallest building block in Object-Orientated-Programming in javascript;	an instance of a class.

	*  (javascript uses prototype inheritence instead of class inheritence)



4. What is the difference between a HTML div and a span?
 
  Your answer:
	-	I don't know.  I thought they were functionally the same.

  Researched answer:
	-	The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line (such as inside a paragraph) whereas a div (division) element is block-line (which is basically equivalent to having a line-break before and after it) and used to group larger chunks of code.


5. What is React.Fragment and why would you want to use it?
  
  Your answer:
	-	React.Fragment is an alternative to surrounding the return of your render method inside a Component with a div.
		When rendered, the there is no surrounding div tag inside the table row element.

		-	You would want to use it when you don't want everything inside your render method to be treated as one block.
  
  Researched answer:
	-	React.Fragment allows its children to be rendered by themselves.  Making it possible to pass around groups of elements without introducing unnecessary markup.

		-	 It's great for working with table and list markup, where it’s just not possible to add an extra 'div'.


6. What are three options for creating responsive design?

  Your answer:
	-	(1)	Flexable items.  Where some box of components can shift their placement when the screen size changes.
		(2)	Animation;  giving the user visual feedback.
		(3)	Interaction

  Researched answer:
	-	(1)	Flexible layouts	:	Using a flexible grid to create the website layout that will dynamically resize to any width.
		(2)	Media queries		:	An extension to media types when targeting and including styles.  Media queries allow designers to specify different styles for specific browser and device circumstances.
		(3)	Flexible media		:	Makes media (images, video and other formats) scalable, by changing the size of the media as the size of the viewport changes.

		* Overall, create flexability, because you'll never know the size or orientation of somebady's screen when viewing your content, nor what browser they are using.



## Looking Ahead: Terms for Next Week
- Object oriented programming
	>	packaging up blocks of related methods under one object?
- irb
	>	"interpret ruby"	-	I think that's what it's called.  I saw it being used in the terminal to interpret ruby code in the Ruby presentation last week.
- Instance variable
	>	creating a variable from a class?
- Ruby hash
	>	are these keys to give unique ids to things?
- Class relationships
	>	how classes interact with one another, and the hierarchy artificially impossed on them?
