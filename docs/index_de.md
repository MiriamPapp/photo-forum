---
lang: de
---
This page is also available [in English](../index).

**Achtung**: Dieses Projekt ist noch in einem sehr frühen Entwicklungsstadium. Es gibt noch
 keine benutzbaren Funktionen.

# Überblick

Photoforum ist eine Sammlung von Anleitungen, Konfigurationsdateien und Programmen,
die es jedem ermöglichen, sehr preiswert ein Forum für die Online-Kommunikation einzurichten,
wobei man sich komplett von den Aforderungen und Einschränkungen sonstiger Forums-Dienstleister
befreit.

Photoforum ist dafür gemacht, auf Diensten der Amazon Web Services (AWS) eingesetzt zu werden.
Dabei werden nur preiswerte Dienste benutzt und alle benutzten Dienste arbeiten serrverlos - das
heißt, es ist kein spezieller Server dafür bereitzustellen. Auf diese Weise bezahlt der
Forumsbetreiber nur anhand des aktuellen Ressourcenverbrauchs, wobei viele der benutzten
Dienste Freikontingente haben, die die Benutzung noch preiswerter machen.

# Voraussetzungen

Wenn Sie ein Photo forum betreiben wollen, müssen Sie einige Voraussetzungen erfüllen. Für alle
notwendigen Arbeitsschritte gibt es hier eine Beschreibung.

* **Rechner**  
  Das ist ernst gemeint - Sie brauchen einen Rechner. Ein Tablet oder Smartphone reichen
  nicht aus. 
  Im Prinzip ist jeder Rechner benutzbar - egal ob er unter MS-Windows, Mac-OS, Linux oder
  irgendeinem Unix-Betriebssystem läuft.
* **AWS-Konto**  
  Da Sie das Forum bei AWS laufen lassen werden, benötigen Sie dort ein Konto.  
  AWS verlangt während der Konto-Einrichtung die ANgabe eines Zahlungsmittels. Lassen Sie sich
  davon nicht abschrecken - Sie können bei AWS Limits setzen und Alarme für die Kosten
  einrichten und das Photo forum wird sehr wenig Kosten produzieren.  
  Normalerweise werden Sie im ersten Jahr bei AWS gar nichts bezahlen und auch danach
  gibt es für die genutzten Dienste Freikontingente, so dass die Kosten sehr niedrig bleiben.  
  Um ein AWS-Konto einzurichten folgen Sie den Anweisungen in
  _"[Einrichtung eines AWS-Kontos"](../awssetup_de)_.
* **Python**  
  Etliche der hier benutzten Programme sind in der
  [Programmiersprache Python](https://www.python.org/) verfaßt. Deswegen
  benötigen Sie einen installierten Python-Interpreter, der für nahazu jedes Betriebssystem zur
  Verfügung steht. Bitte benutzen Sie möglichst die aktuellste Python-Version.  
  Auch wenn Ihr Betriebssystem schon Python enthält (zum Beispiel Mac-OS), empfiehlt es sich
  eine private Kopie von Python zu installieren, um nicht das Betriebssystem durch den Austausch
  von irgendwelchen Python-Komponenten zu stören.  
  Um Python auf Ihrem Rechner zu installieren folgen Sie den Anweisungen in
  _"[Python auf Ihrem Rechner installieren](../pythonsetup_de)"_.
* **git**  
  [git](https://git-scm.com)
  ist ein modernes dezentralisiertes Programmcode-Verwaltungssystem. Sie werden es benutzen,
  um alle Dateien für die Installation des Forums bereitzustellen und um diese aktuell zu halten.  
  Um Python auf Ihrem Rechner zu installieren folgen Sie den Anweisungen in
  _"[Git auf Ihrem Rechner installieren](../gitsetup_de)"_.