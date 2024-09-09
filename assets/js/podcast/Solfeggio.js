
const solfeg = document.getElementById('allCont');
var sessionPlan = sessionStorage.getItem('Plan');
const imger = document.getElementById('preImage');
const listen = document.getElementById('listen');
const listen1 = document.getElementById('listen-1');
const listen2 = document.getElementById('listen-2');
const listen3 = document.getElementById('listen-3');
if (sessionPlan === '663idsmS98pR' || sessionPlan === '9dyhf3Ds') {
    solfeg.style.display= 'block';
    imger.style.display = 'none';
} else {
    listen.style.display = 'none';
    listen1.style.display = 'none';
    listen2.style.display = 'none';
    listen3.style.display = 'none';
}
