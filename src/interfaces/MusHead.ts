export default interface MusHead {
    signature: number[]
    lenSong: number
    offSong: number
    primaryChannels: number
    secondaryChannels: number
    numInstruments: number
    reserved: number
    instruments: number[]
}
