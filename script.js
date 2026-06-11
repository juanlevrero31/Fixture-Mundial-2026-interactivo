const grupos = {
  A: ["México", "Sudáfrica", "Corea del Sur", "República Checa"],
  B: ["Canadá", "Bosnia", "Catar", "Suiza"],
  C: ["Brasil", "Marruecos", "Haití", "Escocia"],
  D: ["Estados Unidos", "Paraguay", "Australia", "Turquía"],
  E: ["Alemania", "Curazao", "Costa de Marfil", "Ecuador"],
  F: ["Países Bajos", "Japón", "Suecia", "Túnez"],
  G: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
  H: ["España", "Cabo Verde", "Arabia Saudí", "Uruguay"],
  I: ["Francia", "Senegal", "Irak", "Noruega"],
  J: ["Argentina", "Argelia", "Austria", "Jordania"],
  K: ["Portugal", "RD Congo", "Uzbekistán", "Colombia"],
  L: ["Inglaterra", "Croacia", "Ghana", "Panamá"]
};

const calendarioPartidos = [
  { dia: "JUEVES 11 DE JUNIO", hora: "16:00", local: "México", visita: "Sudáfrica", canal: "DSPORTS / Telefé / Disney+", grupo: "A" },
  { dia: "JUEVES 11 DE JUNIO", hora: "23:00", local: "Corea del Sur", visita: "República Checa", canal: "DSPORTS / TyC Sports", grupo: "A" },
  { dia: "VIERNES 12 DE JUNIO", hora: "16:00", local: "Canadá", visita: "Bosnia", canal: "DSPORTS", grupo: "B" },
  { dia: "VIERNES 12 DE JUNIO", hora: "22:00", local: "Estados Unidos", visita: "Paraguay", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "D" },
  { dia: "SÁBADO 13 DE JUNIO", hora: "16:00", local: "Catar", visita: "Suiza", canal: "DSPORTS", grupo: "B" },
  { dia: "SÁBADO 13 DE JUNIO", hora: "19:00", local: "Brasil", visita: "Marruecos", canal: "DSPORTS / Telefé / Disney+", grupo: "C" },
  { dia: "SÁBADO 13 DE JUNIO", hora: "22:00", local: "Haití", visita: "Escocia", canal: "DSPORTS / TyC Sports", grupo: "C" },
  { dia: "DOMINGO 14 DE JUNIO", hora: "01:00", local: "Australia", visita: "Turquía", canal: "DSPORTS / TyC Sports", grupo: "D" },
  { dia: "DOMINGO 14 DE JUNIO", hora: "14:00", local: "Alemania", visita: "Curazao", canal: "DSPORTS", grupo: "E" },
  { dia: "DOMINGO 14 DE JUNIO", hora: "17:00", local: "Países Bajos", visita: "Japón", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "F" },
  { dia: "DOMINGO 14 DE JUNIO", hora: "20:00", local: "Costa de Marfil", visita: "Ecuador", canal: "DSPORTS / Telefé / Disney+", grupo: "E" },
  { dia: "DOMINGO 14 DE JUNIO", hora: "23:00", local: "Suecia", visita: "Túnez", canal: "DSPORTS / TyC Sports", grupo: "F" },
  { dia: "LUNES 15 DE JUNIO", hora: "13:00", local: "España", visita: "Cabo Verde", canal: "DSPORTS", grupo: "H" },
  { dia: "LUNES 15 DE JUNIO", hora: "16:00", local: "Bélgica", visita: "Egipto", canal: "DSPORTS / TyC Sports", grupo: "G" },
  { dia: "LUNES 15 DE JUNIO", hora: "19:00", local: "Arabia Saudí", visita: "Uruguay", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "H" },
  { dia: "LUNES 15 DE JUNIO", hora: "22:00", local: "Irán", visita: "Nueva Zelanda", canal: "DSPORTS / TyC Sports", grupo: "G" },
  { dia: "MARTES 16 DE JUNIO", hora: "16:00", local: "Francia", visita: "Senegal", canal: "DSPORTS", grupo: "I" },
  { dia: "MARTES 16 DE JUNIO", hora: "19:00", local: "Irak", visita: "Noruega", canal: "DSPORTS / TyC Sports", grupo: "I" },
  { dia: "MARTES 16 DE JUNIO", hora: "22:00", local: "Argentina", visita: "Argelia", canal: "DSPORTS / Telefé / TVP / Disney+ / TyC Sports", grupo: "J" },
  { dia: "MIÉRCOLES 17 DE JUNIO", hora: "01:00", local: "Austria", visita: "Jordania", canal: "DSPORTS / TyC Sports", grupo: "J" },
  { dia: "MIÉRCOLES 17 DE JUNIO", hora: "14:00", local: "Portugal", visita: "RD Congo", canal: "DSPORTS", grupo: "K" },
  { dia: "MIÉRCOLES 17 DE JUNIO", hora: "17:00", local: "Inglaterra", visita: "Croacia", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "L" },
  { dia: "MIÉRCOLES 17 DE JUNIO", hora: "20:00", local: "Ghana", visita: "Panamá", canal: "DSPORTS / TyC Sports", grupo: "L" },
  { dia: "MIÉRCOLES 17 DE JUNIO", hora: "23:00", local: "Uzbekistán", visita: "Colombia", canal: "DSPORTS / TyC Sports", grupo: "K" },
  { dia: "JUEVES 18 DE JUNIO", hora: "13:00", local: "República Checa", visita: "Sudáfrica", canal: "DSPORTS / TyC Sports", grupo: "A" },
  { dia: "JUEVES 18 DE JUNIO", hora: "16:00", local: "Suiza", visita: "Bosnia", canal: "DSPORTS / Telefé / Disney+", grupo: "B" },
  { dia: "JUEVES 18 DE JUNIO", hora: "19:00", local: "Canadá", visita: "Catar", canal: "DSPORTS", grupo: "B" },
  { dia: "JUEVES 18 DE JUNIO", hora: "22:00", local: "México", visita: "Corea del Sur", canal: "DSPORTS / TyC Sports", grupo: "A" },
  { dia: "VIERNES 19 DE JUNIO", hora: "16:00", local: "Estados Unidos", visita: "Australia", canal: "DSPORTS / TyC Sports", grupo: "D" },
  { dia: "VIERNES 19 DE JUNIO", hora: "19:00", local: "Escocia", visita: "Marruecos", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "C" },
  { dia: "VIERNES 19 DE JUNIO", hora: "21:30", local: "Brasil", visita: "Haití", canal: "DSPORTS / TyC Sports", grupo: "C" },
  { dia: "SÁBADO 20 DE JUNIO", hora: "00:00", local: "Turquía", visita: "Paraguay", canal: "DSPORTS / TyC Sports", grupo: "D" },
  { dia: "SÁBADO 20 DE JUNIO", hora: "14:00", local: "Países Bajos", visita: "Suecia", canal: "DSPORTS / TyC Sports", grupo: "F" },
  { dia: "SÁBADO 20 DE JUNIO", hora: "17:00", local: "Alemania", visita: "Costa de Marfil", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "E" },
  { dia: "SÁBADO 20 DE JUNIO", hora: "21:00", local: "Ecuador", visita: "Curazao", canal: "DSPORTS", grupo: "E" },
  { dia: "DOMINGO 21 DE JUNIO", hora: "01:00", local: "Túnez", visita: "Japón", canal: "DSPORTS / TyC Sports", grupo: "F" },
  { dia: "DOMINGO 21 DE JUNIO", hora: "13:00", local: "España", visita: "Arabia Saudí", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "H" },
  { dia: "DOMINGO 21 DE JUNIO", hora: "16:00", local: "Bélgica", visita: "Irán", canal: "DSPORTS", grupo: "G" },
  { dia: "DOMINGO 21 DE JUNIO", hora: "19:00", local: "Uruguay", visita: "Cabo Verde", canal: "DSPORTS / Telefé / Disney+", grupo: "H" },
  { dia: "DOMINGO 21 DE JUNIO", hora: "22:00", local: "Nueva Zelanda", visita: "Egipto", canal: "DSPORTS / TyC Sports", grupo: "G" },
  { dia: "LUNES 22 DE JUNIO", hora: "14:00", local: "Argentina", visita: "Austria", canal: "DSPORTS / Telefé / TVP / Disney+ / TyC Sports", grupo: "J" },
  { dia: "LUNES 22 DE JUNIO", hora: "18:00", local: "Francia", visita: "Irak", canal: "DSPORTS", grupo: "I" },
  { dia: "LUNES 22 DE JUNIO", hora: "21:00", local: "Noruega", visita: "Senegal", canal: "DSPORTS / TyC Sports", grupo: "I" },
  { dia: "MARTES 23 DE JUNIO", hora: "00:00", local: "Jordania", visita: "Argelia", canal: "DSPORTS", grupo: "J" },
  { dia: "MARTES 23 DE JUNIO", hora: "14:00", local: "Portugal", visita: "Uzbekistán", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "K" },
  { dia: "MARTES 23 DE JUNIO", hora: "17:00", local: "Inglaterra", visita: "Ghana", canal: "DSPORTS / Telefé / Disney+", grupo: "L" },
  { dia: "MARTES 23 DE JUNIO", hora: "20:00", local: "Panamá", visita: "Croacia", canal: "DSPORTS / TyC Sports", grupo: "L" },
  { dia: "MARTES 23 DE JUNIO", hora: "23:00", local: "Colombia", visita: "RD Congo", canal: "DSPORTS", grupo: "K" },
  { dia: "MIÉRCOLES 24 DE JUNIO", hora: "16:00", local: "Suiza", visita: "Canadá", canal: "DSPORTS / TyC Sports", grupo: "B" },
  { dia: "MIÉRCOLES 24 DE JUNIO", hora: "16:00", local: "Bosnia", visita: "Catar", canal: "DSPORTS", grupo: "B" },
  { dia: "MIÉRCOLES 24 DE JUNIO", hora: "19:00", local: "Escocia", visita: "Brasil", canal: "DSPORTS / Telefé / Disney+", grupo: "C" },
  { dia: "MIÉRCOLES 24 DE JUNIO", hora: "19:00", local: "Marruecos", visita: "Haití", canal: "DSPORTS / TyC Sports", grupo: "C" },
  { dia: "MIÉRCOLES 24 DE JUNIO", hora: "22:00", local: "República Checa", visita: "México", canal: "DSPORTS", grupo: "A" },
  { dia: "MIÉRCOLES 24 DE JUNIO", hora: "22:00", local: "Sudáfrica", visita: "Corea del Sur", canal: "DSPORTS / TyC Sports", grupo: "A" },
  { dia: "JUEVES 25 DE JUNIO", hora: "17:00", local: "Ecuador", visita: "Alemania", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "E" },
  { dia: "JUEVES 25 DE JUNIO", hora: "17:00", local: "Curazao", visita: "Costa de Marfil", canal: "DSPORTS", grupo: "E" },
  { dia: "JUEVES 25 DE JUNIO", hora: "20:00", local: "Túnez", visita: "Países Bajos", canal: "DSPORTS / TVP", grupo: "F" },
  { dia: "JUEVES 25 DE JUNIO", hora: "20:00", local: "Japón", visita: "Suecia", canal: "DSPORTS / TyC Sports", grupo: "F" },
  { dia: "JUEVES 25 DE JUNIO", hora: "23:00", local: "Turquía", visita: "Estados Unidos", canal: "DSPORTS / TyC Sports", grupo: "D" },
  { dia: "JUEVES 25 DE JUNIO", hora: "23:00", local: "Paraguay", visita: "Australia", canal: "DSPORTS / Telefé / Disney+", grupo: "D" },
  { dia: "VIERNES 26 DE JUNIO", hora: "16:00", local: "Noruega", visita: "Francia", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "I" },
  { dia: "VIERNES 26 DE JUNIO", hora: "16:00", local: "Senegal", visita: "Irak", canal: "DSPORTS", grupo: "I" },
  { dia: "VIERNES 26 DE JUNIO", hora: "21:00", local: "Uruguay", visita: "España", canal: "DSPORTS / Telefé / TyC Sports / Disney+", grupo: "H" },
  { dia: "VIERNES 26 DE JUNIO", hora: "21:00", local: "Cabo Verde", visita: "Arabia Saudí", canal: "DSPORTS", grupo: "H" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "00:00", local: "Nueva Zelanda", visita: "Bélgica", canal: "DSPORTS", grupo: "G" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "00:00", local: "Egipto", visita: "Irán", canal: "DSPORTS / TyC Sports", grupo: "G" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "18:00", local: "Panamá", visita: "Inglaterra", canal: "DSPORTS / TVP / TyC Sports", grupo: "L" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "18:00", local: "Croacia", visita: "Ghana", canal: "DSPORTS", grupo: "L" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "20:30", local: "Colombia", visita: "Portugal", canal: "DSPORTS", grupo: "K" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "20:30", local: "RD Congo", visita: "Uzbekistán", canal: "DSPORTS / TyC Sports", grupo: "K" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "23:00", local: "Jordania", visita: "Argentina", canal: "DSPORTS / Telefé / TVP / Disney+ / TyC Sports", grupo: "J" },
  { dia: "SÁBADO 27 DE JUNIO", hora: "23:00", local: "Argelia", visita: "Austria", canal: "DSPORTS", grupo: "J" }
];

