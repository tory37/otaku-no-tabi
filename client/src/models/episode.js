class EpisodeModel {
    constructor(rssItem) {
        this.episodeNumber = rssItem.itunes_episode;
        this.content = rssItem.itunes_summary.replace('Join our Discord: https://discord.gg/Sjzyms9', '');
        this.duration = rssItem.itunes_duration;
        this.episodeNumber = Number.parseInt(rssItem.itunes_episode);
        this.subtitle = rssItem.itunes_subtitle;
        this.title = rssItem.title;
        this.embeddedLink = rssItem.link + 'embed';
    }
}

export default EpisodeModel;