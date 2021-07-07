import MidContext from '../interfaces/MidContext'
import MusEvent, { MusEventType } from '../interfaces/MusEvent'
import MusReleaseNote from '../interfaces/MusReleaseNote'
import MusPlayNote from '../interfaces/MusPlayNote'
import MusPitchBend from '../interfaces/MusPitchBend'
import MusController from '../interfaces/MusController'
import { writeMidDelay } from './writeMidDelay'
import { writeMidNoteOff } from './writeMidNoteOff'
import { writeMidNoteOn } from './writeMidNoteOn'
import { writeMidPitchBend } from './writeMidPitchBend'
import { writeMidInstrumentChange } from './writeMidInstrumentChange'
import { writeMidController } from './writeMidController'
import { writeMidEndOfTrack } from './writeMidEndOfTrack'

const convertChannel = (mus: number): number => mus === 15 ? 9 : mus

export const writeMidEvent = (context: MidContext, current: MusEvent, delay: number): void => {
    const event = { ...current, channel: convertChannel(current.channel) }
    writeMidDelay(context, delay)
    switch (current.type) {
        case MusEventType.ReleaseNote:
            writeMidNoteOff(context, event as MusReleaseNote)
            break
        case MusEventType.PlayNote:
            writeMidNoteOn(context, event as MusPlayNote)
            break
        case MusEventType.PitchBend:
            writeMidPitchBend(context, event as MusPitchBend)
            break
        case MusEventType.SystemEvent:
            writeMidController(context, { ...event, value: 0 } as MusController)
            break
        case MusEventType.Controller:
            const controllerEvent = (event as MusController)
            const controller = controllerEvent.controller
            if (controller === 0x0) {
                writeMidInstrumentChange(context, controllerEvent)
            } else {
                writeMidController(context, controllerEvent)
            }
            break
        case MusEventType.EndOfMeasure:
            break
        case MusEventType.Finish:
            writeMidEndOfTrack(context)
            break
        default:
            throw new Error(`Unexpected MUS Event Type ${current.type}`)
    }
}
