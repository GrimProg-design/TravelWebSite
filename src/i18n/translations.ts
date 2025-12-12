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
  | "booking_title"
  | "booking_label_dest"
  | "booking_label_date"
  | "booking_label_people"
  | "booking_placeholder_select"
  | "booking_option_issyk_kul"
  | "booking_option_ala_archa"
  | "booking_option_song_kul"
  | "booking_btn_find"
  | "footer_guides_header"
  | "footer_contacts_header"
  | "footer_tagline"
  | "footer_guide_prefix"
  | "footer_no_data"
  | "footer_all_rights_reserved"
  | "transport_stage_header"
  | "transport_summary_prefix"
  | "transport_plane_title"
  | "transport_plane_desc"
  | "transport_train_title"
  | "transport_train_desc"
  | "transport_warning"
  | "tour_stage_header"
  | "tour_price_prefix"
  | "tour_select_btn"
  | "tour_hint_text"
  | "tickets_page_title"
  | "tour_name_issyk_kul"
  | "tour_name_han_tengri"
  | "tour_name_song_kul"
  | "checkout_title"
  | "checkout_message_prefix"
  | "checkout_message_suffix"
  | "checkout_new_booking_btn"
  | "seat_stage_header_plane"
  | "seat_stage_header_train"
  | "seat_door_entrance"
  | "seat_door_exit"
  | "seat_info_prefix"
  | "seat_info_placeholder"
  | "seat_btn_purchase"
  | "seat_btn_loading"
  | "card_badge_local"
  | "card_badge_global"
  | "card_details_btn"
  | "places_page_title"
  | "places_hint"
  | "places_intro_title"
  | "places_intro_text"
  | "header_all_tours"
  | "header_kyrgyzstan"
  | "header_world"
  | "no_tours_message"
  // Данные туров
  | "tour_data_kg1_name"
  | "tour_data_kg1_desc"
  | "tour_data_kg2_name"
  | "tour_data_kg2_desc"
  | "tour_data_w1_name"
  | "tour_data_w1_desc"
  | "tour_data_w2_name"
  | "tour_data_w2_desc"
  | "filter_label_all"
  | "filter_label_kyrgyzstan"
  | "filter_label_world";

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
    // Футер
    footer_guides_header: "Наши Гиды",
    footer_contacts_header: "Свяжитесь с Нами",
    footer_tagline: "Исследуйте сердце Тянь-Шаня",
    footer_guide_prefix: "Гид",
    footer_no_data: "Нет данных",
    footer_all_rights_reserved: "Все права защищены.",
    // Выбор транспорта (TransportSelection)
    transport_stage_header: "2. Выберите вид транспорта",
    transport_summary_prefix: "Вы выбрали:",
    transport_plane_title: "Самолет",
    transport_plane_desc: "Быстро и комфортно к отдаленным местам.",
    transport_train_title: "Поезд",
    transport_train_desc: "Живописные виды и аутентичное путешествие.",
    transport_warning:
      "* Выбор транспорта влияет на доступные места и общую стоимость.",
    // Выбор тура (TourSelection)
    tour_stage_header: "1. Выберите желаемое направление",
    tour_price_prefix: "Цена от:",
    tour_select_btn: "Выбрать Тур",
    tour_hint_text: "Все туры включают гида и проживание в юрточных лагерях.",
    // Tickets.tsx
    tickets_page_title: "Бронирование Вашего Путешествия",
    tour_name_issyk_kul: "Жемчужина Иссык-Куля",
    tour_name_han_tengri: "Пик Победы и Хан-Тенгри",
    tour_name_song_kul: "Кочевой Путь на Сон-Куль",
    checkout_title: "🎉 Успех! Ваши билеты отправлены!",
    checkout_message_prefix: "Ваше приключение",
    checkout_message_suffix: "начинается скоро. Спасибо за выбор Tour.KG.",
    checkout_new_booking_btn: "Начать новое бронирование",
    // Выбор места (SeatSelection)
    seat_stage_header_plane: "Выберите место в самолете",
    seat_stage_header_train: "Выберите место в поезде",
    seat_door_entrance: "ВХОД",
    seat_door_exit: "ВЫХОД",
    seat_info_prefix: "Выбрано место:",
    seat_info_placeholder: "Выберите доступное место",
    seat_btn_purchase: "Купить и Отправить!",
    seat_btn_loading: "Оформление...",
    // Карточка тура (TourCard)
    card_badge_local: "🇰🇬 Локальный",
    card_badge_global: "🌍 Глобальный",
    card_details_btn: "Подробнее →",
    // Страница "Направления" (Places)
    places_page_title: "Наши Направления",
    places_hint: "Мини-карта показывает направления туров.",
    places_intro_title: "Откройте для себя свое следующее приключение",
    places_intro_text:
      "Мы предлагаем лучшие маршруты как по сердцу Тянь-Шаня, так и по самым живописным уголкам планеты, чтобы вы могли удобно расширять свое путешествие.",
    header_all_tours: "Все Туры",
    header_kyrgyzstan: "Туры по Кыргызстану",
    header_world: "Всемирные Приключения",
    no_tours_message: "Туры в этой категории пока недоступны.",
    // Данные туров
    tour_data_kg1_name: "Иссык-Куль: Жемчужина Тянь-Шаня",
    tour_data_kg1_desc:
      "Самое большое и красивое озеро. Идеально для летнего отдыха.",
    tour_data_kg2_name: "Ущелье Ала-Арча: Альпийские Луга",
    tour_data_kg2_desc: "Высокогорный национальный парк, доступный из Бишкека.",
    tour_data_w1_name: "Мачу-Пикчу: Город Инков",
    tour_data_w1_desc: "Исторический памятник, затерянный в облаках Анд.",
    tour_data_w2_name: "Исландия: Северное Сияние",
    tour_data_w2_desc: "Путешествие по вулканам, гейзерам и ледникам.",
    // Фильтр категорий (CategoryFilter)
    filter_label_all: "Все Туры",
    filter_label_kyrgyzstan: "Кыргызстан",
    filter_label_world: "Всемирные",
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
    // Футер
    footer_guides_header: "Our Guides",
    footer_contacts_header: "Contact Us",
    footer_tagline: "Explore the Heart of Tian Shan",
    footer_guide_prefix: "Guide",
    footer_no_data: "No data",
    footer_all_rights_reserved: "All rights reserved.",
    // Выбор транспорта (TransportSelection)
    transport_stage_header: "2. Select Transport Type",
    transport_summary_prefix: "You selected:",
    transport_plane_title: "Plane",
    transport_plane_desc: "Fast and comfortable to remote locations.",
    transport_train_title: "Train",
    transport_train_desc: "Scenic views and an authentic journey.",
    transport_warning:
      "* Transport selection affects available seating and total cost.",
    // Выбор тура (TourSelection)
    tour_stage_header: "1. Select your desired destination",
    tour_price_prefix: "Price starting from:",
    tour_select_btn: "Select Tour",
    tour_hint_text:
      "All tours include a guide and accommodation in yurt camps.",
    // Tickets.tsx
    tickets_page_title: "Booking Your Journey",
    tour_name_issyk_kul: "Pearl of Issyk-Kul",
    tour_name_han_tengri: "Pobeda Peak and Khan-Tengri",
    tour_name_song_kul: "Nomadic Path to Song-Kul",
    checkout_title: "🎉 Success! Your tickets have been sent!",
    checkout_message_prefix: "Your adventure",
    checkout_message_suffix: "starts soon. Thank you for choosing Tour.KG.",
    checkout_new_booking_btn: "Start a new booking",
    // Выбор места (SeatSelection)
    seat_stage_header_plane: "Select a seat on the plane",
    seat_stage_header_train: "Select a seat on the train",
    seat_door_entrance: "ENTRANCE",
    seat_door_exit: "EXIT",
    seat_info_prefix: "Selected seat:",
    seat_info_placeholder: "Select an available seat",
    seat_btn_purchase: "Purchase and Send!",
    seat_btn_loading: "Processing...",
    // Карточка тура (TourCard)
    card_badge_local: "🇰🇬 Local",
    card_badge_global: "🌍 Global",
    card_details_btn: "Details →",
    // Страница "Направления" (Places)
    places_page_title: "Our Destinations",
    places_hint: "Mini-map shows tour destinations.",
    places_intro_title: "Discover your next adventure",
    places_intro_text:
      "We offer the best routes both through the heart of Tian Shan and to the most picturesque corners of the planet, so you can conveniently expand your journey.",
    header_all_tours: "All Tours",
    header_kyrgyzstan: "Tours in Kyrgyzstan",
    header_world: "World Adventures",
    no_tours_message: "Tours in this category are not yet available.",
    // Данные туров
    tour_data_kg1_name: "Issyk-Kul: Pearl of the Tian Shan",
    tour_data_kg1_desc:
      "The largest and most beautiful lake. Ideal for summer holidays.",
    tour_data_kg2_name: "Ala-Archa Gorge: Alpine Meadows",
    tour_data_kg2_desc:
      "A high-altitude national park, accessible from Bishkek.",
    tour_data_w1_name: "Machu Picchu: City of the Incas",
    tour_data_w1_desc:
      "A historical monument, lost in the clouds of the Andes.",
    tour_data_w2_name: "Iceland: Northern Lights",
    tour_data_w2_desc: "A journey through volcanoes, geysers, and glaciers.",
    // Фильтр категорий (CategoryFilter)
    filter_label_all: "All Tours",
    filter_label_kyrgyzstan: "Kyrgyzstan",
    filter_label_world: "Worldwide",
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
    // Футер
    footer_guides_header: "Биздин Гиддер",
    footer_contacts_header: "Биз менен байланышыңыз",
    footer_tagline: "Теңир-Тоонун жүрөгүн изилдеңиз",
    footer_guide_prefix: "Гид",
    footer_no_data: "Маалымат жок",
    footer_all_rights_reserved: "Бардык укуктар корголгон.",
    transport_stage_header: "2. Унаа түрүн тандаңыз",
    transport_summary_prefix: "Сиз тандадыңыз:",
    transport_plane_title: "Учак",
    transport_plane_desc: "Алыскы жерлерге тез жана ыңгайлуу.",
    transport_train_title: "Поезд",
    transport_train_desc: "Кереметтүү көрүнүштөр жана чыныгы саякат.",
    transport_warning:
      "* Унаа тандоо жеткиликтүү орундарга жана жалпы баага таасир этет.",
    // Выбор тура (TourSelection)
    tour_stage_header: "1. Керектүү багытты тандаңыз",
    tour_price_prefix: "Баасы:",
    tour_select_btn: "Турду тандоо",
    tour_hint_text: "Бардык турларга гид жана боз үйлөрдө жашоо кирет.",
    // Tickets.tsx
    tickets_page_title: "Саякатыңызды брондоо",
    tour_name_issyk_kul: "Ысык-Көлдүн бермети",
    tour_name_han_tengri: "Жеңиш чокусу жана Хан-Теңири",
    tour_name_song_kul: "Соң-Көлгө көчмөн жолу",
    checkout_title: "🎉 Ийгилик! Сиздин билеттер жөнөтүлдү!",
    checkout_message_prefix: "Сиздин укмуштуу окуя",
    checkout_message_suffix:
      "жакында башталат. Tour.KG тандаганыңыз үчүн рахмат.",
    checkout_new_booking_btn: "Жаңы брондаону баштоо",
    // Выбор места (SeatSelection)
    seat_stage_header_plane: "Учакта орун тандаңыз",
    seat_stage_header_train: "Поездде орун тандаңыз",
    seat_door_entrance: "КИРҮҮ",
    seat_door_exit: "ЧЫГУУ",
    seat_info_prefix: "Тандалган орун:",
    seat_info_placeholder: "Жеткиликтүү орунду тандаңыз",
    seat_btn_purchase: "Сатып алып, жөнөтүү!",
    seat_btn_loading: "Жасалууда...",
    // Карточка тура (TourCard)
    card_badge_local: "🇰🇬 Жергиликтүү",
    card_badge_global: "🌍 Глобалдык",
    card_details_btn: "Кененирээк →",
    // Страница "Направления" (Places)
    places_page_title: "Биздин багыттар",
    places_hint: "Мини-карта тур багыттарын көрсөтөт.",
    places_intro_title: "Кийинки укмуштуу окуяңызды ачыңыз",
    places_intro_text:
      "Биз Теңир-Тоонун жүрөгүндөгү эң мыкты маршруттарды, ошондой эле планетанын эң кооз бурчтарын сунуштайбыз, ошондуктан сиз саякатыңызды оңой кеңейте аласыз.",
    header_all_tours: "Бардык турлар",
    header_kyrgyzstan: "Кыргызстан боюнча турлар",
    header_world: "Дүйнөлүк укмуштуу окуялар",
    no_tours_message: "Бул категорияда турлар азырынча жеткиликсиз.",
    // Данные туров
    tour_data_kg1_name: "Ысык-Көл: Теңир-Тоонун бермети",
    tour_data_kg1_desc: "Эң чоң жана эң кооз көл. Жайкы эс алуу үчүн идеалдуу.",
    tour_data_kg2_name: "Ала-Арча капчыгайы: Альп шалбаалары",
    tour_data_kg2_desc: "Бишкектен жеткиликтүү бийик тоолуу улуттук парк.",
    tour_data_w1_name: "Мачу-Пикчу: Инкалар шаары",
    tour_data_w1_desc: "Анд тоолорунун булуттарында жоголгон тарыхый эстелик.",
    tour_data_w2_name: "Исландия: Түндүк Жарык",
    tour_data_w2_desc: "Жанартаулар, гейзерлер жана мөңгүлөр боюнча саякат.",
    // Фильтр категорий (CategoryFilter)
    filter_label_all: "Бардык турлар",
    filter_label_kyrgyzstan: "Кыргызстан",
    filter_label_world: "Дүйнөлүк",
  },
} as const;

export type Translations = (typeof resources)["ru"];
