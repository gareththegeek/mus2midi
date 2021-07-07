const Buffer = require('buffer/').Buffer
import MidContext from '../interfaces/MidContext'
import { write32 } from './write'

const Signature = [0x4d, 0x54, 0x72, 0x6b] //'MTrk'

export const writeMidTrackBlock = (context: MidContext): void => {
    const { file } = context
    file.write(Buffer.from(Signature)); context.offset += Signature.length

    // We won't know the length until we're finished so bookmark the place in the file where
    // we need to write the length and come back to it later
    write32(context, 0)
}
