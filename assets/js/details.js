/* =====================================================================
   TONI AUDIO - PAGINE DEI SINGOLI PLUGIN (testi lunghi)
   Per ogni plugin (stesso id di plugins.js):
     short: frase breve per la pagina "Plugin"
     long:  paragrafi della descrizione ampia
     how:   passi di "Come funziona" [titolo, testo]
     specs: righe della tabella delle specifiche [voce, valore]
     hw:    requisiti hardware propri del plugin (Windows, macOS e DAW sono
            comuni a tutti e stanno in i18n.js)
   Testi: en, it, es, de, fr (se una lingua manca si usa l'inglese)
   ===================================================================== */
window.TONI_DETAILS = {
  /* ------------------------------------------------------------------ */
  equilibra: {
    short: {
      en: "Four-band dynamics that lifts the detail and tames the peaks, band by band.",
      it: "Dinamica a quattro bande che fa emergere i dettagli e doma i picchi, banda per banda.",
      es: "Dinámica de cuatro bandas que saca los detalles y doma los picos, banda por banda.",
      de: "Dynamik in vier Bändern, die Details hervorholt und Spitzen bändigt, Band für Band.",
      fr: "Dynamique quatre bandes qui révèle les détails et dompte les crêtes, bande par bande."
    },
    long: {
      en: [
        "Equilibra is a four-band dynamics processor for mixing and mastering. Each band works in two directions at once: downward compression tames what sticks out, upward compression brings back the detail that gets lost. The result is a denser, more even sound that keeps its life.",
        "A real-time display draws the gain curve over the spectrum, so you see what every band is doing while you listen. Three phase modes, Auto Gain for fair comparisons, Delta to hear only what is being changed, and a true-peak limiter at the end keep the output clean and safe."
      ],
      it: [
        "Equilibra è un processore di dinamica a quattro bande per mix e mastering. Ogni banda lavora in due direzioni insieme: la compressione verso il basso doma ciò che sporge, quella verso l'alto riporta a galla i dettagli che si perdono. Il risultato è un suono più compatto e uniforme, che resta vivo.",
        "Un display in tempo reale disegna la curva di guadagno sopra lo spettro, così vedi cosa fa ogni banda mentre ascolti. Tre modalità di fase, Auto Gain per confronti onesti, Delta per sentire solo ciò che cambia e un limiter true peak finale tengono l'uscita pulita e sicura."
      ],
      es: [
        "Equilibra es un procesador de dinámica de cuatro bandas para mezcla y mastering. Cada banda trabaja en dos direcciones a la vez: la compresión descendente doma lo que sobresale y la ascendente recupera los detalles que se pierden. El resultado es un sonido más denso y uniforme que conserva su vida.",
        "Una pantalla en tiempo real dibuja la curva de ganancia sobre el espectro, para que veas lo que hace cada banda mientras escuchas. Tres modos de fase, Auto Gain para comparar con justicia, Delta para oír solo lo que cambia y un limitador true peak al final mantienen la salida limpia y segura."
      ],
      de: [
        "Equilibra ist ein Vier-Band-Dynamikprozessor für Mix und Mastering. Jedes Band arbeitet in zwei Richtungen zugleich: Abwärtskompression bändigt, was heraussticht, Aufwärtskompression holt verlorene Details zurück. Das Ergebnis klingt dichter und ausgeglichener und bleibt lebendig.",
        "Eine Echtzeitanzeige zeichnet die Gainkurve über das Spektrum, so siehst du beim Hören, was jedes Band tut. Drei Phasenmodi, Auto Gain für faire Vergleiche, Delta zum Abhören nur der Änderungen und ein True-Peak-Limiter am Ende halten den Ausgang sauber und sicher."
      ],
      fr: [
        "Equilibra est un processeur de dynamique quatre bandes pour le mixage et le mastering. Chaque bande travaille dans les deux sens à la fois : la compression descendante dompte ce qui dépasse, la compression ascendante fait remonter les détails qui se perdent. Le son devient plus dense et plus homogène, tout en restant vivant.",
        "Un affichage en temps réel trace la courbe de gain sur le spectre : vous voyez ce que fait chaque bande pendant l'écoute. Trois modes de phase, le gain auto pour des comparaisons honnêtes, Delta pour n'entendre que ce qui change et un limiteur true peak en sortie gardent le signal propre et sûr."
      ]
    },
    how: {
      en: [
        ["Split", "The signal is divided into four bands. Drag the crossover lines on the display to choose where each band begins."],
        ["Balance", "In each band, Offset and Amount set how much loud parts are brought down and quiet parts brought up."],
        ["Listen", "Solo a band, use Delta to hear only the change and Auto Gain to compare at the same loudness."],
        ["Protect", "The true-peak limiter at the end keeps the output below the ceiling you choose."]
      ],
      it: [
        ["Dividi", "Il segnale viene diviso in quattro bande. Trascina sul display le linee di separazione per scegliere dove inizia ogni banda."],
        ["Bilancia", "In ogni banda, Offset e Amount decidono quanto abbassare le parti forti e quanto alzare quelle piano."],
        ["Ascolta", "Metti in solo una banda, usa Delta per sentire solo la modifica e Auto Gain per confrontare allo stesso volume."],
        ["Proteggi", "Il limiter true peak finale tiene l'uscita sotto il ceiling che scegli."]
      ],
      es: [
        ["Divide", "La señal se divide en cuatro bandas. Arrastra en la pantalla las líneas de cruce para elegir dónde empieza cada banda."],
        ["Equilibra", "En cada banda, Offset y Amount deciden cuánto bajar las partes fuertes y cuánto subir las suaves."],
        ["Escucha", "Pon una banda en solo, usa Delta para oír solo el cambio y Auto Gain para comparar al mismo volumen."],
        ["Protege", "El limitador true peak final mantiene la salida por debajo del techo que elijas."]
      ],
      de: [
        ["Aufteilen", "Das Signal wird in vier Bänder geteilt. Ziehe die Trennlinien in der Anzeige, um festzulegen, wo jedes Band beginnt."],
        ["Ausgleichen", "In jedem Band bestimmen Offset und Amount, wie stark Lautes abgesenkt und Leises angehoben wird."],
        ["Abhören", "Schalte ein Band solo, höre mit Delta nur die Änderung und vergleiche mit Auto Gain bei gleicher Lautheit."],
        ["Schützen", "Der True-Peak-Limiter am Ende hält den Ausgang unter dem gewählten Ceiling."]
      ],
      fr: [
        ["Séparer", "Le signal est divisé en quatre bandes. Faites glisser les lignes de séparation sur l'affichage pour choisir où commence chaque bande."],
        ["Équilibrer", "Dans chaque bande, Offset et Amount règlent combien les passages forts sont abaissés et les passages faibles remontés."],
        ["Écouter", "Mettez une bande en solo, utilisez Delta pour n'entendre que la modification et le gain auto pour comparer au même volume."],
        ["Protéger", "Le limiteur true peak final garde la sortie sous le plafond choisi."]
      ]
    },
    specs: {
      en: [["Type", "Multiband compressor, upward + downward"], ["Bands", "4, adjustable crossovers"], ["Phase", "Minimum, linear (~69 ms), linear fast (~26 ms)"], ["Latency", "About 1 ms in minimum phase, compensated by the DAW"], ["CPU", "About 2 % of one core (48 kHz)"], ["Window", "Resizable, 75–200 %"]],
      it: [["Tipo", "Compressore multibanda, verso l'alto + verso il basso"], ["Bande", "4, separazioni regolabili"], ["Fase", "Minima, lineare (~69 ms), lineare rapida (~26 ms)"], ["Latenza", "Circa 1 ms in fase minima, compensata dalla DAW"], ["CPU", "Circa 2 % di un core (48 kHz)"], ["Finestra", "Ridimensionabile, 75–200 %"]],
      es: [["Tipo", "Compresor multibanda, ascendente + descendente"], ["Bandas", "4, cruces ajustables"], ["Fase", "Mínima, lineal (~69 ms), lineal rápida (~26 ms)"], ["Latencia", "Unos 1 ms en fase mínima, compensada por la DAW"], ["CPU", "Alrededor del 2 % de un núcleo (48 kHz)"], ["Ventana", "Redimensionable, 75–200 %"]],
      de: [["Typ", "Multiband-Kompressor, aufwärts + abwärts"], ["Bänder", "4, einstellbare Trennfrequenzen"], ["Phase", "Minimal, linear (~69 ms), schnell linear (~26 ms)"], ["Latenz", "Etwa 1 ms in Minimalphase, von der DAW ausgeglichen"], ["CPU", "Etwa 2 % eines Kerns (48 kHz)"], ["Fenster", "Skalierbar, 75–200 %"]],
      fr: [["Type", "Compresseur multibande, ascendant + descendant"], ["Bandes", "4, séparations réglables"], ["Phase", "Minimale, linéaire (~69 ms), linéaire rapide (~26 ms)"], ["Latence", "Environ 1 ms en phase minimale, compensée par la DAW"], ["CPU", "Environ 2 % d'un cœur (48 kHz)"], ["Fenêtre", "Redimensionnable, 75–200 %"]]
    },
    hw: {
      en: ["64-bit dual-core processor or better", "4 GB RAM (8 GB recommended)", "About 150 MB of free disk space", "Screen 1280 × 800 or larger"],
      it: ["Processore dual-core a 64 bit o superiore", "4 GB di RAM (consigliati 8 GB)", "Circa 150 MB di spazio libero su disco", "Schermo da 1280 × 800 o più grande"],
      es: ["Procesador de doble núcleo de 64 bits o superior", "4 GB de RAM (8 GB recomendados)", "Unos 150 MB de espacio libre en disco", "Pantalla de 1280 × 800 o mayor"],
      de: ["64-Bit-Dual-Core-Prozessor oder besser", "4 GB RAM (8 GB empfohlen)", "Etwa 150 MB freier Speicherplatz", "Bildschirm 1280 × 800 oder größer"],
      fr: ["Processeur double cœur 64 bits ou plus", "4 Go de RAM (8 Go recommandés)", "Environ 150 Mo d'espace disque libre", "Écran 1280 × 800 ou plus grand"]
    }
  },

  /* ------------------------------------------------------------------ */
  lirica: {
    short: {
      en: "The complete vocal chain in a single window, from tone to reverb.",
      it: "L'intera catena per la voce in una sola finestra, dal tono al riverbero.",
      es: "Toda la cadena vocal en una sola ventana, del tono a la reverb.",
      de: "Die komplette Vocal-Kette in einem Fenster, vom Klang bis zum Hall.",
      fr: "Toute la chaîne vocale dans une seule fenêtre, du timbre à la réverbe."
    },
    long: {
      en: [
        "Lirica is a complete vocal chain in one plugin, made for singers, rappers and podcasters as much as for engineers. Instead of stacking six plugins you get tone, de-esser, compressor, warmth, reverb and delay in one window, already in the right order and tuned for the human voice.",
        "Every control has a clear name, and genre presets give you a finished starting point in seconds. A real-time spectrum shows what the tone section is doing, reverb and delay step back while you sing and come forward in the gaps, and an output limiter keeps the level under control. In the Standalone app, Live Mic mode lets you sing through the chain in real time."
      ],
      it: [
        "Lirica è l'intera catena per la voce in un solo plugin, pensata per cantanti, rapper e podcaster quanto per i fonici. Invece di mettere in fila sei plugin hai tono, de-esser, compressore, calore, riverbero e delay in una sola finestra, già nell'ordine giusto e tarati sulla voce umana.",
        "Ogni comando ha un nome chiaro e i preset per genere ti danno un punto di partenza finito in pochi secondi. Uno spettro in tempo reale mostra cosa fa la sezione del tono, riverbero e delay si fanno da parte mentre canti e tornano nelle pause, e un limiter in uscita tiene il livello sotto controllo. Nell'app Standalone la modalità Live Mic ti fa cantare attraverso la catena in tempo reale."
      ],
      es: [
        "Lirica es toda la cadena vocal en un solo plugin, pensada para cantantes, raperos y podcasters tanto como para ingenieros. En lugar de encadenar seis plugins tienes tono, de-esser, compresor, calidez, reverb y delay en una sola ventana, ya en el orden correcto y ajustados para la voz humana.",
        "Cada control tiene un nombre claro y los presets por género te dan un punto de partida terminado en segundos. Un espectro en tiempo real muestra lo que hace la sección de tono, la reverb y el delay se apartan mientras cantas y vuelven en las pausas, y un limitador de salida mantiene el nivel bajo control. En la app Standalone, el modo Live Mic te deja cantar a través de la cadena en tiempo real."
      ],
      de: [
        "Lirica ist die komplette Vocal-Kette in einem Plugin, gemacht für Sänger, Rapper und Podcaster ebenso wie für Toningenieure. Statt sechs Plugins hintereinander bekommst du Klang, De-Esser, Kompressor, Wärme, Hall und Delay in einem Fenster, schon in der richtigen Reihenfolge und auf die Stimme abgestimmt.",
        "Jeder Regler ist klar benannt, und Genre-Presets liefern in Sekunden einen fertigen Ausgangspunkt. Ein Echtzeit-Spektrum zeigt, was die Klangsektion tut, Hall und Delay treten beim Singen zurück und kommen in den Pausen wieder, und ein Ausgangslimiter hält den Pegel im Griff. In der Standalone-App kannst du im Live-Mic-Modus in Echtzeit durch die Kette singen."
      ],
      fr: [
        "Lirica est toute la chaîne vocale dans un seul plugin, conçue pour les chanteurs, rappeurs et podcasteurs autant que pour les ingénieurs du son. Au lieu d'empiler six plugins, vous avez timbre, de-esser, compresseur, chaleur, réverbe et délai dans une seule fenêtre, déjà dans le bon ordre et réglés pour la voix humaine.",
        "Chaque réglage porte un nom clair et les presets par genre donnent un point de départ abouti en quelques secondes. Un spectre en temps réel montre ce que fait la section timbre, la réverbe et le délai s'effacent quand vous chantez et reviennent dans les silences, et un limiteur de sortie garde le niveau sous contrôle. Dans l'app Standalone, le mode Live Mic permet de chanter à travers la chaîne en temps réel."
      ]
    },
    how: {
      en: [
        ["Shape", "The Tone section, an EQ designed for vocals, sets body, presence and air while the spectrum shows the result."],
        ["Control", "The de-esser softens harsh 's' sounds and the compressor keeps the level steady, so every word comes through."],
        ["Colour", "Warmth adds gentle tube-style saturation, oversampled to stay clean."],
        ["Place", "Five reverbs and a tempo-synced delay put the voice in a space; ducking keeps it in front."]
      ],
      it: [
        ["Modella", "La sezione Tono, un EQ pensato per la voce, regola corpo, presenza e aria mentre lo spettro mostra il risultato."],
        ["Controlla", "Il de-esser ammorbidisce le 's' aspre e il compressore tiene stabile il livello: ogni parola arriva."],
        ["Colora", "Calore aggiunge una saturazione morbida in stile valvolare, in oversampling per restare pulita."],
        ["Colloca", "Cinque riverberi e un delay a tempo mettono la voce in uno spazio; il ducking la tiene davanti."]
      ],
      es: [
        ["Moldea", "La sección Tono, un EQ pensado para la voz, ajusta cuerpo, presencia y aire mientras el espectro muestra el resultado."],
        ["Controla", "El de-esser suaviza las 's' ásperas y el compresor mantiene el nivel estable: cada palabra se entiende."],
        ["Colorea", "Calidez añade una saturación suave de estilo valvular, con sobremuestreo para seguir limpia."],
        ["Sitúa", "Cinco reverbs y un delay al tempo colocan la voz en un espacio; el ducking la mantiene delante."]
      ],
      de: [
        ["Formen", "Die Klangsektion, ein EQ für Stimmen, regelt Körper, Präsenz und Luft, während das Spektrum das Ergebnis zeigt."],
        ["Kontrollieren", "Der De-Esser mildert scharfe S-Laute, der Kompressor hält den Pegel stabil – jedes Wort kommt an."],
        ["Färben", "Wärme fügt sanfte Röhrensättigung hinzu, mit Oversampling für sauberen Klang."],
        ["Platzieren", "Fünf Hallräume und ein Tempo-Delay geben der Stimme einen Raum; Ducking hält sie vorn."]
      ],
      fr: [
        ["Sculpter", "La section Timbre, un égaliseur pensé pour la voix, règle corps, présence et air pendant que le spectre montre le résultat."],
        ["Contrôler", "Le de-esser adoucit les « s » agressifs et le compresseur stabilise le niveau : chaque mot passe."],
        ["Colorer", "Chaleur ajoute une saturation douce de style lampe, suréchantillonnée pour rester propre."],
        ["Placer", "Cinq réverbes et un délai au tempo placent la voix dans un espace ; le ducking la garde devant."]
      ]
    },
    specs: {
      en: [["Type", "Vocal channel strip"], ["Chain", "Tone → De-esser → Compressor → Warmth → Reverb + Delay"], ["Reverbs", "Plate, Room, Hall, Chamber, Cathedral"], ["Latency", "About 1.5 ms, compensated by the DAW"], ["CPU", "About 3.5 % of one core (48 kHz)"], ["Presets", "Genre presets, user presets, A/B"]],
      it: [["Tipo", "Channel strip per la voce"], ["Catena", "Tono → De-esser → Compressore → Calore → Riverbero + Delay"], ["Riverberi", "Plate, Room, Hall, Chamber, Cathedral"], ["Latenza", "Circa 1,5 ms, compensata dalla DAW"], ["CPU", "Circa 3,5 % di un core (48 kHz)"], ["Preset", "Preset per genere, preset utente, A/B"]],
      es: [["Tipo", "Channel strip vocal"], ["Cadena", "Tono → De-esser → Compresor → Calidez → Reverb + Delay"], ["Reverbs", "Plate, Room, Hall, Chamber, Cathedral"], ["Latencia", "Unos 1,5 ms, compensada por la DAW"], ["CPU", "Alrededor del 3,5 % de un núcleo (48 kHz)"], ["Presets", "Presets por género, presets de usuario, A/B"]],
      de: [["Typ", "Vocal-Channelstrip"], ["Kette", "Klang → De-Esser → Kompressor → Wärme → Hall + Delay"], ["Hallräume", "Plate, Room, Hall, Chamber, Cathedral"], ["Latenz", "Etwa 1,5 ms, von der DAW ausgeglichen"], ["CPU", "Etwa 3,5 % eines Kerns (48 kHz)"], ["Presets", "Genre-Presets, eigene Presets, A/B"]],
      fr: [["Type", "Tranche de console vocale"], ["Chaîne", "Timbre → De-esser → Compresseur → Chaleur → Réverbe + Délai"], ["Réverbes", "Plate, Room, Hall, Chamber, Cathedral"], ["Latence", "Environ 1,5 ms, compensée par la DAW"], ["CPU", "Environ 3,5 % d'un cœur (48 kHz)"], ["Presets", "Presets par genre, presets utilisateur, A/B"]]
    },
    hw: {
      en: ["64-bit dual-core processor or better", "4 GB RAM (8 GB recommended)", "About 150 MB of free disk space", "Screen 1280 × 800 or larger", "Microphone and audio interface for Live Mic (optional)"],
      it: ["Processore dual-core a 64 bit o superiore", "4 GB di RAM (consigliati 8 GB)", "Circa 150 MB di spazio libero su disco", "Schermo da 1280 × 800 o più grande", "Microfono e scheda audio per Live Mic (facoltativi)"],
      es: ["Procesador de doble núcleo de 64 bits o superior", "4 GB de RAM (8 GB recomendados)", "Unos 150 MB de espacio libre en disco", "Pantalla de 1280 × 800 o mayor", "Micrófono e interfaz de audio para Live Mic (opcional)"],
      de: ["64-Bit-Dual-Core-Prozessor oder besser", "4 GB RAM (8 GB empfohlen)", "Etwa 150 MB freier Speicherplatz", "Bildschirm 1280 × 800 oder größer", "Mikrofon und Audio-Interface für Live Mic (optional)"],
      fr: ["Processeur double cœur 64 bits ou plus", "4 Go de RAM (8 Go recommandés)", "Environ 150 Mo d'espace disque libre", "Écran 1280 × 800 ou plus grand", "Micro et interface audio pour Live Mic (facultatif)"]
    }
  },

  /* ------------------------------------------------------------------ */
  vetta: {
    short: {
      en: "Mastering clipper and limiter for a loud, clean master that never clips.",
      it: "Clipper e limiter da master per un volume alto e pulito, senza mai sforare.",
      es: "Clipper y limitador de mastering para un máster fuerte y limpio que nunca satura.",
      de: "Mastering-Clipper und -Limiter für ein lautes, sauberes Master ohne Übersteuerung.",
      fr: "Clipper et limiteur de mastering pour un master fort et propre qui ne sature jamais."
    },
    long: {
      en: [
        "Vetta is the last plugin on your master. It makes the track louder while guaranteeing that nothing ever goes above the ceiling you set, not even the peaks between samples that show up after conversion to MP3 or streaming.",
        "An oversampled clipper first shaves off the fastest peaks such as kick and snare, then a lookahead limiter handles the rest with a release that adapts to the music. A scrolling display shows where gain is being reduced, and the EBU R128 loudness meter compares your track with the targets of Spotify, Apple Music, YouTube and other platforms."
      ],
      it: [
        "Vetta è l'ultimo plugin del tuo master. Rende il brano più forte garantendo che nulla superi mai il ceiling che imposti, nemmeno i picchi tra un campione e l'altro che compaiono dopo la conversione in MP3 o lo streaming.",
        "Prima un clipper in oversampling taglia i picchi più veloci come cassa e rullante, poi un limiter con lookahead gestisce il resto con un rilascio che si adatta alla musica. Un display a scorrimento mostra dove il guadagno viene ridotto e il meter di loudness EBU R128 confronta il brano con i riferimenti di Spotify, Apple Music, YouTube e delle altre piattaforme."
      ],
      es: [
        "Vetta es el último plugin de tu máster. Hace la canción más fuerte garantizando que nada supere nunca el techo que fijes, ni siquiera los picos entre muestras que aparecen tras la conversión a MP3 o el streaming.",
        "Primero un clipper con sobremuestreo recorta los picos más rápidos como bombo y caja, luego un limitador con lookahead se encarga del resto con un release que se adapta a la música. Una pantalla con desplazamiento muestra dónde se reduce la ganancia y el medidor de loudness EBU R128 compara tu canción con los objetivos de Spotify, Apple Music, YouTube y otras plataformas."
      ],
      de: [
        "Vetta ist das letzte Plugin auf deinem Master. Es macht den Song lauter und garantiert, dass nichts je das eingestellte Ceiling überschreitet – auch nicht die Spitzen zwischen den Samples, die nach der Wandlung in MP3 oder beim Streaming entstehen.",
        "Zuerst schneidet ein Clipper mit Oversampling die schnellsten Spitzen wie Kick und Snare ab, dann übernimmt ein Lookahead-Limiter den Rest mit einem Release, das sich der Musik anpasst. Eine laufende Anzeige zeigt, wo der Pegel reduziert wird, und die EBU-R128-Lautheitsmessung vergleicht deinen Song mit den Zielwerten von Spotify, Apple Music, YouTube und anderen Plattformen."
      ],
      fr: [
        "Vetta est le dernier plugin de votre master. Il rend le morceau plus fort tout en garantissant que rien ne dépasse jamais le plafond choisi, pas même les crêtes entre échantillons qui apparaissent après la conversion en MP3 ou le streaming.",
        "Un clipper suréchantillonné rabote d'abord les crêtes les plus rapides comme la grosse caisse et la caisse claire, puis un limiteur avec lookahead gère le reste avec une relâche qui s'adapte à la musique. Un affichage défilant montre où le gain est réduit et la mesure de loudness EBU R128 compare votre morceau aux cibles de Spotify, Apple Music, YouTube et d'autres plateformes."
      ]
    },
    how: {
      en: [
        ["Push", "Gain drives the signal into the clipper and limiter: more gain means more loudness."],
        ["Clip", "The clipper cuts the fastest transients cleanly, with 4x oversampling, so the limiter has less to do."],
        ["Limit", "Four characters (Clean, Punch, Smooth, Loud) and an automatic release keep the sound natural even at high levels."],
        ["Measure", "Integrated, short-term and momentary LUFS, true peak and platform targets tell you when the master is ready."]
      ],
      it: [
        ["Spingi", "Il Gain manda il segnale dentro clipper e limiter: più Gain significa più volume."],
        ["Taglia", "Il clipper taglia in modo pulito i transienti più veloci, in oversampling 4x, così il limiter lavora meno."],
        ["Limita", "Quattro caratteri (Pulito, Punch, Morbido, Spinto) e un rilascio automatico tengono il suono naturale anche a volumi alti."],
        ["Misura", "LUFS integrati, a breve termine e momentanei, true peak e riferimenti delle piattaforme ti dicono quando il master è pronto."]
      ],
      es: [
        ["Empuja", "El Gain lleva la señal al clipper y al limitador: más Gain significa más volumen."],
        ["Recorta", "El clipper corta limpiamente los transitorios más rápidos, con sobremuestreo 4x, para que el limitador trabaje menos."],
        ["Limita", "Cuatro caracteres (Limpio, Punch, Suave, Fuerte) y un release automático mantienen el sonido natural incluso a niveles altos."],
        ["Mide", "LUFS integrados, de corto plazo y momentáneos, true peak y objetivos de las plataformas te dicen cuándo el máster está listo."]
      ],
      de: [
        ["Antreiben", "Gain treibt das Signal in Clipper und Limiter: mehr Gain bedeutet mehr Lautheit."],
        ["Clippen", "Der Clipper schneidet die schnellsten Transienten sauber ab, mit 4-fachem Oversampling, damit der Limiter weniger zu tun hat."],
        ["Limitieren", "Vier Charaktere (Sauber, Punch, Weich, Laut) und ein automatisches Release halten den Klang auch bei hohem Pegel natürlich."],
        ["Messen", "Integrierte, Kurzzeit- und Momentan-LUFS, True Peak und Plattform-Zielwerte zeigen, wann das Master fertig ist."]
      ],
      fr: [
        ["Pousser", "Le Gain envoie le signal dans le clipper et le limiteur : plus de gain, plus de volume."],
        ["Écrêter", "Le clipper coupe proprement les transitoires les plus rapides, en suréchantillonnage 4x, pour soulager le limiteur."],
        ["Limiter", "Quatre caractères (Propre, Punch, Doux, Fort) et une relâche automatique gardent un son naturel même à fort niveau."],
        ["Mesurer", "LUFS intégré, court terme et momentané, true peak et cibles des plateformes indiquent quand le master est prêt."]
      ]
    },
    specs: {
      en: [["Type", "Clipper + true-peak limiter + loudness meter"], ["Oversampling", "Clipper 4x, true peak 8x"], ["Latency", "About 7.5 ms at 44.1 kHz, fixed and compensated by the DAW"], ["Meter", "EBU R128 LUFS, true peak, platform targets"], ["Dither", "Off / 24 / 16 bit"], ["CPU", "About 3.4 % of one core (48 kHz)"]],
      it: [["Tipo", "Clipper + limiter true peak + meter di loudness"], ["Oversampling", "Clipper 4x, true peak 8x"], ["Latenza", "Circa 7,5 ms a 44,1 kHz, fissa e compensata dalla DAW"], ["Meter", "LUFS EBU R128, true peak, riferimenti delle piattaforme"], ["Dither", "No / 24 / 16 bit"], ["CPU", "Circa 3,4 % di un core (48 kHz)"]],
      es: [["Tipo", "Clipper + limitador true peak + medidor de loudness"], ["Sobremuestreo", "Clipper 4x, true peak 8x"], ["Latencia", "Unos 7,5 ms a 44,1 kHz, fija y compensada por la DAW"], ["Medidor", "LUFS EBU R128, true peak, objetivos de las plataformas"], ["Dither", "No / 24 / 16 bits"], ["CPU", "Alrededor del 3,4 % de un núcleo (48 kHz)"]],
      de: [["Typ", "Clipper + True-Peak-Limiter + Lautheitsmessung"], ["Oversampling", "Clipper 4x, True Peak 8x"], ["Latenz", "Etwa 7,5 ms bei 44,1 kHz, fest und von der DAW ausgeglichen"], ["Messung", "EBU-R128-LUFS, True Peak, Plattform-Zielwerte"], ["Dither", "Aus / 24 / 16 Bit"], ["CPU", "Etwa 3,4 % eines Kerns (48 kHz)"]],
      fr: [["Type", "Clipper + limiteur true peak + mesure de loudness"], ["Suréchantillonnage", "Clipper 4x, true peak 8x"], ["Latence", "Environ 7,5 ms à 44,1 kHz, fixe et compensée par la DAW"], ["Mesure", "LUFS EBU R128, true peak, cibles des plateformes"], ["Dither", "Non / 24 / 16 bits"], ["CPU", "Environ 3,4 % d'un cœur (48 kHz)"]]
    },
    hw: {
      en: ["64-bit dual-core processor or better", "4 GB RAM (8 GB recommended)", "About 150 MB of free disk space", "Screen 1280 × 800 or larger"],
      it: ["Processore dual-core a 64 bit o superiore", "4 GB di RAM (consigliati 8 GB)", "Circa 150 MB di spazio libero su disco", "Schermo da 1280 × 800 o più grande"],
      es: ["Procesador de doble núcleo de 64 bits o superior", "4 GB de RAM (8 GB recomendados)", "Unos 150 MB de espacio libre en disco", "Pantalla de 1280 × 800 o mayor"],
      de: ["64-Bit-Dual-Core-Prozessor oder besser", "4 GB RAM (8 GB empfohlen)", "Etwa 150 MB freier Speicherplatz", "Bildschirm 1280 × 800 oder größer"],
      fr: ["Processeur double cœur 64 bits ou plus", "4 Go de RAM (8 Go recommandés)", "Environ 150 Mo d'espace disque libre", "Écran 1280 × 800 ou plus grand"]
    }
  },

  /* ------------------------------------------------------------------ */
  materia: {
    short: {
      en: "A 16-track step drum machine for your own samples and loops.",
      it: "Drum machine a passi con 16 tracce per i tuoi sample e loop.",
      es: "Caja de ritmos por pasos de 16 pistas para tus samples y loops.",
      de: "Step-Drumcomputer mit 16 Spuren für deine eigenen Samples und Loops.",
      fr: "Boîte à rythmes pas à pas 16 pistes pour vos propres samples et boucles."
    },
    long: {
      en: [
        "Materia is a step drum machine built around your own sounds. There are no factory kits: you drag your samples, one-shots and loops onto 16 tracks and build the beat on a clear grid, just like the classic drum machines.",
        "Every step has its own velocity, probability and roll, so patterns stay alive. On each track you pick the exact part of the sound directly on the waveform and shape it with attack, release, pitch, filter and drive. Patterns lock to the tempo of your DAW and can be dragged into the arrangement as MIDI clips. Loaded sounds are saved inside the project, so it stays complete even if you move the files."
      ],
      it: [
        "Materia è una drum machine a passi costruita attorno ai tuoi suoni. Non ci sono kit di fabbrica: trascini i tuoi sample, colpi singoli e loop su 16 tracce e costruisci il beat su una griglia chiara, proprio come nelle drum machine classiche.",
        "Ogni passo ha la sua velocity, probabilità e roll, così i pattern restano vivi. Su ogni traccia scegli la parte esatta del suono direttamente sulla forma d'onda e la modelli con attack, release, pitch, filtro e drive. I pattern seguono il tempo della DAW e si trascinano nell'arrangiamento come clip MIDI. I suoni caricati vengono salvati nel progetto, che resta completo anche se sposti i file."
      ],
      es: [
        "Materia es una caja de ritmos por pasos construida alrededor de tus propios sonidos. No hay kits de fábrica: arrastras tus samples, golpes sueltos y loops a 16 pistas y construyes el beat en una cuadrícula clara, como en las cajas de ritmos clásicas.",
        "Cada paso tiene su velocity, probabilidad y roll, así los patrones siguen vivos. En cada pista eliges la parte exacta del sonido directamente sobre la forma de onda y la moldeas con attack, release, pitch, filtro y drive. Los patrones siguen el tempo de tu DAW y se arrastran al arreglo como clips MIDI. Los sonidos cargados se guardan en el proyecto, que sigue completo aunque muevas los archivos."
      ],
      de: [
        "Materia ist ein Step-Drumcomputer, der auf deinen eigenen Sounds aufbaut. Es gibt keine Werkskits: Du ziehst deine Samples, One-Shots und Loops auf 16 Spuren und baust den Beat auf einem übersichtlichen Raster, wie bei den klassischen Drumcomputern.",
        "Jeder Step hat eigene Velocity, Wahrscheinlichkeit und Roll, so bleiben Patterns lebendig. Auf jeder Spur wählst du den genauen Teil des Sounds direkt auf der Wellenform und formst ihn mit Attack, Release, Pitch, Filter und Drive. Patterns folgen dem Tempo deiner DAW und lassen sich als MIDI-Clips ins Arrangement ziehen. Geladene Sounds werden im Projekt gespeichert, das auch dann vollständig bleibt, wenn du die Dateien verschiebst."
      ],
      fr: [
        "Materia est une boîte à rythmes pas à pas construite autour de vos propres sons. Pas de kits d'usine : vous glissez vos samples, one-shots et boucles sur 16 pistes et construisez le beat sur une grille claire, comme sur les boîtes à rythmes classiques.",
        "Chaque pas a sa vélocité, sa probabilité et son roll, pour des patterns vivants. Sur chaque piste, vous choisissez la partie exacte du son directement sur la forme d'onde et la sculptez avec attack, release, pitch, filtre et drive. Les patterns suivent le tempo de votre DAW et se glissent dans l'arrangement comme clips MIDI. Les sons chargés sont enregistrés dans le projet, qui reste complet même si vous déplacez les fichiers."
      ]
    },
    how: {
      en: [
        ["Load", "Drag audio files or whole folders from Finder or Explorer onto the tracks: WAV, AIFF, FLAC, MP3 and more."],
        ["Program", "Click the steps on the grid to write up to 8 patterns of 16, 32 or 64 steps, with swing from straight to dotted."],
        ["Shape", "Choose Start and End on the waveform, then set attack, release, pitch, filter, drive, reverse and choke groups."],
        ["Play", "Patterns play in time with your DAW; drag them out as MIDI or trigger the tracks from a controller."]
      ],
      it: [
        ["Carica", "Trascina file audio o intere cartelle dal Finder o da Esplora risorse sulle tracce: WAV, AIFF, FLAC, MP3 e altri."],
        ["Programma", "Clicca i passi sulla griglia per scrivere fino a 8 pattern da 16, 32 o 64 passi, con swing da dritto a puntato."],
        ["Modella", "Scegli Start e End sulla forma d'onda, poi regola attack, release, pitch, filtro, drive, reverse e gruppi choke."],
        ["Suona", "I pattern suonano a tempo con la DAW; trascinali fuori come MIDI o suona le tracce da un controller."]
      ],
      es: [
        ["Carga", "Arrastra archivos de audio o carpetas enteras desde Finder o el Explorador a las pistas: WAV, AIFF, FLAC, MP3 y más."],
        ["Programa", "Haz clic en los pasos de la cuadrícula para escribir hasta 8 patrones de 16, 32 o 64 pasos, con swing de recto a puntillo."],
        ["Moldea", "Elige Start y End sobre la forma de onda y ajusta attack, release, pitch, filtro, drive, reverse y grupos choke."],
        ["Toca", "Los patrones suenan a tempo con tu DAW; arrástralos como MIDI o dispara las pistas desde un controlador."]
      ],
      de: [
        ["Laden", "Ziehe Audiodateien oder ganze Ordner aus Finder oder Explorer auf die Spuren: WAV, AIFF, FLAC, MP3 und mehr."],
        ["Programmieren", "Klicke die Steps im Raster, um bis zu 8 Patterns mit 16, 32 oder 64 Steps zu schreiben, mit Swing von gerade bis punktiert."],
        ["Formen", "Wähle Start und End auf der Wellenform, dann Attack, Release, Pitch, Filter, Drive, Reverse und Choke-Gruppen."],
        ["Spielen", "Patterns laufen im Tempo deiner DAW; ziehe sie als MIDI heraus oder spiele die Spuren über einen Controller."]
      ],
      fr: [
        ["Charger", "Glissez des fichiers audio ou des dossiers entiers depuis le Finder ou l'Explorateur sur les pistes : WAV, AIFF, FLAC, MP3 et plus."],
        ["Programmer", "Cliquez sur les pas de la grille pour écrire jusqu'à 8 patterns de 16, 32 ou 64 pas, avec un swing de droit à pointé."],
        ["Sculpter", "Choisissez Start et End sur la forme d'onde, puis réglez attack, release, pitch, filtre, drive, reverse et groupes choke."],
        ["Jouer", "Les patterns jouent au tempo de votre DAW ; exportez-les en MIDI par glisser-déposer ou jouez les pistes depuis un contrôleur."]
      ]
    },
    specs: {
      en: [["Type", "16-track step drum machine (instrument)"], ["Patterns", "8, of 16, 32 or 64 steps"], ["Per step", "Velocity, probability, roll"], ["Output", "One stereo output"], ["MIDI", "Notes C1–D#2 play tracks 1–16; pattern → MIDI clip"], ["Samples", "Up to 30 s per track, saved in the project"], ["CPU", "About 0.5 % of one core (full pattern, 48 kHz)"]],
      it: [["Tipo", "Drum machine a passi con 16 tracce (strumento)"], ["Pattern", "8, da 16, 32 o 64 passi"], ["Per passo", "Velocity, probabilità, roll"], ["Uscita", "Una uscita stereo"], ["MIDI", "Note C1–D#2 suonano le tracce 1–16; pattern → clip MIDI"], ["Sample", "Fino a 30 s per traccia, salvati nel progetto"], ["CPU", "Circa 0,5 % di un core (pattern pieno, 48 kHz)"]],
      es: [["Tipo", "Caja de ritmos por pasos de 16 pistas (instrumento)"], ["Patrones", "8, de 16, 32 o 64 pasos"], ["Por paso", "Velocity, probabilidad, roll"], ["Salida", "Una salida estéreo"], ["MIDI", "Notas C1–D#2 tocan las pistas 1–16; patrón → clip MIDI"], ["Samples", "Hasta 30 s por pista, guardados en el proyecto"], ["CPU", "Alrededor del 0,5 % de un núcleo (patrón completo, 48 kHz)"]],
      de: [["Typ", "Step-Drumcomputer mit 16 Spuren (Instrument)"], ["Patterns", "8, mit 16, 32 oder 64 Steps"], ["Pro Step", "Velocity, Wahrscheinlichkeit, Roll"], ["Ausgang", "Ein Stereo-Ausgang"], ["MIDI", "Noten C1–D#2 spielen Spuren 1–16; Pattern → MIDI-Clip"], ["Samples", "Bis zu 30 s pro Spur, im Projekt gespeichert"], ["CPU", "Etwa 0,5 % eines Kerns (volles Pattern, 48 kHz)"]],
      fr: [["Type", "Boîte à rythmes pas à pas 16 pistes (instrument)"], ["Patterns", "8, de 16, 32 ou 64 pas"], ["Par pas", "Vélocité, probabilité, roll"], ["Sortie", "Une sortie stéréo"], ["MIDI", "Notes C1–D#2 jouent les pistes 1–16 ; pattern → clip MIDI"], ["Samples", "Jusqu'à 30 s par piste, enregistrés dans le projet"], ["CPU", "Environ 0,5 % d'un cœur (pattern complet, 48 kHz)"]]
    },
    hw: {
      en: ["64-bit dual-core processor or better", "4 GB RAM (8 GB recommended; memory grows with the loaded samples)", "About 150 MB of free disk space, plus your samples", "Screen 1280 × 800 or larger", "MIDI keyboard or pad controller (optional)"],
      it: ["Processore dual-core a 64 bit o superiore", "4 GB di RAM (consigliati 8 GB; la memoria cresce con i sample caricati)", "Circa 150 MB di spazio libero su disco, più i tuoi sample", "Schermo da 1280 × 800 o più grande", "Tastiera MIDI o controller a pad (facoltativi)"],
      es: ["Procesador de doble núcleo de 64 bits o superior", "4 GB de RAM (8 GB recomendados; la memoria crece con los samples cargados)", "Unos 150 MB de espacio libre en disco, más tus samples", "Pantalla de 1280 × 800 o mayor", "Teclado MIDI o controlador de pads (opcional)"],
      de: ["64-Bit-Dual-Core-Prozessor oder besser", "4 GB RAM (8 GB empfohlen; der Speicher wächst mit den geladenen Samples)", "Etwa 150 MB freier Speicherplatz plus deine Samples", "Bildschirm 1280 × 800 oder größer", "MIDI-Keyboard oder Pad-Controller (optional)"],
      fr: ["Processeur double cœur 64 bits ou plus", "4 Go de RAM (8 Go recommandés ; la mémoire augmente avec les samples chargés)", "Environ 150 Mo d'espace disque libre, plus vos samples", "Écran 1280 × 800 ou plus grand", "Clavier MIDI ou contrôleur à pads (facultatif)"]
    }
  },

  /* ------------------------------------------------------------------ */
  plasma: {
    short: {
      en: "A 16-pad sampler with recording, time stretch and auto-chop on one page.",
      it: "Campionatore a 16 pad con registrazione, time stretch e auto-chop in una pagina.",
      es: "Sampler de 16 pads con grabación, time stretch y auto-chop en una página.",
      de: "Sampler mit 16 Pads, Aufnahme, Time-Stretch und Auto-Chop auf einer Seite.",
      fr: "Échantillonneur 16 pads avec enregistrement, time stretch et auto-chop sur une page."
    },
    long: {
      en: [
        "Plasma is a 16-pad sampler that fits on a single page. Drop in a loop, or record one straight into the plugin from your audio input or by resampling its own output, and start playing it right away.",
        "Granular time stretch matches any loop to the song tempo without changing its pitch, and Auto-Chop slices it across the pads on the hits, in equal parts or by hand. Each pad has its own envelope, filter and play mode, and two LFOs can move pitch, time or filter for sounds that evolve. Everything you load or record is saved inside the project."
      ],
      it: [
        "Plasma è un campionatore a 16 pad che sta tutto in una pagina. Trascina un loop, oppure registralo direttamente nel plugin dall'ingresso audio o ricampionando la sua stessa uscita, e inizia subito a suonarlo.",
        "Il time stretch granulare adatta qualsiasi loop al tempo del brano senza cambiarne l'intonazione, e l'Auto-Chop lo taglia sui pad: sui colpi, in parti uguali o a mano. Ogni pad ha il suo inviluppo, filtro e modo di riproduzione, e due LFO possono muovere pitch, tempo o filtro per suoni che si evolvono. Tutto ciò che carichi o registri viene salvato nel progetto."
      ],
      es: [
        "Plasma es un sampler de 16 pads que cabe en una sola página. Arrastra un loop, o grábalo directamente en el plugin desde tu entrada de audio o remuestreando su propia salida, y empieza a tocarlo enseguida.",
        "El time stretch granular ajusta cualquier loop al tempo de la canción sin cambiar su tono, y el Auto-Chop lo corta en los pads: en los golpes, en partes iguales o a mano. Cada pad tiene su envolvente, filtro y modo de reproducción, y dos LFO pueden mover pitch, tiempo o filtro para sonidos que evolucionan. Todo lo que cargas o grabas se guarda en el proyecto."
      ],
      de: [
        "Plasma ist ein Sampler mit 16 Pads, der auf eine einzige Seite passt. Zieh einen Loop hinein oder nimm ihn direkt im Plugin auf, vom Audioeingang oder per Resampling des eigenen Ausgangs, und spiel ihn sofort.",
        "Granulares Time-Stretching passt jeden Loop ohne Tonhöhenänderung an das Songtempo an, und Auto-Chop verteilt ihn auf die Pads: auf den Schlägen, in gleiche Teile oder von Hand. Jedes Pad hat eigene Hüllkurve, Filter und Wiedergabemodus, und zwei LFOs bewegen Pitch, Time oder Filter für Sounds, die sich entwickeln. Alles, was du lädst oder aufnimmst, wird im Projekt gespeichert."
      ],
      fr: [
        "Plasma est un échantillonneur 16 pads qui tient sur une seule page. Glissez une boucle, ou enregistrez-la directement dans le plugin depuis votre entrée audio ou en rééchantillonnant sa propre sortie, et jouez-la tout de suite.",
        "Le time stretch granulaire cale n'importe quelle boucle sur le tempo du morceau sans changer sa hauteur, et l'Auto-Chop la découpe sur les pads : sur les attaques, en parts égales ou à la main. Chaque pad a son enveloppe, son filtre et son mode de lecture, et deux LFO peuvent animer pitch, temps ou filtre pour des sons qui évoluent. Tout ce que vous chargez ou enregistrez est sauvegardé dans le projet."
      ]
    },
    how: {
      en: [
        ["Capture", "Drag files onto the Sources, or press REC to record from the input or resample Plasma itself (up to 60 seconds)."],
        ["Chop", "Auto-Chop splits the sound into up to 16 slices: on the transients, in equal parts or by marking them while it plays."],
        ["Stretch", "Repitch gives the classic sampler sound, Stretch changes speed without changing pitch; Sync locks loops to the DAW tempo."],
        ["Play", "Play the pads from a controller, or use Keys mode to play one pad across the keyboard, with ADSR, filter and two LFOs."]
      ],
      it: [
        ["Cattura", "Trascina i file sulle Sources o premi REC per registrare dall'ingresso o ricampionare Plasma stesso (fino a 60 secondi)."],
        ["Taglia", "L'Auto-Chop divide il suono in un massimo di 16 parti: sui transienti, in parti uguali o segnandole mentre suona."],
        ["Adatta", "Repitch dà il suono classico da campionatore, Stretch cambia la velocità senza cambiare l'intonazione; Sync aggancia i loop al tempo della DAW."],
        ["Suona", "Suona i pad da un controller, o usa il modo Keys per suonare un pad su tutta la tastiera, con ADSR, filtro e due LFO."]
      ],
      es: [
        ["Captura", "Arrastra archivos a las Sources o pulsa REC para grabar desde la entrada o remuestrear el propio Plasma (hasta 60 segundos)."],
        ["Corta", "El Auto-Chop divide el sonido en hasta 16 partes: en los transitorios, en partes iguales o marcándolas mientras suena."],
        ["Ajusta", "Repitch da el sonido clásico de sampler, Stretch cambia la velocidad sin cambiar el tono; Sync engancha los loops al tempo de la DAW."],
        ["Toca", "Toca los pads desde un controlador o usa el modo Keys para tocar un pad en todo el teclado, con ADSR, filtro y dos LFO."]
      ],
      de: [
        ["Aufnehmen", "Zieh Dateien auf die Sources oder drück REC, um vom Eingang aufzunehmen oder Plasma selbst zu resamplen (bis zu 60 Sekunden)."],
        ["Schneiden", "Auto-Chop teilt den Sound in bis zu 16 Teile: auf den Transienten, in gleiche Teile oder per Markierung beim Abspielen."],
        ["Anpassen", "Repitch liefert den klassischen Sampler-Klang, Stretch ändert das Tempo ohne Tonhöhe; Sync koppelt Loops an das DAW-Tempo."],
        ["Spielen", "Spiel die Pads über einen Controller oder spiel im Keys-Modus ein Pad über die ganze Tastatur, mit ADSR, Filter und zwei LFOs."]
      ],
      fr: [
        ["Capturer", "Glissez des fichiers sur les Sources ou appuyez sur REC pour enregistrer depuis l'entrée ou rééchantillonner Plasma lui-même (jusqu'à 60 secondes)."],
        ["Découper", "L'Auto-Chop divise le son en 16 tranches au maximum : sur les transitoires, en parts égales ou en les marquant pendant la lecture."],
        ["Caler", "Repitch donne le son classique d'échantillonneur, Stretch change la vitesse sans changer la hauteur ; Sync cale les boucles sur le tempo de la DAW."],
        ["Jouer", "Jouez les pads depuis un contrôleur, ou utilisez le mode Keys pour jouer un pad sur tout le clavier, avec ADSR, filtre et deux LFO."]
      ]
    },
    specs: {
      en: [["Type", "16-pad sampler (instrument)"], ["Voices", "32, choke groups, mono per pad"], ["Pitch / Time", "Repitch or granular Stretch, tempo sync"], ["Filters", "LP 24, LP 12, HP, BP"], ["Modulation", "ADSR, 2 LFOs on pitch, time or filter"], ["Recording", "Audio input (sidechain in a DAW) or resample, up to 60 s"], ["CPU", "About 5 % of one core (16 voices, 48 kHz)"]],
      it: [["Tipo", "Campionatore a 16 pad (strumento)"], ["Voci", "32, gruppi choke, mono per pad"], ["Pitch / Tempo", "Repitch o Stretch granulare, sync al tempo"], ["Filtri", "LP 24, LP 12, HP, BP"], ["Modulazione", "ADSR, 2 LFO su pitch, tempo o filtro"], ["Registrazione", "Ingresso audio (sidechain nella DAW) o resample, fino a 60 s"], ["CPU", "Circa 5 % di un core (16 voci, 48 kHz)"]],
      es: [["Tipo", "Sampler de 16 pads (instrumento)"], ["Voces", "32, grupos choke, mono por pad"], ["Pitch / Tiempo", "Repitch o Stretch granular, sync al tempo"], ["Filtros", "LP 24, LP 12, HP, BP"], ["Modulación", "ADSR, 2 LFO en pitch, tiempo o filtro"], ["Grabación", "Entrada de audio (sidechain en la DAW) o resample, hasta 60 s"], ["CPU", "Alrededor del 5 % de un núcleo (16 voces, 48 kHz)"]],
      de: [["Typ", "Sampler mit 16 Pads (Instrument)"], ["Stimmen", "32, Choke-Gruppen, Mono pro Pad"], ["Pitch / Time", "Repitch oder granulares Stretch, Tempo-Sync"], ["Filter", "LP 24, LP 12, HP, BP"], ["Modulation", "ADSR, 2 LFOs auf Pitch, Time oder Filter"], ["Aufnahme", "Audioeingang (Sidechain in der DAW) oder Resampling, bis 60 s"], ["CPU", "Etwa 5 % eines Kerns (16 Stimmen, 48 kHz)"]],
      fr: [["Type", "Échantillonneur 16 pads (instrument)"], ["Voix", "32, groupes choke, mono par pad"], ["Pitch / Temps", "Repitch ou Stretch granulaire, synchro au tempo"], ["Filtres", "LP 24, LP 12, HP, BP"], ["Modulation", "ADSR, 2 LFO sur pitch, temps ou filtre"], ["Enregistrement", "Entrée audio (sidechain dans la DAW) ou resample, jusqu'à 60 s"], ["CPU", "Environ 5 % d'un cœur (16 voix, 48 kHz)"]]
    },
    hw: {
      en: ["64-bit dual-core processor or better (quad-core recommended for many stretched voices)", "4 GB RAM (8 GB recommended; memory grows with the loaded samples)", "About 150 MB of free disk space, plus your samples", "Screen 1280 × 800 or larger", "MIDI controller and audio interface for recording (optional)"],
      it: ["Processore dual-core a 64 bit o superiore (consigliato quad-core per molte voci in Stretch)", "4 GB di RAM (consigliati 8 GB; la memoria cresce con i sample caricati)", "Circa 150 MB di spazio libero su disco, più i tuoi sample", "Schermo da 1280 × 800 o più grande", "Controller MIDI e scheda audio per registrare (facoltativi)"],
      es: ["Procesador de doble núcleo de 64 bits o superior (cuatro núcleos recomendado para muchas voces en Stretch)", "4 GB de RAM (8 GB recomendados; la memoria crece con los samples cargados)", "Unos 150 MB de espacio libre en disco, más tus samples", "Pantalla de 1280 × 800 o mayor", "Controlador MIDI e interfaz de audio para grabar (opcional)"],
      de: ["64-Bit-Dual-Core-Prozessor oder besser (Quad-Core empfohlen für viele Stretch-Stimmen)", "4 GB RAM (8 GB empfohlen; der Speicher wächst mit den geladenen Samples)", "Etwa 150 MB freier Speicherplatz plus deine Samples", "Bildschirm 1280 × 800 oder größer", "MIDI-Controller und Audio-Interface für Aufnahmen (optional)"],
      fr: ["Processeur double cœur 64 bits ou plus (quatre cœurs recommandés pour beaucoup de voix en Stretch)", "4 Go de RAM (8 Go recommandés ; la mémoire augmente avec les samples chargés)", "Environ 150 Mo d'espace disque libre, plus vos samples", "Écran 1280 × 800 ou plus grand", "Contrôleur MIDI et interface audio pour enregistrer (facultatif)"]
    }
  },

  /* ------------------------------------------------------------------ */
  officina: {
    short: {
      en: "A multi-effect pedalboard: 8 classic effects in a chain you reorder by dragging.",
      it: "Pedaliera multi-effetto: 8 effetti classici in una catena che riordini trascinando.",
      es: "Pedalera multiefectos: 8 efectos clásicos en una cadena que reordenas arrastrando.",
      de: "Multi-Effekt-Pedalboard: 8 klassische Effekte in einer Kette, die du per Ziehen umsortierst.",
      fr: "Pedalboard multi-effet : 8 effets classiques dans une chaîne que vous réordonnez par glisser."
    },
    long: {
      en: [
        "Officina puts a pedalboard inside your DAW. Eight effects sit side by side, each one a pedal with the classic name of its effect: Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb and Lo-Fi. Stomp the footswitch to turn a pedal on, turn its three knobs like on a real stompbox, or click it to open all its controls.",
        "The order of the chain is up to you: drag a pedal left or right and the sound follows, with a short crossfade and no clicks, even while the music plays. Glitch, Delay and Tape Echo lock to the song tempo, pedals that are off use no CPU, and a safety limiter keeps even runaway feedback below −0.3 dBFS. Use it on guitars, synths, vocals, drums or a whole mix."
      ],
      it: [
        "Officina porta una pedaliera dentro la tua DAW. Otto effetti uno accanto all'altro, ognuno un pedale con il nome classico del suo effetto: Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb e Lo-Fi. Premi l'interruttore per accendere un pedale, gira le sue tre manopole come su un pedale vero, oppure cliccalo per aprire tutti i suoi comandi.",
        "L'ordine della catena lo decidi tu: trascina un pedale a destra o a sinistra e il suono lo segue, con una breve dissolvenza e senza click, anche mentre la musica suona. Glitch, Delay e Tape Echo vanno a tempo col brano, i pedali spenti non usano CPU e un limitatore di sicurezza tiene anche il feedback più estremo sotto i −0,3 dBFS. Usalo su chitarre, synth, voci, batterie o un mix intero."
      ],
      es: [
        "Officina pone una pedalera dentro de tu DAW. Ocho efectos uno al lado del otro, cada uno un pedal con el nombre clásico de su efecto: Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb y Lo-Fi. Pisa el interruptor para encender un pedal, gira sus tres perillas como en un pedal real o haz clic para abrir todos sus controles.",
        "El orden de la cadena lo decides tú: arrastra un pedal a la derecha o a la izquierda y el sonido lo sigue, con un breve fundido y sin clics, incluso mientras suena la música. Glitch, Delay y Tape Echo van al tempo de la canción, los pedales apagados no usan CPU y un limitador de seguridad mantiene incluso la realimentación más extrema por debajo de −0,3 dBFS. Úsalo en guitarras, sintes, voces, baterías o una mezcla entera."
      ],
      de: [
        "Officina bringt ein Pedalboard in deine DAW. Acht Effekte nebeneinander, jeder ein Pedal mit dem klassischen Namen seines Effekts: Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb und Lo-Fi. Tritt auf den Fußschalter, um ein Pedal einzuschalten, dreh an seinen drei Reglern wie an einem echten Pedal oder klick es an, um alle seine Regler zu öffnen.",
        "Die Reihenfolge der Kette bestimmst du: zieh ein Pedal nach links oder rechts und der Klang folgt, mit kurzer Überblendung und ohne Klicks, auch während die Musik läuft. Glitch, Delay und Tape Echo laufen im Songtempo, ausgeschaltete Pedale brauchen keine CPU und ein Sicherheitslimiter hält selbst ausuferndes Feedback unter −0,3 dBFS. Für Gitarren, Synths, Vocals, Drums oder einen ganzen Mix."
      ],
      fr: [
        "Officina met un pedalboard dans votre DAW. Huit effets côte à côte, chacun une pédale portant le nom classique de son effet : Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb et Lo-Fi. Appuyez sur le footswitch pour allumer une pédale, tournez ses trois boutons comme sur une vraie pédale, ou cliquez dessus pour ouvrir tous ses réglages.",
        "L'ordre de la chaîne, c'est vous qui le choisissez : faites glisser une pédale à gauche ou à droite et le son suit, avec un court fondu et sans clic, même pendant la lecture. Glitch, Delay et Tape Echo suivent le tempo du morceau, les pédales éteintes n'utilisent pas de CPU et un limiteur de sécurité garde même un feedback incontrôlé sous −0,3 dBFS. Sur guitares, synthés, voix, batteries ou un mix entier."
      ]
    },
    how: {
      en: [
        ["Switch on", "Click the footswitch of the pedals you want: the red LED lights up. Pedals that are off use no CPU."],
        ["Arrange", "Drag the pedals left or right to choose the order of the chain: a delay before the reverb sounds different from one after it."],
        ["Tweak", "Turn the three knobs on the pedal, or click it to open all its controls in the panel below."],
        ["Blend", "Set input, mix and output in GLOBAL; Safe Limit keeps the output below −0.3 dBFS. Save your board as a preset."]
      ],
      it: [
        ["Accendi", "Clicca l'interruttore dei pedali che vuoi: si accende il LED rosso. I pedali spenti non usano CPU."],
        ["Disponi", "Trascina i pedali a destra o a sinistra per scegliere l'ordine della catena: un delay prima del riverbero suona diverso da uno dopo."],
        ["Regola", "Gira le tre manopole sul pedale, oppure cliccalo per aprire tutti i suoi comandi nel pannello sotto."],
        ["Dosa", "Regola ingresso, mix e uscita in GLOBAL; Safe Limit tiene l'uscita sotto i −0,3 dBFS. Salva la tua pedaliera come preset."]
      ],
      es: [
        ["Enciende", "Haz clic en el interruptor de los pedales que quieras: se enciende el LED rojo. Los pedales apagados no usan CPU."],
        ["Ordena", "Arrastra los pedales a la derecha o a la izquierda para elegir el orden de la cadena: un delay antes de la reverb suena distinto que después."],
        ["Ajusta", "Gira las tres perillas del pedal, o haz clic para abrir todos sus controles en el panel inferior."],
        ["Mezcla", "Ajusta entrada, mix y salida en GLOBAL; Safe Limit mantiene la salida por debajo de −0,3 dBFS. Guarda tu pedalera como preset."]
      ],
      de: [
        ["Einschalten", "Klick auf den Fußschalter der gewünschten Pedale: die rote LED leuchtet. Ausgeschaltete Pedale brauchen keine CPU."],
        ["Anordnen", "Zieh die Pedale nach links oder rechts, um die Reihenfolge zu wählen: ein Delay vor dem Hall klingt anders als danach."],
        ["Einstellen", "Dreh an den drei Reglern des Pedals oder klick es an, um alle seine Regler im Feld darunter zu öffnen."],
        ["Mischen", "Stell Eingang, Mix und Ausgang in GLOBAL ein; Safe Limit hält den Ausgang unter −0,3 dBFS. Speichere dein Board als Preset."]
      ],
      fr: [
        ["Allumer", "Cliquez sur le footswitch des pédales voulues : la LED rouge s'allume. Les pédales éteintes n'utilisent pas de CPU."],
        ["Disposer", "Faites glisser les pédales à gauche ou à droite pour choisir l'ordre : un delay avant la réverbe ne sonne pas comme après."],
        ["Régler", "Tournez les trois boutons de la pédale, ou cliquez dessus pour ouvrir tous ses réglages dans le panneau du bas."],
        ["Doser", "Réglez entrée, mix et sortie dans GLOBAL ; Safe Limit garde la sortie sous −0,3 dBFS. Enregistrez votre pedalboard en preset."]
      ]
    },
    specs: {
      en: [["Type", "Multi-effect (insert or send)"], ["Pedals", "Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb, Lo-Fi"], ["Chain", "Any order, drag to reorder, click-free"], ["Tempo sync", "Glitch, Delay, Tape Echo"], ["Channels", "Mono and stereo"], ["Latency", "None"], ["CPU", "About 1.5 % of one core with all 8 pedals on (48 kHz)"], ["Presets", "94: 14 combinations and 10 for each pedal; user presets, A/B"]],
      it: [["Tipo", "Multi-effetto (insert o mandata)"], ["Pedali", "Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb, Lo-Fi"], ["Catena", "Ordine libero, si riordina trascinando, senza click"], ["A tempo", "Glitch, Delay, Tape Echo"], ["Canali", "Mono e stereo"], ["Latenza", "Nessuna"], ["CPU", "Circa 1,5 % di un core con tutti gli 8 pedali accesi (48 kHz)"], ["Preset", "94: 14 combinazioni e 10 per ogni pedale; preset utente, A/B"]],
      es: [["Tipo", "Multiefectos (insert o envío)"], ["Pedales", "Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb, Lo-Fi"], ["Cadena", "Orden libre, se reordena arrastrando, sin clics"], ["Al tempo", "Glitch, Delay, Tape Echo"], ["Canales", "Mono y estéreo"], ["Latencia", "Ninguna"], ["CPU", "Alrededor del 1,5 % de un núcleo con los 8 pedales encendidos (48 kHz)"], ["Presets", "94: 14 combinaciones y 10 para cada pedal; presets de usuario, A/B"]],
      de: [["Typ", "Multi-Effekt (Insert oder Send)"], ["Pedale", "Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb, Lo-Fi"], ["Kette", "Beliebige Reihenfolge, per Ziehen umsortieren, klickfrei"], ["Tempo-Sync", "Glitch, Delay, Tape Echo"], ["Kanäle", "Mono und Stereo"], ["Latenz", "Keine"], ["CPU", "Etwa 1,5 % eines Kerns mit allen 8 Pedalen an (48 kHz)"], ["Presets", "94: 14 Kombinationen und 10 pro Pedal; eigene Presets, A/B"]],
      fr: [["Type", "Multi-effet (insert ou envoi)"], ["Pédales", "Glitch, Filter, Delay, Phaser, Chorus, Tape Echo, Spring Reverb, Lo-Fi"], ["Chaîne", "Ordre libre, réordonnable par glisser, sans clic"], ["Synchro tempo", "Glitch, Delay, Tape Echo"], ["Canaux", "Mono et stéréo"], ["Latence", "Aucune"], ["CPU", "Environ 1,5 % d'un cœur avec les 8 pédales allumées (48 kHz)"], ["Presets", "94 : 14 combinaisons et 10 pour chaque pédale ; presets utilisateur, A/B"]]
    },
    hw: {
      en: ["64-bit dual-core processor or better", "4 GB RAM (8 GB recommended)", "About 150 MB of free disk space", "Screen 1280 × 800 or larger", "Audio interface to play live in the Standalone (optional)"],
      it: ["Processore dual-core a 64 bit o superiore", "4 GB di RAM (consigliati 8 GB)", "Circa 150 MB di spazio libero su disco", "Schermo da 1280 × 800 o più grande", "Scheda audio per suonare dal vivo nello Standalone (facoltativa)"],
      es: ["Procesador de doble núcleo de 64 bits o superior", "4 GB de RAM (8 GB recomendados)", "Unos 150 MB de espacio libre en disco", "Pantalla de 1280 × 800 o mayor", "Interfaz de audio para tocar en directo en el Standalone (opcional)"],
      de: ["64-Bit-Dual-Core-Prozessor oder besser", "4 GB RAM (8 GB empfohlen)", "Etwa 150 MB freier Speicherplatz", "Bildschirm 1280 × 800 oder größer", "Audio-Interface zum Live-Spielen im Standalone (optional)"],
      fr: ["Processeur double cœur 64 bits ou plus", "4 Go de RAM (8 Go recommandés)", "Environ 150 Mo d'espace disque libre", "Écran 1280 × 800 ou plus grand", "Interface audio pour jouer en direct dans le Standalone (facultatif)"]
    }
  }
};
