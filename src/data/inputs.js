const regex_date = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/g;
const regex_agent_code_list = /^[0-9]{5}((,[0-9]{5}){0,})?$/g;

export const booking_date_from = {
  name: "booking_date_from",
  type: "text",
  placeholder: "",
  value: "2020-03-19",
  hint: "2020-03-19",
  regex: regex_date
};

export const booking_date_to = {
  name: "booking_date_to",
  type: "text",
  placeholder: "",
  value: "2020-03-19",
  hint: "2020-03-19",
  regex: regex_date
};

export const agent_code_in = {
  name: "agent_code_in",
  type: "text",
  placeholder: "",
  value: "95096",
  hint: "91145,32689",
  regex: regex_agent_code_list
};

export const agent_code_not_in = {
  name: "agent_code_not_in",
  type: "text",
  placeholder: "",
  value: "95096",
  hint: "91145,32689",
  regex: regex_agent_code_list
};
