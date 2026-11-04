// ==========================================
// SPANISH CLINIC AUDIO FLASHCARDS
// ==========================================
window.SPANISH_CLINIC_PHRASES = [
  { es: '¿Dónde le duele exactamente?', en: 'Where does it hurt exactly?', tag: 'hpi' },
  { es: '¿El dolor es punzante, sordo o como ardor?', en: 'Is the pain sharp, dull, or burning?', tag: 'hpi' },
  { es: '¿Desde cuándo tiene este problema?', en: 'How long have you had this problem?', tag: 'hpi' },
  { es: '¿El dolor se corre hacia el brazo o la espalda?', en: 'Does the pain radiate to your arm or back?', tag: 'hpi' },
  { es: 'En una escala del uno al diez, ¿cuánto le duele?', en: 'On a scale from 1 to 10, how bad is the pain?', tag: 'hpi' },
  { es: 'Respire hondo por la boca, por favor.', en: 'Take a deep breath through your mouth, please.', tag: 'exam' },
  { es: 'Doble la rodilla derecha y empuje.', en: 'Bend your right knee and push.', tag: 'exam' },
  { es: 'Abra la boca y diga "ah".', en: 'Open your mouth and say "ah".', tag: 'exam' },
  { es: 'Voy a presionar su estómago; dígame si le duele.', en: 'I am going to press your abdomen; tell me if it hurts.', tag: 'exam' },
  { es: '¿Toma alguna medicina para la presión alta?', en: 'Do you take any medication for high blood pressure?', tag: 'meds' },
  { es: '¿Es alérgico a la penicilina o a otros medicamentos?', en: 'Are you allergic to penicillin or other medicines?', tag: 'meds' },
  { es: '¿Fuma o toma bebidas alcohólicas?', en: 'Do you smoke or drink alcoholic beverages?', tag: 'meds' }
];

