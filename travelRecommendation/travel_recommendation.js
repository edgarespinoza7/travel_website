const apiUrl = './travel_recommendation_api.json'
const inputField = document.getElementById('destinationInput');
const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');
const result = document.getElementById('result');


// Function to fetch data from a JSON file
async function fetchDestinations() {
  try {
    const response = await fetch(apiUrl); // Adjust the path if necessary
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data
  }
  catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function handleSearch() {

  const inputValue = inputField.value.trim().toLowerCase();
  const dataNew = await fetchDestinations()

  console.log(inputValue)

  if (inputValue === "beach" || inputValue === "beaches") {
    console.log("aqui", Boolean("beaches"))
    result.innerHTML = `
        <div class="bg-white p-4 mb-4">
        <h1 class="text-slate-800 text-xl font-bold">${dataNew.beaches[0].name}</h1>
        <img src=${dataNew.beaches[0].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
        <p>${dataNew.beaches[0].description}</p>
        <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>
        <div class="bg-white p-4">
        <h1 class="text-slate-800 text-xl font-bold">${dataNew.beaches[1].name}</h1>
        <img src=${dataNew.beaches[1].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
        <p>${dataNew.beaches[1].description}</p>
        <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>
        `
  } else if (inputValue === "temple" || inputValue === "temples") {
    result.innerHTML = `
        <div class="bg-white p-4 mb-4">
        <h1 class="text-slate-800 text-xl font-bold">${dataNew.temples[0].name}</h1>
        <img src=${dataNew.temples[0].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
        <p>${dataNew.temples[0].description}</p>
        <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>
        <div class="bg-white p-4">
        <h1 class="text-slate-800 text-xl font-bold">${dataNew.temples[1].name}</h1>
        <img src=${dataNew.temples[1].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
        <p>${dataNew.temples[1].description}</p>
        <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>
        `
  } else if (inputValue === "country" || inputValue === "countries") {
    result.innerHTML = `
      <div class="bg-white p-4 mb-4">
        <h1 class="text-slate-800 text-xl font-bold">${dataNew.countries[0].name}</h1>
        <div class="mb-3">
          <h2 class="font-bold">${dataNew.countries[0].cities[0].name}</h2>
          <img src=${dataNew.countries[0].cities[0].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
          <p>${dataNew.countries[0].cities[0].description}</p>
          <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>

       <hr class="mt-5 mb-5"/>

        <div>
          <h2 class="font-bold">${dataNew.countries[0].cities[1].name}</h2>
          <img src=${dataNew.countries[0].cities[1].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
          <p>${dataNew.countries[0].cities[1].description}</p>
          <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>
      </div>


      <div class="bg-white p-4 mb-4">
        <h1 class="text-slate-800 text-xl font-bold">${dataNew.countries[1].name}</h1>
        <div class="mb-3">
          <h2 class="font-bold">${dataNew.countries[1].cities[0].name}</h2>
          <img src=${dataNew.countries[1].cities[0].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
          <p>${dataNew.countries[1].cities[0].description}</p>
          <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>

       <hr class="mt-5 mb-5"/>

        <div>
          <h2 class="font-bold">${dataNew.countries[1].cities[1].name}</h2>
          <img src=${dataNew.countries[1].cities[1].imageUrl} alt="bora-bora" class="w-[100%] py-4" />
          <p>${dataNew.countries[1].cities[1].description}</p>
          <button class="bg-slate-900 w-[100px] py-2 mt-2 text-white">Visit</button>
        </div>
      </div>
        `
  }
  else {
    result.innerHTML = `
        <div class="bg-white p-4 mb-4">
        <h2 class="text-slate-800 text-2xl font-bold">No match found. Please enter a destination or keyword.</h2>
        </div>
        `
  }
}

function handleReset() {
  inputField.value = ''; // Clear the input field
  result.innerHTML = ``
  console.log('Input field has been reset.');
}



