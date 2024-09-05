import { createApiErrorUpdate, TelegramApi } from "@/shared/api";
import type { IFeedback, IFeedbackResponse } from "@/entities/Feedback/model";

const name = "feedback";

const errors = {
  sendFeedback: createApiErrorUpdate(`${name} send email`),
} as const;

export const api = {
  sendFeedback,
} as const;

async function sendFeedback(data: IFeedback) {
  try {
    return await TelegramApi.sendMessage<IFeedbackResponse>(
      `Мое имя ${data.name}. Свяжитесь со мной ${data.email} или ${data.phone}`
    );
  } catch {
    throw new Error(errors.sendFeedback);
  }
}
