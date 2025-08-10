// Subject (Observable)
class NewsPublisher {
  private observers: NewsSubscriber[] = [];
  private latestNews: string = "";

  public attach(observer: NewsSubscriber): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  public detach(observer: NewsSubscriber): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(): void {
    for (const observer of this.observers) {
      observer.update(this.latestNews);
    }
  }

  public publishNews(news: string): void {
    this.latestNews = news;
    this.notify();
  }
}

// Observer
interface NewsSubscriber {
  update(news: string): void;
}

// Concrete Observer
class EmailSubscriber implements NewsSubscriber {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(news: string): void {
    console.log(`${this.name} received email: ${news}`);
  }
}

// Usage
const publisher = new NewsPublisher();
const subscriber1 = new EmailSubscriber("John");
const subscriber2 = new EmailSubscriber("Jane");

publisher.attach(subscriber1);
publisher.attach(subscriber2);

publisher.publishNews("Breaking news: Observer pattern implemented!");


export class NewsPublisherSample implements ISample {
  getName(): string {
    return "News Publisher Sample";
  }  
  run(): string {
    // Usage
    const publisher = new NewsPublisher();
    const subscriber1 = new EmailSubscriber("John");
    const subscriber2 = new EmailSubscriber("Jane");

    publisher.attach(subscriber1);
    publisher.attach(subscriber2);
    
    return "News Publisher Sample Invoked";
  }
}