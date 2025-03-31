import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { ref } from "vue";


export const useChat = () => {

    const messages = ref<ChatMessage[]>([]);
      
      const onMessage = (text: string) => {
        messages.value.push({
          id: new Date().getTime(),
          itsMine: true,
          message: text,
        });
      }

    return {
        // Properties
        messages,

        //methos
        onMessage,
    }

}