import MidContext from '../interfaces/MidContext'
import { write8 } from './write'
import { writeMidDelay } from './writeMidDelay'

const MetaEvent = 0xff
const EndOfTrack = 0x2f

export const writeMidEndOfTrack = (context: MidContext): void => {
    write8(context, MetaEvent)
    write8(context, EndOfTrack)
    writeMidDelay(context, 0) // The length of this data is 0
}
