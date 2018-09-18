(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{215:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"检查器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查器","aria-hidden":"true"}},[t._v("#")]),t._v(" 检查器")]),t._v(" "),s("p",[t._v("如前所述，"),s("em",[t._v("检查器")]),t._v("使得 TypeScript 更独特，比"),s("em",[t._v("其它 JavaScript 转译器")]),t._v("更强大。检查器位于 "),s("code",[t._v("checker.ts")]),t._v(" 中，当前有 23k 行以上的代码（编译器中最大的部分）")]),t._v(" "),s("h3",{attrs:{id:"程序对检查器的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序对检查器的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 程序对检查器的使用")]),t._v(" "),s("p",[t._v("检查器是由程序初始化，下面是调用栈示意（绑定器一节也展示过）：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("program.getTypeChecker ->\n    ts.createTypeChecker（检查器中）->\n        initializeTypeChecker（检查器中） ->\n            for each SourceFile `ts.bindSourceFile`（绑定器中）\n            // 接着\n            for each SourceFile `ts.mergeSymbolTable`（检查器中）\n")])])]),s("h3",{attrs:{id:"与发射器的联系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#与发射器的联系","aria-hidden":"true"}},[t._v("#")]),t._v(" 与发射器的联系")]),t._v(" "),s("p",[t._v("真正的类型检查会在调用 "),s("code",[t._v("getDiagnostics")]),t._v(" 时才发生。该函数被调用时（比如由 "),s("code",[t._v("Program.emit")]),t._v(" 请求），检查器返回一个 "),s("code",[t._v("EmitResolver")]),t._v("（由程序调用检查器的 "),s("code",[t._v("getEmitResolver")]),t._v(" 函数得到），"),s("code",[t._v("EmitResolver")]),t._v(" 是 "),s("code",[t._v("createTypeChecker")]),t._v(" 的一个本地函数的集合。介绍发射器时还会再次提到。")]),t._v(" "),s("p",[t._v("下面是该过程直到 "),s("code",[t._v("checkSourceFile")]),t._v(" 的调用栈（"),s("code",[t._v("checkSourceFile")]),t._v(" 是 "),s("code",[t._v("createTypeChecker")]),t._v(" 的一个本地函数）：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("program.emit ->\n    emitWorker (program local) ->\n        createTypeChecker.getEmitResolver ->\n            // 第一次调用下面的几个 createTypeChecker 的本地函数\n            call getDiagnostics ->\n                getDiagnosticsWorker ->\n                    checkSourceFile\n\n            // 接着\n            return resolver\n            // 通过对本地函数 createResolver() 的调用，resolver 已在 createTypeChecker 中初始化。\n")])])]),s("h2",{attrs:{id:"全局命名空间合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局命名空间合并","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局命名空间合并")]),t._v(" "),s("p",[s("code",[t._v("initializeTypeChecker")]),t._v(" 中存在以下代码：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// 初始化全局符号表（SymbolTable）。")]),t._v("\n"),s("span",{attrs:{class:"token function"}},[t._v("forEach")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getSourceFiles")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token function"}},[t._v("isExternalModule")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("mergeSymbolTable")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("globals"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locals"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("基本上是将所有的 "),s("code",[t._v("global")]),t._v(" 符号合并到 "),s("code",[t._v("let globals: SymbolTable = {}")]),t._v(" 符号表中（位于 "),s("code",[t._v("createTypeChecker")]),t._v(" 中）。\n"),s("code",[t._v("mergeSymbolTable")]),t._v(" 主要调用 "),s("code",[t._v("mergeSymbol")]),t._v(" 函数。")]),t._v(" "),s("h2",{attrs:{id:"检查器错误报告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查器错误报告","aria-hidden":"true"}},[t._v("#")]),t._v(" 检查器错误报告")]),t._v(" "),s("p",[t._v("检查器使用本地的 "),s("code",[t._v("error")]),t._v(" 函数报告错误，如下所示：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("error")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Node"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DiagnosticMessage"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg0"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("any")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("any")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{attrs:{class:"token operator"}},[t._v("?")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token builtin"}},[t._v("any")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" diagnostic "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" location\n    "),s("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("createDiagnosticForNode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg0"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("createCompilerDiagnostic")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg0"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg1"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  diagnostics"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("diagnostic"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);