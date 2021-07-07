import MidContext from '../interfaces/MidContext'
import MusController from '../interfaces/MusController'
import { write8 } from './write'

enum MidEventType {
    InstrumentChange = 0xc0
}

export const writeMidInstrumentChange = (context: MidContext, event: MusController): void => {
    write8(context, MidEventType.InstrumentChange | event.channel)
    write8(context, event.value)
}
