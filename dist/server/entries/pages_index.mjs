import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { jsx, jsxs } from "react/jsx-runtime";
/* empty css                       */
import import4 from "vike-react/__internal/integration/Loading";
function Hero() {
  return /* @__PURE__ */ jsx("section", { id: "home", className: "h-auto py-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: [
      "こんにちは、",
      /* @__PURE__ */ jsx("span", { className: "text-blue-600 dark:text-blue-400", children: " boy2" }),
      "です"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-2", children: "SRE" }),
    /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto", children: "素晴らしいWebサイトとアプリケーションを作成しています" })
  ] }) }) });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-8 bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white", children: "自己紹介" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 leading-relaxed text-center", children: "情熱的なWeb開発者として、美しく機能的なWebサイトを作成することに専念しています。 最新の技術とベストプラクティスを使用して、ユーザーエクスペリエンスを重視したプロジェクトを開発しています。" }) })
  ] }) });
}
function Skills() {
  const skills = [
    {
      name: "AWS",
      icon: /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 256 153", className: "w-16 h-16", fill: "currentColor", children: [
        /* @__PURE__ */ jsx("path", { d: "M72.392 55.438c0 3.137.34 5.69.933 7.471.679 1.783 1.698 3.652 3.143 5.691.509.594.68 1.188.68 1.783 0 .764-.51 1.529-1.528 2.293l-5.096 3.396c-.764.51-1.528.764-2.208.764-.849 0-1.698-.425-2.547-1.189-1.444-1.528-2.633-3.141-3.566-4.84-.934-1.783-1.868-3.735-2.972-6.199-7.47 8.829-16.895 13.244-28.274 13.244-8.063 0-14.517-2.293-19.273-6.964C6.799 66.223 4.421 60.108 4.421 52.302c0-8.319 2.972-15.026 9.01-20.122 6.03-5.096 14.007-7.644 24.112-7.644 3.312 0 6.709.255 10.282.679 3.566.425 7.301 1.019 11.236 1.868v-6.2c0-6.454-1.359-10.96-3.991-13.584-2.718-2.633-7.3-3.906-13.84-3.906-2.972 0-6.029.34-9.18.933-3.142.594-6.2 1.359-9.18 2.208-1.359.594-2.378.934-2.972 1.104-.594.17-1.019.255-1.359.255-1.188 0-1.782-.849-1.782-2.632V2.972c0-1.359.17-2.378.594-2.972.424-.594 1.273-1.189 2.547-1.698C23.06.935 27.645.255 32.571 0c4.84-.34 9.945-.51 15.28-.51 11.66 0 20.149 2.633 25.585 7.984 5.35 5.35 8.063 13.414 8.063 24.197v31.84l-.107-.073zm-39.064 14.687c3.227 0 6.539-.594 10.022-1.783 3.481-1.188 6.538-3.396 9.01-6.369 1.528-1.953 2.632-4.096 3.226-6.538.595-2.463.934-5.35.934-8.744v-4.246c-2.972-.679-6.114-1.188-9.265-1.613-3.142-.425-6.284-.594-9.265-.594-6.625 0-11.465 1.274-14.602 3.906-3.142 2.633-4.67 6.369-4.67 11.296 0 4.585 1.189 7.984 3.652 10.446 2.378 2.463 5.86 3.652 10.532 3.652l.426.587zm77.643 10.531c-1.528 0-2.547-.255-3.226-.849-.68-.594-1.274-1.868-1.868-3.566L89.288 8.322c-.594-1.953-.849-3.227-.849-3.906 0-1.529.764-2.378 2.292-2.378h9.35c1.613 0 2.717.255 3.312.849.679.594 1.189 1.868 1.783 3.566l12.424 49.09 11.55-49.09c.51-1.953 1.019-3.227 1.698-3.566.679-.594 1.868-.849 3.397-.849h7.644c1.613 0 2.717.255 3.397.849.679.594 1.273 1.868 1.698 3.566l11.66 49.77 12.764-49.77c.594-1.953 1.274-3.227 1.868-3.566.679-.594 1.783-.849 3.312-.849h8.828c1.528 0 2.378.764 2.378 2.378 0 .424-.085.849-.17 1.358-.085.51-.34 1.274-.764 2.463l-17.744 67.814c-.594 1.952-1.188 3.226-1.868 3.566-.679.594-1.783.849-3.227.849h-8.233c-1.613 0-2.718-.255-3.397-.849-.679-.594-1.273-1.783-1.698-3.651l-11.465-47.733-11.381 47.648c-.509 1.953-1.019 3.227-1.698 3.651-.679.594-1.868.849-3.397.849h-8.318v-.085zm124.927 2.633c-5.01 0-10.022-.595-14.857-1.698-4.84-1.104-8.573-2.378-10.956-3.737-1.359-.764-2.293-1.613-2.548-2.378-.254-.679-.424-1.443-.424-2.207v-3.312c0-1.783.68-2.632 1.953-2.632.51 0 1.019.084 1.528.254.51.17 1.274.51 2.123.849 2.887 1.274 6.029 2.293 9.435 2.972 3.481.68 6.879 1.019 10.361 1.019 5.52 0 9.775-.934 12.764-2.803 2.972-1.868 4.5-4.67 4.5-8.318 0-2.463-.764-4.5-2.378-6.2-1.613-1.697-4.5-3.226-8.743-4.5l-12.509-3.906c-6.369-1.953-11.04-4.84-13.923-8.573-2.887-3.652-4.33-7.729-4.33-12.085 0-3.481.764-6.539 2.207-9.18 1.444-2.632 3.397-4.924 5.775-6.793 2.378-1.868 5.18-3.312 8.488-4.33 3.312-1.02 6.794-1.53 10.531-1.53 2.123 0 4.331.086 6.454.341 2.208.255 4.246.595 6.2 1.02 1.868.424 3.651.933 5.35 1.442 1.697.51 3.141 1.02 4.16 1.529 1.273.68 2.207 1.358 2.717 2.038.509.594.764 1.528.764 2.717v3.057c0 1.783-.68 2.717-1.953 2.717-.68 0-1.783-.34-3.227-.934-4.84-2.208-10.276-3.312-16.305-3.312-5.01 0-8.998.764-11.72 2.463-2.718 1.698-4.076 4.246-4.076 7.814 0 2.463.849 4.585 2.547 6.284 1.698 1.698 4.84 3.397 9.435 4.755l12.254 3.906c6.284 1.953 10.87 4.67 13.584 8.063 2.718 3.397 4.01 7.3 4.01 11.721 0 3.566-.765 6.794-2.208 9.605-1.444 2.803-3.482 5.265-5.945 7.303-2.463 2.123-5.52 3.651-9.095 4.755-3.651 1.189-7.559 1.698-11.89 1.698l.085.085z", fill: "#252F3E" }),
        /* @__PURE__ */ jsx("path", { d: "M230.993 120.964c-27.37 20.234-67.05 30.935-101.239 30.935-47.903 0-91.043-17.659-123.639-47.054-2.548-2.293-.255-5.435 2.803-3.652 35.098 20.403 78.493 32.717 123.299 32.717 30.256 0 63.532-6.284 94.128-19.188 4.585-2.038 8.488 3.057 4.076 6.624l.572-.382z", fill: "#FF9900" }),
        /* @__PURE__ */ jsx("path", { d: "M242.733 107.38c-3.481-4.5-23.205-2.123-32.034-1.104-2.718.34-3.142-2.038-.68-3.736 15.706-11.041 41.46-7.814 44.432-4.16 2.972 3.736-.764 29.491-15.536 41.8-2.292 1.868-4.5.934-3.481-1.614 3.312-8.233 10.786-26.622 7.3-31.186z", fill: "#FF9900" })
      ] })
    },
    {
      name: "Terraform",
      icon: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 256 257", className: "w-16 h-16", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M0 47.863v70.375l61.022 35.237V83.1L0 47.863zm88.973 35.237l61.022 35.237v70.375l-61.022-35.237V83.1zm122.045 0V153.475l61.022 35.237V118.337l-61.022-35.237zM89.077.025v70.375l61.022 35.237V35.262L89.077.025z", fill: "#5C4EE5" }) })
    },
    {
      name: "Security",
      icon: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", className: "w-16 h-16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) })
    }
  ];
  return /* @__PURE__ */ jsx("section", { id: "skills", className: "py-8 bg-gray-50 dark:bg-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white", children: "Skills" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8", children: skills.map((skill, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-gray-700 dark:text-gray-300 mb-3", children: skill.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white text-center", children: skill.name })
        ]
      },
      index
    )) })
  ] }) });
}
function Page() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Skills, {})
  ] });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "ja", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" })
    ] }),
    /* @__PURE__ */ jsx("body", { className: "antialiased", children })
  ] });
}
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Layout
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: onRenderHtml
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["_configViaHook"]
    }]
  },
  ["Layout"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/pages/+Layout.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import3
    }]
  },
  ["title"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
    valueSerialized: {
      type: "js-serialized",
      value: "Portfolio Site"
    }
  },
  ["description"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
    valueSerialized: {
      type: "js-serialized",
      value: "My portfolio website"
    }
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/Loading", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: import4
    }
  }
};
export {
  configValuesSerialized
};
