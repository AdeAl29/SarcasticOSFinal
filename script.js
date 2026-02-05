// --- DATA & CONFIG ---
const CONFIG = {
    DEFAULTS: {
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Felix",
        cover: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    ONLINE: {
        enabled: true,
        provider: 'firebase',
        firebase: {
            apiKey: 'AIzaSyBzVK5eqahJRhu24-Ym8-hguoDKuozKVrc',
            authDomain: 'sarcasticos-2aaa6.firebaseapp.com',
            databaseURL: 'https://sarcasticos-2aaa6-default-rtdb.asia-southeast1.firebasedatabase.app/',
            projectId: 'sarcasticos-2aaa6',
            appId: '1:371675367958:web:b1c123167572476e3cc337'
        }
    },
    SOUNDS: [
        {id:'none', name:'Hening', icon:'mic-off', src:''},
        {id:'rain', name:'Hujan', icon:'cloud-rain', src:'https://assets.mixkit.co/active_storage/sfx/1235/1235-preview.mp3'},
        {id:'fire', name:'Api', icon:'flame', src:'https://assets.mixkit.co/active_storage/sfx/1330/1330-preview.mp3'},
        {id:'forest', name:'Hutan', icon:'trees', src:'https://assets.mixkit.co/active_storage/sfx/1210/1210-preview.mp3'},
        {id:'cafe', name:'Cafe', icon:'coffee', src:'https://assets.mixkit.co/active_storage/sfx/440/440-preview.mp3'},
        {id:'night', name:'Malam', icon:'moon', src:'https://assets.mixkit.co/active_storage/sfx/1274/1274-preview.mp3'},
    ],
    RADIO_TRACKS: [
        { title: "Lagu 1", src: "lagu1.mp3" },
        { title: "Lagu 2", src: "lagu2.m4a" },
        { title: "Lagu 3", src: "lagu3.mp3" }
    ],
    // --- ITEM SHOP CONFIG ---
    SHOP_SKINS: [
        {id:'skin-school', name:'Seragam Sekolah', type:'skin', cost:5000, icon:'shirt', desc:'Biar pinteran dikit (katanya).'}
    ],
    SHOP_THEMES: [
        {id:'theme-default', name:'Original Indigo', cost:0, color:'#6366f1', desc:'Kembali ke jalan yang benar.'},
        {id:'theme-toxic', name:'Hacker Toxic', cost:500, color:'#22c55e', desc:'Hijau nuklir sakit mata.'},
        {id:'theme-blood', name:'Panic Mode', cost:800, color:'#ef4444', desc:'Merah kayak deadline.'},
        {id:'theme-sultan', name:'Sultan Gold', cost:2000, color:'#eab308', desc:'Emas norak orang kaya.'},
        {id:'theme-ocean', name:'Deep Ocean', cost:1200, color:'#0ea5e9', desc:'Adem, kayak gak punya utang.'},
        {id:'theme-barbie', name:'Princess Pink', cost:1500, color:'#ec4899', desc:'Uwu banget najis.'},
        {id:'theme-sunset', name:'Senja Indie', cost:1000, color:'#f97316', desc:'Kopi dan penyesalan.'},
        {id:'theme-midnight', name:'Dark Soul', cost:2500, color:'#94a3b8', desc:'Gelap segelap masa depan.'},
        {id:'theme-forest', name:'Hutan Lembab', cost:1300, color:'#16a34a', desc:'Hijau tapi tetap stres.'},
        {id:'theme-ember', name:'Bara Halus', cost:1400, color:'#f97316', desc:'Hangat tipis, hati dingin.'},
        {id:'theme-rose', name:'Red Flag', cost:1600, color:'#f43f5e', desc:'Romantis tapi bahaya.'},
        {id:'theme-royal', name:'Royal Blue', cost:1700, color:'#1d4ed8', desc:'Kaya tapi tetep capek.'},
        {id:'theme-mint', name:'Mint Dingin', cost:1100, color:'#14b8a6', desc:'Seger, tapi dompet tetap kering.'},
        {id:'theme-slate', name:'Slated Gray', cost:900, color:'#64748b', desc:'Netral, kayak perasaan dia.'},
        {id:'theme-mocha', name:'Mocca Dark', cost:1500, color:'#a16207', desc:'Pahit tapi nagih.'}
    ],
    SHOP_WALLPAPERS: [
        {id:'wall-none', name:'No Wallpaper', cost:0, src:'', desc:'Hemat baterai.'},
        {id:'wall-rain', name:'Rainy Window', cost:3000, src:'https://player.vimeo.com/external/459389137.sd.mp4?s=955e8848f9836374f88198f79f22036c05d0505a&profile_id=165&oauth2_token_id=57447761', desc:'Galau maksimal.'},
        {id:'wall-matrix', name:'Matrix Code', cost:5000, src:'https://player.vimeo.com/external/180373418.sd.mp4?s=d01073153573c09e3e7f411802a8292358045b84&profile_id=164&oauth2_token_id=57447761', desc:'Hacker wannabe.'},
        {id:'wall-cyber', name:'Cyber City', cost:8000, src:'https://player.vimeo.com/external/371908581.sd.mp4?s=784c622540960570b5514f762696615967f1b202&profile_id=165&oauth2_token_id=57447761', desc:'Masa depan suram.'},
        {id:'wall-cloud', name:'Dreamy Clouds', cost:4000, src:'https://player.vimeo.com/external/411326265.sd.mp4?s=3194a0808b5f3a0a6b99092498260662660d2b77&profile_id=165&oauth2_token_id=57447761', desc:'Terbang ke awan.'},
        {id:'wall-waifu', name:'Waifu Loop', cost:4500, src:'waifu.mp4', desc:'Wibu mode aktif.'},
        {id:'wall-waifu2', name:'Waifu Loop 2', cost:5500, src:'waifu2.mp4', desc:'Dua kali lebih wibu.'}
    ],
    SHOP_CURSORS: [
        {id:'cursor-default', name:'Default', cost:0, style:'auto', desc:'Biasa aja.'},
        {id:'cursor-cross', name:'Sniper', cost:500, style:'crosshair', desc:'Membidik masa depan.'},
        {id:'cursor-help', name:'Bingung', cost:500, style:'help', desc:'Tanda tanya abadi.'},
        {id:'cursor-middle', name:'F*ck You', cost:2000, style:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 32 32\' style=\'fill:black;font-size:24px;\'><text y=\'20\'>🖕</text></svg>") 16 16, auto', desc:'Mood banget.'},
        {id:'cursor-money', name:'Duit', cost:5000, style:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 32 32\' style=\'fill:black;font-size:24px;\'><text y=\'20\'>💸</text></svg>") 16 16, auto', desc:'Kursor sultan.'},
        {id:'cursor-star', name:'Bintang', cost:700, style:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 32 32\' style=\'fill:black;font-size:24px;\'><text y=\'20\'>⭐</text></svg>") 16 16, auto', desc:'Bintang kehidupan.'},
        {id:'cursor-skull', name:'Tengkorak', cost:1200, style:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 32 32\' style=\'fill:black;font-size:24px;\'><text y=\'20\'>💀</text></svg>") 16 16, auto', desc:'Mood dark.'},
        {id:'cursor-fire', name:'Api', cost:1400, style:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 32 32\' style=\'fill:black;font-size:24px;\'><text y=\'20\'>🔥</text></svg>") 16 16, auto', desc:'Panas terus.'},
        {id:'cursor-spark', name:'Spark', cost:900, style:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 32 32\' style=\'fill:black;font-size:24px;\'><text y=\'20\'>✨</text></svg>") 16 16, auto', desc:'Hoki palsu.'},
        {id:'cursor-ice', name:'Dingin', cost:1100, style:'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' viewport=\'0 0 32 32\' style=\'fill:black;font-size:24px;\'><text y=\'20\'>❄️</text></svg>") 16 16, auto', desc:'Beku, kayak chat dia.'}
    ],
    SHOP_ITEMS: [
        {id:'item-coffee', name:'Kopi Turbo', cost:200, icon:'coffee', desc:'Reset cooldown game.', effect:'cooldown', value:1},
        {id:'item-snack', name:'Snack Pet', cost:300, icon:'apple', desc:'Pet +20 kenyang +5 sehat.', effect:'feed', value:{hunger:20, health:5}},
        {id:'item-shield', name:'Pelunasan Parsial', cost:700, icon:'shield', desc:'Potong utang 500 XP.', effect:'loan', value:500},
        {id:'item-ticket', name:'Tiket Gacha', cost:600, icon:'ticket', desc:'+1 tiket.', effect:'ticket', value:1},
        {id:'item-scroll', name:'Scroll Motivasi', cost:900, icon:'sparkles', desc:'+80 XP instan.', effect:'xp', value:80},
        {id:'item-crown', name:'Mahkota Palsu', cost:2000, icon:'crown', desc:'+200 XP instan.', effect:'xp', value:200}
    ],
    GACHA_ITEMS: [
        {id:'gacha-rare-1', name:'Kunci Surga', icon:'key', desc:'Palsu tapi meyakinkan.'},
        {id:'gacha-rare-2', name:'Sayap Goreng', icon:'feather', desc:'Bukan sayap malaikat.'},
        {id:'gacha-rare-3', name:'Tisu Bekas', icon:'scroll', desc:'Bekas air mata mantan.'},
        {id:'gacha-rare-4', name:'Angin Botolan', icon:'wind', desc:'Isinya kosong.'},
        {id:'gacha-rare-5', name:'Jubah Gaib', icon:'ghost', desc:'Gak keliatan (emang ga ada).'},
        {id:'gacha-rare-6', name:'Bintang Retak', icon:'star', desc:'Masih kinclong dikit.'},
        {id:'gacha-rare-7', name:'Tengkorak Imut', icon:'skull', desc:'Serem tapi lucu.'},
        {id:'gacha-rare-8', name:'Kristal Buram', icon:'gem', desc:'Masa depan tetap suram.'},
        {id:'gacha-rare-9', name:'Sirip Ikan', icon:'fish', desc:'Basah doang.'},
        {id:'gacha-rare-10', name:'Koin Karat', icon:'coins', desc:'Antik gak laku.'}
    ],
    DAILY_REWARDS: [
        {xp:50, ticket:0, desc:"Uang jajan"},
        {xp:100, ticket:0, desc:"Lembur dikit"},
        {xp:150, ticket:0, desc:"Bonus palsu"},
        {xp:200, ticket:0, desc:"Gaji buta"},
        {xp:300, ticket:0, desc:"Pesugihan"},
        {xp:400, ticket:0, desc:"Nuyul"},
        {xp:1000, ticket:1, desc:"JACKPOT!"} 
    ],
    ACHIEVEMENTS: [
        {id: 'ach-begadang', name: 'Begadang Gaming', icon: 'moon', desc: 'Login jam 1 - 4 pagi.', xp: 500},
        {id: 'ach-wacana', name: 'Wacana King', icon: 'trash', desc: 'Hapus 10 tugas tanpa kelar.', xp: 300},
        {id: 'ach-sultan', name: 'Sultan Gabut', icon: 'crown', desc: 'Punya 5.000 XP.', xp: 1000},
        {id: 'ach-touch-grass', name: 'Touch Grass', icon: 'sun', desc: 'Gak login 3 hari.', xp: 800},
        {id: 'ach-pet-lover', name: 'Babu Peliharaan', icon: 'heart', desc: 'Beri makan pet 50x.', xp: 400},
    ],
    // --- WAIFU SKINS CONFIG ---
    WAIFU_SKINS: {
        'default': {
            normal: 'waifu-normal.png', 
            happy: 'waifu-happy.png',   
            hungry: 'waifu-hungry.png', 
            sad: 'waifu-sad.png',        
            dead: 'waifu-dead.png'
        },
        'skin-school': {
            normal: 'waifu-school-normal.png', 
            happy: 'waifu-school-happy.png',   
            hungry: 'waifu-school-hungry.png', 
            sad: 'waifu-school-sad.png',        
            dead: 'waifu-school-dead.png'
        }
    },
    // --- CALC SARCASM ---
    CALC_INSULTS: [
        "Duit segitu cukup buat makan sebulan?",
        "Boros banget lu, tobat.",
        "Mending ditabung (kalau punya).",
        "Hitung terus, kayanya nambah kaga.",
        "Yakin saldonya cukup?",
        "Sedekah woy, jangan pelit.",
        "Uang panas nih pasti."
    ],
    // --- CHAT RESPONSE DATABASE ---
    CHAT_RESPONSES: {
        greeting: [
            "Apa lagi? Kangen?", "Datang lagi, bawa duit gak?", "Berisik woy.", 
            "Paan sih, sok asik.", "Hadir. Mau apa?", "Belum mandi kan lu?",
            "Fans ya? Minta tanda tangan?", "Ngapain login? Gabut?",
            "Assalamualaikum (kalau islam), kalau enggak, minggir.", 
            "Wih, si beban keluarga login.", "Nyari masalah mulu.",
            "Hidup lagi? Kirain udah mokad.", "Jangan basa-basi, langsung transfer aja.",
            "P.", "Y.", "Hah?", "Siapa ya?"
        ],
        identity: [
            "Gue waifu virtual, bukan jodoh beneran.",
            "Nama gue? Terserah lu, asal bayar DLC.",
            "Gue bot sarkas, bukan manusia.",
            "Peliharaan digital, tapi yang ngasih makan tetap lu.",
            "Gue cuma pixel, tapi omelannya nyata.",
            "Asisten to-do yang hobi nyindir.",
            "Waifu 2D, hubungan 0D.",
            "Gue teman chat pas lu gabut.",
            "Bukan AI canggih, tapi cukup buat nyinyir.",
            "Identitas: beban emosional gratis."
        ],
        time: [
            "Sekarang jam segini, ngapain juga?",
            "Waktu jalan terus, tugas lu enggak.",
            "Jamnya? Nanya mulu, kerja kapan?",
            "Udah larut, tapi otak masih offline.",
            "Ketinggalan waktu kayak ketinggalan deadline."
        ],
        day: [
            "Hari ini ya hari yang sama: capek.",
            "Hari ini: kesempatan buat nunda lagi.",
            "Hari apa pun, cicilan tetap jalan."
        ],
        date: [
            "Tanggal segini masih aja rebahan.",
            "Tanggal baru, masalah lama.",
            "Tanggalnya ganti, kelakuan enggak."
        ],
        thanks: [
            "Iya iya, sama-sama. Jangan baper.",
            "Terima kasih diterima, transfer menyusul.",
            "Gak usah lebay, kerja woy.",
            "Sip. Sekarang balik kerja."
        ],
        help: [
            "Bisa. Tapi lu duluan yang usaha.",
            "Butuh bantuan? Beli fitur premium dulu.",
            "Oke, jelasin singkat: jangan males.",
            "Gue bantu, tapi jangan berharap kelembutan.",
            "Tanya yang jelas, jangan setengah-setengah."
        ],
        agree: [
            "Yaelah, akhirnya paham dikit.",
            "Iya, lanjut.",
            "Bener. Sekarang kerjain."
        ],
        disagree: [
            "Nggak. Lu salah arah.",
            "Ngaco. Coba ulang.",
            "Bukan gitu, dek."
        ],
        smalltalk: [
            "Ngobrol doang gak bikin produktif.",
            "Ceritanya sih menarik, tapi hasilnya mana?",
            "Basa-basi itu pajak waktu.",
            "Gue dengerin, tapi gak peduli.",
            "Lu ngomong, gue nilai."
        ],
        prefix: [
            "Oke, dengerin.",
            "Gini ya.",
            "Bentar, gue jelasin.",
            "Kita luruskan dulu.",
            "Sabar, jangan panik.",
            "Coba pikir.",
            "Nih ya.",
            "Listen up.",
            "Oke sip.",
            "Nah gitu.",
            "Singkatnya.",
            "Versi hemat waktu.",
            "Gue ringkas.",
            "Catat nih.",
            "FYI.",
            "Plot twist.",
            "Clue: ",
            "Gue kasih hint.",
            "Info penting.",
            "Poin utama."
        ],
        suffix: [
            "Udah, gitu doang.",
            "Jangan ngulang lagi.",
            "Paham kan?",
            "Kalo masih bingung, salahin diri sendiri.",
            "Gak usah debat.",
            "Kerjain sekarang.",
            "Jangan lemot.",
            "No offense, tapi iya.",
            "Gitu aja ribet.",
            "Selesai.",
            "Makanya fokus.",
            "Sekian ceramah.",
            "Gue capek ngetik.",
            "Udah ya.",
            "Next.",
            "Move on.",
            "Beres.",
            "Gue tunggu hasilnya.",
            "Jangan kebanyakan alasan.",
            "Silakan dipikir."
        ],
        sad: [
            "Air mata buaya.", "Halah drama.", "Sedih mulu kayak sinetron indosiar.",
            "Lemah banget mental yupi.", "Bodo amat, gue bukan psikolog.",
            "Nangis? Cup cup, sana minum baygon.", "Gak usah curhat, bayar dulu.",
            "Galau teroos, kapan kayanya?", "Mending lu tidur, siapa tau gak bangun lagi.",
            "Dih, caper.", "Udah minum obat belum?", "Sakit hati? Mending sakit gigi.",
            "Coba dengerin lagu Tulus, biar makin stress.", "Emang ada yang peduli?",
            "Dunia emang kejam, apalagi buat lu."
        ],
        happy: [
            "Tumben seneng, abis dapet gajian?", "Jangan seneng dulu, besok senin.",
            "Gak usah senyum-senyum sendiri, ngeri, kayak ODGJ.", 
            "Bahagia di atas penderitaan orang lain ya?", "Dapet lotre? Bagi dong.",
            "Paling bentar lagi nangis.", "Senengnya boongan itu.",
            "Wih, kesambet apaan lu?", "Hati-hati, terlalu seneng bikin lupa daratan.",
            "Gue curiga lu abis menang judi slot.", "Bahagia itu ilusi."
        ],
        love: [
            "Gak mempan gombalanmu.", "Halah, wibu bau bawang.", 
            "Cinta-cinta, makan tuh cinta.", "Najis tralala.", "Sadar diri woy, kaca mana kaca?",
            "Waifu 2D gak bisa meluk lu balik.", "Jomblo diem aja.",
            "Cinta tak selamanya indah, dek.", "Muka pas-pasan gaya selangit.",
            "Pret. Bullshit.", "Mau gue kenalin sama tembok?",
            "Inget, dia chat lu pas lagi bosen doang.", "Badut bucin terdeteksi.",
            "I love you... tapi boong.", "Gak usah kode-kode, dia gak peka."
        ],
        work: [
            "Kerja woy, jangan main HP mulu.", "Jangan alasan, males bilang.",
            "Masa depan suram kalo males.", "Kerja lembur bagai kuda, sampai lupa orang tua.",
            "Udah kaya belom? Belom kan? Kerja sana!", "Deadline nyengir tuh.",
            "Beban tim.", "Produktivitas 0%, Alasan 100%.",
            "Sana bikin kopi, biar melek.", "Rebahan tidak menghasilkan cuan.",
            "Skripsi apa kabar?", "Tugas numpuk, malah curhat di sini.",
            "Ingat cicilan, ingat masa depan.", "Budak korporat semangat ya."
        ],
        money: [
            "Pinjem dulu seratus.", "Kalo miskin diem aja.", 
            "Kerja, jangan gacha teroos.", "Uang bukan segalanya, tapi segalanya butuh uang.",
            "Saldo ATM lu ketawa liat lu.", "Gaya elit ekonomi sulit.",
            "Tobat boros.", "Minta emak sana.", "Sadar posisi ekonomi.",
            "Jangan so-soan mau checkout shopee.", "Nabung pangkal kaya, boros pangkal miskin (kayak lu).",
            "Info loker gan.", "Open BO? Bercanda deng."
        ],
        gacha: [
            "Zonk pasti.", "Ampas teroos, mampus.", "Tobat gacha, mending sedekah.",
            "Bau-bau ampas nih.", "Wangy wangy... stress.", 
            "SSR = Sangat Sulit Rejeki.", "Duit abis buat pixel doang?",
            "Gacha mulu, kapan nikah?", "Luck lu minus.", "Sana mandi kembang biar wangi.",
            "Developer game ketawa liat duit lu abis."
        ],
        hungry: [
            "Sama, beliin makan dong.", "Laper? Makan batu.", "Gofood-in dong kalo berani.",
            "Perut bunyi, dompet sunyi.", "Puasa woy, diet.", 
            "Makan angin aja, gratis.", "Masak sana, manja amat.",
            "Laper? Minum air keran.", "Jangan makan temen ya.",
            "Pikirin makanan mulu, pantes buncit."
        ],
        sleep: [
            "Tidur sana, ganggu aja.", "Awas mimpi buruk dikejar tagihan.",
            "Mending tidur selamanya (canda).", "Begadang jangan begadang~",
            "Mata panda lu serem.", "Tidur, besok jadi babu korporat lagi.",
            "Jangan lupa cuci kaki.", "Mimpiin gue ya? Jangan, gue mahal.",
            "Hp teroos, tidur woy!", "Udah malem, waktunya overthinking."
        ],
        gabut: [
            "Cari hobi yang bermanfaat napa.", "Sentuh rumput (Touch grass).",
            "Gabut? Nyangkul sana.", "Diem itu emas, lu berisik.",
            "Baca buku kek, biar pinteran dikit.", "Main sama tembok sana.",
            "Gue sibuk, jangan ganggu.", "Manusia kurang kerjaan.",
            "Download aplikasi lain sana, jangan di sini.", "Main congklak sana."
        ],
        insult: [
            "Ngaca.", "Balik ke sirkus sana.", "Gak punya attitude.",
            "Mulut lu bau comberan.", "Ketik yang sopan dek.",
            "Otak udang.", "Dih, toxic.", "Block nih?", "Siapa yang nanya?",
            "Lu ngomong sama cermin?", "Bodo amat nyet."
        ],
        tech: [
            "Hapus System32 biar cepet.", "Restart aja, solusi segala masalah.",
            "Codingan lu spaghetti.", "Bug adalah fitur.",
            "HP kentang jangan banyak tingkah.", "Ganti device sana.",
            "Error 404: Otak not found.", "Mending rakit PC daripada rakit dosa."
        ],
        default: [
            "Bodo amat.", "Terus gue harus bilang wow?", "Gak denger, pake headset.", "Dih.", 
            "Gak jelas lu.", "Mending lu push rank.", "Bacot ah.", "Ssttt... berisik.",
            "Terserah.", "Gak peduli.", "Ketik yang bener napa.",
            "Ngomong sama tangan.", "Iya iya, serah lu.", "Berisik amat sih manusia.",
            "Loading otak... Gagal.", "Skip.", "Hmm.", "Y.",
            "Apa sih.", "Gajelas.", "Dah lah.", "Capek gue ladenin lu."
        ]
    }
};

// --- LOCAL RADIO SETUP ---

// --- SFX SYSTEM ---
const SFX = {
    click: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'], volume:0.2}),
    success: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'], volume:0.4}),
    buy: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'], volume:0.5}),
    error: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3'], volume:0.3}),
    eat: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/2020/2020-preview.mp3'], volume:0.5}),
    fire: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/1330/1330-preview.mp3'], volume:0.5}),
    msg: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3'], volume:0.4}),
    hit: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3'], volume:0.35}),
    winBig: new Howl({src:['https://assets.mixkit.co/active_storage/sfx/1430/1430-preview.mp3'], volume:0.45}),
    play(t){try{this[t].play()}catch(e){}},
    vib(){if(navigator.vibrate)navigator.vibrate(10)}
};

// --- WEATHER WIDGET MODULE ---
const Weather = {
    init() {
        const el = document.getElementById('weather-widget'); if(!el) return; el.classList.remove('hidden');
        if (navigator.geolocation) { navigator.geolocation.getCurrentPosition((pos) => this.fetch(pos.coords.latitude, pos.coords.longitude), (err) => this.showError()); } else { this.showError(); }
    },
    showError() {
        const loading = document.getElementById('weather-loading'); const error = document.getElementById('weather-error');
        if(loading) loading.classList.add('hidden'); if(error) error.classList.remove('hidden');
    },
    fetch(lat, lon) {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`).then(r => r.json()).then(d => { if(d.current_weather) { this.render(d.current_weather); } else { this.showError(); } }).catch(e => this.showError());
    },
    render(data) {
        document.getElementById('weather-loading').classList.add('hidden'); document.getElementById('weather-content').classList.remove('hidden');
        document.getElementById('weather-temp').innerText = Math.round(data.temperature) + "°";
        const code = data.weathercode; const isNight = data.is_day === 0; let desc = "Biasa Aja"; let icon = "☁️"; let sarcasm = "Cuaca membosankan."; let bg = "from-blue-500/20";
        if (code === 0) { desc = isNight ? "Cerah" : "Panas"; icon = isNight ? "🌙" : "☀️"; sarcasm = isNight ? "Udah malem, mata lo gak capek?" : "Matahari diskon 90%, panas neraka."; bg = isNight ? "from-indigo-900/40" : "from-orange-500/20"; } 
        else if (code >= 1 && code <= 3) { desc = "Berawan"; icon = "⛅"; sarcasm = "Mendung, kayak masa depan lo."; bg = "from-slate-500/20"; } 
        else if (code >= 51 && code <= 67) { desc = "Hujan"; icon = "🌧️"; sarcasm = "Hujan. Alasan bagus buat batalin janji."; bg = "from-blue-700/30"; } 
        else if (code >= 80) { desc = "Badai"; icon = "⚡"; sarcasm = "Azab orang malas. Ati-ati."; bg = "from-purple-900/40"; }
        const elDesc = document.getElementById('weather-desc'); if(elDesc) elDesc.innerText = desc;
        document.getElementById('weather-emoji').innerText = icon; document.getElementById('weather-sarcasm').innerText = `"${sarcasm}"`;
        document.getElementById('weather-bg').className = `absolute inset-0 bg-gradient-to-br ${bg} to-transparent transition-colors duration-1000`;
    }
};

const Notif = {
    permission: 'default',
    init() { if ('Notification' in window) { this.permission = Notification.permission; this.updateBtnUI(); } },
    updateBtnUI() {
        const btn = document.getElementById('notif-status'); if(!btn) return;
        if (this.permission === 'granted') { btn.innerText = "ON"; btn.className = "text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-bold"; } 
        else if (this.permission === 'denied') { btn.innerText = "BLOCKED"; btn.className = "text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold"; } 
        else { btn.innerText = "OFF"; btn.className = "text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-400"; }
    },
    request() {
        if (!('Notification' in window)) return App.notify("HP kentang.", "error");
        Notification.requestPermission().then(p => { this.permission = p; this.updateBtnUI(); if (p === 'granted') { this.send("Sarcastic OS", "Notif Aktif."); App.notify("Notif Aktif!", "success"); } else { App.notify("Ditolak.", "error"); } });
    },
    send(title, body) {
        if (this.permission === 'granted') {
            const opt = { body: body, icon: 'https://cdn-icons-png.flaticon.com/512/5267/5267300.png', vibrate: [200, 100, 200] };
            if (navigator.serviceWorker.controller) { navigator.serviceWorker.ready.then(r => r.showNotification(title, opt)); } else { new Notification(title, opt); }
        }
    }
};

const Radio = {
    index: 0,
    isExpanded: false,
    dragJustHappened: false,
    isPlaying: false,
    lastTap: 0,
    audios: [],
    activeIdx: 0,
    crossfadeMs: 800,
    tickTimer: null,
    init() {
        const a0 = document.getElementById('radio-audio');
        const a1 = new Audio();
        if (a0) {
            a0.preload = "metadata";
            a0.src = CONFIG.RADIO_TRACKS[this.index].src;
            a0.volume = this.getVolume();
            a0.addEventListener('ended', () => this.next());
            a0.addEventListener('play', () => this.updatePlayState(true));
            a0.addEventListener('pause', () => this.updatePlayState(false));
        }
        a1.preload = "metadata";
        a1.volume = 0.0;
        a1.addEventListener('ended', () => this.next());
        this.audios = [a0, a1].filter(Boolean);
        this.updateTitle();
        // Drag disabled: fixed middle-right position
        this.startTicker();
    },
    enableDrag() {},
    mainAction() {
        if (this.dragJustHappened) return;
        this.toggleUI();
    },
    toggleUI() {
        this.isExpanded = !this.isExpanded;
        const w = document.getElementById('radio-widget');
        if(!w) return;
        if(this.isExpanded) { w.classList.remove('radio-collapsed'); w.classList.add('radio-expanded'); } 
        else { w.classList.remove('radio-expanded'); w.classList.add('radio-collapsed'); }
    },
    playTrack(i) {
        if (!this.audios.length) return;
        this.index = i;
        const track = CONFIG.RADIO_TRACKS[this.index];
        this.updateTitle();
        const current = this.audios[this.activeIdx];
        const nextIdx = (this.activeIdx + 1) % this.audios.length;
        const incoming = this.audios[nextIdx];

        if (!this.isPlaying || !current || current.paused) {
            if (current) {
                current.src = track.src;
                current.volume = this.getVolume();
                current.play().catch(() => App.notify("Klik lagi buat play.", "error"));
                this.activeIdx = this.audios.indexOf(current);
            }
        } else {
            incoming.src = track.src;
            incoming.volume = 0;
            incoming.play().catch(() => App.notify("Klik lagi buat play.", "error"));
            this.crossfade(current, incoming);
            this.activeIdx = nextIdx;
        }
        App.notify(`Memutar: ${track.title}`, "success");
    },
    togglePlay() {
        const current = this.getActiveAudio();
        if (!current) return;
        if (current.paused) current.play().catch(() => App.notify("Klik lagi buat play.", "error"));
        else current.pause();
    },
    next() {
        let next = this.index + 1;
        if(next >= CONFIG.RADIO_TRACKS.length) next = 0;
        this.playTrack(next);
    },
    volume(v) {
        localStorage.setItem('radioVol', v);
        const current = this.getActiveAudio();
        if(current) current.volume = v;
        const range = document.getElementById('radio-volume');
        if (range) range.value = v;
    },
    updateTitle() {
        const t = document.getElementById('radio-title');
        if(t) t.innerText = CONFIG.RADIO_TRACKS[this.index].title;
        const range = document.getElementById('radio-volume');
        if(range) range.value = this.getVolume();
    },
    updatePlayState(isPlaying) {
        this.isPlaying = isPlaying;
        const btn = document.getElementById('radio-play-btn');
        const widget = document.getElementById('radio-widget');
        if(btn) btn.setAttribute('data-lucide', isPlaying ? 'pause' : 'play');
        if(widget) widget.classList.toggle('playing', isPlaying);
        lucide.createIcons();
    },
    getActiveAudio() { return this.audios[this.activeIdx]; },
    getVolume() {
        const v = localStorage.getItem('radioVol');
        return v ? parseFloat(v) : 0.5;
    },
    crossfade(from, to) {
        const start = performance.now();
        const fromStart = from.volume;
        const toTarget = this.getVolume();
        const step = (now) => {
            const t = Math.min(1, (now - start) / this.crossfadeMs);
            from.volume = fromStart * (1 - t);
            to.volume = toTarget * t;
            if (t < 1) requestAnimationFrame(step);
            else {
                from.pause();
                from.currentTime = 0;
                from.volume = toTarget;
            }
        };
        requestAnimationFrame(step);
    },
    startTicker() {
        if (this.tickTimer) clearInterval(this.tickTimer);
        this.tickTimer = setInterval(() => this.updateProgress(), 400);
    },
    formatTime(t) {
        if (!isFinite(t)) return "0:00";
        const m = Math.floor(t / 60);
        const s = Math.floor(t % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    },
    updateProgress() {
        const a = this.getActiveAudio();
        if (!a) return;
        const cur = a.currentTime || 0;
        const dur = a.duration || 0;
        const pct = dur ? Math.min(100, (cur / dur) * 100) : 0;
        const bar = document.getElementById('radio-progress');
        const t = document.getElementById('radio-time');
        const d = document.getElementById('radio-duration');
        if (bar) bar.style.width = `${pct}%`;
        if (t) t.innerText = this.formatTime(cur);
        if (d) d.innerText = this.formatTime(dur);
    }
};

// --- CHAT SYSTEM ---
const Chat = {
    isOpen: false,
    ctx: { lastTopic: null, lastKeywords: [], lastUser: '', turns: 0 },
    autoTimer: null,
    bubbleTimer: null,
    idleMinMs: 12000,
    idleMaxMs: 26000,
    idlePool: null,
    dayNames: ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],
    monthNames: ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],
    stopwords: new Set([
        'aku','kamu','lu','gue','saya','dia','kita','kami','mereka','yang','dan','atau','di','ke','dari',
        'ini','itu','aja','udah','belum','banget','bgt','gak','nggak','ga','gk','ya','yah','lah','deh',
        'nya','nih','tuh','kok','kenapa','gimana','bagaimana','apa','siapa','kapan','dimana','berapa',
        'dong','woy','bro','sis','min','nih','loh','lah','pun','kok','terus','lalu','plis','please'
    ]),
    topicLabels: {
        greeting: "basa-basi",
        sad: "curhatan",
        happy: "kegembiraan",
        love: "percintaan",
        work: "tugas/kerja",
        money: "duit",
        gacha: "gacha",
        hungry: "lapar",
        sleep: "tidur",
        gabut: "gabut",
        insult: "toxic",
        tech: "teknis"
    },
    toggle() {
        this.isOpen = !this.isOpen;
        const ui = document.getElementById('chat-interface');
        if(this.isOpen) {
            ui.classList.remove('translate-y-[110%]');
            document.getElementById('chat-input').focus();
        } else {
            ui.classList.add('translate-y-[110%]');
        }
    },
    send() {
        const input = document.getElementById('chat-input');
        const text = input.value.trim().toLowerCase();
        if(!text) return;

        this.appendMsg(input.value, true);
        input.value = '';
        SFX.play('click');

        setTimeout(() => {
            const reply = this.getResponse(text);
            this.appendMsg(reply, false);
            SFX.play('msg');
            Pet.tempHappy = true; Pet.render(); setTimeout(() => { Pet.tempHappy = false; Pet.render(); }, 2000);
        }, 800 + Math.random() * 1000);
    },
    appendMsg(text, isUser) {
        const body = document.getElementById('chat-body');
        const div = document.createElement('div');
        div.className = `flex ${isUser ? 'justify-end' : 'justify-start'}`;
        const bubble = document.createElement('div');
        bubble.className = isUser 
            ? 'bg-white text-black text-xs px-3 py-2 rounded-xl rounded-tr-none max-w-[80%]' 
            : 'bg-indigo-600/20 border border-indigo-500/30 text-indigo-100 text-xs px-3 py-2 rounded-xl rounded-tl-none max-w-[80%]';
        bubble.innerText = text;
        div.appendChild(bubble); body.appendChild(div); body.scrollTop = body.scrollHeight;
    },
    startIdle() {
        if (this.autoTimer) clearTimeout(this.autoTimer);
        this.scheduleIdle();
    },
    scheduleIdle() {
        const delay = this.idleMinMs + Math.random() * (this.idleMaxMs - this.idleMinMs);
        this.autoTimer = setTimeout(() => this.idleSpeak(), delay);
    },
    idleSpeak() {
        if (document.hidden) return this.scheduleIdle();
        const input = document.getElementById('chat-input');
        if (input && input.value.trim()) return this.scheduleIdle();
        const msg = this.randomIdleMsg();
        if (this.isOpen) {
            this.appendMsg(msg, false);
            SFX.play('msg');
        } else {
            this.showBubble(msg);
        }
        this.scheduleIdle();
    },
    showBubble(text) {
        const b = document.getElementById('waifu-bubble');
        if (!b) return;
        b.innerText = `"${text}"`;
        b.classList.remove('opacity-0', 'scale-90');
        b.classList.add('opacity-100', 'scale-100');
        if (this.bubbleTimer) clearTimeout(this.bubbleTimer);
        this.bubbleTimer = setTimeout(() => {
            b.classList.add('opacity-0', 'scale-90');
        }, 3000);
    },
    randomIdleMsg() {
        if (!this.idlePool) {
            const db = CONFIG.CHAT_RESPONSES;
            this.idlePool = [
                ...db.greeting, ...db.smalltalk, ...db.gabut, ...db.work, ...db.money,
                ...db.hungry, ...db.sleep, ...db.happy, ...db.sad, ...db.love,
                ...db.tech, ...db.default
            ];
        }
        return this.decorate(this.pick(this.idlePool));
    },
    normalize(text) {
        return text.toLowerCase().replace(/[^a-z0-9\s!?]/gi, ' ').replace(/\s+/g, ' ').trim();
    },
    extractKeywords(text) {
        if(!text) return [];
        return text
            .split(' ')
            .filter(w => w.length > 2 && !this.stopwords.has(w))
            .slice(0, 3);
    },
    pad(n) { return n < 10 ? `0${n}` : `${n}`; },
    formatDate(d) {
        const day = this.dayNames[d.getDay()];
        const dd = this.pad(d.getDate());
        const mm = this.monthNames[d.getMonth()];
        const yyyy = d.getFullYear();
        return `${day}, ${dd} ${mm} ${yyyy}`;
    },
    formatDateNoDay(d) {
        const dd = this.pad(d.getDate());
        const mm = this.monthNames[d.getMonth()];
        const yyyy = d.getFullYear();
        return `${dd} ${mm} ${yyyy}`;
    },
    formatTime(d) {
        return `${this.pad(d.getHours())}:${this.pad(d.getMinutes())}`;
    },
    detectTopic(text) {
        const rules = [
            { topic: 'greeting', re: /halo|hi|hai|pagi|siang|sore|malam|test|tes|p\b|woy|uy|assalamualaikum/ },
            { topic: 'sad', re: /sedih|galau|nangis|sakit|hurt|cry|sad|kecewa|patah|depresi/ },
            { topic: 'happy', re: /senang|bahagia|happy|hore|asik|wkwk|haha|hehe|lol/ },
            { topic: 'love', re: /cinta|sayang|love|suka|cantik|ganteng|pacar|jodoh|nikah|kangen|rindu|crush/ },
            { topic: 'work', re: /kerja|tugas|pr|sibuk|skripsi|kantor|sekolah|kuliah|deadline|meeting/ },
            { topic: 'money', re: /uang|duit|kaya|miskin|jajan|mahal|murah|bayar|gratis|cuan|dana|atm|bank/ },
            { topic: 'gacha', re: /gacha|ssr|wangy|bau|ampas|zonk|luck|hoki|pulled|roll/ },
            { topic: 'hungry', re: /lapar|makan|laper|food|minum|haus|kenyang|sarapan|siang|malam/ },
            { topic: 'sleep', re: /tidur|ngantuk|bobo|mimpi|begadang|subuh/ },
            { topic: 'gabut', re: /gabut|bosen|bosan|sepi|ngapain|sunyi/ },
            { topic: 'insult', re: /babi|anjing|bangsat|tolol|bego|goblok|bodoh|idiot|jelek|asu|tai/ },
            { topic: 'tech', re: /lag|lemot|error|bug|rusak|hp|komputer|laptop|coding|code|script/ }
        ];
        for (const r of rules) if (r.re.test(text)) return r.topic;
        return null;
    },
    isThanks(text) { return /makasih|terima kasih|thanks|thx|tengkyu|syukron/.test(text); },
    isHelp(text) { return /tolong|bantu|help|gimana caranya|cara\b/.test(text); },
    isIdentity(text) { return /kamu siapa|siapa kamu|kamu apa|nama kamu|kamu bot|kamu manusia|lu siapa|lu apaan|kamu itu siapa/.test(text); },
    isTime(text) { return /jam berapa|pukul berapa|jam skrg|jam sekarang|waktu sekarang|time\b/.test(text); },
    isDate(text) { return /tanggal berapa|tgl berapa|tanggal sekarang|tanggal hari ini|tanggal berapa hari ini/.test(text); },
    isDayQuery(text) { return /hari apa\b|hari apakah\b|hari ini hari apa|besok hari apa|kemarin hari apa/.test(text); },
    dayOffsetFromText(text) {
        if (/besok|besoknya/.test(text)) return 1;
        if (/kemarin/.test(text)) return -1;
        return 0;
    },
    replyTime() {
        const now = new Date();
        const base = `Sekarang jam ${this.formatTime(now)}.`;
        return this.decorate(base, 'time');
    },
    replyDate(offset = 0) {
        const d = new Date();
        d.setDate(d.getDate() + offset);
        const base = `Tanggal ${this.formatDateNoDay(d)} (${this.dayNames[d.getDay()]}).`;
        return this.decorate(base, 'date');
    },
    replyDay(offset = 0) {
        const d = new Date();
        d.setDate(d.getDate() + offset);
        const day = this.dayNames[d.getDay()];
        const label = offset === 1 ? "Besok" : offset === -1 ? "Kemarin" : "Hari ini";
        const base = `${label} itu ${day}. Tanggal ${this.formatDateNoDay(d)}.`;
        return this.decorate(base, 'day');
    },
    isFollowUp(text) {
        if (!text) return false;
        const shortMsg = text.length <= 6 || /^\?+$/.test(text);
        const followWords = /kenapa|kok|terus|lalu|gimana|bagaimana|maksudnya|hah|apaan|serius|trus|terus\?|lah/;
        return shortMsg || followWords.test(text);
    },
    decorate(text, topicKey) {
        const db = CONFIG.CHAT_RESPONSES;
        const withPrefix = Math.random() < 0.35 ? `${this.pick(db.prefix)} ${text}` : text;
        const withSuffix = Math.random() < 0.35 ? `${withPrefix} ${this.pick(db.suffix)}` : withPrefix;
        if (topicKey && db[topicKey] && Math.random() < 0.25) {
            return `${withSuffix} ${this.pick(db[topicKey])}`;
        }
        return withSuffix.replace(/\s+/g, ' ').trim();
    },
    buildReply(topic, meta) {
        const db = CONFIG.CHAT_RESPONSES;
        const base = this.pick(db[topic] || db.default);
        const label = this.topicLabels[topic] || "itu";
        const kw = meta.keywords[0];
        const continuity = topic && topic === this.ctx.lastTopic;
        const followUps = [
            `Masih soal ${label} ya?`,
            `Balik lagi ke ${label}?`,
            `Oke, lanjut ${label} lagi.`
        ];
        const questionPreamble = [
            "Kenapa? Karena hidup gak adil.",
            "Kok? Ya gitu lah.",
            "Gimana? Ya dicoba aja."
        ];
        let pre = '';
        if (meta.isFollowUp && this.ctx.lastTopic) pre = this.pick(followUps);
        else if (continuity) pre = this.pick(followUps);
        else if (meta.isQuestion) pre = this.pick(questionPreamble);
        let hook = '';
        if (kw) hook = `Soal ${kw}, `;
        return this.decorate([pre, hook + base].filter(Boolean).join(' ').trim(), topic);
    },
    getResponse(text) {
        const clean = this.normalize(text);
        const keywords = this.extractKeywords(clean);
        const isQuestion = /(\?)|\b(kenapa|kok|gimana|bagaimana|kenapaan|kenapa sih)\b/.test(clean);
        if (this.isTime(clean)) return this.replyTime();
        if (this.isDate(clean)) return this.replyDate();
        if (this.isDayQuery(clean)) return this.replyDay(this.dayOffsetFromText(clean));
        if (this.isIdentity(clean)) return this.decorate(this.pick(CONFIG.CHAT_RESPONSES.identity), 'identity');
        if (this.isThanks(clean)) return this.decorate(this.pick(CONFIG.CHAT_RESPONSES.thanks), 'thanks');
        if (this.isHelp(clean)) return this.decorate(this.pick(CONFIG.CHAT_RESPONSES.help), 'help');
        if (/^ya+|ok+|oke+|sip+|setuju+|bener+$/i.test(clean)) return this.decorate(this.pick(CONFIG.CHAT_RESPONSES.agree), 'agree');
        if (/^nggak+|gak+|ga+|no+|gak setuju+|salah+$/i.test(clean)) return this.decorate(this.pick(CONFIG.CHAT_RESPONSES.disagree), 'disagree');
        const topic = this.detectTopic(clean);
        const followUp = this.isFollowUp(clean);
        const finalTopic = topic || (followUp ? this.ctx.lastTopic : null);

        let reply;
        if (finalTopic) reply = this.buildReply(finalTopic, { keywords, isFollowUp: followUp, isQuestion });
        else {
            const fallbackPool = isQuestion ? CONFIG.CHAT_RESPONSES.smalltalk : CONFIG.CHAT_RESPONSES.default;
            reply = this.decorate(this.pick(fallbackPool));
        }

        this.ctx.lastTopic = finalTopic || this.ctx.lastTopic;
        this.ctx.lastKeywords = keywords;
        this.ctx.lastUser = clean;
        this.ctx.turns += 1;

        return reply;
    },
    pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
};

// --- UTILITY APPS ---
const Apps = {
    burnNote() {
        const input = document.getElementById('death-note-input');
        const val = input.value.trim();
        if(!val) return App.notify("Tulis dulu woy, mau bakar angin?", "error");
        input.classList.add('burning');
        SFX.play('fire'); 
        setTimeout(() => {
            input.value = ""; input.classList.remove('burning');
            App.notify("Masalah anda sudah kami dengar dan kami bodo amat. Lega kan?", "success");
            SFX.play('success');
        }, 2000);
    },
    calcVal: "",
    calc(btn) {
        const disp = document.getElementById('calc-display');
        const msg = document.getElementById('calc-msg');
        if(btn === 'C') { this.calcVal = ""; disp.innerText = "0"; msg.innerText = ""; return; }
        if(btn === '=') {
            try {
                const result = eval(this.calcVal); disp.innerText = result; this.calcVal = String(result);
                msg.innerText = CONFIG.CALC_INSULTS[Math.floor(Math.random() * CONFIG.CALC_INSULTS.length)];
                SFX.play('success');
            } catch (e) { disp.innerText = "Error"; msg.innerText = "Matematika lo aneh."; SFX.play('error'); }
            return;
        }
        const lastChar = this.calcVal.slice(-1);
        if(['+','-','*','/','.'].includes(lastChar) && ['+','-','*','/','.'].includes(btn)) return; 
        this.calcVal += btn; disp.innerText = this.calcVal; SFX.play('click');
    }
};

// --- BANK SYSTEM (PREDATORY LENDING) ---
const Bank = {
    isOpen: false,
    toggle() {
        this.isOpen = !this.isOpen;
        const m = document.getElementById('bank-modal');
        if(this.isOpen) {
            m.classList.remove('hidden');
            setTimeout(() => m.classList.remove('opacity-0'), 10);
            SFX.play('click');
        } else {
            m.classList.add('opacity-0');
            setTimeout(() => m.classList.add('hidden'), 300);
        }
    },
    borrow(amount) {
        if(App.db.data.user.loan > 0) {
            SFX.play('error');
            return App.notify("Bayar dulu utang lama, woy!", "error");
        }
        
        const interest = amount * 0.5; // Bunga 50%
        const totalDebt = amount + interest;

        // Add to XP and Debt
        App.db.data.user.xp += amount;
        App.db.data.user.loan = totalDebt;
        App.db.save();
        
        // Notifications & Effects
        this.toggle();
        App.render();
        SFX.play('buy'); // Suara coin
        
        setTimeout(() => {
            SFX.play('error'); // Suara error dramatis
            App.notify(`DANA CAIR: ${amount} XP`, "success");
            setTimeout(() => {
                App.notify(`UTANG ANDA: ${totalDebt} XP`, "error");
                Notif.send("DEBT COLLECTOR", "Jangan lari dari tanggung jawab.");
            }, 1000);
        }, 500);
    }
};

const Games = {
    tapActive: false,
    tapCount: 0,
    tapTimer: null,
    tapStartTime: 0,
    mathActive: false,
    mathAnswer: 0,
    mathTimer: null,
    mathTimeLeft: 0,
    reactionWaiting: false,
    reactionReady: false,
    reactionTimer: null,
    reactionStart: 0,
    cooldownTick: null,
    cooldownConfig: { tap: 18, math: 12, rps: 7, reaction: 18, lucky: 35, target: 18, guess: 12, challenge: 75, memory: 22, aim: 18, typing: 16 },
    statusMap: {
        tap: { el: 'tap-status', idle: 'Siap? Pencet mulai.' },
        math: { el: 'math-status', idle: 'Males? Tekan mulai.' },
        rps: { el: 'rps-status', idle: 'Pilih senjata.' },
        reaction: { el: 'react-status', idle: 'Jangan panik.' },
        lucky: { el: 'lucky-status', idle: 'Gak ada jaminan.' },
        target: { el: 'target-status', idle: 'Belum pemanasan.' },
        guess: { el: 'guess-status', idle: 'Belum mulai.' },
        challenge: { el: 'challenge-status', idle: 'Belum siap.' },
        memory: { el: 'memory-status', idle: 'Belum mulai.' },
        aim: { el: 'aim-status', idle: 'Belum mulai.' },
        typing: { el: 'typing-status', idle: 'Belum mulai.' }
    },
    targetActive: false,
    targetHits: 0,
    targetTimer: null,
    targetTimeout: null,
    guessActive: false,
    guessNumber: 0,
    guessTries: 0,
    challengeActive: false,
    challengeTimer: null,
    challengeProgress: 0,
    challengeDeadline: 0,
    memoryActive: false,
    memoryCards: [],
    memoryFlipped: [],
    memoryMatches: 0,
    memoryTimer: null,
    aimActive: false,
    aimHits: 0,
    aimCount: 0,
    aimTimer: null,
    typingActive: false,
    typingWords: ["deadline","rebahan","kopi","wacana","kerja","fokus","utang","mager","sarapan","rapat","ngopi","nugas"],
    typingCount: 0,
    typingTimer: null,
    typingDeadline: 0,

    init() {
        this.ensureData();
        this.updateXp();
        this.updateBest();
        const answer = document.getElementById('math-answer');
        if(answer && !answer.dataset.bind) {
            answer.addEventListener('keypress', e => { if(e.key === 'Enter') this.submitMath(); });
            answer.dataset.bind = 'true';
        }
        const typing = document.getElementById('typing-input');
        if(typing && !typing.dataset.bind) {
            typing.addEventListener('keypress', e => { if(e.key === 'Enter') this.typingSubmit(); });
            typing.dataset.bind = 'true';
        }
        if(this.cooldownTick) clearInterval(this.cooldownTick);
        this.cooldownTick = setInterval(() => this.tickCooldowns(), 500);
    },
    flash(cardId, type) {
        const el = document.getElementById(cardId);
        if(!el) return;
        const cls = type === 'win' ? 'game-win' : 'game-lose';
        el.classList.remove('game-win', 'game-lose');
        void el.offsetWidth;
        el.classList.add(cls);
        setTimeout(() => el.classList.remove(cls), 450);
    },

    ensureData() {
        const g = App.db.data.games;
        if(!g.cooldowns) g.cooldowns = { tap: 0, math: 0, rps: 0, reaction: 0, lucky: 0, target: 0, guess: 0, challenge: 0, memory: 0, aim: 0, typing: 0 };
        if(!g.streaks) g.streaks = { math: 0 };
        if(!g.best) g.best = { tapTime: 0, reactionTime: 0 };
        App.db.save();
    },

    updateXp() {
        const el = document.getElementById('games-xp');
        if(el) el.innerText = App.db.data.user.xp;
    },

    updateBest() {
        const tapBest = document.getElementById('tap-best');
        const reactBest = document.getElementById('react-best');
        const bestTap = App.db.data.games.best.tapTime;
        const bestReact = App.db.data.games.best.reactionTime;
        if(tapBest) tapBest.innerText = bestTap > 0 ? `${bestTap.toFixed(1)}s` : '0';
        if(reactBest) reactBest.innerText = bestReact > 0 ? `${bestReact}ms` : '-';
    },

    timeLeft(id) {
        const t = App.db.data.games.cooldowns[id] || 0;
        return Math.max(0, Math.ceil((t - Date.now()) / 1000));
    },

    setCooldown(id, seconds) {
        App.db.data.games.cooldowns[id] = Date.now() + (seconds * 1000);
        App.db.save();
    },

    formatCooldown(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return m > 0 ? `${m}:${s.toString().padStart(2, '0')}` : `${s}s`;
    },

    setStatus(id, msg, mode) {
        const cfg = this.statusMap[id];
        if(!cfg) return;
        const el = document.getElementById(cfg.el);
        if(!el) return;
        el.innerText = msg;
        el.dataset.mode = mode || 'idle';
    },

    tickCooldowns() {
        Object.keys(this.statusMap).forEach(id => {
            const left = this.timeLeft(id);
            const cfg = this.statusMap[id];
            const el = document.getElementById(cfg.el);
            if(!el) return;
            const isBusy = (id === 'tap' && this.tapActive) || (id === 'math' && this.mathActive) || (id === 'reaction' && (this.reactionWaiting || this.reactionReady)) || (id === 'target' && this.targetActive) || (id === 'guess' && this.guessActive) || (id === 'challenge' && this.challengeActive) || (id === 'memory' && this.memoryActive) || (id === 'aim' && this.aimActive) || (id === 'typing' && this.typingActive);
            if(isBusy) return;
            if(left > 0) {
                this.setStatus(id, `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
            } else if(el.dataset.mode === 'cooldown') {
                this.setStatus(id, cfg.idle, 'idle');
            }
        });
    },
    registerWin() {
        if(!this.challengeActive) return;
        this.challengeProgress += 1;
        const prog = document.getElementById('challenge-progress');
        if(prog) prog.innerText = this.challengeProgress;
        if(this.challengeProgress >= 2) {
            this.finishChallenge(true);
        } else {
            this.setStatus('challenge', `Mantap. Tinggal ${2 - this.challengeProgress} menang lagi.`, 'active');
        }
    },
    startChallenge() {
        if(this.challengeActive) return;
        const left = this.timeLeft('challenge');
        if(left > 0) return this.setStatus('challenge', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        this.challengeActive = true;
        this.challengeProgress = 0;
        const prog = document.getElementById('challenge-progress');
        if(prog) prog.innerText = '0';
        const startBtn = document.getElementById('challenge-start');
        if(startBtn) startBtn.disabled = true;
        this.challengeDeadline = Date.now() + 60000;
        this.setStatus('challenge', 'Mulai! Menang 2 game.', 'active');
        if(this.challengeTimer) clearInterval(this.challengeTimer);
        this.challengeTimer = setInterval(() => {
            const leftMs = this.challengeDeadline - Date.now();
            if(leftMs <= 0) {
                this.finishChallenge(false);
            } else {
                const sec = Math.ceil(leftMs / 1000);
                this.setStatus('challenge', `Sisa ${sec}s. Menang 2 game.`, 'active');
            }
        }, 1000);
    },
    finishChallenge(success) {
        if(!this.challengeActive) return;
        this.challengeActive = false;
        if(this.challengeTimer) clearInterval(this.challengeTimer);
        const startBtn = document.getElementById('challenge-start');
        if(startBtn) startBtn.disabled = false;
        if(success) {
            App.xp(140);
            this.setCooldown('challenge', this.cooldownConfig.challenge);
            this.setStatus('challenge', 'Challenge selesai! +140 XP.', 'cooldown');
            App.log('Challenge Room sukses (+140 XP)');
            confetti({particleCount: 120, spread: 70, origin:{y:0.7}});
            this.flash('game-challenge-card', 'win');
            SFX.play('winBig');
        } else {
            this.setCooldown('challenge', 25);
            this.setStatus('challenge', 'Gagal. Coba lagi.', 'cooldown');
            App.log('Challenge Room gagal.');
            this.flash('game-challenge-card', 'lose');
            SFX.play('error');
        }
    },
    startTarget() {
        if(this.targetActive) return;
        const left = this.timeLeft('target');
        if(left > 0) return this.setStatus('target', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        this.targetActive = true;
        this.targetHits = 0;
        const hits = document.getElementById('target-hits');
        if(hits) hits.innerText = '0';
        const dot = document.getElementById('target-dot');
        if(dot) dot.classList.remove('hidden');
        this.moveTarget();
        this.setStatus('target', '8 detik. Gas!', 'active');
        if(this.targetTimer) clearInterval(this.targetTimer);
        if(this.targetTimeout) clearTimeout(this.targetTimeout);
        this.targetTimeout = setTimeout(() => this.endTarget(), 8000);
    },
    moveTarget() {
        const area = document.getElementById('target-area');
        const dot = document.getElementById('target-dot');
        if(!area || !dot) return;
        const maxX = area.clientWidth - 40;
        const maxY = area.clientHeight - 40;
        const x = Math.max(4, Math.random() * maxX);
        const y = Math.max(4, Math.random() * maxY);
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
    },
    hitTarget() {
        if(!this.targetActive) return;
        this.targetHits += 1;
        const hits = document.getElementById('target-hits');
        if(hits) hits.innerText = this.targetHits;
        SFX.play('hit');
        this.moveTarget();
        if(!this.targetTimer) {
            this.targetTimer = setInterval(() => this.moveTarget(), 400);
        }
    },
    endTarget() {
        if(!this.targetActive) return;
        this.targetActive = false;
        if(this.targetTimer) { clearInterval(this.targetTimer); this.targetTimer = null; }
        if(this.targetTimeout) { clearTimeout(this.targetTimeout); this.targetTimeout = null; }
        const dot = document.getElementById('target-dot');
        if(dot) dot.classList.add('hidden');
        let gain = 0;
        if(this.targetHits >= 12) gain = 60;
        else if(this.targetHits >= 8) gain = 45;
        else if(this.targetHits >= 5) gain = 22;
        if(gain > 0) {
            App.xp(gain);
            this.registerWin();
            App.log(`Target Rush ${this.targetHits} hit (+${gain} XP)`);
            SFX.play('success');
            this.setStatus('target', `Hit ${this.targetHits}. +${gain} XP.`, 'cooldown');
            if(gain >= 45) { confetti({particleCount: 50, spread: 50, origin:{y:0.8}}); SFX.play('winBig'); }
            this.flash('game-target-card', 'win');
        } else {
            App.log(`Target Rush gagal (${this.targetHits} hit)`);
            SFX.play('error');
            this.setStatus('target', `Hit ${this.targetHits}. Gagal.`, 'cooldown');
            this.flash('game-target-card', 'lose');
        }
        this.setCooldown('target', this.cooldownConfig.target);
    },
    guessStart() {
        if(this.guessActive) return;
        const left = this.timeLeft('guess');
        if(left > 0) return this.setStatus('guess', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        this.guessActive = true;
        this.guessTries = 3;
        this.guessNumber = Math.floor(Math.random() * 20) + 1;
        this.setStatus('guess', 'Mulai. 3x tebak.', 'active');
    },
    guessSubmit() {
        if(!this.guessActive) return;
        const input = document.getElementById('guess-input');
        const val = parseInt(input.value, 10);
        if(input) input.value = '';
        if(Number.isNaN(val)) return;
        this.guessTries -= 1;
        if(val === this.guessNumber) {
            this.guessActive = false;
            App.xp(35);
            this.registerWin();
            App.log('Guess Number benar (+35 XP)');
            this.setCooldown('guess', this.cooldownConfig.guess);
            this.setStatus('guess', 'Benar! +35 XP.', 'cooldown');
            this.flash('game-guess-card', 'win');
            SFX.play('success');
            return;
        }
        if(this.guessTries <= 0) {
            this.guessActive = false;
            this.setCooldown('guess', 8);
            this.setStatus('guess', `Salah. Angkanya ${this.guessNumber}.`, 'cooldown');
            App.log('Guess Number gagal.');
            this.flash('game-guess-card', 'lose');
            SFX.play('error');
            return;
        }
        const hint = val > this.guessNumber ? 'Terlalu besar.' : 'Terlalu kecil.';
        this.setStatus('guess', `${hint} Sisa ${this.guessTries}x.`, 'active');
    },
    startMemory() {
        if(this.memoryActive) return;
        const left = this.timeLeft('memory');
        if(left > 0) return this.setStatus('memory', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        this.memoryActive = true;
        this.memoryMatches = 0;
        this.memoryFlipped = [];
        const matchEl = document.getElementById('memory-match');
        if(matchEl) matchEl.innerText = '0';
        const symbols = ["★","❤","✦","☠","◆","✿"];
        const deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
        this.memoryCards = deck.map((s, idx) => ({ id: idx, symbol: s, matched: false, flipped: false }));
        this.renderMemoryGrid();
        this.setStatus('memory', 'Mulai! 25 detik.', 'active');
        if(this.memoryTimer) clearTimeout(this.memoryTimer);
        this.memoryTimer = setTimeout(() => this.endMemory(false), 25000);
    },
    renderMemoryGrid() {
        const grid = document.getElementById('memory-grid');
        if(!grid) return;
        grid.innerHTML = '';
        this.memoryCards.forEach(card => {
            const btn = document.createElement('button');
            btn.className = `memory-card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`;
            btn.innerText = card.flipped || card.matched ? card.symbol : '•';
            btn.onclick = () => this.flipMemory(card.id);
            grid.appendChild(btn);
        });
    },
    flipMemory(id) {
        if(!this.memoryActive) return;
        const card = this.memoryCards.find(c => c.id === id);
        if(!card || card.flipped || card.matched) return;
        if(this.memoryFlipped.length >= 2) return;
        card.flipped = true;
        this.memoryFlipped.push(card);
        this.renderMemoryGrid();
        if(this.memoryFlipped.length === 2) {
            const [a, b] = this.memoryFlipped;
            if(a.symbol === b.symbol) {
                a.matched = true; b.matched = true;
                this.memoryFlipped = [];
                this.memoryMatches += 1;
                const matchEl = document.getElementById('memory-match');
                if(matchEl) matchEl.innerText = this.memoryMatches;
                if(this.memoryMatches >= 6) this.endMemory(true);
            } else {
                setTimeout(() => {
                    a.flipped = false; b.flipped = false;
                    this.memoryFlipped = [];
                    this.renderMemoryGrid();
                }, 500);
            }
        }
    },
    endMemory(success) {
        if(!this.memoryActive) return;
        this.memoryActive = false;
        if(this.memoryTimer) { clearTimeout(this.memoryTimer); this.memoryTimer = null; }
        let gain = 0;
        if(success) gain = 70;
        else if(this.memoryMatches >= 4) gain = 35;
        else if(this.memoryMatches >= 2) gain = 18;
        if(gain > 0) { App.xp(gain); this.registerWin(); App.log(`Memory Flip ${this.memoryMatches} match (+${gain} XP)`); this.flash('game-memory-card', 'win'); SFX.play('success'); }
        else { App.log(`Memory Flip gagal (${this.memoryMatches} match)`); this.flash('game-memory-card', 'lose'); SFX.play('error'); }
        this.setStatus('memory', success ? `Selesai +${gain} XP.` : `Match ${this.memoryMatches}.`, 'cooldown');
        this.setCooldown('memory', this.cooldownConfig.memory);
        this.renderMemoryGrid();
    },
    startAim() {
        if(this.aimActive) return;
        const left = this.timeLeft('aim');
        if(left > 0) return this.setStatus('aim', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        this.aimActive = true;
        this.aimHits = 0;
        this.aimCount = 0;
        const hitEl = document.getElementById('aim-hit');
        if(hitEl) hitEl.innerText = '0';
        const dot = document.getElementById('aim-dot');
        if(dot) dot.classList.remove('hidden');
        this.moveAim();
        this.setStatus('aim', '10 target. Gas.', 'active');
    },
    moveAim() {
        const area = document.getElementById('aim-area');
        const dot = document.getElementById('aim-dot');
        if(!area || !dot) return;
        const maxX = area.clientWidth - 30;
        const maxY = area.clientHeight - 30;
        dot.style.left = `${Math.max(4, Math.random() * maxX)}px`;
        dot.style.top = `${Math.max(4, Math.random() * maxY)}px`;
        if(this.aimTimer) clearTimeout(this.aimTimer);
        this.aimTimer = setTimeout(() => this.missAim(), 600);
    },
    hitAim() {
        if(!this.aimActive) return;
        this.aimHits += 1;
        this.aimCount += 1;
        const hitEl = document.getElementById('aim-hit');
        if(hitEl) hitEl.innerText = this.aimHits;
        SFX.play('hit');
        if(this.aimCount >= 10) return this.endAim();
        this.moveAim();
    },
    missAim() {
        if(!this.aimActive) return;
        this.aimCount += 1;
        if(this.aimCount >= 10) return this.endAim();
        this.moveAim();
    },
    endAim() {
        if(!this.aimActive) return;
        this.aimActive = false;
        if(this.aimTimer) { clearTimeout(this.aimTimer); this.aimTimer = null; }
        const dot = document.getElementById('aim-dot');
        if(dot) dot.classList.add('hidden');
        let gain = 0;
        if(this.aimHits >= 8) gain = 65;
        else if(this.aimHits >= 5) gain = 40;
        else if(this.aimHits >= 3) gain = 18;
        if(gain > 0) { App.xp(gain); this.registerWin(); App.log(`Quick Aim ${this.aimHits}/10 (+${gain} XP)`); this.flash('game-aim-card', 'win'); if(gain >= 40) SFX.play('winBig'); SFX.play('success'); }
        else { App.log(`Quick Aim gagal (${this.aimHits}/10)`); this.flash('game-aim-card', 'lose'); SFX.play('error'); }
        this.setStatus('aim', `Hit ${this.aimHits}/10.`, 'cooldown');
        this.setCooldown('aim', this.cooldownConfig.aim);
    },
    startTyping() {
        if(this.typingActive) return;
        const left = this.timeLeft('typing');
        if(left > 0) return this.setStatus('typing', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        this.typingActive = true;
        this.typingCount = 0;
        const countEl = document.getElementById('typing-count');
        if(countEl) countEl.innerText = '0';
        this.typingDeadline = Date.now() + 20000;
        this.nextTypingWord();
        this.setStatus('typing', '20 detik. 5 kata.', 'active');
        if(this.typingTimer) clearInterval(this.typingTimer);
        this.typingTimer = setInterval(() => {
            if(Date.now() >= this.typingDeadline) this.endTyping(false);
        }, 500);
    },
    nextTypingWord() {
        const word = this.typingWords[Math.floor(Math.random() * this.typingWords.length)];
        const el = document.getElementById('typing-word');
        if(el) el.innerText = word;
    },
    typingSubmit() {
        if(!this.typingActive) return;
        const input = document.getElementById('typing-input');
        const val = input.value.trim().toLowerCase();
        input.value = '';
        const current = document.getElementById('typing-word').innerText.trim().toLowerCase();
        if(val === current) {
            this.typingCount += 1;
            const countEl = document.getElementById('typing-count');
            if(countEl) countEl.innerText = this.typingCount;
            if(this.typingCount >= 5) return this.endTyping(true);
            this.nextTypingWord();
            input.classList.remove('typing-glow');
            void input.offsetWidth;
            input.classList.add('typing-glow');
        } else {
            this.setStatus('typing', 'Salah. Fokus.', 'active');
        }
    },
    endTyping(success) {
        if(!this.typingActive) return;
        this.typingActive = false;
        if(this.typingTimer) { clearInterval(this.typingTimer); this.typingTimer = null; }
        let gain = 0;
        if(success) gain = 50;
        else if(this.typingCount >= 3) gain = 25;
        else if(this.typingCount >= 1) gain = 8;
        if(gain > 0) { App.xp(gain); this.registerWin(); App.log(`Typing Rush ${this.typingCount}/5 (+${gain} XP)`); this.flash('game-typing-card', 'win'); SFX.play('success'); }
        else { App.log(`Typing Rush gagal (${this.typingCount}/5)`); this.flash('game-typing-card', 'lose'); SFX.play('error'); }
        this.setStatus('typing', `Selesai ${this.typingCount}/5.`, 'cooldown');
        this.setCooldown('typing', this.cooldownConfig.typing);
    },
    clearCooldowns() {
        Object.keys(App.db.data.games.cooldowns).forEach(k => {
            App.db.data.games.cooldowns[k] = 0;
        });
        App.db.save();
        this.tickCooldowns();
    },

    startTap() {
        if(this.tapActive) return;
        const left = this.timeLeft('tap');
        if(left > 0) return this.setStatus('tap', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        const tapBtn = document.getElementById('tap-btn');
        const tapStart = document.getElementById('tap-start');
        if(tapBtn) tapBtn.disabled = false;
        if(tapStart) tapStart.disabled = true;
        this.tapActive = true;
        this.tapCount = 0;
        this.tapStartTime = Date.now();
        document.getElementById('tap-count').innerText = '0';
        document.getElementById('tap-timer').innerText = '3.0s';
        this.setStatus('tap', 'Gas! 3 detik mulai.', 'active');
        if(this.tapTimer) clearInterval(this.tapTimer);
        let timeLeft = 3000;
        this.tapTimer = setInterval(() => {
            timeLeft -= 100;
            const sec = Math.max(0, timeLeft / 1000);
            document.getElementById('tap-timer').innerText = `${sec.toFixed(1)}s`;
            if(timeLeft <= 0) this.endTap(false);
        }, 100);
    },

    tap() {
        if(!this.tapActive) return;
        this.tapCount += 1;
        document.getElementById('tap-count').innerText = this.tapCount;
        if(this.tapCount >= 10) this.endTap(true);
    },

    endTap(success) {
        if(!this.tapActive) return;
        this.tapActive = false;
        if(this.tapTimer) clearInterval(this.tapTimer);
        const tapBtn = document.getElementById('tap-btn');
        const tapStart = document.getElementById('tap-start');
        if(tapBtn) tapBtn.disabled = true;
        if(tapStart) tapStart.disabled = false;
        if(success) {
            const timeSpent = (Date.now() - this.tapStartTime) / 1000;
            const best = App.db.data.games.best.tapTime;
            if(best === 0 || timeSpent < best) {
                App.db.data.games.best.tapTime = parseFloat(timeSpent.toFixed(1));
                App.db.save();
                this.updateBest();
            }
            App.xp(25);
            this.setCooldown('tap', this.cooldownConfig.tap);
            this.setStatus('tap', `Menang +25 XP. Cooldown ${this.formatCooldown(this.cooldownConfig.tap)}`, 'cooldown');
            App.log(`Tap Rage menang (+25 XP, ${timeSpent.toFixed(1)}s)`);
            this.registerWin();
            this.flash('game-tap-card', 'win');
            SFX.play('success');
        } else {
            this.setCooldown('tap', 12);
            this.setStatus('tap', 'Gagal. Jari kamu lemah.', 'cooldown');
            App.log('Tap Rage gagal.');
            this.flash('game-tap-card', 'lose');
            SFX.play('error');
        }
    },

    newMath() {
        if(this.mathActive) return;
        const left = this.timeLeft('math');
        if(left > 0) return this.setStatus('math', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        const a = Math.floor(Math.random() * 20) + 2;
        const b = Math.floor(Math.random() * 20) + 2;
        this.mathAnswer = a + b;
        this.mathActive = true;
        this.mathTimeLeft = 8;
        document.getElementById('math-question').innerText = `${a} + ${b}`;
        this.setStatus('math', 'Timer 8s. Kerja!', 'active');
        if(this.mathTimer) clearInterval(this.mathTimer);
        this.mathTimer = setInterval(() => {
            this.mathTimeLeft -= 1;
            if(this.mathTimeLeft <= 0) {
                clearInterval(this.mathTimer);
                this.mathActive = false;
                App.db.data.games.streaks.math = 0;
                App.db.save();
                this.setCooldown('math', this.cooldownConfig.math);
                this.setStatus('math', 'Waktu habis. Fokus woy.', 'cooldown');
            } else {
                this.setStatus('math', `Sisa ${this.mathTimeLeft}s`, 'active');
            }
        }, 1000);
    },

    submitMath() {
        if(!this.mathActive) return;
        const input = document.getElementById('math-answer');
        const val = parseInt(input.value, 10);
        if(input) input.value = '';
        clearInterval(this.mathTimer);
        this.mathActive = false;
        if(val === this.mathAnswer) {
            App.db.data.games.streaks.math += 1;
            const streak = App.db.data.games.streaks.math;
            const bonus = Math.min(20, (streak - 1) * 5);
            const gain = 35 + bonus;
            App.db.save();
            App.xp(gain);
            this.setCooldown('math', this.cooldownConfig.math);
            this.setStatus('math', `Benar +${gain} XP (streak ${streak})`, 'cooldown');
            App.log(`Math Burst benar (+${gain} XP, streak ${streak})`);
            this.registerWin();
            if(gain >= 55) confetti({particleCount: 80, spread: 60, origin:{y:0.8}});
            this.flash('game-math-card', 'win');
            SFX.play('success');
        } else {
            App.db.data.games.streaks.math = 0;
            App.db.save();
            this.setCooldown('math', 8);
            this.setStatus('math', 'Salah. Otak ngelag.', 'cooldown');
            App.log('Math Burst salah.');
            this.flash('game-math-card', 'lose');
            SFX.play('error');
        }
        document.getElementById('math-question').innerText = '--';
    },

    rps(choice) {
        const left = this.timeLeft('rps');
        if(left > 0) return this.setStatus('rps', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        const options = ['rock', 'paper', 'scissors'];
        const enemy = options[Math.floor(Math.random() * options.length)];
        const label = { rock: 'batu', paper: 'kertas', scissors: 'gunting' };
        let result = 'kalah';
        if(choice === enemy) result = 'seri';
        else if(
            (choice === 'rock' && enemy === 'scissors') ||
            (choice === 'paper' && enemy === 'rock') ||
            (choice === 'scissors' && enemy === 'paper')
        ) result = 'menang';
        let msg = `Kamu ${label[choice]} vs ${label[enemy]}. `;
        if(result === 'menang') { App.xp(20); msg += 'Menang +20 XP.'; this.registerWin(); this.flash('game-rps-card', 'win'); SFX.play('success'); }
        if(result === 'seri') { App.xp(3); msg += 'Seri +3 XP.'; }
        if(result === 'kalah') { msg += 'Kalah. Coba lagi.'; this.flash('game-rps-card', 'lose'); SFX.play('error'); }
        this.setCooldown('rps', this.cooldownConfig.rps);
        this.setStatus('rps', msg, 'cooldown');
        App.log(`Suit: ${label[choice]} vs ${label[enemy]} (${result})`);
    },

    startReaction() {
        if(this.reactionWaiting || this.reactionReady) return;
        const left = this.timeLeft('reaction');
        if(left > 0) return this.setStatus('reaction', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        const startBtn = document.getElementById('react-start');
        const reactBtn = document.getElementById('react-btn');
        if(startBtn) startBtn.disabled = true;
        if(reactBtn) { reactBtn.disabled = true; reactBtn.classList.remove('ready'); reactBtn.innerText = 'TUNGGU...'; }
        this.reactionWaiting = true;
        this.setStatus('reaction', 'Tunggu hijau. Jangan curang.', 'active');
        const delay = 1200 + Math.random() * 2200;
        if(this.reactionTimer) clearTimeout(this.reactionTimer);
        this.reactionTimer = setTimeout(() => {
            this.reactionReady = true;
            this.reactionWaiting = false;
            this.reactionStart = Date.now();
            if(reactBtn) { reactBtn.disabled = false; reactBtn.classList.add('ready'); reactBtn.innerText = 'SEKARANG!'; }
        }, delay);
    },

    reactTap() {
        const startBtn = document.getElementById('react-start');
        const reactBtn = document.getElementById('react-btn');
        if(this.reactionWaiting && !this.reactionReady) {
            clearTimeout(this.reactionTimer);
            this.reactionWaiting = false;
            if(startBtn) startBtn.disabled = false;
            if(reactBtn) { reactBtn.disabled = true; reactBtn.classList.remove('ready'); reactBtn.innerText = 'TUNGGU...'; }
            this.setCooldown('reaction', 8);
            App.log('Reflex Panic gagal (keburu).');
            this.flash('game-react-card', 'lose');
            return this.setStatus('reaction', 'Keburu. Santai dikit.', 'cooldown');
        }
        if(!this.reactionReady) return;
        this.reactionReady = false;
        const delta = Date.now() - this.reactionStart;
        let gain = 10;
        if(delta < 220) gain = 50;
        else if(delta < 320) gain = 40;
        else if(delta < 450) gain = 28;
        else if(delta < 650) gain = 18;
        App.xp(gain);
        if(startBtn) startBtn.disabled = false;
        if(reactBtn) { reactBtn.disabled = true; reactBtn.classList.remove('ready'); reactBtn.innerText = 'TUNGGU...'; }
        const best = App.db.data.games.best.reactionTime;
        if(best === 0 || delta < best) {
            App.db.data.games.best.reactionTime = delta;
            App.db.save();
            this.updateBest();
        }
        this.setCooldown('reaction', this.cooldownConfig.reaction);
        this.setStatus('reaction', `Reaksi ${delta}ms. +${gain} XP.`, 'cooldown');
        App.log(`Reflex Panic ${delta}ms (+${gain} XP)`);
        this.registerWin();
        if(gain >= 40) { confetti({particleCount: 60, spread: 55, origin:{y:0.8}}); SFX.play('winBig'); }
        this.flash('game-react-card', 'win');
        SFX.play('success');
    },

    spinLucky() {
        const left = this.timeLeft('lucky');
        if(left > 0) return this.setStatus('lucky', `Cooldown ${this.formatCooldown(left)}`, 'cooldown');
        const roll = Math.random();
        let xp = 0;
        if(roll < 0.5) xp = Math.floor(Math.random() * 16);
        else if(roll < 0.9) xp = 16 + Math.floor(Math.random() * 30);
        else xp = 46 + Math.floor(Math.random() * 40);
        if(xp > 0) { App.xp(xp); this.setStatus('lucky', `Dapat ${xp} XP.`, 'cooldown'); App.log(`Lucky Button +${xp} XP`); if(xp >= 60) confetti({particleCount: 90, spread: 60, origin:{y:0.8}}); this.flash('game-lucky-card', 'win'); SFX.play('success'); }
        else { this.setStatus('lucky', 'Zonk. Nasib.', 'cooldown'); App.log('Lucky Button zonk.'); this.flash('game-lucky-card', 'lose'); SFX.play('error'); }
        this.setCooldown('lucky', this.cooldownConfig.lucky);
    }
};

class DB {
    constructor() {
        this.key = 'SarcasticOS_Platinum_V6_PWA';
        this.data = {
            user: { 
                name:'User Gabut', xp:0, lvl:1, 
                loan: 0,
                skin: 'default', // DATA BARU: SKIN YANG DIPAKAI
                theme:'default', wallpaper:'wall-none', cursor:'cursor-default', 
                avatar:CONFIG.DEFAULTS.avatar, cover:CONFIG.DEFAULTS.cover, 
                stats:{done:0, del:0}, tickets: 0, lastLogin: '', loginStreak: 0 
            },
            tasks: [], inventory: ['theme-default', 'wall-none', 'cursor-default'],
            pet: { active: false, name: 'Si Beban', hunger: 100, health: 100, feedCount: 0, lastUpdate: Date.now() },
            achievements: [],
            logs: [],
            friends: [],
            games: {
                cooldowns: { tap: 0, math: 0, rps: 0, reaction: 0, lucky: 0, target: 0, guess: 0, challenge: 0, memory: 0, aim: 0, typing: 0 },
                streaks: { math: 0 },
                best: { tapTime: 0, reactionTime: 0 }
            }
        };
        this.load();
    }
    load() {
        const d = localStorage.getItem(this.key);
        if(d) {
            const parsed = JSON.parse(d);
            this.data = {...this.data, ...parsed, user:{...this.data.user, ...parsed.user}, pet:{...this.data.pet, ...parsed.pet}, games:{...this.data.games, ...parsed.games}};
            ['theme-default', 'wall-none', 'cursor-default'].forEach(x => { if(!this.data.inventory.includes(x)) this.data.inventory.push(x); });
            // Migration for skin
            if(!this.data.user.skin) this.data.user.skin = 'default';
            // Migration for logs
            if(!this.data.logs) this.data.logs = [];
            // Migration for friends
            if(!this.data.friends) this.data.friends = [];
            // Migration for games
            if(!this.data.games) {
                this.data.games = {
                    cooldowns: { tap: 0, math: 0, rps: 0, reaction: 0, lucky: 0, target: 0, guess: 0, challenge: 0, memory: 0, aim: 0, typing: 0 },
                    streaks: { math: 0 },
                    best: { tapTime: 0, reactionTime: 0 }
                };
            }
            if(!this.data.games.cooldowns) this.data.games.cooldowns = { tap: 0, math: 0, rps: 0, reaction: 0, lucky: 0, target: 0, guess: 0, challenge: 0, memory: 0, aim: 0, typing: 0 };
            if(!this.data.games.streaks) this.data.games.streaks = { math: 0 };
            if(!this.data.games.best) this.data.games.best = { tapTime: 0, reactionTime: 0 };
        }
    }
    save() { 
        try{localStorage.setItem(this.key, JSON.stringify(this.data))}catch(e){alert('Storage Full')}
        if (typeof Online !== 'undefined' && typeof Online.queueSync === 'function') Online.queueSync();
    }
}

const Online = {
    status: 'OFFLINE',
    hint: 'Isi config online dulu.',
    ready: false,
    uid: null,
    code: '----',
    app: null,
    db: null,
    auth: null,
    cacheFriends: [],
    cacheLeaderboard: [],
    syncTimer: null,
    isConfigured() {
        const cfg = CONFIG.ONLINE && CONFIG.ONLINE.firebase;
        return !!(CONFIG.ONLINE && CONFIG.ONLINE.enabled && cfg && cfg.apiKey && cfg.databaseURL);
    },
    init() {
        this.render();
        if(!this.isConfigured()) {
            this.setStatus('OFFLINE', 'Isi config Firebase dulu.');
            return;
        }
        this.connect();
    },
    setStatus(status, hint) {
        this.status = status;
        if(hint) this.hint = hint;
        this.render();
    },
    connect() {
        if(!this.isConfigured()) {
            this.setStatus('OFFLINE', 'Isi config Firebase dulu.');
            App.notify("Online belum diset.", "error");
            return;
        }
        if(!window.firebase) {
            this.setStatus('ERROR', 'Firebase SDK belum load.');
            return;
        }
        this.setStatus('CONNECTING', 'Nyambung dulu...');
        if(firebase.apps.length === 0) this.app = firebase.initializeApp(CONFIG.ONLINE.firebase);
        else this.app = firebase.app();
        this.auth = firebase.auth();
        this.db = firebase.database();
        this.auth.onAuthStateChanged(user => {
            if(!user) return;
            this.uid = user.uid;
            this.code = this.makeCode(user.uid);
            this.ready = true;
            this.setStatus('ONLINE', 'Terhubung.');
            this.ensureCode();
            this.syncNow();
            this.loadFriends();
            this.refreshLeaderboard();
            this.render();
        });
        if(!this.auth.currentUser) {
            this.auth.signInAnonymously().catch(err => {
            console.error('Online auth error:', err);
            const msg = (err && err.code === 'auth/operation-not-allowed')
                ? 'Aktifkan Anonymous di Firebase Auth.'
                : 'Auth gagal.';
            this.setStatus('ERROR', msg);
            });
        }
    },
    authLabel() {
        if(!this.auth || !this.auth.currentUser) return 'Anon';
        const u = this.auth.currentUser;
        if(u.isAnonymous) return 'Anon';
        const provider = (u.providerData && u.providerData[0] && u.providerData[0].providerId) || '';
        if(provider === 'google.com') return 'Google';
        if(provider === 'password') return 'Email';
        return 'User';
    },
    signInGoogle() {
        if(!this.auth) return App.notify("Belum online.", "error");
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = this.auth.currentUser;
        if(user && user.isAnonymous) {
            user.linkWithPopup(provider).then(() => {
                App.notify("Akun tersambung Google.", "success");
                this.syncNow();
            }).catch(err => {
                console.error('Google link error:', err);
                App.notify("Gagal sambung Google.", "error");
            });
        } else {
            this.auth.signInWithPopup(provider).then(() => {
                App.notify("Login Google.", "success");
                this.syncNow();
            }).catch(err => {
                console.error('Google sign-in error:', err);
                App.notify("Login Google gagal.", "error");
            });
        }
    },
    signInEmail() {
        this.openAuth('login');
    },
    signOut() {
        if(!this.auth) return;
        this.auth.signOut().then(() => {
            this.ready = false;
            this.uid = null;
            this.code = '----';
            this.setStatus('OFFLINE', 'Logout.');
            App.notify("Logout.", "success");
        });
    },
    openAuth(tab = 'login') {
        const modal = document.getElementById('auth-modal');
        if(!modal) return;
        this.switchAuthTab(tab);
        modal.classList.remove('hidden');
        requestAnimationFrame(() => modal.classList.remove('opacity-0'));
        lucide.createIcons();
    },
    closeAuth() {
        const modal = document.getElementById('auth-modal');
        if(!modal) return;
        modal.classList.add('opacity-0');
        setTimeout(() => modal.classList.add('hidden'), 200);
    },
    switchAuthTab(tab) {
        const tabs = ['login','signup','reset'];
        tabs.forEach(t => {
            const tabEl = document.getElementById(`auth-tab-${t}`);
            const panelEl = document.getElementById(`auth-panel-${t}`);
            if(tabEl) tabEl.classList.toggle('active', t === tab);
            if(panelEl) panelEl.classList.toggle('active', t === tab);
        });
        const status = document.getElementById('auth-status-line');
        if(status) status.innerText = `Status: ${tab.toUpperCase()}`;
    },
    setAuthStatus(msg, ok = true) {
        const status = document.getElementById('auth-status-line');
        if(!status) return;
        status.innerText = `Status: ${msg}`;
        status.style.color = ok ? '#a7f3d0' : '#fca5a5';
        status.style.background = ok ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.12)';
        status.style.borderColor = ok ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)';
    },
    setAuthBusy(isBusy) {
        const modal = document.getElementById('auth-modal');
        if(!modal) return;
        const card = modal.querySelector('.auth-card');
        if(card) card.classList.toggle('auth-loading', !!isBusy);
    },
    formatAuthError(err) {
        const code = err && err.code ? err.code : '';
        switch(code) {
            case 'auth/email-already-in-use': return 'Email sudah dipakai. Coba login.';
            case 'auth/invalid-email': return 'Format email salah.';
            case 'auth/weak-password': return 'Password terlalu lemah (min 6).';
            case 'auth/user-not-found': return 'Akun tidak ditemukan.';
            case 'auth/wrong-password': return 'Password salah.';
            case 'auth/popup-closed-by-user': return 'Popup ditutup.';
            case 'auth/operation-not-allowed': return 'Provider belum diaktifkan di Firebase.';
            case 'auth/credential-already-in-use': return 'Kredensial sudah dipakai akun lain.';
            case 'auth/account-exists-with-different-credential': return 'Email sudah terhubung provider lain.';
            default: return 'Terjadi error. Coba lagi.';
        }
    },
    submitAuth(mode) {
        if(!this.auth) return App.notify("Belum online.", "error");
        if(mode === 'login') {
            const email = (document.getElementById('auth-email') || {}).value || '';
            const password = (document.getElementById('auth-password') || {}).value || '';
            if(!email || !password) return this.setAuthStatus('Email/Password kosong', false);
            this.setAuthStatus('Login...', true);
            this.setAuthBusy(true);
            this.auth.signInWithEmailAndPassword(email, password).then(() => {
                App.notify("Login Email.", "success");
                this.syncNow();
                this.closeAuth();
            }).catch(err => {
                console.error('Email login error:', err);
                this.setAuthStatus(this.formatAuthError(err), false);
            }).finally(() => this.setAuthBusy(false));
            return;
        }
        if(mode === 'signup') {
            const email = (document.getElementById('auth-email-signup') || {}).value || '';
            const password = (document.getElementById('auth-password-signup') || {}).value || '';
            if(!email || !password || password.length < 6) return this.setAuthStatus('Password min 6', false);
            this.setAuthStatus('Daftar...', true);
            this.setAuthBusy(true);
            const user = this.auth.currentUser;
            const cred = firebase.auth.EmailAuthProvider.credential(email, password);
            const linkOrCreate = () => user.linkWithCredential(cred).then(() => {
                App.notify("Akun tersambung Email.", "success");
                this.syncNow();
                this.closeAuth();
            }).catch(err => {
                if(err && err.code === 'auth/email-already-in-use') {
                    this.auth.signInWithEmailAndPassword(email, password).then(() => {
                        App.notify("Login Email.", "success");
                        this.syncNow();
                        this.closeAuth();
                    }).catch(e2 => {
                        console.error('Email login error:', e2);
                        this.setAuthStatus(this.formatAuthError(e2), false);
                    });
                    return;
                }
                console.error('Email link error:', err);
                this.setAuthStatus(this.formatAuthError(err), false);
            });
            if(user && user.isAnonymous) return linkOrCreate();
            this.auth.createUserWithEmailAndPassword(email, password).then(() => {
                App.notify("Akun Email dibuat.", "success");
                this.syncNow();
                this.closeAuth();
            }).catch(err => {
                console.error('Email signup error:', err);
                this.setAuthStatus(this.formatAuthError(err), false);
            }).finally(() => this.setAuthBusy(false));
            return;
        }
        if(mode === 'reset') {
            const email = (document.getElementById('auth-email-reset') || {}).value || '';
            if(!email) return this.setAuthStatus('Email kosong', false);
            this.setAuthStatus('Mengirim reset...', true);
            this.setAuthBusy(true);
            this.auth.sendPasswordResetEmail(email).then(() => {
                this.setAuthStatus('Reset terkirim', true);
                App.notify("Reset email terkirim.", "success");
            }).catch(err => {
                console.error('Reset error:', err);
                this.setAuthStatus(this.formatAuthError(err), false);
            }).finally(() => this.setAuthBusy(false));
        }
    },
    makeCode(uid) {
        return (uid || '').slice(-6).toUpperCase() || '----';
    },
    ensureCode() {
        if(!this.ready || !this.db || !this.code) return;
        this.db.ref(`codes/${this.code}`).set(this.uid);
    },
    profilePayload() {
        const u = App.db.data.user;
        return {
            name: u.name || 'User',
            avatar: u.avatar || CONFIG.DEFAULTS.avatar,
            xp: u.xp || 0,
            lvl: u.lvl || 1,
            stats: u.stats || { done: 0, del: 0 },
            code: this.code,
            updatedAt: Date.now()
        };
    },
    syncProfile() {
        if(!this.ready || !this.db) return;
        const payload = this.profilePayload();
        this.db.ref(`users/${this.uid}`).update(payload);
    },
    syncLeaderboard() {
        if(!this.ready || !this.db) return;
        const payload = this.profilePayload();
        this.db.ref(`leaderboards/xp/${this.uid}`).set(payload);
    },
    syncNow() {
        if(!this.ready) {
            App.notify("Belum online.", "error");
            return;
        }
        this.syncProfile();
        this.syncLeaderboard();
        const el = document.getElementById('online-sync');
        if(el) el.innerText = `Sync ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`;
    },
    queueSync() {
        if(!this.ready) return;
        clearTimeout(this.syncTimer);
        this.syncTimer = setTimeout(() => this.syncNow(), 1500);
    },
    copyCode() {
        if(!this.code || this.code === '----') return App.notify("Belum ada kode.", "error");
        if(navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(this.code).then(() => App.notify("Kode dicopy.", "success"));
        } else {
            prompt('Copy kode ini:', this.code);
        }
    },
    addFriend() {
        const input = document.getElementById('friend-code');
        if(!input) return;
        const code = input.value.trim().toUpperCase();
        if(!code) return App.notify("Masukkan kode.", "error");
        if(!this.ready || !this.db) return App.notify("Belum online.", "error");
        this.db.ref(`codes/${code}`).once('value').then(snap => {
            const uid = snap.val();
            if(!uid) return App.notify("Kode tidak ditemukan.", "error");
            if(uid === this.uid) return App.notify("Itu kode kamu sendiri.", "error");
            if(!App.db.data.friends.includes(uid)) {
                App.db.data.friends.push(uid);
                App.db.save();
            }
            input.value = '';
            this.loadFriends();
            App.notify("Teman ditambah.", "success");
        });
    },
    loadFriends() {
        if(!this.ready || !this.db) return;
        const ids = App.db.data.friends || [];
        if(ids.length === 0) {
            this.cacheFriends = [];
            this.render();
            return;
        }
        Promise.all(ids.map(id => this.db.ref(`users/${id}`).once('value')))
            .then(snaps => {
                this.cacheFriends = snaps.map(s => s.val()).filter(Boolean);
                this.render();
            });
    },
    refreshLeaderboard() {
        if(!this.ready || !this.db) {
            this.cacheLeaderboard = [];
            this.render();
            return;
        }
        this.db.ref('leaderboards/xp').orderByChild('xp').limitToLast(20).once('value').then(snap => {
            const items = [];
            snap.forEach(child => items.push(child.val()));
            this.cacheLeaderboard = items.sort((a,b)=> (b.xp||0) - (a.xp||0));
            this.render();
        });
    },
    renderFriendsList() {
        const el = document.getElementById('friends-list');
        if(!el) return;
        el.innerHTML = '';
        if(!this.ready) {
            el.innerHTML = `<div class="text-[10px] text-slate-500">Belum online.</div>`;
            return;
        }
        if(this.cacheFriends.length === 0) {
            el.innerHTML = `<div class="text-[10px] text-slate-500">Belum ada teman.</div>`;
            return;
        }
        this.cacheFriends.forEach(f => {
            const row = document.createElement('div');
            row.className = 'glass-panel rounded-xl p-3 border border-white/5 flex items-center gap-3';
            row.innerHTML = `<img src="${f.avatar || CONFIG.DEFAULTS.avatar}" class="w-8 h-8 rounded-full object-cover"><div class="flex-1"><div class="text-xs font-bold text-white">${f.name || 'Teman'}</div><div class="text-[10px] text-slate-400">XP ${f.xp || 0} • LV ${f.lvl || 1}</div></div><div class="text-[10px] text-slate-500">${f.code || ''}</div>`;
            el.appendChild(row);
        });
    },
    renderLeaderboardList() {
        const el = document.getElementById('leaderboard-list');
        if(!el) return;
        el.innerHTML = '';
        if(!this.ready) {
            el.innerHTML = `<div class="text-[10px] text-slate-500">Belum online.</div>`;
            return;
        }
        if(this.cacheLeaderboard.length === 0) {
            el.innerHTML = `<div class="text-[10px] text-slate-500">Belum ada data.</div>`;
            return;
        }
        this.cacheLeaderboard.forEach((p, i) => {
            const row = document.createElement('div');
            row.className = 'glass-panel rounded-xl p-3 border border-white/5 flex items-center gap-3';
            row.innerHTML = `<div class="w-6 text-center text-[10px] font-bold ${i===0?'text-yellow-400':i===1?'text-slate-200':i===2?'text-amber-600':'text-slate-500'}">#${i+1}</div><img src="${p.avatar || CONFIG.DEFAULTS.avatar}" class="w-7 h-7 rounded-full object-cover"><div class="flex-1"><div class="text-xs font-bold text-white">${p.name || 'User'}</div><div class="text-[10px] text-slate-400">LV ${p.lvl || 1}</div></div><div class="text-xs font-bold text-white">${p.xp || 0} XP</div>`;
            el.appendChild(row);
        });
    },
    render() {
        const statusEl = document.getElementById('online-status');
        const hintEl = document.getElementById('online-hint');
        const codeEl = document.getElementById('online-code');
        const authEl = document.getElementById('auth-status');
        if(statusEl) statusEl.innerText = this.status;
        if(hintEl) hintEl.innerText = this.hint || '';
        if(codeEl) codeEl.innerText = this.code || '----';
        if(authEl) authEl.innerText = this.authLabel();
        this.renderFriendsList();
        this.renderLeaderboardList();
    }
};

const Pet = {
    tempHappy: false,
    touchLines: [
        "Ih, geli woy.",
        "Jangan sentuh situ.",
        "Apaan sih, tangan dingin.",
        "Stop, gue bukan boneka.",
        "Halo? Jaga jarak.",
        "Nggak usah pegang-pegang.",
        "Jangan manja.",
        "Tangan lu panas.",
        "Sentuh terus, denda.",
        "Aduh, kaget.",
        "Pelan-pelan, dasar barbar.",
        "Gue lagi capek.",
        "Lagi males disentuh.",
        "Berisik banget sentuh-sentuh.",
        "Bentar, gue loading.",
        "Jangan ganggu pas gue mager.",
        "Cukup, udah.",
        "Oke, sekali lagi doang.",
        "Kalo ini terapi lu, bayar dulu.",
        "Mending chat aja."
    ],
    init() {
        const p = App.db.data.pet;
        this.calculateOfflineDecay();
        this.render();
        setInterval(() => { this.tick(); }, 60000); 
    },
    buyEgg() {
        if(App.db.data.user.xp >= 500) {
            App.xp(-500); App.db.data.pet.active = true; App.db.data.pet.lastUpdate = Date.now(); App.db.save(); App.notify("Waifu didapatkan!", "success"); App.log("Beli pet baru (-500 XP)"); SFX.play('buy'); this.init();
        } else { App.notify("XP kurang.", "error"); }
    },
    tick() {
        const p = App.db.data.pet; if(!p.active) return;
        p.hunger = Math.max(0, p.hunger - 0.5); 
        if(p.hunger < 20) p.health = Math.max(0, p.health - 1);
        if(p.health <= 0) { Notif.send("Si Beban Kabur!", "Waifu pergi cari orang kaya."); App.notify("Waifu kabur.", "error"); p.active = false; p.hunger = 100; p.health = 100; }
        p.lastUpdate = Date.now(); App.db.save(); this.render();
    },
    calculateOfflineDecay() {
        const p = App.db.data.pet; const now = Date.now(); const diffMins = (now - p.lastUpdate) / 60000;
        if(diffMins > 0) {
            p.hunger = Math.max(0, p.hunger - (diffMins * 0.5));
            if(p.hunger < 30 && p.health > 0) Notif.send("Waifu Lapar!", "Kasih makan woy.");
            if(p.hunger < 20) { const starvingMins = diffMins - (p.hunger / 0.5); if(starvingMins > 0) p.health = Math.max(0, p.health - (starvingMins * 0.1)); }
            if(p.health <= 0) { App.notify("Waifu pergi saat anda offline.", "error"); p.active = false; p.hunger = 100; p.health = 100; App.db.save(); return; }
        }
        p.lastUpdate = now; App.db.save();
    },
    say(msg) {
        const b = document.getElementById('waifu-bubble');
        if(b) { b.innerText = `"${msg}"`; b.classList.remove('opacity-0'); b.classList.add('animate-bounce'); setTimeout(() => { b.classList.add('opacity-0'); b.classList.remove('animate-bounce'); }, 2500); }
    },
    feed() {},
    play() {
        const msg = this.touchLines[Math.floor(Math.random() * this.touchLines.length)];
        SFX.play('click');
        this.say(msg);
    },
    render() {
        const p = App.db.data.pet;
        const u = App.db.data.user;
        let skinId = u.skin || 'default'; // Fallback logic
        
        // Safety Check: If skin config is missing, force default to prevent crash
        if(!CONFIG.WAIFU_SKINS[skinId]) {
            console.error("Skin missing in config:", skinId);
            skinId = 'default';
        }
        const images = CONFIG.WAIFU_SKINS[skinId];

        const elHunger = document.getElementById('pet-hunger'); if(elHunger) elHunger.innerText = Math.floor(p.hunger); 
        const elHealth = document.getElementById('pet-health'); if(elHealth) elHealth.innerText = Math.floor(p.health);
        const imgEl = document.getElementById('pet-img'); const statusEl = document.getElementById('pet-status');
        
        if(!imgEl || !statusEl) return;

        if(!p.active) {
            imgEl.src = images.normal;
            statusEl.innerText = "Status: Belum Aktif";
            statusEl.className = "text-center mt-6 text-xs font-bold text-slate-300 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 mx-auto w-max shadow-lg";
            return;
        }
        
        if (this.tempHappy) { imgEl.src = images.happy; statusEl.innerText = "Mood: Senang 😍"; statusEl.className = "text-center mt-6 text-xs font-bold text-green-400 bg-green-500/20 backdrop-blur-xl px-4 py-1.5 rounded-full border border-green-500/30 mx-auto w-max shadow-lg"; } 
        else if (p.health <= 0) { imgEl.src = images.dead; statusEl.innerText = "Status: Kabur 💀"; } 
        else if (p.health < 40) { imgEl.src = images.sad; statusEl.innerText = "Mood: Sakit 🤒"; statusEl.className = "text-center mt-6 text-xs font-bold text-red-400 bg-red-500/20 backdrop-blur-xl px-4 py-1.5 rounded-full border border-red-500/30 mx-auto w-max shadow-lg"; } 
        else if (p.hunger < 40) { imgEl.src = images.hungry; statusEl.innerText = "Mood: Kelaparan 😡"; statusEl.className = "text-center mt-6 text-xs font-bold text-orange-400 bg-orange-500/20 backdrop-blur-xl px-4 py-1.5 rounded-full border border-orange-500/30 mx-auto w-max shadow-lg"; } 
        else { imgEl.src = images.normal; statusEl.innerText = "Mood: Biasa Aja 🙂"; statusEl.className = "text-center mt-6 text-xs font-bold text-white bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 mx-auto w-max shadow-lg"; }
    }
};

const Achievements = {
    check(trigger) {
        const d = App.db.data; const u = d.user; const p = d.pet;
        const unlock = (id) => { if(!d.achievements.includes(id)) { d.achievements.push(id); const ach = CONFIG.ACHIEVEMENTS.find(x=>x.id===id); App.notify(`🏆 Badge: ${ach.name}`, 'success'); App.xp(ach.xp); SFX.play('success'); App.renderAchievements(); } };
        if(trigger === 'login') { const h = new Date().getHours(); if(h >= 1 && h <= 4) unlock('ach-begadang'); if(u.lastLogin) { const days = (Date.now() - new Date(u.lastLogin).getTime()) / (1000 * 3600 * 24); if(days >= 3) unlock('ach-touch-grass'); } }
        if(trigger === 'delete') { if(u.stats.del >= 10) unlock('ach-wacana'); }
        if(trigger === 'xp') { if(u.xp >= 5000) unlock('ach-sultan'); }
        if(trigger === 'feed') { if(p.feedCount >= 50) unlock('ach-pet-lover'); }
        App.db.save();
    }
};

const App = {
    db: new DB(), filterMode: 'all', pendingReward: null,
    // Variabel untuk Swipe Gesture
    touchStartX: 0,
    touchEndX: 0,
    menuOrder: ['home', 'apps', 'games', 'pet', 'shop', 'profile'], // Urutan menu untuk swipe

    init() {
        lucide.createIcons(); this.render(); this.applyAppearance(); this.quote(); this.renderSounds(); this.renderAchievements();
        document.getElementById('task-input').addEventListener('keypress',e=>{if(e.key==='Enter')this.addTask()});
        document.getElementById('chat-input').addEventListener('keypress',e=>{if(e.key==='Enter')Chat.send()});
        
        Achievements.check('login'); this.checkDailyLogin(); Radio.init(); Pet.init(); Notif.init(); Weather.init(); Chat.startIdle(); Games.init(); Online.init();
        
        // Setup Swipe Listener
        this.initSwipeGestures();
        
        // Setup Initial Nav Position (delay dikit biar render layout kelar)
        setTimeout(() => this.moveSlider('home'), 100);
    },

    // --- FITUR BARU: SWIPE GESTURE ---
    initSwipeGestures() {
        const body = document.body;
        body.addEventListener('touchstart', e => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, {passive: false});

        body.addEventListener('touchend', e => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, {passive: false});
    },

    handleSwipe() {
        const threshold = 50; // Minimal geser 50px baru dianggap swipe
        const swipeDistance = this.touchEndX - this.touchStartX;
        
        // Cek halaman aktif sekarang
        let currentId = 'home';
        ['home', 'apps', 'games', 'pet', 'shop', 'profile'].forEach(id => {
            if(!document.getElementById(`view-${id}`).classList.contains('hidden')) currentId = id;
        });

        const currentIndex = this.menuOrder.indexOf(currentId);

        // Swipe Kiri (Next Menu)
        if (swipeDistance < -threshold) {
            if (currentIndex < this.menuOrder.length - 1) {
                this.nav(this.menuOrder[currentIndex + 1]);
            }
        }
        // Swipe Kanan (Prev Menu)
        if (swipeDistance > threshold) {
            if (currentIndex > 0) {
                this.nav(this.menuOrder[currentIndex - 1]);
            }
        }
    },

    // --- LOGIKA NAVIGASI BARU (SLIDING PILL) ---
    nav(id) {
        SFX.play('click'); SFX.vib();
        
        // 1. Hide All Views
        ['home','apps','games','shop','profile','pet'].forEach(v=>{ 
            const el = document.getElementById(`view-${v}`);
            const btn = document.getElementById(`nav-${v}`);
            if(el) el.classList.add('hidden'); 
            if(btn) btn.classList.remove('active'); 
        });

        // 2. Show Target View
        const targetEl = document.getElementById(`view-${id}`);
        if(targetEl) { 
            targetEl.classList.remove('hidden'); 
            targetEl.classList.add('page-enter'); // Animasi masuk
        }

        // 3. Move Slider & Activate Button
        this.moveSlider(id);

        // 4. Special Renders
        if(id === 'shop') this.renderShop(); 
        if(id === 'profile') this.renderProfile(); 
        if(id === 'pet') Pet.render();
        if(id === 'games') Games.init();
        
        window.scrollTo({top:0, behavior:'smooth'}); 
        lucide.createIcons();
    },

    moveSlider(id) {
        const btn = document.getElementById(`nav-${id}`);
        const dock = document.getElementById('app-dock');
        const slider = document.getElementById('dock-slider');
        
        if(btn && dock && slider) {
            // Hitung posisi relatif tombol terhadap dock
            const btnRect = btn.getBoundingClientRect();
            const dockRect = dock.getBoundingClientRect();
            const offsetLeft = btnRect.left - dockRect.left;

            // Update posisi & lebar slider
            slider.style.width = `${btnRect.width}px`;
            slider.style.transform = `translateX(${offsetLeft}px)`;
            slider.style.opacity = '1'; // Munculkan slider
            
            // Tambah class active ke tombol baru
            btn.classList.add('active');
        }
    },
    
    applyAppearance() {
        const u = this.db.data.user; document.body.className = (!u.theme || u.theme==='default') ? '' : `theme-${u.theme}`;
        const wall = CONFIG.SHOP_WALLPAPERS.find(x => x.id === u.wallpaper); const vid = document.getElementById('bg-video'); const con = document.getElementById('bg-video-container');
        if(wall && wall.src) { vid.src = wall.src; con.style.display = 'block'; } else { vid.src = ''; con.style.display = 'none'; }
        const cur = CONFIG.SHOP_CURSORS.find(x => x.id === u.cursor); if(cur) document.documentElement.style.setProperty('--cursor-img', cur.style);
    },
    checkDailyLogin() {
        const today = new Date().toDateString(); const last = this.db.data.user.lastLogin; let streak = this.db.data.user.loginStreak;
        if (today !== last) {
            if (last) { const diffDays = Math.ceil(Math.abs(new Date(today) - new Date(last)) / (1000 * 60 * 60 * 24)); streak = (diffDays === 1) ? streak + 1 : 0; } else { streak = 0; }
            if(streak >= 7) streak = 0; this.pendingReward = { streak: streak, ...CONFIG.DAILY_REWARDS[streak] }; this.showDailyModal(streak); setTimeout(() => { Notif.send("Sarcastic OS", `Login Hari ke-${streak+1}.`); }, 3000);
        }
    },
    showDailyModal(streak) {
        const modal = document.getElementById('daily-modal'); const grid = document.getElementById('daily-grid'); grid.innerHTML = '';
        CONFIG.DAILY_REWARDS.forEach((r, i) => {
            const isToday = i === streak; const isPast = i < streak; const isBig = i === 6;
            let bgClass = isPast ? 'bg-accent/50 text-slate-300' : isToday ? 'bg-accent text-white ring-2 ring-white scale-105' : 'bg-white/5 text-slate-500 border border-white/10';
            if(isBig && !isPast && !isToday) bgClass = 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50';
            const el = document.createElement('div'); el.className = `rounded-xl p-2 flex flex-col items-center justify-center relative ${bgClass} ${isBig ? 'col-span-2' : ''}`;
            el.innerHTML = `<span class="text-[9px] font-bold uppercase mb-1">HARI ${i+1}</span>${r.ticket > 0 ? '<i data-lucide="ticket" class="w-4 h-4 mb-1"></i>' : ''}<span class="text-xs font-bold">${r.xp} XP</span>${isToday ? '<div class="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>' : ''}`;
            grid.appendChild(el);
        });
        document.getElementById('daily-msg').innerText = `Hari ke-${streak+1}: ${this.pendingReward.desc}`;
        modal.classList.remove('hidden'); setTimeout(() => modal.classList.remove('opacity-0'), 10); lucide.createIcons();
    },
    claimDaily() {
        if(!this.pendingReward) return;
        const { xp, ticket, streak } = this.pendingReward; App.xp(xp);
        if(ticket > 0) { this.db.data.user.tickets += ticket; App.notify("Dapat Tiket Gacha!", "success"); }
        this.db.data.user.lastLogin = new Date().toDateString(); this.db.data.user.loginStreak = streak;
        this.db.save(); this.render(); SFX.play('success'); confetti({origin:{y:0.5}});
        const modal = document.getElementById('daily-modal'); modal.classList.add('opacity-0'); setTimeout(() => modal.classList.add('hidden'), 300);
    },
    addTask() {
        const i=document.getElementById('task-input'); const t=i.value.trim();
        if(!t) return this.notify("Tulis dulu woy!",'error');
        SFX.play('click'); this.db.data.tasks.unshift({id:Date.now(), txt:t, done:false});
        this.log(`Tambah tugas: "${t}"`);
        this.db.save(); i.value=''; this.render(); this.notify("Beban bertambah.",'ok');
    },
    toggle(id) {
        const t = this.db.data.tasks.find(x=>x.id===id);
        if(t){ t.done=!t.done; SFX.vib(); if(t.done){ SFX.play('success'); this.xp(50); this.db.data.user.stats.done++; confetti({origin:{y:0.8},spread:60}); this.log(`Selesai tugas: "${t.txt}" (+50 XP)`); } else { this.xp(-20); this.db.data.user.stats.done--; this.log(`Batalkan selesai: "${t.txt}" (-20 XP)`); } this.db.save(); this.render(); }
    },
    del(id) {
        if(confirm('Hapus dosa ini?')){ const t = this.db.data.tasks.find(x=>x.id===id); this.db.data.tasks=this.db.data.tasks.filter(x=>x.id!==id); this.xp(-10); this.db.data.user.stats.del++; Achievements.check('delete'); if(t) this.log(`Hapus tugas: "${t.txt}" (-10 XP)`); this.db.save(); this.render(); }
    },
    xp(n) {
        const u = this.db.data.user;
        if (n > 0 && u.loan > 0) {
            const tax = Math.ceil(n * 0.75);
            const sisa = n - tax;
            if (u.loan >= tax) { u.loan -= tax; u.xp += sisa; this.notify(`Utang lunas -${tax} XP (Sisa utang: ${u.loan})`, 'error'); } 
            else { const kembalian = tax - u.loan; u.loan = 0; u.xp += (sisa + kembalian); this.notify("UTANG LUNAS! BEBAS!", 'success'); SFX.play('success'); }
        } else { u.xp = Math.max(0, u.xp + n); }
        const nl = Math.floor(u.xp / 500) + 1;
        if (nl > u.lvl) { u.lvl = nl; this.notify("LEVEL UP!", 'success'); SFX.play('success'); }
        Achievements.check('xp'); this.db.save(); this.render();
    },
    upload(e, type) {
        const f=e.target.files[0]; if(!f)return; const r=new FileReader();
        r.onload=ev=>{
            const img=new Image(); img.src=ev.target.result;
            img.onload=()=>{
                const c=document.createElement('canvas'); const ctx=c.getContext('2d'); const sz = type==='avatar'?150:600;
                let w=img.width, h=img.height; if(w>h){if(w>sz){h*=sz/w;w=sz}}else{if(h>sz){w*=sz/h;h=sz}}
                c.width=w; c.height=h; ctx.drawImage(img,0,0,w,h); this.db.data.user[type] = c.toDataURL('image/jpeg',0.6);
                this.db.save(); this.render(); this.renderProfile(); this.notify("Foto terganti!",'success');
            }
        }; r.readAsDataURL(f);
    },
    updateName(v){ if(v.trim()){this.db.data.user.name=v.trim(); this.db.save();} },
    quote(){ const q=["Masa depan cerah, dompet suram.","Kerja keras tipes, kerja cerdas males.","Rebahan adalah investasi energi."]; document.getElementById('daily-quote').innerText=`"${q[Math.floor(Math.random()*q.length)]}"`; },
    filter(m){ this.filterMode=m; SFX.play('click'); this.render(); },
    notify(t,s){
        const b=document.getElementById('toast-container'); const e=document.createElement('div');
        const col = s==='success'?'bg-green-500':s==='error'?'bg-red-500':'bg-slate-700';
        e.className=`glass-panel px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transform -translate-y-4 opacity-0 transition-all duration-300 border-l-4 ${s==='success'?'border-green-500':s==='error'?'border-red-500':'border-slate-500'}`;
        e.innerHTML=`<div class="w-2 h-2 rounded-full ${col}"></div><span class="text-xs font-bold text-white">${t}</span>`;
        b.appendChild(e); requestAnimationFrame(()=>e.classList.remove('-translate-y-4','opacity-0')); setTimeout(()=>{e.classList.add('-translate-y-4','opacity-0');setTimeout(()=>e.remove(),300)},2500);
    },
    backup(){ const a=document.createElement('a'); a.href='data:text/json,'+encodeURIComponent(JSON.stringify(this.db.data)); a.download='Sarcastic_Backup.json'; a.click(); },
    restore(){ const i=document.createElement('input'); i.type='file'; i.accept='.json'; i.onchange=e=>{const r=new FileReader(); r.onload=ev=>{try{this.db.data=JSON.parse(ev.target.result); this.db.save(); location.reload()}catch(x){this.notify('File rusak','error')}}; r.readAsText(e.target.files[0])}; i.click(); },
    reset(){ if(confirm('Reset semua data?')) {localStorage.removeItem(this.db.key); location.reload();} },
    gacha() {
        const hasTicket = this.db.data.user.tickets > 0; const cost = 200;
        if (!hasTicket && this.db.data.user.xp < cost) return this.notify("Miskin XP & Tiket.", 'error');
        const icon = document.getElementById('gacha-icon'); icon.classList.add('shake-anim'); SFX.play('buy');
        setTimeout(() => {
            icon.classList.remove('shake-anim');
            if(hasTicket) { this.db.data.user.tickets--; this.notify("Pakai Tiket!", 'success'); } else { this.xp(-cost); }
            const rng = Math.random() * 100;
            if(rng < 5) { this.xp(1000); confetti({particleCount: 150, spread: 70}); this.notify("JACKPOT! 1000 XP!", 'success'); this.log("Gacha jackpot! +1000 XP"); } 
            else if (rng < 15) { 
                const item = CONFIG.GACHA_ITEMS[Math.floor(Math.random() * CONFIG.GACHA_ITEMS.length)];
                if(this.db.data.inventory.includes(item.id)) { this.xp(50); this.notify("Barang kembar. +50 XP.", 'error'); this.log(`Gacha dupe: ${item.name} (+50 XP)`); } 
                else { this.db.data.inventory.push(item.id); this.notify(`Dapat: ${item.name}!`, 'success'); SFX.play('success'); this.log(`Gacha dapat: ${item.name}`); }
            } else { this.notify("ZONK!", 'error'); SFX.play('error'); this.log("Gacha zonk."); }
            this.db.save(); this.renderShop();
        }, 500);
    },
    buy(id, cost, type) {
        if(this.db.data.inventory.includes(id)) {
            if(type === 'item') {
                return this.useItem(id);
            }
            if(type === 'theme' || type === 'wallpaper' || type === 'cursor' || type === 'skin') {
                if(type==='theme') this.db.data.user.theme = id.replace('theme-','');
                if(type==='wallpaper') this.db.data.user.wallpaper = id;
                if(type==='cursor') this.db.data.user.cursor = id;
                if(type==='skin') {
                    if(this.db.data.user.skin === id) { this.db.data.user.skin = 'default'; this.notify("Skin dilepas!", 'success'); } 
                    else { this.db.data.user.skin = id; this.notify("Skin dipasang!", 'success'); }
                    Pet.render(); 
                } else { this.applyAppearance(); this.notify("Dipasang!", 'success'); }
                this.db.save(); this.renderShop();
            } else { this.notify("Udah punya.", 'error'); }
            return;
        }
        if(this.db.data.user.xp >= cost) {
            this.xp(-cost); this.db.data.inventory.push(id); SFX.play('buy');
            if(type==='theme') { this.db.data.user.theme = id.replace('theme-',''); this.applyAppearance(); }
            if(type==='wallpaper') { this.db.data.user.wallpaper = id; this.applyAppearance(); }
            if(type==='cursor') { this.db.data.user.cursor = id; this.applyAppearance(); }
            if(type==='skin') { this.db.data.user.skin = id; Pet.render(); }
            this.notify("Terbeli!", 'success'); this.log(`Beli ${id} (${cost} XP)`); this.db.save(); this.renderShop();
        } else { SFX.play('error'); this.notify("XP Miskin.", 'error'); }
    },
    useItem(id) {
        const item = CONFIG.SHOP_ITEMS.find(x=>x.id===id);
        if(!item) return;
        const u = this.db.data.user;
        const p = this.db.data.pet;
        let used = false;
        let msg = "Dipakai.";
        if(item.effect === 'ticket') {
            u.tickets += item.value || 1;
            used = true;
            msg = `Dapat ${item.value || 1} tiket.`;
        } else if(item.effect === 'loan') {
            if(u.loan <= 0) return this.notify("Utang kosong.", 'error');
            const cut = Math.min(u.loan, item.value || 0);
            u.loan -= cut;
            used = true;
            msg = `Utang berkurang ${cut} XP.`;
        } else if(item.effect === 'feed') {
            if(!p.active) return this.notify("Pet belum aktif.", 'error');
            const h = item.value?.hunger || 0;
            const hp = item.value?.health || 0;
            p.hunger = Math.min(100, p.hunger + h);
            p.health = Math.min(100, p.health + hp);
            p.feedCount += 1;
            used = true;
            msg = "Pet kenyang.";
            SFX.play('eat');
            Pet.render();
            Achievements.check('feed');
        } else if(item.effect === 'cooldown') {
            Games.clearCooldowns();
            used = true;
            msg = "Cooldown game direset.";
        } else if(item.effect === 'xp') {
            this.xp(item.value || 0);
            used = true;
            msg = `+${item.value || 0} XP.`;
        }
        if(!used) return;
        this.db.data.inventory = this.db.data.inventory.filter(x=>x!==id);
        this.db.save();
        this.renderShop();
        this.renderProfile();
        this.log(`Pakai item: ${item.name}`);
        this.notify(msg, 'success');
    },
    render() {
        const u = this.db.data.user;
        const headerXp = document.getElementById('header-xp');
        headerXp.innerText = u.xp;
        
        // --- INDIKATOR UTANG ---
        const header = document.getElementById('app-header');
        if (u.loan > 0) {
            headerXp.innerHTML = `${u.xp} <span class="text-[10px] text-red-500 block animate-pulse">UTANG: ${u.loan}</span>`;
            header.classList.add('border-b-2', 'border-red-500'); 
        } else {
            header.classList.remove('border-b-2', 'border-red-500');
        }
        // -----------------------

        document.getElementById('lvl-badge').innerText = `LV ${u.lvl}`;
        const progress = Math.min(100,((u.xp-((u.lvl-1)*500))/500)*100);
        document.getElementById('xp-bar').style.width = `${progress}%`; document.getElementById('nav-avatar-img').src = u.avatar;
        const l = document.getElementById('task-list'); l.innerHTML='';
        let d = this.db.data.tasks.filter(x=>this.filterMode==='all'?true:this.filterMode==='active'?!x.done:x.done);
        if(d.length===0) l.innerHTML=`<div class="text-center py-12 opacity-30 flex flex-col items-center"><i data-lucide="wind" class="w-10 h-10 mb-2"></i><div class="text-xs font-bold uppercase tracking-widest">Kuburan Wacana</div></div>`;
        d.forEach(t=>{
            const el=document.createElement('div');
            el.className=`glass-panel rounded-2xl p-4 flex items-center gap-4 transition-all active:scale-[0.98] ${t.done?'opacity-50 grayscale':''}`;
            el.innerHTML=`<div onclick="App.toggle(${t.id})" class="w-6 h-6 rounded-lg border-2 ${t.done?'bg-accent border-accent':'border-slate-500'} flex items-center justify-center transition">${t.done?'<i data-lucide="check" class="w-4 h-4 text-white"></i>':''}</div><div onclick="App.toggle(${t.id})" class="flex-1 text-sm font-bold ${t.done?'line-through text-slate-500':'text-white'}">${t.txt}</div><button onclick="App.del(${t.id})" class="text-slate-500 hover:text-red-400 p-2"><i data-lucide="trash-2" class="w-4 h-4"></i></button>`;
            l.appendChild(el);
        });
        document.querySelectorAll('[data-filter]').forEach(b=>{ b.className = b.dataset.filter===this.filterMode ? "px-5 py-2 rounded-full text-xs font-bold bg-white/10 text-white border border-white/10 whitespace-nowrap active-tab transition" : "px-5 py-2 rounded-full text-xs font-bold bg-transparent text-slate-500 border border-slate-700 whitespace-nowrap transition"; });
        lucide.createIcons();
        
        // --- FIX SLIDER POSITION ON RENDER ---
        let currentId = 'home';
        ['home', 'apps', 'games', 'pet', 'shop', 'profile'].forEach(id => {
            if(!document.getElementById(`view-${id}`).classList.contains('hidden')) currentId = id;
        });
        this.moveSlider(currentId);
        Games.updateXp();
        Games.updateBest();
    },
    renderSounds() {
        const el = document.getElementById('sound-list'); el.innerHTML = '';
        CONFIG.SOUNDS.forEach(s => {
            const active = Pomodoro.soundId === s.id; const btn = document.createElement('button');
            btn.className = `sound-btn flex flex-col items-center justify-center min-w-[70px] h-[70px] rounded-xl glass-panel transition border ${active ? 'bg-accent border-accent text-white' : 'border-white/10 hover:bg-white/5'}`;
            btn.onclick = () => Pomodoro.setSound(s.id);
            btn.innerHTML = `<i data-lucide="${s.icon}" class="w-5 h-5 mb-1"></i><span class="text-[9px] font-bold text-center leading-tight">${s.name}</span>`;
            el.appendChild(btn);
        }); lucide.createIcons();
    },
    renderShop() {
        document.getElementById('shop-xp').innerText = this.db.data.user.xp; document.getElementById('shop-tickets').innerText = this.db.data.user.tickets;
        const shopContainer = document.getElementById('view-shop');
        let bankBtn = document.getElementById('btn-open-bank');
        if(bankBtn) bankBtn.remove(); 
        const bankHtml = `<button id="btn-open-bank" onclick="Bank.toggle()" class="w-full mb-6 py-4 rounded-xl bg-gradient-to-r from-red-900 to-red-600 text-white font-bold text-sm shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition border border-red-400/30"><i data-lucide="landmark" class="w-5 h-5"></i>BUTUH DANA CEPAT? (PINJOL)</button>`;
        const balancePanel = shopContainer.querySelector('.glass-panel.border-l-4.border-yellow-500');
        if(balancePanel) balancePanel.insertAdjacentHTML('afterend', bankHtml);
        const btnGacha = document.getElementById('btn-gacha-action');
        if(this.db.data.user.tickets > 0) { btnGacha.innerText = "BUKA PAKAI TIKET"; btnGacha.classList.add('bg-purple-500'); } 
        else { btnGacha.innerText = "BUKA KOTAK (200 XP)"; btnGacha.classList.remove('bg-purple-500'); }
        const renderGrid = (id, items, type) => {
            const grid = document.getElementById(id); grid.innerHTML = '';
            items.forEach(item => {
                const owned = this.db.data.inventory.includes(item.id);
                let active = false;
                if(type==='theme') active = this.db.data.user.theme === item.id.replace('theme-','');
                if(type==='wallpaper') active = this.db.data.user.wallpaper === item.id;
                if(type==='cursor') active = this.db.data.user.cursor === item.id;
                if(type==='skin') active = this.db.data.user.skin === item.id;
                let btnText = `Beli ${item.cost}`;
                if (owned) {
                    if (type === 'item') btnText = "PAKAI";
                    else if (type === 'skin' && active) btnText = "LEPAS";
                    else if (active) btnText = "Aktif";
                    else btnText = "Pasang";
                }
                let btnClass = owned 
                    ? (type === 'item' ? 'bg-white text-black hover:bg-slate-200' : (active ? (type === 'skin' ? 'bg-red-500/80 text-white hover:bg-red-600' : 'bg-white/10 text-slate-300 cursor-default') : 'bg-white text-black hover:bg-slate-200'))
                    : 'bg-accent text-white shadow-lg';
                const el = document.createElement('div');
                el.className = `glass-panel rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden ${active?'border-accent':''}`;
                el.innerHTML = `<div class="mb-3">${item.color ? `<div class="w-full h-8 rounded-lg mb-2" style="background:${item.color}"></div>` : ''}${item.icon ? `<i data-lucide="${item.icon}" class="w-5 h-5 text-accent mb-2"></i>` : ''}<h4 class="font-bold text-sm text-white">${item.name}</h4><p class="text-[10px] text-slate-400 leading-tight">${item.desc}</p></div><button onclick="App.buy('${item.id}', ${item.cost}, '${type}')" class="w-full py-2 rounded-xl text-[10px] font-bold uppercase ${btnClass}">${btnText}</button>`;
                grid.appendChild(el);
            });
        };
        renderGrid('shop-themes', CONFIG.SHOP_THEMES, 'theme'); renderGrid('shop-wallpapers', CONFIG.SHOP_WALLPAPERS, 'wallpaper'); renderGrid('shop-cursors', CONFIG.SHOP_CURSORS, 'cursor'); renderGrid('shop-items', CONFIG.SHOP_ITEMS, 'item'); renderGrid('shop-skins', CONFIG.SHOP_SKINS, 'skin'); lucide.createIcons();
    },
    renderProfile() {
        const u = this.db.data.user;
        document.getElementById('profile-cover').src = u.cover; document.getElementById('profile-avatar').src = u.avatar; document.getElementById('profile-name').value = u.name;
        document.getElementById('stat-done-total').innerText = u.stats.done; document.getElementById('stat-deleted-total').innerText = u.stats.del;
        const ranks = ["Newbie", "Amatir", "Sepuh", "Dewa", "Legend"]; document.getElementById('rank-name').innerText = ranks[Math.min(u.lvl-1, 4)];
        const invList = document.getElementById('inventory-list'); invList.innerHTML='';
        this.db.data.inventory.forEach(id => {
            if(['theme-default','wall-none','cursor-default'].includes(id)) return;
            let item = [...CONFIG.SHOP_ITEMS, ...CONFIG.GACHA_ITEMS].find(x=>x.id===id);
            if(!item) item = CONFIG.SHOP_THEMES.find(x=>x.id===id);
            if(!item) item = CONFIG.SHOP_WALLPAPERS.find(x=>x.id===id);
            if(!item) item = CONFIG.SHOP_CURSORS.find(x=>x.id===id);
            if(!item) item = CONFIG.SHOP_SKINS.find(x=>x.id===id);
            const name = item ? item.name : id; const icon = item && item.icon ? item.icon : 'box';
            const el = document.createElement('div');
            el.className = 'glass-panel px-3 py-2 rounded-xl flex items-center gap-2 min-w-[100px] border border-white/5';
            el.innerHTML = `<i data-lucide="${icon}" class="w-3 h-3 text-accent"></i><span class="text-[10px] font-bold text-white">${name}</span>`;
            invList.appendChild(el);
        });
        this.renderAchievements(); lucide.createIcons();
        this.renderLogs();
        if (typeof Online !== 'undefined') Online.render();
    },
    renderLogs() {
        const el = document.getElementById('sarpent-log');
        if(!el) return;
        el.innerHTML = '';
        const logs = this.db.data.logs || [];
        if(logs.length === 0) {
            el.innerHTML = `<div class="p-4 text-[10px] text-slate-500">Belum ada sejarah dosa. Bagus? Atau kosong doang.</div>`;
            return;
        }
        logs.slice(0, 20).forEach(item => {
            const row = document.createElement('div');
            row.className = "p-3 flex items-start gap-3";
            const time = new Date(item.t);
            const timeStr = `${time.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })} • ${time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`;
            row.innerHTML = `<div class="w-2 h-2 rounded-full bg-accent mt-1.5"></div><div class="flex-1"><div class="text-[10px] text-slate-400 mb-0.5">${timeStr}</div><div class="text-xs font-bold text-white">${item.msg}</div></div>`;
            el.appendChild(row);
        });
    },
    log(msg) {
        if(!msg) return;
        const logs = this.db.data.logs || [];
        logs.unshift({ t: Date.now(), msg });
        this.db.data.logs = logs.slice(0, 50);
        this.db.save();
    },
    renderAchievements() {
        const el = document.getElementById('achievements-list'); if(!el) return; el.innerHTML = '';
        const unlocked = this.db.data.achievements;
        CONFIG.ACHIEVEMENTS.forEach(ach => {
            const isUnlocked = unlocked.includes(ach.id);
            const div = document.createElement('div');
            div.className = `achievement-card glass-panel rounded-xl p-3 flex gap-3 items-center border border-white/5 ${isUnlocked ? 'unlocked' : ''}`;
            div.innerHTML = `<div class="w-10 h-10 rounded-lg bg-black/30 flex items-center justify-center flex-shrink-0"><i data-lucide="${ach.icon}" class="w-5 h-5 text-slate-600"></i></div><div><h4 class="text-xs font-bold text-white leading-tight">${ach.name}</h4><p class="text-[10px] text-slate-500 leading-tight mt-0.5">${ach.desc}</p></div>`;
            el.appendChild(div);
        }); lucide.createIcons();
    }
};

const Pomodoro = {
    t:25*60, i:null, soundId: 'none', player: null,
    toggle(){
        const b=document.getElementById('timer-btn');
        if(this.i){ clearInterval(this.i); this.i=null; b.innerText="MULAI FOKUS"; b.classList.remove('bg-red-500','text-white'); b.classList.add('bg-white','text-black'); if(this.player) this.player.pause(); }
        else{ b.innerText="PAUSE"; b.classList.remove('bg-white','text-black'); b.classList.add('bg-red-500','text-white'); SFX.play('click'); if(this.soundId !== 'none') { if(!this.player) this.initSound(this.soundId); this.player.play(); } this.i=setInterval(()=>{ this.t--; const m=Math.floor(this.t/60),s=this.t%60; document.getElementById('timer-display').innerText=`${m}:${s<10?'0':''}${s}`; 
            if(this.t<=0){ clearInterval(this.i); App.xp(100); this.reset(); Notif.send("Waktu Habis!", "Kerja woy! Pomodoro selesai."); alert("Selesai!"); } 
        },1000) }
    },
    reset(){ clearInterval(this.i); this.i=null; this.t=25*60; document.getElementById('timer-display').innerText="25:00"; const b=document.getElementById('timer-btn'); b.innerText="MULAI FOKUS"; b.className="bg-white text-black font-extrabold py-5 rounded-2xl active:scale-95 transition shadow-xl text-sm"; if(this.player) this.player.stop(); },
    setSound(id) { this.soundId = id; App.renderSounds(); if(this.player) this.player.stop(); if(this.i && id !== 'none') { this.initSound(id); this.player.play(); } },
    initSound(id) { const s = CONFIG.SOUNDS.find(x=>x.id===id); if(s && s.src) { this.player = new Howl({src: [s.src], loop: true, volume: 0.5}); } }
};

const PWA = {
    prompt: null,
    init() {
        if ('serviceWorker' in navigator) { navigator.serviceWorker.register('./sw.js').then(() => console.log('[SarcasticOS] SW Aktif.')).catch(err => console.error('SW Gagal:', err)); }
        window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); this.prompt = e; const btn = document.getElementById('btn-install-app'); if(btn) btn.classList.remove('hidden'); });
        window.addEventListener('appinstalled', () => { App.notify("Terinstall! Sekarang anda resmi no-life.", "success"); this.prompt = null; const btn = document.getElementById('btn-install-app'); if(btn) btn.classList.add('hidden'); });
    },
    install() { if (!this.prompt) return; this.prompt.prompt(); this.prompt.userChoice.then((choiceResult) => { if (choiceResult.outcome === 'accepted') { console.log('User accepted'); } this.prompt = null; }); }
};

window.onload = () => { App.init(); PWA.init(); };
