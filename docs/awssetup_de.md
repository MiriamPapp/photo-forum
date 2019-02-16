---
title: Einrichtung eines AWS-Kontos
---

This page is also available [in English](../awssetup).

# Einrichten des Stammbenutzer-Kontos

**Zunächst eine Warnung:** Diese Dokumentation richtet sich an Benutzer mit
durchschnittlichen Computerkenntnissen. Deswegen werden komplexere (und sicherere)
AWS-Funktionen wie MFA, IAM Administratoren oder kontenüberschreitender
Zugriff nicht verwendet. Das verringert zwar die Sicherheit, ist aber mit Absicht
so einfach gehalten.   
Das heißt auch, daß Sie das hier eingerichtete Konto **NICHT** für andere
Zwecke benutzen sollten. Falls Sie weitere AWS-Dienste einsetzen wollen,
richten Sie bitte mit einer weiteren E-Mail-Adresse ein neues AWS-Konto ein.   
Falls Sie schon ein AWS-Konto besitzen, richten Sie bitte für das Photo-Forum
ein neues Konto ein.  
Falls Sie zwei Konten benutzen, verwenden Sie am besten auch zwei verschiedene Browser,
zum Beispiel einmal Firefox und einmal Chrome. Das vereinfacht die Handhabung, da sich
AWS über Cookies und andere Browserdaten merkt, welches Konto Sie gerade benutzen. Da
kann es schwierig werden, überhaupt die Seite zum Eröffnen eines weiteren Kontos
öffnen zu können.

