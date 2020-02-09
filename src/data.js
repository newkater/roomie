import {Component} from 'react';
import user1 from "./images/user1.png"

const COUNTRIES_URL ="http://api.roomie.kz/allcountries";
const LANGUAGES_URL ="http://api.roomie.kz/languages";
const ALMATY_UNI_URL = "http://api.roomie.kz/universities/183";
const ALL_GROUPS_URL = 'http://localhost:9300/allgroups';

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
            answer: "Вы оставляете информацию о себе в форме регистрации, а мы предлагаем вам подходящие вам группы. Когда все настроено, можно начать эффективное использовании нашего сервиса и забыть о трудностях поиска сожителей! Но если найти подходящую группу все же не получилось, почему бы не создать свою?"
        },
        {
            id: 2,
            question: "Могу ли я создать свою группу для поиска сожителей?",
            answer: "Конечно! Зайдите на страницу профиля и спуститесь к списку своих групп. Обратите внимание, что там не будет необходимого вам блока создания группы, если вы уже состоите в одной! Чтобы создать новую группу, группа, в которой вы состоите, должна быть удалена, или, вы должны выйти из нее."
        },
        {
            id: 3,
            question: "Что делать, если у меня есть питомец?",
            answer: "Если вы волнуетесь, что это может доставить неудобства будущим сожителям, укажите это в поле дополнительной информации."
        },
        {
            id: 4,
            question: "Могу ли я воспользоваться Roomie, если я из другой страны?",
            answer: "К сожалению, сервис Roomie работает только в Казахстане. Но, если вы ищете жилье в городах Казахстана, то просто укажите страну и город рождения. Это также является одним из факторов, которые мы учитываем при подборе групп."
        },
        {
            id: 5,
            question: "Могу ли я найти сожителей на короткий срок?",
            answer: "При поиске сожителей на короткий срок, укажите, что планируете жить там менее одного месяца. Также, в дополнительной информации рекомендуем отметить более точные сроки."
        },
    ];

    _projectInfo = [
        {
            id: 1,
            question: "Как работают алгоритмы поиска?",
            answer: "Мы анализируем данные групп и данные, оставленные вами при регистрации и изменении профиля."
        },
        {
            id: 2,
            question: "Как улучшить качество поиска для меня?",
            answer: "Заполните максимальное количество полей при регистрации и изменении профиля, так мы сможем увеличить количество параметров поиска и подобрать группы, наиболее подходящие для вас."
        },
        {
            id: 3,
            question: "Почему я не могу быть участником нескольких групп?",
            answer: "Вы можете подавать заявки в несколько групп, но состоять будете только в одной. При добавлении в одну из групп как участника, все остальные заявки автоматически аннулируются."
        },
        {
            id: 4,
            question: "Как обрабатывается заявка на участие в группе?",
            answer: "При отправке заявки добавляется новое поле в опросах этой группы. В нем нынешние участники должны будут проголосовать за добавление нового участника. Если необходимое количество голосов набрано – вы становитесь участником."
        },
        {
            id: 5,
            question: "Как изменить фотографию профиля?",
            answer: "Зайдите на страницу профиля и нажмите на кнопку «изменить». Загрузите фотографию с устройства и не забудьте сохранить изменения."
        },
        {
            id: 6,
            question: "Другой пользователь указал недостоверную информацию. Что можно сделать?",
            answer: "Срочно сообщите нам! Свяжитесь с нами через электронную почту или по указанным номерам телефона. Мы заблокируем пользователя или свяжемся с ним самостоятельно."
        },
        {
            id: 7,
            question: "Зачем указывать столько личной информации?",
            answer: "Это поможет нам в более качественном подборе групп. Мы не используем вашу личную информацию и не имеем связей с заинтересованными лицами."
        },
        {
            id: 8,
            question: "Как принять в группу нового участника?",
            answer: "В первую очередь пользователь должен отправить заявку. После этого в опросах появится новый пункт, в котором участники группы проголосуют за принятие человека в группу, или, наоборот."
        },
        {
            id: 9,
            question: "Как удалить группу?",
            answer: "После нажатия на кнопку «удалить группу» на странице группы, появится опрос. Участники должны будут проголосовать за удаление."
        },
        {
            id: 10,
            question: "Как удалить страницу?",
            answer: "Зайдите на страницу профиля и нажмите на кнопку удаления профиля. Она находится справа на блоке информации. При появлении вопроса «удалить ли профиль?», ответьте положительно."
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
        return fetch(ALL_GROUPS_URL)
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

    getLanguages = async () => {
        //fetch(LANGUAGES_URL).then(response => response.json()).then(console.log);
        return fetch(LANGUAGES_URL, {method: 'GET'})
            .then(res => {return res.json()})
            .then(res => {
                const languages = JSON.parse(res).map((item) => {
                    //console.log("data data ", item);
                    return {label: item.lang_name, value: item.id, id: item.id}
                });
                //console.log("data lang", languages);
                return languages
            })
    };

    getCities = async ({countryName}) => {
        //console.log("dataaaa", countryName);
        return fetch(`http://api.roomie.kz/cities/${countryName}`, {method: 'GET'})
            .then(res => {return res.json()})
            .then(res => {
                const cities = JSON.parse(res).map((item) => {
                    //console.log("data data ", item);
                    return {label: item.name, value: item.id, id: item.id}
                });
                //console.log("data cities", cities);
                return cities;
            });
    }

    getSpecialities = async ({universityId}) => {
        //console.log("dataaaa", countryName);
        return fetch(`http://api.roomie.kz/specialities/${universityId}`, {method: 'GET'})
            .then(res => {
                return res.json()
            })
            .then(res => {
                const specialities = JSON.parse(res).map((item) => {
                    //console.log("data data ", item);
                    return {label: item.name, value: item.id, id: item.id}
                });
                //console.log("data cities", cities);
                return specialities;
            });
    }

    getKazakhCities = async () => {
        //console.log("dataaaa", countryName);
        return fetch(`http://api.roomie.kz/cities/Казахстан`, {method: 'GET'})
            .then(res => {return res.json()})
            .then(res => {
                const cities = JSON.parse(res).map((item) => {
                    //console.log("data data ", item);
                    return {label: item.name, value: item.id, id: item.id}
                });
                //console.log("data cities", cities);
                return cities;
            })
    }

    getAlmatyUniversities = async () => {
        //fetch(LANGUAGES_URL).then(response => response.json()).then(console.log);
        return fetch(ALMATY_UNI_URL, {method: 'GET'})
            .then(res => {return res.json()})
            .then(res => {
                const almatyUniversities = JSON.parse(res).map((item) => {
                    //console.log("data data ", item);
                    return {label: item.name, value: item.id, id: item.id}
                });
                //console.log("data lang", languages);
                return almatyUniversities
            })
    };

    getUser = ({id}) => {
            return fetch(`http://api.roomie.kz/profile/${id}`, {method: 'GET'})
            .then(res => {return res.json()})
            .then(res => {
                const profile = JSON.parse(res);
                console.log("data profile", profile);
                return profile;
            })

    };

    getQuestions = () => this._questions;
    getProjectInfo = () => this._projectInfo;
}