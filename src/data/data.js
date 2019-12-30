const booking_date_from = "booking_date_from";
const booking_date_to = "booking_date_to";
const agent_code = "agent_code";

const regex_date = /[*]/g;
const regex_agent_code = /^[0-9]{5}((,[0-9]{5}){0,})?$/g;

export const my_input = [
  {
    name: booking_date_from,
    type: "date",
    placeholder: "",
    hint: "mm/dd/yyyy, np: 01/15/2020",
    regex: ""
  },
  {
    name: booking_date_to,
    type: "date",
    placeholder: "",
    hint: "mm/dd/yyyy, np: 01/15/2020",
    regex: ""
  },
  {
    name: agent_code,
    type: "text",
    placeholder: "",
    hint: "91145,32689",
    regex: regex_agent_code
  }
];

export const reports = [
  {
    title: "Raport 1 pobieranie adresów email",
    slug: "/raport-1",
    short_desc:
      "Pobieranie adresów email kontaktów zgodnie z wybranymi parametrami.",
    version: 1,
    excel_name: "GENERATOR_raport_1_pobieranie_adresow_email.xlsm",
    fields: [booking_date_from, booking_date_to, agent_code]
  },
  {
    title: "Raport 2 raport niepoprawnych danych na rezerwacjach",
    slug: "/raport-2",
    short_desc:
      "Raport generuje tabelę z rezerwacjami i zaznacza na czerwono błędnie wprowadzone dane do systemu.",
    version: 1,
    excel_name:
      "GENERATOR_raport_2_raport_niepoprawnych danych na rezerwacjach.xlsm",
    fields: [booking_date_from, booking_date_to]
  },
  {
    title: "333",
    slug: "/raport-3",
    short_desc: "3333",
    version: 1,
    excel_name: "333.xlsm",
    fields: [booking_date_from]
  }
];
