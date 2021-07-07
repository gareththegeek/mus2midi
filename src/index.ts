import { writeMid } from './mid'
import { readMus } from './mus'

export const mus2midi = (mus: Buffer): Buffer => writeMid(readMus(mus))
