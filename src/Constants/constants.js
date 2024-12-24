import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faDollar,
  faBusinessTime,
  faHandshake,
  faUserSecret,
  faCalendarDays,
  faRectangleAd,
  faChartLine,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(
  faX,
  faBars,
  faWindowRestore,
  faBusinessTime,
  faHandshake,
  faBagShopping,
  faDiceD6,
  faUserSecret,
  faCalendarDays,
  faRectangleAd,
  faChartLine,
  faChampagneGlasses
);

import {
  case1,
  case2,
  case3,
  mainLogoS,
  mainLogoM,
  mainLogoXL,
  cutLogoS,
  inspiration1,
  inspiration2,
  inspiration3,
  inspiration4,
  inspiration5,
} from "../assets";

const media = {
  case1,
  case2,
  case3,
  mainLogoS,
  mainLogoM,
  mainLogoXL,
  cutLogoS,
  inspiration1,
  inspiration2,
  inspiration3,
  inspiration4,
  inspiration5,
};

const icons = {
  faDollar,
  faBars,
  faX,
  faWindowRestore,
  faBusinessTime,
  faBagShopping,
  faDiceD6,
  faTelegram,
  faInstagram,
  faHandshake,
  faUserSecret,
  faCalendarDays,
  faRectangleAd,
  faChartLine,
  faChampagneGlasses,
};

const introduction = {
  text: [
    "Welcome to Elysian Glam!",

    "Working with the Fansly promotion agency will allow you to fully focus on content while we recruit subscribers, purchase ads, promote accounts, create a personal brand, manage your social networks and monetize traffic. You create the content, we do the rest.",

    "Since our foundation, we have been constantly improving our skills and expanding our knowledge in the modeling business. We strive to create unique and effective solutions for each model, integrating modern technologies and trends. Each of the models gets an individual approach, which allows them to occupy content niches and get into the top of Fansly.",

    "We are always happy to cooperate. If you are interested in developing in this direction and making money, write to us and we will tell you more.",
  ],
};

const introductionRu = {
  text: [
    "Добро пожаловать в Elysian Glam!",

    "Сотрудничество с агентством по продвижению Fansly позволит вам полностью сосредоточиться на контенте, пока мы набираем подписчиков, закупаем рекламу, занимаемся раскруткой аккаунтов, создаем личный бренд, ведем ваши соцсети и монетизируем трафик. Вы создаете контент — мы делаем все остальное.",

    "С момента основания мы постоянно совершенствуем свои навыки и расширяем знания в области модельного бизнеса. Мы стремимся создавать уникальные и эффективные решения для каждой модели, интегрируя современные технологии и тренды. Каждая из моделей получает индивидуальный подход, это позволяет занять ниши контента и выбиться в топы Fansly.",

    "Мы всегда рады сотрудничеству. Если тебе интересно развиваться в этом направлении и зарабатывать, напиши нам - расскажем подробнее.",
  ],
};

const cases = [
  {
    name: "Case 1",
    description: "Case 1 example of model page",
    image: case1,
  },
  {
    name: "Case 2",
    description: "Case 2 example of model page",
    image: case2,
  },
  {
    name: "Case 3",
    description: "Case 3 example of model page",
    image: case3,
  },
];

const inspiration = {
  image: [inspiration1, inspiration2, inspiration3, inspiration4, inspiration5],
};

const logos = {
  image: [mainLogoS, mainLogoM, mainLogoXL],
};

const logo = {
  image: [mainLogoS],
};

