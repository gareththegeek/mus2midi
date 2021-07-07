import MusEvent from './MusEvent'

export default interface MusPlayNote extends MusEvent {
    note: number
    volume: number
}
