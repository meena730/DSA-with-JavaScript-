// calculate the area of triangle
 function area(a,b,c) {
    var s = (a+b+c)/2;
    var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
}
area(6,5,8)

// calculate the area of rectangle
function area (a,b){
    var area =a*b;
    return area
}
console.log(area(2,8))
