import { promises as fs } from 'fs'
import * as path from 'path'
import { readMus } from '../mus'
import { writeMid } from '.'

describe('writeMidTrack', () => {
    it('writes the track', async () => {
        const file = await fs.readFile(path.join(__dirname, '../e1m9.mus'))
        const mus = readMus(file)

        const buffer = writeMid(mus)

        await fs.writeFile(path.join(__dirname, '../e1m9.mid'), buffer)
        console.log(buffer)
    })
})