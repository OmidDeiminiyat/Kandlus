function submitForm(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();
    
 
   
    const Bname = document.getElementById("bName");
    const dateB = document.getElementById("bDate").value;
    const tiB = document.getElementById("bTime");
    const CounB = document.getElementById("bCountry");
    const ZoneB = document.getElementById("bZone");    

    const [year, month, day] = dateB.split('-');
    const Bdate = `${day}/${month}/${year}`;


    const BMontBoZod = `${month}`;
    const BDayZod = `${day}`;



  const name = Bname.value;
  const Btime = tiB.value;
  const Bcountry = CounB.value;
  const Bzone = ZoneB.value;
  
  var coordinates = Bcountry.split(','); 
  var BoyLat = coordinates[0]; 
  var Boylong = coordinates[1]; 




    if (name) {
      
      
      
     callForZodiac(BMontBoZod, BDayZod);
    //     fetchTwoHoroscopeData(name, Bdate, Btime, Bzone);
    } else {
        alert("Please select a zodiac sign.");
    }
}

function callForZodiac(girkMonth, GirlDay) {

let girlZodiac = '';
  if ((girkMonth === '01' && GirlDay >= '20') || (girkMonth === '02' && GirlDay <= '18')) {
    girlZodiac = "Aguarius";
  } else if ((girkMonth === '02' && GirlDay >= '19') || (girkMonth === '03' && GirlDay <= '20')) {
    girlZodiac = "Picses";
  } else if ((girkMonth === '03' && GirlDay >= '21') || (girkMonth === '04' && GirlDay <= '19')) {
    girlZodiac = "Aries";
  } else if ((girkMonth === '04' && GirlDay >= '20') || (girkMonth === '05' && GirlDay <= '20')) {
    girlZodiac = "Taurus";
  } else if ((girkMonth === '05' && GirlDay >= '21') || (girkMonth === '06' && GirlDay <= '20')) {
    girlZodiac = "Gemini";
  } else if ((girkMonth === '06' && GirlDay >= '21') || (girkMonth === '07' && GirlDay <= '22')) {
    girlZodiac = "Cancer";
  } else if ((girkMonth === '07' && GirlDay >= '23') || (girkMonth === '08' && GirlDay <= '22')) {
    girlZodiac = "Leo";
  } else if ((girkMonth === '08' && GirlDay >= '23') || (girkMonth === '09' && GirlDay <= '22')) {
    girlZodiac = "Virgo";
  } else if ((girkMonth === '09' && GirlDay >= '23') || (girkMonth === '10' && GirlDay <= '22')) {
    girlZodiac = "Libra";
  } else if ((girkMonth === '10' && GirlDay >= '23') || (girkMonth === '11' && GirlDay  <= '21')) {
    girlZodiac = "Scorpio";
  } else if ((girkMonth === '11' && GirlDay >= '22') || (girkMonth === '12' && GirlDay <= '21')) {
    girlZodiac = "Sagittarius";
  } else {
    girlZodiac = "Capricorn";
  }
  
  ZodiacDate(girlZodiac)
console.log(girlZodiac);
  
}

