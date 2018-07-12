/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","cfec1800b438219f53e4de7654768842"],["/about/index.html","a3e2753b8c3084f5deb2320885b88d8e"],["/archives/2017/12/index.html","4e923b919865a20c3bebe7091fd1e0a9"],["/archives/2017/index.html","d328f424dd4e679d05b42b9ac2353964"],["/archives/2018/01/index.html","b339b05f5325dca2e142d5efa47c7072"],["/archives/2018/02/index.html","859f1990adb20248283ce329199014e1"],["/archives/2018/02/page/2/index.html","31c1dd3feb4916ee7586e043fdcab0a8"],["/archives/2018/03/index.html","9375dc015ffdc66285cecda2cafa53ff"],["/archives/2018/03/page/2/index.html","5f3b66c59b8f076b4eed7a2232057223"],["/archives/2018/04/index.html","4133a89dcdfe1c5a6929a6df5cdd48b1"],["/archives/2018/04/page/2/index.html","0eab7322edabd25a5a0875f441238a48"],["/archives/2018/05/index.html","470d7413327bb018c7fb9b2b328f4e00"],["/archives/2018/06/index.html","ad96432dddd7aac3f4219d758272a5ea"],["/archives/2018/06/page/2/index.html","bee2303d9e3bdbf2a2d33516bad33209"],["/archives/2018/07/index.html","4c3691ef78297d1dad8c24ae05eaa514"],["/archives/2018/index.html","1ee36fda7308d9647bcc4bd0ad7294db"],["/archives/2018/page/2/index.html","b366a6eb28d92ea610601156949d4d77"],["/archives/2018/page/3/index.html","21ffae2e8dc52df655d3f598d40f1d61"],["/archives/2018/page/4/index.html","12028c0f8d7f6d17572a2a3bfae0046b"],["/archives/2018/page/5/index.html","274f10544073be8e7a3e915f9163a0ad"],["/archives/2018/page/6/index.html","947fcea4507443a27ba2079ec72e8a82"],["/archives/2018/page/7/index.html","1370758c4aa270633dd7d7fa91d2e14f"],["/archives/2018/page/8/index.html","65edcc50985f1181683429c19c7753a0"],["/archives/index.html","ced0a77a214fb57d3d9d57782aeb2a7c"],["/archives/page/2/index.html","117611ee8c654eec495a00ab6db98856"],["/archives/page/3/index.html","843e48ebbf2b918828058ac83789896e"],["/archives/page/4/index.html","83a6d669ec7d6ee1a41efae0df61105a"],["/archives/page/5/index.html","51bd3591dbb1a54d3b2e99672c2b8787"],["/archives/page/6/index.html","92b76bae281cce76817c6aae330044c6"],["/archives/page/7/index.html","28aca0b7d2a8c36d5c6bbf8406179256"],["/archives/page/8/index.html","2c2d8170ad7e19721da01d5e5b6660ea"],["/archives/page/9/index.html","a71447692b27aa65d3493cc836971bc2"],["/articles/18-4-27-things/index.html","a33970f0977f8c97f407f69f64e8c52b"],["/articles/18-4-29-test/index.html","fa911354093a349e1560bca0dbe30745"],["/articles/BigInt/index.html","07c0c610ef934c5f4f613b8d3baf46ab"],["/articles/Chtholly-Tree-ODT/index.html","414b484067628ff9ab8cc76b34873873"],["/articles/Code-Style-for-OI/index.html","5b0b4754a113750b284c89d92191c97e"],["/articles/Computational-geometry1/index.html","2d78c4d6a784f16670b563c590e06a06"],["/articles/Computational-geometry2/index.html","e49130cd38dbbc0fae2ffedd93961072"],["/articles/Dirichle-product/index.html","bf1bca05972220e3ec7cc3255d1e9ae6"],["/articles/FFT-study/index.html","6d1ede8fb44c8a3698083ed6876774b7"],["/articles/HeatWave/index.html","55d1c60932af4a927f22b88d9734d079"],["/articles/JSOI2009-游戏/index.html","468570de9f7fb23db0eed7b87148a207"],["/articles/KMP-AC-automaton/index.html","dd1449a84cfbeba18fc05b3ceb9b8b6f"],["/articles/KMP-AC-automaton2/index.html","94c1d3efa05f8a19e3c685b86493faa5"],["/articles/KMP-AC-automaton3/index.html","d316b85cdb64f3a492c876041d59ee53"],["/articles/Linear-sieve/index.html","52a24af5336f1f93e979e2cab695d60e"],["/articles/Lucas/index.html","562d884efbead817de90addfc590ccd1"],["/articles/Manacher/index.html","b9d0da8eb7467c2958f9a1f6776187b8"],["/articles/Minimum-spanning-tree/index.html","67c21ab200991ff6208762c510641b85"],["/articles/Mobius1/index.html","8cdde96be8422411d222b662f3c4cb34"],["/articles/NOI2010-Plant/index.html","198a8bce01d2d56837a7bf71e741d3a5"],["/articles/NOIP-2018-zero/index.html","023326816e60b66b5a9486d1336b14c5"],["/articles/Network-flow-Algorithms/index.html","74511eab9c03880b5d7f4c2519f7e0b8"],["/articles/OI常数优化-进阶/index.html","dc609361621dc78d1ce85b02692d2ae4"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","6877bd917c63e7ebc674ab229ba1b68d"],["/articles/P1984-SDOI2008-Water/index.html","7a5614a050df88a981b911cb2377a50e"],["/articles/P2018/index.html","668dcd258e290fadee5f972b4754ad2d"],["/articles/P3933Chtholly/index.html","f185a057646555c07399622df4dd5d22"],["/articles/Partitioned-Algorithm/index.html","8e1b76b08317cb2d336a1dbec400d3ed"],["/articles/RP-introduction/index.html","6733b44c4abf2affdb4eb7c0c000ac42"],["/articles/Sandaram/index.html","4848e67534675278eee4de65d4baacb7"],["/articles/SegmentTree/index.html","a2d22a700909b04772c79c969ac1fe46"],["/articles/Segt-in-Treap/index.html","b413bffeab3b4d93c22e21c0b03434b3"],["/articles/ShqProblem1/index.html","2770e4e198027508a05522550422f823"],["/articles/TreeArray/index.html","f86fa350e2e5789fa9efaf098f87e811"],["/articles/TreeArray2/index.html","9bb75620c3fbdd8754118441f457e315"],["/articles/Union-find-sets/index.html","e8f0f1bb7d2e9b94d8b60cf7e8196b13"],["/articles/ZJOI2007-矩阵游戏/index.html","a65cee5f3cc4b85a3b39787e6da4bde3"],["/articles/a-bproblem/index.html","7d891c8399cdd0edc2a92024a48935bd"],["/articles/aboutBlog/index.html","ab1e413c2c5ced4e36e3d65de4dbcd95"],["/articles/aboutgit/index.html","94551f17588943ae29a29ff64b04cc8c"],["/articles/atom-plugins/index.html","3f0478e20eebe90dced42242d8f5e059"],["/articles/autoAC-lemon/index.html","cba2e27c5601ab0bcb3e5998bf01114a"],["/articles/bzoj-3337/index.html","794b7e28f14f4becc465e9b554ae2959"],["/articles/cppteach/index.html","6937693fd27800801fafdf59e24e7d29"],["/articles/css-QWQ/index.html","0aa433c5b0beb725755da48b26c6addf"],["/articles/dijkstra-spfa/index.html","44d701a79185b1f2ea7066aba3091e34"],["/articles/dijkstra/index.html","e5f413983c69830a05295528d7537abb"],["/articles/dinic/index.html","b2ac559238987fdc2a9a12ee24c36e51"],["/articles/duliu/index.html","30c17a6c604a792e2c4e995949690eaa"],["/articles/dynamic-planning/index.html","d6c403c457f100d8110a87c39a0c6261"],["/articles/elementaryos/index.html","ea526c67dff4faecd573e9ceb8f2d065"],["/articles/er-fen-tu/index.html","26cbe5c81ee75f322be54e90b48ff2b8"],["/articles/fhq-treap/index.html","0928bc9197bc71c41e44719ccc7eab0a"],["/articles/group-theory/index.html","8aa6e245a4146bdb3f22a8b760e8dea8"],["/articles/lgy-from/index.html","3bf4132f17fb246849e6cb53c60c0a6d"],["/articles/linear-basis/index.html","6a40470a608cd332f9f4220cf366c684"],["/articles/lyyz-test-2018-5-19/index.html","aca3084b079aa49cf54f04f431f8ccbb"],["/articles/markdown/index.html","3aeec1db26ed9a532f0ccf7d9e9ac3c1"],["/articles/moban/index.html","1959bc82bfaa5a3bdcb0229b76b283cb"],["/articles/poem1/index.html","d4c36bfa8792146a071125a931dc1a88"],["/articles/prims/index.html","a8b6e62fe833c6ee1e32f0a1003ca071"],["/articles/python1/index.html","ac2e442c7d29369cec9200c9261fa2ac"],["/articles/question-01/index.html","9e60a11011912d1f157b3f55a4e92a4c"],["/articles/recursion-to-no-recursion/index.html","b549fe9b4175f4d53c8f9db45fc8ed45"],["/articles/scc1/index.html","5ddbd61d55887a662ec6025b961b5dff"],["/articles/somethinks1/index.html","3369f41b730a944692d9e1e564483619"],["/articles/terminal/index.html","2e29afce3770504851af063b909a93f7"],["/articles/terminal2/index.html","c9229ef1f1659436656360ba37f7ade7"],["/articles/test-mode/index.html","dc2c0cade9a821a5b4dcdb96299b8ded"],["/articles/test-polyline/index.html","c893bdfd0fea87ac42428eaf74e18057"],["/articles/treap/index.html","50f366c5a862af25c6b45df973344631"],["/articles/tubaomb/index.html","c5718a94cf98d7a8b374b409fb5fa1cd"],["/articles/use-hexo/index.html","aa30d083a11d1bc4d5a9854017dc069e"],["/articles/use-hexo2/index.html","3c370384ca82b86d0bb820c45fb3f67a"],["/articles/zkw-tree-algorithm/index.html","65989b13796bfa62e0094e5861931e81"],["/articles/zzWA/index.html","97a4903891aa3cf8733a940f7d8153ed"],["/articles/「LYOI2016-Summer」一次函数/index.html","d65cdb504c169d32716a69ce276e11e2"],["/articles/主席树详解/index.html","cc820387e645cab80c57815f8437a87d"],["/articles/分块-P1471/index.html","06689dd9bce16714a6d8b00293b56801"],["/articles/可持久化并查集-rope/index.html","5f05cc0e8ee862509461b19254f6797e"],["/articles/复数表示/index.html","09e6478dfd77c781abd4dba8491d378d"],["/articles/洲阁筛/index.html","5883675764e7709b212a7a29065759f8"],["/articles/生成函数/index.html","6dae87618233d443ecbaa093b6d9a471"],["/articles/网络流-二分图最大匹配/index.html","e3c4fbd0b73ab77c3e002520fb3428ec"],["/articles/自然数的和/index.html","ec89e09a978dd66514158ddbe811f135"],["/categories/Blog/index.html","ed13857d16fd1e373851faeca1f4697b"],["/categories/OI/index.html","730afc77c779f1f2b885a59afbbdec9b"],["/categories/Settings/index.html","cfff24852c9e72491ccbd6332029359b"],["/categories/Shq出的大水题/index.html","e7ac9eddf5031c9ed2cfac3394a0aeb8"],["/categories/system/index.html","d9ab1efd12779e0624a821f536c6abe7"],["/categories/《RP导论》/index.html","94604ee710c4277bf15a499d365ff2f3"],["/categories/《Shq出的题目》/index.html","b24fd41bf1a08138fbf48878817c48e1"],["/categories/《Shq笔记》/index.html","a91fbaa46b5325b0a794fdad82ddb0f1"],["/categories/《Terminal教程系列》/index.html","ae2e3e36e0b9aa51232123492b10153a"],["/categories/《hexo的玄学用法系列》/index.html","0d9ef57a4b55b04337492dd80231a65b"],["/categories/《人生苦短》/index.html","d1a112a7dd28ca0350bfa2b6c8eaa798"],["/categories/《教程》/index.html","af847c07f04c3095822f76dc0b1ad8da"],["/categories/《最强的Lgy》/index.html","ad7b341b3c53319ec266438682106f10"],["/categories/《烟雨茫茫》/index.html","63074ee9e3fb88af18004b16f9f369c5"],["/categories/《玄学》/index.html","4cf4fdae2bd20a4734d72da19fc4e8b2"],["/categories/《算法模板》/index.html","ff7e77c98d7547e980b59a3a48d0089c"],["/categories/《算法详解》/index.html","8f74e9d5b4ed739db45573ecfabfe683"],["/categories/《算法详解》/page/2/index.html","2a10ab7febdfbfa1c3c09a4b7735370a"],["/categories/《算法详解》/page/3/index.html","18896b7abffa1be67f894bda7d7c1abb"],["/categories/《题解》/index.html","b4bac5cf01cc77b31f18ae3fe2ef34c5"],["/categories/「日常卡评测机」/index.html","dfc8ed45b23ea836f952db944cabc40f"],["/categories/题解/index.html","886ab4b12e2791cfc66eb45179c89f41"],["/comments/index.html","93dbdf3134ab328a2a960bcaad5fb134"],["/css/main.css","d8766aeefa4022c4841d84ba4777f8a5"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","821c55c50e74c1864c29a762f7b5541f"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","5cb85141173aa52177a286051fd037ff"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","6d775fd8638d97991a6e3b0fdf98210f"],["/page/3/index.html","3794b4c96e52d07511cf2b656be902bb"],["/page/4/index.html","b809b3d6efb42bf3ca145dc86ad45f98"],["/page/5/index.html","0ca567b624679df3ba8b313aa13083c8"],["/page/6/index.html","22712df293c8e8a0f35d514f3d19a492"],["/page/7/index.html","e463ce0b6ff075d88408b223d8703dcd"],["/page/8/index.html","7303b627016954532ecee67b98882b31"],["/page/9/index.html","d5bbf756d104b006944ac4fe08219e2c"],["/photos/index.html","373b68ab2a418a4df790adbff3251d2c"],["/remittance/index.html","09002cea2641b4389e9000fb4cfd0031"],["/sw-register.js","af8d439eec4fc39cef58f89a730376bd"],["/tags/AC自动机/index.html","73e5fa307a3d5c3b3acb725aebdf22b8"],["/tags/Algorithm/index.html","cc51c80ed1ec262af743c3ef241a5721"],["/tags/Algorithm/page/2/index.html","306a6e1ccc8f0251f2ddfbb6afebe200"],["/tags/Algorithm/page/3/index.html","4d09169b2247371ff5de4a4e5d40e7e0"],["/tags/Blog/index.html","2f3e2e2b102e0eb6b9c7e4d29b3af084"],["/tags/Chtholly/index.html","2ecc666804a4e1fd5ab42352f9968d73"],["/tags/DFT/index.html","5faf5f0c3aca70d32260136a32a3162a"],["/tags/DP/index.html","93c1149ebae5d09d057d72039495064e"],["/tags/EK/index.html","85e65beb3c0371425c48ce28b28a5ea4"],["/tags/FFT/index.html","1b520c37f14f030ece8a5bd5b5fb3c6c"],["/tags/Ford/index.html","6fd1a2ad4ecea10435a8d3bc9a7355ad"],["/tags/IDFT/index.html","edd22fed420e08484c1fee429a3974db"],["/tags/JSOI/index.html","c8d26c84e896ce280b71b22ef6b15a57"],["/tags/KMP/index.html","bcf73a5dee4bbadf0a904f918e94da15"],["/tags/KMP自动机/index.html","61fc7379b9e3fd0fd72ab07ace24a123"],["/tags/LYOI/index.html","c6668c5ae90c1a861ac43987f02ff951"],["/tags/Lemon/index.html","983d57c4a137ca3f47d0b7a94b841bf4"],["/tags/Lgy/index.html","ee38f207204df6fdfd57a81ed013a0f3"],["/tags/Lucas/index.html","46def5bbb54c1b31c84fcacccf4be03c"],["/tags/Luogu/index.html","341527ab0ee5837b0526f875501e67c5"],["/tags/Manacher/index.html","e8a14acd27ff4cc25224c4e2898c5c85"],["/tags/NOI/index.html","aabc92a6f0e4fb69e029cc80feb38c60"],["/tags/NOIP/index.html","54e3df7ecf3f2ad17ff6f0471830d241"],["/tags/NOIP2018/index.html","fb556f420c9fd617425ba1d50288a193"],["/tags/NOI导刊/index.html","4bcf7a22a2b70640d5ff2c9e68435555"],["/tags/NTT/index.html","843d3e9cce5ff63eee92897449d046cc"],["/tags/Problem/index.html","b09a57597c199bbafe44303a32d023ee"],["/tags/Problems/index.html","ec47d3f7ae68b27e77e61558cd762902"],["/tags/RP/index.html","69c2f81c9457e935caa720638b702cbf"],["/tags/STL/index.html","e7e8327f8b575b593b1e465ea74bd2d4"],["/tags/Splay/index.html","a5493b7eaa8cb0f2b6e0bec296847698"],["/tags/Tarjian/index.html","323bfe2bbc3424b1e3393cb870393a84"],["/tags/Treap/index.html","a00f6d780e5e6270c2f76e1068290492"],["/tags/Trie/index.html","40230b6cf62202c7925f720f22c52165"],["/tags/USACO/index.html","93888550ce1937f5a2c3d32433118369"],["/tags/ZJOI/index.html","1f0bb240849f32bae136c0be5a53dd33"],["/tags/atom/index.html","5d2d5ae6b377fb018d20fc727bf7af46"],["/tags/blog/index.html","e6afa78d4e8c7b69251e12735ec51fb2"],["/tags/bzoj/index.html","c54143347891fe0b32b59e3228ff1376"],["/tags/css/index.html","2c3aa1092fd4de7104b61c4db82541a9"],["/tags/dijkstra/index.html","d11cbe521279451f4430a6ba5b26d590"],["/tags/dinic/index.html","2bf7a74d99ee8856c715d8fcdf3fa329"],["/tags/fhq-treap/index.html","7336eae8176602c41d1ef61c59b0866f"],["/tags/git/index.html","c7737001e903ffbdc19a0fef5369c50a"],["/tags/hash/index.html","2390d20caec4415cf32675b08a0c1739"],["/tags/hexo/index.html","096b3ce2edf9fa3f377ab4dbe18e72ea"],["/tags/html/index.html","0afca5222fb8fe178918764ba29351b6"],["/tags/index.html","66d305a25177c8b31523b0cdbd2f784b"],["/tags/lyoi/index.html","d03be43fb1c9e0a8a603e2ab24782fd8"],["/tags/markdown/index.html","eddb32d80da73f4d4a1348fc027bc7fe"],["/tags/plugins/index.html","d9d024edd4251ccc4fe8538f873ae873"],["/tags/problem/index.html","93738a9b743f2d9562adb0491f7b5cd5"],["/tags/python/index.html","fd0604db7c45c21730d4992ba1ae1821"],["/tags/qbxt/index.html","e98033b92ad06c15da0844f10973c71d"],["/tags/rope/index.html","6ec20430b76fceb7aaf368b67d431813"],["/tags/spfa/index.html","2bbff86f0211403855afca4ba05db294"],["/tags/system/index.html","b27ebe437534228b3aa680e3ce6fab8e"],["/tags/terminal/index.html","c89669c99fc2ad282b13043fbb0b04fa"],["/tags/zkw线段树/index.html","24b852c3f1de34c43dede4b20d48b72b"],["/tags/临沂一中/index.html","4145931254d9b9b17d4d2921e47531ad"],["/tags/主席树/index.html","c093d827efea3b5600734e964a614323"],["/tags/乱搞/index.html","86c3da9fd9d836f6fd56424e838e964e"],["/tags/二分/index.html","338ca26e6847216d8a51dce3d3808174"],["/tags/二分图/index.html","f5c73fb1ce696a556589fb216fd9c44d"],["/tags/二分图匹配/index.html","8a3460feef72dfdfc0940b18e2ed1269"],["/tags/二分图最大匹配/index.html","9e2923a3aa88f281348da8323944e14c"],["/tags/二叉搜索树/index.html","277accfb675d6c6997886b17b2a29fbc"],["/tags/二叉树/index.html","d3555cfbbcc7d8f545692c8d29eb645b"],["/tags/代码规范/index.html","c6ed4152275661d6422b455052d9db59"],["/tags/优化/index.html","0e2103e6217a62b72bff61f42c52e390"],["/tags/几何/index.html","d83bc8d7711b2e2c952646a20be0f29c"],["/tags/凸包/index.html","1aeac34f9193c63577f78b5f64877ef4"],["/tags/函数/index.html","133994897aebed48758ab82c335c84d5"],["/tags/分块/index.html","90bca876c1c33accdcd007235af0a91d"],["/tags/初等数论/index.html","498ccd0074f1332822d8366c33a5deba"],["/tags/前缀和/index.html","550c40ed55382529a27893c9da2aacb2"],["/tags/动态规划/index.html","06953b844dcf52a116db900f981385e2"],["/tags/匈牙利算法/index.html","f1d85ec506f8733cb7844f8189552a62"],["/tags/区间/index.html","645425cf3482115389f460818b8a540a"],["/tags/区间操作/index.html","6a329094774676292d8e5d9018c97531"],["/tags/单源最短路径/index.html","ba8e215c6cb03793417902d56a873614"],["/tags/博弈论/index.html","6b7b43b14e150066e63d6b10a9d38a9b"],["/tags/卡常/index.html","e1373e9c1222b41a218483cf23f4248c"],["/tags/卢卡斯定理/index.html","ee79ae569b253b7b15535a7b99ffac87"],["/tags/卷积/index.html","25212d6c968dffc0fee93cab225e787f"],["/tags/叉积/index.html","933e55a0b8e962ccf5586ea066750e35"],["/tags/可持久化/index.html","c30489d31aa87d90a1a99423fbdd5c3a"],["/tags/向量/index.html","8e61ba8bec357f6a121afb91b85c3230"],["/tags/图/index.html","947c4b5659a548ae75c81a3ca5d0cd05"],["/tags/图论/index.html","9bf873bd6ac6e58108bb3cd38f46d66b"],["/tags/块状链表/index.html","fff526adb33b907b69df06b876f7b40a"],["/tags/增广路/index.html","971707ca5decc24acc6eb5ce0e941d57"],["/tags/复平面/index.html","ea97ad750ca114155d7870eab5c83830"],["/tags/复数/index.html","142c613f96a029805629e0901ff8dd03"],["/tags/字符串/index.html","f6d0c14d6c91f786fc2895ba0e8062a6"],["/tags/学习笔记/index.html","230f9323a1dab7f44df96a74f109b31e"],["/tags/常数优化/index.html","ebabde7d1f4589f17364846cede8c0a9"],["/tags/平衡树/index.html","9538d5f7f1d523ab2b9cae949881c40f"],["/tags/并查集/index.html","1e5181d2b31354e4923d094e6ba7e2a0"],["/tags/强联通/index.html","24e4d0d24512d885e90373d88383e210"],["/tags/快速傅里叶变换/index.html","0f33a4dabe8acb5dc4eba84cedfb89b8"],["/tags/总结/index.html","a7ef1e170913ae294608357962b109c9"],["/tags/感悟/index.html","8c267ff18b7323012f7d109656aba50a"],["/tags/技巧/index.html","3e454406a56dc4c98c0e59ed66bd791d"],["/tags/抽象代数/index.html","ef15e1a1746a6886f3a7660dcceb437c"],["/tags/教程/index.html","b4d5d957ba9869ae4388d70564000780"],["/tags/数堆/index.html","3c90b51f13cdeb55a0541dc477ea530d"],["/tags/数学/index.html","705db7e7ab58bf6debd81a26bd457d6d"],["/tags/数学/page/2/index.html","1758b51e2b60fe6ef379f565d01f315d"],["/tags/数据结构/index.html","9b48d5100114b8c7eafeea50876616d8"],["/tags/数据结构/page/2/index.html","0eee20c76f75871ac680b4e0e8f2a08e"],["/tags/数论/index.html","d3c11d42e3dc79c81ae5d654ca914b1a"],["/tags/数论/page/2/index.html","de5cf7a1e8423eab2329d28250bb1db7"],["/tags/文学/index.html","461dae8adb32c9aa07628d16331e5ed1"],["/tags/方差/index.html","1dab36156bd3318cc77f6d822a02b8ef"],["/tags/智熄/index.html","e60f4db5fae3a107f1cc4f86a776a3e0"],["/tags/暴力/index.html","da9f9304616a459bcfd1cb3a150b060f"],["/tags/最优化/index.html","d5221b27a196b9dcd8bda56cc6e81533"],["/tags/最大流/index.html","eb0b6031c58f261c4a78c014efe7b442"],["/tags/最小生成树/index.html","5a3e1d33beef2b12295238c14e705b24"],["/tags/最短路/index.html","693ef4d1d5824eefd91d23fe2512e3fc"],["/tags/最长回文子串/index.html","afd2d6f4f6c0fb8cdd7df612213d2d2b"],["/tags/极角/index.html","51f534cedcbcf1c3356b13f783a35c22"],["/tags/染色/index.html","6ceca797edf50b84ea52505b47d43ca7"],["/tags/栈/index.html","3dbba0f5f2d51115345e41353dbc95d2"],["/tags/树/index.html","b026d249234fe17cb5e5cef8f27bbced"],["/tags/树剖/index.html","f7ccac5996596408e270546fb8584211"],["/tags/树套树/index.html","71ace77434599b726b93d91e8226edc3"],["/tags/树状数组/index.html","95af9d9c49d9c812a8e69940c7551c86"],["/tags/树链剖分/index.html","e94627175f3779a3c6b1c5045ecd3406"],["/tags/模拟赛/index.html","732c4e4eb32f4d54e6a13190b5c1397a"],["/tags/模拟题/index.html","e78cab10d71db24558e50bef19ef6eca"],["/tags/模板/index.html","66a0addcb1d4bb7d38800be4292428fc"],["/tags/模版/index.html","de391c64164e06d10448ec005c99115c"],["/tags/模版题/index.html","59b418435fcb43d4496c0fa56c08b84b"],["/tags/欧拉筛/index.html","a5bab9d4f1df10ed186077881cda759c"],["/tags/毒瘤/index.html","40cb1a99de41db433be7d66c7b5c7fe7"],["/tags/测试题/index.html","f98df43db9c16e4fdd5217c4e43e1893"],["/tags/济南/index.html","d10acf55622cd848e4d2ce2743da9086"],["/tags/清北/index.html","3cca492bc9413365fedb9aecc3769787"],["/tags/游记/index.html","6239f5259b73562ae92d771840b297f2"],["/tags/爆零/index.html","5ee33a90bb7c61bb561a5746efeaed7b"],["/tags/玄学/index.html","11fa675e6eed01e2337248bf3f16b5b1"],["/tags/珂朵莉/index.html","06f67af3f573d04f3952f70c51c7e2dd"],["/tags/生成函数/index.html","81b521870c2f2821642d9fc4fb81ca66"],["/tags/瞎搞/index.html","dc6adb93eebdae682baf19e3662b2544"],["/tags/矩阵/index.html","1eeb80a7359a9578229a130cbb113f68"],["/tags/矩阵翻转/index.html","40e959c89d3857b64824e7610f7219a4"],["/tags/算法/index.html","b934390e357b7405404d62f3c9da68d9"],["/tags/算法竞赛/index.html","ddc2b876d96a41d8df2d503602a35691"],["/tags/素数/index.html","e36c6223214b2bce0b979feba4c09e6b"],["/tags/线性基/index.html","28bc5839778fcd2dad98700cd27232ad"],["/tags/线性筛/index.html","f817cb5bd3618bbf1285f01c6ee0572c"],["/tags/线段树/index.html","8ccc4b1757f5e690e9ae587f494a5424"],["/tags/网络流/index.html","d636341754422e18731649cb397afb1d"],["/tags/群论/index.html","04f8d4ca2221c6a4c7e43a9d38cd35ef"],["/tags/自动机/index.html","30d0b306455fe9d692262ad0d5e5a2e7"],["/tags/莫比乌斯/index.html","927d060436529588b2630b479b2bedcd"],["/tags/莫比乌斯反演/index.html","d588fff93dc8db04044e2fa2eff22f70"],["/tags/虚数/index.html","f79515041095adf39154fc9ee4594274"],["/tags/计算几何/index.html","df8c2a49a1bd3953a9bc401fdf84a0e8"],["/tags/证明/index.html","2df4f12dfdda1c2554d3a2baf3257a54"],["/tags/评测机/index.html","b4f4a15b3af9d6f2e5d3473f5deb3189"],["/tags/诗/index.html","6b662b4bceac36ba1b0b9eef8e4e0310"],["/tags/费用流/index.html","531cd45578d517578942a37becd055a1"],["/tags/路径压缩/index.html","804ad15454e37b5d71f5347f6442b623"],["/tags/逆元/index.html","5555590559ccb694f984faf3325f6151"],["/tags/递归/index.html","eeee9d1925a34b47288884a5015792aa"],["/tags/递推/index.html","a3f1d355c7f6b22bbee0b48dd1c32b83"],["/tags/邻接表/index.html","5173703d9d76501bc9ae6f7671e0f6d2"],["/tags/随笔/index.html","19b8f023e4d77e588ae89ecb73235931"],["/tags/集合/index.html","d6a7b48c584baf49a48ec7ec3eae2e05"],["/tags/集训/index.html","aa8965bb1aa431ea96fd3e58521c0f0d"],["/tags/非旋Treap/index.html","3e49790f70b5dc115e552f8f67246eac"],["/tags/非递归/index.html","32f6b0540341ca9d4f42a6cf5f473e92"],["/tags/颓废/index.html","9a67c96a3b46fd68bf39a216855bc2b7"],["/tags/题目/index.html","3c81973281305cda69ba039ef3b32e63"],["/tags/题解/index.html","3deb7787b7bae545876b051351574b72"],["/tags/高性能/index.html","e6f5b4bbf9cc0619833149cad74cb339"],["/tags/高精度/index.html","32c663e108868f13a0f9130c4707fab6"],["/update/index.html","af03af567dfc9333f662504c7d192c95"]];
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
