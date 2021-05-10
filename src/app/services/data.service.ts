import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  notes = [
    {
      name: {
        en: 'C',
        fr: 'Do',
        el: 'Ντο'
      },
      value: 1,
      isRoot: true,
    },
    {
      name: {
        en: 'C#',
        fr: 'Do#',
        el: 'Ντο#'
      },
      value: 3,
      isRoot: true,
    },
    {
      name: {
        en: 'Db',
        fr: 'Réb',
        el: 'Ρεb'
      },
      value: 4,
      isRoot: true,
    },
    {
      name: {
        en: 'D',
        fr: 'Ré',
        el: 'Ρε'
      },
      value: 6,
      isRoot: true,
    },
    {
      name: {
        en: 'D#',
        fr: 'Ré#',
        el: 'Ρε#'
      },
      value: 8,
      isRoot: true,
    },
    {
      name: {
        en: 'Eb',
        fr: 'Mib',
        el: 'Μιb'
      },
      value: 9,
      isRoot: true,
    },
    {
      name: {
        en: 'E',
        fr: 'Mi',
        el: 'Μι'
      },
      value: 11,
      isRoot: true,
    },
    {
      name: {
        en: 'Fb',
        fr: 'Fab',
        el: 'Φαb'
      },
      value: 12,
      isRoot: false,
    },
    {
      name: {
        en: 'E#',
        fr: 'Mi#',
        el: 'Μι#'
      },
      value: 13,
      isRoot: false,
    },
    {
      name: {
        en: 'F',
        fr: 'Fa',
        el: 'Φα'
      },
      value: 14,
      isRoot: true,
    },
    {
      name: {
        en: 'F#',
        fr: 'Fa#',
        el: 'Φα#'
      },
      value: 16,
      isRoot: true,
    },
    {
      name: {
        en: 'Gb',
        fr: 'Solb',
        el: 'Σολb'
      },
      value: 17,
      isRoot: true,
    },
    {
      name: {
        en: 'G',
        fr: 'Sol',
        el: 'Σολ'
      },
      value: 19,
      isRoot: true,
    },
    {
      name: {
        en: 'G#',
        fr: 'Sol#',
        el: 'Σολ#'
      },
      value: 21,
      isRoot: true,
    },
    {
      name: {
        en: 'Ab',
        fr: 'Lab',
        el: 'Λαb'
      },
      value: 22,
      isRoot: true,
    },
    {
      name: {
        en: 'A',
        fr: 'La',
        el: 'Λα'
      },
      value: 24,
      isRoot: true,
    },
    {
      name: {
        en: 'A#',
        fr: 'La#',
        el: 'Λα#'
      },
      value: 26,
      isRoot: true,
    },
    {
      name: {
        en: 'Bb',
        fr: 'Sib',
        el: 'Σιb'
      },
      value: 27,
      isRoot: true,
    },
    {
      name: {
        en: 'B',
        fr: 'Si',
        el: 'Σι'
      },
      value: 29,
      isRoot: true,
    },
    {
      name: {
        en: 'Cb',
        fr: 'Dob',
        el: 'Ντοb'
      },
      value: 30,
      isRoot: false,
    },
    {
      name: {
        en: 'B#',
        fr: 'Si#',
        el: 'Σι#'
      },
      value: 31,
      isRoot: false,
    },

    {
      name: {
        en: 'C',
        fr: 'Do',
        el: 'Ντο'
      },
      value: 32,
      isRoot: true,
    },
    {
      name: {
        en: 'C#',
        fr: 'Do#',
        el: 'Ντο#'
      },
      value: 34,
      isRoot: true,
    },
    {
      name: {
        en: 'Db',
        fr: 'Réb',
        el: 'Ρεb'
      },
      value: 35,
      isRoot: true,
    },
    {
      name: {
        en: 'D',
        fr: 'Ré',
        el: 'Ρε'
      },
      value: 37,
      isRoot: true,
    },
    {
      name: {
        en: 'D#',
        fr: 'Ré#',
        el: 'Ρε#'
      },
      value: 39,
      isRoot: true,
    },
    {
      name: {
        en: 'Eb',
        fr: 'Mib',
        el: 'Μιb'
      },
      value: 40,
      isRoot: true,
    },
    {
      name: {
        en: 'E',
        fr: 'Mi',
        el: 'Μι'
      },
      value: 42,
      isRoot: true,
    },
    {
      name: {
        en: 'Fb',
        fr: 'Fab',
        el: 'Φαb'
      },
      value: 43,
      isRoot: false,
    },
    {
      name: {
        en: 'E#',
        fr: 'Mi#',
        el: 'Μι#'
      },
      value: 44,
      isRoot: false,
    },
    {
      name: {
        en: 'F',
        fr: 'Fa',
        el: 'Φα'
      },
      value: 45,
      isRoot: true,
    },
    {
      name: {
        en: 'F#',
        fr: 'Fa#',
        el: 'Φα#'
      },
      value: 47,
      isRoot: true,
    },
    {
      name: {
        en: 'Gb',
        fr: 'Solb',
        el: 'Σολb'
      },
      value: 48,
      isRoot: true,
    },
    {
      name: {
        en: 'G',
        fr: 'Sol',
        el: 'Σολ'
      },
      value: 50,
      isRoot: true,
    },
    {
      name: {
        en: 'G#',
        fr: 'Sol#',
        el: 'Σολ#'
      },
      value: 52,
      isRoot: true,
    },
    {
      name: {
        en: 'Ab',
        fr: 'Lab',
        el: 'Λαb'
      },
      value: 53,
      isRoot: true,
    },
    {
      name: {
        en: 'A',
        fr: 'La',
        el: 'Λα'
      },
      value: 55,
      isRoot: true,
    },
    {
      name: {
        en: 'A#',
        fr: 'La#',
        el: 'Λα#'
      },
      value: 57,
      isRoot: true,
    },
    {
      name: {
        en: 'Bb',
        fr: 'Sib',
        el: 'Σιb'
      },
      value: 58,
      isRoot: true,
    },
    {
      name: {
        en: 'B',
        fr: 'Si',
        el: 'Σι'
      },
      value: 60,
      isRoot: true,
    },
    {
      name: {
        en: 'Cb',
        fr: 'Dob',
        el: 'Ντοb'
      },
      value: 61,
      isRoot: false,
    },
    {
      name: {
        en: 'B#',
        fr: 'Si#',
        el: 'Σι#'
      },
      value: 62,
      isRoot: false,
    },
  ];


  constructor() { }
}
