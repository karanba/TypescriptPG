import { ISample } from "../../../ISample";

interface DataSource {
    getData(key: string): Promise<string>;
}


class RealAPI implements DataSource {
    async getData(key: string): Promise<string> {
        console.log(`📡 Fetching fresh data for "${key}" from API...`);
        // Simulate a slow API call
        await new Promise(res => setTimeout(res, 1000));
        return `Data for ${key} at ${new Date().toISOString()}`;
    }
}

class CachingProxy implements DataSource {
    private cache: Map<string, string> = new Map();

    constructor(private realAPI: RealAPI) { }

    async getData(key: string): Promise<string> {
        if (this.cache.has(key)) {
            console.log(`⚡ Returning cached data for "${key}"`);
            return this.cache.get(key)!;
        }

        const data = await this.realAPI.getData(key);
        this.cache.set(key, data);
        return data;
    }
}

export class CachingDataSample implements ISample {
    getName(): string {
        return "Caching Data Sample";
    }
    run(): string {
        const api = new RealAPI();
        const proxy = new CachingProxy(api);

        proxy.getData("user:123").then(console.log);
        proxy.getData("user:123").then(console.log); // served instantly from cache
        proxy.getData("post:456").then(console.log); // new fetch

        return "Caching Data Sample Invoked";
    }

}

