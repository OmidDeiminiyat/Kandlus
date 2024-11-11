const foods = [
    // Fruits
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "ugli fruit", "watermelon", "dark chocolate",
    
    // Vegetables
    "asparagus", "broccoli", "carrot", "daikon", "eggplant", "fennel", "garlic", "horseradish",
    "iceberg lettuce", "jalapeno", "kale", "leek", "mushroom", "nori", "onion", "pea",
    "quinoa greens", "radish", "spinach", "tomato", "zucchini", "olive",
    
    // Grains
    "rice", "wheat", "barley", "corn", "oats", "quinoa", "rye", "sorghum", "nuts",
    
    // Proteins
    "beef", "chicken", "duck", "egg", "fish", "lamb", "pork", "shrimp", "tofu",
    
    // Dairy
    "milk", "cheese", "yogurt", "butter", "cream", "kefir", "ice cream", "chips", "sausage", "bologna", "chocolate"
];

function filterFoods() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    if (searchInput) {
        const filteredFoods = foods.filter(food => food.toLowerCase().includes(searchInput));
        filteredFoods.forEach(food => {
            const div = document.createElement('div');
            div.classList.add('search-result-item');
            div.textContent = food;
            div.onclick = () => {
                document.getElementById('search').value = food;
                searchResults.style.display = 'none';
            };
            searchResults.appendChild(div);
        });
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}

document.getElementById('foodForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let selectedFood = document.getElementById('search').value;
    const amount = document.getElementById('amount').value;

    let fruits = [ "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
        "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
        "strawberry", "tangerine", "ugli fruit", "watermelon"];
        let Vwgtable = ["asparagus", "broccoli", "carrot", "daikon", "eggplant", "fennel", "garlic", "horseradish",
    "iceberg lettuce", "jalapeno", "kale", "leek", "mushroom", "nori", "onion", "pea",
    "quinoa greens", "radish", "spinach", "tomato", "zucchini", "olive"];
    let Grains = ["wheat", "barley", "corn", "oats", "quinoa", "rye", "sorghum", "beans", "dark chocolate", "nuts"];

    let Protein = ["beef", "chicken", "duck", "egg", "fish", "lamb", "pork", "shrimp"];

    let Badest = ["rice", "cheese", "yogurt", "butter", "cream", "kefir", "ice cream"];

    let MostBas = ["processed food", "white bread", "chips", "sausage", "bologna", "chocolate" ]
   
    if (fruits.includes(selectedFood)) {
        selectedFood = '500';
    } else if (Vwgtable.includes(selectedFood)) {
        selectedFood = '700';
    } else if (Grains.includes(selectedFood)) {
        selectedFood = '400';
    } else if (Protein.includes(selectedFood)) {
        selectedFood = '130';
    } else if (Badest.includes(selectedFood)) {
        selectedFood = '40';
    } else if (MostBas.includes(selectedFood)) {
        selectedFood = '10';
    } 
    if (selectedFood != '' && amount != '') {
        
    
    const userData = {
        food: amount * selectedFood,
        amount: amount
      };

      // localStorage.setItem('Food', JSON.stringify(userData));
      addFoodToLocalStorage(userData)
      callDatas()
    }
});




document.getElementById('EmotionTable').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedEmotion = document.getElementById('Emotions').value;
    const Duration = document.getElementById('Duration').value;
    if (selectedEmotion != '' && Duration != '') {
    const emotionData = {
        emot: selectedEmotion,
        dur: Duration
      };
      // localStorage.setItem('Food', JSON.stringify(userData));
      DataForemotion(emotionData)
      callDatas()
    }
});




function addFoodToLocalStorage(foodItem) {
    // Retrieve existing array from local storage or initialize an empty array
    let foods = JSON.parse(localStorage.getItem('Food')) || [];

    // Add new food item to the array
    foods.push(foodItem);

    // Store the updated array back in local storage
    localStorage.setItem('Food', JSON.stringify(foods));
    
    foodForm.search.value = '';
    foodForm.amount.value = '';

  }

  function DataForemotion(emotionItems) {
    // Retrieve existing array from local storage or initialize an empty array
    let Emotions = JSON.parse(localStorage.getItem('Emotion')) || [];

    // Add new food item to the array
    Emotions.push(emotionItems);

    // Store the updated array back in local storage
    localStorage.setItem('Emotion', JSON.stringify(Emotions));
    
    EmotionTable.Emotions.value = '';
    EmotionTable.Duration.value = '';

  }

  function callDatas() {
  const userString = localStorage.getItem('Food');
  const myTexts = document.getElementById('MyCharts');
  if (myTexts.style.display = 'none' ) {
    myTexts.style.display = 'block'
  }
  // Parse the JSON string back into an object
  const user = JSON.parse(userString);
  
  let total = 0;
  user.forEach(foodItem => {
        total += parseFloat(foodItem.amount);
      });


      let foodTot = 0;
  user.forEach(foodItem => {
    foodTot += parseFloat(foodItem.food);
      });
// Retrieve and count the items
let retrievedFoodItems = JSON.parse(localStorage.getItem('Food'));
let foodCount = retrievedFoodItems ? retrievedFoodItems.length : 0;


  const foodEnergy =   foodTot / total;

 let foodColorfi = 'transparent';
 let secColor = 'transparent';
 let myText = 'Totsl';
 let secondText = 'Totals';
      if (foodEnergy > 500) {
        foodColorfi = 'green';
        secColor = 'red';
        myText = 'Frequencies of consciousness';
        secondText = 'Evil frequency';
      } else {
        foodColorfi = 'red';
        secColor = 'green';
        myText = 'Evil frequency';
        secondText = 'Frequencies of consciousness';
      }

      // Chart for foods

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Frequency', 'Hours per Day'],
    [myText,     1000],
    [secondText,      foodEnergy], 
  ]);

  var options = {
    title: 'Foods Frequency',
    slices: {
      0: { color: foodColorfi },
      1: { color: secColor }
    }
  };
  

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

  

