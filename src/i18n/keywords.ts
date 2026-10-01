/**
 * Programmatic SEO keyword landing pages — one per high-intent search topic,
 * localized into the 5 languages with the highest expected search volume
 * (see KEYWORD_LOCALES in src/config/site.ts). English lives at the bare
 * path; the other 4 locales are prefixed (/de/..., /fr/..., ...). Slugs are
 * localized per language, not just the English slug reused everywhere.
 */
import { lp, type Locale } from './index';

export type KeywordTopicId =
  | 'faceless-video'
  | 'faceless-reels'
  | 'ugc-ads'
  | 'small-biz-ads'
  | 'photo-to-video'
  | 'ai-carousel'
  | 'tiktok-hooks'
  | 'ai-character-video';

export const KEYWORD_TOPICS: KeywordTopicId[] = [
  'faceless-video',
  'faceless-reels',
  'ugc-ads',
  'small-biz-ads',
  'photo-to-video',
  'ai-carousel',
  'tiktok-hooks',
  'ai-character-video',
];

export interface KeywordSection {
  h: string;
  p: string;
}
export interface KeywordPage {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: KeywordSection[];
  bulletsHeading: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
  cta: string;
}

export type KeywordLocale = 'en' | 'de' | 'fr' | 'es' | 'it';

