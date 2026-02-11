// src/services/slider.js
import api from "@/core/axios";

export const getMainSlider = () => {
  return api.get("/mainSlider");
};
