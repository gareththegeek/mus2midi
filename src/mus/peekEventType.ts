import MusContext from '../interfaces/MusContext'
import { MusEventType } from '../interfaces/MusEvent'

export const peekEventType = ({ file, offset }: MusContext): MusEventType => (file.readUInt8(offset) & 0x70) >> 4
