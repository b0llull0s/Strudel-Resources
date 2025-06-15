// Strudel Cheat Sheet
// Copy and paste any of these examples into the Strudel REPL: https://strudel.cc/

// --- BASICS ---

// Set the speed in cycles per second. 0.5 is one cycle every 2 seconds.
setcps(0.5)

// `s` is for playing samples. This plays a kick drum on every cycle.
s("bd")

// A sequence of sounds within a cycle using mini-notation.
s("bd sd bd hh")

// Use `stack` to layer patterns. Each pattern gets its own line.
stack(
  s("bd sd"),
  s("hh*4") // hh*4 is shorthand for "hh hh hh hh"
)

// --- MINI-NOTATION ---

// Subdivide a step into smaller parts with square brackets.
s("bd [sd sd] bd [hh hh hh hh]")

// Use ~ for silence.
s("bd ~ bd sd")

// Create euclidean rhythms with < >. "<3 8>" means 3 events in 8 steps.
s("hh*8").struct("<3 8>")

// Polymeters with commas. This plays 3 against 4.
s("bd*3, hh*4")

// Randomly select one of the samples.
s("bd? sd? cp?")

// --- PATTERN TRANSFORMATIONS ---

// `every` applies a function to a pattern at a certain interval.
// This reverses the pattern every 4 cycles.
s("bd sd").every(4, rev)

// `sometimes` applies a function randomly.
s("bd sd").sometimes(rev)

// Control volume with `gain`.
s("bd sd").gain(0.8)

// Change the speed of a pattern.
stack(
  s("bd sd"),
  s("hh*4").slow(2) // Plays at half speed
)

// --- EFFECTS (FX) ---

// Add reverb with `room` and `size`.
s("sd").room(0.7).size(0.8)

// Add a delay.
s("cp").delay(0.5).delaytime(0.75)

// Use filters like `lpf` (low-pass filter).
s("arpy").lpf(500).lpq(5)

// Add distortion with `shape`.
s("bd").shape(0.5)

// --- SYNTHS & NOTES ---

// `n` is for playing notes with the default synth.
// Notes can be specified by name or number (MIDI).
n("c4 g4 e4 d4")

// Use `s` to specify the synth sound.
n("c4 g4 e4 d4").s("sawtooth")

// You can also use numbers for notes.
n("0 8 4 2").s("square")

// Generate chords.
chord("Am C G F").s("gm_epiano1")

// Use scales to create melodies.
// This plays a C major scale.
n(scale("major", "0 1 2 3 4 5 6 7")).s("marimba")

// --- SIGNALS ---

// Use continuous signals like `sine` to modulate parameters.
// This creates a wah-wah effect on the filter.
n("c4").s("sawtooth").lpf(sine.range(500, 2000).slow(4))

// Use perlin noise for more random, but smooth, modulation.
s("bd sd").gain(perlin.range(0.5, 1).slow(8))

// --- JAVASCRIPT INTEGRATION ---

// You can use standard JavaScript variables to store patterns.
let drums = s("bd [sd sd] bd hh")
let melody = n("c4 g4 e4 d4").s("sawtooth")

stack(
  drums,
  melody
)

// Use arrays to hold lists of notes, samples, or values.
let myNotes = ["c4", "e4", "g4", "b4"];
n(myNotes).s("square")

let mySamples = ["bd", "sd", "hh", "cp"];
s(mySamples)

// Create your own functions for reusable transformations.
function funky(p) {
  return p.every(3, rev).every(4, fast(2)).shape(0.4)
}

// You can then apply this function to any pattern.
// Note: there is no `.pipe()` function.
// You just call the function with the pattern as an argument.
stack(
  funky(s("bd sd")),
  funky(s("arpy")).lpf(800)
)

// Use loops to generate arrays or other data structures.
// Here's a loop to create a rising sequence of 16 notes.
let risingNotes = [];
for (let i = 0; i < 16; i++) {
  risingNotes.push(i);
}

n(risingNotes).s("marimba")

// You can also create more complex data structures.
// For example, an array of objects to control multiple parameters.
let sequence = [
  { n: 0, s: "bd", gain: 1 },
  { n: 1, s: "sd", gain: 0.8 },
  { n: 2, s: "hh", gain: 0.7, lpf: 5000 },
  { n: 3, s: "cp", gain: 0.9, room: 0.5 }
];

stack(
  n(sequence.map(item => item.n)),
  s(sequence.map(item => item.s)),
  gain(sequence.map(item => item.gain)),
  lpf(sequence.map(item => item.lpf)),
  room(sequence.map(item => item.room))
)

// --- VISUALIZATIONS & UI ---

// Add `.pianoroll()` to the end of a pattern to see a visual representation.
// This is great for understanding note and sample structures.
n(scale("minor", "0 1 2 3 4 5 6 7")).s("marimba").pianoroll()

// Another cool visualizer is `.spiral()` which shows events on a spiral.
s("bd sd hh cp [~ bd] [~ sd]").spiral()

// You can create UI sliders directly in your code for live manipulation.
// The arguments are: slider(defaultValue, minValue, maxValue, step)
n("c4").s("sawtooth")
  .lpf(slider(500, 100, 2000, 1))
  .lpq(slider(8, 0.1, 20, 0.1))

// Sliders are also great for controlling effects like delay feedback.
s("cp*4").delay(0.5)
  .delaytime(1/8)
  .delayfeedback(slider(0.5, 0, 0.95, 0.01))
  .room(0.3) 