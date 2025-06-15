// Load the sample configuration from the github repository
// This points to the strudel.json file you have.
samples('https://raw.githubusercontent.com/algorave-dave/samples/main/strudel.json');

// Set the tempo *before* the pattern
setcps(130/60/4)

// The line below was just an example of playing a single sample.
// We'll comment it out to focus on the main pattern.
// s("cocaina");

// We are using `stack` to layer all the available samples.
// Each sample has a different rhythmic pattern to make it more interesting.
stack(
  s("heartbeat").struct("x ~ ~ ~"),
  s("spilltab").struct("~ x ~ ~"),
  s("giveittome").struct("[x x]/2"),
  s("cocaina").every(4, rev),
  s("overgame").sometimes(fast(2)),
  s("technologic").mask("<1 0 1 0 1 0 1 1>"),
  s("ecotone").jux(rev).slow(2),
  s("trial").struct("<~ ~ x ~>"),
  s("forget").every(3, x => x.speed("0.5 2").jux(rev))
) 