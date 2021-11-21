import WhatIsSql from "./parts/WhatIsSql"
import SqlInteractive from "./parts/SqlInteractive"
import HighlightSqlCode from './parts/HighlightSqlCode'
const content = [
    {
        course: "sql-injection",
        content: [
            {
                header: "Header 1",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a nisi sit amet neque placerat lobortis sed eget ligula. Aenean lectus nisi, consequat sit amet aliquet nec, hendrerit ut ante. Vestibulum ac felis consectetur, hendrerit quam eu, convallis sem. Curabitur posuere metus lobortis congue elementum.<br><br> In hac habitasse platea dictumst. In mattis ultrices efficitur. Donec posuere neque lacus, non cursus urna malesuada ut. Nullam posuere ac dui eget laoreet.",

                level: "basic",
            },
            {
                header: "Header 2",
                text: "Nulla vehicula porttitor interdum. Aliquam erat volutpat. Suspendisse malesuada vitae libero sed semper. Donec ultrices sem sed leo pulvinar, vitae facilisis diam tempus. Quisque turpis lacus, iaculis maximus massa nec, semper tristique lectus. Nam cursus gravida rhoncus. Vivamus nec pretium magna.",
                level: "basic",
                slide: <HighlightSqlCode/>,
                interactive: true,
            },
            {
                header: "Header 3",
                text: "Mauris mattis velit eros, eu vulputate urna volutpat in. Fusce id sodales nisl. Maecenas id posuere nunc, ac ornare nulla. Quisque arcu lorem, consectetur ut scelerisque sed, vulputate blandit turpis. Nunc sodales at turpis nec dictum. Duis eu tincidunt neque. Aliquam dolor dui, venenatis nec lacus in, hendrerit mollis tellus",
                slide: <SqlInteractive/>,
                level: "basic",
                interactive: true,
                answer: 'test'
            },
            {
                header: "Header 4",
                text: "Cras maximus aliquet sapien id condimentum. Ut et eros nisl. Sed elementum efficitur fringilla. Cras scelerisque, purus ac venenatis interdum, ligula enim posuere dolor, commodo varius erat sapien in massa. ",
                level: "basic",
            },
            {
                header: "Header 5",
                text: "Phasellus mi augue, aliquet vitae vestibulum non, pulvinar at quam. Proin ac nisl pretium, malesuada justo eu, imperdiet felis. Aliquam sodales consequat semper. In non vestibulum leo, at laoreet nunc.",
                level: "basic"
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