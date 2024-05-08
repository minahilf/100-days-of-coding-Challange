//Question 37
function makeTshirts(size:string = "Large", message:string = "Never Give Up"){
    console.log(`I'm making T shirt of ${size} size and it has written ${message}`);
}
makeTshirts();

//Question 38
function Cities(city:string, country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
Cities("Islamabad")
Cities("Dubai", "UAE")

//Question 39
function citiesAndCountry(city:string,country:string){
    console.log(`${city},${country}`);
}
citiesAndCountry("Karachi", "Pakistan")