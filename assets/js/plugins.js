/* =====================================================================
   TONI AUDIO - ELENCO DEI PLUGIN
   Per aggiungere un plugin: copia un blocco { ... }, cambia i valori e
   metti l'immagine in assets/img/. Senza "image" la scheda mostra un
   segnaposto grafico con l'icona (o l'iniziale) del plugin.

   status:  "soon" = In arrivo · "beta" = Beta · "available" = Disponibile
   formats: vst3Win, vst3Mac, au, standalone (true / false)
   accent:  due colori della scheda (bordo luminoso, dettagli)
   Testi: en, it, es, de, fr (se una lingua manca si usa l'inglese)
   ===================================================================== */
window.TONI_PLUGINS = [
  {
    id: "equilibra",
    name: "Equilibra",
    image: "assets/img/equilibra.webp",
    icon: "assets/img/equilibra-icon.svg",
    accent: ["#38e1ff", "#8b5cf6"],
    status: "soon",
    formats: { vst3Win: true, vst3Mac: true, au: true, standalone: true },
    tag: {
      en: "Multiband dynamics", it: "Dinamica multibanda", es: "Dinámica multibanda",
      de: "Multiband-Dynamik", fr: "Dynamique multibande"
    },
    text: {
      en: "Lifts what is too quiet and tames what is too loud, band by band. Upward and downward compression in four bands, a real-time gain curve over the spectrum and a true-peak limiter at the end.",
      it: "Alza ciò che è troppo piano e doma ciò che è troppo forte, banda per banda. Compressione verso l'alto e verso il basso su quattro bande, curva di guadagno in tempo reale sullo spettro e limiter true peak finale.",
      es: "Sube lo que suena demasiado bajo y doma lo que suena demasiado fuerte, banda por banda. Compresión ascendente y descendente en cuatro bandas, curva de ganancia en tiempo real sobre el espectro y limitador true peak al final.",
      de: "Hebt zu Leises an und bändigt zu Lautes, Band für Band. Aufwärts- und Abwärtskompression in vier Bändern, Echtzeit-Gainkurve über dem Spektrum und ein True-Peak-Limiter am Ende.",
      fr: "Remonte ce qui est trop faible et dompte ce qui est trop fort, bande par bande. Compression ascendante et descendante sur quatre bandes, courbe de gain en temps réel sur le spectre et limiteur true peak en sortie."
    },
    features: {
      en: ["4 bands, upward + downward", "Minimum, linear & linear-fast phase", "Auto Gain, Delta, true-peak limiter"],
      it: ["4 bande, verso l'alto + verso il basso", "Fase minima, lineare e lineare rapida", "Auto Gain, Delta, limiter true peak"],
      es: ["4 bandas, ascendente + descendente", "Fase mínima, lineal y lineal rápida", "Auto Gain, Delta, limitador true peak"],
      de: ["4 Bänder, aufwärts + abwärts", "Minimal-, linear- und schnelle Linearphase", "Auto Gain, Delta, True-Peak-Limiter"],
      fr: ["4 bandes, ascendante + descendante", "Phase minimale, linéaire et linéaire rapide", "Gain auto, Delta, limiteur true peak"]
    }
  },
  {
    id: "lirica",
    name: "Lirica",
    image: "assets/img/lirica.webp",
    icon: "assets/img/lirica-icon.svg",
    accent: ["#ff5fa2", "#8b5cf6"],
    status: "soon",
    formats: { vst3Win: true, vst3Mac: true, au: true, standalone: true },
    tag: {
      en: "Vocal suite", it: "Suite per la voce", es: "Suite vocal",
      de: "Vocal-Suite", fr: "Suite vocale"
    },
    text: {
      en: "The complete vocal chain in one window: tone, de-esser, compressor, warmth, five reverbs and a tempo-synced delay. Clearly named controls and genre presets get you a finished vocal in minutes.",
      it: "L'intera catena per la voce in una sola finestra: tono, de-esser, compressore, calore, cinque riverberi e un delay a tempo. Comandi chiari e preset per genere: una voce finita in pochi minuti.",
      es: "Toda la cadena vocal en una sola ventana: tono, de-esser, compresor, calidez, cinco reverbs y un delay sincronizado al tempo. Controles claros y presets por género para una voz terminada en minutos.",
      de: "Die komplette Vocal-Kette in einem Fenster: Klang, De-Esser, Kompressor, Wärme, fünf Hallräume und ein tempo-synchrones Delay. Klar benannte Regler und Genre-Presets für fertige Vocals in Minuten.",
      fr: "Toute la chaîne vocale dans une seule fenêtre : timbre, de-esser, compresseur, chaleur, cinq réverbes et un délai synchronisé au tempo. Des réglages clairs et des presets par genre pour une voix finie en quelques minutes."
    },
    features: {
      en: ["Tone, de-esser, compressor, warmth", "5 reverbs + tempo-synced delay with ducking", "Live Mic mode in the Standalone app"],
      it: ["Tono, de-esser, compressore, calore", "5 riverberi + delay a tempo con ducking", "Modalità Live Mic nell'app Standalone"],
      es: ["Tono, de-esser, compresor, calidez", "5 reverbs + delay al tempo con ducking", "Modo Live Mic en la app Standalone"],
      de: ["Klang, De-Esser, Kompressor, Wärme", "5 Hallräume + Tempo-Delay mit Ducking", "Live-Mic-Modus in der Standalone-App"],
      fr: ["Timbre, de-esser, compresseur, chaleur", "5 réverbes + délai au tempo avec ducking", "Mode Live Mic dans l'app Standalone"]
    }
  },
  {
    id: "vetta",
    name: "Vetta",
    image: "assets/img/vetta.webp",
    icon: "assets/img/vetta-icon.svg",
    accent: ["#ffcc4d", "#ff7a3d"],
    status: "soon",
    formats: { vst3Win: true, vst3Mac: true, au: true, standalone: true },
    tag: {
      en: "Clipper / Limiter", it: "Clipper / Limiter", es: "Clipper / Limitador",
      de: "Clipper / Limiter", fr: "Clipper / Limiteur"
    },
    text: {
      en: "Makes your master louder without ever crossing the ceiling: an oversampled clipper, a lookahead true-peak limiter with automatic release and an EBU R128 loudness meter with streaming targets.",
      it: "Rende il master più forte senza mai superare il ceiling: clipper in oversampling, limiter true peak con lookahead e rilascio automatico, e misura della loudness EBU R128 con i riferimenti delle piattaforme.",
      es: "Hace tu máster más fuerte sin pasar nunca del techo: clipper con sobremuestreo, limitador true peak con lookahead y release automático, y medidor de loudness EBU R128 con los objetivos del streaming.",
      de: "Macht dein Master lauter, ohne je das Ceiling zu überschreiten: Clipper mit Oversampling, True-Peak-Limiter mit Lookahead und automatischem Release sowie EBU-R128-Lautheitsmessung mit Streaming-Zielwerten.",
      fr: "Rend votre master plus fort sans jamais dépasser le plafond : clipper suréchantillonné, limiteur true peak avec lookahead et relâche automatique, et mesure de loudness EBU R128 avec les cibles du streaming."
    },
    features: {
      en: ["Oversampled clipper + true-peak limiter", "Automatic, program-dependent release", "LUFS meter: Spotify, Apple Music, YouTube…"],
      it: ["Clipper in oversampling + limiter true peak", "Rilascio automatico che segue la musica", "Meter LUFS: Spotify, Apple Music, YouTube…"],
      es: ["Clipper con sobremuestreo + limitador true peak", "Release automático según el material", "Medidor LUFS: Spotify, Apple Music, YouTube…"],
      de: ["Clipper mit Oversampling + True-Peak-Limiter", "Automatisches, programmabhängiges Release", "LUFS-Messung: Spotify, Apple Music, YouTube…"],
      fr: ["Clipper suréchantillonné + limiteur true peak", "Relâche automatique selon le programme", "Mesure LUFS : Spotify, Apple Music, YouTube…"]
    }
  }
];
