import MusController from '../interfaces/MusController'
import { MusControllerType } from '../interfaces/MusControllerType'
import { readEventByte } from './readEventByte'
import { readDelay } from './readDelay'
import MusContext from '../interfaces/MusContext'

export const readController = (context: MusContext): MusController => {
    const byte = readEventByte(context)
    const controller = context.file.readUInt8(context.offset++) & 0x7f
    if (controller < 0 || controller > 9) {
        throw new Error(`Unknown MUS controller ${controller}`)
    }
    const value = context.file.readUInt8(context.offset++) & 0x7f
    const delay = readDelay(context, byte.last)

    if (controller === MusControllerType.Volume) {
        context.channels[byte.channel] = { volume: value }
    }

    return {
        delay,
        type: byte.type,
        channel: byte.channel,
        controller,
        value
    }
}
