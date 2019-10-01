const TvShow = require('./TvShow');

class TvShowService {
    constructor() {
        this.tvShows = [
            new TvShow(1, 'Mr.Robot', 'Drama'), 
            new TvShow(2, 'Black Mirror', 'Drama'),
            new TvShow(3, 'Its always sunny', 'comedy')];
    }

    getAll() {
        return this.tvShows;
    }

    getById(tvShowId){
        var showid;
        for (i = 0; i < this.tvShows.length; i++) {
            if (this.tvShows[i].id == tvShowId) {
                showid = this.tvShows[i].id;
            }
        }
        return showid;
    }
}
module.exports = new TvShowService();