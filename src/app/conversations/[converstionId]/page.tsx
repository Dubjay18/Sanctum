import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import EmptyState from "@/app/components/EmptyState";
import getConversationById from "@/actions/getConversationById";
import getMessages from "@/actions/getMessage";

interface IParams {
  converstionId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  console.log(params, "params");
  
  const conversation = await getConversationById(
    params.converstionId
  );
  const messages = await getMessages(params.converstionId);

  if (!conversation) {
    return (
      <div className='lg:pl-80 h-full'>
        <div className='h-full flex flex-col'>
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className='lg:pl-80 h-full'>
      <div className='h-full flex flex-col'>
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ChatId;
