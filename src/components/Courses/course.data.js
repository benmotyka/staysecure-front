import SqlInteractive from "./sqlInjection/parts/SqlInteractive"
import HighlightSqlCode from './sqlInjection/parts/HighlightSqlCode'
import HighlightHtml from "./sqlInjection/parts/HighlightHtml"
import Introduction from "./sqlInjection/parts/Introduction"
import WhatIsProxy from "./sqlInjection/parts/WhatIsProxy"
import SqlApiAbstractionLayers from './sqlInjection/parts/SqlApiAbstractionLayers'
import SqlPrevention from './sqlInjection/parts/SqlPrevention'

import RansomwareDownload from "./ransomware/parts/RansomwareDownload"
import RansomwareFilterEmail from "./ransomware/parts/RansomwareFilterEmail"
import RansomwareRun from "./ransomware/parts/RansomwareRun"
import RansomwareEncrypted from "./ransomware/parts/RansomwareEncrypted"
import RansomwareInfection from './ransomware/parts/RansomwareInfection'
import RansomwareAsymetricKey from './ransomware/parts/RansomwareAsymetricKey'
import RansomwareProtectMethods from './ransomware/parts/RansomwareProtectMethods'

import PhishingTypes from './phishing/parts/PhishingTypes'
import WebScrapping from './phishing/parts/WebScrapping'
import PhishingEnterSimulation from './phishing/parts/PhishingEnterSimulation'
import PhishingProtection from './phishing/parts/PhishingProtection'
import U2FKeys from "./phishing/parts/U2FKeys"
import PhishingSendDataSimulation from "./phishing/parts/PhishingSendDataSimulation"

import KeyloggerProtectionMethods from './keylogger/parts/KeyloggerProtectionMethods'
import WhatIsKeylogger from './keylogger/parts/WhatIsKeylogger'
import KeyloggerTypes from './keylogger/parts/KeyloggerTypes'
import KeylogggerMaliciousFlow from './keylogger/parts/KeylogggerMaliciousFlow'
import KeyloggerInfectionMethods from './keylogger/parts/KeyloggerInfectionMethods'
import KeyloggerRemoving from './keylogger/parts/KeyloggerRemoving'
import KeyloggerDetection from './keylogger/parts/KeyloggerDetection'

import WhatIsDdos from './ddos/parts/WhatIsDdos'
import DosVsDdos from './ddos/parts/DosVsDdos'
import DdosAi from './ddos/parts/DdosAi'
import HowWebServersWork from './ddos/parts/HowWebServersWork'
import DdosTypes from './ddos/parts/DdosTypes'
import DdosProtection from './ddos/parts/DdosProtection'

import XssTypes from './xss/parts/XssTypes'
import XssInteractiveIntroduction from './xss/parts/XssInteractiveIntroduction'
import XssInteractiveEnterHtml from './xss/parts/XssInteractiveEnterHtml'
import XssInteractiveEnterScript from './xss/parts/XssInteractiveEnterScript'
import XssConsequences from './xss/parts/XssConsequences'
import XssWhatIs from "./xss/parts/XssWhatIs"
import XssProtection from "./xss/parts/XssProtection"

