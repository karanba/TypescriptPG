import { ISample } from "../../../ISample";

interface UserService {
  getUser(id: number): Promise<string>;
}

// Bu sınıf normalde başka bir process veya sunucuda olur
class RealUserService implements UserService {
  async getUser(id: number): Promise<string> {
    return `👤 User #${id}: Remote data from server`;
  }
}

class RemoteUserServiceProxy implements UserService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getUser(id: number): Promise<string> {
    console.log(
      `🌐 Sending request to remote server at ${this.baseUrl}/user/${id}`,
    );
    // Burada fetch ile uzak sunucuya istek atıyoruz
    const response = await fetch(`${this.baseUrl}/users/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    return `👤 ${data.name} (${data.email})`;
  }
}

async function clientCode() {
  // Proxy üzerinden uzak bir API'ye bağlanıyoruz
  const userService: UserService = new RemoteUserServiceProxy(
    "https://jsonplaceholder.typicode.com",
  );

  // Proxy çağrısı → HTTP isteği
  const user = await userService.getUser(1);
  console.log(user);
}

export class RemoteUserServiceProxySample implements ISample {
  getName(): string {
    return "Real User Service Sample";
  }
  run(): string {
    clientCode().then(() => console.log("Client code executed"));
    return "Real User Service Sample Invoked";
  }
}
