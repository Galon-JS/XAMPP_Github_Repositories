class Song {
    // private artist: string
    // private title: string
    constructor (public artist: string,public title: string) {
        this.artist = artist
        this.title = title
    }
    play() {
        console.log('Playing ' + this.title + ' by ' + this.artist)
    }
}
let addSong = new Song('Notes', 'Middle Mode')
addSong.play()

class Playlist {
    private songs: Song[] = []
    static readonly maxSongCount = 30
    constructor (public name: string) {
    }
    addSong (song: Song) {
        if (this.songs.length >= Playlist.maxSongCount) {
            throw new Error ('Playlist is full !!!')
        }
        this.songs.push(song)
    }
}