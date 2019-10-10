# GitHubClicks
Navigate through modules, classes and declarations in GitHub like an IDE. The Chrome extension is written in Javascript and based on JQuery to handle HTTP requests with Github API. The project supports Android projects written in Java and Kotlin. The extension is still under experimental stage.


## Contribute

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
The values in the `background` contains `scripts` which stores the order of javascript source files in the extension. The `scripts` JSONObject injects the javascript source in the browser. The `js/worker.js` execute the script in to the browser.



