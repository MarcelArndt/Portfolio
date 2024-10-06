import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  constructor() { }
  isCurrentLanguageEnglish:boolean = false;
  text = {
    german: {
            navigation:['Über Mich','Skills','Projekte','Kontakt'],
            headline:['Erstellen von nahtloser,<br>digitalen Erfahrungen.','Deutscher Frontend Entwickler<br>- Marcel Arndt -', `Trete in Kontakt`],
            aboutMe:['Hallo, ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in Bad Salzuflen. Motiviert von den grenzenlosen Möglichkeiten in der IT bin ich begeistert von der Gestaltung visuell ansprechender und intuitiver Websites und Anwendungen.',
                     'Da ich hinsichtlich meiner Arbeitsumgebung flexibel bin, kann ich sowohl vor Ort in Bad Salzuflen, Bielefeld oder im anderem Umland sowie auch remote effektiv arbeiten.',
                     'Ich bin aufgeschlossen und suche immer nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten ständig zu verbessern.',
                     'In dem Beruf geht es beim Programmieren nicht nur darum, Code zu schreiben - es ist eine kreative Form der Problemlösung. Ich bin stolz auf meine Fähigkeit, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu destillieren. Auf diese Weise helfe ich Ihnen, Ihre Ziele zu erreichen und Ihre Visionen zum Leben zu erwecken.'

            ],
            skills:['Auf meinem Weg habe ich an verschiedenen Projekten gearbeitet und dabei eine Reihe von Frontend-Technologien und -Konzepten eingesetzt. Ich bin offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Landschaft der Webentwicklung an der Spitze zu bleiben.',
                    'Auf der Suche nach anderen Skills?',
                    'Nehmen Sie gerne Kontakt mit mir auf. Ich freue mich darauf, meine bisherigen Kenntnisse zu erweitern.',
                    'In Kontakt kommen'
            ],
            portfolio:['Entdecken Sie hier eine Auswahl meiner Arbeiten -<br> interagieren Sie mit Projekten, um meine Fähigkeiten in Aktion zu sehen.',
              {name: 'Project Join',
                text: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag & Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
                tools: "JavaScript | HTML | CSS"
              },
              {name: 'Phantom Forest',
                text: 'Ein einfaches Jump-and-Run-Spiel mit objektorientiertem Ansatz. Hilf der Heldin, im Kampf gegen böse Monster im nah gelegenden Wald',
                tools: "JavaScript | HTML | CSS"
              },
              {name: 'Pokédex',
                text: 'Basierend auf der PokéAPI - einer einfachen Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
                tools: "JavaScript | HTML | CSS"
              },

            ],
            contact:['Sie haben ein Problem zu lösen?','Kontaktieren Sie mich über dieses Formular. Ich bin daran interessiert, von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.<br><br>Benötigen Sie einen Frontend-Entwickler?', 'Kontaktiere Mich!', "Dein Name", "Deine E-Mail", "Deine Nachricht", "Nachricht senden"],
            footer:[],
            impressum:[],
    },
    english: {
      navigation:['About me','Skills','Projects','Contact'],
      headline:['Crafting seamless, <br>digital experiences.', 'A German Frontend Developer<br>- Marcel Arndt -', `Lets talk`],
      aboutMe:['Hi, I’m a german speaking Frontend Developer based in Bad Salzuflen. Motivated by the limitless possibilities in IT, I am enthusiastic about designing visually appealing and intuitive websites and applications.',
               'Because I am flexible in terms of my work environment, I can work effectively in Bad Salzuflen, Bielefeld or other surrounding areas as well as remotely.',
               'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
               `In my profession, programming isn't just about writing code - it's a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.`
              ],
      skills:['My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methodologies to Continously enhance my skills and stay ahead in the ever-evolving landscape of web development.',
              'Looking for another skill?',
              'Feel free to contact me. I look forward to expanding on my previous knowledge.',
              'Get in touch'
      ],
      portfolio:['Explore a selection of my work here -<br> Interact with projects to see my skills in action.',
              {name: 'Project Join',
                text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
                tools: "JavaScript | HTML | CSS"
              },
              {name: 'Phantom Forest',
                text: 'A simple Jump-and-Run game based on an object-oriented approach. Help your Hero to fight against any Evil in the nearest forest.',
                tools: "JavaScript | HTML | CSS"
              },
              {name: 'Pokédex',
                text: 'Based on the PokéAPI - A simple library that provides and catalogues pokemon information.',
                tools: "JavaScript | HTML | CSS"
              },
      ],
      contact:['Got a problem to solve?','Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.<br><br>Need a Frontend developer?', 'Contact me!', "Your Name", "Your E-Mail", "Your Message", "Send Massage"],
      footer:[],
      impressum:[],
    }
  }

  LanguagePath = this.text.german;
  setLanguagePath(){
    this.LanguagePath = this.isCurrentLanguageEnglish ? this.text.english : this.text.german;
  }

  getText(categories:string, index:number, subCategories:string = ""){
    if(subCategories != ""){
      return 'this.LanguagePath' + '.' + categories + `[${index}]` + '.' + subCategories
    }
    return 'this.LanguagePath' + '.' + categories + `[${index}]`
  }
}
