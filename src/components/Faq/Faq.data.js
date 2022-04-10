const items = [
  {
    language: "pl",
    category: "account",
    question: "Jaka jest różnica między kontem podstawowym a zaawansowanym?",
    answer:
      "Typ konta ... lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "account",
    question: "Czy mogę zmienić typ konta po utworzeniu?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "account",
    question: "Czy założenie konta kosztuje?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "courses",
    question: "Jak mogę rozpocząć kurs?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "courses",
    question: "Z czego składa się kurs?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "courses",
    question: "Czy mogę potwórzyć kurs?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "courses",
    question: "Gdzie mogę zobaczyć ukończone kursy?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    category: "courses",
    language: "pl",
    question: "Czy mogę ocenić kurs?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "courses",
    question: "Na stronie nie ma kursu który mnie interesuje.",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "quizes",
    question: "Jak mogę wziąć udział w quizie?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "quizes",
    question: "Czy mogę powtórzyć quiz?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "pl",
    category: "quizes",
    question: "Gdzie mogę zobaczyć ukończone quizy?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  //  ENGLISH
  {
    language: "en",
    category: "account",
    question: "What is the difference between a basic account and an advanced account?",
    answer:
      "Typ konta ... lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "account",
    question: "How can I change the account type?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "account",
    question: "Does it cost money to open an account?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "courses",
    question: "How do I start a course?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "courses",
    question: "What the course consists of?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "courses",
    question: "Can I repeat the course?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "courses",
    question: "Where can I see my completed courses?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    category: "courses",
    language: "en",
    question: "Can I rate the course?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "courses",
    question: "There is no course on the website that interests me.",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "quizes",
    question: "How do I take a quiz?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "quizes",
    question: "Can I retake the quiz?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    language: "en",
    category: "quizes",
    question: "Where can I see my completed quizzes?",
    answer:
      "lorem ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];

export default items;
