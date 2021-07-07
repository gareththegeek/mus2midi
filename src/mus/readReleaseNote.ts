import MusReleaseNote from '../interfaces/MusReleaseNote'
import { readEventByte } from './readEventByte'
import { readDelay } from './readDelay'
import MusContext from '../interfaces/MusContext'

export const readReleaseNote = (context: MusContext): MusReleaseNote => {
    const byte = readEventByte(context)
    const data = context.file.readUInt8(context.offset++)
    const delay = readDelay(context, byte.last)
    const channel = context.channels[byte.channel] ?? { volume: 100 }

    return {
        delay,
        type: byte.type,
        channel: byte.channel,
        note: data & 0x7f,
        volume: channel.volume
    }
}
