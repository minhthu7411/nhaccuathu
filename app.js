///////////////////////////////////////////////////////////////////////////////////////////////////////
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const songName = $(".song__name");
const singerName = $(".song__singer");
const cdImg = $(".cd__img");
const audio = $("#audio");
const playlist = $(".playlist__container");
const playlistList = $(".playlist__list");
const progressBar = $(".progress-bar");
const progressValue = $(".progress-bar__value");
const btnPlay = $(".btn__play");
const btnPrev = $(".btn__prev");
const btnNext = $(".btn__next");
const btnRandom = $(".btn__shuffle");
const btnRepeat = $(".btn__repeat");
const btnRepeat1 = $(".btn__repeat--1");
const btnList = $(".list-icon");
const btnClose = $(".playlist__icon-close");
const heartIcon = $(".favorite");
const songCurrentTime = $(".progress-time__current");
const songDuration = $(".progress-time__duration");
const volumeBar = $(".volume-bar");
const volumeValue = $(".volume-bar__value");
const volumeBtn = $(".volume");
const volumeHigh = $(".volume--high");
const volumeLow = $(".volume--low");
const volumeMute = $(".volume--mute");

const songPlayedList = new Set();

const app = {
    currentIndex: 0,
    currentVolume: 0.5,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isRepeat1: false,
    isMute: false,
    isHoldProgressBar: false,
    isHoldVolumeBar: false,

    songs: [
        {
            name: "Tâm",
            singer: "Mer",
            path: "./assets/music/tâm.mp3",
            image: "./assets/img/tam.jpg",
        },
        {
            name: "Somewhere",
            singer: "Groovyroom (Feat. Suran, pH-1)",
            path: "./assets/music/GroovyRoom (그루비룸) - 어디쯤에(Somewhere) (Feat. Suran, pH-1)(Color Coded Han-Rom-Eng Lyrics).mp3",
            image: "./assets/img/somewhere.jpg",
        },
        {
            name: "Chiếc Ghế Trống",
            singer: "Mer",
            path: "./assets/music/Mer - Chiếc Ghế Trống (A song in support of UNICEF).mp3",
            image: "./assets/img/chiecghetrong.jpg",
        },
        {
            name: "Lần cuối (Cover)",
            singer: "Gia Nghi",
            path: "./assets/music/Lần cuối - Gia Nghi.mp3",
            image: "./assets/img/gianghi.jpg",
        },
        {
            name: "Nụ hôn Bisou",
            singer: "Mike",
            path: "./assets/music/Mike - Nụ hôn Bisou (Official Lyric Video).mp3",
            image: "./assets/img/nuhonbisou.jpg",
        },
        {
            name: "Until I Found You",
            singer: "Stephen Sanchez (ft Em Beihold)",
            path: "./assets/music/Until I Found You (Juliet to your Romeo) - Stephen Sanchez ft. Em Beihold.mp3",
            image: "./assets/img/untilifoundyou.jpg",
        },
        {
            name: "Rapper Thích Ka",
            singer: "Mikelodic",
            path: "./assets/music/(Tune #2) Rapper Thích Ka - Mikelodic.mp3",
            image: "./assets/img/rapperthichka.jpg",
        },
        {
            name: "打上花火 - Uchiagehanabi",
            singer: "DAOKO ft 米津玄師",
            path: "./assets/music/DAOKO 米津玄師『打上花火』MUSIC VIDEO.mp3",
            image: "./assets/img/daoko.jpg",
        },
        {
            name: "Đủ trải sẽ thấm",
            singer: "Mikelodic x Chiennhatlang",
            path: "./assets/music/(Tune #4) Đủ trải sẽ thấm - Mikelodic x Chiennhatlang.mp3",
            image: "./assets/img/tune04.jpg",
        },
        {
            name: "Nandemonaiya - なんでもないや",
            singer: "Mone Kamshiraishi",
            path: "./assets/music/[Kimi No Nawa] Nandemonaiya-なんでもないや - Mone Kamshiraishi (OST Acoustic Live).mp3",
            image: "./assets/img/Kamishiraishi_Mone.jpg",
        },
        {
            name: "Thần Tượng",
            singer: "Mikelodic",
            path: "./assets/music/(Tune #8) Thần Tượng - Mikelodic.mp3",
            image: "./assets/img/thantuong.jpg",
        },
        {
            name: "Lần Cuối (đi bên em xót xa người ơi)",
            singer: "Ngọt",
            path: "./assets/music/Ngọt - LẦN CUỐI (đi bên em xót xa người ơi).mp3",
            image: "./assets/img/lancuoi.jpg",
        },
        {
            name: "Chạng Vạng",
            singer: "Lãng",
            path: "./assets/music/CHẠNG VẠNG - LÃNG.mp3",
            image: "./assets/img/changvang.jpg",
        },
        {
            name: "Stay With Me",
            singer: "Miki Matsubara",
            path: "./assets/music/Miki Matsubara - Stay With Me HD (Club Mix).mp3",
            image: "./assets/img/staywithme.jpg",
        },
        {
            name: "Cung đường lẻ loi",
            singer: "Mikelodic",
            path: "./assets/music/Cung đường lẻ loi (Official Visual).mp3",
            image: "./assets/img/mike.jpg",
        },
        {
            name: "Traveler",
            singer: "숀 (SHAUN)",
            path: "./assets/music/숀 (SHAUN) - Traveler [Official MV].mp3",
            image: "./assets/img/traveler.jpg",
        },
        {
            name: "Thiếu Niên K",
            singer: "Mike (prod. by Huynh Joy)",
            path: "./assets/music/(Tune #6) Thiếu Niên K - Mike [prod. by Huynh Joy].mp3",
            image: "./assets/img/thieunienk.jpg",
        },
        {
            name: "Lemon",
            singer: "Kenshi Yonezu",
            path: "./assets/music/米津玄師 - Lemon Kenshi Yonezu.mp3",
            image: "./assets/img/lemon.jpg",
        },
        {
            name: "Khúc Ca Vàng",
            singer: "Mikelodic",
            path: "./assets/music/Khúc Ca Vàng (feat. Mikelodic).mp3",
            image: "./assets/img/khuccavang.jpg",
        },
        {
            name: "Out of Time",
            singer: "The Weekend",
            path: "./assets/music/The Weekend - Out of Time.mp3",
            image: "./assets/img/outoftime.jpg",
        },
        {
            name: "Ly",
            singer: "Mike",
            path: "./assets/music/Ly - Mike.mp3",
            image: "./assets/img/ly.png",
        },
        {
            name: "Shinunoga E-Wa",
            singer: "Fujii Kaze",
            path: "./assets/music/Fujii Kaze - Shinunoga E-Wa (Visual).mp3",
            image: "./assets/img/Shinunoga E-Wa.jpg",
        },
        {
            name: "Lời tâm sự số 3",
            singer: "Mike",
            path: "./assets/music/Mike - lời tâm sự số 3 (lyrics video).mp3",
            image: "./assets/img/loitamsuso3.jpg",
        },
        {
            name: "Waiting For Love",
            singer: "Avicii",
            path: "./assets/music/Avicii - Waiting For Love.mp3",
            image: "./assets/img/waitingforlove.jpg",
        },
        {
            name: "Thanh Bần",
            singer: "Mike",
            path: "./assets/music/Mike - Thanh Bần (Official Music Video).mp3",
            image: "./assets/img/thanhban.jpg",
        },
        {
            name: "Lần cuối",
            singer: "Hoaprox x Dex Rework feat. Dang Minh",
            path: "./assets/music/Lần cuối (Hoaprox x Dex Rework) feat. Dang Minh (Official AI Music Video).mp3",
            image: "./assets/img/lancuoihoaprox.jpg",
        },
        {
            name: "nguyên xi",
            singer: "Mike x Namlee",
            path: "./assets/music/nguyên xi (mv 8K 18 triệu màu).mp3",
            image: "./assets/img/nguyenxi.jpg",
        },
        {
            name: "Em",
            singer: "Cậu Phát (Prod. by TOIL)",
            path: "./assets/music/Em - Cậu Phát (Prod. by TOIL).mp3",
            image: "./assets/img/gio.jpg",
        },
        {
            name: "Teo Huyền Tèo",
            singer: "NAMCOCAIN",
            path: "./assets/music/NAMCOCAIN - TEO HUYỀN TÈO.mp3",
            image: "./assets/img/teohuyenteo.jpg",
        },
        {
            name: "Nơi Ta Sống",
            singer: "Long Nón Lá x Mikelodic",
            path: "./assets/music/Nơi Ta Sống (feat. Long Nón Lá, Mikelodic).mp3",
            image: "./assets/img/noitasong.jpg",
        },
        {
            name: "Lời Nhắn",
            singer: "QUYẾCH (ft. SANGPUY - ERI LIAO - NHƯ KHUÊ)",
            path: "./assets/music/QUYẾCH (ft. SANGPUY - ERI LIAO - NHƯ KHUÊ) - LỜI NHẮN.mp3",
            image: "./assets/img/loinhan.jpg",
        },
        {
            name: "Thanh Âm Da Vàng",
            singer: "Mike",
            path: "./assets/music/THANH ÂM DA VÀNG.mp3",
            image: "./assets/img/thanhamdavang.jpg",
        },
        {
            name: "Thanh Âm Miền Núi",
            singer: "Double2T",
            path: "./assets/music/Thanh Âm Miền Núi - Double2T - Team B Ray - Rap Việt 2023.mp3",
            image: "./assets/img/d2t.jpg",
        },
        {
            name: "Trầu Văn Trap",
            singer: "Lãng",
            path: "./assets/music/Trầu Văn Trap.mp3",
            image: "./assets/img/trauvantrap.jpg",
        },
        {
            name: "NOT OK",
            singer: "로꼬 (Loco) Feat. 민니 (여자)아이들)",
            path: "./assets/music/로꼬 (Loco) - NOT OK (Feat. 민니 (여자)아이들)).mp3",
            image: "./assets/img/notokay.png",
        },
        {
            name: "Alone",
            singer: "쿠기 (Coogie) Feat. 이하이 (LeeHi)",
            path: "./assets/music/쿠기 (Coogie) - Alone (Feat. 이하이 (LeeHi)) Official MV (ENG).mp3",
            image: "./assets/img/alone.jpg",
        },
        {
            name: "For A Better Day",
            singer: "Avicii",
            path: "./assets/music/Avicii - For A Better Day.mp3",
            image: "./assets/img/forthebetterday.jpg",
        },
        {
            name: "Bạn thỏ tivi nhỏ",
            singer: "Ngọt",
            path: "./assets/music/Bạn thỏ tivi nhỏ.mp3",
            image: "./assets/img/banthotivinho.jpg",
        },
        {
            name: "Without You",
            singer: "Avicii ft. Sandro Cavazza",
            path: "./assets/music/Avicii - Without You Audio ft. Sandro Cavazza.mp3",
            image: "./assets/img/withoutyou.jpg",
        },
        {
            name: "Bầu Trời Mới",
            singer: "Da LAB ft. Minh Tốc & Lam",
            path: "./assets/music/Bầu Trời Mới - Da LAB ft. Minh Tốc & Lam (Official MV).mp3",
            image: "./assets/img/bautroimoi.jpg",
        },
        {
            name: "Blue Moon",
            singer: "Prod. GroovyRoom",
            path: "./assets/music/BLUE MOON (Prod. GroovyRoom) (BLUE MOON (PROD. GROOVYROOM)).mp3",
            image: "./assets/img/bluemoon.jpg",
        },
        {
            name: "Bước Qua Mùa Cô Đơn",
            singer: "Vũ",
            path: "./assets/music/BƯỚC QUA MÙA CÔ ĐƠN - Vũ. (Official MV).mp3",
            image: "./assets/img/buocquamuacodon.jpg",
        },
        {
            name: "Chuyện Đôi Ta",
            singer: "Emcee L (Da LAB) ft Muộii",
            path: "./assets/music/Chuyện Đôi Ta - Emcee L (Da LAB) ft Muộii (Official MV).mp3",
            image: "./assets/img/chuyendoita.jpg",
        },
        {
            name: "Rather Be",
            singer: "Clean Bandit ft. Jess Glynne",
            path: "./assets/music/Clean Bandit - Rather Be ft. Jess Glynne [Official Video].mp3",
            image: "./assets/img/ratherbe.jpg",
        },
        {
            name: "Đi Theo Bóng Mặt Trời",
            singer: "Đen ft. Tăng Ngân Hà, Maius Philharmonic",
            path: "./assets/music/Đen - Đi Theo Bóng Mặt Trời ft. Tăng Ngân Hà, Maius Philharmonic.mp3",
            image: "./assets/img/ditheobongmattroi.jpg",
        },
        {
            name: "Đôi bờ",
            singer: "KraziNoyze ft. BlakRay, DSK",
            path: "./assets/music/Đôi bờ - KraziNoyze ft. BlakRay, DSK [Lyric Video].mp3",
            image: "./assets/img/doibo.jpg",
        },
        {
            name: "Nấu ăn cho em",
            singer: "Đen ft. PiaLinh",
            path: "./assets/music/Đen - Nấu ăn cho em ft. PiaLinh (M-V).mp3",
            image: "./assets/img/nauanchoem.jpg",
        },
        {
            name: "À Lôi",
            singer: "Double2T x Masew",
            path: "./assets/music/Double2T x Masew - À Lôi.mp3",
            image: "./assets/img/aloi.jpg",
        },
        {
            name: "Du Ca Khúc",
            singer: "Mer ft. Lazii",
            path: "./assets/music/DU CA KHÚC- - MER FT. LAZII.mp3",
            image: "./assets/img/ducakhuc.jpg",
        },
        {
            name: "Đừng Làm Trái Tim Anh Đau (remake)",
            singer: "Obito",
            path: "./assets/music/Đừng Làm Trái Tim Anh Đau - Obito (remake).mp3",
            image: "./assets/img/dunglamtraitimanhdau.jpg",
        },
        {
            name: "Em Đừng Khóc",
            singer: "Chillies",
            path: "./assets/music/Em Đừng Khóc - Chillies (Official Music Video).mp3",
            image: "./assets/img/emdungkhoc.jpg",
        },
        {
            name: "Em Không Đi Đâu",
            singer: "QNT (feat. Giang)",
            path: "./assets/music/Em Không Đi Đâu (feat. Giang).mp3",
            image: "./assets/img/emkhongdidau.jpg",
        },
        {
            name: "Michi Teyu Ku (Overflowing)",
            singer: "Fujii Kaze",
            path: "./assets/music/Fujii Kaze - Michi Teyu Ku (Overflowing) - Official Video.mp3",
            image: "./assets/img/michiteyuku.jpg",
        },
        {
            name: "FASHO",
            singer: "GroovyRoom (Feat. pH-1, HAON, TRADE L, Woodie Gochild, BIG Naughty, Sik-K, 박재범, lIlBOI)",
            path: "./assets/music/GroovyRoom - 'FASHO (Feat. pH-1, HAON, TRADE L, Woodie Gochild, BIG Naughty, Sik-K, 박재범, lIlBOI)' MV.mp3",
            image: "./assets/img/fasho.jpg",
        },
        {
            name: "Hẹn em mai sau gặp lại",
            singer: "Emcee L ft. Lamoon",
            path: "./assets/music/Hẹn em mai sau gặp lại - Emcee L ft. Lamoon (Official MV).mp3",
            image: "./assets/img/henemmaisaugaplai.jpg",
        },
        {
            name: "Hoa Hồng",
            singer: "Hà Anh Tuấn",
            path: "./assets/music/HOA HỒNG - Hà Anh Tuấn.mp3",
            image: "./assets/img/hoahong.jpg",
        },
        {
            name: "Huyền Vi",
            singer: "Masew",
            path: "./assets/music/HUYỀN VI - MASEW - OFFICIAL MUSIC VIDEO.mp3",
            image: "./assets/img/huyenvi.jpg",
        },
        {
            name: "Limo",
            singer: "Ngọt",
            path: "./assets/music/Limo.mp3",
            image: "./assets/img/caidautien.jpg",
        },
        {
            name: "CORNER STORE",
            singer: "MACKLEMORE FEAT DAVE B & TRAVIS THOMPSON",
            path: "./assets/music/MACKLEMORE FEAT DAVE B & TRAVIS THOMPSON - CORNER STORE.mp3",
            image: "./assets/img/cornerstore.jpg",
        },
        {
            name: "Happier",
            singer: "Marshmello ft. Bastille",
            path: "./assets/music/Marshmello ft. Bastille - Happier (Official Music Video).mp3",
            image: "./assets/img/happier.jpg",
        },
        {
            name: "Du Miên",
            singer: "Mer",
            path: "./assets/music/MER - DU MIÊN - OFFICIAL MUSIC VIDEO.mp3",
            image: "./assets/img/dumien.jpg",
        },
        {
            name: "Ước hẹn thiện duyên",
            singer: "Mer",
            path: "./assets/music/Mer - ƯỚC HẸN THIỆN DUYÊN (Khoá tu mùa hè chùa Hội Đức).mp3",
            image: "./assets/img/uocnguyenthienduyen.jpg",
        },
        {
            name: "Nếu Những Tiếc Nuối",
            singer: "Vũ",
            path: "./assets/music/Nếu Những Tiếc Nuối - Vũ.mp3",
            image: "./assets/img/neunhungtiecnuoi.jpg",
        },
        {
            name: "Chuyện Dở Dang",
            singer: "Ngọt",
            path: "./assets/music/Ngọt - 01 Chuyen Do Dang.mp3",
            image: "./assets/img/suyt.jpg",
        },
        {
            name: "Chuyển Kênh",
            singer: "Ngọt",
            path: "./assets/music/Ngọt - CHUYỂN KÊNH (sản phẩm này không phải là thuốc).mp3",
            image: "./assets/img/chuyenkenh.jpg",
        },
        {
            name: "Thấy Chưa",
            singer: "Ngọt",
            path: "./assets/music/Ngọt - Thấy Chưa.mp3",
            image: "./assets/img/thaychua.jpg",
        },
        {
            name: "Cho Tôi Lang Thang",
            singer: "Ngọt ft. Đen",
            path: "./assets/music/Ngọt vc. Đen - Cho Tôi Lang Thang.mp3",
            image: "./assets/img/chotoilangthang.jpg",
        },
        {
            name: "NGƯỜI BÌNH THƯỜNG",
            singer: "VŨ CÁT TƯỜNG",
            path: "./assets/music/NGƯỜI BÌNH THƯỜNG - VŨ CÁT TƯỜNG - OFFICIAL VISUALIZER.mp3",
            image: "./assets/img/nguoibinhthuong.jpg",
        },
        {
            name: "Chết đi cho rồi",
            singer: "Nguyễn Hồng Giang (feat Cam & Quỳnh)",
            path: "./assets/music/Nguyễn Hồng Giang - Chết đi cho rồi ( feat Cam & Quỳnh ).mp3",
            image: "./assets/img/chetdichoroi.jpg",
        },
        {
            name: "NHỮNG LỜI HỨA BỎ QUÊN",
            singer: "VŨ. x DEAR JANE",
            path: "./assets/music/NHỮNG LỜI HỨA BỎ QUÊN - VŨ. x DEAR JANE.mp3",
            image: "./assets/img/nhungloihuaboquen.jpg",
        },
        {
            name: "Hay Là",
            singer: "Ngọt",
            path: "./assets/music/Ngọt - 03 Hay La.mp3",
            image: "./assets/img/suyt.jpg",
        },
        {
            name: "Vui Vẻ",
            singer: "Oát x Astronormous",
            path: "./assets/music/Oát x Astronormous - Vui Vẻ.mp3",
            image: "./assets/img/vuive.png",
        },
        {
            name: "Tell The Kids I Love Them",
            singer: "Obito ft. SHIKI",
            path: "./assets/music/Obito - Tell The Kids I Love Them ft. SHIKI.mp3",
            image: "./assets/img/obito.jpg",
        },
        {
            name: "Phép Màu",
            singer: "Mounter x MAYDAYs, Minh Tốc",
            path: "./assets/music/Phép Màu.mp3",
            image: "./assets/img/phepmau.jpg",
        },
        {
            name: "Quen Lắm",
            singer: "Ngọt",
            path: "./assets/music/Quen Lắm.mp3",
            image: "./assets/img/suyt2.jpg",
        },
        {
            name: "QUERRY",
            singer: "QNT x TRUNG TRẦN ft RPT MCK (Prod. By RASTZ)",
            path: "./assets/music/QUERRY - QNT x TRUNG TRẦN ft RPT MCK (Prod. By RASTZ) - OFFICIAL MV.mp3",
            image: "./assets/img/querry.jpg",
        },
        {
            name: "すずめ",
            singer: "RADWIMPS feat.十明",
            path: "./assets/music/RADWIMPS - すずめ feat.十明 [Official Lyric Video].mp3",
            image: "./assets/img/すずめ.jpg",
        },
        {
            name: "Mơ Làm Ma",
            singer: "Ngọt (ft. Thỏ Trauma)",
            path: "./assets/music/Ngọt - 02 Mo Lam Ma (ft. Thỏ Trauma).mp3",
            image: "./assets/img/suyt.jpg",
        },
        {
            name: "Rather Be - Without Me [Mashup]",
            singer: "Eminem ft. Clean Bandit",
            path: "./assets/music/Rather Be - Without Me [Mashup] - Eminem ft. Clean Bandit.mp3",
            image: "./assets/img/ratherbexwithoutme.jpg",
        },
        {
            name: "These Days",
            singer: "Rudimental (feat. Jess Glynne, Macklemore & Dan Caplen)",
            path: "./assets/music/Rudimental - These Days (feat. Jess Glynne, Macklemore & Dan Caplen) [Official Video].mp3",
            image: "./assets/img/thesedays.jpg",
        },
        {
            name: "SAY EM",
            singer: "QNT ft. REFUND BAND",
            path: "./assets/music/SAY EM - QNT ft. REFUND BAND - Official Music Video.mp3",
            image: "./assets/img/sayem.jpg",
        },
        {
            name: "Hướng Dương",
            singer: "Thắng",
            path: "./assets/music/Thắng - Hướng Dương [Official Audio].mp3",
            image: "./assets/img/huongduong.jpg",
        },
        {
            name: "thap drill tu do",
            singer: "nghiem tong prod. gaz",
            path: "./assets/music/thap drill tu do - nghiem tong prod. gaz.mp3",
            image: "./assets/img/thapdrilltudo.jpg",
        },
        {
            name: "Soạn",
            singer: "The Cassette",
            path: "./assets/music/The Cassette - Soan (Official Lyric Video).mp3",
            image: "./assets/img/soan.jpg",
        },
        {
            name: "Treo (2-00 AM)",
            singer: "The Cassette",
            path: "./assets/music/The Cassette - Treo (2-00 AM) (Official Lyric Video).mp3",
            image: "./assets/img/treo.jpg",
        },
        {
            name: "Nhớ Một Người",
            singer: "THE SHEEP",
            path: "./assets/music/THE SHEEP - Nhớ Một Người - ORIGINAL.mp3",
            image: "./assets/img/nhomotnguoi.jpg",
        },
        {
            name: "Tình Thật Tình Mơ",
            singer: "Mer",
            path: "./assets/music/Tình Thật Tình Mơ - Mer - Official Audio.mp3",
            image: "./assets/img/tinhthattinhmo.jpg",
        },
        {
            name: "LONELY LOVE",
            singer: "Trang Hàn x TDK x Hoàng Thống",
            path: "./assets/music/Trang Hàn x TDK x Hoàng Thống - LONELY LOVE.mp3",
            image: "./assets/img/lonelylove.jpg",
        },
        {
            name: "Trước Khi Em Tồn Tại",
            singer: "Thắng",
            path: "./assets/music/Trước Khi Em Tồn Tại - Thắng.mp3",
            image: "./assets/img/caidautien.jpg",
        },
        {
            name: "SÀI GÒN TÔI MƯA",
            singer: "TUYÊN (ft. MC GOKU)",
            path: "./assets/music/TUYÊN - SÀI GÒN TÔI MƯA (ft. MC GOKU) .mp3",
            image: "./assets/img/tuyen.jpg",
        },
        {
            name: "VIETNAM - My Home",
            singer: "Masew, MyoMouse, Nguyen Loi",
            path: "./assets/music/VIETNAM - My Home - Masew, MyoMouse, Nguyen Loi.mp3",
            image: "./assets/img/vietnammyhome.jpg",
        },
        {
            name: "Wind",
            singer: "Akeboshi",
            path: "./assets/music/Wind - Akeboshi.mp3",
            image: "./assets/img/wind.jpg",
        },
        {
            name: "Flyday Chinatown",
            singer: "Yasuha",
            path: "./assets/music/Yasuha - Flyday Chinatown.mp3",
            image: "./assets/img/flydaychinatown.jpg",
        },
        {
            name: "노래(THE SONG)",
            singer: "Zion.T",
            path: "./assets/music/Zion.T - 노래(THE SONG) M-V.mp3",
            image: "./assets/img/thesong.jpg",
        },
        {
            name: "ロクデナシ愛が灯る",
            singer: "Rokudenashi",
            path: "./assets/music/ロクデナシ愛が灯る- Rokudenashi.mp3",
            image: "./assets/img/ロクデナシ愛が灯る.jpg",
        },
        {
            name: "주지마",
            singer: "로꼬 (Loco), 화사 (마마무)",
            path: "./assets/music/로꼬 (Loco), 화사 (마마무) - 주지마.mp3",
            image: "./assets/img/주지마.jpg",
        },
        {
            name: "밤양갱",
            singer: "비비 (BIBI)",
            path: "./assets/music/비비 - 밤양갱 - [TEXTED] BIBI - 가사.mp3",
            image: "./assets/img/bibi.jpg",
        },
        {
            name: "어디쯤에 (Somewhere) (instrumental)",
            singer: "Groovyroom",
            path: "./assets/music/어디쯤에 (Somewhere) (inst.).mp3",
            image: "./assets/img/somewhere.jpg",
        },
        {
            name: "Yoru ni Kakeru「夜に駆ける」",
            singer: "YOASOBI",
            path: "./assets/music/Yoru ni Kakeru「夜に駆ける」YOASOBI.mp3",
            image: "./assets/img/intothenight.jpg",
        },
        {
            name: "群青",
            singer: "YOASOBI",
            path: "./assets/music/YOASOBI - 群青 - THE FIRST TAKE.mp3",
            image: "./assets/img/群青.jpg",
        },
        {
            name: "AI MỚI LÀ KẺ XẤU XA",
            singer: "MCK",
            path: "./assets/music/RPT MCK - AI MỚI LÀ KẺ XẤU XA - OFFICIAL MUSIC VIDEO.mp3",
            image: "./assets/img/aimoilakexauxa.jpg",
        },
        {
            name: "Super Rare",
            singer: "Epik High (에픽하이) ft. Wonstein, pH-1",
            path: "./assets/music/Epik High (에픽하이) - Super Rare ft. Wonstein, pH-1 Official ART MV.mp3",
            image: "./assets/img/superrare.jpg",
        },
        {
            name: "그 해 우리는(Our Beloved Summer)",
            singer: "10CM - 서랍",
            path: "./assets/music/10CM - 서랍 - 그 해 우리는(Our Beloved Summer).mp3",
            image: "./assets/img/그 해 우리는(Our Beloved Summer).jpg",
        },
        {
            name: "IF YOU",
            singer: "BIGBANG",
            path: "./assets/music/BIGBANG - TOUR REPORT 'IF YOU'.mp3",
            image: "./assets/img/ifyou.jpg",
        },
        {
            name: "디오 괜찮아도 괜찮아 (That's okay)",
            singer: "D.O.",
            path: "./assets/music/D.O. 디오 괜찮아도 괜찮아 (That's okay).mp3",
            image: "./assets/img/thatokay.jpg",
        },
        {
            name: "Đánh Mất Em (丢了你)",
            singer: "Tỉnh Lung (井胧)",
            path: "./assets/music/Đánh Mất Em - Tỉnh Lung - 丢了你 - 井胧.mp3",
            image: "./assets/img/danhmatem.jpg",
        },
        {
            name: "Đáp Án (答案)",
            singer: "Phương Vũ Kiệt (方宇杰)",
            path: "./assets/music/Đáp Án - Phương Vũ Kiệt - 答案 - 方宇杰.mp3",
            image: "./assets/img/dapan.jpg",
        },
        {
            name: "Đem cô độc coi như bữa tối",
            singer: "Tỉnh Lung (井胧)",
            path: "./assets/music/Đem cô độc coi như bữa tối - Tỉnh Lung.mp3",
            image: "./assets/img/tinhlung.jpg",
        },
        {
            name: "Đợi em tan học (等你下課)",
            singer: "Jay Chou & Dương Thụy Đại (周杰倫 & 楊瑞代)",
            path: "./assets/music/Đợi em tan học - Jay Chou & Dương Thụy Đại - 等你下課 - 周杰倫 & 楊瑞代.mp3",
            image: "./assets/img/doiemtanhoc.jpg",
        },
        {
            name: "HOME SWEET HOME",
            singer: "G-DRAGON (feat. TAEYANG & DAESUNG)",
            path: "./assets/music/G-DRAGON - HOME SWEET HOME (feat. TAEYANG & DAESUNG).mp3",
            image: "./assets/img/homesweethome.jpg",
        },
        {
            name: "무제(無題) (Untitled, 2014)",
            singer: "G-DRAGON",
            path: "./assets/music/G-DRAGON - '무제(無題) (Untitled, 2014)'.mp3",
            image: "./assets/img/untitled.jpg",
        },
        {
            name: "Hạ Sơn (下山)",
            singer: "Khanh Quân (卿君)",
            path: "./assets/music/Hạ Sơn - Khanh Quân - 下山 - 卿君.mp3",
            image: "./assets/img/hason.jpg",
        },
        {
            name: "안녕히 (Adios)",
            singer: "Hoody (후디) - (Feat. GRAY)",
            path: "./assets/music/Hoody (후디) - '안녕히 (Adios) (Feat. GRAY)'.mp3",
            image: "./assets/img/adios.jpg",
        },
        {
            name: "YOU",
            singer: "JISOO",
            path: "./assets/music/JISOO - ' YOU '.mp3",
            image: "./assets/img/jisoo.jpg",
        },
        {
            name: "Say it",
            singer: "LuHan (鹿晗)",
            path: "./assets/music/LuHan鹿晗_Say it.mp3",
            image: "./assets/img/sayit.jpg",
        },
        {
            name: "Skin to Skin",
            singer: "LuHan (鹿晗)",
            path: "./assets/music/LuHan鹿晗_Skin to Skin.mp3",
            image: "./assets/img/skintoskin.jpg",
        },
        {
            name: "WHAT IF I SAID",
            singer: "LuHan (鹿晗)",
            path: "./assets/music/LuHan鹿晗_WHAT IF I SAID.mp3",
            image: "./assets/img/whatifisaid.jpg",
        },
        {
            name: "Ly Nhân Sầu",
            singer: "Lý Viên Kiệt",
            path: "./assets/music/Ly Nhân Sầu - Lý Viên Kiệt.mp3",
            image: "./assets/img/lynhansau.jpg",
        },
        {
            name: "Yours",
            singer: "Raiden X CHANYEOL (Feat. LeeHi, CHANGMO)",
            path: "./assets/music/Raiden X CHANYEOL Yours (Feat. LeeHi, CHANGMO).mp3",
            image: "./assets/img/yours.jpg",
        },
        {
            name: "Sứ Thanh Hoa",
            singer: "Châu Kiệt Luân",
            path: "./assets/music/Sứ Thanh Hoa - Châu Kiệt Luân.mp3",
            image: "./assets/img/suthanhhoa.jpg",
        },
        {
            name: "Thiên lý chi ngoại (Far away)",
            singer: "Châu Kiệt Luân ft. Phí Ngọc Thanh",
            path: "./assets/music/Thiên lý chi ngoại (Far away) - Châu Kiệt Luân ft. Phí Ngọc Thanh.mp3",
            image: "./assets/img/thienlychingoai.jpg",
        },
        {
            name: "Tô Mạc Già",
            singer: "Trương Hiểu Đường",
            path: "./assets/music/Tô Mạc Già - Trương Hiểu Đường.mp3",
            image: "./assets/img/tomacgia.jpg",
        },
        {
            name: "Xuất Sơn (出山)",
            singer: "Hoa Chúc - Vương Thắng Nam (花粥 - 王勝男)",
            path: "./assets/music/Xuất Sơn - Hoa Chúc-Vương Thắng Nam -- 出山 - 花粥-王勝男.mp3",
            image: "./assets/img/xuatson.jpg",
        },
        {
            name: "Obsession",
            singer: "민니(MINNIE) (Feat. TEN of WayV)",
            path: "./assets/music/민니(MINNIE) - Obsession (Feat. TEN of WayV).mp3",
            image: "./assets/img/minnie.jpg",
        },
        {
            name: "Blue",
            singer: "Bolbbalgan4 (볼빨간사춘기)",
            path: "./assets/music/볼빨간사춘기 Bolbbalgan4 - Blue.mp3",
            image: "./assets/img/blue.jpg",
        },
        {
            name: "慢慢 (Slow Motion)",
            singer: "LuHan (鹿晗)",
            path: "./assets/music/鹿晗LuHan慢慢  Slow Motion.mp3",
            image: "./assets/img/slowmotion.jpg",
        },
        {
            name: "Your Song (acoustic ver. Live)",
            singer: "Luhan",
            path: "./assets/music/Luhan - Your Song (acoustic ver. Live) @ 2016 QQ Music Awards.mp3",
            image: "./assets/img/luhan.jpg",
        },
        {
            name: "Glorious",
            singer: "Macklemore (feat. Skylar Grey)",
            path: "./assets/music/Glorious (feat. Skylar Grey).mp3",
            image: "./assets/img/glorious.jpg",
        },
        {
            name: "Stitches",
            singer: "Shawn Mendes",
            path: "./assets/music/Shawn Mendes - Stitches (Official Music Video).mp3",
            image: "./assets/img/stitches.jpg",
        },
        {
            name: "Treat You Better",
            singer: "Shawn Mendes",
            path: "./assets/music/Shawn Mendes - Treat You Better.mp3",
            image: "./assets/img/treatyoubetter.png",
        },
        {
            name: "Mama Said",
            singer: "Lukas Graham",
            path: "./assets/music/Lukas Graham - Mama Said [Official Music Video].mp3",
            image: "./assets/img/mamasaid.jpg",
        },
        {
            name: "7 Years",
            singer: "Lukas Graham",
            path: "./assets/music/Lukas Graham - 7 Years [Official Music Video].mp3",
            image: "./assets/img/7years.jpg",
        },
        {
            name: "These Days (Cover)",
            singer: "Bars and Melody",
            path: "./assets/music/Rudimental Feat Jess Glynne, Macklemore & Dan Caplen - These Days -- Bars and Melody COVER.mp3",
            image: "./assets/img/barandmelody.jpg",
        },
        {
            name: "Ai",
            singer: "DSK",
            path: "./assets/music/Ai - DSK.mp3",
            image: "./assets/img/DSK.jpg",
        },
        {
            name: "Omakase",
            singer: "ATARASHII GAKKO!",
            path: "./assets/music/ATARASHII GAKKO! - Omakase (Official Music Video).mp3",
            image: "./assets/img/omakase.jpg",
        },
        {
            name: "Biết rõ vẫn khó đi",
            singer: "DSK",
            path: "./assets/music/Biết rõ vẫn khó đi - DSK [VRG].mp3",
            image: "./assets/img/bietrokhovandi.jpg",
        },
        {
            name: "Ngày tàn",
            singer: "DSK",
            path: "./assets/music/DSK - NGÀY TÀN ( LIVE AT KONG 13-11-2017 ).mp3",
            image: "./assets/img/ngaytan.jpg",
        },
        {
            name: "FAN CỦA TAO",
            singer: "DSK",
            path: "./assets/music/FAN CỦA TAO - DSK [Video Lyric].mp3",
            image: "./assets/img/fancuatao.jpg",
        },
        {
            name: "Matsuri",
            singer: "Fujii Kaze",
            path: "./assets/music/Fujii Kaze - MatsuriOfficial Video.mp3",
            image: "./assets/img/matsuri.jpg",
        },
        {
            name: "Hà Nội Của Bố",
            singer: "Tamka PKL",
            path: "./assets/music/Hà Nội Của Bố - Tamka PKL (Official Audio).mp3",
            image: "./assets/img/hanoicuabo.jpg",
        },
        {
            name: "NOAH (Prod. GroovyRoom)",
            singer: "HAON (feat. 박재범, Hoody)",
            path: "./assets/music/HAON 'NOAH (feat. 박재범, Hoody)' (Prod. GroovyRoom) M-V.mp3",
            image: "./assets/img/noah.jpg",
        },
        {
            name: "Lớn rồi",
            singer: "DSK",
            path: "./assets/music/Lớn rồi - DSK [VRG].mp3",
            image: "./assets/img/lonroi.jpg",
        },
        {
            name: "Happy For You",
            singer: "Lukas Graham (feat. Vũ.)",
            path: "./assets/music/Lukas Graham - Happy For You (feat. Vũ.) Performance Video.mp3",
            image: "./assets/img/happyforyou.jpg",
        },
        {
            name: "Sunflower",
            singer: "Post Malone, Swae Lee",
            path: "./assets/music/Post Malone, Swae Lee - Sunflower (Spider-Man- Into the Spider-Verse) (Official Video).mp3",
            image: "./assets/img/sunflower.jpg",
        },
        {
            name: "Some Love",
            singer: "DSK",
            path: "./assets/music/Some Love - DSK [Lyrics].mp3",
            image: "./assets/img/somelove.jpg",
        },
        {
            name: "Closer",
            singer: "The Chainsmokers",
            path: "./assets/music/The Chainsmokers - Closer (Lyric) ft. Halsey.mp3",
            image: "./assets/img/closer.png",
        },
        {
            name: "Friend Of Mine",
            singer: "Avicii ft. Vargas & Lagola",
            path: "./assets/music/Avicii - Friend Of Mine Audio ft. Vargas & Lagola.mp3",
            image: "./assets/img/friendofmine.jpg",
        },
        {
            name: "Lonely Together",
            singer: "Avicii ft. Rita Ora",
            path: "./assets/music/Avicii - Lonely Together Audio ft. Rita Ora.mp3",
            image: "./assets/img/lonelytogether.jpg",
        },
        {
            name: "Sunset Jesus",
            singer: "Avicii",
            path: "./assets/music/Avicii - Sunset Jesus (Lyric Video).mp3",
            image: "./assets/img/sunsetjesus.jpg",
        },
        {
            name: "Fades Away (Tribute Concert Version)",
            singer: "Avicii ft. MishCatt",
            path: "./assets/music/Fades Away (Tribute Concert Version at Friends Arena, Stockholm - 2019).mp3",
            image: "./assets/img/fadesaway.jpg",
        },
        {
            name: "It Ain't Me",
            singer: "Kygo, Selena Gomez",
            path: "./assets/music/Kygo, Selena Gomez - It Ain't Me (Official Video).mp3",
            image: "./assets/img/itaintme.png",
        },
        {
            name: "Remember",
            singer: "KATIE",
            path: "./assets/music/[AXIS] KATIE - Remember.mp3",
            image: "./assets/img/remember.jpg",
        },
        {
            name: "Father",
            singer: "Dongmakgol girl",
            path: "./assets/music/[defensive stage] 'Dongmakgol girl' - Father, '동막골 소녀' - 아버지 복면가왕 20180812.mp3",
            image: "./assets/img/dongmakgol.jpg",
        },
        {
            name: "Lost Stars",
            singer: "Adam Levine",
            path: "./assets/music/Adam Levine - Lost Stars (from Begin Again).mp3",
            image: "./assets/img/loststars.jpg",
        },
        {
            name: "2U (Cover)",
            singer: "BTS Jungkook",
            path: "./assets/music/BTS Jungkook  2U (Cover) - LYRICS [HAPPY BIRTHDAY ANGEL!!!].mp3",
            image: "./assets/img/jk2u.jpg",
        },
        {
            name: "Sing For You",
            singer: "EXO",
            path: "./assets/music/EXO 엑소 'Sing For You' MV.mp3",
            image: "./assets/img/singforyou.jpg",
        },
        {
            name: "탕! (TANG!)",
            singer: "MINO",
            path: "./assets/music/MINO - '탕! (TANG!)' M-V.mp3",
            image: "./assets/img/tang.jpg",
        },
        {
            name: "We don't talk together (Prod. SUGA)",
            singer: "헤이즈 (Heize) (Feat. 기리보이 (Giriboy))",
            path: "./assets/music/헤이즈 (Heize) - We don't talk together (Feat. 기리보이 (Giriboy)) (Prod. SUGA) MV.mp3",
            image: "./assets/img/wedonttalktogether.jpg",
        },
        {
            name: "Temporary",
            singer: "Eminem (feat. Skylar Grey)",
            path: "./assets/music/Eminem - Temporary (feat. Skylar Grey) [Official Music Video].mp3",
            image: "./assets/img/temporary.jpg",
        },
        {
            name: "Numb Little Bug (Piano Version Video)",
            singer: "Em Beihold",
            path: "./assets/music/Em Beihold - Numb Little Bug (Piano Version Video).mp3",
            image: "./assets/img/numblittlebug.png",
        },
        {
            name: "Adventure Of A Lifetime (Audien Remix)",
            singer: "Coldplay",
            path: "./assets/music/Coldplay - Adventure Of A Lifetime (Audien Remix) [Exclusive].mp3",
            image: "./assets/img/adventureoflifetime.jpg",
        },
        // {
        //     name: "",
        //     singer: "",
        //     path: "./assets/music/.mp3",
        //     image: "./assets/img/.jpg",
        // },
        // {
        //     name: "",
        //     singer: "",
        //     path: "./assets/music/.mp3",
        //     image: "./assets/img/.jpg",
        // },
        // {
        //     name: "",
        //     singer: "",
        //     path: "./assets/music/.mp3",
        //     image: "./assets/img/.jpg",
        // },
        // {
        //     name: "",
        //     singer: "",
        //     path: "./assets/music/.mp3",
        //     image: "./assets/img/.jpg",
        // }
    ],

    render() {
        const htmls = this.songs.map((song, index) => {
            return `
            <li class="playlist__item" data-index="${index}">
                <div class="playlist__item-img">
                    <img src="${song.image}" alt="">
                </div>
                <div class="playlist__item-info">
                    <h3 class="playlist__item-name">
                        ${song.name}
                    </h3>
                    <p class="playlist__item-singer">
                        ${song.singer}
                    </p>
                </div>
                <div class="music-waves">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </li>
            `;
        });

        playlistList.innerHTML = htmls.join("");
    },

    activeSong() {
        const songs = $$(".playlist__item");
        const musicWaves = $$(".music-waves");
        songs.forEach((song, index) => {
            if (index === this.currentIndex) {
                song.classList.add("active");
                musicWaves[index].classList.add("active");
                song.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            } else {
                song.classList.remove("active");
                musicWaves[index].classList.remove("active");
            }
        });
    },

    defineProperties() {
        Object.defineProperty(this, "currentSong", {
            get: () => this.songs[this.currentIndex],
        });
    },

    timeFormat(seconds) {
        const date = new Date(null);
        date.setSeconds(seconds);
        return date.toISOString().slice(14, 19);
    },

    loadCurrentSong() {
        const _this = this;
        songName.textContent = this.currentSong.name;
        singerName.textContent = this.currentSong.singer;
        cdImg.src = this.currentSong.image;
        audio.src = this.currentSong.path;
        audio.volume = this.currentVolume;

        audio.onloadedmetadata = function () {
            songCurrentTime.textContent = _this.timeFormat(
                this.currentTime.toFixed(2)
            );
            songDuration.textContent = _this.timeFormat(
                this.duration.toFixed(2)
            );
        };
    },

    nextSong() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
        this.activeSong();
    },

    prevSong() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
        this.activeSong();
    },

    randomSong() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (songPlayedList.has(newIndex));
        this.currentIndex = newIndex;
        this.loadCurrentSong();
        songPlayedList.add(newIndex);
        if (songPlayedList.size === this.songs.length) {
            songPlayedList.clear();
            audio.play();
        }
        this.activeSong();
    },

    handleEvents() {
        const _this = this;

        // Xử lý quay cd
        const cdAnimate = cdImg.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000,
            iterations: Infinity,
        });

        cdAnimate.pause();

        // Play + Pause
        btnPlay.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            _this.activeSong();
        };

        // Lắng nghe khi nhạc được chạy
        audio.onplay = function () {
            _this.isPlaying = true;
            btnPlay.classList.add("playing");
            cdAnimate.play();
        };

        // Lắng nghe khi nhạc dừng chạy
        audio.onpause = function () {
            _this.isPlaying = false;
            btnPlay.classList.remove("playing");
            cdAnimate.pause();
        };

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            const progressPercent = (audio.currentTime / audio.duration) * 100;
            progressValue.style.width = progressPercent + "%";
        };

        // Xử lý thời current time và thanh tiến trình
        audio.ontimeupdate = function () {
            songCurrentTime.textContent = _this.timeFormat(this.currentTime);
            const progressPercent = (this.currentTime / this.duration) * 100;
            progressValue.style.width = progressPercent + "%";
        };

        // Xử lý khi tua bài hát
        progressBar.onmousedown = function (e) {
            //   e.offsetX: là độ dài khi click tua
            //   this.offsetWidth: là độ dài của thanh bài hát
            audio.currentTime = (e.offsetX / this.offsetWidth) * audio.duration;
            _this.isHoldProgressBar = true;
        };

        // Xử lý vừa kéo vừa giữ khi tua
        progressBar.onmousemove = function (e) {
            if (_this.isHoldProgressBar) {
                audio.currentTime =
                    (e.offsetX / this.offsetWidth) * audio.duration;
            }
        };

        // Xử lý Next songs
        btnNext.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
        };

        // Xử lý Previous songs
        btnPrev.onclick = function () {
            if (_this.isRandom) {
                _this.randomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
        };

        // Xử lý random songs
        btnRandom.onclick = function () {
            _this.isRandom = !_this.isRandom;
            btnRandom.classList.toggle("active", _this.isRandom);
        };

        // Xử lý repeat songs
        btnRepeat.onclick = function () {
            _this.isRepeat = !_this.isRepeat;
            btnRepeat.classList.toggle("active", _this.isRepeat);
        };

        // Xử lý next bài hát khi audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                btnNext.click();
            }
        };

        // Xử lý bật / tắt playlist
        btnList.onclick = function () {
            playlist.classList.add("openList");
            setTimeout(() => {
                _this.activeSong();
            }, 1000);
        };

        btnClose.onclick = function () {
            playlist.classList.remove("openList");
        };

        // Xử lý khi click songs
        playlistList.onclick = function (e) {
            const songNode = e.target.closest(".playlist__item:not(.active)");
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index);
                _this.loadCurrentSong();
                _this.activeSong();
                audio.play();
            }
        };

        // Xử lý khi bấm favorite
        heartIcon.onclick = function () {
            this.classList.toggle("active");
        };

        // Xử lý nút volume
        volumeBtn.onclick = function () {
            _this.isMute = !_this.isMute;
            this.classList.toggle("active", _this.isMute);
            if (_this.isMute) audio.volume = 0;
            else audio.volume = _this.currentVolume;
        };

        // Xử lý thanh volume
        volumeBar.onmousedown = function (e) {
            if (_this.isHoldVolumeBar) {
                //   e.offsetX: là độ dài khi click tua
                //   this.offsetWidth: là độ dài của thanh bài hát
                if (e.offsetX >= 0 && e.offsetX <= this.offsetWidth) {
                    _this.currentVolume = (
                        e.offsetX / this.offsetWidth
                    ).toFixed(2);
                    audio.volume = _this.currentVolume;
                    volumeValue.style.width = audio.volume * 100 + "%";
                }
            }
            _this.isHoldVolumeBar = true;
        };

        volumeBar.onmousemove = function (e) {
            if (_this.isHoldVolumeBar) {
                if (e.offsetX >= 0 && e.offsetX <= this.offsetWidth) {
                    _this.currentVolume = (
                        e.offsetX / this.offsetWidth
                    ).toFixed(2);
                    audio.volume = _this.currentVolume;
                    volumeValue.style.width = audio.volume * 100 + "%";
                }
            }
        };

        audio.onvolumechange = function () {
            if (audio.volume === 0) {
                volumeMute.classList.add("active");
                volumeHigh.classList.remove("active");
                volumeLow.classList.remove("active");
                volumeValue.style.width = 0;
            } else if (audio.volume > 0 && audio.volume < 0.3) {
                volumeLow.classList.add("active");
                volumeHigh.classList.remove("active");
                volumeMute.classList.remove("active");
                volumeValue.style.width = this.volume * 100 + "%";
            } else {
                volumeHigh.classList.add("active");
                volumeLow.classList.remove("active");
                volumeMute.classList.remove("active");
                volumeValue.style.width = this.volume * 100 + "%";
            }
        };

        window.onmouseup = function () {
            // Đặt biến này để có thể vừa giữ vừa kéo được khi tua
            _this.isHoldProgressBar = false;
            _this.isHoldVolumeBar = false;
        };
    },

    start() {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties();

        //Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();

        // Render playlist
        this.render();
    },
};

app.start();
// Bật tắt Playlist
