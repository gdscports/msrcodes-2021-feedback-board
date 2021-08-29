import {defaultQuestions} from './defaults';
import {Collections, getFromFirestore} from './handlers';
import {Question} from './types';

export const getQuestions = async () =>
  await getFromFirestore<Question>(Collections.questions, defaultQuestions);
