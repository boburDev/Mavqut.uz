const UZ = {
  main: {
    linkAbout: "Biz haqimizda",
    linkLets: "Kirish",
    linkMore: "Batafsil",
    linkDown: "Ilovani yuklab olish",
    heading: {
      logoHead: "Mavqut",
      textOnUz: `Qazo nomoz va ro'zalarni ado etish uchun yordamchi!`,
      textOnAR: "ان الصلاة كانت على المؤمنين كتابا موقوتا!",
      textOnRU: "“Albatta, namoz mo'minlarga vaqtida farz qilingandir”",
      ayahName: "Niso surasi, 103-oyat",
    },
    clicked: `Mavqut.uz`,
    moreBtn: `
		Mavqut.uz saytining imkoniyatlari va foydalanish tartibi bilan quyida batafsil tanishishingiz mumkin:
		1. Ro'yxatdan o'tish
		Ro'yxatdan o'tish uchun belgilangan joylarga shaxsiy ma'lumotlaringizni kiritishingiz talab etiladi.
		Ekranning o'ng tomonida shaxsiy sahifangiz uchun berilgan rasmlardan birini tanlashingiz mumkin.
		Shuningdek, yuqori o'ng burchakda joylashgan sanani o'zgartirish orqali milodiy yoki hijriy yil hisobini ko'rish imkoniyati mavjud.
		Quyi qismda ajratilgan bo'sh joyga elektron pochta manzilingiz (e-mail) va maxfiy parolingizni kiriting.
		"Yuborish" tugmasini bosish orqali ro'yxatdan o'tish jarayoni yakunlanadi.
		2. Sozlamalar
		Sozlamalar qismida kiritilgan barcha ma'lumotlarni o'zgartirish imkoniyati mavjud.
		Ekranning o'ng qismida ko'rsatilgan bo'lim orqali o'zingizga qulay bo'lgan tilni tanlash imkoniyati mavjud.
		Sahifaning yuqori o'ng burchagida joylashgan "Eslatmalar" tugmasini bosish orqali kunlik qazo namozlarini ado etish haqidagi eslatmalarni qabul qilishingiz mumkin.
		3. Bosh sahifa
		1. Asosiy sahifada "Namozlar qazosi" bo'limi tanlanadi. 
		2. Ushbu bo'limda foydalanuvchining 15 yoshidan boshlab namoz o'qishni boshlagan paytigacha bo'lgan vaqt oralig'idagi umumiy qazolar hisobi ko'rsatiladi.
		3. Umumiy qazolar 5 vaqt namozning har biri uchun alohida hisob holida ham berib boriladi.
		4. Ekranning quyi qismida umumiy ado etilmagan qazo namozlari miqdori har kuni o'rtacha 20 rakatdan o'qilganda, qancha muddat davomida to'liq tugatilishi kun, oy, yil hisobida ko'rsatiladi.
		5. "Qazo namozlarini tezlashtirish" qismida kunlik qazo namozlari miqdorini 1, 2 yoki 3 lastDaysOfNamaz: 'O'qilmagan Namozlar muddati',
		5. "Qazo namozlarini nezlashtirish" qismida kunlik qazo namozlari miqdorini 1, 2 yoki 3 lastDaysOfNamazSpeed:Qazo namozlarini tezlashtirish',
		1. Sahifaning yuqori qismidan "Ro'za qazolari" bo'limi tanlanadi.
		2. Ekranning markaziy qismida ro'za qazolarini ado etishni bugundan boshlanganda, yakunlanish lastDaysOfNamaz: 'O'qilmagan Namozlar muddati',
		2. Ekranning markaziy qismida ro'na qazolarini ado etishni bugundan boshlanganda, yakunlanish lastDaysOfNamazSpeed: 'O'qazo namozlarini tezlashtirish
		3. Ro'za qazolari tutilishi boshlagan sana.
		4. Qazolar ado etilishni boshlangan kundan uzluksiz tutilganda to'liq tugatilish sanasi qayd etib boriladi. Qazolarni qayd etish qismida tutilgan ro'zalar hisobiga qarab, avtomatik ravishda o'zgarib boradi.
		
		5. Statistika: Namoz qazolari.
		1. Ekranning o'ng tomonida  "Statistika" bo'limi tanlanadi.
		2. Statistik ma'lumotlar ko'rilmoqchi bo'lgan oy va yil belgilanadi. 
		3. Berilgan jadval orqali qazo namozlar ado etilishining oylik natijalarni tahlil qilish imkoniyati mavjud.
		4. O'qilgan va o'qilmagan qazo namozlar rakatlar va foiz hisobida foydalanuvchiga taqdim etib boriladi.
		
		6.Statistika: Ro'za qazolari
		1. Ro'za qazolarining statistik ma'lumotlari bilan tanishish uchun ekranning chap qismidan "Statistika" bo'limi tanlanadi.
		2. Kerakli oy va yil kiritiladi.
		3. Ro'zalar kundaligi qismida 1 oy davomidagi natijalar qayd etiladi.
		4. Tutilgan ro'zalar siyohrang bilan, ro'za qazosi ado etilmagan kunlar esa bo'sh holda ko'rsatiladi.
		
		Hisob-kitob
		1. Ado etilgan ro'za va namoz qazolari foydalanuvchi tomonidan hisob-kitob bo'limida qayd etib boriladi.
		2. Foydalanuvchi tomonidan kiritilgan natijalar har bir namoz uchun foiz hisobida berib boriladi.
		3. Ekranning o'ng tarafida joylashgan diagramma tutilgan qazo ro'zalar miqdorini foizlar hisobida va ranglar bilan farqlangan holda ko'rsatib beradi.
		4. "Namoz va ro'zalarni qayd etish" qismida ado etilgan qazolar miqdori kiritiladi. 
		5. Ma'lumotlar kiritilgan joriy sana belgilanadi.
		6. Barcha ma'lumotlar taqdim etilganidan so'ng "Qayd etish" tugmasi bosiladi va jarayon yakunlanadi. Ushbu kiritilgan ma'lumotlar asosida barcha ma'lumotlar va statistik tahlillar avtomatik tarzda o'zgarib boradi.`,

    aboutUsBtn: `Mavqut.uz – Megabayt Media (MBM) IT kompaniyasining mualliflik loyihasi bo'lib, barcha musulmon ahliga namoz va ro'za ibodatlarini mukammal bajarishlarida qulaylik yaratish maqsadida yaratilgan.
		Ushbu sayt MBM IT kompaniyasi tomonidan amalga oshirilgan katta va maqsadli loyihalardan biri bo'lib, bundan tashqari kompaniya qisqa muddat va yuqori sifat tamoyiliga asoslangan holda veb-sayt yaratish, veb dizayn, SEO optimizatsiya, ranking, SMM, PR kabi zamonaviy xizmat turlarini ko'rsatib kelmoqda.
		Mavqut.uz orqali biz, MBM IT kompaniyasi jamoasi, siz va yaqinlaringizga ibodatlarni to'liq ado etishingizda yordam bera olayotganimizdan mamnunmiz.
		
		Mavqut.uz borasidagi fikr va takliflarni quyidagi manzillar orqali qoldirishgiz mumkin.
		
		(Telefon raqam va electron pochta)
		(Manzil)
		`,
    privacy: `Maxfiylik siyosati`,
    privacyPolicyText: `Shaxsiy ma'lumotlardan foydalanish siyosati
	Xizmat ko'rsatuvchi hisoblangan Mavqut.uz veb-sayti MBM IT kompaniyasi tomonidan boshqariladi.
	Ushbu sahifa Mavqut.uz veb-sayti foydalanuvchilarining shaxsiy ma'lumotlarini to'plash, ulardan foydalanish va oshkor qilish to'g'risidagi siyosati haqida xabardor qilish uchun ishlatiladi.
	Agar siz bizning xizmatimizdan foydalanishga qaror qilsangiz ushbu siyosat bilan bog'liq ma'lumotlarni to'plash va ulardan foydalanishga rozilik bildirgan hisoblanasiz. Biz to'plagan shaxsiy ma'lumotlar xizmatni taqdim etish va takomillashtirish uchun ishlatiladi. Sizning ma'lumotlaringiz hech qanday maqsadlar uchun foydalanilmaydi va hech kimga berilmaydi (quyida tavsiflangan holatlar bundan mustasno).
	Agar shaxsiy ma'lumotlardan foydalanish siyosatida boshqacha tartib belgilanmagan bo'lsa, ushbu Mavqut.uz saytidagi atamalar bizning saytdan foydalanish shartlari va qoidalaridagi ma'noga ega
	Axborotlarni yig'ish va ulardan foydalanish
	Foydalanuvchilar uchun xizmatning samaradorligini ta'minlash va sayt faoliyatini rivojlantirish uchun sizning shaxsingizni aniqlaydigan ma'lumotlar, shu jumladan ism, telefon raqami va elektron pochta manzilingizni taqdim etishingizni talab qilishimiz mumkin. Biz to'plagan ma'lumotlar siz bilan bog'lanish yoki sizning shaxsingizni aniqlash uchun ishlatiladi.
	Jurnal ma'lumotlari
	Sizga shuni ma'lum qilamizki, har safar bizning xizmatimizga tashrif buyurganingizda, biz sizning brauzeringiz yuborgan jurnal ma’lumotlari deb ataluvchi ma'lumotlarni to'playmiz. Ushbu jurnal ma'lumotlari kompyuteringizning Internet-protokoli ("IP") manzili, brauzer versiyasi, siz tashrif buyurgan xizmatimizning sahifalari, tashrif vaqti va sanasi, ushbu sahifalarda o'tkazgan vaqti va boshqa statistik ma'lumotlarlarni o'z ichiga oladi.
	
	Xizmat ko'rsatuvchi provayderlar
	Quyidagi sabablarga ko'ra biz uchinchi tomon kompaniyalari va jismoniy shaxslarni sayt xizmatiga jalb qilishimiz mumkin:
	Bizning xizmatimizga ko'maklashish;
	Xizmatni bizning nomimizdan taqdim etish;
	Xizmatga oid topshiriqlarni amalga oshirish;
	Xizmatimiz qanday ishlayotganini tahlil qilishda yordam berish.
	Uchinchi tomonga yuklatilgan vazifalarni bajarish uchun ularga xizmatimiz foydalanuvchilari ya'ni sizning shaxsiy ma'lumotlaringizdan foydalanish huquqi beriladi. Ammo, ularga ma'lumotni oshkor qilmasliklari yoki boshqa maqsadlarda foydalanmasliklari majburiyati qo’yilgan.
	
	Xavfsizlik
	Biz sizning shaxsiy ma'lumotlaringizni taqdim etishdagi ishonchingizni qadrlaymiz, shuning uchun uni himoya qilishda tijoriy maqbul vositalardan foydalanishga intilamiz. Biroq, shuni yodda tutingki, biror bir internet orqali uzatish yoki electron ma’lumotlarni saqlash usuli 100% xavfsiz va ishonchli emas va biz uning mutlaq xavfsizligini kafolatlay olmaymiz.
	
	Boshqa saytlarga havolalar
	Bizning xizmatimiz boshqa saytlarga havolalarni o'z ichiga olishi mumkin. Siz uchinchi tomon havolasini bosganingizda, o'sha saytga yo'naltirilasiz. E'tibor bering, ushbu tashqi saytlar biz tomondan boshqarilmaydi. Shu sababli, veb-saytlarning shaxsiy ma'lumotlardan foydalanish siyosatini ko'rib chiqishingizni qat'iy tavsiya qilamiz. Biz uchinchi tomon saytlari yoki xizmatlarining mazmuni, shaxsiy ma'lumotlardan foydalanish siyosati yoki amaliyoti uchun hech qanday nazorat huquqiga ega emasmiz va hech qanday javobgarlikni o'z zimmamizga olmaymiz.
	Ushbu shaxsiy ma'lumotlardan foydalanish siyosatiga kiritilgan o'zgarishlar
	Shuni unutmangki, shaxsiy ma'lumotlardan foydalanish siyosati sahifasi yangilab boriladi. O'zgarishlardan xabardor bo'lib turish uchun sahifani vaqti-vaqti bilan ko'rib chiqishingizni maslahat beramiz. Ushbu sahifada Maxfiylik siyosati bandlari o'zgartirilgan yoki yangi kiritilgan paytda barcha o'zgarishlar to'g'risida sizga xabar beramiz. Kiritilgan o'zgarishlar sahifada joylashtirilganidan so'ng darhol kuchga kiradi.
	
	Biz bilan bog'lanish
	Agar sizda shaxsiy ma'lumotlardan foydalanish siyosatiga oid savol yoki takliflar bo'lsa, biz bilan bog'lanishingizni so'raymiz.
	Elektron pochta: info@mbmitcompany.uz
	`,
    terms: `Foydalanish shartlari`,
    termAndConditionText: `Iltimos, MBM IT kompaniyasi tomonidan boshqariladigan Mavqut.uz veb-saytidan foydalanishdan oldin ushbu foydalanish shartlarini diqqat bilan o'qing. Sizning xizmatga kirishingiz va undan foydalanishingiz ushbu shartlarni qabul qilish va ularga rioya qilishingiz bilan bog'liq. Ushbu foydalanish shartlari xizmatga kiradigan yoki undan foydalanadigan barcha tashrif buyuruvchilarga, foydalanuvchilarga va boshqalarga nisbatan qo'llaniladi.
	Xizmatga kirish yoki undan foydalanish orqali siz ushbu shartlarga rioya qilishga rozilik bildirasiz. Agar siz foydalanish shartlarining biror bir qismiga rozi bo'lmasangiz, u holda siz xizmatdan foydala olmaysiz.
	Boshqa veb-saytlarga havolalar
	Bizning xizmatimizda MBM IT kompaniyasi egasi bo'lmagan yoki saytni boshqarmaydigan uchinchi tomon veb-saytlariga yoki xizmatlariga havolalar bo'lishi mumkin.
	MBM IT kompaniyasi uchinchi tomon veb-saytlari yoki xizmatlarining mazmuni, shaxsiy ma'lumotlardan foydalanish siyosati yoki amaliyoti ustidan nazorat va javobgarlikni o'z zimmasiga olmaydi. 
	Bundan tashqari siz MBM IT kompaniyasi va havola qilingan boshqa saytlar va xizmatlar tomonidan bo'lgan har qanday kontent, mahsulot yoki xizmatlardan foydalanish yoki ularga bog'liqligi tufayli kelib chiqadigan yoki yetkaziladigan har qanday zarar va yo'qotishlar uchun bevosita yoki bilvosita javobgar bo'lmasligini qabul qilishingiz kerak. 
	O'zgarishlar
	Biz ushbu foydalanish shartlarini zarur bo'lgan vaqtda o'zgartirish yoki almashtirish huquqiga egamiz. Agar qayta ko'rib chiqish muhim bo'lsa, sizga yangi foydalanish shartlari kuchga kirgunga qadar kamida 7 kun (o'zgarishi mumkin) oldin xabar beriladi. O'zgarishlar tartibi bizning qarorimizga qarab belgilanadi.
	
	Biz bilan bog'lanish
	Agar ushbu foydalanish shartlari bo'yicha savol va takliflaringiz bo'lsa, biz bilan bog'lanishingizni so'raymiz.
	Elektron pochta: info@mbmitcompany.uz
	`,
    authintification: {
      title: `Ro'yxatdan o'tish`,
      personalInfo: `Shaxsiy ma'lumotlaringizni kiriting`,
      name: "Ism",
      surname: "Familiya",
      age: "Yosh",
      gender: {
        title: "Jins",
        male: "Erkak",
        female: "Ayol",
      },
      namazStart: "Namozni necha yoshdan boshlagansiz ?",
      fastingStart: `Ro'zani necha yoshdan boshlagansiz ?`,
      mail: "Elektron pochta manzilingizni kiriting",
      password: "Maxfiy parolingizni kiriting",
      phone: "Telefon raqamingizni kiriting",
      haveAnAcc: "Sahifangiz oldindan mavjudmi ?",
      dontHave: "Sahifangiz mavjud emasmi ?",
      forgetPassword: "Parolni unutdingizmi ?",
      here: "Bu yega",
      press: "bosing",
      send: "Yakunlash",
    },
    changeImg: "Rasmni o’zgartirish",
    mail: "Email",
    phone: "Telefon raqami",
    resetPassword: `Parolni o'zgartirish`,
    password: "Parol kiriting",
    calculate: {
      btnText: "Hisob-kitob",
      doneNamaz: `Tutilmagan ro'zalar oynasi`,
      dayLeft: "Kun qoldi",
      monthLeft: "Oy qoldi",
      leftQazoFromToday: `Bugungi kundan boshlab uzluksiz ro'za tutsangiz!`,
      startedDate: "Boshlanish sanasi",
      finishDate: "Yakunlanish sanasi",
      year: "Yil",
      month: "Oy",
      day: "Kun",
      calculateTitle: `Namoz va Ro'zalarni qayd etish`,
      bomdod: "Bomdod",
      peshin: "Peshin",
      asr: "Asr",
      shom: "Shom",
      xufton: "Xufton",
      vitr: "Vitr",
      countOfFasting: "Tutilgan ro’zalar miqdori",
      countOfNamaz: "Tutilmagan ro’zalar miqdori",
      motivationText: "Mashalloh, Alloh xayrli va bardavom qilsin",
      submit: "Qayd etish",
      fasting: `Ro'za`,
    },
    userBar: {
      welcome: "Xush kelibsiz,",
      namazQazo: "Namoz qazosi",
      fastingQazo: `Ro'za qazosi`,
      age: "yosh",
    },
    lang: {
      title: "Tilni tanlash",
      uz: `O'zbekcha`,
      ru: "Ruscha",
      en: "Inglizcha",
	  kr: `Ўзбекча`,
    },
    logout: {
      logoutText: "Chiqish",
      logoutCongirmText: "Rostdan ham akkauntingizdan chiqishni istaysizmi?",
      yes: "Ha",
      no: `Yo'q`,
    },
    setting: {
      settingTitle: "Sozlamalar",
      profile: "Profil",
      privacyPolicy: "Maxfiylik siyosati",
      theme: "Mavzu",
      termsConditions: "Foydalanish shartlari",
    },
  },
  dashboard: {
    dashboardText: "Asosiy",
    statistics: "Statistikalar",
    mainPage: "Bosh sahifa",
    all: "Jami",
    last: "Qoldi",
    countWindow: "Hisob oynasi",
    fastingDoneDays: `Ro'zalar kundaligi`,
    doneDay: "Tutilgan kunlar",
    notDoneDay: "Tutilmagan kunlar",
    days: {
      mon: "DU",
      tue: "SE",
      wed: "CHO",
      thu: "PA",
      fri: "JU",
      sut: "SHA",
      sun: "YAK",
    },
    readNamaz: `O'qilgan rakatlar`,
    notReadNamaz: `O'qilmagan rakatlar`,
    lastDaysOfNamaz: `O'qilmagan namozlar muddati`,
    lastDaysOfNamazSpeed: "Qazo namozlarini tezlashtirish",
    timeSpeed: "barobar ko'p",
  },
};

