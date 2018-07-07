/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/index.html","e08bcb2b889c19f9a634b92f3cce4690"],["/OI-diary/index.html","05c508882bff6fc27efd962442138660"],["/about/index.html","bdb913fae1e9cccb9b1ae42f6b2e9ce9"],["/archives/2017/12/index.html","84c6eb87c81e4851a183ba5fcf309e3d"],["/archives/2017/index.html","686eeec35efb74108848c9bdb772dff9"],["/archives/2018/01/index.html","4048c2676a4c20b9a592153ec100c24e"],["/archives/2018/02/index.html","7a827c103efe8711843bf85e85aac965"],["/archives/2018/02/page/2/index.html","5112c82b1497b8f29b2aee12594b23d3"],["/archives/2018/03/index.html","ebb102a53d58239eba20bfaacf3749e0"],["/archives/2018/03/page/2/index.html","f9dab6d2de69f2a3f7e32978d56d9742"],["/archives/2018/04/index.html","f54e03b6a45532e102f252a9bc79377a"],["/archives/2018/04/page/2/index.html","71ab41d8534a948c1ff2eae1617727ec"],["/archives/2018/05/index.html","ef720f344b35b76c95c53455081c58c3"],["/archives/2018/06/index.html","32083a43c20239ecbbed76de6a6259a4"],["/archives/2018/06/page/2/index.html","05fc46d95a7687e9f9d5cd04e40dae32"],["/archives/2018/07/index.html","20c859be76d00c4c5da132c9bedec9f3"],["/archives/2018/index.html","3bafe21a740c1ca1113e4bf130400d74"],["/archives/2018/page/2/index.html","25ed957612a7e96f611987c18888fe15"],["/archives/2018/page/3/index.html","37f9bb09ce8f95a635d07d2593d01a8a"],["/archives/2018/page/4/index.html","41e7beb5a00af4147bf93cbdeeb043d9"],["/archives/2018/page/5/index.html","d1ef29a9de649edabf58f41ad086f175"],["/archives/2018/page/6/index.html","2e9f505a4a0534c897b94ccbed7c89cd"],["/archives/2018/page/7/index.html","360a1ce5ab7a34f1836d64b9cad3b866"],["/archives/2018/page/8/index.html","d7f79b013c0fd65b1abaa487751aac0c"],["/archives/index.html","e87aa6704741d7617680cf7da972c9bc"],["/archives/page/2/index.html","7dc9b1b6c8519df1c380d0b9aec9b7dd"],["/archives/page/3/index.html","51a93186131797104a253881e908cdc2"],["/archives/page/4/index.html","48d7b9fe41fda3499618e9f613f1234b"],["/archives/page/5/index.html","c467ba75a102f5da60e597a0836fc592"],["/archives/page/6/index.html","86f21d41ef69e06f7392a145a1aa03f2"],["/archives/page/7/index.html","6534c6e2073de607a4c1301b321a0050"],["/archives/page/8/index.html","293cfa61eddff2b43b9962d8850c2324"],["/archives/page/9/index.html","517e08a1db67d729f5545256d52d38e7"],["/articles/18-4-27-things/index.html","5e610d33222839c9934da0176e476bc9"],["/articles/18-4-29-test/index.html","b42c1c842a9f861239dc998ed5bbdc66"],["/articles/BigInt/index.html","b09317fa5ec5265e0cecb106d301d5d3"],["/articles/Chtholly-Tree-ODT/index.html","c693059b51dbf25bf120eb003b22fb00"],["/articles/Code-Style-for-OI/index.html","aba42375a2ef415bee67f45e9b5b241f"],["/articles/Computational-geometry1/index.html","bf72ce423a2c4e852d399aa040f5af5f"],["/articles/Computational-geometry2/index.html","eca92a15964a17a816454aa38b143ccb"],["/articles/Dirichle-product/index.html","3a99a8b71ddca3f7ba58cdc824dfc025"],["/articles/HeatWave/index.html","7e80ab5da145ff4c3eee887a48a92261"],["/articles/JSOI2009-游戏/index.html","45521911e9e336fb5d82da628ea6a760"],["/articles/KMP-AC-automaton/index.html","08270f204759db8f2cd2144c5e40f94a"],["/articles/KMP-AC-automaton2/index.html","11a3c43802d32c86f19af916a571b804"],["/articles/KMP-AC-automaton3/index.html","2e26d37c747b1ef7766d3a7ae712114a"],["/articles/Linear-sieve/index.html","b2db92e55e448e4016b566ae4eafc061"],["/articles/Lucas/index.html","372fcdd8a92c7632e211232faef55a08"],["/articles/Manacher/index.html","53c3953d40357222e36df440e12dfc4d"],["/articles/Minimum-spanning-tree/index.html","f47f575984839f4ed6f8ae154b4d76cd"],["/articles/Mobius1/index.html","8850f9e7abfd85ced13883684014c622"],["/articles/NOI2010-Plant/index.html","79914bee0cd0643edb287a7964395543"],["/articles/NOIP-2018-zero/index.html","3747ce5928f59cb91ecff1813fe512f3"],["/articles/OI常数优化-进阶/index.html","3e99988e4ef81d3ac56cec3b68147baa"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","d559011cb30009ed2e7a7f6a763a9e62"],["/articles/P1984-SDOI2008-Water/index.html","88f151192aa3253637b988c3b72ec4e8"],["/articles/P2018/index.html","03c9e9d893508e34d6284c09a2829d90"],["/articles/P3933Chtholly/index.html","c66ca01174f24767e7fde4f186a2b6be"],["/articles/Partitioned-Algorithm/index.html","65f96bc79bf9e97f102b380ee0450cc9"],["/articles/RP-introduction/index.html","0daaecf1b6805929329bb745edfc3b8d"],["/articles/Sandaram/index.html","72a7af198829d44dc26498d4441eb0aa"],["/articles/SegmentTree/index.html","35cc17c3961f44fd8526ed765243b8bf"],["/articles/Segt-in-Treap/index.html","620050eaf96b9b98af00d568f45e1c20"],["/articles/ShqProblem1/index.html","0f248b2dbab1dae5c60bbeb4dc3d7903"],["/articles/TreeArray/index.html","71e2fc4aee1021f554ec08b879274ff0"],["/articles/TreeArray2/index.html","f2272efd96122ba1e644e148d91744ff"],["/articles/Union-find-sets/index.html","3d4ad3b84b9df29f4be1b5d7e6bc88ff"],["/articles/ZJOI2007-矩阵游戏/index.html","e9947a954794b909ae7ac642103a3c20"],["/articles/a-bproblem/index.html","9a485668be0fb118c800b71d2662351a"],["/articles/aboutBlog/index.html","b723a6dbe61d5d2b4d4e639892c4246b"],["/articles/aboutgit/index.html","972089b940cef9f04e643813a42c5ac6"],["/articles/atom-plugins/index.html","e96013d58c3876fa493bf04e88ee7499"],["/articles/autoAC-lemon/index.html","8ef3cbe446518114dbec48b11c257fea"],["/articles/bzoj-3337/index.html","eb571a8e0b437dca0bc4496ce692fcc9"],["/articles/cppteach/index.html","c6694ac5435bfcf081cbbc44621bcd16"],["/articles/css-QWQ/index.html","e2b833cfecd0734269e8c1d0e3d95b32"],["/articles/dijkstra-spfa/index.html","a72752f50e82c9f6c0fd5bf66e17a59c"],["/articles/dijkstra/index.html","ca9418567a2d6fc4d99dae8cf5b6b681"],["/articles/dinic/index.html","28012eed408ae6c8bab30982c789ca0a"],["/articles/duliu/index.html","92d6ffdcdd3e8a4e37c43744c7e2c9a9"],["/articles/dynamic-planning/index.html","09123f5cfc80f10940c5268c3e08a8de"],["/articles/elementaryos/index.html","105a3f19d7ebd619e947b94bba93cc0f"],["/articles/er-fen-tu/index.html","0f4df1a3fe196abd9f438558ce42bcbd"],["/articles/fhq-treap/index.html","9a76c40062ad3c6fa823d9a340f37a3f"],["/articles/group-theory/index.html","8c768224c6d07901f14faccdcf56d7f0"],["/articles/lgy-from/index.html","5696eba8087b0f57481e972d43131bb6"],["/articles/linear-basis/index.html","2ca45498e61ca5adce0bf2a1c5e8a5ff"],["/articles/lyyz-test-2018-5-19/index.html","a642e2eafe03416ad6bb62eacd2e24f6"],["/articles/markdown/index.html","bc29e2267261842f1897ce69d9d19864"],["/articles/moban/index.html","119c6738b7a33334d1bfb6e2649b6701"],["/articles/poem1/index.html","e7a463b5e1d942e8ea83228cdafb1660"],["/articles/prims/index.html","14b10d92e6d5c9da310d165d8e6932be"],["/articles/python1/index.html","0a7b576dc0022e1af1235fb661cc04ed"],["/articles/question-01/index.html","d0d9284c59e6df577d4d5307d81ee464"],["/articles/recursion-to-no-recursion/index.html","1a01c0a95d8460d8bfcd9692ed1c831c"],["/articles/scc1/index.html","77db8d8ddb4ca340376c1a1698d133eb"],["/articles/somethinks1/index.html","1e4821679fe86de8dd42607386316997"],["/articles/terminal/index.html","307f6d144785b1d7a3f9d944f61c39b7"],["/articles/terminal2/index.html","368e86a9bed70c70abb523d5f120a830"],["/articles/test-mode/index.html","618d281b3089ac27a340b2d1744645d7"],["/articles/test-polyline/index.html","606db10d24f8a1cd7e99e8c428ffcc64"],["/articles/treap/index.html","91301b83abca8220aa19fb596277a11a"],["/articles/tubaomb/index.html","a0576cfdbb00f79f4781ab879c606387"],["/articles/use-hexo/index.html","93b66616048a4f3c7f807fbfcee0e654"],["/articles/use-hexo2/index.html","46931fa6606487e470d0969923c16346"],["/articles/zkw-tree-algorithm/index.html","78be54e95544d8f1bb7609a6e9dd238d"],["/articles/zzWA/index.html","2ba52eb68a52c4c8975a5fd9de4c9716"],["/articles/「LYOI2016-Summer」一次函数/index.html","c68679d38627825456dd86f4cffdb641"],["/articles/主席树详解/index.html","e3d642246cf86c7c30ab316608153011"],["/articles/分块-P1471/index.html","538a692914a0ed4228ba7c3fbb5f92da"],["/articles/可持久化并查集-rope/index.html","a86807a09287b4ca90c1bf8065badb89"],["/articles/洲阁筛/index.html","433fc0e1e7d79ca36d053a1e32501ab1"],["/articles/生成函数/index.html","8208d8d3ee4e308025d696314fd60f85"],["/articles/网络流-二分图最大匹配/index.html","4327b891201c7f7311e890e282c05f94"],["/articles/自然数的和/index.html","4af1f1fb879a5b4e0470f78ac3f28e55"],["/categories/Blog/index.html","9b7b670f2c068c4632fdc82b96e815b1"],["/categories/OI/index.html","1813aa9e4ac2b369d2377dfae86bdacf"],["/categories/Settings/index.html","83bb6aff3943dc8d7be570ead871c23f"],["/categories/Shq出的大水题/index.html","2ad61db1a777f2357090c73e01a26823"],["/categories/index.html","516266c57cb347bf047b4e56a8455b34"],["/categories/system/index.html","0270240a6175a1a06c09096e296e85b0"],["/categories/《RP导论》/index.html","be2d8d158ce7d45df172d52877bb182b"],["/categories/《Shq出的题目》/index.html","3cd632458a385d68d6c0993ee65d223b"],["/categories/《Shq笔记》/index.html","432bf18dc1a6571716b0579448c19e66"],["/categories/《Terminal教程系列》/index.html","5893d0310264065fe44d59228352dfe8"],["/categories/《hexo的玄学用法系列》/index.html","f070de2913a205c8b2937da95b13a4b9"],["/categories/《人生苦短》/index.html","47f3b3cb30adf2e75e9b0e8868ba3205"],["/categories/《教程》/index.html","a02e27a6bd37447d4f875cf6919321eb"],["/categories/《最强的Lgy》/index.html","64ef4a79ebc6d8b36c8ee869ae4b8551"],["/categories/《烟雨茫茫》/index.html","53d1a7f2b67c395fe74da1c1e834db48"],["/categories/《玄学》/index.html","eac306cee056913a608eb1f58014b0c0"],["/categories/《算法模板》/index.html","7ee639d304978614a2835f9e8ad8dea8"],["/categories/《算法详解》/index.html","3d4965e6dd0ee5c6503dfbd682c7ae20"],["/categories/《算法详解》/page/2/index.html","028b0ebc0eb969a4b00ae70a860b747f"],["/categories/《算法详解》/page/3/index.html","a9e78e2ad833bb83136bbe1fd16abb3f"],["/categories/《题解》/index.html","08f8fb41e06402ffb1752b8f1bdbcdc2"],["/categories/「日常卡评测机」/index.html","6971e02358bdf81c638110cc56276cde"],["/categories/题解/index.html","734cbac41ad2af130b50229b51debb63"],["/comments/index.html","4e38559016cc83341800c7385ea15867"],["/css/main.css","01c764088e628f07a982f065ec58445e"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","96aa2b596d32504b86f088ed10bd6e7f"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","07b33becbf1fe7e7a0e16e924f213330"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","e5cf784e2ab7a54ed44888cbfd5139c8"],["/page/3/index.html","55c819103b4037650a6501109091f2af"],["/page/4/index.html","d9c2ff99979f433604443b5ce0a81887"],["/page/5/index.html","603f5b6cc8bbf3a3e28e0ba99bdc01fd"],["/page/6/index.html","47b9e09dd2d5ca7f0a585713eb015ea2"],["/page/7/index.html","b61b55a56da8b73a877dcbff01ec88bc"],["/page/8/index.html","1a30c7f89212de7a4620fdc182adc8bc"],["/page/9/index.html","6870b208769d8b46d3adc9150275b293"],["/photos/index.html","1ac583efafb1da772b4b1c90bb1ff151"],["/sw-register.js","ba29520533629cd3af0ba8f0d5c459ec"],["/tags/AC自动机/index.html","f2eea5e3a292ab3322d457d996b41595"],["/tags/Algorithm/index.html","d292ec19c41f7a9689bf59eb2410fdc6"],["/tags/Algorithm/page/2/index.html","5f6dcde254d6db1346995e51f607d17e"],["/tags/Algorithm/page/3/index.html","862eb5640d4cd3615b93951653886300"],["/tags/Blog/index.html","683c0479b8dfdefa6ab4049e5b16e750"],["/tags/Chtholly/index.html","75fb568705a715ba212b717c1f7894c0"],["/tags/DP/index.html","520f8f4c481ad091c29080e0b62ad27f"],["/tags/FFT/index.html","62906c1a212820a07eec88ded287e34e"],["/tags/Ford/index.html","9191cc61d940cdaa95863e7b734a421d"],["/tags/JSOI/index.html","f0c209f9cc576d0a94dda9acf2954b96"],["/tags/KMP/index.html","5801c17676f8688d2f943a0b612c8d70"],["/tags/KMP自动机/index.html","8c9d4885cf699e345b4a62f5368221cf"],["/tags/LYOI/index.html","3d4b2a1137f04b44cd75ce0836edda97"],["/tags/Lemon/index.html","ae0d3ee228e57a85acf2f09ea0f826bc"],["/tags/Lgy/index.html","72a4aa4f2f84d31306834114a93a289f"],["/tags/Lucas/index.html","698f6e7ea54e8dfc98dd5bb87579a576"],["/tags/Luogu/index.html","0919481ec4d6a4c93561812130d0f46d"],["/tags/Manacher/index.html","b050a4b0097e63b6f2714c7427ca384e"],["/tags/NOI/index.html","7778069162e68218a3f48ce198e8ed70"],["/tags/NOIP/index.html","7f4690d8c37cb647cc9104f21ed16917"],["/tags/NOIP2018/index.html","da61721eda384aef2b96271fa620c5a4"],["/tags/NOI导刊/index.html","54aed9322fd31ec9a6b42eec071644b7"],["/tags/NTT/index.html","382f50f1e13a5e847c29af2ff31efc01"],["/tags/Problem/index.html","077a97a3de2ac9e7a081d22cf0277b2d"],["/tags/Problems/index.html","a6b12d6da960d897f1cb5b9eccb8dd05"],["/tags/RP/index.html","6c7eaccb1d0696242ef830a52820ae46"],["/tags/STL/index.html","500b8f7ca6658f3f3d495fc4cfca978d"],["/tags/Splay/index.html","ed238a811d08d94a01b7c8633142913b"],["/tags/Tarjian/index.html","3882a4069d966d044dba80dfc4a143e3"],["/tags/Treap/index.html","302efd70c480cc81bb7304067d126991"],["/tags/Trie/index.html","32c9f03e981e57ddbd16f864fb6fa005"],["/tags/USACO/index.html","4da7d101a0dd8cc423504f5dec13b2b5"],["/tags/ZJOI/index.html","405e070d3b63bf0f5dfe46430e3948ac"],["/tags/atom/index.html","06b153a41ccd82db7b15c4304be6a799"],["/tags/blog/index.html","5291050d2d026e6a5e4cf7d5f5160172"],["/tags/bzoj/index.html","22884e8c5dd6e42131737e5ada3467eb"],["/tags/css/index.html","573d873ad8c02fef89be9328418bb015"],["/tags/dijkstra/index.html","c2930ad914104bf8f35b167c9ea09282"],["/tags/dinic/index.html","3cb047ba864f08943a65a568f780e20d"],["/tags/fhq-treap/index.html","fffde36e1ddc001f3827b19b43c3ac84"],["/tags/git/index.html","3f104ccd6716213bab87892704cf6a3d"],["/tags/hash/index.html","a281e66923f20841f53f8f5f6b6fdeee"],["/tags/hexo/index.html","07d00d9a94f287c89d774cf22b836922"],["/tags/html/index.html","372ca2191fb4a1aa46f7bbfb3d23e209"],["/tags/index.html","b0e0762ed1b443b12757ec3638b6cdff"],["/tags/lyoi/index.html","fd4f477d92455262bca0f8ef53a8a1f8"],["/tags/markdown/index.html","7218619e538afb4df61c954fa097fdc3"],["/tags/plugins/index.html","a7ea15879db77aa59d53933cd36fc85f"],["/tags/problem/index.html","d54e1e8432f7871723266c71e3dafbc6"],["/tags/python/index.html","b7b50e1efbec7385c3f662a7928e402b"],["/tags/qbxt/index.html","dd6ae3da2886af4130bb27f9c4044581"],["/tags/rope/index.html","5612116d2ac0d96b23051d0ce83aff11"],["/tags/spfa/index.html","f63ba8cf9538a6cbe5893cacac8d9f3a"],["/tags/system/index.html","e41efed211017d87dff0530ab16aba19"],["/tags/terminal/index.html","59127a29670c56f014932cca8ca59a2f"],["/tags/zkw线段树/index.html","9dba243d5141287306f3a6c8c3286ebf"],["/tags/临沂一中/index.html","3d738108621e56371dacf1211ca21490"],["/tags/主席树/index.html","d63743bc86d95c1e81d1252d5144e283"],["/tags/乱搞/index.html","76b77ddbaaab1f31d73c27f70cfbf871"],["/tags/二分/index.html","1e1463e5dfa5b1f68bd8763604416e5a"],["/tags/二分图/index.html","f2b35cc22d4407f78be27299e7c33f55"],["/tags/二分图匹配/index.html","c600a8b866a86192ec59659281b35b5b"],["/tags/二分图最大匹配/index.html","53f1f38db25230dd26ab4e5836dc513e"],["/tags/二叉搜索树/index.html","fc2b41e8170e5aceee661891144632e2"],["/tags/二叉树/index.html","a2229697df87b4161c448dac16789f9b"],["/tags/代码规范/index.html","8c806cb6d2b2dcebd07aa7cfd0740f0d"],["/tags/优化/index.html","6ef9cad765391d9425ef4d5a92b04aa6"],["/tags/几何/index.html","c1dc490fddd4e4622687caea2ae0dae3"],["/tags/凸包/index.html","987b299f41c5d2e2892fac3b5be12d29"],["/tags/函数/index.html","4b0b654fec594948c6795643c6a9932d"],["/tags/分块/index.html","c63e133250a3d24ffab2e424b76b8dbd"],["/tags/初等数论/index.html","323f4426d9f73779943b4c753477e791"],["/tags/前缀和/index.html","2159fcfd98f3890c40a3cd16128ffa0d"],["/tags/动态规划/index.html","586c4c7567c2b7732d93b42ceb440c67"],["/tags/匈牙利算法/index.html","3112f481bb6e1fa2fba2ca7734dbb4ba"],["/tags/区间/index.html","2082e906bb7f6c5681047190ce760f0b"],["/tags/区间操作/index.html","64271a0aba69d08f224052d8cb5f5403"],["/tags/单源最短路径/index.html","07f420b7b21754624dd462f4891a1338"],["/tags/博弈论/index.html","36c5e823297912d3c8e9a48bb28b5b70"],["/tags/卡常/index.html","decb349221b2202354a7c180f11109ab"],["/tags/卢卡斯定理/index.html","561323b6c2dcc4118e167ea201238d5c"],["/tags/卷积/index.html","6dd792f7691fa547e49a5bab770e2d51"],["/tags/叉积/index.html","2ead7f2104841ca0b692ef469c2240de"],["/tags/可持久化/index.html","4a9601f8ed898958082847674ec913d9"],["/tags/向量/index.html","b14da8b2f0063a068794445734e0745e"],["/tags/图/index.html","bcecbb05014e4ff896b870d74eb5702f"],["/tags/图论/index.html","dc6e0ec0512b7d8756c75951ad7f7c5b"],["/tags/块状链表/index.html","c58bb9dff07dd931310c17929010b494"],["/tags/增广路/index.html","f2c455683c05e4fb389014cd483444b3"],["/tags/字符串/index.html","3c44b4a1ce631e6ffd6d94b45255296a"],["/tags/常数优化/index.html","690b8d1980de6460900bc9cd64133c9e"],["/tags/平衡树/index.html","46c131f506eec8cd6463eb9be724017f"],["/tags/并查集/index.html","1b613201a13215db8a461d70e537070f"],["/tags/强联通/index.html","a760dd667dcaf4ed0619ab4f740a193d"],["/tags/快速傅里叶变换/index.html","c72a49c2d1a6ee0da6322ede0ad24c6e"],["/tags/总结/index.html","cc104fd18f263d7286d233c42b2fa040"],["/tags/感悟/index.html","bfc7de99de8f88d69dfc7b74560f9cdd"],["/tags/技巧/index.html","9cbdeeeb09dce4f68597019fc1808924"],["/tags/抽象代数/index.html","0efeb5b1f357b2275b2c66bf5b8b4c46"],["/tags/教程/index.html","7dde49cd74d447e640c141e907ba92d6"],["/tags/数堆/index.html","53cea55a55dd85c7aa2b0552504f230e"],["/tags/数学/index.html","a9c90b34460fb7d81a28932fc1a19143"],["/tags/数学/page/2/index.html","bcd3d3d908bbf863a6cf0e244cf86619"],["/tags/数据结构/index.html","6c566966a51dcbd0620252ffc570d406"],["/tags/数据结构/page/2/index.html","e17867b8ea03f37e4ec6aa14c39680ea"],["/tags/数论/index.html","002108c8fced6e1089b82198f89da37d"],["/tags/数论/page/2/index.html","ba92757340407b331bc6556760209b48"],["/tags/文学/index.html","bc48a7bd188da00a0c925d18944f83fe"],["/tags/方差/index.html","67d269c055276c1671d2d73ee0849844"],["/tags/智熄/index.html","fee4bbf67a92bc7df85f86b674c65b68"],["/tags/暴力/index.html","803159e13314fb37e846d8e6b387cc35"],["/tags/最优化/index.html","18c92c969f1a9d6b91d6b9d1ed39daee"],["/tags/最大流/index.html","68aafbeb6d92bf3e2ceb90771f148968"],["/tags/最小生成树/index.html","9d8d445345327444f768d459c88cd239"],["/tags/最短路/index.html","c77d808ef1a8081c7b07e421ccf4fbd8"],["/tags/最长回文子串/index.html","ece1701e424aa21768fadd48428bc295"],["/tags/极角/index.html","125edc01a264397b01441593c170d135"],["/tags/染色/index.html","5a578bee53f0188e9cffbc6e1d48a666"],["/tags/栈/index.html","593cc80ae6653a031ead75ecd1d0c142"],["/tags/树/index.html","8dbc83a8ec0c85ce59914bfe0f25b3cc"],["/tags/树剖/index.html","354ac14117b7abc10d014d6569be041d"],["/tags/树套树/index.html","f45545c580e6e50e0591a281fa6f7545"],["/tags/树状数组/index.html","87ffd475c27a1dcb5b9c90bced934054"],["/tags/树链剖分/index.html","8b6e59701e8ea2cbc316bf952d0df59d"],["/tags/模拟赛/index.html","3ca3389d72ec882f1e6fa8b1414841aa"],["/tags/模拟题/index.html","7f5ff6da0dbec2d3b77c01cdb75fd2aa"],["/tags/模板/index.html","4f6c099431b7bfde3dd8b2cc6a4643be"],["/tags/模版/index.html","2ce02b6cbae3092bbb157c4ad027d9b4"],["/tags/模版题/index.html","56abc7e1c3a779cde9675338b77382ef"],["/tags/欧拉筛/index.html","ef40cbc3eb78ecb5da017c2838288485"],["/tags/毒瘤/index.html","f303a650737222a3fb9141c52f5d25c3"],["/tags/测试题/index.html","52961cd59175e84c19b5807f9e82dec2"],["/tags/济南/index.html","a0f04f9ec7f6a85163561da796d9d8c3"],["/tags/清北/index.html","f20ebbc6e2d5b35fcf49efd1dae7115e"],["/tags/游记/index.html","6f0084630e369488da4c5fd85f8b7de6"],["/tags/爆零/index.html","94f7977707a44f0fd3f6dfe9c1ec839f"],["/tags/玄学/index.html","9b6cdea38cd49faf5686610ebe387f2d"],["/tags/珂朵莉/index.html","ff31de112e1ec99259b275a37b900ad8"],["/tags/生成函数/index.html","3938f0b60041dfece33bea84dffee339"],["/tags/瞎搞/index.html","9a7513b65900a139f1a8a25da8289cf9"],["/tags/矩阵/index.html","9276b8e9507553379f2bf076280e3cea"],["/tags/矩阵翻转/index.html","5fb0e7b5b6ebb61959db1a1c79d6fd97"],["/tags/算法/index.html","74ebcf030d47bd9e76a9704fa44e3271"],["/tags/算法竞赛/index.html","9362344b65fe6a8243409ed7c5d8b7e0"],["/tags/素数/index.html","53459d90d926eae5c3df5f46837b036c"],["/tags/线性基/index.html","a37922cb496a5bfcae232887fe36b5c8"],["/tags/线性筛/index.html","21319e65ef33f789ff8a35e8ae8bef54"],["/tags/线段树/index.html","035e0a6fb61b986f8edeaa31c9acefc0"],["/tags/网络流/index.html","e44d559768a24b22c932fdf017357ce8"],["/tags/群论/index.html","d42d8f38f63eb841c216a702887a3226"],["/tags/自动机/index.html","f270cfc64214190308a5b6d47c3ae139"],["/tags/莫比乌斯/index.html","17b86dff279edc315e1ae8576bd8c10d"],["/tags/莫比乌斯反演/index.html","474a7b734336e4afb9c56f73333e47db"],["/tags/计算几何/index.html","bfe539fd3783af977bd1a8ff4db88284"],["/tags/证明/index.html","bdf7e6a4a395d311773ce41190a81b4f"],["/tags/评测机/index.html","b9ca5b462640d57260dbebf261f3337a"],["/tags/诗/index.html","b39ecca291bb1fb726a2fd1e058e2c0a"],["/tags/费用流/index.html","fc8af3514846ab0abcdb1c8833e9e34c"],["/tags/路径压缩/index.html","d7e238824c46191989cd64e3cd3495db"],["/tags/逆元/index.html","9a3f46b8b9efbf1dc40a86e3587d95c4"],["/tags/递归/index.html","f23f9109c8996e42baa58fee706a1120"],["/tags/递推/index.html","9491e24865c9c20d15455512ff5adf72"],["/tags/邻接表/index.html","8ff71c8e929e51f76587dfb3f4a7644e"],["/tags/随笔/index.html","c877671a0d9e19ddd3b0d52992b7fde9"],["/tags/集合/index.html","7540118eb027144e722dc53eafaee608"],["/tags/集训/index.html","75170fe4ce9151615684173a62ad5740"],["/tags/非旋Treap/index.html","2eee4bc9f8c73f628860581eb514db8b"],["/tags/非递归/index.html","64427e31ac725f8c08b8faa94f6e7951"],["/tags/颓废/index.html","82ce17fab1eb75be6d5d0b16426cfb10"],["/tags/题目/index.html","8fa0c92f08c96a74d882d325bfaf9790"],["/tags/题解/index.html","d02bdc11370c52f094850356a95eda9b"],["/tags/高性能/index.html","56076065039be283fadefb7908b6f1a1"],["/tags/高精度/index.html","761236c540b13f6ed39584d56bc212b5"],["/update/index.html","4b8a16421e0b9f79124f6b0a908d48f8"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
