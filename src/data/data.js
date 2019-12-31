const booking_date_from = "booking_date_from";
const booking_date_to = "booking_date_to";
const agent_code_in = "agent_code_in";
const agent_code_not_in = "agent_code_not_in";

const regex_agent_code = /^[0-9]{5}((,[0-9]{5}){0,})?$/g;

export const my_input = [
  {
    name: booking_date_from,
    type: "date",
    placeholder: "",
    value: "2020-03-19",
    hint: "mm/dd/yyyy, np: 01/15/2020",
    regex: ""
  },
  {
    name: booking_date_to,
    type: "date",
    placeholder: "",
    value: "2020-03-19",
    hint: "mm/dd/yyyy, np: 01/15/2020",
    regex: ""
  },
  {
    name: agent_code_in,
    type: "text",
    placeholder: "",
    value: "",
    hint: "91145,32689",
    regex: regex_agent_code
  },
  {
    name: agent_code_not_in,
    type: "text",
    placeholder: "",
    value: "",
    hint: "91145,32689",
    regex: regex_agent_code
  }
];

export const all_inputs = {};
my_input.forEach(input => {
  all_inputs[input.name] = input.value;
});

export const reports = [
  {
    title: "Raport 1 pobieranie adresów email",
    slug: "/raport-1",
    short_desc:
      "Pobieranie adresów email kontaktów zgodnie z wybranymi parametrami.",
    version: 1,
    excel_name: "GENERATOR_raport_1_pobieranie_adresow_email.xlsm",
    fields: [
      [booking_date_from, 1],
      [booking_date_to, 1],
      [agent_code_in, 0]
    ]
  },
  {
    title: "Raport 2 raport niepoprawnych danych na rezerwacjach",
    slug: "/raport-2",
    short_desc:
      "Raport generuje tabelę z rezerwacjami i zaznacza na czerwono błędnie wprowadzone dane do systemu.",
    version: 1,
    excel_name:
      "GENERATOR_raport_2_raport_niepoprawnych danych na rezerwacjach.xlsm",
    fields: []
  },
  {
    title: "333",
    slug: "/raport-3",
    short_desc: "3333",
    version: 1,
    excel_name: "333.xlsm",
    fields: [
      [agent_code_in, 1],
      [agent_code_not_in, 0]
    ]
  }
];
