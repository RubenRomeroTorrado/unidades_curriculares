"use strict";

/**
 * EDITA AQUÍ TUS ASIGNATURAS
 * - grade: 0..10 (o 0..20 si cambias SCALE_MAX)
 * - credits: número
 * - year: texto (ej: "2023/24" o "1º" o "2025")
 * - type: texto (ej: "Obligatoria", "Optativa", "Proyecto", "Prácticas")
 */
const SCALE_MAX = 20;

const COURSES = [
  { name: "Projeto Hackathon de Ciência de Dados", year: "Mestrado", type: "Tecnologia", credits: 12, grade: 16 },
  { name: "Seminário em Ciência de Dados", year: "Mestrado", type: "Transversal", credits: 2, grade: 18 },
  { name: "Dissertação em Ciência de Dados em Agricultura, Alimentação, Floresta e Ambiente", year: "Mestrado", type: "Tecnologia", credits: 46, grade: 17 },

  { name: "Análise e Visualização de Dados Complexos Agro-Ambientais", year: "Mestrado", type: "Tecnologia", credits: 6, grade: 15 },
  { name: "Aprendizagem Automática Aplicada", year: "Mestrado", type: "Tecnologia", credits: 6, grade: 16 },
  { name: "Estratégia Empresarial e Avaliação de Projectos", year: "Mestrado", type: "Transversal", credits: 6, grade: 15 },
  { name: "Fundamentos da Ciência de Dados Agro-Ambientais", year: "Mestrado", type: "Tecnologia", credits: 6, grade: 15 },
  { name: "Gestão e Armazenamento de Dados", year: "Mestrado", type: "Tecnologia", credits: 6, grade: 15 },
  { name: "Introdução ao Python", year: "Mestrado", type: "Tecnologia", credits: 6, grade: 16 },

  { name: "Fruticultura", year: "Mestrado", type: "Agronomia", credits: 6, grade: 15 },
  { name: "Protecção de Culturas", year: "Mestrado", type: "Agronomia", credits: 6, grade: 12 },
  { name: "Fertilizantes e Técnicas de Fertilização", year: "Mestrado", type: "Agronomia", credits: 6, grade: 15 },
  { name: "Rega e Drenagem", year: "Mestrado", type: "Agronomia", credits: 6, grade: 13 },
  { name: "Recursos Hídricos", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 14 },

    // LICENCIATURA
  { name: "Agricultura II", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 13 },
  { name: "Pastagens e Forragens: Produção, Conservação e Beneficiação", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 17 },
  { name: "Protecção de Plantas II", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 13 },
  { name: "Qualidade e Segurança Alimentar", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 11 },
  { name: "Sistemas de Produção Hortícola, Frutícola e Vitícola II", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 14 },
  { name: "Agricultura I", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 12 },
  { name: "Gestão", year: "Licenciatura", type: "Transversal", credits: 6, grade: 15 },
  { name: "Seminário", year: "Licenciatura", type: "Transversal", credits: 6, grade: 15 },
  { name: "Sistemas de Produção Hortícola, Frutícola e Vitícola I", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 16 },
  { name: "Ecologia", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 15 },
  { name: "Economia", year: "Licenciatura", type: "Transversal", credits: 6, grade: 14 },
  { name: "Geomática", year: "Licenciatura", type: "Tecnologia", credits: 6, grade: 14 },
  { name: "Nutrição Vegetal, Fertilidade do Solo e Fertilização", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 15 },
  { name: "Zootecnia", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 11 },
  { name: "Biologia Funcional", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 13 },
  { name: "Climatologia e Agrometeorologia", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 14 },
  { name: "Estatística", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 11 },
  { name: "Protecção de Plantas I", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 15 },
  { name: "Solos", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 15 },
  { name: "Análise Matemática", year: "Licenciatura", type: "Transversal", credits: 6, grade: 12 },
  { name: "Botânica", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 14 },
  { name: "Física II", year: "Licenciatura", type: "Transversal", credits: 6, grade: 12 },
  { name: "Organização da Produção Agrícola e Pecuária", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 15 },
  { name: "Química Orgânica e Bioquímica", year: "Licenciatura", type: "Transversal", credits: 6, grade: 14 },
  { name: "Álgebra Linear", year: "Licenciatura", type: "Transversal", credits: 6, grade: 10 },
  { name: "Análise Sociológica", year: "Licenciatura", type: "Agronomia", credits: 6, grade: 13 },
  { name: "Biologia Celular e Microbiologia", year: "Licenciatura", type: "Transversal", credits: 6, grade: 17 },
  { name: "Física I", year: "Licenciatura", type: "Transversal", credits: 6, grade: 10 },
  { name: "Química", year: "Licenciatura", type: "Transversal", credits: 6, grade: 12 },

];

const $ = (sel) => document.querySelector(sel);

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }
function round2(n){ return Math.round(n * 100) / 100; }

function gradeBucket(g){
  if (g >= 9) return "hi";
  if (g >= 7) return "mid";
  return "lo";
}

