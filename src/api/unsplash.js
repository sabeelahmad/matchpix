import axios from "axios";

/* Default axios config setup */
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 8e6db456ef09243a3a3b8b8fae19a7b6bdcfc27e253d2cab471999c88d548dab"
  }
});
