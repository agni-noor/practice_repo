import amqp from 'amqplib';

let channel;

export const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();

    await channel.assertQueue('sms_queue', { durable: true });

    await channel.assertExchange('retry_exchange', 'direct', { durable: true });

    await channel.assertQueue('sms_retry_queue', {
      durable: true,
      arguments: {
        'x-dead-letter-exchange': '', 
        'x-dead-letter-routing-key': 'sms_queue', 
        'x-message-ttl': 10000,
      },
    });


    await channel.bindQueue('sms_retry_queue', 'retry_exchange', 'sms_retry');

    console.log('Connected to RabbitMQ and queues initialized');
  } catch (error) {
    console.error('Failed to connect to RabbitMQ:', error.message);
    process.exit(1);
  }
};

export const sendToQueue = async (queue, message) => {
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
  console.log(`Message sent to queue ${queue}:`, message);
};