/* ================================================================
   星茄小说网 - 小说阅读网站 JavaScript
   包含：数据层、状态管理、UI渲染、事件绑定、增强功能
   ================================================================ */

/* ---------- 数据层：小说数据集（10本，覆盖多类型） ---------- */
const books = [
  {
    id: "b1",
    title: "星河拾荒者",
    author: "南烛",
    category: "科幻",
    status: "连载中",
    words: "128 万字",
    score: 9.7,
    heat: "386 万",
    readers: 128500,
    comments: 3642,
    tags: ["星际", "冒险", "机甲"],
    colors: ["#20243f", "#7b61ff"],
    intro: "旧纪元的星环废墟漂浮在银河边缘，少年工程师陆沉靠拆解废舰为生。直到他捡到一枚会说话的古文明核心，沉睡万年的星门计划重新启动。",
    chapters: [
      { title: "第一章 废墟里的声音", summary: "陆沉在星环废墟中发现一枚异常核心。", content: ["第七星环的黄昏总是来得很慢，恒星的余辉穿过破碎的舰壳，像一层暗金色的尘埃落在陆沉的肩头。","他握紧切割枪，沿着废舰腹部的裂口钻了进去。空气里漂着冷却液和铁锈混合的味道，探照灯扫过墙面，照出一排早已失效的古文字。","就在他准备拆下能源阀时，耳机里忽然响起一个清冷的女声：'权限验证失败。拾荒者，你不该碰这里。'","陆沉停住了手。废墟里没有活人，至少过去十年都没有。他看向控制台中央那枚微微发光的银色核心，心跳第一次比警报声更响。"] },
      { title: "第二章 会说话的核心", summary: "古文明核心提出一个无法拒绝的交易。", content: ["核心自称'白塔'，来自三千年前消失的先驱文明。它没有解释自己为何沉睡，只用一张星图买下了陆沉的沉默。","那张星图指向第九禁区，传说那里埋着足以改变航道格局的跃迁引擎。陆沉知道这可能是陷阱，可他更清楚，贫民区的人没有资格拒绝命运递来的筹码。","'带我离开这里。'白塔说，'作为交换，我帮你修好那艘快散架的船。'","陆沉望向舷窗外的群星，忽然笑了。'成交。但从现在开始，船长是我。'"] },
      { title: "第三章 第九禁区", summary: "陆沉和白塔踏上前往禁区的旅程。", content: ["飞船跃迁引擎启动的那一刻，整个船体都在颤抖。陆沉握紧操纵杆，身后的星环废墟越来越远，像一座被遗忘的墓碑。","白塔将星图投射在驾驶舱中央，第九禁区的坐标在黑暗深处闪烁着暗红色的光。","'到达需要七天。'白塔的声音平静得像在播报天气预报，'这七天里，我们得谈谈报酬。'","陆沉没有回答。窗外，一颗流浪行星正缓缓划过他们的航线，表面覆盖着冰层，像一只闭上的眼睛。"] },
      { title: "第四章 流浪者哨站", summary: "途中停靠在一座太空哨站，遭遇神秘追踪者。", content: ["哨站漂浮在矿石带边缘，只有六间房那么大。陆沉停靠补给时，发现维修台上放着一张熟悉的照片——正是白塔核心的扫描图像。","'有人比我们先到。'陆沉握紧腰间的等离子枪，脚下传来机械舱被打开的声响。","一个银发女子从暗处走出，肩上扛着和自己一模一样的切割枪。'别紧张，拾荒者。我知道你船上那枚核心的来历。'"] }
    ]
  },
  {
    id: "b2", title: "长安夜雨录", author: "青简", category: "悬疑", status: "已完结", words: "96 万字", score: 9.5, heat: "241 万", readers: 96300, comments: 2871,
    tags: ["古风", "探案", "权谋"], colors: ["#3f2b20", "#b85c38"],
    intro: "大雨封城的长安夜里，金吾卫接连发现三封没有署名的血书。女仵作沈照雪被卷入旧案，所有线索都指向十年前被烧毁的藏书楼。",
    chapters: [
      { title: "第一章 雨夜血书", summary: "长安城中出现第一封无名血书。", content: ["子时的长安被雨声吞没，朱雀街上的灯笼摇摇欲坠，像一排不肯闭上的眼睛。","沈照雪赶到金吾卫府时，案几上已经摆着那封血书。纸是上好的澄心堂纸，字迹却像被人用指骨一笔一笔划出来。","'十年前的火，还没烧干净。'她低声念出最后一句，屋内所有人的脸色都变了。","窗外雷声滚过，她忽然闻到一缕极淡的松烟味。那不是血书上的味道，而是来自一个早该死去的人。"] },
      { title: "第二章 藏书楼旧案", summary: "沈照雪重查十年前的藏书楼大火。", content: ["藏书楼早已成了废墟，只有半截焦黑的石碑还立在雨里。沈照雪撑伞走近，看见碑底新添了一道刀痕。","十年前，三十七名学士葬身火海，案卷却在三日后被封入内库。人人都说那是一场意外，只有她父亲留下过一句话：火不是从楼里烧起来的。","她蹲下身，用银针挑起泥水中的一枚铜扣。铜扣背面刻着一个小小的'玄'字。","这不是学士的东西，这是禁军的东西。"] },
      { title: "第三章 禁军玄字营", summary: "线索指向当年的禁军玄字营。", content: ["玄字营的档案在兵部锁了十年。沈照雪花了三天才见到当年的副指挥使，一个已经瘸了腿的老人。","'那场火之后，玄字营折了半。'老人看着那枚铜扣，手指在发抖，'不是天灾，是有人在藏书楼里藏了不该藏的东西。'","他说完这句话就再也不肯开口，只从枕头下摸出一张皱巴巴的地图，上面标注着一个沈照雪从未见过的符号。"] }
    ]
  },
  {
    id: "b3", title: "云端便利店", author: "鹿鸣", category: "都市", status: "连载中", words: "72 万字", score: 9.2, heat: "198 万", readers: 74100, comments: 2156,
    tags: ["治愈", "都市", "奇幻"], colors: ["#2f6f73", "#f2b15e"],
    intro: "失业青年林舟接手一家只在凌晨三点出现的便利店。顾客有赶末班车的神明、忘记归途的幽灵，也有正在寻找勇气的普通人。",
    chapters: [
      { title: "第一章 凌晨三点开门", summary: "林舟第一次见到云端便利店。", content: ["林舟在第三十七次投递简历失败后，收到了一把没有寄件人的钥匙。","钥匙上挂着一张纸条：凌晨三点，云桥路尽头，便利店缺一个店长。","他以为这是朋友的恶作剧，直到凌晨的雾气散开，一家亮着暖黄色灯光的小店真的出现在空无一人的路口。","门铃叮当作响，第一位顾客推门进来，头顶长着一对小小的鹿角。"] },
      { title: "第二章 神明买关东煮", summary: "一位落魄神明带来第一笔生意。", content: ["鹿角客人要了一串萝卜和一杯热茶，付钱时却拿出一枚会发光的树叶。","'现在凡间不收这个了吗？'他有些窘迫地问。","林舟盯着收银机上自动跳出的价格：一段被遗忘的祝福。他不知道该不该按下确认键。","热气从关东煮锅里升起，像某种温柔的提醒。林舟最终收下了那枚树叶，也收下了自己新生活的第一份荒唐。"] },
      { title: "第三章 末班车的神明", summary: "更多非人顾客出现在便利店。", content: ["后来林舟才知道，鹿角客人是一位被遗忘的山神，管辖的山头已经变成了楼盘。","凌晨三点是阴阳交界的缝隙。赶不上末班车的、找不到回家路的、还有那些被时代抛下的神明，都会在这家便利店前停下脚步。","他们需要的不是货物，而是一个还能被认出来的地方。林舟把山神的茶叶存在柜台最里面，标签上写着：免费续杯。"] },
      { title: "第四章 忘记归途的幽灵", summary: "一个迷路的幽灵闯进店里。", content: ["那晚的雾气特别重，一个穿着校服的女孩推开玻璃门，眼神茫然地看着货架。","'我找不到家了。'她说。","林舟查了地图，发现她说的那条街十五年前就已经拆迁。可他还是从仓库里翻出一包早已停产的跳跳糖，因为她看见时笑了一下。"] }
    ]
  },
  {
    id: "b4", title: "剑起万山", author: "惊鸿", category: "玄幻", status: "连载中", words: "214 万字", score: 9.4, heat: "312 万", readers: 147200, comments: 4236,
    tags: ["修炼", "热血", "宗门"], colors: ["#22334d", "#38a3a5"],
    intro: "山村少年叶听澜天生断脉，却在万山禁地中得到一截无名剑骨。从此以凡骨养剑意，向诸天宗门问道。",
    chapters: [
      { title: "第一章 断脉少年", summary: "叶听澜在宗门试炼中被判定无缘修行。", content: ["测灵石亮起又熄灭，广场上的笑声像雪一样落下来。","叶听澜站在人群中央，掌心被石棱划破，却没有松手。长老只看了一眼，便冷冷宣布：'经脉寸断，无缘大道。'","他低头看着血珠落入石缝，忽然听见远处万山深处传来一声剑鸣。","那声音很轻，却像有人隔着千年对他说：来。"] },
      { title: "第二章 禁地剑骨", summary: "万山禁地里藏着一截无名剑骨。", content: ["禁地没有路，只有被雾吞没的山风。叶听澜走到第三日，终于在断崖下看见一具跪坐的白骨。","白骨怀中抱着一截暗金色的剑骨，骨上刻满他看不懂的纹路。","当他的血滴落其上，整座山忽然安静下来。下一刻，万千剑影从雾中抬头，如同沉睡的群星同时睁眼。","叶听澜伸出手，握住了自己的第一条路。"] },
      { title: "第三章 剑骨入体", summary: "剑骨融入体内，叶听澜踏上修行之路。", content: ["剑骨入体的瞬间，像有一柄烧红的刀从脊椎一路划到指尖。叶听澜咬碎了牙，却没有哼一声。","疼痛退去后，他低头看向自己的手掌，原本断裂的经脉正被一缕缕暗金色的纹路重新连接。","那不是修复，是替换。他的身体正在成为剑骨的新鞘，从此他即剑，剑即他。","远处传来宗门巡守的脚步声。他站起身，第一次站得那么直。"] },
      { title: "第四章 万剑朝宗", summary: "叶听澜初露锋芒，震惊宗门。", content: ["三个月后，宗门大比，叶听澜赤手空拳走上擂台。所有人都以为他是来认输的。","对面内门弟子剑光如虹，他只用两根手指轻轻一夹。那柄被誉为'青鸾'的名剑就像冻住一样停在半空。","整个广场鸦雀无声。只有长老席上最年迈的那位老人缓缓站起，嘴唇动了动，吐出三个字：'万剑体。'"] }
    ]
  },
  {
    id: "b5", title: "春日邮差", author: "温白", category: "言情", status: "已完结", words: "58 万字", score: 9.1, heat: "156 万", readers: 62300, comments: 1842,
    tags: ["治愈", "双向奔赴", "小城"], colors: ["#b75d69", "#f4a7b9"],
    intro: "小镇邮差许柚每天递送别人的思念，却始终没有寄出写给旧友的那封信。春天来临时，收信人回到了小城。",
    chapters: [
      { title: "第一章 没有寄出的信", summary: "许柚在邮局抽屉里藏着一封旧信。", content: ["春风吹过梧桐巷时，邮局门口的风铃响了三声。","许柚把最后一叠明信片放进邮袋，又看了一眼抽屉深处那封泛黄的信。信封上没有邮票，只有一个写了一半的名字。","她以为这封信会永远留在这里，像一场没有结尾的少年心事。","直到门口传来熟悉的声音：'请问，这里还能寄信吗？'"] },
      { title: "第二章 重逢的邮戳", summary: "多年未见的故人回到小城。", content: ["沈砚站在柜台前，肩上还带着远途归来的尘意。许柚认出他的瞬间，手里的邮戳落在桌上，发出很轻的一声响。","他笑着递来一张空白明信片，说想寄给一个很多年没见的人。","'地址呢？'许柚问。","沈砚看着她，声音温和得像春日午后的风：'她就在这里。'"] },
      { title: "第三章 旧信与新芽", summary: "许柚终于决定寄出那封信。", content: ["许柚没有立刻回应。她低下头，假装整理信件，耳根却红得像窗外的桃花。","那天晚上，她从抽屉里拿出那封旧信，在信封背面写下一个完整的地址——那是沈砚大学时住过的宿舍楼，虽然早已拆了。","第二天，她把信放进邮袋，盖上了自己工作以来最郑重的一个邮戳。"] }
    ]
  },
  {
    id: "b6", title: "深海档案馆", author: "北屿", category: "悬疑", status: "连载中", words: "83 万字", score: 9.3, heat: "177 万", readers: 68900, comments: 2015,
    tags: ["克苏鲁", "调查", "深海"], colors: ["#0f2d3a", "#297ea6"],
    intro: "海底档案馆保存着人类不该知道的秘密。调查员顾沉受命整理一份失踪船队档案，却在录音里听见了自己的名字。",
    chapters: [
      { title: "第一章 沉没录音", summary: "顾沉在档案中听见自己的名字。", content: ["深海档案馆建在海平面以下一千二百米，窗外没有阳光，只有探照灯扫过时短暂显形的浮游生物。","顾沉打开编号 47 的录音带，里面先是长久的电流声，随后传来一个男人急促的喘息。","'如果有人听到这段录音，请不要相信顾沉。'","他按下暂停键，玻璃窗外正有一只巨大的眼睛缓缓睁开。"] },
      { title: "第二章 海底来信", summary: "一封湿漉漉的信被送进档案馆。", content: ["信封从传送舱里滑出来时，还在往下滴水。封口处没有邮戳，只有一枚被海盐腐蚀的船徽。","顾沉拆开信，纸上的字迹像活物一样缓慢游动，最终汇成一句话：你已经来过这里。","他检查监控，却发现昨夜三点，自己确实出现在档案馆门口。","可那时的他，明明正在宿舍睡觉。"] },
      { title: "第三章 另一个自己", summary: "顾沉开始调查监控中的自己。", content: ["监控视频很模糊，但那个人的步态、侧脸、甚至习惯性地用左手推眼镜——所有细节都指向同一个结论。","顾沉查了所有夜间出入记录，只有一条：凌晨 2:58，顾沉，进入档案区。","他给总部发了加密报告，却迟迟没有收到回音。通讯日志显示，三天前已有一条回复被自动归档——归档人是他自己。"] }
    ]
  },
  {
    id: "b7", title: "我在末世种田", author: "三秋叶", category: "科幻", status: "连载中", words: "156 万字", score: 9.0, heat: "223 万", readers: 89100, comments: 2678,
    tags: ["末世", "种田", "升级"], colors: ["#3d5a3c", "#8fc93a"],
    intro: "核冬天后第二十年，幸存者基地面临粮食危机。农学博士宋晚意外激活一座废弃温室，里面竟然保存着改造后的高产种子。",
    chapters: [
      { title: "第一章 二十年后", summary: "核冬天漫长，基地面临断粮。", content: ["天空还是灰的。二十年了，宋晚已经不记得蓝色是什么样子。","基地仓库的存粮撑不过三个月，会议上所有人都在争论怎么减少口粮配给，没人提种植。因为大家都试过了，什么也长不出来。","直到宋晚在档案库里翻到一张旧地图，标注着城南二十公里处有一座编号为'春苗'的农业实验温室。"] },
      { title: "第二章 春苗温室", summary: "宋晚冒险前往废弃温室。", content: ["温室的玻璃穹顶碎了大半，但地下部分完好无损。宋晚用应急电源激活了控制面板，屏幕上跳出一行字：休眠完成，种子库完好率 98.7%。","她拆开第一个密封箱，里面整整齐齐码着上百个真空袋。标签上写着能适应高辐射土壤的改良品种——这是末日前的科学家留给世界的最后礼物。"] },
      { title: "第三章 第一株绿芽", summary: "基地迎来二十年来第一株新芽。", content: ["那株绿芽破土而出的时候，整个基地都聚在玻璃窗外。","有人哭，有人跪，也有人开始重新丈量土地。宋晚蹲在温室里，手指轻轻碰了碰那片脆弱的叶子，第一次觉得风里有了暖意。","基地主任递来一张空白调令：'从现在起，你负责所有种植事务。后勤部、工程部、甚至守卫连，随你调。'"] }
    ]
  },
  {
    id: "b8", title: "大魏赘婿", author: "烟雨江南", category: "历史", status: "已完结", words: "189 万字", score: 9.3, heat: "275 万", readers: 112400, comments: 3321,
    tags: ["赘婿", "逆袭", "权谋"], colors: ["#5c3a29", "#c49a6c"],
    intro: "穿越到大魏朝的陈牧，开局就是苏家最不受待见的上门女婿。但他袖中藏着一纸魏太祖密诏，上面写着：持此诏者，代朕巡狩天下。",
    chapters: [
      { title: "第一章 赘婿入门", summary: "陈牧穿越成为苏府赘婿。", content: ["陈牧睁眼时，满堂宾客正朝他扔花生。新郎官被砸得狼狈不堪，四周的嘲笑声像潮水一样涌上来。","'苏家这门婚事，说白了就是捡了个吃干饭的。'","他低头不响，只把袖中那卷泛黄的绢帛又往里推了推。不急，他对自己说。太祖密诏是牌，但不是现在打的牌。"] },
      { title: "第二章 小试牛刀", summary: "陈牧用现代知识解决苏家商号危机。", content: ["苏家最大的布庄被人做了手脚，库存烂了七成。苏老爷子急得吐了血，全府上下束手无策。","陈牧只用了三天，把剩下的三成布重新裁剪成当时最稀缺的马面裙，价翻五倍，一夜售罄。","苏府管事的脸色变了，夫人的语气也软了。只有苏家小姐看着他，第一次认真打量这个'吃干饭'的夫君。"] },
      { title: "第三章 密诏初现", summary: "危急关头，陈牧亮出真正底牌。", content: ["布庄的事引来了王府的人。来人气势汹汹，要把苏家收归旗下，满堂刀斧手封死了所有出口。","陈牧不紧不慢地从袖中抽出一卷绢帛，缓缓展开。","'魏太祖武皇帝密诏，代朕巡狩，见诏如见君。'他的声音不大，却让在场所有人膝盖一软。"] },
      { title: "第四章 京城风云", summary: "陈牧奉诏入京，卷入朝堂争斗。", content: ["密诏的消息三天传遍京城。有人想拉拢他，有人想杀他，还有人想验明诏书的真伪。","陈牧坐在驿馆窗前，看着远处皇宫的飞檐翘角，忽然想起穿越前历史书上的一句话：大魏建国三百载，亡于外戚。","他放下茶杯，决定这一次，不让历史重演。"] }
    ]
  },
  {
    id: "b9", title: "虚拟创世神", author: "零号玩家", category: "游戏", status: "连载中", words: "105 万字", score: 8.9, heat: "188 万", readers: 78500, comments: 2340,
    tags: ["游戏", "升级", "爽文"], colors: ["#1a1a2e", "#e94560"],
    intro: "全息网游《神域》关服前夜，顶尖玩家江辰没有下线。第二天，他发现游戏世界成了现实，而自己带着所有装备和经验值，成为了这个新世界的起点。",
    chapters: [
      { title: "第一章 关服倒计时", summary: "江辰决定在关服前刷最后一个副本。", content: ["屏幕右上角的倒计时还剩三分钟。公会群里所有人都在告别，只有江辰还站在副本入口。","这是他玩了八年的游戏，从封测到现在，陪他熬过高考、分手、失业——今天，他要和它好好告别。","倒计时归零的瞬间，屏幕没有黑。一阵刺眼的白光将他吞没，耳边响起系统提示音：'检测到管理员权限持有者，启动创世协议。'"] },
      { title: "第二章 新手村的危机", summary: "江辰发现游戏世界正在崩塌。", content: ["熟悉的像素天空变成了真正的蓝天。远处新手村的栅栏外，江辰看见一只他刷了几万次的野猪——但它现在是活的，正在啃一个田埂。","NPC农夫跑过来大喊：'英雄，救救我家的麦子！'","江辰条件反射地拔出腰间那柄+99的传说之剑，一剑劈下去。野猪倒下的瞬间，系统提示他获得了 1 点创世值。"] },
      { title: "第三章 创世协议", summary: "江辰了解自己的使命。", content: ["系统日志回溯了真相：《神域》所在的服务器因未知原因与另一个维度的真实世界重叠，如果不修复边界，两个世界都会崩塌。","'你的账号是该维度的原始锚点。'系统用他熟悉的客服口吻说，'请尽快提升创世值，稳定边界。'","江辰沉默了三秒，然后打开了好友列表。里面所有人的名字都灰了——除了一个：管理员[离线]。但他看见了一条新消息：'欢迎回来。'"] }
    ]
  },
  {
    id: "b10", title: "苍生何辜", author: "悠然若水", category: "轻小说", status: "连载中", words: "47 万字", score: 8.8, heat: "112 万", readers: 43100, comments: 1256,
    tags: ["穿越", "治愈", "逆袭"], colors: ["#4a235a", "#e8a2c8"],
    intro: "社畜白玖加班猝死后，穿进了一本虐文小说，成了第一章就被毒死的炮灰公主。为了活下去，她决定抱紧全书最危险的大反派，然后——把剧情带偏了十万八千里。",
    chapters: [
      { title: "第一章 穿进虐文", summary: "白玖醒来发现自己成了炮灰公主。", content: ["白玖睁开眼时，锦被绣枕，满室檀香。她恍惚了三秒——昨晚的加班、凌晨的猝死、然后就是这里。","脑海里涌入的记忆提醒她：这个身体的原主今晚要毒发身亡，因为她在第一杯茶里就被下了毒。","白玖深吸一口气，把茶碗推到一边，冲着门外喊：'来人，本宫要吃宵夜。重辣，越辣越好！'"] },
      { title: "第二章 抱反派大腿", summary: "白玖主动接近书中最大的反派。", content: ["权倾朝野的摄政王秦厉，全书最大的反派，此刻正在后花园赏月。","白玖端着一盘刚做的麻辣香锅走近他，笑得像只偷腥的猫：'殿下，要不要尝尝我的手艺？'","秦厉抬起眼皮看了她一眼。攻略上说他会直接赶人走——但他没有。他拿起筷子，吃了一口，然后看着她：'明天继续。'"] },
      { title: "第三章 剧情崩了", summary: "白玖的干预引发连锁反应。", content: ["原著里，今晚摄政王会设计陷害太子，引发朝堂动荡。但因为白玖的宵夜拖延了时间，刺客提前暴露，计划全盘落空。","秦厉连夜出现在她寝宫窗前，眼神复杂：'你故意的？'","白玖裹着被子，诚恳地点了点头。她以为下一秒就要被灭口，却听见他轻轻笑了一声——这位杀人不眨眼的摄政王，居然在笑。"] }
    ]
  }
];

