import multipleFaker from "multiple-faker";

const attributes = {
  name: ["firstName", "lastName", "jobTitle"],
  phone: ["phoneNumber"],
  random: ["number"]
};

const numRows = 5;

const generateData = () => multipleFaker(numRows, attributes);
export default generateData;
