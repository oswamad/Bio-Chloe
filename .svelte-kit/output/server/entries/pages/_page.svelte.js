import { a4 as attr_style, a5 as attr_class, a6 as ensure_array_like, a7 as attr, e as escape_html, a8 as fallback, a9 as bind_props, aa as stringify, ab as head } from "../../chunks/index.js";
function CustomCursor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<div class="cursor-dot svelte-1nx4icj" aria-hidden="true"${attr_style("", { opacity: "0" })}></div> <div class="cursor-ring svelte-1nx4icj" aria-hidden="true"${attr_style("", { opacity: "0" })}></div>`);
  });
}
function Navigation($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const navLinks = [
      { href: "#about", label: "About" },
      { href: "#engineering", label: "Engineering" },
      { href: "#voice", label: "Voice" },
      { href: "#vr", label: "VRChat" },
      { href: "#music", label: "Music" },
      { href: "#contact", label: "Contact" }
    ];
    let scrolled = false;
    $$renderer2.push(`<nav aria-label="Main navigation"${attr_class("svelte-ocbj1u", void 0, { "scrolled": scrolled })}><span class="nav-name mono svelte-ocbj1u">Chloe</span> <ul class="svelte-ocbj1u"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { href, label } = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", href)} class="svelte-ocbj1u">${escape_html(label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav>`);
  });
}
function Waveform($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let height = fallback($$props["height"], 48);
    let animated = fallback($$props["animated"], true);
    let color = fallback($$props["color"], "var(--color-pink)");
    let secondary = fallback($$props["secondary"], "var(--color-blue)");
    let visible = false;
    let w = 800;
    $$renderer2.push(`<svg${attr("height", height)}${attr("viewBox", `0 0 ${stringify(w)} ${stringify(height)}`)} preserveAspectRatio="none" aria-hidden="true"${attr_class("waveform svelte-1x1dhop", void 0, { "visible": visible })}><defs><linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%"${attr("stop-color", secondary)} stop-opacity="0.6"></stop><stop offset="50%"${attr("stop-color", color)} stop-opacity="0.9"></stop><stop offset="100%"${attr("stop-color", secondary)} stop-opacity="0.3"></stop></linearGradient></defs><path${attr("d", `M 0 ${stringify(height / 2)} L ${stringify(w)} ${stringify(height / 2)}`)} fill="none" stroke="url(#waveGrad)" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
    bind_props($$props, { height, animated, color, secondary });
  });
}
const meta = {
  name: "Chloe",
  tagline: "Soft voice. Sharp mind. A little difficult to read.",
  description: "I'm Chloe — a power integrity engineer, software builder, VR enthusiast, and gothic girl who spends far too much time analyzing technology, voices, lyrics, and the things people leave unsaid.",
  pronouns: "she/her",
  location: "Mexico"
};
const heroTags = [
  "ENGINEER",
  "VR GIRL",
  "VOICE & IDENTITY",
  "GOTHIC SOFTNESS",
  "EMOTIONALLY LITERATE"
];
const about = {
  paragraph1: "I tend to understand the world by taking it apart — sometimes that means analyzing a motherboard, sometimes a voice, and sometimes a sentence someone said with just a little too much hesitation.",
  paragraph2: "I'm technical, introspective, queer, and quietly playful. I love dark aesthetics, soft femininity, virtual spaces, meaningful conversations, and anything that lets identity become something creative rather than fixed."
};
const engineerSide = {
  title: "The Engineer",
  items: ["Systems", "Power", "Simulation", "Automation", "Hardware", "Code", "Precision"]
};
const girlSide = {
  title: "The Girl Behind the Signal",
  items: ["Voice", "Femininity", "VR", "Music", "Subtext", "Connection", "Self-expression"]
};
const skills = [
  {
    category: "Power Integrity",
    tags: ["PI Simulation", "PDN Analysis", "Decap Optimization", "Impedance Profiling"]
  },
  {
    category: "Hardware Analysis",
    tags: ["Motherboard Design", "Signal Integrity", "DDR / HBM", "High-Performance Systems"]
  },
  {
    category: "Engineering Automation",
    tags: ["Python", "Bash", "Git", "FastAPI", "Workflow Tooling"]
  },
  {
    category: "Full-Stack Tools",
    tags: ["SvelteKit", "JavaScript / TypeScript", "C#", "REST APIs"]
  },
  {
    category: "VR Technology",
    tags: ["Unity", "Blender", "Full-Body Tracking", "Face Tracking", "Avatar Systems"]
  },
  {
    category: "Personal Builds",
    tags: ["Custom PCs", "Electronics Experiments", "Scripting", "Tinkering"]
  }
];
const voice = {
  heading: "Voice, Identity & Expression",
  body: "Voice became one of the places where engineering and identity unexpectedly met. It involves resonance, frequency, anatomy, imitation, expression, and hundreds of tiny adjustments — but it is also about learning what it feels like to hear yourself and finally recognize the girl speaking back.",
  descriptors: ["Feminine", "Mature", "Calm", "Sensual", "Melancholic", "Gothic", "Intimate", "Resonant"]
};
const vrcSection = {
  heading: "VRChat & Digital Presence",
  body: "VRChat is not merely a game. It is a social and creative space where voice, movement, avatars, technology, identity, and human connection all meet in ways the physical world rarely allows.",
  features: [
    { label: "AVATAR SYSTEMS", detail: "Custom avatars, expressions, dynamics" },
    { label: "FULL-BODY TRACKING", detail: "Legs, waist, elbows, knees" },
    { label: "FACE TRACKING", detail: "Eye, lip, brow expression capture" },
    { label: "VOICE", detail: "Real-time vocal identity and presence" },
    { label: "WORLDS", detail: "Gothic, cozy, atmospheric spaces" },
    { label: "CONNECTIONS", detail: "Meaningful late-night conversations" }
  ]
};
const music = {
  heading: "Music & Inner World",
  pullQuote: "girl in red raised me emotionally.",
  subtext: "I dissect lyrics and glances. I speak in subtext. If you notice, you notice.",
  artists: [
    "girl in red",
    "Sir Chloe",
    "Kikuo",
    "Clairo",
    "The Marías",
    "Bratty",
    "Cavetown",
    "Vocaloid"
  ],
  genres: ["Alternative", "Indie", "Melancholic", "Queer", "Emotionally Layered"]
};
const details = [
  { label: "LOCATION", value: "Mexico" },
  { label: "LANGUAGES", value: "Spanish & English" },
  { label: "DOMAIN", value: "Somewhere between hardware and software" },
  { label: "AESTHETIC", value: "Gothic avatars and black lipstick" },
  { label: "HOBBY", value: "Building and customizing computers" },
  { label: "SUPERPOWER", value: "Notices voices immediately" },
  { label: "WEAKNESS", value: "Emotionally complex stories" },
  { label: "HABIT", value: "Analyzing messages more than the sender intended" },
  { label: "PRONOUNS", value: "she/her (they/them also fine)" },
  { label: "ONLINE", value: "Usually in VRChat after midnight" }
];
const contact = {
  closing: "You can say hello. I'll probably notice more about the way you say it than you intended.",
  links: [
    { label: "GitHub", href: "https://github.com/", icon: "github" },
    { label: "Twitter / X", href: "https://twitter.com/", icon: "twitter" },
    { label: "VRChat", href: "https://vrchat.com/", icon: "vr" }
  ]
};
function Hero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section class="hero svelte-1q37ri0" id="hero"><div class="particles svelte-1q37ri0" aria-hidden="true"></div> <div class="bg-glow bg-glow--pink svelte-1q37ri0" aria-hidden="true"></div> <div class="bg-glow bg-glow--blue svelte-1q37ri0" aria-hidden="true"></div> <div${attr_class("hero-inner svelte-1q37ri0", void 0, { "visible": visible })}><div class="portrait-wrap svelte-1q37ri0" aria-hidden="true"><div class="portrait-ring svelte-1q37ri0"></div> <div class="portrait-placeholder svelte-1q37ri0"><svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svelte-1q37ri0"><ellipse cx="100" cy="90" rx="48" ry="52" fill="rgba(112,42,73,0.4)" stroke="rgba(245,169,184,0.3)" stroke-width="1" class="svelte-1q37ri0"></ellipse><path d="M 30 260 Q 50 160 100 155 Q 150 160 170 260" fill="rgba(33,23,36,0.7)" stroke="rgba(245,169,184,0.2)" stroke-width="1" class="svelte-1q37ri0"></path><rect x="68" y="82" width="24" height="12" rx="4" fill="none" stroke="rgba(245,169,184,0.5)" stroke-width="1.2" class="svelte-1q37ri0"></rect><rect x="108" y="82" width="24" height="12" rx="4" fill="none" stroke="rgba(245,169,184,0.5)" stroke-width="1.2" class="svelte-1q37ri0"></rect><line x1="92" y1="88" x2="108" y2="88" stroke="rgba(245,169,184,0.4)" stroke-width="1" class="svelte-1q37ri0"></line><path d="M 20 240 L 40 220 L 40 210 L 60 210 L 70 200" stroke="rgba(91,206,250,0.2)" stroke-width="0.8" fill="none" class="svelte-1q37ri0"></path><circle cx="70" cy="200" r="2" fill="rgba(91,206,250,0.4)" class="svelte-1q37ri0"></circle><path d="M 180 240 L 160 220 L 160 210 L 140 210 L 130 200" stroke="rgba(245,169,184,0.2)" stroke-width="0.8" fill="none" class="svelte-1q37ri0"></path><circle cx="130" cy="200" r="2" fill="rgba(245,169,184,0.4)" class="svelte-1q37ri0"></circle></svg></div></div> <div class="hero-text svelte-1q37ri0"><span class="section-label svelte-1q37ri0">she/her · Mexico · Power Integrity</span> <h1 class="svelte-1q37ri0">${escape_html(meta.tagline)}</h1> <p class="hero-description svelte-1q37ri0">${escape_html(meta.description)}</p> <div class="hero-tags svelte-1q37ri0" aria-label="Identity tags"><!--[-->`);
    const each_array = ensure_array_like(heroTags);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<span class="tag mono svelte-1q37ri0">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div> <a href="#about" class="hero-cta svelte-1q37ri0" aria-label="Scroll to About section"><span class="svelte-1q37ri0">Read on</span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" class="svelte-1q37ri0"><path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-1q37ri0"></path></svg></a></div></div> <div class="hero-wave svelte-1q37ri0" aria-hidden="true">`);
    Waveform($$renderer2, { height: 64 });
    $$renderer2.push(`<!----></div></section>`);
  });
}
function About($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="about" aria-labelledby="about-heading"${attr_class("svelte-7hpc9t", void 0, { "visible": visible })}><div class="container svelte-7hpc9t"><div class="about-grid svelte-7hpc9t"><div${attr_class("about-text fade-in svelte-7hpc9t", void 0, { "visible": visible })}><span class="section-label">// 001 · About</span> <h2 id="about-heading" class="svelte-7hpc9t">A girl who takes things apart<br/><em class="svelte-7hpc9t">to understand them</em></h2> <p class="svelte-7hpc9t">${escape_html(about.paragraph1)}</p> <p class="svelte-7hpc9t">${escape_html(about.paragraph2)}</p> <div class="dualities svelte-7hpc9t" aria-label="Core dualities"><div class="duality-pair svelte-7hpc9t"><span class="mono svelte-7hpc9t">Gothic elegance</span> <span class="divider svelte-7hpc9t" aria-hidden="true">⟷</span> <span class="mono svelte-7hpc9t">Soft femininity</span></div> <div class="duality-pair svelte-7hpc9t"><span class="mono svelte-7hpc9t">Hardware engineering</span> <span class="divider svelte-7hpc9t" aria-hidden="true">⟷</span> <span class="mono svelte-7hpc9t">Artistic expression</span></div> <div class="duality-pair svelte-7hpc9t"><span class="mono svelte-7hpc9t">Analytical mind</span> <span class="divider svelte-7hpc9t" aria-hidden="true">⟷</span> <span class="mono svelte-7hpc9t">Emotional sensitivity</span></div></div></div> <div${attr_class("circuit-aside fade-in svelte-7hpc9t", void 0, { "visible": visible })} style="transition-delay: 0.2s" aria-hidden="true"><svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-7hpc9t"><line x1="100" y1="20" x2="100" y2="380" stroke="rgba(112,42,73,0.4)" stroke-width="1"></line><path d="M 100 80 H 60 V 120 H 30" stroke="rgba(245,169,184,0.3)" stroke-width="0.8" fill="none"></path><circle cx="30" cy="120" r="3" fill="rgba(245,169,184,0.5)"></circle><path d="M 100 160 H 55 V 200" stroke="rgba(91,206,250,0.25)" stroke-width="0.8" fill="none"></path><rect x="48" y="193" width="14" height="14" fill="none" stroke="rgba(91,206,250,0.4)" stroke-width="0.8"></rect><path d="M 100 250 H 65 V 280 H 40" stroke="rgba(245,169,184,0.2)" stroke-width="0.8" fill="none"></path><circle cx="40" cy="280" r="2" fill="rgba(245,169,184,0.4)"></circle><path d="M 100 100 H 140 V 130 H 170" stroke="rgba(91,206,250,0.3)" stroke-width="0.8" fill="none"></path><circle cx="170" cy="130" r="3" fill="rgba(91,206,250,0.5)"></circle><path d="M 100 200 H 145 V 230" stroke="rgba(245,169,184,0.25)" stroke-width="0.8" fill="none"></path><rect x="138" y="223" width="14" height="14" fill="none" stroke="rgba(245,169,184,0.4)" stroke-width="0.8"></rect><path d="M 100 300 H 148 V 320 H 170" stroke="rgba(91,206,250,0.2)" stroke-width="0.8" fill="none"></path><circle cx="170" cy="320" r="2" fill="rgba(91,206,250,0.4)"></circle><circle cx="100" cy="80" r="4" fill="none" stroke="rgba(245,169,184,0.5)" stroke-width="1"></circle><circle cx="100" cy="160" r="4" fill="none" stroke="rgba(91,206,250,0.5)" stroke-width="1"></circle><circle cx="100" cy="250" r="4" fill="none" stroke="rgba(245,169,184,0.4)" stroke-width="1"></circle><circle cx="100" cy="330" r="4" fill="none" stroke="rgba(201,184,216,0.4)" stroke-width="1"></circle><path d="M 97 338 C 97 336 100 334 100 336 C 100 334 103 336 103 338 C 103 340 100 343 100 343 C 100 343 97 340 97 338Z" fill="rgba(245,169,184,0.3)"></path></svg></div></div></div></section>`);
  });
}
function TwoSides($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    let hovered = null;
    $$renderer2.push(`<section id="two-sides" aria-labelledby="two-sides-heading" class="svelte-1oq8rny"><div class="container svelte-1oq8rny"><div${attr_class("header fade-in svelte-1oq8rny", void 0, { "visible": visible })}><span class="section-label svelte-1oq8rny">// 002 · Two Sides</span> <h2 id="two-sides-heading" class="svelte-1oq8rny">Two sides of<br class="svelte-1oq8rny"/><em class="svelte-1oq8rny">the same girl</em></h2> <p class="subtitle svelte-1oq8rny">They are not separate identities. They are the same signal, expressed differently.</p></div> <div${attr_class("split svelte-1oq8rny", void 0, { "visible": visible })}><div${attr_class("side side--engineer svelte-1oq8rny", void 0, { "dim": hovered === "girl" })} role="region" aria-label="The Engineer"><span class="side-label mono svelte-1oq8rny">${escape_html(engineerSide.title)}</span> <ul aria-label="Engineer traits" class="svelte-1oq8rny"><!--[-->`);
    const each_array = ensure_array_like(engineerSide.items);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<li class="trait svelte-1oq8rny">${escape_html(item)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="side-glow engineer-glow svelte-1oq8rny" aria-hidden="true"></div></div> <div class="divider svelte-1oq8rny" aria-hidden="true"><div class="divider-line svelte-1oq8rny"></div> <div class="divider-node svelte-1oq8rny"><div class="node-inner svelte-1oq8rny"></div></div> <div class="divider-line svelte-1oq8rny"></div></div> <div${attr_class("side side--girl svelte-1oq8rny", void 0, { "dim": hovered === "engineer" })} role="region" aria-label="The Girl Behind the Signal"><span class="side-label mono svelte-1oq8rny">${escape_html(girlSide.title)}</span> <ul aria-label="Personal traits" class="svelte-1oq8rny"><!--[-->`);
    const each_array_1 = ensure_array_like(girlSide.items);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$renderer2.push(`<li class="trait svelte-1oq8rny">${escape_html(item)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="side-glow girl-glow svelte-1oq8rny" aria-hidden="true"></div></div></div></div></section>`);
  });
}
function Engineering($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="engineering" aria-labelledby="engineering-heading" class="svelte-o1b2sn"><div class="container svelte-o1b2sn"><div${attr_class("header fade-in svelte-o1b2sn", void 0, { "visible": visible })}><span class="section-label">// 003 · Engineering</span> <h2 id="engineering-heading" class="svelte-o1b2sn">Built at the intersection<br/>of <em class="svelte-o1b2sn">hardware and software</em></h2> <p class="subtitle svelte-o1b2sn">Power integrity engineer and software-tool builder. The curiosity that drives both is the same.</p></div> <div class="skill-grid svelte-o1b2sn"><!--[-->`);
    const each_array = ensure_array_like(skills);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let skill = each_array[i];
      $$renderer2.push(`<div${attr_class("skill-card fade-in svelte-o1b2sn", void 0, { "visible": visible })}${attr_style(`transition-delay: ${stringify(i * 0.08)}s`)} role="article"${attr("aria-label", skill.category)}><div class="card-header svelte-o1b2sn"><div class="signal-dot svelte-o1b2sn" aria-hidden="true"></div> <span class="card-title mono svelte-o1b2sn">${escape_html(skill.category)}</span></div> <div class="card-path svelte-o1b2sn" aria-hidden="true"></div> <ul class="tag-list svelte-o1b2sn"${attr("aria-label", `${stringify(skill.category)} skills`)}><!--[-->`);
      const each_array_1 = ensure_array_like(skill.tags);
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tag = each_array_1[$$index];
        $$renderer2.push(`<li class="skill-tag svelte-o1b2sn">${escape_html(tag)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
    $$renderer2.push(`<!--]--></div> <p class="footer-note mono svelte-o1b2sn" aria-label="Technology stack">Python · JavaScript · TypeScript · SvelteKit · FastAPI · Bash · Git · C# · Unity · Blender</p></div></section>`);
  });
}
function Voice($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="voice" aria-labelledby="voice-heading" class="svelte-aubvvq"><div class="waveform-bg svelte-aubvvq" aria-hidden="true">`);
    Waveform($$renderer2, {
      height: 120,
      color: "var(--color-pink)",
      secondary: "var(--color-blue)"
    });
    $$renderer2.push(`<!----></div> <div class="container svelte-aubvvq"><div${attr_class("voice-inner fade-in svelte-aubvvq", void 0, { "visible": visible })}><span class="section-label">// 004 · Voice &amp; Identity</span> <h2 id="voice-heading" class="svelte-aubvvq">${escape_html(voice.heading)}</h2> <blockquote class="svelte-aubvvq"><p class="svelte-aubvvq">${escape_html(voice.body)}</p></blockquote> <div class="descriptor-ring svelte-aubvvq" aria-label="Voice descriptors"><!--[-->`);
    const each_array = ensure_array_like(voice.descriptors);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let descriptor = each_array[i];
      $$renderer2.push(`<span class="descriptor mono svelte-aubvvq"${attr_style(`animation-delay: ${stringify(i * 0.12)}s`)}>${escape_html(descriptor)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></section>`);
  });
}
function VRChat($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="vr" aria-labelledby="vr-heading" class="svelte-1s4z4u6"><div class="hud-bg svelte-1s4z4u6" aria-hidden="true"><div class="hud-line hud-line--h svelte-1s4z4u6"></div> <div class="hud-line hud-line--v svelte-1s4z4u6"></div> <div class="hud-corner hud-corner--tl svelte-1s4z4u6"></div> <div class="hud-corner hud-corner--tr svelte-1s4z4u6"></div> <div class="hud-corner hud-corner--bl svelte-1s4z4u6"></div> <div class="hud-corner hud-corner--br svelte-1s4z4u6"></div></div> <div class="container svelte-1s4z4u6"><div${attr_class("header fade-in svelte-1s4z4u6", void 0, { "visible": visible })}><span class="section-label">// 005 · VRChat &amp; Digital Presence</span> <h2 id="vr-heading" class="svelte-1s4z4u6">${escape_html(vrcSection.heading)}</h2> <p class="body-text svelte-1s4z4u6">${escape_html(vrcSection.body)}</p></div> <div${attr_class("feature-grid svelte-1s4z4u6", void 0, { "visible": visible })}><!--[-->`);
    const each_array = ensure_array_like(vrcSection.features);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let feature = each_array[i];
      $$renderer2.push(`<div${attr_class("feature-card fade-in svelte-1s4z4u6", void 0, { "visible": visible })}${attr_style(`transition-delay: ${stringify(0.1 + i * 0.07)}s`)} role="article"><div class="feature-scan svelte-1s4z4u6" aria-hidden="true"></div> <span class="feature-label mono svelte-1s4z4u6">${escape_html(feature.label)}</span> <span class="feature-detail svelte-1s4z4u6">${escape_html(feature.detail)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div> <p${attr_class("vr-tagline fade-in svelte-1s4z4u6", void 0, { "visible": visible })} style="transition-delay: 0.5s"><em class="svelte-1s4z4u6">Voice. Movement. Identity. Connection.</em></p></div></section>`);
  });
}
function Music($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="music" aria-labelledby="music-heading" class="svelte-1veghs3"><div class="container svelte-1veghs3"><div class="music-layout svelte-1veghs3"><div${attr_class("editorial fade-in svelte-1veghs3", void 0, { "visible": visible })}><span class="section-label">// 006 · Music &amp; Inner World</span> <h2 id="music-heading" class="svelte-1veghs3">${escape_html(music.heading)}</h2> <blockquote class="pull-quote svelte-1veghs3"><span aria-label="Pull quote" class="svelte-1veghs3">${escape_html(music.pullQuote)}</span></blockquote> <p class="subtext svelte-1veghs3">${escape_html(music.subtext)}</p> <div class="genre-tags svelte-1veghs3" aria-label="Music genres"><!--[-->`);
    const each_array = ensure_array_like(music.genres);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let genre = each_array[$$index];
      $$renderer2.push(`<span class="genre-tag svelte-1veghs3">${escape_html(genre)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div${attr_class("artist-column fade-in svelte-1veghs3", void 0, { "visible": visible })} style="transition-delay: 0.2s"><span class="column-label mono svelte-1veghs3">Artists</span> <ul class="artist-list svelte-1veghs3" aria-label="Favourite artists"><!--[-->`);
    const each_array_1 = ensure_array_like(music.artists);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let artist = each_array_1[i];
      $$renderer2.push(`<li${attr_class("artist-item svelte-1veghs3", void 0, { "anim": visible })}${attr_style(`animation-delay: ${stringify(0)}s`)}><span class="artist-dot svelte-1veghs3" aria-hidden="true"></span> <span>${escape_html(artist)}</span></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></div></div></section>`);
  });
}
function Details($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    const positions = details.map((_, i) => ({
      x: 8 + i * 137.508 % 84,
      // golden angle spread
      y: 10 + i * 97.3 % 80
    }));
    let hoveredIndex = null;
    $$renderer2.push(`<section id="details" aria-labelledby="details-heading" class="svelte-7cymyq"><div class="container svelte-7cymyq"><div${attr_class("header fade-in svelte-7cymyq", void 0, { "visible": visible })}><span class="section-label">// 007 · Small Details</span> <h2 id="details-heading" class="svelte-7cymyq">The constellation<br/>of <em class="svelte-7cymyq">smaller truths</em></h2> <p class="subtitle svelte-7cymyq">Hover the stars.</p></div> <div${attr_class("constellation-wrap fade-in svelte-7cymyq", void 0, { "visible": visible })} style="transition-delay: 0.2s"><svg class="connector-lines svelte-7cymyq" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><!--[-->`);
    const each_array = ensure_array_like(positions);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let pos = each_array[i];
      if (i < positions.length - 1) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<line${attr("x1", `${stringify(pos.x)}%`)}${attr("y1", `${stringify(pos.y)}%`)}${attr("x2", `${stringify(positions[i + 1].x)}%`)}${attr("y2", `${stringify(positions[i + 1].y)}%`)} stroke="rgba(245,169,184,0.08)" stroke-width="0.3"></line>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></svg> <!--[-->`);
    const each_array_1 = ensure_array_like(details);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let detail = each_array_1[i];
      $$renderer2.push(`<button${attr_class("detail-node svelte-7cymyq", void 0, { "active": hoveredIndex === i })}${attr_style(`left: ${stringify(positions[i].x)}%; top: ${stringify(positions[i].y)}%;`)}${attr("aria-label", `${stringify(detail.label)}: ${stringify(detail.value)}`)}><span class="node-dot svelte-7cymyq" aria-hidden="true"></span> `);
      if (hoveredIndex === i) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="node-tooltip svelte-7cymyq" role="tooltip"><span class="mono tooltip-label svelte-7cymyq">${escape_html(detail.label)}</span> <span class="tooltip-value svelte-7cymyq">${escape_html(detail.value)}</span></div>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]--></div> <details class="detail-list-fallback svelte-7cymyq"><summary class="mono svelte-7cymyq">View all details</summary> <ul class="svelte-7cymyq"><!--[-->`);
    const each_array_2 = ensure_array_like(details);
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let detail = each_array_2[$$index_2];
      $$renderer2.push(`<li class="svelte-7cymyq"><span class="mono detail-label svelte-7cymyq">${escape_html(detail.label)}</span> <span class="detail-value svelte-7cymyq">${escape_html(detail.value)}</span></li>`);
    }
    $$renderer2.push(`<!--]--></ul></details></div></section>`);
  });
}
function Contact($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let visible = false;
    $$renderer2.push(`<section id="contact" aria-labelledby="contact-heading" class="svelte-wt4tt0"><div class="glow-layer svelte-wt4tt0" aria-hidden="true"></div> <div class="container svelte-wt4tt0"><div${attr_class("contact-inner fade-in svelte-wt4tt0", void 0, { "visible": visible })}><span class="section-label">// 008 · Say Hello</span> <h2 id="contact-heading"><span class="name-accent svelte-wt4tt0">${escape_html(meta.name)}</span></h2> <p class="closing svelte-wt4tt0">${escape_html(contact.closing)}</p> <nav class="social-links svelte-wt4tt0" aria-label="Social and contact links"><!--[-->`);
    const each_array = ensure_array_like(contact.links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)} class="social-link svelte-wt4tt0" target="_blank" rel="noopener noreferrer"${attr("aria-label", `${stringify(link.label)} (opens in new tab)`)}>`);
      if (link.icon === "github") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path></svg>`);
      } else if (link.icon === "twitter") {
        $$renderer2.push("<!--[1-->");
        $$renderer2.push(`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`);
      } else if (link.icon === "vr") {
        $$renderer2.push("<!--[2-->");
        $$renderer2.push(`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z"></path><circle cx="9" cy="12" r="2"></circle><circle cx="15" cy="12" r="2"></circle></svg>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> <span>${escape_html(link.label)}</span></a>`);
    }
    $$renderer2.push(`<!--]--></nav> <p class="coordinates mono svelte-wt4tt0">${escape_html(meta.location)} · ${escape_html(meta.pronouns)} · ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}</p></div></div> <footer class="site-footer svelte-wt4tt0"><p class="mono svelte-wt4tt0">Built with SvelteKit · Hosted on GitHub Pages</p></footer></section>`);
  });
}
function _page($$renderer) {
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Chloe — Engineer. Voice. Gothic Softness.</title>`);
    });
  });
  CustomCursor($$renderer);
  $$renderer.push(`<!----> `);
  Navigation($$renderer);
  $$renderer.push(`<!----> <main id="main-content" class="svelte-1uha8ag">`);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  About($$renderer);
  $$renderer.push(`<!----> `);
  TwoSides($$renderer);
  $$renderer.push(`<!----> `);
  Engineering($$renderer);
  $$renderer.push(`<!----> `);
  Voice($$renderer);
  $$renderer.push(`<!----> `);
  VRChat($$renderer);
  $$renderer.push(`<!----> `);
  Music($$renderer);
  $$renderer.push(`<!----> `);
  Details($$renderer);
  $$renderer.push(`<!----> `);
  Contact($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
