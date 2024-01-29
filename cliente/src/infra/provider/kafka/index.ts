import { Kafka, logLevel } from "kafkajs";

// Kafka configuration for secured cluster
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["https://oriented-snake-5783-us1-kafka.upstash.io:9092"], // Replace with your Kafka broker
  ssl: true,
  sasl: {
    mechanism: "scram-sha-256", // Replace with your SASL mechanism
    username: "b3JpZW50ZWQtc25ha2UtNTc4MySzBpMEDXSi9orN9ebDur0iLCAXALpZh0OAUhA", // Replace with your username
    password: "MjY0YjlkNDctZTZkNi00ZTIzLTk2MmQtYzdlNzM5ZjQ3ZGY0", // Replace with your password
  },
  logLevel: logLevel.ERROR,
});

export {kafka}
