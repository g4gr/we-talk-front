import { Dispatch, ReactNode, createContext, useContext } from "react";
import { useValidateToken } from "@/hooks/auth/useValidateToken";
import { UserData } from "@/types";

//User Initial State skelton
const userInitialState: UserData = {
  id: undefined,
  username: undefined,
  email: undefined,
  imageURL: undefined,
};

//Context Props
interface ContextProps {
  user: UserData | undefined;
  setUser: Dispatch<UserData>;
  isLoading: boolean;
  setIsLoading: Dispatch<boolean>;
}

//User context
export const userContext = createContext<ContextProps>({
  user: userInitialState,
  setUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

//User context PROVIDER
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  //Tries to validate token (if there's a previous cookie setted in document)
  const { isLoading, setIsLoading, user, setUser } = useValidateToken();
  //☝ REMEMBER! inside there's a useEffect that executes every time app is started

  return (
    <userContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </userContext.Provider>
  );
};

export function useUserContext() {
  return useContext(userContext);
}
