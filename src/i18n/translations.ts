// src/i18n/translations.ts (Обновленная версия)

export type TranslationKeys =
  | "site_title"
  | "welcome_message"
  | "buy_button"
  | "russian_label"
  | "english_label"
  | "kyrgyz_label"
  | "home_link"
  | "status_link"
  | "tickets_link"
  | "places_link"
  | "language_header"
  | "theme_header"
  | "footer_text"
  | "home_title_part1"
  | "home_title_part2"
  | "home_description"
  | "cta_button_text"
  | "booking_option_song_kul"
  | "booking_btn_find";

export type LanguageCode = "ru" | "en" | "kg";

export const resources = {
  ru: {
    site_title: "Демо-сайт",
    welcome_message: "Добро пожаловать!",
    buy_button: "Купить билет",
    russian_label: "Русский",
    english_label: "Английский",
    kyrgyz_label: "Кыргызча",
    // Навигация
    home_link: "Главная",
    status_link: "Статус поездки",
    tickets_link: "Купить билеты",
    places_link: "Места",
    // Сайдбар
    language_header: "Язык",
    theme_header: "Оценка",
    footer_text: "Tour.KG © 2025",
    // Главная страница (Home)
    home_title_part1: "Откройте ",
    home_title_part2: "Непознанный",
    home_description:
      "Ваше путешествие по Тянь-Шаню начинается здесь. От величественных пиков до бирюзовых озер — выберите свой идеальный маршрут.",
    cta_button_text: "Смотреть все туры",
    // Форма бронирования (QuickBookingForm)
        booking_title: "Быстрое Бронирование",
        booking_label_dest: "Куда",
        booking_label_date: "Дата",
        booking_label_people: "Кол-во человек",
        booking_placeholder_select: "Выберите направление",
        booking_option_issyk_kul: "Иссык-Куль",
        booking_option_ala_archa: "Ала-Арча",
        booking_option_song_kul: "Сон-Куль",
        booking_btn_find: "Найти Туры",
  },
  en: {
    site_title: "Demo Website",
    welcome_message: "Welcome!",
    buy_button: "Buy Ticket",
    russian_label: "Russian",
    english_label: "English",
    kyrgyz_label: "Kyrgyz",
    //для навигации
    home_link: "Home",
    status_link: "Trip Status",
    tickets_link: "Buy Tickets",
    places_link: "Places",
    // Сайдбар
    language_header: "Language",
    theme_header: "Rating",
    footer_text: "Tour.KG © 2025",
    // Главная страница (Home)
    home_title_part1: "Discover ",
    home_title_part2: "Unexplored",
    home_description:
      "Your journey across the Tian Shan begins here. From majestic peaks to turquoise lakes—choose your perfect route.",
    cta_button_text: "View all tours",
    // Форма бронирования (QuickBookingForm)
        booking_title: "Quick Booking",
        booking_label_dest: "Destination",
        booking_label_date: "Date",
        booking_label_people: "Number of people",
        booking_placeholder_select: "Select destination",
        booking_option_issyk_kul: "Issyk-Kul",
        booking_option_ala_archa: "Ala Archa",
        booking_option_song_kul: "Song Kul",
        booking_btn_find: "Find Tours",
  },
  kg: {
    site_title: "Демо-сайт",
    welcome_message: "Кош келиңиз!",
    buy_button: "Билет сатып алуу",
    russian_label: "Орусча",
    english_label: "Англисче",
    kyrgyz_label: "Кыргызча",
    //для навигации
    home_link: "Башкы бет",
    status_link: "Сапар статусу",
    tickets_link: "Билет сатып алуу",
    places_link: "Орундар",
    // Сайдбар
    language_header: "Тил",
    theme_header: "Баалоо",
    footer_text: "Tour.KG © 2025",
    // Главная страница (Home)
    home_title_part1: "Ачыңыз ",
    home_title_part2: "Изделбеген",
    home_description:
      "Сиздин Теңир-Тоо боюнча сапарыңыз бул жерден башталат. Улуу чокулардан бирюза көлдөрүнө чейин — өзүңүздүн идеалдуу маршрутуңузду тандаңыз.",
    cta_button_text: "Бардык турларды көрүү",
    // Форма бронирования (QuickBookingForm)
        booking_title: "Ыкчам Брондоо",
        booking_label_dest: "Кайда",
        booking_label_date: "Датасы",
        booking_label_people: "Адам саны",
        booking_placeholder_select: "Багытты тандаңыз",
        booking_option_issyk_kul: "Ысык-Көл",
        booking_option_ala_archa: "Ала-Арча",
        booking_option_song_kul: "Соң-Көл",
        booking_btn_find: "Турларды табуу",
  },
} as const;

export type Translations = (typeof resources)["ru"];
