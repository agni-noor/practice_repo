import amqp from "amqplib"


async function sendMail() {
    try {
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel()
        const exchange = "mail-exchange"
        const routingKeyForSubUser = "send-mail-to-sub-user"
        const routingKeyForNormalUser = "send-mail-to-normal-user"
        const message = {
            to:"agin@gmail.com",
            from:"noor@gmail.com",
            subject:"message subject",
            body:"hello"
        }

        await channel.assertExchange(exchange, "direct", {durable:false})
        await channel.assertQueue("mail-queue-sub-user",{durable:false})
        await channel.assertQueue("mail-queue-normal-user", {durable:false})
        await channel.bindQueue("mail-queue-sub-user",exchange, routingKeyForSubUser )

        await channel.bindQueue("mail-queue-normal-user",exchange, routingKeyForNormalUser )
        channel.publish(exchange, routingKeyForNormalUser, Buffer.from(JSON.stringify(message)))
        console.log('Mail data was sent', message)
        setTimeout(()=>{
            connection.close()
        },500)
    } catch (error) {
        console.log(error)
    }
}

sendMail()
