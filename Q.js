class Cylinder{
     getVolume(r,h){
        return (Math.PI*r*r*h).toFixed(4);

    }
}
class Sphere{
    getVolume(r,h){
       return ((4/3)*Math.PI*r*r*r).toFixed(4);

   }
}
class Cone{
    getVolume(r,h){
       return ((1/3)*Math.PI*r*r*h).toFixed(4);

   }
}

let obj= new Cylinder();
let obj1= new Sphere();
let obj2= new Cone();

console.log("Volume of Cylinder "+obj.getVolume(10,20));
console.log("Volume of Sphere "+obj1.getVolume(10,20));
console.log("Volume of Cone "+obj2.getVolume(10,20));