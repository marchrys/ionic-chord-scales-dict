import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-scaledict',
  templateUrl: './scaledict.page.html',
  styleUrls: ['./scaledict.page.scss'],
})
export class ScaledictPage implements OnInit {

  // Array with all the notes
  notes = [
    {
      name: {
        en: 'C',
        fr: 'Do'
      },
      value: 1,
      isRoot: true,
    },
    {
      name: {
        en: 'C#',
        fr: 'Do#'
      },
      value: 3,
      isRoot: true,
    },
    {
      name: {
        en: 'Db',
        fr: 'Réb'
      },
      value: 4,
      isRoot: true,
    },
    {
      name: {
        en: 'D',
        fr: 'Ré'
      },
      value: 6,
      isRoot: true,
    },
    {
      name: {
        en: 'D#',
        fr: 'Ré#'
      },
      value: 8,
      isRoot: true,
    },
    {
      name: {
        en: 'Eb',
        fr: 'Mib'
      },
      value: 9,
      isRoot: true,
    },
    {
      name: {
        en: 'E',
        fr: 'Mi'
      },
      value: 11,
      isRoot: true,
    },
    {
      name: {
        en: 'Fb',
        fr: 'Fab'
      },
      value: 12,
      isRoot: false,
    },
    {
      name: {
        en: 'E#',
        fr: 'Mi#'
      },
      value: 13,
      isRoot: false,
    },
    {
      name: {
        en: 'F',
        fr: 'Fa'
      },
      value: 14,
      isRoot: true,
    },
    {
      name: {
        en: 'F#',
        fr: 'Fa#'
      },
      value: 16,
      isRoot: true,
    },
    {
      name: {
        en: 'Gb',
        fr: 'Solb'
      },
      value: 17,
      isRoot: true,
    },
    {
      name: {
        en: 'G',
        fr: 'Sol'
      },
      value: 19,
      isRoot: true,
    },
    {
      name: {
        en: 'G#',
        fr: 'Sol#'
      },
      value: 21,
      isRoot: true,
    },
    {
      name: {
        en: 'Ab',
        fr: 'Lab'
      },
      value: 22,
      isRoot: true,
    },
    {
      name: {
        en: 'A',
        fr: 'La'
      },
      value: 24,
      isRoot: true,
    },
    {
      name: {
        en: 'A#',
        fr: 'La#'
      },
      value: 26,
      isRoot: true,
    },
    {
      name: {
        en: 'Bb',
        fr: 'Sib'
      },
      value: 27,
      isRoot: true,
    },
    {
      name: {
        en: 'B',
        fr: 'Si'
      },
      value: 29,
      isRoot: true,
    },
    {
      name: {
        en: 'Cb',
        fr: 'Dob'
      },
      value: 30,
      isRoot: false,
    },
    {
      name: {
        en: 'B#',
        fr: 'Si#'
      },
      value: 31,
      isRoot: false,
    },

    {
      name: {
        en: 'C',
        fr: 'Do'
      },
      value: 32,
      isRoot: true,
    },
    {
      name: {
        en: 'C#',
        fr: 'Do#'
      },
      value: 34,
      isRoot: true,
    },
    {
      name: {
        en: 'Db',
        fr: 'Réb'
      },
      value: 35,
      isRoot: true,
    },
    {
      name: {
        en: 'D',
        fr: 'Ré'
      },
      value: 37,
      isRoot: true,
    },
    {
      name: {
        en: 'D#',
        fr: 'Ré#'
      },
      value: 39,
      isRoot: true,
    },
    {
      name: {
        en: 'Eb',
        fr: 'Mib'
      },
      value: 40,
      isRoot: true,
    },
    {
      name: {
        en: 'E',
        fr: 'Mi'
      },
      value: 42,
      isRoot: true,
    },
    {
      name: {
        en: 'Fb',
        fr: 'Fab'
      },
      value: 43,
      isRoot: false,
    },
    {
      name: {
        en: 'E#',
        fr: 'Mi#'
      },
      value: 44,
      isRoot: false,
    },
    {
      name: {
        en: 'F',
        fr: 'Fa'
      },
      value: 45,
      isRoot: true,
    },
    {
      name: {
        en: 'F#',
        fr: 'Fa#'
      },
      value: 47,
      isRoot: true,
    },
    {
      name: {
        en: 'Gb',
        fr: 'Solb'
      },
      value: 48,
      isRoot: true,
    },
    {
      name: {
        en: 'G',
        fr: 'Sol'
      },
      value: 50,
      isRoot: true,
    },
    {
      name: {
        en: 'G#',
        fr: 'Sol#'
      },
      value: 52,
      isRoot: true,
    },
    {
      name: {
        en: 'Ab',
        fr: 'Lab'
      },
      value: 53,
      isRoot: true,
    },
    {
      name: {
        en: 'A',
        fr: 'La'
      },
      value: 55,
      isRoot: true,
    },
    {
      name: {
        en: 'A#',
        fr: 'La#'
      },
      value: 57,
      isRoot: true,
    },
    {
      name: {
        en: 'Bb',
        fr: 'Sib'
      },
      value: 58,
      isRoot: true,
    },
    {
      name: {
        en: 'B',
        fr: 'Si'
      },
      value: 60,
      isRoot: true,
    },
    {
      name: {
        en: 'Cb',
        fr: 'Dob'
      },
      value: 61,
      isRoot: false,
    },
    {
      name: {
        en: 'B#',
        fr: 'Si#'
      },
      value: 62,
      isRoot: false,
    },
  ];

