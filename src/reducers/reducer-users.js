/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Lionel",
            last: "Messi",
            club: "Barcelona",
            nationality: "Argentina",
            position: "Forward",
            age: 25,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            thumbnail: "https://i.imgur.com/iqYFtWk.png"
        },
        {
            id: 2,
            first: "Cristiano",
            last: "Ronaldo",
            club: "Real Madrid",
            nationality: "Portugal",
            position: "Forward",
            age: 27,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            thumbnail: "https://i.imgur.com/F2ADlRm.png"
        },
        {
            id: 3,
            first: "Xavi",
            last: " ",
            club: "Barcelona",
            nationality: "Spain",
            position: "Midfielder",
            age: 32,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            thumbnail: "https://i.imgur.com/9vNeihe.png"
        },
        {
            id: 4,
            first: "Andres",
            last: "Iniesta",
            club: "Barcelona",
            nationality: "Spain",
            position: "Midfielder",
            age: 28,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            thumbnail: "https://i.imgur.com/8qbytyW.png"
        },
        {
            id: 5,
            first: "Zlatan",
            last: "Ibrahimovic",
            club: "PSG",
            nationality: "Sweden",
            position: "Forward",
            age: 31,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            thumbnail: "https://i.imgur.com/xnKxGMG.png"
        }
    ]
}