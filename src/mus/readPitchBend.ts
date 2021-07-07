import MusPitchBend from '../interfaces/MusPitchBend'
import { readEventByte } from './readEventByte'
import { readDelay } from './readDelay'
import MusContext from '../interfaces/MusContext'

export const readPitchBend = (context: MusContext): MusPitchBend => {
    const byte = readEventByte(context)
    const amount = context.file.readUInt8(context.offset++)
    const delay = readDelay(context, byte.last)

    return {
        delay,
        type: byte.type,
        channel: byte.channel,
        amount
    }
}
