document.addEventListener("DOMContentLoaded", function(){
	const CountrySelect = document.getElementById('country_id');
	const citySelect = document.getElementById('city_id');
	const outputDiv = document.getElementById('output');
	
	
	for(const country in COUNTRIES){
		const option = document.createElement('option');
		option.value = country;
		option.textContent = country
		CountrySelect.appendChild(option);
	}
	
	countrySelect.addEventListener('change', function(){
		const selectedCountry = CountrySelect.value;
		updateCities(selectedCountry);
	});
	
	function updateCities(Country){
		
		citySelect.innerHTML = '';
		
		const cities = COUNTRIES[Country];
		if (cities) {
			cities.forEach(city => {
				const option = document.createElement('option');
				option.value = city;
				option.textContent = city;
				citySelect.appendChild(option);
			});
		}
		updateOutput();
	}
	citySelect.addEventListener('change', updateOutput);
	
	function updateOutput() {
		const selectedCountry = CountrySelect.value;
		const selectedCity = citySelect.value;
		if (selectedCountry && selectedCity){
			outputDiv.textContent = `pays selectionné: ${selectedCountry}, Ville selectionné: ${selectedCity}`;
		}
		else{
			outputDiv.textContent = '';
		}
	}
});
	