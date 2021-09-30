var Song = /** @class */ (function () {
    // private artist: string
    // private title: string
    function Song(artist, title) {
        this.artist = artist;
        this.title = title;
        this.artist = artist;
        this.title = title;
    }
    Song.prototype.play = function () {
        console.log('Playing ' + this.title + ' by ' + this.artist);
    };
    return Song;
}());
var addSong = new Song('Notes', 'Middle Mode');
addSong.play();
var Playlist = /** @class */ (function () {
    function Playlist(name) {
        this.name = name;
        this.songs = [];
    }
    Playlist.prototype.addSong = function (song) {
        if (this.songs.length >= Playlist.maxSongCount) {
            throw new Error('Playlist is full !!!');
        }
        this.songs.push(song);
    };
    Playlist.maxSongCount = 30;
    return Playlist;
}());
