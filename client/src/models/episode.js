class EpisodeModel {
    constructor(rssItem) {
        this.content = rssItem['content:encoded'].replace('Join our Discord: https://discord.gg/Sjzyms9', '');
        this.duration = rssItem.itunes.duration;
        this.image = rssItem.itunes.image;
        this.episodeNumber = Number.parseInt(rssItem.itunes.episode);
        this.subtitle = rssItem.itunes.subtitle;
        this.title = rssItem.title;
        this.pubDate = rssItem.pubDate;
        this.link = rssItem.link;
        this.embeddedLink = rssItem.link + 'embed';
        this.isoDate = rssItem.isoDate;
        this.downloadUrl = rssItem.enclosure.url;
    }
}

export default EpisodeModel;