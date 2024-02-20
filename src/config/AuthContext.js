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
  const [total, setTotal] = useState("0");
  const [nTel, setNTel] = useState("0");
  const [receptionPhone, setReceptionPhone] = useState("0");
  const [desktopPhone, setDesktopPhone] = useState("0");
  const [cordlessPhone, setCordlessPhone] = useState("0");
  const [softPhone, setSoftPhone] = useState("0");
  const [terms, setTerms] = useState("0");
  const [upfrontCost, setUpfrontCost] = useState("0");
  const [selectedTerm, setSelectedTerm] = useState("0");
  const [selectedSetup, setSelectedSetup] = useState("0");
  const [totalSetup, setTotalSetup] = useState("0");
  const [deliveryFee, setDeliveryFee] = useState("0");
  const [totalUpfrontCost, setTotalUpfrontCost] = useState("0");
  const [seatLicense, setSeatLicense] = useState("0");
  const [totalMonthlyCost, setTotalMonthlyCost] = useState("0");
  const [currentNumberCost, setCurrentNumberCost] = useState("0");
  const [planCode, setPlanCode] = useState("");
  const [callingLineUltimateCost, setCallingLineUltimateCost] = useState("");
  
 

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
    setShowValidationMessage,
    total,
    setTotal,
    nTel,
    setNTel,
    receptionPhone,
    setReceptionPhone,
    desktopPhone,
    setDesktopPhone,
    cordlessPhone,
    setCordlessPhone,
    softPhone,
    setSoftPhone,
    terms,
    setTerms,
    upfrontCost,
    setUpfrontCost,
    selectedTerm,
    setSelectedTerm,
    selectedSetup,
    setSelectedSetup,
    totalSetup,
    setTotalSetup,
    deliveryFee,
    setDeliveryFee,
    totalUpfrontCost,
    setTotalUpfrontCost,
    seatLicense,
    setSeatLicense,
    totalMonthlyCost,
    setTotalMonthlyCost,
    currentNumberCost,
    setCurrentNumberCost,
    planCode,
    setPlanCode,
    callingLineUltimateCost,
    setCallingLineUltimateCost,
  };
  return  <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
