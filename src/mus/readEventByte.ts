import MusContext from '../interfaces/MusContext'
import MusEventByte from '../interfaces/MusEventByte'

export const readEventByte = (context: MusContext): MusEventByte => {
    const byte = context.file.readUInt8(context.offset++)
    const last = (byte & 0x80) === 0x80
    const type = (byte & 0x70) >> 4
    const channel = byte & 0xf

    return {
        last,
        type,
        channel
    }
}
