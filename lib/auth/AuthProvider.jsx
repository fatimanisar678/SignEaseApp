import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { loginApi, signupApi } from "../api/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [bootstrapped, setBootstrapped] = useState(false);
  const [token, setToken] = useState(null);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // TODO: Persist these values later using SecureStore/AsyncStorage.
    setBootstrapped(true);
  }, []);

  async function completeOnboarding() {
    setHasCompletedOnboarding(true);
  }

  async function login({ email, password }) {
    setLoading(true);
    try {
      const res = await loginApi({ email, password });
      setToken(res.token);
      return res;
    } finally {
      setLoading(false);
    }
  }

  async function signup({ name, email, password }) {
    setLoading(true);
    try {
      const res = await signupApi({ name, email, password });
      setToken(res.token);
      return res;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setToken(null);
  }

  const value = useMemo(
    () => ({
      bootstrapped,
      token,
      hasCompletedOnboarding,
      loading,
      completeOnboarding,
      login,
      signup,
      logout,
    }),
    [bootstrapped, token, hasCompletedOnboarding, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


