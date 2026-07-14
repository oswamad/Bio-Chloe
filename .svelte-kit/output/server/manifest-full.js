export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.COJ5HgLI.js",app:"_app/immutable/entry/app.CnvCj9xQ.js",imports:["_app/immutable/entry/start.COJ5HgLI.js","_app/immutable/chunks/Dnb03pKu.js","_app/immutable/chunks/CUdKnb2o.js","_app/immutable/chunks/4uUcLD1U.js","_app/immutable/entry/app.CnvCj9xQ.js","_app/immutable/chunks/CUdKnb2o.js","_app/immutable/chunks/B4d59212.js","_app/immutable/chunks/BJ4g3-PD.js","_app/immutable/chunks/4uUcLD1U.js","_app/immutable/chunks/BYthQCok.js","_app/immutable/chunks/Kjw22ioR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
