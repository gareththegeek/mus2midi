import { Writable } from 'stream'

export default interface MidContext {
    file: Writable
    offset: number
}
