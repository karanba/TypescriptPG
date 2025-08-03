import * as http from "http";
import { parse } from "url";
import { readFile } from "fs/promises";
import * as ejs from "ejs";
import registry from "./DesignPatterns";
import { PatternGroupType } from "./ISample";

const port = 3000;
const hostname = "0.0.0.0";

function groupByType(registry: PatternGroup[]) {
  const grouped: Record<PatternGroupType, PatternGroup[]> = {
    [PatternGroupType.Creational]: [],
    [PatternGroupType.Structural]: [],
    [PatternGroupType.Behavioral]: []
  };

  registry.forEach((group) => {
    grouped[group.type].push(group);
  });

  return grouped;
}

const groupedRegistry = groupByType(registry);

async function renderTemplate(file: string, data: any) {
  const template = await readFile(`views/${file}`, "utf-8");
  return ejs.render(template, data);
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = parse(req.url ?? "", true);

  try {
    if (parsedUrl.pathname === "/") {
      const html = await renderTemplate("index.ejs.html", { groupedRegistry });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(html);
    } else if (parsedUrl.pathname === "/run") {
      const patternName = parsedUrl.query.pattern as string;
      const implIdx = Number(parsedUrl.query.i);

      const group = registry.find((g) => g.pattern === patternName);

      if (group && group.implementations[implIdx]) {
        const impl = group.implementations[implIdx];
        const result = impl.run();
        const html = await renderTemplate("run.ejs.html", { group, impl, result });
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Sample not found");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error: " + error);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
