
import { CSVFileReader } from "./CSVFileReader";

const reader = new CSVFileReader("football.csv");
reader.read();

enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}

let arsenalWins = 0;
for(let match of reader.data){
    if(match[1] === "Arsenal" && match[5] === MatchResult.HomeWin)
        arsenalWins++;
    if(match[1] === "Arsenal" && match[5] === MatchResult.AwayWin)
        arsenalWins++;
}
console.log(arsenalWins);