import MusEvent, { MusEventType } from '../interfaces/MusEvent'
import { readReleaseNote } from './readReleaseNote'
import { peekEventType } from './peekEventType'
import { readPlayNote } from './readPlayNote'
import MusContext from '../interfaces/MusContext'
import { readPitchBend } from './readPitchBend'
import { readSystemEvent } from './readSystemEvent'
import { readGenericEvent } from './readGenericEvent'
import { readController } from './readController'

export const readMusEvent = (context: MusContext): MusEvent => {
    switch (peekEventType(context)) {
        case MusEventType.ReleaseNote:
            return readReleaseNote(context)
        case MusEventType.PlayNote:
            return readPlayNote(context)
        case MusEventType.PitchBend:
            return readPitchBend(context)
        case MusEventType.SystemEvent:
            return readSystemEvent(context)
        case MusEventType.Controller:
            return readController(context)
        default:
            return readGenericEvent(context)
    }
}
