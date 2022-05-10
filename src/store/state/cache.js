
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

const startedCourses = atom({
  key: 'startedCourses',
  default: []
})

const finishedCourses = atom({
  key: 'finishedCourses',
  default: []
})

const accountCourses = atom({
  key: 'accountCourses',
  default: null
})
export {
    coursesAtom,
    articlesAtom,
    finishedQuizesAtom,
    startedCourses,
    finishedCourses,
    accountCourses
}
