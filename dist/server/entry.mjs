import { setGlobalContext_prodBuildEntry } from "vike/__internal";
globalThis.__VIKE__IS_DEV = false;
globalThis.__VIKE__IS_CLIENT = false;
globalThis.__VIKE__IS_DEBUG = false;
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedAtLocation": "/pages/index/" },
    loadVirtualFilePageEntry: () => ({ moduleId: "virtual:vike:page-entry:server:/pages/index", moduleExportsPromise: import("./entries/pages_index.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const virtualFileExportsGlobalEntry = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-D3MKjcvV.js": {
    "file": "assets/chunks/chunk-D3MKjcvV.js",
    "name": "execHook"
  },
  "_src_styles_globals-8da7f7cb.P39Zc_Tf.css": {
    "file": "assets/static/src_styles_globals-8da7f7cb.P39Zc_Tf.css",
    "src": "_src_styles_globals-8da7f7cb.P39Zc_Tf.css"
  },
  "node_modules/vike/dist/esm/client/runtime-client-routing/entry.js": {
    "file": "assets/entries/entry-client-routing.CB4TA802.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/runtime-client-routing/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-D3MKjcvV.js"
    ],
    "dynamicImports": [
      "virtual:vike:page-entry:client:/pages/index"
    ]
  },
  "virtual:vike:page-entry:client:/pages/index": {
    "file": "assets/entries/pages_index.8ma04Ekl.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:page-entry:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-D3MKjcvV.js"
    ],
    "css": [
      "assets/static/src_styles_globals-8da7f7cb.P39Zc_Tf.css"
    ]
  }
};
  const buildInfo = {
    "versionAtBuildTime": "0.4.247",
    "usesClientRouter": false,
    "viteConfigRuntime": {
      "root": "/home/boy2/work/boy2/portfolio-site",
      "build": {
        "outDir": "/home/boy2/work/boy2/portfolio-site/dist/"
      },
      "_baseViteOriginal": "/__UNSET__",
      "vitePluginServerEntry": {}
    }
  };
  setGlobalContext_prodBuildEntry({
    virtualFileExportsGlobalEntry,
    assetsManifest,
    buildInfo
  });
}
