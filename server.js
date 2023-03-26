const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://127.0.0.1:5500", // Update this to the URL of your frontend server
  methods: ["POST"], // Explicitly allow the POST method
  allowedHeaders: ["Content-Type"], // Allow Content-Type header
}));

const API_KEY = "INSERT_YOUR_KEY_HERE"; // This is my new key : see notes - don't upload or it will leaked.
const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files (HTML, CSS, JS)
app.use("/", express.static("public"));
app.use("*", express.static("public"));

app.post("/generate-text", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0.7,
      max_tokens: 50,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log("API response:", response); // Log the API response

    res.send(response.data.choices[0].text.trim());
  } catch (error) {
    console.error(`Error while generating text: ${error.message}`);
    res.status(500).send("Error while generating text.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

