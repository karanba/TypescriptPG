interface Song {
  title: string;
  artist: string;
}

interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

class PlaylistIterator implements Iterator<Song> {
  private position = 0;

  constructor(private songs: Song[]) {}

  next(): Song | null {
    if (this.hasNext()) {
      return this.songs[this.position++];
    }
    return null;
  }

  hasNext(): boolean {
    return this.position < this.songs.length;
  }
}

class Playlist {
  private songs: Song[] = [];

  addSong(song: Song): void {
    this.songs.push(song);
  }

  createIterator(): Iterator<Song> {
    return new PlaylistIterator(this.songs);
  }
}

export class MusicPlayerSample implements ISample {
  getName(): string {
    return "Music Player Sample";
  }
  run(): string {
    // --- Usage ---
    const playlist = new Playlist();
    playlist.addSong({ title: "Bohemian Rhapsody", artist: "Queen" });
    playlist.addSong({ title: "Imagine", artist: "John Lennon" });
    playlist.addSong({ title: "Hotel California", artist: "Eagles" });

    const iterator = playlist.createIterator();

    while (iterator.hasNext()) {
      const song = iterator.next();
      console.log(`🎵 ${song?.title} by ${song?.artist}`);
    }

    return "Music Player Sample Invoked";
  }
}
