console.log('welcome to Employee Wage Computation')
const IS_PART_TIME = 2;
const IS_FULL_TIME = 1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;

function getWorkingHours(empCheck) {

      switch (empCheck) {
            case IS_FULL_TIME:
                  console.log("Employee is Present");
                  return FULL_TIME_HOURS;
            case IS_PART_TIME:
                  console.log("Employee is Present");
                  return PART_TIME_HOURS;
            default: console.log("Employee is Abscent");
                  return 0;
      }
}
let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;

function calcDailyWage(empHrs) {
      return empHrs * WAGE_PER_HOUR;
}
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
      totalWorkingDays++;
      let empCheck = Math.floor(Math.random() * 10) % 3;
      let empHrs = getWorkingHours(empCheck);
      totalEmpHrs += empHrs;
      empDailyWageArr.push(calcDailyWage(empHrs));
      empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
      empDailyHrsMap.set(totalWorkingDays, empHrs);
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

//UC7A       
function sum(dailyWage) {
      totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays + "Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

function totalWages(totalWage, dailyWage) {
      return totalWage + dailyWage;
}
console.log("UC7A- EmpWage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC7B
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
      dailyCntr++;
      return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC7C
function fulltimeWage(dailyWage) {
      return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C- Daily Wage Filter When Fulltime Wage Earned");
console.log(fullDayWageArr);

//UC7D
function findFulltimeWage(dailyWage) {
      return dailyWage.includes("160");
}
console.log("UC 7D - First time FullTime wage was earned on day :" + mapDayWithWageArr.find(findFulltimeWage));

//UC7E
function isAllFulltimeWage(dailyWage) {
      return dailyWage.includes("160");
}
console.log("UC 7E - check All Elements have FullTime wage :" + fullDayWageArr.every(isAllFulltimeWage));

//UC7F
function isAnyPartTimeWage(dailyWage) {
      return dailyWage.includes("80");
}
console.log("UC 7F - check If Any Part Time wage :" + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G
function totalDaysWorked(numOfDays, dailyWage) {
      if (dailyWage > 0) return numOfDays + 1;
      return numOfDays;
}
console.log("UC 7G - Number of Days Emp Worked :" + empDailyWageArr.reduce(totalDaysWorked, 0));
console.log(empDailyWageMap);

//UC8
function totalWages(totalWage, dailyWage) {
      return totalWage + dailyWage;
}
console.log("UC8 - Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC9
const findTotal = (totalVal, dailyVal) => {
      return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("UC9 - Emp Wage with Arrow.: " + "Total Hours: " + totalHours + "Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, Map) => {
      if (value == 8) fullWorkingDays.push(key);
      else if (value == 4) partWorkingDays.push(key);
      else nonWorkingDays.push(key);
});

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);
