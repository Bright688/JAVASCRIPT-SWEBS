//Test Data1 score given
const Dolphins_score1 = [44, 23, 71];
const Koalas1 = [65, 54, 49];
dolphin_add1=0;
koalas_add1=0;
dolphin_average1=0;
koalas_average1=0;

//function to take the dolphin and koalas average parameter
const checkWinner =(avgDolphins, avgKoalas)=>{
   //check the winner
   if((avgDolphins)>=(2*avgKoalas)){
    console.log(`Dolphin wins (${avgDolphins}) vs (${avgKoalas})`);
   }
   else if((avgKoalas)>=(2*avgDolphins)){
    console.log(`Koalas wins (${avgKoalas}) vs (${avgDolphins})`);
   }
   else{
     console.log("No winner");
   }
}

//add dolphin score and get the average
for(let i=0; i<Dolphins_score1.length; i++){
   //add dolphin scores
   dolphin_add1=Dolphins_score1[i]+dolphin_add1;
   //get the average for the dolphin
   dolphin_average1=dolphin_add1/3;
}

//add koalas score and get the average
for(let i=0; i<Koalas1.length; i++){
    //add koalas scores
    koalas_add1=Koalas1[i]+koalas_add1;
    //get the average for the koalas
    koalas_average1=koalas_add1/3;
 }
 console.log("Test Data 1");
 checkWinner(dolphin_average1, koalas_average1);

//Test Data2 score given
//Test Data1 score given
const Dolphins_score2 = [85, 54, 41]
const Koalas2 = [23, 34, 27];
dolphin_add2=0;
koalas_add2=0;
dolphin_average2=0;
koalas_average2=0;

//add dolphin score and get the average
for(let i=0; i<Dolphins_score2.length; i++){
   //add dolphin scores
   dolphin_add2=Dolphins_score2[i]+dolphin_add2;
   //get the average for the dolphin
   dolphin_average2=dolphin_add2/3;
}

//add koalas score and get the average
for(let i=0; i<Koalas2.length; i++){
    //add koalas scores
    koalas_add2=Koalas2[i]+koalas_add2;
    //get the average for the koalas
    koalas_average2=koalas_add2/3;
 }
 console.log("Test Data 2");
//check the winner
checkWinner(dolphin_average2, koalas_average2);


 

