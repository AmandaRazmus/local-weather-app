export interface ICurrentWeather { //this is the model
    city: string  //these are all typescript so you have to tell it what datatype everything is
    country: string
    date: Date
    image: string //will be a url
    temperature: number 
    description: string
}