const puntos = {};
let resultados = {};

function initTable() {
  Object.entries(grupos).forEach(([grupo, equipos]) => {
    puntos[grupo] = {};
    equipos.forEach(e => puntos[grupo][e] = { pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, pts: 0 });
  });
}

function sortTeams(grupo) {
  return Object.entries(puntos[grupo]).sort((a, b) =>
    b[1].pts - a[1].pts ||
    (b[1].gf - b[1].gc) - (a[1].gf - a[1].gc) ||
    b[1].gf - a[1].gf
  );
}

function renderGroups() {
  const el = document.getElementById("groupsContainer");
  el.innerHTML = Object.keys(grupos).map(grupo => {
    const tabla = sortTeams(grupo)
      .map(([equipo, data]) => `<div class="team"><span>${equipo}</span><span>${data.pts} pts</span></div>`)
      .join("");
    return `<div class="card"><h3 class="group-title">Grupo ${grupo}</h3>${tabla}</div>`;
  }).join("");
}

function renderMatches() {
  const el = document.getElementById("matchesContainer");
  el.innerHTML = calendarioPartidos.map((p, i) => {
    const r = resultados[i] || {};
    return `
      <div class="match">
        <div class="match-top">
          <span><strong>Grupo ${p.grupo}</strong></span>
          <span>${p.dia} • ${p.hora}</span>
        </div>
        <div class="match-row">
          <strong>${p.local}</strong>
          <input class="score" type="number" min="0" value="${r.local ?? ""}" data-match="${i}" data-side="local" />
          <input class="score" type="number" min="0" value="${r.visita ?? ""}" data-match="${i}" data-side="visita" />
          <strong style="text-align:right">${p.visita}</strong>
        </div>
        <div class="tv-logos">
          ${p.canal.split("/").map(c => c.trim()).map(c => `<span class="tv">${c}</span>`).join("")}
        </div>
      </div>
    `;
  }).join("");

  el.querySelectorAll("input").forEach(input => input.addEventListener("input", saveResult));
}

