import { kafka } from ".";

export class KafkaSendMessage {
  async execute(topic: string, payload: any): Promise<void> {
    const producer = kafka.producer({});

    await producer.connect();
    console.log(`message send to topic ${topic}, P: ${payload}`);
    
    await producer.send({
      topic,
      messages: [
        {
          value: JSON.stringify(payload),
        },
      ],
    });

    producer.disconnect();
  }
}
