/*Back to the two gymnastics teams, the Dolphin and
the Koalas There is a new gymnastics discipline,
which works differently.! 
Each team competes 3 times, and then the average of
the 3 scores is calculated (so one average score per
team) .
A team ONLY wins if it has at least DOUBLE the
average score of the other team. Otherwise, no team
wins!

1. Create an arrow function 'calcAverage' to
calculate the average of 3 scores
2. Use the function to calculate the average for both
teams
3. Create a function 'checkWinner' that takes the
average score of each team as parameters
('avgDolhins' and 'avgKoalas'), and then logs the
winner to the console, together with the victory
points, according to the rule above. Example: "Koalas
win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the
winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas
score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas
score 23, 34 and 27

HINT: To calculate average of 3 values, add them all
together and divide by 3
HINT: To check if number A is at least double number
B, check for A >= 2 * B. Apply this to the team's
average scores */



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
     console.log("No Team wins");
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


 

