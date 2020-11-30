console.log('welcome to Employee Wage Computation')
         const IS_PART_TIME = 2;
         const IS_FULL_TIME = 1;
         const PART_TIME_HOURS = 4;
         const FULL_TIME_HOURS = 8;
         const WAGE_PER_HOUR = 20;
       
         let empHrs = 0;
            empCheck = Math.floor(Math.random() * 10) % 3;
       
         switch (empCheck) {
                 case IS_FULL_TIME:
                 empHrs = FULL_TIME_HOURS;
                 console.log("Employee is Present");
                 break;
       
                 case IS_PART_TIME:
                 empHrs = PART_TIME_HOURS;
                 console.log("Employee is Present");
                 break;
                 default:console.log("Employee is Abscent");
                  empHrs = 0;
              }
               let empWage = empHrs * WAGE_PER_HOUR;
               console.log("emp Wage: " + empWage);

