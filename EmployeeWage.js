console.log('welcome to Employee Wage Computation')
         const IS_PART_TIME = 2;
         const IS_FULL_TIME = 1;
         const PART_TIME_HOURS = 4;
         const FULL_TIME_HOURS = 8;
         const WAGE_PER_HOUR = 20;
         const NUM_OF_WORKING_DAYS = 20;

         function getWorkingHours(empCheck) {
         switch (empCheck) {
                 case IS_FULL_TIME:
                 console.log("Employee is Present");
                 return FULL_TIME_HOURS;
                 case IS_PART_TIME:
                 console.log("Employee is Present");
                 return PART_TIME_HOURS;
                 default:console.log("Employee is Abscent");
                  return 0;
              }
            }
              let empHrs = 0;
              empCheck = Math.floor(Math.random() * 10) % 3;
              for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
                let empCheck = Math.floor(Math.random() * 10) % 3;
                   empHrs += getWorkingHours(empCheck);
                }
                 let empWage = empHrs * WAGE_PER_HOUR;
                 console.log("Total Hrs: " +empHrs+ " emp Wage: " + empWage);
              
