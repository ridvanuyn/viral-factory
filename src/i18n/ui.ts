/**
 * UI translation dictionary for the marketing chrome and the home page.
 * Every active locale (see ACTIVE_LOCALES in src/config/site.ts) ships full
 * copy here. Adding a language later means: add its code to LOCALES + a
 * Dict block here + a LegalPack in src/i18n/legal.ts.
 */
import type { Locale } from '../config/site';

export interface NamedItem {
  name: string;
  description: string;
}

export interface Dict {
  nav: { features: string; support: string };
  cta: { getApp: string };
  lang: string;
  faqHeading: string;
  home: {
    metaTitle: string;
    metaDescription: string;
    heroKicker: string;
    heroTitleA: string;
    heroTitleAccent: string;
    heroSub: string;
    trust: string;
    featuresH: string;
    featuresSub: string;
    features: NamedItem[];
    workflowH: string;
    workflowSub: string;
    workflow: NamedItem[];
    howTitle: string;
    howSub: string;
    steps: string[];
    finalH: string;
    finalSub: string;
  };
  faqHome: { q: string; a: string }[];
  footer: {
    tagline: string;
    legal: string;
    guides: string;
    privacy: string;
    terms: string;
    support: string;
    deleteAccount: string;
    rights: string;
  };
}

