import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  authToken: "",
  authUser: {},
});

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [company, setCompany] = useState("");
  const [employee, setEmployee] = useState("");
  const [country, setCountry] = useState("");
  const [primary, setPrimary] = useState("");
  const [isValidEmail, setIsValidEmail] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState("");
  const [isValidLastName, setIsValidLastName] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState("");
  const [isFormValid, setIsFormValid] = useState("");
  const [showValidationMessage, setShowValidationMessage] = useState(false);


  const contextValue = {
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    company,
    setCompany,
    employee,
    setEmployee,
    country,
    setCountry,
    primary,
    setPrimary,
    isValidEmail,
    setIsValidEmail,
    isValidFirstName,
    setIsValidFirstName,
    isValidLastName,
    setIsValidLastName,
    isValidPhoneNumber,
    setIsValidPhoneNumber,
    isFormValid,
    setIsFormValid,
    showValidationMessage,
    setShowValidationMessage
  };
  return  <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
