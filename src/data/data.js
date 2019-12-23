export const reports = [
  {
    title: "Raport 1 pobieranie adresów email",
    slug: "/raport-1",
    short_desc:
      "Pobieranie adresów email kontaktów zgodnie z wybranymi parametrami.",
    version: 1,
    excel_name: "GENERATOR_raport_1_pobieranie_adresow_email.xlsm",
    fields: ["booking_date_from", "booking_date_to", "agent_code"]
  },
  {
    title: "Raport 2 raport niepoprawnych danych na rezerwacjach",
    slug: "/raport-2",
    short_desc:
      "Raport generuje tabelę z rezerwacjami i zaznacza na czerwono błędnie wprowadzone dane do systemu.",
    version: 1,
    excel_name:
      "GENERATOR_raport_2_raport_niepoprawnych danych na rezerwacjach.xlsm",
    fields: ["booking_date_from", "booking_date_to"]
  }
];
