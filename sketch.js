/* jslint esversion: 8 */
var randomRangeEnd = 0;
var randomRangeStart = 19929;
var i = 0;
var l2 = 40,
  col = [];

function setup() {
  createCanvas(200, 200);
  for (let l = 0; l < l2; l++) col[l] = [];
  for (let l = 0; l < l2; l++) for (let t = 0; t < l2; t++) col[l][t] = [];
  for (let l = 0; l < l2; l++)
    for (let t = 0; t < l2; t++)
      for (let e = 0; e < 3; e++) (col[l][t][e] = 0);
}
async function gen() {
  for (let l = 0; l < l2; l++) {
    for (let t = 0; t < l2; t++){
      for (let e = 0; e < 3; e++) {
        randomSeed(random(1,random(1,random(randomRangeStart,randomRangeEnd))));
        col[l][t][e] = random(0,1)*255;

      }
    }
  }
}
async function draw() {
  rectMode(CORNERS), background(255), await gen();
  for (let l = 0; l < l2; l++)
    for (let t = 0; t < l2; t++)
      fill(col[l][t]),
        noStroke(),
        rect(
          map(l, 0, l2, 0, width),
          map(t, 0, l2, 0, height),
          map(l + 1, 0, l2, 0, width),
          map(t + 1, 0, l2, 0, height)
        );
}

function randombw() {
  var ran = random(1, 2);
  if (round(ran) == 1) {
    return 0;
  } else if (round(ran) == 2) {
    return 255;
  }
}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}
