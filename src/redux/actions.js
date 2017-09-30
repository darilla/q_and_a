export const TOGGLE_MODAL_WINDOW = "TOGGLE_MODAL_WINDOW";
export const NEW_QUESTIONS = "NEW_QUESTIONS";
export const ERROR = "ERROR";
export const DISPLAY_QUESTION = "DISPLAY_QUESTION";
export const SEARCH_BY_CRITERIA = "SEARCH_BY_CRITERIA";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";

export const toggleModalWindow = () => {
  return { type: TOGGLE_MODAL_WINDOW };
}

export const newQuestions = questions => {
  return { type: NEW_QUESTIONS, content: questions };
}

export const toggleError = message => {
  return { type: ERROR, content: message };
}

export const displayQuestion = question => {
  return { type: DISPLAY_QUESTION, content: question };
}

export const searchByCriteria = criteria => {
  return { type: SEARCH_BY_CRITERIA, content: criteria };
}