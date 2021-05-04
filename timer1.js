const args = process.argv.slice(2);

const beep = function (beepDelay) {
  setTimeout(() => {
    process.stdout.write("\x07");
  }, beepDelay * 1000);
};

for (let i of args) {
  beep(i);
}