function ZodiacDate(zodiacSign) {
console.log('Recived Zodiac:' + zodiacSign);
let a = 'null';
let Textit = 'null';
 if (zodiacSign === 'Aries') {
    a = 'Power Yoga, Vinyasa Flow, Bikram/Hot Yoga, Rocket Yoga, AcroYoga, Hatha Yoga, Kundalini Yoga, Ashtanga Yoga, ';
    Textit = 'For someone born under the zodiac sign Aries (March 21 - April 19), the ideal physical yoga practice should reflect Aries’ natural characteristics. Aries is a fire sign ruled by Mars, known for its energy, enthusiasm, passion, and action-oriented nature. People born under Aries tend to be driven, competitive, and physically active, so they benefit from yoga practices that challenge their strength, stamina, and flexibility while also calming their often restless minds. Below is a list of yogas that are suitable for Aries';
} else if (zodiacSign === 'Taurus') {
    a = 'Hatha Yoga, Yin Yoga, Restorative Yoga, Iyengar Yoga, Vinyasa Yoga, Kundalini Yoga, Yoga Nidra , '
    Textit = 'For someone born under the zodiac sign Taurus (April 20 - May 20), the ideal physical yoga practice should reflect Taurus natural characteristics. Taurus is an earth sign, ruled by Venus, known for being grounded, patient, practical, and focused on comfort and stability. Taureans appreciate routines that help them feel connected to their bodies and the physical world, while also offering relaxation and pleasure. Below is a list of yogas that are suitable for Taurus.';
} else if (zodiacSign === 'Gemini') {
  a = 'Vinyasa Yoga, Ashtanga Yoga, Kundalini Yoga, Power Yoga, Yin Yoga, AcroYoga';
  Textit = 'For a Gemini, who is typically known for being energetic, curious, adaptable, and often intellectually active, a yoga practice that matches both their dynamic nature and need for mental stimulation would be ideal. Here are some yoga styles that might be a good fit:';
} else if (zodiacSign === 'Cancer') {
  a = 'Hatha Yoga, Yin Yoga, Restorative Yoga, Iyengar Yoga, Moon Salutations, Kundalini Yoga';
  Textit = 'For Cancer individuals, who are known for being emotional, intuitive, nurturing, and deeply connected to their inner world, a yoga practice that encourages grounding, emotional release, and self-care would be ideal. Cancers thrive in environments that feel safe and comforting, and their practice should promote emotional balance and a sense of security. Below is a list of yogas that are suitable for Taurus.';
} else if (zodiacSign === 'Leo') {
  a = 'Vinyasa Yoga, Power Yoga, Ashtanga Yoga, Bikram/Hot Yoga, Kundalini Yoga, Heart-Opening Poses';
  Textit = 'For a Leo, who is characterized by their confidence, charisma, passion, and natural leadership, the ideal yoga practice would be one that channels their fiery energy while fostering self-expression and boosting both physical and mental strength. Leos thrive on practices that make them feel empowered and help them shine, but they also benefit from practices that encourage humility and calmness. Here are some yoga styles and their benefits that are a good fit for a Leo:'
} else if (zodiacSign === 'Virgo') {
  a = 'engar Yoga, Hatha Yoga, Vinyasa Yoga, Restorative Yoga, Yin Yoga, Ashtanga Yoga, Ashtanga Yoga, Kundalini Yoga';
  Textit = 'For someone born under the zodiac sign Virgo (August 23 - September 22), the ideal physical practice in yoga would align with Virgos personality traits and physical needs. Virgos are typically known for their attention to detail, discipline, health-conscious mindset, and a love for routines that improve their well-being. They tend to be perfectionists and can sometimes experience anxiety or overthink things. Below is a list of yogas that are suitable for Virgo: ';
} else if (zodiacSign === 'Libra') {
  a = 'Hatha Yoga, Vinyasa Flow, Yin Yoga, Partner Yoga, Iyengar Yoga, Restorative Yoga';
  Textit = 'For a Libra, known for their love of balance, harmony, and beauty, a yoga practice that enhances both physical and mental equilibrium would be ideal. Libras appreciate aesthetics, grace, and connection, so a practice that combines fluid movement, mindfulness, and breathwork can be particularly beneficial. They also tend to benefit from yoga styles that calm their indecisive tendencies and bring inner peace. Below is a list of yogas that are suitable for Libra: ';
} else if (zodiacSign === 'Scorpio') {
  a = 'Kundalini Yoga, Ashtanga Yoga, Vinyasa Flow, Power Yoga, Yin Yoga, Bikram/Hot Yoga';
  Textit = 'For a Scorpio, known for their intensity, passion, emotional depth, and transformative nature, the ideal yoga practice would focus on releasing built-up energy, fostering emotional balance, and encouraging inner strength and transformation. Scorpios thrive on practices that allow them to delve deep, both physically and mentally, and they often seek spiritual growth through intensity and introspection. Below is a list of yogas that are suitable for Scorpio:'
} else if (zodiacSign === 'Sagittarius') {
  a = 'Vinyasa Flow, Ashtanga Yoga, Power Yoga, Yin Yoga, Hatha Yoga, Aerial Yoga, Yoga with Travel Retreats';
  Textit = 'For a Sagittarius, known for their adventurous, optimistic, and free-spirited nature, the ideal yoga practice would emphasize exploration, growth, and physical challenge. Sagittarians thrive on new experiences, variety, and pushing their limits, so they are drawn to yoga practices that are dynamic, invigorating, and mentally stimulating. At the same time, they can benefit from practices that promote grounding and mindfulness, helping them find balance and focus. Here are some yoga styles and their benefits that align with a Sagittarius personality:';
} else if (zodiacSign === 'Capricorn') {
  a = 'Ashtanga Yoga, Iyengar Yoga, Power Yoga, Hatha Yoga, Vinyasa Flow, Restorative Yoga, Yin Yoga';
  Textit = 'For a Capricorn, known for their discipline, determination, and practicality, a yoga practice that aligns with their grounded and ambitious nature would be ideal. Capricorns thrive on structure, routine, and challenges, so they are drawn to practices that build strength, stability, and endurance. They are also focused on long-term goals, so they appreciate yoga styles that emphasize steady progress and mental discipline. Additionally, since Capricorns often carry stress from their responsibilities, yoga practices that promote relaxation and stress relief can be beneficial. Below is a list of yogas that are suitable for Capricorn:';
} else if (zodiacSign === 'Aquarius') {
  a = 'Vinyasa Flow, Kundalini Yoga, Yin Yoga, Hatha Yoga, Aerial Yoga, Power Yoga, Restorative Yoga';
  Textit = 'For an Aquarius, known for their innovative, independent, and forward-thinking nature, the ideal yoga practice would encourage creativity, mental clarity, and emotional balance. Aquarians are often drawn to unconventional and intellectually stimulating activities, so they thrive in yoga practices that offer variety, mental engagement, and personal freedom. Additionally, Aquarians can sometimes become mentally overactive or detached, so practices that encourage grounding and mindfulness are beneficial for balancing their unique energy. Here are some yoga styles and their benefits that align with an Aquarius personality:';
} else if (zodiacSign === 'Picses') {
  a = 'Yin Yoga, Restorative Yoga, Hatha Yoga, Vinyasa Flow, Kundalini Yoga, Bhakti Yoga, Yoga Nidra';
  Textit = ' a Pisces, known for their intuitive, sensitive, and compassionate nature, yoga practices that emphasize emotional connection, creativity, and spiritual exploration are ideal. Pisces are dreamers, often connected to deeper emotions and the mystical aspects of life. They thrive in yoga practices that allow for emotional release, fluid movement, and mindfulness. Additionally, since Pisces can sometimes feel overwhelmed by their own emotions or the energies around them, grounding practices that promote emotional balance and relaxation are highly beneficial. Here are some yoga styles and their benefits that align with an Picses personality:'
}
const nameList = a.split(', ').map(name => name.trim()); // ["Jack", "Peter", "Diana", "Michael", "Sara"]
const arrayOfObjects = [
{name: 'Iyengar Yoga',  Benefits: 'Improves posture, strengthens muscles, and enhances body awareness, while also calming their often overactive minds.', GoodFor: 'Virgos love precision, and Iyengar Yoga emphasizes perfect alignment and detail in each posture. It uses props like belts, blocks, and blankets to ensure that every pose is done correctly and safely. This style appeals to Virgo’s meticulous nature and can help them feel in control of their physical practice', image: 'Type-of-yoga.jpg' },
{name: 'Hatha Yoga',  Benefits: 'Helps improve flexibility, balance, and concentration. The calm pace is great for reducing stress and promoting mental clarity.', GoodFor: 'Hatha Yoga is slower-paced and focuses on holding poses and breathing, which gives Virgo the space they need to perfect their alignment and dive deep into each asana. Virgos like structured routines, and Hatha yoga provides a balanced, methodical practice.', image: 'Hatha-Yoga.png', Link: '' },
{name: 'Vinyasa Yoga',  Benefits: 'Improves cardiovascular health, builds strength, and encourages a mindful connection between breath and movement, which can help Virgos relax and de-stress', GoodFor: 'Vinyasa Yoga is a dynamic, flowing style that moves from one pose to the next with breath synchronization. While Virgos appreciate detail, they also benefit from flow that can help them get out of their heads and into their bodies.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Restorative Yoga',  Benefits: ' Reduces anxiety, relieves stress, improves sleep quality, and helps heal from physical or mental exhaustion.', GoodFor: 'Virgos can often carry stress due to their perfectionist tendencies and overthinking. Restorative Yoga focuses on relaxation and long-held supported postures that help release tension. It provides a calming, meditative experience that allows Virgos to relax deeply.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Yin Yoga',  Benefits: 'Enhances flexibility, especially in the joints, helps reduce stiffness, and promotes a meditative state of mind, perfect for stress relief.', GoodFor: 'Yin Yoga involves slow, long-held passive poses targeting the deeper connective tissues. For a Virgo, who is typically hardworking and busy, this yoga style can cultivate patience, relaxation, and mindfulness. It encourages the release of tension while offering time for quiet introspection.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Ashtanga Yoga',  Benefits: 'Improves strength, flexibility, and endurance. It also helps to focus the mind and build self-discipline, which resonates with Virgos desire for self-improvement.', GoodFor: 'Ashtanga Yoga is a highly structured, disciplined practice that follows a set sequence of postures. Virgos, who thrive on routine and self-discipline, may find this style appealing as it provides consistency and measurable progress.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Kundalini Yoga',  Benefits: ' Promotes spiritual growth, reduces anxiety, and enhances mental clarity while balancing energy levels and the nervous system.', GoodFor: 'Virgos are often highly analytical, which can lead to mental overload. Kundalini Yoga focuses on both physical postures and breathing techniques (pranayama), chanting, and meditation, which can help Virgos balance their physical, mental, and spiritual energies.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Power Yoga',  Benefits: 'Enhances strength, stamina, and mental focus. It gives Aries the physical challenge they crave while helping them release pent-up energy.', GoodFor: 'Power Yoga is a fast-paced, dynamic style of yoga that appeals to Aries’ need for action. It involves a challenging flow of poses and is more intense than many other forms of yoga. Aries individuals, who are often competitive, will appreciate the athletic nature of this style.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Vinyasa Flow',  Benefits: ' Improves cardiovascular health, balance, and flexibility. The dynamic, flowing nature of Vinyasa helps Aries channel their restless energy into a mindful practice.', GoodFor: 'Vinyasa Yoga involves a continuous flow of poses, synchronized with breath, and can vary in intensity. Aries will enjoy the flexibility and creativity of this style because it allows them to challenge themselves physically while also maintaining mental focus.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Bikram/Hot Yoga',  Benefits: 'Increases flexibility, improves detoxification through sweating, and boosts stamina. The heat helps Aries release tension while keeping them physically engaged.', GoodFor: 'Bikram Yoga, often practiced in a heated room, consists of 26 postures performed in sequence. The heat adds an extra level of challenge, which appeals to Aries’ adventurous and thrill-seeking nature. The intensity of the heat makes them work harder, which suits their desire for a powerful practice.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Rocket Yoga',  Benefits: ' Builds strength and flexibility and promotes cardiovascular health. It allows Aries to experiment and push their boundaries, which keeps them engaged and motivated', GoodFor: 'Rocket Yoga is a modern, faster-paced variation of Ashtanga yoga, designed to make the Ashtanga series more accessible and dynamic. Its intensity and fast transitions between poses match the energetic and adventurous spirit of Aries. This yoga style also allows Aries to challenge themselves while embracing flexibility.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'AcroYoga',  Benefits: 'Improves core strength, balance, and flexibility. The teamwork aspect helps Aries build trust and enhance communication skills.', GoodFor: 'AcroYoga blends yoga with acrobatics and is usually practiced with a partner. Aries’ social and adventurous nature makes this practice exciting and challenging. It tests their strength, balance, and coordination while allowing them to connect with others in a fun, collaborative way.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Yoga Nidra',  Benefits: 'Reduces stress, improves sleep quality, and fosters deep mental and physical relaxation. It is perfect for Taurus when they need to unwind and restore their energy.', GoodFor: 'Yoga Nidra is a deeply relaxing, guided meditation practice that brings the body into a sleep-like state of conscious relaxation. For Taurus, who often seek comfort and relaxation, this practice is ideal for releasing stress and connecting with their inner peace.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Moon Salutations',  Benefits: 'Improved flexibility, Increased strength, Improved balance and coordination, Better digestion, Enhanced blood circulation', GoodFor: 'Cancer is ruled by the Moon, so Moon Salutations are a wonderful practice for them. This flow is more soothing and introspective compared to the Sun Salutation, connecting Cancer individuals to lunar energy and their emotions.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Heart-Opening Poses',  Benefits: 'Opens the chest and heart, encourages emotional release, improves posture, and boosts self-esteem and compassion.', GoodFor: ' Leos are ruled by the heart and are known for their generosity and warmth, heart-opening poses like Camel Pose (Ustrasana), Cobra Pose (Bhujangasana), and Wheel Pose (Chakrasana) are particularly beneficial. These poses enhance emotional openness and confidence.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Partner Yoga',  Benefits: 'Enhances communication, trust, and balance, while providing a playful and social way to practice yoga. It also improves strength and coordination in a collaborative and fun environment.', GoodFor: 'As a sign that thrives on relationships and connection, Libras may enjoy partner yoga or AcroYoga, which encourages teamwork and communication. It allows Libras to build trust and find harmony with others.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Aerial Yoga',  Benefits: 'Improves core strength, flexibility, and balance. Aerial yoga offers an exciting and dynamic challenge that keeps Sagittarius mentally engaged and physically stimulated.', GoodFor: 'Sagittarius is adventurous, and Aerial yoga offers an exciting and unconventional way to practice yoga using a suspended hammock. This practice satisfies their love for trying new things and pushing boundaries, while also being playful and fun.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Yoga with Travel Retreats',  Benefits: 'Combines physical practice with travel and adventure, which is deeply fulfilling for Sagittarius. Yoga retreats offer a break from routine, allowing them to connect with different cultures, nature, and new experiences.', GoodFor: 'As natural explorers, Sagittarians are likely to enjoy yoga retreats in exotic locations. Practicing yoga while traveling appeals to their wanderlust and love for expanding their horizons.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Bhakti Yoga',  Benefits: 'Fosters a deep sense of connection with the heart and spirit, promotes emotional healing, and enhances feelings of love and compassion. Bhakti yoga helps Pisces connect with their compassionate nature and release emotional blockages.', GoodFor: 'Bhakti yoga is the path of devotion, often practiced through chanting, prayer, and emotional connection to the divine. Pisces, being naturally spiritual and compassionate, are drawn to practices that emphasize love, devotion, and surrender', image: 'Type-of-yoga.jpg', Link: '' }

];

const filteredObjects = arrayOfObjects.filter(obj => nameList.includes(obj.name));

console.log(filteredObjects);
ViewFunc(filteredObjects, Textit, zodiacSign)
}

function ViewFunc(Datas, textor, Signs) {
  typewriter(textor, 12);

  const myCards = document.getElementById('YogaCards');
  myCards.style.display = 'block';

  const MyForm = document.getElementById('zodiacForm');
  MyForm.style.display = 'none';

  myCards.innerHTML = '';
  let insideMyCards = `<span>`;

  Datas.forEach((item, indes) => {
    console.log(item);
    insideMyCards += `<div class="blog-card">
                        <div class="meta">
                            <div class="photo" style="background-image: url(./../../../assets/images/Astrology/Yoga/Hatha-Yoga.png)"></div>
                            <ul class="details">
                                <li class="author"><a href="#">${item.name}</a></li>
                                <li class="date">Duration: 10min</li>
                                <li class="tags">
                                    <ul>
                                        <li><a href="#">Watch video</a></li>
                                        <li><a href="#">Read how to do</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="description">
                            <h1>${item.name}</h1>
                            <h2>Benefits of ${item.name}:</h2>
                            <p>${item.Benefits}</p>
                            <p class="read-more">
                                <a class="toggleButton">Read More</a>
                            </p>
                        </div>
                      </div>
                      <div class="section" style="display:none;">
                          <h4>Why ${item.name} works for ${Signs}:</h4>
                          <p>${item.GoodFor}</p>
                          <p class="read-more">
                              <a href="Yogas.html?id=${item.name}">Start ${item.name} now </a>
                          </p>
                      </div>`;
  });

  insideMyCards += `</span>`;
  myCards.innerHTML = insideMyCards;

  // Event delegation - Attach event listener to the parent, not individual buttons
  myCards.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('toggleButton')) {
      // Toggle the associated section when the button is clicked
      const section = event.target.closest('.blog-card').nextElementSibling;

      if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block'; // Show the section
      } else {
        section.style.display = 'none'; // Hide the section
      }

      // Prevent event propagation when clicking the button
      event.stopPropagation();
    }
  });

  // Close the section when clicking anywhere outside
  document.addEventListener('click', function(event) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      if (!section.contains(event.target) && !event.target.classList.contains('toggleButton')) {
        section.style.display = 'none'; // Close all sections
      }
    });
  });
  }
  











    function typewriter(text, speed) {
      let index = 0; 
      const container = document.getElementById('paraf'); 
    
      function type() {
          if (index < text.length) {
              container.textContent += text.charAt(index); 
              index++; 
              setTimeout(type, speed); 
          }
      }
    
      type(); // Start typing
    }