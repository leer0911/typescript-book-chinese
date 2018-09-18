(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{184:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("类型断言模式是不安全的，因为编译器相信你在做正确的事情。在其他语言中用于类的常见模式是使用继承：")]),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("当然，如果你不需要一个单独的类，你仍然写出一个有效的强制/断言模式，因此在开始时，我们便展示出了普通的断言模式：")]),t._v(" "),t._m(9),a("blockquote",[a("p",[t._v("灵感来源于："),a("a",{attrs:{href:"https://stackoverflow.com/questions/34859911/instantiated-polymorphic-function-as-argument-in-typescript/34864705#34864705",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow question"),a("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"泛型的实例化类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#泛型的实例化类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 泛型的实例化类型")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("假如你有一个具有泛型参数的类型，如一个类 "),s("code",[this._v("Foo")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你想为一个特定的类型创建单独的版本，可以通过将它拷贝到一个新变量里，并且用具体类型代替泛型的类型注解的方式来实现。例如，如果你想有一个类："),s("code",[this._v("Foo<number>")]),this._v("：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FooNumber "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Foo "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Foo"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ref 1")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("在 "),a("code",[t._v("ref 1")]),t._v(" 中，你说 "),a("code",[t._v("FooNumber")]),t._v(" 与 "),a("code",[t._v("Foo")]),t._v(" 相同，但是，只是将其看作使用 "),a("code",[t._v("new")]),t._v(" 运算符调用时的一个 "),a("code",[t._v("Foo<Number>")]),t._v(" 实例。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[this._v("#")]),this._v(" 继承")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("FooNumber")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("这里需要注意的一点，如果你在基类上使用修饰器，继承类可能没有与基类相同的行为（它不再被修饰器包裹）。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" id"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("T")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" idNum "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" id "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);