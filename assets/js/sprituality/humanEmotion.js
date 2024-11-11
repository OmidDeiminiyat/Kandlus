
const emotionOp = document.getElementById('EmotionTable');
const foodOpen = document.getElementById('foodForm');
function foodOpems() {
    foodOpen.style.display = 'block';
    emotionOp.style.display = 'none';
}

function emotionOpen() {
    emotionOp.style.display = 'block';
    foodOpen.style.display = 'none';
}