const УЗ = {
  main: {
    linkAbout: "Биз ҳақимизда",
    linkLets: "Кириш",
    linkMore: "Батафсил",
    linkDown: "Иловани юклаб олиш",
    heading: {
      logoHead: "Мавқут",
      textOnUz: `Қазо номоз ва рўзаларни адо этиш учун ёрдамчи!`,
      textOnAR: "ان الصلاة كانت على المؤمنين كتابا موقوتا!",
      textOnRU: "“Aлбатта, намоз мўминларга вақтида фарз қилингандир”",
      ayahName: "Нисо сураси, 103-оят",
    },
    clicked: `Mavqut.uz`,
    moreBtn: `
		Mavqut.uz сайтининг имкониятлари ва фойдаланиш тартиби билан қуйида батафсил танишишингиз мумкин:
		1. Рўйхатдан ўтиш
		Рўйхатдан ўтиш учун белгиланган жойларга шахсий маълумотларингизни киритишингиз талаб этилади.
		Экраннинг ўнг томонида шахсий саҳифангиз учун берилган расмлардан бирини танлашингиз мумкин.
		Шунингдек, юқори ўнг бурчакда жойлашган санани ўзгартириш орқали милодий ёки ҳижрий йил ҳисобини кўриш имконияти мавжуд.
		Қуйи қисмда ажратилган бўш жойга электрон почта манзилингиз (э-маил) ва махфий паролингизни киритинг.
		"Юбориш" тугмасини босиш орқали рўйхатдан ўтиш жараёни якунланади.
		2. Созламалар
		Созламалар қисмида киритилган барча маълумотларни ўзгартириш имконияти мавжуд.
		Экраннинг ўнг қисмида кўрсатилган бўлим орқали ўзингизга қулай бўлган тилни танлаш имконияти мавжуд.
		Саҳифанинг юқори ўнг бурчагида жойлашган "Эслатмалар" тугмасини босиш орқали кунлик қазо намозларини адо этиш ҳақидаги эслатмаларни қабул қилишингиз мумкин.
		3. Бош саҳифа
		1. Aсосий саҳифада "Намозлар қазоси" бўлими танланади. 
		2. Ушбу бўлимда фойдаланувчининг 15 ёшидан бошлаб намоз ўқишни бошлаган пайтигача бўлган вақт оралиғидаги умумий қазолар ҳисоби кўрсатилади.
		3. Умумий қазолар 5 вақт намознинг ҳар бири учун алоҳида ҳисоб ҳолида ҳам бериб борилади.
		4. Экраннинг қуйи қисмида умумий адо этилмаган қазо намозлари миқдори ҳар куни ўртача 20 ракатдан ўқилганда, қанча муддат давомида тўлиқ тугатилиши кун, ой, йил ҳисобида кўрсатилади.
		5. "Қазо намозларини тезлаштириш" қисмида кунлик қазо намозлари миқдорини 1, 2 ёки 3 ластДайсОфНамаз: ЪЎқилмаган Намозлар муддатиъ,
		5. "Қазо намозларини незлаштириш" қисмида кунлик қазо намозлари миқдорини 1, 2 ёки 3 ластДайсОфНамазСпеед:Қазо намозларини тезлаштиришъ,
		1. Саҳифанинг юқори қисмидан "Рўза қазолари" бўлими танланади.
		2. Экраннинг марказий қисмида рўза қазоларини адо этишни бугундан бошланганда, якунланиш ластДайсОфНамаз: ЪЎқилмаган Намозлар муддатиъ,
		2. Экраннинг марказий қисмида рўна қазоларини адо этишни бугундан бошланганда, якунланиш ластДайсОфНамазСпеед: ЪЎқазо намозларини тезлаштириш
		3. Рўза қазолари тутилиши бошлаган сана.
		4. Қазолар адо этилишни бошланган кундан узлуксиз тутилганда тўлиқ тугатилиш санаси қайд этиб борилади. Қазоларни қайд этиш қисмида тутилган рўзалар ҳисобига қараб, автоматик равишда ўзгариб боради.
		
		5. Статистика: Намоз қазолари.
		1. Экраннинг ўнг томонида  "Статистика" бўлими танланади.
		2. Статистик маълумотлар кўрилмоқчи бўлган ой ва йил белгиланади. 
		3. Берилган жадвал орқали қазо намозлар адо этилишининг ойлик натижаларни таҳлил қилиш имконияти мавжуд.
		4. Ўқилган ва ўқилмаган қазо намозлар ракатлар ва фоиз ҳисобида фойдаланувчига тақдим этиб борилади.
		
		6.Статистика: Рўза қазолари
		1. Рўза қазоларининг статистик маълумотлари билан танишиш учун экраннинг чап қисмидан "Статистика" бўлими танланади.
		2. Керакли ой ва йил киритилади.
		3. Рўзалар кундалиги қисмида 1 ой давомидаги натижалар қайд этилади.
		4. Тутилган рўзалар сиёҳранг билан, рўза қазоси адо этилмаган кунлар эса бўш ҳолда кўрсатилади.
		
		Ҳисоб-китоб
		1. Aдо этилган рўза ва намоз қазолари фойдаланувчи томонидан ҳисоб-китоб бўлимида қайд этиб борилади.
		2. Фойдаланувчи томонидан киритилган натижалар ҳар бир намоз учун фоиз ҳисобида бериб борилади.
		3. Экраннинг ўнг тарафида жойлашган диаграмма тутилган қазо рўзалар миқдорини фоизлар ҳисобида ва ранглар билан фарқланган ҳолда кўрсатиб беради.
		4. "Намоз ва рўзаларни қайд этиш" қисмида адо этилган қазолар миқдори киритилади. 
		5. Маълумотлар киритилган жорий сана белгиланади.
		6. Барча маълумотлар тақдим этилганидан сўнг "Қайд этиш" тугмаси босилади ва жараён якунланади. Ушбу киритилган маълумотлар асосида барча маълумотлар ва статистик таҳлиллар автоматик тарзда ўзгариб боради.`,

    aboutUsBtn: `Mavqut.uz – Мегабайт Медиа (МБМ) ИТ компаниясининг муаллифлик лойиҳаси бўлиб, барча мусулмон аҳлига намоз ва рўза ибодатларини мукаммал бажаришларида қулайлик яратиш мақсадида яратилган.
    Ушбу сайт МБМ ИТ компанияси томонидан амалга оширилган катта ва мақсадли лойиҳалардан бири бўлиб, бундан ташқари компания қисқа муддат ва юқори сифат тамойилига асосланган ҳолда веб-сайт яратиш, веб дизайн, СЕО оптимизация, ранкинг, СММ, ПР каби замонавий хизмат турларини кўрсатиб келмоқда.
    Mavqut.uz орқали биз, МБМ ИТ компанияси жамоаси, сиз ва яқинларингизга ибодатларни тўлиқ адо этишингизда ёрдам бера олаётганимиздан мамнунмиз.
    
    Mavqut.uz борасидаги фикр ва таклифларни қуйидаги манзиллар орқали қолдиришгиз мумкин.
    
    Электрон почта: info@mbmitcompany.uz
		`,
    privacy: `Махфийлик сиёсати`,
    privacyPolicyText: `
	Шахсий маълумотлардан фойдаланиш сиёсати
	  Хизмат кўрсатувчи ҳисобланган Mavqut.uz веб-сайти МБМ ИТ компанияси томонидан бошқарилади.
	  Ушбу саҳифа Mavqut.uz веб-сайти фойдаланувчиларининг шахсий маълумотларини тўплаш, улардан фойдаланиш ва ошкор қилиш тўғрисидаги сиёсати ҳақида хабардор қилиш учун ишлатилади.
	  Aгар сиз бизнинг хизматимиздан фойдаланишга қарор қилсангиз ушбу сиёсат билан боғлиқ маълумотларни тўплаш ва улардан фойдаланишга розилик билдирган ҳисобланасиз. Биз тўплаган шахсий маълумотлар хизматни тақдим этиш ва такомиллаштириш учун ишлатилади. Сизнинг маълумотларингиз ҳеч қандай мақсадлар учун фойдаланилмайди ва ҳеч кимга берилмайди (қуйида тавсифланган ҳолатлар бундан мустасно).
	  Aгар шахсий маълумотлардан фойдаланиш сиёсатида бошқача тартиб белгиланмаган бўлса, ушбу Mavqut.uz сайтидаги атамалар бизнинг сайтдан фойдаланиш шартлари ва қоидаларидаги маънога эга
	  Aхборотларни йиғиш ва улардан фойдаланиш
	  Фойдаланувчилар учун хизматнинг самарадорлигини таъминлаш ва сайт фаолиятини ривожлантириш учун сизнинг шахсингизни аниқлайдиган маълумотлар, шу жумладан исм, телефон рақами ва электрон почта манзилингизни тақдим этишингизни талаб қилишимиз мумкин. Биз тўплаган маълумотлар сиз билан боғланиш ёки сизнинг шахсингизни аниқлаш учун ишлатилади.
	  Журнал маълумотлари
	  Сизга шуни маълум қиламизки, ҳар сафар бизнинг хизматимизга ташриф буюрганингизда, биз сизнинг браузерингиз юборган журнал маълумотлари деб аталувчи маълумотларни тўплаймиз. Ушбу журнал маълумотлари компютерингизнинг Интернет-протоколи ("ИП") манзили, браузер версияси, сиз ташриф буюрган хизматимизнинг саҳифалари, ташриф вақти ва санаси, ушбу саҳифаларда ўтказган вақти ва бошқа статистик маълумотларларни ўз ичига олади.
	  
	  Хизмат кўрсатувчи провайдерлар
	  Қуйидаги сабабларга кўра биз учинчи томон компаниялари ва жисмоний шахсларни сайт хизматига жалб қилишимиз мумкин:
	  Бизнинг хизматимизга кўмаклашиш;
	  Хизматни бизнинг номимиздан тақдим этиш;
	  Хизматга оид топшириқларни амалга ошириш;
	  Хизматимиз қандай ишлаётганини таҳлил қилишда ёрдам бериш.
	  Учинчи томонга юклатилган вазифаларни бажариш учун уларга хизматимиз фойдаланувчилари яъни сизнинг шахсий маълумотларингиздан фойдаланиш ҳуқуқи берилади. Aммо, уларга маълумотни ошкор қилмасликлари ёки бошқа мақсадларда фойдаланмасликлари мажбурияти қўйилган.
	  
	  Хавфсизлик
	  Биз сизнинг шахсий маълумотларингизни тақдим этишдаги ишончингизни қадрлаймиз, шунинг учун уни ҳимоя қилишда тижорий мақбул воситалардан фойдаланишга интиламиз. Бироқ, шуни ёдда тутингки, бирор бир интернет орқали узатиш ёки элеcтрон маълумотларни сақлаш усули 100% хавфсиз ва ишончли эмас ва биз унинг мутлақ хавфсизлигини кафолатлай олмаймиз.
	  
	  Бошқа сайтларга ҳаволалар

	Бизнинг хизматимиз бошқа сайтларга ҳаволаларни ўз ичига олиши мумкин. Сиз учинчи томон ҳаволасини босганингизда, ўша сайтга йўналтириласиз. Эътибор беринг, ушбу ташқи сайтлар биз томондан бошқарилмайди. Шу сабабли, веб-сайтларнинг шахсий маълумотлардан фойдаланиш сиёсатини кўриб чиқишингизни қатъий тавсия қиламиз. Биз учинчи томон сайтлари ёки хизматларининг мазмуни, шахсий маълумотлардан фойдаланиш сиёсати ёки амалиёти учун ҳеч қандай назорат ҳуқуқига эга эмасмиз ва ҳеч қандай жавобгарликни ўз зиммамизга олмаймиз.
	  Ушбу шахсий маълумотлардан фойдаланиш сиёсатига киритилган ўзгаришлар
	  Шуни унутмангки, шахсий маълумотлардан фойдаланиш сиёсати саҳифаси янгилаб борилади. Ўзгаришлардан хабардор бўлиб туриш учун саҳифани вақти-вақти билан кўриб чиқишингизни маслаҳат берамиз. Ушбу саҳифада Махфийлик сиёсати бандлари ўзгартирилган ёки янги киритилган пайтда барча ўзгаришлар тўғрисида сизга хабар берамиз. Киритилган ўзгаришлар саҳифада жойлаштирилганидан сўнг дарҳол кучга киради.
	  
	  Биз билан боғланиш
	  Aгар сизда шахсий маълумотлардан фойдаланиш сиёсатига оид савол ёки таклифлар бўлса, биз билан боғланишингизни сўраймиз.
	  Электрон почта: info@mbmitcompany.uz
	`,
    terms: `Фойдаланиш шартлари`,
    termAndConditionText: `Илтимос, МБМ ИТ компанияси томонидан бошқариладиган Mavqut.uz веб-сайтидан фойдаланишдан олдин ушбу фойдаланиш шартларини диққат билан ўқинг. Сизнинг хизматга киришингиз ва ундан фойдаланишингиз ушбу шартларни қабул қилиш ва уларга риоя қилишингиз билан боғлиқ. Ушбу фойдаланиш шартлари хизматга кирадиган ёки ундан фойдаланадиган барча ташриф буюрувчиларга, фойдаланувчиларга ва бошқаларга нисбатан қўлланилади.
	Хизматга кириш ёки ундан фойдаланиш орқали сиз ушбу шартларга риоя қилишга розилик билдирасиз. Aгар сиз фойдаланиш шартларининг бирор бир қисмига рози бўлмасангиз, у ҳолда сиз хизматдан фойдала олмайсиз.
	Бошқа веб-сайтларга ҳаволалар
	Бизнинг хизматимизда МБМ ИТ компанияси эгаси бўлмаган ёки сайтни бошқармайдиган учинчи томон веб-сайтларига ёки хизматларига ҳаволалар бўлиши мумкин.
	МБМ ИТ компанияси учинчи томон веб-сайтлари ёки хизматларининг мазмуни, шахсий маълумотлардан фойдаланиш сиёсати ёки амалиёти устидан назорат ва жавобгарликни ўз зиммасига олмайди. 
	Бундан ташқари сиз МБМ ИТ компанияси ва ҳавола қилинган бошқа сайтлар ва хизматлар томонидан бўлган ҳар қандай контент, маҳсулот ёки хизматлардан фойдаланиш ёки уларга боғлиқлиги туфайли келиб чиқадиган ёки етказиладиган ҳар қандай зарар ва йўқотишлар учун бевосита ёки билвосита жавобгар бўлмаслигини қабул қилишингиз керак. 
	Ўзгаришлар
	Биз ушбу фойдаланиш шартларини зарур бўлган вақтда ўзгартириш ёки алмаштириш ҳуқуқига эгамиз. Aгар қайта кўриб чиқиш муҳим бўлса, сизга янги фойдаланиш шартлари кучга киргунга қадар камида 7 кун (ўзгариши мумкин) олдин хабар берилади. Ўзгаришлар тартиби бизнинг қароримизга қараб белгиланади.
	
	Биз билан боғланиш
	Aгар ушбу фойдаланиш шартлари бўйича савол ва таклифларингиз бўлса, биз билан боғланишингизни сўраймиз.
	Электрон почта: info@mbmitcompany.uz
	`,
    authintification: {
      title: `Рўйхатдан ўтиш`,
      personalInfo: `Шахсий маълумотларингизни киритинг`,
      name: "Исм",
      surname: "Фамилия",
      age: "Ёш",
      gender: {
        title: "Жинс",
        male: "Эркак",
        female: "Aёл",
      },
      namazStart: "Намозни неча ёшдан бошлагансиз ?",
      fastingStart: `Рўзани неча ёшдан бошлагансиз ?`,
      mail: "Электрон почта манзилингизни киритинг",
      password: "Махфий паролингизни киритинг",
      phone: "Телефон рақамингизни киритинг",
      haveAnAcc: "Саҳифангиз олдиндан мавжудми ?",
      dontHave: "Саҳифангиз мавжуд эмасми ?",
      forgetPassword: "Паролни унутдингизми ?",
      here: "Бу ега",
      press: "босинг",
      send: "Якунлаш",
    },
    changeImg: "Расмни ўзгартириш",
    mail: "Электрон почта",
    phone: "Телефон рақами",
    resetPassword: `Паролни ўзгартириш`,
    password: "Парол киритинг",
    calculate: {
      btnText: "Ҳисоб-китоб",
      doneNamaz: `Тутилмаган рўзалар ойнаси`,
      dayLeft: "Кун қолди",
      monthLeft: "Ой қолди",
      leftQazoFromToday: `Бугунги кундан бошлаб узлуксиз рўза тутсангиз!`,
      startedDate: "Бошланиш санаси",
      finishDate: "Якунланиш санаси",
      year: "Йил",
      month: "Ой",
      day: "Кун",
      calculateTitle: `Намоз ва Рўзаларни қайд этиш`,
      bomdod: "Бомдод",
      peshin: "Пешин",
      asr: "Aср",
      shom: "Шом",
      xufton: "Хуфтон",
      vitr: "Витр",
      countOfFasting: "Тутилган рўзалар миқдори",
      countOfNamaz: "Тутилмаган рўзалар миқдори",
      motivationText: "Машаллоҳ, Aллоҳ хайрли ва бардавом қилсин",
      submit: "Қайд этиш",
      fasting: `Рўза`,
    },
    userBar: {
      welcome: "Хуш келибсиз,",
      namazQazo: "Намоз қазоси",
      fastingQazo: `Рўза қазоси`,
      age: "ёш",
    },
    lang: {
      title: "Тилни танлаш",
      uz: `O'zbekcha`,
      ru: "Русча",
      en: "Инглизча",
	  kr: `Ўзбекча`,
    },
    logout: {
      logoutText: "Чиқиш",
      logoutCongirmText: "Ростдан ҳам аккаунтингиздан чиқишни истайсизми?",
      yes: "Ҳа",
      no: `Йўқ`,
    },
    setting: {
      settingTitle: "Созламалар",
      profile: "Профил",
      privacyPolicy: "Махфийлик сиёсати",
      theme: "Мавзу",
      termsConditions: "Фойдаланиш шартлари",
    },
  },
  dashboard: {
    dashboardText: "Aсосий",
    statistics: "Статистика",
    mainPage: "Бош саҳифа",
    all: "Жами",
    last: "Қолди",
    countWindow: "Ҳисоб ойнаси",
    fastingDoneDays: `Рўзалар кундалиги`,
    doneDay: "Тутилган кунлар",
    notDoneDay: "Тутилмаган кунлар",
    days: {
      mon: "ДУ",
      tue: "СЕ",
      wed: "ЧО",
      thu: "ПA",
      fri: "ЖУ",
      sut: "ШA",
      sun: "ЯК",
    },
    readNamaz: `Ўқилган ракатлар`,
    notReadNamaz: `Ўқилмаган ракатлар`,
    lastDaysOfNamaz: `Ўқилмаган намозлар муддати`,
    lastDaysOfNamazSpeed: "Қазо намозларини тезлаштириш",
    timeSpeed: "баробар кўп",
  },
};

