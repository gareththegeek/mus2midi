import MusHead from '../interfaces/MusHead'
import MusTrack from '../interfaces/MusTrack'
import MusContext from '../interfaces/MusContext'
import { readMusEvent } from './readMusEvent'
import MusEvent from '../interfaces/MusEvent'

export const readMusTrack = (head: MusHead, context: MusContext): MusTrack => {
    const track = { events: [] as MusEvent[] }
    while (context.offset < head.lenSong + head.offSong) {
        track.events.push(readMusEvent(context))
    }
    return track
}
