// http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=e954f8b25f9fafce004d6c40ae79a7a5
const submitBtn = document.getElementById('submitButton');
const cityName = document.getElementById('cityname');
const city_name = document.getElementById('city_name');

const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');

const datahide=document.querySelector('.middle_layer');




const getInfo = async(event) => {
    event.preventDefault();
    // alert('hii');

    let cityVal = cityName.value;

    if (cityVal == "") {
        city_name.innerText = `Please write the name before search`;
        // datahide.classList.add('data_hide');

    } else {
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e954f8b25f9fafce004d6c40ae79a7a5`;
        const response = await fetch(url);
        const data=await response.json();
        const arrData=[data];

        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText=arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;
        datahide.classList.remove('data_hide');
        console.log(data);
        }catch{
            city_name.innerText = `Please enter the city name properly`;
            // datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);


