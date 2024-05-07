import yargs from 'yargs';
import puppeteer from 'puppeteer';

const params = getParameters();
console.log(`Generating PDF from "${params.url}" to "${params.outputPath}"`);
getPrintedPdfPathWithPuppeteer(params.url, params.outputPath)
.then(() => console.log("Generated PDF successfully!"))
.catch((e) => console.error(e));


async function getPrintedPdfPathWithPuppeteer  (url: string, outputPath: string)  {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.pdf({path: outputPath, format: 'A4'});
    await browser.close();
}

function getParameters(): ScriptParams {
    const argv: ScriptParams = yargs(process.argv).argv;
    if (!argv.url) {
        throw new Error("url is required");
    }
    if (!argv.outputPath) {
        throw new Error("outputPath is required");
    }
    return argv
}

type ScriptParams = {
    url: string;
    outputPath: string
}
