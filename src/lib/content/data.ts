// ─────────────────────────────────────────────
// All user-facing content lives here.
// Edit this file to update copy, skills, and links
// without touching presentation components.
// ─────────────────────────────────────────────

export const meta = {
	name: 'Chloe',
	tagline: 'Soft voice. Sharp mind. A little difficult to read.',
	description:
		"I'm Chloe — a power integrity engineer, software builder, VR enthusiast, and gothic girl who spends far too much time analyzing technology, voices, lyrics, and the things people leave unsaid.",
	pronouns: 'she/her',
	location: 'Mexico',
	languages: ['Spanish', 'English']
};

export const heroTags = [
	'ENGINEER',
	'VR GIRL',
	'VOICE & IDENTITY',
	'GOTHIC SOFTNESS',
	'EMOTIONALLY LITERATE'
];

export const about = {
	paragraph1:
		'I tend to understand the world by taking it apart — sometimes that means analyzing a motherboard, sometimes a voice, and sometimes a sentence someone said with just a little too much hesitation.',
	paragraph2:
		"I'm technical, introspective, queer, and quietly playful. I love dark aesthetics, soft femininity, virtual spaces, meaningful conversations, and anything that lets identity become something creative rather than fixed."
};

export const engineerSide = {
	title: 'The Engineer',
	items: ['Systems', 'Power', 'Simulation', 'Automation', 'Hardware', 'Code', 'Precision']
};

export const girlSide = {
	title: 'The Girl Behind the Signal',
	items: ['Voice', 'Femininity', 'VR', 'Music', 'Subtext', 'Connection', 'Self-expression']
};

export const skills: { category: string; tags: string[] }[] = [
	{
		category: 'Power Integrity',
		tags: ['PI Simulation', 'PDN Analysis', 'Decap Optimization', 'Impedance Profiling']
	},
	{
		category: 'Hardware Analysis',
		tags: ['Motherboard Design', 'Signal Integrity', 'DDR / HBM', 'High-Performance Systems']
	},
	{
		category: 'Engineering Automation',
		tags: ['Python', 'Bash', 'Git', 'FastAPI', 'Workflow Tooling']
	},
	{
		category: 'Full-Stack Tools',
		tags: ['SvelteKit', 'JavaScript / TypeScript', 'C#', 'REST APIs']
	},
	{
		category: 'VR Technology',
		tags: ['Unity', 'Blender', 'Full-Body Tracking', 'Face Tracking', 'Avatar Systems']
	},
	{
		category: 'Personal Builds',
		tags: ['Custom PCs', 'Electronics Experiments', 'Scripting', 'Tinkering']
	}
];

export const voice = {
	heading: 'Voice, Identity & Expression',
	body: 'Voice became one of the places where engineering and identity unexpectedly met. It involves resonance, frequency, anatomy, imitation, expression, and hundreds of tiny adjustments — but it is also about learning what it feels like to hear yourself and finally recognize the girl speaking back.',
	descriptors: ['Feminine', 'Mature', 'Calm', 'Sensual', 'Melancholic', 'Gothic', 'Intimate', 'Resonant']
};

export const vrcSection = {
	heading: 'VRChat & Digital Presence',
	body: 'VRChat is not merely a game. It is a social and creative space where voice, movement, avatars, technology, identity, and human connection all meet in ways the physical world rarely allows.',
	features: [
		{ label: 'AVATAR SYSTEMS', detail: 'Custom avatars, expressions, dynamics' },
		{ label: 'FULL-BODY TRACKING', detail: 'Legs, waist, elbows, knees' },
		{ label: 'FACE TRACKING', detail: 'Eye, lip, brow expression capture' },
		{ label: 'VOICE', detail: 'Real-time vocal identity and presence' },
		{ label: 'WORLDS', detail: 'Gothic, cozy, atmospheric spaces' },
		{ label: 'CONNECTIONS', detail: 'Meaningful late-night conversations' }
	]
};

export const music = {
	heading: 'Music & Inner World',
	pullQuote: 'girl in red raised me emotionally.',
	subtext: 'I dissect lyrics and glances. I speak in subtext. If you notice, you notice.',
	artists: [
		'girl in red',
		'Sir Chloe',
		'Kikuo',
		'Clairo',
		'The Marías',
		'Bratty',
		'Cavetown',
		'Vocaloid'
	],
	genres: ['Alternative', 'Indie', 'Melancholic', 'Queer', 'Emotionally Layered']
};

export const details: { label: string; value: string }[] = [
	{ label: 'LOCATION', value: 'Mexico' },
	{ label: 'LANGUAGES', value: 'Spanish & English' },
	{ label: 'DOMAIN', value: 'Somewhere between hardware and software' },
	{ label: 'AESTHETIC', value: 'Gothic avatars and black lipstick' },
	{ label: 'HOBBY', value: 'Building and customizing computers' },
	{ label: 'SUPERPOWER', value: 'Notices voices immediately' },
	{ label: 'WEAKNESS', value: 'Emotionally complex stories' },
	{ label: 'HABIT', value: 'Analyzing messages more than the sender intended' },
	{ label: 'PRONOUNS', value: 'she/her (they/them also fine)' },
	{ label: 'ONLINE', value: 'Usually in VRChat after midnight' }
];

export const contact = {
	closing: "You can say hello. I'll probably notice more about the way you say it than you intended.",
	links: [
		{ label: 'GitHub', href: 'https://github.com/', icon: 'github' },
		{ label: 'Twitter / X', href: 'https://twitter.com/', icon: 'twitter' },
		{ label: 'VRChat', href: 'https://vrchat.com/', icon: 'vr' }
	]
};
