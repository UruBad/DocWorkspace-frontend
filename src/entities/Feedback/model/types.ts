export interface IFeedback {
  email: string;
  firstname: string;
  phone: string;
}

export interface IFeedbackResponse {
  from: string;
  to: string;
  body: string;
  title: string;
}
