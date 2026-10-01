/**
 * "Best AI video generator apps for iPhone (2026)" — English-only comparison
 * page. Every third-party fact (name, developer, rating + count, download
 * price, minimum iOS) comes from Apple's public iTunes lookup API, US
 * storefront, fetched on APPSTORE_DATA_DATE — snapshot kept in
 * seo/data/appstore-2026-10-01.json. Descriptions paraphrase each app's own
 * App Store listing. No test results, scores or prices are claimed.
 * Refresh the numbers (and the date) before editing this page again.
 */
export const RANKING_PATH = '/best-ai-video-generator-apps-iphone';
export const RANKING_LINK_LABEL = 'Best AI video generator apps for iPhone (2026)';
export const APPSTORE_DATA_DATE = '1 October 2026';

export interface RankedApp {
  id: string;
  name: string;
  developer: string;
  ours?: boolean;
  /** App Store average rating, rounded to one decimal; null = no rating yet. */
  rating: number | null;
  ratingCount: number | null;
  /** Download price from the App Store listing. */
  price: string;
  /** Minimum iOS version from the App Store listing; null = no listing. */
  minIos: string | null;
  /** App Store URL (third-party apps). Our own app links internally instead. */
  url: string;
  bestFor: string;
  what: string;
}

export const rankedApps: RankedApp[] = [
  {
    id: 'viral-factory',
    name: 'Viral Factory',
    developer: 'Rıdvan Uyan (that’s us)',
    ours: true,
    rating: null,
    ratingCount: null,
    price: 'Free',
    minIos: null,
    url: 'https://apps.apple.com/app/id6790560948',
    bestFor: 'Posting short-form every day without filming — faceless reels, UGC-style ads and carousels from one idea',
    what: 'Turns a prompt, a photo or a reel you liked into ready-to-post faceless reels, UGC-style ads, swipe carousels and cinematic shorts. Remake a hit rebuilds a reel’s structure around your product, an AI character keeps one face and voice across videos, Cameo puts your own photo into a scene, and ten fresh hooks arrive every morning. You approve a storyboard before anything renders, then schedule straight to TikTok, Instagram or YouTube.',
  },
  {
    id: 'invideo',
    name: 'invideo AI',
    developer: 'Invideo Inc',
    rating: 4.5,
    ratingCount: 27768,
    price: 'Free',
    minIos: '16.0',
    url: 'https://apps.apple.com/us/app/invideo-ai-ai-video-generator/id6471394316',
    bestFor: 'Multi-shot ad and video projects you direct in plain language',
    what: 'Built around “Agent Two”, an AI video agent: you describe the video, it picks the model for each shot (the listing names Veo, Sora, Kling and Seedance) and writes the prompts. It remembers characters, locations and style across a project, edits every shot at once from one instruction, and supports real-time collaboration. Aimed at filmmakers, marketers and ad teams.',
  },
  {
    id: 'captions',
    name: 'Captions',
    developer: 'Captions, LLC',
    rating: 4.7,
    ratingCount: 38190,
    price: 'Free',
    minIos: '16.0',
    url: 'https://apps.apple.com/us/app/captions-ai-edits-your-video/id1541407007',
    bestFor: 'AI-edited talking videos and AI-actor ads',
    what: 'An AI video generator and editor: one-tap AI edits that cut scenes and add B-roll and sound, a chat-based editor, text to video, AI actors and an “AI Twin” made from a single selfie. It also generates subtitles (91+ languages per the listing) and dubs into 29 languages.',
  },
  {
    id: 'heygen',
    name: 'HeyGen (AI Avatar Generator)',
    developer: 'HeyGen Technology Inc.',
    rating: 4.8,
    ratingCount: 25933,
    price: 'Free',
    minIos: '17.5',
    url: 'https://apps.apple.com/us/app/ai-avatar-generator-heygen/id6711356409',
    bestFor: 'Talking-avatar videos of yourself without filming each one',
    what: 'Builds an avatar of you — face and voice — from one short recorded clip or a few photos; you type a script and the avatar delivers it on camera. It can also turn one face photo into a talking video, offers stock avatars, and has a Video Agent that turns a prompt and an image into a finished video.',
  },
  {
    id: 'kling',
    name: 'Kling AI',
    developer: 'KLING AI PTE. LTD.',
    rating: 4.7,
    ratingCount: 31457,
    price: 'Free',
    minIos: '14.0',
    url: 'https://apps.apple.com/us/app/kling-ai-ai-image-video-maker/id6738049229',
    bestFor: 'High-resolution clips from a prompt or a photo',
    what: 'Generates video from text or images — up to 15 seconds in native 1080p or 4K, extendable to 3 minutes with Video Extension — and creates 4K images. A community feed lets you “Clone & Try” another creator’s idea with your own input.',
  },
  {
    id: 'runway',
    name: 'Runway',
    developer: 'Runway AI, Inc.',
    rating: 4.5,
    ratingCount: 16185,
    price: 'Free',
    minIos: '16.4',
    url: 'https://apps.apple.com/us/app/runway-ai-image-video/id1665024375',
    bestFor: 'Trying several AI video models in one app',
    what: 'Puts several video and image models in one app (the listing names Seedance 2.5, Kling 3 Pro, Gen-4.5 and Nano Banana Pro): text to video, photo to motion, video to video, consistent characters across shots, and Runway Agent, which builds an end-to-end video from a conversation.',
  },
  {
    id: 'firefly',
    name: 'Adobe Firefly',
    developer: 'Adobe Inc.',
    rating: 4.7,
    ratingCount: 10367,
    price: 'Free',
    minIos: '18.0',
    url: 'https://apps.apple.com/us/app/adobe-firefly-ai-video-photo/id6742595426',
    bestFor: 'Creators who already finish their work in Adobe apps',
    what: 'Adobe’s AI image, video and sound app: text to video, animating your own still images, video extension, Generative Fill and background removal, using Adobe’s models plus partner models (the listing names Google, OpenAI, Luma and Runway). Work syncs so you can finish in Photoshop, Premiere or Express.',
  },
  {
    id: 'capcut',
    name: 'CapCut',
    developer: 'BYTEDANCE PTE. LTD.',
    rating: 4.6,
    ratingCount: 1122523,
    price: 'Free',
    minIos: '15.0',
    url: 'https://apps.apple.com/us/app/capcut-photo-video-editor/id1500855883',
    bestFor: 'Editing footage you already shot, with AI helpers',
    what: 'A full video editor with AI helpers: auto captions, text-to-speech, background removal, keyframe animation, chroma key, motion tracking, a multi-track timeline and 4K 60fps export, plus trending filters (updated weekly), effects and a music library.',
  },
];

