import {
  booking_date_from,
  booking_date_to,
  agent_code_in,
  agent_code_not_in
} from "./inputs";

export const reports = [
  {
    title: "Generowanie listy adresów email",
    slug: "/raport-1",
    short_desc:
      "Pobieranie adresów email kontaktów zgodnie z wybranymi parametrami.",
    excel_name: "generowanie_listy_adresow_email_v1.xlsm",
    fields: [
      [booking_date_from, true],
      [booking_date_to, true],
      [agent_code_in, false]
    ]
  },
  {
    title: "Raport niepoprawnych danych na rezerwacjach",
    slug: "/raport-2",
    short_desc:
      "Raport generuje tabelę z rezerwacjami i zaznacza na czerwono błędnie wprowadzone dane do systemu.",
    excel_name: "raport_niepoprawnych_danych_na_rezerwacjach_v1.xlsm",
    fields: [[booking_date_from, false]]
  },
  {
    title: "333",
    slug: "/raport-3",
    short_desc: "3333",
    version: 1,
    excel_name: "333.xlsm",
    fields: [
      [agent_code_in, true],
      [agent_code_not_in, false]
    ]
  }
];
