import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chorddict',
  templateUrl: './chorddict.page.html',
  styleUrls: ['./chorddict.page.scss'],
})
export class ChorddictPage implements OnInit {

  notes = [
    {
      name: 'C',
      value: 1
    },
    {
      name: 'C#',
      value: 3
    },
    {
      name: 'Db',
      value: 4
    },
    {
      name: 'D',
      value: 6
    },
    {
      name: 'D#',
      value: 8
    },
    {
      name: 'Eb',
      value: 9
    },
    {
      name: 'E',
      value: 11
    },
    {
      name: 'Fb',
      value: 12
    },
    {
      name: 'E#',
      value: 13
    },
    {
      name: 'F',
      value: 14
    },
    {
      name: 'F#',
      value: 16
    },
    {
      name: 'Gb',
      value: 17
    },
    {
      name: 'G',
      value: 19
    },
    {
      name: 'G#',
      value: 21
    },
    {
      name: 'Ab',
      value: 22
    },
    {
      name: 'A',
      value: 24
    },
    {
      name: 'A#',
      value: 26
    },
    {
      name: 'Bb',
      value: 27
    },
    {
      name: 'B',
      value: 29
    },
    {
      name: 'Cb',
      value: 30
    },
    {
      name: 'B#',
      value: 31
    },
  ];

  roots = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B'];

  types = [
    '(majeur)', 'm', 'dim', 'aug'
  ];

  chordNotes = [];

  constructor() { }

  selectedRoot = this.roots[0];
  selectedType = this.types[0];

  ngOnInit() {
    
  }

  rootChanged(){
    alert(JSON.stringify(this.notes.find((note) => note.name === this.selectedRoot)));
  }

}
