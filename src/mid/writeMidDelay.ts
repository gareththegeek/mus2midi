import MidContext from '../interfaces/MidContext'
import { write8 } from './write'

const writeByte = (context: MidContext, amount: number, last: boolean): void => {
    if (!last) {
        amount |= 0x80
    }
    write8(context, amount)
}

export const writeMidDelay = (context: MidContext, delay: number): void => {
    delay *= 4 // determined experimentally :S
    if (delay >= 0x20_0000) {
        writeByte(context, (delay & 0xfe0_0000) >> 21, false)
    }
    if (delay >= 0x4000) {
        writeByte(context, (delay & 0x1f_c000) >> 14, false)
    }
    if (delay >= 0x80) {
        writeByte(context, (delay & 0x3f80) >> 7, false)
    }
    writeByte(context, (delay & 0x7f), true)
}