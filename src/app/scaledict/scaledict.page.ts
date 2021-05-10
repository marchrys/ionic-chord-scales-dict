import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TranslateConfigService } from '../translate-config.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-scaledict',
  templateUrl: './scaledict.page.html',
  styleUrls: ['./scaledict.page.scss'],
})
export class ScaledictPage implements OnInit {
  selectedLanguage:string;

  elementTypes = [
    {
      name: {
        en: 'major',
        fr: 'majeure',
        el: 'μείζονα'
      },
      intervals: [5, 10, 13, 18, 23, 28],
    },
    {
      name: {
        en: 'harmonic minor',
        fr: 'mineure harmonique',
        el: 'αρμονική ελάσσονα'
      },
      intervals: [5, 8, 13, 18, 21, 28],
    },
    {
      name: {
        en: 'natural minor',
        fr: 'mineure naturelle',
        el: 'φυσική ελάσσονα'
      },
      intervals: [5, 8, 13, 18, 21, 26],
    },
    {
      name: {
        en: 'ionian mode',
        fr: 'mode ionien (de do)',
        el: 'ιωνικός τρόπος'
      },
      intervals: [5, 10, 13, 18, 23, 28],
    },
    {
      name: {
        en: 'dorian mode',
        fr: 'mode dorien (de ré)',
        el: 'δωρικός τρόπος'
      },
      intervals: [5, 8, 13, 18, 23, 26],
    },
    {
      name: {
        en: 'phrygian mode',
        fr: 'mode phrygien (de mi)',
        el: 'φρυγικός τρόπος'
      },
      intervals: [3, 8, 13, 18, 21, 26],
    },
    {
      name: {
        en: 'lydian mode',
        fr: 'mode lydien (de fa)',
        el: 'λύδιος τρόπος'
      },
      intervals: [5, 10, 15, 18, 23, 28],
    },
    {
      name: {
        en: 'mixolydian mode',
        fr: 'mode mixolydien (de sol)',
        el: 'μιξολύδιος τρόπος'
      },
      intervals: [5, 10, 13, 18, 23, 26],
    },
    {
      name: {
        en: 'aeolian mode',
        fr: 'mode aéolien (de la)',
        el: 'αιόλιος τρόπος'
      },
      intervals: [5, 8, 13, 18, 21, 26],
    },
    {
      name: {
        en: 'locrian mode',
        fr: 'mode locrien (de si)',
        el: 'λόκριος τρόπος'
      },
      intervals: [3, 8, 13, 16, 21, 26],
    },
    {
      name: {
        en: 'blues pentatonic',
        fr: 'pentatonique blues',
        el: 'μπλουζ πεντατονική'
      },
      intervals: [8, 13, 16, 18, 26],
    },
    {
      name: {
        en: 'major pentatonic',
        fr: 'pentatonique majeure',
        el: 'μείζονα πεντατονική'
      },
      intervals: [5, 10, 18, 23],
    },
    {
      name: {
        en: 'minor pentatonic',
        fr: 'pentatonique mineure',
        el: 'ελάσσονα πεντατονική'
      },
      intervals: [8, 13, 18, 26],
    },
  ];

  // Array with the notes that can be element roots
  roots = [];
  elementNames = [];

  // Array containing the notes of the selected element
  elementNotes = [];

  selectedRootName: string;
  selectedTypeName: string;

  elementnotesString: string;
  hasErrors = false;

  // Storage keys
  rootKey = 'scaleRootName';
  typeKey = 'scaleTypeName';

  constructor(private storage: Storage, 
              private translateConfigService: TranslateConfigService,
              private dataService: DataService
  ) { 
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
   }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

    // Creating the roots array from the notes
    this.dataService.notes.forEach((note) => {
      if(note.isRoot) {
        this.roots.push(note.name[this.selectedLanguage]);
      }
    });

    // Creating the names array
    this.elementTypes.forEach((elementType) => {
      this.elementNames.push(elementType.name[this.selectedLanguage]);
    });
    // Sorting the names array alphabetically in ascendant order
    this.elementNames.sort();

    // Retrieving saved values from Storage
    const storedRoot = await this.storage.get(this.rootKey);
    const storedType = await this.storage.get(this.typeKey);

    // If the retreived values are not null, we set the vars to this values
    // Else, we set the vars to the element 0 of each array
    if(storedRoot !== null) {
      this.selectedRootName = storedRoot;
    } else {
      this.selectedRootName = this.roots[0];
    }

    if(storedType !== null) {
      this.selectedTypeName = storedType;
    } else {
      this.selectedTypeName = this.elementNames[0];
    }

    // Calling the buildElementString method to display the notes
    this.buildElementString();
  }

  rootOrTypeChanged(){
    this.buildElementString();
  }

  async buildElementString() {
    // Initializing the element notes array
    this.elementNotes = [];

    // Selecting the root of the element
    const selectedRoot = this.dataService.notes.find((note) => note.name[this.selectedLanguage] === this.selectedRootName);
    // Selecting the type of the element
    const selectedType = this.elementTypes.find((type) => type.name[this.selectedLanguage] === this.selectedTypeName);

    // Adding the root to the element notes
    this.elementNotes.push(selectedRoot);

    // Adding the other element notes
    selectedType.intervals.forEach((interval) => {
      const note = this.dataService.notes.find((note) => note.value === selectedRoot.value + interval);
      this.elementNotes.push(note);
    });
    const noteOctave = this.dataService.notes.find((note) => note.value === selectedRoot.value + 31);
    this.elementNotes.push(noteOctave);

    // Checking if some notes are undefined
    let undefinedNotes = false;
    for(let i=0; i<this.elementNotes.length; i++){
      if(this.elementNotes[i] === undefined){
        undefinedNotes = true;
        break;
      }
    }

    // Building the element's notes string or the double acidentals' message
    this.elementnotesString = '';
    if(undefinedNotes){
      this.hasErrors = true;
    } else {
      this.hasErrors = false;
      this.elementNotes.forEach((note) => {
        this.elementnotesString += note.name[this.selectedLanguage] + ' ';
      });

      // Saving the root and name of the chord
      await this.storage.set(this.rootKey, selectedRoot.name[this.selectedLanguage]);
      await this.storage.set(this.typeKey, selectedType.name[this.selectedLanguage]);
    }
  }

}

