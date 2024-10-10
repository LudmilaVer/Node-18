type Car = {
    mark: string;
    model: string;
    engine: {
      type: string;
      horsepower: number;
    };
    year?: number; 
  };
  
  const myCar: Car = {
    mark: "Mersedes",
    model: "B-170",
    engine: {
      type: "TS",
      horsepower: 168
    },
    year: 2007
  };
  
  function printCarInfo(car: Car): void {
    console.log(`Mark: ${car.mark}, Model: ${car.model}`);
    console.log(`Engine: ${car.engine.type}, Horsepower: ${car.engine.horsepower}`);
    if (car.year) {
      console.log(`Year: ${car.year}`);
    }
  }
  
  printCarInfo(myCar);