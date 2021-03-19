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

    console.log(this.chordNotes);
  }

}
