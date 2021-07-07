import MidContext from '../interfaces/MidContext'
import MusPitchBend from '../interfaces/MusPitchBend'
import { write8 } from './write'

enum MidEventType {
    PitchBend = 0xe0
}

export const writeMidPitchBend = (context: MidContext, event: MusPitchBend): void => {
    const msb = event.amount >> 1
    const lsb = (event.amount << 7) & 0x80
    write8(context, MidEventType.PitchBend | event.channel)
    write8(context, lsb) // Convert amount from 8 to 14 bit :S
    write8(context, msb) // Convert amount from 8 to 14 bit
}
