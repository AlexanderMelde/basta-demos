# WebNN: Web Neural Network API

Ermöglicht Zugriff auf Neural Processing Unit (NPU) für effiziente Ausführung von LLMs, Stable Diffusion etc. auf entsprechender Client-Hardware.

**Motivation**: Geringe Latenz, Datenschutz, Hohe Verfügbarkeit, Niedrige Kosten

## Einordnung & Abgrenzung

**Webassembly**: Ausführung von low-level Bytecode im Webbrowser

**WebGPU**: Zugriff auf low-level Grafik-APIs wie Vulkan, Metal und DirectX. Kann beispielsweise als Renderer für Babylon.js schon genutzt werden.

**WebNN**: Zugriff auf low-level KI-APIs wie DirectML, ML Compute, NNAPI und OpenVino. Diese KI-APIs wiederum wählen und nutzen dann abhängig von der jeweiligen Endgeräte-Hardware die optimalen Beschleunigungen wie CPU Parallelisierung, GPUs oder Hardwarebeschleuniger.

**ModelLoader API**: Mehr eine Highlevel Blackbox, lädt KI-Modelle anhand einer URL in den Browser und ermöglicht die Inferenz. Simpel, aber nicht so flexibel wie WebNN, da es Modelle in einem Standard-Format (noch in Entwicklung und tendenziell einschränkend) benötigt.

## Architektur

**Was ist realistisch?** Wir werden nicht direkt mit WebNN sprechen, aber die Frameworks die wir nutzen (TensorFlow.js, ONNX.js) werden WebNN verwenden.

[<img src="https://github.com/webmachinelearning/webnn/raw/main/content/webnn_arch.png" style="background-color: white; padding: 20px;" alt="WebNN Architecture">](https://github.com/webmachinelearning/webnn/blob/main/explainer.md)

## KI-Modelle aktuell

- ca 4 bis 40 GB groß (je nach Anzahl Parameter)

## Vergleich

|                           | WebNN                                        | Cloud                                                  |
|---------------------------|----------------------------------------------|--------------------------------------------------------|
| Latenz                    | ⭐️ quasi keine                               | Hoch, von Internetverbindung abhängig                  |
| Maximale Leistung         | Durch lokale Hardware begrenzt               | ⭐️ unbegrenzt                                          |
| Geschwindigkeit           | Von lokaler Hardware abhängig                | von Internetverbindung & gebuchten Ressourcen abhängig |
| Kosten Unternehmen        | ⭐️ Sehr gering, nur Modellbereitstellung     | Hoch (GPU Compute Miete / RZ Betrieb)                  |
| Kosten für Nutzer         | Anschaffungskosten, Stromkosten              | ⭐️ Kaum, lediglich Datenvolumen                        |
| Datenschutz               | ⭐️ Sehr gut, da keine Datenübertragung       | Abhängig von Cloudanbieter                             |
| Offlinefähig              | ⭐️ Ja                                        | Nein                                                   |
| Zielgruppe                | Eingeschränkt da Hardware erforderlich       | ⭐️ Uneingeschränkt                                     |
| Ersteinrichtung je Nutzer | Großes ML-Modell muss heruntergeladen werden | ⭐️ Keine                                               |

--> Es gibt keinen klaren Sieger. Daher die Idee: **Hybridlösung**:

- Beide Optionen anbieten
- Nutzer dürfen wählen zwischen Download der Modelle und Cloud-Inferenz
- Abwägungen zwischen Datenschutz, Geschwindigkeit, Kosten und Offlinefähigkeit dem Nutzer überlassen
  - WebNN als Option für Nutzer, die Datenschutz und Offlinefähigkeit wünschen
  - Cloud als Option für Nutzer, die maximale Leistung selbst auf schwacher Hardware wünschen
- Lokales Modell als Fallback zur Online-Variante möglich
- Entlasten der Server-Last durch Verwendung dezentraler Ressourcen

## Anwendungsfälle

- Copilot in Webapp integriert
  - Intelligente Vorschläge
  - Chat
  - ...
- Bilderkennung, OCR, Blurry Backgrounds etc bei File Upload oder Video Stream
- Textvorschläge, Autokorrektur, Autovervollständigung
- Spracherkennung (Diktatfunktion, ...)
- Zusammenfassungen generieren
- [... weitere offizielle Use Cases](https://www.w3.org/TR/webnn/#usecases)

## Demos

Noch ist WebNN in Entwicklung, man kann aber WebGPU-Beispiele anschauen, die ähnlich aufgebaut sind und dann einfach noch schneller werden würden.

- [Large Language Model Web-Demo (z.B. LLaMA 2 7B)](https://webllm.mlc.ai/)
- [Stable Diffusion Web-Demo](https://webllm.mlc.ai/)
- [Weitere Demos](https://webmachinelearning.github.io/webnn-samples-intro/)

## Quellen

- [Web Neural Network API Explained](https://github.com/webmachinelearning/webnn/blob/main/explainer.md)
- [WebNN-Intro (W3C)](https://webmachinelearning.github.io/webnn-intro/)
- [BASTA! Presentation by Christian Liebel](https://www.thinktecture.com/contributions/webnn-die-ai-revolution-im-browser/) ([Slides](https://speakerdeck.com/christianliebel/webnn-die-ai-revolution-im-browser))
- [Chrome Platform Status for WebNN Feature](https://chromestatus.com/feature/5738583487938560)
