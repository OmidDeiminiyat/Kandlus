
var url = window.location.search.substring(1);
var vars = url.split("=");
const id = vars[1];

let typeOfYoga = 'null';
if (!id) {
    console.error('id not exist');
  } else if (id === 'Hatha%20Yoga') {
    typeOfYoga = '<iframe style="max-width:100%" width="1215" height="2500" src="https://www.tummee.com/yoga-sequence/orVPN" frameborder="0"></iframe>'
  } 




  const Yogis = document.getElementById('displayYoga');
  Yogis.innerHTML = typeOfYoga;