function weightedAverage(items){
  const tot = items.reduce((s,x)=> s + (Number(x.credits)||0), 0);
  if (!tot) return 0;
  const sum = items.reduce((s,x)=> s + (Number(x.credits)||0) * (Number(x.grade)||0), 0);
  return sum / tot;
}

function distinct(arr, key){
  return [...new Set(arr.map(x => x[key]).filter(Boolean))];
}

function populateFilters(){
  const years = distinct(COURSES, "year").sort((a,b)=> String(b).localeCompare(String(a)));
  const types = distinct(COURSES, "type").sort((a,b)=> String(a).localeCompare(String(b)));

  const yearSel = $("#year");
  years.forEach(y=>{
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    yearSel.appendChild(opt);
  });

  const typeSel = $("#type");
  types.forEach(t=>{
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    typeSel.appendChild(opt);
  });
}

function applyFilters(){
  const q = ($("#q").value || "").trim().toLowerCase();
  const year = $("#year").value;
  const type = $("#type").value;
  const sort = $("#sort").value;

  let items = [...COURSES];

  if (q){
    items = items.filter(x =>
      String(x.name).toLowerCase().includes(q) ||
      String(x.year).toLowerCase().includes(q) ||
      String(x.type).toLowerCase().includes(q)
    );
  }
  if (year !== "all"){
    items = items.filter(x => String(x.year) === String(year));
  }
  if (type !== "all"){
    items = items.filter(x => String(x.type) === String(type));
  }

  // sorting
  const by = {
    grade_desc: (a,b)=> (b.grade - a.grade) || (b.credits - a.credits),
    grade_asc: (a,b)=> (a.grade - b.grade) || (b.credits - a.credits),
    name_asc: (a,b)=> String(a.name).localeCompare(String(b.name)),
    credits_desc: (a,b)=> (b.credits - a.credits) || (b.grade - a.grade),
    year_desc: (a,b)=> String(b.year).localeCompare(String(a.year)) || (b.grade - a.grade),
  }[sort];

  items.sort(by);

  render(items);
  updateKPIs(items);
  drawChart(items);
  drawTypePie(items);
}

function render(items){
  const rows = $("#rows");
  rows.innerHTML = "";

  const info = $("#resultsInfo");
  info.textContent = `${items.length} resultado(s) · mostrando ${items.length ? "listado" : "nada"} (ajusta filtros)`;

  const frag = document.createDocumentFragment();

  items.forEach((c, idx)=>{
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("role","row");
    row.style.animation = `fadeUp 260ms ease ${idx*18}ms both`;

    const g = Number(c.grade) || 0;
    const pct = clamp((g / SCALE_MAX) * 100, 0, 100);
    const bucket = gradeBucket(g);

    row.innerHTML = `
      <div class="cell">
        <div class="courseTitle">
          <div class="courseTitle__name">${escapeHtml(c.name)}</div>
          <div class="courseTitle__meta">${escapeHtml(c.type)} · ${escapeHtml(c.year)}</div>
        </div>
      </div>
      <div class="cell">${escapeHtml(c.year)}</div>
      <div class="cell">${escapeHtml(c.type)}</div>
      <div class="cell cell--num">${formatNum(c.credits)}</div>
      <div class="cell cell--num">
        <span class="badge badge--${bucket}">${formatNum(g)} / ${SCALE_MAX}</span>
      </div>
      <div class="cell">
        <div class="progress" aria-label="Progreso de nota">
          <div class="progress__bar" style="width:0%"></div>
        </div>
      </div>
    `;

    frag.appendChild(row);

    // animate progress after insertion
    requestAnimationFrame(()=>{
      const bar = row.querySelector(".progress__bar");
      if (bar) bar.style.width = `${pct}%`;
    });
  });

  rows.appendChild(frag);
}

function updateKPIs(items){
  const count = items.length;
  const totalCredits = items.reduce((s,x)=> s + (Number(x.credits)||0), 0);
  const best = count ? Math.max(...items.map(x=> Number(x.grade)||0)) : 0;
  const gpa = count ? weightedAverage(items) : 0;

  $("#kpiCount").textContent = String(count);
  $("#kpiCredits").textContent = formatNum(totalCredits);
  $("#kpiBest").textContent = count ? `${formatNum(best)} / ${SCALE_MAX}` : "—";
  $("#kpiGPA").textContent = count ? formatNum(round2(gpa)) : "—";
}

