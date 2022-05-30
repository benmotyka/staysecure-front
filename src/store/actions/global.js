import { useRecoilState, useResetRecoilState } from "recoil";
import { globalLoaderAtom } from "../state/global";

const useGlobalLoader = () => {
  const [loader, setLoader] = useRecoilState(globalLoaderAtom);

  const addToLoader = (event) => {
    setLoader((previousEvents) => [...previousEvents, event]);
  };

  const resetLoader = useResetRecoilState(globalLoaderAtom);

  const removeFromLoader = (event) => {
    setLoader((previousEvents) => previousEvents.filter(item => item !== event));
  }

  return { loaderStatus: !!loader.length, startGlobalLoader: addToLoader, stopGlobalLoader: removeFromLoader, resetLoader };
};

export { useGlobalLoader };
