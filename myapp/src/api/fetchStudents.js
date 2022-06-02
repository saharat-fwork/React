import axios from "axios";

// export const fetchstudents = async (query) => {
//   const { data } = await axios.get(URL, {
//     params: {
//       q: query,
//       units: "metric",
//       APPID: API_KEY,
//     },
//   });
//   return data;
// };

export const fetchStudents = async () => {
  console.log("- fetchstudents");
  const { data } = await axios.get("http://localhost:4000/getstudents");
  return data;
};
