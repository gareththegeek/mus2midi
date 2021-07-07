import MidContext from '../interfaces/MidContext'
import { write16, write32 } from './write'

const Signature = 'MThd'

export const writeMidHead = (context: MidContext): void => {
    const ticksPerQuarterNote = 560 /* TODO */

    context.file.write(Signature, 'utf-8'); context.offset += Signature.length
    write32(context, 6 /*iLength*/)
    write16(context, 0 /*iType*/)
    write16(context, 1 /*iNumTracks*/)
    write16(context, ticksPerQuarterNote)
}