export const keywordPages: Record<KeywordLocale, Record<KeywordTopicId, KeywordPage>> = {
  en: {
    'faceless-video': {
      slug: 'faceless-video-generator',
      h1: 'Faceless video generator for TikTok and Instagram',
      metaTitle: 'Faceless Video Generator — Viral Factory',
      metaDescription: 'Make faceless short-form videos from a text prompt — no camera, no face, no crew. Try the faceless video generator in Viral Factory for iOS.',
      intro: 'A faceless video generator turns a script or an idea into a finished short-form video without ever putting a person on camera. Faceless content has become one of the most reliable formats on TikTok and Instagram Reels: no actor to book, no face to show, and a format that scales because the same voice, style and pacing can be reused indefinitely.',
      sections: [
        { h: 'Why faceless video works', p: "Faceless videos rely on strong visuals, on-screen text, voiceover and pacing instead of a presenter's face. They're faster to produce, easier to localize into other languages, and let a single creator or a small brand publish daily without ever appearing on camera. Many accounts that post several times a day — cinematic B-roll, product demos, listicle explainers — never show a face at all." },
        { h: 'How Viral Factory generates it', p: "Two studios are built for this: Short video ad turns a product or offer into a scripted, ready-to-post vertical video with a hook, body and call to action; Cinematic short builds a narrator-free, scene-based video from a single description. Both generate script, shots and final render from one prompt, with a storyboard review step before anything becomes video, so you can edit or regenerate a scene before it's final." },
      ],
      bulletsHeading: 'Faceless video is a good fit if you:',
      bullets: [
        'want to post every day without booking a presenter or setting up a camera',
        'run a brand account where the product, not a person, should be the star',
        'need the same content idea adapted quickly for a new angle',
        'are testing a lot of hooks before investing in a produced shoot',
      ],
      faqs: [
        { q: 'Do I need any filming experience?', a: 'No — you only need a written idea or a product description. Viral Factory writes the script and generates every shot.' },
        { q: 'Can I add my own product footage instead of fully generated video?', a: 'Yes — pair a faceless generated video with your own screen recording or footage using the Swap into your video feature.' },
      ],
      cta: 'Try faceless video generation',
    },
    'faceless-reels': {
      slug: 'faceless-reels-maker',
      h1: 'Faceless Reels maker for a daily posting habit',
      metaTitle: 'Faceless Reels Maker — Viral Factory',
      metaDescription: 'Generate faceless Instagram Reels and TikToks daily, with ten fresh hook ideas every morning. No camera, no editing software.',
      intro: "A faceless Reels maker generates the whole clip — script, shots, pacing — for Instagram Reels and TikTok without you or anyone else appearing on camera. The hard part of faceless Reels usually isn't the format, it's showing up every day with a new angle; Viral Factory pairs the generator with a daily supply of hooks so the blank-page problem disappears.",
      sections: [
        { h: 'What makes a Reel work without a face', p: 'A strong Reel opens with a hook in the first second, holds pacing with cuts and on-screen text, and pays off the promise it opened with. None of that requires a presenter — a cinematic scenario, a product in motion, or a well-paced listicle carries a Reel on its own, and it travels better across languages since there is no face or voice tied to one market.' },
        { h: 'From a daily hook to a finished Reel', p: "Every morning the app surfaces ten fresh hooks and ten formats; tapping one prefills a Cinematic short or Short video ad project that's already half-written, so you go from idea to a reviewable storyboard in a couple of taps instead of staring at a blank prompt box." },
      ],
      bulletsHeading: 'Built for creators and brands who:',
      bullets: [
        'want to post a Reel every day without running out of ideas',
        "don't want their face — or anyone's — tied to the account",
        'manage more than one account and need a repeatable process',
        'want to review a storyboard before committing to a full render',
      ],
      faqs: [
        { q: 'How many Reels can I make in a day?', a: "There's no fixed cap in the app itself — it's governed by your credit balance, which refreshes with a subscription or tops up with credit packs." },
        { q: 'Do I need to write my own script?', a: "No — describe the idea or tap a daily hook, and the app writes the script as part of the storyboard you review before it renders." },
      ],
      cta: 'Start a faceless Reel',
    },
    'ugc-ads': {
      slug: 'ugc-ad-maker',
      h1: 'AI UGC ad maker — creator-style ads without a creator',
      metaTitle: 'AI UGC Ad Maker — Viral Factory',
      metaDescription: 'Generate creator-style, talking-head UGC ads for your product — no creator to book, no camera, no filming.',
      intro: "UGC-style ads — a real-looking person talking to the camera about a product — consistently outperform polished ad creative because they read as organic content instead of an advertisement. Booking real creators for every angle you want to test is slow and expensive; an AI UGC ad maker gives you that same format on demand.",
      sections: [
        { h: 'Why UGC-style ads convert', p: 'Viewers scroll past anything that looks like a traditional ad, but a handheld, talking-head clip earns a second of attention before the brain classifies it as marketing. That extra second is often the difference between a skip and a watch, which is why performance marketers lean so heavily on the format for paid social.' },
        { h: 'How the Creator testimonial studio works', p: 'Give it your product and the angle you want the testimonial to land on; it writes a natural, creator-voiced script and generates a talking-head video performing it. Pair it with the AI character studio to lock in one consistent presenter across every ad you test, instead of a different face each time.' },
      ],
      bulletsHeading: 'Use it when you need to:',
      bullets: [
        'test several ad angles before booking a real creator',
        'fill a testimonial gap before real customer UGC exists',
        'produce paid social creative that reads as organic content',
        'keep one consistent presenter across a run of ad variants',
      ],
      faqs: [
        { q: 'Does this replace real customer testimonials?', a: 'It fills the gap before you have them and lets you test scripts fast — nothing replaces a real customer, and swapping in genuine testimonials as they arrive is still worth doing.' },
        { q: 'Can I choose the presenter?', a: 'Yes — pick a presenter style for a one-off ad, or design a persona once with the AI character studio and reuse the same face and voice every time.' },
      ],
      cta: 'Generate a UGC-style ad',
    },
    'small-biz-ads': {
      slug: 'ai-video-ad-generator-for-small-business',
      h1: 'AI video ad generator for small businesses',
      metaTitle: 'AI Video Ad Generator for Small Business — Viral Factory',
      metaDescription: 'Generate short-form video ads for your small business from a text description — no agency, no shoot, no editor.',
      intro: "Most small businesses can't justify an agency retainer or a produced ad shoot for every offer they want to test, which usually means they simply don't advertise on short-form video at all. An AI video ad generator removes the production cost from the equation, so testing a new angle costs a few minutes and a handful of credits instead of a production budget.",
      sections: [
        { h: 'What a small business actually needs', p: "Speed and volume matter more than a single perfect ad: the businesses that win on TikTok and Reels are the ones testing five angles a week, not the ones spending a month on one polished spot. A generator that goes from a plain description of the business to a finished vertical video removes the bottleneck entirely." },
        { h: 'From offer to posted ad', p: 'Describe the product or the offer in the Short video ad or Creator testimonial studio, review the storyboard it drafts, and export a ready-to-post vertical video with a hook, body and call to action — then schedule it straight to TikTok, Instagram or YouTube without leaving the app.' },
      ],
      bulletsHeading: 'A good fit for:',
      bullets: [
        'local service businesses (salons, gyms, contractors, clinics)',
        'ecommerce and DTC shops testing new product angles',
        'app and software makers who need App Store or Play Store ad creative',
        'anyone who has an offer but no video production budget',
      ],
      faqs: [
        { q: 'Do I need editing software?', a: 'No — the video is generated, reviewed and exported inside the app; nothing extra to install.' },
        { q: 'Can I post straight to my business accounts?', a: 'Yes — connect TikTok, Instagram or YouTube to schedule and publish, or use the assisted flow when a platform requires posting manually.' },
      ],
      cta: 'Generate your first ad',
    },
    'photo-to-video': {
      slug: 'photo-to-video-ai',
      h1: 'Photo to video AI — animate a single photo',
      metaTitle: 'Photo to Video AI — Viral Factory',
      metaDescription: 'Turn one photo into a video scene — appear in generated content, or animate a product photo, without filming anything.',
      intro: "Photo-to-video AI takes a single still image and places it inside motion — either by animating the photo itself or by placing the person or product from that photo convincingly into a newly generated scene. It's the fastest way to get real content out of something you never filmed.",
      sections: [
        { h: 'Two different ways to animate a photo', p: "Cameo takes one photo of your face and places you inside a generated scene — a product demo, a testimonial setting, a piece of B-roll — so you appear in content without scheduling a shoot. Swap into your video takes a clip you already have and replaces a face, product or object in it, so you can update existing footage without reshooting it." },
        { h: 'Consent and rights come first', p: 'Both features ask you to confirm you have the right to use the photo, and Cameo specifically requires confirming it is you or someone who has consented — Viral Factory is built for placing a real, consented photo into a scene, never for using someone\'s likeness without permission.' },
      ],
      bulletsHeading: 'Use photo-to-video when you want to:',
      bullets: [
        'appear in a video without filming yourself on camera',
        'update an old clip with a new face or product, without reshooting',
        'turn a single product photo into motion for an ad or a post',
        'produce a batch of content from photos you already have on hand',
      ],
      faqs: [
        { q: 'Whose photo can I use?', a: 'Only your own, or someone else\'s with their explicit consent — the app requires you to confirm this before generating.' },
        { q: 'Does it work for products, not just people?', a: 'Yes — Swap into your video can replace a product or object in an existing clip, not only a face.' },
      ],
      cta: 'Animate a photo',
    },
    'ai-carousel': {
      slug: 'ai-carousel-maker',
      h1: 'AI carousel and slideshow maker for Instagram and TikTok',
      metaTitle: 'AI Carousel Maker — Viral Factory',
      metaDescription: 'Turn one idea into a multi-slide carousel — hook, images, caption and hashtags — sized for Instagram and TikTok.',
      intro: "Swipe posts consistently earn more time on screen than a single flat image, because the platform algorithm rewards the extra seconds a viewer spends swiping through slides. An AI carousel maker builds that entire multi-slide sequence from one idea, instead of you designing each slide by hand.",
      sections: [
        { h: 'Why carousels outperform a single image', p: 'A carousel forces a structure — a hook slide, a build, a payoff — that a single image can\'t carry, and every swipe is a small commitment that improves how the post is ranked. Listicles, before/after stories and step-by-step explainers are the formats that benefit most.' },
        { h: 'How Swipe post builds one', p: 'Describe the story, product or offer in one prompt; the Swipe post studio drafts the slide sequence, generates every image in a consistent style, and writes a caption with hashtags — reviewable before export as a numbered image set sized for Instagram and TikTok.' },
      ],
      bulletsHeading: 'Carousels work well for:',
      bullets: [
        'before/after and transformation stories',
        'listicles ("5 signs you need to...")',
        'product launches and feature breakdowns',
        'personal-brand and founder content',
      ],
      faqs: [
        { q: 'Can I control how many slides it makes?', a: 'The studio picks a sensible slide count for your story by default, and you can ask for more or fewer before generating.' },
        { q: 'Do the images stay consistent across slides?', a: 'Yes — a consistent visual style is kept across the sequence so it reads as one post, not several unrelated images.' },
      ],
      cta: 'Build a carousel',
    },
    'tiktok-hooks': {
      slug: 'tiktok-hook-ideas-generator',
      h1: 'TikTok hook ideas generator — 10 fresh hooks every day',
      metaTitle: 'TikTok Hook Ideas Generator — Viral Factory',
      metaDescription: 'Never run out of hooks. Ten new TikTok and Reels hook ideas every morning, each ready to turn into a finished post.',
      intro: "The hook — the first second of a video or the opening line of a caption — decides whether anyone watches the rest. Running out of hooks is the single most common reason creators and small brands stop posting consistently, which is why a daily hook generator solves a bigger problem than it looks like.",
      sections: [
        { h: 'What makes a hook work', p: "A working hook creates a specific, narrow curiosity gap — a claim, a question, or a visual that promises a payoff — in the first second. Generic hooks ('let me tell you about...') lose the scroll; specific ones ('I tried this for 30 days and...') hold it." },
        { h: 'Ten hooks and formats, every morning', p: 'Open the app to ten new hooks and ten formats each day, pulled fresh rather than repeated. Tapping one prefills the brief for a studio — Cinematic short, Short video ad, Swipe post — that\'s already half-written, so the hook becomes a reviewable storyboard in a couple of taps.' },
      ],
      bulletsHeading: 'Built for anyone who:',
      bullets: [
        'has run out of ideas after weeks of daily posting',
        'manages content for more than one account or brand',
        'wants a repeatable process instead of a blank prompt every morning',
        'is testing which hook style performs best for their audience',
      ],
      faqs: [
        { q: 'Do the hooks repeat?', a: "They're refreshed daily rather than pulled from a fixed rotation, so you get a new set each morning." },
        { q: 'Can I edit a hook before generating from it?', a: 'Yes — tapping a hook prefills a studio\'s starting brief, which you can edit before you generate.' },
      ],
      cta: 'See today\'s hooks',
    },
    'ai-character-video': {
      slug: 'ai-character-video',
      h1: 'AI character video — one consistent persona, every video',
      metaTitle: 'AI Character Video — Viral Factory',
      metaDescription: 'Design one AI persona\'s face and voice once, then reuse it across every future video — a recurring character without hiring a spokesperson.',
      intro: "A recurring face builds recognizability the way a real creator or spokesperson does — but re-casting or re-briefing a new AI-generated face for every video defeats that purpose. AI character video solves this by locking a persona's look and voice once, so every video afterward features the same identity.",
      sections: [
        { h: 'Why consistency matters more than novelty', p: "An audience that sees a different face every video never builds familiarity with any of them. A brand or a faceless creator that wants the recognizability of a recurring presenter — without hiring or re-booking one — needs the same face, voice and general style to carry across a series." },
        { h: 'How the Character studio works', p: 'Design a persona once — appearance, voice, general style — and it\'s saved as a reusable identity. Every future video generated afterward, across the other studios, can use that same persona on request, so a testimonial, a Reel and a Cameo can all feature the same recurring face.' },
      ],
      bulletsHeading: 'A good fit for:',
      bullets: [
        'faceless brands that want a persona without hiring a spokesperson',
        'series content where consistency matters more than novelty',
        'agencies running one recognizable presenter across several ad variants',
        'anyone building a recurring "face" for a personal brand',
      ],
      faqs: [
        { q: 'Can I have more than one character?', a: 'Yes — create as many personas as you need for different brands, campaigns or content lines.' },
        { q: 'Can I use my own face as the character instead of a generated one?', a: 'Yes — see Cameo, which is built specifically for placing a real, consented face into generated scenes.' },
      ],
      cta: 'Design a character',
    },
  },
  de: {
    'faceless-video': {
      slug: 'ki-video-generator-ohne-gesicht',
      h1: 'KI-Video-Generator ohne Gesicht für TikTok und Instagram',
      metaTitle: 'KI-Video-Generator ohne Gesicht — Viral Factory',
      metaDescription: 'Erstelle gesichtslose Kurzvideos aus einem Text-Prompt — ohne Kamera, ohne Gesicht, ohne Team. Teste den Generator in Viral Factory für iOS.',
      intro: 'Ein KI-Video-Generator ohne Gesicht macht aus einem Skript oder einer Idee ein fertiges Kurzvideo, ohne dass jemals eine Person vor der Kamera steht. Gesichtsloser Content gehört zu den zuverlässigsten Formaten auf TikTok und Instagram Reels: kein Darsteller zu buchen, kein Gesicht zu zeigen, und ein Format, das sich beliebig skalieren lässt, weil Stimme, Stil und Tempo immer wieder verwendet werden können.',
      sections: [
        { h: 'Warum gesichtsloser Content funktioniert', p: 'Gesichtslose Videos setzen auf starke Bilder, Text auf dem Bildschirm, Voiceover und Tempo statt auf ein Gesicht. Sie sind schneller produziert, leichter in andere Sprachen zu übertragen, und erlauben es einer einzelnen Person oder einer kleinen Marke, täglich zu posten, ohne je vor der Kamera zu stehen. Viele Accounts, die mehrmals täglich posten, zeigen überhaupt kein Gesicht.' },
        { h: 'So generiert Viral Factory diese Videos', p: 'Zwei Studios sind genau dafür gebaut: Kurzer Video-Ad macht aus einem Produkt oder Angebot ein fertig geschriebenes, postfertiges vertikales Video mit Hook, Hauptteil und Call-to-Action; Cinematic Short baut ein erzählerfreies, szenenbasiertes Video aus einer einzigen Beschreibung. Beide erzeugen Skript, Einstellungen und finalen Schnitt aus einem Prompt, mit einer Storyboard-Prüfung, bevor irgendetwas zum Video wird.' },
      ],
      bulletsHeading: 'Gesichtsloser Content passt, wenn du:',
      bullets: [
        'jeden Tag posten willst, ohne einen Presenter zu buchen oder eine Kamera aufzubauen',
        'einen Marken-Account führst, bei dem das Produkt und nicht eine Person im Mittelpunkt stehen soll',
        'dieselbe Idee schnell für einen neuen Winkel anpassen musst',
        'viele Hooks testen willst, bevor du in einen produzierten Dreh investierst',
      ],
      faqs: [
        { q: 'Brauche ich Erfahrung im Filmen?', a: 'Nein — du brauchst nur eine geschriebene Idee oder eine Produktbeschreibung. Viral Factory schreibt das Skript und generiert jede Einstellung.' },
        { q: 'Kann ich eigenes Produktmaterial statt eines komplett generierten Videos einsetzen?', a: 'Ja — kombiniere ein gesichtsloses generiertes Video mit deiner eigenen Bildschirmaufnahme über die Funktion „In dein Video einsetzen“.' },
      ],
      cta: 'Gesichtsloses Video ausprobieren',
    },
    'faceless-reels': {
      slug: 'faceless-reels-erstellen',
      h1: 'Reels ohne Gesicht für eine tägliche Posting-Routine',
      metaTitle: 'Faceless Reels erstellen — Viral Factory',
      metaDescription: 'Erstelle täglich gesichtslose Instagram Reels und TikToks, mit zehn frischen Hook-Ideen jeden Morgen. Ohne Kamera, ohne Schnittprogramm.',
      intro: 'Ein Reels-Generator ohne Gesicht erzeugt den kompletten Clip — Skript, Einstellungen, Tempo — für Instagram Reels und TikTok, ohne dass du oder jemand anderes vor der Kamera erscheint. Die eigentliche Herausforderung ist meist nicht das Format, sondern täglich mit einem neuen Winkel aufzutauchen; Viral Factory kombiniert den Generator deshalb mit einer täglichen Portion Hooks.',
      sections: [
        { h: 'Was ein Reel ohne Gesicht trägt', p: 'Ein starkes Reel eröffnet mit einem Hook in der ersten Sekunde, hält das Tempo mit Schnitten und Bildschirmtext, und löst das Versprechen ein, mit dem es begonnen hat. Ein cineastisches Szenario, ein Produkt in Bewegung oder ein gut getaktetes Listicle trägt ein Reel ganz allein, und funktioniert über Sprachgrenzen hinweg besser.' },
        { h: 'Vom täglichen Hook zum fertigen Reel', p: 'Jeden Morgen zeigt die App zehn frische Hooks und zehn Formate; tippst du eins an, wird ein Projekt vorausgefüllt, das schon halb geschrieben ist — vom Hook zum prüfbaren Storyboard in wenigen Tipps, statt vor einer leeren Eingabe zu sitzen.' },
      ],
      bulletsHeading: 'Gemacht für Creator und Marken, die:',
      bullets: [
        'jeden Tag ein Reel posten wollen, ohne die Ideen auszugehen',
        'ihr Gesicht — oder das von irgendjemandem — nicht an den Account binden wollen',
        'mehr als einen Account verwalten und einen wiederholbaren Prozess brauchen',
        'ein Storyboard prüfen wollen, bevor sie sich für den vollen Render entscheiden',
      ],
      faqs: [
        { q: 'Wie viele Reels kann ich an einem Tag erstellen?', a: 'Es gibt kein festes Limit in der App selbst — begrenzt wird es durch dein Kreditguthaben, das sich mit einem Abo erneuert oder mit Kredit-Paketen aufgestockt wird.' },
        { q: 'Muss ich mein eigenes Skript schreiben?', a: 'Nein — beschreibe die Idee oder tippe einen täglichen Hook an, und die App schreibt das Skript als Teil des Storyboards, das du vor dem Rendern prüfst.' },
      ],
      cta: 'Ein gesichtsloses Reel starten',
    },
    'ugc-ads': {
      slug: 'ugc-werbevideo-ki',
      h1: 'KI-UGC-Werbevideo-Generator — Creator-Ads ohne Creator',
      metaTitle: 'KI-UGC-Werbevideo-Generator — Viral Factory',
      metaDescription: 'Erstelle Creator-Style-UGC-Werbevideos für dein Produkt — kein Creator zu buchen, keine Kamera, kein Dreh.',
      intro: 'UGC-Style-Ads — eine echt wirkende Person, die vor der Kamera über ein Produkt spricht — schlagen durchgehend poliertes Ad-Material, weil sie wie organischer Content wirken statt wie Werbung. Für jeden Winkel echte Creator zu buchen, ist langsam und teuer; ein KI-UGC-Generator liefert genau dieses Format auf Abruf.',
      sections: [
        { h: 'Warum UGC-Style-Ads konvertieren', p: 'Zuschauer scrollen an allem vorbei, das wie klassische Werbung aussieht, aber ein handgehaltener Talking-Head-Clip bekommt eine Sekunde Aufmerksamkeit, bevor das Gehirn ihn als Marketing einordnet. Diese eine Sekunde entscheidet oft zwischen Weiterscrollen und Ansehen.' },
        { h: 'So funktioniert das Creator-Testimonial-Studio', p: 'Gib dein Produkt und den gewünschten Winkel an; das Studio schreibt ein natürliches, wie von einem Creator gesprochenes Skript und generiert ein Talking-Head-Video, das es performt. Kombiniere es mit dem KI-Charakter-Studio für einen durchgängig gleichen Presenter über alle getesteten Ads hinweg.' },
      ],
      bulletsHeading: 'Nutze es, wenn du:',
      bullets: [
        'mehrere Ad-Winkel testen willst, bevor du einen echten Creator buchst',
        'eine Testimonial-Lücke füllen willst, bevor echtes Kunden-UGC existiert',
        'Paid-Social-Material produzieren willst, das wie organischer Content wirkt',
        'einen durchgängig gleichen Presenter über mehrere Ad-Varianten hinweg willst',
      ],
      faqs: [
        { q: 'Ersetzt das echte Kundenstimmen?', a: 'Es füllt die Lücke, bevor du welche hast, und lässt dich Skripte schnell testen — echte Testimonials nachträglich einzubauen lohnt sich trotzdem.' },
        { q: 'Kann ich den Presenter auswählen?', a: 'Ja — wähle einen Presenter-Stil für eine einzelne Ad, oder gestalte einmal eine Persona im KI-Charakter-Studio und nutze Gesicht und Stimme jedes Mal wieder.' },
      ],
      cta: 'Ein UGC-Style-Ad generieren',
    },
    'small-biz-ads': {
      slug: 'ki-werbevideo-generator-kleinunternehmen',
      h1: 'KI-Werbevideo-Generator für kleine Unternehmen',
      metaTitle: 'KI-Werbevideo-Generator für kleine Unternehmen — Viral Factory',
      metaDescription: 'Erstelle kurze Video-Ads für dein kleines Unternehmen aus einer Textbeschreibung — ohne Agentur, ohne Dreh, ohne Editor.',
      intro: 'Die meisten kleinen Unternehmen können sich weder eine Agentur noch einen produzierten Ad-Dreh für jedes Angebot leisten — meist heißt das schlicht: keine Werbung auf Kurzvideo-Plattformen. Ein KI-Werbevideo-Generator nimmt die Produktionskosten aus der Gleichung.',
      sections: [
        { h: 'Was ein kleines Unternehmen wirklich braucht', p: 'Tempo und Volumen zählen mehr als ein einzelner perfekter Ad: Wer auf TikTok und Reels gewinnt, testet fünf Winkel pro Woche, statt einen Monat an einem polierten Spot zu arbeiten. Ein Generator, der von einer einfachen Unternehmensbeschreibung direkt zu einem fertigen vertikalen Video kommt, beseitigt diesen Engpass komplett.' },
        { h: 'Vom Angebot zum veröffentlichten Ad', p: 'Beschreibe Produkt oder Angebot im Studio Kurzer Video-Ad oder Creator-Testimonial, prüfe das entworfene Storyboard und exportiere ein postfertiges vertikales Video — dann plane es direkt für TikTok, Instagram oder YouTube, ohne die App zu verlassen.' },
      ],
      bulletsHeading: 'Gut geeignet für:',
      bullets: [
        'lokale Dienstleister (Salons, Fitnessstudios, Handwerker, Praxen)',
        'E-Commerce- und DTC-Shops, die neue Produktwinkel testen',
        'App- und Software-Anbieter, die Ad-Material für App Store oder Play Store brauchen',
        'alle mit einem Angebot, aber ohne Videoproduktionsbudget',
      ],
      faqs: [
        { q: 'Brauche ich Schnittsoftware?', a: 'Nein — das Video wird in der App generiert, geprüft und exportiert; nichts zusätzlich zu installieren.' },
        { q: 'Kann ich direkt auf meine Unternehmens-Accounts posten?', a: 'Ja — verbinde TikTok, Instagram oder YouTube zum Planen und Veröffentlichen, oder nutze den Assistenten, wenn eine Plattform manuelles Posten erfordert.' },
      ],
      cta: 'Deinen ersten Ad generieren',
    },
    'photo-to-video': {
      slug: 'foto-zu-video-ki',
      h1: 'Foto-zu-Video-KI — ein einzelnes Foto animieren',
      metaTitle: 'Foto-zu-Video-KI — Viral Factory',
      metaDescription: 'Verwandle ein Foto in eine Videoszene — erscheine in generiertem Content oder animiere ein Produktfoto, ohne selbst zu filmen.',
      intro: 'Foto-zu-Video-KI nimmt ein einzelnes Standbild und setzt es in Bewegung — entweder indem das Foto selbst animiert wird, oder indem die Person oder das Produkt aus diesem Foto überzeugend in eine neu generierte Szene eingesetzt wird. Es ist der schnellste Weg, aus etwas, das du nie gefilmt hast, echten Content zu machen.',
      sections: [
        { h: 'Zwei Wege, ein Foto zu animieren', p: 'Cameo nimmt ein Foto deines Gesichts und setzt dich in eine generierte Szene — eine Produktdemo, eine Testimonial-Umgebung, ein Stück B-Roll. „In dein Video einsetzen“ nimmt einen bereits vorhandenen Clip und ersetzt darin ein Gesicht, ein Produkt oder ein Objekt, ohne neu zu drehen.' },
        { h: 'Einwilligung und Rechte zuerst', p: 'Beide Funktionen verlangen eine Bestätigung, dass du das Recht hast, das Foto zu verwenden; Cameo verlangt zusätzlich die Bestätigung, dass es sich um dich selbst oder eine Person mit Einwilligung handelt.' },
      ],
      bulletsHeading: 'Foto-zu-Video eignet sich, wenn du:',
      bullets: [
        'in einem Video erscheinen willst, ohne dich selbst zu filmen',
        'einen alten Clip mit einem neuen Gesicht oder Produkt aktualisieren willst, ohne neu zu drehen',
        'ein einzelnes Produktfoto für einen Ad oder Post in Bewegung setzen willst',
        'eine Reihe von Inhalten aus Fotos produzieren willst, die du bereits hast',
      ],
      faqs: [
        { q: 'Wessen Foto darf ich verwenden?', a: 'Nur dein eigenes oder das einer anderen Person mit deren ausdrücklicher Einwilligung — die App verlangt vor der Generierung eine Bestätigung.' },
        { q: 'Funktioniert es auch mit Produkten, nicht nur mit Personen?', a: 'Ja — „In dein Video einsetzen“ kann in einem bestehenden Clip auch ein Produkt oder Objekt ersetzen.' },
      ],
      cta: 'Ein Foto animieren',
    },
    'ai-carousel': {
      slug: 'ki-carousel-generator',
      h1: 'KI-Carousel- und Slideshow-Generator für Instagram und TikTok',
      metaTitle: 'KI-Carousel-Generator — Viral Factory',
      metaDescription: 'Mach aus einer Idee ein mehrteiliges Karussell — Hook, Bilder, Caption und Hashtags — passend für Instagram und TikTok.',
      intro: 'Swipe-Posts bekommen durchgehend mehr Zeit auf dem Bildschirm als ein einzelnes flaches Bild, weil der Plattform-Algorithmus die zusätzlichen Sekunden belohnt, die ein Betrachter mit dem Durchwischen der Slides verbringt.',
      sections: [
        { h: 'Warum Karusselle besser performen als ein einzelnes Bild', p: 'Ein Karussell erzwingt eine Struktur — eine Hook-Slide, einen Aufbau, eine Auflösung —, die ein einzelnes Bild nicht tragen kann, und jeder Wisch ist ein kleines Commitment, das das Ranking des Posts verbessert. Listicles, Vorher/Nachher-Geschichten und Schritt-für-Schritt-Erklärungen profitieren davon am meisten.' },
        { h: 'So baut Swipe-Post eines', p: 'Beschreibe Geschichte, Produkt oder Angebot in einem Prompt; das Swipe-Post-Studio entwirft die Slide-Sequenz, generiert jedes Bild in einem einheitlichen Stil und schreibt eine Caption mit Hashtags — als nummeriertes Bilder-Set, passend für Instagram und TikTok.' },
      ],
      bulletsHeading: 'Karusselle funktionieren gut für:',
      bullets: [
        'Vorher/Nachher- und Transformationsgeschichten',
        'Listicles („5 Anzeichen, dass du...“)',
        'Produktlaunches und Feature-Breakdowns',
        'Personal-Brand- und Gründer-Content',
      ],
      faqs: [
        { q: 'Kann ich steuern, wie viele Slides entstehen?', a: 'Das Studio wählt standardmäßig eine sinnvolle Slide-Anzahl für deine Geschichte; du kannst vor der Generierung mehr oder weniger anfordern.' },
        { q: 'Bleiben die Bilder über alle Slides konsistent?', a: 'Ja — ein einheitlicher visueller Stil wird über die ganze Sequenz gehalten, damit es als ein Post wirkt, nicht als mehrere unabhängige Bilder.' },
      ],
      cta: 'Ein Karussell erstellen',
    },
    'tiktok-hooks': {
      slug: 'tiktok-hook-ideen-generator',
      h1: 'TikTok-Hook-Ideen-Generator — 10 frische Hooks jeden Tag',
      metaTitle: 'TikTok-Hook-Ideen-Generator — Viral Factory',
      metaDescription: 'Nie mehr ohne Hooks. Jeden Morgen zehn neue TikTok- und Reels-Hook-Ideen, jede sofort zu einem fertigen Post verwertbar.',
      intro: 'Der Hook — die erste Sekunde eines Videos oder die Eröffnungszeile einer Caption — entscheidet, ob überhaupt jemand weiterschaut. Keine Hooks mehr zu haben ist der häufigste Grund, warum Creator und kleine Marken aufhören, regelmäßig zu posten.',
      sections: [
        { h: 'Was einen Hook funktionieren lässt', p: 'Ein funktionierender Hook erzeugt in der ersten Sekunde eine spezifische, enge Neugierlücke — eine Behauptung, eine Frage, oder ein Bild, das eine Auflösung verspricht. Generische Hooks verlieren das Scrollen; spezifische halten es.' },
        { h: 'Zehn Hooks und Formate, jeden Morgen', p: 'Öffne die App zu zehn neuen Hooks und zehn Formaten jeden Tag, frisch statt wiederholt. Tippst du eins an, wird das Briefing für ein Studio vorausgefüllt, das schon halb geschrieben ist, sodass der Hook in wenigen Tipps zu einem prüfbaren Storyboard wird.' },
      ],
      bulletsHeading: 'Gemacht für alle, die:',
      bullets: [
        'nach Wochen täglichen Postens keine Ideen mehr haben',
        'Content für mehr als einen Account oder eine Marke verwalten',
        'einen wiederholbaren Prozess wollen statt jeden Morgen einer leeren Eingabe',
        'testen, welcher Hook-Stil bei ihrem Publikum am besten funktioniert',
      ],
      faqs: [
        { q: 'Wiederholen sich die Hooks?', a: 'Sie werden täglich neu erstellt statt aus einer festen Rotation gezogen, sodass du jeden Morgen ein neues Set bekommst.' },
        { q: 'Kann ich einen Hook bearbeiten, bevor ich damit generiere?', a: 'Ja — das Antippen eines Hooks füllt das Startbriefing eines Studios vor, das du vor dem Generieren bearbeiten kannst.' },
      ],
      cta: 'Die heutigen Hooks ansehen',
    },
    'ai-character-video': {
      slug: 'ki-charakter-video',
      h1: 'KI-Charakter-Video — eine durchgängige Persona, in jedem Video',
      metaTitle: 'KI-Charakter-Video — Viral Factory',
      metaDescription: 'Gestalte Gesicht und Stimme einer KI-Persona einmal und nutze sie in jedem weiteren Video — eine wiederkehrende Figur, ohne einen Sprecher zu engagieren.',
      intro: 'Ein wiederkehrendes Gesicht schafft Wiedererkennbarkeit, genau wie ein echter Creator oder Sprecher — aber für jedes Video ein neues KI-generiertes Gesicht neu zu casten, verfehlt genau diesen Zweck. KI-Charakter-Video löst das, indem Aussehen und Stimme einer Persona einmal festgelegt werden.',
      sections: [
        { h: 'Warum Konsistenz wichtiger ist als Abwechslung', p: 'Ein Publikum, das in jedem Video ein anderes Gesicht sieht, baut zu keinem davon Vertrautheit auf. Eine Marke oder ein gesichtsloser Creator, der die Wiedererkennbarkeit eines wiederkehrenden Presenters will, braucht dasselbe Gesicht, dieselbe Stimme und denselben Stil über eine ganze Serie hinweg.' },
        { h: 'So funktioniert das Charakter-Studio', p: 'Gestalte eine Persona einmal — Aussehen, Stimme, allgemeiner Stil — und sie wird als wiederverwendbare Identität gespeichert. Jedes künftig generierte Video, über alle anderen Studios hinweg, kann auf Wunsch dieselbe Persona nutzen.' },
      ],
      bulletsHeading: 'Gut geeignet für:',
      bullets: [
        'gesichtslose Marken, die eine Persona ohne engagierten Sprecher wollen',
        'Serien-Content, bei dem Konsistenz wichtiger ist als Abwechslung',
        'Agenturen, die einen wiedererkennbaren Presenter über mehrere Ad-Varianten hinweg nutzen',
        'alle, die eine wiederkehrende „Figur“ für eine Personal Brand aufbauen',
      ],
      faqs: [
        { q: 'Kann ich mehr als einen Charakter haben?', a: 'Ja — erstelle so viele Personas, wie du für verschiedene Marken, Kampagnen oder Content-Linien brauchst.' },
        { q: 'Kann ich mein eigenes Gesicht statt eines generierten nutzen?', a: 'Ja — dafür gibt es Cameo, gebaut speziell dafür, ein echtes, eingewilligtes Gesicht in generierte Szenen zu setzen.' },
      ],
      cta: 'Einen Charakter gestalten',
    },
  },
  fr: {
    'faceless-video': {
      slug: 'generateur-video-sans-visage',
      h1: 'Générateur de vidéos sans visage pour TikTok et Instagram',
      metaTitle: 'Générateur de vidéos sans visage — Viral Factory',
      metaDescription: "Créez des vidéos courtes sans visage à partir d'un prompt texte — sans caméra, sans visage, sans équipe. Essayez le générateur dans Viral Factory pour iOS.",
      intro: "Un générateur de vidéos sans visage transforme un script ou une idée en vidéo courte terminée sans jamais mettre quelqu'un devant la caméra. Le contenu sans visage est devenu l'un des formats les plus fiables sur TikTok et Instagram Reels : aucun acteur à réserver, aucun visage à montrer, et un format qui passe à l'échelle puisque la même voix, le même style et le même rythme peuvent être réutilisés indéfiniment.",
      sections: [
        { h: 'Pourquoi la vidéo sans visage fonctionne', p: "Les vidéos sans visage s'appuient sur des visuels forts, du texte à l'écran, une voix off et un rythme plutôt que sur le visage d'un présentateur. Elles sont plus rapides à produire, plus faciles à adapter dans d'autres langues, et permettent à un créateur seul ou une petite marque de publier chaque jour sans jamais apparaître à l'écran." },
        { h: 'Comment Viral Factory les génère', p: "Deux studios sont conçus pour cela : Pub vidéo courte transforme un produit ou une offre en une pub vidéo verticale scénarisée et prête à publier ; Court-métrage cinématique construit une vidéo de scène sans narrateur à partir d'une seule description. Les deux génèrent script, plans et rendu final à partir d'un prompt, avec une étape de vérification du storyboard." },
      ],
      bulletsHeading: 'La vidéo sans visage vous convient si vous :',
      bullets: [
        'voulez publier chaque jour sans réserver de présentateur ni installer de caméra',
        'gérez un compte de marque où le produit, et non une personne, doit être la vedette',
        "devez adapter rapidement la même idée sous un nouvel angle",
        "testez beaucoup d'accroches avant d'investir dans un tournage produit",
      ],
      faqs: [
        { q: "Ai-je besoin d'expérience en tournage ?", a: "Non — il vous suffit d'une idée écrite ou d'une description de produit. Viral Factory écrit le script et génère chaque plan." },
        { q: "Puis-je ajouter mes propres images de produit au lieu d'une vidéo entièrement générée ?", a: "Oui — associez une vidéo sans visage générée à votre propre enregistrement d'écran grâce à la fonction Intégrer dans votre vidéo." },
      ],
      cta: 'Essayer la génération de vidéo sans visage',
    },
    'faceless-reels': {
      slug: 'creer-reels-sans-visage',
      h1: 'Créer des Reels sans visage pour une habitude de publication quotidienne',
      metaTitle: 'Créer des Reels sans visage — Viral Factory',
      metaDescription: "Générez chaque jour des Reels Instagram et TikTok sans visage, avec dix nouvelles idées d'accroche chaque matin. Sans caméra, sans logiciel de montage.",
      intro: "Un générateur de Reels sans visage crée le clip entier — script, plans, rythme — pour Instagram Reels et TikTok sans que vous ou quiconque n'apparaisse à l'écran. La difficulté n'est généralement pas le format, mais de se présenter chaque jour avec un nouvel angle ; Viral Factory associe donc le générateur à un approvisionnement quotidien d'accroches.",
      sections: [
        { h: "Ce qui fait tenir un Reel sans visage", p: "Un bon Reel s'ouvre sur une accroche dès la première seconde, maintient le rythme avec des coupes et du texte à l'écran, et tient la promesse de son ouverture. Un scénario cinématographique, un produit en mouvement, ou un listicle bien rythmé porte un Reel à lui seul." },
        { h: "D'une accroche quotidienne à un Reel terminé", p: "Chaque matin, l'app propose dix nouvelles accroches et dix formats ; en toucher une préremplit un projet déjà à moitié écrit, pour passer de l'idée à un storyboard vérifiable en quelques gestes plutôt que face à une page blanche." },
      ],
      bulletsHeading: 'Pensé pour les créateurs et marques qui :',
      bullets: [
        'veulent publier un Reel chaque jour sans manquer d\'idées',
        "ne veulent pas lier leur visage — ou celui de quiconque — au compte",
        'gèrent plusieurs comptes et ont besoin d\'un processus reproductible',
        'veulent vérifier un storyboard avant de valider le rendu complet',
      ],
      faqs: [
        { q: 'Combien de Reels puis-je créer par jour ?', a: "Il n'y a pas de plafond fixe dans l'app elle-même — cela dépend de votre solde de crédits, renouvelé par un abonnement ou complété par des packs de crédits." },
        { q: 'Dois-je écrire mon propre script ?', a: "Non — décrivez l'idée ou touchez une accroche du jour, et l'app écrit le script dans le cadre du storyboard que vous vérifiez avant le rendu." },
      ],
      cta: 'Démarrer un Reel sans visage',
    },
    'ugc-ads': {
      slug: 'generateur-pub-ugc-ia',
      h1: 'Générateur de pubs UGC par IA — des pubs façon créateur sans créateur',
      metaTitle: 'Générateur de pubs UGC par IA — Viral Factory',
      metaDescription: 'Générez des pubs UGC façon créateur, visage face caméra, pour votre produit — sans créateur à réserver, sans caméra, sans tournage.',
      intro: "Les pubs façon UGC — une personne à l'apparence réelle qui parle d'un produit face caméra — surpassent régulièrement les créas publicitaires léchées, car elles se lisent comme du contenu organique. Réserver de vrais créateurs pour chaque angle à tester est lent et coûteux ; un générateur de pubs UGC par IA offre ce même format à la demande.",
      sections: [
        { h: 'Pourquoi les pubs façon UGC convertissent', p: "Les spectateurs font défiler tout ce qui ressemble à une pub traditionnelle, mais un clip tenu à la main, visage face caméra, gagne une seconde d'attention avant que le cerveau ne le classe comme du marketing." },
        { h: 'Comment fonctionne le studio Témoignage créateur', p: "Donnez-lui votre produit et l'angle souhaité ; il écrit un script naturel, à la voix d'un créateur, et génère une vidéo visage face caméra qui le joue. Associez-le au studio Personnage IA pour garder un présentateur cohérent sur toutes les pubs testées." },
      ],
      bulletsHeading: 'À utiliser quand vous devez :',
      bullets: [
        'tester plusieurs angles publicitaires avant de réserver un vrai créateur',
        "combler un manque de témoignages avant d'avoir de l'UGC client réel",
        'produire des créas social payant qui se lisent comme du contenu organique',
        'garder un présentateur cohérent sur une série de variantes publicitaires',
      ],
      faqs: [
        { q: 'Est-ce que cela remplace les vrais témoignages clients ?', a: "Cela comble le manque en attendant d'en avoir, et permet de tester des scripts rapidement — rien ne remplace un vrai client." },
        { q: 'Puis-je choisir le présentateur ?', a: 'Oui — choisissez un style de présentateur pour une pub ponctuelle, ou créez une identité une fois avec le studio Personnage IA et réutilisez le même visage et la même voix.' },
      ],
      cta: 'Générer une pub façon UGC',
    },
    'small-biz-ads': {
      slug: 'generateur-pub-video-ia-petites-entreprises',
      h1: 'Générateur de pubs vidéo IA pour petites entreprises',
      metaTitle: 'Générateur de pubs vidéo IA pour petites entreprises — Viral Factory',
      metaDescription: 'Générez des pubs vidéo courtes pour votre petite entreprise à partir d\'une description texte — sans agence, sans tournage, sans monteur.',
      intro: "La plupart des petites entreprises ne peuvent justifier ni un forfait agence ni un tournage produit pour chaque offre qu'elles veulent tester. Un générateur de pubs vidéo par IA retire le coût de production de l'équation.",
      sections: [
        { h: "Ce dont une petite entreprise a vraiment besoin", p: "La rapidité et le volume comptent plus qu'une seule pub parfaite : les entreprises qui gagnent sur TikTok et Reels sont celles qui testent cinq angles par semaine. Un générateur qui va d'une simple description à une vidéo verticale terminée supprime ce goulot d'étranglement." },
        { h: 'De l\'offre à la pub publiée', p: "Décrivez le produit ou l'offre dans le studio Pub vidéo courte ou Témoignage créateur, vérifiez le storyboard proposé, et exportez une vidéo verticale prête à publier — puis planifiez-la directement sur TikTok, Instagram ou YouTube." },
      ],
      bulletsHeading: 'Idéal pour :',
      bullets: [
        'les commerces de services locaux (salons, salles de sport, artisans, cliniques)',
        'les boutiques e-commerce et DTC qui testent de nouveaux angles produit',
        "les éditeurs d'app et de logiciels qui ont besoin de créas pour l'App Store ou le Play Store",
        'quiconque a une offre mais pas de budget de production vidéo',
      ],
      faqs: [
        { q: "Ai-je besoin d'un logiciel de montage ?", a: "Non — la vidéo est générée, vérifiée et exportée dans l'app ; rien d'autre à installer." },
        { q: 'Puis-je publier directement sur mes comptes professionnels ?', a: 'Oui — connectez TikTok, Instagram ou YouTube pour planifier et publier, ou utilisez le flux assisté.' },
      ],
      cta: 'Générer votre première pub',
    },
    'photo-to-video': {
      slug: 'photo-en-video-ia',
      h1: 'Photo en vidéo par IA — animer une seule photo',
      metaTitle: 'Photo en vidéo par IA — Viral Factory',
      metaDescription: 'Transformez une photo en scène vidéo — apparaissez dans du contenu généré, ou animez une photo produit, sans rien filmer.',
      intro: "La photo en vidéo par IA prend une seule image fixe et la place en mouvement — soit en animant la photo elle-même, soit en plaçant la personne ou le produit de cette photo dans une scène nouvellement générée. C'est le moyen le plus rapide d'obtenir du vrai contenu à partir de quelque chose que vous n'avez jamais filmé.",
      sections: [
        { h: "Deux façons différentes d'animer une photo", p: "Cameo prend une photo de votre visage et vous place dans une scène générée. Intégrer dans votre vidéo prend un clip que vous avez déjà et y remplace un visage, un produit ou un objet, pour mettre à jour des images existantes sans les retourner." },
        { h: "Le consentement et les droits d'abord", p: "Les deux fonctions vous demandent de confirmer que vous avez le droit d'utiliser la photo, et Cameo exige de confirmer qu'il s'agit de vous ou d'une personne consentante." },
      ],
      bulletsHeading: 'Utilisez la photo en vidéo quand vous voulez :',
      bullets: [
        'apparaître dans une vidéo sans vous filmer vous-même',
        'mettre à jour un ancien clip avec un nouveau visage ou produit, sans le retourner',
        'mettre en mouvement une seule photo produit pour une pub ou un post',
        'produire un lot de contenus à partir de photos que vous avez déjà sous la main',
      ],
      faqs: [
        { q: 'La photo de qui puis-je utiliser ?', a: "Seulement la vôtre, ou celle de quelqu'un d'autre avec son consentement explicite." },
        { q: 'Cela fonctionne-t-il pour des produits, pas seulement des personnes ?', a: 'Oui — Intégrer dans votre vidéo peut remplacer un produit ou un objet dans un clip existant.' },
      ],
      cta: 'Animer une photo',
    },
    'ai-carousel': {
      slug: 'generateur-carousel-ia',
      h1: 'Générateur de carrousels et diaporamas IA pour Instagram et TikTok',
      metaTitle: 'Générateur de carrousel IA — Viral Factory',
      metaDescription: 'Transformez une idée en carrousel multi-slides — accroche, images, légende et hashtags — au format Instagram et TikTok.',
      intro: "Les posts carrousel gagnent systématiquement plus de temps à l'écran qu'une seule image plate, car l'algorithme récompense les secondes qu'un spectateur passe à faire défiler les slides.",
      sections: [
        { h: 'Pourquoi les carrousels surpassent une image unique', p: "Un carrousel impose une structure — une slide d'accroche, un développement, une chute — qu'une seule image ne peut porter, et chaque glissement améliore le classement du post." },
        { h: 'Comment le studio Post carrousel en construit un', p: "Décrivez l'histoire, le produit ou l'offre en un prompt ; le studio élabore la séquence de slides, génère chaque image dans un style cohérent, et rédige une légende avec hashtags." },
      ],
      bulletsHeading: 'Les carrousels fonctionnent bien pour :',
      bullets: [
        'les histoires avant/après et de transformation',
        "les listicles (« 5 signes que vous devez... »)",
        'les lancements de produits et présentations de fonctionnalités',
        'le contenu de marque personnelle et de fondateur',
      ],
      faqs: [
        { q: 'Puis-je contrôler le nombre de slides générées ?', a: "Le studio choisit par défaut un nombre adapté à votre histoire, modifiable avant de générer." },
        { q: "Les images restent-elles cohérentes d'une slide à l'autre ?", a: 'Oui — un style visuel cohérent est maintenu sur toute la séquence.' },
      ],
      cta: 'Créer un carrousel',
    },
    'tiktok-hooks': {
      slug: 'generateur-idees-hook-tiktok',
      h1: "Générateur d'idées d'accroches TikTok — 10 accroches fraîches chaque jour",
      metaTitle: "Générateur d'idées d'accroches TikTok — Viral Factory",
      metaDescription: 'Ne manquez plus jamais d\'accroches. Dix nouvelles idées chaque matin, chacune prête à devenir un post terminé.',
      intro: "L'accroche décide si quelqu'un regarde la suite. Manquer d'accroches est la raison la plus courante pour laquelle créateurs et petites marques arrêtent de publier régulièrement.",
      sections: [
        { h: 'Ce qui fait fonctionner une accroche', p: "Une accroche efficace crée dès la première seconde un écart de curiosité précis. Les accroches génériques perdent le défilement ; les accroches précises le retiennent." },
        { h: 'Dix accroches et formats, chaque matin', p: "Ouvrez l'app pour découvrir dix nouvelles accroches et dix formats chaque jour. En toucher une préremplit le brief d'un studio déjà à moitié écrit." },
      ],
      bulletsHeading: 'Pensé pour quiconque :',
      bullets: [
        'manque d\'idées après des semaines de publication quotidienne',
        'gère du contenu pour plus d\'un compte ou une marque',
        'veut un processus reproductible plutôt qu\'une page blanche chaque matin',
        'teste quel style d\'accroche fonctionne le mieux auprès de son audience',
      ],
      faqs: [
        { q: 'Les accroches se répètent-elles ?', a: 'Elles sont renouvelées chaque jour, vous obtenez donc un nouvel ensemble chaque matin.' },
        { q: 'Puis-je modifier une accroche avant de générer à partir d\'elle ?', a: 'Oui — toucher une accroche préremplit le brief de départ, modifiable avant de générer.' },
      ],
      cta: 'Voir les accroches du jour',
    },
    'ai-character-video': {
      slug: 'video-personnage-ia',
      h1: 'Vidéo de personnage IA — une identité cohérente, à chaque vidéo',
      metaTitle: 'Vidéo de personnage IA — Viral Factory',
      metaDescription: "Créez une fois le visage et la voix d'une identité IA, puis réutilisez-la dans chaque future vidéo.",
      intro: "Un visage récurrent construit une reconnaissabilité comme le ferait un vrai créateur — mais recaster un nouveau visage à chaque vidéo va à l'encontre de cet objectif. La vidéo de personnage IA fixe une fois pour toutes l'apparence et la voix d'une identité.",
      sections: [
        { h: 'Pourquoi la cohérence compte plus que la nouveauté', p: "Une audience qui voit un visage différent à chaque vidéo ne développe de familiarité avec aucun d'eux." },
        { h: 'Comment fonctionne le studio Personnage', p: "Créez une identité une fois — apparence, voix, style général — et elle est enregistrée comme réutilisable. Chaque future vidéo peut utiliser cette même identité sur demande." },
      ],
      bulletsHeading: 'Idéal pour :',
      bullets: [
        'les marques sans visage qui veulent un personnage sans engager de porte-parole',
        'le contenu en série où la cohérence compte plus que la nouveauté',
        'les agences qui utilisent un présentateur reconnaissable sur plusieurs variantes',
        'quiconque construit un « visage » récurrent pour une marque personnelle',
      ],
      faqs: [
        { q: 'Puis-je avoir plusieurs personnages ?', a: 'Oui — créez autant d\'identités que nécessaire pour différentes marques ou campagnes.' },
        { q: 'Puis-je utiliser mon propre visage plutôt qu\'un visage généré ?', a: 'Oui — voir Cameo, conçu pour placer un visage réel et consenti dans des scènes générées.' },
      ],
      cta: 'Créer un personnage',
    },
  },
  es: {
    'faceless-video': {
      slug: 'generador-de-video-sin-rostro',
      h1: 'Generador de vídeo sin rostro para TikTok e Instagram',
      metaTitle: 'Generador de vídeo sin rostro — Viral Factory',
      metaDescription: 'Crea vídeos cortos sin rostro a partir de un prompt de texto — sin cámara, sin rostro, sin equipo. Prueba el generador en Viral Factory para iOS.',
      intro: 'Un generador de vídeo sin rostro convierte un guion o una idea en un vídeo corto terminado sin poner nunca a una persona frente a la cámara. El contenido sin rostro se ha convertido en uno de los formatos más fiables en TikTok e Instagram Reels.',
      sections: [
        { h: 'Por qué funciona el vídeo sin rostro', p: 'Los vídeos sin rostro se apoyan en imágenes potentes, texto en pantalla, locución y ritmo en lugar del rostro de un presentador. Son más rápidos de producir y permiten publicar a diario sin aparecer nunca en cámara.' },
        { h: 'Cómo lo genera Viral Factory', p: 'Dos estudios están hechos para esto: Anuncio en vídeo corto convierte un producto en un anuncio vertical guionizado y listo para publicar; Corto cinematográfico construye un vídeo de escena sin narrador. Ambos generan guion, planos y renderizado final desde un prompt.' },
      ],
      bulletsHeading: 'El vídeo sin rostro encaja si:',
      bullets: [
        'quieres publicar todos los días sin contratar a un presentador ni montar una cámara',
        'gestionas una cuenta de marca donde el protagonista debe ser el producto, no una persona',
        'necesitas adaptar rápidamente la misma idea con un nuevo ángulo',
        'estás probando muchos ganchos antes de invertir en un rodaje producido',
      ],
      faqs: [
        { q: '¿Necesito experiencia en grabación?', a: 'No — solo necesitas una idea escrita o una descripción de producto. Viral Factory escribe el guion y genera cada plano.' },
        { q: '¿Puedo añadir mis propias imágenes de producto en lugar de un vídeo totalmente generado?', a: 'Sí — combina un vídeo sin rostro generado con tu propia grabación de pantalla usando Insertar en tu vídeo.' },
      ],
      cta: 'Probar la generación de vídeo sin rostro',
    },
    'faceless-reels': {
      slug: 'crear-reels-sin-cara',
      h1: 'Crear Reels sin cara para un hábito de publicación diario',
      metaTitle: 'Crear Reels sin cara — Viral Factory',
      metaDescription: 'Genera Reels de Instagram y TikToks sin cara cada día, con diez ideas de gancho nuevas cada mañana. Sin cámara, sin software de edición.',
      intro: 'Un generador de Reels sin cara crea el clip completo — guion, planos, ritmo — sin que tú ni nadie más aparezca en cámara. Viral Factory combina el generador con un suministro diario de ganchos para que el problema de la página en blanco desaparezca.',
      sections: [
        { h: 'Qué hace que un Reel funcione sin cara', p: 'Un buen Reel abre con un gancho en el primer segundo, mantiene el ritmo con cortes y texto en pantalla, y cumple la promesa con la que empezó. Un escenario cinematográfico o un producto en movimiento sostiene un Reel por sí solo.' },
        { h: 'De un gancho diario a un Reel terminado', p: 'Cada mañana la app muestra diez ganchos nuevos y diez formatos; tocar uno rellena un proyecto ya medio escrito, para pasar de la idea a un storyboard revisable en un par de toques.' },
      ],
      bulletsHeading: 'Pensado para creadores y marcas que:',
      bullets: [
        'quieren publicar un Reel cada día sin quedarse sin ideas',
        'no quieren atar su cara — ni la de nadie — a la cuenta',
        'gestionan más de una cuenta y necesitan un proceso repetible',
        'quieren revisar un storyboard antes de comprometerse con el renderizado completo',
      ],
      faqs: [
        { q: '¿Cuántos Reels puedo hacer en un día?', a: 'No hay un límite fijo — depende de tu saldo de créditos, renovado con una suscripción o recargado con paquetes.' },
        { q: '¿Tengo que escribir mi propio guion?', a: 'No — describe la idea o toca un gancho del día, y la app escribe el guion como parte del storyboard.' },
      ],
      cta: 'Empezar un Reel sin cara',
    },
    'ugc-ads': {
      slug: 'generador-anuncios-ugc-ia',
      h1: 'Generador de anuncios UGC con IA — anuncios estilo creador sin creador',
      metaTitle: 'Generador de anuncios UGC con IA — Viral Factory',
      metaDescription: 'Genera anuncios UGC estilo creador, hablando a cámara, para tu producto — sin contratar creador, sin cámara, sin grabación.',
      intro: 'Los anuncios estilo UGC superan consistentemente a la creatividad publicitaria pulida porque se leen como contenido orgánico. Contratar creadores reales para cada ángulo es lento y caro; un generador de anuncios UGC con IA da ese mismo formato bajo demanda.',
      sections: [
        { h: 'Por qué los anuncios estilo UGC convierten', p: 'Los espectadores pasan de largo todo lo que parece un anuncio tradicional, pero un clip grabado a mano, hablando a cámara, gana un segundo de atención antes de que el cerebro lo clasifique como marketing.' },
        { h: 'Cómo funciona el estudio Testimonio de creador', p: 'Dale tu producto y el ángulo deseado; escribe un guion natural, con voz de creador, y genera un vídeo hablando a cámara. Combínalo con Personaje de IA para mantener un presentador coherente.' },
      ],
      bulletsHeading: 'Úsalo cuando necesites:',
      bullets: [
        'probar varios ángulos publicitarios antes de contratar a un creador real',
        'llenar un vacío de testimonios antes de tener UGC real de clientes',
        'producir creatividad de social de pago que se lea como contenido orgánico',
        'mantener un presentador coherente en una serie de variantes de anuncio',
      ],
      faqs: [
        { q: '¿Esto reemplaza los testimonios reales de clientes?', a: 'Llena el vacío antes de tenerlos y permite probar guiones rápido — nada reemplaza a un cliente real.' },
        { q: '¿Puedo elegir al presentador?', a: 'Sí — elige un estilo para un anuncio puntual, o diseña una identidad una vez con Personaje de IA y reutilízala.' },
      ],
      cta: 'Generar un anuncio estilo UGC',
    },
    'small-biz-ads': {
      slug: 'generador-anuncios-video-ia-pequenas-empresas',
      h1: 'Generador de anuncios en vídeo con IA para pequeñas empresas',
      metaTitle: 'Generador de anuncios en vídeo con IA para pequeñas empresas — Viral Factory',
      metaDescription: 'Genera anuncios en vídeo corto para tu pequeña empresa a partir de una descripción de texto — sin agencia, sin rodaje, sin editor.',
      intro: 'La mayoría de las pequeñas empresas no pueden justificar una agencia ni un rodaje producido para cada oferta que quieren probar. Un generador de anuncios en vídeo con IA elimina el coste de producción de la ecuación.',
      sections: [
        { h: 'Lo que realmente necesita una pequeña empresa', p: 'La velocidad y el volumen importan más que un solo anuncio perfecto: los negocios que ganan en TikTok y Reels prueban cinco ángulos a la semana. Un generador que va de una descripción a un vídeo terminado elimina ese cuello de botella.' },
        { h: 'De la oferta al anuncio publicado', p: 'Describe el producto en el estudio Anuncio en vídeo corto o Testimonio de creador, revisa el storyboard, y exporta un vídeo vertical listo para publicar — luego prográmalo en TikTok, Instagram o YouTube.' },
      ],
      bulletsHeading: 'Encaja bien para:',
      bullets: [
        'negocios de servicios locales (peluquerías, gimnasios, contratistas, clínicas)',
        'tiendas de ecommerce y DTC que prueban nuevos ángulos de producto',
        'creadores de apps y software que necesitan creatividad para App Store o Play Store',
        'cualquiera que tenga una oferta pero no presupuesto de producción de vídeo',
      ],
      faqs: [
        { q: '¿Necesito software de edición?', a: 'No — el vídeo se genera, revisa y exporta dentro de la app.' },
        { q: '¿Puedo publicar directamente en las cuentas de mi negocio?', a: 'Sí — conecta TikTok, Instagram o YouTube, o usa el flujo asistido.' },
      ],
      cta: 'Genera tu primer anuncio',
    },
    'photo-to-video': {
      slug: 'foto-a-video-ia',
      h1: 'Foto a vídeo con IA — anima una sola foto',
      metaTitle: 'Foto a vídeo con IA — Viral Factory',
      metaDescription: 'Convierte una foto en una escena de vídeo — aparece en contenido generado, o anima una foto de producto, sin grabar nada.',
      intro: 'La IA de foto a vídeo toma una sola imagen fija y la pone en movimiento — animando la propia foto, o colocando a la persona o el producto de esa foto dentro de una escena recién generada.',
      sections: [
        { h: 'Dos formas distintas de animar una foto', p: 'Cameo toma una foto de tu rostro y te coloca dentro de una escena generada. Insertar en tu vídeo toma un clip que ya tienes y sustituye en él un rostro, producto u objeto.' },
        { h: 'El consentimiento y los derechos primero', p: 'Ambas funciones te piden confirmar que tienes derecho a usar la foto, y Cameo exige confirmar que eres tú o alguien que ha dado su consentimiento.' },
      ],
      bulletsHeading: 'Usa foto a vídeo cuando quieras:',
      bullets: [
        'aparecer en un vídeo sin grabarte a ti mismo',
        'actualizar un clip antiguo con un rostro o producto nuevo, sin volver a grabar',
        'poner en movimiento una sola foto de producto para un anuncio o publicación',
        'producir un lote de contenido a partir de fotos que ya tienes a mano',
      ],
      faqs: [
        { q: '¿De quién puede ser la foto que use?', a: 'Solo la tuya, o la de otra persona con su consentimiento explícito.' },
        { q: '¿Funciona con productos, no solo con personas?', a: 'Sí — Insertar en tu vídeo puede sustituir un producto u objeto en un clip existente.' },
      ],
      cta: 'Anima una foto',
    },
    'ai-carousel': {
      slug: 'generador-carrusel-ia',
      h1: 'Generador de carruseles y presentaciones con IA para Instagram y TikTok',
      metaTitle: 'Generador de carrusel con IA — Viral Factory',
      metaDescription: 'Convierte una idea en un carrusel de varias slides — gancho, imágenes, descripción y hashtags — al formato de Instagram y TikTok.',
      intro: 'Las publicaciones deslizables consiguen sistemáticamente más tiempo en pantalla que una sola imagen plana, porque el algoritmo recompensa los segundos que un espectador pasa deslizando entre slides.',
      sections: [
        { h: 'Por qué los carruseles superan a una sola imagen', p: 'Un carrusel impone una estructura — una slide de gancho, un desarrollo, un desenlace — que una sola imagen no puede sostener, y cada deslizamiento mejora cómo se posiciona la publicación.' },
        { h: 'Cómo construye uno el estudio Publicación deslizable', p: 'Describe la historia, el producto o la oferta en un prompt; el estudio redacta la secuencia de slides, genera cada imagen en un estilo coherente, y escribe una descripción con hashtags.' },
      ],
      bulletsHeading: 'Los carruseles funcionan bien para:',
      bullets: [
        'historias de antes/después y transformación',
        'listas («5 señales de que necesitas…»)',
        'lanzamientos de producto y desgloses de funciones',
        'contenido de marca personal y de fundador',
      ],
      faqs: [
        { q: '¿Puedo controlar cuántas slides genera?', a: 'El estudio elige por defecto un número adecuado para tu historia, ajustable antes de generar.' },
        { q: '¿Las imágenes se mantienen coherentes entre slides?', a: 'Sí — se mantiene un estilo visual coherente en toda la secuencia.' },
      ],
      cta: 'Crear un carrusel',
    },
    'tiktok-hooks': {
      slug: 'generador-ideas-hook-tiktok',
      h1: 'Generador de ideas de ganchos para TikTok — 10 ganchos nuevos cada día',
      metaTitle: 'Generador de ideas de ganchos para TikTok — Viral Factory',
      metaDescription: 'Nunca te quedes sin ganchos. Diez ideas nuevas cada mañana, cada una lista para convertirse en una publicación terminada.',
      intro: 'El gancho decide si alguien ve el resto. Quedarse sin ganchos es la razón más común por la que creadores y pequeñas marcas dejan de publicar de forma constante.',
      sections: [
        { h: 'Qué hace que un gancho funcione', p: 'Un gancho eficaz crea, en el primer segundo, un vacío de curiosidad específico. Los ganchos genéricos pierden el desplazamiento; los específicos lo retienen.' },
        { h: 'Diez ganchos y formatos, cada mañana', p: 'Abre la app y encuentra diez ganchos nuevos y diez formatos cada día. Tocar uno rellena el brief de un estudio ya medio escrito.' },
      ],
      bulletsHeading: 'Pensado para cualquiera que:',
      bullets: [
        'se haya quedado sin ideas tras semanas de publicación diaria',
        'gestione contenido para más de una cuenta o marca',
        'quiera un proceso repetible en lugar de un prompt en blanco cada mañana',
        'esté probando qué estilo de gancho funciona mejor con su audiencia',
      ],
      faqs: [
        { q: '¿Se repiten los ganchos?', a: 'Se renuevan a diario, así que obtienes un conjunto nuevo cada mañana.' },
        { q: '¿Puedo editar un gancho antes de generar a partir de él?', a: 'Sí — tocar un gancho rellena el brief inicial, editable antes de generar.' },
      ],
      cta: 'Ver los ganchos de hoy',
    },
    'ai-character-video': {
      slug: 'video-personaje-ia',
      h1: 'Vídeo de personaje con IA — una identidad coherente, en cada vídeo',
      metaTitle: 'Vídeo de personaje con IA — Viral Factory',
      metaDescription: 'Diseña una vez el rostro y la voz de una identidad de IA, y reutilízala en cada vídeo futuro.',
      intro: 'Un rostro recurrente genera reconocimiento como lo haría un creador real — pero volver a diseñar un nuevo rostro para cada vídeo anula ese propósito. El vídeo de personaje con IA fija una vez el aspecto y la voz de una identidad.',
      sections: [
        { h: 'Por qué la coherencia importa más que la novedad', p: 'Una audiencia que ve un rostro distinto en cada vídeo nunca genera familiaridad con ninguno de ellos.' },
        { h: 'Cómo funciona el estudio de Personaje', p: 'Diseña una identidad una vez — aspecto, voz, estilo general — y queda guardada como reutilizable. Cada vídeo futuro puede usar esa misma identidad si lo pides.' },
      ],
      bulletsHeading: 'Encaja bien para:',
      bullets: [
        'marcas sin rostro que quieren un personaje sin contratar a un presentador',
        'contenido en serie donde la coherencia importa más que la novedad',
        'agencias que usan un presentador reconocible en varias variantes de anuncio',
        'cualquiera que construya una «cara» recurrente para una marca personal',
      ],
      faqs: [
        { q: '¿Puedo tener más de un personaje?', a: 'Sí — crea tantas identidades como necesites para diferentes marcas o campañas.' },
        { q: '¿Puedo usar mi propio rostro en lugar de uno generado?', a: 'Sí — consulta Cameo, diseñado para colocar un rostro real y consentido en escenas generadas.' },
      ],
      cta: 'Diseñar un personaje',
    },
  },
  it: {
    'faceless-video': {
      slug: 'generatore-di-video-senza-volto',
      h1: 'Generatore di video senza volto per TikTok e Instagram',
      metaTitle: 'Generatore di video senza volto — Viral Factory',
      metaDescription: 'Crea video brevi senza volto da un prompt di testo — senza fotocamera, senza volto, senza troupe. Prova il generatore in Viral Factory per iOS.',
      intro: "Un generatore di video senza volto trasforma uno script o un'idea in un video breve finito senza mai mettere una persona davanti alla telecamera. I contenuti senza volto sono diventati uno dei formati più affidabili su TikTok e Instagram Reels.",
      sections: [
        { h: 'Perché il video senza volto funziona', p: "I video senza volto si basano su immagini forti, testo a schermo, voce narrante e ritmo invece che sul volto di un presentatore. Sono più rapidi da produrre e permettono di pubblicare ogni giorno senza mai comparire in camera." },
        { h: 'Come li genera Viral Factory', p: "Due studi sono pensati per questo: Video ad breve trasforma un prodotto in un video ad verticale sceneggiato e pronto da pubblicare; Cortometraggio cinematico costruisce un video di scena senza narratore. Entrambi generano script, inquadrature e render finale da un prompt." },
      ],
      bulletsHeading: 'Il video senza volto fa per te se:',
      bullets: [
        'vuoi pubblicare ogni giorno senza ingaggiare un presentatore o allestire una telecamera',
        'gestisci un account brand dove il protagonista deve essere il prodotto, non una persona',
        'devi adattare rapidamente la stessa idea con un nuovo angolo',
        'stai testando molti hook prima di investire in un girato prodotto',
      ],
      faqs: [
        { q: 'Serve esperienza di ripresa?', a: "No — ti basta un'idea scritta o una descrizione del prodotto. Viral Factory scrive lo script e genera ogni inquadratura." },
        { q: 'Posso aggiungere mie riprese di prodotto invece di un video interamente generato?', a: 'Sì — abbina un video senza volto generato alla tua registrazione dello schermo con la funzione Inserisci nel tuo video.' },
      ],
      cta: 'Prova la generazione di video senza volto',
    },
    'faceless-reels': {
      slug: 'creare-reel-senza-volto',
      h1: "Creare Reel senza volto per un'abitudine di pubblicazione quotidiana",
      metaTitle: 'Creare Reel senza volto — Viral Factory',
      metaDescription: 'Genera ogni giorno Reel Instagram e TikTok senza volto, con dieci nuove idee di hook ogni mattina. Senza fotocamera, senza software di montaggio.',
      intro: "Un generatore di Reel senza volto crea l'intero clip — script, inquadrature, ritmo — senza che tu o chiunque altro compaia in camera. Viral Factory abbina il generatore a un rifornimento quotidiano di hook.",
      sections: [
        { h: 'Cosa fa funzionare un Reel senza volto', p: "Un buon Reel si apre con un hook nel primo secondo, mantiene il ritmo con tagli e testo a schermo, e mantiene la promessa con cui si è aperto. Uno scenario cinematico o un prodotto in movimento regge un Reel da solo." },
        { h: 'Da un hook quotidiano a un Reel finito', p: "Ogni mattina l'app propone dieci nuovi hook e dieci formati; toccarne uno precompila un progetto già mezzo scritto, per passare dall'idea a uno storyboard verificabile in un paio di tocchi." },
      ],
      bulletsHeading: 'Pensato per creator e brand che:',
      bullets: [
        'vogliono pubblicare un Reel ogni giorno senza restare a corto di idee',
        "non vogliono legare il proprio volto — o quello di chiunque — all'account",
        'gestiscono più di un account e hanno bisogno di un processo ripetibile',
        'vogliono controllare uno storyboard prima di procedere al render completo',
      ],
      faqs: [
        { q: 'Quanti Reel posso creare in un giorno?', a: "Non c'è un limite fisso — dipende dal tuo saldo crediti, rinnovato con un abbonamento o ricaricato con pacchetti." },
        { q: 'Devo scrivere io lo script?', a: "No — descrivi l'idea o tocca un hook del giorno, e l'app scrive lo script come parte dello storyboard." },
      ],
      cta: 'Avvia un Reel senza volto',
    },
    'ugc-ads': {
      slug: 'generatore-annunci-ugc-ia',
      h1: 'Generatore di annunci UGC con IA — annunci in stile creator senza creator',
      metaTitle: 'Generatore di annunci UGC con IA — Viral Factory',
      metaDescription: 'Genera annunci UGC in stile creator, volto in camera, per il tuo prodotto — senza ingaggiare un creator, senza fotocamera, senza girato.',
      intro: 'Gli annunci in stile UGC superano costantemente le creatività pubblicitarie curate perché si leggono come contenuto organico. Ingaggiare creator reali per ogni angolo è lento e costoso; un generatore di annunci UGC con IA offre lo stesso formato su richiesta.',
      sections: [
        { h: 'Perché gli annunci in stile UGC convertono', p: 'Gli spettatori scorrono oltre tutto ciò che sembra un annuncio tradizionale, ma una clip tenuta in mano, volto in camera, guadagna un secondo di attenzione prima che il cervello la classifichi come marketing.' },
        { h: 'Come funziona lo studio Testimonianza creator', p: "Dagli il tuo prodotto e l'angolo desiderato; scrive uno script naturale, con la voce di un creator, e genera un video volto in camera. Abbinalo a Personaggio IA per un presentatore coerente." },
      ],
      bulletsHeading: 'Usalo quando devi:',
      bullets: [
        'testare diversi angoli pubblicitari prima di ingaggiare un creator reale',
        'colmare un vuoto di testimonianze prima che esista UGC reale dei clienti',
        'produrre creatività per il social a pagamento che si legga come contenuto organico',
        'mantenere un presentatore coerente su una serie di varianti di annuncio',
      ],
      faqs: [
        { q: 'Questo sostituisce le testimonianze reali dei clienti?', a: 'Colma il vuoto prima di averle e permette di testare script velocemente — niente sostituisce un cliente reale.' },
        { q: 'Posso scegliere il presentatore?', a: 'Sì — scegli uno stile per un annuncio singolo, oppure crea una volta un personaggio con Personaggio IA e riusalo.' },
      ],
      cta: 'Genera un annuncio in stile UGC',
    },
    'small-biz-ads': {
      slug: 'generatore-video-pubblicitari-ia-piccole-imprese',
      h1: 'Generatore di video pubblicitari IA per piccole imprese',
      metaTitle: 'Generatore di video pubblicitari IA per piccole imprese — Viral Factory',
      metaDescription: 'Genera video ad brevi per la tua piccola impresa da una descrizione testuale — senza agenzia, senza girato, senza montatore.',
      intro: "La maggior parte delle piccole imprese non può giustificare un'agenzia né un girato prodotto per ogni offerta da testare. Un generatore di video pubblicitari con IA elimina il costo di produzione dall'equazione.",
      sections: [
        { h: "Ciò di cui una piccola impresa ha davvero bisogno", p: "Velocità e volume contano più di un singolo annuncio perfetto: le attività che vincono su TikTok e Reels testano cinque angoli a settimana. Un generatore che va da una descrizione a un video finito elimina questo collo di bottiglia." },
        { h: "Dall'offerta all'annuncio pubblicato", p: "Descrivi il prodotto nello studio Video ad breve o Testimonianza creator, controlla lo storyboard proposto, ed esporta un video verticale pronto da pubblicare — poi pianificalo su TikTok, Instagram o YouTube." },
      ],
      bulletsHeading: 'Adatto a:',
      bullets: [
        'attività di servizi locali (saloni, palestre, artigiani, studi medici)',
        'negozi ecommerce e DTC che testano nuovi angoli di prodotto',
        'sviluppatori di app e software che necessitano di creatività per App Store o Play Store',
        'chiunque abbia un\'offerta ma non un budget di produzione video',
      ],
      faqs: [
        { q: 'Serve un software di montaggio?', a: "No — il video viene generato, controllato ed esportato dentro l'app." },
        { q: 'Posso pubblicare direttamente sugli account della mia attività?', a: 'Sì — collega TikTok, Instagram o YouTube, oppure usa il flusso assistito.' },
      ],
      cta: 'Genera il tuo primo annuncio',
    },
    'photo-to-video': {
      slug: 'foto-in-video-ia',
      h1: 'Foto in video con IA — anima una singola foto',
      metaTitle: 'Foto in video con IA — Viral Factory',
      metaDescription: 'Trasforma una foto in una scena video — compari in contenuti generati, o anima una foto prodotto, senza girare nulla.',
      intro: "La IA foto-in-video prende una singola immagine statica e la mette in movimento — animando la foto stessa, oppure inserendo la persona o il prodotto di quella foto in una scena appena generata.",
      sections: [
        { h: 'Due modi diversi di animare una foto', p: "Cameo prende una foto del tuo volto e ti inserisce in una scena generata. Inserisci nel tuo video prende una clip che hai già e vi sostituisce un volto, un prodotto o un oggetto." },
        { h: 'Consenso e diritti prima di tutto', p: "Entrambe le funzioni chiedono di confermare di avere il diritto di usare la foto, e Cameo richiede di confermare che si tratti di te o di qualcuno che ha dato il consenso." },
      ],
      bulletsHeading: 'Usa foto-in-video quando vuoi:',
      bullets: [
        'comparire in un video senza filmarti da solo',
        'aggiornare una vecchia clip con un nuovo volto o prodotto, senza girare di nuovo',
        'mettere in movimento una singola foto prodotto per un annuncio o un post',
        'produrre un lotto di contenuti da foto che hai già a disposizione',
      ],
      faqs: [
        { q: 'Di chi può essere la foto che uso?', a: "Solo la tua, o quella di un'altra persona con il suo consenso esplicito." },
        { q: 'Funziona anche con i prodotti, non solo con le persone?', a: 'Sì — Inserisci nel tuo video può sostituire un prodotto o un oggetto in una clip esistente.' },
      ],
      cta: 'Anima una foto',
    },
    'ai-carousel': {
      slug: 'generatore-di-caroselli-ia',
      h1: 'Generatore di caroselli e slideshow con IA per Instagram e TikTok',
      metaTitle: 'Generatore di caroselli con IA — Viral Factory',
      metaDescription: "Trasforma un'idea in un carosello multi-slide — hook, immagini, didascalia e hashtag — nel formato di Instagram e TikTok.",
      intro: "I post a scorrimento ottengono costantemente più tempo a schermo di una singola immagine piatta, perché l'algoritmo premia i secondi che uno spettatore passa scorrendo le slide.",
      sections: [
        { h: 'Perché i caroselli battono una singola immagine', p: "Un carosello impone una struttura — una slide di hook, uno sviluppo, una risoluzione — che una singola immagine non può reggere, e ogni scorrimento migliora il posizionamento del post." },
        { h: 'Come lo costruisce lo studio Post a scorrimento', p: "Descrivi la storia, il prodotto o l'offerta in un prompt; lo studio elabora la sequenza di slide, genera ogni immagine in uno stile coerente, e scrive una didascalia con hashtag." },
      ],
      bulletsHeading: 'I caroselli funzionano bene per:',
      bullets: [
        'storie prima/dopo e di trasformazione',
        'listicle («5 segnali che devi…»)',
        'lanci di prodotto e panoramiche di funzionalità',
        'contenuti di personal brand e founder',
      ],
      faqs: [
        { q: 'Posso controllare quante slide genera?', a: 'Lo studio sceglie di default un numero adatto alla tua storia, modificabile prima di generare.' },
        { q: 'Le immagini restano coerenti tra le slide?', a: "Sì — viene mantenuto uno stile visivo coerente lungo tutta la sequenza." },
      ],
      cta: 'Crea un carosello',
    },
    'tiktok-hooks': {
      slug: 'generatore-idee-hook-tiktok',
      h1: 'Generatore di idee hook per TikTok — 10 hook nuovi ogni giorno',
      metaTitle: 'Generatore di idee hook per TikTok — Viral Factory',
      metaDescription: 'Non restare mai senza hook. Dieci nuove idee ogni mattina, ciascuna pronta a diventare un post finito.',
      intro: "L'hook decide se qualcuno guarderà il resto. Restare senza hook è il motivo più comune per cui creator e piccoli brand smettono di pubblicare con costanza.",
      sections: [
        { h: 'Cosa fa funzionare un hook', p: "Un hook efficace crea, nel primo secondo, un vuoto di curiosità specifico. Gli hook generici perdono lo scroll; quelli specifici lo trattengono." },
        { h: 'Dieci hook e formati, ogni mattina', p: "Apri l'app e trova dieci nuovi hook e dieci formati ogni giorno. Toccarne uno precompila il brief di uno studio già mezzo scritto." },
      ],
      bulletsHeading: 'Pensato per chiunque:',
      bullets: [
        'sia rimasto senza idee dopo settimane di pubblicazione quotidiana',
        'gestisca contenuti per più di un account o brand',
        'voglia un processo ripetibile invece di un prompt vuoto ogni mattina',
        'stia testando quale stile di hook funziona meglio con il proprio pubblico',
      ],
      faqs: [
        { q: 'Gli hook si ripetono?', a: 'Vengono rinnovati ogni giorno, quindi ottieni un set nuovo ogni mattina.' },
        { q: 'Posso modificare un hook prima di generare da esso?', a: 'Sì — toccare un hook precompila il brief iniziale, modificabile prima di generare.' },
      ],
      cta: 'Guarda gli hook di oggi',
    },
    'ai-character-video': {
      slug: 'video-personaggio-ia',
      h1: "Video di personaggio IA — un'identità coerente, in ogni video",
      metaTitle: 'Video di personaggio IA — Viral Factory',
      metaDescription: "Crea una volta il volto e la voce di un'identità IA, poi riusala in ogni video futuro.",
      intro: "Un volto ricorrente costruisce riconoscibilità come farebbe un vero creator — ma ricreare un nuovo volto per ogni video vanifica questo scopo. Il video di personaggio IA fissa una volta per tutte aspetto e voce di un'identità.",
      sections: [
        { h: 'Perché la coerenza conta più della novità', p: "Un pubblico che vede un volto diverso in ogni video non costruisce familiarità con nessuno di essi." },
        { h: 'Come funziona lo studio Personaggio', p: "Crea un'identità una volta — aspetto, voce, stile generale — e viene salvata come riutilizzabile. Ogni video futuro può usare la stessa identità su richiesta." },
      ],
      bulletsHeading: 'Adatto a:',
      bullets: [
        'brand senza volto che vogliono un personaggio senza ingaggiare un presentatore',
        'contenuti in serie dove la coerenza conta più della novità',
        'agenzie che usano un presentatore riconoscibile su più varianti di annuncio',
        "chiunque stia costruendo un «volto» ricorrente per un brand personale",
      ],
      faqs: [
        { q: 'Posso avere più di un personaggio?', a: "Sì — crea tutte le identità che ti servono per brand o campagne diverse." },
        { q: 'Posso usare il mio volto invece di uno generato?', a: 'Sì — vedi Cameo, pensato per inserire un volto reale e consenziente in scene generate.' },
      ],
      cta: 'Crea un personaggio',
    },
  },
};

