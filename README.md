# Strudel-Resources

This file is a quick reference for the symbols, terms, and functions used in Strudel.

---

## Mini-Notation Symbols

The mini-notation is a compact way to write rhythms and melodies inside a string.

| Symbol | Name | Description | Example |
| :--- | :--- | :--- | :--- |
| ` ` | Space | Separates events in a sequence. | `"bd sd hh"` |
| `~` | Rest / Tilde | Represents a moment of silence. | `"bd ~ bd sd"` |
| `*` | Repetition | Repeats an event N times. | `"hh*4"` |
| `[]`| Subdivision | Groups events to fit into a single step. | `"bd [sd sd]"` |
| `/` | Division | Divides the speed of a subdivision. | `"[hh hh]/2"` |
| `<>`| Euclidean | Creates a Euclidean rhythm. `<k n>` means k events over n steps. | `s("bd*8").struct("<3 8>")` |
| `,` | Polymeter | Plays multiple patterns over different subdivisions of a cycle. | `"bd*3, hh*4"` |
| `?` | Random | Randomly chooses one of the events marked with `?`. | `"bd? sd?"` |
| `x` | Event (in `struct`) | Represents an event trigger. | `.struct("x ~ x ~")` |

---

## Common Sample Names

These are standard, short names for common drum and instrument samples. Many sample packs use these conventions.

| Abbreviation | Full Name |
| :--- | :--- |
| `bd` | Bass Drum (Kick) |
| `sd` | Snare Drum |
| `hh` | Hi-Hat (usually closed) |
| `oh` | Open Hi-Hat |
| `cp` | Clap or Handclap |
| `cb` | Cowbell |
| `cy` | Cymbal |
| `arpy` | An arpeggiated synth sound |

---

## Core Functions

These are the fundamental building blocks for creating sound.

| Function | Description |
| :--- | :--- |
| `setcps()` | Sets the tempo in **C**ycles **P**er **S**econd. |
| `samples()` | Loads a set of samples from a URL or local path. |
| `stack()` | Layers multiple patterns to play them at the same time. |
| `s()` | Plays a **s**ample. |
| `n()` | Plays a **n**ote with a synth. |
| `chord()` | Generates a chord pattern from a chord name. |
| `scale()` | Generates a scale pattern. |
| `note()` | Alias for `n()`. |
| `sound()` | Alias for `s()`. |

---

## Pattern Transformations

Functions that modify or transform a pattern.

| Function | Description |
| :--- | :--- |
| `every(n, func)` | Applies `func` to a pattern every `n` cycles. |
| `sometimes(func)` | Applies `func` randomly to a pattern. |
| `rev` | Reverses a pattern. Used inside another function, like `every(2, rev)`. |
| `slow(n)` | Slows down a pattern by a factor of `n`. |
| `fast(n)` | Speeds up a pattern by a factor of `n`. |
| `struct(pattern)` | Imposes a rhythmic structure onto a pattern's events. |
| `mask(pattern)` | Filters a pattern using a boolean (1s and 0s) pattern. |
| `jux(func)` | **Jux**taposes a transformation, applying it to every other event. |

---

## Effects (FX)

Functions that add audio effects to a pattern.

| Function | Parameter | Description |
| :--- | :--- | :--- |
| `gain()` | `0` to `1` | Sets the volume of the sound. |
| `delay()` | `0` to `1` | Sets the "wetness" or mix of the delay effect. |
| `delaytime()` | `1/4`, `1/8`, etc. | Sets the time between delay repeats, relative to the cycle. |
| `delayfeedback()`| `0` to `1` | Sets how much of the delayed sound is fed back into the delay line. |
| `room()` | `0` to `1` | Sets the mix of the reverb effect. |
| `size()` | `0` to `1` | Sets the size of the virtual room for the reverb. |
| `shape()` | `0` to `1` | Adds distortion / waveshaping. `0` is none, `1` is a lot. |
| `lpf()` | frequency in Hz | Sets the cutoff frequency for the **L**ow **P**ass **F**ilter. |
| `lpq()` | number | Sets the resonance or "Q" of the low pass filter. |
| `hpf()` / `hpq()` | | **H**igh **P**ass **F**ilter and its resonance. |

---

## Synth & Note Functions

Functions related to playing synthesizers and notes.

| Function | Description |
| :--- | :--- |
| `.s("synth_name")` | Sets the synth sound for a note pattern (`n` or `chord`). |
| `voicing()` | Intelligently arranges the notes of a chord into a "voicing". |
| `sine` / `saw` / etc. | Continuous signal generators, often used to modulate parameters. |
| `.range(min, max)` | Scales a signal to a specific range. |

---

## Keyboard Shortcuts (in the REPL)

These are the default shortcuts for controlling the Strudel REPL. "Evaluate" means to run the code.

| Shortcut | Action | Description |
| :--- | :--- | :--- |
| `Ctrl` + `Enter` | Evaluate Block | Runs the block of code your cursor is currently in. |
| `Shift` + `Enter`| Evaluate Line | Runs the single line of code your cursor is on. |
| `Ctrl` + `.` | Hush | Stops all sound immediately. |
| `Cmd` + `/` | Toggle Comment | Comments or uncomments the selected line(s) of code. (Use `Ctrl` + `/` on Windows/Linux) |
| `Alt` + `Shift`+ `F`| Format Code | Automatically formats and tidies up the code in the editor. | 
