async function fetchSubscriptionData() {
    try {
        const response = await fetch('backend/users.php');  // PHP file that returns the JSON array
        const data = await response.json();  // Parse the JSON into JavaScript array

        const dataContainer = document.getElementById('data-container');

        // Loop through the data and display it on the page
        data.forEach(item => {
            const dataItem = document.createElement('div');
            dataItem.classList.add('data-item');
            dataItem.innerHTML = `
                <p>Email: ${item.Pro}</p>
                <p>Date Subscribed: ${item.Basic}</p>
            `;
            dataContainer.appendChild(dataItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch data on page load
fetchSubscriptionData();