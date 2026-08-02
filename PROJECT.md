# Tic-Tac-Toe Projekt - Dokumentation

## Projektübersicht

Dies ist ein Lernprojekt zur Erstellung einer Tic-Tac-Toe Webanwendung mit:
- **Next.js 14+** (App Router)
- **React 18+** mit TypeScript
- **Tailwind CSS** für Styling
- **Vercel** für Deployment

## Projektstruktur

```
TicTacToe/
├── .gitignore              # Git Ignore Regeln
├── README.md               # Projektdokumentation
├── PROJECT.md              # Diese Datei
├── TASKS.md                # Aufgaben-Tracking
├── CHANGELOG.md            # Versionsgeschichte
├── CLAUDE.md               # Claude Code Anweisungen
├── next.config.js          # Next.js Konfiguration
├── package.json            # Dependencies & Scripts
├── tsconfig.json           # TypeScript Konfiguration
├── tailwind.config.js      # Tailwind CSS Konfiguration
├── postcss.config.js       # PostCSS Konfiguration
├── vercel.json             # Vercel Deployment Konfiguration
├── _vercel-verification.json # Deployment Verification Config
└── src/
    ├── app/
    │   ├── layout.tsx      # Root Layout
    │   ├── page.tsx        # Startseite
    │   ├── globals.css     # Globale Styles (Tailwind)
    │   └── components/
    │       └── TicTacToeBoard.tsx  # Hauptspiel-Komponente
    └── styles/
        └── globals.css     # (veraltet - nutzen src/app/globals.css)
```

## Technische Architektur

### Spiel-Logik (`src/app/components/TicTacToeBoard.tsx`)

**State Management:**
- `board`: Array von 9 Strings ('X', 'O', '')
- `currentPlayer`: 'X' oder 'O'
- `winner`: Gewinner ('X' oder 'O') oder null
- `isDraw`: Boolean für Unentschieden

**Gewinnprüfung:**
```typescript
const WIN_PATTERNS = [
  [0,1,2],[3,4,5],[6,7,8], // Reihen
  [0,3,6],[1,4,7],[2,5,8], // Spalten
  [0,4,8],[2,4,6]          // Diagonalen
];
```

**Funktionen:**
- `checkWinner(board)`: Prüft alle Gewinnmuster
- `handleMove(index)`: Verarbeitet Spielzug mit Validierung
- `handleReset()`: Setzt Spiel zurück
- `getStatusText()`: Statusanzeige (Spieler/Gewinner/Unentschieden)

### UI/UX Features

- **Responsive Design**: Mobile-first mit Tailwind Breakpoints
- **Animationen**: Hover-Effekte, Scale-Transitionen
- **Barrierefreiheit**: 
  - `aria-label` für jedes Feld
  - `role="status"` mit `aria-live="polite"`
  - Fokus-Indikatoren
  - Semantisches HTML
- **Farbcodierung**: Rot für X, Blau für O

### Build & Deployment

**NPM Scripts:**
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

**Vercel Konfiguration (`vercel.json`):**
- Static Build mit `@vercel/static-build`
- Output Directory: `.next`
- SPA Routing Fallback
- Security Headers

## Entwicklungsworkflow

### Lokale Entwicklung
```bash
npm install          # Dependencies installieren
npm run dev          # Dev Server starten (localhost:3000)
npm run build        # Production Build testen
npm run start        # Production Server starten
npm run lint         # Code Quality Check
```

### Git Workflow
```bash
git add .                    # Änderungen stage
git commit -m "feat: description"  # Conventional Commits
git push origin main         # Zu GitHub pushen
```

### Deployment
1. Repository zu Vercel verknüpfen
2. Auto-Deploy bei Push zu `main`
3. Preview Deployments für PRs
4. Production Deployments für `main`

## Qualitätsstandards

- **TypeScript Strict Mode**: Ja
- **ESLint**: Next.js empfohlene Regeln
- **Prettier**: Code Formatierung
- **Git Commits**: Conventional Commits
- **Tests**: (Geplant: Unit Tests mit Vitest)

## Nächste Schritte (Roadmap)

1. [ ] Unit Tests hinzufügen
2. [ ] E2E Tests mit Playwright
3. [ ] Dark Mode Support
4. [ ] Multiplayer über WebSocket
5. [ ] Scoreboard/Lokaler Speicher
6. [ ] PWA Features (Offline Support)
7. [ ] Animation Library (Framer Motion)

## Bekannte Issues

- Keine persistente Speicherung der Spielstände
- Keine Tastatur-Navigation (nur Maus/Touch)
- Kein High-Contrast Mode für Barrierefreiheit

---

*Generiert als Teil des Lernprojekts mit Claude Code*