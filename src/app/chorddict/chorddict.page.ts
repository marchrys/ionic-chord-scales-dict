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

  chordTypes = [
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

  // Array with the notes that can be chord roots
  roots = [];
  chordNames = [];

  // Array containing the notes of the selected chord
  chordNotes = [];

  selectedRootName: string;
  selectedTypeName: string;

  chordnotesString: string;
  chordnotesColor = 'primary';

  constructor() { }

  ngOnInit() {
    this.notes.forEach((note) => {
      if(note.isRoot) {
        this.roots.push(note.name);
      }
    });

    this.chordTypes.forEach((chordType) => {
      this.chordNames.push(chordType.name);
    });

    this.selectedRootName = this.roots[0];
    this.selectedTypeName = this.chordNames[0];
  }

  rootOrTypeChanged(){
    this.buildChordString();
  }

  buildChordString() {
    // Initializing the chord notes array
    this.chordNotes = [];

    // Selecting the root of the chord
    const selectedRoot = this.notes.find((note) => note.name === this.selectedRootName);
    // Selecting the type of the chord
    const selectedType = this.chordTypes.find((type) => type.name === this.selectedTypeName);

    // Adding the root to the chord notes
    this.chordNotes.push(selectedRoot);

    selectedType.intervals.forEach((interval) => {
      const note = this.notes.find((note) => note.value === selectedRoot.value + interval);
      this.chordNotes.push(note);
    });

    let undefinedNotes = false;
    for(let i=0; i<this.chordNotes.length; i++){
      if(this.chordNotes[i] === undefined){
        undefinedNotes = true;
        break;
      }
    }

    this.chordnotesString = '';
    if(undefinedNotes){
      this.chordnotesColor = 'danger';
      this.chordnotesString = 'Cet accord a des doubles atérations. Cependant, cette application n\'utilise pas de doubles altérations, dans un souci de simplicité.';
    } else {
      this.chordnotesColor = 'primary';
      this.chordNotes.forEach((note) => {
        this.chordnotesString += note.name + ' ';
      });
    }
  }

}
