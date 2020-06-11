function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Tanja\'s rule!');
    await sleep(5000);
  }
}

main();
