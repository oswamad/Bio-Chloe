

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0IYXrx1g.js","_app/immutable/chunks/Dt6CVY0E.js","_app/immutable/chunks/B73iR-H3.js","_app/immutable/chunks/Mpx3F4v5.js"];
export const stylesheets = [];
export const fonts = [];