const content = [
    {
        course: "sql-injection",
        language: "pl",
        content: [
            {
                header: "Scenariusz kursu",
                text: "W przeglądarce uruchomiona jest prosta strona sklepu internetowego. Podstawową jej funkcjonalnością jest wyszukanie produktu, aby następnie przeglądać produkty związane z wpisaną frazą.<br/><br/>Pierwszym krokiem który podejmuje atakujący jest dokładne zbadanie i analiza kodu źrodłowego strony internetowej. Dzięki temu może przeglądać kod strony w poszukiwaniu potencjalnych podatności i luk bezpieczeństwa. ",
                level: "basic",
                slide: <Introduction/>,
            },
            {
                header: "Analiza kodu strony internetowej",
                text: "Jak widać na załączonym fragmencie kodu źródłowego, aplikacja sklepu zawiera się z ciała (rozpoczynającego się znacznikiem <b>&lt;body&gt;</b>), w którym to znajduje się struktura strony, oraz skryptu (rozpoczynającego się znacznikiem <b>&lt;script&gt;</b>), który jest wykonywany po wystąpieniu określonych okoliczności. W tym wypadku po naciśnięciu przycisku, znajdującego się w tagu <b>&lt;button&gt;</b>, zostanie wywołana funkcja <i>search</i>. Zadaniem funkcji jest wysłanie żądania HTTP typu GET do adresu url https://api/search z ciałem w postaci obiektu. W obiekcie tym znajduje się para klucz-wartość, określająca ciąg znaków szukany przez użytkownika.<br/><br/><b>W tym interaktywnym ćwiczeniu postaraj się zaznaczyć kursorem funkcję znajdującą się w kodzie, która odpowiada za przesłanie formularza.</b>",
                level: "basic",
                slide: <HighlightHtml/>,
                interactive: true,
            },
            {
                header: "Przechwycenie i modyfikacja żądania",
                text: "Pola formularzy zazwyczaj walidowane są pod kątem występowania znaków specjalnych, które, zgodnie z założeniami twórców aplikacji, nie powinny zostać wysyłane do aplikacji działającej po stronie serwera.<br/><br/>Aby ominąć walidację wartości formularza po stronie klienta, atakujący może użyć <b>serwera proxy</b>, najczęściej uruchomionego na tej samej maszynie, z której dokonywany jest atak. Pozwala on na przechwycenie całego żądania i zmodyfikowanie go w dowolny sposób. W tym przykładzie została zmodyfikowana wartość pola 'value'. Takie żądanie nie powinno być możliwe do wysłania, ze względu na działającą walidację pola formularza. Na podstawie zwracanych kodów błędu, atakujący jest w stanie stwierdzić, czy to miejsce jest podatne na atak Wstrzyknięcia SQL.",
                slide: <WhatIsProxy/>,
                level: "advanced",
            },
            {
                header: "Analiza kodu API",
                text: "Wartość wysłana z aplikacji internetowej zostaje przekazana do aplikacji serwerowej, celem jej przetworzenia i zwrócenia odpowiednich informacji. W poniższym kodzie źródłowym przedstawiony jest fragment aplikacji działającej po stronie serwera wykonanej w środowisku Node.js, odpowiadający pobraniu zawartości żądania, a następnie bezpośrednie przekazanie go do zapytania bazodanowego. <br/><br/>W zwyczajnych okolicznościach atakujący nie ma możliwości wglądu w kod aplikacji serwerowej, jednak poprzez eksperymentowanie z wartościami wysłanych danych jest on w stanie określić jej podatność na atak typu SQL Injection.<br/><br/><b>W tym interaktywnym ćwiczeniu zaznacz fragment kodu, w którym znajduje się parametr przesyłany do aplikacji z formularza.</b>",
                slide: <HighlightSqlCode/>,
                level: "basic",
                interactive: true,
            },
            {
                header: "Symulacja kodu API po otrzymaniu żądania",
                text: "Atakujący, przesyłająć różne wartości w formularzu, i analizując kody błędów, jest w stanie określić, czy dana aplikacja działająca po stronie serwera jest podatna na atak SQL Injection.<br/><br/>Odbywa się to poprzez dodawanie do szukanej wartości nietypowych znaków, np: <strong>'</strong>, <strong>\"</strong>, <strong>-</strong>... Jeśli wartość przekazywana do zapytania SQL nie jest w żaden sposób czyszczona, dodatkowe znaki mogą przedostać się do zapytania i całkowicie je zmodyfikować. Zauważyć można, że poprzez dodanie <strong>'</strong> na początku wyrazu, można zamknąć apostrof znajdujący się w zapytaniu w aplikacji serwerowej, i dodać własną część zapytania, która poprzednio się tam nie znajdowała.<br/><br/><strong>W tym interaktywnym ćwiczeniu, postaraj się samodzielnie wykonać atak SQL Injection. Wykorzystaj znak apostrofu, dowolnej prawdziwej wartości (np. 1=1) i komentarza.</strong>",
                level: "basic",
                interactive: true,
                slide: <SqlInteractive/>,
            },
            {
                header: "Komunikacja z bazą danych w API",
                text: "Projektując aplikację działającą po stronie serwera, programiści muszą się zdecydować, na jakiej warstwie abstrakcji aplikacja będzie komunikowała się z bazą danych.<br/><br/>Co do zasady im wyższy poziom abstrakcji, tym niższa podatność na atak SQL Injection, błędy programistów i zazwyczaj bardziej przyjazna składnia. Każdy wyższy poziom abstrakcji komunikacji z bazą w aplikacji, zazwyczaj wspiera elementy w niższym poziomie, przykładowo używając konstruktorów kwerend czy ORM, można posiłkować się czystym SQL.<br/><br/>Jednakże im wyższa warstwa abstrakcji, tym większa szansa, że zapytania do bazy nie będą dostatecznie dobrze zoptymalizowane, przez co czas na otrzymanie odpowiedzi może być dłuższy. ",
                slide: <SqlApiAbstractionLayers/>,
                level: "advanced"
            },
            {
                header: "Przeciwdziałanie SQL Injection",
                text: "Ze względu na łatwość wykonania i potecjalne korzyści dla atakującego (możliwość zdobycia wrażliwych danych, modyfikacja bazy), ataki SQL Injection są ciągle powszechnie wykonywane, a same podatności nadal spotykane w kodach źródłowych aplikacji.<br/><br/> Kwestia odporności aplikacji na podatność SQL Injection zazwyczaj leży po stronie zespołu programistów, bowiem to oni mają bezpośredni wpływ na jakość wykonanego oprogramowania.<br/><br/>Tworząc aplkację należy pamiętać o tym, aby miejsca najbardziej wrażliwe na atak, przykładowo takie, które bezpośrednio komunikują się z relacyjną bazą danych, odpowiednio <strong>walidować i oczyszczać</strong>. Cała logika uodporniająca aplikację powinna dziać się jedynie po stronie serwera, a nie po stronie przeglądarki, ze względu na możliwość wykorzystania serwerów proxy.",
                slide: <SqlPrevention/>,
                level: "basic"
            }
        ]
    },
    {
        course: "sql-injection",
        language: "en",
        content: [
            {
                header: "Course scenario",
                text: "A simple web shop page is launched in the browser. Its basic functionality is to search for a product and then browse products related to the entered phrase. <br/><br/>The first step an attacker takes is to carefully examine and analyse the source code of the website. This allows him to review the website's code for potential vulnerabilities and security holes. ",
                level: "basic",
                slide: <Introduction/>,
            },
            {
                header: "Website code analysis",
                text: "As you can see in the attached source code snippet, the shop application consists of a body (starting with a <b>&lt;body&gt;</b> tag), which contains the page structure, and a script (starting with a <b>&lt;script&gt;</b> tag), which is executed when certain circumstances occur. In this case, a function is called when the button, located in the <b>&lt;button&gt;</b> tag is pressed. The task of the function is to send an HTTP request of GET type to the https://api/search with the body as an object. This object contains a key-value pair specifying the string the user is searching for.<br/><br/><b>In this interactive exercise, try to highlight the function in the code that is responsible for submitting the form.</b>",
                level: "basic",
                slide: <HighlightHtml/>,
                interactive: true,
            },
            {
                header: "Interception and modification of the request",
                text: "Form fields are usually validated for special characters, which, according to application developers, should not be sent to the server-side application.<br/><br/>In order to bypass the validation of form values on the client side, an attacker can use a  <b>proxy server</b>, usually running on the same machine from which the attack is launched. It allows to intercept the whole request and modify it in any way. In this example, a field 'value' was modified. Such request should not be possible to send, due to the form field validation being in place. Based on the error codes returned, the attacker is able to determine if this site is vulnerable to an SQL Injection attack.",
                slide: <WhatIsProxy/>,
                level: "advanced",
            },
            {
                header: "API code analysis",
                text: "The value sent from the web application is passed to the server-side application for processing and returning the relevant information. The source code below shows a fragment of a server-side application executed in the Node.js environment, corresponding to retrieving the content of a request and then passing it directly to a database query. <br/><br/>Under normal circumstances, an attacker has no way of viewing the server-side application code, but by experimenting with the values of the data sent, they are able to determine its vulnerability to an SQL Injection attack.<br/><br/><b>In this interactive exercise, select a piece of code that contains a parameter sent to the application from a form.</b>",
                slide: <HighlightSqlCode/>,
                level: "basic",
                interactive: true,
            },
            {
                header: "API code simulation upon receiving request",
                text: "An attacker, by submitting various values in a form, and analyzing the error codes, is able to determine if a particular server-side application is vulnerable to an SQL Injection attack.<br/><br/>This is done by adding unusual characters to the value being searched for, e.g. <strong>'</strong>, <strong>\"</strong>, <strong>-</strong>... Should the value passed to the SQL query is not sanitized in any way, the extra characters can get into the query and completely modify it. You will notice that by adding <strong>'</strong> at the beginning of a word, you can close the apostrophe found in the query in the server application, and add your own part of the query that was not previously there.<br/><br/><strong>In this interactive exercise, try to perform a SQL Injection attack yourself. Use the apostrophe character, any real value (e.g. 1=1) and a comment.</strong>",
                level: "basic",
                interactive: true,
                slide: <SqlInteractive/>,
            },
            {
                header: "Database communication in",
                text: "When designing a server-side application, developers must decide on which abstraction layer the application will communicate with the database.<br/><br/>As a rule of thumb, the higher the level of abstraction, the lower the susceptibility to SQL Injection attacks, programmer errors and usually a more friendly syntax. Any higher level of abstraction of database communication in an application will usually support elements in the lower level, for example using query builders or ORM allows developers to fetch for data using pure SQL.<br/><br/>However, the higher the abstraction layer, the greater the chance that queries to the database will not be optimised well enough, so that response times may be longer.",
                slide: <SqlApiAbstractionLayers/>,
                level: "advanced"
            },
            {
                header: "Protection against SQL Injection",
                text: "Due to the ease of execution and the potential benefits for the attacker (possibility to gain sensitive data, modify the database), SQL Injection attacks are still commonly executed, and the vulnerabilities themselves are still found in the source codes of applications.<br/><br/> The issue of application resistance to SQL Injection usually lies with the development team, as they have a direct impact on the quality of the developed software.<br/><br/>While creating an application, one should remember to properly <strong> validate and sanitize</strong> the places that are most vulnerable to the attack, for example those that directly communicate with a relational database. The whole logic making the application resistant should take place only on the server side, and not on the browser side, because of the possibility of using proxy servers.",
                slide: <SqlPrevention/>,
                level: "basic"
            }
        ]
    },
    {
        course: "phishing",
        language: "pl",
        content: [
            {
                header: "Rodzaje ataków phishingowych",
                text: "Zagadnienie phishingu jest bardzo obszerne - zawiera w sobie wiele rodzajów i sposobów phishingu, jednak w większości przypadków sprowadza się do oszukania, złudzenia ofiary.<br/><br/>Atakujący może używać phishingu samego w sobie do zdobycia poufnych danych, jednak jest on często wykorzystywany jako element pośredniczący dla innego ataku.<br/><br/>Przykładowo, aby rozesłać wirusa ransomware, atakujący może spreparować i wykorzystać <strong>maile phishingowe</strong>. Kolejnym przykładem może być instalacja Keyloggera na urządzeniu mobilnym, poprzez <strong>phishing telefoniczny</strong>.<br/><br/>Ofiarami ataków phishingowych mogą być zarówno pracownicy firm, jak i zwykli użytkownicy internetu, których adresy email lub numery telefonów zostały ujawnione, przykładowo w wyniku wycieku bazy danych.",
                slide: <PhishingTypes/>,
                level: "basic"
            },
            {
                header: "Web Scrapping",
                text: "Atakujący obierając sobie za cel phishingu firmę, może chcieć zebrać jak najwięcej adresów email bądź numerów telefonu członków danej firmy. Wydawać się może to pracochłonnym zadaniem, dlatego częstym sposobem pozyskiwania danych potencjalnych ofiar, są narzędzia zwane <strong>Web Scrapperami</strong>.<br/><br/>Są to w pełni zautomatyzowane narzędzia, które pozwalają na pobranie całej zawartości strony internetowej, odnalezieniu w niej pewnych wzorców, na przykład adresów email, a następnie zapisaniu ich.<br/><br/>Web scrappery mogą być również wyposażone w mechanizm odwiedzania witryn powiązanych z pierwotną stroną, celem pobierania jeszcze większej ilości danych. Zebrane i przygotowane dane mogą być bezpośrednio użyte do ataków phishingowych na dużą skalę.",
                level: "advanced",
                slide: <WebScrapping/>
            },
            {
                header: "Otrzymanie SMS phishingowego",
                text: "Załóżmy, że Twój numer telefonu znalazł się na liście ofiar ataku phishingu telefonicznego. Atak ma na celu złudzić ofiary do wejścia na stronę internetową w wiadomości, aby opłacić dodatkowe koszty przesyłki.<br/><br/>Z pozoru SMS wygląda rzetelnie: nadawcą jest 'Poczta Polska', a sama treść wiadomości nie wydaje się podejrzana.<br/><br/>Atakujący, używając specjalnych serwisów, mogą podszywać się pod dowolnego nadawcę, a samo hiperłącze, nie musi przenosić użytkownika na stronę, z którą rzekomo jest powiązane.<br/><br/><strong>W tym interaktywnym ćwiczeniu, przejdź do otrzymanej wiadomości SMS, przeanalizuj jej zawartość, a następnie kliknij podejrzany link.</strong>",
                level: "basic",
                slide: <PhishingEnterSimulation/>,
                interactive: true,
            },
            {
                header: "Skutki wizyty strony",
                text: "Po wejściu na stronę zauważyć można cztery podstawowe elementy, świadczące o tym, że witryna może próbować wyłudzić dane:<br/>- kwota do zapłaty znacząco różni się od tej zadeklarowanej w SMS<br/>- adres URL strony ma w sobie błąd<br/>- odbiorcą przelewu nie jest Poczta Polska, a podejrzany ciąg znaków<br/>- strona nie używa certyfikatu SSL (HTTPS)<br/><br/>Osoba, która będzie polegała jedynie na informacjach w SMS i nie przeanalizuje miejsca, na którym dokona zapłaty, może paść ofiarą wykradnięcia danych. Dzieje się tak, ponieważ jest to fałszywa strona, której zadaniem jest przekazanie danych do logowania atakującemu, zapewniając mu tym samym dostęp do konta bankowego ofiary.<br/><br/><strong>W tym interaktywnym ćwiczeniu, wejdź do wybranej metody płatności, i podaj dowolne dane logowania.</strong>",
                level: "basic",
                interactive: true,
                slide: <PhishingSendDataSimulation/>
            },
            {
                header: "Metody ochrony",
                text: "Ataki phishingowe w głównej mierze polegają na zmanipulowaniu ofiary, używając odpowiednich narzędzi inżynierii społecznej, do wejścia w podejrzany adres URL, opłacenia zamówienia itp.<br/><br/>Najbardziej podatnym elementem jest tutaj człowiek - jeśli atakującemu uda się stworzyć odpowiednie złudzenie, na przykład poprzez staranne odwzorowane wiadomości email czy strony internetowej, istnieje szansa, że ofiara będzie myślała, że odwiedza prawdziwy serwis internetowy.<br/><br/>Pełna ochrona przed atakami phishingowymi jest praktycznie nie możliwa - dlatego należy stosować dodatkowe zasady, które uchronią ofiarę przed eskalacją skutków ataku, takie jak <strong>stosowanie odpowiedniej polityki haseł</strong>.<br/><br/>Najważniejszym elementem ochrony jest jednak zachowanie uwagi przy dokonywaniu wrażliwych czynności (wykonywania przelewu, logowania się do ulubionego serwisu).",
                level: "basic",
                slide: <PhishingProtection/>
            },
            {
                header: "Zaawansowane metody ochrony",
                text: "Do bardziej zaawansowanych metod ochrony przed atakami phishingowymi zaliczyć można <strong>klucze U2F</strong>. Są to urządzenia nośniki danych, które łączą się z urządzeniem użytkownika poprzez port USB.<br/><br/>Działają na bazie kryptografii asymetrycznej i pozwalają na stosowanie ich jako uwierzytelnienia dwuskładnikowego. Dzięki temu nawet jeśli atakującemu przy próbie logowania uda się ukraść kod SMS, stanowiący uwierzytelnienie dwuskładnikowe, próba finalnie się nie powiedzie, gdyż nie będzie posiadał on fizycznego dostępu do klucza U2F.<br/><br/>Klucze U2F to powszechne i bezpieczne rozwiązanie, wspierane nie tylko przez systemy operacyjnych Windows, macOS i Linux, ale również przez największe portale społecznościowe. Mogą być również stosowane przy urządzeniach mobilnych, łączać się z urządzeniem poprzez protokoły NFC.",
                level: "basic",
                slide: <U2FKeys/>
            },
        ]
    },
    {
        course: "phishing",
        language: "en",
        content: [
            {
                header: "Phishing attack types",
                text: "The topic of phishing is very broad - it includes many types and methods of phishing, but in most cases it boils down to deceiving, deluding the victim.<br/><br/>An attacker can use phishing in itself to gain sensitive data, but it is often used as an intermediary element for another attack.<br/><br/>For example, to spread a ransomware virus, an attacker may craft and use <strong>phishing emails</strong>. Another example could be the installation of a Keylogger on a mobile device, via <strong>telephone phishing</strong>. <br/><br/>Victims of phishing attacks can be both company employees and ordinary internet users, whose email addresses or phone numbers have been revealed, for example as a result of a database leak.",
                slide: <PhishingTypes/>,
                level: "basic"
            },
            {
                header: "Web Scrapping",
                text: "When targeting a company for phishing, an attacker may want to collect as many email addresses or phone numbers of company members as possible. This may seem like a laborious task, therefore tools called <strong>Web Scrapers</strong> are a common way of acquiring data of potential victims.<br/><br/>These are fully automated tools that allow you to download the entire content of a website, find certain patterns in it, such as email addresses, and then save them.<br/><br/>Web scrapers can also be equipped with a mechanism for visiting sites linked to the original page in order to download even more data. The data collected and prepared can be used directly for large-scale phishing attacks.",
                level: "advanced",
                slide: <WebScrapping/>
            },
            {
                header: "Receiving phishing SMS",
                text: "Let's assume that your phone number has been listed as a victim of a phone phishing attack. The attack aims to trick victims into going to a website in order to pay for additional postage costs.<br/><br/>On the surface, the SMS looks reliable: the sender is 'Poczta Polska' and the content of the message itself does not seem suspicious.<br/><br/>Attackers, using special services, can impersonate any sender, and the hyperlink itself, does not necessarily take the user to the website it is supposedly linked to.<br/><br/><strong>In this interactive exercise, go to the SMS you received, analyse its content, and then click on the suspicious link.</strong>",
                level: "basic",
                slide: <PhishingEnterSimulation/>,
                interactive: true,
            },
            {
                header: "Visiting phishing site",
                text: "When you enter the website, you will notice four basic elements that indicate that the website may be trying to scam you:<br/><br/>- the amount is significantly different from that declared in the SMS<br/>- the URL of the page has an error in it<br/>- the recipient of the transfer is not Poczta Polska, but a suspicious string of characters <br/>- the website does not use an SSL certificate (HTTPS)<br/><br/>A person who will rely only on the information in the SMS and will not analyse the site on which he will make a payment may fall victim to data theft. This is because it is a fake site designed to pass the login details to an attacker, thus providing them with access to the victim's bank account. <br/><br/><strong>In this interactive exercise, go to the payment method of your choice, and enter any login details.</strong>",
                level: "basic",
                interactive: true,
                slide: <PhishingSendDataSimulation/>
            },
            {
                header: "Protection against phishing",
                text: "Phishing attacks primarily involve manipulating the victim, using appropriate social engineering tools, into entering a suspicious URL, paying for an order, etc.<br/><br/>The most vulnerable element here is the human - if the attacker manages to create the right illusion, for example by carefully mapping an email or website, there is a chance that the victim will think they are visiting a real website.<br/><br/>Full protection against phishing attacks is virtually impossible - so additional rules should be applied to protect the victim from the escalating effects of the attack, such as the use of a suitable <strong>password policy.</strong>.<br/><br/>However, the most important element of protection is to pay attention when performing sensitive actions (transferring money, logging into a favourite service).",
                level: "basic",
                slide: <PhishingProtection/>
            },
            {
                header: "Advanced protection methods",
                text: "More advanced methods of protection against phishing attacks include <strong>U2F keys</strong>. These are data storage devices that connect to the user's device via a USB port.<br/><br/>They work on the basis of asymmetrical cryptography and can be used as two-factor authentication. This ensures that even if an attacker manages to steal the SMS code that constitutes two-factor authentication during a login attempt, the attempt will ultimately fail because the attacker will not have physical access to the U2F key.<br/><br/>U2F keys are a common and secure solution, supported not only by Windows, macOS and Linux operating systems, but also by major social networks. They can also be used with mobile devices, connecting to the device via NFC protocols.",
                level: "basic",
                slide: <U2FKeys/>
            },
        ]
    },
    {
        course: "ransomware",
        language: "pl",
        content: [
            {
                header: "Metody infekcji",
                text: "Ransomware, podobnie jak każdy inny rodzaj złośliwego oprogramowania, może dostać się do urządzenia końcowego różnymi sposobami. Najpopularniejszymi wektorami ataku są <b>zdalny dostęp</b>, <b>maile phishingowe</b> lub <b>zdalne wykonanie kodu</b><br/><br/>Każdy z wyżej wymienionych sposobów sprowadza się do jednego - zainstalowania na urządzeniu ofiary złośliwego oprogramowania (wirusa).<br/><br/>Głównym celem ransomware jest <strong>zaszyfrowanie danych</strong> znajdujących się na urządzeniu końcowym, celem zażądania okupu za ich odszyfrowanie.",
                level: "basic",
                slide: <RansomwareInfection/>,
            },
            {
                header: "Wygenerowanie kluczy dostępu",
                text: "Atakujący generuje parę kluczy: publiczny i prywatny. Kryptografia asymetryczna działa w ten sposób, że cokolwiek zaszyfrowane kluczem publicznym, można odszyfrować <strong>tylko</strong> kluczem prywatnym.<br/><br/>Wirus, który zostanie rozsyłany przez atakującego, zaszyfruje pliki <strong>kluczem publicznym</strong>. Jeśli ofiara wywiąże się z narzuconego okupu, może jej zostać dostarczony klucz prywatny, który jest jedynym sposobem na odszyfrowanie danych. W zdecydowanej większości przypadków tak się nie stanie - jeśli padniemy ofiarą ransomware, złym pomysłem jest spłacenie okupu. Najczęściej atakującemu nie będzie już zależało na dostarczeniu ofierze klucza, celem odszyfrowaniu danych.<br/><br/> ",
                level: "basic",
                slide: <RansomwareAsymetricKey/>,
            },
            {
                header: "Filtry antyspamowe",
                text: "Powszechną praktyką stosowaną u większości dostawców skrzynek pocztowych jest funkcjonalność <strong>filtrów załączników</strong>.<br/><br/>Mogą one analizować treść załączonych plików, bez względu na ich typ. Następnie, treść plików porównywana jest z bazą zawierającą każde znane złośliwe oprogramowanie - w tym przypadku ransomware - co pozwala na oszacowanie prawdopodobieństwa, że analizowany załącznik jest wirusem typu ransomware.<br/><br/>Wiadomość mailowa, która okaże bardzo podobna do wirusa, nie zostanie dostarczona do odbiorcy, tym samym chroniąc potencjalne ofiary przed infekcją.<br/><br/>Warto jednak pamiętać, że nawet filtry popełniają czasem błędy. Nie rzadko zdarzy im się przepuścić złośliwy załącznik lub odrzucić standardową wiadomość, ze względu na błędne przekonanie o jej podejrzanej treści.",
                slide: <RansomwareFilterEmail/>,
                level: "advanced"
            },
            {
                header: "Pobranie wirusa",
                text: "Załóżmy, że wirus ransomware został rozesłany do ofiar w postaci <strong>maili phishingowych</strong>. <br/><br/>Dobrze spreparowana wiadomość będzie zachęcała odbiorcę do niezwłocznego pobrania i uruchomienia pliku, bez wcześniejszego zweryfikowania nadawcy ani typu załącznika. Na pierwszy rzut oka nadawca i plik wyglądają prawidłowo, jednak po dalszej analizie, zauważyć można wzbudzający wątpliwości adres mailowy, oraz typ (rozszerzenie) pobranego pliku.<br/><br/>Jeśli ofiara da się przekonać wiadomości, najprawdopodobniej natychmiast pobierze i uruchomi załącznik. <br/><br/><strong>W tym interaktywnym ćwiczeniu wykonaj symulację pobrania złośliwego załącznika.</strong>",
                level: "basic",
                slide: <RansomwareDownload/>,
                interactive: true
            },
            {
                header: "Uruchomienie ransomware",
                text: "Uruchomienie wirusa nie będzie skutkowało natychmiastowym zablokowaniem dostępu do danych na urządzeniu, gdyż musi minąć pewien czas, w ciągu którego ransomware zaszyfruje wszystkie pliki.<br/><br/>Aby wzbudzić zaufanie ofiary i tym samym dać wirusowi więcej czasu na wykonanie swojego zadania, często po uruchomieniu pliku może wyświetlić się oczekiwana treść - w tym przypadku będzie to rachunek bankowy.<br/><br/>Po dokładniejszej analizie zauważyć można jednak, iż nie jest on zgodny z rzeczywistością. Na tym etapie zazwyczaj jest już za późno na podjęcie akcji.<br/><br/><strong>W tym interaktywnym ćwiczeniu postaraj się uruchomić wcześniej pobrany plik.</strong>",
                level: "basic",
                slide: <RansomwareRun/>,
                interactive: true
            },
            {
                header: "Sytuacja po uruchomieniu wirusa",
                text: "Kiedy ransomware zakończy swoją pracę, użytkownik końcowy <strong>traci dostęp do wszystkich danych na urządzeniu</strong>. W zależności od typu ransomware, zazwyczaj jedynym sposobem na odszyfrowanie danych jest użycie szyfrującego klucza prywatnego, w którego posiadaniu jest atakujący.<br/><br/>Uzyskanie tego klucza nie jest jednak trywialnym zadaniem - towarzyszy temu opłata pieniężna, wykonana jak najbardziej anonimowym sposobem. Dodatkowo celem przyśpieszenia procesu uzyskania zapłaty, atakujący często zagraża ofiarze zniszczeniem klucza, który jest jedynym sposobem na uzyskanie dostępu do zaszyfrowanych danych.<br/><br/> <strong>W tym interaktywnym ćwiczeniu postaraj się uruchomić nowo powstały plik, a następnie przeanalizuj jego zawartość.</strong>",
                level: "basic",
                slide: <RansomwareEncrypted/>,
                interactive: true
            },
            {
                header: "Metody ochrony przed ransomware",
                text: "Przed atakiem typu ransomware ciężko się w pełni ochronić. Można jednak podjąć akcje, które pomogą zniwelować jego skutki.<br/><br/>Najważniejszym elementem jest <strong>zasada ograniczonego zaufania</strong> i dokładnego analizowania otrzymanych maili, pobranych plików.<br/><br/>Kolejnym ze sposobów na ochronę jest częste wykonywanie kopii zapasowych, jednak istnieje możliwość, że ransomware zaszyfruje także wszystkie kopie zapasowe, przez co staną się one bezużyteczne.",
                level: "basic",
                slide: <RansomwareProtectMethods/>,
            },
        ]
    },
    {
        course: "ransomware",
        language: "en",
        content: [
            {
                header: "Methods of infection",
                text: "Ransomware, like any other type of malware, can get into an endpoint device by various means. The most common attack vectors are <strong>remote access</strong>, <strong>phishing emails</strong> or <strong>remote code execution</strong>.<br/><br/> Each of the above-mentioned methods boils down to one thing - installing malicious software (a virus) on the victim's device. <br/><br/>The main goal of ransomware is to encrypt data on the end device in order to demand a ransom for its decryption.",
                level: "basic",
                slide: <RansomwareInfection/>,
            },
            {
                header: "Creating keys",
                text: "The attacker generates a pair of keys: public and private. Asymmetric cryptography works in such a way that anything encrypted with the public key can <strong>only</strong> be decrypted with the private key.<br/><br/>A virus that is spread by an attacker will encrypt files with the <strong>public key</strong>. If the victim complies with the imposed ransom, they may be provided with a private key, which is the only way to decrypt the data. In the vast majority of cases, this will not happen - if you fall victim to ransomware, it is a bad idea to pay off the ransom. Most often the attacker will no longer care about providing the victim with the key to decrypt the data. ",
                level: "basic",
                slide: <RansomwareAsymetricKey/>,
            },
            {
                header: "Spam filters",
                text: "A common practice with most mailbox providers is the functionality of <strong>attachment filters</strong>.<br/><br/>These can analyse the content of attached files, regardless of their type. The content of the files is then compared against a database containing every known malware - in this case ransomware - to estimate the likelihood that the analysed attachment is a ransomware virus.<br/><br/>An email message that turns out to be very similar to a virus will not be delivered to the recipient, thus protecting potential victims from infection.<br/><br/>However, it is worth remembering that even filters sometimes make mistakes. It is not uncommon for them to let a malicious attachment pass or to reject a standard message due to the mistaken belief that its content is suspicious.",
                slide: <RansomwareFilterEmail/>,
                level: "advanced"
            },
            {
                header: "Downloading the virus",
                text: "Let us assume that a ransomware virus has been sent to victims in the form of <strong>phishing emails</strong>.<br/><br/> A well crafted message will encourage the recipient to immediately download and run the file, without first verifying the sender or type of attachment. At first glance, the sender and file look correct, but upon further examination, a questionable email address and type (extension) of the downloaded file can be spotted. <br/><br/>If the victim is persuaded by the message, they are likely to immediately download and run the attachment. <br/><br/><strong>In this interactive exercise, simulate downloading a malicious attachment.</strong>",
                level: "basic",
                slide: <RansomwareDownload/>,
                interactive: true
            },
            {
                header: "Running ransomware",
                text: "Launching the virus will not immediately block access to data on the device, as a certain amount of time must pass during which the ransomware will encrypt all files.<br/><br/>In order to inspire trust in the victim and thus give the virus more time to complete its task, often the expected content may be displayed after the file is launched - in this case, it will be a bank account.<br/><br/>However, on closer inspection, it may appear to be wrong. At this stage, it is usually too late to take action.<br/><br/><strong>In this interactive exercise, try to run the previously downloaded file.</strong>",
                level: "basic",
                slide: <RansomwareRun/>,
                interactive: true
            },
            {
                header: "Encrypted files",
                text: "Once the ransomware completes its work, the end user <strong>loses access to all data on the device</strong>. Depending on the type of ransomware, usually the only way to decrypt data is to use an encryption private key in the attacker's possession.<br/><br/>Obtaining this key, however, is not a trivial task - it is accompanied by a monetary payment, made in the most anonymous way possible. In addition, to speed up the process of obtaining the payment, the attacker often threatens the victim with the destruction of the key, which is the only way to gain access to the encrypted data.<br/><br/><strong>In this interactive exercise, try to run a newly created file and then analyse its contents.</strong>",
                level: "basic",
                slide: <RansomwareEncrypted/>,
                interactive: true
            },
            {
                header: "Ransomware protection methods",
                text: "It is difficult to fully protect yourself from a ransomware attack. However, you can take actions which will help to neutralise its effects.<br/><br/>The most important element is <strong>the principle of limited trust</strong> and thorough analysis of e-mails received and files downloaded.<br/><br/>Another way to protect yourself is to make frequent backups, but it is possible that ransomware will also encrypt all backups, rendering them useless.",
                level: "basic",
                slide: <RansomwareProtectMethods/>,
            },
        ]
    },
    {
        course: "keylogger",
        language: "pl",
        content: [
            {
                header: "Czym jest i jak działa keylogger?",
                text: "Keylogger to całkowicie legalne narzędzie rejestrujące zdarzenia związane z obsługą klawiatury systemu operacyjnego, na którym się znajduje, zazwyczaj bez wiedzy użytkownika. Pierwsze keyloggery powstały w latach 70 XX wieku i miały służyć służbom specjalnym do przechwytywania informacji na maszynach do pisania w publicznych miejscach.<br/><br/>To narzędzie może być wykorzystywane w miejscach pracy do badania aktywności pracowników, jako rodzaj kontroli rodzicielskiej lub przez oszustów próbujących wykraść wrażliwe dane ofiary.<br/><br/>Ich celem jest zazwyczaj zarejestrowanie aktywności klawiatury użytkownika i przechwycenie tych informacji, celem wydobycia takich danych jak dane uwierzytelniające czy numery kart kredytowych.",
                level: "basic",
                slide: <WhatIsKeylogger/>
            },
            {
                header: "Rodzaje keyloggerów",
                text: "Ogólnie rzecz biorąc keyloggery dzielą się na sprzętowe (hardware) i programowe (software).<br/><br/><strong>Keyloggery sprzętowe</strong> zazwyczaj wyglądem przypominają pamięci przenośne USB (pendrive). Podłączane są do jednostki poprzez interfejs USB, jednak mogą występować jako urządzenie pośredniczące pomiędzy klawiaturą a złączem USB komputera. Ich zaletą jest obszar działania - potrafią rejestrować aktywność, nawet jeśli użytkownik nie uruchomił systemu operacyjnego i co do zasady potrafią być cięższe w detekcji dla antywirusa. W rzadkich przypadkach mogą być również fizycznie zamontowane wewnątrz urządzenia.<br/><br/><strong>Keyloggery programowe</strong> są formą oprogramowania działającego w tle. Dostają się na urządzenie końcowe poprzez zainstalowanie programu. W zależności od celu keyloggera (miejsce pracy, kontrola rodzicielska, wirus), może on maskować swoją obecność, utrudniając tym samym swoją detekcję.",
                level: "basic",
                slide: <KeyloggerTypes/>
            },
            {
                header: "Używanie keyloggera w złośliwych celach",
                text: "Z biegiem czasu, zaczęto nadużywać to narzędzie, stosując je do złośliwych celów. Obecnie, częstym zastosowaniem keyloggerów jest infekcja niczego niespodziewających się ofiar, a następnie <strong>wykradanie wrażliwych danych</strong>, takich jak dane bankowe, kart kredytowych czy loginy i hasła. <br/><br/>Do bardziej zaawansowanych funkcji keyloggera może należeć przechwytywanie ekranu zainfekowanej ofiary, poprzez tworzenie zrzutów ekranu, lub przechwytywanie skopiowanych informacji.<br/><br/>Keyloggery stanowią wyjątkowe zagrożenie dla przedsiębiorstw - wykradzione dane mogą zapewnić dostęp atakującemu do najbardziej wrażliwych elementów przedsiębiorstwa lub wyjawić konfidencjonalne plany firmy.",
                level: "basic",
                slide: <KeylogggerMaliciousFlow/>
            },
            {
                header: "Sposoby infekcji keyloggerem",
                text: "Urządzenie może zostać zainfekowane keyloggerem na wiele sposobów, które różnią się w zależności od rodzaju tego narzędzia.<br/><br/>Keyloggery sprzętowe, jak sama nazwa wskazuje, zazwyczaj wymagają fizycznej obecności atakującego przy sprzęcie ofiary, celem podłączenia keyloggera do urządzenia ofiary. W związku z tym stanowią one mniejsze zagrożenie dla zwykłych użytkowników niż keyloggery programowe.<br/><br/>Infekcja keyloggerem programowym jest znacznie prostsza, przez co ogólnie rzecz biorąc stanowi on większe zagrożenie, szczególnie jeśli urządzenie nie jest chronione antywirusem. Najczęstszą formą instalacji tego rodzaju złośliwego oprogramowania jest pobranie i uruchomienie podejrzanego załącznika z sieci lub wiadomościach phishingowych.",
                level: "basic",
                slide: <KeyloggerInfectionMethods/>
            },
            {
                header: "Detekcja keyloggera",
                text: "Keyloggery typu hardware są zazwyczaj prostsze do rozpoznania. Wymaga to jedynie dokładnego przeanalizowania sprzętu, którego używamy, pod kątem występowania podejrzanych urządzeń. <br/><br/>Keyloggery typu software, działając w tle, będą próbowały maskować swoją obecność, podszywając się pod inny program. W systemie operacyjnym Windows, dobrym pomysłem jest okresowe sprawdzanie procesów w Menedżerze Zadań. Jeśli napotkany zostanie proces o podejrzanej nazwie, dobrym pomysłem będzie wyszukanie informacji na temat tego procesu w przeglądarce internetowej.<br/><br/><strong>W tym interaktywnym ćwiczeniu uruchom menedżera zadań i postaraj się zlokalizować, a następnie kliknąć podejrzany proces.</strong>",
                level: "basic",
                interactive: true,
                slide: <KeyloggerDetection/>
            },
            {
                header: "Pozbycie się keyloggera",
                text: "Dla keyloggerów sprzętowych, proces usunięcia polega zazwyczaj na odpięciu urządzenia, po wcześniejszym jego zlokalizowaniu. Jednak w przypadku keyloggerów wbudowanych w urządzenie, nie będą one możliwe do usunięcia w tak łatwy sposób dla osoby niezaznajomionej z architekturą i budową komputera.<br/><br/>Całkowite usunięcie keyloggerów programowych z kolei jest trudnym wyzwaniem, nawet dla bardziej zaawansowanych użytkowników. Zazwyczaj wydawać by się mogło, że usunięcie procesu lub ewentualne odinstalowanie podejrzanego programu może rozwiązać problem na dobre. W rzeczywistości jednak zazwyczaj nie przyniesie to oczekiwanych efektów, gdyż prawdopodobnie keylogger zdołał się zreplikować jako inny program, serwis lub proces, dlatego najbezpieczniejszą formą pozbycia się keyloggera programowego będzie sformatowanie urządzenia do ustawień początkowych. ",
                level: "basic",
                slide: <KeyloggerRemoving/>
            },
            {
                header: "Metody ochrony przed keyloggerami",
                text: "Sposoby ochrony przed keyloggerami programowymi nie różnią się zasadniczo od sposobów ochrony przed podobnymi typami złośliwego oprogramowania. Przede wszystkim należy zwracać szczególną uwagę na załączniki lub programy, które się uruchamia. Ten prosty i skuteczny krok pozwoli na ominięcie nieprzyjemności związanych z utratą danych bankowych czy danych uwierzytelniania do serwisów webowych. Warto także pamiętać o używaniu antywirusa i stosowaniu odpowiedniej polityki haseł - menedżera haseł i kodów 2FA, do uwierzytelniania się wrażliwymi danymi.<br/><br/>Należy również mieć na uwadze podłączone urządzenia do komputera - jeśli do komputera pracowniczego podpięte jest nieznane wcześniej urządzenie, może to wzbudzić wątpliwości i podejrzenia pod kątem infekcji keyloggerem sprzętowym. ",
                level: "basic",
                slide: <KeyloggerProtectionMethods/>
            }
        ]
    },
    {
        course: "keylogger",
        language: "en",
        content: [
            {
                header: "What a keylogger is and how it works?",
                text: "A keylogger is a perfectly legal tool that records keyboard events of the operating system it is on, usually without the user's knowledge. The first keyloggers were created in the 1970s and were intended to be used by the secret service to capture information on typewriters in public places.<br/><br/>This tool can be used in workplaces to investigate employee activity, as a type of parental control or by fraudsters trying to steal a victim's sensitive data.<br/><br/>Their goal is usually to record a user's keyboard activity and capture this information to extract data such as credentials or credit card numbers.",
                level: "basic",
                slide: <WhatIsKeylogger/>
            },
            {
                header: "Keylogger types",
                text: "In general, keyloggers are divided into hardware and software. <br/><br/><strong>Hardware keyloggers</strong> usually look like USB flash drives. They are connected to the unit via USB interface, but can also act as an intermediary device between the keyboard and the USB connector of the computer. Their advantage is the area of operation - they can record activity even if the user has not started the operating system and, as a rule, they can be harder to detect for antivirus. In rare cases they can also be physically mounted inside the device. <br/><br/><strong>Software keyloggers</strong> are a form of software running in the background. They get onto the end device by installing a program. Depending on the purpose of the keylogger (workplace, parental control, virus), it may mask its presence, making its detection more difficult.",
                level: "basic",
                slide: <KeyloggerTypes/>
            },
            {
                header: "Using a keylogger for malicious purposes",
                text: "Over time, this tool began to be misused for malicious purposes. Today, a common use for keyloggers is to infect unsuspecting victims and then <strong>stealing sensitive data</strong>, such as bank details, credit card details or logins and passwords. <br/><br/>More advanced keylogger functions may include capturing the infected victim's screen, by creating screenshots, or capturing copied information. <br/><br/>Keyloggers pose a unique threat to businesses - stolen data can provide an attacker with access to the most sensitive parts of a company or reveal a company's secretive plans.",
                level: "basic",
                slide: <KeylogggerMaliciousFlow/>
            },
            {
                header: "Keylogger infection methods",
                text: "A device can be infected by a keylogger in a number of ways, which vary depending on the type of this tool. <br/><br/>Hardware keyloggers, as the name suggests, usually require the attacker's physical presence at the victim's hardware to connect the keylogger to the victim's device. This makes them less of a threat to ordinary users than software keyloggers. <br/><br/>Infection with a software keylogger is much simpler, making it generally a greater threat, especially if the device is not protected with an anti-virus. The most common way to install this type of malware is to download and run a suspicious attachment from the web or phishing emails.",
                level: "basic",
                slide: <KeyloggerInfectionMethods/>
            },
            {
                header: "Keylogger detection",
                text: "Hardware type keyloggers are usually simpler to identify. This only requires a thorough examination of the hardware you're using for suspicious devices. <br/><br/>Software keyloggers, running in the background, will try to mask their presence by impersonating another program. In the Windows operating system, it's a good idea to periodically check processes in the Task Manager. If a process with a suspicious name is encountered, it's a good idea to look up information about that process in your web browser. <br/><br/><strong>In this interactive exercise, launch the Task Manager and try to locate and then click on the suspicious process.</strong>",
                level: "basic",
                interactive: true,
                slide: <KeyloggerDetection/>
            },
            {
                header: "Getting rid of the keylogger",
                text: "For hardware keyloggers, the removal process usually involves unplugging the device, after first locating it. However, for keyloggers built into the device, they will not be so easy to remove for someone not familiar with the architecture and construction of the computer.<br/><br/>Completely removing software keyloggers, on the other hand, is a difficult challenge, even for more advanced users. Usually, it would seem that removing the process or possibly uninstalling the suspicious program can solve the problem for good. In reality, however, this will usually not work, as the keylogger has probably managed to replicate itself as another program, service or process, so the safest way to get rid of a software keylogger is to format the device to initial settings.",
                level: "basic",
                slide: <KeyloggerRemoving/>
            },
            {
                header: "Protection against keyloggers",
                text: "The ways to protect against software keyloggers are not fundamentally different from the ways to protect against similar types of malware. Above all, pay particular attention to attachments or programs that you run. This simple and effective step will allow you to avoid the unpleasantness associated with losing bank details or credentials to web services. <br/><br/>It is also worth remembering to use an antivirus and to apply an appropriate password policy - a password manager and 2FA codes, to authenticate with sensitive data. You should also be aware of the devices connected to your computer - if a previously unknown device is connected to your work computer, this may raise doubts and suspicions about a hardware keylogger infection.",
                level: "basic",
                slide: <KeyloggerProtectionMethods/>
            }
        ]
    },
    {
        course: "xss",
        language: "pl",
        content: [
            {
                header: "Czym jest atak XSS?",
                text: "Cross-site scripting (XSS) opiera się na wstrzyknięciu do strony internetowej złośliwego skryptu. Najczęściej można go spotkać w miejscach, w których użytkownicy mają możliwość dodania treści do strony, na przykład podczas dodawania komentarza.<br/><br/>Prosty skrypt może całkowicie zmienić wygląd i funkcjonalność strony internetowej. Przykładem jednego z typów ataku - Reflected XSS - może być umieszczenie złośliwego skryptu w adresie URL strony internetowej, która renderuje parametry zapytania. Przeglądarka internetowa, której używa ofiara, nie jest w stanie rozpoznać intencji, które stoją za umieszczonym skryptem, dlatego zawsze będzie starała się go wykonać.<br/><br/>Ataki te często występują samodzielnie, wykradając ciasteczka użytkownika celem zdobycia nieautoryzowanego dostępu. Mogą być też powiązane między innymi z keyloggerem, mailami lub stronami phishingowymi i nie tylko.",
                level: "basic",
                slide: <XssWhatIs/>
            },
            {
                header: "Typy ataków XSS",
                text: "Pomimo faktu, iż głównym celem XSS jest wstrzyknięcie złośliwego skryptu do przeglądarki, atak ten może zostać wykonany wieloma sposobami.<br/><br/>Zdecydowana większość ataków może być podzielona na trzy główne kategorie: <strong>Reflected XSS</strong>, <strong>Stored XSS</strong>, <strong>DOM-based XSS</strong>. Mimo podziału, niektóre, bardziej zaawansowane ataki XSS mogą podlegać pod wszystkie kategorie jednocześnie.<br/><br/>Oprócz metody wykonania, typy ataku określają, czy dany atak dzieje się po stronie klienta - przeglądarki internetowej - czy serwera, na którym uruchomiony jest dany serwis. <br/><br/>Atak XSS po stronie klienta zazwyczaj jest prostszy w wykonaniu, gdyż odnalezienie luki w oprogramowaniu związanej z tym typem ataku jest co do zasady łatwiejsze po stronie klienta.  ",
                level: "basic",
                slide: <XssTypes/>
            },
            {
                header: "Scenariusz kursu",
                text: "Na slajdzie przedstawiony jest popularny serwis służący do wyszukiwania i interakcji ze znajomymi. Strona składa się z trzech sekcji: znajomych, wyszukiwarki znajomych oraz profilu użytkownika.<br/><br/>Dane znajomego, wyszukiwane przez osobę korzystającą z serwisu, są dodawane do parametru zapytania w adresie URL. Kolejno oprócz zwrócenia wyszukiwanych znajomych, w DOM strony internetowej renderowana jest treść zawarta w parametrach zapytania, tuż pod 'Wynikami wyszukiwania'.<br/><br/><strong>W tym interaktywnym ćwiczeniu postaraj się wyszukać dowolnego znajomego, celem sprawdzenia funkcjonalności strony. Zwróć także uwagę na adres URL po wyszukaniu znajomego.</strong>",
                level: "basic",
                interactive: true,
                slide: <XssInteractiveIntroduction/>
            },
            {
                header: "Przykład podatności XSS",
                text: "Dane przesłane do wyszukiwarki pojawiają się zarówno w zawartości strony (wynikach wyszukiwania), jak i adresie URL. To pierwsza oznaka, że strona może być podatna na atak XSS. Dodatkowo możliwość 'umieszczenia' danego elementu na stronie modyfikując adres URL jest cechą ataku Reflected XSS. <br/><br/>Kolejnym krokiem, który można podjąć, celem weryfikacji strony pod kątem podatności XSS, jest próba umieszczenia w DOM dowolnego tagu HTML. Zgodnie z poznanymi funkcjonalnościami, wyszukiwany tekst umieszczany jest w 'Wynikach wyszukiwania'. Jeśli okaże się, że wyszukanie tagu HTML zmodyfikuje zawartość strony, dodając tym samym szukany tag do drzewa DOM, można być niemal pewnym, że strona jest podatna na atak XSS.<br/><br/><strong>W tym interaktywnym ćwiczeniu przetestuj zachowanie strony, wpisując, a następnie wyszukując dowolny tag HTML w pole wyszukiwarki.</strong>",
                level: "basic",
                interactive: true,
                slide: <XssInteractiveEnterHtml/>
            },
            {
                header: "Konsekwencje ataku XSS",
                text: "Możliwość wstrzyknięcia do zawartości strony internetowej dowolnego tagu HTML oznacza, że nic nie stoi na przeszkodzie, aby na stronie umieścić także złośliwy kod JavaScript. Dodatkowo, mając na uwadze fakt, że złośliwy skrypt może zostać uruchomiony przez dowolnego użytkownika, pod warunkiem wejścia na adres URL zawierający skrypt, jest jasną oznaką, że strona jest podatna na atak Reflected XSS.<br/><br/>Niesie to ze sobą bardzo poważne konsekwencje. Złośliwy skrypt może wykonać wszystko, na co pozwala język JavaScript. Przykładowo, atakujący może stworzyć skrypt, który przesyła tokeny sesyjne ofiary do atakującego, umożliwiając mu na bezpośredni dostęp do konta ofiary. Skrypt może również chwilowo 'umieścić' w oknie ofiary keyloggera, wykorzystując do tego metodę <strong>addEventListener</strong>, który będzie nasłuchiwał aktywność klawiatury użytkownika.<br/><br/>Ofiara ataku XSS może również nieświadomie pobrać na swoje urządzenie wirusa lub zainfekować swoją przeglądarkę reklamami.",
                level: "basic",
                slide: <XssConsequences/>
            },
            {
                header: "Wstrzyknięcie złośliwego skryptu",
                text: "Mając na uwadze fakt, że prezentowana aplikacja jest również podatna na Reflected XSS, nic nie stoi na przeszkodzie, aby przekazać adres URL zawierający złośliwy skrypt innemu użytkownikowi tej aplikacji. Spowoduje to wykonanie złośliwego skryptu po jego stronie.<br/><br/>Jak do tej pory, przyjęło się, że dowodem podatności strony na atak XSS jest umieszczenie na stronie skryptu, który wywołuje <strong>alert</strong>, wbudowaną w przeglądarkę metodę wyświetlającą okno komunikatu z podaną treścią.<br/><br/><strong>W tym interaktywnym ćwiczeniu postaraj się umieścić w stronie skrypt, który wykona alert z dowolną wiadomością.</strong>",
                level: "advanced",
                interactive: true,
                slide: <XssInteractiveEnterScript/>
            },
            {
                header: "Ochrona przed podatnością XSS",
                text: "Odpowiedzialność związana z ochroną strony przed podatnością XSS zazwyczaj powinna leżeć po stronie zespołu programistów, tworzących dany serwis webowy. <br/><br/>Najważniejszymi zasadami, które powinny być przestrzegane to <strong>walidacja i czyszczenie danych wprowadzonych przez użytkownika</strong>. Stosując tę prostą regułę, można praktycznie całkowicie wyeliminować liczne zagrożenia związane z tym atakiem.<br/><br/>Dobrym rozwiązaniem byłoby także dodanie nagłówków do dokumentu HTML, które nie pozwalają na wykonywanie kodu JavaScript z zewnątrz. ",
                level: "basic",
                slide: <XssProtection/>
            },

        ]
    },
    {
        course: "csrf",
        language: "pl",
        content: [
            {
                header: "Jak działają ciasteczka?",
                text: "wytlumaczyc jak dzialaj ciasteczka i jak to sie ma w kontekscie csrf",
                level: "basic",
            }
        ]
    },
    {
        course: "dos",
        language: "pl",
        content: [
            {
                header: "Jak działają serwery webowe?",
                text: "Serwery webowe to programy zainstalowane na komputerach, które przechowują i dostarczają zawartość witryny internetowej. Przykładem zawartości dostarczanej do klienta (przeglądarki) może być kontent strony internetowej, gdy użytkownik ją odwiedzi.  Używane są przez właścicieli serwisów webowych, celem zapewnienia możliwości dostępu zwykłym użytkownikom do serwisu.<br/><br/>Klient (przeglądarka) komunikuje się z serwerem webowym poprzez protokół HTTP i otrzymuje od serwera odpowiedź, najczęściej w postaci strony zakodowanej języku HTML.<br/><br/>Serwery uruchomione są na komputerach (maszynach, instancjach serwerowych) które posiadają swój procesor czy pamięć RAM. Na maszynach, oprócz serwera, często uruchomione są inne aplikacje potrzebne do prawidłowej pracy instancji, np. automatyczne tworzenie backupów czy klient pocztowy.",
                level: "basic",
                slide: <HowWebServersWork/>
            },
            // {   //OPTIONAL
            //     header: "Reverse proxy na serwerze",
            //     text: "dos",
            //     level: "advanced"
            // },
            {
                header: "Czym jest atak DOS?",
                text: "Atak blokady usług - DOS (Denial Of Service) w dużym skrócie polega na przekierowaniu na dany serwer webowy w danej jednostce czasu tak dużego ruchu, że ten, próbując odpowiedzieć na każde połączenie, wykorzysta wszystkie swoje możliwe zasoby (procesor, pamięć) co spowoduje wąskie gardło dla innych akcji serwera, nierzadko powodując jego całkowite, awaryjne wyłączenie.<br/><br/>Celami ataków zazwyczaj są szeroko pojęte serwisy internetowe przedsiębiorstw: sklepy internetowe, instytucje finansowe czy popularne aplikacje.<br/><br/>Bardzo często, atakom towarzyszy propozycja dla ofiary, w której to atakujący zaprzestanie nadsyłać fałszywy ruch, w zamian za zapłatę pieniężną. Motywem ataków może być także działalność konkurencyjna.",
                slide: <WhatIsDdos/>,
                level: "basic",
            },
            {
                header: "Różnice pomiędzy atakiem DOS a DDOS",
                text: "Atak DOS (Denial Of Service) i DDOS (Distributed Denial Of Service) różnią się, jak sama nazwa wskazuje, rozdystrybuowaniem źródeł ataku. <br/><br/>Atakiem DOS można nazwać sytuację, w której z jednego urządzenia wysyłane jest nienaturalnie wiele żądań w określonej jednostce czasu. <br/><br/>Natomiast atak DDOS miałby miejsce, kiedy to wiele różnych maszyn symulowałoby fałszywy ruch, każda z innej lokalizacji. W takiej sytuacji zdecydowanie trudniej jest ustalić źródło ataku, mając na uwadze, że każda maszyna posiada unikalny adres IP. Maszyny te są zazwyczaj pozyskiwane poprzez zainfekowanie złośliwym oprogramowaniem urządzenia ofiary. Sieć zainfekowanych maszyn, która wykorzystywana jest w atach DDOS na wezwanie atakującego nosi nazwę <strong>botnet</strong>. <br/><br/>W dalszych slajdach, ataki DOS/DDOS będą skrótowo opisywane DDOS.",
                level: "basic",
                slide: <DosVsDdos/>
                //slide to vertical separator, ikonki ze dos zz jednego adresu ip ddos z wielu,

            },
            {
                header: "Typy DDOS",
                text: "Typy ataków DDOS różnią się od miejsca, w które są wymierzone, przykładowo atak warstwy aplikacyjnej działa na innej warstwie modelu OSI niż atak TCP.<br/><br/>Pomimo faktu, iż ataki te na celu mają obciążenie maszyny fałszywym ruchem, można je podzielić na cztery kategorie, jednak każda z tych kategorii może spowodować jedną z dwóch rzeczy: przeciążenie i restart serwera lub zapełnienie sieci fałszywym ruchem.<br/><br/> Atakujący może próbować stosować jedną lub więcej kategorii, celem uzyskania docelowego efektu. Dodatkowe zagrożenie stanowi łączenie kategorii ataków. Jeśli maszyna zastosuje odpowiednie polityki bezpieczeństwa, niwelując tym samym próbę DDOS na warstwie aplikacyjnej, atakujący może to zauważyć i zmienić kategorię ataku, tym razem kierując ruch na przepustowość sieci.",
                slide: <DdosTypes/>,
                level: "basic"
            },
            {
                header: "Identyfikacja ataku DDOS",
                text: "Już po chwili, w której zostanie rozpoczęty atak DDOS można zauważyć jego efekty. Jeśli atak skierowany jest na serwer webowy, będzie probował on odpowiadać na każde nadchodzące żądanie, tym samym znacząco zwiększy się czas potrzebny na odpowiedź. W zależności od nasilenia ataku i zasobów serwera ten może przestać odpowiadać na kolejne nadchodzące żądania, gdyż będzie zbyt zajęty odpowiadaniem na żądania, które nadeszły wcześniej. W najgorszym wypadku maszyna może się wyłączyć, ze względu na zbyt duże obciążenie przez określony czas.<br/><br/>Metryki instancji serwerowej, takie jak wykorzystanie procesora lub pamięci RAM będą na szczytowych poziomach do momentu zakończenia ataku, lub zablokowania podejrzanych adresów IP w zaporze ogniowej.<br/><br/>W przypadku ataku na warstwie aplikacyjnej dodatkową wskazówką sugerującą atak mogą być powiązania pomiędzy przychodzącymi żądaniami, takimi jak wspólny nagłówek User-Agent czy geolokalizacja.",
                level: "basic"
            },
            {  
                header: "Wykorzystywanie AI w przeciwdziałaniu atakom DDOS",
                text: "W dzisiejszych czasach sztuczna inteligencja znajduje coraz nowsze dziedziny, w których może być wykorzystywana. Nowoczesne rozwiązania w zaporach ogniowych, specjalnie utworzone do przeciwdziałania atakom DDOS wykorzystują mechanizmy sztucznej inteligencji i uczenia maszynowego.<br/><br/>Analizując ruch wchodzący na stronę, tworzony jest pewien model, do którego porównywane są ewentualne późniejsze statystki ruchu. Jeśli w danej jednostce czasu połączenia sieciowe przekraczają przyjęte normy, ruch może zostać zaklasyfikowany jako atak DDOS, co spowoduje wzmocnienie mechanizmów zapory ogniowej lub zwiększy wrażliwość mechanizmu CAPTCHA na pewien okres czasu, do momentu przywrócenia ruchu do zwyczajnych warunków.",
                slide: <DdosAi/>,
                level: "advanced"
            },
            // optional: autoscaling groups, use of cloud infrastructure against ddos
            {
                header: "Ochrona przed atakami DDOS",
                text: "Przeciwdziałanie atakom DDOS powinno mieć miejsce głównie w ustawieniach zapory infrastruktury sieciowej. Zazwyczaj to właśnie w tym wrażliwym miejscu następuje pierwszy etap procesowania żądań przychodzących do danego systemu.<br/><br/>Wykorzystywanie odpowiednich narzędzi pozwalających na analizę i filtrowanie ruchu przychodzącego to podstawa, która powinna mieć miejsce w każdym serwisie zmagającym się z atakami typu DDOS.<br/><br/>Posiadanie infrastruktury teleinformatycznej w chmurze daje zupełnie nowe możliwości walki z tego typu atakami. Pierwszym sposobem może być wykorzystanie <strong>systemu równoważenia obciążenia</strong>, który może przekierowywać żądania na instancje serwerowe (których może być kilka) według zużycia ich zasobów. Dodając do tego grupę automatycznie skalującą liczbę maszyn w zależności od ruchu, można być pewnym, że system wytrzyma praktycznie większość prób ataku.",
                level: "basic",
                slide: <DdosProtection/>
            }
        ]
    }
    ]

export default content