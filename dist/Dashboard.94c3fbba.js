// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"aZ8Tr":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3f2b0d9594c3fbba";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gbtep":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$8cf7 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$8cf7.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$8cf7.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Dashboard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _wishesContext = require("../context/WishesContext");
var _wishCard = require("../components/WishCard");
var _wishCardDefault = parcelHelpers.interopDefault(_wishCard);
var _addWishModal = require("../components/AddWishModal");
var _addWishModalDefault = parcelHelpers.interopDefault(_addWishModal);
var _modalDeleteWish = require("../components/ModalDeleteWish");
var _modalDeleteWishDefault = parcelHelpers.interopDefault(_modalDeleteWish);
var _editWishModal = require("../components/EditWishModal");
var _editWishModalDefault = parcelHelpers.interopDefault(_editWishModal);
var _pagination = require("../components/Pagination");
var _paginationDefault = parcelHelpers.interopDefault(_pagination);
var _s = $RefreshSig$();
function Dashboard() {
    _s();
    const { wishes, loading, error, deleteWish, page, limit, total, sortDate, sortPrice, setPage, setSortDate, setSortPrice } = (0, _wishesContext.useWishes)();
    const [addWishOpen, setAddWishOpen] = (0, _react.useState)(false);
    const [deleteTarget, setDeleteTarget] = (0, _react.useState)(null);
    const [editTarget, setEditTarget] = (0, _react.useState)(null);
    async function handleConfirmDelete() {
        if (!deleteTarget) return;
        await deleteWish(deleteTarget.id);
        setDeleteTarget(null);
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "min-h-screen px-4 md:px-6 xl:px-8 py-4",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: " w-full max-w-full min-[375px]:max-w-[375px] md:max-w-[768px] xl:max-w-[1280px] mx-auto px-4 ",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                            className: "text-3xl md:text-4xl xl:text-5xl font-bold text-white drop-shadow-xl",
                            children: "Your wishlist"
                        }, void 0, false, {
                            fileName: "src/pages/Dashboard.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-full min-[375px]:w-full md:w-auto",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                onClick: ()=>setAddWishOpen(true),
                                className: "w-full md:w-auto px-6 py-3 text-white text-base md:text-lg rounded-2xl bg-white/10 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "drop-shadow-[0_1px_1px_rgba(255,255,255,0.2)]",
                                    children: "+ Add wish"
                                }, void 0, false, {
                                    fileName: "src/pages/Dashboard.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Dashboard.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Dashboard.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "flex flex-wrap gap-4 justify-end mb-6 w-full",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            onClick: ()=>{
                                setSortDate("");
                                setSortPrice("");
                                setPage(1);
                            },
                            className: "px-5 py-2 bg-white/10 text-white rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300",
                            children: "Reset"
                        }, void 0, false, {
                            fileName: "src/pages/Dashboard.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                            value: sortDate,
                            onChange: (e)=>{
                                setSortDate(e.target.value);
                                setSortPrice("");
                                setPage(1);
                            },
                            className: "p-2 rounded-lg w-52 bg-white/10 text-white border border-white/20",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                    value: "",
                                    children: "Sort by date"
                                }, void 0, false, {
                                    fileName: "src/pages/Dashboard.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                    value: "newest",
                                    children: "Newest First"
                                }, void 0, false, {
                                    fileName: "src/pages/Dashboard.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                    value: "oldest",
                                    children: "Oldest First"
                                }, void 0, false, {
                                    fileName: "src/pages/Dashboard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Dashboard.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("select", {
                            value: sortPrice,
                            onChange: (e)=>{
                                setSortPrice(e.target.value);
                                setSortDate("");
                                setPage(1);
                            },
                            className: "p-2 rounded-lg w-52 bg-white/10 text-white border border-white/20",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                    value: "",
                                    children: "Sort by price"
                                }, void 0, false, {
                                    fileName: "src/pages/Dashboard.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                    value: "high",
                                    children: "High \u2192 Low"
                                }, void 0, false, {
                                    fileName: "src/pages/Dashboard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("option", {
                                    value: "low",
                                    children: "Low \u2192 High"
                                }, void 0, false, {
                                    fileName: "src/pages/Dashboard.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Dashboard.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                loading && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    className: "text-center text-white/70",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 108,
                    columnNumber: 21
                }, this),
                error && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    className: "text-center text-red-400",
                    children: error
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 109,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full",
                    children: wishes.map((wish)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _wishCardDefault.default), {
                            wish: wish,
                            onEdit: setEditTarget,
                            onDelete: setDeleteTarget
                        }, wish.id, false, {
                            fileName: "src/pages/Dashboard.tsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _paginationDefault.default), {
                        page: page,
                        limit: limit,
                        total: total,
                        onPageChange: setPage
                    }, void 0, false, {
                        fileName: "src/pages/Dashboard.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                addWishOpen && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _addWishModalDefault.default), {
                    onClose: ()=>setAddWishOpen(false)
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 134,
                    columnNumber: 25
                }, this),
                deleteTarget && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _modalDeleteWishDefault.default), {
                    wishTitle: deleteTarget.title,
                    onConfirm: handleConfirmDelete,
                    onCancel: ()=>setDeleteTarget(null)
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this),
                editTarget && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _editWishModalDefault.default), {
                    wish: editTarget,
                    onClose: ()=>setEditTarget(null)
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this),
                !loading && !error && wishes.length === 0 && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    className: "text-center text-white/60 text-xl my-10",
                    children: "Looks like you haven\u2019t added any wishes yet \uD83D\uDE07"
                }, void 0, false, {
                    fileName: "src/pages/Dashboard.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Dashboard.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Dashboard.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "YjPjod+B3n/ckI7ZsjcZO/DEO/I=", false, function() {
    return [
        (0, _wishesContext.useWishes)
    ];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");

  $parcel$ReactRefreshHelpers$8cf7.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../context/WishesContext":"6OMRO","../components/WishCard":"f9MO5","../components/AddWishModal":"3REPp","../components/ModalDeleteWish":"7k0UD","../components/EditWishModal":"epAXc","../components/Pagination":"9WfLV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"f9MO5":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$dca2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$dca2.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$dca2.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WishCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouterDom = require("react-router-dom");
var _wishActions = require("./WishActions");
var _wishActionsDefault = parcelHelpers.interopDefault(_wishActions);
var _s = $RefreshSig$();
function WishCard({ wish, onEdit, onDelete }) {
    _s();
    const navigate = (0, _reactRouterDom.useNavigate)();
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col w-full max-w-full box-border",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                src: wish.image,
                alt: wish.title,
                className: "h-48 w-full object-cover"
            }, void 0, false, {
                fileName: "src/components/WishCard.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "p-4 flex flex-col flex-grow text-white",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                        className: "text-xl font-semibold mb-1 drop-shadow-sm",
                        children: wish.title
                    }, void 0, false, {
                        fileName: "src/components/WishCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-white/70 text-sm flex-grow max-w-xl truncate",
                        children: wish.description
                    }, void 0, false, {
                        fileName: "src/components/WishCard.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-lg font-bold text-green-300 mt-3 drop-shadow",
                        children: [
                            "$",
                            wish.price
                        ]
                    }, void 0, true, {
                        fileName: "src/components/WishCard.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/components/WishCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _wishActionsDefault.default), {
                mode: "card",
                onDetails: ()=>navigate(`/wish/${wish.id}`),
                onEdit: ()=>onEdit(wish),
                onDelete: ()=>onDelete(wish)
            }, void 0, false, {
                fileName: "src/components/WishCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/components/WishCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(WishCard, "CzcTeTziyjMsSrAVmHuCCb6+Bfg=", false, function() {
    return [
        (0, _reactRouterDom.useNavigate)
    ];
});
_c = WishCard;
var _c;
$RefreshReg$(_c, "WishCard");

  $parcel$ReactRefreshHelpers$dca2.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react-router-dom":"61z4w","./WishActions":"a3KN5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"3REPp":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$25c1 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$25c1.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$25c1.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>AddWishModal);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _wishesContext = require("../context/WishesContext");
