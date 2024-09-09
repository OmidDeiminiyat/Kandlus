
const subSec = document.getElementById('subscriptionPlan');
document.getElementById('cancelSub').addEventListener('click', function(event) {
  var userCode = getCookie('Kandlus-users');
  subSec.innerHTML = '<p>Cancellation is being processed. </p> '
  justtest(userCode)
});



import changeSubscription from './controller/TimeUpdate.js';

        function justtest(codes) {
          const updatedData = {'planStatus': 'Cancel' };
          changeSubscription(codes, updatedData);
        }



   