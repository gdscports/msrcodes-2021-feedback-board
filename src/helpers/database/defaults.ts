import {Question} from './types';

export const defaultQuestions: Question[] = [
  {
    label: 'Enjoyment',
    text: 'How much did you enjoy this event?',
    type: 'sentiment',
  },
  {
    label: 'Learning',
    text: 'How much did you learn from this event?',
    type: 'sentiment',
  },
  {
    label: 'Question',
    text: 'Based on this event, what question would you like to ask?',
    type: 'freetext',
  },
];