function saveResult(e) {
  const i = e.target.dataset.match;
  const side = e.target.dataset.side;
  if (!resultados[i]) resultados[i] = {};
  resultados[i][side] = e.target.value === "" ? null : Number(e.target.value);
  updateAll();
}

function updatePoints() {
  initTable();
  calendarioPartidos.forEach((p, i) => {
    const r = resultados[i];
    if (!r || r.local === null || r.visita === null) return;

    const a = p.local;
    const b = p.visita;
    const g = p.grupo;

    puntos[g][a].pj++;
    puntos[g][b].pj++;
    puntos[g][a].gf += r.local;
    puntos[g][a].gc += r.visita;
    puntos[g][b].gf += r.visita;
    puntos[g][b].gc += r.local;

    if (r.local > r.visita) {
      puntos[g][a].pg++; puntos[g][a].pts += 3;
      puntos[g][b].pp++;
    } else if (r.local < r.visita) {
      puntos[g][b].pg++; puntos[g][b].pts += 3;
      puntos[g][a].pp++;
    } else {
      puntos[g][a].pe++; puntos[g][b].pe++;
      puntos[g][a].pts++; puntos[g][b].pts++;
    }
  });
}

function getClasificados() {
  return Object.keys(grupos).map(grupo => {
    const orden = sortTeams(grupo).map(([equipo]) => equipo);
    return { grupo, primero: orden[0], segundo: orden[1] };
  });
}

