
import { useState } from 'react'
import Body from './components/Body'
import {useMutation} from 'react-query'
import ChatInput from './components/ChatInput'
import { fetchRespose } from './api';

function App() {
  //an array to keep our messages
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchRespose(chat);
    },
    onSuccess: (data) => setChat((prev) => [...prev, {sender: 'ai', message: data.message.replace(/^\n\n/, "")}])
  })

  const sendMessage = async(message) =>{
      await Promise.resolve(setChat((prev)=>
      [...prev, message]))
      mutation.mutate();
  }
  return (
    <div className='bg-[#343541] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle'>
     {/* gradients */}
     <div className="gradient-01 z-0 absolute"></div>
     <div className="gradient-02 z-0 absolute"></div>
    {/* header */}
    <div className='uppercase font-bold text-2xl text-center mb-3'>
        ChatGPT 2.0
      </div>
    {/* body */}
      <div className='h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-transparent scrollbar-thumb-rounded-md'>
        <Body chat={chat}></Body>
      </div>
    {/* Input */}
    <div className="w-full max-w-4xl min-w-[20rem] self-center
    scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-transparent scrollbar-thumb-rounded-md">
       <ChatInput sendMessage={sendMessage}
       loading={mutation.isLoading}></ChatInput>
    </div>
    <div className='
    text-center text-xs text-white mt-4 '>
     <small> AI data powered by  
      <span className='underline ml-1'><a href="https://openai.com/" target="_blank">
       Open AI
      </a>
      </span>
      . 
      &copy; Developed By: Raneem Rashid</small>
    </div>    
    </div>
  )
}

export default App
