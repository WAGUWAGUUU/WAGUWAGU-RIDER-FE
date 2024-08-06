import { api } from "../config/network";

export const changeActivationState = async (id, data) => {
  try {
    await api(`/api/v1/riders/${id}/activation`, "put", { onOff: data });
  } catch (e) {
    console.error("Errors in changeActivationState", error);
  }
};