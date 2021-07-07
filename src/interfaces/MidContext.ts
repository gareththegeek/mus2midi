import { MemStream } from '../mid/stream'

export default interface MidContext {
    file: MemStream
    offset: number
}
