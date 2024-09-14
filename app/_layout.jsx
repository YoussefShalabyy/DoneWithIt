import AuthContext from "@/auth/context";
import { router, Slot } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import authStorage from "../auth/authStorage";

const InitialLayout = () => {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    const token = authStorage.get();
    if (!token) return;
    setUser(jwtDecode(token));
  }, []);

  useEffect(() => {
    if (user) {
      router.replace("(tabs)");
    } else {
      router.replace("login");
    }
  }, [user]);
  return <Slot />;
};

export default function RootLayout() {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <InitialLayout />
    </AuthContext.Provider>
  );
}
