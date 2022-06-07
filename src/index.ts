
import { CSVFileReader } from "./CSVFileReader";
import { MatchResult } from "./MatchResult";


const reader = new CSVFileReader("football.csv");
reader.read();


let arsenalWins = 0;
for(let match of reader.data){
    if(match[1] === "Arsenal" && match[5] === MatchResult.HomeWin)
        arsenalWins++;
    if(match[1] === "Arsenal" && match[5] === MatchResult.AwayWin)
        arsenalWins++;
}
console.log(arsenalWins);