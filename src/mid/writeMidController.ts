import MidContext from '../interfaces/MidContext'
import MusController from '../interfaces/MusController'
import { write8 } from './write'

enum MidEventType {
    Controller = 0xb0
}

const MusToMidi: { [mus: number]: number } = {
    [1]: 0,
    [2]: 1,
    [3]: 7,
    [4]: 10,
    [5]: 11,
    [6]: 91,
    [7]: 93,
    [8]: 64,
    [9]: 67,
    [10]: 120,
    [11]: 123,
    [12]: 126,
    [13]: 127,
    [14]: 121
}

export const writeMidController = (context: MidContext, event: MusController): void => {
    write8(context, MidEventType.Controller | event.channel)
    write8(context, MusToMidi[event.controller])
    write8(context, event.value)
}