var _s = $RefreshSig$();
function AddWishModal({ onClose }) {
    _s();
    const { addWish } = (0, _wishesContext.useWishes)();
    const [title, setTitle] = (0, _react.useState)("");
    const [description, setDescription] = (0, _react.useState)("");
    const [price, setPrice] = (0, _react.useState)("");
    const [image, setImage] = (0, _react.useState)("");
    const [errors, setErrors] = (0, _react.useState)({});
    function validate() {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required";
        if (!description.trim()) newErrors.description = "Description is required";
        if (!price || Number(price) <= 0) newErrors.price = "Enter a valid price";
        if (!image.trim()) newErrors.image = "Image URL is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;
        await addWish({
            title,
            description,
            price: Number(price),
            image
        });
        onClose();
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center p-5 z-50",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 w-full max-w-md border border-white/20 shadow-2xl",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                            className: "font-semibold text-2xl mb-5 drop-shadow",
                            children: "Add new wish"
                        }, void 0, false, {
                            fileName: "src/components/AddWishModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                            type: "button",
                            className: "absolute top-1.5 right-1 text-xl font-bold",
                            onClick: onClose,
                            children: "\u2715"
                        }, void 0, false, {
                            fileName: "src/components/AddWishModal.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/components/AddWishModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                    type: "text",
                                    className: `bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${errors.title ? "border-red-400" : "border-white/30"}`,
                                    placeholder: "Title",
                                    value: title,
                                    onChange: (e)=>{
                                        setTitle(e.target.value);
                                        if (errors.title) setErrors({
                                            ...errors,
                                            title: undefined
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                errors.title && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-red-400 text-sm mt-1",
                                    children: errors.title
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/AddWishModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("textarea", {
                                    className: `bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${errors.description ? "border-red-400" : "border-white/30"}`,
                                    placeholder: "Description",
                                    value: description,
                                    onChange: (e)=>{
                                        setDescription(e.target.value);
                                        if (errors.description) setErrors({
                                            ...errors,
                                            description: undefined
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                errors.description && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-red-400 text-sm mt-1",
                                    children: errors.description
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/AddWishModal.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                    type: "number",
                                    className: `bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${errors.price ? "border-red-400" : "border-white/30"}`,
                                    placeholder: "Price",
                                    value: price,
                                    onChange: (e)=>{
                                        setPrice(e.target.value);
                                        if (errors.price) setErrors({
                                            ...errors,
                                            price: undefined
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                errors.price && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-red-400 text-sm mt-1",
                                    children: errors.price
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/AddWishModal.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                    type: "text",
                                    className: `bg-transparent border p-2 rounded-xl w-full placeholder-white/40 text-white font-light ${errors.image ? "border-red-400" : "border-white/30"}`,
                                    placeholder: "Image URL",
                                    value: image,
                                    onChange: (e)=>{
                                        setImage(e.target.value);
                                        if (errors.image) setErrors({
                                            ...errors,
                                            image: undefined
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                errors.image && /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                    className: "text-red-400 text-sm mt-1",
                                    children: errors.image
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/AddWishModal.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex justify-center gap-4 mt-4",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-6 py-2 rounded-xl border border-white/20 bg-transparent text-white hover:bg-red-500/30 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    type: "submit",
                                    className: "px-6 py-2 rounded-xl border border-white/20 bg-transparent text-white hover:bg-green-500/30 transition",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "src/components/AddWishModal.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/AddWishModal.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/components/AddWishModal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/components/AddWishModal.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/components/AddWishModal.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(AddWishModal, "EYUT8a6OamOE9rdJuZeOoPgzmW0=", false, function() {
    return [
        (0, _wishesContext.useWishes)
    ];
});
_c = AddWishModal;
var _c;
$RefreshReg$(_c, "AddWishModal");

  $parcel$ReactRefreshHelpers$25c1.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","react":"jMk1U","../context/WishesContext":"6OMRO","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}],"9WfLV":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4226 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$4226.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$4226.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function Pagination({ page, limit, total, onPageChange }) {
    const totalPages = Math.ceil(total / limit);
    if (totalPages <= 1) return null;
    const pages = [
        ...Array(totalPages)
    ].map((_, i)=>i + 1);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex justify-center mt-10 mb-16 flex-wrap gap-3",
        children: pages.map((num)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                onClick: ()=>onPageChange(num),
                className: `px-4 py-2 rounded-xl border border-white/20 text-white backdrop-blur-md transition
            ${num === page ? "bg-blue-500/40 font-semibold shadow-lg" : "bg-transparent hover:bg-white/10"}`,
                children: num
            }, num, false, {
                fileName: "src/components/Pagination.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "src/components/Pagination.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");

  $parcel$ReactRefreshHelpers$4226.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"dVPUn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"7h6Pi"}]},["aZ8Tr"], null, "parcelRequire2edf", {})

//# sourceMappingURL=Dashboard.94c3fbba.js.map