/* 分类列表 */
const categories = ["全部", "玄幻", "都市", "科幻", "悬疑", "言情", "历史", "游戏", "轻小说"];

/* 热门标签云 */
const hotTags = [
  "系统流", "重生", "穿越", "扮猪吃虎", "赘婿", "甜宠", "虐恋", "无限流",
  "末世", "种田", "退婚", "修炼", "升级", "修仙", "武侠", "星际",
  "机甲", "克苏鲁", "悬疑", "推理", "治愈", "轻松", "爽文", "女强",
  "总裁", "纯爱", "逆袭", "热血"
];

/* ---------- 全局状态 ---------- */
const state = {
  currentBookId: null,
  currentChapterIndex: 0,
  fontSize: Number(localStorage.getItem("readerFontSize")) || 20,
  searchKeyword: "",
  category: "全部",
  statusFilter: "全部",
  currentBannerIndex: 0,
  bannerTimer: null,
  selectedTag: null,
  searchSuggestionIndex: -1
};

/* ---------- DOM 引用 ---------- */
const $ = (selector) => document.querySelector(selector);

/* ---------- localStorage 工具 ---------- */
function getBookshelf() {
  return JSON.parse(localStorage.getItem("bookshelf") || "[]");
}

function setBookshelf(ids) {
  localStorage.setItem("bookshelf", JSON.stringify(ids));
}