/** "Pick by job" — which apps on this list say (in their listing) they do this job. */
export const pickByJob: { job: string; apps: string }[] = [
  { job: 'Faceless reels, UGC-style ads and carousels from one idea', apps: 'Viral Factory (ours)' },
  { job: 'A finished video from a written description', apps: 'Viral Factory, invideo AI, Runway (Runway Agent), HeyGen (Video Agent), Captions, Kling AI, Adobe Firefly' },
  { job: 'A talking presenter or UGC-style ad', apps: 'HeyGen (your own avatar), Captions (AI actors, AI Twin), Viral Factory (Creator testimonial)' },
  { job: 'Animate a photo', apps: 'Kling AI, Runway, Adobe Firefly, HeyGen (photo to talking video), Viral Factory (Cameo)' },
  { job: 'Edit footage you already shot', apps: 'CapCut, Captions' },
  { job: 'Subtitles and dubbing', apps: 'Captions (subtitles + dubbing), CapCut (auto captions)' },
];

export const rankingFaqs: { q: string; a: string }[] = [
  {
    q: 'What is the best AI video generator app for iPhone in 2026?',
    a: 'It depends on the job. For faceless reels, UGC-style ads and carousels from one idea, Viral Factory (our app). For talking-avatar videos of yourself, HeyGen. For high-resolution clips from a prompt or a photo, Kling AI. For trying several models in one app, Runway. For editing footage you already shot, CapCut.',
  },
  {
    q: 'Are these AI video apps free?',
    a: `All eight are free to download from the App Store (checked ${APPSTORE_DATA_DATE}). Paid features and their prices are listed in each app’s In-App Purchases section on the App Store and change often, so we don’t quote them here. In Viral Factory, generating content uses credits from a subscription or a credit pack.`,
  },
  {
    q: 'Which AI video app works on an older iPhone?',
    a: 'Check the minimum iOS version in the table. On the listings we checked, Kling AI needs iOS 14.0, CapCut iOS 15.0, invideo AI and Captions iOS 16.0, Runway iOS 16.4, HeyGen iOS 17.5 and Adobe Firefly iOS 18.0.',
  },
  {
    q: 'Can I make faceless videos on my iPhone?',
    a: 'Yes. Viral Factory is built for faceless reels and ads, and invideo AI, Runway and Kling AI generate video from a written description, so nobody has to appear on camera.',
  },
  {
    q: 'Can I make UGC-style ads on my iPhone without hiring a creator?',
    a: 'Yes. Viral Factory’s Creator testimonial studio writes and generates a talking-head, UGC-style ad; Captions offers AI actors; HeyGen turns your own recorded clip into a reusable avatar of you.',
  },
  {
    q: 'How did you choose and order these apps?',
    a: `We listed iPhone apps that appear in the 2026 roundups ranking on Google for these searches and in App Store search, then took every rating, developer name, price and iOS requirement from Apple’s public App Store data on ${APPSTORE_DATA_DATE}. The order follows the job each app does best, not a score — we did not run benchmark tests. Viral Factory is our own app and is listed first; it had no App Store rating yet.`,
  },
];
