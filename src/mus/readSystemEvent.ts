import MusSystemEvent from '../interfaces/MusSystemEvent'
import { readEventByte } from './readEventByte'
import { readDelay } from './readDelay'
import MusContext from '../interfaces/MusContext'

export const readSystemEvent = (context: MusContext): MusSystemEvent => {
    const byte = readEventByte(context)
    const controller = context.file.readUInt8(context.offset++) & 0x7f
    if (controller < 10 || controller > 15) {
        throw new Error(`Unknown MUS system event controller ${controller}`)
    }
    const delay = readDelay(context, byte.last)

    return {
        delay,
        type: byte.type,
        channel: byte.channel,
        controller
    }
}
