const titles = [
  "Ⓙa℘p↗eΞ» S∅nⓖ¤ | Portfolio",
  "ʝѦpῥrξet $↗nℊh | Portfolio",
  "Jᾳṕ℘±£e× Siℵgχ | Portfolio",
  "♩ᾰpℙre€± §¿n❡h | Portfolio",
  "J∝¬ῥℜe¢t $inðℎ | Portfolio",
  "⒥aṕ℘r∈e¦ S⊥ngℋ | Portfolio",
  "Jappreet Singh | Portfolio",
];

let currentIndex = 0;

function changeTitle() {
  document.title = titles[currentIndex];
  currentIndex = (currentIndex + 1) % titles.length;
}

setInterval(changeTitle, 1000);
