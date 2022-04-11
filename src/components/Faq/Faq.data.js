const items = [
  {
    language: "pl",
    category: "account",
    question: "Jaka jest różnica między kontem podstawowym a zaawansowanym?",
    answer:
      "Typ konta świadczy o tym, czy w kursie będą występowały slajdy o większym stopniu złożoności. Kurs dla użytkownika o typie konta podstawowym będzie przedstawiał podstawową treść, podczas gdy dla użytkownika o typie konta zaawansowanym będzie zawierał dodatkowe slajdy.",
  },
  {
    language: "pl",
    category: "account",
    question: "Czy mogę zmienić typ konta po utworzeniu?",
    answer:
      "Tak. Zmiana typu konta jest możliwa w każdej chwili w sekcji 'Ustawienia' na profilu użytkownika.",
  },
  {
    language: "pl",
    category: "account",
    question: "Czy założenie konta kosztuje?",
    answer:
      "Nie. Założenie konta jest i zawsze będzie darmowe. W przyszłości mogą zostać dodane elementy typu premium, jednak nie będą one wpływały na treść i jakość kształcenia.",
  },
  {
    language: "pl",
    category: "courses",
    question: "Jak mogę rozpocząć kurs?",
    answer:
      "Kurs może zostać rozpoczęty poprzez wejście na stronę z kursami oraz kliknięcie interesujące szkolenie. Przed rozpoczęciem zostaną ukazane informacje o kursie oraz komentarze i oceny uczestników kursu.",
  },
  {
    language: "pl",
    category: "courses",
    question: "Z czego składa się kurs?",
    answer:
      "W skład kursu wchodzi slajd, na którym przedstawiane są kluczowe zagadnienia oraz opis slajdu, z którym należy się zapoznać. Przed pierwszym kursem, zostanie zaprezentowany krótki poradnik opisujący dokładnie poszczególne elementy na ekranie. Może zostać on wznowiony, klikając przycisk ustawień na kursie i wybierając opcję zresetowania poradnika.",
  },
  {
    language: "pl",
    category: "courses",
    question: "Czy mogę potwórzyć kurs?",
    answer:
      "Ukończony kurs może zostać powtórzony w każdej chwili. Aby to zrobić, wejdź ponownie w interesujący Cię kurs.",
  },
  {
    language: "pl",
    category: "courses",
    question: "Gdzie mogę zobaczyć ukończone kursy?",
    answer:
      "Ukończone kursy znajdują się w sekcji <a href='/account/courses'>'Moje kursy'</a> w profilu użytkownika. ",
  },
  {
    category: "courses",
    language: "pl",
    question: "Czy mogę ocenić kurs?",
    answer:
      "Każdy kurs może zostać oceniony oceną w skali 1-5 oraz komentarzem. Następnie, te informacje wyświetlane są wszystkim użytkownikom, którzy rozpoczynają dany kurs.",
  },
  {
    language: "pl",
    category: "courses",
    question: "Na stronie nie ma kursu który mnie interesuje.",
    answer:
      "Ciągle pracujemy nad dostarczeniem jak najciekawszych i najbardziej jakościowych kursów. Jeśli masz pomysł na nowy kurs lub propozycję zmiany istniejącego, odezwij się do nas, poprzez wypełnienie poniższego formularza kontaktowego.",
  },
  {
    language: "pl",
    category: "quizes",
    question: "Jak mogę wziąć udział w quizie?",
    answer:
      "Po ukończeniu kursu każdy użytkownik ma możliwość wzięcia udziału w quizie jednokrotnego wyboru. Quiz składa się z kilku pytań, a następnie wyniki są przedstawiane na podsumowaniu.",
  },
  {
    language: "pl",
    category: "quizes",
    question: "Czy mogę powtórzyć quiz?",
    answer:
      "Tak. Każdy quiz może zostać powtórzony, pod warunkiem rozpoczęcia kursu ponownie. Wynik poprzedniego quizu zostanie nadpisany przez nowy.",
  },
  {
    language: "pl",
    category: "quizes",
    question: "Gdzie mogę zobaczyć ukończone quizy?",
    answer:
      "Ukończone quizy, wraz z graficznym podsumowaniem znajdują się w sekcji <a href='/account/quizes'>'Moje quizy'</a> w profilu użytkownika.",
  },
  //  ENGLISH
  {
    language: "en",
    category: "account",
    question: "What is the difference between a basic account and an advanced account?",
    answer:
      "The account type indicates whether there will be slides of greater complexity in the course. A course for a user with a basic account type will present basic content, while one with an advanced account type will include additional slides.",
  },
  {
    language: "en",
    category: "account",
    question: "How can I change the account type?",
    answer:
      "You can change your account type at any time in the 'Settings' section of your user profile.",
  },
  {
    language: "en",
    category: "account",
    question: "Does it cost money to open an account?",
    answer:
      "No. Creating an account is and always will be free. Premium features may be added in the future, but these will not affect the content or quality of education.",
  },
  {
    language: "en",
    category: "courses",
    question: "How do I start a course?",
    answer:
      "You can start a course by going to the courses page and clicking on the course you are interested in. Information about the course and comments and ratings from course participants will be shown before the course starts.",
  },
  {
    language: "en",
    category: "courses",
    question: "What the course consists of?",
    answer:
      "The course includes a slide that presents the key points and a description of the slide to follow. Prior to the first course, a short tutorial will be presented describing the exact items on the screen. It can be resumed by clicking the settings button on the course and selecting the option to reset the tutorial.",
  },
  {
    language: "en",
    category: "courses",
    question: "Can I repeat the course?",
    answer:
      "A completed course can be retaken at any time. To do so, re-enter the course you are interested in.",
  },
  {
    language: "en",
    category: "courses",
    question: "Where can I see my completed courses?",
    answer:
      "Completed courses can be found in the <a href='/account/courses'>'My courses'</a> section of your profile.",
  },
  {
    category: "courses",
    language: "en",
    question: "Can I rate the course?",
    answer:
      "Each course can be given a grade on a scale of 1-5 and a comment. This information is then displayed to all users who start the course.",
  },
  {
    language: "en",
    category: "courses",
    question: "There is no course on the website that interests me.",
    answer:
      "We are constantly working to deliver the most interesting and quality courses possible. If you have an idea for a new course or a proposal to change an existing one, get in touch with us by filling in the contact form below.",
  },
  {
    language: "en",
    category: "quizes",
    question: "How do I take a quiz?",
    answer:
      "After completing the course, each user has the opportunity to take a one-choice quiz. The quiz consists of a number of questions and then the results are presented in a summary.",
  },
  {
    language: "en",
    category: "quizes",
    question: "Can I retake the quiz?",
    answer:
      "Yes. Any quiz can be retaken, provided you start the course again. The score of the previous quiz will be overwritten by the new one.",
  },
  {
    language: "en",
    category: "quizes",
    question: "Where can I see my completed quizzes?",
    answer:
      "Completed quizzes, along with a graphical summary, can be found in the <a href='/account/quizes'>'My Quizzes'</a> section of your profile.",
  },
];

export default items;
