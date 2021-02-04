
const Uz = {
	body: {
		h1: "Filter orqali xonadon tanlang",
		filterLabel: {
			kompaniya: 'Qurilish kompaniyasi',
			complex: 'Kompleks',
			xonasoni: 'Xona soni',
			yili: 'Kredit muddati'
		},
		filterButton: {
			button: 'Qidirish'
		}
	},
	header: {
		langLabel: 'Tilni tanlang',
		nav: {
			home: 'Uy saxifasi',
			about: 'Biz haqimizda',
			admin: 'Admin',
			filter: 'Filter'
		}
	},
	infoBox: {
		million: 'million',
		xonali: 'xonali',
		kvm: 'kvadrat metr',
		address: 'Shaxar markazida'
	},
	infoBank: {
		milliongacha: 'milliongacha',
		krmuddat: 'Kredit muddati',
		stavkasi: 'Foiz stavkasi',
		yil: 'yil'
	},
	infoCalc: {
		kalk: 'Kalkulator',
		baxosi: 'Xonadon baxosi',
		boshlan: `Boshlang'ich to'lov`,
		oytolov: `Oyli to'lov`,
		xizmat: 'Bank xizmati',
		davr: `To'lov davri`
	}
}


const UZ = {
	main: {
		linkAbout: 'Biz haqimizda',
		linkLets: 'Kirish',
		linkMore: 'Batafsil',
		linkDown: 'Dasturni yuklab olish',
		heading: {
			logoHead: 'Mavqut',
			textOnUz: 'Qazo nomoz va ro\'zalarni ado etish uchun yordanchi!',
			textOnAR: 'ان الصلاة كانت على المؤمنين كتابا موقوتا!',
			textOnRU: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At!!',
			ayahName: 'Niso - 103'
		},
		moreBtn: `Mavqut.uz
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
		5. "Qazo namozlarini tezlashtirish" qismida kunlik qazo namozlari miqdorini 1, 2 yoki 3 marotaba ko'proq ado etilganda tugatilish muddatini aniqlash imkoniyati mavjud.4. Asosiy oyna
		1. Sahifaning yuqori qismidan "Ro'za qazolari" bo'limi tanlanadi.
		2. Ekranning markaziy qismida ro'za qazolarini ado etishni bugundan boshlanganda, yakunlanish muddati kun va oy hisobida ko'rsatiladi.
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
		
		aboutUsBtn: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime soluta deserunt, totam amet beatae ut similique distinctio corporis repellat doloribus facilis nesciunt porro ad. Excepturi dolor illum pariatur perspiciatis autem impedit. Excepturi aspernatur, sequi vero ipsum, doloribus dicta fugiat accusamus commodi minima ducimus, atque vitae voluptatum cupiditate dolores aliquam ipsa adipisci ea sed id expedita nulla reprehenderit delectus. Esse, asperiores nemo temporibus quod eos dicta, eveniet ipsam distinctio sint velit aut quos voluptate consectetur nulla impedit rem odio qui ea dolor! Est mollitia eum architecto dolores ducimus iste. Earum provident aspernatur soluta ipsa deleniti quam officiis accusamus eveniet sapiente quibusdam laudantium labore tempora a expedita quis ducimus iure, debitis ut eaque hic delectus consequuntur quasi non? Odit maxime consequatur voluptas, mollitia dicta ut quas molestias eius eveniet distinctio! Et architecto porro, illo soluta voluptates saepe ducimus obcaecati aut harum, cupiditate, repellat suscipit! Corrupti consectetur nulla vitae repudiandae vel eveniet magnam neque suscipit, necessitatibus veritatis ab, quo deleniti. Quo harum corporis officia est alias iste. Necessitatibus quo neque, molestias molestiae dignissimos esse laboriosam, repudiandae quae soluta nisi illum cupiditate animi repellendus assumenda nostrum minima veritatis consequatur cum perspiciatis, dicta facilis nobis omnis? Tempore cum ad eos repellendus inventore quas, sunt architecto excepturi dolorum repellat eum doloremque beatae voluptatem sed officia possimus iusto dolorem deleniti! Dolorum ullam laudantium consectetur officiis nihil quaerat odit quos nemo, quas velit officia optio facere aperiam assumenda ipsam animi ab omnis aut error nostrum dolor facilis numquam. Tenetur porro asperiores temporibus eius possimus in expedita veniam ea repellendus odio ipsam ad commodi, error, doloremque dolor atque aliquam deleniti veritatis maxime mollitia ducimus quam. Reprehenderit quasi, pariatur id suscipit fuga laborum rem veritatis minus corrupti officiis nisi labore eligendi eius amet debitis explicabo tempora necessitatibus incidunt saepe a ipsam! Dolores nulla molestiae accusamus, aliquid voluptatem minima iste sed vitae laborum quos vero dolore maiores reprehenderit, libero dolor quas earum aliquam assumenda ut, ducimus culpa adipisci eos iure placeat. Quos doloribus perspiciatis, perferendis maiores amet veritatis provident voluptatum asperiores adipisci pariatur facilis itaque quo dignissimos eligendi, consequatur vitae. Ad incidunt, sequi inventore quam provident harum architecto blanditiis ex laudantium reiciendis tempore dolorum vel saepe eaque sit rerum. Facere necessitatibus ullam odio, eum alias molestiae, architecto nam et pariatur, fuga repellendus porro dolorum laborum reiciendis quidem voluptatibus nihil saepe quae? Soluta nisi aliquam doloribus hic necessitatibus impedit accusamus tempora quisquam illo sequi, maxime eveniet ratione illum unde atque quas corporis pariatur nemo! Dolorum quisquam explicabo porro voluptatum at unde praesentium ipsa. Sit aliquid ab dignissimos sapiente odit consequatur laborum ducimus eligendi non, quod quisquam labore laudantium doloribus corrupti omnis repellendus id veritatis. At esse, quo id eaque architecto ipsam fugiat aspernatur vitae, exercitationem illum error ipsum delectus accusamus culpa eum blanditiis voluptate voluptatem enim voluptas! Quod perspiciatis voluptatem quia repellendus libero! Labore pariatur enim amet, itaque atque commodi eveniet perferendis repellat quia, vero culpa. Velit distinctio, tenetur expedita inventore sint quidem eveniet rerum non quaerat ipsum maiores, omnis doloribus dolore suscipit aliquid quia numquam consequatur? At voluptates nisi ipsam maxime recusandae. Animi rem exercitationem reiciendis voluptatibus dolore sit deleniti, maiores corporis perferendis! Saepe rem error similique, repellat esse iste facilis adipisci, ad maiores deserunt cum fugiat minima perspiciatis nisi eveniet veniam quis, repudiandae vero necessitatibus. Maxime recusandae ipsum quas vitae. Rem eos saepe aliquam numquam dolor adipisci doloribu',
	},
}


export default {
	UZ,
	Uz
}