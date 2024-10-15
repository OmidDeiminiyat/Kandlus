async function fetchSubscribeData() {
    try {
        const response = await fetch('../backend/data.php');  // Call the PHP file
        const data = await response.json();

        const dataContainer = document.getElementById('data-container');
        
        const filteredData = data.filter(item => item.Code === 'Omid938xd');
        if (Array.isArray(filteredData)) {
            filteredData.forEach(item => {
                const dataItem = document.createElement('div');
                dataItem.classList.add('data-item');

                dataItem.innerHTML = `
                    <p>Email: ${item.email}</p>
                    <p>Date Subscribed: ${item.subscribed_date}</p>
                `;

                dataContainer.appendChild(dataItem);
            });
        } else {
            dataContainer.innerHTML = '<p>No data found or unexpected data format.</p>';
        }
    } catch (error) {
        console.error('Error fetching subscribe data:', error);
    }
}

// Fetch the data on page load
 fetchSubscribeData();