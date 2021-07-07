import MidContext from '../interfaces/MidContext'
import { write8 } from './write'

const MetaEvent = 0xff
const SetTempo = 0x51

// Almost - we are missing 00 FF 51 03 0F 42 40 @ 0x16 - (Set Tempo)
export const writeMidTempo = (context: MidContext): void => {
    write8(context, 0) // 0 delay preceeding this event
    write8(context, MetaEvent)
    write8(context, SetTempo)
    write8(context, 3)
    write8(context, 0x0f) /*TODO this is hard coded based upon a known good mid file*/
    write8(context, 0x42)
    write8(context, 0x40)
}
