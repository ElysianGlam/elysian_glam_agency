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
    "Добро пожаловать в Elysian Glam!",

    "Сотрудничество с агенством по продвижению Fansly позволит вам полностью сосредоточиться на контенте, пока мы набираем подписчиков, закупаем рекламу, занимаемся раскруткой аккаунтов, создаем личный бренд, ведем ваши соцсети и монетизируем трафик. Вы создаете контент — мы делаем все остальное.",

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
    title: "Контент-планы",
    icon: icons.faBusinessTime,
    description:
      "Составление контент-плана для Fansly и общих социальных сетей с учётом индивидуальности модели. Систематизирование и упрощение рабочего процесса.",
  },
  {
    id: "involvement",
    title: "Привлечение трафика",
    icon: icons.faHandshake,
    description:
      "Использование Instagram, TikTok, YouTube, Twitter, Reddit и Tinder одновременно для охватить как можно больше потенциальных поклонников.",
  },
  {
    id: "management",
    title: "Управление аккаунтами",
    icon: icons.faDiceD6,
    description:
      "Управление аккаунтами, постинг контента и активность в Fansly и во всех социальных сетях, всеми коммуникациями занимается ваш личный менеджер и наши профессиональные чатеры.",
  },
  {
    id: "anon",
    title: "Анонимность",
    icon: icons.faUserSecret,
    description:
      "Мы защищаем вашу анонимность, скрывая и защищая личную информацию. Для общения в команде используются зашифрованные чаты.",
  },
  {
    id: "free-schedule",
    title: "Свободный график",
    icon: icons.faCalendarDays,
    description:
      "Современная и удаленная работа. Вы сами выбираете место и график работы. Используйте свой творческий потенциал, чтобы придумать свой собственный способ создания контента. Обо всем остальном позаботимся мы.",
  },
  {
    id: "easy-start",
    title: "Лёгкий старт",
    icon: icons.faChartLine,
    description:
      "На начальном этапе мы предоставляем вам все необходимое оборудование и материалы. Обучаем созданию контента, знакомим со сферой, следим за трендами.",
  },
  {
    id: "producere",
    title: "Продюсирование и реклама",
    icon: icons.faRectangleAd,
    description:
      "Продюсирование, реклама, монетизация контента = увеличенные доходы. Устанавливаем периодичность публикаций, анализируем аудиторию, строим стратегию продвижения, анализируем сколько потратить на рекламу.",
  },
  {
    id: "traits",
    title: "Ты особенная",
    icon: icons.faChampagneGlasses,
    description:
      "Рос, вес, особенности фигуры для Fansly не имеют никакого значения. Мы найдем ту самую «изюминку», которая выделит вас из многих тысяч авторов, привлечет на вашу страницу большое количество подписчиков, и, как следствие, денег.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

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
  cases,
  inspiration,
  logos,
  logo,
  prospects,
  markerSvg,
  globeData,
  icons,
};
