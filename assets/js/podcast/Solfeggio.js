
const solfeg = document.getElementById('allCont');
var sessionPlan = sessionStorage.getItem('Plan');
const imger = document.getElementById('preImage');
const listen = document.getElementById('listen');
const listen1 = document.getElementById('listen-1');
const listen2 = document.getElementById('listen-2');
const listen3 = document.getElementById('listen-3');
if (sessionPlan === 'Standard' || sessionPlan === 'Pro') {
    solfeg.style.display= 'block';
    imger.style.display = 'none';
} else {
    listen.style.display = 'none';
    listen1.style.display = 'none';
    listen2.style.display = 'none';
    listen3.style.display = 'none';
}

function preImg() {
    const preImg = document.getElementById('scim');
    const hno = document.getElementById('hno1');

    hno.style.display= 'block';
    preImg.style.opacity= '0.3';

}