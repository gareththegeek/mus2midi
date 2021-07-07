export class MemStream {
    private size: number = 100
    private position: number = 0
    private data: number[] = [100]

    public write(buffer: Buffer): void {
        if (this.position + buffer.length > this.size) {
            this.data.push(...new Array(this.size))
            this.size *= 2
        }
        const array = Array.from(buffer)
        this.data.splice(this.position, array.length, ...array)
        this.position += array.length
    }

    public read(length: number): Buffer {
        return Buffer.from(this.data.slice(0, length))
    }
}
