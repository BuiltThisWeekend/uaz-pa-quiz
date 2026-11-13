(function (global) {
  'use strict';

  // =========================================================
  // 1. CONFIGURATION & TOPIC / UNIT METADATA
  // =========================================================
  const STORAGE_KEY = 'kailyn_pa_prep_state';
  const MAX_HEARTS = 5;

  const UNIT_METADATA = {
    '1': {
      title: 'Foundations & Clinical Exam',
      subtitle: 'Unit 1 • Gross Anatomy, Bates Physical Exam & Medical Spanish',
      icon: '🩺',
      bgGradient: 'from-[#58CC02] to-[#46A302]',
      borderBottom: 'border-[#357B01]',
      nodeBg: 'bg-[#58CC02] border-[#46A302] hover:bg-[#61E002]'
    },
    '2': {
      title: 'High-Yield Physiology',
      subtitle: 'Unit 2 • Cardiopulmonary, ECG, ABG & Renal Nephrons',
      icon: '⚡',
      bgGradient: 'from-[#1CB0F6] to-[#1899D6]',
      borderBottom: 'border-[#0F75A5]',
      nodeBg: 'bg-[#1CB0F6] border-[#1899D6] hover:bg-[#42C0FB]'
    },
    '3': {
      title: 'Pharmacology & SOAP Notes',
      subtitle: 'Unit 3 • PAP 611 Drug Classes & PAP 621 Clinical Documentation',
      icon: '💊',
      bgGradient: 'from-[#FF9600] to-[#E08200]',
      borderBottom: 'border-[#B86A00]',
      nodeBg: 'bg-[#FF9600] border-[#E08200] hover:bg-[#FFA726]'
    },
    '4': {
      title: 'UArizona Admin & Compliance',
      subtitle: 'Unit 4 • Didactic Policies, Grading & Clinical Prerequisites',
      icon: '🏁',
      bgGradient: 'from-[#A463F8] to-[#863EE2]',
      borderBottom: 'border-[#6918CB]',
      nodeBg: 'bg-[#A463F8] border-[#863EE2] hover:bg-[#B983FA]'
    },
    '5': {
      title: 'Didactic Organ Systems I',
      subtitle: 'Unit 5 • Cardiology, Pulmonology, GI & Endocrinology',
      icon: '🫀',
      bgGradient: 'from-[#EC4899] to-[#DB2777]',
      borderBottom: 'border-[#9D174D]',
      nodeBg: 'bg-[#EC4899] border-[#DB2777] hover:bg-[#F472B6]'
    },
    '6': {
      title: 'Clinical Rotations & Special Populations',
      subtitle: 'Unit 6 • Pediatrics (6.1), OB/GYN (6.2) & Subspecialties',
      icon: '👶',
      bgGradient: 'from-[#14B8A6] to-[#0D9488]',
      borderBottom: 'border-[#115E59]',
      nodeBg: 'bg-[#14B8A6] border-[#0D9488] hover:bg-[#2DD4BF]'
    },
    '7': {
      title: 'Didactic Organ Systems II (PANCE)',
      subtitle: 'Unit 7 • Neuro, Ortho, Rheum, Heme, ID, Derm & Urology',
      icon: '🧠',
      bgGradient: 'from-[#6366F1] to-[#4F46E5]',
      borderBottom: 'border-[#3730A3]',
      nodeBg: 'bg-[#6366F1] border-[#4F46E5] hover:bg-[#818CF8]'
    },
    '8': {
      title: 'Additional PANCE Modules',
      subtitle: 'Unit 8 • Newly Imported Clinical Topics',
      icon: '🌟',
      bgGradient: 'from-[#0EA5E9] to-[#0284C7]',
      borderBottom: 'border-[#0369A1]',
      nodeBg: 'bg-[#0EA5E9] border-[#0284C7] hover:bg-[#38BDF8]'
    }
  };

  const TOPIC_MAP = {
    // Unit 1
    '1.1':         { code: '1.1', label: 'Gross Anatomy', icon: '🦴' },
    'anatomy':     { code: '1.1', label: 'Gross Anatomy', icon: '🦴' },
    'anat':        { code: '1.1', label: 'Gross Anatomy', icon: '🦴' },
    '1.2':         { code: '1.2', label: 'Bates & CMDT', icon: '🩺' },
    'bates_cmdt':  { code: '1.2', label: 'Bates & CMDT', icon: '🩺' },
    '1.3':         { code: '1.3', label: 'Medical Spanish', icon: '🗣️' },
    'spanish':     { code: '1.3', label: 'Medical Spanish', icon: '🗣️' },

    // Unit 2
    '2.1':         { code: '2.1', label: 'Cardiac & ECG', icon: '📈' },
    'cardiac':     { code: '2.1', label: 'Cardiac & ECG', icon: '📈' },
    'cardio_phys': { code: '2.1', label: 'Cardiac & ECG', icon: '📈' },
    '2.2':         { code: '2.2', label: 'Renal & ABG', icon: '🧪' },
    'renal':       { code: '2.2', label: 'Renal & ABG', icon: '🧪' },
    'renal_abg':   { code: '2.2', label: 'Renal & ABG', icon: '🧪' },
    'nephro':      { code: '2.2', label: 'Renal & ABG', icon: '🧪' },

    // Unit 3
    '3.1':          { code: '3.1', label: 'Pharmacology', icon: '💊' },
    'pharm':        { code: '3.1', label: 'Pharmacology', icon: '💊' },
    'pharmacology': { code: '3.1', label: 'Pharmacology', icon: '💊' },
    '3.2':          { code: '3.2', label: 'SOAP Notes', icon: '📋' },
    'soap':         { code: '3.2', label: 'SOAP Notes', icon: '📋' },

    // Unit 4
    '4.1':          { code: '4.1', label: 'UArizona Admin', icon: '🎓' },
    'admin':        { code: '4.1', label: 'UArizona Admin', icon: '🎓' },

    // Unit 5
    '5.1':              { code: '5.1', label: 'Cardiology', icon: '❤️' },
    'cardio':           { code: '5.1', label: 'Cardiology', icon: '❤️' },
    'cardiology':       { code: '5.1', label: 'Cardiology', icon: '❤️' },
    '5.2':              { code: '5.2', label: 'Pulmonology', icon: '🫁' },
    'pulm':             { code: '5.2', label: 'Pulmonology', icon: '🫁' },
    'pulmonology':      { code: '5.2', label: 'Pulmonology', icon: '🫁' },
    '5.3':              { code: '5.3', label: 'Gastroenterology', icon: '🍏' },
    'gi':               { code: '5.3', label: 'Gastroenterology', icon: '🍏' },
    'gastroenterology': { code: '5.3', label: 'Gastroenterology', icon: '🍏' },
    '5.4':              { code: '5.4', label: 'Endocrinology', icon: '🦋' },
    'endo':             { code: '5.4', label: 'Endocrinology', icon: '🦋' },
    'endocrinology':    { code: '5.4', label: 'Endocrinology', icon: '🦋' },

    // Unit 6
    '6.1':        { code: '6.1', label: 'Pediatrics', icon: '🧸' },
    'peds':       { code: '6.1', label: 'Pediatrics', icon: '🧸' },
    'pediatrics': { code: '6.1', label: 'Pediatrics', icon: '🧸' },
    '6.2':        { code: '6.2', label: 'OB/GYN', icon: '🤰' },
    'obgyn':      { code: '6.2', label: 'OB/GYN', icon: '🤰' },

    // Unit 7 (PANCE Organ Systems II & Pre-configured Specialties)
    '7.1':           { code: '7.1', label: 'Neurology', icon: '🧠' },
    'neuro':         { code: '7.1', label: 'Neurology', icon: '🧠' },
    'neurology':     { code: '7.1', label: 'Neurology', icon: '🧠' },
    '7.2':           { code: '7.2', label: 'Orthopedics', icon: '🦴' },
    'ortho':         { code: '7.2', label: 'Orthopedics', icon: '🦴' },
    'orthopedics':   { code: '7.2', label: 'Orthopedics', icon: '🦴' },
    '7.3':           { code: '7.3', label: 'Rheumatology', icon: '🦵' },
    'rheum':         { code: '7.3', label: 'Rheumatology', icon: '🦵' },
    'rheumatology':  { code: '7.3', label: 'Rheumatology', icon: '🦵' },
    '7.4':           { code: '7.4', label: 'Hematology', icon: '🩸' },
    'heme':          { code: '7.4', label: 'Hematology', icon: '🩸' },
    'hematology':    { code: '7.4', label: 'Hematology', icon: '🩸' },
    '7.5':           { code: '7.5', label: 'Infectious Disease', icon: '🦠' },
    'id':            { code: '7.5', label: 'Infectious Disease', icon: '🦠' },
    'infectious':    { code: '7.5', label: 'Infectious Disease', icon: '🦠' },
    '7.6':           { code: '7.6', label: 'Dermatology', icon: '🩹' },
    'derm':          { code: '7.6', label: 'Dermatology', icon: '🩹' },
    'dermatology':   { code: '7.6', label: 'Dermatology', icon: '🩹' },
    '7.7':           { code: '7.7', label: 'Urology', icon: '💧' },
    'uro':           { code: '7.7', label: 'Urology', icon: '💧' },
    'urology':       { code: '7.7', label: 'Urology', icon: '💧' },
    '7.8':           { code: '7.8', label: 'Psychiatry', icon: '💭' },
    'psych':         { code: '7.8', label: 'Psychiatry', icon: '💭' },
    'psychiatry':    { code: '7.8', label: 'Psychiatry', icon: '💭' },
    '7.9':           { code: '7.9', label: 'ENT / EENT', icon: '👂' },
    'ent':           { code: '7.9', label: 'ENT / EENT', icon: '👂' },
    'eent':          { code: '7.9', label: 'ENT / EENT', icon: '👂' },
    '7.10':          { code: '7.10', label: 'Ophthalmology', icon: '👁️' },
    'ophtho':        { code: '7.10', label: 'Ophthalmology', icon: '👁️' },
    'ophthalmology': { code: '7.10', label: 'Ophthalmology', icon: '👁️' },
    '7.11':          { code: '7.11', label: 'Emergency Med', icon: '🚑' },
    'er':            { code: '7.11', label: 'Emergency Med', icon: '🚑' },
    'em':            { code: '7.11', label: 'Emergency Med', icon: '🚑' },
    'emerg':         { code: '7.11', label: 'Emergency Med', icon: '🚑' },
    'emergency':     { code: '7.11', label: 'Emergency Med', icon: '🚑' },
    '7.12':          { code: '7.12', label: 'Surgery', icon: '🔪' },
    'surg':          { code: '7.12', label: 'Surgery', icon: '🔪' },
    'surgery':       { code: '7.12', label: 'Surgery', icon: '🔪' }
  };

  // Canonical node metadata lookup by code (e.g. '5.1' -> { code, label, icon })
  const NODE_META_BY_CODE = Object.values(TOPIC_MAP).reduce((acc, entry) => {
    if (!acc[entry.code]) acc[entry.code] = entry;
    return acc;
  }, {});

  const SPANISH_TAG_META = {
    all:  { label: 'All', order: 0 },
    hpi:  { label: 'H&P / Pain', order: 1 },
    ros:  { label: 'ROS', order: 2 },
    pmh:  { label: 'PMH', order: 3 },
    exam: { label: 'Physical Exam', order: 4 },
    meds: { label: 'Meds & Allergies', order: 5 }
  };

  const BADGES = [
    {
      id: 'first_lesson',
      icon: '🥹',
      title: 'First Step, My Love!',
      note: 'I’m so proud of you my love! You completed your first PA prep lesson! 🥹💖'
    },
    {
      id: 'kaylove_combo',
      icon: '🔥',
      title: 'Good Job Kaylove! 💖',
      note: 'Good job Kaylove! 💖 5 correct answers in a row — your clinical instincts are unstoppable!'
    },
    {
      id: 'unit6_explorer',
      icon: '👶',
      title: 'Clinical Rotation Ready',
      note: 'Practicing Unit 6.1 & 6.2 already?! Future PA-C Kailyn is crushing Peds and OB/GYN!'
    },
    {
      id: 'pance_master',
      icon: '🧠',
      title: 'PANCE Specialist!',
      note: 'Tackling Unit 7 High-Yield PANCE Organ Systems! You are unstoppable, Kailyn! 🩺✨'
    }
  ];

  // =========================================================
  // 2. UTILITIES
  // =========================================================
  function escapeHtml(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function cleanCategoryLabel(category, fallbackSlug) {
    if (category) {
      return String(category).replace(/\s*\([^)]*\)\s*/g, '').trim() || category;
    }
    return fallbackSlug ? fallbackSlug.toUpperCase() : 'General';
  }

  // Deterministic FNV-1a 32-bit hash from prompt so `id` is optional when adding questions
  function computeQuestionId(q) {
    const normalized = String(q.prompt || '').trim().toLowerCase();
    let hash = 0x811c9dc5;
    for (let i = 0; i < normalized.length; i++) {
      hash ^= normalized.charCodeAt(i);
      hash = Math.imul(hash, 0x01000193);
    }
    return 'q_' + (hash >>> 0).toString(16).padStart(8, '0');
  }

  function cleanCitations(str) {
    return String(str ?? '').replace(/\s*\[cite:[^\]]*\]/gi, '').trim();
  }

  function normalizeForMatch(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/[¿?¡!.,;:()"'“”]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Hide audio button before answering when audioText is the Spanish answer rather than part of the prompt
  function isAudioSpoiler(q) {
    if (!q || !q.audioText) return false;
    const normPrompt = normalizeForMatch(q.prompt);
    const normAudio = normalizeForMatch(q.audioText);
    if (!normAudio) return false;
    if (normPrompt.includes(normAudio)) return false;
    const correctOpt = Array.isArray(q.options) ? normalizeForMatch(q.options[q.correct]) : '';
    if (correctOpt && (correctOpt.includes(normAudio) || normAudio.includes(correctOpt))) {
      return true;
    }
    return !normPrompt.includes(normAudio);
  }

  // =========================================================
  // 3. DATA STORE & INDEXING (O(1) Lookups)
  // =========================================================
  const DataStore = {
    questions: [],
    questionsById: new Map(),
    questionsByNode: new Map(),
    questionsByUnit: new Map(),
    nodeMetaByCode: new Map(),
    unitsStructure: [],
    phrases: [],
    phrasesByTag: new Map(),
    dynamicSlugToCode: new Map(),
    nextDynamicSubIndex: 1,

    resolveQuestionNode(q) {
      const rawTopic = String(q.topic || '').trim().toLowerCase();
      const rawUnit = String(q.unit || '').trim().toLowerCase();

      if (TOPIC_MAP[rawTopic]) return TOPIC_MAP[rawTopic].code;
      if (TOPIC_MAP[rawUnit]) return TOPIC_MAP[rawUnit].code;

      const topicMatch = rawTopic.match(/(\d+\.\d+)/);
      if (topicMatch) return topicMatch[1];

      const unitMatch = rawUnit.match(/(\d+\.\d+)/);
      if (unitMatch) return unitMatch[1];

      const phaseMatch = rawUnit.match(/phase(\d+)/i);
      if (phaseMatch) return `${phaseMatch[1]}.1`;

      // Deterministic dynamic 8.x module for any unrecognized slug
      if (rawTopic) {
        if (!this.dynamicSlugToCode.has(rawTopic)) {
          const assignedCode = `8.${this.nextDynamicSubIndex++}`;
          this.dynamicSlugToCode.set(rawTopic, assignedCode);
          this.nodeMetaByCode.set(assignedCode, {
            code: assignedCode,
            label: cleanCategoryLabel(q.category, rawTopic),
            icon: '⭐'
          });
        }
        return this.dynamicSlugToCode.get(rawTopic);
      }

      return '1.2';
    },

    buildIndex() {
      const rawBank = Array.isArray(global.EXPANDED_QUESTION_BANK) ? global.EXPANDED_QUESTION_BANK : [];
      const rawPhrases = Array.isArray(global.SPANISH_CLINIC_PHRASES) ? global.SPANISH_CLINIC_PHRASES : [];

      this.questions = [];
      this.questionsById = new Map();
      this.questionsByNode = new Map();
      this.questionsByUnit = new Map();
      this.nodeMetaByCode = new Map(Object.entries(NODE_META_BY_CODE));
      this.dynamicSlugToCode = new Map();
      this.nextDynamicSubIndex = 1;

      const groupedUnits = new Map();
      const seenPrompts = new Set();

      for (const q of rawBank) {
        if (!q || !q.prompt || !Array.isArray(q.options)) continue;

        const cleanedPrompt = cleanCitations(q.prompt);
        const cleanedPearl = cleanCitations(q.pearl);
        const normPrompt = cleanedPrompt.toLowerCase();
        if (seenPrompts.has(normPrompt)) continue;
        seenPrompts.add(normPrompt);

        let resolvedId = q.id ? String(q.id).trim() : '';
        if (!resolvedId || this.questionsById.has(resolvedId)) {
          resolvedId = computeQuestionId({ prompt: cleanedPrompt });
        }
        if (this.questionsById.has(resolvedId)) {
          let suffix = 2;
          while (this.questionsById.has(`${resolvedId}_${suffix}`)) suffix++;
          resolvedId = `${resolvedId}_${suffix}`;
        }

        const nodeCode = this.resolveQuestionNode(q);
        const majorUnit = nodeCode.split('.')[0] || '1';
        const indexedQ = {
          ...q,
          id: resolvedId,
          prompt: cleanedPrompt,
          pearl: cleanedPearl,
          _nodeCode: nodeCode,
          _majorUnit: majorUnit
        };

        this.questions.push(indexedQ);
        this.questionsById.set(indexedQ.id, indexedQ);

        if (!this.questionsByNode.has(nodeCode)) {
          this.questionsByNode.set(nodeCode, []);
        }
        this.questionsByNode.get(nodeCode).push(indexedQ);

        if (!this.questionsByUnit.has(majorUnit)) {
          this.questionsByUnit.set(majorUnit, []);
        }
        this.questionsByUnit.get(majorUnit).push(indexedQ);

        if (!groupedUnits.has(majorUnit)) {
          groupedUnits.set(majorUnit, new Map());
        }
        const unitNodes = groupedUnits.get(majorUnit);
        if (!unitNodes.has(nodeCode)) {
          const preset = this.nodeMetaByCode.get(nodeCode);
          unitNodes.set(nodeCode, {
            code: nodeCode,
            label: preset ? preset.label : cleanCategoryLabel(q.category, `Module ${nodeCode}`),
            icon: preset ? preset.icon : '⭐',
            questions: this.questionsByNode.get(nodeCode)
          });
        }
      }

      const sortedMajorKeys = Array.from(groupedUnits.keys()).sort((a, b) => Number(a) - Number(b));
      this.unitsStructure = sortedMajorKeys.map((majorKey) => {
        const unitNodes = groupedUnits.get(majorKey);
        const sortedCodes = Array.from(unitNodes.keys()).sort((a, b) =>
          a.localeCompare(b, undefined, { numeric: true })
        );
        return {
          majorKey,
          meta: UNIT_METADATA[majorKey] || {
            title: `Expansion Unit ${majorKey}`,
            subtitle: `Dynamic Clinical Modules (${majorKey}.x)`,
            icon: '🌟',
            bgGradient: 'from-[#14B8A6] to-[#0D9488]',
            borderBottom: 'border-[#115E59]',
            nodeBg: 'bg-[#14B8A6] border-[#0D9488] hover:bg-[#2DD4BF]'
          },
          nodes: sortedCodes.map((code) => unitNodes.get(code)),
          totalQuestions: (this.questionsByUnit.get(majorKey) || []).length
        };
      });

      // Index Spanish Clinic Phrases by tag
      this.phrases = [];
      this.phrasesByTag = new Map();

      rawPhrases.forEach((phrase, idx) => {
        if (!phrase || !phrase.es) return;
        const tag = String(phrase.tag || 'general').trim().toLowerCase();
        const item = { ...phrase, tag, originalIndex: idx };
        this.phrases.push(item);

        if (!this.phrasesByTag.has(tag)) {
          this.phrasesByTag.set(tag, []);
        }
        this.phrasesByTag.get(tag).push(item);
      });
    }
  };

  // =========================================================
  // 4. GAME STATE & PERSISTENCE
  // =========================================================
  const State = {
    data: {
      xp: 0,
      hearts: MAX_HEARTS,
      streak: 1,
      lastStudyDate: null,
      completedRounds: 0,
      mistakesIds: [],
      unlockedBadges: []
    },
    mistakesSet: new Set(),
    unlockedBadgesSet: new Set(),

    load() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          this.data = { ...this.data, ...JSON.parse(saved) };
        }
      } catch (e) {
        // Ignore storage errors (e.g. private browsing)
      }
      if (!Array.isArray(this.data.mistakesIds)) this.data.mistakesIds = [];
      if (!Array.isArray(this.data.unlockedBadges)) this.data.unlockedBadges = [];

      this.mistakesSet = new Set(this.data.mistakesIds);
      this.unlockedBadgesSet = new Set(this.data.unlockedBadges);
      this.updateDailyStreakAndHearts();
    },

    save() {
      this.data.mistakesIds = Array.from(this.mistakesSet);
      this.data.unlockedBadges = Array.from(this.unlockedBadgesSet);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      } catch (e) {
        // Ignore storage errors
      }
    },

    updateDailyStreakAndHearts() {
      const today = new Date().toISOString().split('T')[0];
      if (!this.data.lastStudyDate) {
        this.data.streak = 1;
        this.data.hearts = MAX_HEARTS;
        this.data.lastStudyDate = today;
      } else if (this.data.lastStudyDate !== today) {
        const last = new Date(this.data.lastStudyDate);
        const curr = new Date(today);
        const diffDays = Math.round((curr - last) / (1000 * 60 * 60 * 24));
        this.data.streak = diffDays === 1 ? this.data.streak + 1 : 1;
        this.data.hearts = MAX_HEARTS;
        this.data.lastStudyDate = today;
      }
      this.save();
    },

    addMistake(id) {
      if (!this.mistakesSet.has(id)) {
        this.mistakesSet.add(id);
        this.save();
      }
    },

    clearMistake(id) {
      if (this.mistakesSet.has(id)) {
        this.mistakesSet.delete(id);
        this.save();
      }
    },

    unlockBadge(badgeId) {
      if (!this.unlockedBadgesSet.has(badgeId)) {
        this.unlockedBadgesSet.add(badgeId);
        this.save();
        const badge = BADGES.find((b) => b.id === badgeId);
        if (badge) {
          UI.showMascotSpeech(`${badge.icon} ${badge.note}`);
        }
      }
    }
  };

  // =========================================================
  // 5. SPANISH AUDIO SYNTHESIS (Cached Voice)
  // =========================================================
  const Audio = {
    cachedEsVoice: null,

    init() {
      if (!('speechSynthesis' in global)) return;
      const pickVoice = () => {
        const voices = global.speechSynthesis.getVoices();
        if (!voices || voices.length === 0) return;
        this.cachedEsVoice =
          voices.find((v) => v.lang && v.lang.toLowerCase() === 'es-mx') ||
          voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('es-419')) ||
          voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('es')) ||
          null;
      };
      pickVoice();
      if (typeof global.speechSynthesis.addEventListener === 'function') {
        global.speechSynthesis.addEventListener('voiceschanged', pickVoice);
      } else {
        global.speechSynthesis.onvoiceschanged = pickVoice;
      }
    },

    speakSpanish(text) {
      if (!('speechSynthesis' in global) || !text) return;
      global.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      if (this.cachedEsVoice) utterance.voice = this.cachedEsVoice;
      utterance.lang = 'es-MX';
      utterance.rate = 0.92;
      global.speechSynthesis.speak(utterance);
    }
  };

  // =========================================================
  // 6. CACHED DOM ELEMENTS
  // =========================================================
  const DOM = {};

  function cacheDom() {
    const ids = [
      'topStreakCount',
      'topXpCount',
      'topHeartsCount',
      'quizHeartsRemaining',
      'mascotText',
      'dynamicRoadmapContainer',
      'quizProgressBar',
      'comboBanner',
      'comboBannerText',
      'qCategoryPill',
      'qVoiceBtn',
      'qImageContainer',
      'qImageElement',
      'quizQuestionText',
      'quizChoicesContainer',
      'quizActionFooter',
      'btnCheckAnswer',
      'resultDrawer',
      'resultIcon',
      'resultTitle',
      'resultExplanation',
      'btnDrawerContinue',
      'btnExitQuiz',
      'spanishFilterRow',
      'spanishCardsList',
      'mistakesContainer',
      'trophyModal',
      'trophyListContainer',
      'btnOpenTrophies',
      'btnCloseTrophies'
    ];
    for (const id of ids) {
      DOM[id] = document.getElementById(id);
    }
    DOM.tabs = {
      roadmap: document.getElementById('tab-roadmap'),
      quiz: document.getElementById('tab-quiz'),
      spanish: document.getElementById('tab-spanish'),
      mistakes: document.getElementById('tab-mistakes')
    };
    DOM.navs = {
      roadmap: document.getElementById('nav-roadmap'),
      quiz: document.getElementById('nav-quiz'),
      spanish: document.getElementById('nav-spanish'),
      mistakes: document.getElementById('nav-mistakes')
    };
  }

  // =========================================================
  // 7. QUIZ ENGINE
  // =========================================================
  const QuizEngine = {
    activeDeck: [],
    currentIndex: 0,
    selectedOptionIndex: null,
    comboStreak: 0,
    hasAnsweredCurrent: false,
    currentMeta: { correctIndex: -1, shuffledOptions: [] },
    activeTab: 'roadmap',
    lastCorrectIndex: -1,
    sameLetterStreak: 0,

    startPool(pool, speechMessage, badgeId) {
      if (!pool || pool.length === 0) return;
      this.activeDeck = shuffleArray(pool).slice(0, 10);
      this.currentIndex = 0;
      this.comboStreak = 0;
      this.hasAnsweredCurrent = false;
      this.selectedOptionIndex = null;
      this.lastCorrectIndex = -1;
      this.sameLetterStreak = 0;

      if (DOM.comboBanner) DOM.comboBanner.classList.add('hidden');
      if (badgeId) State.unlockBadge(badgeId);

      UI.switchTab('quiz');
      this.loadQuestion();
      if (speechMessage) UI.showMascotSpeech(speechMessage);
    },

    startNodeQuiz(nodeCode) {
      const matching = DataStore.questionsByNode.get(nodeCode);
      const pool = matching && matching.length > 0 ? matching : DataStore.questions;
      const majorUnit = String(nodeCode).split('.')[0];
      let badgeId = null;
      if (nodeCode === '6.1' || nodeCode === '6.2') badgeId = 'unit6_explorer';
      if (majorUnit === '7') badgeId = 'pance_master';

      this.startPool(pool, `You've got this, Kailyn! ❤️ Starting Module ${nodeCode}! 🩺`, badgeId);
    },

    startUnitQuiz(majorKey) {
      const matching = DataStore.questionsByUnit.get(String(majorKey));
      const pool = matching && matching.length > 0 ? matching : DataStore.questions;
      let badgeId = null;
      if (majorKey === '6') badgeId = 'unit6_explorer';
      if (majorKey === '7') badgeId = 'pance_master';

      this.startPool(pool, `Unit ${majorKey} Mixed Practice! Crush it, Kailyn! 💪💖`, badgeId);
    },

    startMistakesQuiz() {
      const missed = DataStore.questions.filter((q) => State.mistakesSet.has(q.id));
      if (missed.length === 0) return;
      this.startPool(missed, `Reviewing ${missed.length} missed question${missed.length > 1 ? 's' : ''}! You've got this! 🥊`);
    },

    loadQuestion() {
      this.hasAnsweredCurrent = false;
      this.selectedOptionIndex = null;

      DOM.resultDrawer.classList.add('hidden');
      DOM.quizActionFooter.classList.remove('hidden');

      const q = this.activeDeck[this.currentIndex];
      if (!q) {
        this.finishSession();
        return;
      }

      const pct = Math.round((this.currentIndex / this.activeDeck.length) * 100);
      DOM.quizProgressBar.style.width = `${Math.max(8, pct)}%`;

      DOM.qCategoryPill.textContent = `UNIT ${q._nodeCode} • ${(q.category || 'CLINICAL').toUpperCase()}`;
      DOM.quizQuestionText.textContent = q.prompt;

      if (q.imageUrl) {
        DOM.qImageElement.src = q.imageUrl;
        DOM.qImageContainer.classList.remove('hidden');
      } else {
        DOM.qImageElement.removeAttribute('src');
        DOM.qImageContainer.classList.add('hidden');
      }

      if (q.audioText && !isAudioSpoiler(q)) {
        DOM.qVoiceBtn.classList.remove('hidden');
      } else {
        DOM.qVoiceBtn.classList.add('hidden');
      }

      let paired = shuffleArray(
        q.options.map((opt, idx) => ({
          text: opt,
          isCorrect: idx === q.correct
        }))
      );
      let correctIdx = paired.findIndex((o) => o.isCorrect);

      // Prevent the correct answer from landing on the same letter 3+ times in a row
      if (paired.length > 1 && correctIdx === this.lastCorrectIndex && this.sameLetterStreak >= 2) {
        const altPositions = [];
        for (let i = 0; i < paired.length; i++) {
          if (i !== this.lastCorrectIndex) altPositions.push(i);
        }
        const swapPos = altPositions[Math.floor(Math.random() * altPositions.length)];
        [paired[correctIdx], paired[swapPos]] = [paired[swapPos], paired[correctIdx]];
        correctIdx = swapPos;
      }

      if (correctIdx === this.lastCorrectIndex) {
        this.sameLetterStreak++;
      } else {
        this.lastCorrectIndex = correctIdx;
        this.sameLetterStreak = 1;
      }

      this.currentMeta = {
        correctIndex: correctIdx,
        shuffledOptions: paired
      };

      const letters = ['A', 'B', 'C', 'D'];
      DOM.quizChoicesContainer.innerHTML = paired
        .map(
          (optObj, idx) => `
          <button data-choice-idx="${idx}" class="quiz-choice-btn w-full text-left p-3.5 rounded-2xl btn-card-3d flex items-center space-x-3 transition">
            <span class="w-7 h-7 rounded-xl bg-slate-100 border border-slate-300 text-slate-700 font-black text-xs flex items-center justify-center shrink-0">
              ${letters[idx] || idx + 1}
            </span>
            <span class="text-xs font-bold text-slate-800 leading-snug flex-1">${escapeHtml(optObj.text)}</span>
          </button>
        `
        )
        .join('');

      DOM.btnCheckAnswer.textContent = 'Check Answer';
      DOM.btnCheckAnswer.className =
        'w-full py-3.5 rounded-2xl text-white font-black text-sm uppercase tracking-wider shadow-md transition btn-3d bg-slate-300 border-b-4 border-slate-400 cursor-not-allowed';
    },

    selectChoice(idx) {
      if (this.hasAnsweredCurrent) return;
      if (idx < 0 || idx >= this.currentMeta.shuffledOptions.length) return;
      this.selectedOptionIndex = idx;

      const buttons = DOM.quizChoicesContainer.querySelectorAll('.quiz-choice-btn');
      buttons.forEach((btn, i) => {
        btn.className =
          i === idx
            ? 'quiz-choice-btn w-full text-left p-3.5 rounded-2xl flex items-center space-x-3 transition btn-card-selected'
            : 'quiz-choice-btn w-full text-left p-3.5 rounded-2xl btn-card-3d flex items-center space-x-3 transition';
      });

      DOM.btnCheckAnswer.className =
        'w-full py-3.5 rounded-2xl text-white font-black text-sm uppercase tracking-wider shadow-md transition btn-3d btn-green-3d';
    },

    handleCheckOrNext() {
      if (this.selectedOptionIndex === null) return;
      if (this.hasAnsweredCurrent) {
        this.advanceNext();
        return;
      }

      this.hasAnsweredCurrent = true;
      const q = this.activeDeck[this.currentIndex];
      const isCorrect = this.selectedOptionIndex === this.currentMeta.correctIndex;

      if (q.audioText && DOM.qVoiceBtn) {
        DOM.qVoiceBtn.classList.remove('hidden');
      }

      // Advance progress bar immediately upon checking
      const answeredPct = Math.round(((this.currentIndex + 1) / this.activeDeck.length) * 100);
      DOM.quizProgressBar.style.width = `${answeredPct}%`;

      DOM.quizActionFooter.classList.add('hidden');
      DOM.resultDrawer.classList.remove('hidden');

      const choiceButtons = DOM.quizChoicesContainer.querySelectorAll('.quiz-choice-btn');

      if (isCorrect) {
        this.comboStreak++;
        State.data.xp += 15;
        State.clearMistake(q.id);

        if (this.comboStreak >= 2) {
          DOM.comboBannerText.textContent = `🔥 ${this.comboStreak} in a Row, Kaylove! 💖 +15 XP`;
          DOM.comboBanner.classList.remove('hidden');
        }
        if (this.comboStreak >= 5) {
          State.unlockBadge('kaylove_combo');
        }

        if (choiceButtons[this.selectedOptionIndex]) {
          choiceButtons[this.selectedOptionIndex].className =
            'quiz-choice-btn w-full text-left p-3.5 rounded-2xl flex items-center space-x-3 transition btn-card-correct';
        }

        DOM.resultDrawer.className = 'mt-4 p-4 rounded-3xl border-2 border-[#58CC02] bg-[#D7FFB8] transition-all';
        DOM.resultIcon.className =
          'w-10 h-10 rounded-full bg-[#58CC02] text-white flex items-center justify-center font-black text-xl shrink-0';
        DOM.resultIcon.textContent = '✓';
        DOM.resultTitle.className = 'text-base font-black text-[#357B01]';
        DOM.resultTitle.textContent =
          this.comboStreak > 1 ? `Good job Kaylove! 💖 🔥 Combo x${this.comboStreak}` : 'I’m proud of you my love! 🥹';
        DOM.resultExplanation.className = 'text-xs font-bold mt-1 text-[#357B01] leading-relaxed';
        DOM.resultExplanation.innerHTML = `<span class="font-black">UA Clinical Pearl:</span> ${escapeHtml(q.pearl)}`;
        DOM.btnDrawerContinue.className =
          'mt-3.5 w-full py-3 rounded-2xl text-white font-black text-sm uppercase tracking-wider transition btn-3d btn-green-3d';
      } else {
        this.comboStreak = 0;
        DOM.comboBanner.classList.add('hidden');
        State.data.hearts = Math.max(1, State.data.hearts - 1);
        State.addMistake(q.id);

        if (choiceButtons[this.selectedOptionIndex]) {
          choiceButtons[this.selectedOptionIndex].className =
            'quiz-choice-btn w-full text-left p-3.5 rounded-2xl flex items-center space-x-3 transition btn-card-incorrect';
        }
        if (choiceButtons[this.currentMeta.correctIndex]) {
          choiceButtons[this.currentMeta.correctIndex].className =
            'quiz-choice-btn w-full text-left p-3.5 rounded-2xl flex items-center space-x-3 transition btn-card-correct';
        }

        const correctText = this.currentMeta.shuffledOptions[this.currentMeta.correctIndex].text;
        DOM.resultDrawer.className =
          'mt-4 p-4 rounded-3xl border-2 border-[#FF4B4B] bg-[#FFDFE0] transition-all animate-shake';
        DOM.resultIcon.className =
          'w-10 h-10 rounded-full bg-[#FF4B4B] text-white flex items-center justify-center font-black text-xl shrink-0';
        DOM.resultIcon.textContent = '✕';
        DOM.resultTitle.className = 'text-base font-black text-[#EA2B2B]';
        DOM.resultTitle.textContent = 'Correct solution:';
        DOM.resultExplanation.className = 'text-xs font-bold mt-1 text-[#931717] leading-relaxed';
        DOM.resultExplanation.innerHTML = `<span class="font-black">${escapeHtml(correctText)}</span><br><br><span class="font-black">Why:</span> ${escapeHtml(q.pearl)}`;
        DOM.btnDrawerContinue.className =
          'mt-3.5 w-full py-3 rounded-2xl text-white font-black text-sm uppercase tracking-wider transition btn-3d bg-[#FF4B4B] border-b-4 border-[#EA2B2B]';
      }

      State.save();
      UI.updateTopBar();
    },

    advanceNext() {
      if (this.currentIndex < this.activeDeck.length - 1) {
        this.currentIndex++;
        this.loadQuestion();
      } else {
        this.finishSession();
      }
    },

    finishSession() {
      State.data.completedRounds++;
      State.data.xp += 30;
      State.data.hearts = Math.min(MAX_HEARTS, State.data.hearts + 1);
      State.unlockBadge('first_lesson');
      State.save();
      UI.updateTopBar();
      UI.showMascotSpeech('🎉 Lesson Complete! I’m so proud of you my love! +30 XP & +1 ❤️ 🥹💖');
      UI.switchTab('roadmap');
    }
  };

  // =========================================================
  // 8. UI RENDERERS & NAVIGATION
  // =========================================================
  const UI = {
    activeSpanishFilter: 'all',

    updateTopBar() {
      if (DOM.topStreakCount) DOM.topStreakCount.textContent = State.data.streak;
      if (DOM.topXpCount) DOM.topXpCount.textContent = State.data.xp;
      if (DOM.topHeartsCount) DOM.topHeartsCount.textContent = State.data.hearts;
      if (DOM.quizHeartsRemaining) DOM.quizHeartsRemaining.textContent = State.data.hearts;
    },

    showMascotSpeech(text) {
      if (DOM.mascotText) DOM.mascotText.textContent = text;
    },

    renderRoadmap() {
      if (!DOM.dynamicRoadmapContainer) return;
      const offsets = ['', 'translate-x-10', '-translate-x-10'];

      DOM.dynamicRoadmapContainer.innerHTML = DataStore.unitsStructure
        .map((unit) => {
          const { majorKey, meta, nodes, totalQuestions } = unit;

          const stonesHtml = nodes
            .map((node, idx) => {
              const offsetClass = offsets[idx % offsets.length];
              return `
                <div class="flex flex-col items-center ${offsetClass}">
                  <button data-node-code="${escapeHtml(node.code)}" class="roadmap-node-btn w-20 h-20 rounded-full ${meta.nodeBg} border-b-8 text-white flex flex-col items-center justify-center font-black shadow-lg transition btn-3d">
                    <span class="text-2xl">${node.icon}</span>
                    <span class="text-[11px] font-black tracking-wide">${escapeHtml(node.code)}</span>
                  </button>
                  <span class="text-xs font-black text-slate-700 mt-1.5 text-center">${escapeHtml(node.label)}</span>
                  <span class="text-[10px] font-bold text-slate-400">${node.questions.length} Qs</span>
                </div>
              `;
            })
            .join('');

          return `
            <div class="space-y-4">
              <div class="bg-gradient-to-b ${meta.bgGradient} rounded-3xl p-4 text-white shadow-md border-b-4 ${meta.borderBottom}">
                <div class="flex justify-between items-start gap-2">
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <span class="text-[10px] font-black uppercase tracking-wider bg-black/20 px-2.5 py-0.5 rounded-full">Unit ${escapeHtml(majorKey)}</span>
                      <span class="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">${totalQuestions} Qs</span>
                    </div>
                    <h2 class="text-lg font-black mt-1">${escapeHtml(meta.title)}</h2>
                    <p class="text-xs text-white/90 font-bold">${escapeHtml(meta.subtitle)}</p>
                  </div>
                  <div class="flex flex-col items-end space-y-2 shrink-0">
                    <div class="text-3xl leading-none">${meta.icon}</div>
                    <button data-unit-key="${escapeHtml(majorKey)}" class="unit-practice-btn text-[10px] font-black uppercase tracking-wider bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-xl transition">
                      Practice Unit
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-center space-y-5 py-2">
                ${stonesHtml}
              </div>
            </div>
          `;
        })
        .join('');
    },

    renderSpanishFilters() {
      if (!DOM.spanishFilterRow) return;
      const availableTags = ['all', ...Array.from(DataStore.phrasesByTag.keys())];

      // Sort tags using SPANISH_TAG_META order, unknown tags alphabetically at the end
      availableTags.sort((a, b) => {
        const orderA = SPANISH_TAG_META[a] ? SPANISH_TAG_META[a].order : 99;
        const orderB = SPANISH_TAG_META[b] ? SPANISH_TAG_META[b].order : 99;
        if (orderA !== orderB) return orderA - orderB;
        return a.localeCompare(b);
      });

      if (!availableTags.includes(this.activeSpanishFilter)) {
        this.activeSpanishFilter = 'all';
      }

      DOM.spanishFilterRow.innerHTML = availableTags
        .map((tag) => {
          const count =
            tag === 'all' ? DataStore.phrases.length : (DataStore.phrasesByTag.get(tag) || []).length;
          const baseLabel = SPANISH_TAG_META[tag] ? SPANISH_TAG_META[tag].label : tag.toUpperCase();
          const isActive = tag === this.activeSpanishFilter;
          const cls = isActive
            ? 'span-filter-pill shrink-0 px-3 py-1.5 rounded-xl text-xs font-black bg-[#1CB0F6] text-white'
            : 'span-filter-pill shrink-0 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200';
          return `<button data-tag="${escapeHtml(tag)}" class="${cls}">${escapeHtml(baseLabel)} (${count})</button>`;
        })
        .join('');
    },

    renderSpanishCards(filter = this.activeSpanishFilter) {
      this.activeSpanishFilter = filter || 'all';
      this.renderSpanishFilters();

      if (!DOM.spanishCardsList) return;
      const items =
        this.activeSpanishFilter === 'all'
          ? DataStore.phrases
          : DataStore.phrasesByTag.get(this.activeSpanishFilter) || [];

      DOM.spanishCardsList.innerHTML = items
        .map((item) => {
          const tagLabel = SPANISH_TAG_META[item.tag] ? SPANISH_TAG_META[item.tag].label : item.tag.toUpperCase();
          return `
            <div class="bg-white rounded-2xl p-3.5 border-2 border-slate-200 flex items-center justify-between shadow-sm hover:border-[#1CB0F6] transition">
              <div class="flex-1 pr-2">
                <span class="inline-block text-[9px] font-black uppercase tracking-wider text-[#1899D6] bg-[#EBF7FF] px-2 py-0.5 rounded-md mb-1">${escapeHtml(tagLabel)}</span>
                <h4 class="text-xs font-black text-slate-800">${escapeHtml(item.es)}</h4>
                <p class="text-[11px] font-bold text-slate-500 mt-0.5">${escapeHtml(item.en)}</p>
              </div>
              <button data-phrase-idx="${item.originalIndex}" aria-label="Play Spanish pronunciation" class="spanish-speak-btn w-10 h-10 rounded-2xl bg-[#EBF7FF] border-2 border-b-4 border-[#84D8FF] text-[#1CB0F6] flex items-center justify-center text-sm btn-3d shrink-0">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
          `;
        })
        .join('');
    },

    renderMistakes() {
      if (!DOM.mistakesContainer) return;
      const missed = DataStore.questions.filter((q) => State.mistakesSet.has(q.id));

      if (missed.length === 0) {
        DOM.mistakesContainer.innerHTML = `
          <div class="bg-white rounded-3xl p-6 border-2 border-slate-200 text-center space-y-2">
            <span class="text-4xl">🛡️</span>
            <h3 class="text-sm font-black text-slate-800">Zero Mistakes, Kaylove! 💖</h3>
            <p class="text-xs font-bold text-slate-500">You have cleared every single missed question. I’m so proud of you my love! 🥹</p>
          </div>
        `;
        return;
      }

      DOM.mistakesContainer.innerHTML =
        `
          <button id="btnPracticeMistakes" class="w-full py-3 rounded-2xl text-white font-black text-xs uppercase tracking-wider btn-3d bg-[#FF4B4B] border-b-4 border-[#EA2B2B] shadow-sm mb-3">
            Practice ${missed.length} Missed Question${missed.length > 1 ? 's' : ''} Now
          </button>
        ` +
        missed
          .map(
            (q) => `
            <div class="bg-white rounded-2xl p-3.5 border-2 border-slate-200 space-y-1">
              <span class="text-[9px] font-black uppercase tracking-wider text-[#EA2B2B] bg-[#FFDFE0] px-2 py-0.5 rounded-md">${escapeHtml(q._nodeCode)} • ${escapeHtml(q.category)}</span>
              <h4 class="text-xs font-black text-slate-800 mt-1">${escapeHtml(q.prompt)}</h4>
              <p class="text-[11px] font-bold text-[#46A302] bg-[#D7FFB8]/50 p-2 rounded-xl mt-1">
                <span class="font-black">Correct:</span> ${escapeHtml(q.options[q.correct])}
              </p>
            </div>
          `
          )
          .join('');
    },

    renderTrophyModal() {
      if (!DOM.trophyListContainer) return;
      DOM.trophyListContainer.innerHTML = BADGES.map((b) => {
        const unlocked = State.unlockedBadgesSet.has(b.id);
        return `
          <div class="p-3 rounded-2xl border-2 ${unlocked ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200 opacity-60'} flex items-start space-x-3">
            <div class="text-2xl">${unlocked ? b.icon : '🔒'}</div>
            <div>
              <h4 class="text-xs font-black text-slate-800">${escapeHtml(b.title)}</h4>
              <p class="text-[11px] font-bold text-slate-600 mt-0.5">${escapeHtml(unlocked ? b.note : 'Keep studying to unlock this love note!')}</p>
            </div>
          </div>
        `;
      }).join('');
    },

    switchTab(tabKey) {
      QuizEngine.activeTab = tabKey;
      ['roadmap', 'quiz', 'spanish', 'mistakes'].forEach((k) => {
        const view = DOM.tabs[k];
        const nav = DOM.navs[k];
        if (!view || !nav) return;

        if (k === tabKey) {
          view.classList.remove('hidden');
          nav.className = 'nav-item flex flex-col items-center justify-center py-1 rounded-xl text-[#58CC02] font-black transition';
        } else {
          view.classList.add('hidden');
          nav.className = 'nav-item flex flex-col items-center justify-center py-1 rounded-xl text-slate-400 font-bold hover:text-slate-600 transition';
        }
      });

      if (tabKey === 'roadmap') this.renderRoadmap();
      if (tabKey === 'spanish') this.renderSpanishCards(this.activeSpanishFilter);
      if (tabKey === 'mistakes') this.renderMistakes();
      if (tabKey === 'quiz' && QuizEngine.activeDeck.length === 0) {
        QuizEngine.startNodeQuiz('1.1');
        return;
      }

      if (typeof global.scrollTo === 'function') {
        global.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // =========================================================
  // 9. EVENT WIRING & INITIALIZATION
  // =========================================================
  function bindEvents() {
    document.body.addEventListener('click', (e) => {
      const nodeBtn = e.target.closest('.roadmap-node-btn');
      if (nodeBtn) {
        QuizEngine.startNodeQuiz(nodeBtn.dataset.nodeCode);
        return;
      }

      const unitBtn = e.target.closest('.unit-practice-btn');
      if (unitBtn) {
        QuizEngine.startUnitQuiz(unitBtn.dataset.unitKey);
        return;
      }

      const choiceBtn = e.target.closest('.quiz-choice-btn');
      if (choiceBtn) {
        QuizEngine.selectChoice(Number(choiceBtn.dataset.choiceIdx));
        return;
      }

      const speakBtn = e.target.closest('.spanish-speak-btn');
      if (speakBtn) {
        const idx = Number(speakBtn.dataset.phraseIdx);
        const item = (global.SPANISH_CLINIC_PHRASES || [])[idx];
        if (item) Audio.speakSpanish(item.es);
        return;
      }

      const filterBtn = e.target.closest('.span-filter-pill');
      if (filterBtn) {
        UI.renderSpanishCards(filterBtn.dataset.tag);
        return;
      }

      const navBtn = e.target.closest('.nav-item');
      if (navBtn) {
        UI.switchTab(navBtn.dataset.tab);
        return;
      }

      if (e.target.closest('#btnPracticeMistakes')) {
        QuizEngine.startMistakesQuiz();
      }
    });

    if (DOM.btnCheckAnswer) {
      DOM.btnCheckAnswer.addEventListener('click', () => QuizEngine.handleCheckOrNext());
    }
    if (DOM.btnDrawerContinue) {
      DOM.btnDrawerContinue.addEventListener('click', () => QuizEngine.advanceNext());
    }
    if (DOM.btnExitQuiz) {
      DOM.btnExitQuiz.addEventListener('click', () => UI.switchTab('roadmap'));
    }
    if (DOM.qVoiceBtn) {
      DOM.qVoiceBtn.addEventListener('click', () => {
        const q = QuizEngine.activeDeck[QuizEngine.currentIndex];
        if (q && q.audioText) Audio.speakSpanish(q.audioText);
      });
    }

    if (DOM.btnOpenTrophies && DOM.trophyModal) {
      DOM.btnOpenTrophies.addEventListener('click', () => {
        UI.renderTrophyModal();
        DOM.trophyModal.classList.remove('hidden');
      });
    }
    if (DOM.btnCloseTrophies && DOM.trophyModal) {
      DOM.btnCloseTrophies.addEventListener('click', () => {
        DOM.trophyModal.classList.add('hidden');
      });
    }
    if (DOM.trophyModal) {
      DOM.trophyModal.addEventListener('click', (e) => {
        if (e.target === DOM.trophyModal) DOM.trophyModal.classList.add('hidden');
      });
    }

    global.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.trophyModal && !DOM.trophyModal.classList.contains('hidden')) {
        DOM.trophyModal.classList.add('hidden');
        return;
      }

      if (QuizEngine.activeTab !== 'quiz') return;
      if (DOM.trophyModal && !DOM.trophyModal.classList.contains('hidden')) return;

      const key = e.key.toLowerCase();
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, a: 0, b: 1, c: 2, d: 3 };
      if (key in keyMap) {
        QuizEngine.selectChoice(keyMap[key]);
      } else if (e.key === 'Enter' && QuizEngine.selectedOptionIndex !== null) {
        e.preventDefault();
        QuizEngine.handleCheckOrNext();
      }
    });
  }

  function refreshData() {
    DataStore.buildIndex();
    if (DOM.dynamicRoadmapContainer) {
      UI.renderRoadmap();
      UI.renderSpanishCards(UI.activeSpanishFilter);
      if (QuizEngine.activeTab === 'mistakes') UI.renderMistakes();
    }
  }

  function initApp() {
    cacheDom();
    DataStore.buildIndex();
    State.load();
    Audio.init();
    UI.updateTopBar();
    UI.renderRoadmap();
    UI.renderSpanishCards('all');
    bindEvents();
  }

  global.DuoPA = {
    CONFIG: { UNIT_METADATA, TOPIC_MAP, SPANISH_TAG_META, BADGES },
    DataStore,
    State,
    Audio,
    QuizEngine,
    UI,
    refreshData,
    init: initApp
  };

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  }
})(window);

