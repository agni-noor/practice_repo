import amqp from "amqplib"

async function rcvmail() {
    try {
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel()
        await channel.assertQueue("mail-queue-sub-user",{durable: false})

        channel.consume("mail-queue-sub-user", (message)=>{
            if(message!==null){
                console.log("Receieve message for subscribed user", JSON.parse(message.content))
                channel.ack(message)
            }
        })

         
    } catch (error) {
        console.log(error)
        
    }
    
}
rcvmail()