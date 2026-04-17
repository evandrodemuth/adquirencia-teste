// =============================================
// ADQUIRÊNCIA ACADEMY — App Principal
// =============================================

// ---- Estado Global ----
const STATE = {
  currentView: 'dashboard',   // dashboard | lesson | quiz
  currentModuleId: null,
  currentLessonId: null,
  currentQuizModuleId: null,
  quizState: null,            // { questions, currentIdx, answers, score }
};

// ---- Persistência (localStorage) ----
const STORAGE_KEY = 'adq_academy_progress';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch { return {}; }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getProgress() { return loadProgress(); }

function markLessonDone(lessonId) {
  const p = getProgress();
  p.lessons = p.lessons || {};
  p.lessons[lessonId] = true;
  saveProgress(p);
}

function isLessonDone(lessonId) {
  return !!(getProgress().lessons || {})[lessonId];
}

function saveQuizScore(moduleId, score, total) {
  const p = getProgress();
  p.quizzes = p.quizzes || {};
  const prev = p.quizzes[moduleId];
  // Keep best score
  if (!prev || score > prev.score) {
    p.quizzes[moduleId] = { score, total, date: new Date().toLocaleDateString('pt-BR') };
  }
  saveProgress(p);
}

function getQuizScore(moduleId) {
  return (getProgress().quizzes || {})[moduleId] || null;
}

// ---- Helpers ----
function getModule(moduleId) {
  return COURSE.modules.find(m => m.id === moduleId);
}

function getLesson(lessonId) {
  for (const mod of COURSE.modules) {
    const lesson = mod.lessons.find(l => l.id === lessonId);
    if (lesson) return { lesson, module: mod };
  }
  return null;
}

function getModuleProgress(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return { done: 0, total: 0, percent: 0 };
  const done = mod.lessons.filter(l => isLessonDone(l.id)).length;
  const total = mod.lessons.length;
  const quizDone = !!getQuizScore(moduleId);
  const totalWithQuiz = total + 1;
  const doneWithQuiz = done + (quizDone ? 1 : 0);
  return {
    done: doneWithQuiz,
    total: totalWithQuiz,
    percent: Math.round((doneWithQuiz / totalWithQuiz) * 100),
    allLessonsDone: done === total,
    quizDone
  };
}

function getOverallProgress() {
  let totalItems = 0, doneItems = 0;
  for (const mod of COURSE.modules) {
    const p = getModuleProgress(mod.id);
    totalItems += p.total;
    doneItems += p.done;
  }
  return totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;
}

function getModuleColors(mod) {
  return {
    bg: mod.color + '20',
    text: mod.color,
  };
}

// ---- Renderização da Sidebar ----
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  const overallPct = getOverallProgress();

  document.getElementById('overall-progress-bar').style.width = overallPct + '%';
  document.getElementById('overall-progress-label').textContent = overallPct + '% concluído';

  nav.innerHTML = '';

  COURSE.modules.forEach((mod, idx) => {
    const prog = getModuleProgress(mod.id);
    const isActive = STATE.currentModuleId === mod.id;
    const isCompleted = prog.percent === 100;

    const item = document.createElement('div');
    item.className = `module-nav-item${isActive ? ' active' : ''}${isCompleted ? ' completed' : ''}`;

    const lessonsHTML = mod.lessons.map(l => {
      const done = isLessonDone(l.id);
      const active = STATE.currentLessonId === l.id;
      return `<div class="lesson-nav-item ${done ? 'done' : ''} ${active ? 'active' : ''}" data-lesson="${l.id}">
        <div class="lesson-dot"></div>
        ${l.title}
      </div>`;
    }).join('');

    const quizScore = getQuizScore(mod.id);
    const quizHTML = prog.allLessonsDone ? `
      <div class="lesson-nav-item ${quizScore ? 'done' : ''} ${STATE.currentQuizModuleId === mod.id && STATE.currentView === 'quiz' ? 'active' : ''}" data-quiz="${mod.id}">
        <div class="lesson-dot"></div>
        Quiz do Módulo
        ${quizScore ? `<span class="score-badge ${quizScore.score === quizScore.total ? 'perfect' : ''}">${quizScore.score}/${quizScore.total}</span>` : ''}
      </div>
    ` : '';

    item.innerHTML = `
      <div class="module-nav-header" data-mod="${mod.id}">
        <div class="mod-icon">${isCompleted ? '✓' : (idx + 1)}</div>
        <div>
          <div>${mod.title}</div>
          <div style="font-size:.7rem;font-weight:400;color:${isCompleted ? 'var(--success)' : 'var(--text-muted)'};">${prog.percent}% concluído</div>
        </div>
      </div>
      <div class="module-nav-lessons">
        ${lessonsHTML}
        ${quizHTML}
      </div>
    `;

    nav.appendChild(item);
  });

  // Events
  nav.querySelectorAll('[data-mod]').forEach(el => {
    el.addEventListener('click', () => {
      const modId = el.dataset.mod;
      STATE.currentModuleId = STATE.currentModuleId === modId ? null : modId;
      renderSidebar();
    });
  });

  nav.querySelectorAll('[data-lesson]').forEach(el => {
    el.addEventListener('click', () => showLesson(el.dataset.lesson));
  });

  nav.querySelectorAll('[data-quiz]').forEach(el => {
    el.addEventListener('click', () => showQuiz(el.dataset.quiz));
  });
}

