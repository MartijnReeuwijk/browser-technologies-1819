// actually make the maps
const fakedata = [
  {
    studie: "economie en Bedrijfskunde",
    icon: "economics",
    etage: "4",
    map: "economie"
  },
  {
    studie: "Geesteswetenschappen",
    icon: "brain",
    etage: "4",
    map: "economie"
  },
  {
    studie: "Geneeskunde",
    icon: "doctor",
    etage: "6",
    map: "economie"
  },
  {
    studie: "Maatschappij- en Gedragswetenschappen",
    icon: "community",
    etage: "4",
    map: "economie"
  },
  {
    studie: "Natuurwetenschappen",
    icon: "magnet",
    etage: "6",
    map: "economie"
  },
  {
    studie: "Wiskunde",
    icon: "math",
    etage: "4",
    map: "economie"
  },
  {
    studie: "Informatica",
    icon: "ict",
    etage: "4",
    map: "economie"
  },
  {
    studie: "Rechtsgeleerdheid",
    icon: "rights",
    etage: "4",
    map: "rechten"
  },
  {
    studie: "Tandheelkunde",
    icon: "teeth",
    etage: "4",
    map: "economie"
  }
];

export function makestudieElements() {
  let elm = document.getElementsByClassName("iconBlockHolder")[0];
  fakedata.forEach(data => {
    elm.innerHTML += `
    <button class="iconBlock borderRadius colorHover capitalize iconHover" id="${
      data.map
    }">
      <div class="iconBlok-icon">
      <img src="../src/image/icons/${data.icon}.svg" alt="icoon ${data.icon}" />
      </div>
      <h2>${data.studie}</h2>
    </button>
    `;
  });
}
// src="../src/plategrond/etages/${this_id}.png

// makestudieElements();
