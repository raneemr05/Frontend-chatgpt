export const fetchRespose = async(chat) =>{

    try {
        const response = await fetch('https://backend-chatgpt.vercel.app/',
        {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message) => message.message).join("\n")
            }) 
        }
    )

    const data = await response.json()
    return data
    } catch (error) {
        console.log(error)
        
    }
}