// ---- Views ----
function showView(view) {
  document.getElementById('dashboard-view').classList.remove('page-visible');
  document.getElementById('lesson-view').classList.remove('page-visible');
  document.getElementById('quiz-view').classList.remove('page-visible');

  document.getElementById(view + '-view').classList.add('page-visible');
  STATE.currentView = view;

  const dashBtn = document.getElementById('dash-nav-btn');
  dashBtn.classList.toggle('active', view === 'dashboard');
}

// ---- Dashboard ----
function renderDashboard() {
  showView('dashboard');
  STATE.currentLessonId = null;
  STATE.currentQuizModuleId = null;

  const overallPct = getOverallProgress();
  const totalModules = COURSE.modules.length;
  const completedModules = COURSE.modules.filter(m => getModuleProgress(m.id).percent === 100).length;
  const totalQuizzes = COURSE.modules.filter(m => !!getQuizScore(m.id)).length;

  // Greeting
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Bom dia' : hour < 18 ? 'Boa tarde' : 'Boa noite';

  document.getElementById('dash-welcome-text').innerHTML = `
    <h2>${greeting}, ${COURSE.studentName}! 👋</h2>
    <p>Você está ${overallPct === 0 ? 'começando' : overallPct === 100 ? 'formada!' : `${overallPct}% do caminho`} na sua jornada de Adquirência. ${overallPct === 100 ? '🎉 Parabéns por concluir o curso!' : 'Continue assim!'}</p>
  `;

  document.getElementById('stat-progress').textContent = overallPct + '%';
  document.getElementById('stat-modules').textContent = `${completedModules}/${totalModules}`;
  document.getElementById('stat-quizzes').textContent = totalQuizzes;

  // Calcular média de quizzes
  const scores = COURSE.modules.map(m => getQuizScore(m.id)).filter(Boolean);
  const avgScore = scores.length > 0
    ? Math.round(scores.reduce((a, s) => a + (s.score / s.total * 100), 0) / scores.length)
    : '-';
  document.getElementById('stat-avg').textContent = avgScore === '-' ? '-' : avgScore + '%';

  // Módulos
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = '';

  COURSE.modules.forEach(mod => {
    const prog = getModuleProgress(mod.id);
    const quizScore = getQuizScore(mod.id);
    const colors = getModuleColors(mod);

    const card = document.createElement('div');
    card.className = `module-card${prog.percent === 100 ? ' completed' : ''}`;
    card.innerHTML = `
      <div class="module-card-header">
        <div class="module-card-icon" style="background:${colors.bg};color:${colors.text}">${mod.icon}</div>
        <div>
          <h3>${mod.title}</h3>
          ${quizScore ? `<span class="score-badge ${quizScore.score === quizScore.total ? 'perfect' : ''}">Quiz: ${quizScore.score}/${quizScore.total} ✓</span>` : ''}
        </div>
      </div>
      <p>${mod.description}</p>
      <div class="mod-progress-wrap">
        <div class="mod-progress-fill" style="width:${prog.percent}%;background:${mod.color}"></div>
      </div>
      <div class="mod-meta">
        <span>${prog.done}/${prog.total} itens</span>
        <span>${prog.percent}%</span>
      </div>
    `;
    card.addEventListener('click', () => {
      STATE.currentModuleId = mod.id;
      // Abrir primeira lição não concluída ou a primeira
      const firstUndone = mod.lessons.find(l => !isLessonDone(l.id));
      showLesson((firstUndone || mod.lessons[0]).id);
    });
    grid.appendChild(card);
  });

  // Certificado se 100%
  const certArea = document.getElementById('certificate-area');
  if (overallPct === 100) {
    const today = new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
    certArea.innerHTML = `
      <div class="certificate">
        <div style="font-size:2rem;margin-bottom:8px">🎖️</div>
        <h2>Certificado de Conclusão</h2>
        <p>Este certificado atesta que</p>
        <div class="cert-name">${COURSE.studentName}</div>
        <p>concluiu com êxito o curso</p>
        <p><strong>Adquirência Academy — Fundamentos de Adquirência para Profissionais de PLD</strong></p>
        <p class="cert-date">Concluído em ${today}</p>
      </div>
    `;
    certArea.classList.remove('hidden');
  } else {
    certArea.classList.add('hidden');
  }

  renderSidebar();
  refreshIcons();
}

