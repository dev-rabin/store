import API from "../services/api";

export const fetchCategories = async () => {
  try {
    const res = await API.get("/categories");
    return res.data.categories;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProducts = async () => {
  try {
    const res = await API.get("/products");
    return res.data.products;
  } catch (error) {
    console.error(error);
  }
};

export const fetchProduct = async (id) => {
  try {
    const res = await API.get(`/products/${id}`);
    return res.data.product;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (data) => {
  try {
    const res = await API.post("/login", data);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const signup = async (data) => {
  try {
    const res = await API.post("/signup", data);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const logout = async () => {
  try {
    const res = await API.post("/logout");
    localStorage.removeItem("token");
    return res.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const getProfile = async () => {
  const res = await API.get("/profile");
  return res.data;
};