// ==========================================
// EXPANDED HIGH-YIELD PA QUESTION BANK
// ==========================================
window.EXPANDED_QUESTION_BANK = [
  // --- UNIT 1: FOUNDATIONS ---
  { id: 'anat_1', topic: 'anat', unit: 'phase1', category: 'Gross Anatomy', prompt: 'Identify the primary distal insertion point of the biceps brachii muscle shown in the diagram.', imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Biceps_brachii.png?width=400', options: ['Radial tuberosity and bicipital aponeurosis', 'Olecranon process of the ulna', 'Coracoid process of the scapula', 'Ulnar tuberosity'], correct: 0, pearl: 'The biceps brachii inserts distally onto the radial tuberosity and the bicipital aponeurosis, making it both a primary elbow flexor and a powerful supinator.' },
  { id: 'anat_2', topic: 'anat', unit: 'phase1', category: 'Gross Anatomy', prompt: 'Which bony landmark serves as the superior insertion point for the sternocleidomastoid muscle?', imageUrl: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gray_-_musculus_sternocleidomastoideus.png?width=400', options: ['Mastoid process of the temporal bone', 'Occipital protuberance', 'Manubrium of the sternum', 'Medial third of the clavicle'], correct: 0, pearl: 'The sternocleidomastoid originates on the sternum and clavicle and inserts superiorly onto the mastoid process of the temporal bone and the superior nuchal line.' },
  { id: 'u1_1', topic: 'bates_cmdt', unit: 'phase1', category: 'Physical Examination', prompt: 'According to established physical exam protocols, which sequence is the correct standard approach for examining the abdomen?', options: ['Inspection, Palpation, Percussion, Auscultation', 'Inspection, Auscultation, Percussion, Palpation', 'Auscultation, Inspection, Palpation, Percussion', 'Palpation, Percussion, Auscultation, Inspection'], correct: 1, pearl: 'Auscultation must precede percussion and palpation so bowel sounds are not artificially altered.' },
  { id: 'u1_2', topic: 'bates_cmdt', unit: 'phase1', category: 'Cardiology', prompt: 'Which of the following is considered the first-line pharmacological treatment for an uncomplicated patient newly diagnosed with primary hypertension?', options: ['Beta-blockers', 'Alpha-blockers', 'Thiazide diuretics or ACE inhibitors', 'Loop diuretics'], correct: 2, pearl: 'CMDT guidelines generally recommend ACE inhibitors, ARBs, CCBs, or thiazide diuretics as initial monotherapy.' },
  
  // --- UNIT 2: PHYSIOLOGY ---
  { id: 'phys_1', topic: 'cardio_phys', unit: 'phase2', category: 'Physiology & ECG', prompt: 'On a standard 12-lead ECG, what electrical event in the heart corresponds to the P wave?', options: ['Ventricular depolarization', 'Atrial depolarization', 'Ventricular repolarization', 'AV nodal delay'], correct: 1, pearl: 'The P wave represents atrial depolarization spreading from the SA node through the atria.' },
  { id: 'ren_1', topic: 'renal_abg', unit: 'phase2', category: 'Renal Physiology', prompt: 'In which segment of the renal nephron is the majority (65-70%) of filtered sodium and water reabsorbed?', options: ['Distal convoluted tubule', 'Loop of Henle', 'Proximal convoluted tubule', 'Cortical collecting duct'], correct: 2, pearl: 'The proximal convoluted tubule is the workhorse of the nephron, reabsorbing the bulk of filtered sodium, water, bicarbonate, and 100% of glucose.' },
  
  // --- UNIT 3: PHARM & SOAP ---
  { id: 'pharm_1', topic: 'pharm', unit: 'phase3', category: 'Pharmacology', prompt: 'A medication ending in the suffix "-pril" (e.g., Lisinopril, Enalapril) belongs to which drug class?', options: ['Beta-blockers', 'Calcium channel blockers', 'ACE inhibitors', 'Angiotensin receptor blockers (ARBs)'], correct: 2, pearl: 'The suffix "-pril" identifies ACE inhibitors, which prevent the conversion of angiotensin I to angiotensin II.' },
  { id: 'soap_1', topic: 'soap', unit: 'phase3', category: 'Clinical Skills', prompt: 'In a standard SOAP note, where would a patient's reported symptoms and chief complaint be documented?', options: ['Subjective', 'Objective', 'Assessment', 'Plan'], correct: 0, pearl: 'The Subjective section contains the historical information the patient tells you (Chief Complaint, HPI, ROS).' },
  
  // --- UNIT 4: ADMIN ---
  { id: 'admin_1', topic: 'admin', unit: 'phase4', category: 'UArizona Policy', prompt: 'What is the strict minimum passing threshold for didactic courses in the UArizona PA program?', options: ['69.5% (rounded to 70%)', '70.0% (no rounding allowed)', '75.0%', '80.0%'], correct: 1, pearl: 'UArizona maintains a strict 70.0% threshold to pass. A 69.9% will not be rounded up and results in a course failure.' },

  // ==========================================
  // DYNAMIC EXPANSION MODULES (NEW NODES 5.X & 6.X)
  // ==========================================
  
  // --- MODULE 5.1: CARDIAC ---
  { id: 'cardio_new_1', topic: '5.1', unit: 'phase5', category: 'Cardiovascular Med', prompt: 'A 64-year-old with crushing substernal chest pain has ST-segment elevation in leads II, III, and aVF. Which coronary artery is most commonly responsible?', options: ['Left anterior descending artery', 'Right coronary artery', 'Left circumflex artery', 'Left main coronary artery'], correct: 1, pearl: 'Inferior STEMI is classically associated with right coronary artery occlusion.' },
  { id: 'cardio_new_2', topic: '5.1', unit: 'phase5', category: 'Cardiovascular Med', prompt: 'A patient with atrial fibrillation has an irregularly irregular pulse and no distinct P waves. Which complication is the major reason to consider anticoagulation?', options: ['Systemic thromboembolism (ischemic stroke)', 'Complete heart block', 'Aortic dissection', 'Ventricular septal rupture'], correct: 0, pearl: 'Atrial fibrillation promotes left atrial appendage thrombus formation and embolic stroke.' },
  
  // --- MODULE 5.2: PULMONARY ---
  { id: 'pulm_new_1', topic: '5.2', unit: 'phase5', category: 'Pulmonology', prompt: 'A patient with COPD has increased dyspnea, increased sputum volume, and increased sputum purulence. Which diagnosis best describes this presentation?', options: ['Acute COPD exacerbation', 'Spontaneous pneumothorax', 'Pulmonary fibrosis', 'Stable chronic bronchitis'], correct: 0, pearl: 'An acute worsening of respiratory symptoms beyond usual day-to-day variation is consistent with a COPD exacerbation.' },
  { id: 'pulm_new_2', topic: '5.2', unit: 'phase5', category: 'Pulmonology', prompt: 'A tall, thin 22-year-old develops sudden unilateral pleuritic chest pain and dyspnea. Breath sounds are decreased on the affected side. What is the most likely diagnosis?', options: ['Pleural effusion', 'Primary spontaneous pneumothorax', 'Lobar pneumonia', 'Acute bronchitis'], correct: 1, pearl: 'Primary spontaneous pneumothorax classically occurs in healthy young adults and presents with sudden pleuritic pain and decreased breath sounds.' },
  
  // --- MODULE 5.3: GASTROENTEROLOGY ---
  { id: 'gi_new_1', topic: '5.3', unit: 'phase5', category: 'Gastroenterology', prompt: 'A patient has right upper quadrant pain after a fatty meal, fever, and a positive Murphy sign. What is the most likely diagnosis?', options: ['Acute cholecystitis', 'Acute appendicitis', 'Diverticulitis', 'Acute pancreatitis'], correct: 0, pearl: 'Acute cholecystitis typically presents with persistent right upper quadrant pain, fever, and a positive clinical Murphy sign.' },
  
  // --- MODULE 5.4: ENDOCRINOLOGY ---
  { id: 'endo_new_1', topic: '5.4', unit: 'phase5', category: 'Endocrinology', prompt: 'A patient with diabetes presents with abdominal pain, vomiting, dehydration, elevated anion-gap metabolic acidosis, and serum ketones. Which diagnosis is most likely?', options: ['Diabetic ketoacidosis', 'Hyperosmolar hyperglycemic state without ketosis', 'Hypoglycemia', 'Diabetes insipidus'], correct: 0, pearl: 'DKA features ketonemia and metabolic acidosis with hyperglycemia. Management includes fluid resuscitation and insulin.' },

  // --- MODULE 6.1: PEDIATRICS ---
  { id: 'peds_new_1', topic: '6.1', unit: 'phase6', category: 'Pediatrics', prompt: 'A 2-year-old has a barking cough, hoarseness, and inspiratory stridor that worsens at night. Which diagnosis is most likely?', options: ['Croup', 'Epiglottitis', 'Bronchiolitis', 'Foreign-body aspiration'], correct: 0, pearl: 'Croup is usually caused by a viral infection and produces barking cough, hoarseness, and inspiratory stridor from upper-airway inflammation.' },
  
  // --- MODULE 6.2: OB/GYN ---
  { id: 'obgyn_new_1', topic: '6.2', unit: 'phase6', category: 'OB/GYN', prompt: 'A pregnant patient at 30 weeks has painless, bright-red vaginal bleeding. Which diagnosis should be considered?', options: ['Placenta previa', 'Placental abruption', 'Ectopic pregnancy', 'Endometriosis'], correct: 0, pearl: 'Placenta previa classically causes painless third-trimester bleeding.' },
  { id: 'obgyn_new_2', topic: '6.2', unit: 'phase6', category: 'OB/GYN', prompt: 'A patient at 34 weeks has blood pressure 168/112 mmHg, headache, and proteinuria. Which diagnosis is most concerning?', options: ['Preeclampsia with severe features', 'Gestational diabetes', 'Placenta previa', 'Hyperemesis gravidarum'], correct: 0, pearl: 'Severe-range blood pressure and neurologic symptoms in pregnancy raise concern for preeclampsia with severe features.' }
];
