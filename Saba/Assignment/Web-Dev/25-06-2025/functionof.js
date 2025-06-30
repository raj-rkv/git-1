let arr =[1,2,3,4,5];
arr.forEach(
    (a,b)=>{
        arr[b]=a*2;
       // console.log(a);
    });
    for(let a=0;a<arr.length;a++){
        console.log(arr[a]);
    }



    setTimeout(()=>{
    console.log("heelo World");
},1000);
setTimeout(()=>{
    console.log("hello Earth");
},500);
for(let i=1;i<2;i++){
    console.log(i);
}
function hello(name){
    console.log('hello ${name}');
}
setTimeout(()=>{
    console.log("hello Earth");
},100);
hello("Abhishek");




setTimeout(()=>{
    console.log("heelo World");
},1000);
setTimeout(()=>{
    console.log("hello Earth");
},500);
for(let i=1;i<2;i++){
    console.log(i);
}
function hello(name){
    console.log('hello ${name}');
}
setTimeout(()=>{
    console.log("heelo World");
},1000);
setTimeout(()=>{
    console.log("hello Earth");
},500);
hello("Abhishek");



let a = 10;
for(var i=0; i<=10;i++){
    console.log(i);
}
console.log(a);
console.log(i);