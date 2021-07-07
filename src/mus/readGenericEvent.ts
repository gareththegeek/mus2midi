import MusEvent from '../interfaces/MusEvent'
import { readEventByte } from './readEventByte'
import { readDelay } from './readDelay'
import MusContext from '../interfaces/MusContext'

export const readGenericEvent = (context: MusContext): MusEvent => {
    const byte = readEventByte(context)
    const delay = readDelay(context, byte.last)

    return {
        delay,
        type: byte.type,
        channel: byte.channel
    }
}
