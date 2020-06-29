class Request{
    constructor(){
        this.key = "ffbc31fba547034c80af7f7414ecfb2f";
    }
    // get data by city name
    async getData(city){
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.key}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        let obj = {
            main: data.main,
            temp: data.weather,
            mes: data.sys,
            name: data.name,
            weather: data.weather
        };
        return obj;
    }

    // get data by lat and lon
    async getDataByLatLon(lat,lon){
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${this.key}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        let obj = {
            main: data.main,
            temp: data.weather,
            mes: data.sys,
            name: data.name
        };
        return obj;
    }

    // forecast data by city name
    async forecast(city){
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=${this.key}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.list;
    }

    // forecast data by city ID
    async forecastLatLon(lat,lon){
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${this.key}&units=imperial`;
        const response = await fetch(url);
        const data = await response.json();
        return data.list;
    }

}