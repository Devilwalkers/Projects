const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give me valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give me valid weight ${height}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI < 18.6) {
      results.innerHTML = `<span>Under Weight ${BMI}</span>`;
    } else if (BMI >= 18.6 && BMI < 24.9) {
      results.innerHTML = `<span>Normal Weight ${BMI}</span>`;
    } else {
      results.innerHTML = `<span>Overweight ${BMI}</span>`;
    }
  }
});