const emotionString = localStorage.getItem('Emotion');
  
  // Parse the JSON string back into an object
  const Em = JSON.parse(emotionString);
  
  let EmotionAmount = 0;
  Em.forEach(EmotionAm => {
        EmotionAmount += parseFloat(EmotionAm.emot);
      });

      let EmotionTimes = 0;
      Em.forEach(EmotionC => {
        EmotionTimes += parseFloat(EmotionC.dur);
      });
// Retrieve and count the items
let EmotionItems = JSON.parse(localStorage.getItem('Emotion'));
let emoCount = EmotionItems ? EmotionItems.length : 0;


  const emoFrequency = EmotionAmount * EmotionTimes;
  const seconds = 86400 - EmotionTimes * 7.5;
  const TodayEmotional = seconds + emoFrequency;
  const ShpuldBE = 86400 * 1000;
  const Calcu =  TodayEmotional * 100 / ShpuldBE;

  let emotionfirstC = 'transparent';
  let emotionSecondC = 'transparent';
  let emotionText = 'Totsl';
  let emotionsecText = 'Totals';
       if (TodayEmotional > ShpuldBE) {
    
        emotionfirstC = 'green';
        emotionSecondC = 'red';
        emotionText = 'Frequencies of consciousness';
        emotionsecText = 'Evil frequency';
       } else {

        emotionfirstC = 'red';
        emotionSecondC = 'green';
        emotionText = 'Evil frequency';
        emotionsecText = 'Frequencies of consciousness';
       }

  const freToday = Calcu * 100 + foodEnergy / 2;
  const rastTod = 1000 - freToday;

  let curentColor = 'yellow';
    if (freToday > 500) {
        curentColor = 'green';
    } else {
        curentColor = 'red';
    }


    //   Emotion chart
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(emoCharts);

      function emoCharts() {

        var data = google.visualization.arrayToDataTable([
          ['Frequency', 'Hours per Day'],
          [emotionText,     100],
          [emotionsecText,      Calcu], 
        ]);

        var options = {
          title: 'Emotion Frequency',
          slices: {
            0: { color: emotionfirstC },
            1: { color: emotionSecondC }
          }
        };
        

        var emotionChart = new google.visualization.PieChart(document.getElementById('EmotionChart'));

        emotionChart.draw(data, options);
      }

      //   Total chart

      let finalText = 'Empty';
      if (freToday > 500) {
        finalText = 'Your Existential frequency is: ' + Math.floor(freToday) + ' which is: Frequencies of consciousness. Very good. keep going like this'; 
      } else {
        finalText = 'Your Existential frequency is: ' + Math.floor(freToday) + ' which is: Evil frequency. Eat a little more healthy food and be more happy and show love to others'; 
      }



      google.charts.load("current", {packages:['corechart']});
      google.charts.setOnLoadCallback(ColumnChar);
      function ColumnChar() {
        var data = google.visualization.arrayToDataTable([
          ["Element", "Density", { role: "style" } ],
          ["Copper", Math.floor(freToday), curentColor],
          ["Silver", 0, "silver"],
        ["Gold", 0, "gold"],
        ["Silver", 0, "silver"],
        ["Gold", 0, "gold"]
        ]);
  
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);
  
        var options = {
          title: finalText,
          width: 600,
          height: 400,
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
    }


    }

    callDatas()



    function deleteFromLocalStorage() {
        // Key of the item to delete
        const key = 'Emotion';
        const secondKey = 'Food';
        const letCh = document.getElementById('MyCharts');
        letCh.style.display = ' none';
        
        // Check if the item exists in local storage
        if (localStorage.getItem(key)) {
            // Remove the item from local storage
            localStorage.removeItem(key);
            localStorage.removeItem(secondKey);
        } else {
            console.log(`${key} does not exist in local storage.`);
            console.log(`${secondKey} does not exist in local storage.`);
        }
    }

