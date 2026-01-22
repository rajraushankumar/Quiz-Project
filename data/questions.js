const questions = [
  // HTML (1–15)
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "None of these"
    ],
    correctAnswer: 0
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: 0
  },
  {
    question: "Which HTML tag is used to insert an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correctAnswer: 0
  },
  {
    question: "Which attribute specifies an image source?",
    options: ["src", "href", "alt", "link"],
    correctAnswer: 0
  },
  {
    question: "Which tag is used for the largest heading?",
    options: ["<h6>", "<h4>", "<h1>", "<head>"],
    correctAnswer: 2
  },
  {
    question: "HTML is a ___ language.",
    options: ["Programming", "Styling", "Markup", "Scripting"],
    correctAnswer: 2
  },
  {
    question: "Which tag is used to create a list item?",
    options: ["<li>", "<ul>", "<ol>", "<list>"],
    correctAnswer: 0
  },
  {
    question: "Which tag is used to create a table row?",
    options: ["<td>", "<tr>", "<th>", "<table>"],
    correctAnswer: 1
  },
  {
    question: "Which tag is used to define a form?",
    options: ["<input>", "<form>", "<fieldset>", "<label>"],
    correctAnswer: 1
  },
  {
    question: "Which attribute is used to open a link in a new tab?",
    options: ["target='_blank'", "open='new'", "newtab", "href='_blank'"],
    correctAnswer: 0
  },
  {
    question: "Which tag is used to display a horizontal line?",
    options: ["<line>", "<hr>", "<br>", "<border>"],
    correctAnswer: 1
  },
  {
    question: "Which tag is used to insert a line break?",
    options: ["<lb>", "<break>", "<br>", "<hr>"],
    correctAnswer: 2
  },
  {
    question: "Which attribute provides alternative text for images?",
    options: ["title", "alt", "src", "name"],
    correctAnswer: 1
  },
  {
    question: "Which tag is used for unordered lists?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    correctAnswer: 0
  },
  {
    question: "Which HTML tag contains meta information?",
    options: ["<meta>", "<head>", "<title>", "<body>"],
    correctAnswer: 1
  },

  // CSS (16–30)
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets"
    ],
    correctAnswer: 2
  },
  {
    question: "Which property changes text color?",
    options: ["color", "text-color", "font-color", "background"],
    correctAnswer: 0
  },
  {
    question: "Which property sets background color?",
    options: ["bgcolor", "background", "background-color", "color"],
    correctAnswer: 2
  },
  {
    question: "Which CSS property controls text size?",
    options: ["font-style", "text-size", "font-size", "size"],
    correctAnswer: 2
  },
  {
    question: "Which symbol is used for class selector?",
    options: ["#", ".", "*", "&"],
    correctAnswer: 1
  },
  {
    question: "Which symbol is used for ID selector?",
    options: ["#", ".", "*", "&"],
    correctAnswer: 0
  },
  {
    question: "Which property adds space inside an element?",
    options: ["margin", "padding", "border", "spacing"],
    correctAnswer: 1
  },
  {
    question: "Which property adds space outside an element?",
    options: ["padding", "margin", "border", "outline"],
    correctAnswer: 1
  },
  {
    question: "Which display value hides an element?",
    options: ["block", "inline", "none", "hidden"],
    correctAnswer: 2
  },
  {
    question: "Which property makes text bold?",
    options: ["font-style", "font-weight", "text-bold", "weight"],
    correctAnswer: 1
  },
  {
    question: "Which unit is relative to screen size?",
    options: ["px", "cm", "vh", "mm"],
    correctAnswer: 2
  },
  {
    question: "Which property controls element width?",
    options: ["height", "size", "width", "length"],
    correctAnswer: 2
  },
  {
    question: "Which CSS makes layout flexible?",
    options: ["grid", "float", "flexbox", "position"],
    correctAnswer: 2
  },
  {
    question: "Which property is used to round corners?",
    options: ["border-style", "border-radius", "corner-radius", "radius"],
    correctAnswer: 1
  },
  {
    question: "Which property adds shadow to elements?",
    options: ["box-shadow", "shadow", "element-shadow", "drop-shadow"],
    correctAnswer: 0
  },

  // JavaScript (31–50)
  {
    question: "JavaScript is a ___ language.",
    options: ["Markup", "Styling", "Programming", "Database"],
    correctAnswer: 2
  },
  {
    question: "Which keyword declares a variable?",
    options: ["int", "var", "string", "float"],
    correctAnswer: 1
  },
  {
    question: "Which symbol is used for comments in JS?",
    options: ["//", "<!-- -->", "#", "**"],
    correctAnswer: 0
  },
  {
    question: "Which function prints output in console?",
    options: ["print()", "log()", "console.log()", "write()"],
    correctAnswer: 2
  },
  {
    question: "Which data type stores true/false?",
    options: ["String", "Boolean", "Number", "Object"],
    correctAnswer: 1
  },
  {
    question: "Which operator compares value and type?",
    options: ["==", "=", "===", "!="],
    correctAnswer: 2
  },
  {
    question: "Which function runs code repeatedly?",
    options: ["setTimeout()", "setInterval()", "repeat()", "loop()"],
    correctAnswer: 1
  },
  {
    question: "Which keyword defines a function?",
    options: ["function", "def", "method", "func"],
    correctAnswer: 0
  },
  {
    question: "Which event occurs on button click?",
    options: ["onchange", "onmouseover", "onclick", "onload"],
    correctAnswer: 2
  },
  {
    question: "Which object stores data in key-value pairs?",
    options: ["Array", "Object", "String", "Number"],
    correctAnswer: 1
  },
  {
    question: "Which method converts JSON to object?",
    options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toObject()"],
    correctAnswer: 0
  },
  {
    question: "Which keyword stops a loop?",
    options: ["stop", "break", "exit", "end"],
    correctAnswer: 1
  },
  {
    question: "Which method adds item at end of array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: 0
  },
  {
    question: "Which method removes last array item?",
    options: ["push()", "shift()", "pop()", "delete()"],
    correctAnswer: 2
  },
  {
    question: "JavaScript runs mainly in which place?",
    options: ["Compiler", "Browser", "Database", "Server only"],
    correctAnswer: 1
  }
];
