# Playwright

## Run

Erst normal serven für interaktives

```sh
npx playwright test --ui
```

--> get started link Demo zeigen, separate Demo zeigen, VS Code Extension zeigen mit Highlighter und Recorder

## Playwright vs Cypress

|                                                                 | **Playwright**                                                                                                                                                                                                      | **Cypress**                                                                                                                                                                                                                                                             |
|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Vorteile**                                                    | <ul><li>Schnell (Sharding, Parallel)</li><li>Microsoft</li><li>Mehr Kontrolle über Browser</li><li>Weniger Dependencies</li><li>Kostenlos</li><li>Interaktive Test UI</li><li>Möglichkeit für Breakpoints</li></ul> | <ul><li>Einfacherer Code</li><li>Mature</li><li>Component Testing</li></ul>                                                                                                                                                                                             |
| **Dependencies**                                                | Keine                                                                                                                                                                                                               | Mocha, Chai, JQuery, ...                                                                                                                                                                                                                                                |
| **Architecture**                                                | Empfiehlt Page Objects für Selector-Mapping  , fixtures mit Dependency Injections                                                                                                                                   | Möchte dass jede Zeile mit cy beginnt, page object pattern ungern gesehen -> Alles ins cy objekt                                                                                                                                                                        |
| **Code**                                                        | tatsächliches JS mit awaits etc                                                                                                                                                                                     | Versteckt asynchronität (kein await):<ul><li>gut für einfaches, sonst kompliziert</li><li>Baut ausführungsplan auf, der später async ausgeführt wird</li><li>Breakpoints an falscher Stelle</li><li>Schwer wenn man async Testbedingungen laden will (aus DB)</li></ul> |
| **A11y Tests**: user Facing Selectors nutzen (z.B. role=button) | Eingebaut                                                                                                                                                                                                           | Via Community                                                                                                                                                                                                                                                           |
| **Visueller Vergleichstest**                                    | Eingebaut                                                                                                                                                                                                           | nur in Commercial Version oder durch Community Support                                                                                                                                                                                                                  |
| **Languages**                                                   | JS, TS, .NET, Java, Python                                                                                                                                                                                          | JS, TS                                                                                                                                                                                                                                                                  |
| **Browser**                                                     | Chromium, Firefox, Webkit                                                                                                                                                                                           | Chromium, Firefox, Webkit                                                                                                                                                                                                                                               |
| **Tests verfolgen**                                             | Interaktiver Trace Viewer mit interaktiver Website zu jedem Schritt / Before & After                                                                                                                                | Screen Recording Video, Screenshot on Error oder interaktive Lösung in commercial cloud (teuer aber gut ähnlich Traceview)                                                                                                                                              |
| **Test abarbeitung**                                            | Parallel, Sharding                                                                                                                                                                                                  | Sequenziell, Langsam                                                                                                                                                                                                                                                    |
| **IDE Extensions**                                              | Offiziell für VS-Code von Microsoft, interaktiv mit Breakpoint Support, Highlighting im Brower, Recorder, ...                                                                                                       | Community VS Code und offiziell in JetBrains integriert                                                                                                                                                                                                                 |
| **Browser Extensions**                                          | Recorder für Chrome via Community                                                                                                                                                                                   | Recorder für Chrome                                                                                                                                                                                                                                                     |

## vs Cypress: Notizen unsortiert

- Playwright hat Cypress erstmals in Downloads überholt
- Chrome --user-data-dir --remote-debugging-port
  - Neue Instanz ohne Überschneidungen
  - Kommunikation Testtool und Browser mit Websockets
    - Bei Cypress Befehle wie JS Konsole,. meistens im Browser, Netzwerkteil außen
- Baut auf Chrome Devtools Protokoll auf
- Playwright hat eigenen Browser entwickelt, der auf Webkit basdiert und Chrome Devtools Api unterstützt (Ex-Google-Browserentwickler)
- Cypress Watch->Test Runnter->Testschritte nachvollziehbar, inspizierbar, Debugging Breakpoints etwas schwach
- Playwright
  - CLI möglich --headed, --debug (alter Modus)
  - UI: Wie Cypress/Chrome Dev Tools, Timeline, Aber: Macht nur Screenshots, wartet ggf. nicht lange genug für Async
- Netzwerk verändern
- Axe Plugin: Quer über seite navigieren und fehler finden (Brute Force)
- Session Storage

## Migration

## Sources

- Playwright [Documentation](https://playwright.dev/docs/intro)
- BASTA! Presentation by Rainer Hahnekamp ([Slides](https://speakerdeck.com/rainerhahnekamp/basta-spring-2024-cypress-und-playwright), [Code](https://github.com/rainerhahnekamp/basta-spring-2024-cypress-and-playwright))
- 
