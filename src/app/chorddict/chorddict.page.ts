import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chorddict',
  templateUrl: './chorddict.page.html',
  styleUrls: ['./chorddict.page.scss'],
})
export class ChorddictPage implements OnInit {

  // Array with all the notes
  notes = [
    {
      name: 'C',
      value: 1,
      isRoot: true,
    },
    {
      name: 'C#',
      value: 3,
      isRoot: true,
    },
    {
      name: 'Db',
      value: 4,
      isRoot: true,
    },
    {
      name: 'D',
      value: 6,
      isRoot: true,
    },
    {
      name: 'D#',
      value: 8,
      isRoot: true,
    },
    {
      name: 'Eb',
      value: 9,
      isRoot: true,
    },
    {
      name: 'E',
      value: 11,
      isRoot: true,
    },
    {
      name: 'Fb',
      value: 12,
      isRoot: false,
    },
    {
      name: 'E#',
      value: 13,
      isRoot: false,
    },
    {
      name: 'F',
      value: 14,
      isRoot: true,
    },
    {
      name: 'F#',
      value: 16,
      isRoot: true,
    },
    {
      name: 'Gb',
      value: 17,
      isRoot: true,
    },
    {
      name: 'G',
      value: 19,
      isRoot: true,
    },
    {
      name: 'G#',
      value: 21,
      isRoot: true,
    },
    {
      name: 'Ab',
      value: 22,
      isRoot: true,
    },
    {
      name: 'A',
      value: 24,
      isRoot: true,
    },
    {
      name: 'A#',
      value: 26,
      isRoot: true,
    },
    {
      name: 'Bb',
      value: 27,
      isRoot: true,
    },
    {
      name: 'B',
      value: 29,
      isRoot: true,
    },
    {
      name: 'Cb',
      value: 30,
      isRoot: false,
    },
    {
      name: 'B#',
      value: 31,
      isRoot: false,
    },

    {
      name: 'C',
      value: 32,
      isRoot: true,
    },
    {
      name: 'C#',
      value: 34,
      isRoot: true,
    },
    {
      name: 'Db',
      value: 35,
      isRoot: true,
    },
    {
      name: 'D',
      value: 37,
      isRoot: true,
    },
    {
      name: 'D#',
      value: 39,
      isRoot: true,
    },
    {
      name: 'Eb',
      value: 40,
      isRoot: true,
    },
    {
      name: 'E',
      value: 42,
      isRoot: true,
    },
    {
      name: 'Fb',
      value: 43,
      isRoot: false,
    },
    {
      name: 'E#',
      value: 44,
      isRoot: false,
    },
    {
      name: 'F',
      value: 45,
      isRoot: true,
    },
    {
      name: 'F#',
      value: 47,
      isRoot: true,
    },
    {
      name: 'Gb',
      value: 48,
      isRoot: true,
    },
    {
      name: 'G',
      value: 50,
      isRoot: true,
    },
    {
      name: 'G#',
      value: 52,
      isRoot: true,
    },
    {
      name: 'Ab',
      value: 53,
      isRoot: true,
    },
    {
      name: 'A',
      value: 55,
      isRoot: true,
    },
    {
      name: 'A#',
      value: 57,
      isRoot: true,
    },
    {
      name: 'Bb',
      value: 58,
      isRoot: true,
    },
    {
      name: 'B',
      value: 60,
      isRoot: true,
    },
    {
      name: 'Cb',
      value: 61,
      isRoot: false,
    },
    {
      name: 'B#',
      value: 62,
      isRoot: false,
    },
  ];

  elementTypes = [
    {
      name: '(majeur)',
      intervals: [10, 18]
    },
    {
      name: 'm',
      intervals: [8, 18]
    },
    {
      name: 'dim',
      intervals: [8, 16]
    },
    {
      name: 'aug',
      intervals: [10, 20]
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

  constructor() { }

  ngOnInit() {
    // Creating the roots array from the notes
    this.notes.forEach((note) => {
      if(note.isRoot) {
        this.roots.push(note.name);
      }
    });

    // Creating the names array
    this.elementTypes.forEach((elementType) => {
      this.elementNames.push(elementType.name);
    });
    // Sorting the names array alphabetically in ascendant order
    this.elementNames.sort();

    // Initializing the variables
    this.selectedRootName = this.roots[0];
    this.selectedTypeName = this.elementNames[0];
  }

  rootOrTypeChanged(){
    this.buildElementString();
  }

  buildElementString() {
    // Initializing the element notes array
    this.elementNotes = [];

    // Selecting the root of the element
    const selectedRoot = this.notes.find((note) => note.name === this.selectedRootName);
    // Selecting the type of the element
    const selectedType = this.elementTypes.find((type) => type.name === this.selectedTypeName);

    // Adding the root to the element notes
    this.elementNotes.push(selectedRoot);

    // Adding the other element notes
    selectedType.intervals.forEach((interval) => {
      const note = this.notes.find((note) => note.value === selectedRoot.value + interval);
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
      this.elementnotesColor = 'danger';
      this.elementnotesString = 'Cet accord a des doubles atérations. Cependant, cette application n\'utilise pas de doubles altérations, dans un souci de simplicité.';
    } else {
      this.elementnotesColor = 'primary';
      this.elementNotes.forEach((note) => {
        this.elementnotesString += note.name + ' ';
      });
    }
  }

}