Öffnen Sie zunächst die [AWS Startseite](https://aws.amazon.com/de/free/). Falls Sie nie
ein AWS-Konto angelegt haben, sieht die Seite etwa so aus:

![Amazon Konto einrichten](../img/Amazon-Free-Tier_de.jpg)

Um ein neues AWS-Konto zu erstellen, klicken Sie auf `Kostenloses Konto erstellen`.
Die Einrichtung eines Kontos ist relativ einfach - Amazon
[beschreibt den ganzen Prozeß](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
in seiner Wissensdatenbank. Die Seite ist leider auf Englisch - eine deutsche Übersetzung liegt leider nicht vor.   
Aber wie schon gesagt, ist der Prozess recht einfach und selbsterklärend.   
Die Einrichtung eines Kontos ist auch
[direkt über diese Seite](https://portal.aws.amazon.com/billing/signup#/start) möglich.

Bei der Eingabe Ihrer Telefonnummer achten Sie bitte darauf die Nummer **ohne** die führende Null einzugeben.
Sie stellen das Land ein, wodurch automatisch die Länderkennung +49 eingestellt wird und dann
die Telefonnumer mit Vorwahl - ohne die erste Null.

AWS verlangt während der Konto-Einrichtung die Angabe eines Zahlungsmittels. Lassen Sie sich
davon nicht abschrecken - Sie können bei AWS Limits setzen und Alarme für die Kosten
einrichten und das Photo-Forum wird sehr wenig Kosten produzieren.  
Normalerweise werden Sie im ersten Jahr bei AWS gar nichts bezahlen und auch danach
gibt es für die genutzten Dienste Freikontingente, so dass die Kosten sehr niedrig bleiben.

Sobald Sie das AWS Stammbenutzer-Konto eingerichtet haben, können Sie sich über
die AWS-Konsole an- und abmelden. Denken Sie daran, Ihre Zugangsdaten so zu sichern, daß sie sie jederzeit
wiederfinden und daß sie nicht verlorengehen.

# aws-cli-Benutzung ermöglichen

In der AWS Management Konsole (die Seite, die Sie nach dem Anmelden sehen) wählen Sie
"Services" in der linken oberen Ecke. Dort wählen Sie dann den IAM Dienst aus.  
Um ihn zu finden, können Sie auch die Suchfunktion am oberen Rand der Dienst-Übersicht
benutzen.

Sie sehen dann eine Seite, die so ähnlich wie diese aussieht:  

![IAM Übersicht](../img/IAM_de.jpg)

Um mit den notwendigen Werkzeugen arbeiten zu können, benötigen Sie Zugangsdaten, die
von Programmen benutzt werden können. Bei AWS gibt es dafür die sogenannten Zugriffsschlüssel.
Diese Schlüssel tragen Sie auf Ihrem Computer ein und haben dadurch sehr einfach Zugriff auf Ihr
AWS-Konto.

Bitte öffnen Sie wieder ein Terminal-Fenster (Mac) bzw. ein Fenster für die
Eingabeaufforderung. Geben Sie das folgende Kommando ein:
   ```Shell
   aws configure --profile awsadmin
   ```
Das Programm fragt nun nach dem Zugriffsschlüssel (`Enter Access Key ID: `).
Diesen müssen wir uns erst bei AWS generieren.

In der IAM-Konsole bei AWS gehen Sie rechts oben auf den Namen Ihres Kontos - bei mir ist
das `Photoforum Root` - das Feld befindet sich rechts neben dem Glockensymbol.  
Klicken Sie auf den Namen und wählen Sie "Meine Anmeldeinformationen" - eventuell heißt das etwas
anders. Ich kann das bei mir leider nicht auf Deutsch umstellen, auch wenn der Rest der Seite
deutsch angezeigt wird. Falls auch bei Ihnen das Menü in Englisch angezeigt wird: der
richtige Eintrag ist `My Security Credentials`.

Auf der nun angezeigten Seite wählen Sie "Zugriffsschlüssel (Zugriffsschlüssel-ID und geheimer Zugriffsschlüssel)".

![access keys](../img/accesskeys_de.jpg)

Nun klicken Sie auf den blauen Knopf mit der Aufschrift `Neuen Zugriffsschlüssel erstellen`.

![access keys](../img/keycreated_de.jpg)

Klicken Sie bitte auf `Schlüsseldatei herunterladen` und öffnen Sie die Datei mit dem
Text-Editor Ihrer Wahl. Auf Windows öffnet sich unter Umständen automatisch Excel,
da die Datei rootkey.csv keißt.   
Der Inhalt sieht ungefähr so aus (natürlich sind die Werte für die Id und den Key bei
Ihnen anders):

![access keys](../img/keys.jpg)

**Wichtig:** Diese Schlüssel sind der Zugang zu Ihrem AWS-Konto. Zeigen Sie sie niemandem!  
Das aws-Programm speichert die Werte in Ihrem Benutzer-Odner in einem Unterverzeichnis mit
dem Namen .aws - normalerweise sehen Sie dieses Verzeichnis nicht, da sein Name mit einem
Punkt beginnt. In diesem Verzeichnis werden die Zugangsdaten in den beiden Dateien `config`
und `credentials` abgelegt. Darum brauchen Sie sich aber eigentlich nicht kümmern.

Sie haben immer noch Ihr Fenster mit dem aws-Programm offen, das nach der Access-Key-Id fragt.
Bitte kopieren Sie in Ihrem Text-Editor (oder Excel) den Wert, der nach dem Gleichheitsszeichen
steht (hier im Beispiel wäre das `AKIAI7VVS7R6HCOMF2VA`). Fügen Sie den Wert in dem Fenster
mit dem aws-Programm ein und drücken Sie Enter.   
Nun fragt das Programm nach dem geheimen Schlüssel (Secret Access Key bzw. AWSSecretKey).
Kopieren Sie auch diesen Wert aus dem Text-Editor in das aws-Programm und drücken Sie Enter.

Jetzt fragt das Programm nach der Standard-Region, die Sie für die AWS-Dienste benutzen
möchten - das Sie die Anleitung in Deutsch lesen, ist der Zugangspunkt in Frankfurt eine
gute Wahl - der einzugebende Wert wäre dann `eu-central-1`.  Der Zugangspunkt bestimmt die
Geschwindigkeit, mit der Ihre Benutzer auf das Forum zugreifen können. Da verschiedene
Regionen verschiedene Preise haben, können Sie sich noch einmal auf der
[Seite zur Preisgestaltung von S3](https://aws.amazon.com/de/s3/pricing/?nc1=h_ls) informieren
und eventuell eine andere Region wählen. Achten Sie auf die Preise für
`S3 Standard-Speicher`, `Anforderungspreise S3 Standard` und `Datenübertragungspreise`.

Wenn Sie Ihre gewünschte Region eingegeben haben, drücken Sie Enter.

**Glückwunsch!** Jetzt sind Sie in der Lage, mit Programmen auf die AWS-Dienste zuzugreifen.

Um Ihre Konfiguration zu prüfen, geben Sie das folgende Kommando ein:
```Shell
aws iam get-user --profile awsadmin
```

Das Programm sollte dann einige kryptische Informationen ausgeben, die
ungefähr so aussehen:
```
{
    "User": {
        "UserId": "063516392340",
        "Arn": "arn:aws:iam::063516392340:root",
        "CreateDate": "2019-02-03T17:48:37Z",
        "PasswordLastUsed": "2019-02-12T17:15:21Z"
    }
}
```

Jetzt haben Sie alle Voraussetzungen abgearbeitet. Sie können nun mit
der Installation der Software bei AWS weitermachen - wechseln Sie dazu
wieder auf die [Startseite](../index_de).
