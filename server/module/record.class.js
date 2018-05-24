class Record {
    constructor(artist, albumName, year, genreList){
        this.artist = artist;
        this.albumName = albumName;
        this.year = year;
        this.genreList = genreList;
    } // end constructor
    addGenre(string){
        if(genreList == numll){
            this.genreList = [];
        }
        this.genreList.push(string);
    }
}// end class

module.exports = Record;
// test later with ES6 method