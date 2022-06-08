
import { MatchReader } from "./MatchReader";
import {CsvFileReader} from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";
import { WinAnalysis } from "./analyzer/WinAnalysis";

const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalysis("Arsenal"), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);