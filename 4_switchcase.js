let day = 5;

switch(day){
    case 0 :
        day = "Sunday";
        console.log(`The day is ${day}`);
        break;
    
    case 1 :
        day = "Monday"; 
        console.log(`The day is ${day}`);   
        break;
    
    case 2 :
        day = "Tuesday";
        console.log(`The day is ${day}`);
        break;
        
    case 3 :
        day = "Wednesday";
        console.log(`The day is ${day}`);
        break;
        
     case 4 :
        day = "Thursday";
        console.log(`The day is ${day}`);
        break;
        
     case 5 :
        day = "Friday";
        console.log(`The day is ${day}`);
        break;
        
     case 6 :
        day = "Saturday";
        console.log(`The day is ${day}`);
        break;
        
     default :
        console.log("Please select a valid day...");   

}

let browser = "edge";

switch(browser){
    case "chrome":
        console.log("Launch the chrome browser");
        break;
    
    case "firefox":
        console.log("Launch the firefox browser");
        break;
    
    case "edge":
        console.log("Launch the edge browser");
        break;
     
    default :
        console.log("Please select the valid browser");  
        break; 
  

}