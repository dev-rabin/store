import axios from "axios";

const BASE_URL = "http://localhost:3001/api/category";

async function fetchCategories() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log("fetchCategories response.data : ", response.data);
    return response.data;
  } catch (error) {
    console.error("fetchCategories error:", error);
    throw new Error("Failed to fetch categories");
  }
}

export { fetchCategories };
