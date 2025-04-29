/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

//make a function that generates a random name, occupation, and rate
function makePerson() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;
  return { name, occupation, rate };
}
const jobPeople = Array.from({ length: NUM_FREELANCERS }, makePerson);
console.log(jobPeople);

//write a function to return the average rate and log to the console to test
function getAverageRate(freelancers) {
  if (freelancers.length === 0) return 0;
  const totalRate = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  return totalRate / freelancers.length;
}

//this is the variable to pull the average rate
const averageRate = getAverageRate(jobPeople);
console.log(`Average rate: $${averageRate}`);

//write a component function to represent a single freelancer

function rateCard(freelancer) {
  const card = document.createElement("div");
  card.className = "rateCard";

  const nameLancer = document.createElement("h3");
  nameLancer.textContent = freelancer.name;

  const jobLancer = document.createElement("p");
  jobLancer.textContent = `Occupation: ${freelancer.occupation}`;

  const rateLancer = document.createElement("p");
  rateLancer.textContent = `Rate: $${freelancer.rate} per hour`;

  card.appendChild(nameLancer);
  card.appendChild(jobLancer);
  card.appendChild(rateLancer);

  return card;
}

//write a component function to represent the array of freelancers
function QuoteRateCards(freelancers) {
  const article = document.createElement("article");
  article.classList.add("rateCards");

  freelancers.forEach((freelancer) => {
    const cardRates = rateCard(freelancer); // rateCard returns a <div> element
    article.appendChild(cardRates);
  });

  return article;
}
//write a component function to represent the average rate of all freelancers

function AverageRateParagraph(rate) {
  const p = document.createElement("p");
  p.textContent = `The average rate is $${averageRate}`;
  return p;
}
// === Render ===
function render() {
  const $app = document.querySelector("#app");
  const averageRate = getAverageRate(jobPeople);
  $app.innerHTML = `
      <h1>Freelancer Forum</h1>
    `;
  const avgRateEl = AverageRateParagraph(averageRate);
  $app.appendChild(avgRateEl);
  const quoteCards = QuoteRateCards(jobPeople);
  $app.appendChild(quoteCards);
}
render();
