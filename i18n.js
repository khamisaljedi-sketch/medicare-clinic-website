/* ============================================================
   i18n.js — Complete Bilingual EN / AR
   ALL text on every page is translated
   ============================================================ */

const TRANSLATIONS = {

  /* ── NAV ── */
  nav_logo_title: { en:'Consultant Plastic & Reconstructive Surgeon', ar:'استشاري جراحة التجميل والترميم' },
  nav_home:       { en:'Home',             ar:'الرئيسية' },
  nav_about:      { en:'About',            ar:'عنّي' },
  nav_clinical:   { en:'Clinical Practice',ar:'الممارسة السريرية' },
  nav_global:     { en:'Global Health',    ar:'الصحة العالمية' },
  nav_legacy:     { en:'Legacy',           ar:'الإرث' },
  nav_contact:    { en:'Contact',          ar:'تواصل معي' },

  /* ── HOME ── */
  home_eyebrow:      { en:'Consultant Plastic & Reconstructive Surgeon', ar:'استشاري جراحة التجميل والترميم' },
  home_badge_loc:    { en:'Hull · United Kingdom', ar:'هال · المملكة المتحدة' },
  home_hero_body:    { en:"I'm a plastic and reconstructive surgeon at Hull University Teaching Hospitals. Complex reconstruction, microsurgery, skin cancer — that's where most of my work sits.", ar:'أعمل جراح تجميل وترميم في مستشفيات جامعة هال التعليمية. الترميم المعقد، الجراحة المجهرية، سرطان الجلد — هذا هو محور عملي.' },
  btn_clinical:      { en:'Clinical Practice', ar:'الممارسة السريرية' },
  btn_touch:         { en:'Get in Touch',      ar:'تواصل معي' },
  btn_more_about:    { en:'More About Me',     ar:'المزيد عنّي' },
  btn_book:          { en:'Book a Consultation', ar:'احجز استشارة' },
  btn_read_more:     { en:'Read more →',       ar:'← اقرأ المزيد' },
  btn_learn_more:    { en:'Learn more →',      ar:'← اعرف أكثر' },
  btn_send:          { en:'Send message →',    ar:'← إرسال الرسالة' },
  btn_global:        { en:'Global Health Work →', ar:'← أعمالي الدولية' },
  btn_about:         { en:'Full Profile',      ar:'السيرة الكاملة' },

  stat1_label: { en:'Current post',     ar:'المنصب الحالي' },
  stat1_value: { en:'Consultant Surgeon', ar:'استشاري جراح' },
  stat1_sub:   { en:'Hull University Teaching Hospitals NHS Trust', ar:'مستشفيات جامعة هال التعليمية' },
  stat2_label: { en:'Qualifications',   ar:'المؤهلات' },
  stat2_sub:   { en:'MBChB, ABHS(Plast), FRCS(Eng) ad eundem', ar:'MBChB · ABHS(Plast) · FRCS(Eng) ad eundem' },
  stat3_label: { en:'Fellowship training', ar:'التدريب المتقدم' },
  stat3_value: { en:"Guy's & St Thomas'", ar:"غايز وسانت توماس" },
  stat3_sub:   { en:'Advanced Microsurgery · London', ar:'الجراحة المجهرية المتقدمة · لندن' },
  stat4_label: { en:'Also at',          ar:'أيضاً في' },
  stat4_value: { en:'Lake Clinic',      ar:'عيادة ليك' },
  stat4_sub:   { en:'Doncaster, UK · Private Practice', ar:'دونكاستر · عيادة خاصة' },

  home_about_eyebrow: { en:'A bit about me', ar:'نبذة عنّي' },
  home_about_title:   { en:'I take the time to actually sit and talk with you', ar:'أخصص الوقت الكافي للجلوس والحديث معك' },
  home_about_p1:      { en:"Most patients who come to see me have already been through quite a bit — a diagnosis, some uncertainty, maybe months of waiting. By the time they reach my clinic, the last thing they need is someone who rushes through the appointment and hands them a leaflet.", ar:'معظم المرضى الذين يأتون إليّ مرّوا بالكثير — تشخيص، قلق، ربما أشهراً من الانتظار. آخر ما يحتاجونه هو طبيب يتعجّل الموعد ويسلّمهم ورقة إرشادات.' },
  home_about_p2:      { en:"So I don't do that. I sit down, I ask questions, and I listen. Then we talk honestly about what the options are — and what I think makes sense for you specifically, not in general.", ar:'لذلك أنا لا أفعل ذلك. أجلس، أسأل، وأستمع. ثم نتحدث بصدق عن الخيارات — وما أراه منطقياً لحالتك أنت تحديداً.' },

  home_band_eyebrow: { en:'For patients', ar:'لمرضاي' },
  home_band_title:   { en:'You searched for me and ended up reading about a war.', ar:'بحثت عنّي فوجدت أخبار الحرب.' },
  home_band_em:      { en:' This site exists so you can find out about my work instead.', ar:' هذا الموقع موجود لتعرف عن عملي الطبي بدلاً من ذلك.' },
  home_band_p:       { en:"This website is here so that patients looking for a plastic surgeon can find out what I actually do, how I work, and whether I might be the right person to help them.", ar:'أنشأت هذا الموقع لكي يتمكن المرضى من معرفة ما أفعله حقاً، وكيف أعمل، وما إذا كنت الشخص المناسب لمساعدتهم.' },

  areas_eyebrow: { en:'What I do',         ar:'ما أفعله' },
  areas_title:   { en:'Areas of Practice', ar:'مجالات الممارسة' },
  card1_title:   { en:'Reconstructive Surgery', ar:'جراحة الترميم' },
  card1_text:    { en:'Limb reconstruction, breast reconstruction, complex wounds and bone/joint infections — cases that need careful planning and sometimes microsurgery.', ar:'ترميم الأطراف، ترميم الثدي، الجروح المعقدة والتهابات العظام والمفاصل — حالات تتطلب تخطيطاً دقيقاً وأحياناً جراحة مجهرية.' },
  card2_title:   { en:'Skin Cancer Surgery', ar:'جراحة سرطان الجلد' },
  card2_text:    { en:'Getting the margins right, then reconstructing well. Every case gets proper review within a multidisciplinary team before any plan is made.', ar:'استئصال كامل أولاً، ثم ترميم جيد. كل حالة تُراجع ضمن فريق متعدد التخصصات قبل أي قرار.' },
  card3_title:   { en:'Global Health', ar:'الصحة العالمية' },
  card3_text:    { en:"Founder & Director of the Global MedReach Initiative. Working in conflict settings including Gaza — not to operate and leave, but to build something that stays.", ar:'مؤسس ومدير مبادرة Global MedReach. عملت في مناطق النزاع بما فيها غزة — ليس للعمل والمغادرة، بل لبناء شيء يدوم.' },

  where_eyebrow: { en:'Where I work',     ar:'أماكن عملي' },
  where_title:   { en:'Current Practice', ar:'الممارسة الحالية' },
  hosp1_role:    { en:'Consultant Plastic & Reconstructive Surgeon', ar:'استشاري جراحة التجميل والترميم' },
  hosp1_detail:  { en:'Major trauma centre and regional breast care centre. Elective and emergency plastic surgery — breast reconstruction, lower limb reconstruction, skin cancer, hand surgery, and reconstructive microsurgery.', ar:'مركز صدمات رئيسي ومركز رعاية الثدي الإقليمي. جراحة تجميلية اختيارية وطارئة — ترميم الثدي، ترميم الطرف السفلي، سرطان الجلد، جراحة اليد، والجراحة المجهرية الترميمية.' },
  hosp2_role:    { en:'Consultant Plastic Surgeon · Private Practice', ar:'استشاري جراح تجميل · عيادة خاصة' },
  hosp2_detail:  { en:'Private consultations and procedures in Doncaster, UK. Reconstructive and aesthetic plastic surgery.', ar:'استشارات وإجراءات خاصة في دونكاستر، المملكة المتحدة. جراحة ترميمية وتجميلية.' },

  /* ── ABOUT ── */
  about_ph_eyebrow: { en:'Who I am',   ar:'من أنا' },
  about_ph_title:   { en:'About me',   ar:'عنّي' },
  about_eyebrow:    { en:'Full profile', ar:'السيرة الكاملة' },
  about_title:      { en:'Ahmed Mokhallalati', ar:'أحمد المخللاتي' },
  about_p1: { en:'Ahmed Mokhallalati is a Consultant Plastic and Reconstructive Surgeon specialising in microsurgical breast reconstruction, complex limb reconstruction, hand surgery, and trauma reconstruction. He currently practises at Hull University Teaching Hospitals NHS Trust.', ar:'أحمد المخللاتي استشاري جراحة التجميل والترميم، متخصص في ترميم الثدي المجهري، ترميم الأطراف المعقد، جراحة اليد، وترميم إصابات الصدمات. يعمل حالياً في مستشفيات جامعة هال التعليمية.' },
  about_p2: { en:'His practice includes breast reconstruction, lower limb reconstruction, skin cancer reconstruction, hand surgery, and reconstructive microsurgery.', ar:'تشمل ممارسته ترميم الثدي، ترميم الطرف السفلي، ترميم سرطان الجلد، جراحة اليد، والجراحة المجهرية الترميمية.' },
  about_p3: { en:"He completed advanced microsurgical fellowship training in London at Guy's and St Thomas' NHS Foundation Trust, and collaborated with specialist reconstructive teams including King's College Hospital NHS Foundation Trust.", ar:"أتم تدريبه المتقدم في الجراحة المجهرية في لندن بمستشفى غايز وسانت توماس، وتعاون مع فرق ترميمية متخصصة في مراكز كبرى منها مستشفى كينغز كوليدج." },
  about_p4: { en:'Alongside his NHS work, he has extensive experience delivering reconstructive surgery in conflict settings including Gaza — managing severe trauma, burns, blast injuries, and complex soft tissue reconstruction.', ar:'إلى جانب عمله في الـ NHS، لديه خبرة واسعة في تقديم جراحة الترميم في مناطق النزاع بما في ذلك غزة — إدارة الصدمات الشديدة والحروق وإصابات الانفجارات.' },

  training_eyebrow: { en:'Training & Fellowship', ar:'التدريب والزمالة' },
  training_title:   { en:'Where I trained',        ar:'أين تدربت' },
  t1_title: { en:'Advanced Microsurgery Fellowship', ar:'زمالة الجراحة المجهرية المتقدمة' },
  t1_text:  { en:"Guy's and St Thomas' NHS Foundation Trust, London. Complex microsurgical reconstruction, limb salvage, trauma reconstruction, and breast reconstruction.", ar:'مستشفى غايز وسانت توماس، لندن. الترميم المجهري المعقد، إنقاذ الأطراف، ترميم الصدمات، وترميم الثدي.' },
  t2_title: { en:'Tertiary Centre Collaboration', ar:'التعاون مع المراكز التخصصية' },
  t2_text:  { en:"King's College Hospital NHS Foundation Trust. Specialist reconstructive teams across major tertiary centres in London.", ar:'مستشفى كينغز كوليدج. فرق ترميم متخصصة في كبرى المراكز الطبية في لندن.' },
  t3_title: { en:'Conflict Surgery', ar:'جراحة مناطق النزاع' },
  t3_text:  { en:'Consultant-level surgical leadership in Gaza. Management of severe trauma, burns, blast injuries, and complex soft tissue reconstruction.', ar:'قيادة جراحية استشارية في غزة. إدارة الصدمات الشديدة، الحروق، إصابات الانفجارات، والترميم المعقد.' },
  t4_title: { en:'Invited Speaker & Educator', ar:'متحدث مدعو ومعلّم' },
  t4_text:  { en:'Regular invited speaker at national and international meetings on breast reconstruction, limb reconstruction, microsurgery, and surgical care in conflict settings.', ar:'متحدث مدعو بانتظام في مؤتمرات وطنية ودولية حول ترميم الثدي، ترميم الأطراف، الجراحة المجهرية.' },

  quote_about: { en:'"I tell patients what I genuinely think — including when I think surgery isn\'t the right answer. That\'s not being unhelpful. That\'s the job."', ar:'"أخبر المرضى برأيي الحقيقي — بما في ذلك حين أرى أن الجراحة ليست الحل الصحيح. هذا ليس تقصيراً. هذا هو العمل."' },

  gmr_eyebrow: { en:'Initiative', ar:'المبادرة' },
  gmr_title:   { en:'Global MedReach Initiative', ar:'مبادرة Global MedReach' },
  gmr_p1: { en:"Ahmed is the Founder and Director of the Global MedReach Initiative — focused on strengthening surgical care in conflict-affected and resource-limited settings through training, governance, and international collaboration.", ar:'أحمد هو مؤسس ومدير مبادرة Global MedReach — برنامج يركز على تعزيز الرعاية الجراحية في مناطق النزاع من خلال التدريب والحوكمة والتعاون الدولي.' },
  gmr_p2: { en:'He is actively involved in surgical education, research, and international collaboration in reconstructive surgery and humanitarian surgical care.', ar:'يشارك بفاعلية في التعليم الجراحي والبحث والتعاون الدولي في جراحة الترميم والرعاية الجراحية الإنسانية.' },

  /* ── CLINICAL ── */
  clin_ph_eyebrow: { en:'What I treat',      ar:'ما أعالجه' },
  clin_ph_title:   { en:'Clinical Practice', ar:'الممارسة السريرية' },
  clin_intro:      { en:"Plastic surgery covers more ground than most people realise. Below is a real description of the work I do — not a marketing summary. If you're not sure whether your situation fits, just get in touch and ask.", ar:'تغطي جراحة التجميل مجالاً أوسع مما يتصور كثيرون. فيما يلي وصف حقيقي لعملي. إن لم تكن متأكداً من انطباق حالتك، فقط تواصل معي.' },

  sec1_eyebrow: { en:'Reconstructive Surgery', ar:'جراحة الترميم' },
  sec1_title:   { en:'Trauma & Limb Reconstruction', ar:'ترميم الصدمات والأطراف' },
  sec1_p1: { en:"These are often the most demanding cases — patients who've had a serious injury, a failed previous operation, or a wound that's been going on for months. When standard approaches don't work, microsurgery gives us options that didn't exist a generation ago.", ar:'هذه غالباً الحالات الأكثر تحدياً — مرضى تعرّضوا لإصابة خطيرة أو عملية سابقة فاشلة. حين لا تنجح الأساليب التقليدية، تتيح الجراحة المجهرية خيارات لم تكن موجودة قبل جيل.' },
  sec1_p2: { en:'I also work with orthopaedic colleagues on complex bone and joint infections — cases that need both specialties working together to go well.', ar:'أعمل أيضاً مع زملائي في جراحة العظام على حالات التهابات العظام والمفاصل المعقدة.' },

  sec2_eyebrow: { en:'Breast Surgery', ar:'جراحة الثدي' },
  sec2_title:   { en:'Breast Reconstruction & Aesthetic Surgery', ar:'ترميم الثدي والجراحة التجميلية' },
  sec2_p1: { en:"For women who've had or are planning a mastectomy, reconstruction is a deeply personal decision. I offer implant-based reconstruction and reconstruction using your own tissue. I take time to go through the options properly.", ar:'بالنسبة للنساء اللواتي خضعن لاستئصال الثدي، يُعدّ الترميم قراراً شخصياً عميقاً. أقدم ترميماً بالغرسات وترميماً بالنسيج الذاتي.' },
  sec2_p2: { en:'I also do aesthetic breast surgery — augmentation, reduction, and uplift. The same principles apply: honest conversation first.', ar:'أجري أيضاً جراحة الثدي التجميلية — تكبير، تصغير، ورفع. نفس المبادئ: حوار صادق أولاً.' },

  sec3_eyebrow: { en:'Oncology', ar:'الأورام' },
  sec3_title:   { en:'Skin Cancer Surgery', ar:'جراحة سرطان الجلد' },
  sec3_p1: { en:'Skin cancer is common, and the vast majority of cases are very treatable. The key is getting it right — complete clearance first, then a reconstruction that leaves you looking and functioning as well as possible.', ar:'سرطان الجلد شائع وغالبيته قابل للعلاج. المهم التنفيذ الصحيح — استئصال كامل أولاً، ثم ترميم بأفضل حال.' },
  sec3_p2: { en:'I manage basal cell carcinoma, squamous cell carcinoma, melanoma, and rarer skin tumours.', ar:'أتولى علاج سرطان الخلايا القاعدية، سرطان الخلايا الحرشفية، الميلانوما، وأورام الجلد النادرة.' },

  sec4_eyebrow: { en:'Specialist Procedures', ar:'إجراءات متخصصة' },
  sec4_title:   { en:'Complex Wounds, Lymphoedema & Body Contouring', ar:'الجروح المعقدة، الوذمة اللمفية وتجسيم الجسم' },
  sec4_p1: { en:'Complex wounds and infections that have failed to respond to simpler management.', ar:'الجروح والالتهابات المعقدة التي لم تستجب للعلاج التقليدي.' },
  sec4_p2: { en:"For lymphoedema, I perform lymphovenous anastomosis (LVA) and vascularised lymph node transfer. I'll tell you honestly whether I think it's worth pursuing in your case.", ar:'في الوذمة اللمفية، أجري مفاغرة الأوعية اللمفاوية الوريدية ونقل العقدة اللمفاوية الوعائية.' },
  sec4_p3: { en:"Body contouring after significant weight loss — for people who've worked hard to transform their health and are left with excess skin.", ar:'تجسيم الجسم بعد إنقاص الوزن الكبير — لمن عملوا بجد وبقي لديهم جلد زائد يؤثر على حياتهم.' },

  sec5_eyebrow: { en:'Aesthetic Surgery', ar:'الجراحة التجميلية' },
  sec5_title:   { en:'Cosmetic Surgery of the Face, Breast & Body', ar:'جراحة تجميل الوجه والثدي والجسم' },
  sec5_p1: { en:"I do cosmetic surgery, and I take it seriously. How someone feels about how they look matters — it affects confidence, relationships, and daily life.", ar:'أجري الجراحة التجميلية وأتعامل معها بجدية. شعور الشخص تجاه مظهره مهم — يؤثر على الثقة والعلاقات والحياة اليومية.' },
  sec5_p2: { en:"What I won't do is operate on someone I don't think will benefit, or promise results I can't deliver.", ar:'ما لن أفعله هو إجراء عملية لمن أعتقد أنها لن تفيده، أو الوعد بنتائج لا أستطيع تحقيقها.' },

  clin_band_title: { en:"Not sure if I can help with your situation?", ar:'لست متأكداً إن كان بإمكاني مساعدتك؟' },
  clin_band_p:     { en:"Just ask. I'd rather have a conversation that ends with \"I'm not the right person\" than have someone not reach out at all.", ar:'فقط اسأل. أفضّل محادثة تنتهي بـ "لست الشخص المناسب" على أن لا يتواصل أحد معي.' },

  procedures_eyebrow: { en:'Full list of procedures', ar:'قائمة كاملة بالإجراءات' },
  proc1:  { en:'Trauma and limb reconstruction',          ar:'ترميم الصدمات والأطراف' },
  proc2:  { en:'Breast reconstruction and aesthetic surgery', ar:'ترميم الثدي والجراحة التجميلية' },
  proc3:  { en:'Skin cancer surgery',                     ar:'جراحة سرطان الجلد' },
  proc4:  { en:'Complex wounds and infection',            ar:'الجروح المعقدة والالتهابات' },
  proc5:  { en:'Complex bone and joint infection',        ar:'التهابات العظام والمفاصل المعقدة' },
  proc6:  { en:'Lymphoedema surgery (LVA)',               ar:'جراحة الوذمة اللمفية (LVA)' },
  proc7:  { en:'Body contouring (post-weight loss)',      ar:'تجسيم الجسم (بعد إنقاص الوزن)' },
  proc8:  { en:'Cosmetic surgery — face, breast & body', ar:'الجراحة التجميلية — الوجه والثدي والجسم' },

  /* ── GLOBAL HEALTH ── */
  gh_ph_eyebrow: { en:'Beyond the operating theatre', ar:'خارج غرفة العمليات' },
  gh_ph_title:   { en:'Global Health & Research',    ar:'الصحة العالمية والبحث العلمي' },
  gh_eyebrow:    { en:'Global MedReach Initiative',  ar:'مبادرة Global MedReach' },
  gh_title:      { en:'Founder & Director',          ar:'المؤسس والمدير' },
  gh_p1: { en:"I've worked in places where patients wait months for an operation that in the UK would happen within weeks. Where the equipment runs out. Where the surgeon covering the whole hospital is also teaching medical students and running the ward.", ar:'عملت في أماكن ينتظر فيها المرضى أشهراً لإجراء عملية كانت ستتم في المملكة المتحدة خلال أسابيع. حيث تنفد الأجهزة. حيث الجراح الذي يغطي المستشفى بأكمله يُدرّس الطلاب ويدير الجناح.' },
  gh_p2: { en:"Those experiences changed how I think about medicine — and what 'doing something useful' actually means.", ar:"تلك التجارب غيّرت طريقة تفكيري في الطب — وما يعنيه 'فعل شيء مفيد' حقاً." },
  gh_p3: { en:"The most valuable thing an outside surgeon can do isn't to arrive, operate for two weeks, and leave. It's to work alongside local teams, contribute to training, and help build something that functions when you're not there.", ar:'أثمن ما يمكن لجراح خارجي فعله ليس القدوم والعمل أسبوعين ثم المغادرة. بل العمل جنباً إلى جنب مع الفرق المحلية وبناء شيء يعمل حتى في غيابه.' },
  gh_p4: { en:'Through the Global MedReach Initiative, I work with international colleagues to build sustainable systems of care in conflict and resource-limited settings.', ar:'من خلال مبادرة Global MedReach، أعمل مع زملاء دوليين لبناء أنظمة رعاية مستدامة في مناطق النزاع.' },
  gh_c1_title: { en:'Surgical Training',        ar:'التدريب الجراحي' },
  gh_c1_text:  { en:"Working with surgeons in under-resourced settings to build skills that stay long after I leave. The goal isn't dependency — it's the opposite.", ar:'العمل مع الجراحين في البيئات محدودة الموارد لبناء مهارات تبقى بعد مغادرتي.' },
  gh_c2_title: { en:'Service Development',      ar:'تطوير الخدمات' },
  gh_c2_text:  { en:"Clinical systems, governance, standards of care — the unglamorous stuff that determines whether a surgical service actually works consistently.", ar:'الأنظمة السريرية، الحوكمة، معايير الرعاية — الأشياء التي تحدد ما إذا كانت الخدمة تعمل بشكل منتظم.' },
  gh_c3_title: { en:'Research & Collaboration', ar:'البحث والتعاون' },
  gh_c3_text:  { en:'Collaborative research focused on reconstructive surgery, trauma systems, and global surgical care.', ar:'مشاريع بحثية تعاونية تركز على جراحة الترميم وأنظمة الصدمات والرعاية الجراحية العالمية.' },
  conf_eyebrow: { en:'Academic work',                            ar:'الأعمال الأكاديمية' },
  conf_title:   { en:'Invited Talks & Conference Presentations', ar:'المحاضرات والعروض في المؤتمرات' },
  gh_quote:     { en:'"I\'ve seen what happens when surgical care collapses. That\'s what I want to help prevent — not by visiting, but by building."', ar:'"رأيت ما يحدث حين تنهار الرعاية الجراحية. هذا ما أريد المساعدة في منعه — ليس بالزيارة، بل بالبناء."' },
  type_invited:   { en:'Invited',            ar:'متحدث مدعو' },
  type_oral:      { en:'Oral',               ar:'عرض شفهي' },
  type_moderator: { en:'Invited & Moderator',ar:'مدعو ومحاور' },

  /* ── LEGACY ── */
  leg_ph_eyebrow: { en:'A life in medicine', ar:'حياة في الطب' },
  leg_ph_title:   { en:'Legacy',             ar:'الإرث' },
  leg_eyebrow:    { en:'My father',          ar:'والدي' },
  leg_title:      { en:'Dr. Mofeed El Mokhallalati', ar:'الدكتور مفيد المخللاتي' },
  leg_subtitle:   { en:'A Legacy of Vision, Dedication, and Medical Resistance', ar:'إرث من الرؤية والتفاني والمقاومة الطبية' },
  leg_p1: { en:'Born in Gaza in 1955, my father devoted his life to advancing healthcare and medical education for the people of Palestine. After earning his medical degree from Cairo University and completing his FRCS in Ireland in 1989, he made the deliberate choice to return home.', ar:'وُلد والدي في غزة عام 1955، وكرّس حياته لتطوير الرعاية الصحية والتعليم الطبي لأبناء فلسطين. بعد حصوله على درجة الطب من جامعة القاهرة وإتمام زمالته FRCS في أيرلندا عام 1989، اختار العودة إلى وطنه.' },
  leg_p2: { en:"He worked at Jerusalem's Al-Makassed Hospital and later across Gaza, playing a central role in establishing the general surgery training programme and building the Palestinian Board of Medical Specializations.", ar:'عمل في مستشفى المقاصد في القدس ثم في غزة، وأدى دوراً محورياً في إنشاء برنامج تدريب الجراحة العامة وتأسيس الهيئة الفلسطينية للتخصصات الطبية.' },
  leg_p3: { en:"He was a highly specialised general surgeon with particular interests in gastrointestinal surgery, endoscopy, and laparoscopic surgery. He regularly covered hospital costs for patients who couldn't afford treatment.", ar:'كان جراحاً عاماً متخصصاً بامتياز، باهتمام خاص بجراحة الجهاز الهضمي والتنظير. وكان يتكفّل في أحيان كثيرة بتكاليف علاج المرضى غير القادرين.' },
  leg_p4: { en:'He established a medical centre with polyclinics, founded the first specialised radiology centre in Gaza — introducing the first CT scanner in the early 1990s — and served as founding Chairman of Surgery at the European Gaza Hospital.', ar:'أسّس مركزاً طبياً بعياداته المتخصصة، وأنشأ أول مركز إشعاعي متخصص في غزة — مُدخلاً أول جهاز تصوير مقطعي في مطلع التسعينيات — وتولّى رئاسة قسم الجراحة في المستشفى الأوروبي بغزة.' },
  leg_p5: { en:'His dream of local medical schools in Gaza was realised through Al-Azhar University Faculty of Medicine and the Islamic University of Gaza Faculty of Medicine.', ar:'تحقق حلمه ببناء كليات طب محلية في غزة من خلال كلية الطب بجامعة الأزهر والجامعة الإسلامية.' },
  leg_p6: { en:'He called it "medical resistance." Toward the end of his career, he was appointed Minister of Health.', ar:'كان يسمّيها "المقاومة الطبية". وفي آخر مسيرته المهنية، عُيّن وزيراً للصحة.' },
  leg_p7: { en:'Though he has passed, his legacy endures through hundreds of medical graduates and the institutions he helped build.', ar:'رغم رحيله، يبقى إرثه حياً في مئات الخريجين الأطباء والمؤسسات التي ساهم في بنائها.' },
  leg_ref_eyebrow: { en:'Dr. Mofeed El Mokhallalati', ar:'د. مفيد المخللاتي' },
  leg_q:   { en:'"He told every doctor who came back home the same thing: your people need you here. Stay."', ar:'"كان يقول لكل طبيب عاد إلى الوطن نفس الشيء: شعبك يحتاجك هنا. ابقَ."' },
  leg_li1: { en:'Born in Gaza, 1955',                              ar:'وُلد في غزة، 1955' },
  leg_li2: { en:'MB BCh, Cairo University',                        ar:'MB BCh، جامعة القاهرة' },
  leg_li3: { en:'FRCS, Royal College of Surgeons in Ireland, 1989', ar:'FRCS، الكلية الملكية للجراحين في أيرلندا، 1989' },
  leg_li4: { en:'Al-Makassed Hospital, Jerusalem',                  ar:'مستشفى المقاصد، القدس' },
  leg_li5: { en:'Founding Chairman of Surgery, European Gaza Hospital', ar:'رئيس قسم الجراحة التأسيسي، المستشفى الأوروبي بغزة' },
  leg_li6: { en:'Founding Director, Dar Al Salam NGO Hospital',    ar:'المدير التأسيسي، مستشفى دار السلام الأهلي' },
  leg_li7: { en:'Founded first CT scanner & radiology centre in Gaza', ar:'أسّس أول وحدة تصوير مقطعي ومركز إشعاع في غزة' },
  leg_li8: { en:'Palestinian Board of Medical Specializations (11 specialties)', ar:'الهيئة الفلسطينية للتخصصات الطبية (11 تخصصاً)' },
  leg_li9: { en:'Al-Azhar & Islamic University medical schools',   ar:'كليتا الطب في جامعة الأزهر والجامعة الإسلامية' },
  leg_li10:{ en:'Minister of Health, Palestinian Authority',       ar:'وزير الصحة، السلطة الوطنية الفلسطينية' },

  /* ── CONTACT ── */
  con_ph_eyebrow: { en:"Let's talk",     ar:'لنتحدث' },
  con_ph_title:   { en:'Get in Touch',   ar:'تواصل معي' },
  con_intro:      { en:"If you'd like to arrange a consultation, ask whether your situation is something I can help with, or discuss a referral — this is the right place to start. I read all messages myself and usually reply within two working days.", ar:'إن أردت ترتيب استشارة، أو الاستفسار إن كان بإمكاني مساعدتك، أو مناقشة إحالة — هذا هو المكان الصحيح للبدء. أقرأ جميع الرسائل بنفسي وعادةً ما أردّ خلال يومي عمل.' },
  con_email_l:    { en:'📧 Email',        ar:'📧 البريد الإلكتروني' },
  con_nhs_l:      { en:'🏥 NHS Practice', ar:'🏥 العيادة الحكومية' },
  con_nhs_note:   { en:'Please use the standard referral pathway via your GP.', ar:'يُرجى استخدام مسار الإحالة الاعتيادي عبر طبيبك العام.' },
  con_priv_l:     { en:'🏛️ Private Practice', ar:'🏛️ العيادة الخاصة' },
  con_priv_note:  { en:'Private referrals welcome — a letter from any doctor is fine.', ar:'الإحالات الخاصة مرحب بها — رسالة من أي طبيب كافية.' },
  con_social_l:   { en:'Follow & Connect', ar:'تابعني وتواصل' },
  con_note_title: { en:'A note:',          ar:'ملاحظة:' },
  con_note_text:  { en:"Please don't include detailed medical information in the form — a brief description is enough.", ar:'يُرجى عدم تضمين معلومات طبية مفصّلة في النموذج — وصف مختصر يكفي.' },
  form_eyebrow:   { en:'Send a message',   ar:'أرسل رسالة' },
  form_fname:     { en:'First name',       ar:'الاسم الأول' },
  form_lname:     { en:'Last name',        ar:'اسم العائلة' },
  form_email:     { en:'Email address',    ar:'البريد الإلكتروني' },
  form_phone:     { en:'Phone (optional)', ar:'الهاتف (اختياري)' },
  form_reason:    { en:"What's this about?", ar:'موضوع الرسالة' },
  form_msg:       { en:'Your message',     ar:'رسالتك' },
  form_msg_ph:    { en:'A brief description of your situation or question.', ar:'وصف مختصر لحالتك أو سؤالك.' },
  form_select:    { en:'Please select…',   ar:'اختر…' },
  form_opt1:      { en:'Reconstructive surgery',     ar:'جراحة ترميمية' },
  form_opt2:      { en:'Skin cancer surgery',        ar:'جراحة سرطان الجلد' },
  form_opt3:      { en:'Breast reconstruction',      ar:'ترميم الثدي' },
  form_opt4:      { en:'Aesthetic / cosmetic surgery', ar:'جراحة تجميلية' },
  form_opt5:      { en:'Lymphoedema surgery',        ar:'جراحة الوذمة اللمفية' },
  form_opt6:      { en:'Hand surgery',               ar:'جراحة اليد' },
  form_opt7:      { en:'Referral from a colleague',  ar:'إحالة من زميل' },
  form_opt8:      { en:'Research or collaboration',  ar:'بحث أو تعاون' },
  form_opt9:      { en:'Global health / speaking invitation', ar:'صحة عالمية / دعوة للتحدث' },
  form_opt10:     { en:'Something else',             ar:'شيء آخر' },
  form_success:   { en:"Thank you — I've received your message and will be in touch shortly.", ar:'شكراً — لقد استلمت رسالتك وسأتواصل معك قريباً.' },

  /* ── FOOTER ── */
  footer_copy:      { en:'© 2026 Ahmed Mokhallalati. All rights reserved.', ar:'© 2026 أحمد المخللاتي. جميع الحقوق محفوظة.' },
  footer_hospitals: { en:'Hull University Teaching Hospitals NHS Trust · Lake Clinic, Doncaster', ar:'مستشفيات جامعة هال · عيادة ليك، دونكاستر' },

  /* ── CREDENTIALS (about page) ── */
  creds_fellowship: { en:'Microsurgery Fellowship – Guy\'s & St Thomas\', London', ar:'زمالة الجراحة المجهرية – غايز وسانت توماس، لندن' },
  creds_training:   { en:'Fellowship-trained in advanced microsurgery at Guy\'s and St Thomas\' NHS Foundation Trust in London, with collaborative experience at King\'s College Hospital.', ar:'تدرّب على الجراحة المجهرية المتقدمة في مستشفى غايز وسانت توماس بلندن، مع خبرة تعاونية في مستشفى كينغز كوليدج.' },
  nav_publications: { en:'Publications', ar:'الأبحاث' },
  /* ── GLOBAL HEALTH — New sections ── */
  collab_eyebrow:    { en:'Clinical Collaboration', ar:'التعاون السريري' },
  collab_title:      { en:'Working Together',       ar:'العمل معاً' },

  vic_badge:    { en:'Clinical Visit · Hull', ar:'زيارة سريرية · هال' },
  vic_title:    { en:'Bilateral Stacked PAP Flap Reconstruction', ar:'إعادة بناء رفرف PAP المضاعف الثنائي' },
  vic_sub:      { en:'Collaboration with Ms. Victoria Rose · Hull University Hospitals', ar:'تعاون مع الدكتورة فيكتوريا روز · مستشفيات جامعة هال' },
  vic_p1:       { en:"It was a privilege to welcome Ms. Victoria Rose to Hull University Hospitals for a complex breast reconstruction case — a patient with a painful, severely fibrotic DIEP flap following radiotherapy, for whom we proceeded with bilateral stacked PAP flaps. Working alongside such an experienced mentor and colleague was genuinely rewarding, and the case served as a reminder of what thoughtful, experienced collaboration can achieve for patients in difficult circumstances.", ar:'كان لي الشرف في استقبال الدكتورة فيكتوريا روز في مستشفيات جامعة هال لحالة ترميم ثدي معقدة — مريضة تعاني من رفرف DIEP مؤلم ومتليّف بشدة إثر العلاج الإشعاعي، وتقدمنا بإعادة بناء رفرف PAP المضاعف الثنائي. العمل إلى جانب مرشد وزميل بهذه الخبرة كان مثمراً حقاً، وكانت الحالة تذكيراً بما يمكن أن يحققه التعاون المدروس للمرضى في الظروف الصعبة.' },
  vic_p2:       { en:"Beyond the operating theatre, we were fortunate to hear Ms. Rose speak about her humanitarian work in Gaza — an account that was as sobering as it was inspiring. We both share the hope of operating together there in the near future, and that access will be granted when it is most needed.", ar:'خارج غرفة العمليات، كان لنا الحظ في الاستماع إلى الدكتورة روز وهي تتحدث عن عملها الإنساني في غزة — رواية كانت بالقدر ذاته محزنة وملهمة. نتشارك كلانا الأمل في العمل معاً هناك في المستقبل القريب.' },
  vic_p3:       { en:'My sincere thanks to the outstanding Hull team whose skill and generosity made this visit what it was.', ar:'شكري الصادق لفريق هال الرائع الذي جعل هذه الزيارة على ما هي عليه.' },
  vic_proc:     { en:'Procedure: Bilateral stacked PAP (profunda artery perforator) flaps for salvage breast reconstruction following radiation-induced fibrosis of prior DIEP flap.', ar:'الإجراء: رفرفات PAP المضاعفة الثنائية (ثاقب الشريان العميق) لترميم الثدي الإنقاذي إثر التليّف الناجم عن الإشعاع.' },

  rcf_badge:    { en:'Invited Speaker', ar:'متحدث مدعو' },
  rcf_title:    { en:'Refugee Crisis Foundation — 10th Anniversary Gala', ar:'مؤسسة أزمة اللاجئين — حفل الذكرى العاشرة' },
  rcf_sub:      { en:'Invited Speaker · Gala Dinner', ar:'متحدث مدعو · حفل العشاء' },
  rcf_p1:       { en:'It was a privilege to be invited to speak at the gala dinner marking ten years of the Refugee Crisis Foundation — a charity delivering medical, dental, and welfare support to refugee communities in camps and under-resourced settings. Hearing how the organisation has grown, adapted, and continued to pursue its mission with both rigour and compassion was genuinely moving.', ar:'كان لي الشرف في الدعوة للحديث في حفل العشاء الذي يحتفل بعشر سنوات من مؤسسة أزمة اللاجئين — منظمة خيرية تقدم الدعم الطبي والصحي والرعاية للمجتمعات اللاجئة في المخيمات والبيئات محدودة الموارد.' },
  rcf_p2:       { en:"I was particularly struck by their new initiative supporting dental students in Gaza — helping them complete their training despite the enormous disruption of the past two years. It is exactly the kind of long-term, systems-thinking approach to humanitarian work that makes a lasting difference. Congratulations to the entire RCF team on a decade of impact, and to Kiran and Khaleda for building something that continues to matter.", ar:'لفت انتباهي بشكل خاص مبادرتهم الجديدة لدعم طلاب طب الأسنان في غزة — مساعدتهم على إكمال تدريبهم رغم الاضطرابات الهائلة للسنتين الماضيتين. تهانينا لفريق RCF بأكمله على عقد من التأثير.' },

  rcs_badge:    { en:'Invited Speaker', ar:'متحدث مدعو' },
  rcs_title:    { en:'Global Surgical Frontier Conference', ar:'مؤتمر الحدود الجراحية العالمية' },
  rcs_sub:      { en:'Royal College of Surgeons of England · London', ar:'الكلية الملكية للجراحين في إنجلترا · لندن' },
  rcs_p1:       { en:"At this year's Global Surgical Frontier event at the Royal College of Surgeons of England, I gave a talk on surgical work in Gaza — what it demands, what it costs, and what it means to operate in a setting where the infrastructure of care has been systematically dismantled. It was a room full of people who understand, at a technical and human level, what that involves.", ar:'في فعالية هذا العام في الكلية الملكية للجراحين في إنجلترا، قدمت محاضرة عن العمل الجراحي في غزة — ما تتطلبه، وما تكلّفه، وما يعنيه العمل في بيئة تُهدم فيها البنية التحتية للرعاية بشكل منهجي.' },
  rcs_p2:       { en:"During the event, I was moved to see photographs of Ahmed Maqadma displayed at the college — an OrthoPlastic surgeon killed in Gaza in March 2024, who had worked across hospitals throughout northern Gaza for five consecutive months without seeing his family. His colleagues, including Mr. Tim Godacre and Mai Attia, have kept his memory alive with the loyalty and care it deserves. Ahmed was killed alongside his mother. His dedication, his refusal to leave, and his commitment to his patients in the most extreme circumstances represent something that should not be forgotten. To his wife and children — his legacy speaks for itself.", ar:'خلال الفعالية، كنت متأثراً برؤية صور أحمد مقادمة معروضة في الكلية — جراح تقويم العظام والتجميل الذي استُشهد في غزة في مارس 2024، وعمل في مستشفيات شمال غزة لخمسة أشهر متواصلة دون أن يرى عائلته. احتفظ زملاؤه، بمن فيهم تيم غودايكر ومي عطية، بذاكرته بالولاء والرعاية التي تستحق. أُصيب أحمد إلى جانب والدته. تفانيه ورفضه المغادرة والتزامه بمرضاه في أصعب الظروف يمثّل شيئاً لا ينبغي نسيانه.' },
  rcs_quote:    { en:'"In this fragile ceasefire, the names of those who did not survive deserve to be spoken clearly and remembered fully."', ar:'"في ظل هذا الهدنة الهشة، تستحق أسماء من لم ينجوا أن تُذكر بوضوح وتُحفظ كاملاً."' },

  /* ── Homepage Publications section ── */
  pub_eyebrow: { en:'Research & Scholarship', ar:'البحث العلمي' },
  pub_title:   { en:'Publications', ar:'الأبحاث المنشورة' },
  pub_intro:   { en:'My research focuses on reconstructive surgery in conflict settings, the documentation of war-related trauma, and humanitarian surgical care — particularly in Gaza. Published in The Lancet, BMJ, Burns, Military Medicine, and PRS Global Open.', ar:'يتمحور بحثي حول الجراحة التجميلية والترميمية في بيئات النزاع، وتوثيق الإصابات المرتبطة بالحرب، والرعاية الجراحية الإنسانية — ولا سيما في غزة. منشور في The Lancet وBMJ وBurns وMilitary Medicine وPRS Global Open.' },
  pub_btn:     { en:'View All Publications', ar:'عرض جميع الأبحاث' },

  /* ══ PUBLICATIONS PAGE ══ */
  pub_page_eyebrow: { en:'Research & Scholarship', ar:'البحث العلمي' },
  pub_page_title:   { en:'Publications', ar:'الأبحاث المنشورة' },
  pub_stat_pubs:    { en:'Publications', ar:'منشورات' },
  pub_stat_cit:     { en:'Citations', ar:'اقتباسات' },
  pub_stat_jour:    { en:'Journals', ar:'مجلات' },
  pub_stat_since:   { en:'Active Since', ar:'نشط منذ' },
  pub_filter_all:   { en:'All', ar:'الكل' },
  pub_filter_gaza:  { en:'Gaza', ar:'غزة' },
  pub_filter_conf:  { en:'Conflict Surgery', ar:'جراحة النزاعات' },
  pub_filter_recon: { en:'Reconstructive Surgery', ar:'الجراحة الترميمية' },
  pub_filter_hum:   { en:'Humanitarian', ar:'إنساني' },
  pub_filter_aes:   { en:'Aesthetics', ar:'التجميل' },
  pub_filter_pal:   { en:'Palliative Care', ar:'الرعاية التلطيفية' },
  pub_filter_hand:  { en:'Hand Surgery', ar:'جراحة اليد' },
  pub_show_abs:     { en:'Show abstract ▾', ar:'عرض الملخص ▾' },
  pub_hide_abs:     { en:'Hide abstract ▴', ar:'إخفاء الملخص ▴' },
  pub_read:         { en:'Read Full Paper', ar:'قراءة البحث كاملاً' },
  pub_pdf:          { en:'Download PDF', ar:'تحميل PDF' },
  pub_pubmed:       { en:'PubMed', ar:'PubMed' },

  /* ══ GLOBAL HEALTH — Event cards ══ */
  ev_palmed_title:  { en:'PalMed Academy — Annual Meeting & Scientific Conference 2026', ar:'أكاديمية PalMed — الاجتماع السنوي والمؤتمر العلمي 2026' },
  ev_palmed_sub:    { en:"King's College London · 24–25 April 2026", ar:'كلية كينغز، لندن · 24–25 أبريل 2026' },
  ev_palmed_text:   { en:"Chaired the Reconstructive Surgery & Psychological Impact of War session. A gathering of clinicians, academics and healthcare workers committed to supporting Gaza's health system through an extraordinarily difficult period.", ar:'ترأس جلسة الجراحة الترميمية والأثر النفسي للحرب. تجمّع للأطباء والأكاديميين والعاملين في مجال الرعاية الصحية الملتزمين بدعم منظومة الصحة في غزة خلال هذه المرحلة البالغة الصعوبة.' },

  ev_qatar_title:   { en:'Qatar Plastica Conference 2026', ar:'مؤتمر قطر بلاستيكا 2026' },
  ev_qatar_sub:     { en:'Doha, Qatar · 14–17 January 2026', ar:'الدوحة، قطر · 14–17 يناير 2026' },
  ev_qatar_quote:   { en:'"Aesthetic Considerations in Breast Reconstruction"', ar:'"الاعتبارات الجمالية في ترميم الثدي"' },
  ev_qatar_text:    { en:'Qatar is where my journey in plastic surgery first began. Coming back as an invited speaker felt meaningful. The talk focused on aesthetic planning in breast reconstruction as an integral part of surgical decision-making from the outset.', ar:'قطر هي المكان الذي بدأت فيه رحلتي في الجراحة التجميلية. كانت عودتي متحدثاً مدعواً ذات معنى خاص. تمحورت المحاضرة حول التخطيط الجمالي في ترميم الثدي باعتباره جزءاً لا يتجزأ من صنع القرار الجراحي منذ البداية.' },

  ev_eba_title:     { en:'21st European Burns Association Congress', ar:'المؤتمر الحادي والعشرون لجمعية الحروق الأوروبية' },
  ev_eba_sub:       { en:'Berlin, Germany · Invited Speaker & Session Moderator', ar:'برلين، ألمانيا · متحدث مدعو ومدير جلسة' },
  ev_eba_quote:     { en:'"Hope as a strategy... My journey of change in Gaza"', ar:'"الأمل كاستراتيجية... رحلتي في التغيير في غزة"' },
  ev_eba_text:      { en:'Presented on experiences in Gaza and the challenges faced during the war — and moderated sessions on burns in austere conditions and war zones alongside colleague Tom Potokar.', ar:'قدّم عرضاً عن تجاربه في غزة والتحديات التي واجهها خلال الحرب، وأدار جلسات حول الحروق في الظروف القاسية ومناطق النزاع إلى جانب الزميل توم بوتوكار.' },

  ev_vic_sub2:      { en:'Collaboration with Ms. Victoria Rose · Hull University Hospitals', ar:'تعاون مع الدكتورة فيكتوريا روز · مستشفيات جامعة هال' },
  ev_vic_text1:     { en:'It was a privilege to welcome Ms. Victoria Rose to Hull University Hospitals for a complex breast reconstruction case — bilateral stacked PAP flaps following radiation-induced fibrosis of a prior DIEP flap.', ar:'كان شرفاً استقبال الدكتورة فيكتوريا روز في مستشفيات جامعة هال لحالة ترميم ثدي معقدة — رفرفات PAP المضاعفة الثنائية إثر التليّف الناجم عن الإشعاع.' },
  ev_vic_text2:     { en:'Beyond the operating theatre, we were fortunate to hear Ms. Rose speak about her humanitarian work in Gaza. We both share the hope of operating together there in the near future.', ar:'خارج غرفة العمليات، استمعنا إلى الدكتورة روز تتحدث عن عملها الإنساني في غزة. نتشارك كلانا الأمل في العمل معاً هناك في المستقبل القريب.' },

  ev_rcf_text1:     { en:'It was a privilege to speak at the gala dinner marking ten years of the Refugee Crisis Foundation — a charity delivering medical, dental, and welfare support to refugee communities in camps and under-resourced settings.', ar:'كان شرفاً الحديث في حفل العشاء الذي يحتفل بعشر سنوات من مؤسسة أزمة اللاجئين — منظمة خيرية تقدم الدعم الطبي والصحي والرعاية لمجتمعات اللاجئين.' },
  ev_rcf_text2:     { en:'I was particularly struck by their new initiative supporting dental students in Gaza — helping them complete their training despite the enormous disruption of the past two years.', ar:'لفت انتباهي بشكل خاص مبادرتهم الجديدة لدعم طلاب طب الأسنان في غزة — مساعدتهم على إكمال تدريبهم رغم الاضطرابات الهائلة للسنتين الماضيتين.' },

  ev_rcs_text1:     { en:"At the Global Surgical Frontier event, I gave a talk on surgical work in Gaza — what it demands, what it costs, and what it means to operate in a setting where the infrastructure of care has been systematically dismantled.", ar:'في فعالية الحدود الجراحية العالمية، قدّمت محاضرة عن العمل الجراحي في غزة — ما تتطلبه، وما تكلّفه، وما يعنيه العمل في بيئة تُهدم فيها البنية التحتية للرعاية بشكل منهجي.' },
  ev_rcs_text2:     { en:"During the event, I was moved to see photographs of Ahmed Maqadma — an OrthoPlastic surgeon killed in Gaza in March 2024, who worked across hospitals for five consecutive months without seeing his family.", ar:'خلال الفعالية، تأثّرت برؤية صور أحمد مقادمة — جراح تقويم العظام والتجميل الذي استُشهد في غزة في مارس 2024، وعمل في المستشفيات لخمسة أشهر متواصلة دون أن يرى عائلته.' },

  con_email_direct_title: { en:'Get in touch directly', ar:'تواصل معي مباشرة' },
  con_email_direct_text:  { en:'The simplest way to reach me is by email. I read all messages personally and usually reply within two working days.', ar:'أبسط طريقة للتواصل معي هي البريد الإلكتروني. أقرأ جميع الرسائل بنفسي وعادةً أرد خلال يومي عمل.' },
  con_email_btn:          { en:'Email me', ar:'راسلني' },

};

/* ── Engine ── */
let currentLang = localStorage.getItem('lang') || 'en';

function t(key) {
  const e = TRANSLATIONS[key];
  if (!e) return '';
  return e[currentLang] || e['en'] || '';
}

function applyLang() {
  const isAr = currentLang === 'ar';
  document.documentElement.lang = currentLang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';

  /* body font */
  document.body.style.fontFamily = isAr
    ? "'Noto Kufi Arabic', system-ui, sans-serif"
    : "'Inter', system-ui, sans-serif";

  /* translate all data-i18n elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key  = el.getAttribute('data-i18n');
    const text = t(key);
    if (!text) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else if (el.tagName === 'OPTION') {
      el.textContent = text;
    } else {
      el.textContent = text;
    }
  });

  /* translate placeholders separately */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const text = t(el.getAttribute('data-i18n-ph'));
    if (text) el.placeholder = text;
  });

  /* lang toggle buttons */
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.setAttribute('aria-label', isAr ? 'Switch to English' : 'التبديل إلى العربية');
  });
  /* globe icon stays the same, tooltip changes */

  localStorage.setItem('lang', currentLang);
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyLang();
}

document.addEventListener('DOMContentLoaded', applyLang);
