import { useEffect, useState } from "react";
import { getUser } from "../services/auth.service";

export const useLogin = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      const user = getUser(token);
      setFullName(user.fnm);
      setEmail(user.eml);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return { fullName, email };
};