function isInBookshelf(bookId) {
  return getBookshelf().includes(bookId);
}

/* 阅读进度管理 */
function getReadingProgress() {
  return JSON.parse(localStorage.getItem("readingProgress") || "{}");
}

function setReadingProgress(bookId, chapterIndex, totalChapters) {
  const progress = getReadingProgress();
  progress[bookId] = { chapterIndex, totalChapters, timestamp: Date.now() };
  localStorage.setItem("readingProgress", JSON.stringify(progress));
}

function getReadingPercent(bookId) {
  const progress = getReadingProgress();
  const record = progress[bookId];
  if (!record || !record.totalChapters) return 0;
  return Math.round((record.chapterIndex / record.totalChapters) * 100);
}

/* 最近阅读记录（最多10条） */
function getRecentReading() {
  return JSON.parse(localStorage.getItem("recentReading") || "[]");
}

function addRecentReading(bookId) {
  let recent = getRecentReading();
  recent = recent.filter((id) => id !== bookId);
  recent.unshift(bookId);
  if (recent.length > 10) recent = recent.slice(0, 10);
  localStorage.setItem("recentReading", JSON.stringify(recent));
}

/* Toast 提示 */
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800);
}

/* ---------- 工具函数 ---------- */
function getFilteredBooks() {
  const keyword = state.searchKeyword.trim().toLowerCase();
  return books.filter((book) => {
    const matchCategory = state.category === "全部" || book.category === state.category;
    const matchStatus = state.statusFilter === "全部" || book.status === state.statusFilter;
    const matchTag = !state.selectedTag || book.tags.includes(state.selectedTag);
    const matchKeyword = !keyword || [
      book.title, book.author, book.category, book.status, ...book.tags
    ].join(" ").toLowerCase().includes(keyword);
    return matchCategory && matchKeyword && matchStatus && matchTag;
  });
}

