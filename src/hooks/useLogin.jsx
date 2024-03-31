import { useEffect, useState } from "react";
import { getUser } from "../services/auth.service";

export const useLogin = (isPublic) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (token) {
          const user = getUser(token);
          if (user) {
            setFullName(user.fnm);
            setEmail(user.eml);
            setRole(user.rol);
          } else {
            throw new Error("User data not found.");
          }
        } else {
          if (!isPublic) {
            window.location.href = "/";
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        window.location.href = "/"
      }
    };

    fetchUserData();
  }, []);

  return { fullName, email, role };
};
