<h1 align="center">
  <br>
  <img src=".readme/index.png" alt="Book cover" width="500">
  <br>
  <p>thankYouEthanBrown</p>
</h1>

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

This is a tracker of my JS learning progress with [Ethan Brown's](https://github.com/EthanRBrown) &#39;Learning JavaScript 3rd edition&#39; During the read, I put the code examples from each book chapter into respective repository folders. Short notes, new vocabulary and other noteworthy pieces of information were stored in this file. I hope you find these useful.

> ☝ **NOTE: You should never rely on someone else's notes and read this book on your own. But it might be a good idea to check underwritten bullets to find something you are yet unfamiliar with. Things, that look `like this` below can be used as a markers: if you are uncertain what the marked term(technology, web resource, person, book, etc.) means, then it could be a good idea to read the respective chapter of the book and/or google that term to know more.**

**📖 Contents:** 

- [Chapter1](#chapter1)
- [Chapter2](#Chapter2)
- [Chapter3](#Chapter3)
- [Chapter4](#Chapter4)
- [Chapter5](#Chapter5)
- [Chapter6](#Chapter6)
- [Chapter7](#Chapter7)
- [Chapter8](#Chapter8)
- [Chapter9](#Chapter9)
- [Chapter10](#Chapte10)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Chapter1
1.  JavaScript is not Java. It is a realization of the ECMAScript language.
ECMAScript 6 (ES6) was published in June 2015 and was also referenced as `"Harmony"`, `"ES2015"` or `"ECMAScript2015"`.
2.  ES6 is basically `syntax sugar` over ES5 which really had a lot of changes over the previous standard. Nevertheless, ES6 features help coder a lot and fix several issues present in language earlier.
3.  `'use strict'` directive is not a command, nor a function or an object. It is just a string that tells your browser to slightly change its behavior while parsing and running the code. It does not 'switch on' the ES6 syntax.
4.  You can use a transpiler to automatically convert your ES6 code to older syntax if you need it for compatibility reasons.
5.  This book was not created to cover all aspects of ES6 in detail, some other good references are `Mozilla Developer Network`, or `JavaScript: The Definitive Guide by David Flanagan` (it does not cover ES6 now, but as for May 2019 some chapters of the new revision are available on Amazon as early access).
6.  Choose a good code editor to support you during the way. Most of the modern editors go with some useful features like syntax highlighting, words autocompletion and more.
7.  Before you know what you are doing be extremely attentive to each symbol you type from the source. You will definitely waste half an hour one day because of one wrong semicolon.
8.  Put your CSS in the header 
    `<link  rel="stylesheet" href="main.css">`
Put your scripts to the end of the body by default. There are several reasons for this, that will be discussed later
    `<script  src="main. js"></script>`
9.  Open dev tools with F12 in most of the browsers. If you go to console then, use `<Ctrl+Shift+K>` to shorten the way.
10. CDNs aka content delivery networks is an easy way to include public JS libraries to your project. We will use jQuery and PaperJS in this chapter's example. Yes, jQuery is as old as you, but it is still commonly used and a lot of tools are based on it. 
11. Boilerplate is just a repetitive standard piece of code that you use to set up things like PaperJS or other external libraries.
12. Asynchronous events are the ones that happen without your control. The user decides to click, or external script finishes work - you never know **exactly** when the event happens. As easy as that.

## Chapter2

1.  'Coding' involves not only the code editor and a coding language. You should know about things like:
`git` - version control system
`node` - go with npm and let you execute JS code without a browser
`GULP` - project builder
`Babel` - transcompiler
`ESLint` - linter
2.  Do you know command shell essentials?
    `pwd`
    `ls`
    `mkdir`
    `cd`
    `cd ..`
3.  Do you know git essentials?
    `git init`
    `.gitignore`
    `git status`
    `git add -A`
    `git commit -m "I know how to commit"`
    `git push`
    `git log`
4.  Do you know Node essentials?
    `node -v`
    `npm -v`
    `npm install` [packageName] [--options]
    `package.json`
    `npm install`
5.  Modules, that you install using npm (or yarn as an alternative) are called dependencies of your project. You use a package manager to download all the dependencies automatically.  
6.  You use GULP to do a lot of repetitive tasks like running a list of commands one by one several time a day in an easy way. It might be scary to start using it, but after you invest a day in it completing tutorials and trying things out, you will like it. 
7.  There are common project structure principles to follow. Do not put all your files in one folder.
8.  As coding practice in this chapter you will:
    `Initialize npm in project folder`
    `Install GULP as dev-dependancy`
    `Create GULP tasks` (check bullet 9. for an explanation of 'dependency' word used in the book's example)

9.  NOTE Dependencies of the whole project **as files** will be downloaded by npm. We put it in gulpfile.js as well to be able to use these with GULP **as JS external libraries**
10. Ethan seems to be using gulp3 while writing the book and following the book's instructions you will get gulp4 with a slightly different approach to callback functions. The result may be the following:
![gulp4 callback error](.chapter2/img/gulpCBerror.png)
To make it work add (cb) to the task functions (you can check the gulpfile example in chapter2 folder). There are different methods to provide a correct callback in gulp4, check gulp documentation and search for 'callback' keyword to learn why's and how's.
11. 
12. 
13. 
14. 
## Chapter3
1.  Data types are abstractions over 'zeroes and ones' to represent numbers, srtings, dates and so on.
2.  Data storage mechanisms include variables, constants and literals. 
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Chapter4
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Chapter5
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Chapter6
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Chapter7
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Chapter8
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Chapter9
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Chapter10
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10. 
11. 
12. 
13. 
14. 

## Maintainers

[@skrikl](https://github.com/skrikl)

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2019 Sergey Kriklivyy