const prospects = [
  {
    id: "content-plan",
    title: "Content plans",
    titleRu: "Контент-планы",
    icon: icons.faBusinessTime,
    description:
      "Creating a content plan for Fansly and shared social networks, taking into account the personality of the model. Systematization and simplification of the workflow.",
    descriptionRu:
      "Составление контент-плана для Fansly и общих социальных сетей с учётом индивидуальности модели. Систематизирование и упрощение рабочего процесса.",
  },
  {
    id: "involvement",
    title: "Attracting traffic",
    titleRu: "Привлечение трафика",
    icon: icons.faHandshake,
    description:
      "Using Instagram, TikTok, YouTube, Twitter, Reddit and Tinder simultaneously to reach as many potential fans as possible.",
    descriptionRu:
      "Использование Instagram, TikTok, YouTube, Twitter, Reddit и Tinder одновременно для охватить как можно больше потенциальных поклонников.",
  },
  {
    id: "management",
    title: "Account Management",
    titleRu: "Управление аккаунтами",
    icon: icons.faDiceD6,
    description:
      "Account management, content posting and activity on Fansly and all social networks, all communications are handled by your personal manager and our professional chaters.",
    descriptionRu:
      "Управление аккаунтами, постинг контента и активность в Fansly и во всех социальных сетях, всеми коммуникациями занимается ваш личный менеджер и наши профессиональные чатеры.",
  },
  {
    id: "anon",
    title: "Anonymity",
    titleRu: "Анонимность",
    icon: icons.faUserSecret,
    description:
      "We protect your anonymity by hiding and protecting personal information. Encrypted chats are used to communicate in the team.",
    descriptionRu:
      "Мы защищаем вашу анонимность, скрывая и защищая личную информацию. Для общения в команде используются зашифрованные чаты.",
  },
  {
    id: "free-schedule",
    title: "Free schedule",
    titleRu: "Свободный график",
    icon: icons.faCalendarDays,
    description:
      "Modern and remote work. You choose your own place and schedule of work. Use your creativity to come up with your own way of creating content. We'll take care of the rest.",
    descriptionRu:
      "Современная и удаленная работа. Вы сами выбираете место и график работы. Используйте свой творческий потенциал, чтобы придумать свой собственный способ создания контента. Обо всем остальном позаботимся мы.",
  },
  {
    id: "easy-start",
    title: "Easy Start",
    titleRu: "Лёгкий старт",
    icon: icons.faChartLine,
    description:
      "At the initial stage, we provide you with all the necessary equipment and materials. We teach you how to create content, introduce you to the field, and follow trends.",
    descriptionRu:
      "На начальном этапе мы предоставляем вам все необходимое оборудование и материалы. Обучаем созданию контента, знакомим со сферой, следим за трендами.",
  },
  {
    id: "producere",
    title: "Production and advertising",
    titleRu: "Продюсирование и реклама",
    icon: icons.faRectangleAd,
    description:
      "Producing, advertising, monetization of content = increased revenue. We set the frequency of publications, analyze the audience, build a promotion strategy, and analyze how much to spend on advertising.",
    descriptionRu:
      "Продюсирование, реклама, монетизация контента = увеличенные доходы. Устанавливаем периодичность публикаций, анализируем аудиторию, строим стратегию продвижения, анализируем сколько потратить на рекламу.",
  },
  {
    id: "traits",
    title: "You are special",
    titleRu: "Ты особенная",
    icon: icons.faChampagneGlasses,
    description:
      'Height, weight, and body features don\'t matter to Fansly. We will find the very "highlight" that will set you apart from many thousands of authors, attract a large number of subscribers to your page, and, as a result, money.',
    descriptionRu:
      "Рост, вес, особенности фигуры для Fansly не имеют никакого значения. Мы найдем ту самую «изюминку», которая выделит вас из многих тысяч авторов, привлечет на вашу страницу большое количество подписчиков, и, как следствие, денег.",
  },
];

const N = 1;
const globeData = [...Array(N).keys()].map(() => ({
  lat: 55.0,
  lng: 37.0,
  size: 20,
  color: "red",
}));

export {
  media,
  introduction,
  introductionRu,
  cases,
  inspiration,
  logos,
  logo,
  prospects,
  globeData,
  icons,
};
