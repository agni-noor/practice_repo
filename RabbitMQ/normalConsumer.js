
import amqp from "amqplib"

async function rcvmail() {
    try {
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel()
        await channel.assertQueue("mail-queue-normal-user",{durable: false})

        channel.consume("mail-queue-normal-user", (message)=>{
            if(message!==null){
                console.log("Receieve message for normal user", JSON.parse(message.content))
                channel.ack(message)
            }
        })

         
    } catch (error) {
        console.log(error)
        
    }
    
}
rcvmail()