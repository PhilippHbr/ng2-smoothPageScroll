import { Component } from '@angular/core';

export class MenuItem {
    id: number;
    menuName: string;
    inhalt: string[];
}

@Component({
  selector: 'my-app',
    templateUrl: 'app/app.component.html'
})


export class AppComponent {
  menuItems = MENUITEMS;
}
const MENUITEMS: MenuItem[] = [
    { id: 0, menuName: 'Zweck des Gesetzes und Begriffsbestimmungen, Anwendungsbereich',  inhalt: [
        '§1 Zweck des Gesetzes', '§2 Arzneimittelbegriff', '§3 Stoffbegriff', '§4 Sonstige Begriffsbestimmungen', '§4a Ausnahmen vom Anwendungsbereich', '§4b Sondervorschriften für Arzneimittel für neuartige Therapien' ]},
    
    { id: 1, menuName: 'Anforderungen an die Arzneimittel', inhalt: [ '§5 Verbot bedenklicher Arzneimittel', '§6 Ermächtigung zum Schutz der Gesundheit', '§7 Radioaktive und mit ionisierenden Strahlen behandelte Arzneimittel' ,'§8 Verbote zum Schutz vor Täuschung' ,'§9 Der Verantwortliche für das Inverkehrbringen', '§10 Kennzeichnung'] },
    
    { id: 2, menuName: 'Herstellung von Arzneimitteln', inhalt: [ '§13 Herstellungserlaubnis', '§14 Entscheidung über die Herstellungserlaubnis', '§15 Sachkenntnis', '§16 Begrenzung der Herstellungserlaubnis' ]},
    
    { id: 3, menuName: 'Zulassung der Arzneimittel', inhalt: [ '§21 Zulassungspflicht', '§21a Genehmigung von Gewebezubereitungen', '§22 Zulassungsunterlagen', '§23 Besondere Unterlagen bei Arzneimitteln für Tiere', '§24 Sachverständigengutachten' ] },
    
    { id: 4, menuName: 'Registrierung von Arzneimitteln' inhalt: [ '§38 Registrierung homöopathischer Arzneimittel', '§39 Entscheidung über die Registrierung homöopathischer Arzneimittel, Verfahrensvorschriften' ]},
    
    { id: 5, menuName: 'Schutz des Menschen bei der klinischen Prüfung', inhalt: [ '§40 Allgemeine Voraussetzungen der klinischen Prüfung', '§41 Besondere Voraussetzungen der klinischen Prüfung', '§42 Verfahren bei der Ethik-Kommission, Genehmigungsverfahren bei der Bundesoberbehörde', '§42a Rücknahme, Widerruf und Ruhen der Genehmigung oder der zustimmenden Bewertung', '§42b Veröffentlichung der Ergebnisse klinischer Prüfungen' ] },
    
    { id: 6, menuName: 'Abgabe von Arzneimitteln', inhalt: [ '§43 Apothekenpflicht, Inverkehrbringen durch Tierärzte', '§44 Ausnahme von der Apothekenpflicht', '§45 Ermächtigung zu weiteren Ausnahmen von der Apothekenpflicht', '§46 Ermächtigung zur Ausweitung der Apothekenpflicht', '§47 Vertriebsweg', '§47a Sondervertriebsweg, Nachweispflichten', '§47b Sondervertriebsweg Diamorphin', '§48 Verschreibungspflicht' ] },
    
    { id: 7, menuName: 'Sicherung und Kontrolle der Qualität', inhalt: [ '§54 Betriebsverordnungen', '§55 Arzneibuch', '§55a Amtliche Sammlung von Untersuchungsverfahren' ] }
];

