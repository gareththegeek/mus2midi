import MidContext from '../interfaces/MidContext'
import MusReleaseNote from '../interfaces/MusReleaseNote'
import { write8 } from './write'

enum MidEventType {
    NoteOff = 0x80
}

export const writeMidNoteOff = (context: MidContext, event: MusReleaseNote): void => {
    write8(context, MidEventType.NoteOff | event.channel)
    write8(context, event.note)
    write8(context, event.volume)
}
