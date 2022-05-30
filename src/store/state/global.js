
import { atom } from 'recoil';

const globalLoaderAtom = atom({
    key: 'globalLoaderAtom',
    default: []
  });

export {
    globalLoaderAtom,
}