/**
 * In-body link from every guide page to the money page (the locale's home
 * page), with the locale's money keyword as the anchor (see seo/keywords.md).
 */
export const keywordHomeLink: Record<KeywordLocale, { before: string; anchor: string; after: string }> = {
  en: { before: 'Part of Viral Factory, the ', anchor: 'AI video maker app for iPhone', after: ' that turns one idea into ready-to-post reels, ads and carousels.' },
  de: { before: 'Teil von Viral Factory, der ', anchor: 'KI-Video-App fürs iPhone', after: ', die aus einer Idee postfertige Reels, Ads und Karussells macht.' },
  fr: { before: "Fait partie de Viral Factory, l'", anchor: 'application vidéo IA pour iPhone', after: ' qui transforme une idée en Reels, pubs et carrousels prêts à publier.' },
  es: { before: 'Forma parte de Viral Factory, la ', anchor: 'app para hacer vídeos con IA en iPhone', after: ' que convierte una idea en Reels, anuncios y carruseles listos para publicar.' },
  it: { before: "Fa parte di Viral Factory, l'", anchor: 'app per creare video con IA su iPhone', after: " che trasforma un'idea in Reel, annunci e caroselli pronti da pubblicare." },
};

/** Footer "Guides" column: locale's keyword pages, or null if untranslated. */
export function footerKeywordLinks(lang: Locale): { href: string; label: string }[] | null {
  const loc = lang as KeywordLocale;
  const pack = keywordPages[loc];
  if (!pack) return null;
  return KEYWORD_TOPICS.map((t) => ({ href: lp(lang, `/${pack[t].slug}`), label: pack[t].h1 }));
}

/** hreflang cluster for one keyword topic, across only the locales that have it. */
export function keywordAlternates(topic: KeywordTopicId): { lang: Locale; href: string }[] {
  return (Object.keys(keywordPages) as KeywordLocale[]).map((loc) => ({
    lang: loc as Locale,
    href: lp(loc as Locale, `/${keywordPages[loc][topic].slug}`),
  }));
}
