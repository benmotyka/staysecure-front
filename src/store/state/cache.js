
import { atom } from 'recoil';

const coursesAtom = atom({
    key: 'coursesAtom',
    default: []
  });

const articlesAtom = atom({
    key: 'articlesAtom',
    default: [],
  });
  

export {
    coursesAtom,
    articlesAtom
}
