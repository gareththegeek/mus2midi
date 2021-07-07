import { promises as fs } from 'fs'
import * as path from 'path'
import { readMusHead } from './readMusHead'

describe('readMusHead', () => {
    it('correctly parses and returns a Mus file header', async () => {
        const sizeOfWord = 2
        const expectedInstruments = [
            29, 30, 34, 136, 138,
            140, 141, 145, 146, 147,
            149, 150, 151, 153, 157
        ]
        const file = await fs.readFile(path.join(__dirname, '../e1m1.mus'))
        const buffer = Buffer.from(file)
        const context = {
            file: buffer,
            offset: 0,
            volume: 0,
            channels: {}
        }

        const actual = readMusHead(context)

        expect(context.offset).toBe(actual.offSong)
        expect(actual.signature).toEqual(['M'.charCodeAt(0), 'U'.charCodeAt(0), 'S'.charCodeAt(0), 0x1a])
        expect(actual.lenSong).toBe(17237)
        expect(actual.offSong).toBe(4 + 6 * sizeOfWord + actual.numInstruments * sizeOfWord)
        expect(actual.primaryChannels).toBe(3)
        expect(actual.secondaryChannels).toBe(0)
        expect(actual.reserved).toBe(0)
        expect(actual.instruments).toHaveLength(actual.numInstruments)
        expect(actual.instruments).toEqual(expectedInstruments)
    })
})
