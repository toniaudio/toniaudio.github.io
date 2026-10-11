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
  },
  {
    id: "materia",
    name: "Materia",
    image: "assets/img/materia.webp",
    icon: "assets/img/materia-icon.svg",
    accent: ["#ff5f8f", "#a259ff"],
    status: "soon",
    formats: { vst3Win: true, vst3Mac: true, au: true, standalone: true },
    tag: {
      en: "Drum machine", it: "Drum machine", es: "Caja de ritmos",
      de: "Drumcomputer", fr: "Boîte à rythmes"
    },
    text: {
      en: "A 16-track drum machine for your own sounds: drag your samples and loops onto the tracks and program 8 patterns of up to 16 bars on a 1/16, 1/32 or 1/64 grid or freely, with velocity, probability and roll on every hit.",
      it: "Una drum machine a 16 tracce per i tuoi suoni: trascina i tuoi sample e loop sulle tracce e programma 8 pattern fino a 16 battute su griglia 1/16, 1/32, 1/64 o liberi, con velocity, probabilità e roll su ogni colpo.",
      es: "Una caja de ritmos de 16 pistas para tus propios sonidos: arrastra tus samples y loops a las pistas y programa 8 patrones de hasta 16 compases en rejilla de 1/16, 1/32, 1/64 o libres, con velocity, probabilidad y roll en cada golpe.",
      de: "Ein Drumcomputer mit 16 Spuren für deine eigenen Sounds: eigene Samples und Loops auf die Spuren ziehen und 8 Patterns mit bis zu 16 Takten im 1/16-, 1/32-, 1/64-Raster oder frei programmieren, mit Velocity, Wahrscheinlichkeit und Roll pro Schlag.",
      fr: "Une boîte à rythmes 16 pistes pour vos propres sons : glissez vos samples et boucles sur les pistes et programmez 8 patterns jusqu'à 16 mesures sur une grille 1/16, 1/32, 1/64 ou en libre, avec vélocité, probabilité et roll sur chaque coup."
    },
    features: {
      en: ["16 tracks, drag & drop of your samples", "Loops up to 16 bars, grid 1/16–1/64 or free", "Start / End on the waveform, choke groups, → MIDI"],
      it: ["16 tracce, drag & drop dei tuoi sample", "Loop fino a 16 battute, griglia 1/16–1/64 o libera", "Start / End sulla forma d'onda, gruppi choke, → MIDI"],
      es: ["16 pistas, arrastrar y soltar tus samples", "Loops de hasta 16 compases, rejilla 1/16–1/64 o libre", "Start / End en la forma de onda, grupos choke, → MIDI"],
      de: ["16 Spuren, Drag & Drop eigener Samples", "Loops bis 16 Takte, Raster 1/16–1/64 oder frei", "Start / End auf der Wellenform, Choke-Gruppen, → MIDI"],
      fr: ["16 pistes, glisser-déposer de vos samples", "Boucles jusqu'à 16 mesures, grille 1/16–1/64 ou libre", "Start / End sur la forme d'onde, groupes choke, → MIDI"]
    }
  },
  {
    id: "plasma",
    name: "Plasma",
    image: "assets/img/plasma.webp",
    icon: "assets/img/plasma-icon.svg",
    accent: ["#7cf06b", "#2fd3c6"],
    status: "soon",
    formats: { vst3Win: true, vst3Mac: true, au: true, standalone: true },
    tag: {
      en: "Sampler", it: "Campionatore", es: "Sampler",
      de: "Sampler", fr: "Échantillonneur"
    },
    text: {
      en: "A 16-pad sampler on one page: drop or record a sound, stretch it to the song tempo without changing its pitch, auto-chop it across the pads (on the hits, in equal parts or by hand) and move it with a filter and two LFOs.",
      it: "Un campionatore a 16 pad in una sola pagina: trascina o registra un suono, adattalo al tempo del brano senza cambiarne l'intonazione, taglialo sui pad con l'auto-chop (sui colpi, in parti uguali o a mano) e muovilo con filtro e due LFO.",
      es: "Un sampler de 16 pads en una sola página: arrastra o graba un sonido, ajústalo al tempo de la canción sin cambiar su tono, córtalo en los pads con el auto-chop (en los golpes, en partes iguales o a mano) y muévelo con filtro y dos LFO.",
      de: "Ein Sampler mit 16 Pads auf einer Seite: Sound hineinziehen oder aufnehmen, ohne Tonhöhenänderung an das Songtempo anpassen, mit Auto-Chop auf die Pads schneiden (auf den Schlägen, in gleiche Teile oder von Hand) und mit Filter und zwei LFOs bewegen.",
      fr: "Un échantillonneur 16 pads sur une seule page : glissez ou enregistrez un son, calez-le sur le tempo sans changer sa hauteur, découpez-le sur les pads avec l'auto-chop (sur les attaques, en parts égales ou à la main) et animez-le avec un filtre et deux LFO."
    },
    features: {
      en: ["Record from input or resample", "Time stretch with tempo sync, auto-chop to pads", "ADSR, 4 filters, 2 LFOs on pitch, time or filter"],
      it: ["Registra dall'ingresso o in resample", "Time stretch a tempo, auto-chop sui pad", "ADSR, 4 filtri, 2 LFO su pitch, tempo o filtro"],
      es: ["Graba desde la entrada o en resample", "Time stretch al tempo, auto-chop en los pads", "ADSR, 4 filtros, 2 LFO en pitch, tiempo o filtro"],
      de: ["Aufnahme vom Eingang oder Resampling", "Time-Stretch im Tempo, Auto-Chop auf die Pads", "ADSR, 4 Filter, 2 LFOs auf Pitch, Time oder Filter"],
      fr: ["Enregistrement depuis l'entrée ou resample", "Time stretch au tempo, auto-chop sur les pads", "ADSR, 4 filtres, 2 LFO sur pitch, temps ou filtre"]
    }
  },
  {
    id: "officina",
    name: "Officina",
    image: "assets/img/officina.webp",
    icon: "assets/img/officina-icon.svg",
    accent: ["#ff4d5e", "#ffa04d"],
    status: "soon",
    formats: { vst3Win: true, vst3Mac: true, au: true, standalone: true },
    tag: {
      en: "Multi-FX", it: "Multi-effetto", es: "Multiefectos",
      de: "Multi-Effekt", fr: "Multi-effet"
    },
    text: {
      en: "A pedalboard inside your DAW: glitch, filter, delay, phaser, chorus, tape echo, spring reverb and lo-fi, each one a pedal with its footswitch. Drag the pedals to change the order of the chain.",
      it: "Una pedaliera dentro la tua DAW: glitch, filtro, delay, phaser, chorus, eco a nastro, riverbero a molla e lo-fi, ognuno un pedale con il suo interruttore. Trascina i pedali per cambiare l'ordine della catena.",
      es: "Una pedalera dentro de tu DAW: glitch, filtro, delay, phaser, chorus, eco de cinta, reverb de muelles y lo-fi, cada uno un pedal con su interruptor. Arrastra los pedales para cambiar el orden de la cadena.",
      de: "Ein Pedalboard in deiner DAW: Glitch, Filter, Delay, Phaser, Chorus, Bandecho, Federhall und Lo-Fi, jedes ein Pedal mit eigenem Fußschalter. Zieh die Pedale, um die Reihenfolge der Kette zu ändern.",
      fr: "Un pedalboard dans votre DAW : glitch, filtre, delay, phaser, chorus, écho à bande, réverbe à ressort et lo-fi, chacun une pédale avec son footswitch. Faites glisser les pédales pour changer l'ordre de la chaîne."
    },
    features: {
      en: ["8 classic effect pedals", "Drag to reorder the chain, click-free", "Tempo-synced glitch and echoes, safety limiter"],
      it: ["8 pedali con gli effetti classici", "Trascini e riordini la catena, senza click", "Glitch ed eco a tempo, limitatore di sicurezza"],
      es: ["8 pedales de efectos clásicos", "Arrastra y reordena la cadena, sin clics", "Glitch y ecos al tempo, limitador de seguridad"],
      de: ["8 klassische Effektpedale", "Kette per Ziehen umsortieren, klickfrei", "Glitch und Echos im Tempo, Sicherheitslimiter"],
      fr: ["8 pédales d'effets classiques", "Réordonnez la chaîne par glisser, sans clic", "Glitch et échos au tempo, limiteur de sécurité"]
    }
  }
];
