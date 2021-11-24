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
                text: "W przeglądarce uruchomiona jest prosta strona sklepu internetowego. Podstawową jej funkcjonalnością jest wyszukanie produktu którego chce się wyszukać, aby następnie przeglądać produkty związane z wpisaną frazą.<br><br>Dokładnie zbadanie i analiza kodu źrodłowego strony internetowej jest ... Atakujący dzięki temu może przeglądać kod strony w poszukiwaniu potencjalnych podatności. ",
                level: "basic",
                slide: <Introduction/>,
            },
            {
                header: "Analiza kodu źródłowego",
                text: "Jak widać na załączonym fragmencie kodu źródłowego, aplikacja sklepu zawiera się z <b>ciała</b>, w której znajduje się struktura strony, oraz <b>skryptu</b>, który jest wykonywany po wystąpieniu określonych okoliczności. W tym wypadku po naciśnięciu przycisku, znajdującego się w tagu &lt;button&gt;, zostanie wywołana funkcja <i>search</i>.<br><br>Zadaniem funkcji jest wysłanie żądania HTTP typu GET do adresu url https://api/search z ciałem w postaci obiektu. W obiekcie tym znajduje się para klucz-wartość, określająca ciąg znaków szukany przez użytkownika.<br><br><b>W tym interaktywnym ćwiczeniu postaraj się zaznaczyć kursorem funkcję znajdującą się w kodzie, która odpowiada za przesłanie formularza.</b>",
                level: "basic",
                slide: <HighlightHtml/>,
                interactive: true,
            },
            {
                header: "Header 4",
                text: "Wartość wysłana z aplikacji internetowej zostaje przekazana do aplikacji serwerowej, celem jej przetworzenia i zwrócenia odpowiednich informacji. W poniższym kodzie źródłowym przedstawiony jest fragment aplikacji odpowiadający pobraniu zawartości żądania a następnie bezpośrednie przekazanie go do zapytania bazodanowego. <br><br><b>W tym interaktywnym ćwiczeniu zaznacz fragment kodu, w którym znajduje się zapytanie SQL</b>",
                slide: <HighlightSqlCode/>,
                level: "advanced",
                interactive: true,
            },
            {
                header: "Header 5",
                text: "Phasellus mi augue, aliquet vitae vestibulum non, pulvinar at quam. Proin ac nisl pretium, malesuada justo eu, imperdiet felis. Aliquam sodales consequat semper. In non vestibulum leo, at laoreet nunc.",
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