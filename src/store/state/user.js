
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const userAtom = atom({
    key: 'userAtom',
    default: {
      email: '',
      jwt: '',
      userId: '',
      name: '',
      accountLevel: 'basic'
    },
    effects_UNSTABLE: [persistAtom],
  });
  

export {
    userAtom
}
