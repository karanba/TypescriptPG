// Alt sistemler: Normalde kullanıcı bunları tek tek çağırmak zorunda kalır.
// Biz bunları Facade arkasında gizleyeceğiz.

class Codec {
  load() {
    console.log("🎞️ Codec loaded for decoding video.");
  }
}

class Buffer {
  fill() {
    console.log("📦 Buffer filled with video data.");
  }
}

class Audio {
  sync() {
    console.log("🔊 Audio synchronized with video.");
  }
}

// Facade sınıfı: Kullanıcıya basit bir arayüz sunar.
// Kullanıcı tek bir "play()" çağrısı yapar, gerisini bu sınıf halleder.
class VideoPlayerFacade {
  private codec = new Codec();
  private buffer = new Buffer();
  private audio = new Audio();

  // Kullanıcı için tek giriş noktası
  play(file: string) {
    console.log(`▶️ Starting playback for: ${file}`);

    // Alt sistemlerin sırasıyla çalıştırılması
    this.codec.load(); // Codec yükleniyor
    this.buffer.fill(); // Buffer dolduruluyor
    this.audio.sync(); // Ses ile video senkronize ediliyor

    console.log("✅ Video is now playing!");
  }
}

export class VideoPlayerSample implements ISample {
  getName(): string {
    return "Video Player Sample";
  }
  run(): string {
    // Kullanım: Kullanıcı sadece Facade ile ilgileniyor.
    // Arkadaki codec, buffer, audio detaylarını bilmesine gerek yok.
    const player = new VideoPlayerFacade();
    player.play("movie.mp4");

    return "Video Player Sample Invoked";
  }
}
