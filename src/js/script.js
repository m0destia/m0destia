const weatherapp = "https://weatherapp-1kaq.onrender.com/";
const stphdesign = "https://stphdesigner.vercel.app/";
const hiperprice = "https://hiperprice-supermercado.vercel.app/";

const weatherappCard = document.getElementById("weather_app");
const stphdesignCard = document.getElementById("stphdesigner");
const hiperpriceCard = document.getElementById("hiperprice");

const projectButton = document.getElementById("project_button");
const contractButton = document.getElementById("contract_button");

const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

projectButton.addEventListener("click", () => {
  projects.scrollIntoView({ behavior: "smooth" });
});

contractButton.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
});

weatherappCard.addEventListener("click", () => {
  window.open(weatherapp, "_blank").focus();
});

stphdesignCard.addEventListener("click", () => {
  window.open(stphdesign, "_blank").focus();
});

hiperpriceCard.addEventListener("click", () => {
  window.open(hiperprice, "_blank").focus();
});
