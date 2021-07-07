import MidHead from './interfaces/MidHead'

export const createMidHead = (): MidHead => ({
    signature: 'MThd',
    length: 6,
    type: 0,
    numTracks: 1,
    ticksPerQuarterNote: 0/*TODO*/
})
