import MemoryStream from 'memorystream'
import Mus from '../interfaces/Mus'
import { writeMidHead } from './writeMidHead'
import { writeMidTrackBlock } from './writeMidTrackBlock'
import { writeMidEvent } from './writeMidEvent'
import { writeMidTempo } from './writeMidTempo'

const DataOffset = 22
const LengthOffset = DataOffset - 4

export const writeMid = (mus: Mus): Buffer => {
    const file = new MemoryStream()
    const context = {
        file,
        offset: 0
    }
    writeMidHead(context)

    writeMidTrackBlock(context)

    writeMidTempo(context)

    let delay = 0
    for (const event of mus.track.events) {
        writeMidEvent(context, event, delay)
        delay = event.delay
    }

    // Write the length in the track block
    const buffer: Buffer = file.read(context.offset)
    buffer.writeUInt32BE(context.offset - DataOffset, LengthOffset)

    return buffer
}
