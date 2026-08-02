# CLAUDE.md - Tic-Tac-Toe Lernprojekt

## Projektübersicht
Dieses Projekt dient dem Lernen der modernen Webentwicklung mit:
- Next.js 14+ (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Git & GitHub für Versionskontrolle
- Vercel für Deployment

## Entwicklungsumgebung
- Node.js >= 18
- npm oder yarn
- Git

## Wichtige Skripte
- `npm run dev` - Entwicklungsserver starten
- `npm run build` - Production-Build erstellen
- `npm run start` - Production-Server starten
- `npm run lint` - Code-Qualität prüfen

## Projektstruktur
```
src/
├── app/
│   ├── layout.tsx      # Root Layout
│   ├── page.tsx        # Startseite
│   ├── globals.css     # Tailwind Basis-Styles
│   └── components/
│       └── TicTacToeBoard.tsx  # Spielkomponente
├── styles/             # (legacy, not used)
└── lib/                # Hilfsfunktionen (geplant)
```

## Git-Workflow
1. `git add .`
2. `git commit -m "<type>: <description>"`
3. `git push origin main`

## Deployment
- Vercel wird über GitHub-Integration automatisch deployed
- Jeder Push auf `main` löst ein neues Deployment aus
- Preview Deployments für Pull Requests

## Code Quality
- TypeScript Strict Mode
- ESLint mit Next.js Empfehlungen
- Prettier für Code-Formatierung

## Lernziele
- Verständnis des vollständigen Entwicklungsworkflows
- Moderne Frontend-Architektur
- Best Practices für zugängliche, responsive UIs
- CI/CD mit GitHub und Vercel

Letzte Aktualisierung: 2026-08-02