import axios from "axios";

export const sendSMS = async (providers, payload, type) => {
  for (const provider of providers) {
    try {
      const response = await axios.post(provider, payload);
      console.log(`${type} sent successfully via:`, provider);
      return response.data;
    } catch (error) {
      console.error(
        `Failed to send ${type} via:`,
        provider,
        "Error:",
        error.response?.data || error.message
      );
    }
  }
  throw new Error(`All ${type} providers failed.`);
};
