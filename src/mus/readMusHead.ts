import MusContext from '../interfaces/MusContext';
import MusHead from '../interfaces/MusHead'

export const readMusHead = (context: MusContext): MusHead => {
    var i = 0

    const { file } = context

    const signature = [file.readUInt8(i++), file.readUInt8(i++), file.readUInt8(i++), file.readUInt8(i++)]
    const lenSong = file.readUInt16LE(i); i += 2
    const offSong = file.readUInt16LE(i); i += 2
    const primaryChannels = file.readUInt16LE(i); i += 2
    const secondaryChannels = file.readUInt16LE(i); i += 2
    const numInstruments = file.readUInt16LE(i); i += 2
    const reserved = file.readUInt16LE(i); i += 2

    const instruments = []
    for (let j = 0; j < numInstruments; j++) {
        instruments.push(file.readUInt16LE(i))
        i += 2
    }

    context.offset = i

    return {
        signature,
        lenSong,
        offSong,
        primaryChannels,
        secondaryChannels,
        numInstruments,
        reserved,
        instruments
    }
}
