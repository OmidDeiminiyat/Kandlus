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
if (zodiacSign === 'Virgo') {
    a = 'engar Yoga, Hatha Yoga, Vinyasa Yoga, Restorative Yoga, Yin Yoga, Ashtanga Yoga, Ashtanga Yoga, Kundalini Yoga';
    Textit = 'For someone born under the zodiac sign Virgo (August 23 - September 22), the ideal physical practice in yoga would align with Virgos personality traits and physical needs. Virgos are typically known for their attention to detail, discipline, health-conscious mindset, and a love for routines that improve their well-being. They tend to be perfectionists and can sometimes experience anxiety or overthink things. Below is a list of yogas that are suitable for Virgo';
} else if (zodiacSign === 'Aries') {
    a = 'Power Yoga, Vinyasa Flow, Bikram/Hot Yoga, Rocket Yoga, AcroYoga, Hatha Yoga, Kundalini Yoga, Ashtanga Yoga, ';
    Textit = 'For someone born under the zodiac sign Aries (March 21 - April 19), the ideal physical yoga practice should reflect Aries’ natural characteristics. Aries is a fire sign ruled by Mars, known for its energy, enthusiasm, passion, and action-oriented nature. People born under Aries tend to be driven, competitive, and physically active, so they benefit from yoga practices that challenge their strength, stamina, and flexibility while also calming their often restless minds. Below is a list of yogas that are suitable for Aries';
} else if (zodiacSign === 'Taurus') {
    a = 'Hatha Yoga, Yin Yoga, Restorative Yoga, Iyengar Yoga, Vinyasa Yoga, Kundalini Yoga, Yoga Nidra , '
    Textit = 'For someone born under the zodiac sign Taurus (April 20 - May 20), the ideal physical yoga practice should reflect Taurus natural characteristics. Taurus is an earth sign, ruled by Venus, known for being grounded, patient, practical, and focused on comfort and stability. Taureans appreciate routines that help them feel connected to their bodies and the physical world, while also offering relaxation and pleasure. Below is a list of yogas that are suitable for Taurus';
}
const nameList = a.split(', ').map(name => name.trim()); // ["Jack", "Peter", "Diana", "Michael", "Sara"]
const arrayOfObjects = [
{name: 'Iyengar Yoga',  Benefits: 'Improves posture, strengthens muscles, and enhances body awareness, while also calming their often overactive minds.', GoodFor: 'Virgos love precision, and Iyengar Yoga emphasizes perfect alignment and detail in each posture. It uses props like belts, blocks, and blankets to ensure that every pose is done correctly and safely. This style appeals to Virgo’s meticulous nature and can help them feel in control of their physical practice', image: 'Type-of-yoga.jpg' },
{name: 'Hatha Yoga',  Benefits: 'Helps improve flexibility, balance, and concentration. The calm pace is great for reducing stress and promoting mental clarity.', GoodFor: 'Hatha Yoga is slower-paced and focuses on holding poses and breathing, which gives Virgo the space they need to perfect their alignment and dive deep into each asana. Virgos like structured routines, and Hatha yoga provides a balanced, methodical practice.', image: 'Type-of-yoga.jpg', Link: '' },
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
{name: 'Restorative Yoga',  Benefits: 'Reduces stress, promotes deep relaxation, and improves overall well-being. Restorative Yoga is perfect for Taurus when they need to recharge and reconnect with themselves.', GoodFor: 'Restorative Yoga focuses on deeply relaxing poses supported by props like blankets and bolsters. Taurus, who values comfort and relaxation, will find this style nurturing and grounding. It allows them to indulge in relaxation without too much physical exertion.', image: 'Type-of-yoga.jpg', Link: '' },
{name: 'Yoga Nidra',  Benefits: 'Reduces stress, improves sleep quality, and fosters deep mental and physical relaxation. It is perfect for Taurus when they need to unwind and restore their energy.', GoodFor: 'Yoga Nidra is a deeply relaxing, guided meditation practice that brings the body into a sleep-like state of conscious relaxation. For Taurus, who often seek comfort and relaxation, this practice is ideal for releasing stress and connecting with their inner peace.', image: 'Type-of-yoga.jpg', Link: '' }
// {name: 'AcroYoga',  Benefits: '', GoodFor: '', image: 'Type-of-yoga.jpg', Link: '' },
// {name: 'AcroYoga',  Benefits: '', GoodFor: '', image: 'Type-of-yoga.jpg', Link: '' },
// {name: 'AcroYoga',  Benefits: '', GoodFor: '', image: 'Type-of-yoga.jpg', Link: '' },

];

const filteredObjects = arrayOfObjects.filter(obj => nameList.includes(obj.name));

console.log(filteredObjects);
}




