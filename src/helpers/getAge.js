const getAge = (birthdayDate) => {
  const dateNow = new Date().getFullYear();
  const dateBirthday = new Date(birthdayDate).getFullYear();
  return dateNow - dateBirthday;
};

export default getAge;
