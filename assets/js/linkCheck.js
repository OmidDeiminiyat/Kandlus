function pageview(data) {
    if (data == 3) {
      console.log('data is 3');
      const sendTo = "../Astrology/ascendant.html";
      localStorage.setItem('KC', '3');
      window.location.href = sendTo;
    } else if (data == 4) {
        const sendTo = "../Astrology/Biorythm.html";
        localStorage.setItem('KC', '4');
        window.location.href = sendTo;
    } else if (data == 5) {
      const sendTo = "../Astrology/Characteris.html";
      localStorage.setItem('KC', '5');
      window.location.href = sendTo;
  }  else if (data == 6) {
    const sendTo = "../Astrology/list-of-Yoga.html";
    localStorage.setItem('KC', '6');
    window.location.href = sendTo;
} else if (data == 7) {
  const sendTo = "../Astrology/Numerology.html";
  localStorage.setItem('KC', '7');
  window.location.href = sendTo;
} else if (data == 8) {
  const sendTo = "../podcast/Solfeggio_frequency.html";
  localStorage.setItem('KC', '8');
  window.location.href = sendTo;
} else if (data == 9) {
  const sendTo = "../Astrology/NumerologyTable.html";
  localStorage.setItem('KC', '9');
  window.location.href = sendTo;
} else if (data == 10) {
  const sendTo = "../Astrology/Horoscope.html";
  localStorage.setItem('KC', '10');
  window.location.href = sendTo;
} else if (data == 11) {
  const sendTo = "../Astrology/Radical_number.html";
  localStorage.setItem('KC', '11');
  window.location.href = sendTo;
} 
}