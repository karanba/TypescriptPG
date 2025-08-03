// Abstract base class defining the template method
abstract class EventManager {
  // Template method defining the algorithm's skeleton
  public processEvent(): void {
    this.setupVenue();
    this.registerAttendees();
    this.conductEvent();

    // Hook method that may be overridden by subclasses
    if (this.needsFeedback()) {
      this.collectFeedback();
    }

    this.cleanUp();
    this.generateReport();
  }

  // Abstract methods to be implemented by concrete subclasses
  protected abstract setupVenue(): void;
  protected abstract registerAttendees(): void;
  protected abstract conductEvent(): void;
  protected abstract cleanUp(): void;

  // Concrete method shared by all subclasses
  protected generateReport(): void {
    console.log("Generating standard event report with statistics");
  }

  // Hook method with default implementation
  protected needsFeedback(): boolean {
    return true; // By default, all events collect feedback
  }

  // Concrete method that can be overridden
  protected collectFeedback(): void {
    console.log("Collecting standard feedback via email survey");
  }
}

// Concrete implementation for Concert events
class ConcertManager extends EventManager {
  protected setupVenue(): void {
    console.log("Setting up stage, sound systems, and lighting for concert");
    console.log("Arranging security for crowd control");
  }

  protected registerAttendees(): void {
    console.log("Scanning tickets at entrance gates");
    console.log("Distributing wristbands for different access levels");
  }

  protected conductEvent(): void {
    console.log("Performing opening acts");
    console.log("Main artist performance");
    console.log("Encore");
  }

  protected cleanUp(): void {
    console.log("Dismantling stage equipment");
    console.log("Collecting trash from venue grounds");
  }

  // Override the hook method to provide specific implementation
  protected collectFeedback(): void {
    console.log(
      "Collecting feedback through mobile app with focus on sound quality and performer ratings",
    );
  }
}

// Concrete implementation for Conference events
class ConferenceManager extends EventManager {
  protected setupVenue(): void {
    console.log("Arranging seating in conference hall");
    console.log("Setting up projectors and presentation equipment");
    console.log("Preparing registration desk and name badges");
  }

  protected registerAttendees(): void {
    console.log("Checking in attendees at registration desk");
    console.log("Distributing conference materials and schedules");
  }

  protected conductEvent(): void {
    console.log("Opening keynote speech");
    console.log("Running breakout sessions and workshops");
    console.log("Networking events and panel discussions");
  }

  protected cleanUp(): void {
    console.log("Collecting presentation materials");
    console.log("Removing signage and booth setups");
  }

  // Override the hook method
  protected collectFeedback(): void {
    console.log(
      "Collecting detailed session-by-session feedback through conference app",
    );
    console.log("Conducting speaker evaluation surveys");
  }
}

// Concrete implementation for Sports Game events
class SportsGameManager extends EventManager {
  protected setupVenue(): void {
    console.log("Preparing playing field/court");
    console.log("Setting up scoreboard and referee equipment");
    console.log("Arranging team locker rooms");
  }

  protected registerAttendees(): void {
    console.log("Validating tickets at gates");
    console.log("Security checks for prohibited items");
  }

  protected conductEvent(): void {
    console.log("Pre-game ceremonies and national anthem");
    console.log("Game play with scheduled breaks");
    console.log("Post-game ceremonies");
  }

  protected cleanUp(): void {
    console.log("Restoring field/court condition");
    console.log("Cleaning stadium seating and facilities");
  }

  // Sports games may not always need detailed feedback
  protected needsFeedback(): boolean {
    return false; // Skip feedback collection for sports games
  }
}

// Client code
function runEventProcess(eventManager: EventManager): void {
  console.log("Starting event management process...");
  eventManager.processEvent();
  console.log("Event completed successfully!");
  console.log("------------------------------------");
}

// Usage example
export function EventManagementSystemDemo() {
  const concertEvent = new ConcertManager();
  const conferenceEvent = new ConferenceManager();
  const sportsGameEvent = new SportsGameManager();

  runEventProcess(concertEvent);
  runEventProcess(conferenceEvent);
  runEventProcess(sportsGameEvent);
}
