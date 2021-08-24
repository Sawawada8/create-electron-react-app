require('chromedriver')
const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');

// my modules
// const handleError = require('./handleError')


// console.log(dataBuffer.toString())

// console.log(JSON.parse(dataBuffer.toString()))

// function main() {
//     // jsonデータを取得する
//     handleError(() => {
//         assert('a', 'b')
//         inputText('a')
//     })

// }


function parseFileData(path) {
    const dataBuffer = fs.readFileSync(path);
    const jsonData = JSON.parse(dataBuffer.toString());
    return jsonData
}
// const fileData = parseFileData('./settings.json')

function assert(realText, trueText) {
    if (realText == trueText) {
        return true
    } else {
        throw new Error(' 指定DOMのテキスト : ' + realText + ' |  想定したテキスト : ' + trueText + ' | 一致していません。 ')
    }
}

async function inputText(driver, xpath, text) {
    await driver.findElement(By.xpath(xpath)).sendKeys(text)
    const a = await driver.findElement(By.xpath(xpath)).getText()
    await console.log(a)
    // await setTimeout(() => {
    //     console.log('aaaaaa')

    // }, 5000)
}

async function getElementTextByXpath(driver, xpath) {
    const text = await driver.findElement(By.xpath(xpath)).getText();
    return text
}

async function getElementTextByXpatha(driver, xpath) {
    const text = await driver.findElement(By.xpath(xpath)).getText();
}

// function handleError(func) {
//     try {
//         func()
//     } catch(e) {
//         console.log('!!!!!!!!!!!!!!!!!')
//         console.log(e.message)
//         console.log('!!!!!!!!!!!!!!!!!')
//     }
// }

// /*
(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com');
    // await driver.get('http://localhost:3030');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    
    // const a = await driver.findElement(By.css('.card-title')).getText();
    // const a = await getElementTextByXpath(driver, '/html/body/main/div/form/div/div[1]/div[2]')
    // const a = await driver.findElement(By.xpath('/html/body/main/div/form/div/div[1]/div[2]')).getText();
    // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    // console.log(a)

    // await inputText(driver, '/html/body/main/div/form/div/div[2]/div/div[1]/div/input', 'aaaaaatestest')
  }catch(e){console.log(e.message)
  } finally {
    await driver.quit();
  }
})();
// */

// main();


