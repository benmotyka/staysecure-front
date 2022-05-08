
import { atom } from 'recoil';

const coursesAtom = atom({
    key: 'courses',
    default: []
  });

const articlesAtom = atom({
    key: 'articles',
    default: [],
  });

const finishedQuizesAtom = atom({
  key: 'finishedQuizes',
  default: null
})
  

export {
    coursesAtom,
    articlesAtom,
    finishedQuizesAtom
}
