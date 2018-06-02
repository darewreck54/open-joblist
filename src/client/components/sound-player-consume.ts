import {SoundPlayer} from './sound-player';

export class SoundPlayerConsumer {
    private _soundPlayer: SoundPlayer;
    constructor() {
        this._soundPlayer = new SoundPlayer();
    }

    public playSomethingCool() {
        const coolSoundFileName = 'song.mp3';
        this._soundPlayer.playSoundFile(coolSoundFileName);
    }
}
