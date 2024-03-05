# Playwright

## Run

```sh
npx playwright test --ui
```

--> get started link Demo zeigen

## vs Cypress: Notizen unsortiert

- Playwright hat Cypress erstmals in Downloads überholt
- Chrome --usere-data-dir --remote-debugging-port
  - Neue Instanz ohne Überschneidungen
  - Kommunikation Testtool und Browser mit Websockets
    - Bei Cypress Befehle wie JS Konsole,. meistens im Browser, Netzwerkteil außen
- Baut auf Chrome Webtools Protokoll auf
- Playwright hat eigenen Browser entwickelt, der auf Webkit basdiert und Chrome Webtools Api unterstützt (Ex-Google-Browserentwickler)
- PW hat wenig Dependencies, Cypress hat Mocha, Chai und JQuery
- Cypress Watch->Test Runnter->Testschritte nachvollziehbar, inspizierbar, Debugging Breakpoints etwas schwach
- Playwright
  - CLI möglich --headed, --debug (alter Modus)
    - Traceview mit UI Before/After, Parallelization, Sharding
    - Cypress: Video Recordings & Screenshots, nicht interaktiv, Commercial Cloud (teuer aber gut ähnlich Traceview), sequenziell, etw. langsamer
  - VS Code Extension: Bequeme Breakpoint Highlights im Browser
  - UI: Wie Cypress/Chrome Dev Tools, Timeline, Aber: Macht nur Screenshots, wartet ggf. nicht lange genug für Async
- Code
  - cypress versteckt asynchronität (kein await)
    - gut für einfaches, sonst kompliziert
    - Baut ausführungsplan auf, der später async ausgeführt wird.
      - Breakpoints an falscher Stelle
    - Schwer wenn man async Testbedingungen laden will (aus DB)
  - playwright: tatsächliches JS mit awaits etc
- Architecture
  - Playwright:
    - Empfiehlt Page Objects für Selector-Mapping
    - fixtures mit Dependency Injections
  - Cypress:
    - Möchte dass jede Zeile mit cy beginnt, page object pattern ungern gesehen -> Alles ins cy objekt
- Netzwerk verändern
- Visueller Vergleichstest bei PW eingebaut, bei Cypress nur in Commercial Version oder durch Community Support
- A11y Tests: user Facing Selectors nutzen (z.B. role=button) bei PW eingebaut, bei Cypress nur durch Community Support
- Axe Plugin: Quer über seite navigieren und fehler finden (Brute Force)
- Recorder Chrome Extension zum Tests erstellen
- Session Storage
- Vorteile PW: Schnell (Sharding, Parallel), Microsoft, Mehr Kontrolle über Browser
  - Weniger Dependencies, Kostenlos, Interaktive Test UI, Möglichkeit für Breakpoints, Mehr Kontrolle über Browser
- Vorteile Cypress: Einfacherer Code, Mature, Component Testing

## Sources

- BASTA! Presentation by Rainer Hahnekamp ([Slides](https://speakerdeck.com/rainerhahnekamp/basta-spring-2024-cypress-und-playwright), [Code](https://github.com/rainerhahnekamp/basta-spring-2024-cypress-and-playwright))
