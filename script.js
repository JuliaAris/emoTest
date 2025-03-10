document.addEventListener("DOMContentLoaded", function () {
  const months = [
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
  const correctSeasons = {
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

  // Генерация случайного числа от 3 до 5
  const numberOfRows = Math.floor(Math.random() * 3) + 3;

  // Перемешивание массива и выбор случайных месяцев
  const shuffledMonths = [...months].sort(() => 0.5 - Math.random());
  const selectedMonths = shuffledMonths.slice(0, numberOfRows);

  const tbody = document.getElementById("month-rows");

  if (tbody) {
    // Очистка tbody перед добавлением строк
    tbody.innerHTML = "";

    // Создание строк таблицы
    selectedMonths.forEach((month, index) => {
      const tr = document.createElement("tr");

      const tdMonth = document.createElement("td");
      tdMonth.textContent = month;
      tr.appendChild(tdMonth);

      ["winter", "spring", "summer", "autumn"].forEach((season) => {
        const td = document.createElement("td");
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `month${index}`;
        input.value = season;
        label.appendChild(input);
        td.appendChild(label);
        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });

    document
      .getElementById("complete-task")
      .addEventListener("click", function () {
        let correctAnswers = 0;

        selectedMonths.forEach((month, index) => {
          const selectedSeason = document.querySelector(
            `input[name="month${index}"]:checked`
          );
          if (
            selectedSeason &&
            selectedSeason.value === correctSeasons[month]
          ) {
            correctAnswers++;
          }
        });

        console.log(`${correctAnswers} из ${numberOfRows}`);
      });
  } else {
    console.error('Элемент с id "month-rows" не найден');
  }
});
