
import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";


const reader = new MatchReader("football.csv");
reader.read();


let arsenalWins = 0;
for(let match of reader.data){
    if(match[1] === "Arsenal" && match[5] === MatchResult.HomeWin)
        arsenalWins++;
    if(match[1] === "Arsenal" && match[5] === MatchResult.AwayWin)
        arsenalWins++;
}
console.log(arsenalWins);