  elementTypes = [
    {
      name: {
        en: 'major',
        fr: 'majeure'
      },
      intervals: [5, 10, 13, 18, 23, 28],
    },
    {
      name: {
        en: 'harmonic minor',
        fr: 'mineure harmonique'
      },
      intervals: [5, 8, 13, 18, 21, 28],
    },
    {
      name: {
        en: 'natural minor',
        fr: 'mineure naturelle'
      },
      intervals: [5, 8, 13, 18, 21, 26],
    },
    {
      name: {
        en: 'ionian mode',
        fr: 'mode ionien (de do)'
      },
      intervals: [5, 10, 13, 18, 23, 28],
    },
    {
      name: {
        en: 'dorian mode',
        fr: 'mode dorien (de ré)'
      },
      intervals: [5, 8, 13, 18, 23, 26],
    },
    {
      name: {
        en: 'phrygian mode',
        fr: 'mode phrygien (de mi)'
      },
      intervals: [3, 8, 13, 18, 21, 26],
    },
    {
      name: {
        en: 'lydian mode',
        fr: 'mode lydien (de fa)'
      },
      intervals: [5, 10, 15, 18, 23, 28],
    },
    {
      name: {
        en: 'mixolydian mode',
        fr: 'mode mixolydien (de sol)'
      },
      intervals: [5, 10, 13, 18, 23, 26],
    },
    {
      name: {
        en: 'aeolian mode',
        fr: 'mode aéolien (de la)'
      },
      intervals: [5, 8, 13, 18, 21, 26],
    },
    {
      name: {
        en: 'locrian mode',
        fr: 'mode locrien (de si)'
      },
      intervals: [3, 8, 13, 16, 21, 26],
    },
    {
      name: {
        en: 'blues pentatonic',
        fr: 'pentatonique blues'
      },
      intervals: [8, 13, 16, 18, 26],
    },
    {
      name: {
        en: 'major pentatonic',
        fr: 'pentatonique majeure'
      },
      intervals: [5, 10, 18, 23],
    },
    {
      name: {
        en: 'minor pentatonic',
        fr: 'pentatonique mineure'
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
  elementnotesColor = 'primary';

  // Storage keys
  rootKey = 'scaleRootName';
  typeKey = 'scaleTypeName';

  constructor(private storage: Storage) { }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();

    // Creating the roots array from the notes
    this.notes.forEach((note) => {
      if(note.isRoot) {
        this.roots.push(note.name.fr);
      }
    });

    // Creating the names array
    this.elementTypes.forEach((elementType) => {
      this.elementNames.push(elementType.name.fr);
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
    const selectedRoot = this.notes.find((note) => note.name.fr === this.selectedRootName);
    // Selecting the type of the element
    const selectedType = this.elementTypes.find((type) => type.name.fr === this.selectedTypeName);

    // Adding the root to the element notes
    this.elementNotes.push(selectedRoot);

    // Adding the other element notes
    selectedType.intervals.forEach((interval) => {
      const note = this.notes.find((note) => note.value === selectedRoot.value + interval);
      this.elementNotes.push(note);
    });
    const noteOctave = this.notes.find((note) => note.value === selectedRoot.value + 31);
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
      this.elementnotesColor = 'danger';
      this.elementnotesString = 'Cette gamme a des doubles altérations. Cependant, cette application n\'utilise pas de doubles altérations, dans un souci de simplicité.';
    } else {
      this.elementnotesColor = 'primary';
      this.elementNotes.forEach((note) => {
        this.elementnotesString += note.name.fr + ' ';
      });

      // Saving the root and name of the chord
      await this.storage.set(this.rootKey, selectedRoot.name.fr);
      await this.storage.set(this.typeKey, selectedType.name.fr);
    }
  }

}

