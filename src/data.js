import {Component} from 'react';
import user1 from "./images/user1.png"

const COUNTRIES_URL ="http://api.roomie.kz/allcountries";
//const ALL_GROUPS_URL = "http://api.roomie.kz/allgroups";

export default class Data extends Component {

    _users = [
        "Катя Смирнова",
        "Асель Муратова",
        "Александра Винникова",
        "Александра Винникова",
        "Катя Смирнова",
        "Асель Муратова",
    ];
    _age = [20, 21, 22, 23, 24, 25];
    _groupNames = [
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики",
        "Студенты-физики"
    ];
    _cities =[
        "Алматы",
        "Астана",
        "Костанай",
        "Атырау",
        "Алматы",
        "Алматы"
    ];
    _usersInfo = [
        "Люблю кошек и поспать",
        "Привет, я из Астаны, сейчас учусь в КБТУ, ищу сожительниц-девушек!",
        "Люблю “Очень странные дела”, фотографировать, учу испанский.",
        "Люблю “Очень странные дела”, фотографировать, учу испанский."
    ];

    _groupsInfo = [
        "Привет! Мы ищем таких же увлеченных физикой студентов!",
        "Мы ищем студентов МУИТ, хотим снять квартитру недалеко от нашего университета. У нас есть собака, и мы не против других питомцев :)",
        "Привет! Мы ищем таких же увлеченных физикой студентов!",
        "Мы ищем студентов МУИТ, хотим снять квартитру недалеко от нашего университета. У нас есть собака, и мы не против других питомцев :)",
        "Привет! Мы ищем таких же увлеченных физикой студентов!",
        "Мы ищем студентов МУИТ, хотим снять квартитру недалеко от нашего университета. У нас есть собака, и мы не против других питомцев :)"
    ];
    _free = [0, 2, 2, 1, 0, 1];
    _imgPath = user1;
    //_imgPath = "https://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg";
    _rentalPeriods = [1, 3, 6, 9, 12, 3];
    _peopleNumbers = [2, 3, 4, 4, 4, 3];
    //
    // createGroup = (id, name, city, rentalPeriod, peopleNumber, free, info, members, applications, polls) => {
    //     return {
    //         id: id,
    //         name: name,
    //         city: city,
    //         rentalPeriod: rentalPeriod,
    //         peopleNumber: peopleNumber,
    //         free: free,
    //         info: info,
    //         members: members,
    //         applications: applications,
    //         polls: polls
    //     };
    // };
    //
    _univercities = ["AlmaU", "Narxoz", "SDU", "MUIT", "KazNU", "KBTU"];
    _specialities = ["биолог", "физик", "математик", "геолог", "химик", "фезмот"];
    _languages = [["kz", "ru"], ["fr", "kx"], ["en", "gr"], ["ru"], ["sp"], ["aaaaaaa"]];
    _badHabits = [["курение", "алкоголь"], ["курение"], ["алкоголь"], [], [], []];
    _birthDates = ["4.07.1999", "4.07.1999", "4.07.1999", "4.07.1999", "4.07.1999", "4.07.1999"];
    _phoneNumbers = ["+7 777 777 77 77", "+7 777 777 77 77", "+7 777 777 77 77", "+7 777 777 77 77", "+7 777 777 77 77", "+7 777 777 77 77"];

    _questions = [
        {
            id: 1,
            question: "Как работает сервис Roomie?",
            answer: "Да пока никак не работает!"
        },
        {
            id: 2,
            question: "Могу ли я создать свою группу для поиска сожителей?",
            answer: "Конечно! Для этого Вам необходимо создать аккаунт и в своем профиле нажать “Создать группу”."
        },
        {
            id: 3,
            question: "Что делать, если у меня есть питомец?",
            answer: "Кормить, поить, выводить гулять!"
        },
        {
            id: 4,
            question: "Могу ли я воспользоваться Roomie, если я из другой страны?",
            answer: "Да, подождите, пока мы запустим сервис, создавайте группу, ищите единомышленников"
        },
        {
            id: 5,
            question: "Могу ли я найти сожителей на короткий срок?",
            answer: "Минимальным сроком является семестр"
        },
    ];

    createUser = (id, name, age, city, info, birthDate, university, specialty, languages, badHabits, phoneNumber, groups) => {
        return {
            id: id,
            name: name,
            age: age,
            city: city,
            info: info,
            imgPath: this._imgPath,
            birthDate: birthDate,
            university: university,
            specialty: specialty,
            languages: languages,
            badHabits: badHabits,
            phoneNumber:phoneNumber
        };
    };

    getGroups = () => {
        return fetch('http://localhost:9300/allgroups')
            .then(res => res.json())
            .then(res => {
            //console.log("res " + JSON.stringify(res));
            const groups = res;
            //console.log("fourps = " + JSON.stringify(groups));
            return groups;
        });
    };

    getCountries = async () => {
        //fetch(COUNTRIES_URL).then(response => response.json()).then(console.log);
        return fetch(COUNTRIES_URL, {method: 'GET'})
            .then(res => {return res.json()})
            .then(res => {
                const countries = JSON.parse(res).map((item) => {
                    //console.log("data data ", item);
                    return {label: item.name, value: item.name, id: item.id}
                });
                return countries
            })
    };

    getUser = ({id}) => {
        const a = this.createUser(id, this._users[id], this._age[id], this._cities[id],
            this._usersInfo[id], this._birthDates[id], this._univercities[id], this._specialities[id],
            this._languages[id], this._badHabits[id], this._phoneNumbers[id]);
        return new Promise(resolve => {
            setTimeout( () => {resolve(a)},100)
        });
    };

    getQuestions = () => this._questions
}