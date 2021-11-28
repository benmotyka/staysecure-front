import SqlInteractive from "./parts/SqlInteractive"
import HighlightSqlCode from './parts/HighlightSqlCode'
import HighlightHtml from "./parts/HighlightHtml"
import Introduction from "./parts/Introduction"
const content = [
    {
        course: "sql-injection",
        content: [
            {
                header: "Scenariusz kursu",
                text: "W przeglądarce uruchomiona jest prosta strona sklepu internetowego. Podstawową jej funkcjonalnością jest wyszukanie produktu którego chce się wyszukać, aby następnie przeglądać produkty związane z wpisaną frazą.<br><br>Pierwszym krokiem który podejmuje atakujący jest dokładne zbadanie i analiza kodu źrodłowego strony internetowej. Dzięki temu może przeglądać kod strony w poszukiwaniu potencjalnych podatności i luk bezpieczeństwa. ",
                level: "basic",
                slide: <Introduction/>,
            },
            {
                header: "Analiza kodu strony internetowej",
                text: "Jak widać na załączonym fragmencie kodu źródłowego, aplikacja sklepu zawiera się z ciała (rozpoczynającego się znacznikiem <b>&lt;body&gt;</b>), w którym to znajduje się struktura strony, oraz skryptu (rozpoczynającego się znacznikiem <b>&lt;script&gt;</b>), który jest wykonywany po wystąpieniu określonych okoliczności. W tym wypadku po naciśnięciu przycisku, znajdującego się w tagu <b>&lt;button&gt;</b>, zostanie wywołana funkcja <i>search</i>. Zadaniem funkcji jest wysłanie żądania HTTP typu GET do adresu url https://api/search z ciałem w postaci obiektu. W obiekcie tym znajduje się para klucz-wartość, określająca ciąg znaków szukany przez użytkownika.<br><br><b>W tym interaktywnym ćwiczeniu postaraj się zaznaczyć kursorem funkcję znajdującą się w kodzie, która odpowiada za przesłanie formularza.</b>",
                level: "basic",
                slide: <HighlightHtml/>,
                interactive: true,
            },
            {
                header: "Przesłanie żądania",
                text: "#FORMATWyslane zadanie moze byc zmodyfikowane np przez proxy, gdzie trafia? do api, ktoro jest połączone z db, atakuajcy musi poeksperymentowac tzn zapodac ; - i rozne takie symbole i zobaczyc na kody bledu aby ustalic czy api jest podatne na sql injection, jesli front blokuje przed znakami specjalnymi to moze to zrobic uzywajac proxy",
                // slide: <HighlightSqlCode/>,
                level: "basic",
            },
            {
                header: "Analiza kodu API",
                text: "Wartość wysłana z aplikacji internetowej zostaje przekazana do aplikacji serwerowej, celem jej przetworzenia i zwrócenia odpowiednich informacji. W poniższym kodzie źródłowym przedstawiony jest fragment aplikacji działającej po stronie serwera, odpowiadający pobraniu zawartości żądania a następnie bezpośrednie przekazanie go do zapytania bazodanowego. <br>W zwyczajnych okolicznościach, atakujący nie ma możliwości wglądu w kod aplikacji serwerowej, jednak poprzez eksperymentowanie z wartościami wysłanych danych jest on w stanie określić jej podatność na atak typu SQL Injection.<br><br> <b>W tym interaktywnym ćwiczeniu zaznacz fragment kodu, w którym znajduje się zapytanie SQL</b>",
                slide: <HighlightSqlCode/>,
                level: "basic",
                interactive: true,
            },
            {
                header: "Symulacja kodu API po otrzymaniu żądania",
                text: "#FORMAT Mając na uwadze, że api odsyla nietypowe kody bledow dla wartosci typu -, ;, atakujący może być pewny że że wartość nie jest w żaden sposób czyszczona, i jest prosto podawana do zapytania SQL, przesyłanego do bazy. Zmiana wartości parametru powoduje zmianę zapytania, a dodanie symboli komentarzy -- lub ' może znacznie zmodyfikować działanie zapytania.",
                level: "advanced",
                interactive: true,
                slide: <SqlInteractive/>,
            },
            {
                header: "Header 6",
                text: "Sed id semper dui, non mollis magna. Nunc arcu metus, scelerisque eu orci quis, rhoncus viverra felis. Donec vel ornare lectus, sit amet suscipit risus. In placerat congue libero sit amet efficitur. ",
                level: "advanced"
            },
            {
                header: "Header 7",
                text: "Aliquam sodales interdum odio, ut tristique quam viverra sed. Suspendisse ut bibendum enim. Pellentesque lobortis imperdiet tortor ut pellentesque.",
                level: "advanced"
            }
        ]
    },
    {
        course: "phishing",
        content: [
            {
                header: "Header 1",
                text: "phishing",
                level: "basic"
            },
            {
                header: "Header 2",
                text: "phishing",
                level: "basic"
            },
            {
                header: "Header 3",
                text: "phishing",
                level: "advanced"
            }
        ]
    },
    {
        course: "spoofing",
        content: [
            {
                header: "Header 2",
                text: "phishing",
                level: "basic"
            },
        ]
    },
    {
        course: "ransomware",
        content: [
            {
                header: "Header 1",
                text: "ransom",
                level: "basic"
            }
        ]
    },
    {
        course: "social-engineering",
        content: [
            {
                header: "Header 1",
                text: "social enginering",
                level: "basic"
            }
        ]
    },
    {
        course: "dos",
        content: [
            {
                header: "Header 1",
                text: "dos",
                level: "basic"
            }
        ]
    }
    ]

export default content