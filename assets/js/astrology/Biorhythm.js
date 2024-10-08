
        function calculateBiorhythm(birthDate, currentDate, cycle) {
            const birthTime = birthDate.getTime();
            const currentTime = currentDate.getTime();
            const diffInDays = Math.floor((currentTime - birthTime) / (1000 * 60 * 60 * 24));
            const cyclePosition = Math.sin(2 * Math.PI * (diffInDays % cycle) / cycle);
            return cyclePosition;
        }

        document.getElementById('zodiacForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const dob = new Date(document.getElementById('dob').value);
            const today = new Date();
            
            if (dob == "Invalid Date") {
                alert("Please enter a valid date.");
                return;
            }

            // Calculate biorhythms
            const physical = calculateBiorhythm(dob, today, 23);
            const emotional = calculateBiorhythm(dob, today, 28);
            const intellectual = calculateBiorhythm(dob, today, 33);

            // Display the results
            const resultText = `
                <p><strong>Your Physical Biorhythm is:</strong> ${physical.toFixed(2)}. This means you are at the peak of your physical condition. At this time you may feel energetic, strong and full of vitality. </p>
                <p><strong>Emotional Biorhythm:</strong> ${emotional.toFixed(2)}</p>
                <p><strong>Intellectual Biorhythm:</strong> ${intellectual.toFixed(2)}</p>
            `;
            
            document.getElementById('result').innerHTML = resultText;
        });
    