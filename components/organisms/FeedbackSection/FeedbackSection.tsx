import { getFeedbacks } from "@/src/services/feedbackService";
import FeedbackSectionClient from "./FeedbackSectionClient";


const FeedbackSection = async () => {
  const feedbackConfig = await getFeedbacks();

  if (!feedbackConfig) return null;

  return <FeedbackSectionClient data={feedbackConfig} />;
};

export default FeedbackSection;
