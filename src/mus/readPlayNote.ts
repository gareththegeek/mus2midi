import MusPlayNote from '../interfaces/MusPlayNote'
import { readEventByte } from './readEventByte'
import { readDelay } from './readDelay'
import MusContext from '../interfaces/MusContext'

export const readPlayNote = (context: MusContext): MusPlayNote => {
    const byte = readEventByte(context)
    const note = context.file.readUInt8(context.offset++)
    const hasVolume = (note & 0x80) === 0x80
    const channel = context.channels[byte.channel] ?? { volume: 100 }
    if (hasVolume) {
        channel.volume = context.file.readUInt8(context.offset++) & 0x7f
    }
    const delay = readDelay(context, byte.last)

    return {
        delay,
        type: byte.type,
        channel: byte.channel,
        note: note & 0x7f,
        volume: channel.volume
    }
}
