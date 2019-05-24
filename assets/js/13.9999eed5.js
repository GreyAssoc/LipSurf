(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{167:function(t,s,e){t.exports=e.p+"assets/img/developer-mode.4506fc13.png"},168:function(t,s,e){t.exports=e.p+"assets/img/add-a-local-plugin.27bcfe0a.png"},169:function(t,s,e){t.exports=e.p+"assets/img/local-plugin-added.1be7b114.png"},170:function(t,s,e){t.exports=e.p+"assets/img/hello-world-alert.3a89290c.png"},171:function(t,s,e){t.exports=e.p+"assets/img/help-screen.42dc941b.png"},184:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_5-minute-quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-minute-quick-start","aria-hidden":"true"}},[this._v("#")]),this._v(" 5 Minute Quick Start")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"hello-world-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-plugin","aria-hidden":"true"}},[this._v("#")]),this._v(" Hello World Plugin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('Let\'s create a simple "Hello World" plugin that responds with a JavaScript alert "Hello, Developer!" when a user says '),s("span",{staticClass:"voice-cmd"},[this._v("hello world")]),this._v(" on a tab with a *.lipsurf.com domain.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Clone the community plugins repository and change into the directory.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("git clone https://github.com/LipSurf/plugins.git lipsurf-plugins\ncd lipsurf-plugins\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("Install the dependencies.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yarn install\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("Create a folder named "),s("code",[this._v("HelloWorld")]),this._v(" with a "),s("code",[this._v("HelloWorld.ts")]),this._v(" file in it with the following contents:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("It's important to keep the capitalization consistent. The case-sensitive namespace must always end in "),e("code",[t._v("Plugin")]),t._v(" (eg. "),e("code",[t._v("HelloWorldPlugin")]),t._v(") and\nthe folder and file name should have the same name and capitalization (without the "),e("code",[t._v("Plugin")]),t._v(" suffix).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("PROTIP")]),this._v(" "),s("p",[this._v("Rather than copy-pasting, it's better to type out the code to force yourself to grasp it's intuitive structure and contents better.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// lipsurf-plugins/src/HelloWorld/HelloWorld.ts")]),t._v("\n"),e("span",{attrs:{class:"token comment"}},[t._v('/// <reference types="lipsurf-plugin-types"/>')]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" PluginBase "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'../PluginBase'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("module")]),t._v(" HelloWorldPlugin "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" Plugin"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IPlugin "),e("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" IPluginBase "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assign"),e("span",{attrs:{class:"token operator"}},[t._v("<")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IPluginBase"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IPlugin"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PluginBase"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        niceName"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        description"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'A hello world plugin that works on the lipsurf.com domain.'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{attrs:{class:"token comment"}},[t._v("// a RegEx that must match against the current tab's url for the plugin to be active (all of it's commands minus global commands)")]),t._v("\n        match"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token regex"}},[t._v("/.*\\.lipsurf.com/")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        version"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'1.0.0'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n        commands"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Respond'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            description"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'Respond with something very insightful to the user'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{attrs:{class:"token comment"}},[t._v("// what the user actually has to say to run this command")]),t._v("\n            match"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'hello world'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{attrs:{class:"token comment"}},[t._v("// the js that's run on the page")]),t._v("\n            pageFn"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("function")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{attrs:{class:"token function"}},[t._v("alert")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'Hello, Developer!'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("Since we're doing the example in TypeScript, we need to compile down to JavaScript.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("yarn watch\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("This will watch our *.ts files for changes and compile them to JavaScript whenever a change is detected 😃")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[s("p",[this._v("Time to "),s("em",[this._v("load 'er up")]),this._v('. Open up Google Chrome and right click the LipSurf icon then "Options".')])]),this._v(" "),s("li",[s("p",[this._v('Turn on "Developer mode" by checking its box.')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(167),alt:"Screenshot of developer mode setting"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"7"}},[s("li",[this._v('Click "Add a Local Plugin" under "Plugins" and navigate to the compiled '),s("code",[this._v(".mjs")]),this._v(" file (eg. "),s("code",[this._v("plugins/dist/HelloWorld.mjs")]),this._v(").")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),s("p",[this._v("The "),s("code",[this._v("mjs")]),this._v(" extension is special for ECMAScript modules (ESM). They are basically JavaScript.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(168),alt:'Screenshot of the "Add a local plugin" button.'}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("🏁     "),s("strong",[this._v("That's it!")]),this._v("     🏁")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"verifying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#verifying","aria-hidden":"true"}},[this._v("#")]),this._v(" Verifying")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("Check the developer console (<F12>) for hints if there are installation issues.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(169),alt:"Screenshot of the HelloWorld plugin in the list of plugins"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now try saying "),s("span",{staticClass:"voice-cmd"},[this._v("hello world")]),this._v(" on this tab (since this tab has a lipsurf.com domain it will match our url pattern).")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(170),alt:'Screenshot of "Hello, Developer!" alert box'}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can also say "),s("span",{staticClass:"voice-cmd"},[this._v("help")]),this._v(" to see your new command listed in the auto-generated help overlay.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:e(171),alt:'Screenshot of help cheat-sheet that now includes new "hello world" command'}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"what-s-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next","aria-hidden":"true"}},[this._v("#")]),this._v(" What's Next")])}],n=e(0),i=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),e("p",[t._v("The meat of the plugin lives in the array of commands. Each "),e("router-link",{attrs:{to:"/api-reference/command.html"}},[t._v("Command")]),t._v(" object has a "),e("code",[t._v("match")]),t._v(" property for what the user needs to say to run it, a "),e("code",[t._v("pageFn")]),t._v(" property for the code that's actually run and a bunch of meta properties like "),e("code",[t._v("name")]),t._v(", "),e("code",[t._v("description")]),t._v(" etc.")],1),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),e("br"),t._v(" "),t._m(19),t._v(" "),e("br"),t._v(" "),e("hr"),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("After a few seconds your plugin should appear in the plugins list if there were no installation problems.")]),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("If everything went smoothly, you should see a JavaScript alert like this one:")]),t._v(" "),t._m(24),t._v(" "),e("hr"),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),e("hr"),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("If you think that's nifty, we've just scratched the surface! LipSurf can handle homophones, dynamic match commands, multiple languages and more!")]),t._v(" "),e("p",[t._v('Check out the "Advanced" topics after you\'ve regained composure from all the excitement this is generating!')])])},a,!1,null,null,null);i.options.__file="quick-start.md";s.default=i.exports}}]);