
const apiUrl = './travel_recommendation_api.json'


// Function to fetch data from a JSON file
async function fetchDestinations() {
  try {
    const response = await fetch(apiUrl); // Adjust the path if necessary
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Destinations:", data); // Log the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Call the function
fetchDestinations();



