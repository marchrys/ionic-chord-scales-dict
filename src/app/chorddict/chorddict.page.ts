import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TranslateConfigService } from '../translate-config.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chorddict',
  templateUrl: './chorddict.page.html',
  styleUrls: ['./chorddict.page.scss'],
})
export class ChorddictPage implements OnInit {
  selectedLanguage:string;

  elementTypes = [
    {
      name: {
        en: '(major)',
        fr: '(majeur)',
        el: 'μείζονα'
      },
      intervals: [10, 18]
    },
    {
      name: {
        en: 'm',
        fr: 'm',
        el: 'm'
      },
      intervals: [8, 18]
    },
    {
      name: {
        en: 'dim',
        fr: 'dim',
        el: 'dim'
      },
      intervals: [8, 16]
    },
    {
      name: {
        en: 'aug',
        fr: 'aug',
        el: 'aug'
      },
      intervals: [10, 20]
    },
    {
      name: {
        en: '7',
        fr: '7',
        el: '7'
      },
      intervals: [10, 18, 26]
    },
    {
      name: {
        en: 'M7',
        fr: 'M7',
        el: 'M7'
      },
      intervals: [10, 18, 28]
    },
    {
      name: {
        en: 'm7',
        fr: 'm7',
        el: 'm7'
      },
      intervals: [8, 18, 26]
    },
    {
      name: {
        en: 'm7(b5)',
        fr: 'm7(b5)',
        el: 'm7(b5)'
      },
      intervals: [10, 16, 26]
    },
    {
      name: {
        en: 'dim7',
        fr: 'dim7',
        el: 'dim7'
      },
      intervals: [8, 16, 24]
    },
    {
      name: {
        en: 'mM7',
        fr: 'mM7',
        el: 'mM7'
      },
      intervals: [8, 18, 28]
    },
    {
      name: {
        en: 'augM7',
        fr: 'augM7',
        el: 'augM7'
      },
      intervals: [10, 20, 28]
    },
    {
      name: {
        en: 'sus4',
        fr: 'sus4',
        el: 'sus4'
      },
      intervals: [13, 18]
    },
    {
      name: {
        en: 'sus2',
        fr: 'sus2',
        el: 'sus2'
      },
      intervals: [5, 18]
    },
    {
      name: {
        en: '7sus4',
        fr: '7sus4',
        el: '7sus4'
      },
      intervals: [13, 18, 26]
    },
    {
      name: {
        en: '7sus2',
        fr: '7sus2',
        el: '7sus2'
      },
      intervals: [5, 18, 26]
    },
    {
      name: {
        en: 'aug7',
        fr: 'aug7',
        el: 'aug7'
      },
      intervals: [10, 20, 26]
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
  rootKey = 'chordRootName';
  typeKey = 'chordTypeName';

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
        this.roots.push(note.name.en);
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
    const selectedRoot = this.dataService.notes.find((note) => note.name.en === this.selectedRootName);
    // Selecting the type of the element
    const selectedType = this.elementTypes.find((type) => type.name[this.selectedLanguage] === this.selectedTypeName);
 
    // Adding the root to the element notes
    this.elementNotes.push(selectedRoot);

    // Adding the other element notes
    selectedType.intervals.forEach((interval) => {
      const note = this.dataService.notes.find((note) => note.value === selectedRoot.value + interval);
      this.elementNotes.push(note);
    });

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
      await this.storage.set(this.rootKey, selectedRoot.name.en);
      await this.storage.set(this.typeKey, selectedType.name[this.selectedLanguage]);
    }
  }

}
