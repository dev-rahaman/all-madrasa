"use client";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const redirect = (url) => {
    if (url) {
      router.push(url);
    }
  };

  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormEmpty = () => {
    for (const field in formData) {
      if (formData[field] === "") {
        return true;
      }
    }
    return false;
  };

  const authInfo = {
    redirect,
    isFormEmpty,
    handleInputChange,
    formData,
    setFormData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
