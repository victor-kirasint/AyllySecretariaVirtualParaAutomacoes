#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <ESP8266HTTPClient.h>
const char* ssid = "Irmandade";
const char* password = "85979278";
ESP8266WebServer server(80);
void handleRoot();
void handleNotFound();
const int led = 0;
const int led2 = 15;
const int pc = 14;

void setup(void) {
WiFi.begin(ssid, password);
server.on("/", handleRoot);
server.on("/LED", HTTP_POST, handleLED);
server.on("/LEDOFF", HTTP_POST, handleLEDOFF);
server.on("/LED2", HTTP_POST, handleLED2);
server.on("/LED2OFF", HTTP_POST, handleLED2OFF);
server.on("/PCON", HTTP_POST, handlePCON);
server.onNotFound(handleNotFound);

Serial.begin(9600);

server.begin();

pinMode(led, OUTPUT);
pinMode(led2, OUTPUT);
pinMode(pc, OUTPUT);

digitalWrite(pc, HIGH);

}

void handleRoot() {
  server.send(200, "text/html", "<form action=\"/LED\" method=\"POST\"><input type=\"submit\" value=\"Toggle LED\"></form>" "<form action=\"/LED2\" method=\"POST\"><input type=\"submit\" value=\"Toggle LED2\"></form>" "<form action=\"/PCON\" method=\"POST\"><input type=\"submit\" value=\"LIGARPC\"></form>");}

void handleLED(){
  server.sendHeader("Location", "/");
  digitalWrite(led, HIGH);
  server.send(200);
}

void handleLEDOFF(){
  server.sendHeader("Location", "/");
  digitalWrite(led, LOW);
  server.send(200);
}
void handleLED2(){
  digitalWrite(led2, HIGH);
  server.sendHeader("Location", "/");
  server.send(304);
}
void handleLED2OFF(){
  digitalWrite(led2, LOW);
  server.sendHeader("Location", "/");
  server.send(305);
}
void handlePCON(){
  server.sendHeader("Location", "/");
  digitalWrite(pc, LOW);
  delay(1000);
  digitalWrite(pc, HIGH);
  server.send(200);
}

void handleNotFound(){
  server.send(404, "text/plain", "Erorr");
}
void loop(void) {
  server.handleClient();
  // Send an HTTP POST request depending on timerDelay
}