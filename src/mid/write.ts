const Buffer = require('buffer/').Buffer
import { Uint8Size, Uint16Size, Uint32Size } from '../interfaces/Constants'
import MidContext from '../interfaces/MidContext'

export const write32 = (context: MidContext, data: number): void => {
    const buffer = Buffer.alloc(Uint32Size)
    buffer.writeUInt32BE(data)
    context.file.write(buffer)
    context.offset += Uint32Size
}

export const write16 = (context: MidContext, data: number): void => {
    const buffer = Buffer.alloc(Uint16Size)
    buffer.writeUInt16BE(data)
    context.file.write(buffer)
    context.offset += Uint16Size
}

export const write8 = (context: MidContext, data: number): void => {
    const buffer = Buffer.alloc(Uint8Size)
    buffer.writeUInt8(data)
    context.file.write(buffer)
    context.offset += Uint8Size
}