function createCover(book) {
  return `<div class="cover" style="--cover-a:${book.colors[0]};--cover-b:${book.colors[1]}">${book.title}</div>`;
}

/* 生成阅读进度条 HTML */
function createProgressBar(bookId) {
  const percent = getReadingPercent(bookId);
  if (!percent) return "";
  return `<div class="progress-bar-wrapper"><div class="progress-bar"><div class="progress-fill" style="width:${percent}%"></div></div><span class="progress-text">已读 ${percent}%</span></div>`;
}

/* 格式化数字 */
function formatNumber(num) {
  if (num >= 10000) return (num / 10000).toFixed(1).replace(/\.0$/, "") + "万";
  return String(num);
}

/* ---------- 编辑精选 / 书籍列表 ---------- */
function renderBooks() {
  const bookGrid = $("#bookGrid");
  if (!bookGrid) return;
  const filteredBooks = getFilteredBooks();
  if (!filteredBooks.length) {
    bookGrid.innerHTML = `<div class="empty-state">没有找到相关小说，可以换个关键词试试。</div>`;
    return;
  }
  const cards = filteredBooks.map((book) => `
    <article class="book-card">
      ${createCover(book)}
      <div>
        <h3>${book.title}</h3>
        <div class="book-meta">
          <span>${book.category}</span>
          <span>${book.status}</span>
          <span>${book.words}</span>
        </div>
        <p>${book.intro}</p>
        <div class="book-actions">
          <button type="button" data-action="read" data-book-id="${book.id}">开始阅读</button>
          <button type="button" data-action="detail" data-book-id="${book.id}">查看详情</button>
        </div>
      </div>
    </article>
  `);
  if (cards.length > 3) {
    cards.splice(3, 0, createInlineAd("列表信息流广告", "读者免费阅读，广告支持网站持续更新。"));
  }
  bookGrid.innerHTML = cards.join("");
}

