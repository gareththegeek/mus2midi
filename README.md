# mus2midi

A library for converting mus format audio files found in Doom wads to midi format.

Thanks to the following resources for helping me figure this out:

- [Doom wiki](https://doomwiki.org/wiki/MUS)
- [DOS Game Modding Wiki - MUS Format](https://moddingwiki.shikadi.net/wiki/MUS_Format)
- [DOS Game Modding Wiki - MIDI Format](https://moddingwiki.shikadi.net/wiki/MID_Format)

## Installation

```bash
yarn add mus2midi
```
or
```bash
npm install --save mus2midi
```

## Usage Example

Reading the file `e1m1.mus`, converting to midi and writing out to `e1m1.mid`.

```typescript
import { promises as fs } from 'fs'
import { mus2midi } from 'mus2midi'

(async () => {
    const mus = await fs.readFile('e1m1.mus')
    const mid = mus2midi(mus)
    await fs.write('e1m1.mid', mid)
})()
```

## Build

```bash
yarn
yarn build
```
