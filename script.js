document.addEventListener("DOMContentLoaded", function () {
  const MONTHS = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const CORRECT_SEASONS = {
    Январь: "winter",
    Февраль: "winter",
    Март: "spring",
    Апрель: "spring",
    Май: "spring",
    Июнь: "summer",
    Июль: "summer",
    Август: "summer",
    Сентябрь: "autumn",
    Октябрь: "autumn",
    Ноябрь: "autumn",
    Декабрь: "winter",
  };

  const generateRandomNumber = () => Math.floor(Math.random() * 3) + 3;

  const shuffleArray = (array) => [...array].sort(() => 0.5 - Math.random());

  const updateTable = (selectedMonths) => {
    const tableBody = document.getElementById("month-rows");

    if (tableBody) {
      tableBody.innerHTML = "";

      selectedMonths.forEach((month, index) => {
        const row = document.createElement("tr");

        const monthCell = document.createElement("td");
        monthCell.textContent = month;
        row.appendChild(monthCell);

        ["winter", "spring", "summer", "autumn"].forEach((season) => {
          const cell = document.createElement("td");
          const label = document.createElement("label");
          const input = document.createElement("input");
          input.type = "radio";
          input.name = `month${index}`;
          input.value = season;
          label.appendChild(input);
          cell.appendChild(label);
          row.appendChild(cell);
        });

        tableBody.appendChild(row);
      });
    } else {
      console.error('Элемент с id "month-rows" не найден');
    }
  };

  const validateAnswers = (selectedMonths) => {
    let correctAnswers = 0;

    selectedMonths.forEach((month, index) => {
      const selectedSeason = document.querySelector(
        `input[name="month${index}"]:checked`
      );
      if (selectedSeason && selectedSeason.value === CORRECT_SEASONS[month]) {
        correctAnswers++;
      }
    });

    console.log(`${correctAnswers} из ${selectedMonths.length}`);
  };

  const numberOfRows = generateRandomNumber();
  const selectedMonths = shuffleArray(MONTHS).slice(0, numberOfRows);

  updateTable(selectedMonths);

  document
    .getElementById("complete-task")
    .addEventListener("click", () => validateAnswers(selectedMonths));
});
