import { useRecoilState, useResetRecoilState } from "recoil";
import { userAtom } from "../state/user";

const useLogin = () => {
  const [user, setUser] = useRecoilState(userAtom);

  const loginUser = (values) => {
    setUser(values);
  };

  const logoutUser = useResetRecoilState(userAtom)

  return { loginUser, userDetails: user, logoutUser };
};

const useChangeAccountLevel = () => {
  const [user, setUser] = useRecoilState(userAtom);

  const changeAccountLevel = (newLevel) => {
    setUser((previousValues) => ({
      ...previousValues,
      accountLevel: newLevel,
    }));
  };

  return { changeAccountLevel }
};

export { useLogin, useChangeAccountLevel };
