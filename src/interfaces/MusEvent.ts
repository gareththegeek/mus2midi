export enum MusEventType {
    ReleaseNote = 0,
    PlayNote,
    PitchBend,
    SystemEvent,
    Controller,
    EndOfMeasure,
    Finish,
    Unused
}

export default interface MusEvent {
    delay: number
    type: MusEventType
    channel: number
}
