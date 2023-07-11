import { countries } from "./data.js";
const contentSelect = document.querySelector(".select-content");
const options = document.querySelector(".select-content .options");
const inputSelect = document.querySelector(".select-content input");
const btnSelect = document.querySelector(".btn-select");
const textSelect = document.querySelector(".btn-select span");
const iconSelect = document.querySelector("#icon-select");

btnSelect.onclick = () => toggleActive();

function toggleActive() {
  contentSelect.classList.toggle("active");

  if (contentSelect.classList.contains("active")) {
    inputSelect.focus();
    iconSelect.classList.value = "bx bx-chevron-up";
  } else {
    iconSelect.classList.value = "bx bx-chevron-down";
  }
}

inputSelect.oninput = () => filter();

function filter() {
  const arrFilter = Array.from(countries).filter((country) =>
    country.toLocaleLowerCase().includes(inputSelect.value.toLocaleLowerCase())
  );

  setCountries(arrFilter);
}

function setCountries(arr) {
  options.textContent = null;
  const fragment = document.createDocumentFragment();

  arr.forEach((country) => {
    const li = document.createElement("li");
    li.textContent = country;
    fragment.appendChild(li);

    if (li.textContent === textSelect.textContent) {
      li.style.backgroundColor = "lightgray";
    }

    li.onclick = () => {
      textSelect.textContent = li.textContent;
      inputSelect.value = "";
      toggleActive();
      filter();
    };
  });

  if (arr.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Nenhum item encontrado";
    fragment.appendChild(li);
  }

  options.appendChild(fragment);
}

setCountries(countries);
