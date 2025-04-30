const form = document.querySelector('form');

form.addEventListener('submit', (eventObject) => {
  // prevent bydefault submition of form
  eventObject.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

/* ----------------------  Solution -> 1 ------------------------------> 


  if(height === '' || height <= 0 || isNaN(height)){
    results.innerText = 'Please give a Valid Hieght';
  } else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerText = 'Please give a Valid Weight';
  } else {

    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    if(bmi < 18.6){
      results.innerHTML = `<span>${bmi}</span><br><span>Under Weight</span>`;
    } else if(bmi > 18.6 && bmi < 24.9){
      results.innerHTML = `<span>${bmi}</span><br><span>Normal Range</span>`;
    } else {
      results.innerHTML = `<span>${bmi}</span><br><span>Overweight</span>`;
    }

  }
---------------------------  Solution -> 1 --------------------------------- */
  
 
/* ------------------------- solution -> 2 ----------------------------------> */

    if(height === '' || height <= 0 || isNaN(height)){
    results.innerText = 'Please give a Valid Hieght';
  } else if(weight === '' || weight <= 0 || isNaN(weight)){
    results.innerText = 'Please give a Valid Weight';
  } else {

    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    let category;

    if(bmi < 18.6){
      category = "Under Weight";
    } else if(bmi > 18.6 && bmi < 24.9){
      category = "Normal Range";
    } else {
      category = "Overweight";
    }
    // add vlaues to result ->
    results.innerHTML = `<span>${bmi}</span><br><span>${category}</span>`;

  }

/*------------------------- Solution -> 2 ------------------------------------*/

})