import fs from "fs";
import { OutputTarget } from "../Summary";

export class HTLMReport implements OutputTarget {
    print(report: string): void {
        const html = `
        <section>
        <h2>Match Analysis</h2>
        <p>${report}</p>
        </section>
        `;
        fs.writeFileSync("report.html", html);
    }
}