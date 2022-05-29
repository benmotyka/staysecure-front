import { useRecoilState, useResetRecoilState } from "recoil";
import { globalLoaderAtom } from "../state/global";

const useGlobalLoader = () => {
  const [loader, setLoader] = useRecoilState();

  const addToLoader = (event) => {
    setLoader((previousEvents) => [...previousEvents, event]);
  };

  const resetLoader = useResetRecoilState(globalLoaderAtom);

  return { loaderStatus: !!loader.length, setLoader: addToLoader, resetLoader };
};

export { useGlobalLoader };
