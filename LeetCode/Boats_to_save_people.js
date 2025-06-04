function numRescueBoats (people, limit){
    
    people.sort((a,b)=>a-b);

    let i=0;
    let j=people.length-1;
    let boats=0;

    while (i<=j){
        
        if (people[i]+people[j]<=limit){

            i++;

        }

        j--;

        boats++;
    }

    return boats;


}

console.log(numRescueBoats([3, 5, 3, 4], 5)); 