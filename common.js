let currentLang = localStorage.getItem('preferredLang') || 'zh-tw';
let currentPersonaGlobal = 'stellapaw';

const translations = {
    'stellapaw-title': { 'vi': 'Stellapaw', 'en': 'Stellapaw', 'zh-tw': '史黛拉帕' },
    'yukirly-title': { 'vi': 'Về Yukirly', 'en': "Yukirly's Corner", 'zh-tw': '關於Yukirly醬' },
    'toggle-persona-stellapaw': { 'vi': 'Gặp gỡ Yukirly', 'en': 'Switch to Yukirly! ✨', 'zh-tw': '變身Yukirly！🌸' },
    'toggle-persona-yukirly': { 'vi': 'Về lại Stellapaw', 'en': 'Back to Stellapaw 🐺', 'zh-tw': '回歸史黛拉帕 🌘' },
    'meet-xueru-text': { 'vi': 'gặp gỡ Xueru', 'en': 'Meet Xueru', 'zh-tw': '遇見雪茹' },
    'origin-title': { 'vi': 'Nguồn Gốc Bí Ẩn', 'en': 'Her Story Unveiled', 'zh-tw': '神秘起源大揭密' },
    'personality-title': { 'vi': 'Tính Cách Đặc Trưng', 'en': 'The Vibe She Gives', 'zh-tw': '人設大解析' },
    'appearance-title': { 'vi': 'Ngoại Hình Ấn Tượng', 'en': 'Her Look 👀', 'zh-tw': '顏值爆表' },
    'outfit-title': { 'vi': 'Trang Phục Thường Ngày', 'en': 'OOTD Inspo', 'zh-tw': '私服穿搭秀' },
    'stellapaw-origin': {
        'vi': 'Đến từ một thế giới thần thoại bí ẩn, Stellapaw là một sinh vật sở hữu sức mạnh áp đảo, có khả năng khuất phục bất kỳ ai chỉ bằng một cái chạm nhẹ, thậm chí không cần đến toàn bộ năng lực thật sự. Cô từng cai trị vùng đất của riêng mình ở thế giới khác trước khi được tổ chức Aurora bí mật đưa đến thế giới loài người thông qua một thỏa thuận ngầm. Ẩn sau vẻ ngoài dễ thương và chiều cao khiêm tốn 1m55 là một bản chất lạnh lùng đến đáng sợ.',
        'en': "From a realm words can't describe, Stellapaw packs a punch – a light touch is all it takes, no full power needed. She was a queen in her own world 'til the Aurora org sneakily brought her here. That cute 155cm look? Hides a scarily cold core. 🤫",
        'zh-tw': '來自神秘的異世界，史黛拉帕醬可是個隱藏大佬！輕輕一碰就能KO對手，根本不用開大絕。以前在自己的地盤當女王，後來被奧羅拉組織秘密接到人類世界。別看她155cm萌萌噠，骨子裡可是冰山一座，怕爆！🥶'
    },
     'stellapaw-personality': {
        'vi': 'Stellapaw mang trong mình một tính cách phức tạp: tàn bạo, lạnh lùng và dường như không coi trọng sự sống của bất kỳ ai.',
        'en': "Stellapaw's a tough cookie: ruthless, ice-cold, and kinda doesn't care 'bout anyone's life. Total anti-hero vibes. 😈",
        'zh-tw': '史黛拉帕的個性有點複雜…簡單說就是：殘暴、冷血，別人的命？她才不管咧！🤷‍♀️ 標準的反派氣場。'
    },
    'stellapaw-appearance': {
        'vi': 'Với chiều cao khiêm tốn 1m55, Stellapaw hiện thân là một nàng sói mang dáng vẻ con người với mái tóc trắng pha lẫn màu xanh dương huyền ảo và đôi mắt xanh băng giá. Đặc trưng của tộc Ice Wolf, cô sở hữu đôi tai sói dài vểnh lên và một chiếc đuôi sói dài có màu trắng pha chút xanh dương, hài hòa với mái tóc của mình.',
        'en': "She's a petite 155cm, but a total wolf-girl! Think ethereal white hair with mystical blue streaks and icy blue eyes. True to her Ice Wolf tribe, she's got those long, perky wolf ears and a fluffy tail to match – white with a hint of blue, just like her hair. So cool! ❄️",
        'zh-tw': '身高155cm的小隻馬，史黛拉帕是個狼系美少女！夢幻的白髮中帶點神秘藍，配上冰藍色的雙瞳。身為冰狼族，那對長長的狼耳跟毛茸茸的狼尾巴是標配啦～顏色也是跟頭髮一樣的白藍漸層，超搭！🐺💙'
    },
    'stellapaw-outfit': {
        'vi': 'Trang phục thường ngày của cô là một chiếc áo crop-top màu trắng hở eo và vai, viền xanh đậm, kết hợp với váy ngắn xếp ly màu xanh đậm, đôi khi có thêm lớp vải trắng bên dưới. Cô thường mang găng tay không ngón màu đen hoặc xanh đậm và một chiếc thắt lưng cá tính.',
        'en': "Her go-to? A white crop top (hello waist & shoulders!) with dark blue trim, paired with a dark blue pleated mini. Sometimes she layers a white fabric underneath. Tops it off with black or dark blue fingerless gloves and a statement belt. Style queen!👑",
        'zh-tw': '她的日常標配：白色短版露腰上衣，深藍滾邊，下面是深藍百褶迷你裙（有時裡面會多一層白紗）。常戴黑色或深藍的無指手套，再配上一條酷酷的皮帶，時尚icon無誤！✨'
    },
    'view-stellapaw-images': { 'vi': 'Xem Model 3D', 'en': "Peep Stellapaw's Model", 'zh-tw': '康康Stellapaw模型' },
    'stellapaw-images-title': { 'vi': 'Thư viện ảnh Stellapaw', 'en': 'Stellapaw Gallery', 'zh-tw': 'Stellapaw美圖牆' },
    'back-to-profile': { 'vi': 'Quay lại', 'en': 'Go Back', 'zh-tw': '返回婆的頁面' },
    'play-video-text': { 'vi': 'Highlight của Yukirly, click xem ngay!', 'en': "Yukirly's Highlights! Click to Play ▶️", 'zh-tw': 'Yukirly高光時刻！點我播放啦～' },
    'yukirly-welcome': { 'vi': 'Chào mừng đến thế giới của Yukirly!', 'en': "Welcome to Yukirly's World! 💖", 'zh-tw': '歡迎來到Yukirly的小天地～🎀' },
    'yukirly-intro': {
        'vi': 'Yukirly là một nhân cách khác của Stellapaw, siêu hiền, siêu ngọt ngào, lại còn mê stream game FPS như CS2 với Valorant nữa đó!',
        'en': "That's Yukirly, Stellapaw's other side! She's super gentle, sweet af, and loves streaming FPS games like CS2 & Valorant. GG! 🎮",
        'zh-tw': 'Yukirly是史黛拉帕的另一個人格啦～超級溫柔、甜度爆表，還特愛開台打CS2跟Valorant這種FPS遊戲，厲害吧！🥰'
    },
    'yukirly-origin-title': { 'vi': 'Yukirly "Ra Đời" Thế Nào?', 'en': 'Yukirly: The Origin Story', 'zh-tw': 'Yukirly的誕生秘話' },
    'yukirly-origin-text': {
        'vi': 'Yukirly là một phần sâu thẳm bên trong Stellapaw, được "đánh thức" bởi sự ấm áp và kết nối đặc biệt với Nico. Khi Yukirly "on air", sức mạnh bá đạo của vị thần kia tạm "offline", cùng với ký ức về một Stellapaw lạnh lùng, tàn khốc. Nhân cách này như một món quà moe moe, nở rộ từ sự "cảm hóa" và chỉ dành cho người đã chạm vào trái tim cô ấy thôi đó nha.',
        'en': "Yukirly's like a hidden level in Stellapaw, unlocked by Nico's warmth & special bond. When Yukirly logs in, deity-level power and those cold, ruthless Stellapaw mems go AFK. This persona? A soft gift, bloomed from being 'tamed' and only for the one who captured her heart. UwU",
        'zh-tw': 'Yukirly是藏在史黛拉帕內心深處的另一面，因為Nico的溫暖和特殊羈絆才覺醒的啦～Yukirly上線時，神明那可怕的力量會暫時休眠，冷酷史黛拉帕的記憶也會被封印。這個人格就像一份溫柔的禮物，從被「馴化」中誕生，專屬於那個打動她心的人～(｡♥‿♥｡)'
    },
    'yukirly-personality-title': { 'vi': 'Tính Cách Yukirly & "Đam Mê" Nho Nhỏ', 'en': 'Yukirly: Personality & Guilty Pleasures', 'zh-tw': 'Yukirly的性格與小確幸' },
    'yukirly-personality-text': {
        'vi': 'Trái ngược hoàn toàn với "ai kia", Yukirly là chuẩn mực của sự ngọt ngào, moe moe, có chút con nít, khiến ai cũng muốn "nựng". Đặc biệt, cô nàng mê mẩn vị ngọt thanh của socola trắng, một niềm vui đơn giản làm bừng sáng tính cách thuần khiết của mình.',
        'en': "Total opposite of Stellapaw, Yukirly is pure sweetness, super cute, a bit childish – makes ya wanna spoil her! She's a sucker for white chocolate's delicate sweetness, a simple joy that just adds to her innocent charm. 🍫💕",
        'zh-tw': '跟史黛拉帕完全相反，Yukirly就是甜美、可愛的化身，還有點孩子氣，讓人超想寵壞她！她超愛白巧克力的那種細膩甜味，這份單純的快樂讓她天真爛漫的個性更加分～😇'
    },
    'yukirly-appearance-title': { 'vi': 'Diện Mạo "Kẹo Ngọt" Của Yukirly', 'en': "Yukirly's Sweet Lewks", 'zh-tw': 'Yukirly的甜心造型' },
    'yukirly-appearance-text': {
        'vi': 'Vẫn là bé hạt tiêu 1m55, nhưng khi hóa thân thành Yukirly, một phép màu xảy ra: tóc, mắt và chiếc đuôi sói mềm mại đều chuyển sang màu hồng anh đào dịu dàng, tăng thêm độ "kawaii" khó đỡ cho cô nàng!',
        'en': "Still rockin' that 155cm height, but when she's Yukirly, it's like magic! Her hair, eyes, and fluffy wolf tail all turn a soft cherry blossom pink. Can't handle the cuteness overload! 🌸😍",
        'zh-tw': '身高一樣是嬌小的155公分，但變身Yukirly的時候，魔法就發生啦：頭髮、眼睛還有軟綿綿的狼尾巴，全都變成溫柔的櫻花粉色，可愛到讓人原地融化！💖'
    },
    'yukirly-outfit-title': { 'vi': 'Trang Phục Yukirly: "Twist" Nhẹ Nhàng', 'en': "Yukirly's Outfit: With a Twist!", 'zh-tw': 'Yukirly的穿搭小心機' },
    'yukirly-outfit-text': {
        'vi': 'Điểm thú vị là Yukirly vẫn "quẩy" nguyên set đồ crop-top trắng cá tính của Stellapaw. Tạo nên sự tương phản độc đáo: vẻ ngoài dịu dàng, ngọt ngào như hoa anh đào với mái tóc hồng lại được "mix & match" cùng bộ cánh hiện đại, có chút "phá cách" mùa đông. Chất!',
        'en': "Plot twist: Yukirly still slays in Stellapaw's signature white crop-top fit! It's a vibe: her gentle, cherry-blossom sweetness (pink hair and all) wrapped in a cool, modern outfit with a hint of edgy winter style. She makes it work! 🔥",
        'zh-tw': '超有趣的是，Yukirly還是穿著史黛拉帕那套招牌白色短版上衣！這種反差萌超讚：身體和粉毛散發著櫻花般的溫柔甜美氣息，卻套著一套又酷又現代、帶點小叛逆冬季感的個性服裝。絕配！👍'
    },
    'xueru-page-title': { 'vi': 'Không Gian Của Xueru', 'en': "Xueru's Domain", 'zh-tw': '雪茹的地盤' },
    'back-to-main-page': { 'vi': 'Về Trang Persona', 'en': 'Back to Personas', 'zh-tw': '回Persona主頁' },
    'video-unsupported': { 'vi': 'Trình duyệt của bạn không hỗ trợ video HTML5.', 'en': 'Your browser does not support HTML5 video.', 'zh-tw': '您的瀏覽器不支持 HTML5 影片。'},
    'xueru-profile-name': { 'vi': 'Xueru Chen', 'en': 'Xueru Chen', 'zh-tw': '雪茹陳' },
    'xueru-profile-nickname': { 'vi': 'Stellapaw - Yukirly', 'en': 'Stellapaw - Yukirly', 'zh-tw': 'Stellapaw - Yukirly' },
    'xueru-nationality-text': { 'vi': 'Đài Loan', 'en': 'Taiwan', 'zh-tw': '台灣' },
    'xueru-tab-home': { 'vi': 'Trang Chủ', 'en': 'Home', 'zh-tw': '主頁' },
    'xueru-tab-about': { 'vi': 'Thông Tin', 'en': 'Intel', 'zh-tw': '情報' },
    'xueru-tab-settings': { 'vi': 'Cài Đặt Game', 'en': 'Game Settings', 'zh-tw': '遊戲配置' },
    'xueru-tab-socials': { 'vi': 'Mạng Xã Hội', 'en': 'Socials', 'zh-tw': '社交平台' },
    'xueru-tab-qna': { 'vi': 'Hỏi Đáp', 'en': 'Q&A', 'zh-tw': '問答區' },
    'xueru-home-title': { 'vi': 'Không Gian Của Tôi', 'en': 'My Domain', 'zh-tw': '我的地盤' },
    'xueru-gaming-gear-title': { 'vi': 'Thiết Bị Chơi Game', 'en': 'Gaming Gear', 'zh-tw': '我的裝備' },
    'xueru-gear-mouse-name': { 'vi': 'Logitech G102', 'en': 'Logitech G102', 'zh-tw': '羅技 G102' },
    'xueru-gear-keyboard-name': { 'vi': 'Monka 3075v2 Pro', 'en': 'Monka 3075v2 Pro', 'zh-tw': 'Monka 3075v2 Pro' },
    'xueru-gear-headset-name': { 'vi': 'Razer Kraken Kitty V2', 'en': 'Razer Kraken Kitty V2', 'zh-tw': '雷蛇 Kraken Kitty V2' },
    'xueru-rank-title': { 'vi': 'Thứ Hạng Game', 'en': 'Game Ranks', 'zh-tw': '遊戲牌位' },
    'xueru-rank-faceit-name': { 'vi': 'Challenger (Top SEA)', 'en': 'Challenger (Top SEA)', 'zh-tw': 'Challenger (東南亞頂尖)' },
    'xueru-rank-faceit-game': { 'vi': 'Faceit', 'en': 'Faceit', 'zh-tw': 'Faceit' },
    'xueru-rank-cs2-elo': { 'vi': '20.000+', 'en': '20,000+', 'zh-tw': '20,000+' },
    'xueru-rank-cs2-game': { 'vi': 'CS2', 'en': 'CS2', 'zh-tw': 'CS2' },
    'xueru-rank-csgo-name': { 'vi': 'SMFC', 'en': 'SMFC', 'zh-tw': 'SMFC (無雙傑作)' },
    'xueru-rank-csgo-game': { 'vi': 'CS:GO', 'en': 'CS:GO', 'zh-tw': 'CS:GO' },
    'xueru-rank-valorant-name': { 'vi': 'Radiant', 'en': 'Radiant', 'zh-tw': '輻能戰魂' },
    'xueru-rank-valorant-game': { 'vi': 'Valorant', 'en': 'Valorant', 'zh-tw': '特戰英豪' },
    'xueru-config-title': { 'vi': 'Thông Tin Cấu Hình', 'en': 'Config Intel', 'zh-tw': '系統配置' },
    'xueru-config-content': { 'vi': '[Thông tin về cấu hình PC/Stream hoặc các tùy chọn khác.]', 'en': '[Info on general PC/streaming config or other preferences.]', 'zh-tw': '[關於電腦／直播配置或其他偏好設定的資訊。]' },
    'xueru-about-title': { 'vi': 'Về Tôi', 'en': 'The Lowdown', 'zh-tw': '關於我' },
    'xueru-about-intro': {
        'vi': "Tôi là Xueru Chen. Trên stream, tôi là Stellapaw hoặc Yukirly. Trước đây từng dùng tên Whirly.",
        'en': "Name's Xueru Chen. On stream, I go by Stellapaw or Yukirly – take your pick. Used Whirly way back. That's the gist.",
        'zh-tw': "我叫雪茹陳。直播上，你們可以叫我Stellapaw或Yukirly，隨便。啊對，以前還有個小名叫Whirly，知道的人不多吧。"
    },
    'xueru-about-origin': {
        'vi': "Ngày sinh 05/05, cung Kim Ngưu. Nguyên quán Tô Châu. Lớn lên và hiện tại ở Thượng Hải, Trung Quốc.",
        'en': "Born May 5th. Taurus. From Suzhou, grew up in Shanghai. Currently in Shanghai. China.",
        'zh-tw': "5月5號生的，金牛座。老家蘇州，上海長大，現在人也在上海。"
    },
    'xueru-about-education': {
        'vi': "Học vấn: Trường Thực nghiệm Tiến Tài Thượng Hải, Trường Trung học trực thuộc Đại học Phúc Đán. Tốt nghiệp Quan hệ Quốc tế, Đại học Phúc Đán.",
        'en': "Education: Shanghai Jincai Experimental, High School Affiliated to Fudan Uni. Got my International Relations degree from Fudan. Next.",
        'zh-tw': "學歷？嗯…上海進才實驗學校，然後復旦附中，最後復旦大學國際關係系畢業。講完了。"
    },
    'xueru-about-hobbies': {
        'vi': "Sở thích ngoài stream: Gaming, anime, đồ ăn vặt. Ưu tiên socola trắng.",
        'en': "Off-stream: Gaming. Anime. Snacks. White chocolate is non-negotiable.",
        'zh-tw': "沒開台的時候？打Game、看番、吃零食。白巧克力是唯一真理，懂？"
    },
    'xueru-settings-title': { 'vi': 'Cài Đặt Game Của Tôi', 'en': 'My Game Settings', 'zh-tw': '我的遊戲配置' },
    'xueru-settings-cs2-title': { 'vi': 'Counter-Strike 2', 'en': 'Counter-Strike 2', 'zh-tw': 'CS2 配置' },
    'xueru-settings-cs2-mouse': { 'vi': 'Chuột (CS2)', 'en': 'Mouse (CS2)', 'zh-tw': '滑鼠 (CS2)' },
    'xueru-cs2-mouse-list': {
        'vi': ['DPI: 800', 'Sensitivity: 4.553', 'Windows Sensitivity: 6'],
        'en': ['DPI: 800', 'Sens: 4.553', 'Win Sens: 6'],
        'zh-tw': ['DPI: 800', '遊戲內靈敏度: 4.553', '桌面靈敏度: 6']
    },
    'xueru-settings-cs2-video-title': { 'vi': 'Video (CS2)', 'en': 'Video (CS2)', 'zh-tw': '影像 (CS2)' },
    'xueru-cs2-video-list': {
        'vi': ['Độ phân giải: 1440x993 (Custom)', 'Tỷ lệ: 4:3', 'Scaling: Fullscreen', 'Tần số quét: 75Hz', 'Ingame Video: Full Low'],
        'en': ['Res: 1440x993 (Custom)', 'Aspect: 4:3', 'Scaling: Fullscreen', 'Refresh: 75Hz', 'Ingame Video: All Low'],
        'zh-tw': ['解析度: 1440x993 (自訂)', '長寬比: 4:3', '顯示模式: 全螢幕', '刷新率: 75Hz', '遊戲內影像: 全低']
    },
    'xueru-settings-cs2-viewmodel-title': { 'vi': 'Viewmodel (CS2)', 'en': 'Viewmodel (CS2)', 'zh-tw': '持槍視角 (CS2)' },
    'xueru-cs2-viewmodel-commands': { 'vi': 'viewmodel_fov 68; viewmodel_offset_x -1; viewmodel_offset_y 1; viewmodel_offset_z -1.5; viewmodel_presetpos 1;', 'en': 'viewmodel_fov 68; viewmodel_offset_x -1; viewmodel_offset_y 1; viewmodel_offset_z -1.5; viewmodel_presetpos 1;', 'zh-tw': 'viewmodel_fov 68; viewmodel_offset_x -1; viewmodel_offset_y 1; viewmodel_offset_z -1.5; viewmodel_presetpos 1;' },
    'xueru-settings-cs2-launch-title': { 'vi': 'Launch Options (CS2)', 'en': 'Launch Options (CS2)', 'zh-tw': '啟動選項 (CS2)' },
    'xueru-cs2-launch-options': { 'vi': '+exec auto.cfg -nojoy -high -refresh 75', 'en': '+exec auto.cfg -nojoy -high -refresh 75', 'zh-tw': '+exec auto.cfg -nojoy -high -refresh 75' },
    'xueru-settings-cs2-autoexec-title': { 'vi': 'Autoexec (CS2)', 'en': 'Autoexec (CS2)', 'zh-tw': 'Autoexec (CS2)' },
    'xueru-cs2-autoexec-content': {
        'vi': "bind alt switchhands<br>cl_predict_body_shot_fx 0<br>cl_predict_head_shot_fx 0<br>cl_predict_kill_ragdolls 0<br>alias \"+dropbomb\" \"slot5\"<br>alias \"-dropbomb\" \"drop\"<br>bind k \"+dropbomb;\"<br>cl_teamcounter_playercount_instead_of_avatars 1<br>bind space +jump<br>bind \"MWHEELDOWN\" \"+jump\"<br>bind \"MWHEELUP\" \"+jump\"",
        'en': "bind alt switchhands<br>cl_predict_body_shot_fx 0<br>cl_predict_head_shot_fx 0<br>cl_predict_kill_ragdolls 0<br>alias \"+dropbomb\" \"slot5\"<br>alias \"-dropbomb\" \"drop\"<br>bind k \"+dropbomb;\"<br>cl_teamcounter_playercount_instead_of_avatars 1<br>bind space +jump<br>bind \"MWHEELDOWN\" \"+jump\"<br>bind \"MWHEELUP\" \"+jump\"",
        'zh-tw': "bind alt switchhands<br>cl_predict_body_shot_fx 0<br>cl_predict_head_shot_fx 0<br>cl_predict_kill_ragdolls 0<br>alias \"+dropbomb\" \"slot5\"<br>alias \"-dropbomb\" \"drop\"<br>bind k \"+dropbomb;\"<br>cl_teamcounter_playercount_instead_of_avatars 1<br>bind space +jump<br>bind \"MWHEELDOWN\" \"+jump\"<br>bind \"MWHEELUP\" \"+jump\""
    },
    'xueru-settings-cs2-config-file-title': { 'vi': 'Tệp Config (CS2)', 'en': 'Config File (CS2)', 'zh-tw': '設定檔 (CS2)'},
    'xueru-cs2-config-file-info': { 'vi': '[Mô tả config file CS2, nếu có.]', 'en': '[CS2 config file details, if any.]', 'zh-tw': '[CS2設定檔說明，可留空。]'},
    'xueru-settings-valorant-title': { 'vi': 'Valorant', 'en': 'Valorant', 'zh-tw': 'Valorant 配置' },
    'xueru-settings-valorant-mouse': { 'vi': 'Chuột (Valorant)', 'en': 'Mouse (Valorant)', 'zh-tw': '滑鼠 (Valorant)' },
    'xueru-valorant-mouse-list': {
        'vi': ['DPI: 800', 'Sensitivity: 1.453', 'Scoped Sens: 1'],
        'en': ['DPI: 800', 'Sens: 1.453', 'Scoped Sens: 1'],
        'zh-tw': ['DPI: 800', '遊戲內靈敏度: 1.453', '狙擊鏡靈敏度: 1']
    },
    'xueru-settings-valorant-keybinds': { 'vi': 'Keybinds (Valorant)', 'en': 'Keybinds (Valorant)', 'zh-tw': '按鍵配置 (Valorant)' },
    'xueru-valorant-keybinds-list': {
        'vi': ['Ability 1: C', 'Ability 2: Chuột 5', 'Ability 3: Chuột 4', 'Ultimate: X'],
        'en': ['Ability 1: C', 'Ability 2: Mouse 5', 'Ability 3: Mouse 4', 'Ultimate: X'],
        'zh-tw': ['技能 1: C', '技能 2: 滑鼠側鍵5', '技能 3: 滑鼠側鍵4', '大招: X']
    },
    'xueru-settings-valorant-video-title': { 'vi': 'Video (Valorant)', 'en': 'Video (Valorant)', 'zh-tw': '影像 (Valorant)' },
    'xueru-valorant-video-list': {
        'vi': ['Độ phân giải: 1440x1080 (True Stretched)', 'Display Mode: Windowed', 'Chất lượng: Medium'],
        'en': ['Res: 1440x1080 (True Stretched)', 'Display Mode: Windowed', 'Quality: Medium'],
        'zh-tw': ['解析度: 1440x1080 (真實拉伸)', '顯示模式: 視窗化', '畫質: 中']
    },
    'xueru-socials-title': { 'vi': 'Mạng Xã Hội Của Tôi', 'en': 'My Socials', 'zh-tw': '我的社交平台' },
    'xueru-socials-column-left-title': {'vi': 'Kênh Chính', 'en': 'Main Hangouts', 'zh-tw': '主要出沒地'},
    'xueru-socials-column-right-title': {'vi': 'Nền Tảng Khác', 'en': 'Other Spots', 'zh-tw': '其他平台'},
    'social-platform-twitch': {'vi': 'Twitch', 'en': 'Twitch', 'zh-tw': 'Twitch'},
    'xueru-social-twitch-link': {'vi': 'yukirly', 'en': 'yukirly', 'zh-tw': 'yukirly'},
    'social-platform-youtube': {'vi': 'YouTube', 'en': 'YouTube', 'zh-tw': 'YouTube'},
    'xueru-social-youtube-link': {'vi': 'yukirly', 'en': 'yukirly', 'zh-tw': 'yukirly'},
    'social-platform-instagram': {'vi': 'Instagram', 'en': 'Instagram', 'zh-tw': 'Instagram'},
    'xueru-social-instagram-link': {'vi': '@yukiidawolf', 'en': '@yukiidawolf', 'zh-tw': '@yukiidawolf'},
    'social-platform-facebook': {'vi': 'Facebook', 'en': 'Facebook', 'zh-tw': 'Facebook'},
    'xueru-social-facebook-link': {'vi': 'Yukiidawolf', 'en': 'Yukiidawolf', 'zh-tw': 'Yukiidawolf'},
    'social-platform-twitter': {'vi': 'Twitter/X', 'en': 'Twitter/X', 'zh-tw': 'Twitter/X'},
    'xueru-social-twitter-link': {'vi': '@yukiidawolf', 'en': '@yukiidawolf', 'zh-tw': '@yukiidawolf'},
    'xueru-socials-usernames-title': {'vi': 'Các Nền Tảng Khác (Username)', 'en': 'Other IDs', 'zh-tw': '其他帳號 (用戶名)'},
    'username-platform-qq': {'vi': 'QQ', 'en': 'QQ', 'zh-tw': 'QQ'},
    'xueru-username-qq-id': {'vi': '2997125715', 'en': '2997125715', 'zh-tw': '2997125715'},
    'username-platform-wechat': {'vi': 'WeChat', 'en': 'WeChat', 'zh-tw': '微信'},
    'xueru-username-wechat-id': {'vi': 'StellaPaw', 'en': 'StellaPaw', 'zh-tw': 'StellaPaw'},
    'username-platform-douyin': {'vi': 'Douyin', 'en': 'Douyin', 'zh-tw': '抖音'},
    'xueru-username-douyin-id': {'vi': 'yukirly', 'en': 'yukirly', 'zh-tw': 'yukirly'},
    'username-platform-discord': {'vi': 'Discord', 'en': 'Discord', 'zh-tw': 'Discord'},
    'xueru-username-discord-id': {'vi': 'stella553', 'en': 'stella553', 'zh-tw': 'stella553'},
    'xueru-socials-gameprofiles-title': {'vi': 'Profile Game & Chỉ Số', 'en': 'Game Profiles & Stats', 'zh-tw': '遊戲檔案與數據'},
    'social-platform-steam': {'vi': 'Steam', 'en': 'Steam', 'zh-tw': 'Steam'},
    'xueru-social-steam-link': {'vi': 'StellaPaw', 'en': 'StellaPaw', 'zh-tw': 'StellaPaw'},
    'social-platform-5eplay': {'vi': '5EPlay', 'en': '5EPlay', 'zh-tw': '5EPlay'},
    'xueru-social-5eplay-link': {'vi': 'XiaoMaoOWO', 'en': 'XiaoMaoOWO', 'zh-tw': 'XiaoMaoOWO'},
    'social-platform-faceit': {'vi': 'Faceit', 'en': 'Faceit', 'zh-tw': 'Faceit'},
    'xueru-social-faceit-link': {'vi': 'stellapaw', 'en': 'stellapaw', 'zh-tw': 'stellapaw'},
    'social-platform-csstats': {'vi': 'CSStats.gg', 'en': 'CSStats.gg', 'zh-tw': 'CSStats.gg'},
    'xueru-social-csstats-link': {'vi': 'Xem Profile', 'en': 'View Profile', 'zh-tw': '查看檔案'},
    'xueru-qna-title': { 'vi': 'Hỏi Đáp', 'en': 'Q&A', 'zh-tw': '常見問答' },
    'xueru-qna-item1-q': { 'vi': 'Chơi game gì hàng ngày?', 'en': "Daily games?", 'zh-tw': "每天都玩啥？" },
    'xueru-qna-item1-a': { 'vi': "Chủ yếu FPS. Cũng tùy tâm trạng và yêu cầu của người xem.", 'en': "Mostly FPS. Depends on mood and what chat wants, sometimes.", 'zh-tw': "主打FPS。看心情，也看觀眾想看啥。" },
    'xueru-qna-item2-q': { 'vi': 'Bạn từ đâu?', 'en': 'Where you from?', 'zh-tw': '哪裡人？' },
    'xueru-qna-item2-a': { 'vi': "Đài Loan. Chính xác hơn: Bố Đài Loan, mẹ Việt Nam. Sinh ở Tô Châu, lớn lên ở Thượng Hải. Tự hiểu.", 'en': "Taiwan, officially. Long story: Dad's Taiwanese, Mom's Vietnamese. Born in Suzhou, raised in Shanghai. You figure it out.", 'zh-tw': "台灣。複雜點說：爸台灣人，媽越南人。蘇州出生，上海長大。自己理解吧。" },
    'xueru-qna-item3-q': { 'vi': 'Bắt đầu chơi CS:GO khi nào?', 'en': 'Started CS:GO when?', 'zh-tw': 'CS:GO何時入坑的？' },
    'xueru-qna-item3-a': { 'vi': "Khoảng 2016 - 2017.", 'en': "Around 2016 - 2017.", 'zh-tw': "大概2016-2017那時吧。" },
    'xueru-qna-item4-q': { 'vi': 'Cho skin được không?', 'en': 'Gimme a skin?', 'zh-tw': '能送個皮膚嗎？' },
    'xueru-qna-item4-a': { 'vi': "Không. Đừng hỏi.", 'en': "Nah. Don't even ask.", 'zh-tw': "不行。別想了。" },
    'xueru-qna-item5-q': { 'vi': 'Nói được tiếng Việt không?', 'en': 'Speak Vietnamese?', 'zh-tw': '會說越南話？' },
    'xueru-qna-item5-a': { 'vi': "Giao tiếp cơ bản thì được. Nghe hiểu thì tùy, nói nhanh hoặc giọng lạ thì chịu.", 'en': "Yeah, can chat okay. Listening? Hit or miss. Talk fast or strong accent, and I'm lost. Seriously.", 'zh-tw': "能聊啊。聽力就…普普。語速快或口音重一點，我就直接投降了啦。" }
};

