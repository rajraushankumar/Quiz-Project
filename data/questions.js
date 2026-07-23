const questions = [
// HTML (1–15)
{
question: "Which declaration defines an HTML5 document?",
options: ["<!DOCTYPE html>", "<html5>", "<DOCTYPE HTML5>", "<!HTML>"],
correctAnswer: 0
},
{
question: "Which tag defines the title of a webpage?",
options: ["<head>", "<title>", "<caption>", "<name>"],
correctAnswer: 1
},
{
question: "Which tag is used to create a paragraph?",
options: ["<para>", "<p>", "<text>", "<paragraph>"],
correctAnswer: 1
},
{
question: "Which tag creates an ordered list?",
options: ["<ul>", "<list>", "<ol>", "<li>"],
correctAnswer: 2
},
{
question: "Which tag is used for a table cell?",
options: ["<cell>", "<td>", "<tr>", "<table-cell>"],
correctAnswer: 1
},
{
question: "Which tag defines a table header cell?",
options: ["<thead>", "<th>", "<header>", "<td>"],
correctAnswer: 1
},
{
question: "Which attribute provides a unique identifier for an element?",
options: ["class", "name", "id", "key"],
correctAnswer: 2
},
{
question: "Which attribute is used to apply multiple elements to the same group?",
options: ["id", "class", "group", "style"],
correctAnswer: 1
},
{
question: "Which HTML element is used to create a dropdown list?",
options: ["<dropdown>", "<select>", "<option>", "<list>"],
correctAnswer: 1
},
{
question: "Which tag defines an option inside a dropdown?",
options: ["<choice>", "<option>", "<select-item>", "<value>"],
correctAnswer: 1
},
{
question: "Which HTML element is used to collect user input?",
options: ["<input>", "<data>", "<user>", "<collect>"],
correctAnswer: 0
},
{
question: "Which input type is used for entering an email address?",
options: ["text", "mail", "email", "address"],
correctAnswer: 2
},
{
question: "Which HTML tag is used to embed a video?",
options: ["<media>", "<movie>", "<video>", "<player>"],
correctAnswer: 2
},
{
question: "Which tag is used to create a clickable button?",
options: ["<click>", "<button>", "<btn>", "<input-button>"],
correctAnswer: 1
},
{
question: "Which semantic tag represents the main content of a webpage?",
options: ["<content>", "<main>", "<section>", "<body-content>"],
correctAnswer: 1
},

// CSS (16–30)
{
question: "Which CSS property changes the font family?",
options: ["font-family", "font-type", "text-family", "font-style"],
correctAnswer: 0
},
{
question: "Which CSS property changes the spacing between letters?",
options: ["word-spacing", "letter-spacing", "text-spacing", "character-gap"],
correctAnswer: 1
},
{
question: "Which property aligns text horizontally?",
options: ["text-align", "align-text", "horizontal-align", "text-position"],
correctAnswer: 0
},
{
question: "Which value centers an element using margin?",
options: ["margin: auto", "margin: center", "auto-margin: true", "align: center"],
correctAnswer: 0
},
{
question: "Which CSS property controls the stacking order of elements?",
options: ["stack", "layer", "z-index", "position-index"],
correctAnswer: 2
},
{
question: "Which position value keeps an element fixed to the viewport?",
options: ["absolute", "relative", "fixed", "static"],
correctAnswer: 2
},
{
question: "Which CSS property controls transparency?",
options: ["transparent", "opacity", "visibility", "alpha"],
correctAnswer: 1
},
{
question: "Which CSS property controls the space between flex items?",
options: ["gap", "space", "flex-space", "item-gap-only"],
correctAnswer: 0
},
{
question: "Which property defines columns in CSS Grid?",
options: ["grid-columns", "grid-template-columns", "columns-grid", "template-columns"],
correctAnswer: 1
},
{
question: "Which property defines rows in CSS Grid?",
options: ["grid-template-rows", "rows-template", "grid-rows-size", "row-layout"],
correctAnswer: 0
},
{
question: "Which pseudo-class applies styles when the mouse is over an element?",
options: [":active", ":hover", ":focus", ":mouse"],
correctAnswer: 1
},
{
question: "Which pseudo-class applies styles to a focused input?",
options: [":focus", ":input", ":active", ":selected"],
correctAnswer: 0
},
{
question: "Which CSS property controls how content overflows an element?",
options: ["content-flow", "overflow", "over-content", "flow-control"],
correctAnswer: 1
},
{
question: "Which property is used to create animations?",
options: ["animation", "motion", "transition-only", "animate-style"],
correctAnswer: 0
},
{
question: "Which CSS rule is used to define animation stages?",
options: ["@animation", "@keyframes", "@motion", "@frames"],
correctAnswer: 1
},

// JavaScript (31–50)
{
question: "Which keyword creates a block-scoped variable?",
options: ["var", "let", "define", "variable"],
correctAnswer: 1
},
{
question: "Which keyword declares a constant value?",
options: ["constant", "fixed", "const", "static"],
correctAnswer: 2
},
{
question: "What is the result of typeof null in JavaScript?",
options: ["null", "undefined", "object", "boolean"],
correctAnswer: 2
},
{
question: "Which method converts an object into a JSON string?",
options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
correctAnswer: 1
},
{
question: "Which array method creates a new array by transforming elements?",
options: ["filter()", "map()", "reduce()", "forEach()"],
correctAnswer: 1
},
{
question: "Which array method returns elements that satisfy a condition?",
options: ["map()", "find()", "filter()", "search()"],
correctAnswer: 2
},
{
question: "Which method executes a function for every array element?",
options: ["forEach()", "each()", "loop()", "iterate()"],
correctAnswer: 0
},
{
question: "Which method removes the first element from an array?",
options: ["pop()", "shift()", "removeFirst()", "delete()"],
correctAnswer: 1
},
{
question: "Which method adds an element to the beginning of an array?",
options: ["push()", "addFirst()", "unshift()", "prepend()"],
correctAnswer: 2
},
{
question: "Which operator is used for logical AND?",
options: ["||", "&&", "!", "&"],
correctAnswer: 1
},
{
question: "Which operator is used for logical OR?",
options: ["&&", "||", "!", "|"],
correctAnswer: 1
},
{
question: "Which operator represents logical NOT?",
options: ["not", "!", "!!", "~"],
correctAnswer: 1
},
{
question: "Which method selects an element by its ID?",
options: [
"document.getElementById()",
"document.selectId()",
"document.findId()",
"document.getId()"
],
correctAnswer: 0
},
{
question: "Which method selects the first element matching a CSS selector?",
options: [
"querySelector()",
"selectFirst()",
"getSelector()",
"findElement()"
],
correctAnswer: 0
},
{
question: "Which method adds an event listener to an element?",
options: [
"addEventListener()",
"addEvent()",
"listenEvent()",
"eventListener()"
],
correctAnswer: 0
},
{
question: "Which function executes code after a specified delay?",
options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
correctAnswer: 1
},
{
question: "Which keyword is used to handle errors?",
options: ["try...catch", "error...handle", "check...catch", "handle...error"],
correctAnswer: 0
},
{
question: "Which keyword is used to return a value from a function?",
options: ["send", "output", "return", "give"],
correctAnswer: 2
},
{
question: "Which value represents the absence of an assigned value?",
options: ["empty", "null", "undefined-only", "void-value"],
correctAnswer: 1
},
{
question: "Which JavaScript feature allows writing asynchronous code in a simpler way?",
options: ["async/await", "sync/stop", "wait/continue", "async/loop"],
correctAnswer: 0
}
];
