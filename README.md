# OPES – Comitato Regionale Marche
## Sito Web Ufficiale

---

## 📋 Descrizione del Progetto

Sito web completo per il **Comitato Regionale Marche di OPES Italia** (Organizzazione Per l'Educazione allo Sport), Ente di Promozione Sportiva riconosciuto dal CONI. Il sito è stato sviluppato come sito statico moderno, responsive e ottimizzato per SEO, basandosi sull'identità visiva del comitato e sulle informazioni del sito nazionale [opesitalia.it](https://www.opesitalia.it).

---

## ✅ Funzionalità Completate

### Pagine
- **`index.html`** – Home page con hero section animata, ticker sport, statistiche, chi siamo, discipline, news, eventi, servizi, banner affiliazione, partner
- **`chi-siamo.html`** – Storia, missione, valori, timeline storica, organi direttivi
- **`sport.html`** – Catalogo discipline sportive con filtro per categoria
- **`affiliazione.html`** – Procedura affiliazione 4 step, vantaggi, tessere sportive, form richiesta
- **`news.html`** – Lista news con layout + sidebar, filtro categorie, newsletter
- **`eventi.html`** – Calendario eventi con filtro per mese e disciplina
- **`contatti.html`** – Form di contatto, mappa, province, FAQ accordion
- **`privacy.html`** – Informativa Privacy completa GDPR

### Componenti UI
- Navbar sticky con dropdown e hamburger mobile
- Hero section animata con counter JS
- Sport ticker scrolling animato
- Card animate con IntersectionObserver (fade-in)
- Contatori animati per statistiche
- FAQ accordion
- Filtri interattivi (sport, mese, categoria news)
- Lightbox gallery
- Scroll-to-top button
- Form di contatto/affiliazione/newsletter
- Footer completo a 4 colonne con barra tricolore italiana
- Top bar con link social e contatti

### Database (RESTful Table API)
- **`news`** – Notizie e comunicati
- **`eventi`** – Calendario eventi sportivi
- **`contatti`** – Messaggi dal form di contatto
- **`richieste_affiliazione`** – Richieste di affiliazione società
- **`newsletter`** – Iscrizioni newsletter

---

## 🔗 Struttura URI / Pagine

| Pagina | URL | Descrizione |
|--------|-----|-------------|
| Home | `/index.html` | Home page principale |
| Chi Siamo | `/chi-siamo.html` | Storia e organizzazione |
| Chi Siamo – Missione | `/chi-siamo.html#missione` | Valori |
| Chi Siamo – Consiglio | `/chi-siamo.html#consiglio` | Organi direttivi |
| Chi Siamo – Statuto | `/chi-siamo.html#statuto` | Documenti ufficiali |
| Sport | `/sport.html` | Tutte le discipline |
| Affiliazione | `/affiliazione.html` | Info affiliazione |
| Come Affiliarsi | `/affiliazione.html#come-affiliarsi` | Procedura step-by-step |
| Vantaggi | `/affiliazione.html#vantaggi` | Vantaggi affiliazione |
| Tessere | `/affiliazione.html#tessere` | Tipologie tessere |
| News | `/news.html` | Ultime notizie |
| Eventi | `/eventi.html` | Calendario eventi |
| Contatti | `/contatti.html` | Form e informazioni |
| Privacy | `/privacy.html` | Privacy policy GDPR |

### API Endpoints (RESTful Table API)
```
GET    tables/news?limit=6&sort=created_at
GET    tables/eventi?limit=4
POST   tables/contatti
POST   tables/richieste_affiliazione
POST   tables/newsletter
```

---

## 🎨 Design System

### Colori
```css
--primary-blue: #003087    /* Blu istituzionale OPES */
--opes-red: #c0392b         /* Rosso Italia */
--opes-green: #27ae60       /* Verde Italia */
--gold: #f39c12             /* Oro accenti */
--accent-blue: #2980b9      /* Blu secondario */
```

### Font
- **Montserrat** (titoli, numeri, bottoni) – Google Fonts
- **Open Sans** (testo corpo) – Google Fonts

### Breakpoints
- Desktop: 1200px max-width
- Tablet: ≤ 992px
- Mobile: ≤ 768px
- Small: ≤ 480px

---

## 📁 Struttura File

```
├── index.html              # Home page
├── chi-siamo.html          # Chi siamo
├── sport.html              # Discipline sportive
├── affiliazione.html       # Affiliazione
├── news.html               # News e comunicati
├── eventi.html             # Calendario eventi
├── contatti.html           # Contatti
├── privacy.html            # Privacy policy
├── css/
│   └── style.css           # Stili principali (CSS Variables, responsive)
├── js/
│   └── main.js             # JavaScript (nav, counters, animations, forms)
└── images/
    └── header.png          # Header banner OPES Marche
```

---

## 🚧 Funzionalità Non Ancora Implementate

- [ ] Area riservata per le società affiliate (login/dashboard)
- [ ] Sistema di iscrizione online ai campionati
- [ ] Tabelloni risultati e classifiche in tempo reale
- [ ] Gestione CMS per news ed eventi (backend)
- [ ] Galleria fotografica completa con immagini reali
- [ ] Motore di ricerca interno
- [ ] Versione multilingua (IT/EN)
- [ ] Integrazione calendario Google/iCal

---

## 🔜 Prossimi Passi Consigliati

1. **Aggiornare i contenuti** – Inserire contatti reali, indirizzi precisi, nomi del consiglio
2. **Aggiungere immagini** – Sostituire le immagini Unsplash con foto reali del comitato
3. **Popolare il database** – Aggiungere news ed eventi reali tramite l'API
4. **Google Maps** – Integrare la mappa reale della sede
5. **SEO avanzato** – Aggiungere sitemap.xml, robots.txt, meta tag Open Graph
6. **Analytics** – Integrare Google Analytics o Matomo
7. **Cookie Banner** – Aggiungere banner consenso cookie GDPR

---

## 🌐 Riferimenti

- **Sito OPES Nazionale:** https://www.opesitalia.it
- **CONI:** https://www.coni.it

---

*© 2025 OPES – Comitato Regionale Marche. Tutti i diritti riservati.*
