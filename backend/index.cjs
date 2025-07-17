const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });



const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());

const headerRoutes = require("./routes/headerRoutes");
app.use("/api/header-config", headerRoutes);

const heroRoutes = require("./routes/heroRoutes");
app.use("/api/hero-section", heroRoutes);

const secondSectionRoutes = require("./routes/secondSectionRoutes");
app.use("/api/second-section", secondSectionRoutes);

const aboutUsRoutes = require("./routes/aboutUsRoutes");
app.use("/api/about-us", aboutUsRoutes);

const servicesSection = require("./routes/servicesRoutes");
app.use("/api/services",servicesSection);

const whoWeAreSection = require("./routes/whoweareRoutes");
app.use("/api/who-we-are",whoWeAreSection);

const feedbacksRoutes = require("./routes/feedbacks");
app.use("/api/feedbacks", feedbacksRoutes);

const statesRoutes = require("./routes/states");
app.use("/api/states", statesRoutes);


const projectRoutes = require("./routes/projects");
app.use("/api/projects", projectRoutes);

const bestPriceRoutes = require("./routes/bestPrices");
app.use("/api/bestPrices", bestPriceRoutes);

const subscribeRoutes = require("./routes/subscribeRoutes");
app.use("/api/subscribe-section", subscribeRoutes);

const subscribersRoutes = require("./routes/subscribers");
app.use("/api/subscribers", subscribersRoutes);

const footerRoutes = require("./routes/footer");
app.use("/api/footer", footerRoutes);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
