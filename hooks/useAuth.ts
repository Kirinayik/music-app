import { signIn, signOut } from "next-auth/react";

export const useAuth = () => {
  const handleSignIn = () => {
    return signIn("spotify");
  };

  const handleSignOut = () => {
    return signOut();
  };

  return { handleSignIn, handleSignOut };
};
