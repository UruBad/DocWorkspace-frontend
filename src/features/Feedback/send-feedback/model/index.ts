import { FeedbackApi, type FeedbackModel } from "@/entities/Feedback";

export function userSendFeedback() {
  interface IPayload extends FeedbackModel.IFeedback {}

  async function send(payload: IPayload) {
    const response = await FeedbackApi.sendFeedback(payload);
    console.log(response, "response");
  }

  return {
    send,
  };
}
