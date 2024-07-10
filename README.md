# **Thought_Space**
<!-- todo add video demo -->

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## 📰 Description

A backend service using a noSQL database to store users, their friends list, their thoughts and their reactions to thoughts. Crafted using Express.js and Mongoose.

## 🔎 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## 💾 Installation <a id="installation"></a>

Clone the repo [Here](https://github.com/ThisTish/Thought_Space)
Install all dependencies with `npm i` in your terminal.

## 🖱️ Usage <a id="usage"></a>

Start the server by using the command `npm start` in your terminal.

Use Insomnia, Postman or another API testing tool. Testing files are provided in the utils/tests folder for REST Client(VSCode extension) and for Insomnia.

Route functions provide information to Get all, Get by id, Post, Put and Delete for Users & Thoughts. There are also routes to Add and Delete Reactions on thoughts, and Friends for users' friends list.

[Video Demo](https://drive.google.com/file/d/1pEMhUk3gQhOwARHLw6WvPkblQPZhIZ5T/view)

## 🌐 Contributing <a id="contributing"></a>


Contact through the email provided below.

## 🧪 Tests <a id="tests"></a>

### Found in utilites folder:

Insomnia & REST Client files to test all routes.

Seed functions are also provided for Users with Emails and Thoughts. Use `npm run seed` to utilize this.

## ✋ Questions <a id="questions"></a>


If you have any questions, feel free to contact me at:

- *GitHub: [ThisTish](https://github.com/ThisTish)*
- *Contact: tish.sirface@gmail.com*

## 🪪 License <a id="license"></a>

MIT License

        Copyright 2024 Tisha Sirface

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## 👏 Acknowledgments <a id="acknowledgments">

- [**colors**](https://www.npmjs.com/package/colors): Adds color to your console logs for easier debugging and readability.
- [**express**](https://www.npmjs.com/package/express): Fast, unopinionated, minimalist web framework for Node.js.
- [**mongoose**](https://www.npmjs.com/package/mongoose): Elegant MongoDB object modeling for Node.js.
- [**validator**](https://www.npmjs.com/package/validator): A library of string validators and sanitizers.
- [**nodemon**](https://www.npmjs.com/package/nodemon): Development tool that automatically restarts the Node.js application when file changes are detected.
