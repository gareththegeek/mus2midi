import MidContext from '../interfaces/MidContext'
import MusPlayNote from '../interfaces/MusPlayNote'
import { write8 } from './write'

enum MidEventType {
    NoteOn = 0x90
}

export const writeMidNoteOn = (context: MidContext, event: MusPlayNote): void => {
    write8(context, MidEventType.NoteOn | event.channel)
    write8(context, event.note)
    write8(context, event.volume)
}
