const PI = Math.PI;

const calcCircleArea = (radius) => { // alan hesaplayan fonksiyon
    let area= PI * Math.pow(radius,2); 
    return console.log(area) ;
}

// console.log(calcCircleArea(2));

const calcCirclePerimeter = (radius) => {
    let perimeter= 2*PI*radius;
    return console.log(perimeter);
}

module.exports ={
    calcCircleArea,
    calcCirclePerimeter
};


