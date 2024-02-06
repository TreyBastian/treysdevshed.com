const options = {
    channel: "treybastian",
    height: 576,
    width: '100%',
    layout: 'video',
    parent: ['treysdevshed.com']
};
const twitchPlayer = new Twitch.Embed("twitch-video", options);


const initiate = () => {
    twitchPlayer.addEventListener(Twitch.Player.ONLINE, handleOnline);
    twitchPlayer.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    twitchPlayer.removeEventListener(Twitch.Player.READY, initiate);
};

const handleOnline = () => {
    setTimeout(() => {
        document.getElementById("twitch-video").classList.remove('hide');
        document.getElementById("twitch-video").classList.add('show');
    }, 600);
    document.getElementById("header-image").classList.add('hide');
    document.getElementById("header-image").classList.remove('show');
    twitchPlayer.removeEventListener(Twitch.Player.ONLINE, handleOnline);
    twitchPlayer.addEventListener(Twitch.Player.OFFLINE, handleOffline);
    twitchPlayer.setMuted(false);
}

const handleOffline = () => {
    setTimeout(() => {
        document.getElementById("header-image").classList.remove('hide');
        document.getElementById("header-image").classList.add('show');
    }, 600);
    document.getElementById("twitch-video").classList.add('hide');
    document.getElementById("twitch-video").classList.remove('show');
    twitchPlayer.removeEventListener(Twitch.Player.OFFLINE, handleOffline);
    twitchPlayer.addEventListener(Twitch.Player.ONLINE, handleOnline);
    twitchPlayer.setMuted(true);
}

twitchPlayer.addEventListener(Twitch.Player.READY, initiate)
