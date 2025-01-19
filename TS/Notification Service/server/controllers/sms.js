import axios from "axios";

export const postSMS = async (req, res) => {
  try {
    console.log("API called");

    // Replace the URL with the correct provider
    const response = await axios.post('http://localhost:8071/api/sms/provider1', {
      phone: "+8801712345678",
      text: "Hello, world!",
    });

    // Log and return meaningful response data
    console.log("Response from microservice:", response.data);
    res.status(200).json({ message: response.data });
  } catch (error) {
    console.error("Error while sending SMS:", error.message);

    // Return a 500 status for errors
    res.status(500).json({ message: error.message });
  }
};
