import { createContext, ReactNode } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
  async function signIn() {
    console.log("Entrou");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Igor Vinicius",
          avatarUrl: "https://github.com/igorviniciussantana.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