function updateContentInternal(lang, persona) {
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang;

    const translatableElements = document.querySelectorAll('[data-i18n], [data-i18n-list]');
    translatableElements.forEach(element => {
        const i18nKey = element.getAttribute('data-i18n');
        const i18nListKey = element.getAttribute('data-i18n-list');

        if (i18nKey) {
            const translationSet = translations[i18nKey];
            if (translationSet) {
                element.innerHTML = translationSet[lang] || translationSet['en'] || element.innerHTML;
            }
        } else if (i18nListKey) {
            const listTranslationSet = translations[i18nListKey];
            if (listTranslationSet) {
                const listItemsArray = listTranslationSet[lang] || listTranslationSet['en'];
                if (listItemsArray && Array.isArray(listItemsArray)) {
                    element.innerHTML = '';
                    listItemsArray.forEach((itemText) => {
                        const newLi = document.createElement('li');
                        newLi.innerHTML = itemText;
                        element.appendChild(newLi);
                    });
                }
            }
        }
    });

    const togglePersonaButton = document.getElementById('toggle-persona');
    if (togglePersonaButton) {
        const textElement = togglePersonaButton.querySelector('.text-persona');
        const key = `toggle-persona-${persona}`;
        if (textElement && translations[key] && translations[key][lang]) {
            textElement.textContent = translations[key][lang];
        } else if (textElement && translations[key] && translations[key]['en']) {
            textElement.textContent = translations[key]['en'];
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('#language-selector button');
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            currentLang = this.dataset.lang;
            updateContentInternal(currentLang, currentPersonaGlobal);
        });
    });
    
    updateContentInternal(currentLang, currentPersonaGlobal);
    document.body.classList.add('translations-loaded');
});