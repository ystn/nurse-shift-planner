import { SessionProvider } from "next-auth/react";
export type AuthProviderProps = {
  children: React.ReactNode;
  session: any;
};

function AuthProvider({ children, session }: AuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AuthProvider;