function drawChart(items){
  const canvas = $("#gradeChart");
  const ctx = canvas.getContext("2d");

  // handle HiDPI
  const dpr = window.devicePixelRatio || 1;
  const cssW = canvas.clientWidth || canvas.width;
  const cssH = canvas.clientHeight || canvas.height;
  canvas.width = Math.floor(cssW * dpr);
  canvas.height = Math.floor(cssH * dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0);

  const w = cssW, h = cssH;

  // background
  ctx.clearRect(0,0,w,h);

  const bins = 5; // 0-2,2-4,4-6,6-8,8-10 (for SCALE_MAX=10)
  const counts = new Array(bins).fill(0);
  items.forEach(x=>{
    const g = clamp(Number(x.grade)||0, 0, SCALE_MAX);
    let i = Math.floor((g / SCALE_MAX) * bins);
    if (i === bins) i = bins - 1;
    counts[i] += 1;
  });

  const maxCount = Math.max(1, ...counts);
  const pad = 18;
  const barW = (w - pad*2) / bins;
  const baseY = h - pad;

  // grid
  ctx.globalAlpha = 0.16;
  ctx.lineWidth = 1;
  for (let i=0;i<=4;i++){
    const y = pad + ((h - pad*2) * i / 4);
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(w - pad, y);
    ctx.strokeStyle = getCss("--stroke");
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // bars
  counts.forEach((c, i)=>{
    const x = pad + i * barW + 8;
    const bh = (h - pad*2) * (c / maxCount);
    const y = baseY - bh;
    const bw = barW - 16;

    // gradient using theme accent vars
    const grad = ctx.createLinearGradient(x, y, x + bw, y + bh);
    grad.addColorStop(0, getCss("--accent2"));
    grad.addColorStop(1, getCss("--accent"));

    roundRect(ctx, x, y, bw, bh, 12);
    ctx.fillStyle = grad;
    ctx.fill();

    // label
    ctx.font = "600 12px Inter, system-ui, sans-serif";
    ctx.fillStyle = getCss("--muted");
    const left = Math.round((SCALE_MAX / bins) * i);
    const right = Math.round((SCALE_MAX / bins) * (i+1));
    const label = `${left}–${right}`;
    ctx.fillText(label, x + 6, h - 6);

    // count top
    ctx.fillStyle = getCss("--text");
    ctx.globalAlpha = 0.85;
    ctx.fillText(String(c), x + 6, y - 6);
    ctx.globalAlpha = 1;
  });

  $("#pillScale").textContent = `0–${SCALE_MAX}`;
}

function getCss(varName){
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

function roundRect(ctx, x, y, w, h, r){
  const rr = Math.min(r, w/2, h/2);
  ctx.beginPath();
  ctx.moveTo(x+rr, y);
  ctx.arcTo(x+w, y, x+w, y+h, rr);
  ctx.arcTo(x+w, y+h, x, y+h, rr);
  ctx.arcTo(x, y+h, x, y, rr);
  ctx.arcTo(x, y, x+w, y, rr);
  ctx.closePath();
}

function formatNum(n){
  const v = Number(n);
  if (!Number.isFinite(v)) return "—";
  return v % 1 === 0 ? String(v) : v.toFixed(1);
}

function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* theme */
function initTheme(){
  const saved = localStorage.getItem("theme") || "dark";
  setTheme(saved);
}
function setTheme(mode){
  const root = document.documentElement;
  if (mode === "light") root.classList.add("light");
  else root.classList.remove("light");
  localStorage.setItem("theme", mode);
  // redraw chart to match theme
  applyFilters();
}
function toggleTheme(){
  const isLight = document.documentElement.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
}

/* init */
function init(){
  // animation keyframes via JS to avoid extra CSS block
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeUp{ from{ opacity:0; transform: translateY(8px);} to{opacity:1; transform: translateY(0);} }
  `;
  document.head.appendChild(style);

  $("#lastUpdated").textContent = new Date().toLocaleDateString("es-ES", { year:"numeric", month:"short", day:"2-digit" });

  populateFilters();
  initTheme();

  // events
  ["q","year","type","sort"].forEach(id=>{
    $("#"+id).addEventListener("input", applyFilters);
    $("#"+id).addEventListener("change", applyFilters);
  });

  $("#btnReset").addEventListener("click", ()=>{
    $("#q").value = "";
    $("#year").value = "all";
    $("#type").value = "all";
    $("#sort").value = "grade_desc";
    applyFilters();
  });

  $("#btnTheme").addEventListener("click", toggleTheme);
  $("#btnPrint").addEventListener("click", ()=> window.print());

  // first render
  $("#sort").value = "grade_desc";
  applyFilters();

  // redraw on resize
  window.addEventListener("resize", ()=>{
    drawChart(getCurrentItems());
  });
}

function getCurrentItems(){
  // re-run filter logic cheaply to get current items (for resize redraw)
  const q = ($("#q").value || "").trim().toLowerCase();
  const year = $("#year").value;
  const type = $("#type").value;
  let items = [...COURSES];
  if (q){
    items = items.filter(x =>
      String(x.name).toLowerCase().includes(q) ||
      String(x.year).toLowerCase().includes(q) ||
      String(x.type).toLowerCase().includes(q)
    );
  }
  if (year !== "all") items = items.filter(x => String(x.year) === String(year));
  if (type !== "all") items = items.filter(x => String(x.type) === String(type));
  return items;
}

init();
