import Mus from '../interfaces/Mus'
import { readMusHead } from './readMusHead'
import { readMusTrack } from './readMusTrack'

export const readMus = (file: Buffer): Mus => {
    const context = {
        file,
        offset: 0,
        volume: 0,
        channels: {}
    }
    const head = readMusHead(context)
    const track = readMusTrack(head, context)

    return {
        head,
        track
    }
}
