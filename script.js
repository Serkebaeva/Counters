const counters = document.querySelectorAll(".features-counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const runCounter = () => {
    const target = Number(counter.getAttribute("data-target")); //ч/з NUMBER перевод на числа, без унарного оператора
    const current = +counter.innerText; //Унарный оператор

    const increment = target / 200; //если уменьшить на 100 - будет быстрее, а если 500 - будет медленее...

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(runCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  runCounter();
});