const RU = {
  main: {
    linkAbout: "О нас",
    linkLets: "Вход",
    linkMore: "Подробно",
    linkDown: "Скачать приложение",
    heading: {
      logoHead: "Мавкут",
      textOnUz: `Помощник для выполнения каза намаз и пост!`,
      textOnAR: "ان الصلاة كانت على المؤمنين كتابا موقوتا!",
      textOnRU:
        "«Поистине, намаз является для верующих предписанием в определенное время».",
      ayahName: "Сура Ан-Ниса, Аят 103",
    },
    clicked: `Mavqut.uz`,
    moreBtn: `
		Вы можете ознакомиться подробно с возможностями и режимом использования Mavqut.uz ниже:
		1. Регистрация
		Вам необходимо будет ввести свою личную информацию в поля, предусмотренные для регистрации.
		В правой части экрана вы можете выбрать одно из изображений, предоставленных для вашей личной страницы.
		Также можно просмотреть годовой отчет НЭ или Хиджры, изменив дату в правом верхнем углу.
		Введите свой адрес электронной почты и пароль в поле внизу.
		Нажатие кнопки «Отправить» завершит процесс регистрации.
		2. Настройки
		Есть возможность изменить всю информацию, введенную в разделе настроек.
		Вы можете выбрать язык, который вам подходит, в разделе, показанном в правой части экрана.
		Вы можете получать напоминания о выполнении ежедневного каза намаза, нажав на кнопку «Заметки» в правом верхнем углу страницы.
		3. Главная
		1. На главной странице выберите раздел «Каза намаз».
		2. В этом разделе показан расчет общего количества каза намаз за период с 15 лет до начала намаза пользователя.
		3. Общая каза намаз также дается как отдельный счет для каждого из 5 времени намазов.
		4. Внизу экрана, когда количество пропущенных намазов считывается в среднем 20 ракатов в день, указывается период полного выполнения в днях, месяцах, годах.
		5. В разделе «Ускорение Каза намаз» можно определить время завершения, когда количество каза намаз выполняется в 1, 2 или 3 раза больше.`,

    aboutUsBtn: `Mavqut.uz – это авторский проект Megabyte Media (MBM) IT компании, созданный для того, чтобы всем мусульманам было легче совершать свои молитвы и поститься.
	Этот сайт является одним из крупных и целевых проектов, реализуемых компанией MBM IT, кроме того, компания предлагает современные услуги, такие как создание веб-сайтов, веб-дизайн, SEO-оптимизация, ранкинг, SMM, PR по принципу краткосрочно и высокого качества.
	
	C Mavqut.uz, мы, команда IT компании MBM, рады, что можем помочь вам и вашим близким завершить их молитвы.
	
	Вы можете оставлять свои комментарии и предложения о Mavqut.uz по следующим адресам:
	
	(Номер телефона и электронная почта)
	(Адрес)
	`,
    privacy: `Политика конфиденциальности`,
    privacyPolicyText: `Компания MBM IT управляет сайтом Mavqut.uz, на котором предоставляется Услуга.
	Эта страница используется для информирования посетителей веб-сайта о нашей политике в отношении сбора, использования и раскрытия Личной информации, если кто-либо решил использовать наш Сервис, веб-сайт Mavqut.uz.
	Если вы решите использовать наш Сервис, вы соглашаетесь на сбор и использование информации в соответствии с этой политикой. Личная информация, которую мы собираем, используется для предоставления и улучшения Сервиса. Мы не будем использовать или передавать вашу информацию кому-либо, кроме случаев, описанных в настоящей Политике конфиденциальности.
	Термины, используемые в настоящей Политике конфиденциальности, имеют то же значение, что и в наших Положениях и условиях, которые доступны на Mavqut.uz, если иное не определено в настоящей Политике конфиденциальности.
	
	Сбор и использование информации
	Для повышения удобства использования нашего Сервиса мы можем потребовать от вас предоставить нам определенную личную информацию, включая ваше имя, номер телефона и адрес электронной почты. Информация, которую мы собираем, будет использоваться для связи с вами или для вашей идентификации.
	
	Данные журнала
	Мы хотим сообщить вам, что всякий раз, когда вы посещаете наш Сервис, мы собираем информацию, которую ваш браузер отправляет нам, которая называется данными журнала. Эти данные журнала могут включать такую информацию, как IP-адрес вашего компьютера, версия браузера, страницы нашего Сервиса, которые вы посещаете, время и дата вашего посещения, время, проведенное на этих страницах, и другие статистические данные.
	
	Поставщики услуг
	Мы можем нанимать сторонние компании и частных лиц по следующим причинам:
	Для облегчения нашего Сервиса;
	Для предоставления Сервиса от нашего имени;
	Для оказания услуг, связанных с Сервисом;
	Чтобы помочь нам в анализе использования нашего Сервиса.
	Мы хотим проинформировать пользователей нашего Сервиса о том, что эти третьи стороны имеют доступ к вашей Личной информации. Причина в том, чтобы выполнять поставленные перед ними задачи от нашего имени. Однако они обязаны не раскрывать и не использовать информацию для каких-либо других целей.
	
	Безопасность
	Мы ценим ваше доверие к предоставлению нам вашей личной информации, поэтому мы стремимся использовать коммерчески приемлемые средства ее защиты. Но помните, что ни один метод передачи через Интернет или метод электронного хранения не является на 100% безопасным и надежным, и мы не можем гарантировать его абсолютную безопасность.
	
	Ссылки на другие сайты
	Наш Сервис может содержать ссылки на другие сайты. Если вы нажмете на стороннюю ссылку, вы будете перенаправлены на этот сайт. Обратите внимание, что эти внешние сайты не управляются нами. Поэтому мы настоятельно рекомендуем вам ознакомиться с Политикой конфиденциальности этих веб-сайтов. Мы не контролируем и не несем ответственности за контент, политику конфиденциальности или действия любых сторонних сайтов или служб.
	
	Изменения в настоящей Политике конфиденциальности
	Мы можем время от времени обновлять нашу Политику конфиденциальности. Поэтому мы советуем вам периодически просматривать эту страницу на предмет изменений. Мы уведомим вас о любых изменениях, разместив новую Политику конфиденциальности на этой странице. Эти изменения вступают в силу сразу после их публикации на этой странице.
	
	Свяжитесь с нами
	Если у вас есть какие-либо вопросы или предложения относительно нашей Политики конфиденциальности, не стесняйтесь обращаться к нам.
	Электронная почта: info@mbmitcompany.uz
	`,
    terms: `Условия и положения`,
    termAndConditionText: `
	Пожалуйста, внимательно прочтите эти Условия перед использованием веб-сайта Mavqut.uz, управляемого MBM IT компанией. 
	Ваш доступ к Сервису и его использование зависят от вашего согласия и соблюдения настоящих Условий. Эти Условия распространяются на всех посетителей, пользователей и других лиц, которые получают доступ к Сервису или используют его.
	Получая доступ к Сервису или используя его, вы соглашаетесь соблюдать настоящие Условия. Если вы не согласны с какой-либо частью Условий, вы не можете получить доступ к Сервису.
	
	Ссылки на другие веб-сайты
	
	Наша Служба может содержать ссылки на сторонние веб-сайты или службы, которые не принадлежат и не контролируются компанией MBM IT.
	Компания MBM IT не контролирует и не несет ответственности за содержание, политику конфиденциальности или действия любых сторонних веб-сайтов или служб. Вы также признаете и соглашаетесь с тем, что компания MBM IT не несет ответственности, прямо или косвенно, за любой ущерб или убытки, вызванные или предположительно вызванные или в связи с использованием или связанным  любого такого контента, товаров или услуг, доступных на или через любые такие веб-сайты или службы.
	
	Изменения
	
	Мы оставляем за собой право изменять или заменять эти условия использования по мере необходимости. Если обзор важен, вы получите уведомление не менее чем за 7 дней (следует изменить) до того, как новые условия использования вступят в силу. Порядок изменений определяется нашим решением.
	
	Связаться с нами
	
	Если у вас есть какие-либо вопросы об этих Условиях, свяжитесь с нами.
	Электронная почта: info@mbmitcompany.uz
	`,
    authintification: {
      title: `Зарегистрироваться`,
      personalInfo: `Введите вашу личную информацию`,
      name: "Имя",
      surname: "Фамилия",
      age: "Возраст",
      gender: {
        title: "Пол",
        male: "Мужской",
        female: "Женский",
      },
      namazStart: "В каком возрасте вы начали намаз ?",
      fastingStart: `В каком возрасте вы начали пост ?`,
      mail: "Введите ваш адрес электронной почты",
      password: "Введите свой пароль",
      phone: "Введите свой номер телефона",
      haveAnAcc: "У вас уже есть страница?",
      dontHave: "Нет страницы?",
      forgetPassword: "Забыли пароль?",
      here: "сюда",
      press: "Кликните",
      send: "Отправить",
    },
    changeImg: "Изменить изображение",
    mail: "Электронная почта",
    phone: "Номер телефона",
    resetPassword: `Изменить пароль`,
    password: "Введите пароль",
    calculate: {
      btnText: "Расчет",
      doneNamaz: `Окно калькулятора`,
      dayLeft: "день осталось",
      monthLeft: "месяц осталось",
      leftQazoFromToday: `Если вы будете постоянно поститься с сегодняшнего дня`,
      startedDate: "Дата начала",
      finishDate: "Дата завершения",
      year: "Год",
      month: "Месяц",
      day: "День",
      calculateTitle: `Запись ракатов и постов`,
      bomdod: "Фаджр",
      peshin: "Зухр",
      asr: "Аср",
      shom: "Магриб",
      xufton: "Иша",
      vitr: "Витр",
      countOfFasting: "Количество совершенных постов",
      countOfNamaz: "Количество пропущенных ракаты",
      motivationText:
        "Машаллах, пусть Аллах сделает это благословенным и продолжительным!",
      submit: "Qayd etish",
      fasting: `Пост`,
    },
    userBar: {
      welcome: "Добро пожаловать,",
      namazQazo: "Каза намаз",
      fastingQazo: `Каза пост`,
      age: "лет",
    },
    lang: {
      title: "Выбор языка",
      uz: `Узбекский`,
      ru: "Русский",
      en: "Английский",
	  kr: `Ўзбекча`,
    },
    logout: {
      logoutText: "Выход",
      logoutCongirmText: "Вы точно хотите выйти?",
      yes: "Да",
      no: `Нет`,
    },
    setting: {
      settingTitle: "Настройки",
      profile: "Профиль",
      privacyPolicy: "Политика конфиденциальности",
      theme: "Темы",
      termsConditions: "Условия и положения",
    },
  },
  dashboard: {
    dashboardText: "Главная",
    statistics: "Статистика",
    mainPage: "Главная",
    all: "Итого:",
    last: "осталось",
    countWindow: "Окно Каза намаз",
    fastingDoneDays: `Дневник голодания`,
    doneDay: "Совершенные дни",
    notDoneDay: "Совершенные дни",
    days: {
      mon: "Пн",
      tue: "Вт",
      wed: "Ср",
      thu: "Чт",
      fri: "Пт",
      sut: "Сб",
      sun: "Вс",
    },
    readNamaz: `Совершенные ракаты`,
    notReadNamaz: `Пропущенные ракаты`,
    lastDaysOfNamaz: `Продолжительность неисполненного намаза`,
    lastDaysOfNamazSpeed: "Ускорение каза намаза",
    timeSpeed: "раз больше",
  },
};

