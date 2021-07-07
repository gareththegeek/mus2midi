import { MusEventType } from "./MusEvent";

export default interface MusEventByte {
    last: boolean
    type: MusEventType
    channel: number
}
