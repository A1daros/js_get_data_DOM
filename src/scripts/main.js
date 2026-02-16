'use strict';

const spanData = document.querySelectorAll('.population');
const convertedSpanData = Array.from(spanData).map((span) => {
  span.textContent = span.textContent.trim().replace(/[,\s]/g, '');

  if (Number.isNaN(Number(span.textContent))) {
    return 0;
  }

  const population = Number(span.textContent);

  return population;
});

const totalPopulation = convertedSpanData.reduce((acc, population) => {
  return acc + population;
}, 0);
const averagePopulation = Math.round(
  totalPopulation / convertedSpanData.length,
);

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString();
averagePopulationElement.textContent = averagePopulation.toLocaleString();
