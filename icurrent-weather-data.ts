export interface ICurrentWeatherData {
    //choose what you want from the OW API
    weather: [
        {
            description: string, 
            icon: string,
        }
    ], 
    main: {
        temp: number, 
    }
    dt: number, 
    sys: {
        country: string,
    }
    name: string,
    }

