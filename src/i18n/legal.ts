/**
 * Legal + support copy: Privacy Policy, Terms of Use, Support (FAQ) and the
 * account-deletion instructions. Every active locale ships full text —
 * translations are faithful to the English master, not literal machine
 * output. Content here is derived from the actual app/backend behavior
 * (see the repo's CLAUDE.md and the codebase), not a generic template.
 */
import type { Locale } from '../config/site';

export type LegalSection = { h: string; p?: string[]; ul?: string[] };
export type LegalDoc = { title: string; lead: string; intro: string; sections: LegalSection[] };
export type FaqItem = { q: string; a: string };
export type SupportDoc = { title: string; lead: string; intro: string; faqs: FaqItem[] };

export type LegalPack = {
  updatedLabel: string;
  effectiveDateLabel: string;
  privacy: LegalDoc;
  terms: LegalDoc;
  support: SupportDoc;
  deleteAccount: LegalDoc;
};

/** ISO date shown (localized) on Privacy + Terms. */
export const LEGAL_EFFECTIVE_DATE = '2026-09-26';

const en: LegalPack = {
  updatedLabel: 'Effective date',
  effectiveDateLabel: 'September 26, 2026',
  privacy: {
    title: 'Privacy Policy',
    lead: 'How Viral Factory collects, uses and protects your information.',
    intro:
      'This Privacy Policy explains what information the Viral Factory iOS app and this website collect, why, and the choices you have. Viral Factory is developed by Rıdvan Uyan, an individual developer, who is the controller of your information for the purposes described here.',
    sections: [
      {
        h: 'Information we collect',
        ul: [
          'Account identifiers — a random device identifier created the first time you open the app, used for your guest account on that device; if you sign in with Apple or Google instead, we receive your name, email address (or a private relay email) and the provider account ID.',
          'Content you provide — prompts and text you write; photos, videos or links you upload or paste, such as a reel link to remake, a reference photo for the Character or Cameo studios, or a screen recording to analyze.',
          'Generated content — the media, scripts and captions the app creates for you, and your generation and credit-transaction history.',
          'Purchase information — subscription and credit-pack purchases are handled by the App Store; RevenueCat processes purchase and entitlement events on our behalf. We never receive your card number.',
          'Social account connections — if you connect TikTok, Instagram or YouTube to publish content, we receive that account’s basic profile info (handle, display name, avatar) and store an encrypted access token so the app can publish on your behalf.',
          'Analytics — we use Mixpanel and PostHog to understand how the app is used. PostHog session replay is enabled for interaction analysis, but all on-screen text and images are masked before capture, so replay never shows your prompts, photos or generated media. Analytics uses a separate, random installation identifier — never your guest account identifier.',
          'Device and diagnostic data — app version, general device model and operating system, and language settings.',
          'Notification preferences — whether you have turned on the daily-idea reminder, stored locally on your device.',
        ],
        p: [
          'We do not use advertising trackers, and the app does not request Apple’s App Tracking Transparency permission.',
        ],
      },
      {
        h: 'How we use your information',
        ul: [
          'to operate the app and generate the content you request',
          'to authenticate you and maintain your account and credit balance',
          'to process purchases and manage subscriptions',
          'to publish or schedule content to social accounts you explicitly connect',
          'to deliver the daily hooks feature and, if enabled, a local reminder notification that never leaves your device',
          'to understand product usage, fix bugs and improve features',
          'to detect abuse, fraud and violations of our Terms of Use',
          'to respond to support requests you send us',
        ],
      },
      {
        h: 'AI generation and third-party processors',
        p: [
          'Content and reference material you submit are sent to fal.ai, our AI infrastructure provider, solely to generate the output you requested. Depending on the request, fal.ai routes the job to model providers that currently include OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz and OmniHuman. We do not hold separate direct accounts with these providers — fal.ai is the processor we contract with. None of these providers use your content to train their general-purpose models, and we do not use your content to train our own models.',
          'Uploaded reference photos and videos are kept only as long as needed to generate and let you review your result — currently about 30 days — and are then deleted.',
          'Generated media is stored on Amazon Web Services (S3) and, for some assets, Supabase Storage, and delivered through a content delivery network. Application data (accounts, projects, credit ledger) is stored in MongoDB. Our backend is hosted on DigitalOcean.',
        ],
      },
      {
        h: 'Sharing',
        p: ['We share information only with:'],
        ul: [
          'the service providers above, to the extent needed to run the app (AI generation, hosting, storage, analytics, purchase processing);',
          'the social platforms (TikTok, Instagram, YouTube) you explicitly connect and choose to publish to;',
          'a buyer or successor, if we are ever involved in a merger, acquisition or asset sale, subject to this Policy;',
          'law enforcement or others, if required by law or to protect our rights, users or the public.',
        ],
      },
      {
        h: 'What we don’t do',
        p: [
          'We do not sell personal data, and we never share your prompts, uploads or generated content with other users unless you explicitly choose to make something public.',
        ],
      },
      {
        h: 'Data retention',
        p: [
          'Your account and generated content are retained while your account is active. Uploaded reference media is deleted automatically once it is no longer needed to produce your result (about 30 days). You can delete individual generations in the app at any time.',
        ],
      },
      {
        h: 'Deleting your account',
        p: [
          'You can permanently delete your account at any time in the app: Profile → Settings → Delete Account. This immediately and permanently deletes your account, credit history, videos, characters, prompts and connected social accounts, and revokes the Sign in with Apple grant if used. It does not cancel an active App Store subscription — cancel that separately in your Apple ID settings. See our Delete Account page for full, step-by-step instructions, including how to request deletion by email if you no longer have the app.',
        ],
      },
      {
        h: 'Your rights under the GDPR (EEA, UK, Switzerland)',
        p: [
          'If you are located in the EEA, UK or Switzerland, you have the right to access, correct, delete and receive a copy of (portability) your personal data, and to object to or restrict certain processing. We process your data based on: performance of a contract (providing the app), your consent (for example, session-replay analytics), and our legitimate interests (security, abuse prevention, improving the service). To exercise any of these rights, email ridvan.uyn@gmail.com; we will respond within one month.',
        ],
      },
      {
        h: 'California residents (CCPA/CPRA)',
        p: [
          'California residents may request to know, delete or correct the personal information we hold about them, and to opt out of its “sale” or “sharing” — we do not sell personal information and do not use cross-context behavioral advertising trackers. Send requests to ridvan.uyn@gmail.com.',
        ],
      },
      {
        h: 'Children',
        p: [
          'Viral Factory is not directed to children under 13 (or the minimum age required in your country) and we do not knowingly collect their information. If you believe a child has provided us with personal information, contact us and we will delete it.',
        ],
      },
      {
        h: 'International data transfers',
        p: [
          'We and our service providers may process your information outside the country where you live, including in the United States. Where required, we rely on appropriate safeguards such as standard contractual clauses.',
        ],
      },
      {
        h: 'Security',
        p: [
          'We use industry-standard safeguards — including encryption in transit, encrypted storage of social-platform access tokens, and access controls on our systems — to protect your information. No method of storage or transmission is 100% secure.',
        ],
      },
      {
        h: 'Changes to this Policy',
        p: [
          'We may update this Policy from time to time. The effective date above reflects the latest revision; material changes will be reflected on this page.',
        ],
      },
      { h: 'Contact', p: ['Rıdvan Uyan (data controller) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'Terms of Use',
    lead: 'The terms governing your use of Viral Factory.',
    intro:
      'These Terms of Use (“Terms”) govern your use of the Viral Factory iOS app and this website (together, the “Service”), provided by Rıdvan Uyan (“we”, “us”). By downloading, accessing or using the Service, you agree to these Terms.',
    sections: [
      {
        h: 'The service',
        p: [
          'Viral Factory generates short-form content — video, images and captions — from prompts and reference material you provide, using third-party AI models. Generated output may be inaccurate, unexpected or unsuitable for your purpose; you are responsible for reviewing it before you publish or rely on it.',
        ],
      },
      {
        h: 'Apple’s licensing terms',
        p: [
          'Auto-renewable subscriptions purchased through the App Store are also governed by Apple’s Licensed Application End User License Agreement, available at apple.com/legal/internet-services/itunes/dev/stdeula. If these Terms conflict with that agreement on a subscription or purchase matter, Apple’s agreement governs.',
        ],
      },
      {
        h: 'Acceptable use',
        p: ['You agree not to use the Service to:'],
        ul: [
          'generate or distribute illegal content, or content that infringes someone else’s copyright, trademark, publicity or other rights;',
          'depict a real, identifiable person without their consent — including through the Cameo, AI character, or remake features;',
          'impersonate any person or organization, or generate content designed to deceive;',
          'generate sexual content involving minors under any circumstances — we have zero tolerance for this and will report it to the relevant authorities;',
          'harass, defame, or threaten any person;',
          'attempt to disrupt, reverse-engineer or abuse the Service, or circumvent credit limits or rate limits.',
        ],
      },
      {
        h: 'Your content and other people’s likeness',
        p: [
          'You keep ownership of the prompts, media you upload, and content you generate. You must own the rights to, or have permission to use, anything you upload — a photo, a video, a reel link. You grant us a limited license to process, store and transmit that content solely to provide the Service, including sending it to fal.ai and its model providers as described in our Privacy Policy. You are solely responsible for reviewing generated output and for how you use, publish or promote it, including complying with each social platform’s own rules when you publish through the Service.',
        ],
      },
      {
        h: 'AI output disclaimer',
        p: [
          'Content is generated by AI and may be inaccurate, low-quality, or coincidentally resemble other content. We do not guarantee any particular result, engagement or performance. You are responsible for fact-checking and for any legal review needed before you publish generated content.',
        ],
      },
      {
        h: 'Credits, purchases and subscriptions',
        ul: [
          'Generating content consumes credits; the cost is shown in the app before you generate.',
          'One-time credit packs do not expire unless stated otherwise at the time of purchase.',
          'Subscription plans include a credit allowance that refreshes each billing period; unused subscription credits do not roll over to the next period.',
          'Subscriptions automatically renew for the same term at the then-current price unless cancelled at least 24 hours before the end of the current period. Manage or cancel any time in Settings → [your name] → Subscriptions on your device — see our Support page.',
          'Except where required by law, all purchases are non-refundable; refund requests for App Store purchases are handled by Apple.',
        ],
      },
      {
        h: 'Termination',
        p: [
          'You may stop using the Service and delete your account at any time — see our Delete Account page. We may suspend or terminate your access for violating these Terms, misusing credits, fraud, or abuse of the Service, with or without notice.',
        ],
      },
      {
        h: 'Disclaimers',
        p: ['The Service is provided “as is” and “as available,” without warranties of any kind, to the maximum extent permitted by law.'],
      },
      {
        h: 'Limitation of liability',
        p: [
          'To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential or punitive damages, or for lost profits or data, arising from your use of the Service. Our total liability for any claim relating to the Service is limited to the greater of the amount you paid us in the 12 months before the claim arose, or USD 20.',
        ],
      },
      {
        h: 'Governing law',
        p: [
          'These Terms are governed by the laws of the Republic of Türkiye, without regard to conflict-of-law principles. If you are a consumer habitually resident in the European Union, the United Kingdom, or another jurisdiction with mandatory consumer-protection laws, this section does not deprive you of the protection of those mandatory laws or of your right to bring proceedings in your local courts.',
        ],
      },
      {
        h: 'Changes to these Terms',
        p: ['We may update these Terms from time to time; continued use of the Service after a change means you accept the update. We will update the effective date above.'],
      },
      { h: 'Contact', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'Support',
    lead: 'We’re here to help.',
    intro: 'Have a question or run into a problem? Email ridvan.uyn@gmail.com — we aim to reply within 2 business days.',
    faqs: [
      { q: 'How do credits work?', a: 'Every generation (a video, an image set, a carousel) costs a number of credits, shown before you confirm — the exact cost depends on the studio and quality tier you choose. A subscription includes a monthly credit allowance that refreshes each period and does not carry over; you can also buy a one-time credit pack, which does not expire.' },
      { q: 'How do I restore my purchases?', a: 'Open Viral Factory → Profile → Settings → Restore Purchases. Make sure you are signed in with the same Apple ID you purchased with.' },
      { q: 'How do I cancel my subscription?', a: 'Subscriptions are billed and managed by Apple, not by us. On your iPhone: Settings app → [your name] → Subscriptions → Viral Factory → Cancel Subscription. Cancelling stops future renewals; you keep access until the end of the period you already paid for.' },
      { q: 'How do I delete my account?', a: 'In the app: Profile → Settings → Delete Account. See our Delete Account page for exactly what gets deleted and how to request deletion by email if you no longer have the app.' },
      { q: 'What languages does the app support?', a: 'English, German, French, Spanish, Italian, Portuguese, Turkish, Japanese, Korean, Arabic and Hindi.' },
      { q: 'What do the studios do?', a: '“Remake a hit” rebuilds a reel you paste in with your own product in it. “Short video ad” and “Cinematic short” generate scripted video from a description. “Creator testimonial” makes a talking-head, UGC-style ad. “Swipe post” builds an image carousel. “AI character” keeps one persona consistent across videos. “Cameo” and “Swap into your video” put a real photo into a generated or existing scene. Daily hooks give you ten fresh ideas every morning, and finished posts can be scheduled straight to TikTok, Instagram and YouTube.' },
      { q: 'Why does the app ask for camera, photo library or microphone access?', a: 'Only so you can capture or choose photos and videos to use as input for generation, and so the app can save your finished videos to your photo library. See our Privacy Policy for details.' },
      { q: 'A generation failed but used my credits — what do I do?', a: 'Email us the approximate date and time and, if possible, a screenshot; we will investigate and restore credits for a confirmed system error.' },
    ],
  },
  deleteAccount: {
    title: 'Delete your account and data',
    lead: 'How to permanently delete your Viral Factory account, in the app or by email.',
    intro: 'You can permanently delete your Viral Factory account and all associated data at any time, directly from the app — you do not need to contact us.',
    sections: [
      {
        h: 'Delete in the app (recommended)',
        p: ['Open Viral Factory on your device and follow these steps:'],
        ul: [
          'Go to Profile (bottom tab).',
          'Tap Settings.',
          'Tap Delete Account, near the bottom of the screen.',
          'If you signed in with Apple, you may be asked to re-authenticate with Sign in with Apple to confirm it is you.',
          'Confirm deletion. This takes effect immediately and cannot be undone.',
        ],
      },
      {
        h: 'What gets deleted',
        ul: [
          'your account and profile information',
          'your credit balance and transaction history',
          'every video, image set, carousel and character you generated, and their source media',
          'connected social accounts (TikTok, Instagram, YouTube) and their stored access tokens',
          'saved prompts and notifications',
          'your Sign in with Apple / Google link (the Apple grant is revoked)',
        ],
      },
      {
        h: 'What isn’t automatically affected',
        p: [
          'Deleting your account does NOT cancel an active App Store subscription — cancel it separately in Settings → [your name] → Subscriptions on your device, or it will continue to renew.',
          'Content you already published to TikTok, Instagram or YouTube stays on those platforms; delete it there directly if you want it removed.',
        ],
      },
      {
        h: 'No access to the app?',
        p: ['Email ridvan.uyn@gmail.com from the address linked to your account (or describe your account as best you can) and ask us to delete your account and data. We complete manual deletion requests within a few business days.'],
      },
    ],
  },
};

const de: LegalPack = {
  updatedLabel: 'Gültig ab',
  effectiveDateLabel: '26. September 2026',
  privacy: {
    title: 'Datenschutzerklärung',
    lead: 'Wie Viral Factory deine Daten erhebt, nutzt und schützt.',
    intro:
      'Diese Datenschutzerklärung erklärt, welche Informationen die iOS-App Viral Factory und diese Website erheben, warum, und welche Wahlmöglichkeiten du hast. Viral Factory wird von Rıdvan Uyan, einem Einzelentwickler, entwickelt, der für die hier beschriebenen Zwecke für deine Daten verantwortlich ist.',
    sections: [
      {
        h: 'Informationen, die wir erheben',
        ul: [
          'Konto-Kennungen — eine zufällige Gerätekennung, die beim ersten Öffnen der App erstellt wird und für dein Gast-Konto auf diesem Gerät verwendet wird; meldest du dich stattdessen mit Apple oder Google an, erhalten wir deinen Namen, deine E-Mail-Adresse (oder eine private Weiterleitungsadresse) und die Anbieter-Konto-ID.',
          'Von dir bereitgestellte Inhalte — Prompts und Texte, die du schreibst; Fotos, Videos oder Links, die du hochlädst oder einfügst, etwa einen Reel-Link zum Nachbauen, ein Referenzfoto für die Studios Character oder Cameo, oder eine Bildschirmaufnahme zur Analyse.',
          'Generierte Inhalte — die Medien, Skripte und Bildunterschriften, die die App für dich erstellt, sowie dein Generierungs- und Credit-Transaktionsverlauf.',
          'Kaufinformationen — Abo- und Credit-Paket-Käufe werden über den App Store abgewickelt; RevenueCat verarbeitet Kauf- und Berechtigungsereignisse in unserem Auftrag. Wir erhalten nie deine Kartennummer.',
          'Verbindungen zu Social-Media-Konten — verbindest du TikTok, Instagram oder YouTube, um Inhalte zu veröffentlichen, erhalten wir die grundlegenden Profildaten dieses Kontos (Handle, Anzeigename, Avatar) und speichern ein verschlüsseltes Zugriffstoken, damit die App in deinem Namen veröffentlichen kann.',
          'Analyse — wir nutzen Mixpanel und PostHog, um die Nutzung der App zu verstehen. PostHog Session-Replay ist für die Interaktionsanalyse aktiviert, aber sämtlicher Bildschirmtext und alle Bilder werden vor der Aufzeichnung maskiert — Replays zeigen also nie deine Prompts, Fotos oder generierten Medien. Für Analytics wird eine separate, zufällige Installations-ID verwendet — niemals deine Gast-Konto-Kennung.',
          'Geräte- und Diagnosedaten — App-Version, allgemeines Gerätemodell und Betriebssystem sowie Spracheinstellungen.',
          'Benachrichtigungseinstellungen — ob du die tägliche Ideen-Erinnerung aktiviert hast, lokal auf deinem Gerät gespeichert.',
        ],
        p: ['Wir verwenden keine Werbe-Tracker, und die App fragt nicht die App Tracking Transparency-Berechtigung von Apple ab.'],
      },
      {
        h: 'Wie wir deine Informationen nutzen',
        ul: [
          'um die App zu betreiben und die von dir angeforderten Inhalte zu generieren',
          'um dich zu authentifizieren und dein Konto sowie dein Guthaben zu verwalten',
          'um Käufe zu verarbeiten und Abos zu verwalten',
          'um Inhalte auf von dir ausdrücklich verbundenen Social-Media-Konten zu veröffentlichen oder zu planen',
          'um die tägliche Hook-Funktion bereitzustellen und, falls aktiviert, eine lokale Erinnerung zu senden, die dein Gerät nie verlässt',
          'um die Produktnutzung zu verstehen, Fehler zu beheben und Funktionen zu verbessern',
          'um Missbrauch, Betrug und Verstöße gegen unsere Nutzungsbedingungen zu erkennen',
          'um auf Support-Anfragen zu antworten, die du uns schickst',
        ],
      },
      {
        h: 'KI-Generierung und Auftragsverarbeiter',
        p: [
          'Inhalte und Referenzmaterial, die du einreichst, werden an fal.ai, unseren KI-Infrastrukturanbieter, gesendet — ausschließlich um die von dir angeforderte Ausgabe zu erzeugen. Je nach Anfrage leitet fal.ai den Auftrag an Modellanbieter weiter, aktuell unter anderem OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz und OmniHuman. Wir unterhalten keine eigenen direkten Konten bei diesen Anbietern — fal.ai ist der Auftragsverarbeiter, mit dem wir einen Vertrag haben. Keiner dieser Anbieter nutzt deine Inhalte, um seine allgemeinen Modelle zu trainieren, und auch wir nutzen deine Inhalte nicht, um eigene Modelle zu trainieren.',
          'Hochgeladene Referenzfotos und -videos werden nur so lange aufbewahrt, wie es zur Erstellung und Überprüfung deines Ergebnisses nötig ist — derzeit etwa 30 Tage — und danach gelöscht.',
          'Generierte Medien werden auf Amazon Web Services (S3) und, für bestimmte Dateien, auf Supabase Storage gespeichert und über ein Content Delivery Network ausgeliefert. Anwendungsdaten (Konten, Projekte, Credit-Verlauf) werden in MongoDB gespeichert. Unser Backend wird bei DigitalOcean gehostet.',
        ],
      },
      {
        h: 'Weitergabe',
        p: ['Wir geben Informationen nur weiter an:'],
        ul: [
          'die oben genannten Dienstleister, soweit für den Betrieb der App nötig (KI-Generierung, Hosting, Speicherung, Analyse, Zahlungsabwicklung);',
          'die Social-Media-Plattformen (TikTok, Instagram, YouTube), die du ausdrücklich verbindest und für die Veröffentlichung auswählst;',
          'einen Käufer oder Rechtsnachfolger, sollten wir jemals an einer Fusion, Übernahme oder einem Verkauf von Vermögenswerten beteiligt sein, vorbehaltlich dieser Erklärung;',
          'Strafverfolgungsbehörden oder Dritte, sofern gesetzlich vorgeschrieben oder zum Schutz unserer Rechte, unserer Nutzer oder der Öffentlichkeit.',
        ],
      },
      {
        h: 'Was wir nicht tun',
        p: ['Wir verkaufen keine personenbezogenen Daten und geben deine Prompts, Uploads oder generierten Inhalte niemals an andere Nutzer weiter, es sei denn, du entscheidest dich ausdrücklich dafür, etwas öffentlich zu machen.'],
      },
      {
        h: 'Aufbewahrung',
        p: ['Dein Konto und generierte Inhalte werden aufbewahrt, solange dein Konto aktiv ist. Hochgeladene Referenzmedien werden automatisch gelöscht, sobald sie zur Erstellung deines Ergebnisses nicht mehr benötigt werden (etwa 30 Tage). Einzelne Generierungen kannst du jederzeit in der App löschen.'],
      },
      {
        h: 'Konto löschen',
        p: ['Du kannst dein Konto jederzeit dauerhaft in der App löschen: Profil → Einstellungen → Konto löschen. Dies löscht sofort und dauerhaft dein Konto, deinen Credit-Verlauf, Videos, Charaktere, Prompts und verbundene Social-Media-Konten und widerruft die Sign in with Apple-Berechtigung, falls verwendet. Ein aktives App-Store-Abo wird dadurch nicht gekündigt — kündige es separat in deinen Apple-ID-Einstellungen. Die vollständige Schritt-für-Schritt-Anleitung, auch zur Löschung per E-Mail ohne App-Zugriff, findest du auf unserer Seite „Konto löschen“.'],
      },
      {
        h: 'Deine Rechte nach der DSGVO (EWR, UK, Schweiz)',
        p: ['Befindest du dich im EWR, in Großbritannien oder der Schweiz, hast du das Recht auf Auskunft, Berichtigung, Löschung und Herausgabe (Datenübertragbarkeit) deiner personenbezogenen Daten sowie das Recht, bestimmten Verarbeitungen zu widersprechen oder sie einzuschränken. Wir verarbeiten deine Daten auf Grundlage der Vertragserfüllung (Bereitstellung der App), deiner Einwilligung (z. B. Session-Replay-Analyse) und unserer berechtigten Interessen (Sicherheit, Missbrauchsprävention, Weiterentwicklung des Dienstes). Um diese Rechte auszuüben, schreib an ridvan.uyn@gmail.com; wir antworten innerhalb eines Monats.'],
      },
      {
        h: 'Kalifornische Nutzer (CCPA/CPRA)',
        p: ['Nutzer mit Wohnsitz in Kalifornien können Auskunft, Löschung oder Berichtigung der über sie gespeicherten personenbezogenen Daten verlangen sowie einem „Verkauf“ oder „Teilen“ widersprechen — wir verkaufen keine personenbezogenen Daten und verwenden keine kontextübergreifenden Werbe-Tracker. Anfragen an ridvan.uyn@gmail.com.'],
      },
      {
        h: 'Kinder',
        p: ['Viral Factory richtet sich nicht an Kinder unter 13 Jahren (oder dem in deinem Land vorgeschriebenen Mindestalter), und wir erheben wissentlich keine Daten von ihnen. Falls du glaubst, dass ein Kind uns personenbezogene Daten übermittelt hat, kontaktiere uns — wir löschen sie.'],
      },
      {
        h: 'Internationale Datenübermittlung',
        p: ['Wir und unsere Dienstleister verarbeiten deine Daten möglicherweise außerhalb deines Wohnsitzlandes, unter anderem in den USA. Wo erforderlich, stützen wir uns auf geeignete Garantien wie Standardvertragsklauseln.'],
      },
      {
        h: 'Sicherheit',
        p: ['Wir setzen branchenübliche Schutzmaßnahmen ein — darunter Verschlüsselung während der Übertragung, verschlüsselte Speicherung von Social-Media-Zugriffstoken und Zugriffskontrollen auf unseren Systemen —, um deine Daten zu schützen. Keine Speicher- oder Übertragungsmethode ist zu 100 % sicher.'],
      },
      {
        h: 'Änderungen dieser Erklärung',
        p: ['Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Das oben genannte Gültigkeitsdatum spiegelt die letzte Überarbeitung wider; wesentliche Änderungen werden auf dieser Seite kenntlich gemacht.'],
      },
      { h: 'Kontakt', p: ['Rıdvan Uyan (Verantwortlicher) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'Nutzungsbedingungen',
    lead: 'Die Bedingungen für die Nutzung von Viral Factory.',
    intro:
      'Diese Nutzungsbedingungen („Bedingungen“) regeln deine Nutzung der iOS-App Viral Factory und dieser Website (zusammen der „Dienst“), bereitgestellt von Rıdvan Uyan („wir“, „uns“). Mit dem Herunterladen, Aufrufen oder Nutzen des Dienstes stimmst du diesen Bedingungen zu.',
    sections: [
      {
        h: 'Der Dienst',
        p: ['Viral Factory generiert Kurzform-Inhalte — Video, Bilder und Bildunterschriften — aus Prompts und Referenzmaterial, das du bereitstellst, mithilfe von KI-Modellen Dritter. Generierte Ausgaben können ungenau, unerwartet oder für deinen Zweck ungeeignet sein; du bist dafür verantwortlich, sie zu prüfen, bevor du sie veröffentlichst oder dich darauf verlässt.'],
      },
      {
        h: 'Apples Lizenzbedingungen',
        p: ['Automatisch verlängernde Abos, die über den App Store gekauft werden, unterliegen zusätzlich Apples Lizenzvertrag für Endnutzer (Licensed Application End User License Agreement), abrufbar unter apple.com/legal/internet-services/itunes/dev/stdeula. Widersprechen sich diese Bedingungen und dieser Vertrag in einer Abo- oder Kauffrage, gilt Apples Vertrag.'],
      },
      {
        h: 'Zulässige Nutzung',
        p: ['Du verpflichtest dich, den Dienst nicht zu nutzen, um:'],
        ul: [
          'rechtswidrige Inhalte zu erstellen oder zu verbreiten, oder Inhalte, die Urheberrechte, Marken, Persönlichkeitsrechte oder sonstige Rechte Dritter verletzen;',
          'eine reale, identifizierbare Person ohne deren Einwilligung darzustellen — auch über die Funktionen Cameo, KI-Charakter oder „Hit nachbauen“;',
          'sich als eine andere Person oder Organisation auszugeben oder täuschende Inhalte zu erstellen;',
          'sexuelle Inhalte mit Minderjährigen zu erzeugen — hierfür gilt Nulltoleranz, Verstöße werden den zuständigen Behörden gemeldet;',
          'andere Personen zu belästigen, zu verleumden oder zu bedrohen;',
          'den Dienst zu stören, zurückzuentwickeln oder zu missbrauchen, oder Credit- bzw. Ratenlimits zu umgehen.',
        ],
      },
      {
        h: 'Deine Inhalte und das Abbild anderer Personen',
        p: ['Du behältst das Eigentum an den Prompts, hochgeladenen Medien und generierten Inhalten. Du musst die Rechte an allem besitzen oder zur Nutzung berechtigt sein, was du hochlädst — ein Foto, ein Video, ein Reel-Link. Du räumst uns eine beschränkte Lizenz ein, diese Inhalte zu verarbeiten, zu speichern und zu übermitteln, ausschließlich um den Dienst bereitzustellen, einschließlich der Übermittlung an fal.ai und dessen Modellanbieter, wie in unserer Datenschutzerklärung beschrieben. Du bist allein dafür verantwortlich, generierte Ausgaben zu prüfen und dafür, wie du sie nutzt, veröffentlichst oder bewirbst — einschließlich der Einhaltung der jeweiligen Regeln der Social-Media-Plattform, wenn du über den Dienst veröffentlichst.'],
      },
      {
        h: 'Haftungsausschluss für KI-Ausgaben',
        p: ['Inhalte werden von KI generiert und können ungenau, minderwertig sein oder zufällig anderen Inhalten ähneln. Wir garantieren kein bestimmtes Ergebnis, kein Engagement und keine bestimmte Leistung. Du bist für die Faktenprüfung und jede rechtliche Prüfung verantwortlich, die vor der Veröffentlichung generierter Inhalte nötig ist.'],
      },
      {
        h: 'Credits, Käufe und Abos',
        ul: [
          'Das Erstellen von Inhalten verbraucht Credits; die Kosten werden vor der Generierung in der App angezeigt.',
          'Einmalige Credit-Pakete verfallen nicht, sofern beim Kauf nichts anderes angegeben ist.',
          'Abo-Pläne enthalten ein Credit-Guthaben, das sich pro Abrechnungszeitraum erneuert; nicht genutzte Abo-Credits werden nicht in den nächsten Zeitraum übertragen.',
          'Abos verlängern sich automatisch zu den dann gültigen Preisen, sofern sie nicht mindestens 24 Stunden vor Ende des aktuellen Zeitraums gekündigt werden. Verwalten oder kündigen jederzeit über Einstellungen → [dein Name] → Abonnements auf deinem Gerät — siehe unsere Support-Seite.',
          'Sofern gesetzlich nicht anders vorgeschrieben, sind alle Käufe nicht erstattungsfähig; Rückerstattungsanfragen für App-Store-Käufe bearbeitet Apple.',
        ],
      },
      {
        h: 'Kündigung',
        p: ['Du kannst die Nutzung des Dienstes jederzeit beenden und dein Konto löschen — siehe unsere Seite „Konto löschen“. Wir können deinen Zugang bei Verstößen gegen diese Bedingungen, Missbrauch von Credits, Betrug oder Missbrauch des Dienstes mit oder ohne Vorankündigung sperren oder beenden.'],
      },
      { h: 'Haftungsausschlüsse', p: ['Der Dienst wird „wie besehen“ und „wie verfügbar“ ohne jegliche Gewährleistung bereitgestellt, soweit gesetzlich zulässig.'] },
      {
        h: 'Haftungsbeschränkung',
        p: ['Soweit gesetzlich zulässig, haften wir nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für entgangenen Gewinn oder Datenverlust im Zusammenhang mit deiner Nutzung des Dienstes. Unsere Gesamthaftung für Ansprüche im Zusammenhang mit dem Dienst ist begrenzt auf den höheren der Beträge: die Summe, die du uns in den 12 Monaten vor Entstehung des Anspruchs gezahlt hast, oder 20 US-Dollar.'],
      },
      {
        h: 'Anwendbares Recht',
        p: ['Diese Bedingungen unterliegen dem Recht der Republik Türkiye, ohne Anwendung von Kollisionsnormen. Bist du Verbraucher mit gewöhnlichem Aufenthalt in der Europäischen Union, dem Vereinigten Königreich oder einer anderen Rechtsordnung mit zwingendem Verbraucherschutzrecht, schränkt dieser Abschnitt den Schutz durch diese zwingenden Vorschriften oder dein Recht, vor deinen örtlichen Gerichten zu klagen, nicht ein.'],
      },
      { h: 'Änderungen dieser Bedingungen', p: ['Wir können diese Bedingungen von Zeit zu Zeit aktualisieren; die fortgesetzte Nutzung des Dienstes nach einer Änderung gilt als Zustimmung. Wir aktualisieren das oben genannte Gültigkeitsdatum.'] },
      { h: 'Kontakt', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'Support',
    lead: 'Wir helfen gerne weiter.',
    intro: 'Hast du eine Frage oder ein Problem? Schreib an ridvan.uyn@gmail.com — wir antworten in der Regel innerhalb von 2 Werktagen.',
    faqs: [
      { q: 'Wie funktionieren Credits?', a: 'Jede Generierung (ein Video, ein Bilder-Set, ein Karussell) kostet eine bestimmte Anzahl an Credits, die vor der Bestätigung angezeigt wird — die genauen Kosten hängen vom gewählten Studio und der Qualitätsstufe ab. Ein Abo enthält ein monatliches Guthaben, das sich pro Zeitraum erneuert und nicht übertragen wird; zusätzlich lässt sich ein einmaliges Credit-Paket kaufen, das nicht verfällt.' },
      { q: 'Wie stelle ich meine Käufe wieder her?', a: 'Öffne Viral Factory → Profil → Einstellungen → Käufe wiederherstellen. Achte darauf, mit derselben Apple-ID angemeldet zu sein, mit der du gekauft hast.' },
      { q: 'Wie kündige ich mein Abo?', a: 'Abos werden von Apple abgerechnet und verwaltet, nicht von uns. Auf dem iPhone: Einstellungen-App → [dein Name] → Abonnements → Viral Factory → Abo kündigen. Die Kündigung stoppt zukünftige Verlängerungen; der Zugang bleibt bis zum Ende des bereits bezahlten Zeitraums bestehen.' },
      { q: 'Wie lösche ich mein Konto?', a: 'In der App: Profil → Einstellungen → Konto löschen. Was dabei genau gelöscht wird und wie du die Löschung per E-Mail beantragst, wenn du keinen App-Zugriff mehr hast, steht auf unserer Seite „Konto löschen“.' },
      { q: 'Welche Sprachen unterstützt die App?', a: 'Englisch, Deutsch, Französisch, Spanisch, Italienisch, Portugiesisch, Türkisch, Japanisch, Koreanisch, Arabisch und Hindi.' },
      { q: 'Was machen die Studios?', a: '„Hit nachbauen“ baut ein von dir eingefügtes Reel mit deinem eigenen Produkt nach. „Kurzer Video-Ad“ und „Cinematic Short“ generieren ein Video mit Skript aus einer Beschreibung. „Creator-Testimonial“ erstellt eine Talking-Head-UGC-Werbung. „Swipe-Post“ baut ein Bilder-Karussell. „KI-Charakter“ hält eine Figur über mehrere Videos hinweg konsistent. „Cameo“ und „In dein Video einsetzen“ platzieren ein echtes Foto in einer generierten oder bestehenden Szene. Die täglichen Hooks liefern jeden Morgen zehn frische Ideen, und fertige Posts lassen sich direkt für TikTok, Instagram und YouTube planen.' },
      { q: 'Warum fragt die App nach Kamera-, Fotomediathek- oder Mikrofonzugriff?', a: 'Nur damit du Fotos und Videos für die Generierung aufnehmen oder auswählen kannst, und damit die App deine fertigen Videos in deiner Fotomediathek speichern kann. Details in unserer Datenschutzerklärung.' },
      { q: 'Eine Generierung ist fehlgeschlagen, hat aber Credits verbraucht — was tun?', a: 'Schreib uns ungefähres Datum und Uhrzeit sowie, wenn möglich, einen Screenshot; wir prüfen den Fall und erstatten Credits bei einem bestätigten Systemfehler zurück.' },
    ],
  },
  deleteAccount: {
    title: 'Konto und Daten löschen',
    lead: 'So löschst du dein Viral-Factory-Konto dauerhaft — in der App oder per E-Mail.',
    intro: 'Du kannst dein Viral-Factory-Konto und alle zugehörigen Daten jederzeit dauerhaft direkt in der App löschen — ohne uns kontaktieren zu müssen.',
    sections: [
      {
        h: 'In der App löschen (empfohlen)',
        p: ['Öffne Viral Factory auf deinem Gerät und folge diesen Schritten:'],
        ul: [
          'Gehe zu Profil (unten in der Navigation).',
          'Tippe auf Einstellungen.',
          'Tippe auf Konto löschen, weiter unten auf dem Bildschirm.',
          'Hast du dich mit Apple angemeldet, wirst du möglicherweise gebeten, dich per Sign in with Apple erneut zu authentifizieren, um dies zu bestätigen.',
          'Bestätige die Löschung. Sie wird sofort wirksam und kann nicht rückgängig gemacht werden.',
        ],
      },
      {
        h: 'Was gelöscht wird',
        ul: [
          'dein Konto und deine Profilinformationen',
          'dein Credit-Guthaben und der Transaktionsverlauf',
          'jedes von dir generierte Video, Bilder-Set, Karussell und jeder Charakter sowie deren Quellmedien',
          'verbundene Social-Media-Konten (TikTok, Instagram, YouTube) und deren gespeicherte Zugriffstoken',
          'gespeicherte Prompts und Benachrichtigungen',
          'deine Sign in with Apple-/Google-Verknüpfung (die Apple-Berechtigung wird widerrufen)',
        ],
      },
      {
        h: 'Was nicht automatisch betroffen ist',
        p: [
          'Das Löschen deines Kontos kündigt KEIN aktives App-Store-Abo — kündige es separat unter Einstellungen → [dein Name] → Abonnements auf deinem Gerät, sonst verlängert es sich weiter.',
          'Inhalte, die du bereits auf TikTok, Instagram oder YouTube veröffentlicht hast, bleiben dort bestehen; lösche sie bei Bedarf direkt auf der jeweiligen Plattform.',
        ],
      },
      {
        h: 'Kein Zugriff mehr auf die App?',
        p: ['Schreib von der mit deinem Konto verknüpften E-Mail-Adresse (oder beschreibe dein Konto so gut wie möglich) an ridvan.uyn@gmail.com und bitte um Löschung deines Kontos und deiner Daten. Manuelle Löschanfragen bearbeiten wir innerhalb weniger Werktage.'],
      },
    ],
  },
};

const fr: LegalPack = {
  updatedLabel: "Date d'effet",
  effectiveDateLabel: '26 septembre 2026',
  privacy: {
    title: 'Politique de confidentialité',
    lead: 'Comment Viral Factory collecte, utilise et protège vos informations.',
    intro:
      "Cette politique de confidentialité explique quelles informations l'application iOS Viral Factory et ce site web collectent, pourquoi, et les choix qui s'offrent à vous. Viral Factory est développée par Rıdvan Uyan, développeur individuel, responsable du traitement de vos données pour les finalités décrites ici.",
    sections: [
      {
        h: 'Informations que nous collectons',
        ul: [
          "Identifiants de compte — un identifiant d'appareil aléatoire créé à la première ouverture de l'app, utilisé pour votre compte invité sur cet appareil ; si vous vous connectez avec Apple ou Google, nous recevons votre nom, votre adresse e-mail (ou une adresse de relais privée) et l'identifiant de compte du fournisseur.",
          "Contenus que vous fournissez — prompts et textes que vous rédigez ; photos, vidéos ou liens que vous importez ou collez, comme un lien de reel à reproduire, une photo de référence pour les studios Personnage ou Cameo, ou un enregistrement d'écran à analyser.",
          "Contenus générés — les médias, scripts et légendes que l'app crée pour vous, ainsi que votre historique de générations et de transactions de crédits.",
          "Informations d'achat — les achats d'abonnement et de packs de crédits sont traités par l'App Store ; RevenueCat traite les événements d'achat et de droits en notre nom. Nous ne recevons jamais votre numéro de carte.",
          "Connexions à des comptes sociaux — si vous connectez TikTok, Instagram ou YouTube pour publier du contenu, nous recevons les informations de profil de base de ce compte (identifiant, nom affiché, avatar) et stockons un jeton d'accès chiffré permettant à l'app de publier en votre nom.",
          "Analytique — nous utilisons Mixpanel et PostHog pour comprendre l'usage de l'app. La relecture de session (session replay) de PostHog est activée pour l'analyse des interactions, mais tout texte et toute image à l'écran sont masqués avant capture : une relecture ne montre donc jamais vos prompts, photos ou contenus générés. L'analytique utilise un identifiant d'installation distinct et aléatoire — jamais votre identifiant de compte invité.",
          "Données d'appareil et de diagnostic — version de l'app, modèle d'appareil et système d'exploitation généraux, et paramètres de langue.",
          "Préférences de notification — si vous avez activé le rappel quotidien d'idées, stocké localement sur votre appareil.",
        ],
        p: ["Nous n'utilisons pas de traceurs publicitaires, et l'app ne demande pas l'autorisation App Tracking Transparency d'Apple."],
      },
      {
        h: 'Comment nous utilisons vos informations',
        ul: [
          "pour faire fonctionner l'app et générer le contenu que vous demandez",
          'pour vous authentifier et gérer votre compte et votre solde de crédits',
          'pour traiter les achats et gérer les abonnements',
          'pour publier ou planifier du contenu sur les comptes sociaux que vous connectez explicitement',
          "pour fournir la fonctionnalité des accroches quotidiennes et, si activé, un rappel local qui ne quitte jamais votre appareil",
          "pour comprendre l'usage du produit, corriger des bugs et améliorer les fonctionnalités",
          'pour détecter les abus, la fraude et les violations de nos Conditions d’utilisation',
          'pour répondre aux demandes d’assistance que vous nous envoyez',
        ],
      },
      {
        h: 'Génération IA et sous-traitants',
        p: [
          "Les contenus et le matériel de référence que vous soumettez sont envoyés à fal.ai, notre fournisseur d'infrastructure IA, uniquement pour générer le résultat demandé. Selon la demande, fal.ai achemine la tâche vers des fournisseurs de modèles incluant actuellement OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz et OmniHuman. Nous n'avons pas de comptes directs séparés auprès de ces fournisseurs — fal.ai est le sous-traitant avec lequel nous contractons. Aucun de ces fournisseurs n'utilise votre contenu pour entraîner ses modèles généraux, et nous n'utilisons pas non plus votre contenu pour entraîner nos propres modèles.",
          "Les photos et vidéos de référence importées sont conservées uniquement le temps nécessaire pour générer et vous permettre de vérifier votre résultat — environ 30 jours actuellement — puis supprimées.",
          "Les médias générés sont stockés sur Amazon Web Services (S3) et, pour certains fichiers, sur Supabase Storage, puis diffusés via un réseau de diffusion de contenu (CDN). Les données applicatives (comptes, projets, historique de crédits) sont stockées dans MongoDB. Notre backend est hébergé sur DigitalOcean.",
        ],
      },
      {
        h: 'Partage',
        p: ['Nous ne partageons des informations qu’avec :'],
        ul: [
          "les prestataires ci-dessus, dans la mesure nécessaire au fonctionnement de l'app (génération IA, hébergement, stockage, analytique, traitement des paiements) ;",
          'les plateformes sociales (TikTok, Instagram, YouTube) que vous connectez explicitement et choisissez pour publier ;',
          "un acquéreur ou successeur, en cas de fusion, acquisition ou cession d'actifs, sous réserve de la présente politique ;",
          "les autorités ou des tiers, si la loi l'exige ou pour protéger nos droits, nos utilisateurs ou le public.",
        ],
      },
      { h: 'Ce que nous ne faisons pas', p: ["Nous ne vendons pas de données personnelles et ne partageons jamais vos prompts, imports ou contenus générés avec d'autres utilisateurs, sauf si vous choisissez explicitement de rendre quelque chose public."] },
      { h: 'Conservation des données', p: ["Votre compte et vos contenus générés sont conservés tant que votre compte est actif. Les médias de référence importés sont supprimés automatiquement dès qu'ils ne sont plus nécessaires pour produire votre résultat (environ 30 jours). Vous pouvez supprimer des générations individuelles dans l'app à tout moment."] },
      { h: 'Supprimer votre compte', p: ["Vous pouvez supprimer définitivement votre compte à tout moment dans l'app : Profil → Réglages → Supprimer le compte. Cela supprime immédiatement et définitivement votre compte, votre historique de crédits, vos vidéos, personnages, prompts et comptes sociaux connectés, et révoque l'autorisation Sign in with Apple si utilisée. Cela n'annule pas un abonnement App Store actif — annulez-le séparément dans les réglages de votre identifiant Apple. Voir notre page « Supprimer le compte » pour la marche à suivre complète, y compris comment demander la suppression par e-mail si vous n'avez plus l'app."] },
      { h: 'Vos droits au titre du RGPD (EEE, Royaume-Uni, Suisse)', p: ["Si vous résidez dans l'EEE, au Royaume-Uni ou en Suisse, vous avez le droit d'accéder à vos données personnelles, de les rectifier, de les supprimer, d'en recevoir une copie (portabilité), et de vous opposer à certains traitements ou de les limiter. Nous traitons vos données sur la base de : l'exécution d'un contrat (fournir l'app), votre consentement (par exemple, l'analytique par relecture de session), et nos intérêts légitimes (sécurité, prévention des abus, amélioration du service). Pour exercer ces droits, écrivez à ridvan.uyn@gmail.com ; nous répondrons sous un mois."] },
      { h: 'Résidents de Californie (CCPA/CPRA)', p: ["Les résidents de Californie peuvent demander à connaître, supprimer ou corriger les informations personnelles que nous détenons à leur sujet, et s'opposer à leur « vente » ou « partage » — nous ne vendons pas d'informations personnelles et n'utilisons pas de traceurs publicitaires comportementaux intersites. Envoyez vos demandes à ridvan.uyn@gmail.com."] },
      { h: 'Enfants', p: ["Viral Factory ne s'adresse pas aux enfants de moins de 13 ans (ou l'âge minimum requis dans votre pays) et nous ne collectons pas sciemment leurs informations. Si vous pensez qu'un enfant nous a fourni des informations personnelles, contactez-nous et nous les supprimerons."] },
      { h: 'Transferts internationaux de données', p: ["Nous et nos prestataires pouvons traiter vos informations en dehors de votre pays de résidence, y compris aux États-Unis. Lorsque requis, nous nous appuyons sur des garanties appropriées telles que les clauses contractuelles types."] },
      { h: 'Sécurité', p: ["Nous utilisons des mesures de protection conformes aux standards du secteur — chiffrement en transit, stockage chiffré des jetons d'accès aux plateformes sociales, et contrôles d'accès sur nos systèmes — pour protéger vos informations. Aucune méthode de stockage ou de transmission n'est sûre à 100 %."] },
      { h: 'Modifications de cette politique', p: ['Nous pouvons mettre à jour cette politique de temps à autre. La date d’effet ci-dessus reflète la dernière révision ; les changements importants seront reflétés sur cette page.'] },
      { h: 'Contact', p: ['Rıdvan Uyan (responsable du traitement) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: "Conditions d'utilisation",
    lead: "Les conditions régissant votre utilisation de Viral Factory.",
    intro:
      "Les présentes Conditions d'utilisation (« Conditions ») régissent votre utilisation de l'application iOS Viral Factory et de ce site web (ensemble, le « Service »), fournis par Rıdvan Uyan (« nous »). En téléchargeant, accédant à ou utilisant le Service, vous acceptez ces Conditions.",
    sections: [
      { h: 'Le service', p: ["Viral Factory génère du contenu court — vidéo, images et légendes — à partir de prompts et de matériel de référence que vous fournissez, à l'aide de modèles d'IA tiers. Le résultat généré peut être inexact, inattendu ou inadapté à votre objectif ; vous êtes responsable de le vérifier avant de le publier ou de vous y fier."] },
      { h: "Conditions de licence d'Apple", p: ["Les abonnements à renouvellement automatique achetés via l'App Store sont également régis par le contrat de licence utilisateur final d'Apple (Licensed Application End User License Agreement), disponible sur apple.com/legal/internet-services/itunes/dev/stdeula. En cas de conflit entre ces Conditions et ce contrat sur une question d'abonnement ou d'achat, le contrat d'Apple prévaut."] },
      {
        h: 'Utilisation autorisée',
        p: ['Vous vous engagez à ne pas utiliser le Service pour :'],
        ul: [
          "générer ou diffuser du contenu illégal, ou du contenu portant atteinte aux droits d'auteur, à la marque, au droit à l'image ou à d'autres droits d'un tiers ;",
          "représenter une personne réelle et identifiable sans son consentement — y compris via les fonctionnalités Cameo, personnage IA ou « reproduire un carton » ;",
          "usurper l'identité d'une personne ou d'une organisation, ou générer du contenu destiné à tromper ;",
          "générer du contenu à caractère sexuel impliquant des mineurs, en toute circonstance — tolérance zéro, avec signalement aux autorités compétentes ;",
          "harceler, diffamer ou menacer une personne ;",
          "tenter de perturber, de désassembler ou d'abuser du Service, ou de contourner les limites de crédits ou de fréquence.",
        ],
      },
      { h: "Votre contenu et l'image d'autrui", p: ["Vous conservez la propriété des prompts, des médias importés et des contenus générés. Vous devez détenir les droits sur tout ce que vous importez, ou être autorisé à l'utiliser — une photo, une vidéo, un lien de reel. Vous nous accordez une licence limitée pour traiter, stocker et transmettre ce contenu dans le seul but de fournir le Service, y compris en l'envoyant à fal.ai et à ses fournisseurs de modèles comme décrit dans notre politique de confidentialité. Vous êtes seul responsable de la vérification du contenu généré et de la manière dont vous l'utilisez, le publiez ou le promouvez, y compris du respect des règles propres à chaque plateforme sociale lorsque vous publiez via le Service."] },
      { h: "Avertissement sur les résultats de l'IA", p: ["Le contenu est généré par IA et peut être inexact, de qualité médiocre, ou ressembler par coïncidence à un autre contenu. Nous ne garantissons aucun résultat, engagement ou performance particulier. Vous êtes responsable de la vérification des faits et de toute analyse juridique nécessaire avant de publier du contenu généré."] },
      {
        h: 'Crédits, achats et abonnements',
        ul: [
          "Générer du contenu consomme des crédits ; le coût est affiché dans l'app avant la génération.",
          "Les packs de crédits à usage unique n'expirent pas, sauf indication contraire au moment de l'achat.",
          "Les formules d'abonnement incluent un quota de crédits qui se renouvelle à chaque période de facturation ; les crédits d'abonnement non utilisés ne sont pas reportés à la période suivante.",
          "Les abonnements se renouvellent automatiquement pour la même durée, au tarif alors en vigueur, sauf annulation au moins 24 heures avant la fin de la période en cours. Gérez ou annulez à tout moment via Réglages → [votre nom] → Abonnements sur votre appareil — voir notre page Assistance.",
          "Sauf obligation légale contraire, tous les achats sont non remboursables ; les demandes de remboursement pour les achats App Store sont traitées par Apple.",
        ],
      },
      { h: 'Résiliation', p: ["Vous pouvez cesser d'utiliser le Service et supprimer votre compte à tout moment — voir notre page « Supprimer le compte ». Nous pouvons suspendre ou résilier votre accès en cas de violation de ces Conditions, d'usage abusif des crédits, de fraude ou d'abus du Service, avec ou sans préavis."] },
      { h: 'Avertissements', p: ["Le Service est fourni « tel quel » et « selon disponibilité », sans garantie d'aucune sorte, dans la mesure permise par la loi."] },
      { h: 'Limitation de responsabilité', p: ["Dans la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ni de la perte de profits ou de données, résultant de votre utilisation du Service. Notre responsabilité totale pour toute réclamation liée au Service est limitée au montant le plus élevé entre ce que vous nous avez payé au cours des 12 mois précédant la réclamation, ou 20 USD."] },
      { h: 'Droit applicable', p: ["Ces Conditions sont régies par le droit de la République de Türkiye, sans égard aux principes de conflit de lois. Si vous êtes un consommateur résidant habituellement dans l'Union européenne, au Royaume-Uni, ou dans une autre juridiction dotée de lois impératives de protection des consommateurs, la présente section ne vous prive pas de la protection de ces lois impératives ni de votre droit d'agir devant vos tribunaux locaux."] },
      { h: 'Modifications de ces Conditions', p: ["Nous pouvons mettre à jour ces Conditions de temps à autre ; la poursuite de l'utilisation du Service après une modification vaut acceptation. Nous mettrons à jour la date d'effet ci-dessus."] },
      { h: 'Contact', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'Assistance',
    lead: 'Nous sommes là pour vous aider.',
    intro: 'Une question ou un problème ? Écrivez à ridvan.uyn@gmail.com — nous répondons généralement sous 2 jours ouvrés.',
    faqs: [
      { q: 'Comment fonctionnent les crédits ?', a: "Chaque génération (une vidéo, une série d'images, un carrousel) coûte un nombre de crédits affiché avant confirmation — le coût exact dépend du studio et du niveau de qualité choisis. Un abonnement inclut un quota mensuel de crédits qui se renouvelle chaque période sans report ; vous pouvez aussi acheter un pack de crédits à usage unique, qui n'expire pas." },
      { q: 'Comment restaurer mes achats ?', a: 'Ouvrez Viral Factory → Profil → Réglages → Restaurer les achats. Assurez-vous d’être connecté avec le même identifiant Apple que celui utilisé pour l’achat.' },
      { q: 'Comment annuler mon abonnement ?', a: 'Les abonnements sont facturés et gérés par Apple, pas par nous. Sur iPhone : app Réglages → [votre nom] → Abonnements → Viral Factory → Annuler l’abonnement. L’annulation arrête les futurs renouvellements ; l’accès reste actif jusqu’à la fin de la période déjà payée.' },
      { q: 'Comment supprimer mon compte ?', a: 'Dans l’app : Profil → Réglages → Supprimer le compte. Notre page « Supprimer le compte » détaille exactement ce qui est supprimé et comment demander la suppression par e-mail si vous n’avez plus l’app.' },
      { q: 'Quelles langues l’app prend-elle en charge ?', a: 'Anglais, allemand, français, espagnol, italien, portugais, turc, japonais, coréen, arabe et hindi.' },
      { q: 'Que font les studios ?', a: '« Reproduire un carton » reconstruit un reel que vous collez avec votre propre produit. « Pub vidéo courte » et « Court-métrage cinématique » génèrent une vidéo scénarisée à partir d’une description. « Témoignage créateur » crée une pub UGC face caméra. « Post carrousel » construit un carrousel d’images. « Personnage IA » garde une identité cohérente d’une vidéo à l’autre. « Cameo » et « Intégrer dans votre vidéo » placent une vraie photo dans une scène générée ou existante. Les accroches quotidiennes livrent dix idées fraîches chaque matin, et les posts finis peuvent être planifiés directement sur TikTok, Instagram et YouTube.' },
      { q: 'Pourquoi l’app demande-t-elle l’accès à l’appareil photo, à la photothèque ou au micro ?', a: 'Uniquement pour capturer ou choisir des photos et vidéos à utiliser comme source de génération, et pour enregistrer vos vidéos finies dans votre photothèque. Détails dans notre politique de confidentialité.' },
      { q: 'Une génération a échoué mais a consommé mes crédits — que faire ?', a: 'Écrivez-nous la date et l’heure approximatives et, si possible, une capture d’écran ; nous enquêterons et rembourserons les crédits en cas d’erreur système confirmée.' },
    ],
  },
  deleteAccount: {
    title: 'Supprimer votre compte et vos données',
    lead: 'Comment supprimer définitivement votre compte Viral Factory, dans l’app ou par e-mail.',
    intro: "Vous pouvez supprimer définitivement votre compte Viral Factory et toutes les données associées à tout moment, directement depuis l'app — sans avoir besoin de nous contacter.",
    sections: [
      {
        h: 'Supprimer dans l’app (recommandé)',
        p: ["Ouvrez Viral Factory sur votre appareil et suivez ces étapes :"],
        ul: [
          'Allez dans Profil (onglet du bas).',
          'Appuyez sur Réglages.',
          'Appuyez sur Supprimer le compte, vers le bas de l’écran.',
          'Si vous vous êtes connecté avec Apple, il se peut qu’on vous demande de vous réauthentifier via Sign in with Apple pour confirmer.',
          'Confirmez la suppression. Elle prend effet immédiatement et ne peut pas être annulée.',
        ],
      },
      {
        h: 'Ce qui est supprimé',
        ul: [
          'votre compte et vos informations de profil',
          'votre solde de crédits et votre historique de transactions',
          'chaque vidéo, série d’images, carrousel et personnage que vous avez générés, ainsi que leurs médias source',
          'les comptes sociaux connectés (TikTok, Instagram, YouTube) et leurs jetons d’accès stockés',
          'les prompts enregistrés et les notifications',
          'votre lien Sign in with Apple / Google (l’autorisation Apple est révoquée)',
        ],
      },
      {
        h: "Ce qui n'est pas affecté automatiquement",
        p: [
          "Supprimer votre compte n'annule PAS un abonnement App Store actif — annulez-le séparément via Réglages → [votre nom] → Abonnements sur votre appareil, sinon il continuera à se renouveler.",
          'Le contenu déjà publié sur TikTok, Instagram ou YouTube reste sur ces plateformes ; supprimez-le directement là-bas si vous le souhaitez.',
        ],
      },
      {
        h: 'Plus accès à l’app ?',
        p: ["Écrivez à ridvan.uyn@gmail.com depuis l'adresse liée à votre compte (ou décrivez votre compte du mieux possible) et demandez la suppression de votre compte et de vos données. Nous traitons les demandes manuelles sous quelques jours ouvrés."],
      },
    ],
  },
};

const es: LegalPack = {
  updatedLabel: 'Fecha de entrada en vigor',
  effectiveDateLabel: '26 de septiembre de 2026',
  privacy: {
    title: 'Política de privacidad',
    lead: 'Cómo Viral Factory recopila, usa y protege tu información.',
    intro:
      'Esta Política de privacidad explica qué información recopilan la app de iOS Viral Factory y este sitio web, por qué, y qué opciones tienes. Viral Factory está desarrollada por Rıdvan Uyan, desarrollador individual, responsable del tratamiento de tus datos para los fines aquí descritos.',
    sections: [
      {
        h: 'Información que recopilamos',
        ul: [
          'Identificadores de cuenta — un identificador de dispositivo aleatorio creado la primera vez que abres la app, usado para tu cuenta de invitado en ese dispositivo; si inicias sesión con Apple o Google, recibimos tu nombre, tu correo electrónico (o un correo de reenvío privado) y el ID de cuenta del proveedor.',
          'Contenido que proporcionas — prompts y textos que escribes; fotos, vídeos o enlaces que subes o pegas, como un enlace de reel para rehacer, una foto de referencia para los estudios de Personaje o Cameo, o una grabación de pantalla para analizar.',
          'Contenido generado — los medios, guiones y descripciones que la app crea para ti, y tu historial de generaciones y transacciones de créditos.',
          'Información de compra — las compras de suscripciones y paquetes de créditos las gestiona el App Store; RevenueCat procesa los eventos de compra y derechos en nuestro nombre. Nunca recibimos el número de tu tarjeta.',
          'Conexiones a cuentas sociales — si conectas TikTok, Instagram o YouTube para publicar contenido, recibimos la información básica de perfil de esa cuenta (usuario, nombre visible, avatar) y almacenamos un token de acceso cifrado para que la app pueda publicar en tu nombre.',
          'Analítica — usamos Mixpanel y PostHog para entender cómo se usa la app. La repetición de sesión (session replay) de PostHog está activada para el análisis de interacciones, pero todo el texto e imágenes en pantalla se ocultan antes de capturarse, así que una repetición nunca muestra tus prompts, fotos o contenido generado. La analítica usa un identificador de instalación separado y aleatorio — nunca tu identificador de cuenta de invitado.',
          'Datos de dispositivo y diagnóstico — versión de la app, modelo general del dispositivo y sistema operativo, y ajustes de idioma.',
          'Preferencias de notificación — si has activado el recordatorio diario de ideas, almacenado localmente en tu dispositivo.',
        ],
        p: ['No usamos rastreadores publicitarios, y la app no solicita el permiso de App Tracking Transparency de Apple.'],
      },
      {
        h: 'Cómo usamos tu información',
        ul: [
          'para operar la app y generar el contenido que solicitas',
          'para autenticarte y mantener tu cuenta y tu saldo de créditos',
          'para procesar compras y gestionar suscripciones',
          'para publicar o programar contenido en cuentas sociales que conectes explícitamente',
          'para ofrecer la función de ganchos diarios y, si está activado, un recordatorio local que nunca sale de tu dispositivo',
          'para entender el uso del producto, corregir errores y mejorar funciones',
          'para detectar abuso, fraude e infracciones de nuestros Términos de uso',
          'para responder a las solicitudes de soporte que nos envíes',
        ],
      },
      {
        h: 'Generación con IA y encargados del tratamiento',
        p: [
          'El contenido y el material de referencia que envías se transmiten a fal.ai, nuestro proveedor de infraestructura de IA, únicamente para generar el resultado solicitado. Según la solicitud, fal.ai dirige la tarea a proveedores de modelos que actualmente incluyen OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz y OmniHuman. No mantenemos cuentas directas propias con estos proveedores — fal.ai es el encargado del tratamiento con el que contratamos. Ninguno de estos proveedores usa tu contenido para entrenar sus modelos generales, y nosotros tampoco usamos tu contenido para entrenar nuestros propios modelos.',
          'Las fotos y vídeos de referencia subidos se conservan solo el tiempo necesario para generar y permitirte revisar tu resultado — actualmente unos 30 días — y después se eliminan.',
          'El contenido generado se almacena en Amazon Web Services (S3) y, para algunos archivos, en Supabase Storage, y se entrega a través de una red de distribución de contenidos (CDN). Los datos de la aplicación (cuentas, proyectos, historial de créditos) se almacenan en MongoDB. Nuestro backend está alojado en DigitalOcean.',
        ],
      },
      {
        h: 'Compartición de datos',
        p: ['Solo compartimos información con:'],
        ul: [
          'los proveedores de servicios anteriores, en la medida necesaria para operar la app (generación con IA, alojamiento, almacenamiento, analítica, procesamiento de pagos);',
          'las plataformas sociales (TikTok, Instagram, YouTube) que conectes explícitamente y elijas para publicar;',
          'un comprador o sucesor, si alguna vez participamos en una fusión, adquisición o venta de activos, sujeto a esta Política;',
          'autoridades u otros terceros, si la ley lo exige o para proteger nuestros derechos, a nuestros usuarios o al público.',
        ],
      },
      { h: 'Lo que no hacemos', p: ['No vendemos datos personales y nunca compartimos tus prompts, archivos subidos o contenido generado con otros usuarios, salvo que elijas explícitamente hacer algo público.'] },
      { h: 'Conservación de datos', p: ['Tu cuenta y el contenido generado se conservan mientras tu cuenta esté activa. Los medios de referencia subidos se eliminan automáticamente en cuanto ya no son necesarios para producir tu resultado (unos 30 días). Puedes eliminar generaciones individuales en la app en cualquier momento.'] },
      { h: 'Eliminar tu cuenta', p: ['Puedes eliminar tu cuenta de forma permanente en cualquier momento desde la app: Perfil → Ajustes → Eliminar cuenta. Esto elimina de inmediato y permanentemente tu cuenta, historial de créditos, vídeos, personajes, prompts y cuentas sociales conectadas, y revoca la autorización de Sign in with Apple si la usaste. Esto no cancela una suscripción activa del App Store — cancélala por separado en los ajustes de tu ID de Apple. Consulta nuestra página «Eliminar cuenta» para instrucciones completas, incluido cómo solicitar la eliminación por correo si ya no tienes la app.'] },
      { h: 'Tus derechos bajo el RGPD (EEE, Reino Unido, Suiza)', p: ['Si te encuentras en el EEE, el Reino Unido o Suiza, tienes derecho a acceder, corregir, eliminar y recibir una copia (portabilidad) de tus datos personales, y a oponerte a ciertos tratamientos o restringirlos. Tratamos tus datos con base en: la ejecución de un contrato (proporcionar la app), tu consentimiento (por ejemplo, la analítica por repetición de sesión), y nuestros intereses legítimos (seguridad, prevención de abuso, mejora del servicio). Para ejercer estos derechos, escribe a ridvan.uyn@gmail.com; responderemos en el plazo de un mes.'] },
      { h: 'Residentes de California (CCPA/CPRA)', p: ['Los residentes de California pueden solicitar conocer, eliminar o corregir la información personal que tenemos sobre ellos, y optar por no participar en su «venta» o «uso compartido» — no vendemos información personal ni usamos rastreadores publicitarios de comportamiento entre contextos. Envía tus solicitudes a ridvan.uyn@gmail.com.'] },
      { h: 'Menores', p: ['Viral Factory no está dirigida a menores de 13 años (o la edad mínima requerida en tu país) y no recopilamos su información a sabiendas. Si crees que un menor nos ha proporcionado información personal, contáctanos y la eliminaremos.'] },
      { h: 'Transferencias internacionales de datos', p: ['Nosotros y nuestros proveedores de servicios podemos tratar tu información fuera de tu país de residencia, incluido en Estados Unidos. Cuando sea necesario, nos basamos en garantías adecuadas como las cláusulas contractuales tipo.'] },
      { h: 'Seguridad', p: ['Usamos medidas de protección conformes a estándares del sector — incluido cifrado en tránsito, almacenamiento cifrado de tokens de acceso a plataformas sociales, y controles de acceso en nuestros sistemas — para proteger tu información. Ningún método de almacenamiento o transmisión es 100 % seguro.'] },
      { h: 'Cambios a esta Política', p: ['Podemos actualizar esta Política de vez en cuando. La fecha de entrada en vigor anterior refleja la última revisión; los cambios importantes se reflejarán en esta página.'] },
      { h: 'Contacto', p: ['Rıdvan Uyan (responsable del tratamiento) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'Términos de uso',
    lead: 'Los términos que rigen tu uso de Viral Factory.',
    intro:
      'Estos Términos de uso («Términos») rigen tu uso de la app de iOS Viral Factory y de este sitio web (conjuntamente, el «Servicio»), proporcionados por Rıdvan Uyan («nosotros»). Al descargar, acceder o usar el Servicio, aceptas estos Términos.',
    sections: [
      { h: 'El servicio', p: ['Viral Factory genera contenido corto — vídeo, imágenes y descripciones — a partir de prompts y material de referencia que proporcionas, usando modelos de IA de terceros. El resultado generado puede ser inexacto, inesperado o no adecuado para tu propósito; eres responsable de revisarlo antes de publicarlo o confiar en él.'] },
      { h: 'Términos de licencia de Apple', p: ['Las suscripciones de renovación automática compradas a través del App Store también se rigen por el Contrato de licencia de usuario final de aplicaciones con licencia de Apple, disponible en apple.com/legal/internet-services/itunes/dev/stdeula. Si estos Términos entran en conflicto con ese contrato en un asunto de suscripción o compra, prevalece el contrato de Apple.'] },
      {
        h: 'Uso aceptable',
        p: ['Aceptas no usar el Servicio para:'],
        ul: [
          'generar o distribuir contenido ilegal, o contenido que infrinja derechos de autor, marca, imagen u otros derechos de terceros;',
          'representar a una persona real e identificable sin su consentimiento — incluso mediante las funciones Cameo, personaje de IA o «rehacer un éxito»;',
          'suplantar a cualquier persona u organización, o generar contenido diseñado para engañar;',
          'generar contenido sexual que involucre a menores bajo cualquier circunstancia — tenemos tolerancia cero y lo denunciaremos a las autoridades pertinentes;',
          'acosar, difamar o amenazar a cualquier persona;',
          'intentar interrumpir, aplicar ingeniería inversa o abusar del Servicio, o eludir los límites de créditos o de uso.',
        ],
      },
      { h: 'Tu contenido y la imagen de otras personas', p: ['Conservas la propiedad de los prompts, los medios que subes y el contenido que generas. Debes ser titular de los derechos, o tener permiso para usar, todo lo que subas — una foto, un vídeo, un enlace de reel. Nos concedes una licencia limitada para procesar, almacenar y transmitir ese contenido únicamente para prestar el Servicio, incluido su envío a fal.ai y a sus proveedores de modelos, como se describe en nuestra Política de privacidad. Eres el único responsable de revisar el resultado generado y de cómo lo usas, publicas o promocionas, incluido el cumplimiento de las normas propias de cada plataforma social cuando publicas a través del Servicio.'] },
      { h: 'Aviso sobre los resultados de la IA', p: ['El contenido se genera mediante IA y puede ser inexacto, de baja calidad, o parecerse por coincidencia a otro contenido. No garantizamos ningún resultado, interacción o rendimiento en particular. Eres responsable de verificar los hechos y de cualquier revisión legal necesaria antes de publicar contenido generado.'] },
      {
        h: 'Créditos, compras y suscripciones',
        ul: [
          'Generar contenido consume créditos; el coste se muestra en la app antes de generar.',
          'Los paquetes de créditos de un solo uso no caducan, salvo que se indique lo contrario en el momento de la compra.',
          'Los planes de suscripción incluyen una asignación de créditos que se renueva cada periodo de facturación; los créditos de suscripción no usados no se trasladan al periodo siguiente.',
          'Las suscripciones se renuevan automáticamente por el mismo periodo al precio entonces vigente, salvo que se cancelen al menos 24 horas antes del final del periodo en curso. Gestiona o cancela en cualquier momento en Ajustes → [tu nombre] → Suscripciones en tu dispositivo — consulta nuestra página de Ayuda.',
          'Salvo que la ley exija lo contrario, todas las compras son no reembolsables; las solicitudes de reembolso de compras del App Store las gestiona Apple.',
        ],
      },
      { h: 'Terminación', p: ['Puedes dejar de usar el Servicio y eliminar tu cuenta en cualquier momento — consulta nuestra página «Eliminar cuenta». Podemos suspender o cancelar tu acceso por infringir estos Términos, usar créditos de forma indebida, fraude o abuso del Servicio, con o sin previo aviso.'] },
      { h: 'Renuncias de garantía', p: ['El Servicio se proporciona «tal cual» y «según disponibilidad», sin garantías de ningún tipo, en la medida permitida por la ley.'] },
      { h: 'Limitación de responsabilidad', p: ['En la medida permitida por la ley, no somos responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, ni de pérdida de beneficios o datos, derivados de tu uso del Servicio. Nuestra responsabilidad total por cualquier reclamación relacionada con el Servicio se limita al mayor de estos importes: lo que nos hayas pagado en los 12 meses anteriores a la reclamación, o 20 USD.'] },
      { h: 'Ley aplicable', p: ['Estos Términos se rigen por las leyes de la República de Türkiye, sin tener en cuenta los principios de conflicto de leyes. Si eres un consumidor con residencia habitual en la Unión Europea, el Reino Unido u otra jurisdicción con leyes imperativas de protección al consumidor, esta sección no te priva de la protección de esas leyes imperativas ni de tu derecho a iniciar acciones ante tus tribunales locales.'] },
      { h: 'Cambios a estos Términos', p: ['Podemos actualizar estos Términos de vez en cuando; el uso continuado del Servicio tras un cambio implica la aceptación de la actualización. Actualizaremos la fecha de entrada en vigor anterior.'] },
      { h: 'Contacto', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'Ayuda',
    lead: 'Estamos aquí para ayudarte.',
    intro: '¿Tienes una pregunta o un problema? Escribe a ridvan.uyn@gmail.com — normalmente respondemos en 2 días hábiles.',
    faqs: [
      { q: '¿Cómo funcionan los créditos?', a: 'Cada generación (un vídeo, un conjunto de imágenes, un carrusel) cuesta una cantidad de créditos que se muestra antes de confirmar — el coste exacto depende del estudio y el nivel de calidad elegidos. Una suscripción incluye una asignación mensual de créditos que se renueva cada periodo sin acumularse; también puedes comprar un paquete de créditos de un solo uso, que no caduca.' },
      { q: '¿Cómo restauro mis compras?', a: 'Abre Viral Factory → Perfil → Ajustes → Restaurar compras. Asegúrate de haber iniciado sesión con el mismo ID de Apple con el que compraste.' },
      { q: '¿Cómo cancelo mi suscripción?', a: 'Las suscripciones las factura y gestiona Apple, no nosotros. En tu iPhone: app Ajustes → [tu nombre] → Suscripciones → Viral Factory → Cancelar suscripción. Cancelar detiene futuras renovaciones; conservas el acceso hasta el final del periodo ya pagado.' },
      { q: '¿Cómo elimino mi cuenta?', a: 'En la app: Perfil → Ajustes → Eliminar cuenta. Nuestra página «Eliminar cuenta» detalla exactamente qué se elimina y cómo solicitar la eliminación por correo si ya no tienes la app.' },
      { q: '¿Qué idiomas admite la app?', a: 'Inglés, alemán, francés, español, italiano, portugués, turco, japonés, coreano, árabe e hindi.' },
      { q: '¿Qué hacen los estudios?', a: '«Rehacer un éxito» reconstruye un reel que pegas con tu propio producto. «Anuncio en vídeo corto» y «Corto cinematográfico» generan un vídeo con guion a partir de una descripción. «Testimonio de creador» crea un anuncio UGC hablando a cámara. «Publicación deslizable» construye un carrusel de imágenes. «Personaje de IA» mantiene una identidad coherente entre vídeos. «Cameo» e «Insertar en tu vídeo» colocan una foto real en una escena generada o existente. Los ganchos diarios ofrecen diez ideas frescas cada mañana, y las publicaciones terminadas se pueden programar directamente en TikTok, Instagram y YouTube.' },
      { q: '¿Por qué la app pide acceso a la cámara, la fototeca o el micrófono?', a: 'Solo para que puedas capturar o elegir fotos y vídeos como entrada para la generación, y para que la app pueda guardar tus vídeos terminados en tu fototeca. Más detalles en nuestra Política de privacidad.' },
      { q: 'Una generación falló pero consumió mis créditos — ¿qué hago?', a: 'Escríbenos la fecha y hora aproximadas y, si es posible, una captura de pantalla; investigaremos y restauraremos los créditos si se confirma un error del sistema.' },
    ],
  },
  deleteAccount: {
    title: 'Elimina tu cuenta y tus datos',
    lead: 'Cómo eliminar permanentemente tu cuenta de Viral Factory, desde la app o por correo.',
    intro: 'Puedes eliminar permanentemente tu cuenta de Viral Factory y todos los datos asociados en cualquier momento, directamente desde la app — no necesitas contactarnos.',
    sections: [
      {
        h: 'Eliminar desde la app (recomendado)',
        p: ['Abre Viral Factory en tu dispositivo y sigue estos pasos:'],
        ul: [
          'Ve a Perfil (pestaña inferior).',
          'Toca Ajustes.',
          'Toca Eliminar cuenta, cerca de la parte inferior de la pantalla.',
          'Si iniciaste sesión con Apple, puede que te pidamos volver a autenticarte con Sign in with Apple para confirmar que eres tú.',
          'Confirma la eliminación. Se aplica de inmediato y no se puede deshacer.',
        ],
      },
      {
        h: 'Qué se elimina',
        ul: [
          'tu cuenta e información de perfil',
          'tu saldo de créditos e historial de transacciones',
          'cada vídeo, conjunto de imágenes, carrusel y personaje que hayas generado, y sus medios de origen',
          'las cuentas sociales conectadas (TikTok, Instagram, YouTube) y sus tokens de acceso almacenados',
          'los prompts guardados y las notificaciones',
          'tu vínculo de Sign in with Apple / Google (se revoca la autorización de Apple)',
        ],
      },
      {
        h: 'Qué no se ve afectado automáticamente',
        p: [
          'Eliminar tu cuenta NO cancela una suscripción activa del App Store — cancélala por separado en Ajustes → [tu nombre] → Suscripciones en tu dispositivo, o seguirá renovándose.',
          'El contenido que ya publicaste en TikTok, Instagram o YouTube permanece en esas plataformas; elimínalo allí directamente si quieres que desaparezca.',
        ],
      },
      {
        h: '¿Sin acceso a la app?',
        p: ['Escribe a ridvan.uyn@gmail.com desde la dirección vinculada a tu cuenta (o describe tu cuenta lo mejor posible) y pide que eliminemos tu cuenta y tus datos. Completamos las solicitudes manuales de eliminación en pocos días hábiles.'],
      },
    ],
  },
};

const it: LegalPack = {
  updatedLabel: 'Data di efficacia',
  effectiveDateLabel: '26 settembre 2026',
  privacy: {
    title: 'Informativa sulla privacy',
    lead: 'Come Viral Factory raccoglie, usa e protegge le tue informazioni.',
    intro:
      'Questa Informativa sulla privacy spiega quali informazioni raccolgono l’app iOS Viral Factory e questo sito web, perché, e quali scelte hai a disposizione. Viral Factory è sviluppata da Rıdvan Uyan, sviluppatore individuale, titolare del trattamento dei tuoi dati per le finalità qui descritte.',
    sections: [
      {
        h: 'Informazioni che raccogliamo',
        ul: [
          'Identificatori account — un identificatore di dispositivo casuale creato al primo avvio dell’app, usato per il tuo account ospite su quel dispositivo; se accedi con Apple o Google, riceviamo il tuo nome, indirizzo email (o un indirizzo di inoltro privato) e l’ID account del provider.',
          'Contenuti che fornisci — prompt e testi che scrivi; foto, video o link che carichi o incolli, come un link a un reel da rifare, una foto di riferimento per gli studi Personaggio o Cameo, o una registrazione dello schermo da analizzare.',
          'Contenuti generati — i media, gli script e le didascalie che l’app crea per te, e la cronologia delle tue generazioni e transazioni di crediti.',
          'Informazioni di acquisto — gli acquisti di abbonamenti e pacchetti di crediti sono gestiti dall’App Store; RevenueCat elabora gli eventi di acquisto e diritti per nostro conto. Non riceviamo mai il numero della tua carta.',
          'Connessioni ad account social — se colleghi TikTok, Instagram o YouTube per pubblicare contenuti, riceviamo le informazioni di base del profilo di quell’account (handle, nome visualizzato, avatar) e memorizziamo un token di accesso cifrato che permette all’app di pubblicare per tuo conto.',
          'Analisi — usiamo Mixpanel e PostHog per capire come viene usata l’app. Il session replay di PostHog è attivo per l’analisi delle interazioni, ma tutto il testo e le immagini a schermo vengono mascherati prima della cattura, quindi un replay non mostra mai i tuoi prompt, foto o contenuti generati. L’analisi usa un identificatore di installazione separato e casuale — mai il tuo identificatore di account ospite.',
          'Dati del dispositivo e diagnostici — versione dell’app, modello generale del dispositivo e sistema operativo, e impostazioni della lingua.',
          'Preferenze di notifica — se hai attivato il promemoria giornaliero delle idee, memorizzato localmente sul tuo dispositivo.',
        ],
        p: ['Non utilizziamo tracker pubblicitari, e l’app non richiede il permesso App Tracking Transparency di Apple.'],
      },
      {
        h: 'Come usiamo le tue informazioni',
        ul: [
          'per far funzionare l’app e generare i contenuti richiesti',
          'per autenticarti e gestire il tuo account e il saldo crediti',
          'per elaborare acquisti e gestire abbonamenti',
          'per pubblicare o pianificare contenuti sugli account social che colleghi esplicitamente',
          'per fornire la funzione degli hook giornalieri e, se attivato, un promemoria locale che non lascia mai il tuo dispositivo',
          'per capire l’uso del prodotto, correggere bug e migliorare le funzionalità',
          'per rilevare abusi, frodi e violazioni dei nostri Termini di utilizzo',
          'per rispondere alle richieste di assistenza che ci invii',
        ],
      },
      {
        h: 'Generazione IA e responsabili del trattamento',
        p: [
          'I contenuti e il materiale di riferimento che invii vengono trasmessi a fal.ai, il nostro fornitore di infrastruttura IA, esclusivamente per generare il risultato richiesto. A seconda della richiesta, fal.ai instrada il compito a fornitori di modelli che attualmente includono OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz e OmniHuman. Non abbiamo account diretti separati con questi fornitori — fal.ai è il responsabile del trattamento con cui abbiamo un contratto. Nessuno di questi fornitori usa i tuoi contenuti per addestrare i propri modelli generali, e nemmeno noi usiamo i tuoi contenuti per addestrare i nostri modelli.',
          'Le foto e i video di riferimento caricati vengono conservati solo per il tempo necessario a generare e farti rivedere il risultato — attualmente circa 30 giorni — e poi eliminati.',
          'I contenuti generati sono memorizzati su Amazon Web Services (S3) e, per alcuni file, su Supabase Storage, e distribuiti tramite una rete di distribuzione dei contenuti (CDN). I dati applicativi (account, progetti, storico crediti) sono memorizzati in MongoDB. Il nostro backend è ospitato su DigitalOcean.',
        ],
      },
      {
        h: 'Condivisione',
        p: ['Condividiamo le informazioni solo con:'],
        ul: [
          'i fornitori di servizi sopra indicati, nella misura necessaria a far funzionare l’app (generazione IA, hosting, storage, analisi, elaborazione dei pagamenti);',
          'le piattaforme social (TikTok, Instagram, YouTube) che colleghi esplicitamente e scegli per la pubblicazione;',
          'un acquirente o successore, nel caso in cui fossimo coinvolti in una fusione, acquisizione o cessione di attività, soggetto alla presente Informativa;',
          'le autorità o terzi, se richiesto dalla legge o per proteggere i nostri diritti, i nostri utenti o il pubblico.',
        ],
      },
      { h: 'Cosa non facciamo', p: ['Non vendiamo dati personali e non condividiamo mai i tuoi prompt, i file caricati o i contenuti generati con altri utenti, a meno che tu non scelga esplicitamente di rendere pubblico qualcosa.'] },
      { h: 'Conservazione dei dati', p: ['Il tuo account e i contenuti generati vengono conservati finché il tuo account è attivo. I media di riferimento caricati vengono eliminati automaticamente non appena non sono più necessari per produrre il tuo risultato (circa 30 giorni). Puoi eliminare singole generazioni nell’app in qualsiasi momento.'] },
      { h: 'Eliminare il tuo account', p: ['Puoi eliminare permanentemente il tuo account in qualsiasi momento nell’app: Profilo → Impostazioni → Elimina account. Questo elimina immediatamente e permanentemente il tuo account, la cronologia crediti, i video, i personaggi, i prompt e gli account social collegati, e revoca l’autorizzazione Sign in with Apple se utilizzata. Non annulla un abbonamento App Store attivo — annullalo separatamente nelle impostazioni del tuo ID Apple. Consulta la nostra pagina «Elimina account» per le istruzioni complete, incluso come richiedere l’eliminazione via email se non hai più l’app.'] },
      { h: 'I tuoi diritti secondo il GDPR (SEE, Regno Unito, Svizzera)', p: ['Se ti trovi nel SEE, nel Regno Unito o in Svizzera, hai il diritto di accedere, correggere, eliminare e ricevere una copia (portabilità) dei tuoi dati personali, e di opporti a determinati trattamenti o limitarli. Trattiamo i tuoi dati sulla base di: esecuzione di un contratto (fornire l’app), il tuo consenso (ad esempio, l’analisi tramite session replay), e i nostri legittimi interessi (sicurezza, prevenzione degli abusi, miglioramento del servizio). Per esercitare questi diritti, scrivi a ridvan.uyn@gmail.com; risponderemo entro un mese.'] },
      { h: 'Residenti in California (CCPA/CPRA)', p: ['I residenti in California possono richiedere di conoscere, eliminare o correggere le informazioni personali che deteniamo su di loro, e di rinunciare alla loro «vendita» o «condivisione» — non vendiamo informazioni personali e non usiamo tracker pubblicitari comportamentali cross-context. Invia le richieste a ridvan.uyn@gmail.com.'] },
      { h: 'Minori', p: ['Viral Factory non è rivolta a minori di 13 anni (o l’età minima richiesta nel tuo paese) e non raccogliamo consapevolmente le loro informazioni. Se ritieni che un minore ci abbia fornito informazioni personali, contattaci e le elimineremo.'] },
      { h: 'Trasferimenti internazionali di dati', p: ['Noi e i nostri fornitori di servizi possiamo trattare le tue informazioni al di fuori del tuo paese di residenza, inclusi gli Stati Uniti. Ove richiesto, ci basiamo su garanzie adeguate come le clausole contrattuali tipo.'] },
      { h: 'Sicurezza', p: ['Utilizziamo misure di protezione conformi agli standard di settore — inclusa la cifratura in transito, la memorizzazione cifrata dei token di accesso alle piattaforme social, e controlli di accesso sui nostri sistemi — per proteggere le tue informazioni. Nessun metodo di memorizzazione o trasmissione è sicuro al 100%.'] },
      { h: 'Modifiche a questa Informativa', p: ['Potremmo aggiornare periodicamente questa Informativa. La data di efficacia sopra riportata riflette l’ultima revisione; le modifiche sostanziali saranno indicate in questa pagina.'] },
      { h: 'Contatti', p: ['Rıdvan Uyan (titolare del trattamento) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'Termini di utilizzo',
    lead: 'I termini che regolano il tuo utilizzo di Viral Factory.',
    intro:
      'I presenti Termini di utilizzo («Termini») regolano il tuo utilizzo dell’app iOS Viral Factory e di questo sito web (insieme, il «Servizio»), forniti da Rıdvan Uyan («noi»). Scaricando, accedendo o utilizzando il Servizio, accetti questi Termini.',
    sections: [
      { h: 'Il servizio', p: ['Viral Factory genera contenuti brevi — video, immagini e didascalie — a partire da prompt e materiale di riferimento che fornisci, utilizzando modelli IA di terze parti. Il risultato generato potrebbe essere impreciso, inatteso o inadatto al tuo scopo; sei responsabile di verificarlo prima di pubblicarlo o farvi affidamento.'] },
      { h: 'Termini di licenza Apple', p: ['Gli abbonamenti a rinnovo automatico acquistati tramite l’App Store sono inoltre disciplinati dal Contratto di licenza con l’utente finale per applicazioni con licenza di Apple, disponibile su apple.com/legal/internet-services/itunes/dev/stdeula. In caso di conflitto tra questi Termini e tale contratto su una questione di abbonamento o acquisto, prevale il contratto Apple.'] },
      {
        h: 'Uso consentito',
        p: ['Accetti di non utilizzare il Servizio per:'],
        ul: [
          'generare o distribuire contenuti illegali, o contenuti che violano copyright, marchi, diritti di immagine o altri diritti altrui;',
          'rappresentare una persona reale e identificabile senza il suo consenso — anche tramite le funzioni Cameo, personaggio IA o «rifai un successo»;',
          'impersonare qualsiasi persona o organizzazione, o generare contenuti ingannevoli;',
          'generare contenuti sessuali che coinvolgono minori in qualsiasi circostanza — tolleranza zero, con segnalazione alle autorità competenti;',
          'molestare, diffamare o minacciare qualsiasi persona;',
          'tentare di interrompere, decompilare o abusare del Servizio, o eludere i limiti di crediti o di frequenza.',
        ],
      },
      { h: 'I tuoi contenuti e l’immagine altrui', p: ['Mantieni la proprietà dei prompt, dei media caricati e dei contenuti generati. Devi possedere i diritti, o avere il permesso di utilizzare, qualsiasi cosa carichi — una foto, un video, un link a un reel. Ci concedi una licenza limitata per elaborare, memorizzare e trasmettere tali contenuti al solo scopo di fornire il Servizio, incluso l’invio a fal.ai e ai suoi fornitori di modelli come descritto nella nostra Informativa sulla privacy. Sei l’unico responsabile della verifica dei contenuti generati e di come li usi, pubblichi o promuovi, incluso il rispetto delle regole di ciascuna piattaforma social quando pubblichi tramite il Servizio.'] },
      { h: 'Avvertenza sui risultati dell’IA', p: ['I contenuti sono generati dall’IA e potrebbero essere imprecisi, di scarsa qualità, o somigliare per coincidenza ad altri contenuti. Non garantiamo alcun risultato, coinvolgimento o performance specifici. Sei responsabile della verifica dei fatti e di qualsiasi revisione legale necessaria prima di pubblicare contenuti generati.'] },
      {
        h: 'Crediti, acquisti e abbonamenti',
        ul: [
          'Generare contenuti consuma crediti; il costo è mostrato nell’app prima della generazione.',
          'I pacchetti di crediti monouso non scadono, salvo diversa indicazione al momento dell’acquisto.',
          'I piani in abbonamento includono una dotazione di crediti che si rinnova a ogni periodo di fatturazione; i crediti dell’abbonamento non utilizzati non vengono riportati al periodo successivo.',
          'Gli abbonamenti si rinnovano automaticamente per lo stesso periodo al prezzo allora vigente, salvo cancellazione almeno 24 ore prima della fine del periodo in corso. Gestisci o cancella in qualsiasi momento da Impostazioni → [il tuo nome] → Abbonamenti sul tuo dispositivo — vedi la nostra pagina Assistenza.',
          'Salvo quanto diversamente richiesto dalla legge, tutti gli acquisti non sono rimborsabili; le richieste di rimborso per gli acquisti App Store sono gestite da Apple.',
        ],
      },
      { h: 'Risoluzione', p: ['Puoi smettere di usare il Servizio ed eliminare il tuo account in qualsiasi momento — vedi la nostra pagina «Elimina account». Possiamo sospendere o terminare il tuo accesso per violazione di questi Termini, uso improprio dei crediti, frode o abuso del Servizio, con o senza preavviso.'] },
      { h: 'Esclusioni di garanzia', p: ['Il Servizio è fornito «così com’è» e «come disponibile», senza garanzie di alcun tipo, nella misura massima consentita dalla legge.'] },
      { h: 'Limitazione di responsabilità', p: ['Nella misura massima consentita dalla legge, non siamo responsabili per danni indiretti, incidentali, speciali, consequenziali o punitivi, né per perdita di profitti o dati, derivanti dal tuo utilizzo del Servizio. La nostra responsabilità totale per qualsiasi reclamo relativo al Servizio è limitata al maggiore tra: l’importo che ci hai pagato nei 12 mesi precedenti il reclamo, o 20 USD.'] },
      { h: 'Legge applicabile', p: ['Questi Termini sono disciplinati dalle leggi della Repubblica di Türkiye, senza riguardo ai principi di conflitto di leggi. Se sei un consumatore residente abitualmente nell’Unione Europea, nel Regno Unito, o in un’altra giurisdizione con leggi imperative di tutela dei consumatori, questa sezione non ti priva della protezione di tali leggi imperative né del tuo diritto di agire dinanzi ai tuoi tribunali locali.'] },
      { h: 'Modifiche a questi Termini', p: ['Potremmo aggiornare periodicamente questi Termini; l’uso continuato del Servizio dopo una modifica implica l’accettazione dell’aggiornamento. Aggiorneremo la data di efficacia sopra indicata.'] },
      { h: 'Contatti', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'Assistenza',
    lead: 'Siamo qui per aiutarti.',
    intro: 'Hai una domanda o un problema? Scrivi a ridvan.uyn@gmail.com — di norma rispondiamo entro 2 giorni lavorativi.',
    faqs: [
      { q: 'Come funzionano i crediti?', a: 'Ogni generazione (un video, un set di immagini, un carosello) costa un certo numero di crediti, mostrato prima della conferma — il costo esatto dipende dallo studio e dal livello di qualità scelti. Un abbonamento include una dotazione mensile di crediti che si rinnova a ogni periodo senza accumularsi; puoi anche acquistare un pacchetto di crediti monouso, che non scade.' },
      { q: 'Come ripristino i miei acquisti?', a: 'Apri Viral Factory → Profilo → Impostazioni → Ripristina acquisti. Assicurati di aver effettuato l’accesso con lo stesso ID Apple usato per l’acquisto.' },
      { q: 'Come annullo il mio abbonamento?', a: 'Gli abbonamenti sono fatturati e gestiti da Apple, non da noi. Sul tuo iPhone: app Impostazioni → [il tuo nome] → Abbonamenti → Viral Factory → Annulla abbonamento. L’annullamento interrompe i rinnovi futuri; mantieni l’accesso fino alla fine del periodo già pagato.' },
      { q: 'Come elimino il mio account?', a: 'Nell’app: Profilo → Impostazioni → Elimina account. La nostra pagina «Elimina account» descrive esattamente cosa viene eliminato e come richiedere l’eliminazione via email se non hai più l’app.' },
      { q: 'Quali lingue supporta l’app?', a: 'Inglese, tedesco, francese, spagnolo, italiano, portoghese, turco, giapponese, coreano, arabo e hindi.' },
      { q: 'Cosa fanno gli studi?', a: '«Rifai un successo» ricostruisce un reel che incolli, con il tuo prodotto al posto dell’originale. «Video ad breve» e «Cortometraggio cinematico» generano un video sceneggiato da una descrizione. «Testimonianza creator» crea una pubblicità UGC volto in camera. «Post a scorrimento» costruisce un carosello di immagini. «Personaggio IA» mantiene un’identità coerente tra i video. «Cameo» e «Inserisci nel tuo video» inseriscono una foto reale in una scena generata o esistente. Gli hook giornalieri offrono dieci idee fresche ogni mattina, e i post finiti possono essere pianificati direttamente su TikTok, Instagram e YouTube.' },
      { q: 'Perché l’app chiede l’accesso a fotocamera, libreria foto o microfono?', a: 'Solo per permetterti di catturare o scegliere foto e video da usare come input per la generazione, e per permettere all’app di salvare i tuoi video finiti nella libreria foto. Dettagli nella nostra Informativa sulla privacy.' },
      { q: 'Una generazione è fallita ma ha consumato i miei crediti — cosa faccio?', a: 'Scrivici la data e l’ora approssimative e, se possibile, uno screenshot; indagheremo e ripristineremo i crediti in caso di errore di sistema confermato.' },
    ],
  },
  deleteAccount: {
    title: 'Elimina il tuo account e i tuoi dati',
    lead: 'Come eliminare permanentemente il tuo account Viral Factory, dall’app o via email.',
    intro: 'Puoi eliminare permanentemente il tuo account Viral Factory e tutti i dati associati in qualsiasi momento, direttamente dall’app — senza bisogno di contattarci.',
    sections: [
      {
        h: 'Elimina dall’app (consigliato)',
        p: ['Apri Viral Factory sul tuo dispositivo e segui questi passaggi:'],
        ul: [
          'Vai su Profilo (scheda in basso).',
          'Tocca Impostazioni.',
          'Tocca Elimina account, verso la fine della schermata.',
          'Se hai effettuato l’accesso con Apple, potremmo chiederti di riautenticarti con Sign in with Apple per confermare che sei tu.',
          'Conferma l’eliminazione. Ha effetto immediato e non può essere annullata.',
        ],
      },
      {
        h: 'Cosa viene eliminato',
        ul: [
          'il tuo account e le informazioni di profilo',
          'il tuo saldo crediti e lo storico delle transazioni',
          'ogni video, set di immagini, carosello e personaggio che hai generato, e i relativi media di origine',
          'gli account social collegati (TikTok, Instagram, YouTube) e i loro token di accesso memorizzati',
          'i prompt salvati e le notifiche',
          'il tuo collegamento Sign in with Apple / Google (l’autorizzazione Apple viene revocata)',
        ],
      },
      {
        h: 'Cosa non viene interessato automaticamente',
        p: [
          'Eliminare il tuo account NON annulla un abbonamento App Store attivo — annullalo separatamente da Impostazioni → [il tuo nome] → Abbonamenti sul tuo dispositivo, altrimenti continuerà a rinnovarsi.',
          'I contenuti già pubblicati su TikTok, Instagram o YouTube restano su quelle piattaforme; eliminali direttamente lì se vuoi rimuoverli.',
        ],
      },
      {
        h: 'Non hai più accesso all’app?',
        p: ['Scrivi a ridvan.uyn@gmail.com dall’indirizzo collegato al tuo account (o descrivi il tuo account nel modo più preciso possibile) e chiedi l’eliminazione del tuo account e dei tuoi dati. Completiamo le richieste manuali di eliminazione entro pochi giorni lavorativi.'],
      },
    ],
  },
};

const pt: LegalPack = {
  updatedLabel: 'Data de vigência',
  effectiveDateLabel: '26 de setembro de 2026',
  privacy: {
    title: 'Política de Privacidade',
    lead: 'Como o Viral Factory coleta, usa e protege suas informações.',
    intro:
      'Esta Política de Privacidade explica quais informações o app iOS Viral Factory e este site coletam, por quê, e quais escolhas você tem. O Viral Factory é desenvolvido por Rıdvan Uyan, desenvolvedor individual, controlador dos seus dados para as finalidades aqui descritas.',
    sections: [
      {
        h: 'Informações que coletamos',
        ul: [
          'Identificadores de conta — um identificador de dispositivo aleatório criado na primeira vez que você abre o app, usado para sua conta de convidado nesse dispositivo; se você entrar com Apple ou Google, recebemos seu nome, e-mail (ou um e-mail de encaminhamento privado) e o ID de conta do provedor.',
          'Conteúdo que você fornece — prompts e textos que você escreve; fotos, vídeos ou links que você envia ou cola, como um link de reel para refazer, uma foto de referência para os estúdios de Personagem ou Cameo, ou uma gravação de tela para analisar.',
          'Conteúdo gerado — as mídias, roteiros e legendas que o app cria para você, e seu histórico de gerações e transações de créditos.',
          'Informações de compra — compras de assinaturas e pacotes de créditos são processadas pela App Store; a RevenueCat processa eventos de compra e direitos em nosso nome. Nunca recebemos o número do seu cartão.',
          'Conexões com contas sociais — se você conectar TikTok, Instagram ou YouTube para publicar conteúdo, recebemos as informações básicas de perfil dessa conta (identificador, nome de exibição, avatar) e armazenamos um token de acesso criptografado para que o app publique em seu nome.',
          'Análise — usamos Mixpanel e PostHog para entender como o app é usado. A repetição de sessão (session replay) do PostHog está ativada para análise de interação, mas todo texto e imagens na tela são mascarados antes da captura, então uma repetição nunca mostra seus prompts, fotos ou conteúdo gerado. A análise usa um identificador de instalação separado e aleatório — nunca o identificador da sua conta de convidado.',
          'Dados de dispositivo e diagnóstico — versão do app, modelo geral do dispositivo e sistema operacional, e configurações de idioma.',
          'Preferências de notificação — se você ativou o lembrete diário de ideias, armazenado localmente no seu dispositivo.',
        ],
        p: ['Não usamos rastreadores de publicidade, e o app não solicita a permissão de App Tracking Transparency da Apple.'],
      },
      {
        h: 'Como usamos suas informações',
        ul: [
          'para operar o app e gerar o conteúdo que você solicita',
          'para autenticar você e manter sua conta e saldo de créditos',
          'para processar compras e gerenciar assinaturas',
          'para publicar ou agendar conteúdo em contas sociais que você conectar explicitamente',
          'para oferecer o recurso de ganchos diários e, se ativado, um lembrete local que nunca sai do seu dispositivo',
          'para entender o uso do produto, corrigir bugs e melhorar recursos',
          'para detectar abuso, fraude e violações dos nossos Termos de Uso',
          'para responder às solicitações de suporte que você nos enviar',
        ],
      },
      {
        h: 'Geração por IA e operadores terceirizados',
        p: [
          'O conteúdo e o material de referência que você envia são transmitidos à fal.ai, nossa fornecedora de infraestrutura de IA, apenas para gerar o resultado solicitado. Dependendo da solicitação, a fal.ai encaminha a tarefa a provedores de modelos que atualmente incluem OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz e OmniHuman. Não mantemos contas diretas próprias com esses provedores — a fal.ai é a operadora com quem contratamos. Nenhum desses provedores usa seu conteúdo para treinar seus modelos gerais, e nós também não usamos seu conteúdo para treinar nossos próprios modelos.',
          'Fotos e vídeos de referência enviados são mantidos apenas pelo tempo necessário para gerar e permitir que você revise seu resultado — atualmente cerca de 30 dias — e depois são excluídos.',
          'O conteúdo gerado é armazenado na Amazon Web Services (S3) e, para alguns arquivos, no Supabase Storage, e entregue por meio de uma rede de distribuição de conteúdo (CDN). Os dados da aplicação (contas, projetos, histórico de créditos) são armazenados no MongoDB. Nosso backend é hospedado na DigitalOcean.',
        ],
      },
      {
        h: 'Compartilhamento',
        p: ['Compartilhamos informações apenas com:'],
        ul: [
          'os provedores de serviço acima, na medida necessária para operar o app (geração por IA, hospedagem, armazenamento, análise, processamento de pagamentos);',
          'as plataformas sociais (TikTok, Instagram, YouTube) que você conectar explicitamente e escolher para publicar;',
          'um comprador ou sucessor, caso estejamos envolvidos em uma fusão, aquisição ou venda de ativos, sujeito a esta Política;',
          'autoridades ou terceiros, se exigido por lei ou para proteger nossos direitos, nossos usuários ou o público.',
        ],
      },
      { h: 'O que não fazemos', p: ['Não vendemos dados pessoais e nunca compartilhamos seus prompts, envios ou conteúdo gerado com outros usuários, a menos que você escolha explicitamente tornar algo público.'] },
      { h: 'Retenção de dados', p: ['Sua conta e o conteúdo gerado são retidos enquanto sua conta estiver ativa. As mídias de referência enviadas são excluídas automaticamente assim que não forem mais necessárias para produzir seu resultado (cerca de 30 dias). Você pode excluir gerações individuais no app a qualquer momento.'] },
      { h: 'Excluindo sua conta', p: ['Você pode excluir permanentemente sua conta a qualquer momento no app: Perfil → Configurações → Excluir conta. Isso exclui imediata e permanentemente sua conta, histórico de créditos, vídeos, personagens, prompts e contas sociais conectadas, e revoga a autorização Sign in with Apple, se usada. Isso não cancela uma assinatura ativa da App Store — cancele-a separadamente nas configurações do seu ID Apple. Veja nossa página «Excluir conta» para instruções completas, incluindo como solicitar a exclusão por e-mail se você não tiver mais o app.'] },
      { h: 'Seus direitos sob o RGPD (EEE, Reino Unido, Suíça)', p: ['Se você estiver no EEE, no Reino Unido ou na Suíça, você tem o direito de acessar, corrigir, excluir e receber uma cópia (portabilidade) de seus dados pessoais, e de se opor a ou restringir certos tratamentos. Tratamos seus dados com base em: execução de um contrato (fornecer o app), seu consentimento (por exemplo, análise por repetição de sessão), e nossos interesses legítimos (segurança, prevenção de abusos, melhoria do serviço). Para exercer esses direitos, escreva para ridvan.uyn@gmail.com; responderemos em até um mês.'] },
      { h: 'Residentes da Califórnia (CCPA/CPRA)', p: ['Residentes da Califórnia podem solicitar saber, excluir ou corrigir as informações pessoais que mantemos sobre eles, e optar por não participar de sua «venda» ou «compartilhamento» — não vendemos informações pessoais nem usamos rastreadores de publicidade comportamental entre contextos. Envie solicitações para ridvan.uyn@gmail.com.'] },
      { h: 'Crianças', p: ['O Viral Factory não é direcionado a crianças menores de 13 anos (ou a idade mínima exigida no seu país) e não coletamos intencionalmente suas informações. Se você acredita que uma criança nos forneceu informações pessoais, entre em contato conosco para que possamos excluí-las.'] },
      { h: 'Transferências internacionais de dados', p: ['Nós e nossos provedores de serviço podemos tratar suas informações fora do seu país de residência, inclusive nos Estados Unidos. Quando exigido, contamos com salvaguardas adequadas, como cláusulas contratuais padrão.'] },
      { h: 'Segurança', p: ['Usamos salvaguardas alinhadas aos padrões do setor — incluindo criptografia em trânsito, armazenamento criptografado de tokens de acesso a plataformas sociais, e controles de acesso em nossos sistemas — para proteger suas informações. Nenhum método de armazenamento ou transmissão é 100% seguro.'] },
      { h: 'Alterações a esta Política', p: ['Podemos atualizar esta Política periodicamente. A data de vigência acima reflete a revisão mais recente; alterações relevantes serão refletidas nesta página.'] },
      { h: 'Contato', p: ['Rıdvan Uyan (controlador de dados) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'Termos de Uso',
    lead: 'Os termos que regem o uso do Viral Factory.',
    intro:
      'Estes Termos de Uso («Termos») regem seu uso do app iOS Viral Factory e deste site (em conjunto, o «Serviço»), fornecidos por Rıdvan Uyan («nós»). Ao baixar, acessar ou usar o Serviço, você concorda com estes Termos.',
    sections: [
      { h: 'O serviço', p: ['O Viral Factory gera conteúdo curto — vídeo, imagens e legendas — a partir de prompts e material de referência que você fornece, usando modelos de IA de terceiros. O resultado gerado pode ser impreciso, inesperado ou inadequado para o seu propósito; você é responsável por revisá-lo antes de publicá-lo ou confiar nele.'] },
      { h: 'Termos de licenciamento da Apple', p: ['Assinaturas de renovação automática compradas pela App Store também são regidas pelo Contrato de Licença de Usuário Final de Aplicativos Licenciados da Apple, disponível em apple.com/legal/internet-services/itunes/dev/stdeula. Se estes Termos conflitarem com esse contrato em uma questão de assinatura ou compra, o contrato da Apple prevalece.'] },
      {
        h: 'Uso aceitável',
        p: ['Você concorda em não usar o Serviço para:'],
        ul: [
          'gerar ou distribuir conteúdo ilegal, ou conteúdo que infrinja direitos autorais, marca registrada, direito de imagem ou outros direitos de terceiros;',
          'retratar uma pessoa real e identificável sem seu consentimento — inclusive por meio dos recursos Cameo, personagem de IA ou «refazer um sucesso»;',
          'se passar por qualquer pessoa ou organização, ou gerar conteúdo destinado a enganar;',
          'gerar conteúdo sexual envolvendo menores sob qualquer circunstância — temos tolerância zero e denunciaremos às autoridades competentes;',
          'assediar, difamar ou ameaçar qualquer pessoa;',
          'tentar interromper, fazer engenharia reversa ou abusar do Serviço, ou contornar limites de créditos ou de uso.',
        ],
      },
      { h: 'Seu conteúdo e a imagem de outras pessoas', p: ['Você mantém a propriedade dos prompts, das mídias enviadas e do conteúdo gerado. Você deve ser titular dos direitos, ou ter permissão para usar, tudo o que enviar — uma foto, um vídeo, um link de reel. Você nos concede uma licença limitada para processar, armazenar e transmitir esse conteúdo apenas para fornecer o Serviço, incluindo o envio à fal.ai e a seus provedores de modelos, conforme descrito em nossa Política de Privacidade. Você é o único responsável por revisar o resultado gerado e por como o usa, publica ou promove, incluindo o cumprimento das próprias regras de cada plataforma social ao publicar por meio do Serviço.'] },
      { h: 'Aviso sobre resultados de IA', p: ['O conteúdo é gerado por IA e pode ser impreciso, de baixa qualidade, ou se assemelhar por coincidência a outro conteúdo. Não garantimos nenhum resultado, engajamento ou desempenho específico. Você é responsável pela verificação de fatos e por qualquer revisão jurídica necessária antes de publicar conteúdo gerado.'] },
      {
        h: 'Créditos, compras e assinaturas',
        ul: [
          'Gerar conteúdo consome créditos; o custo é mostrado no app antes da geração.',
          'Pacotes de créditos avulsos não expiram, salvo indicação contrária no momento da compra.',
          'Os planos de assinatura incluem um pacote de créditos que se renova a cada período de cobrança; créditos de assinatura não usados não são transferidos para o próximo período.',
          'As assinaturas se renovam automaticamente pelo mesmo período, pelo preço então vigente, a menos que canceladas com pelo menos 24 horas de antecedência do fim do período atual. Gerencie ou cancele a qualquer momento em Ajustes → [seu nome] → Assinaturas no seu dispositivo — veja nossa página de Suporte.',
          'Salvo quando exigido por lei, todas as compras são não reembolsáveis; solicitações de reembolso de compras da App Store são tratadas pela Apple.',
        ],
      },
      { h: 'Rescisão', p: ['Você pode parar de usar o Serviço e excluir sua conta a qualquer momento — veja nossa página «Excluir conta». Podemos suspender ou encerrar seu acesso por violação destes Termos, uso indevido de créditos, fraude ou abuso do Serviço, com ou sem aviso prévio.'] },
      { h: 'Isenções de garantia', p: ['O Serviço é fornecido «como está» e «conforme disponível», sem garantias de qualquer tipo, na medida máxima permitida por lei.'] },
      { h: 'Limitação de responsabilidade', p: ['Na medida máxima permitida por lei, não somos responsáveis por danos indiretos, incidentais, especiais, consequenciais ou punitivos, nem por lucros cessantes ou perda de dados, decorrentes do seu uso do Serviço. Nossa responsabilidade total por qualquer reclamação relacionada ao Serviço está limitada ao maior valor entre: o que você nos pagou nos 12 meses anteriores à reclamação, ou USD 20.'] },
      { h: 'Lei aplicável', p: ['Estes Termos são regidos pelas leis da República da Türkiye, sem considerar princípios de conflito de leis. Se você for um consumidor habitualmente residente na União Europeia, no Reino Unido, ou em outra jurisdição com leis obrigatórias de proteção ao consumidor, esta seção não o priva da proteção dessas leis obrigatórias nem do seu direito de mover ações em seus tribunais locais.'] },
      { h: 'Alterações a estes Termos', p: ['Podemos atualizar estes Termos periodicamente; o uso continuado do Serviço após uma alteração significa que você aceita a atualização. Atualizaremos a data de vigência acima.'] },
      { h: 'Contato', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'Suporte',
    lead: 'Estamos aqui para ajudar.',
    intro: 'Tem uma dúvida ou um problema? Envie um e-mail para ridvan.uyn@gmail.com — normalmente respondemos em até 2 dias úteis.',
    faqs: [
      { q: 'Como funcionam os créditos?', a: 'Cada geração (um vídeo, um conjunto de imagens, um carrossel) custa uma quantidade de créditos, mostrada antes de você confirmar — o custo exato depende do estúdio e do nível de qualidade escolhidos. Uma assinatura inclui um pacote mensal de créditos que se renova a cada período sem acumular; você também pode comprar um pacote de créditos avulso, que não expira.' },
      { q: 'Como restauro minhas compras?', a: 'Abra o Viral Factory → Perfil → Ajustes → Restaurar Compras. Certifique-se de estar conectado com o mesmo ID Apple usado na compra.' },
      { q: 'Como cancelo minha assinatura?', a: 'As assinaturas são cobradas e gerenciadas pela Apple, não por nós. No seu iPhone: app Ajustes → [seu nome] → Assinaturas → Viral Factory → Cancelar assinatura. Cancelar interrompe as renovações futuras; você mantém o acesso até o fim do período já pago.' },
      { q: 'Como excluo minha conta?', a: 'No app: Perfil → Ajustes → Excluir Conta. Nossa página «Excluir conta» detalha exatamente o que é excluído e como solicitar a exclusão por e-mail se você não tiver mais o app.' },
      { q: 'Quais idiomas o app suporta?', a: 'Inglês, alemão, francês, espanhol, italiano, português, turco, japonês, coreano, árabe e hindi.' },
      { q: 'O que os estúdios fazem?', a: '«Refazer um sucesso» reconstrói um reel que você cola, com o seu produto no lugar do original. «Anúncio em vídeo curto» e «Curta cinematográfico» geram um vídeo roteirizado a partir de uma descrição. «Depoimento estilo criador» cria um anúncio UGC falando para a câmera. «Post em carrossel» monta um carrossel de imagens. «Personagem de IA» mantém uma identidade consistente entre vídeos. «Cameo» e «Inserir no seu vídeo» colocam uma foto real em uma cena gerada ou existente. Os ganchos diários trazem dez ideias novas toda manhã, e posts prontos podem ser agendados direto para TikTok, Instagram e YouTube.' },
      { q: 'Por que o app pede acesso à câmera, à galeria de fotos ou ao microfone?', a: 'Apenas para você capturar ou escolher fotos e vídeos como entrada para a geração, e para o app salvar seus vídeos prontos na sua galeria de fotos. Detalhes na nossa Política de Privacidade.' },
      { q: 'Uma geração falhou mas consumiu meus créditos — o que eu faço?', a: 'Envie a data e hora aproximadas e, se possível, uma captura de tela; vamos investigar e restaurar os créditos em caso de erro de sistema confirmado.' },
    ],
  },
  deleteAccount: {
    title: 'Exclua sua conta e seus dados',
    lead: 'Como excluir permanentemente sua conta do Viral Factory, pelo app ou por e-mail.',
    intro: 'Você pode excluir permanentemente sua conta do Viral Factory e todos os dados associados a qualquer momento, diretamente pelo app — sem precisar entrar em contato conosco.',
    sections: [
      {
        h: 'Excluir pelo app (recomendado)',
        p: ['Abra o Viral Factory no seu dispositivo e siga estes passos:'],
        ul: [
          'Vá em Perfil (aba inferior).',
          'Toque em Ajustes.',
          'Toque em Excluir Conta, perto do final da tela.',
          'Se você entrou com Apple, pode ser solicitado que você se reautentique com Sign in with Apple para confirmar que é você.',
          'Confirme a exclusão. Ela tem efeito imediato e não pode ser desfeita.',
        ],
      },
      {
        h: 'O que é excluído',
        ul: [
          'sua conta e informações de perfil',
          'seu saldo de créditos e histórico de transações',
          'todo vídeo, conjunto de imagens, carrossel e personagem que você gerou, e suas mídias de origem',
          'contas sociais conectadas (TikTok, Instagram, YouTube) e seus tokens de acesso armazenados',
          'prompts salvos e notificações',
          'seu vínculo de Sign in with Apple / Google (a autorização da Apple é revogada)',
        ],
      },
      {
        h: 'O que não é afetado automaticamente',
        p: [
          'Excluir sua conta NÃO cancela uma assinatura ativa da App Store — cancele-a separadamente em Ajustes → [seu nome] → Assinaturas no seu dispositivo, ou ela continuará se renovando.',
          'Conteúdo que você já publicou no TikTok, Instagram ou YouTube permanece nessas plataformas; exclua-o diretamente lá se quiser removê-lo.',
        ],
      },
      {
        h: 'Sem acesso ao app?',
        p: ['Envie um e-mail para ridvan.uyn@gmail.com a partir do endereço vinculado à sua conta (ou descreva sua conta da melhor forma possível) e peça a exclusão da sua conta e dos seus dados. Concluímos solicitações manuais de exclusão em poucos dias úteis.'],
      },
    ],
  },
};

const tr: LegalPack = {
  updatedLabel: 'Yürürlük tarihi',
  effectiveDateLabel: '26 Eylül 2026',
  privacy: {
    title: 'Gizlilik Politikası',
    lead: 'Viral Factory bilgilerini nasıl toplar, kullanır ve korur.',
    intro:
      'Bu Gizlilik Politikası, Viral Factory iOS uygulamasının ve bu web sitesinin hangi bilgileri, neden topladığını ve sahip olduğun seçenekleri açıklar. Viral Factory, burada açıklanan amaçlar için verilerinin sorumlusu olan bireysel geliştirici Rıdvan Uyan tarafından geliştirilmektedir.',
    sections: [
      {
        h: 'Topladığımız bilgiler',
        ul: [
          'Hesap kimlikleri — uygulamayı ilk açtığında oluşturulan ve o cihazdaki misafir hesabın için kullanılan rastgele bir cihaz kimliği; bunun yerine Apple ya da Google ile giriş yaparsan adını, e-posta adresini (ya da özel bir yönlendirme e-postasını) ve sağlayıcı hesap kimliğini alırız.',
          'Sağladığın içerikler — yazdığın prompt ve metinler; yeniden yapmak istediğin bir reel bağlantısı, Karakter ya da Cameo stüdyoları için bir referans fotoğrafı ya da analiz edilecek bir ekran kaydı gibi yüklediğin veya yapıştırdığın fotoğraf, video ya da bağlantılar.',
          'Üretilen içerikler — uygulamanın senin için oluşturduğu medya, senaryo ve açıklamalar, ayrıca üretim ve kredi işlemi geçmişin.',
          'Satın alma bilgileri — abonelik ve kredi paketi satın alımları App Store tarafından işlenir; RevenueCat satın alma ve hak olaylarını bizim adımıza işler. Kart numaranı asla almayız.',
          'Sosyal medya hesabı bağlantıları — içerik paylaşmak için TikTok, Instagram ya da YouTube bağlarsan, o hesabın temel profil bilgilerini (kullanıcı adı, görünen ad, avatar) alır ve uygulamanın senin adına paylaşım yapabilmesi için şifrelenmiş bir erişim anahtarı saklarız.',
          'Analitik — uygulamanın nasıl kullanıldığını anlamak için Mixpanel ve PostHog kullanırız. PostHog oturum tekrarı (session replay), etkileşim analizi için etkindir, ancak yakalamadan önce ekrandaki tüm metin ve görseller gizlenir; bu yüzden bir tekrar oynatma asla prompt’larını, fotoğraflarını ya da ürettiğin içerikleri göstermez. Analitik, ayrı ve rastgele bir kurulum kimliği kullanır — asla misafir hesap kimliğini değil.',
          'Cihaz ve tanılama verileri — uygulama sürümü, genel cihaz modeli ve işletim sistemi, ve dil ayarları.',
          'Bildirim tercihleri — günlük fikir hatırlatıcısını açıp açmadığın, cihazında yerel olarak saklanır.',
        ],
        p: ['Reklam takip teknolojileri kullanmıyoruz ve uygulama Apple’ın App Tracking Transparency iznini istemez.'],
      },
      {
        h: 'Bilgilerini nasıl kullanırız',
        ul: [
          'uygulamayı çalıştırmak ve talep ettiğin içeriği üretmek için',
          'seni doğrulamak ve hesabını, kredi bakiyeni sürdürmek için',
          'satın alımları işlemek ve abonelikleri yönetmek için',
          'açıkça bağladığın sosyal medya hesaplarına içerik yayınlamak ya da planlamak için',
          'günlük hook özelliğini sunmak ve etkinleştirildiyse, cihazından hiç çıkmayan yerel bir hatırlatma göndermek için',
          'ürün kullanımını anlamak, hataları düzeltmek ve özellikleri geliştirmek için',
          'kötüye kullanımı, dolandırıcılığı ve Kullanım Koşullarımızın ihlalini tespit etmek için',
          'bize gönderdiğin destek taleplerine yanıt vermek için',
        ],
      },
      {
        h: 'Yapay zeka üretimi ve veri işleyenler',
        p: [
          'Gönderdiğin içerik ve referans materyaller, yalnızca talep ettiğin çıktıyı üretmek amacıyla yapay zeka altyapı sağlayıcımız fal.ai’ye gönderilir. Talebe bağlı olarak fal.ai, işi şu anda OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz ve OmniHuman gibi model sağlayıcılarına yönlendirir. Bu sağlayıcılarla ayrı, doğrudan hesaplarımız yoktur — sözleşme yaptığımız veri işleyen fal.ai’dir. Bu sağlayıcıların hiçbiri içeriğini kendi genel modellerini eğitmek için kullanmaz, biz de içeriğini kendi modellerimizi eğitmek için kullanmayız.',
          'Yüklenen referans fotoğraf ve videolar, yalnızca sonucunu üretmek ve incelemene izin vermek için gereken süre boyunca — şu anda yaklaşık 30 gün — saklanır ve ardından silinir.',
          'Üretilen medya, Amazon Web Services (S3) üzerinde ve bazı dosyalar için Supabase Storage üzerinde saklanır ve bir içerik dağıtım ağı (CDN) üzerinden iletilir. Uygulama verileri (hesaplar, projeler, kredi kayıtları) MongoDB’de saklanır. Backend’imiz DigitalOcean üzerinde barındırılır.',
        ],
      },
      {
        h: 'Paylaşım',
        p: ['Bilgileri yalnızca şunlarla paylaşırız:'],
        ul: [
          'uygulamayı çalıştırmak için gerekli ölçüde yukarıdaki hizmet sağlayıcılarla (yapay zeka üretimi, barındırma, depolama, analitik, ödeme işleme);',
          'açıkça bağladığın ve paylaşım yapmayı seçtiğin sosyal medya platformlarıyla (TikTok, Instagram, YouTube);',
          'bu Politikaya tabi olarak, bir birleşme, satın alma ya da varlık satışına dahil olmamız durumunda bir alıcı ya da halefle;',
          'yasal olarak gerektiğinde ya da haklarımızı, kullanıcılarımızı ya da kamuyu korumak için kolluk kuvvetleri ya da diğer taraflarla.',
        ],
      },
      { h: 'Yapmadıklarımız', p: ['Kişisel verileri satmayız ve açıkça bir şeyi herkese açık yapmayı seçmediğin sürece prompt’larını, yüklemelerini ya da ürettiğin içeriği asla başka kullanıcılarla paylaşmayız.'] },
      { h: 'Veri saklama', p: ['Hesabın ve ürettiğin içerik, hesabın aktif olduğu sürece saklanır. Yüklenen referans medya, sonucunu üretmek için artık gerekli olmadığında (yaklaşık 30 gün) otomatik olarak silinir. Uygulamada istediğin zaman tekil üretimleri silebilirsin.'] },
      { h: 'Hesabını silme', p: ['Hesabını istediğin zaman uygulamada kalıcı olarak silebilirsin: Profil → Ayarlar → Hesabı Sil. Bu, hesabını, kredi geçmişini, videolarını, karakterlerini, prompt’larını ve bağlı sosyal medya hesaplarını hemen ve kalıcı olarak siler, kullanıldıysa Sign in with Apple iznini iptal eder. Bu, aktif bir App Store aboneliğini iptal etmez — bunu Apple Kimliği ayarlarından ayrıca iptal etmen gerekir. Uygulamaya artık erişimin yoksa e-posta yoluyla silme talep etme dahil, tam adım adım talimatlar için «Hesabı Sil» sayfamıza bakabilirsin.'] },
      { h: 'GDPR kapsamındaki hakların (AEA, Birleşik Krallık, İsviçre)', p: ['AEA, Birleşik Krallık ya da İsviçre’de bulunuyorsan, kişisel verilerine erişme, düzeltme, silme ve bir kopyasını alma (taşınabilirlik) ile belirli işlemlere itiraz etme ya da bunları kısıtlama hakkına sahipsin. Verilerini şu temellerle işleriz: bir sözleşmenin ifası (uygulamayı sağlamak), rızan (örneğin, oturum tekrarı analitiği) ve meşru menfaatlerimiz (güvenlik, kötüye kullanımın önlenmesi, hizmetin geliştirilmesi). Bu hakları kullanmak için ridvan.uyn@gmail.com adresine yaz; bir ay içinde yanıt veririz.'] },
      { h: 'Kaliforniya sakinleri (CCPA/CPRA)', p: ['Kaliforniya sakinleri, haklarında sakladığımız kişisel bilgileri öğrenme, silme ya da düzeltme talep edebilir ve bunların “satışından” ya da “paylaşımından” vazgeçebilir — kişisel bilgi satmayız ve bağlamlar arası davranışsal reklam takibi kullanmayız. Taleplerini ridvan.uyn@gmail.com adresine gönder.'] },
      { h: 'Çocuklar', p: ['Viral Factory, 13 yaşın altındaki çocuklara (ya da ülkende gereken asgari yaşın altındakilere) yönelik değildir ve bilerek bilgilerini toplamayız. Bir çocuğun bize kişisel bilgi sağladığını düşünüyorsan bizimle iletişime geç, bu bilgileri sileriz.'] },
      { h: 'Uluslararası veri aktarımları', p: ['Biz ve hizmet sağlayıcılarımız, bilgilerini Amerika Birleşik Devletleri dahil, yaşadığın ülke dışında işleyebiliriz. Gerekli olduğunda, standart sözleşme hükümleri gibi uygun güvencelere dayanırız.'] },
      { h: 'Güvenlik', p: ['Bilgilerini korumak için aktarım sırasında şifreleme, sosyal medya erişim anahtarlarının şifreli saklanması ve sistemlerimizde erişim kontrolleri dahil, sektör standardı önlemler kullanırız. Hiçbir saklama ya da iletim yöntemi %100 güvenli değildir.'] },
      { h: 'Bu Politikadaki değişiklikler', p: ['Bu Politikayı zaman zaman güncelleyebiliriz. Yukarıdaki yürürlük tarihi en son revizyonu yansıtır; önemli değişiklikler bu sayfaya yansıtılacaktır.'] },
      { h: 'İletişim', p: ['Rıdvan Uyan (veri sorumlusu) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'Kullanım Koşulları',
    lead: 'Viral Factory’yi kullanımını düzenleyen koşullar.',
    intro:
      'Bu Kullanım Koşulları («Koşullar»), Rıdvan Uyan («biz») tarafından sağlanan Viral Factory iOS uygulamasının ve bu web sitesinin (birlikte, «Hizmet») kullanımını düzenler. Hizmeti indirerek, erişerek ya da kullanarak bu Koşulları kabul etmiş olursun.',
    sections: [
      { h: 'Hizmet', p: ['Viral Factory, sağladığın prompt’lar ve referans materyallerden, üçüncü taraf yapay zeka modelleri kullanarak kısa video, görsel ve açıklamalardan oluşan kısa içerikler üretir. Üretilen çıktı yanlış, beklenmedik ya da amacına uygun olmayabilir; yayınlamadan ya da güvenmeden önce onu incelemekten sen sorumlusun.'] },
      { h: 'Apple’ın lisans koşulları', p: ['App Store üzerinden satın alınan otomatik yenilenen abonelikler, apple.com/legal/internet-services/itunes/dev/stdeula adresinde bulunan Apple’ın Lisanslı Uygulama Son Kullanıcı Lisans Sözleşmesi’ne de tabidir. Bu Koşullar, bir abonelik ya da satın alma konusunda bu sözleşmeyle çelişirse, Apple’ın sözleşmesi geçerli olur.'] },
      {
        h: 'Kabul edilebilir kullanım',
        p: ['Hizmeti şu amaçlarla kullanmamayı kabul edersin:'],
        ul: [
          'yasa dışı içerik üretmek ya da dağıtmak, ya da başkasının telif hakkını, markasını, kişilik haklarını ya da diğer haklarını ihlal eden içerik üretmek;',
          'Cameo, yapay zeka karakteri ya da «beğendiğini yeniden yap» özellikleri dahil, gerçek ve tanımlanabilir bir kişiyi rızası olmadan tasvir etmek;',
          'herhangi bir kişi ya da kuruluşun kimliğine bürünmek, ya da aldatmak amacıyla tasarlanmış içerik üretmek;',
          'herhangi bir koşulda reşit olmayanları içeren cinsel içerik üretmek — buna karşı sıfır toleransımız vardır ve ilgili yetkililere bildiririz;',
          'herhangi bir kişiyi taciz etmek, karalamak ya da tehdit etmek;',
          'Hizmeti aksatmaya, tersine mühendislik yapmaya ya da kötüye kullanmaya, ya da kredi ya da hız limitlerini aşmaya çalışmak.',
        ],
      },
      { h: 'İçeriğin ve başkalarının görüntüsü', p: ['Prompt’ların, yüklediğin medyanın ve ürettiğin içeriğin sahipliğini korursun. Yüklediğin her şeyin — bir fotoğraf, bir video, bir reel bağlantısı — haklarına sahip olmalı ya da kullanma izni almalısın. Bize, Gizlilik Politikamızda açıklandığı gibi bu içeriği fal.ai’ye ve onun model sağlayıcılarına göndermek dahil, yalnızca Hizmeti sağlamak amacıyla bu içeriği işlemek, saklamak ve iletmek için sınırlı bir lisans verirsin. Üretilen çıktıyı incelemekten ve Hizmet üzerinden paylaşım yaparken her sosyal medya platformunun kendi kurallarına uymak dahil, onu nasıl kullandığından, yayınladığından ya da tanıttığından yalnızca sen sorumlusun.'] },
      { h: 'Yapay zeka çıktısı feragatnamesi', p: ['İçerik yapay zeka tarafından üretilir ve yanlış, düşük kaliteli olabilir ya da tesadüfen başka bir içeriğe benzeyebilir. Belirli bir sonuç, etkileşim ya da performans garanti etmeyiz. Ürettiğin içeriği yayınlamadan önce gerekli olgu kontrolünden ve hukuki incelemeden sen sorumlusun.'] },
      {
        h: 'Krediler, satın alımlar ve abonelikler',
        ul: [
          'İçerik üretmek kredi harcar; maliyet üretmeden önce uygulamada gösterilir.',
          'Tek seferlik kredi paketleri, satın alma sırasında aksi belirtilmedikçe süresi dolmaz.',
          'Abonelik planları, her fatura döneminde yenilenen bir kredi kontenjanı içerir; kullanılmayan abonelik kredileri bir sonraki döneme devretmez.',
          'Abonelikler, mevcut dönemin bitiminden en az 24 saat önce iptal edilmedikçe, o sıradaki geçerli fiyattan aynı süre için otomatik olarak yenilenir. Cihazında Ayarlar → [adın] → Abonelikler üzerinden istediğin zaman yönet ya da iptal et — Destek sayfamıza bak.',
          'Yasaların gerektirdiği durumlar dışında, tüm satın alımlar iade edilemez; App Store satın alımları için iade talepleri Apple tarafından ele alınır.',
        ],
      },
      { h: 'Fesih', p: ['Hizmeti kullanmayı istediğin zaman durdurabilir ve hesabını silebilirsin — «Hesabı Sil» sayfamıza bak. Bu Koşulları ihlal etmen, kredileri kötüye kullanman, dolandırıcılık ya da Hizmetin kötüye kullanılması durumunda erişimini bildirimli ya da bildirimsiz olarak askıya alabilir ya da sonlandırabiliriz.'] },
      { h: 'Feragatnameler', p: ['Hizmet, yasaların izin verdiği azami ölçüde, hiçbir garanti olmaksızın «olduğu gibi» ve «mevcut olduğu şekilde» sağlanır.'] },
      { h: 'Sorumluluk sınırlaması', p: ['Yasaların izin verdiği azami ölçüde, Hizmeti kullanımından kaynaklanan dolaylı, arızi, özel, sonuç niteliğindeki ya da cezai zararlardan, ya da kaybedilen kârdan ya da veriden sorumlu değiliz. Hizmetle ilgili herhangi bir talep için toplam sorumluluğumuz, talebin doğduğu tarihten önceki 12 ay içinde bize ödediğin tutar ya da 20 ABD Doları’ndan hangisi büyükse onunla sınırlıdır.'] },
      { h: 'Uygulanacak hukuk', p: ['Bu Koşullar, kanunlar ihtilafı ilkeleri dikkate alınmaksızın, Türkiye Cumhuriyeti yasalarına tabidir. Avrupa Birliği, Birleşik Krallık ya da zorunlu tüketici koruma yasalarına sahip başka bir yargı bölgesinde mutad meskeni bulunan bir tüketiciysen, bu bölüm seni bu zorunlu yasaların korumasından ya da yerel mahkemelerinde dava açma hakkından mahrum bırakmaz.'] },
      { h: 'Bu Koşullardaki değişiklikler', p: ['Bu Koşulları zaman zaman güncelleyebiliriz; bir değişiklikten sonra Hizmeti kullanmaya devam etmen güncellemeyi kabul ettiğin anlamına gelir. Yukarıdaki yürürlük tarihini güncelleyeceğiz.'] },
      { h: 'İletişim', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'Destek',
    lead: 'Yardım etmek için buradayız.',
    intro: 'Bir sorun mu var? ridvan.uyn@gmail.com adresine yaz — genellikle 2 iş günü içinde yanıt veriyoruz.',
    faqs: [
      { q: 'Krediler nasıl çalışır?', a: 'Her üretim (bir video, bir görsel seti, bir karusel), onaylamadan önce gösterilen belirli bir miktarda kredi harcar — tam maliyet, seçtiğin stüdyoya ve kalite kademesine bağlıdır. Bir abonelik, her dönemde yenilenen ve devretmeyen aylık bir kredi kontenjanı içerir; ayrıca süresi dolmayan tek seferlik bir kredi paketi de satın alabilirsin.' },
      { q: 'Satın alımlarımı nasıl geri yüklerim?', a: 'Viral Factory → Profil → Ayarlar → Satın Alımları Geri Yükle yolunu izle. Satın aldığın Apple Kimliğiyle giriş yaptığından emin ol.' },
      { q: 'Aboneliğimi nasıl iptal ederim?', a: 'Abonelikler bizim tarafımızdan değil, Apple tarafından faturalandırılır ve yönetilir. iPhone’unda: Ayarlar uygulaması → [adın] → Abonelikler → Viral Factory → Aboneliği İptal Et. İptal, gelecekteki yenilemeleri durdurur; zaten ödediğin dönemin sonuna kadar erişimin devam eder.' },
      { q: 'Hesabımı nasıl silerim?', a: 'Uygulamada: Profil → Ayarlar → Hesabı Sil. Tam olarak neyin silindiğini ve uygulaman artık yoksa e-posta yoluyla nasıl silme talep edeceğini «Hesabı Sil» sayfamızda bulabilirsin.' },
      { q: 'Uygulama hangi dilleri destekliyor?', a: 'İngilizce, Almanca, Fransızca, İspanyolca, İtalyanca, Portekizce, Türkçe, Japonca, Korece, Arapça ve Hintçe.' },
      { q: 'Stüdyolar ne işe yarar?', a: '“Beğendiğini yeniden yap”, yapıştırdığın bir reel’i kendi ürününle yeniden kurar. “Kısa video reklam” ve “Sinematik kısa film”, bir açıklamadan senaryolu video üretir. “İçerik üretici tanıtımı”, kameraya bakan bir UGC tarzı reklam oluşturur. “Kaydırmalı gönderi”, bir görsel karusel kurar. “Yapay zeka karakteri”, videolar arasında tutarlı bir kimlik korur. “Cameo” ve “Videona yerleştir”, gerçek bir fotoğrafı üretilen ya da mevcut bir sahneye yerleştirir. Günlük hook’lar her sabah on taze fikir sunar, bitmiş gönderiler doğrudan TikTok, Instagram ve YouTube için planlanabilir.' },
      { q: 'Uygulama neden kamera, fotoğraf kitaplığı ya da mikrofon erişimi istiyor?', a: 'Yalnızca üretim için girdi olarak kullanılacak fotoğraf ve videoları çekebilmen ya da seçebilmen, ve uygulamanın bitmiş videolarını fotoğraf kitaplığına kaydedebilmesi için. Ayrıntılar için Gizlilik Politikamıza bak.' },
      { q: 'Bir üretim başarısız oldu ama kredilerimi kullandı — ne yapmalıyım?', a: 'Bize yaklaşık tarih ve saati, mümkünse bir ekran görüntüsünü e-posta ile gönder; doğrulanmış bir sistem hatası durumunda inceleyip kredilerini iade ederiz.' },
    ],
  },
  deleteAccount: {
    title: 'Hesabını ve verilerini sil',
    lead: 'Viral Factory hesabını uygulamadan ya da e-posta ile kalıcı olarak nasıl silersin.',
    intro: 'Viral Factory hesabını ve tüm ilişkili verilerini, bizimle iletişime geçmene gerek kalmadan, doğrudan uygulamadan istediğin zaman kalıcı olarak silebilirsin.',
    sections: [
      {
        h: 'Uygulamada sil (önerilen)',
        p: ['Cihazında Viral Factory’yi aç ve şu adımları izle:'],
        ul: [
          'Profil’e git (alt sekme).',
          'Ayarlar’a dokun.',
          'Ekranın alt kısmına yakın, Hesabı Sil’e dokun.',
          'Apple ile giriş yaptıysan, sen olduğunu doğrulamak için Sign in with Apple ile yeniden kimlik doğrulaman istenebilir.',
          'Silmeyi onayla. Bu hemen geçerli olur ve geri alınamaz.',
        ],
      },
      {
        h: 'Neler silinir',
        ul: [
          'hesabın ve profil bilgilerin',
          'kredi bakiyen ve işlem geçmişin',
          'ürettiğin her video, görsel seti, karusel ve karakter, ve bunların kaynak medyaları',
          'bağlı sosyal medya hesapları (TikTok, Instagram, YouTube) ve saklanan erişim anahtarları',
          'kayıtlı prompt’lar ve bildirimler',
          'Sign in with Apple / Google bağlantın (Apple izni iptal edilir)',
        ],
      },
      {
        h: 'Otomatik olarak etkilenmeyenler',
        p: [
          'Hesabını silmek, aktif bir App Store aboneliğini İPTAL ETMEZ — cihazında Ayarlar → [adın] → Abonelikler üzerinden ayrıca iptal etmezsen yenilenmeye devam eder.',
          'TikTok, Instagram ya da YouTube’da zaten yayınladığın içerikler o platformlarda kalır; kaldırmak istersen doğrudan orada silmen gerekir.',
        ],
      },
      {
        h: 'Uygulamaya erişimin yok mu?',
        p: ['Hesabına bağlı adresten (ya da hesabını olabildiğince iyi tarif ederek) ridvan.uyn@gmail.com adresine e-posta gönder ve hesabını ve verilerini silmemizi iste. Manuel silme taleplerini birkaç iş günü içinde tamamlarız.'],
      },
    ],
  },
};

const ja: LegalPack = {
  updatedLabel: '発効日',
  effectiveDateLabel: '2026年9月26日',
  privacy: {
    title: 'プライバシーポリシー',
    lead: 'Viral Factoryが情報をどのように収集、利用、保護するか。',
    intro:
      '本プライバシーポリシーは、Viral FactoryのiOSアプリおよび本ウェブサイトが収集する情報の内容、理由、そしてお客様が持つ選択肢について説明します。Viral Factoryは個人開発者であるRıdvan Uyanが開発しており、ここで説明する目的においてお客様の情報の管理者となります。',
    sections: [
      {
        h: '収集する情報',
        ul: [
          'アカウント識別子 — アプリを初めて開いたときに作成され、その端末のゲストアカウントに使用されるランダムな端末識別子。AppleまたはGoogleでサインインした場合は、氏名、メールアドレス（またはプライベートリレーメール）、プロバイダーのアカウントIDを受け取ります。',
          'お客様が提供するコンテンツ — 入力したプロンプトやテキスト、アップロードまたは貼り付けた写真・動画・リンク（作り直したいリールのリンク、キャラクターやカメオ用の参照写真、分析用の画面録画など）。',
          '生成されたコンテンツ — アプリがお客様のために作成したメディア、台本、キャプション、および生成履歴とクレジット取引履歴。',
          '購入情報 — サブスクリプションとクレジットパックの購入はApp Storeが処理します。RevenueCatが購入・権利イベントを当社に代わって処理します。カード番号を受け取ることは一切ありません。',
          'ソーシャルアカウント連携 — コンテンツ投稿のためにTikTok、Instagram、YouTubeを連携した場合、そのアカウントの基本プロフィール情報（ハンドル名、表示名、アバター）を受け取り、アプリがお客様に代わって投稿できるよう暗号化されたアクセストークンを保存します。',
          '分析 — アプリの利用状況を把握するためMixpanelとPostHogを使用しています。PostHogのセッションリプレイは操作分析のために有効ですが、記録前に画面上のすべてのテキストと画像がマスクされるため、リプレイでプロンプト・写真・生成コンテンツが表示されることはありません。分析には別途生成されるランダムなインストールIDを使用し、ゲストアカウント識別子は決して使用しません。',
          '端末・診断データ — アプリのバージョン、一般的な端末モデルとOS、言語設定。',
          '通知設定 — 毎日のアイデアリマインダーを有効にしているかどうか。端末内にローカルに保存されます。',
        ],
        p: ['広告トラッカーは使用しておらず、本アプリはAppleのApp Tracking Transparencyの許可を求めません。'],
      },
      {
        h: '情報の利用目的',
        ul: [
          'アプリを運営し、リクエストされたコンテンツを生成するため',
          '本人確認を行い、アカウントとクレジット残高を維持するため',
          '購入処理とサブスクリプション管理のため',
          '明示的に連携したソーシャルアカウントへコンテンツを投稿・予約するため',
          '毎日のフック機能を提供し、有効化されている場合は端末外に出ないローカル通知を送るため',
          '製品の利用状況を把握し、不具合を修正し、機能を改善するため',
          '不正利用、詐欺、利用規約違反を検出するため',
          'お寄せいただいたサポート依頼に対応するため',
        ],
      },
      {
        h: 'AI生成と第三者の処理者',
        p: [
          'お客様が送信したコンテンツや参照素材は、リクエストされた出力を生成する目的のみでAIインフラプロバイダーであるfal.aiに送信されます。リクエスト内容に応じて、fal.aiは現在OpenAI、Google（Gemini）、Anthropic（Claude）、Kling、ElevenLabs、Topaz、OmniHumanなどのモデルプロバイダーに処理を振り分けます。当社はこれらのプロバイダーと直接の別契約を結んでおらず、契約している処理者はfal.aiのみです。これらのプロバイダーは、お客様のコンテンツを自社の汎用モデルの学習に使用することはなく、当社も同様にお客様のコンテンツを当社独自のモデルの学習に使用しません。',
          'アップロードされた参照写真・動画は、結果を生成しお客様が確認できるようにするために必要な期間（現在約30日間）のみ保持され、その後削除されます。',
          '生成されたメディアはAmazon Web Services（S3）、一部のファイルについてはSupabase Storageに保存され、コンテンツデリバリーネットワーク（CDN）経由で配信されます。アプリケーションデータ（アカウント、プロジェクト、クレジット履歴）はMongoDBに保存されます。当社のバックエンドはDigitalOceanでホスティングされています。',
        ],
      },
      {
        h: '情報の共有',
        p: ['情報を共有するのは以下に限られます。'],
        ul: [
          '上記のサービスプロバイダー（AI生成、ホスティング、ストレージ、分析、決済処理など、アプリの運営に必要な範囲）',
          'お客様が明示的に連携し投稿先として選択したソーシャルプラットフォーム（TikTok、Instagram、YouTube）',
          '合併、買収、資産売却に関与する場合の買収者または承継者（本ポリシーに従うことを条件とします）',
          '法的に必要な場合、または当社の権利、利用者、公衆を保護するための法執行機関その他の第三者',
        ],
      },
      { h: '当社が行わないこと', p: ['当社は個人データを販売することはなく、お客様が明示的に公開を選択しない限り、プロンプト、アップロードした素材、生成コンテンツを他の利用者と共有することもありません。'] },
      { h: 'データの保持', p: ['アカウントおよび生成コンテンツは、アカウントが有効である間保持されます。アップロードされた参照メディアは、結果の生成に不要になり次第（約30日後）自動的に削除されます。個々の生成物はアプリ内でいつでも削除できます。'] },
      { h: 'アカウントの削除', p: ['アプリ内でいつでもアカウントを完全に削除できます：プロフィール→設定→アカウントを削除。これにより、アカウント、クレジット履歴、動画、キャラクター、プロンプト、連携済みソーシャルアカウントが即座かつ完全に削除され、Sign in with Appleを使用している場合はその認可も取り消されます。有効なApp Storeサブスクリプションは自動解約されません。Apple IDの設定から別途解約してください。アプリにアクセスできない場合のメールでの削除依頼方法を含む詳しい手順は「アカウントを削除」ページをご覧ください。'] },
      { h: 'GDPRに基づく権利（EEA、英国、スイス）', p: ['EEA、英国、スイスにお住まいの場合、個人データへのアクセス、訂正、削除、コピーの受領（データポータビリティ）、および一部の処理への異議申し立てや制限を求める権利があります。当社は、契約の履行（アプリの提供）、お客様の同意（セッションリプレイ分析など）、当社の正当な利益（セキュリティ、不正防止、サービス改善）を根拠にデータを処理します。これらの権利を行使するには ridvan.uyn@gmail.com までご連絡ください。1か月以内に対応します。'] },
      { h: 'カリフォルニア州居住者（CCPA/CPRA）', p: ['カリフォルニア州の居住者は、当社が保有する個人情報の開示、削除、訂正を請求し、その「販売」や「共有」をオプトアウトする権利があります。当社は個人情報を販売せず、コンテキストをまたぐ行動ターゲティング広告トラッカーも使用していません。請求は ridvan.uyn@gmail.com までお送りください。'] },
      { h: 'お子様について', p: ['Viral Factoryは13歳未満（またはお住まいの国で定められた最低年齢未満）のお子様を対象としておらず、意図的にその情報を収集することはありません。お子様が当社に個人情報を提供したと思われる場合はご連絡ください。速やかに削除します。'] },
      { h: '国際的なデータ移転', p: ['当社および当社のサービスプロバイダーは、米国を含む、お客様の居住国以外でお客様の情報を処理する場合があります。必要な場合、標準契約条項などの適切な保護措置を講じます。'] },
      { h: 'セキュリティ', p: ['当社は、通信の暗号化、ソーシャルプラットフォームのアクセストークンの暗号化保存、システムへのアクセス制御など、業界標準の保護措置を用いてお客様の情報を保護しています。100％安全な保存・送信方法は存在しません。'] },
      { h: '本ポリシーの変更', p: ['本ポリシーは随時更新される場合があります。上記の発効日は最新の改訂を反映しており、重要な変更はこのページに反映されます。'] },
      { h: 'お問い合わせ', p: ['Rıdvan Uyan（データ管理者）— ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: '利用規約',
    lead: 'Viral Factoryのご利用に関する規約です。',
    intro:
      '本利用規約（「本規約」）は、Rıdvan Uyan（「当社」）が提供するViral Factory iOSアプリおよび本ウェブサイト（総称して「本サービス」）のご利用について定めるものです。本サービスをダウンロード、アクセス、または利用することにより、本規約に同意したものとみなされます。',
    sections: [
      { h: '本サービスについて', p: ['Viral Factoryは、お客様が提供するプロンプトおよび参照素材から、第三者のAIモデルを使用して動画、画像、キャプションなどの短尺コンテンツを生成します。生成された出力は不正確、予期しないもの、または目的に適さない場合があります。公開または利用する前に内容を確認する責任はお客様にあります。'] },
      { h: 'Appleのライセンス条項', p: ['App Store経由で購入した自動更新サブスクリプションには、apple.com/legal/internet-services/itunes/dev/stdeula に掲載されているAppleのライセンス契約（使用許諾契約）も適用されます。本規約とAppleの契約がサブスクリプションまたは購入に関して矛盾する場合、Appleの契約が優先します。'] },
      {
        h: '禁止事項',
        p: ['本サービスを以下の目的で利用しないことに同意していただきます。'],
        ul: [
          '違法なコンテンツを生成・配布すること、または他者の著作権、商標権、パブリシティ権その他の権利を侵害するコンテンツを生成すること',
          'Cameo、AIキャラクター、または「ヒットを作り直す」機能などを通じて、実在し特定可能な人物をその同意なく描写すること',
          '他人や組織になりすます、または欺くことを目的としたコンテンツを生成すること',
          'いかなる状況においても未成年者を含む性的コンテンツを生成すること — 当社はこれに対し一切の例外を認めず、該当する当局に通報します',
          '他者への嫌がらせ、名誉毀損、脅迫を行うこと',
          '本サービスの妨害、リバースエンジニアリング、悪用、またはクレジット・利用制限の回避を試みること',
        ],
      },
      { h: 'お客様のコンテンツと他者の肖像', p: ['お客様は、入力したプロンプト、アップロードした素材、生成したコンテンツの所有権を保持します。アップロードするもの（写真、動画、リールのリンクなど）については、その権利を有しているか、使用許可を得ている必要があります。お客様は当社に対し、プライバシーポリシーに記載のとおりfal.aiおよびそのモデルプロバイダーへの送信を含め、本サービスを提供する目的のみでそのコンテンツを処理、保存、送信するための限定的なライセンスを付与するものとします。生成された出力の確認、および本サービスを通じて投稿する際の各ソーシャルプラットフォーム独自のルールの遵守を含む、その利用・公開・宣伝方法についてはお客様が単独で責任を負います。'] },
      { h: 'AI出力に関する免責事項', p: ['コンテンツはAIによって生成されるため、不正確であったり、品質が低かったり、偶然他のコンテンツに類似したりする場合があります。当社は特定の結果、エンゲージメント、成果を保証しません。生成コンテンツを公開する前の事実確認および必要な法的レビューはお客様の責任で行ってください。'] },
      {
        h: 'クレジット、購入、サブスクリプション',
        ul: [
          'コンテンツの生成にはクレジットを消費し、生成前にアプリ内でコストが表示されます。',
          '購入時に別段の定めがない限り、都度購入型のクレジットパックに有効期限はありません。',
          'サブスクリプションプランには、各請求期間ごとに更新されるクレジット付与が含まれ、未使用のサブスクリプションクレジットは翌期間に繰り越されません。',
          'サブスクリプションは、現在の期間の終了の少なくとも24時間前に解約されない限り、その時点の価格で同じ期間について自動的に更新されます。端末の設定→［お客様の名前］→サブスクリプションからいつでも管理・解約できます。詳しくはサポートページをご覧ください。',
          '法律で義務付けられている場合を除き、すべての購入は返金不可です。App Store購入の返金依頼はAppleが対応します。',
        ],
      },
      { h: '解約', p: ['お客様はいつでも本サービスの利用を停止し、アカウントを削除できます。詳しくは「アカウントを削除」ページをご覧ください。本規約への違反、クレジットの不正利用、詐欺、本サービスの悪用があった場合、当社は事前通知の有無にかかわらずアクセスを停止または終了することがあります。'] },
      { h: '免責事項', p: ['本サービスは、法律で認められる最大限の範囲において、いかなる保証もなく「現状有姿」および「提供可能な限り」で提供されます。'] },
      { h: '責任の制限', p: ['法律で認められる最大限の範囲において、当社は本サービスの利用に起因する間接的、付随的、特別、結果的、または懲罰的損害、または逸失利益もしくはデータの損失について責任を負いません。本サービスに関するいかなる請求についても、当社の総責任額は、請求発生前12か月間にお客様が当社に支払った金額または20米ドルのいずれか高い方に制限されます。'] },
      { h: '準拠法', p: ['本規約は、法の抵触に関する原則にかかわらず、トルコ共和国の法律に準拠します。欧州連合、英国、または強行的な消費者保護法が存在するその他の法域に常居所を有する消費者である場合、本条項はそれらの強行法規による保護や、現地裁判所に訴訟を提起する権利を排除するものではありません。'] },
      { h: '本規約の変更', p: ['当社は本規約を随時更新することがあります。変更後も本サービスの利用を継続した場合、更新内容に同意したものとみなされます。上記の発効日を更新します。'] },
      { h: 'お問い合わせ', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'サポート',
    lead: 'お困りのことがあればお手伝いします。',
    intro: 'ご質問や不具合がございましたら ridvan.uyn@gmail.com までメールをお送りください。通常2営業日以内に返信いたします。',
    faqs: [
      { q: 'クレジットの仕組みは？', a: '動画、画像セット、カルーセルなど各生成には確認前に表示される一定数のクレジットがかかります。正確なコストは選択したスタジオと品質ティアによって異なります。サブスクリプションには期間ごとに更新される（繰り越されない）月間クレジット付与が含まれ、有効期限のない都度購入型のクレジットパックも購入できます。' },
      { q: '購入を復元するには？', a: 'Viral Factory→プロフィール→設定→購入を復元、と進んでください。購入時と同じApple IDでサインインしていることを確認してください。' },
      { q: 'サブスクリプションを解約するには？', a: 'サブスクリプションは当社ではなくAppleが請求・管理しています。iPhoneでは：設定アプリ→［お客様の名前］→サブスクリプション→Viral Factory→サブスクリプションをキャンセル。解約すると今後の更新は停止しますが、すでに支払い済みの期間の終了までは利用を継続できます。' },
      { q: 'アカウントを削除するには？', a: 'アプリ内で：プロフィール→設定→アカウントを削除。具体的に何が削除されるか、アプリにアクセスできない場合のメールでの削除依頼方法は「アカウントを削除」ページをご覧ください。' },
      { q: 'アプリはどの言語に対応していますか？', a: '英語、ドイツ語、フランス語、スペイン語、イタリア語、ポルトガル語、トルコ語、日本語、韓国語、アラビア語、ヒンディー語に対応しています。' },
      { q: '各スタジオは何をしますか？', a: '「ヒットを作り直す」は貼り付けたリールを自分の商品で再構成します。「ショート動画広告」と「シネマティックショート」は説明文から台本付きの動画を生成します。「クリエイター風レビュー」はカメラ目線のUGC風広告を作成します。「スワイプ投稿」は画像カルーセルを構成します。「AIキャラクター」は動画間で一貫した人物像を保ちます。「カメオ出演」と「動画に合成する」は実際の写真を生成済みまたは既存のシーンに配置します。毎日のフックは毎朝10個の新しいアイデアを提供し、完成した投稿はTikTok・Instagram・YouTubeに直接予約投稿できます。' },
      { q: 'なぜアプリはカメラ、写真ライブラリ、マイクへのアクセスを求めるのですか？', a: '生成の入力として使う写真や動画を撮影・選択できるようにするため、また完成した動画を写真ライブラリに保存できるようにするためだけです。詳細はプライバシーポリシーをご覧ください。' },
      { q: '生成に失敗したのにクレジットが消費されました。どうすればいいですか？', a: 'おおよその日時と、可能であればスクリーンショットをメールでお送りください。システムエラーが確認された場合はクレジットを調査のうえ復元します。' },
    ],
  },
  deleteAccount: {
    title: 'アカウントとデータの削除',
    lead: 'アプリ内またはメールでViral Factoryアカウントを完全に削除する方法。',
    intro: 'Viral Factoryのアカウントおよび関連するすべてのデータは、当社に連絡することなく、アプリから直接いつでも完全に削除できます。',
    sections: [
      {
        h: 'アプリ内で削除する（推奨）',
        p: ['お使いの端末でViral Factoryを開き、以下の手順に従ってください。'],
        ul: [
          'プロフィール（下部タブ）に移動します。',
          '設定をタップします。',
          '画面下部付近にあるアカウントを削除をタップします。',
          'Appleでサインインしている場合、本人確認のためSign in with Appleでの再認証を求められることがあります。',
          '削除を確定します。これは即座に反映され、元に戻すことはできません。',
        ],
      },
      {
        h: '削除される内容',
        ul: [
          'アカウントとプロフィール情報',
          'クレジット残高と取引履歴',
          '生成したすべての動画、画像セット、カルーセル、キャラクター、およびその元となる素材',
          '連携済みソーシャルアカウント（TikTok、Instagram、YouTube）とその保存済みアクセストークン',
          '保存したプロンプトと通知',
          'Sign in with Apple／Googleとの連携（Appleの認可は取り消されます）',
        ],
      },
      {
        h: '自動的には影響を受けないもの',
        p: [
          'アカウントを削除しても、有効なApp Storeサブスクリプションは解約されません。端末の設定→［お客様の名前］→サブスクリプションから別途解約しない限り、更新され続けます。',
          'すでにTikTok、Instagram、YouTubeに公開したコンテンツはそれらのプラットフォームに残ります。削除したい場合は各プラットフォーム上で直接削除してください。',
        ],
      },
      {
        h: 'アプリにアクセスできない場合',
        p: ['アカウントに登録されているメールアドレスから（またはアカウントについてできる限り詳しく説明のうえ）ridvan.uyn@gmail.com にメールを送り、アカウントとデータの削除を依頼してください。手動での削除依頼は数営業日以内に完了します。'],
      },
    ],
  },
};

const ko: LegalPack = {
  updatedLabel: '시행일',
  effectiveDateLabel: '2026년 9월 26일',
  privacy: {
    title: '개인정보처리방침',
    lead: 'Viral Factory가 정보를 수집, 이용, 보호하는 방법.',
    intro:
      '본 개인정보처리방침은 Viral Factory iOS 앱과 본 웹사이트가 수집하는 정보의 내용과 이유, 그리고 이용자가 가진 선택권을 설명합니다. Viral Factory는 개인 개발자인 Rıdvan Uyan이 개발하며, 여기에 설명된 목적을 위해 귀하의 정보에 대한 처리자입니다.',
    sections: [
      {
        h: '수집하는 정보',
        ul: [
          '계정 식별자 — 앱을 처음 열 때 생성되어 해당 기기의 게스트 계정에 사용되는 임의의 기기 식별자. Apple 또는 Google로 로그인하면 이름, 이메일 주소(또는 비공개 릴레이 이메일), 제공업체 계정 ID를 받습니다.',
          '제공하는 콘텐츠 — 작성한 프롬프트와 텍스트, 업로드하거나 붙여넣은 사진·동영상·링크(다시 만들고 싶은 릴 링크, 캐릭터·카메오 스튜디오용 참조 사진, 분석할 화면 녹화 등).',
          '생성된 콘텐츠 — 앱이 생성한 미디어, 대본, 캡션, 그리고 생성 및 크레딧 거래 내역.',
          '결제 정보 — 구독 및 크레딧 팩 구매는 App Store가 처리합니다. RevenueCat이 당사를 대신하여 구매 및 권한 이벤트를 처리합니다. 카드 번호를 받는 일은 결코 없습니다.',
          '소셜 계정 연결 — 콘텐츠 게시를 위해 TikTok, Instagram, YouTube를 연결하면 해당 계정의 기본 프로필 정보(핸들, 표시 이름, 아바타)를 받고, 앱이 귀하를 대신해 게시할 수 있도록 암호화된 액세스 토큰을 저장합니다.',
          '분석 — 앱 사용 현황을 파악하기 위해 Mixpanel과 PostHog를 사용합니다. PostHog 세션 리플레이는 상호작용 분석을 위해 활성화되어 있지만, 기록 전에 화면상의 모든 텍스트와 이미지가 마스킹되므로 리플레이에 프롬프트·사진·생성된 미디어가 표시되는 일은 없습니다. 분석에는 별도의 무작위 설치 ID를 사용하며, 게스트 계정 식별자는 절대 사용하지 않습니다.',
          '기기 및 진단 데이터 — 앱 버전, 일반적인 기기 모델 및 운영체제, 언어 설정.',
          '알림 설정 — 매일 아이디어 알림을 켰는지 여부. 기기에 로컬로 저장됩니다.',
        ],
        p: ['당사는 광고 추적기를 사용하지 않으며, 앱은 Apple의 앱 추적 투명성(App Tracking Transparency) 권한을 요청하지 않습니다.'],
      },
      {
        h: '정보 이용 방법',
        ul: [
          '앱을 운영하고 요청하신 콘텐츠를 생성하기 위해',
          '본인 확인 및 계정·크레딧 잔액 유지를 위해',
          '결제 처리 및 구독 관리를 위해',
          '명시적으로 연결한 소셜 계정에 콘텐츠를 게시하거나 예약하기 위해',
          '매일 후크 기능을 제공하고, 활성화된 경우 기기 밖으로 나가지 않는 로컬 알림을 보내기 위해',
          '제품 사용 현황을 파악하고, 버그를 수정하고, 기능을 개선하기 위해',
          '악용, 사기, 이용약관 위반을 탐지하기 위해',
          '보내주신 지원 요청에 답변하기 위해',
        ],
      },
      {
        h: 'AI 생성 및 제3자 처리자',
        p: [
          '제출한 콘텐츠와 참조 자료는 요청한 결과물을 생성하는 목적으로만 당사의 AI 인프라 제공업체인 fal.ai로 전송됩니다. 요청 내용에 따라 fal.ai는 현재 OpenAI, Google(Gemini), Anthropic(Claude), Kling, ElevenLabs, Topaz, OmniHuman 등의 모델 제공업체로 작업을 전달합니다. 당사는 이들 제공업체와 별도의 직접 계약을 맺고 있지 않으며, 당사가 계약한 처리자는 fal.ai뿐입니다. 이들 제공업체 중 어느 곳도 귀하의 콘텐츠를 자사의 범용 모델 학습에 사용하지 않으며, 당사 역시 귀하의 콘텐츠를 자체 모델 학습에 사용하지 않습니다.',
          '업로드된 참조 사진 및 동영상은 결과물을 생성하고 검토할 수 있도록 필요한 기간(현재 약 30일) 동안만 보관된 후 삭제됩니다.',
          '생성된 미디어는 Amazon Web Services(S3)에, 일부 파일은 Supabase Storage에 저장되며 콘텐츠 전송 네트워크(CDN)를 통해 전달됩니다. 애플리케이션 데이터(계정, 프로젝트, 크레딧 내역)는 MongoDB에 저장됩니다. 당사의 백엔드는 DigitalOcean에서 호스팅됩니다.',
        ],
      },
      {
        h: '정보 공유',
        p: ['당사는 다음의 경우에만 정보를 공유합니다.'],
        ul: [
          '앱 운영에 필요한 범위 내에서 위의 서비스 제공업체(AI 생성, 호스팅, 저장, 분석, 결제 처리)',
          '귀하가 명시적으로 연결하고 게시를 선택한 소셜 플랫폼(TikTok, Instagram, YouTube)',
          '당사가 합병, 인수, 자산 매각에 관여하게 될 경우 그 인수자 또는 승계자(본 방침의 적용을 조건으로 함)',
          '법적으로 요구되거나 당사의 권리, 이용자 또는 공공을 보호하기 위한 경우의 법 집행기관 또는 기타 제3자',
        ],
      },
      { h: '당사가 하지 않는 것', p: ['당사는 개인정보를 판매하지 않으며, 귀하가 명시적으로 공개를 선택하지 않는 한 프롬프트, 업로드한 자료, 생성된 콘텐츠를 다른 이용자와 공유하는 일은 결코 없습니다.'] },
      { h: '데이터 보존', p: ['계정과 생성된 콘텐츠는 계정이 활성 상태인 동안 보존됩니다. 업로드된 참조 미디어는 결과물 생성에 더 이상 필요하지 않게 되는 즉시(약 30일) 자동으로 삭제됩니다. 개별 생성물은 앱에서 언제든지 삭제할 수 있습니다.'] },
      { h: '계정 삭제', p: ['앱에서 언제든지 계정을 영구적으로 삭제할 수 있습니다: 프로필 → 설정 → 계정 삭제. 이렇게 하면 계정, 크레딧 내역, 동영상, 캐릭터, 프롬프트, 연결된 소셜 계정이 즉시 영구적으로 삭제되며, 사용한 경우 Sign in with Apple 권한도 취소됩니다. 이는 활성 App Store 구독을 취소하지 않으므로 Apple ID 설정에서 별도로 취소해야 합니다. 앱에 더 이상 접근할 수 없을 때 이메일로 삭제를 요청하는 방법을 포함한 전체 단계별 안내는 「계정 삭제」 페이지를 참고하세요.'] },
      { h: 'GDPR상의 권리 (EEA, 영국, 스위스)', p: ['EEA, 영국, 스위스에 거주하는 경우 개인정보에 대한 접근, 정정, 삭제, 사본 수령(이동성) 권리와 특정 처리에 이의를 제기하거나 제한할 권리가 있습니다. 당사는 계약 이행(앱 제공), 귀하의 동의(예: 세션 리플레이 분석), 당사의 정당한 이익(보안, 악용 방지, 서비스 개선)을 근거로 데이터를 처리합니다. 이러한 권리를 행사하려면 ridvan.uyn@gmail.com으로 연락해 주세요. 한 달 이내에 답변드립니다.'] },
      { h: '캘리포니아 거주자 (CCPA/CPRA)', p: ['캘리포니아 거주자는 당사가 보유한 개인정보의 열람, 삭제, 정정을 요청하고 그 「판매」나 「공유」를 거부할 권리가 있습니다 — 당사는 개인정보를 판매하지 않으며 상황 간 행동 기반 광고 추적기를 사용하지 않습니다. 요청은 ridvan.uyn@gmail.com으로 보내주세요.'] },
      { h: '아동', p: ['Viral Factory는 만 13세 미만(또는 거주 국가에서 요구하는 최소 연령 미만) 아동을 대상으로 하지 않으며, 이들의 정보를 고의로 수집하지 않습니다. 아동이 당사에 개인정보를 제공했다고 판단되는 경우 연락해 주시면 삭제하겠습니다.'] },
      { h: '국제 데이터 이전', p: ['당사 및 서비스 제공업체는 미국을 포함하여 귀하의 거주 국가 밖에서 정보를 처리할 수 있습니다. 필요한 경우 표준계약조항과 같은 적절한 보호조치를 적용합니다.'] },
      { h: '보안', p: ['당사는 전송 중 암호화, 소셜 플랫폼 액세스 토큰의 암호화된 저장, 시스템에 대한 접근 통제 등 업계 표준의 보호 조치를 사용하여 귀하의 정보를 보호합니다. 100% 안전한 저장 또는 전송 방법은 존재하지 않습니다.'] },
      { h: '본 방침의 변경', p: ['당사는 본 방침을 수시로 업데이트할 수 있습니다. 위의 시행일은 최신 개정을 반영하며, 중요한 변경 사항은 이 페이지에 반영됩니다.'] },
      { h: '문의', p: ['Rıdvan Uyan (개인정보 처리자) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: '이용약관',
    lead: 'Viral Factory 이용을 규율하는 약관입니다.',
    intro:
      '본 이용약관(「본 약관」)은 Rıdvan Uyan(「당사」)이 제공하는 Viral Factory iOS 앱과 본 웹사이트(합쳐서 「서비스」)의 이용을 규율합니다. 서비스를 다운로드, 접근 또는 이용함으로써 귀하는 본 약관에 동의하게 됩니다.',
    sections: [
      { h: '서비스 소개', p: ['Viral Factory는 귀하가 제공하는 프롬프트와 참조 자료로부터 제3자 AI 모델을 사용하여 동영상, 이미지, 캡션 등 짧은 형식의 콘텐츠를 생성합니다. 생성된 결과물은 부정확하거나, 예상과 다르거나, 목적에 맞지 않을 수 있습니다. 게시하거나 신뢰하기 전에 검토할 책임은 귀하에게 있습니다.'] },
      { h: 'Apple 라이선스 조건', p: ['App Store를 통해 구매한 자동 갱신 구독에는 apple.com/legal/internet-services/itunes/dev/stdeula 에 게시된 Apple의 사용권 계약(라이선스가 부여된 애플리케이션 최종 사용자 사용권 계약)도 적용됩니다. 본 약관이 구독 또는 구매 사항에 관해 해당 계약과 상충할 경우 Apple의 계약이 우선합니다.'] },
      {
        h: '허용되는 이용',
        p: ['귀하는 서비스를 다음의 목적으로 이용하지 않을 것에 동의합니다.'],
        ul: [
          '불법 콘텐츠를 생성하거나 배포하는 행위, 또는 타인의 저작권, 상표권, 퍼블리시티권, 기타 권리를 침해하는 콘텐츠를 생성하는 행위',
          '카메오, AI 캐릭터, 「인기 영상 다시 만들기」 기능 등을 통해 동의 없이 실존하고 식별 가능한 인물을 묘사하는 행위',
          '타인이나 단체를 사칭하거나 기만할 목적의 콘텐츠를 생성하는 행위',
          '어떠한 상황에서도 미성년자가 등장하는 성적 콘텐츠를 생성하는 행위 — 이에 대해서는 무관용 원칙을 적용하며 관계 당국에 신고합니다',
          '타인을 괴롭히거나, 명예를 훼손하거나, 위협하는 행위',
          '서비스를 방해, 역설계, 악용하거나 크레딧·이용 한도를 우회하려는 행위',
        ],
      },
      { h: '귀하의 콘텐츠와 타인의 초상', p: ['귀하는 작성한 프롬프트, 업로드한 미디어, 생성한 콘텐츠에 대한 소유권을 유지합니다. 업로드하는 모든 것(사진, 동영상, 릴 링크 등)에 대한 권리를 보유하거나 이용 허락을 받아야 합니다. 귀하는 당사에, 개인정보처리방침에 설명된 대로 fal.ai 및 그 모델 제공업체로의 전송을 포함하여 오직 서비스 제공 목적으로만 해당 콘텐츠를 처리, 저장, 전송할 수 있는 제한적 라이선스를 부여합니다. 생성된 결과물을 검토하고, 서비스를 통해 게시할 때 각 소셜 플랫폼의 자체 규칙을 준수하는 것을 포함하여 이를 어떻게 이용, 게시, 홍보하는지에 대해서는 귀하가 단독으로 책임을 집니다.'] },
      { h: 'AI 결과물에 대한 면책', p: ['콘텐츠는 AI에 의해 생성되며 부정확하거나, 품질이 낮거나, 우연히 다른 콘텐츠와 유사할 수 있습니다. 당사는 특정한 결과, 참여도, 성과를 보장하지 않습니다. 생성된 콘텐츠를 게시하기 전 사실 확인 및 필요한 법적 검토는 귀하의 책임입니다.'] },
      {
        h: '크레딧, 결제 및 구독',
        ul: [
          '콘텐츠 생성에는 크레딧이 소모되며, 생성 전에 앱에서 비용이 표시됩니다.',
          '구매 시 별도로 명시하지 않는 한, 1회성 크레딧 팩에는 유효기간이 없습니다.',
          '구독 플랜에는 각 결제 주기마다 갱신되는 크레딧이 포함되며, 사용하지 않은 구독 크레딧은 다음 주기로 이월되지 않습니다.',
          '구독은 현재 기간 종료 최소 24시간 전에 해지하지 않는 한 그 시점의 가격으로 동일한 기간만큼 자동 갱신됩니다. 기기의 설정 → [이름] → 구독에서 언제든지 관리하거나 해지할 수 있습니다 — 지원 페이지를 참고하세요.',
          '법률상 요구되는 경우를 제외하고 모든 결제는 환불되지 않으며, App Store 구매에 대한 환불 요청은 Apple이 처리합니다.',
        ],
      },
      { h: '해지', p: ['귀하는 언제든지 서비스 이용을 중단하고 계정을 삭제할 수 있습니다 — 「계정 삭제」 페이지를 참고하세요. 당사는 본 약관 위반, 크레딧 오용, 사기, 서비스 악용이 있는 경우 사전 통지 여부와 관계없이 접근을 정지하거나 종료할 수 있습니다.'] },
      { h: '보증의 부인', p: ['서비스는 법률이 허용하는 최대 범위 내에서 어떠한 종류의 보증 없이 「있는 그대로」 및 「이용 가능한 상태로」 제공됩니다.'] },
      { h: '책임의 제한', p: ['법률이 허용하는 최대 범위 내에서, 당사는 서비스 이용으로 인해 발생하는 간접적, 부수적, 특별, 결과적 또는 징벌적 손해, 또는 이익이나 데이터의 손실에 대해 책임지지 않습니다. 서비스와 관련된 모든 청구에 대한 당사의 총 책임은 청구 발생 이전 12개월 동안 귀하가 당사에 지급한 금액 또는 미화 20달러 중 더 큰 금액으로 제한됩니다.'] },
      { h: '준거법', p: ['본 약관은 법 저촉 원칙과 관계없이 튀르키예 공화국 법률의 적용을 받습니다. 귀하가 유럽연합, 영국 또는 강행적 소비자보호법이 존재하는 다른 관할권에 상거소를 둔 소비자인 경우, 본 조항은 그러한 강행법규의 보호나 현지 법원에 소송을 제기할 권리를 박탈하지 않습니다.'] },
      { h: '본 약관의 변경', p: ['당사는 본 약관을 수시로 업데이트할 수 있으며, 변경 후에도 서비스를 계속 이용하는 것은 업데이트에 대한 동의로 간주됩니다. 위의 시행일을 갱신합니다.'] },
      { h: '문의', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: '지원',
    lead: '언제든 도와드리겠습니다.',
    intro: '질문이나 문제가 있으신가요? ridvan.uyn@gmail.com으로 메일을 보내주세요 — 보통 영업일 기준 2일 이내에 답변드립니다.',
    faqs: [
      { q: '크레딧은 어떻게 작동하나요?', a: '동영상, 이미지 세트, 캐러셀 등 각 생성 작업에는 확인 전에 표시되는 일정량의 크레딧이 소모됩니다 — 정확한 비용은 선택한 스튜디오와 품질 등급에 따라 다릅니다. 구독에는 매 주기마다 갱신되고 이월되지 않는 월간 크레딧이 포함되며, 유효기간이 없는 1회성 크레딧 팩도 구매할 수 있습니다.' },
      { q: '구매 내역은 어떻게 복원하나요?', a: 'Viral Factory → 프로필 → 설정 → 구매 복원 순서로 이동하세요. 구매할 때 사용한 것과 동일한 Apple ID로 로그인되어 있는지 확인하세요.' },
      { q: '구독을 해지하려면 어떻게 하나요?', a: '구독은 당사가 아닌 Apple이 청구 및 관리합니다. iPhone에서: 설정 앱 → [이름] → 구독 → Viral Factory → 구독 취소. 해지하면 향후 갱신이 중단되며, 이미 결제한 기간이 끝날 때까지는 이용이 유지됩니다.' },
      { q: '계정을 삭제하려면 어떻게 하나요?', a: '앱에서: 프로필 → 설정 → 계정 삭제. 정확히 무엇이 삭제되는지, 앱에 더 이상 접근할 수 없을 때 이메일로 삭제를 요청하는 방법은 「계정 삭제」 페이지를 참고하세요.' },
      { q: '앱은 어떤 언어를 지원하나요?', a: '영어, 독일어, 프랑스어, 스페인어, 이탈리아어, 포르투갈어, 터키어, 일본어, 한국어, 아랍어, 힌디어를 지원합니다.' },
      { q: '각 스튜디오는 무엇을 하나요?', a: '「인기 영상 다시 만들기」는 붙여넣은 릴을 내 제품으로 재구성합니다. 「짧은 영상 광고」와 「시네마틱 숏」은 설명으로부터 대본이 있는 영상을 생성합니다. 「크리에이터 후기 영상」은 카메라를 보고 말하는 UGC 스타일 광고를 만듭니다. 「스와이프 게시물」은 이미지 캐러셀을 구성합니다. 「AI 캐릭터」는 영상 간에 일관된 인물을 유지합니다. 「카메오」와 「내 영상에 합성하기」는 실제 사진을 생성되거나 기존의 장면에 배치합니다. 매일의 후크는 매일 아침 열 가지 새로운 아이디어를 제공하며, 완성된 게시물은 TikTok·Instagram·YouTube에 바로 예약 게시할 수 있습니다.' },
      { q: '앱이 카메라, 사진 보관함, 마이크 접근을 요청하는 이유는 무엇인가요?', a: '생성에 사용할 사진과 동영상을 촬영하거나 선택할 수 있도록 하고, 완성된 동영상을 사진 보관함에 저장할 수 있도록 하기 위해서만 사용됩니다. 자세한 내용은 개인정보처리방침을 참고하세요.' },
      { q: '생성에 실패했는데 크레딧이 차감되었어요 — 어떻게 해야 하나요?', a: '대략적인 날짜와 시간, 가능하다면 스크린샷을 함께 이메일로 보내주세요. 시스템 오류가 확인되면 조사 후 크레딧을 복원해 드립니다.' },
    ],
  },
  deleteAccount: {
    title: '계정 및 데이터 삭제',
    lead: '앱 또는 이메일을 통해 Viral Factory 계정을 영구적으로 삭제하는 방법.',
    intro: 'Viral Factory 계정과 관련된 모든 데이터는 당사에 연락할 필요 없이 앱에서 직접 언제든지 영구적으로 삭제할 수 있습니다.',
    sections: [
      {
        h: '앱에서 삭제하기 (권장)',
        p: ['기기에서 Viral Factory를 열고 다음 단계를 따르세요.'],
        ul: [
          '프로필(하단 탭)로 이동합니다.',
          '설정을 누릅니다.',
          '화면 하단 근처의 계정 삭제를 누릅니다.',
          'Apple로 로그인한 경우, 본인 확인을 위해 Sign in with Apple로 재인증을 요청받을 수 있습니다.',
          '삭제를 확정합니다. 즉시 적용되며 되돌릴 수 없습니다.',
        ],
      },
      {
        h: '삭제되는 항목',
        ul: [
          '계정 및 프로필 정보',
          '크레딧 잔액 및 거래 내역',
          '생성한 모든 동영상, 이미지 세트, 캐러셀, 캐릭터 및 그 원본 미디어',
          '연결된 소셜 계정(TikTok, Instagram, YouTube) 및 저장된 액세스 토큰',
          '저장된 프롬프트 및 알림',
          'Sign in with Apple / Google 연동(Apple 권한은 취소됩니다)',
        ],
      },
      {
        h: '자동으로 영향받지 않는 항목',
        p: [
          '계정을 삭제해도 활성 App Store 구독은 해지되지 않습니다 — 기기의 설정 → [이름] → 구독에서 별도로 해지하지 않으면 계속 갱신됩니다.',
          '이미 TikTok, Instagram, YouTube에 게시한 콘텐츠는 해당 플랫폼에 그대로 남습니다. 제거하려면 해당 플랫폼에서 직접 삭제하세요.',
        ],
      },
      {
        h: '앱에 접근할 수 없나요?',
        p: ['계정에 연결된 이메일 주소로(또는 계정을 최대한 자세히 설명하여) ridvan.uyn@gmail.com으로 메일을 보내 계정과 데이터 삭제를 요청하세요. 수동 삭제 요청은 며칠의 영업일 이내에 처리됩니다.'],
      },
    ],
  },
};

const ar: LegalPack = {
  updatedLabel: 'تاريخ السريان',
  effectiveDateLabel: '26 سبتمبر 2026',
  privacy: {
    title: 'سياسة الخصوصية',
    lead: 'كيف يجمع Viral Factory معلوماتك ويستخدمها ويحميها.',
    intro:
      'توضح سياسة الخصوصية هذه المعلومات التي يجمعها تطبيق Viral Factory لنظام iOS وهذا الموقع الإلكتروني، ولماذا، والخيارات المتاحة لك. تم تطوير Viral Factory بواسطة Rıdvan Uyan، مطور مستقل، وهو المتحكم في بياناتك للأغراض الموضحة هنا.',
    sections: [
      {
        h: 'المعلومات التي نجمعها',
        ul: [
          'معرّفات الحساب — معرّف جهاز عشوائي يُنشأ عند فتح التطبيق لأول مرة، ويُستخدم لحساب الضيف الخاص بك على ذلك الجهاز؛ إذا سجّلت الدخول عبر Apple أو Google بدلاً من ذلك، فإننا نتلقى اسمك وبريدك الإلكتروني (أو بريد وسيط خاص) ومعرّف الحساب لدى مزود الخدمة.',
          'المحتوى الذي تقدمه — الأوامر النصية (prompts) والنصوص التي تكتبها؛ الصور أو الفيديوهات أو الروابط التي ترفعها أو تلصقها، مثل رابط ريلز لإعادة صنعه، أو صورة مرجعية لاستوديو الشخصية أو الظهور الشخصي، أو تسجيل شاشة لتحليله.',
          'المحتوى المولّد — الوسائط والنصوص والتعليقات التي ينشئها التطبيق لك، وسجل عمليات التوليد ومعاملات الأرصدة الخاصة بك.',
          'معلومات الشراء — يتم التعامل مع مشتريات الاشتراكات وحزم الأرصدة عبر App Store؛ وتقوم RevenueCat بمعالجة أحداث الشراء والاستحقاقات نيابة عنا. لا نتلقى أبدًا رقم بطاقتك.',
          'ربط الحسابات الاجتماعية — إذا قمت بربط TikTok أو Instagram أو YouTube لنشر المحتوى، فإننا نتلقى معلومات الملف الشخصي الأساسية لذلك الحساب (اسم المستخدم، الاسم المعروض، الصورة الرمزية) ونخزّن رمز وصول مشفّر ليتمكن التطبيق من النشر نيابة عنك.',
          'التحليلات — نستخدم Mixpanel وPostHog لفهم كيفية استخدام التطبيق. ميزة إعادة تشغيل الجلسة (session replay) في PostHog مفعّلة لتحليل التفاعل، لكن يتم إخفاء كل النصوص والصور على الشاشة قبل التسجيل، لذا فإن إعادة التشغيل لا تُظهر أبدًا أوامرك النصية أو صورك أو المحتوى المولّد. تستخدم التحليلات معرّف تثبيت عشوائيًا منفصلاً — وليس أبدًا معرّف حساب الضيف الخاص بك.',
          'بيانات الجهاز والتشخيص — إصدار التطبيق، طراز الجهاز العام ونظام التشغيل، وإعدادات اللغة.',
          'تفضيلات الإشعارات — ما إذا كنت قد فعّلت تذكير الأفكار اليومي، ويُخزَّن محليًا على جهازك.',
        ],
        p: ['لا نستخدم متتبعات إعلانية، ولا يطلب التطبيق إذن App Tracking Transparency من Apple.'],
      },
      {
        h: 'كيف نستخدم معلوماتك',
        ul: [
          'لتشغيل التطبيق وتوليد المحتوى الذي تطلبه',
          'للتحقق من هويتك والحفاظ على حسابك ورصيدك',
          'لمعالجة المشتريات وإدارة الاشتراكات',
          'لنشر أو جدولة المحتوى على الحسابات الاجتماعية التي تربطها صراحةً',
          'لتقديم ميزة الأفكار الافتتاحية اليومية، وإرسال تذكير محلي لا يغادر جهازك إذا كان مفعّلاً',
          'لفهم استخدام المنتج وإصلاح الأخطاء وتحسين الميزات',
          'لاكتشاف إساءة الاستخدام والاحتيال ومخالفات شروط الاستخدام الخاصة بنا',
          'للرد على طلبات الدعم التي ترسلها إلينا',
        ],
      },
      {
        h: 'التوليد بالذكاء الاصطناعي ومعالجو البيانات من الأطراف الثالثة',
        p: [
          'يتم إرسال المحتوى والمواد المرجعية التي تقدمها إلى fal.ai، مزود البنية التحتية للذكاء الاصطناعي لدينا، فقط لتوليد الناتج الذي طلبته. وحسب الطلب، توجّه fal.ai المهمة إلى مزودي نماذج تشمل حاليًا OpenAI وGoogle (Gemini) وAnthropic (Claude) وKling وElevenLabs وTopaz وOmniHuman. ليس لدينا حسابات مباشرة منفصلة مع هؤلاء المزودين — fal.ai هي معالج البيانات الذي نتعاقد معه. لا يستخدم أي من هؤلاء المزودين محتواك لتدريب نماذجهم العامة، ولا نستخدم نحن أيضًا محتواك لتدريب نماذجنا الخاصة.',
          'يتم الاحتفاظ بالصور والفيديوهات المرجعية المرفوعة فقط للمدة اللازمة لتوليد نتيجتك والسماح لك بمراجعتها — حوالي 30 يومًا حاليًا — ثم تُحذف.',
          'يتم تخزين الوسائط المولّدة على Amazon Web Services (S3)، وبالنسبة لبعض الملفات على Supabase Storage، ويتم تسليمها عبر شبكة توصيل محتوى (CDN). تُخزَّن بيانات التطبيق (الحسابات، المشاريع، سجل الأرصدة) في MongoDB. يستضاف الخادم الخلفي لدينا على DigitalOcean.',
        ],
      },
      {
        h: 'المشاركة',
        p: ['لا نشارك المعلومات إلا مع:'],
        ul: [
          'مزودي الخدمة المذكورين أعلاه، بالقدر اللازم لتشغيل التطبيق (التوليد بالذكاء الاصطناعي، الاستضافة، التخزين، التحليلات، معالجة المدفوعات)؛',
          'المنصات الاجتماعية (TikTok وInstagram وYouTube) التي تربطها صراحةً وتختار النشر عليها؛',
          'مشترٍ أو خلف، إذا شاركنا يومًا في عملية اندماج أو استحواذ أو بيع أصول، وذلك وفقًا لهذه السياسة؛',
          'جهات إنفاذ القانون أو أطراف أخرى، إذا اقتضى القانون ذلك أو لحماية حقوقنا أو مستخدمينا أو الجمهور.',
        ],
      },
      { h: 'ما لا نقوم به', p: ['لا نبيع البيانات الشخصية، ولا نشارك أبدًا أوامرك النصية أو ملفاتك المرفوعة أو المحتوى الذي تولّده مع مستخدمين آخرين، إلا إذا اخترت صراحةً جعل شيء ما عامًا.'] },
      { h: 'الاحتفاظ بالبيانات', p: ['يُحتفظ بحسابك والمحتوى الذي تولّده طالما كان حسابك نشطًا. تُحذف الوسائط المرجعية المرفوعة تلقائيًا بمجرد عدم الحاجة إليها لإنتاج نتيجتك (حوالي 30 يومًا). يمكنك حذف عمليات التوليد الفردية في التطبيق في أي وقت.'] },
      { h: 'حذف حسابك', p: ['يمكنك حذف حسابك نهائيًا في أي وقت من داخل التطبيق: الملف الشخصي ← الإعدادات ← حذف الحساب. يؤدي هذا إلى حذف حسابك وسجل أرصدتك وفيديوهاتك وشخصياتك وأوامرك النصية وحساباتك الاجتماعية المرتبطة فورًا ونهائيًا، وإلغاء إذن Sign in with Apple إن استُخدم. لا يؤدي هذا إلى إلغاء اشتراك نشط في App Store — عليك إلغاءه بشكل منفصل من إعدادات معرّف Apple الخاص بك. راجع صفحة «حذف الحساب» للحصول على تعليمات كاملة خطوة بخطوة، بما في ذلك كيفية طلب الحذف عبر البريد الإلكتروني إذا لم يعد لديك التطبيق.'] },
      { h: 'حقوقك بموجب اللائحة العامة لحماية البيانات (المنطقة الاقتصادية الأوروبية، المملكة المتحدة، سويسرا)', p: ['إذا كنت مقيمًا في المنطقة الاقتصادية الأوروبية أو المملكة المتحدة أو سويسرا، فلديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها والحصول على نسخة منها (قابلية النقل)، والاعتراض على معالجات معينة أو تقييدها. نعالج بياناتك استنادًا إلى: تنفيذ العقد (توفير التطبيق)، موافقتك (مثل تحليلات إعادة تشغيل الجلسة)، ومصالحنا المشروعة (الأمان، منع إساءة الاستخدام، تحسين الخدمة). لممارسة أي من هذه الحقوق، راسلنا على ridvan.uyn@gmail.com؛ وسنرد خلال شهر واحد.'] },
      { h: 'المقيمون في كاليفورنيا (CCPA/CPRA)', p: ['يمكن لسكان كاليفورنيا طلب معرفة أو حذف أو تصحيح المعلومات الشخصية التي نحتفظ بها عنهم، وإلغاء الاشتراك في «بيعها» أو «مشاركتها» — نحن لا نبيع معلومات شخصية ولا نستخدم متتبعات إعلانية سلوكية عبر السياقات المختلفة. أرسل الطلبات إلى ridvan.uyn@gmail.com.'] },
      { h: 'الأطفال', p: ['لا يستهدف Viral Factory الأطفال دون سن 13 عامًا (أو الحد الأدنى للسن المطلوب في بلدك)، ولا نجمع معلوماتهم عن علم. إذا كنت تعتقد أن طفلاً قدّم لنا معلومات شخصية، فيرجى التواصل معنا وسنقوم بحذفها.'] },
      { h: 'عمليات نقل البيانات الدولية', p: ['قد نقوم نحن ومزودو خدماتنا بمعالجة معلوماتك خارج بلد إقامتك، بما في ذلك الولايات المتحدة. عند الاقتضاء، نعتمد على ضمانات مناسبة مثل البنود التعاقدية القياسية.'] },
      { h: 'الأمان', p: ['نستخدم إجراءات حماية متوافقة مع معايير الصناعة — بما في ذلك التشفير أثناء النقل، والتخزين المشفّر لرموز الوصول الخاصة بالمنصات الاجتماعية، وضوابط الوصول على أنظمتنا — لحماية معلوماتك. لا توجد طريقة تخزين أو نقل آمنة بنسبة 100%.'] },
      { h: 'التغييرات على هذه السياسة', p: ['قد نحدّث هذه السياسة من وقت لآخر. يعكس تاريخ السريان أعلاه أحدث مراجعة؛ وستُعرض أي تغييرات جوهرية على هذه الصفحة.'] },
      { h: 'التواصل', p: ['Rıdvan Uyan (المتحكم في البيانات) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'شروط الاستخدام',
    lead: 'الشروط التي تحكم استخدامك لتطبيق Viral Factory.',
    intro:
      'تحكم شروط الاستخدام هذه («الشروط») استخدامك لتطبيق Viral Factory لنظام iOS وهذا الموقع الإلكتروني (يُشار إليهما معًا بـ«الخدمة»)، المقدَّمين من قِبل Rıdvan Uyan («نحن»). بتنزيل الخدمة أو الوصول إليها أو استخدامها، فإنك توافق على هذه الشروط.',
    sections: [
      { h: 'الخدمة', p: ['يقوم Viral Factory بتوليد محتوى قصير — فيديو وصور وتعليقات — من الأوامر النصية والمواد المرجعية التي تقدمها، باستخدام نماذج ذكاء اصطناعي من أطراف ثالثة. قد يكون الناتج المولّد غير دقيق أو غير متوقع أو غير مناسب لغرضك؛ وأنت المسؤول عن مراجعته قبل نشره أو الاعتماد عليه.'] },
      { h: 'شروط ترخيص Apple', p: ['تخضع الاشتراكات المتجددة تلقائيًا التي تُشترى عبر App Store أيضًا لاتفاقية ترخيص المستخدم النهائي للتطبيقات المرخّصة من Apple، المتاحة على apple.com/legal/internet-services/itunes/dev/stdeula. وفي حال تعارض هذه الشروط مع تلك الاتفاقية بشأن مسألة اشتراك أو شراء، تسود اتفاقية Apple.'] },
      {
        h: 'الاستخدام المقبول',
        p: ['توافق على عدم استخدام الخدمة من أجل:'],
        ul: [
          'توليد أو توزيع محتوى غير قانوني، أو محتوى ينتهك حقوق الملكية الفكرية أو العلامة التجارية أو الصورة الشخصية أو حقوق أخرى لطرف آخر؛',
          'تصوير شخص حقيقي يمكن التعرف عليه دون موافقته — بما في ذلك عبر ميزات الظهور الشخصي أو الشخصية بالذكاء الاصطناعي أو «أعد صناعة فيديو ناجح»؛',
          'انتحال شخصية أي فرد أو منظمة، أو توليد محتوى مصمم للخداع؛',
          'توليد محتوى جنسي يتضمن قاصرين تحت أي ظرف من الظروف — لا نتسامح مطلقًا مع ذلك وسنبلغ السلطات المختصة؛',
          'مضايقة أي شخص أو التشهير به أو تهديده؛',
          'محاولة تعطيل الخدمة أو إجراء هندسة عكسية لها أو إساءة استخدامها، أو الالتفاف على حدود الأرصدة أو معدل الاستخدام.',
        ],
      },
      { h: 'محتواك وصورة الآخرين', p: ['تحتفظ بملكية الأوامر النصية والوسائط التي ترفعها والمحتوى الذي تولّده. يجب أن تمتلك الحقوق في أي شيء ترفعه — صورة، فيديو، رابط ريلز — أو أن يكون لديك إذن باستخدامه. أنت تمنحنا ترخيصًا محدودًا لمعالجة هذا المحتوى وتخزينه ونقله فقط بغرض تقديم الخدمة، بما في ذلك إرساله إلى fal.ai ومزودي نماذجها كما هو موضح في سياسة الخصوصية الخاصة بنا. أنت وحدك المسؤول عن مراجعة الناتج المولّد وعن كيفية استخدامه أو نشره أو الترويج له، بما في ذلك الامتثال لقواعد كل منصة اجتماعية عند النشر عبر الخدمة.'] },
      { h: 'إخلاء مسؤولية عن ناتج الذكاء الاصطناعي', p: ['يُولَّد المحتوى بواسطة الذكاء الاصطناعي وقد يكون غير دقيق أو منخفض الجودة أو يشبه محتوى آخر بمحض الصدفة. لا نضمن أي نتيجة أو تفاعل أو أداء معين. أنت المسؤول عن التحقق من الحقائق وعن أي مراجعة قانونية ضرورية قبل نشر المحتوى المولّد.'] },
      {
        h: 'الأرصدة والمشتريات والاشتراكات',
        ul: [
          'يستهلك توليد المحتوى أرصدة؛ وتُعرض التكلفة داخل التطبيق قبل التوليد.',
          'لا تنتهي صلاحية حزم الأرصدة لمرة واحدة ما لم يُذكر خلاف ذلك وقت الشراء.',
          'تتضمن خطط الاشتراك رصيدًا يتجدد في كل فترة فوترة؛ ولا يتم ترحيل أرصدة الاشتراك غير المستخدمة إلى الفترة التالية.',
          'تتجدد الاشتراكات تلقائيًا لنفس المدة بالسعر السائد آنذاك ما لم يتم إلغاؤها قبل 24 ساعة على الأقل من نهاية الفترة الحالية. يمكنك الإدارة أو الإلغاء في أي وقت عبر الإعدادات ← [اسمك] ← الاشتراكات على جهازك — راجع صفحة الدعم لدينا.',
          'باستثناء ما يقتضيه القانون، جميع المشتريات غير قابلة للاسترداد؛ وتتولى Apple معالجة طلبات استرداد مشتريات App Store.',
        ],
      },
      { h: 'الإنهاء', p: ['يمكنك التوقف عن استخدام الخدمة وحذف حسابك في أي وقت — راجع صفحة «حذف الحساب». يجوز لنا تعليق وصولك أو إنهاءه في حال انتهاك هذه الشروط أو إساءة استخدام الأرصدة أو الاحتيال أو إساءة استخدام الخدمة، مع أو بدون إشعار مسبق.'] },
      { h: 'إخلاء المسؤولية', p: ['تُقدَّم الخدمة «كما هي» و«حسب توافرها»، دون أي ضمانات من أي نوع، إلى أقصى حد يسمح به القانون.'] },
      { h: 'تحديد المسؤولية', p: ['إلى أقصى حد يسمح به القانون، لا نتحمل المسؤولية عن الأضرار غير المباشرة أو العرضية أو الخاصة أو التبعية أو العقابية، أو عن خسارة الأرباح أو البيانات، الناشئة عن استخدامك للخدمة. تقتصر مسؤوليتنا الإجمالية عن أي مطالبة تتعلق بالخدمة على الأكبر من: المبلغ الذي دفعته لنا خلال الاثني عشر شهرًا السابقة لنشوء المطالبة، أو 20 دولارًا أمريكيًا.'] },
      { h: 'القانون الحاكم', p: ['تخضع هذه الشروط لقوانين جمهورية تركيا، بصرف النظر عن مبادئ تنازع القوانين. إذا كنت مستهلكًا مقيمًا اعتياديًا في الاتحاد الأوروبي أو المملكة المتحدة أو ولاية قضائية أخرى تطبّق قوانين إلزامية لحماية المستهلك، فإن هذا القسم لا يحرمك من حماية تلك القوانين الإلزامية أو من حقك في رفع دعوى أمام محاكمك المحلية.'] },
      { h: 'التغييرات على هذه الشروط', p: ['قد نحدّث هذه الشروط من وقت لآخر؛ ويعني استمرار استخدامك للخدمة بعد أي تعديل موافقتك على هذا التحديث. سنقوم بتحديث تاريخ السريان أعلاه.'] },
      { h: 'التواصل', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'الدعم',
    lead: 'نحن هنا للمساعدة.',
    intro: 'هل لديك سؤال أو مشكلة؟ راسلنا على ridvan.uyn@gmail.com — ونهدف إلى الرد خلال يومي عمل.',
    faqs: [
      { q: 'كيف تعمل الأرصدة؟', a: 'تكلّف كل عملية توليد (فيديو، مجموعة صور، كاروسيل) عددًا من الأرصدة يظهر قبل التأكيد — وتعتمد التكلفة الدقيقة على الاستوديو ومستوى الجودة المختارين. يتضمن الاشتراك رصيدًا شهريًا يتجدد كل فترة دون ترحيل؛ ويمكنك أيضًا شراء حزمة أرصدة لمرة واحدة لا تنتهي صلاحيتها.' },
      { q: 'كيف أستعيد مشترياتي؟', a: 'افتح Viral Factory ← الملف الشخصي ← الإعدادات ← استعادة المشتريات. تأكد من تسجيل الدخول بنفس معرّف Apple الذي استخدمته للشراء.' },
      { q: 'كيف ألغي اشتراكي؟', a: 'تتم فوترة الاشتراكات وإدارتها من قِبل Apple وليس من قِبلنا. على هاتفك الآيفون: تطبيق الإعدادات ← [اسمك] ← الاشتراكات ← Viral Factory ← إلغاء الاشتراك. يوقف الإلغاء التجديدات المستقبلية؛ ويستمر وصولك حتى نهاية الفترة التي دفعت مقابلها بالفعل.' },
      { q: 'كيف أحذف حسابي؟', a: 'داخل التطبيق: الملف الشخصي ← الإعدادات ← حذف الحساب. راجع صفحة «حذف الحساب» لمعرفة ما يُحذف بالضبط وكيفية طلب الحذف عبر البريد الإلكتروني إذا لم يعد لديك التطبيق.' },
      { q: 'ما اللغات التي يدعمها التطبيق؟', a: 'الإنجليزية، الألمانية، الفرنسية، الإسبانية، الإيطالية، البرتغالية، التركية، اليابانية، الكورية، العربية، والهندية.' },
      { q: 'ماذا تفعل الاستوديوهات؟', a: '«أعد صناعة فيديو ناجح» يعيد بناء ريلز تلصقه باستخدام منتجك. «إعلان فيديو قصير» و«مشهد سينمائي قصير» يولّدان فيديو بسيناريو من وصف. «فيديو شهادة على طريقة الصنّاع» ينشئ إعلانًا بأسلوب UGC يتحدث إلى الكاميرا. «منشور كاروسيل» يبني كاروسيل صور. «شخصية بالذكاء الاصطناعي» تحافظ على هوية ثابتة عبر الفيديوهات. «الظهور الشخصي» و«إدراج داخل فيديو لديك» يضعان صورة حقيقية داخل مشهد مولّد أو موجود. توفر الأفكار الافتتاحية اليومية عشر أفكار جديدة كل صباح، ويمكن جدولة المنشورات الجاهزة مباشرة على TikTok وInstagram وYouTube.' },
      { q: 'لماذا يطلب التطبيق الوصول إلى الكاميرا أو مكتبة الصور أو الميكروفون؟', a: 'فقط لتتمكن من التقاط أو اختيار صور وفيديوهات لاستخدامها كمدخل للتوليد، وليتمكن التطبيق من حفظ فيديوهاتك الجاهزة في مكتبة صورك. التفاصيل في سياسة الخصوصية الخاصة بنا.' },
      { q: 'فشلت عملية توليد لكنها استهلكت أرصدتي — ماذا أفعل؟', a: 'راسلنا بالتاريخ والوقت التقريبيين، وإن أمكن لقطة شاشة؛ وسنحقق في الأمر ونعيد الأرصدة في حال تأكد وجود خطأ في النظام.' },
    ],
  },
  deleteAccount: {
    title: 'احذف حسابك وبياناتك',
    lead: 'كيفية حذف حساب Viral Factory نهائيًا، من داخل التطبيق أو عبر البريد الإلكتروني.',
    intro: 'يمكنك حذف حساب Viral Factory وجميع البيانات المرتبطة به نهائيًا في أي وقت، مباشرة من داخل التطبيق — دون الحاجة إلى التواصل معنا.',
    sections: [
      {
        h: 'الحذف من داخل التطبيق (موصى به)',
        p: ['افتح Viral Factory على جهازك واتبع هذه الخطوات:'],
        ul: [
          'انتقل إلى الملف الشخصي (علامة التبويب السفلية).',
          'اضغط على الإعدادات.',
          'اضغط على حذف الحساب، بالقرب من أسفل الشاشة.',
          'إذا كنت قد سجّلت الدخول عبر Apple، فقد يُطلب منك إعادة المصادقة عبر Sign in with Apple للتأكيد أن هذا أنت.',
          'أكّد الحذف. يسري هذا فورًا ولا يمكن التراجع عنه.',
        ],
      },
      {
        h: 'ما الذي يتم حذفه',
        ul: [
          'حسابك ومعلومات ملفك الشخصي',
          'رصيدك وسجل معاملاتك',
          'كل فيديو ومجموعة صور وكاروسيل وشخصية قمت بتوليدها، ووسائطها المصدرية',
          'الحسابات الاجتماعية المرتبطة (TikTok وInstagram وYouTube) ورموز الوصول المخزَّنة الخاصة بها',
          'الأوامر النصية المحفوظة والإشعارات',
          'ارتباطك بـ Sign in with Apple / Google (يتم إلغاء إذن Apple)',
        ],
      },
      {
        h: 'ما لا يتأثر تلقائيًا',
        p: [
          'حذف حسابك لا يُلغي اشتراكًا نشطًا في App Store — يجب إلغاؤه بشكل منفصل عبر الإعدادات ← [اسمك] ← الاشتراكات على جهازك، وإلا فسيستمر في التجدد.',
          'يبقى المحتوى الذي نشرته بالفعل على TikTok أو Instagram أو YouTube على تلك المنصات؛ احذفه مباشرة هناك إذا أردت إزالته.',
        ],
      },
      {
        h: 'لا يمكنك الوصول إلى التطبيق؟',
        p: ['راسلنا على ridvan.uyn@gmail.com من العنوان المرتبط بحسابك (أو صف حسابك قدر الإمكان) واطلب منا حذف حسابك وبياناتك. نُنجز طلبات الحذف اليدوية خلال أيام عمل قليلة.'],
      },
    ],
  },
};

const hi: LegalPack = {
  updatedLabel: 'प्रभावी तिथि',
  effectiveDateLabel: '26 सितंबर 2026',
  privacy: {
    title: 'गोपनीयता नीति',
    lead: 'Viral Factory आपकी जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है।',
    intro:
      'यह गोपनीयता नीति बताती है कि Viral Factory iOS ऐप और यह वेबसाइट कौन-सी जानकारी एकत्र करते हैं, क्यों, और आपके पास कौन-से विकल्प हैं। Viral Factory को व्यक्तिगत डेवलपर Rıdvan Uyan द्वारा विकसित किया गया है, जो यहाँ बताए गए उद्देश्यों के लिए आपके डेटा के नियंत्रक हैं।',
    sections: [
      {
        h: 'हम जो जानकारी एकत्र करते हैं',
        ul: [
          'खाता पहचानकर्ता — ऐप पहली बार खोलने पर बनाया गया एक रैंडम डिवाइस पहचानकर्ता, जो उस डिवाइस पर आपके गेस्ट खाते के लिए उपयोग होता है; अगर आप इसके बजाय Apple या Google से साइन इन करते हैं, तो हमें आपका नाम, ईमेल पता (या एक निजी रिले ईमेल) और प्रदाता खाता आईडी मिलती है।',
          'आपके द्वारा दी गई सामग्री — आपके लिखे गए प्रॉम्प्ट और टेक्स्ट; अपलोड या पेस्ट किए गए फ़ोटो, वीडियो या लिंक, जैसे दोबारा बनाने के लिए कोई रील लिंक, कैरेक्टर या कैमियो स्टूडियो के लिए एक रेफ़रेंस फ़ोटो, या विश्लेषण के लिए स्क्रीन रिकॉर्डिंग।',
          'जनरेट की गई सामग्री — ऐप द्वारा आपके लिए बनाए गए मीडिया, स्क्रिप्ट और कैप्शन, और आपका जनरेशन व क्रेडिट-लेनदेन इतिहास।',
          'खरीद संबंधी जानकारी — सब्सक्रिप्शन और क्रेडिट-पैक खरीद App Store द्वारा संभाली जाती हैं; RevenueCat हमारी ओर से खरीद और अधिकार संबंधी इवेंट्स को प्रोसेस करता है। हमें आपका कार्ड नंबर कभी नहीं मिलता।',
          'सोशल अकाउंट कनेक्शन — अगर आप कंटेंट पब्लिश करने के लिए TikTok, Instagram या YouTube कनेक्ट करते हैं, तो हमें उस अकाउंट की बुनियादी प्रोफ़ाइल जानकारी (हैंडल, डिस्प्ले नाम, अवतार) मिलती है और हम एक एन्क्रिप्टेड एक्सेस टोकन संग्रहीत करते हैं ताकि ऐप आपकी ओर से पब्लिश कर सके।',
          'एनालिटिक्स — ऐप का उपयोग कैसे होता है यह समझने के लिए हम Mixpanel और PostHog का उपयोग करते हैं। इंटरैक्शन विश्लेषण के लिए PostHog सेशन रीप्ले सक्षम है, लेकिन कैप्चर से पहले स्क्रीन पर मौजूद सभी टेक्स्ट और इमेज मास्क कर दी जाती हैं, इसलिए रीप्ले में आपके प्रॉम्प्ट, फ़ोटो या जनरेट की गई सामग्री कभी नहीं दिखती। एनालिटिक्स एक अलग, रैंडम इंस्टॉलेशन आईडी का उपयोग करता है — कभी भी आपके गेस्ट खाता पहचानकर्ता का नहीं।',
          'डिवाइस और डायग्नोस्टिक डेटा — ऐप वर्शन, सामान्य डिवाइस मॉडल और ऑपरेटिंग सिस्टम, और भाषा सेटिंग्स।',
          'सूचना प्राथमिकताएँ — क्या आपने डेली आइडिया रिमाइंडर चालू किया है, जो आपके डिवाइस पर स्थानीय रूप से संग्रहीत होता है।',
        ],
        p: ['हम विज्ञापन ट्रैकर्स का उपयोग नहीं करते, और ऐप Apple की App Tracking Transparency अनुमति नहीं मांगता।'],
      },
      {
        h: 'हम आपकी जानकारी का उपयोग कैसे करते हैं',
        ul: [
          'ऐप संचालित करने और आपके अनुरोध पर सामग्री जनरेट करने के लिए',
          'आपको प्रमाणित करने और आपका खाता व क्रेडिट बैलेंस बनाए रखने के लिए',
          'खरीद प्रोसेस करने और सब्सक्रिप्शन प्रबंधित करने के लिए',
          'आपके द्वारा स्पष्ट रूप से कनेक्ट किए गए सोशल अकाउंट्स पर कंटेंट पब्लिश या शेड्यूल करने के लिए',
          'डेली हुक सुविधा देने के लिए और, सक्षम होने पर, ऐसा लोकल रिमाइंडर भेजने के लिए जो कभी आपके डिवाइस से बाहर नहीं जाता',
          'प्रोडक्ट के उपयोग को समझने, बग ठीक करने और सुविधाओं को बेहतर बनाने के लिए',
          'दुरुपयोग, धोखाधड़ी और हमारे उपयोग की शर्तों के उल्लंघन का पता लगाने के लिए',
          'आपके द्वारा भेजे गए सहायता अनुरोधों का जवाब देने के लिए',
        ],
      },
      {
        h: 'AI जनरेशन और तृतीय-पक्ष प्रोसेसर',
        p: [
          'आपके द्वारा सबमिट की गई सामग्री और रेफ़रेंस मटीरियल केवल आपके अनुरोध किए गए आउटपुट को जनरेट करने के लिए हमारे AI इन्फ्रास्ट्रक्चर प्रदाता fal.ai को भेजे जाते हैं। अनुरोध के आधार पर, fal.ai उस काम को उन मॉडल प्रदाताओं तक भेजता है जिनमें वर्तमान में OpenAI, Google (Gemini), Anthropic (Claude), Kling, ElevenLabs, Topaz और OmniHuman शामिल हैं। इन प्रदाताओं के साथ हमारे अलग, सीधे खाते नहीं हैं — fal.ai वह प्रोसेसर है जिससे हमारा अनुबंध है। इनमें से कोई भी प्रदाता आपकी सामग्री का उपयोग अपने सामान्य मॉडल को प्रशिक्षित करने के लिए नहीं करता, और हम भी आपकी सामग्री का उपयोग अपने खुद के मॉडल को प्रशिक्षित करने के लिए नहीं करते।',
          'अपलोड की गई रेफ़रेंस फ़ोटो और वीडियो केवल उतने समय के लिए रखी जाती हैं जितना आपका परिणाम जनरेट करने और आपको उसकी समीक्षा करने देने के लिए आवश्यक हो — फ़िलहाल लगभग 30 दिन — और फिर हटा दी जाती हैं।',
          'जनरेट की गई मीडिया Amazon Web Services (S3) पर, और कुछ फ़ाइलों के लिए Supabase Storage पर संग्रहीत होती है, और एक कंटेंट डिलीवरी नेटवर्क (CDN) के माध्यम से पहुँचाई जाती है। एप्लिकेशन डेटा (खाते, प्रोजेक्ट, क्रेडिट इतिहास) MongoDB में संग्रहीत होता है। हमारा बैकएंड DigitalOcean पर होस्ट किया जाता है।',
        ],
      },
      {
        h: 'साझाकरण',
        p: ['हम जानकारी केवल इनके साथ साझा करते हैं:'],
        ul: [
          'ऊपर बताए गए सेवा प्रदाता, ऐप चलाने के लिए आवश्यक सीमा तक (AI जनरेशन, होस्टिंग, स्टोरेज, एनालिटिक्स, भुगतान प्रोसेसिंग);',
          'वे सोशल प्लेटफ़ॉर्म (TikTok, Instagram, YouTube) जिन्हें आप स्पष्ट रूप से कनेक्ट करते हैं और पब्लिश करने के लिए चुनते हैं;',
          'अगर हम कभी किसी विलय, अधिग्रहण या संपत्ति बिक्री में शामिल होते हैं, तो एक खरीदार या उत्तराधिकारी, इस नीति के अधीन;',
          'कानून प्रवर्तन या अन्य पक्ष, अगर कानून द्वारा आवश्यक हो या हमारे अधिकारों, हमारे उपयोगकर्ताओं या जनता की सुरक्षा के लिए।',
        ],
      },
      { h: 'हम क्या नहीं करते', p: ['हम व्यक्तिगत डेटा नहीं बेचते, और जब तक आप स्पष्ट रूप से किसी चीज़ को सार्वजनिक करना न चुनें, हम आपके प्रॉम्प्ट, अपलोड या जनरेट की गई सामग्री को कभी भी अन्य उपयोगकर्ताओं के साथ साझा नहीं करते।'] },
      { h: 'डेटा प्रतिधारण', p: ['आपका खाता और जनरेट की गई सामग्री तब तक बनी रहती है जब तक आपका खाता सक्रिय है। अपलोड की गई रेफ़रेंस मीडिया आपके परिणाम को तैयार करने के लिए आवश्यक न रहने पर स्वतः हट जाती है (लगभग 30 दिन)। आप किसी भी समय ऐप में अलग-अलग जनरेशन हटा सकते हैं।'] },
      { h: 'अपना खाता हटाना', p: ['आप किसी भी समय ऐप में अपना खाता स्थायी रूप से हटा सकते हैं: प्रोफ़ाइल → सेटिंग्स → खाता हटाएं। इससे आपका खाता, क्रेडिट इतिहास, वीडियो, कैरेक्टर, प्रॉम्प्ट और जुड़े हुए सोशल अकाउंट तुरंत और स्थायी रूप से हट जाते हैं, और उपयोग किए जाने पर Sign in with Apple अनुमति रद्द हो जाती है। इससे कोई सक्रिय App Store सब्सक्रिप्शन रद्द नहीं होता — उसे अपनी Apple ID सेटिंग्स में अलग से रद्द करें। अगर आपके पास अब ऐप नहीं है तो ईमेल द्वारा हटाने का अनुरोध करने सहित पूरी चरण-दर-चरण जानकारी के लिए हमारा «खाता हटाएं» पेज देखें।'] },
      { h: 'GDPR के तहत आपके अधिकार (EEA, यूके, स्विट्ज़रलैंड)', p: ['अगर आप EEA, यूके या स्विट्ज़रलैंड में हैं, तो आपको अपने व्यक्तिगत डेटा तक पहुँचने, उसे सही करने, हटाने और उसकी एक प्रति (पोर्टेबिलिटी) प्राप्त करने, और कुछ प्रोसेसिंग पर आपत्ति करने या उसे सीमित करने का अधिकार है। हम आपके डेटा को इन आधारों पर प्रोसेस करते हैं: अनुबंध का निष्पादन (ऐप प्रदान करना), आपकी सहमति (जैसे, सेशन-रीप्ले एनालिटिक्स), और हमारे वैध हित (सुरक्षा, दुरुपयोग रोकथाम, सेवा में सुधार)। इन अधिकारों का उपयोग करने के लिए ridvan.uyn@gmail.com पर लिखें; हम एक महीने के भीतर जवाब देंगे।'] },
      { h: 'कैलिफ़ोर्निया निवासी (CCPA/CPRA)', p: ['कैलिफ़ोर्निया के निवासी हमारे पास मौजूद अपनी व्यक्तिगत जानकारी को जानने, हटाने या सही करने का अनुरोध कर सकते हैं, और उसकी «बिक्री» या «साझाकरण» से बाहर निकल सकते हैं — हम व्यक्तिगत जानकारी नहीं बेचते और क्रॉस-कॉन्टेक्स्ट बिहेवियरल विज्ञापन ट्रैकर्स का उपयोग नहीं करते। अनुरोध ridvan.uyn@gmail.com पर भेजें।'] },
      { h: 'बच्चे', p: ['Viral Factory 13 वर्ष से कम आयु के बच्चों (या आपके देश में आवश्यक न्यूनतम आयु) के लिए नहीं है, और हम जानबूझकर उनकी जानकारी एकत्र नहीं करते। अगर आपको लगता है कि किसी बच्चे ने हमें व्यक्तिगत जानकारी दी है, तो हमसे संपर्क करें और हम उसे हटा देंगे।'] },
      { h: 'अंतरराष्ट्रीय डेटा स्थानांतरण', p: ['हम और हमारे सेवा प्रदाता आपकी जानकारी आपके निवास देश के बाहर, संयुक्त राज्य अमेरिका सहित, प्रोसेस कर सकते हैं। जहाँ आवश्यक हो, हम स्टैंडर्ड कॉन्ट्रैक्चुअल क्लॉज़ जैसे उपयुक्त सुरक्षा उपायों पर निर्भर करते हैं।'] },
      { h: 'सुरक्षा', p: ['हम आपकी जानकारी की सुरक्षा के लिए उद्योग-मानक सुरक्षा उपायों का उपयोग करते हैं — जिसमें ट्रांज़िट में एन्क्रिप्शन, सोशल-प्लेटफ़ॉर्म एक्सेस टोकन का एन्क्रिप्टेड भंडारण, और हमारे सिस्टम पर एक्सेस नियंत्रण शामिल हैं। भंडारण या ट्रांसमिशन की कोई भी विधि 100% सुरक्षित नहीं होती।'] },
      { h: 'इस नीति में बदलाव', p: ['हम समय-समय पर इस नीति को अपडेट कर सकते हैं। ऊपर दी गई प्रभावी तिथि नवीनतम संशोधन को दर्शाती है; महत्वपूर्ण बदलाव इस पेज पर दर्शाए जाएंगे।'] },
      { h: 'संपर्क करें', p: ['Rıdvan Uyan (डेटा नियंत्रक) — ridvan.uyn@gmail.com'] },
    ],
  },
  terms: {
    title: 'उपयोग की शर्तें',
    lead: 'Viral Factory के उपयोग को नियंत्रित करने वाली शर्तें।',
    intro:
      'ये उपयोग की शर्तें («शर्तें») Rıdvan Uyan («हम») द्वारा प्रदान किए गए Viral Factory iOS ऐप और इस वेबसाइट (मिलाकर, «सेवा») के आपके उपयोग को नियंत्रित करती हैं। सेवा को डाउनलोड, एक्सेस या उपयोग करके, आप इन शर्तों से सहमत होते हैं।',
    sections: [
      { h: 'सेवा', p: ['Viral Factory आपके द्वारा दिए गए प्रॉम्प्ट और रेफ़रेंस मटीरियल से, तृतीय-पक्ष AI मॉडल का उपयोग करके, वीडियो, इमेज और कैप्शन जैसी छोटी सामग्री जनरेट करता है। जनरेट किया गया आउटपुट गलत, अप्रत्याशित या आपके उद्देश्य के लिए अनुपयुक्त हो सकता है; इसे पब्लिश करने या इस पर भरोसा करने से पहले इसकी समीक्षा करने की ज़िम्मेदारी आपकी है।'] },
      { h: 'Apple की लाइसेंसिंग शर्तें', p: ['App Store के माध्यम से खरीदे गए ऑटो-रिन्यूएबल सब्सक्रिप्शन Apple के लाइसेंस प्राप्त एप्लिकेशन एंड यूज़र लाइसेंस एग्रीमेंट द्वारा भी नियंत्रित होते हैं, जो apple.com/legal/internet-services/itunes/dev/stdeula पर उपलब्ध है। अगर सब्सक्रिप्शन या खरीद से जुड़े किसी मामले में ये शर्तें उस अनुबंध से टकराती हैं, तो Apple का अनुबंध लागू होगा।'] },
      {
        h: 'स्वीकार्य उपयोग',
        p: ['आप सेवा का उपयोग निम्न के लिए न करने के लिए सहमत हैं:'],
        ul: [
          'गैरकानूनी सामग्री जनरेट या वितरित करना, या ऐसी सामग्री जो किसी और के कॉपीराइट, ट्रेडमार्क, पब्लिसिटी या अन्य अधिकारों का उल्लंघन करती हो;',
          'कैमियो, AI कैरेक्टर, या «हिट को फिर से बनाएं» जैसी सुविधाओं सहित, किसी वास्तविक, पहचान योग्य व्यक्ति को उसकी सहमति के बिना दिखाना;',
          'किसी व्यक्ति या संगठन का प्रतिरूपण करना, या धोखा देने के लिए बनाई गई सामग्री जनरेट करना;',
          'किसी भी परिस्थिति में नाबालिगों से जुड़ी यौन सामग्री जनरेट करना — इसके लिए हमारी शून्य सहनशीलता नीति है और हम इसकी सूचना संबंधित अधिकारियों को देंगे;',
          'किसी व्यक्ति को परेशान करना, बदनाम करना, या धमकाना;',
          'सेवा को बाधित करने, रिवर्स-इंजीनियर करने या उसका दुरुपयोग करने, या क्रेडिट या उपयोग सीमाओं को दरकिनार करने का प्रयास करना।',
        ],
      },
      { h: 'आपकी सामग्री और अन्य लोगों की छवि', p: ['आप अपने प्रॉम्प्ट, अपलोड किए गए मीडिया और जनरेट की गई सामग्री का स्वामित्व बनाए रखते हैं। आपके द्वारा अपलोड की गई किसी भी चीज़ — फ़ोटो, वीडियो, रील लिंक — के अधिकार आपके पास होने चाहिए या आपको उसका उपयोग करने की अनुमति होनी चाहिए। आप हमें केवल सेवा प्रदान करने के उद्देश्य से उस सामग्री को प्रोसेस, संग्रहीत और ट्रांसमिट करने के लिए एक सीमित लाइसेंस देते हैं, जिसमें हमारी गोपनीयता नीति में बताए अनुसार इसे fal.ai और उसके मॉडल प्रदाताओं को भेजना शामिल है। जनरेट किए गए आउटपुट की समीक्षा करने और सेवा के माध्यम से पब्लिश करते समय प्रत्येक सोशल प्लेटफ़ॉर्म के अपने नियमों का पालन करने सहित, आप इसे कैसे उपयोग, पब्लिश या प्रचारित करते हैं इसके लिए केवल आप ज़िम्मेदार हैं।'] },
      { h: 'AI आउटपुट अस्वीकरण', p: ['सामग्री AI द्वारा जनरेट की जाती है और गलत, निम्न गुणवत्ता की हो सकती है, या संयोगवश किसी अन्य सामग्री से मिलती-जुलती हो सकती है। हम किसी विशेष परिणाम, जुड़ाव या प्रदर्शन की गारंटी नहीं देते। जनरेट की गई सामग्री पब्लिश करने से पहले तथ्य-जांच और किसी भी आवश्यक कानूनी समीक्षा की ज़िम्मेदारी आपकी है।'] },
      {
        h: 'क्रेडिट, खरीद और सब्सक्रिप्शन',
        ul: [
          'सामग्री जनरेट करने में क्रेडिट खर्च होते हैं; जनरेट करने से पहले लागत ऐप में दिखाई जाती है।',
          'एक बार खरीदे गए क्रेडिट पैक तब तक समाप्त नहीं होते जब तक खरीद के समय अन्यथा न बताया जाए।',
          'सब्सक्रिप्शन प्लान में एक क्रेडिट भत्ता शामिल होता है जो हर बिलिंग अवधि में रिन्यू होता है; उपयोग न किए गए सब्सक्रिप्शन क्रेडिट अगली अवधि में आगे नहीं बढ़ते।',
          'मौजूदा अवधि समाप्त होने से कम से कम 24 घंटे पहले रद्द न किए जाने पर सब्सक्रिप्शन उसी अवधि के लिए तत्कालीन कीमत पर अपने-आप रिन्यू हो जाते हैं। अपने डिवाइस पर सेटिंग्स → [आपका नाम] → सब्सक्रिप्शन में जाकर कभी भी प्रबंधित करें या रद्द करें — हमारा सहायता पेज देखें।',
          'कानून द्वारा आवश्यक होने के अलावा, सभी खरीद गैर-वापसी योग्य हैं; App Store खरीद के लिए रिफ़ंड अनुरोध Apple द्वारा संभाले जाते हैं।',
        ],
      },
      { h: 'समाप्ति', p: ['आप किसी भी समय सेवा का उपयोग बंद कर सकते हैं और अपना खाता हटा सकते हैं — हमारा «खाता हटाएं» पेज देखें। इन शर्तों के उल्लंघन, क्रेडिट के दुरुपयोग, धोखाधड़ी, या सेवा के दुरुपयोग के लिए हम पूर्व सूचना के साथ या उसके बिना आपकी पहुँच को निलंबित या समाप्त कर सकते हैं।'] },
      { h: 'अस्वीकरण', p: ['सेवा को कानून द्वारा अनुमत अधिकतम सीमा तक, बिना किसी प्रकार की वारंटी के, «जैसी है» और «जैसी उपलब्ध है» आधार पर प्रदान किया जाता है।'] },
      { h: 'दायित्व की सीमा', p: ['कानून द्वारा अनुमत अधिकतम सीमा तक, हम सेवा के आपके उपयोग से उत्पन्न होने वाले अप्रत्यक्ष, आकस्मिक, विशेष, परिणामी या दंडात्मक नुकसान, या लाभ या डेटा की हानि के लिए ज़िम्मेदार नहीं हैं। सेवा से संबंधित किसी भी दावे के लिए हमारी कुल देयता इनमें से जो अधिक हो उस तक सीमित है: दावा उत्पन्न होने से पहले के 12 महीनों में आपने हमें जो भुगतान किया, या 20 अमेरिकी डॉलर।'] },
      { h: 'शासी कानून', p: ['ये शर्तें कानूनों के टकराव के सिद्धांतों की परवाह किए बिना, तुर्किये गणराज्य के कानूनों द्वारा शासित हैं। अगर आप यूरोपीय संघ, यूनाइटेड किंगडम, या अनिवार्य उपभोक्ता-संरक्षण कानूनों वाले किसी अन्य क्षेत्राधिकार में सामान्य रूप से निवासी उपभोक्ता हैं, तो यह अनुभाग आपको उन अनिवार्य कानूनों की सुरक्षा या अपनी स्थानीय अदालतों में कार्यवाही शुरू करने के अपने अधिकार से वंचित नहीं करता।'] },
      { h: 'इन शर्तों में बदलाव', p: ['हम समय-समय पर इन शर्तों को अपडेट कर सकते हैं; बदलाव के बाद सेवा का निरंतर उपयोग अपडेट की स्वीकृति माना जाएगा। हम ऊपर दी गई प्रभावी तिथि को अपडेट करेंगे।'] },
      { h: 'संपर्क करें', p: ['Rıdvan Uyan — ridvan.uyn@gmail.com'] },
    ],
  },
  support: {
    title: 'सहायता',
    lead: 'हम मदद के लिए यहाँ हैं।',
    intro: 'कोई सवाल या समस्या है? ridvan.uyn@gmail.com पर ईमेल करें — हम आमतौर पर 2 कार्यदिवसों के भीतर जवाब देते हैं।',
    faqs: [
      { q: 'क्रेडिट कैसे काम करते हैं?', a: 'हर जनरेशन (एक वीडियो, इमेज का एक सेट, एक कैरोसेल) की लागत एक निश्चित संख्या में क्रेडिट होती है, जो कन्फ़र्म करने से पहले दिखाई जाती है — सटीक लागत चुने गए स्टूडियो और क्वालिटी टियर पर निर्भर करती है। सब्सक्रिप्शन में एक मासिक क्रेडिट भत्ता शामिल होता है जो हर अवधि में रिन्यू होता है और आगे नहीं बढ़ता; आप एक बार खरीदा जाने वाला क्रेडिट पैक भी खरीद सकते हैं, जो समाप्त नहीं होता।' },
      { q: 'मैं अपनी खरीद कैसे पुनर्स्थापित करूं?', a: 'Viral Factory → प्रोफ़ाइल → सेटिंग्स → खरीद पुनर्स्थापित करें खोलें। सुनिश्चित करें कि आप उसी Apple ID से साइन इन हैं जिससे आपने खरीदारी की थी।' },
      { q: 'मैं अपना सब्सक्रिप्शन कैसे रद्द करूं?', a: 'सब्सक्रिप्शन Apple द्वारा बिल किए और प्रबंधित किए जाते हैं, हमारे द्वारा नहीं। अपने iPhone पर: सेटिंग्स ऐप → [आपका नाम] → सब्सक्रिप्शन → Viral Factory → सब्सक्रिप्शन रद्द करें। रद्द करने से भविष्य के रिन्यूअल रुक जाते हैं; आपकी पहुँच पहले से भुगतान की गई अवधि के अंत तक बनी रहती है।' },
      { q: 'मैं अपना खाता कैसे हटाऊं?', a: 'ऐप में: प्रोफ़ाइल → सेटिंग्स → खाता हटाएं। बिल्कुल क्या हटाया जाता है और अगर आपके पास अब ऐप नहीं है तो ईमेल द्वारा हटाने का अनुरोध कैसे करें, इसके लिए हमारा «खाता हटाएं» पेज देखें।' },
      { q: 'ऐप किन भाषाओं को सपोर्ट करता है?', a: 'अंग्रेज़ी, जर्मन, फ़्रेंच, स्पेनिश, इतालवी, पुर्तगाली, तुर्की, जापानी, कोरियाई, अरबी और हिन्दी।' },
      { q: 'स्टूडियो क्या करते हैं?', a: '«हिट को फिर से बनाएं» आपकी पेस्ट की गई रील को आपके अपने प्रोडक्ट के साथ दोबारा बनाता है। «शॉर्ट वीडियो विज्ञापन» और «सिनेमैटिक शॉर्ट» किसी विवरण से स्क्रिप्ट वाला वीडियो जनरेट करते हैं। «क्रिएटर टेस्टिमोनियल» कैमरे की ओर देखकर बोलने वाला UGC-स्टाइल विज्ञापन बनाता है। «स्वाइप पोस्ट» एक इमेज कैरोसेल बनाता है। «AI कैरेक्टर» वीडियो के बीच एक जैसा किरदार बनाए रखता है। «कैमियो» और «अपने वीडियो में जोड़ें» किसी असली फ़ोटो को जनरेट किए गए या मौजूदा सीन में रखते हैं। डेली हुक हर सुबह दस नए आइडिया देते हैं, और तैयार पोस्ट को सीधे TikTok, Instagram और YouTube पर शेड्यूल किया जा सकता है।' },
      { q: 'ऐप कैमरा, फ़ोटो लाइब्रेरी या माइक्रोफ़ोन एक्सेस क्यों मांगता है?', a: 'सिर्फ़ इसलिए ताकि आप जनरेशन के लिए इनपुट के रूप में उपयोग करने हेतु फ़ोटो और वीडियो कैप्चर या चुन सकें, और ऐप आपके तैयार वीडियो को आपकी फ़ोटो लाइब्रेरी में सेव कर सके। विवरण के लिए हमारी गोपनीयता नीति देखें।' },
      { q: 'एक जनरेशन विफल हो गया लेकिन मेरे क्रेडिट खर्च हो गए — मैं क्या करूं?', a: 'हमें अनुमानित तारीख और समय, और अगर संभव हो तो एक स्क्रीनशॉट ईमेल करें; सिस्टम एरर की पुष्टि होने पर हम जांच करेंगे और क्रेडिट वापस करेंगे।' },
    ],
  },
  deleteAccount: {
    title: 'अपना खाता और डेटा हटाएं',
    lead: 'ऐप में या ईमेल के ज़रिए अपना Viral Factory खाता स्थायी रूप से कैसे हटाएं।',
    intro: 'आप किसी भी समय, सीधे ऐप से, अपना Viral Factory खाता और उससे जुड़ा सारा डेटा स्थायी रूप से हटा सकते हैं — इसके लिए आपको हमसे संपर्क करने की ज़रूरत नहीं है।',
    sections: [
      {
        h: 'ऐप में हटाएं (अनुशंसित)',
        p: ['अपने डिवाइस पर Viral Factory खोलें और इन चरणों का पालन करें:'],
        ul: [
          'प्रोफ़ाइल पर जाएं (नीचे का टैब)।',
          'सेटिंग्स पर टैप करें।',
          'स्क्रीन के नीचे की ओर, खाता हटाएं पर टैप करें।',
          'अगर आपने Apple से साइन इन किया है, तो यह पुष्टि करने के लिए कि यह आप ही हैं, आपसे Sign in with Apple के ज़रिए दोबारा प्रमाणित करने को कहा जा सकता है।',
          'हटाने की पुष्टि करें। यह तुरंत प्रभावी होता है और इसे पूर्ववत नहीं किया जा सकता।',
        ],
      },
      {
        h: 'क्या हटाया जाता है',
        ul: [
          'आपका खाता और प्रोफ़ाइल जानकारी',
          'आपका क्रेडिट बैलेंस और लेनदेन इतिहास',
          'आपके द्वारा जनरेट किया गया हर वीडियो, इमेज सेट, कैरोसेल और कैरेक्टर, और उनका मूल मीडिया',
          'जुड़े हुए सोशल अकाउंट (TikTok, Instagram, YouTube) और उनके संग्रहीत एक्सेस टोकन',
          'सेव किए गए प्रॉम्प्ट और सूचनाएँ',
          'आपका Sign in with Apple / Google लिंक (Apple की अनुमति रद्द कर दी जाती है)',
        ],
      },
      {
        h: 'जो स्वतः प्रभावित नहीं होता',
        p: [
          'खाता हटाने से कोई सक्रिय App Store सब्सक्रिप्शन रद्द नहीं होता — इसे अपने डिवाइस पर सेटिंग्स → [आपका नाम] → सब्सक्रिप्शन में जाकर अलग से रद्द करें, नहीं तो यह रिन्यू होता रहेगा।',
          'आपने TikTok, Instagram या YouTube पर पहले से जो कंटेंट पब्लिश किया है वह उन प्लेटफ़ॉर्म पर बना रहता है; अगर आप उसे हटवाना चाहते हैं तो उसे सीधे वहीं से हटाएं।',
        ],
      },
      {
        h: 'ऐप तक पहुंच नहीं है?',
        p: ['अपने खाते से जुड़े पते से (या अपने खाते का यथासंभव अच्छी तरह वर्णन करते हुए) ridvan.uyn@gmail.com पर ईमेल करें और हमसे अपना खाता व डेटा हटाने का अनुरोध करें। हम मैन्युअल हटाने के अनुरोधों को कुछ कार्यदिवसों के भीतर पूरा करते हैं।'],
      },
    ],
  },
};

export const legal: Record<Locale, LegalPack> = { en, de, fr, es, it, pt, tr, ja, ko, ar, hi };
