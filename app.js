console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  if (typeof count === "number") {
    if (count >= 0) {
      for (let i = 0; i <= count; i++) {
        i % 2 === 1 && console.log(i);
      }
    } else
      for (let i = 0; i >= count; i--)
        i % 2 === -1 && console.log(i);

  } else
    console.log("Sorry, you didn't input a number into this function.");
}
printOdds(34);
printOdds(-32);
printOdds(false);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  const aboveSixteen = `Congrats ${userName}, you can drive`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (typeof userName === 'string' && typeof age === 'number')
    age >= 16 ? console.log(aboveSixteen) : console.log(belowSixteen);
  else
    console.log('You did not enter proper data for this function.');
}

checkAge('Anna', 11);
checkAge('Steve', 33);
checkAge(34);
checkAge(false, 33);
checkAge('Amy', false);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    if (x === 0 && y === 0)
      console.log(`(${x}, ${y}) is the origin`);
    else if (x === 0)
      console.log(`(${x}, ${y}) is on the y axis`);
    else if (y === 0)
      console.log(`(${x}, ${y}) is on the x axis`);
    else if (x > 0 && y > 0)
      console.log(`(${x}, ${y}) is in Quadrant 1`);
    else if (x < 0 && y > 0)
      console.log(`(${x}, ${y}) is in Quadrant 2`);
    else if (x < 0 && y < 0)
      console.log(`(${x}, ${y}) is in Quadrant 3`);
    else if (x > 0 && y < 0)
      console.log(`(${x}, ${y}) is in Quadrant 4`);

  } else
    console.log('You did not enter proper data for this function.');
}

whichQuadrant(4, 3);
whichQuadrant(-3, 0);
whichQuadrant(3, -7);
whichQuadrant(-4, -2);
whichQuadrant(0, 4);
whichQuadrant(0, 0);
whichQuadrant(false, 'harry');

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(side1, side2, side3) {
  if (typeof side1 === 'number' && typeof side2 === 'number' && typeof side3 === 'number') {
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      //you have a triangle
      if (side1 === side2 && side2 === side3)
        console.log(`Sides ${side1}, ${side2}, ${side3} make an equalateral triangle`);
      else if (side1 === side2 || side2 === side3 || side1 === side3)
        console.log(`Sides ${side1}, ${side2}, ${side3} make an isosceles triangle`);
      else
        console.log(`Sides ${side1}, ${side2}, ${side3} make a scalene triangle`);
    } else
      console.log(`Sides ${side1}, ${side2}, ${side3} make an invalid triangle`);
  } else
    console.log('You did not enter proper data for this function.');
}

typeOfTriangle(3, 3, 3);
typeOfTriangle(3, 4, 4);
typeOfTriangle(3, 4, 5);
typeOfTriangle(1, 2, 9);
typeOfTriangle('happy', 3, false);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
//grab the form
const form = document.querySelector('.js-cell-phone-plan');
//grab all the paragraph elements for printing to
const daysLeftOutput = document.querySelector('.js-days-left');
const intendedOutput = document.querySelector('.js-intended');
const overUnderOutput = document.querySelector('.js-over-under');
const byHowMuchOutput = document.querySelector('.js-how-much');
const futurePlanOutput = document.querySelector('.js-plan');
//listen for submit on the form
form.addEventListener('submit', function (e) {
  e.preventDefault();//prevents default action

  //grab input element from DOM
  const planTotalInput = document.querySelector('.js-total-plan-input');
  const daysPastInput = document.querySelector('.js-days-past-input');
  const dataUsedInput = document.querySelector('.js-data-used-input');

  //gets values from inputs and converts to numbers
  const planTotal = Number(planTotalInput.value);
  const daysPast = Number(daysPastInput.value);
  const dataUsed = Number(dataUsedInput.value);
  
  //checks if nothing or non-numbers were enters and gives error (and clears results) if needed
  if (
    planTotalInput.value.trim() === '' ||
    daysPastInput.value.trim() === '' ||
    dataUsedInput.value.trim() === '' ||
    isNaN(planTotal) ||
    isNaN(daysPast) ||
    isNaN(dataUsed)
  ) {
    daysLeftOutput.textContent = '';
    intendedOutput.textContent = '';
    overUnderOutput.textContent = '';
    byHowMuchOutput.textContent = '';
    futurePlanOutput.textContent = '';
    alert('You did not enter proper data for this calculator.');
    return;
  }
  cellPhoneUsage(planTotal, daysPast, dataUsed);
})

function cellPhoneUsage(planLimit, day, usage) {
  if (planLimit <= usage) {
    daysLeftOutput.textContent = 'You have used all your data for this month.';
    intendedOutput.textContent = '';
    overUnderOutput.textContent = '';
    byHowMuchOutput.textContent = '';
    futurePlanOutput.textContent = '';
    return;
  }

  //calc days used and days remaining
  const daysLeft = 30 - day;
  daysLeftOutput.textContent = `${day} days used, ${daysLeft} days remaining`;

  //calc intendedUsagePerDay
  const intendedUsagePerDay = planLimit / 30;
  intendedOutput.textContent = `Intended average daily use: ${intendedUsagePerDay.toFixed(2)} GB/day`;

  //calc actualUsagePerDay
  const actualUsagePerDay = usage / day;
  const roundedActual = actualUsagePerDay.toFixed(2);

  //calc monthly overage/underage
  const overUnder = planLimit - (actualUsagePerDay * 30);
  const roundedOverUnder = Math.abs(overUnder).toFixed(2);
  const dataLeft = planLimit - usage;
  const dataLeftPerDay = dataLeft / daysLeft;
  const roundedLeftPerDay = dataLeftPerDay.toFixed(2);

  //check which is higher and message about this
  //log how far over or under current rate will lead to
  //recommendation to reach dataLimit

  if (actualUsagePerDay > intendedUsagePerDay) {
    overUnderOutput.textContent = `You are EXCEEDING your average daily use (${roundedActual} GB/day).`;
    byHowMuchOutput.textContent = `Continuing this high usage, you'll exceed your data plan by ${roundedOverUnder} GB.`;
    futurePlanOutput.textContent = `To stay below your data plan, use no more than ${roundedLeftPerDay} GB/day`;
  }
  else if (actualUsagePerDay < intendedUsagePerDay) {
    overUnderOutput.textContent = `You are BELOW your average daily use (${roundedActual} GB/day).`;
    byHowMuchOutput.textContent = `Continuing this low usage, you'll be ${roundedOverUnder} GB under your plan limit.`;
    futurePlanOutput.textContent = `To maximize usage of your data plan, use ${roundedLeftPerDay} GB/day`;
  }
  else {
    overUnderOutput.textContent = `You are RIGHT ON TARGET for your average daily use (${roundedActual} GB/day).`;
    byHowMuchOutput.textContent = '';
    futurePlanOutput.textContent = '';
  }
}

/*Test cases:
cellPhoneUsage(100, 15, 56);
cellPhoneUsage(100, 5, 10);
cellPhoneUsage(90, 9, 27);
//cellPhoneUsage("100", 15, 50);*/