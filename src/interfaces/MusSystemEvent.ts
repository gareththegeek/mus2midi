import MusEvent from './MusEvent'

export default interface MusSystemEvent extends MusEvent {
    controller: number
}
