// import WeightGain from "./components/ui/icons/weight_gain";
// import WeightLossIcon from "./components/ui/icons/weight_loss_icon";
import { PAGES_URLS } from "./config/urls.config";

export const navs = [
  {
    id: 1,
    title: "Главная",
    path: PAGES_URLS.MAIN,
  },
  {
    id: 2,
    title: "Каталог продукции",
    path: PAGES_URLS.PRODUCTS,
  },
  {
    id: 3,
    title: "Подбор программы",
    path: PAGES_URLS.PROGRAM_SELECTION,
  },
]

// export const weightLossGainDataes = [
//   {
//     id: 1,
//     title: "Похудение",
//     description: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
//     // icon: <WeightLossIcon />,
//     catalog: "Каталог slim",
//   },
//   {
//     id: 2,
//     title: "Набор массы",
//     description: 'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
//     icon: <WeightGain />,
//     catalog: "Каталог pro",
//   },
// ]