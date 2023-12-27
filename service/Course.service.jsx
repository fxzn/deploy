import axios from "axios";

export const GetCourse = async (callback) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`);
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};


export async function GetCourseDetail(title) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`https://easy-class-407401.et.r.appspot.com/api/course/detailsFromTitle?title=${title}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
}

