import axios from "axios";

export const GetCourse = async (callback) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/getAll`);
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};

export function isAuthenticated() {
  return localStorage.getItem("token") !== null;
}

export async function getCourseDetail(title) {
  try {
    if (!isAuthenticated()) {
      throw new Error("Unauthorized: Pengguna harus login untuk melihat detail kursus.");
    }

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(`https://easy-class-407401.et.r.appspot.com/api/course/detailsFromTitle?title=${title}`, { headers });

    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
}
