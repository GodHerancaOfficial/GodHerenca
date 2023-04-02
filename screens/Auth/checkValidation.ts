export const validateUsername = (input:string) => {
  // username length check
  return input.length >= 5;
};

//email validation
export const  validateEmail = (email: string) =>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//phone number validation
export const validatePhoneNumber = (phoneNumber:any)=> {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}