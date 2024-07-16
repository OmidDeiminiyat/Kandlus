
const userOn = getCookie('Kandlus-users');
var sessionOn = sessionStorage.getItem('Plan');
if (!userOn) {
    window.location.href = '../Price.html';
} else if(sessionOn == 'Standard' || sessionOn == 'Pro') {
    console.log('It is On'); }
