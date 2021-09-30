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
