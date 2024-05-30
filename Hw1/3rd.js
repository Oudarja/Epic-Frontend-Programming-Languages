
function drawCalendar(year, month) 
{
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    // It calculates the number of days in the given month using the
    // new Date(year, month + 1, 0).getDate() method, which returns the last day of the month.
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    //It also calculates the day of the week for the first day of the month
    // using the new Date(year, month, 1).getDay() method, where 0 represents
    // Sunday and 6 represents Saturday.
    let firstDayOfMonth = new Date(year, month, 1).getDay();
    // console.log(firstDayOfMonth);
    let calendar = `${monthNames[month]} ${year}\n`;
    calendar += "Su Mo Tu We Th Fr Sa\n";
  
    let day = 1;
    for (let i = 0; i < 6; i++)
    {
        // Here this line adds necessary space
        //if firstday of month is friday then it adds 5 space 

    // Here for each day 2 character space and then an extra space 
    //for the next day of the week
      for(let j=1;j<=firstDayOfMonth;j++)
        calendar+=" ".padStart(2, ' ')+ " ";

     // remaining part will be added as day
      for (let j = 0; j < 7 - firstDayOfMonth; j++) 
      {
        // If day gets bigger than no of days then break
        if (day > daysInMonth)
             break;

        calendar += day.toString().padStart(2, ' ') + " ";
        day++;
      }
      calendar += "\n";
     // for next iteration firstdayofmonth=0  
      firstDayOfMonth = 0;
    }
  
    return calendar;
  }


// February 2023
// For month  0 based indexing used
 console.log(drawCalendar(2024,1));


//   let firstDayOfMonth = new Date(2023,2, 1).getDay();
//   console.log(firstDayOfMonth);
  

  /*

day.toString():This converts the current day value (which is a number) into a string.

.padStart(2, ' '):This is a string method that pads the beginning of the string with
a specified character until the string reaches a certain length.

In this case, padStart(2, ' ') means that if the string is less than 2 characters long, it
will add spaces to the beginning of the string until it reaches a length of 2 characters.

new Date(year, month, 1).getDay();
The reason the 1 is used here is that we want to get the day of the week for the first day of
the month, which is April 1, 2023. If we used a different day of the month (e.g., 15), we would
get the day of the week for the 15th of April, 2023.

  */