function renderBracket(id, title, pairs) {
  const el = document.getElementById(id);
  if (!pairs.length) {
    el.innerHTML = `<div class="card placeholder">Completá resultados para generar esta fase.</div>`;
    return;
  }
  el.innerHTML = `<div class="card"><h3 class="stage-title">${title}</h3>${pairs.map(p => `<div class="team"><span>${p[0]}</span><span>vs</span><span>${p[1]}</span></div>`).join("")}</div>`;
}

function updateBrackets() {
  const c = getClasificados();
  const c16 = [
    [c[0]?.primero, c[1]?.segundo],
    [c[2]?.primero, c[3]?.segundo],
    [c[4]?.primero, c[5]?.segundo],
    [c[6]?.primero, c[7]?.segundo],
    [c[8]?.primero, c[9]?.segundo],
    [c[10]?.primero, c[11]?.segundo],
    [c[1]?.primero, c[0]?.segundo],
    [c[3]?.primero, c[2]?.segundo]
  ].filter(p => p[0] && p[1]);

  renderBracket("round32Container", "16avos de final", c16);
  renderBracket("round16Container", "Octavos de final", c16.slice(0, 4));
  renderBracket("quartersContainer", "Cuartos de final", c16.slice(0, 2));
  renderBracket("semisContainer", "Semifinal", c16.slice(0, 1));
  renderBracket("finalContainer", "Final", c16.length ? [[c16[0][0], c16[0][1]]] : []);
}

function updateAll() {
  updatePoints();
  renderGroups();
  renderMatches();
  updateBrackets();
}

document.getElementById("resetBtn").addEventListener("click", () => {
  resultados = {};
  updateAll();
});

document.getElementById("demoBtn").addEventListener("click", () => {
  resultados = {
    0: { local: 2, visita: 1 },
    1: { local: 1, visita: 3 },
    2: { local: 0, visita: 2 },
    3: { local: 2, visita: 0 },
    4: { local: 1, visita: 1 },
    5: { local: 3, visita: 1 }
  };
  updateAll();
});

updateAll();