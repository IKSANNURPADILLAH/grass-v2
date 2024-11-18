require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('=================================================================='.cyan);
    console.log('=                       Ace Market                               ='.cyan);
    console.log('=                  Recode by vodka.ace                           ='.cyan);
    console.log('=================================================================='.cyan);
    console.log();
  }

module.exports = { delay, displayHeader };