export const ui: Record<Locale, Dict> = {
  en: {
    nav: { features: 'Features', support: 'Support' },
    cta: { getApp: 'Get the app' },
    lang: 'Language',
    faqHeading: 'Frequently asked questions',
    home: {
      metaTitle: 'Viral Factory — AI short-form content studio for iOS',
      metaDescription:
        'Turn a prompt, a photo, or a reel you liked into ready-to-post short-form video and carousels for TikTok, Instagram and YouTube. Free to download on iOS.',
      heroKicker: 'An AI content studio for creators and small brands',
      heroTitleA: 'Faceless reels, UGC ads and swipe carousels —',
      heroTitleAccent: 'from one idea.',
      heroSub:
        'Viral Factory turns a prompt, a photo, or a reel you liked into ready-to-post short-form video and carousels for TikTok, Instagram and YouTube — no camera, no crew, no editing software.',
      trust: 'iOS · 11 languages · post straight to TikTok, Instagram and YouTube',
      featuresH: 'Eight ways to start',
      featuresSub: 'Every studio follows the same simple flow: describe it, review it, post it.',
      features: [
        { name: 'Remake a hit', description: 'Paste a reel you love and rebuild it shot-for-shot, with your product in the lead role.' },
        { name: 'Short video ad', description: 'Turn a product or offer into a scripted, ready-to-post vertical video ad.' },
        { name: 'Creator testimonial', description: 'Get a talking-head, UGC-style testimonial for your product — no creator to book, no camera to hold.' },
        { name: 'Swipe post', description: 'One idea becomes a full multi-slide carousel — hook, images, caption and hashtags.' },
        { name: 'Cinematic short', description: 'A narrator-free, cinematic scenario video built from a single description.' },
        { name: 'Swap into your video', description: 'Already have a clip? Swap in a different face, product or object without reshooting.' },
        { name: 'AI character', description: "Design one persona's face and voice once, then reuse it across every future video." },
        { name: 'Cameo', description: 'Upload one photo of yourself and step inside a generated scene.' },
      ],
      workflowH: 'Built for a daily posting habit',
      workflowSub: 'The parts that make it easy to actually keep up.',
      workflow: [
        { name: '10 fresh hooks a day', description: 'Open the app to ten new hooks and ten formats every morning — tap one to start a project already halfway written.' },
        { name: 'Review before it renders', description: "Approve, edit or regenerate every scene's image before it becomes video, so nothing surprising reaches the final cut." },
        { name: 'Post everywhere', description: "Schedule a finished post to TikTok, Instagram and YouTube, or get a tap-to-post assist when a platform doesn't allow direct publishing." },
      ],
      howTitle: 'From idea to export, in three steps',
      howSub: 'The same flow behind every studio.',
      steps: [
        "Describe what you're making, or tap one of today's ready-made hooks.",
        'Review the storyboard and generated scenes — edit or regenerate anything before it becomes video.',
        'Export a ready-to-post file, or schedule it straight to TikTok, Instagram or YouTube.',
      ],
      finalH: "Make today's post in the next five minutes.",
      finalSub: 'Free to download. Generating content uses credits — subscribe for a monthly allowance or buy credits as you go.',
    },
    faqHome: [
      { q: 'What is Viral Factory?', a: 'Viral Factory is an iOS app that turns a prompt, a photo, or a reel link into ready-to-post short-form content — faceless reels, UGC-style ads, swipe carousels, cinematic shorts, a consistent AI character, and face-in-scene cameos.' },
      { q: 'Is Viral Factory free?', a: 'The app is free to download. Generating content uses credits: subscriptions include a monthly credit allowance, and you can also buy credit packs separately. Exact costs are shown in the app before you generate.' },
      { q: 'Do I need to show my face?', a: 'No — most studios (short video ads, swipe posts, cinematic shorts) never need a face at all. If you do want to appear, Cameo and the AI character studio are built for that, starting from a single reference photo you control.' },
      { q: 'Can I really remake a reel I saw somewhere else?', a: 'Yes — paste a link or upload a screen recording and Viral Factory rebuilds the structure, pacing and hook with your own product or message in place of the original.' },
      { q: 'Can I post directly to TikTok, Instagram and YouTube?', a: "Yes — connect an account to schedule and publish automatically where the platform allows it, or use the built-in assisted flow: the app prepares the caption and media and hands off to the platform's own app when a direct API isn't available." },
      { q: 'What languages does the app support?', a: 'English, German, French, Spanish, Italian, Portuguese, Turkish, Japanese, Korean, Arabic and Hindi.' },
    ],
    footer: {
      tagline: 'AI-generated short-form content for TikTok, Instagram and YouTube.',
      legal: 'Legal',
      guides: 'Guides',
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      deleteAccount: 'Delete account',
      rights: 'All rights reserved.',
    },
  },
  de: {
    nav: { features: 'Funktionen', support: 'Support' },
    cta: { getApp: 'App laden' },
    lang: 'Sprache',
    faqHeading: 'Häufig gestellte Fragen',
    home: {
      metaTitle: 'Viral Factory — KI-Studio für Kurzvideos auf iOS',
      metaDescription:
        'Aus einem Prompt, einem Foto oder einem Reel, das dir gefallen hat, wird fertiger Kurzvideo- und Karussell-Content für TikTok, Instagram und YouTube. Kostenlos für iOS.',
      heroKicker: 'Ein KI-Content-Studio für Creator und kleine Marken',
      heroTitleA: 'Gesichtslose Reels, UGC-Ads und Swipe-Karussells —',
      heroTitleAccent: 'aus einer Idee.',
      heroSub:
        'Viral Factory macht aus einem Prompt, einem Foto oder einem Reel, das dir gefallen hat, fertigen Kurzvideo- und Karussell-Content für TikTok, Instagram und YouTube — ohne Kamera, ohne Team, ohne Schnittprogramm.',
      trust: 'iOS · 11 Sprachen · direktes Posten auf TikTok, Instagram und YouTube',
      featuresH: 'Acht Wege, loszulegen',
      featuresSub: 'Jedes Studio folgt demselben einfachen Ablauf: beschreiben, prüfen, posten.',
      features: [
        { name: 'Hit nachbauen', description: 'Reel einfügen, das dir gefällt — Viral Factory baut es Szene für Szene nach, mit deinem Produkt in der Hauptrolle.' },
        { name: 'Kurzer Video-Ad', description: 'Aus Produkt oder Angebot wird ein fertig geschriebener, postfertiger vertikaler Video-Ad.' },
        { name: 'Creator-Testimonial', description: 'Ein UGC-Testimonial im Talking-Head-Stil für dein Produkt — kein Creator zu buchen, keine Kamera in der Hand.' },
        { name: 'Swipe-Post', description: 'Aus einer Idee wird ein mehrteiliges Karussell — Hook, Bilder, Caption und Hashtags.' },
        { name: 'Cinematic Short', description: 'Ein filmisches Szenario-Video ohne Erzählstimme, aus einer einzigen Beschreibung.' },
        { name: 'In dein Video einsetzen', description: 'Schon einen Clip? Gesicht, Produkt oder Objekt austauschen, ohne neu zu drehen.' },
        { name: 'KI-Charakter', description: 'Gesicht und Stimme einer Figur einmal anlegen, dann in jedem weiteren Video wiederverwenden.' },
        { name: 'Cameo', description: 'Ein Foto von dir hochladen und in einer generierten Szene erscheinen.' },
      ],
      workflowH: 'Gemacht für den täglichen Posting-Rhythmus',
      workflowSub: 'Die Bausteine, die das Dranbleiben leicht machen.',
      workflow: [
        { name: '10 frische Hooks pro Tag', description: 'Jeden Morgen zehn neue Hooks und zehn Formate in der App — eins antippen und ein halbfertiges Projekt startet direkt.' },
        { name: 'Prüfen vor dem Rendern', description: 'Jedes Szenenbild freigeben, bearbeiten oder neu generieren, bevor daraus ein Video wird — keine Überraschungen im fertigen Clip.' },
        { name: 'Überall posten', description: 'Fertigen Post für TikTok, Instagram und YouTube planen, oder per Ein-Tipp-Assistent posten, wenn eine Plattform keine direkte Veröffentlichung erlaubt.' },
      ],
      howTitle: 'Von der Idee zum Export in drei Schritten',
      howSub: 'Derselbe Ablauf hinter jedem Studio.',
      steps: [
        'Beschreibe, was du machen willst, oder tippe einen der heutigen Hooks an.',
        'Storyboard und generierte Szenen prüfen — alles bearbeiten oder neu generieren, bevor es zum Video wird.',
        'Postfertige Datei exportieren oder direkt für TikTok, Instagram oder YouTube einplanen.',
      ],
      finalH: 'Den heutigen Post in den nächsten fünf Minuten fertigstellen.',
      finalSub: 'Kostenlos zum Download. Das Erstellen von Inhalten verbraucht Credits — Abo mit monatlichem Guthaben oder Credits einzeln dazukaufen.',
    },
    faqHome: [
      { q: 'Was ist Viral Factory?', a: 'Viral Factory ist eine iOS-App, die aus einem Prompt, einem Foto oder einem Reel-Link fertigen Kurzform-Content macht — gesichtslose Reels, UGC-Ads, Swipe-Karussells, Cinematic Shorts, einen durchgängigen KI-Charakter und Cameo-Auftritte mit echtem Gesicht.' },
      { q: 'Ist Viral Factory kostenlos?', a: 'Die App ist kostenlos im Download. Das Erstellen von Inhalten verbraucht Credits: Abos enthalten ein monatliches Guthaben, zusätzlich lassen sich Credit-Pakete einzeln kaufen. Die genauen Kosten zeigt die App vor jeder Generierung.' },
      { q: 'Muss ich mein Gesicht zeigen?', a: 'Nein — die meisten Studios (Video-Ads, Swipe-Posts, Cinematic Shorts) brauchen überhaupt kein Gesicht. Wer auftreten möchte, nutzt Cameo oder den KI-Charakter, ausgehend von einem selbst gewählten Referenzfoto.' },
      { q: 'Kann ich wirklich ein Reel nachbauen, das ich woanders gesehen habe?', a: 'Ja — Link einfügen oder Bildschirmaufnahme hochladen, und Viral Factory baut Struktur, Timing und Hook nach, mit deinem eigenen Produkt oder deiner Botschaft anstelle des Originals.' },
      { q: 'Kann ich direkt auf TikTok, Instagram und YouTube posten?', a: 'Ja — ein Konto verbinden, um automatisch zu planen und zu veröffentlichen, wo die Plattform das erlaubt, oder den integrierten Assistenten nutzen: Die App bereitet Caption und Medien vor und übergibt an die jeweilige Plattform-App, wenn keine direkte API verfügbar ist.' },
      { q: 'Welche Sprachen unterstützt die App?', a: 'Englisch, Deutsch, Französisch, Spanisch, Italienisch, Portugiesisch, Türkisch, Japanisch, Koreanisch, Arabisch und Hindi.' },
    ],
    footer: {
      tagline: 'KI-generierter Kurzform-Content für TikTok, Instagram und YouTube.',
      legal: 'Rechtliches',
      guides: 'Guides',
      privacy: 'Datenschutz',
      terms: 'AGB',
      support: 'Support',
      deleteAccount: 'Konto löschen',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  fr: {
    nav: { features: 'Fonctionnalités', support: 'Assistance' },
    cta: { getApp: "Obtenir l'app" },
    lang: 'Langue',
    faqHeading: 'Questions fréquentes',
    home: {
      metaTitle: 'Viral Factory — studio IA de contenu court pour iOS',
      metaDescription:
        "Transformez un prompt, une photo ou un reel que vous avez aimé en vidéos courtes et carrousels prêts à publier sur TikTok, Instagram et YouTube. Gratuit sur iOS.",
      heroKicker: 'Un studio de contenu IA pour créateurs et petites marques',
      heroTitleA: 'Reels sans visage, pubs UGC et carrousels —',
      heroTitleAccent: "à partir d'une seule idée.",
      heroSub:
        "Viral Factory transforme un prompt, une photo ou un reel que vous avez aimé en vidéos courtes et carrousels prêts à publier pour TikTok, Instagram et YouTube — sans caméra, sans équipe, sans logiciel de montage.",
      trust: 'iOS · 11 langues · publication directe sur TikTok, Instagram et YouTube',
      featuresH: 'Huit façons de commencer',
      featuresSub: 'Chaque studio suit le même principe simple : décrire, vérifier, publier.',
      features: [
        { name: 'Reproduire un carton', description: 'Collez un reel que vous aimez : Viral Factory le reconstruit plan par plan, avec votre produit au premier plan.' },
        { name: 'Pub vidéo courte', description: 'Un produit ou une offre devient une pub vidéo verticale scénarisée et prête à publier.' },
        { name: 'Témoignage créateur', description: 'Un témoignage façon UGC, visage face caméra, pour votre produit — sans créateur à réserver, sans caméra à tenir.' },
        { name: 'Post carrousel', description: 'Une idée devient un carrousel multi-slides complet — accroche, images, légende et hashtags.' },
        { name: 'Court-métrage cinématique', description: 'Une vidéo scénarisée et cinématographique, sans narrateur, à partir d’une simple description.' },
        { name: 'Intégrer dans votre vidéo', description: 'Vous avez déjà un clip ? Remplacez un visage, un produit ou un objet sans retourner la scène.' },
        { name: 'Personnage IA', description: 'Créez le visage et la voix d’un personnage une fois, puis réutilisez-le dans chaque vidéo suivante.' },
        { name: 'Cameo', description: 'Importez une photo de vous et apparaissez dans une scène générée.' },
      ],
      workflowH: 'Pensé pour publier chaque jour',
      workflowSub: 'Ce qui rend la régularité facile.',
      workflow: [
        { name: '10 accroches par jour', description: 'Chaque matin, dix nouvelles accroches et dix formats dans l’app — touchez-en une pour démarrer un projet déjà à moitié écrit.' },
        { name: 'Validation avant le rendu', description: 'Approuvez, modifiez ou régénérez l’image de chaque scène avant qu’elle ne devienne une vidéo, sans mauvaise surprise au montage final.' },
        { name: 'Publier partout', description: 'Planifiez un post terminé sur TikTok, Instagram et YouTube, ou utilisez l’assistant de publication en un geste quand une plateforme ne permet pas la publication directe.' },
      ],
      howTitle: "De l'idée à l'export, en trois étapes",
      howSub: 'Le même principe derrière chaque studio.',
      steps: [
        "Décrivez ce que vous voulez créer, ou touchez l'une des accroches du jour.",
        "Vérifiez le storyboard et les scènes générées — modifiez ou régénérez avant que ça ne devienne une vidéo.",
        'Exportez un fichier prêt à publier, ou planifiez-le directement sur TikTok, Instagram ou YouTube.',
      ],
      finalH: "Terminez le post du jour dans les cinq prochaines minutes.",
      finalSub: 'Téléchargement gratuit. Générer du contenu consomme des crédits — abonnez-vous pour un quota mensuel ou achetez des crédits à la demande.',
    },
    faqHome: [
      { q: 'Qu’est-ce que Viral Factory ?', a: "Viral Factory est une app iOS qui transforme un prompt, une photo ou un lien de reel en contenu court prêt à publier — reels sans visage, pubs façon UGC, carrousels, courts-métrages cinématiques, un personnage IA cohérent, et des cameos avec un vrai visage." },
      { q: 'Viral Factory est-elle gratuite ?', a: 'L’app est gratuite au téléchargement. Générer du contenu consomme des crédits : les abonnements incluent un quota mensuel, et des packs de crédits peuvent aussi être achetés séparément. Le coût exact est affiché dans l’app avant chaque génération.' },
      { q: 'Dois-je montrer mon visage ?', a: 'Non — la plupart des studios (pubs vidéo, posts carrousel, courts-métrages) ne nécessitent aucun visage. Pour apparaître, Cameo et le personnage IA partent d’une simple photo de référence que vous choisissez.' },
      { q: 'Puis-je vraiment reproduire un reel vu ailleurs ?', a: 'Oui — collez un lien ou importez un enregistrement d’écran, et Viral Factory reconstruit la structure, le rythme et l’accroche avec votre propre produit ou message à la place de l’original.' },
      { q: 'Puis-je publier directement sur TikTok, Instagram et YouTube ?', a: 'Oui — connectez un compte pour planifier et publier automatiquement là où la plateforme le permet, ou utilisez le flux assisté intégré : l’app prépare la légende et les médias puis transmet à l’app de la plateforme quand une API directe n’est pas disponible.' },
      { q: 'Quelles langues l’app prend-elle en charge ?', a: 'Anglais, allemand, français, espagnol, italien, portugais, turc, japonais, coréen, arabe et hindi.' },
    ],
    footer: {
      tagline: 'Contenu court généré par IA pour TikTok, Instagram et YouTube.',
      legal: 'Mentions légales',
      guides: 'Guides',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      support: 'Assistance',
      deleteAccount: 'Supprimer le compte',
      rights: 'Tous droits réservés.',
    },
  },
  es: {
    nav: { features: 'Funciones', support: 'Ayuda' },
    cta: { getApp: 'Descargar la app' },
    lang: 'Idioma',
    faqHeading: 'Preguntas frecuentes',
    home: {
      metaTitle: 'Viral Factory — estudio de IA para contenido corto en iOS',
      metaDescription:
        'Convierte un prompt, una foto o un reel que te gustó en vídeos cortos y carruseles listos para publicar en TikTok, Instagram y YouTube. Gratis en iOS.',
      heroKicker: 'Un estudio de contenido con IA para creadores y marcas pequeñas',
      heroTitleA: 'Reels sin rostro, anuncios UGC y carruseles —',
      heroTitleAccent: 'a partir de una sola idea.',
      heroSub:
        'Viral Factory convierte un prompt, una foto o un reel que te gustó en vídeo corto y carruseles listos para publicar en TikTok, Instagram y YouTube — sin cámara, sin equipo, sin programas de edición.',
      trust: 'iOS · 11 idiomas · publica directamente en TikTok, Instagram y YouTube',
      featuresH: 'Ocho formas de empezar',
      featuresSub: 'Cada estudio sigue el mismo flujo simple: describir, revisar, publicar.',
      features: [
        { name: 'Rehacer un éxito', description: 'Pega un reel que te encante: Viral Factory lo reconstruye plano a plano, con tu producto como protagonista.' },
        { name: 'Anuncio en vídeo corto', description: 'Un producto o una oferta se convierte en un anuncio en vídeo vertical, guionizado y listo para publicar.' },
        { name: 'Testimonio de creador', description: 'Un testimonio estilo UGC, hablando a cámara, para tu producto — sin contratar a un creador ni sostener una cámara.' },
        { name: 'Publicación deslizable', description: 'Una idea se convierte en un carrusel completo de varias slides — gancho, imágenes, descripción y hashtags.' },
        { name: 'Corto cinematográfico', description: 'Un vídeo de escena cinematográfico y sin narrador, a partir de una sola descripción.' },
        { name: 'Insertar en tu vídeo', description: '¿Ya tienes un clip? Cambia una cara, un producto o un objeto sin volver a grabar.' },
        { name: 'Personaje de IA', description: 'Diseña el rostro y la voz de un personaje una vez y reutilízalo en cada vídeo futuro.' },
        { name: 'Cameo', description: 'Sube una foto tuya y aparece dentro de una escena generada.' },
      ],
      workflowH: 'Pensado para publicar cada día',
      workflowSub: 'Las piezas que hacen fácil mantener el ritmo.',
      workflow: [
        { name: '10 ganchos nuevos al día', description: 'Cada mañana, diez ganchos y diez formatos nuevos en la app — toca uno para empezar un proyecto ya medio escrito.' },
        { name: 'Revisión antes del render', description: 'Aprueba, edita o regenera la imagen de cada escena antes de que se convierta en vídeo, sin sorpresas en el resultado final.' },
        { name: 'Publica en todas partes', description: 'Programa una publicación terminada en TikTok, Instagram y YouTube, o usa el asistente de un toque cuando una plataforma no permita publicar directamente.' },
      ],
      howTitle: 'De la idea a la exportación, en tres pasos',
      howSub: 'El mismo flujo detrás de cada estudio.',
      steps: [
        'Describe lo que quieres crear, o toca uno de los ganchos de hoy.',
        'Revisa el storyboard y las escenas generadas — edita o regenera cualquier cosa antes de que se convierta en vídeo.',
        'Exporta un archivo listo para publicar, o prográmalo directamente en TikTok, Instagram o YouTube.',
      ],
      finalH: 'Termina la publicación de hoy en los próximos cinco minutos.',
      finalSub: 'Descarga gratis. Generar contenido consume créditos — suscríbete para una asignación mensual o compra créditos cuando los necesites.',
    },
    faqHome: [
      { q: '¿Qué es Viral Factory?', a: 'Viral Factory es una app de iOS que convierte un prompt, una foto o un enlace de reel en contenido corto listo para publicar — reels sin rostro, anuncios estilo UGC, carruseles, cortos cinematográficos, un personaje de IA coherente y cameos con tu propio rostro.' },
      { q: '¿Viral Factory es gratis?', a: 'La app es gratuita para descargar. Generar contenido consume créditos: las suscripciones incluyen una asignación mensual, y también puedes comprar paquetes de créditos por separado. El coste exacto se muestra en la app antes de generar.' },
      { q: '¿Necesito mostrar mi rostro?', a: 'No — la mayoría de estudios (anuncios en vídeo, publicaciones deslizables, cortos cinematográficos) no necesitan ningún rostro. Si quieres aparecer, Cameo y el personaje de IA parten de una sola foto de referencia que tú eliges.' },
      { q: '¿Puedo rehacer de verdad un reel que vi en otro sitio?', a: 'Sí — pega un enlace o sube una grabación de pantalla, y Viral Factory reconstruye la estructura, el ritmo y el gancho con tu propio producto o mensaje en lugar del original.' },
      { q: '¿Puedo publicar directamente en TikTok, Instagram y YouTube?', a: 'Sí — conecta una cuenta para programar y publicar automáticamente donde la plataforma lo permita, o usa el flujo asistido integrado: la app prepara el texto y el archivo y lo entrega a la app de la plataforma cuando no hay una API directa disponible.' },
      { q: '¿Qué idiomas admite la app?', a: 'Inglés, alemán, francés, español, italiano, portugués, turco, japonés, coreano, árabe e hindi.' },
    ],
    footer: {
      tagline: 'Contenido corto generado con IA para TikTok, Instagram y YouTube.',
      legal: 'Legal',
      guides: 'Guías',
      privacy: 'Privacidad',
      terms: 'Términos',
      support: 'Ayuda',
      deleteAccount: 'Eliminar cuenta',
      rights: 'Todos los derechos reservados.',
    },
  },
  it: {
    nav: { features: 'Funzionalità', support: 'Assistenza' },
    cta: { getApp: "Scarica l'app" },
    lang: 'Lingua',
    faqHeading: 'Domande frequenti',
    home: {
      metaTitle: 'Viral Factory — studio IA per contenuti brevi su iOS',
      metaDescription:
        'Trasforma un prompt, una foto o un reel che ti è piaciuto in video brevi e caroselli pronti da pubblicare su TikTok, Instagram e YouTube. Gratis su iOS.',
      heroKicker: 'Uno studio di contenuti IA per creator e piccoli brand',
      heroTitleA: 'Reel senza volto, ads UGC e caroselli —',
      heroTitleAccent: 'da una sola idea.',
      heroSub:
        'Viral Factory trasforma un prompt, una foto o un reel che ti è piaciuto in video brevi e caroselli pronti da pubblicare su TikTok, Instagram e YouTube — senza fotocamera, senza troupe, senza software di montaggio.',
      trust: 'iOS · 11 lingue · pubblica direttamente su TikTok, Instagram e YouTube',
      featuresH: 'Otto modi per iniziare',
      featuresSub: 'Ogni studio segue lo stesso flusso semplice: descrivi, controlla, pubblica.',
      features: [
        { name: 'Rifai un successo', description: 'Incolla un reel che ti piace: Viral Factory lo ricostruisce scena per scena, con il tuo prodotto protagonista.' },
        { name: 'Video ad breve', description: 'Un prodotto o un’offerta diventa un video ad verticale, sceneggiato e pronto da pubblicare.' },
        { name: 'Testimonianza creator', description: 'Una testimonianza in stile UGC, volto in camera, per il tuo prodotto — senza creator da ingaggiare né telecamera da impugnare.' },
        { name: 'Post a scorrimento', description: 'Un’idea diventa un carosello completo multi-slide — hook, immagini, didascalia e hashtag.' },
        { name: 'Cortometraggio cinematico', description: 'Un video di scena cinematico, senza narratore, costruito da una singola descrizione.' },
        { name: 'Inserisci nel tuo video', description: 'Hai già una clip? Sostituisci un volto, un prodotto o un oggetto senza girare di nuovo.' },
        { name: 'Personaggio IA', description: 'Definisci una volta il volto e la voce di un personaggio, poi riusalo in ogni video successivo.' },
        { name: 'Cameo', description: 'Carica una tua foto e compari dentro una scena generata.' },
      ],
      workflowH: 'Pensato per pubblicare ogni giorno',
      workflowSub: 'Gli elementi che rendono facile restare costanti.',
      workflow: [
        { name: '10 hook nuovi al giorno', description: 'Ogni mattina dieci nuovi hook e dieci formati nell’app — tocca uno per avviare un progetto già mezzo scritto.' },
        { name: 'Revisione prima del render', description: 'Approva, modifica o rigenera l’immagine di ogni scena prima che diventi un video, senza sorprese nel risultato finale.' },
        { name: 'Pubblica ovunque', description: 'Pianifica un post finito su TikTok, Instagram e YouTube, oppure usa l’assistente a un tocco quando una piattaforma non permette la pubblicazione diretta.' },
      ],
      howTitle: 'Dall’idea all’esportazione in tre passaggi',
      howSub: 'Lo stesso flusso dietro ogni studio.',
      steps: [
        'Descrivi cosa vuoi creare, oppure tocca uno degli hook di oggi.',
        'Controlla lo storyboard e le scene generate — modifica o rigenera qualsiasi cosa prima che diventi un video.',
        'Esporta un file pronto da pubblicare, oppure pianificalo direttamente su TikTok, Instagram o YouTube.',
      ],
      finalH: 'Finisci il post di oggi nei prossimi cinque minuti.',
      finalSub: 'Download gratuito. Generare contenuti consuma crediti — abbonati per un pacchetto mensile o acquista crediti quando ti servono.',
    },
    faqHome: [
      { q: 'Cos’è Viral Factory?', a: 'Viral Factory è un’app iOS che trasforma un prompt, una foto o un link a un reel in contenuti brevi pronti da pubblicare — reel senza volto, ads in stile UGC, caroselli, cortometraggi cinematici, un personaggio IA coerente e cameo con un volto reale.' },
      { q: 'Viral Factory è gratis?', a: 'L’app è gratuita da scaricare. Generare contenuti consuma crediti: gli abbonamenti includono una dotazione mensile, e si possono acquistare anche pacchetti di crediti separati. Il costo esatto è mostrato nell’app prima di ogni generazione.' },
      { q: 'Devo mostrare il mio volto?', a: 'No — la maggior parte degli studi (video ad, post a scorrimento, cortometraggi) non richiede alcun volto. Per comparire, Cameo e il personaggio IA partono da una singola foto di riferimento scelta da te.' },
      { q: 'Posso davvero rifare un reel visto altrove?', a: 'Sì — incolla un link o carica una registrazione dello schermo, e Viral Factory ricostruisce struttura, ritmo e hook con il tuo prodotto o messaggio al posto dell’originale.' },
      { q: 'Posso pubblicare direttamente su TikTok, Instagram e YouTube?', a: 'Sì — collega un account per pianificare e pubblicare automaticamente dove la piattaforma lo consente, oppure usa il flusso assistito integrato: l’app prepara didascalia e file e li passa all’app della piattaforma quando non è disponibile un’API diretta.' },
      { q: 'Quali lingue supporta l’app?', a: 'Inglese, tedesco, francese, spagnolo, italiano, portoghese, turco, giapponese, coreano, arabo e hindi.' },
    ],
    footer: {
      tagline: 'Contenuti brevi generati con IA per TikTok, Instagram e YouTube.',
      legal: 'Legale',
      guides: 'Guide',
      privacy: 'Privacy',
      terms: 'Termini',
      support: 'Assistenza',
      deleteAccount: 'Elimina account',
      rights: 'Tutti i diritti riservati.',
    },
  },
  pt: {
    nav: { features: 'Recursos', support: 'Suporte' },
    cta: { getApp: 'Baixar o app' },
    lang: 'Idioma',
    faqHeading: 'Perguntas frequentes',
    home: {
      metaTitle: 'Viral Factory — estúdio de IA para conteúdo curto no iOS',
      metaDescription:
        'Transforme um prompt, uma foto ou um reel que você curtiu em vídeos curtos e carrosséis prontos para publicar no TikTok, Instagram e YouTube. Grátis no iOS.',
      heroKicker: 'Um estúdio de conteúdo com IA para criadores e pequenas marcas',
      heroTitleA: 'Reels sem rosto, anúncios UGC e carrosséis —',
      heroTitleAccent: 'a partir de uma ideia.',
      heroSub:
        'O Viral Factory transforma um prompt, uma foto ou um reel que você curtiu em vídeo curto e carrosséis prontos para publicar no TikTok, Instagram e YouTube — sem câmera, sem equipe, sem software de edição.',
      trust: 'iOS · 11 idiomas · publique direto no TikTok, Instagram e YouTube',
      featuresH: 'Oito formas de começar',
      featuresSub: 'Todo estúdio segue o mesmo fluxo simples: descrever, revisar, publicar.',
      features: [
        { name: 'Refazer um sucesso', description: 'Cole um reel que você gosta: o Viral Factory o reconstrói cena a cena, com seu produto no papel principal.' },
        { name: 'Anúncio em vídeo curto', description: 'Um produto ou oferta vira um anúncio em vídeo vertical, roteirizado e pronto para publicar.' },
        { name: 'Depoimento estilo criador', description: 'Um depoimento estilo UGC, falando direto para a câmera, para o seu produto — sem contratar criador nem segurar câmera.' },
        { name: 'Post em carrossel', description: 'Uma ideia vira um carrossel completo de vários slides — gancho, imagens, legenda e hashtags.' },
        { name: 'Curta cinematográfico', description: 'Um vídeo de cena cinematográfico e sem narrador, criado a partir de uma única descrição.' },
        { name: 'Inserir no seu vídeo', description: 'Já tem um clipe? Troque um rosto, produto ou objeto sem regravar a cena.' },
        { name: 'Personagem de IA', description: 'Defina o rosto e a voz de um personagem uma vez e reutilize em todos os próximos vídeos.' },
        { name: 'Cameo', description: 'Envie uma foto sua e apareça dentro de uma cena gerada.' },
      ],
      workflowH: 'Feito para postar todos os dias',
      workflowSub: 'As partes que tornam fácil manter o ritmo.',
      workflow: [
        { name: '10 ganchos novos por dia', description: 'Toda manhã, dez ganchos e dez formatos novos no app — toque em um para começar um projeto já meio pronto.' },
        { name: 'Revisão antes de renderizar', description: 'Aprove, edite ou regenere a imagem de cada cena antes de virar vídeo, sem surpresas no resultado final.' },
        { name: 'Publique em todo lugar', description: 'Agende uma publicação pronta no TikTok, Instagram e YouTube, ou use o assistente de um toque quando a plataforma não permitir publicação direta.' },
      ],
      howTitle: 'Da ideia à exportação em três passos',
      howSub: 'O mesmo fluxo por trás de cada estúdio.',
      steps: [
        'Descreva o que você quer criar, ou toque em um dos ganchos de hoje.',
        'Revise o storyboard e as cenas geradas — edite ou regenere qualquer coisa antes de virar vídeo.',
        'Exporte um arquivo pronto para publicar, ou agende direto no TikTok, Instagram ou YouTube.',
      ],
      finalH: 'Termine o post de hoje nos próximos cinco minutos.',
      finalSub: 'Download gratuito. Gerar conteúdo consome créditos — assine para um pacote mensal ou compre créditos quando precisar.',
    },
    faqHome: [
      { q: 'O que é o Viral Factory?', a: 'O Viral Factory é um app de iOS que transforma um prompt, uma foto ou um link de reel em conteúdo curto pronto para publicar — reels sem rosto, anúncios estilo UGC, carrosséis, curtas cinematográficos, um personagem de IA consistente e cameos com o seu próprio rosto.' },
      { q: 'O Viral Factory é gratuito?', a: 'O app é gratuito para baixar. Gerar conteúdo consome créditos: as assinaturas incluem um pacote mensal, e também é possível comprar pacotes de créditos separadamente. O custo exato aparece no app antes de cada geração.' },
      { q: 'Preciso mostrar meu rosto?', a: 'Não — a maioria dos estúdios (anúncios em vídeo, posts em carrossel, curtas cinematográficos) não precisa de nenhum rosto. Para aparecer, o Cameo e o personagem de IA partem de uma única foto de referência escolhida por você.' },
      { q: 'Posso mesmo refazer um reel que vi em outro lugar?', a: 'Sim — cole um link ou envie uma gravação de tela, e o Viral Factory reconstrói a estrutura, o ritmo e o gancho com o seu próprio produto ou mensagem no lugar do original.' },
      { q: 'Posso publicar direto no TikTok, Instagram e YouTube?', a: 'Sim — conecte uma conta para agendar e publicar automaticamente onde a plataforma permitir, ou use o fluxo assistido integrado: o app prepara a legenda e a mídia e entrega ao app da plataforma quando não há uma API direta disponível.' },
      { q: 'Quais idiomas o app suporta?', a: 'Inglês, alemão, francês, espanhol, italiano, português, turco, japonês, coreano, árabe e hindi.' },
    ],
    footer: {
      tagline: 'Conteúdo curto gerado por IA para TikTok, Instagram e YouTube.',
      legal: 'Jurídico',
      guides: 'Guias',
      privacy: 'Privacidade',
      terms: 'Termos',
      support: 'Suporte',
      deleteAccount: 'Excluir conta',
      rights: 'Todos os direitos reservados.',
    },
  },
  tr: {
    nav: { features: 'Özellikler', support: 'Destek' },
    cta: { getApp: "Uygulamayı indir" },
    lang: 'Dil',
    faqHeading: 'Sık sorulan sorular',
    home: {
      metaTitle: 'Viral Factory — iOS için yapay zeka kısa video stüdyosu',
      metaDescription:
        'Bir prompt, bir fotoğraf ya da beğendiğin bir reel; TikTok, Instagram ve YouTube için yayına hazır kısa video ve karusellere dönüşsün. iOS’ta ücretsiz.',
      heroKicker: 'İçerik üreticileri ve küçük markalar için yapay zeka stüdyosu',
      heroTitleA: 'Yüzsüz reels, UGC reklamlar ve kaydırmalı gönderiler —',
      heroTitleAccent: 'tek bir fikirden.',
      heroSub:
        'Viral Factory; bir prompt, bir fotoğraf ya da beğendiğin bir reel’i TikTok, Instagram ve YouTube için yayına hazır kısa video ve karusellere dönüştürür — kamera yok, ekip yok, kurgu programı yok.',
      trust: 'iOS · 11 dil · doğrudan TikTok, Instagram ve YouTube’a paylaşım',
      featuresH: 'Başlamanın sekiz yolu',
      featuresSub: 'Her stüdyo aynı basit akışı izler: anlat, incele, paylaş.',
      features: [
        { name: 'Beğendiğini yeniden yap', description: 'Beğendiğin bir reel’i yapıştır — Viral Factory onu sahne sahne, senin ürününü baş role koyarak yeniden kurar.' },
        { name: 'Kısa video reklam', description: 'Bir ürün ya da teklif, senaryosu yazılmış, yayına hazır dikey bir video reklama dönüşür.' },
        { name: 'İçerik üretici tanıtımı', description: 'Ürünün için kameraya bakan, UGC tarzı bir tanıtım videosu — kiralanacak bir içerik üretici ya da tutulacak bir kamera yok.' },
        { name: 'Kaydırmalı gönderi', description: 'Tek bir fikir; hook, görseller, açıklama ve hashtag’lerle tam bir çok slaytlı gönderiye dönüşür.' },
        { name: 'Sinematik kısa film', description: 'Tek bir açıklamadan kurulan, anlatıcısız, sinematik bir sahne videosu.' },
        { name: 'Videona yerleştir', description: 'Zaten bir klibin mi var? Yeniden çekim yapmadan bir yüzü, ürünü ya da nesneyi değiştir.' },
        { name: 'Yapay zeka karakteri', description: 'Bir karakterin yüzünü ve sesini bir kez tasarla, sonraki her videoda yeniden kullan.' },
        { name: 'Cameo', description: 'Kendi fotoğrafını yükle ve üretilen bir sahnenin içinde belir.' },
      ],
      workflowH: 'Her gün paylaşım alışkanlığı için tasarlandı',
      workflowSub: 'Düzenli kalmayı kolaylaştıran parçalar.',
      workflow: [
        { name: 'Günde 10 taze hook', description: 'Her sabah uygulamada on yeni hook ve on format seni bekler — birine dokun, yarısı yazılmış bir proje hemen başlasın.' },
        { name: 'Render’dan önce incele', description: 'Her sahnenin görseli videoya dönüşmeden önce onayla, düzenle ya da yeniden üret — son üründe sürpriz kalmasın.' },
        { name: 'Her yere paylaş', description: 'Bitmiş bir gönderiyi TikTok, Instagram ve YouTube için planla, ya da bir platform doğrudan paylaşıma izin vermediğinde tek dokunuşluk yardımcı akışı kullan.' },
      ],
      howTitle: 'Fikirden dışa aktarmaya üç adımda',
      howSub: 'Her stüdyonun arkasındaki aynı akış.',
      steps: [
        'Ne yapmak istediğini anlat, ya da bugünün hazır hook’larından birine dokun.',
        'Storyboard’ı ve üretilen sahneleri incele — videoya dönüşmeden önce dilediğini düzenle ya da yeniden üret.',
        'Yayına hazır bir dosya olarak dışa aktar, ya da doğrudan TikTok, Instagram veya YouTube için planla.',
      ],
      finalH: 'Bugünün gönderisini önümüzdeki beş dakikada bitir.',
      finalSub: 'İndirmesi ücretsiz. İçerik üretmek kredi harcar — aylık kontenjan için abone ol ya da ihtiyacın oldukça kredi satın al.',
    },
    faqHome: [
      { q: 'Viral Factory nedir?', a: 'Viral Factory; bir prompt, bir fotoğraf ya da bir reel bağlantısını yayına hazır kısa içeriğe dönüştüren bir iOS uygulamasıdır — yüzsüz reels, UGC tarzı reklamlar, kaydırmalı gönderiler, sinematik kısa filmler, tutarlı bir yapay zeka karakteri ve gerçek bir yüzle cameo görünümleri.' },
      { q: 'Viral Factory ücretsiz mi?', a: 'Uygulamayı indirmek ücretsizdir. İçerik üretmek kredi harcar: abonelikler aylık bir kontenjan içerir, ayrıca ayrıca kredi paketleri de satın alınabilir. Tam maliyet, her üretimden önce uygulamada gösterilir.' },
      { q: 'Yüzümü göstermem gerekiyor mu?', a: 'Hayır — stüdyoların çoğu (video reklamlar, kaydırmalı gönderiler, sinematik kısa filmler) hiç yüz gerektirmez. Görünmek istersen Cameo ve yapay zeka karakteri, senin seçtiğin tek bir referans fotoğraftan başlar.' },
      { q: 'Başka bir yerde gördüğüm bir reel’i gerçekten yeniden yapabilir miyim?', a: 'Evet — bir bağlantı yapıştır ya da bir ekran kaydı yükle; Viral Factory yapıyı, temposu ve hook’u, orijinalin yerine senin ürününle ya da mesajınla yeniden kurar.' },
      { q: 'TikTok, Instagram ve YouTube’a doğrudan paylaşım yapabilir miyim?', a: 'Evet — platformun izin verdiği yerlerde otomatik planlamak ve paylaşmak için bir hesap bağla, ya da yerleşik yardımcı akışı kullan: doğrudan bir API bulunmadığında uygulama açıklamayı ve medyayı hazırlar ve platformun kendi uygulamasına devreder.' },
      { q: 'Uygulama hangi dilleri destekliyor?', a: 'İngilizce, Almanca, Fransızca, İspanyolca, İtalyanca, Portekizce, Türkçe, Japonca, Korece, Arapça ve Hintçe.' },
    ],
    footer: {
      tagline: 'TikTok, Instagram ve YouTube için yapay zeka ile üretilmiş kısa içerik.',
      legal: 'Yasal',
      guides: 'Rehberler',
      privacy: 'Gizlilik',
      terms: 'Koşullar',
      support: 'Destek',
      deleteAccount: 'Hesabı sil',
      rights: 'Tüm hakları saklıdır.',
    },
  },
  ja: {
    nav: { features: '機能', support: 'サポート' },
    cta: { getApp: 'アプリを入手' },
    lang: '言語',
    faqHeading: 'よくある質問',
    home: {
      metaTitle: 'Viral Factory — iOS向けAIショート動画スタジオ',
      metaDescription:
        'プロンプト、写真、気に入ったリールを、TikTok・Instagram・YouTube向けの公開準備が整ったショート動画やカルーセルに変換。iOSで無料。',
      heroKicker: 'クリエイターと小規模ブランドのためのAIコンテンツスタジオ',
      heroTitleA: '顔出し不要のリール、UGC広告、スワイプ投稿 —',
      heroTitleAccent: 'すべて一つのアイデアから。',
      heroSub:
        'Viral Factoryは、プロンプト、写真、気に入ったリールを、TikTok・Instagram・YouTube向けの公開準備が整ったショート動画やカルーセルに変換します — カメラも撮影チームも編集ソフトも不要です。',
      trust: 'iOS ・ 11言語対応 ・ TikTok・Instagram・YouTubeへ直接投稿',
      featuresH: '8つの始め方',
      featuresSub: 'どのスタジオも流れは同じ — 説明する、確認する、投稿する。',
      features: [
        { name: 'ヒットを作り直す', description: '好きなリールを貼り付けるだけ。Viral Factoryがカット単位で再構成し、自分の商品を主役にします。' },
        { name: 'ショート動画広告', description: '商品やオファーを、台本付きで公開準備が整った縦型動画広告に変換します。' },
        { name: 'クリエイター風レビュー', description: 'カメラに向かって話すUGC風のレビュー動画を、クリエイターを起用せず、カメラも持たずに作成します。' },
        { name: 'スワイプ投稿', description: '一つのアイデアが、フック・画像・キャプション・ハッシュタグまで揃った複数枚のカルーセル投稿になります。' },
        { name: 'シネマティックショート', description: 'ナレーションなしの、映画のようなシーン動画を一つの説明文から生成します。' },
        { name: '動画に合成する', description: '手持ちのクリップがあれば、撮り直さずに顔・商品・物を入れ替えられます。' },
        { name: 'AIキャラクター', description: '一度作成したキャラクターの顔と声を、以降のすべての動画で使い回せます。' },
        { name: 'カメオ出演', description: '自分の写真を1枚アップロードするだけで、生成されたシーンの中に登場できます。' },
      ],
      workflowH: '毎日投稿する習慣のために',
      workflowSub: '続けやすくする仕組み。',
      workflow: [
        { name: '毎日10個の新しいフック', description: '毎朝、新しいフックとフォーマットが10個ずつアプリに届きます。タップするだけで、すでに半分できあがったプロジェクトが始まります。' },
        { name: 'レンダリング前に確認', description: '動画になる前に、各シーンの画像を承認・編集・再生成できるので、最終仕上がりに驚くことがありません。' },
        { name: 'どこにでも投稿', description: '完成した投稿をTikTok・Instagram・YouTubeに予約するか、直接投稿に対応していないプラットフォームではワンタップの投稿アシストを使えます。' },
      ],
      howTitle: 'アイデアから書き出しまで3ステップ',
      howSub: 'どのスタジオも背後の流れは同じです。',
      steps: [
        '作りたいものを説明するか、今日のフックの一つをタップします。',
        'ストーリーボードと生成されたシーンを確認 — 動画になる前に自由に編集・再生成できます。',
        '公開準備が整ったファイルとして書き出すか、TikTok・Instagram・YouTubeに直接予約します。',
      ],
      finalH: '今日の投稿を、次の5分で完成させましょう。',
      finalSub: 'ダウンロードは無料。生成にはクレジットを使用します — 月額プランで毎月分を受け取るか、必要な分だけクレジットを購入できます。',
    },
    faqHome: [
      { q: 'Viral Factoryとは何ですか？', a: 'Viral Factoryは、プロンプト・写真・リールのリンクを公開準備が整ったショートコンテンツに変換するiOSアプリです。顔出し不要のリール、UGC風広告、スワイプ投稿、シネマティックショート、一貫したAIキャラクター、実際の顔を使ったカメオ出演に対応しています。' },
      { q: 'Viral Factoryは無料ですか？', a: 'アプリのダウンロードは無料です。コンテンツの生成にはクレジットを使用します。サブスクリプションには毎月のクレジット付与が含まれ、別途クレジットパックの購入も可能です。正確なコストは生成前にアプリ内で表示されます。' },
      { q: '自分の顔を出す必要がありますか？', a: 'いいえ。ほとんどのスタジオ（動画広告、スワイプ投稿、シネマティックショート）は顔を必要としません。出演したい場合は、カメオやAIキャラクターが、自分で選んだ1枚の参照写真から始められます。' },
      { q: '他で見たリールを本当に作り直せますか？', a: 'はい。リンクを貼り付けるか画面収録をアップロードすると、Viral Factoryが構成・テンポ・フックを、オリジナルの代わりに自分の商品やメッセージで再構成します。' },
      { q: 'TikTok・Instagram・YouTubeに直接投稿できますか？', a: 'はい。アカウントを連携すれば、プラットフォームが許可する範囲で自動的に予約・投稿できます。直接投稿用のAPIがない場合は、アプリがキャプションとメディアを準備し、各プラットフォームのアプリに引き継ぐアシスト機能を使えます。' },
      { q: 'アプリはどの言語に対応していますか？', a: '英語、ドイツ語、フランス語、スペイン語、イタリア語、ポルトガル語、トルコ語、日本語、韓国語、アラビア語、ヒンディー語に対応しています。' },
    ],
    footer: {
      tagline: 'TikTok・Instagram・YouTube向けのAI生成ショートコンテンツ。',
      legal: '法的情報',
      guides: 'ガイド',
      privacy: 'プライバシー',
      terms: '利用規約',
      support: 'サポート',
      deleteAccount: 'アカウントを削除',
      rights: 'All rights reserved.',
    },
  },
  ko: {
    nav: { features: '기능', support: '지원' },
    cta: { getApp: '앱 다운로드' },
    lang: '언어',
    faqHeading: '자주 묻는 질문',
    home: {
      metaTitle: 'Viral Factory — iOS용 AI 숏폼 콘텐츠 스튜디오',
      metaDescription:
        '프롬프트, 사진, 마음에 든 릴 하나를 TikTok·Instagram·YouTube에 바로 올릴 수 있는 숏폼 영상과 캐러셀로 바꿔보세요. iOS에서 무료.',
      heroKicker: '크리에이터와 소규모 브랜드를 위한 AI 콘텐츠 스튜디오',
      heroTitleA: '얼굴 없는 릴, UGC 광고, 스와이프 캐러셀 —',
      heroTitleAccent: '아이디어 하나로 시작합니다.',
      heroSub:
        'Viral Factory는 프롬프트, 사진, 마음에 든 릴 하나를 TikTok·Instagram·YouTube에 바로 올릴 수 있는 숏폼 영상과 캐러셀로 바꿔줍니다 — 카메라도, 촬영팀도, 편집 프로그램도 필요 없습니다.',
      trust: 'iOS · 11개 언어 지원 · TikTok·Instagram·YouTube에 바로 게시',
      featuresH: '시작하는 8가지 방법',
      featuresSub: '모든 스튜디오는 같은 흐름을 따릅니다 — 설명하고, 검토하고, 게시한다.',
      features: [
        { name: '인기 영상 다시 만들기', description: '마음에 든 릴 링크를 붙여넣으면, Viral Factory가 장면 단위로 재구성해 내 제품을 주인공으로 세웁니다.' },
        { name: '짧은 영상 광고', description: '제품이나 프로모션을 대본이 있는, 바로 게시 가능한 세로형 영상 광고로 만듭니다.' },
        { name: '크리에이터 후기 영상', description: '카메라를 보고 말하는 UGC 스타일 후기 영상을 제품에 맞게 제작 — 섭외할 크리에이터도, 들 카메라도 필요 없습니다.' },
        { name: '스와이프 게시물', description: '아이디어 하나가 후크, 이미지, 캡션, 해시태그까지 갖춘 멀티 슬라이드 캐러셀이 됩니다.' },
        { name: '시네마틱 숏', description: '내레이션 없이, 하나의 설명만으로 만들어지는 영화 같은 장면 영상입니다.' },
        { name: '내 영상에 합성하기', description: '이미 가지고 있는 클립이 있다면, 다시 촬영하지 않고 얼굴·제품·사물을 교체할 수 있습니다.' },
        { name: 'AI 캐릭터', description: '캐릭터의 얼굴과 목소리를 한 번 만들어두면, 이후 모든 영상에서 재사용할 수 있습니다.' },
        { name: '카메오', description: '본인 사진 한 장을 올리면 생성된 장면 속에 직접 등장합니다.' },
      ],
      workflowH: '매일 게시하는 습관을 위해 설계',
      workflowSub: '꾸준히 이어가기 쉽게 만드는 요소들.',
      workflow: [
        { name: '매일 새로운 후크 10개', description: '매일 아침 새로운 후크 10개와 포맷 10개가 앱에 도착합니다 — 하나를 탭하면 이미 절반쯤 완성된 프로젝트가 시작됩니다.' },
        { name: '렌더링 전에 검토', description: '영상이 되기 전에 각 장면의 이미지를 승인·수정·재생성할 수 있어, 최종 결과물에 놀랄 일이 없습니다.' },
        { name: '어디에나 게시', description: '완성된 게시물을 TikTok·Instagram·YouTube에 예약하거나, 플랫폼이 직접 게시를 지원하지 않을 때는 원탭 게시 지원 기능을 사용하세요.' },
      ],
      howTitle: '아이디어에서 내보내기까지 세 단계',
      howSub: '모든 스튜디오 뒤에 있는 동일한 흐름입니다.',
      steps: [
        '만들고 싶은 것을 설명하거나, 오늘의 후크 중 하나를 탭하세요.',
        '스토리보드와 생성된 장면을 검토 — 영상이 되기 전에 무엇이든 수정하거나 다시 생성할 수 있습니다.',
        '바로 게시 가능한 파일로 내보내거나, TikTok·Instagram·YouTube에 직접 예약하세요.',
      ],
      finalH: '오늘의 게시물을 앞으로 5분 안에 완성하세요.',
      finalSub: '다운로드는 무료입니다. 콘텐츠 생성에는 크레딧이 사용됩니다 — 매달 제공되는 구독 플랜을 이용하거나 필요할 때 크레딧을 구매하세요.',
    },
    faqHome: [
      { q: 'Viral Factory는 무엇인가요?', a: 'Viral Factory는 프롬프트, 사진, 릴 링크를 바로 게시 가능한 숏폼 콘텐츠로 바꿔주는 iOS 앱입니다 — 얼굴 없는 릴, UGC 스타일 광고, 스와이프 캐러셀, 시네마틱 숏, 일관된 AI 캐릭터, 실제 얼굴을 사용한 카메오까지 지원합니다.' },
      { q: 'Viral Factory는 무료인가요?', a: '앱 다운로드는 무료입니다. 콘텐츠 생성에는 크레딧이 사용됩니다: 구독에는 매달 제공되는 크레딧이 포함되며, 크레딧 팩을 별도로 구매할 수도 있습니다. 정확한 비용은 생성 전에 앱에서 표시됩니다.' },
      { q: '얼굴을 꼭 보여야 하나요?', a: '아니요 — 대부분의 스튜디오(영상 광고, 스와이프 게시물, 시네마틱 숏)는 얼굴이 전혀 필요 없습니다. 등장하고 싶다면 카메오와 AI 캐릭터가 직접 고른 참조 사진 한 장으로 시작합니다.' },
      { q: '다른 곳에서 본 릴을 정말로 다시 만들 수 있나요?', a: '네 — 링크를 붙여넣거나 화면 녹화를 업로드하면, Viral Factory가 원본 대신 내 제품이나 메시지로 구조·템포·후크를 재구성합니다.' },
      { q: 'TikTok·Instagram·YouTube에 바로 게시할 수 있나요?', a: '네 — 계정을 연결하면 플랫폼이 허용하는 범위에서 자동으로 예약·게시됩니다. 직접 연동 API가 없는 경우에는 앱이 캡션과 미디어를 준비해 해당 플랫폼 앱으로 넘겨주는 지원 기능을 사용할 수 있습니다.' },
      { q: '앱은 어떤 언어를 지원하나요?', a: '영어, 독일어, 프랑스어, 스페인어, 이탈리아어, 포르투갈어, 터키어, 일본어, 한국어, 아랍어, 힌디어를 지원합니다.' },
    ],
    footer: {
      tagline: 'TikTok·Instagram·YouTube를 위한 AI 생성 숏폼 콘텐츠.',
      legal: '법적 정보',
      guides: '가이드',
      privacy: '개인정보처리방침',
      terms: '이용약관',
      support: '지원',
      deleteAccount: '계정 삭제',
      rights: '모든 권리 보유.',
    },
  },
  ar: {
    nav: { features: 'الميزات', support: 'الدعم' },
    cta: { getApp: 'حمّل التطبيق' },
    lang: 'اللغة',
    faqHeading: 'الأسئلة الشائعة',
    home: {
      metaTitle: 'Viral Factory — استوديو محتوى قصير بالذكاء الاصطناعي لنظام iOS',
      metaDescription:
        'حوّل فكرة أو صورة أو ريلز أعجبك إلى فيديوهات قصيرة وكاروسيل جاهزة للنشر على TikTok وInstagram وYouTube. مجاني على iOS.',
      heroKicker: 'استوديو محتوى بالذكاء الاصطناعي لصنّاع المحتوى والعلامات الصغيرة',
      heroTitleA: 'ريلز بلا وجه، إعلانات UGC، ومنشورات كاروسيل —',
      heroTitleAccent: 'كل ذلك من فكرة واحدة.',
      heroSub:
        'يحوّل Viral Factory فكرة أو صورة أو ريلز أعجبك إلى فيديو قصير وكاروسيل جاهز للنشر على TikTok وInstagram وYouTube — بلا كاميرا، بلا فريق تصوير، وبلا برنامج مونتاج.',
      trust: 'iOS · 11 لغة · نشر مباشر على TikTok وInstagram وYouTube',
      featuresH: 'ثماني طرق للبدء',
      featuresSub: 'كل استوديو يتبع نفس الخطوات البسيطة: صِف الفكرة، راجعها، انشرها.',
      features: [
        { name: 'أعد صناعة فيديو ناجح', description: 'الصق رابط ريلز أعجبك، وسيعيد Viral Factory بناءه مشهدًا بمشهد مع جعل منتجك هو البطل.' },
        { name: 'إعلان فيديو قصير', description: 'يتحول المنتج أو العرض إلى إعلان فيديو عمودي مكتوب السيناريو وجاهز للنشر.' },
        { name: 'فيديو شهادة على طريقة الصنّاع', description: 'فيديو شهادة بأسلوب UGC يتحدث مباشرة إلى الكاميرا عن منتجك — دون التعاقد مع صانع محتوى أو حمل كاميرا.' },
        { name: 'منشور كاروسيل', description: 'تتحول فكرة واحدة إلى منشور متعدد الشرائح كامل: افتتاحية جذب، صور، وصف، وهاشتاغات.' },
        { name: 'مشهد سينمائي قصير', description: 'فيديو مشهدي سينمائي دون راوٍ، يُبنى من وصف واحد فقط.' },
        { name: 'إدراج داخل فيديو لديك', description: 'لديك مقطع جاهز؟ استبدل وجهًا أو منتجًا أو غرضًا فيه دون إعادة التصوير.' },
        { name: 'شخصية بالذكاء الاصطناعي', description: 'صمّم وجه وصوت شخصية مرة واحدة، ثم أعد استخدامها في كل فيديو لاحق.' },
        { name: 'الظهور الشخصي (Cameo)', description: 'ارفع صورة واحدة لك لتظهر داخل مشهد تم إنشاؤه.' },
      ],
      workflowH: 'مصمم لعادة النشر اليومية',
      workflowSub: 'الأجزاء التي تجعل الاستمرار سهلاً.',
      workflow: [
        { name: '10 أفكار افتتاحية جديدة يوميًا', description: 'كل صباح، عشرة أفكار افتتاحية وعشرة قوالب جديدة في التطبيق — اضغط على واحدة لتبدأ مشروعًا مكتوبًا نصفه بالفعل.' },
        { name: 'مراجعة قبل التصيير', description: 'وافق على صورة كل مشهد أو عدّلها أو أعد توليدها قبل أن تتحول إلى فيديو، دون أي مفاجآت في النتيجة النهائية.' },
        { name: 'انشر في كل مكان', description: 'جدول منشورًا جاهزًا على TikTok وInstagram وYouTube، أو استخدم المساعد الفوري عندما لا تسمح المنصة بالنشر المباشر.' },
      ],
      howTitle: 'من الفكرة إلى التصدير في ثلاث خطوات',
      howSub: 'نفس الأسلوب خلف كل استوديو.',
      steps: [
        'صِف ما تريد صنعه، أو اضغط على إحدى أفكار اليوم الافتتاحية الجاهزة.',
        'راجع اللوحة القصصية والمشاهد المولّدة — عدّل أو أعد توليد أي شيء قبل أن يتحول إلى فيديو.',
        'صدّر ملفًا جاهزًا للنشر، أو جدوله مباشرة على TikTok أو Instagram أو YouTube.',
      ],
      finalH: 'أنجز منشور اليوم خلال الدقائق الخمس القادمة.',
      finalSub: 'التحميل مجاني. توليد المحتوى يستهلك أرصدة — اشترك للحصول على رصيد شهري أو اشترِ أرصدة عند الحاجة.',
    },
    faqHome: [
      { q: 'ما هو Viral Factory؟', a: 'Viral Factory تطبيق لنظام iOS يحوّل فكرة أو صورة أو رابط ريلز إلى محتوى قصير جاهز للنشر — ريلز بلا وجه، إعلانات بأسلوب UGC، منشورات كاروسيل، مشاهد سينمائية قصيرة، شخصية ذكاء اصطناعي ثابتة، وظهور شخصي بوجه حقيقي.' },
      { q: 'هل Viral Factory مجاني؟', a: 'تحميل التطبيق مجاني. توليد المحتوى يستهلك أرصدة: تتضمن الاشتراكات رصيدًا شهريًا، ويمكن أيضًا شراء حزم أرصدة بشكل منفصل. تظهر التكلفة الدقيقة داخل التطبيق قبل كل عملية توليد.' },
      { q: 'هل يجب أن أظهر بوجهي؟', a: 'لا — معظم الاستوديوهات (إعلانات الفيديو، منشورات الكاروسيل، المشاهد السينمائية) لا تحتاج إلى أي وجه إطلاقًا. إذا أردت الظهور، فإن الظهور الشخصي وشخصية الذكاء الاصطناعي يبدآن من صورة مرجعية واحدة تختارها بنفسك.' },
      { q: 'هل يمكنني فعلاً إعادة صناعة ريلز رأيته في مكان آخر؟', a: 'نعم — الصق رابطًا أو ارفع تسجيل شاشة، وسيعيد Viral Factory بناء البنية والإيقاع وفكرة الجذب باستخدام منتجك أو رسالتك بدلاً من الأصل.' },
      { q: 'هل يمكنني النشر مباشرة على TikTok وInstagram وYouTube؟', a: 'نعم — اربط حسابًا للجدولة والنشر التلقائي حيث تسمح المنصة بذلك، أو استخدم المسار المساعد المدمج: يجهّز التطبيق النص المصاحب والوسائط ثم يسلّمها إلى تطبيق المنصة نفسها عندما لا تتوفر واجهة برمجية مباشرة.' },
      { q: 'ما اللغات التي يدعمها التطبيق؟', a: 'الإنجليزية، الألمانية، الفرنسية، الإسبانية، الإيطالية، البرتغالية، التركية، اليابانية، الكورية، العربية، والهندية.' },
    ],
    footer: {
      tagline: 'محتوى قصير مولّد بالذكاء الاصطناعي لـ TikTok وInstagram وYouTube.',
      legal: 'قانوني',
      guides: 'أدلة',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      support: 'الدعم',
      deleteAccount: 'حذف الحساب',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
  hi: {
    nav: { features: 'सुविधाएँ', support: 'सहायता' },
    cta: { getApp: 'ऐप पाएं' },
    lang: 'भाषा',
    faqHeading: 'अक्सर पूछे जाने वाले सवाल',
    home: {
      metaTitle: 'Viral Factory — iOS के लिए AI शॉर्ट-फॉर्म कंटेंट स्टूडियो',
      metaDescription:
        'एक प्रॉम्प्ट, एक फ़ोटो, या पसंद आई किसी रील को TikTok, Instagram और YouTube के लिए तैयार शॉर्ट वीडियो और कैरोसेल में बदलें। iOS पर मुफ़्त।',
      heroKicker: 'क्रिएटर्स और छोटे ब्रांड्स के लिए AI कंटेंट स्टूडियो',
      heroTitleA: 'बिना चेहरे वाली रील्स, UGC विज्ञापन और स्वाइप कैरोसेल —',
      heroTitleAccent: 'सिर्फ़ एक आइडिया से।',
      heroSub:
        'Viral Factory एक प्रॉम्प्ट, एक फ़ोटो, या आपको पसंद आई किसी रील को TikTok, Instagram और YouTube के लिए पब्लिश करने लायक शॉर्ट वीडियो और कैरोसेल में बदल देता है — न कैमरा चाहिए, न टीम, न एडिटिंग सॉफ़्टवेयर।',
      trust: 'iOS · 11 भाषाएँ · TikTok, Instagram और YouTube पर सीधे पोस्ट करें',
      featuresH: 'शुरू करने के आठ तरीके',
      featuresSub: 'हर स्टूडियो एक जैसा आसान तरीका अपनाता है: बताएं, जाँचें, पोस्ट करें।',
      features: [
        { name: 'हिट को फिर से बनाएं', description: 'अपनी पसंदीदा रील पेस्ट करें — Viral Factory उसे सीन-दर-सीन दोबारा बनाता है, आपके प्रोडक्ट को मुख्य भूमिका में रखकर।' },
        { name: 'शॉर्ट वीडियो विज्ञापन', description: 'किसी प्रोडक्ट या ऑफ़र को स्क्रिप्ट के साथ तैयार, पोस्ट करने लायक वर्टिकल वीडियो विज्ञापन में बदलें।' },
        { name: 'क्रिएटर टेस्टिमोनियल', description: 'अपने प्रोडक्ट के लिए कैमरे की ओर देखकर बोलता हुआ UGC-स्टाइल टेस्टिमोनियल पाएं — न कोई क्रिएटर बुक करना, न कैमरा पकड़ना।' },
        { name: 'स्वाइप पोस्ट', description: 'एक आइडिया, हुक, इमेजेज़, कैप्शन और हैशटैग सहित पूरी मल्टी-स्लाइड कैरोसेल बन जाता है।' },
        { name: 'सिनेमैटिक शॉर्ट', description: 'बिना नैरेटर वाला एक सिनेमाई सीन वीडियो, सिर्फ़ एक विवरण से बनाया गया।' },
        { name: 'अपने वीडियो में जोड़ें', description: 'पहले से कोई क्लिप है? बिना दोबारा शूट किए चेहरा, प्रोडक्ट या ऑब्जेक्ट बदलें।' },
        { name: 'AI कैरेक्टर', description: 'किसी किरदार का चेहरा और आवाज़ एक बार डिज़ाइन करें, फिर हर आगे की वीडियो में दोबारा इस्तेमाल करें।' },
        { name: 'कैमियो', description: 'अपनी एक फ़ोटो अपलोड करें और जनरेट किए गए सीन के अंदर खुद नज़र आएं।' },
      ],
      workflowH: 'रोज़ाना पोस्ट करने की आदत के लिए बनाया गया',
      workflowSub: 'वे हिस्से जो लगातार बने रहना आसान बनाते हैं।',
      workflow: [
        { name: 'रोज़ 10 नए हुक', description: 'हर सुबह ऐप में दस नए हुक और दस फ़ॉर्मैट मिलते हैं — किसी एक पर टैप करें और पहले से आधा लिखा हुआ प्रोजेक्ट शुरू हो जाता है।' },
        { name: 'रेंडर होने से पहले रिव्यू', description: 'वीडियो बनने से पहले हर सीन की इमेज को अप्रूव, एडिट या दोबारा जनरेट करें, ताकि फ़ाइनल नतीजे में कोई हैरानी न हो।' },
        { name: 'हर जगह पोस्ट करें', description: 'तैयार पोस्ट को TikTok, Instagram और YouTube पर शेड्यूल करें, या जब कोई प्लेटफ़ॉर्म सीधे पब्लिश करने की अनुमति न दे तो टैप-टू-पोस्ट असिस्ट का उपयोग करें।' },
      ],
      howTitle: 'आइडिया से एक्सपोर्ट तक, तीन चरणों में',
      howSub: 'हर स्टूडियो के पीछे एक जैसा तरीका।',
      steps: [
        'आप जो बनाना चाहते हैं उसे बताएं, या आज के किसी तैयार हुक पर टैप करें।',
        'स्टोरीबोर्ड और जनरेट किए गए सीन देखें — वीडियो बनने से पहले जो चाहें एडिट या दोबारा जनरेट करें।',
        'पोस्ट करने लायक फ़ाइल एक्सपोर्ट करें, या सीधे TikTok, Instagram या YouTube पर शेड्यूल करें।',
      ],
      finalH: 'अगले पाँच मिनट में आज की पोस्ट तैयार करें।',
      finalSub: 'डाउनलोड मुफ़्त है। कंटेंट जनरेट करने में क्रेडिट खर्च होते हैं — मासिक क्रेडिट के लिए सब्सक्राइब करें या ज़रूरत के हिसाब से क्रेडिट खरीदें।',
    },
    faqHome: [
      { q: 'Viral Factory क्या है?', a: 'Viral Factory एक iOS ऐप है जो किसी प्रॉम्प्ट, फ़ोटो या रील लिंक को पोस्ट करने लायक शॉर्ट-फ़ॉर्म कंटेंट में बदल देता है — बिना चेहरे वाली रील्स, UGC-स्टाइल विज्ञापन, स्वाइप कैरोसेल, सिनेमैटिक शॉर्ट्स, एक जैसा दिखने वाला AI कैरेक्टर, और असली चेहरे के साथ कैमियो।' },
      { q: 'क्या Viral Factory मुफ़्त है?', a: 'ऐप डाउनलोड करना मुफ़्त है। कंटेंट जनरेट करने में क्रेडिट खर्च होते हैं: सब्सक्रिप्शन में हर महीने क्रेडिट मिलते हैं, और अलग से क्रेडिट पैक भी खरीदे जा सकते हैं। सही लागत हर जनरेशन से पहले ऐप में दिखाई जाती है।' },
      { q: 'क्या मुझे अपना चेहरा दिखाना ज़रूरी है?', a: 'नहीं — ज़्यादातर स्टूडियो (वीडियो विज्ञापन, स्वाइप पोस्ट, सिनेमैटिक शॉर्ट्स) को बिल्कुल भी चेहरे की ज़रूरत नहीं होती। अगर आप दिखना चाहें, तो कैमियो और AI कैरेक्टर आपकी चुनी हुई एक ही रेफ़रेंस फ़ोटो से शुरू होते हैं।' },
      { q: 'क्या मैं वाकई कहीं और देखी हुई रील को दोबारा बना सकता हूँ?', a: 'हाँ — एक लिंक पेस्ट करें या स्क्रीन रिकॉर्डिंग अपलोड करें, और Viral Factory ओरिजिनल की जगह आपके अपने प्रोडक्ट या मैसेज के साथ स्ट्रक्चर, टेम्पो और हुक दोबारा बनाता है।' },
      { q: 'क्या मैं TikTok, Instagram और YouTube पर सीधे पोस्ट कर सकता हूँ?', a: 'हाँ — जहाँ प्लेटफ़ॉर्म अनुमति देता है वहाँ अपने-आप शेड्यूल और पब्लिश करने के लिए अकाउंट कनेक्ट करें, या बिल्ट-इन असिस्टेड फ़्लो इस्तेमाल करें: जब सीधा API उपलब्ध न हो, तो ऐप कैप्शन और मीडिया तैयार करके संबंधित प्लेटफ़ॉर्म के ऐप को सौंप देता है।' },
      { q: 'ऐप किन भाषाओं को सपोर्ट करता है?', a: 'अंग्रेज़ी, जर्मन, फ़्रेंच, स्पेनिश, इतालवी, पुर्तगाली, तुर्की, जापानी, कोरियाई, अरबी और हिन्दी।' },
    ],
    footer: {
      tagline: 'TikTok, Instagram और YouTube के लिए AI-जनरेटेड शॉर्ट-फ़ॉर्म कंटेंट।',
      legal: 'कानूनी',
      guides: 'गाइड',
      privacy: 'गोपनीयता',
      terms: 'नियम',
      support: 'सहायता',
      deleteAccount: 'खाता हटाएं',
      rights: 'सर्वाधिकार सुरक्षित।',
    },
  },
};