const EN = {
  main: {
    linkAbout: "About us",
    linkLets: `Let's go`,
    linkMore: "More",
    linkDown: "Download application",
    heading: {
      logoHead: "Mavqut",
      textOnUz: `Assistant to complete the qaza namaz and fasting!`,
      textOnAR: "ان الصلاة كانت على المؤمنين كتابا موقوتا!",
      textOnRU: "“Indeed, performing prayers is a duty on the believers at the appointed times”.",
      ayahName: "Surah An-Nisa, Ayat 103",
    },
    clicked: `Mavqut.uz`,
    moreBtn: `
		You can familiarize yourself with the possibilities and mode of use of Mavqut.uz below:
		1. Registration
		You will be required to enter your personal information in the fields provided for registration.
		On the right side of the screen, you can select one of the images provided for your personal page.
		It is also possible to view the AD or Hijri year account by changing the date in the upper right corner.
		Enter your email address and password in the space provided at the bottom.
		Clicking the "Send" button will complete the registration process.
		2. Settings
		It is possible to change all the information entered in the settings section.
		You can choose the language that suits you through the section shown on the right side of the screen. 
		You can receive reminders about performing daily qaza namaz by clicking on the “Notes” button in the top right corner of the page.
		3. Home
		1. On the main page, select the "Qaza Namaz" section.
		2. This section shows the calculation of the total number of qaza namaz in the period from the age of 15 until the user starts namaz.
		3. General qaza namaz is also given as a separate account for each of the 5 times of namaz.
		4. At the bottom of the screen, when the number of missed namaz is read in an average of 20 rakats per day, the period of full completion is indicated in terms of days, months, years.
		5. In the section "Acceleration of Qaza Namaz" it is possible to determine the time of completion when the amount of qaza namaz is performed 1, 2 or 3 times more.`,

    aboutUsBtn: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime soluta deserunt, totam amet beatae ut similique distinctio corporis repellat doloribus facilis nesciunt porro ad. Excepturi dodiandae vero necessitatibus. Maxime recusandae ipsum quas vitae. Rem eos saepe aliquam numquam dolor adipisci doloribu`,
	privacy: `Privacy Policy of Mavqut.uz`,
    privacyPolicyText: `
		MBM IT Company operates the Mavqut.uz website, which provides the SERVICE.
		This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service, Mavqut.uz website.
		If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
		The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at http://www.mavqut.uz , unless otherwise defined in this Privacy Policy.
		
		Information Collection and Use
		For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including your name, phone number, and e-mail address. The information that we collect will be used to contact or identify you.
		
		Log Data
		We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
		
		Service Providers
		We may employ third-party companies and individuals due to the following reasons:
		To facilitate our Service;
		To provide the Service on our behalf;
		To perform Service-related services; 
		To assist us in analyzing how our Service is used.
		We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
		
		Security
		We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
		
		Links to Other Sites
		Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
		
		Changes to This Privacy Policy
		We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
		
		Contact Us
		If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.`,
		terms: `Terms and Condition`,
    termAndConditionText: `
		Please read these Terms and Conditions  carefully before using the http://www.mavqut.uz website operated by MBM IT Company.
		Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
		By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
		
		Links To Other Web Sites
		Our Service may contain links to third-party web sites or services that are not owned or controlled by MBM IT Company.
		MBM IT Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that MBM IT Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
		
		Changes
		We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 7 days (should be changed) days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
		
		Contact Us
		If you have any questions about these Terms, please contact us.`,
    authintification: {
      title: `Sign Up`,
      personalInfo: `Enter your personal information`,
      name: "Name",
      surname: "Surname",
      age: "Age",
      gender: {
        title: "Gender",
        male: "Male",
        female: "Female",
      },
      namazStart: "At what age did you start namaz ?",
      fastingStart: `At what age did you start fasting ?`,
      mail: "Enter your email address",
      password: "Enter your password",
      phone: "Enter your phone number",
      haveAnAcc: "Do you have an account",
      dontHave: "No account?",
      forgetPassword: "Forgot password?",
      here: "Click",
      press: "here",
      send: "Send",
    },
    changeImg: "Change the image",
    mail: "Email",
    phone: "Phone number",
    resetPassword: `Change password`,
    password: "Enter password",
    calculate: {
      btnText: "Calculating",
      doneNamaz: `Calculator Window`,
      dayLeft: "day is left",
      monthLeft: "month is left",
      leftQazoFromToday: `If you fast continuously from today!`,
      startedDate: "Started date",
      finishDate: "Completion date",
      year: "Year",
      month: "Month",
      day: "Day",
      calculateTitle: `Submit qaza namaz and fasts`,
      bomdod: "Fajr",
      peshin: "Dhuhr",
      asr: "Asr",
      shom: "Maghrib",
      xufton: "Isha",
      vitr: "Witr",
      countOfFasting: "The amount of fasted fasts",
      countOfNamaz: "The amount of missed fasts",
      motivationText: "Mashallah, may Allah makes it blessed and lasting!",
      submit: "Submit",
      fasting: `Fast`,
    },
    userBar: {
      welcome: "Welcome,",
      namazQazo: "Qaza Namaz",
      fastingQazo: `Qaza Fasting`,
      age: "years old",
    },
    lang: {
      title: "Choose language",
      uz: `Uzbek`,
      ru: "Russian",
      en: "English",
	  kr: `Ўзбекча`,
    },
    logout: {
      logoutText: "Exit",
      logoutCongirmText: "Do you really want to log out?",
      yes: "Yes",
      no: `No`,
    },
    setting: {
      settingTitle: "Settings",
      profile: "Profile",
      privacyPolicy: "Privacy policy",
      theme: "Themes",
      termsConditions: "Terms & Conditions",
    },
  },
  dashboard: {
    dashboardText: "Dashboard",
    statistics: "Statistics",
    mainPage: "Home",
    all: "Overall:",
    last: "is left",
    countWindow: "Calculator Window",
    fastingDoneDays: `Fasts dairy`,
    doneDay: "Completed days",
    notDoneDay: "Completed days",
    days: {
      mon: "MON",
      tue: "TUE",
      wed: "WED",
      thu: "THU",
      fri: "FRI",
      sut: "SAT",
      sun: "SUN",
    },
    readNamaz: `Completed rakats`,
    notReadNamaz: `Uncompleted rakats`,
    lastDaysOfNamaz: `Duration of unperformed namaz`,
    lastDaysOfNamazSpeed: "Accelerate the Qaza Namaz",
    timeSpeed: "times more",
  },
};

export const Lang = {
  UZ,
  УЗ,
  RU,
  EN,
};
