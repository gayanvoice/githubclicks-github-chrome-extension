# GitHubClicks
![GitHub](https://img.shields.io/github/license/gayankuruppu/GitHubClicks)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/gayankuruppu/GitHubClicks)


![GitHub Clicks](https://raw.githubusercontent.com/gayankuruppu/GitHubClicks/images/github-clicks.gif)

Navigate through modules, classes, and declarations in GitHub like an IDE. The Chrome extension is written in Javascript and based on JQuery to handle HTTP requests with Github API.

The project supports Android projects written in Java and Kotlin. The extension is still under the experimental stage.
### Video
[![GitHub Clicks](https://img.youtube.com/vi/3SkTmxNDOY4/0.jpg)](https://www.youtube.com/watch?v=3SkTmxNDOY4)

## Install
### 1. Get the extension as Download ZIP
![alt text](https://raw.githubusercontent.com/gayankuruppu/GitHubClicks/images/github-clicks-1.png "Download repo as a compress file")
### 2. Extract the ZIP to a folder
![alt text](https://raw.githubusercontent.com/gayankuruppu/GitHubClicks/images/github-clicks-2.png "Extract the compressed repo")
### 3. Open Extensions in the Google Chrome browser
![alt text](https://raw.githubusercontent.com/gayankuruppu/GitHubClicks/images/github-clicks-3.png "Go to extensions")
### 4. Enable Developer mode
![alt text](https://raw.githubusercontent.com/gayankuruppu/GitHubClicks/images/github-clicks-4.png "Enable developer mode")
### 5. Load the extension using Load upacked and select the root folder 
![alt text](https://raw.githubusercontent.com/gayankuruppu/GitHubClicks/images/github-clicks-5.png "Open load unpacked and select root extension")
### 6. Refresh the extension after the changes
![alt text](https://raw.githubusercontent.com/gayankuruppu/GitHubClicks/images/github-clicks-6.png "Added to browser")

## Contribute
The extension is not stable and needs some more contribution to integrate this into other languages. The potential limitations of this extension works only on the `master` branch, only supports `primary` data types, and can not detect dependencies from other libraries.
### Source
<pre>
root/
├── LICENSE
├── README.md
├── github128.png
├── github64.png
├── github16.png
├── manifest.json
├── js/
│   └── github.js
│   └── util.js
│   └── worker.js
│   ├── vendor/
│   |   └── jquery-3.4.1.js.js
│   ├── lang/
│   |   └── Java.js
│   |   └── Kotlin.js
</pre>
#### manifest.json
The extension has a JSON-formatted manifest file, named `manifest.json`, that provides important information about `name`, `version`, `description`, `content_scripts`, `background`, `icons`, `permissions`, and `version`.
##### `content_scripts`
The values in the `content_scripts` contains `js` which stores the order of javascript source files in the extension. The `content_scripts` JSONObject injects the javascript source in to the content page of a specific tab in order`js/vendor/jquery-3.4.1.js`,  `js/github.js`, `js/util.js` and language files `js/lang/Java.js`, `js/lang/Kotlin.js`
##### `background`
The values in the `background` contain `scripts` which stores the order of javascript source files in the extension. The `scripts` JSONObject injects the javascript source in the browser. The `js/worker.js` execute the script into the browser.
#### github.js
The `github.js` file loads into the content to check if the page is a `github` page, and check if the page is a file by using the extension. If the content is a file then text highlight when mouseover on the span tags. If the user clicks on the text, separate javascript classes in the `lang` folder will load into the container depends on the extension of the file.
#### util.js
consists of some common functions to share with other classes and mostly with github.js. 

## License
<pre>
MIT License

Copyright (c) 2019 Gayan Kuruppu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</pre>
