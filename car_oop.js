//create class Car containing attributes
class Car{
    //constructor
    constructor(name, model, manufacturer, year, color){
        this.isEngineOn=false;
        this.break=false;
        this.speedometer=0;
        this.name = name;
        this.model = model;
        this.manufacturer=manufacturer;
        this.year = year;
        this.color=color;
    }
    //move method for moving the car
    move(throtle=false){
        //if isEngineon is false turn on the engine add throttle, and increase speedometer  
        if(this.isEngineOn ==false){
            //set engine to true
           this.isEngineOn = true;
           //set throttle to true
           throtle = true; 
           //increase speedometer by 2
           this.speedometer = this.speedometer + 2;
           console.log(`The engine is moving at a speed of ${this.speedometer}`);

        }
        //if speedometer is greater than 0 increase the speedometer by when the throttle is true
        else if(this.speedometer>0){
            //increase speedometer
            this.speedometer = this.speedometer + 2;
            console.log(`The engine is moving at a speed of ${this.speedometer}`);
        }
        else{
            console.log(`start the engine first`);
        }
        
    }
    //break method to apply break and reduce the speedometer and set throotl
    breakn(throttle=true){
        if(this.break==false){
            //set throttle to false
            throttle = false;
            //set break true
            this.break=true;
            //reduce speedometer speedometer by 2
            this.speedometer = this.speedometer - 2;
            console.log(`The break was applied and has reduced the engine speedometer to ${this.speedometer}`);
        }
        //if the speedometer is greater than 0
        else if(this.speedometer>0){
            //decrease the speedometer by 2
            this.speedometer = this.speedometer - 2;
            console.log(`The break was applied and has reduced the engine speedometer to ${this.speedometer}`);
        }
    }
    //stop method to stop the car engine
    stop(){
        if(this.isEngineOn){
            this.break=false;
            this.isEngineOn = false;
            this.speedometer=0;
            console.log(`The engine has stoppped and the speedometer is ${this.speedometer}`)
        }
    }
}
//create an instance of the car
const car1 = new Car("Toyota Camry", "X350", "Toyota", "2005", "red");
car1.move();
car1.move();
car1.move();
car1.move();