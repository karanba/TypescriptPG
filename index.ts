import * as http from "http";
import * as Sorting from "./DesignPatterns/Behavioral/Strategy/Sorting";
import * as EventManagementSystem from "./DesignPatterns/Behavioral/TemplateMethod/EventManagementSystem";
import * as Ats from "./DesignPatterns/Behavioral/Visitor/Ats";
import * as Adapter from "./DesignPatterns/Structural/Adapter/error";
const port = 3000;
const hostname = "0.0.0.0";

const server = http.createServer((req, res) => {
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  switch (pathname) {
    case "/":
      // write lit of endpoints as html links
      res.write("<h1>Design Patterns Demo</h1>");

      res.write("<h2>Behavioral</h2>");

      res.write("<h3>Strategy</h3>");
      res.write("<a href='/strategy'>Strategy</a>");
      res.write("<br>");
      res.write("<h3>Template Method</h3>");
      res.write("<a href='/template'>Template Method</a>");

      res.write("<h3>Visitor</h3>");
      res.write("<a href='/visitor'>Visitor</a>");

      res.write("<h2>Creational</h2>");
      res.write("<h3>Singleton</h3>");
      res.write("<h3>Factory Method</h3>");
      res.write("<h3>Abstract Factory</h3>");
      res.write("<h3>Builder</h3>");

      res.write("<h2>Structural</h2>");
      res.write("<h3>Adapter</h3>");
      res.write("<a href='/adapter'>Adapter</a>");
      res.write("<h3>Bridge</h3>");
      res.write("<h3>Composite</h3>");
      res.write("<h3>Decorator</h3>");
      res.end("Welcome to the Design Patterns Demo!");
      break;
    case "/strategy":
      Sorting.runSortingDemo();
      res.end("Sorting demo executed. Check the console for results.");
      break;
    case "/template":
      EventManagementSystem.EventManagementSystemDemo();
      res.end(
        "Event Management System demo executed. Check the console for results.",
      );
      break;
    case "/visitor":
      Ats.demo();
      res.end("Ats demo executed. Check the console for results.");
    case "/adapter":
      Adapter.ErrorDemo();
      res.end("Adapter demo executed. Check the console for results.");
    default:
      res.statusCode = 404;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
