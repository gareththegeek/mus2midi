import MusEvent from './MusEvent'

export default interface MusReleaseNote extends MusEvent {
    note: number
    volume: number
}