// ---- Lição ----
function showLesson(lessonId) {
  const found = getLesson(lessonId);
  if (!found) return;
  const { lesson, module: mod } = found;

  STATE.currentView = 'lesson';
  STATE.currentLessonId = lessonId;
  STATE.currentModuleId = mod.id;
  STATE.currentQuizModuleId = null;

  showView('lesson');

  // Breadcrumb
  document.getElementById('lesson-breadcrumb').innerHTML = `
    <span onclick="renderDashboard()">Início</span>
    <span>›</span>
    <span onclick="STATE.currentModuleId='${mod.id}';renderDashboard()">${mod.title}</span>
    <span>›</span>
    <span>${lesson.title}</span>
  `;

  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-meta').innerHTML = `
    <span>⏱ ${lesson.duration} de leitura</span>
    <span>📚 ${mod.title}</span>
    ${isLessonDone(lessonId) ? '<span style="color:var(--success)">✓ Concluída</span>' : ''}
  `;

  document.getElementById('lesson-body').innerHTML = lesson.content;

  // Navegação
  const allLessons = mod.lessons;
  const idx = allLessons.findIndex(l => l.id === lessonId);
  const prev = idx > 0 ? allLessons[idx - 1] : null;
  const next = idx < allLessons.length - 1 ? allLessons[idx + 1] : null;
  const prog = getModuleProgress(mod.id);

  const prevBtn = document.getElementById('btn-prev-lesson');
  const nextBtn = document.getElementById('btn-next-lesson');

  prevBtn.disabled = !prev;
  prevBtn.onclick = prev ? () => showLesson(prev.id) : null;

  if (next) {
    nextBtn.textContent = 'Próxima →';
    nextBtn.onclick = () => {
      markLessonDone(lessonId);
      showLesson(next.id);
    };
  } else {
    // Última lição do módulo
    nextBtn.textContent = prog.allLessonsDone || isLessonDone(lessonId) ? 'Ir para o Quiz →' : 'Concluir e ir para o Quiz →';
    nextBtn.onclick = () => {
      markLessonDone(lessonId);
      showQuiz(mod.id);
    };
  }

  // Scroll to top
  document.getElementById('main-content').scrollTo(0, 0);
  window.scrollTo(0, 0);

  renderSidebar();
  refreshIcons();
}

// ---- Quiz ----
function showQuiz(moduleId) {
  const mod = getModule(moduleId);
  if (!mod) return;
  const prog = getModuleProgress(moduleId);
  if (!prog.allLessonsDone) {
    alert('Conclua todas as aulas do módulo antes de fazer o quiz!');
    return;
  }

  STATE.currentView = 'quiz';
  STATE.currentQuizModuleId = moduleId;
  STATE.currentModuleId = moduleId;
  STATE.currentLessonId = null;

  const questions = mod.quiz.questions;
  STATE.quizState = {
    questions,
    currentIdx: 0,
    answers: new Array(questions.length).fill(null),
    score: 0,
  };

  showView('quiz');

  document.getElementById('quiz-module-title').textContent = mod.quiz.title;
  document.getElementById('quiz-module-sub').textContent = `${questions.length} questões • ${mod.title}`;

  renderQuestion();
  renderSidebar();
  refreshIcons();
}

function renderQuestion() {
  const qs = STATE.quizState;
  const q = qs.questions[qs.currentIdx];
  const pct = Math.round((qs.currentIdx / qs.questions.length) * 100);

  document.getElementById('quiz-prog-bar').style.width = pct + '%';

  const container = document.getElementById('quiz-question-area');
  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = `
    <div class="question-card">
      <div class="question-num">Questão ${qs.currentIdx + 1} de ${qs.questions.length}</div>
      <div class="question-text">${q.text}</div>
      <div class="options-list" id="options-list">
        ${q.options.map((opt, i) => `
          <button class="option-btn" data-idx="${i}">
            <span class="option-letter">${letters[i]}</span>
            ${opt}
          </button>
        `).join('')}
      </div>
      <div class="feedback-box" id="feedback-box"></div>
    </div>
  `;

  document.getElementById('quiz-actions').innerHTML = `
    <button class="btn-lesson-nav primary" id="btn-next-q" disabled>
      ${qs.currentIdx < qs.questions.length - 1 ? 'Próxima →' : 'Ver Resultado →'}
    </button>
  `;

  // Eventos das opções
  container.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx)));
  });
}

function handleAnswer(selectedIdx) {
  const qs = STATE.quizState;
  const q = qs.questions[qs.currentIdx];
  qs.answers[qs.currentIdx] = selectedIdx;

  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === selectedIdx && selectedIdx !== q.correct) btn.classList.add('wrong');
  });

  const isCorrect = selectedIdx === q.correct;
  if (isCorrect) qs.score++;

  const feedback = document.getElementById('feedback-box');
  feedback.className = `feedback-box show ${isCorrect ? 'correct' : 'wrong'}`;
  feedback.innerHTML = `<strong>${isCorrect ? '✅ Correto!' : '❌ Incorreto.'}</strong> ${q.explanation}`;

  const nextBtn = document.getElementById('btn-next-q');
  nextBtn.disabled = false;
  nextBtn.addEventListener('click', () => {
    if (qs.currentIdx < qs.questions.length - 1) {
      qs.currentIdx++;
      renderQuestion();
    } else {
      showQuizResult();
    }
  });
}

function showQuizResult() {
  const qs = STATE.quizState;
  const mod = getModule(STATE.currentQuizModuleId);
  const pct = Math.round((qs.score / qs.questions.length) * 100);

  saveQuizScore(STATE.currentQuizModuleId, qs.score, qs.questions.length);

  document.getElementById('quiz-prog-bar').style.width = '100%';

  let emoji, scoreClass, title, msg;

  if (pct === 100) {
    emoji = '🏆'; scoreClass = 'great'; title = 'Perfeito! Gabarito completo!';
    msg = 'Você acertou todas as questões. Domínio total do módulo!';
  } else if (pct >= 80) {
    emoji = '🎉'; scoreClass = 'great'; title = 'Excelente resultado!';
    msg = 'Ótimo desempenho! Você demonstrou sólido entendimento do conteúdo.';
  } else if (pct >= 60) {
    emoji = '📚'; scoreClass = 'ok'; title = 'Bom resultado!';
    msg = 'Você está no caminho certo. Revise os pontos em que errou e tente novamente.';
  } else {
    emoji = '💪'; scoreClass = 'retry'; title = 'Continue estudando!';
    msg = 'Revise o conteúdo do módulo e tente novamente. Você consegue!';
  }

  // Próximo módulo
  const modIdx = COURSE.modules.findIndex(m => m.id === STATE.currentQuizModuleId);
  const nextMod = COURSE.modules[modIdx + 1];
  const isLast = !nextMod;

  document.getElementById('quiz-question-area').innerHTML = `
    <div class="quiz-result">
      <div class="result-emoji">${emoji}</div>
      <div class="result-score ${scoreClass}">${qs.score}/${qs.questions.length}</div>
      <div class="result-title">${title}</div>
      <div class="result-msg">${msg}</div>
      <div class="result-actions">
        <button class="btn-secondary" onclick="showQuiz('${mod.id}')">🔄 Refazer Quiz</button>
        ${nextMod ? `<button class="btn-lesson-nav primary" onclick="showLesson('${nextMod.lessons[0].id}')">Próximo Módulo: ${nextMod.title} →</button>` : ''}
        <button class="btn-secondary" onclick="renderDashboard()">🏠 Ir para o Início</button>
      </div>
      ${isLast && pct >= 60 ? '<div style="margin-top:16px;font-size:.85rem;color:var(--text-muted)">🎓 Você concluiu todos os módulos! Veja seu certificado na tela inicial.</div>' : ''}
    </div>
  `;

  document.getElementById('quiz-actions').innerHTML = '';
  renderSidebar();
}

// ---- Ícones Lucide ----
function refreshIcons() {
  if (window.lucide) lucide.createIcons();
}

// ---- Inicialização ----
function startApp() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';

  document.getElementById('dash-nav-btn').addEventListener('click', renderDashboard);

  renderDashboard();
}

// ---- Tela de boas-vindas ----
document.addEventListener('DOMContentLoaded', () => {
  const studentSpan = document.getElementById('welcome-name');
  if (studentSpan) studentSpan.textContent = COURSE.studentName + '!';

  const btn = document.getElementById('btn-start');
  if (btn) btn.addEventListener('click', startApp);

  // Se já teve progresso, mostrar botão "continuar"
  const prog = getOverallProgress();
  if (prog > 0 && btn) {
    btn.textContent = `Continuar onde parei (${prog}% concluído) →`;
  }

  refreshIcons();
});
