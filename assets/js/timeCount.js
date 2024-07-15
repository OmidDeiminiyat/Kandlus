import TimeCheck from '../js/controller/TimeUpdate.js';

function recordTimeSpent(Code, TimeSpend){

  const seo = Code;
const updatedData = { TimeSpend: TimeSpend };

TimeCheck(seo, updatedData);

}

let startTime;
let totalTimeSpent = 0;
let lastStartTime;
var plan = getCookie('Kandlus-users');
console.log(plan);

if (plan) {
    console.log('Plan exists in session storage:', plan);
    // Display the page view count when the page loads and record start time
    window.onload = () => {
       // displayPageViewCount(articleId);
        startTime = Date.now();
        lastStartTime = Date.now();
        console.log(startTime);
    };
    function calculateTimeSpent() {
        if (lastStartTime) {
            totalTimeSpent += (Date.now() - lastStartTime);
            lastStartTime = null;
        }
    }
    // Record time spent when the user leaves the website or screen turns off
    window.onbeforeunload = async () => {
        calculateTimeSpent();
        const timeSpent = Math.round(totalTimeSpent / 1000); // time spent in seconds
        recordTimeSpent(plan, timeSpent);
    };

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            calculateTimeSpent();
        } else if (document.visibilityState === 'visible') {
            lastStartTime = Date.now();
        }
    });

    
} else {
    console.log('Plan does not exist in session storage.');
    // Handle cases where plan does not exist, if necessary
}