
let moonFlower = '';

for (let i = 1; i <= 6; i++) {    
   for(let j = 1; j < i; j++) {
    moonFlower = moonFlower + '*';
    // console.log(moonFlower);
   }  
   console.log(moonFlower); 
   moonFlower = ' ';
}

