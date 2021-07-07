import { promises as fs } from 'fs'
import * as path from 'path'
import { readMusHead } from './readMusHead'
import { readMusTrack } from './readMusTrack'

describe('readMusTrack', () => {
    it('reads the track', async () => {
        const file = await fs.readFile(path.join(__dirname, '../e1m1.mus'))
        const buffer = Buffer.from(file)
        const context = {
            file: buffer,
            offset: 0,
            volume: 0,
            channels: {}
        }

        const head = readMusHead(context)
        const actual = readMusTrack(head, context)

        expect(actual.events.length).toBe(5826)
    })
})