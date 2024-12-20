import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dataProtectText } from './temp-protect-data/data-protect';
import { imprintText } from './temp-imprint/imprint';
type Language = 'german' | 'english';
@Injectable({
  providedIn: 'root'

})
export class TranslationsService {

  constructor() { }
  text = {
    german: {
      navigation: ['Über Mich', 'Skills', 'Projekte', 'Kontakt'],
      headline: ['Erstellen von nahtlosen,<br>digitalen Erfahrungen.', 'Deutscher Frontend Entwickler<br>- Marcel Arndt -', `Kontaktiere mich`],
      aboutMe: ['Hallo, ich bin ein deutschsprachiger Frontend-Entwickler aus Bad Salzuflen. Motiviert von den grenzenlosen Möglichkeiten in der IT bin ich begeistert von der Gestaltung visuell ansprechender und intuitiver Websites und Anwendungen.',
        'Durch meine flexible Arbeitsweise bin ich in der Lage, sowohl vor Ort in Bad Salzuflen, Bielefeld und Umgebung als auch remote effizient zu arbeiten.',
        'Ich bin aufgeschlossen und suche immer nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
        'Programmieren ist mehr als nur Code schreiben – es ist kreative Problemlösung. Meine Aufgabe ist es, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln, um Ihre Ziele zu erreichen und Ihre Visionen zu verwirklichen.',
        'Über mich',
        'Flexibilität',
        'Herausforderung',
        'Lösungsorientiert'
      ],
      skills: ['Auf meinem Weg habe ich an verschiedenen Projekten gearbeitet und dabei eine Reihe von Frontend-Technologien und -Konzepten eingesetzt. Ich bin offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Landschaft der Webentwicklung an der Spitze zu bleiben.',
        'Auf der Suche nach anderen Skills?',
        'Nehmen Sie gerne Kontakt mit mir auf. Ich freue mich darauf, meine bisherigen Kenntnisse zu erweitern.',
        'Kontaktiere mich',
        'Meine Skills'
      ],
      portfolio: ['Entdecken Sie hier eine Auswahl meiner Arbeiten -<br>interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.'],
      projectOne: ['Project Join', 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.', 'JavaScript | HTML | CSS'],
      projectTwo: ['Phantom Forest', 'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf der Heldin, im Kampf gegen böse Monster im nah gelegenden Wald', 'JavaScript | HTML | CSS | OOP'],
      projectThree: ['DABubble', 'Eine Plattform ähnlich wie Slack oder Discord: Die Web-App DABubble wurde mit Angular entwickelt und ermöglicht Nutzern, in Kanälen oder privat zu chatten.', 'Angular | TypeScript | HTML | CSS'],
      contact: ['Kontakt', 'Sie haben ein Problem zu lösen?', 'Benötigen Sie einen Frontend-Entwickler?', 'Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen', 'Kontaktieren Sie mich.', "Dein Name", "Deine E-Mail", "Deine Nachricht", "Nachricht senden", `Ich habe die `, `Datenschutzerklärung`, ` gelesen und stimme der darin beschriebenen Verarbeitung meiner Daten zu.`],
      footer: ['Startseite', 'Impressum', 'Datenschutz'],
      impressum: [imprintText[0]],
      dataprotect: [dataProtectText[0]],
      succesEmail: ['E-Mail erfolgreich versendet', 'Deine E-Mail ist auf dem Weg zu mir. Schön von dir zu hören. Ich werde so schnell wir mir möglich ist bei dir melden.', 'Email wurde nicht versendet!', 'Oh nein! Da lief wohl etwas schief. Bitte überprüfe nochmal deine Eingaben.', 'Fenster schließen'],
      errorContact: ['Bitte gebe einen validen Namen ein!', 'Bitte gebe eine valide E-Mail ein!', 'Bitte gebe ein Text ein!', 'Bitte akzeptiere den Datenschutz!'],
    },
    english: {
      navigation: ['About me', 'Skills', 'Projects', 'Contact'],
      headline: ['Crafting seamless, <br>digital experiences.', 'A German Frontend Developer<br>- Marcel Arndt -', `Lets talk`],
      aboutMe: ['Hi, I’m a german speaking Frontend Developer based in Bad Salzuflen. Motivated by the limitless possibilities in IT, I am enthusiastic about designing visually appealing and intuitive websites and applications.',
        'Thanks to my flexible working style, I am able to work efficiently both on-site in Bad Salzuflen, Bielefeld, and the surrounding areas, as well as remotely.',
        'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
        `In my profession, programming isn't just about writing code - it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.`,
        'About Me',
        'Flexibility',
        'Challenge',
        'Solution-Focused'
      ],
      skills: ['My journey has involved working on diverse<br>projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.',
        'Looking for another skill?',
        'Feel free to contact me. I look forward to expanding on my previous knowledge.',
        'Get in touch',
        'My Skills'
      ],
      portfolio: ['Explore a selection of my work here -<br>Interact with projects to see my skills in action.'],
      projectOne: ['Project Join', 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.', 'JavaScript | HTML | CSS'],
      projectTwo: ['Phantom Forest', 'A simple Jump-and-Run game based on an object-oriented approach. Help your Hero to fight against any Evil in the nearest forest.', 'JavaScript | HTML | CSS | OOP'],
      projectThree: ['DABubble', 'A platform similar to Slack or Discord. The web app DABubble was developed with Angular and provides users with the ability to chat in channels or privately.', 'Angular | TypeScript | HTML | CSS'],
      contact: ['Contact', 'Got a problem to solve?', 'Need a Frontend developer?', 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.', 'Contact me!', "Your Name", "Your E-Mail", "Your Message", "Send Massage", `I've read the `, `privacy policy`, ` and agree to the processing of my data as outlined.`],
      footer: ['Home', 'Imprint', 'Data-Protection'],
      dataprotect: [dataProtectText[1]],
      impressum: [imprintText[1]],
      succesEmail: ['E-Mail successfully Submitted', 'Your E-Mail is right on the way to me. Glad to hear from you. I am working hard for it to write your back as soon ans possible.', 'Email not Submitted!', 'Oh no! something went wrong. Please check your fields.', 'close Windows'],
      errorContact: ['Please enter a correct name!', 'Please enter a correct Email address!', 'Please enter a Message!', 'Please read Data Protection!'],
    }
  }

  private language = new BehaviorSubject<'german' | 'english'>('german');
  currentLanguage = this.language.asObservable();
  isCurrentLanguageEnglish: boolean = false;

  switchLanguage(lang: 'german' | 'english') {
    this.language.next(lang);
  }

  getTexts(lang: 'german' | 'english') {
    return this.text[lang];
  }

  switchOnClick() {
    this.isCurrentLanguageEnglish = !this.isCurrentLanguageEnglish;
    this.switchLanguage(this.isCurrentLanguageEnglish ? 'english' : 'german');
  }

}
