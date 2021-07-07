export default interface MusContext {
    file: Buffer
    offset: number,
    channels: { [channel: number]: { volume: number } }
}