function createInlineAd(title, description) {
  return `<article class="inline-ad" aria-label="${title}"><div><span class="ad-label">广告</span><strong>${title}</strong><span>${description}</span></div></article>`;
}

/* ---------- 分类区域 ---------- */
function renderCategories() {
  const categoryList = $("#categoryList");
  if (!categoryList) return;
  categoryList.innerHTML = categories.map((category) => {
    const count = category === "全部" ? books.length : books.filter((book) => book.category === category).length;
    const activeClass = state.category === category ? " active" : "";
    return `<button class="category-card${activeClass}" type="button" data-category="${category}"><strong>${category}</strong><span>${count} 本作品</span></button>`;
  }).join("");
}

function renderCategoryBooks() {
  const grid = $("#categoryBookGrid");
  if (!grid) return;
  const filteredBooks = getFilteredBooks();
  if (!filteredBooks.length) {
    grid.innerHTML = `<div class="empty-state">该筛选条件下暂无作品。</div>`;
    return;
  }
  grid.innerHTML = filteredBooks.map((book) => `
    <article class="book-card">
      ${createCover(book)}
      <div>
        <h3>${book.title}</h3>
        <div class="book-meta"><span>${book.category}</span><span>${book.status}</span><span>${book.words}</span></div>
        <p>${book.intro}</p>
        <div class="book-actions">
          <button type="button" data-action="read" data-book-id="${book.id}">开始阅读</button>
          <button type="button" data-action="detail" data-book-id="${book.id}">查看详情</button>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------- 排行榜 ---------- */
function renderRankings() {
  const rankingList = $("#rankingList");
  if (!rankingList) return;
  rankingList.innerHTML = [...books].sort((a, b) => b.score - a.score).map((book, index) => `
    <article class="ranking-card">
      <span class="rank-no">${index + 1}</span>
      <div><h3>${book.title}</h3><div class="ranking-meta">${book.author} · ${book.category} · 热度 ${book.heat}</div></div>
      <span class="score">${book.score.toFixed(1)} 分</span>
    </article>
  `).join("");
}

/* ---------- 书架 ---------- */
function renderBookshelf() {
  const bookshelfList = $("#bookshelfList");
  if (!bookshelfList) return;
  const savedIds = getBookshelf();
  const savedBooks = books.filter((book) => savedIds.includes(book.id));
  if (!savedBooks.length) {
    bookshelfList.innerHTML = `<div class="empty-state">书架还是空的。打开任意小说详情，点击"加入书架"即可收藏。</div>`;
    return;
  }
  bookshelfList.innerHTML = savedBooks.map((book) => {
    const progressBar = createProgressBar(book.id);
    return `<article class="book-card">
      ${createCover(book)}
      <div>
        <h3>${book.title}</h3>
        <div class="book-meta"><span>${book.category}</span><span>${book.status}</span><span>${book.words}</span></div>
        ${progressBar}
        <p>${book.intro}</p>
        <div class="book-actions">
          <button type="button" data-action="read" data-book-id="${book.id}">继续阅读</button>
          <button type="button" data-action="remove" data-book-id="${book.id}">移出书架</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

/* ---------- 最近阅读 ---------- */
function renderRecentReading() {
  const list = $("#recentReadingList");
  if (!list) return;
  const recentIds = getRecentReading();
  const recentBooks = recentIds.map((id) => books.find((b) => b.id === id)).filter(Boolean);
  if (!recentBooks.length) {
    list.innerHTML = `<div class="empty-state">还没有阅读记录，快去发现好书吧。</div>`;
    return;
  }
  list.innerHTML = recentBooks.map((book) => {
    const percent = getReadingPercent(book.id);
    const progressHtml = percent ? `<span class="progress-label">已读 ${percent}%</span>` : "";
    return `<article class="recent-card" data-book-id="${book.id}">
      ${createCover(book)}
      <div class="recent-card-info"><h4>${book.title}</h4><p>${book.author} · ${book.category}</p>${progressHtml}</div>
    </article>`;
  }).join("");
}

/* ---------- 猜你喜欢 ---------- */
function renderGuessYouLike() {
  const grid = $("#guessGrid");
  if (!grid) return;
  const recentIds = new Set(getRecentReading());
  const candidates = books.filter((book) => !recentIds.has(book.id));
  const shuffled = [...candidates].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(4, shuffled.length));
  if (!selected.length) {
    grid.innerHTML = `<div class="empty-state">暂时没有更多推荐。</div>`;
    return;
  }
  grid.innerHTML = selected.map((book) => `
    <article class="book-card">
      ${createCover(book)}
      <div>
        <h3>${book.title}</h3>
        <div class="book-meta"><span>${book.category}</span><span>${book.status}</span><span>${book.words}</span></div>
        <p>${book.intro}</p>
        <div class="book-actions">
          <button type="button" data-action="read" data-book-id="${book.id}">开始阅读</button>
          <button type="button" data-action="detail" data-book-id="${book.id}">查看详情</button>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------- 热门标签云 ---------- */
function renderTagCloud() {
  const list = $("#tagCloudList");
  if (!list) return;
  list.innerHTML = hotTags.map((tag) => {
    const activeClass = state.selectedTag === tag ? " active" : "";
    return `<button class="tag-chip${activeClass}" type="button" data-tag="${tag}">${tag}</button>`;
  }).join("");
}

/* ---------- 免费专区 ---------- */
function renderFreeBooks() {
  const grid = $("#freeBookGrid");
  if (!grid) return;
  const freeBooks = books.filter((book) => book.status === "已完结");
  if (!freeBooks.length) {
    grid.innerHTML = `<div class="empty-state">当前没有限免作品。</div>`;
    return;
  }
  grid.innerHTML = freeBooks.map((book) => `
    <article class="book-card">
      ${createCover(book)}
      <div>
        <h3>${book.title}</h3>
        <div class="book-meta"><span>${book.category}</span><span>${book.status}</span><span>${book.words}</span></div>
        <p>${book.intro}</p>
        <div class="book-actions">
          <button type="button" data-action="read" data-book-id="${book.id}">开始阅读</button>
          <button type="button" data-action="detail" data-book-id="${book.id}">查看详情</button>
        </div>
      </div>
    </article>
  `).join("");
}

/* ---------- 详情面板 ---------- */
function openDetail(bookId) {
  const detailPanel = $("#detailPanel");
  const detailContent = $("#detailContent");
  const book = books.find((item) => item.id === bookId);
  if (!book) return;
  state.currentBookId = bookId;
  detailContent.innerHTML = `
    <div class="detail-head">
      ${createCover(book)}
      <div>
        <p class="eyebrow">${book.category}</p>
        <h2>${book.title}</h2>
        <div class="detail-meta">
          <span>作者：${book.author}</span><span>${book.status}</span><span>${book.words}</span><span>${book.score.toFixed(1)} 分</span>
        </div>
        <div class="detail-stats">
          <span>${formatNumber(book.readers)} 人在读</span>
          <span>${formatNumber(book.comments)} 条评论</span>
        </div>
        <p class="detail-desc">${book.intro}</p>
        <div class="panel-actions">
          <button type="button" data-action="read" data-book-id="${book.id}">阅读第一章</button>
          <button type="button" data-action="shelf" data-book-id="${book.id}">${isInBookshelf(book.id) ? "已在书架" : "加入书架"}</button>
        </div>
      </div>
    </div>
    <div class="detail-ad"><span class="ad-label">广告</span><strong>详情页广告位</strong><span>可用于展示小说推荐、品牌广告或广告联盟代码。</span></div>
    <div class="chapter-list">
      ${book.chapters.map((chapter, index) => `
        <button class="chapter-item" type="button" data-action="chapter" data-book-id="${book.id}" data-chapter-index="${index}">
          <div><h4>${chapter.title}</h4><p>${chapter.summary}</p></div><span>阅读</span>
        </button>
      `).join("")}
    </div>
  `;
  detailPanel.classList.add("active");
  detailPanel.setAttribute("aria-hidden", "false");
}

function closeDetail() {
  const detailPanel = $("#detailPanel");
  detailPanel.classList.remove("active");
  detailPanel.setAttribute("aria-hidden", "true");
}

/* ---------- 阅读器 ---------- */
function openReader(bookId, chapterIndex = 0) {
  const readerPanel = $("#readerPanel");
  const book = books.find((item) => item.id === bookId);
  if (!book) return;
  const chapter = book.chapters[chapterIndex] || book.chapters[0];
  state.currentBookId = bookId;
  state.currentChapterIndex = chapterIndex;
  addRecentReading(bookId);
  setReadingProgress(bookId, chapterIndex, book.chapters.length);
  $("#readerBook").textContent = `${book.title} · ${book.author}`;
  $("#readerTitle").textContent = chapter.title;
  const paragraphs = chapter.content.map((paragraph) => `<p>${paragraph}</p>`);
  if (paragraphs.length > 2) {
    paragraphs.splice(2, 0, `<div class="reader-ad mid-ad"><div class="ad-label">广告</div><span>章节中部广告位，可替换为真实广告代码</span></div>`);
  }
  $("#readerText").innerHTML = paragraphs.join("");
  $("#readerText").style.fontSize = `${state.fontSize}px`;
  readerPanel.classList.add("active");
  readerPanel.setAttribute("aria-hidden", "false");
  closeDetail();
  readerPanel.scrollTop = 0;
  renderRecentReading();
  renderBookshelf();
}

function closeReader() {
  const readerPanel = $("#readerPanel");
  readerPanel.classList.remove("active");
  readerPanel.setAttribute("aria-hidden", "true");
  stopTTS();
}

/* ---------- 听书（Web Speech API） ---------- */
let ttsUtterance = null;
let ttsSpeaking = false;

function toggleTTS() {
  const ttsBtn = $("#ttsButton");
  if (ttsSpeaking) { stopTTS(); ttsBtn.textContent = "🔊 听书"; return; }
  startTTS();
  ttsBtn.textContent = "🔇 停止";
}

function startTTS() {
  const textEl = $("#readerText");
  if (!textEl) return;
  const text = textEl.innerText.replace(/\n/g, "").trim();
  if (!text) { showToast("没有可朗读的内容"); return; }
  if (!window.speechSynthesis) { showToast("当前浏览器不支持语音朗读"); return; }
  ttsUtterance = new SpeechSynthesisUtterance(text);
  ttsUtterance.lang = "zh-CN";
  ttsUtterance.rate = 0.9;
  ttsUtterance.onend = () => { ttsSpeaking = false; const btn = $("#ttsButton"); if (btn) btn.textContent = "🔊 听书"; };
  ttsUtterance.onerror = () => { ttsSpeaking = false; const btn = $("#ttsButton"); if (btn) btn.textContent = "🔊 听书"; };
  ttsSpeaking = true;
  window.speechSynthesis.speak(ttsUtterance);
}

function stopTTS() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  ttsSpeaking = false;
  ttsUtterance = null;
}

/* ---------- 书架操作 ---------- */
function addToShelf(bookId) {
  const savedIds = getBookshelf();
  if (savedIds.includes(bookId)) { showToast("这本书已经在书架中"); return; }
  setBookshelf([...savedIds, bookId]);
  renderBookshelf();
  showToast("已加入书架");
}

function removeFromShelf(bookId) {
  setBookshelf(getBookshelf().filter((id) => id !== bookId));
  renderBookshelf();
  showToast("已移出书架");
}

/* ================================================================
   增强功能模块
   ================================================================ */

/* ---------- 轮播Banner ---------- */
function initBanner() {
  const track = document.querySelector(".banner-track");
  const slides = document.querySelectorAll(".banner-slide");
  const dots = document.querySelectorAll(".banner-dot");
  const prevBtn = document.querySelector(".banner-prev");
  const nextBtn = document.querySelector(".banner-next");
  if (!track || !slides.length) return;
  const totalSlides = slides.length;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    state.currentBannerIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function nextSlide() { goToSlide(state.currentBannerIndex + 1); }
  function prevSlide() { goToSlide(state.currentBannerIndex - 1); }

  function startAutoPlay() {
    stopAutoPlay();
    state.bannerTimer = setInterval(nextSlide, 3000);
  }

  function stopAutoPlay() {
    if (state.bannerTimer) { clearInterval(state.bannerTimer); state.bannerTimer = null; }
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { prevSlide(); stopAutoPlay(); startAutoPlay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { nextSlide(); stopAutoPlay(); startAutoPlay(); });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(parseInt(dot.dataset.dot));
      stopAutoPlay(); startAutoPlay();
    });
  });

  document.querySelectorAll(".banner-read-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => { openReader(e.currentTarget.dataset.bookId, 0); });
  });

  const bannerContainer = document.querySelector(".banner-container");
  if (bannerContainer) {
    bannerContainer.addEventListener("mouseenter", stopAutoPlay);
    bannerContainer.addEventListener("mouseleave", startAutoPlay);
  }
  startAutoPlay();
}

/* ---------- Tab切换 ---------- */
function initTabs() {
  const tabItems = document.querySelectorAll(".tab-item");
  const tabContents = document.querySelectorAll(".tab-content");
  tabItems.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetTab = tab.dataset.tab;
      tabItems.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      tabContents.forEach((c) => c.classList.remove("active"));
      const targetContent = document.getElementById(`tab-${targetTab}`);
      if (targetContent) targetContent.classList.add("active");
      if (targetTab === "categories") { renderCategories(); renderCategoryBooks(); }
      else if (targetTab === "rankings") renderRankings();
      else if (targetTab === "bookshelf") renderBookshelf();
      else if (targetTab === "free") renderFreeBooks();
      else if (targetTab === "home") { renderBooks(); renderRecentReading(); renderGuessYouLike(); }
    });
  });
}

/* ---------- 搜索建议下拉面板 ---------- */
function initSearchSuggestions() {
  const searchInput = $("#searchInput");
  const suggestionsPanel = $("#searchSuggestions");
  if (!searchInput || !suggestionsPanel) return;
  let suggestionItems = [];

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    state.searchSuggestionIndex = -1;
    if (!keyword) { suggestionsPanel.classList.remove("show"); suggestionItems = []; return; }
    const matches = books.filter((book) =>
      book.title.toLowerCase().includes(keyword) || book.author.toLowerCase().includes(keyword)
    ).slice(0, 8);
    if (!matches.length) { suggestionsPanel.classList.remove("show"); suggestionItems = []; return; }
    suggestionItems = matches;
    suggestionsPanel.innerHTML = matches.map((book, index) => `
      <div class="suggestion-item" data-index="${index}" data-book-id="${book.id}">
        <span class="suggestion-title">${book.title}</span>
        <span class="suggestion-author">${book.author}</span>
      </div>
    `).join("");
    suggestionsPanel.classList.add("show");
  });

  searchInput.addEventListener("keydown", (e) => {
    if (!suggestionsPanel.classList.contains("show")) return;
    const items = suggestionsPanel.querySelectorAll(".suggestion-item");
    if (e.key === "ArrowDown") { e.preventDefault(); state.searchSuggestionIndex = Math.min(state.searchSuggestionIndex + 1, items.length - 1); updateHighlight(items); }
    else if (e.key === "ArrowUp") { e.preventDefault(); state.searchSuggestionIndex = Math.max(state.searchSuggestionIndex - 1, -1); updateHighlight(items); }
    else if (e.key === "Enter" && state.searchSuggestionIndex >= 0 && items.length > 0) {
      e.preventDefault();
      const bookId = items[state.searchSuggestionIndex].dataset.bookId;
      searchInput.value = ""; suggestionsPanel.classList.remove("show"); suggestionItems = [];
      openDetail(bookId);
    }
  });

  suggestionsPanel.addEventListener("click", (e) => {
    const item = e.target.closest(".suggestion-item");
    if (!item) return;
    searchInput.value = ""; suggestionsPanel.classList.remove("show"); suggestionItems = [];
    openDetail(item.dataset.bookId);
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsPanel.contains(e.target)) {
      suggestionsPanel.classList.remove("show"); suggestionItems = [];
    }
  });

  function updateHighlight(items) {
    items.forEach((item, i) => item.classList.toggle("highlight", i === state.searchSuggestionIndex));
  }
}

/* ---------- 事件绑定 ---------- */
function bindEvents() {
  const navToggle = $(".nav-toggle");
  if (navToggle) navToggle.addEventListener("click", () => document.querySelector(".nav").classList.toggle("open"));

  const searchForm = document.querySelector(".search");
  if (searchForm) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      state.searchKeyword = $("#searchInput").value;
      state.category = "全部"; state.selectedTag = null;
      renderBooks();
      switchToTab("home");
    });
  }

  const categoryList = $("#categoryList");
  if (categoryList) {
    categoryList.addEventListener("click", (event) => {
      const card = event.target.closest("[data-category]");
      if (!card) return;
      state.category = card.dataset.category;
      state.searchKeyword = ""; state.selectedTag = null;
      $("#searchInput").value = "";
      renderCategories(); renderCategoryBooks();
    });
  }

  const statusFilter = $("#statusFilter");
  if (statusFilter) {
    statusFilter.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-status]");
      if (!btn) return;
      state.statusFilter = btn.dataset.status;
      statusFilter.querySelectorAll(".status-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderCategoryBooks();
    });
  }

  document.body.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;
    const { action, bookId } = target.dataset;
    if (action === "detail") openDetail(bookId);
    if (action === "read") openReader(bookId, 0);
    if (action === "shelf") { addToShelf(bookId); openDetail(bookId); }
    if (action === "remove") removeFromShelf(bookId);
    if (action === "chapter") openReader(bookId, Number(target.dataset.chapterIndex));
  });

  const recentList = $("#recentReadingList");
  if (recentList) {
    recentList.addEventListener("click", (e) => {
      const card = e.target.closest(".recent-card");
      if (card) openReader(card.dataset.bookId, 0);
    });
  }

  const refreshBtn = $("#refreshGuess");
  if (refreshBtn) refreshBtn.addEventListener("click", () => { renderGuessYouLike(); showToast("已刷新推荐"); });

  const tagCloudList = $("#tagCloudList");
  if (tagCloudList) {
    tagCloudList.addEventListener("click", (e) => {
      const chip = e.target.closest(".tag-chip");
      if (!chip) return;
      const tag = chip.dataset.tag;
      state.selectedTag = state.selectedTag === tag ? null : tag;
      state.category = "全部";
      renderTagCloud(); renderBooks();
      switchToTab("home");
      const featured = $("#featured");
      if (featured) featured.scrollIntoView({ behavior: "smooth" });
    });
  }

  const readFeatured = document.querySelector(".read-featured");
  if (readFeatured) readFeatured.addEventListener("click", (e) => openReader(e.currentTarget.dataset.bookId, 0));

  const closeBtn = document.querySelector(".close-btn");
  if (closeBtn) closeBtn.addEventListener("click", closeDetail);

  const detailPanel = $("#detailPanel");
  if (detailPanel) detailPanel.addEventListener("click", (e) => { if (e.target === detailPanel) closeDetail(); });

  const backToDetail = $("#backToDetail");
  if (backToDetail) backToDetail.addEventListener("click", () => { closeReader(); openDetail(state.currentBookId); });

  const increaseFont = $("#increaseFont");
  if (increaseFont) increaseFont.addEventListener("click", () => {
    state.fontSize = Math.min(state.fontSize + 2, 30);
    localStorage.setItem("readerFontSize", String(state.fontSize));
    const rt = $("#readerText"); if (rt) rt.style.fontSize = `${state.fontSize}px`;
  });

  const decreaseFont = $("#decreaseFont");
  if (decreaseFont) decreaseFont.addEventListener("click", () => {
    state.fontSize = Math.max(state.fontSize - 2, 16);
    localStorage.setItem("readerFontSize", String(state.fontSize));
    const rt = $("#readerText"); if (rt) rt.style.fontSize = `${state.fontSize}px`;
  });

  const toggleTheme = $("#toggleTheme");
  if (toggleTheme) toggleTheme.addEventListener("click", () => {
    const rp = $("#readerPanel");
    rp.classList.toggle("dark");
    toggleTheme.textContent = rp.classList.contains("dark") ? "日间" : "夜间";
  });

  const ttsBtn = $("#ttsButton");
  if (ttsBtn) ttsBtn.addEventListener("click", toggleTTS);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { closeDetail(); closeReader(); }
  });
}

function switchToTab(tabName) {
  document.querySelectorAll(".tab-item").forEach((t) => t.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
  const tabBtn = document.querySelector(`.tab-item[data-tab="${tabName}"]`);
  if (tabBtn) tabBtn.classList.add("active");
  const tabContent = document.getElementById(`tab-${tabName}`);
  if (tabContent) tabContent.classList.add("active");
}

function init() {
  renderBooks();
  renderCategories();
  renderRankings();
  renderBookshelf();
  renderRecentReading();
  renderGuessYouLike();
  renderTagCloud();
  renderFreeBooks();
  bindEvents();
  initBanner();
  initTabs();
  initSearchSuggestions();
}

init();
