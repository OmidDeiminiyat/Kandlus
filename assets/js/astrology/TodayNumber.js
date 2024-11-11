const Cycle = [
    {id: 1,
     meaning: 'independence, innovation, and a pioneering spirit'   
    },
    {id: 2,
        meaning: 'balance, harmony, and partnerships'   
    },
    {id: 3,
        meaning: 'creativity, self-expression, and social engagement'   
    },
    {id: 4,
        meaning: 'structure, order, and discipline'   
    },
    {id: 5,
        meaning: 'freedom, adaptability, and the thrill of new experiences'   
    },
    {id: 6,
        meaning: 'harmony, care, family, and community'   
    },
    {id: 7,
        meaning: 'introspection, spiritual seeking, and inner wisdom'   
    },
    {id: 8,
        meaning: 'power, wealth, and the material world'   
    },
    {id: 9,
        meaning: 'completion, generosity, and a deep care for humanity'   
    },
  ]



const myArray = [
    {id: 9,
    no1: '<li>Let Go of the Old: Take time to reflect on things in your life that may be holding you back or no longer align with your values. This could be old habits, tasks, or even clutter. Clearing these things can make space for something new to emerge.</li>',
    no2: '<li>Be Compassionate: Number 9 emphasizes empathy and understanding. Reach out to someone who may need your help or a listening ear. Acts of kindness can bring a sense of fulfillment and harmony today</li>',
    no3: '<li>Wrap Up Projects: It’s a great day to finish tasks you’ve been putting off or projects that are nearing completion. You may find a sense of accomplishment in tying up loose ends, both professionally and personally.</li>',
    no4: '<li>Reflect on Bigger Goals: Since the number 9 is about wisdom and understanding, take a few moments to reflect on your long-term goals. Think about how what you’re doing today contributes to your broader vision.</li>',
     no5: '<li>Engage in Creative or Spiritual Activities: The energy of 9 is often aligned with creativity and spirituality. Whether through art, music, meditation, or reading, spend some time nurturing your inner self.</li>'
    },
    {id: 1,
        no1: '<li>Let Go of the Old: Release old patterns or habits that hold you back from starting fresh.</li>',
        no2: '<li>Be Compassionate: Show kindness to yourself and others as you begin new ventures.</li>',
        no3: '<li>Wrap Up Projects: Clear out anything incomplete to make room for new beginnings.</li>',
        no4: '<li>Reflect on Bigger Goals: Set intentions for what you want to achieve, and think about the legacy you wish to build.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Explore a new hobby or creative activity to channel your independent spirit.</li>'
        },
    {id: 2,
        no1: '<li>Let Go of the Old: Release resentments or conflicts, making way for harmony.</li>',
        no2: '<li>Be Compassionate: Approach relationships with understanding and empathy.</li>',
        no3: '<li>Wrap Up Projects: Focus on completing shared tasks or partnerships.</li>',
        no4: '<li>Reflect on Bigger Goals: Think about your role in relationships and how collaboration aligns with your personal goals.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Try activities that bring balance, like meditation, yoga, or working on collaborative art.</li>'
        },
    {id: 3,
        no1: '<li>Let Go of the Old: Release any self-doubt or fear that prevents you from expressing yourself freely.</li>',
        no2: '<li>Be Compassionate: Be generous with your time and encouragement to others.</li>',
        no3: '<li>Wrap Up Projects: Complete any creative work or ideas that are lingering.</li>',
        no4: '<li>Reflect on Bigger Goals: Consider how your creativity and communication contribute to your life goals.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Dive into writing, art, music, or other expressive forms to connect with joy.</li>'
        },
    {id: 4,
        no1: '<li>Let Go of the Old: Release any disorganization or clutter, making room for stability.</li>',
        no2: '<li>Be Compassionate: Show patience and kindness toward those around you, especially in teamwork.</li>',
        no3: '<li>Wrap Up Projects: Bring structure to ongoing tasks, completing them methodically.</li>',
        no4: '<li>Reflect on Bigger Goals: Think about building a solid foundation for future achievements.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Try organizing, planning, or grounding exercises to center yourself.</li>'
        },
    {id: 5,
        no1: '<li>Let Go of the Old: Release routines that feel restrictive, and allow yourself to embrace change.</li>',
        no2: '<li>Be Compassionate: Be open to meeting new people and experiencing diverse perspectives.</li>',
        no3: '<li>Wrap Up Projects: Complete tasks quickly, making space for new and spontaneous opportunities.</li>',
        no4: '<li>Reflect on Bigger Goals: Think about where you want your sense of freedom and adventure to lead you.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Explore unconventional forms of expression or adventure-based meditation.</li>'
        },
    {id: 6,
        no1: '<li>Let Go of the Old: Release any unresolved issues in family or friendships to foster harmony.</li>',
        no2: '<li>Be Compassionate: Show extra care and love to family, friends, or those in need.</li>',
        no3: '<li>Wrap Up Projects: Focus on completing tasks related to home or loved ones.</li>',
        no4: '<li>Reflect on Bigger Goals: Consider how your relationships align with your life purpose and values.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Try family-centered creative projects or nurturing activities like cooking, gardening, or community service.</li>'
        },
    {id: 7,
        no1: '<li>Let Go of the Old: Release distractions or superficial concerns to focus on deeper meaning.</li>',
        no2: '<li>Be Compassionate: Offer empathy to others while also respecting your need for solitude.</li>',
        no3: '<li>Wrap Up Projects: Complete research or knowledge-based tasks.</li>',
        no4: '<li>Reflect on Bigger Goals: Think about your spiritual and intellectual path, and assess if it aligns with your deeper self.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Spend time on meditation, journaling, or introspective activities to connect with your inner wisdom.</li>'
        },
    {id: 8,
        no1: '<li>Let Go of the Old: Release limiting beliefs around success and embrace abundance.</li>',
        no2: '<li>Be Compassionate: Offer support to those who look up to you, sharing your knowledge and resources.</li>',
        no3: '<li>Wrap Up Projects: Bring closure to work or finance-related tasks with a sense of accomplishment.</li>',
        no4: '<li>Reflect on Bigger Goals: Focus on your ambitions, and consider how your success can contribute to others.</li>',
         no5: '<li>Engage in Creative or Spiritual Activities: Explore activities that build confidence and abundance, such as visualizing your goals or creating a vision board.</li>'
        }      
    ];


    const Meditations = [
        {
            id: 9,
            describe: '<p>For a Personal Day Number of 9, meditation practices that focus on compassion, letting go, and connecting with a broader purpose are ideal. Since 9 is a number of completion, universal love, and selflessness, a meditation that encourages inner peace, gratitude, and release of attachments can be very powerful. Here are a few types of meditation that align well with the energy of a 9 day:</p>',
            MedNo1: '<li>Loving-Kindness Meditation (Metta)</li>',
            MedNo2: '<li>Release and Letting Go Meditation</li>',
            MedNo3: '<li>Gratitude Meditation</li>',
            MedNo4: '<li>Karma Meditation</li>',
            MedNo5: '<li>Guided Meditation for Universal Connection</li>'
        },
        {
            id: 1,
            describe: '<p>For a Personal Day Number of 1, meditation practices that foster new beginnings, confidence, and self-discovery are ideal. Since 1 represents independence, initiation, and courage, a meditation that encourages focus, clarity, and empowerment can help you align with this energy. Here are a few types of meditation that fit well with a 1 day:</p>',
            MedNo1: '<li>Self-Empowerment Meditation</li>',
            MedNo2: '<li>Visualization Meditation for Goal-Setting</li>',
            MedNo3: '<li>Breath-Focused Meditation for Clarity</li>',
            MedNo4: '<li>Mantra Meditation for Courage and Initiative</li>',
            MedNo5: '<li>Body Scan Meditation for Groundedness</li>'
        },
        {
            id: 2,
            describe: '<p>For a Personal Day Number of 2, meditation practices that foster harmony, connection, and emotional balance are ideal. Since 2 represents partnership, sensitivity, and cooperation, a meditation that encourages calmness, empathy, and receptivity can help align with the nurturing energy of this day. Here are a few meditation types that suit the energy of a 2 day:</p>',
            MedNo1: '<li>Heart-Centered Meditation</li>',
            MedNo2: '<li>Guided Meditation for Emotional Balance</li>',
            MedNo3: '<li>Mindfulness Meditation for Presence in Relationships</li>',
            MedNo4: '<li>Body Scan Meditation for Groundedness and Calm</li>',
            MedNo5: '<li>Breathing Meditation for Inner Peace</li>'
        },
        {
            id: 3,
            describe: '<p>For a Personal Day Number of 3, meditation practices that inspire creativity, self-expression, and joy are ideal. Since 3 is associated with communication, imagination, and a sense of fun, a meditation that encourages positive energy, inspiration, and emotional release can align with this vibrant day. Here are a few types of meditation that resonate well with the energy of a 3 day</p>',
            MedNo1: '<li>Creative Visualization Meditation</li>',
            MedNo2: '<li>Joyful Gratitude Meditation</li>',
            MedNo3: '<li>Chakra Meditation (Especially Throat and Solar Plexus)</li>',
            MedNo4: '<li>Laughter Meditation</li>',
            MedNo5: '<li>Affirmation Meditation for Positivity and Confidence</li>'
        },
        {
            id: 4,
            describe: '<p>For a Personal Day Number of 4, meditation practices that promote grounding, focus, and structure are ideal. Since 4 is a number of stability, organization, and discipline, meditations that emphasize calmness, mental clarity, and a sense of foundation can help align with this productive energy. Here are some meditation practices that fit well with the energy of a 4 day:</p>',
            MedNo1: '<li>Grounding Meditation</li>',
            MedNo2: '<li>Body Scan Meditation for Relaxation and Focus</li>',
            MedNo3: '<li>Breath-Control Meditation (Pranayama)</li>',
            MedNo4: '<li>Mindfulness Meditation for Mental Clarity</li>',
            MedNo5: '<li>Visualization Meditation for Goal-Setting and Structure</li>'
        },
        {
            id: 5,
            describe: '<p>For a Personal Day Number of 5, meditation practices that embrace freedom, flexibility, and exploration are ideal. Since 5 represents change, adventure, and curiosity, meditations that promote openness, adaptability, and a sense of wonder can help align with this energetic and dynamic day. Here are some meditation practices that resonate well with the energy of a 5 day:</p>',
            MedNo1: 'Dynamic Movement Meditation',
            MedNo2: 'Breath of Joy (Energizing Breathwork)',
            MedNo3: 'Curiosity Meditation',
            MedNo4: 'Chakra Meditation for Balance and Openness',
            MedNo5: 'Visualization Meditation for Adventure and Exploration'
        },
        {
            id: 6,
            describe: '<p>For a Personal Day Number of 6, meditation practices that emphasize nurturing, compassion, and harmony are ideal. Since 6 is associated with love, responsibility, and creating a supportive environment, meditations that encourage kindness, emotional balance, and connection align well with this day’s energy. Here are some meditation practices suited to the caring, balanced energy of a 6 day:</p>',
            MedNo1: '<li>Loving-Kindness (Metta) Meditation</li>',
            MedNo2: '<li>Heart-Centered Meditation</li>',
            MedNo3: '<li>Gratitude Meditation</li>',
            MedNo4: '<li>Guided Visualization for Family Harmony</li>',
            MedNo5: '<li>Body Scan for Relaxation and Self-Care</li>'
        },
        {
            id: 7,
            describe: '<p>For a Personal Day Number of 7, meditation practices that foster introspection, spiritual connection, and mental clarity are ideal. Since 7 is associated with inner wisdom, reflection, and solitude, meditations that encourage deep contemplation, peace, and spiritual insight align well with this thoughtful energy. Here are some meditation practices suited to the introspective, insightful energy of a 7 day:</p>',
            MedNo1: '<li>Silent Mindfulness Meditation</li>',
            MedNo2: '<li>Third Eye Meditation (Ajna Chakra)</li>',
            MedNo3: '<li>Zen Meditation (Zazen)</li>',
            MedNo4: '<li>Nature Meditation (Earthing)</li>',
            MedNo5: '<li>Breathing Meditation for Inner Calm (Alternate Nostril Breathing)</li>'
        },
        {
            id: 8,
            describe: '<p>For a Personal Day Number of 8, meditation practices that promote empowerment, focus, and manifestation are ideal. Since 8 is associated with ambition, abundance, and personal power, meditations that encourage confidence, goal-setting, and alignment with success resonate well with this productive energy. Here are some meditation practices suited to the ambitious, goal-oriented energy of an 8 day:</p>',
            MedNo1: '<li>Manifestation Meditation</li>',
            MedNo2: '<li>Empowerment and Confidence-Building Meditation</li>',
            MedNo3: '<li>Chakra Meditation for Solar Plexus Activation</li>',
            MedNo4: '<li>Guided Visualization for Success and Abundance</li>',
            MedNo5: '<li>Affirmation Meditation for Strength and Determination</li>'
        }
    ]


    document.addEventListener('DOMContentLoaded', (event) => {
        const PersonBirthday = document.getElementById('pBirth');
        // Change date format
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        
        PersonBirthday.value = `${year}-${month}-${day}`;
      });
      
      
      document.getElementById("zodiacForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        const perNumForm = document.getElementById('zodiacForm');
        perNumForm.style.display = 'none';
        const loadDote = document.getElementById('loading');
        loadDote.style.display= 'flex';
        document.getElementById('forLoead').style.display = 'block';
       
       
    
        const PersonBirthday = document.getElementById('pBirth').value;
        const time = document.getElementById('timeBirth').value;
        const [year, month, day] = PersonBirthday.split('-');
        const Dates = `${day}/${month}/${year}`;
      
      
        var select = document.getElementById("countries");
        var value = select.value; // Get the selected option value
        var coordinates = value.split(','); // Split the value into an array
        var latitude = coordinates[0]; // Get the latitude
        var longitude = coordinates[1]; // Get the longitude
      
    
        const userData = {
          Dates: Dates,
          time: time,
          latitude: latitude,
          longitude: longitude,
        };
      
        // Send the JSON data to the backend (e.g., to control.php)
        const response = await fetch("../backend/DayNumber.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), 
        });
      
        // Handle the response from the server
        const result = await response.json(); // Assuming the backend sends JSON back
        console.log(result);
        dayNumData(result)
        if (result.success) {
          //console.log('');
          
        } else {
          
        }
      });


  function dayNumData(numData) {
    document.getElementById('personalCard').style.display = 'grid';
    console.log(numData.characterData.response);
    const items = numData.characterData.response;
    document.getElementById('loading').style.display = 'none'; 

  
      const numersArray = myArray.find(obj => obj.id === items.number);
      const CircleNumber = Cycle.find(obj => obj.id === items.number);
      const ListOfMeditation = Meditations.find(obj => obj.id === items.number);
      
      const today = new Date();
      const day = today.getDay();
          
      
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      
      console.log("Today is " + days[day]);    
      let newAdvice = '';
      let newMeditation = [];
      if (numersArray) {
          if (days[day] === "Friday") {
             newAdvice = numersArray.no1 + ' ' + numersArray.no3;
             newMeditation = ListOfMeditation.MedNo1 + ' ' + ListOfMeditation.MedNo2;
          } else if (days[day] === "Saturday") {
            newAdvice = numersArray.no2 + ' ' + numersArray.no4;
            newMeditation = ListOfMeditation.MedNo3 + ' ' + ListOfMeditation.MedNo4;
          } else if (days[day] === "Sunday") {
            newAdvice = numersArray.no5 + ' ' + numersArray.no1;
            newMeditation = ListOfMeditation.MedNo1 + ' ' + ListOfMeditation.MedNo5;
          } else if (days[day] === "Monday") {
            newAdvice = numersArray.no1 + ' ' + numersArray.no2;
            newMeditation = ListOfMeditation.MedNo1 + ' ' + ListOfMeditation.MedNo3;
          }else if (days[day] === "Tuesday") {
            newAdvice = numersArray.no1 + ' ' + numersArray.no4;
            newMeditation = ListOfMeditation.MedNo1 + ' ' + ListOfMeditation.MedNo4;
          } else if (days[day] === "Wednesday") {
            newAdvice = numersArray.no2 + ' ' + numersArray.no3;
            newMeditation = ListOfMeditation.MedNo2 + ' ' + ListOfMeditation.MedNo3;
          }  else if (days[day] === "Thursday") {
            newAdvice = numersArray.no2 + ' ' + numersArray.no5;
            newMeditation = ListOfMeditation.MedNo2 + ' ' + ListOfMeditation.MedNo4;
          } 
          
      }else {
          console.log('error');
      }

   document.getElementById('ineerNum').innerText = items.number;
   document.getElementById('persDatText').innerText = 'Your personal number of today is:' + ' ' + items.number;
      const twoCol = document.getElementById('secondColumn');
      const thiCol = document.getElementById('thirdColumn');
      const Nofour = document.getElementById('MeditationSection');
      
      let insTeoCol = `<header>
                
                        <p>Today ${today}, with a personal day number of ${items.number}, you’re in a cycle of: <span id="ForC">  ${CircleNumber.meaning}. </span></p>
                        <h5>Meaning of your personal number of today:</h5>
                        <p>${items.meaning}</p>
                        </header>`

      twoCol.innerHTML = insTeoCol;


      let insTiCol = `<hgroup>
                <h5>Here are some ways to use the energy of the number ${items.number} today</h5>
                <ul> ${newAdvice} </ul><br>
                <p>This approach gives a daily numerological energy, which can complement astrological influences.</p>
            </hgroup>`
        thiCol.innerHTML = insTiCol;

      let innerMeditaion = ` ${ListOfMeditation.describe}
                <ul>${newMeditation} </ul>  `
                Nofour.innerHTML = innerMeditaion;
  }
  
  
  



