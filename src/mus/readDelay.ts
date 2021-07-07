import MusContext from '../interfaces/MusContext'

export const readDelay = (context: MusContext, last: boolean): number => {
    if (!last) {
        return 0
    }

    let byte = 0x80
    let delay = 0
    while ((byte & 0x80) === 0x80) {
        byte = context.file.readUInt8(context.offset++)
        delay = delay * 128 + (byte & 0x7f)
    }

    return delay
}
