(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{444:function(n,t,s){"use strict";s.r(t);var e=s(1),a=Object(e.a)({},(function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("blockquote",[s("p",[n._v("本文转载自："),s("a",{attrs:{href:"https://blog.csdn.net/kingroc/article/details/109352815",target:"_blank",rel:"noopener noreferrer"}},[n._v("Vue3加载本地assets图片路径错误"),s("OutboundLink")],1)])]),n._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#错误的使用方式："}},[n._v("错误的使用方式：")])]),s("li",[s("a",{attrs:{href:"#正确的使用方式："}},[n._v("正确的使用方式：")]),s("ul",[s("li",[s("a",{attrs:{href:"#引入图片路径参与编译"}},[n._v("引入图片路径参与编译")])])])])])]),s("p"),n._v(" "),s("h2",{attrs:{id:"错误的使用方式："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误的使用方式："}},[n._v("#")]),n._v(" 错误的使用方式：")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("  const state = reactive({\n            sliders: [{\n                    img:  '@/assets/1.png'\n                },\n                {\n                    img:  '@/assets/1.png'\n                },\n                {\n                    img:  '@/assets/2.png'\n                },\n                {\n                    img:  '@/assets/3.png'\n                },\n                {\n                    img:  '@/assets/4.png'\n                }\n            ],\n            currentIndex: 1,\n            distance: -600\n        })\n\n        return {\n            ...state\n        }\n")])])]),s("h2",{attrs:{id:"正确的使用方式："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正确的使用方式："}},[n._v("#")]),n._v(" 正确的使用方式：")]),n._v(" "),s("h3",{attrs:{id:"引入图片路径参与编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入图片路径参与编译"}},[n._v("#")]),n._v(" 引入图片路径参与编译")]),n._v(" "),s("p",[n._v("运行时的加载路径和代码编写路径不同。")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("import img0 from '@/assets/0.png'\nimport img1 from '@/assets/1.png'\nimport img2 from '@/assets/2.png'\nimport img3 from '@/assets/3.png'\nimport img4 from '@/assets/4.png'\n\nexport default defineComponent({\n    setup(){\n        const state = reactive({\n            sliders: [{\n                    img: img0\n                },\n                {\n                    img: img1\n                },\n                {\n                    img: img2\n                },\n                {\n                    img: img3\n                },\n                {\n                    img: img4\n                }\n            ],\n            currentIndex: 1,\n            distance: -600\n        })\n\n        return {\n            ...state\n        }\n    }\n}\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);