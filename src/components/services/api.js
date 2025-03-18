import axios from "axios";

export const createUser = async (form) => {
  try {
    const response = await axios.post(
      "https://blog-api-t6u0.onrender.com/posts",
      form
    );
    console.log("User created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.response?.data || error);
  }
};

