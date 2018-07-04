/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404/index.html","a482baee16a6454e3de90dd4806cf4c9"],["/OI-diary/index.html","f05360d84bc8697898d11f0ab7e0dde8"],["/about/index.html","254cb1eb5f4b27983d6561a4d09e264c"],["/archives/2017/12/index.html","10d933e915879339ca89c3fa908ba792"],["/archives/2017/index.html","78df81234aeee54e7b59d2184c4881c6"],["/archives/2018/01/index.html","ccf9593cad472f181e1675b24a2c2ba8"],["/archives/2018/02/index.html","c5c805671e57e9667dc5eaeaca69ff9f"],["/archives/2018/02/page/2/index.html","5015fc2c77fb0f894fa340e3819e6528"],["/archives/2018/03/index.html","ca78a88a9f70aaddf15247db9d653074"],["/archives/2018/03/page/2/index.html","51fe3158290ccc21882bef8b4e85bf36"],["/archives/2018/04/index.html","9998f5b3446dab0c513b802e15395f09"],["/archives/2018/04/page/2/index.html","fa7f4013f2f19d4d88ccc0e9a28b22d6"],["/archives/2018/05/index.html","39ef9d5710819056b90670e3e4df5135"],["/archives/2018/06/index.html","b20f7923de54009e69b2ef30b2538375"],["/archives/2018/06/page/2/index.html","8bdaf219602edd3a73f395132dce837b"],["/archives/2018/07/index.html","eca99576564fd09f451a8f79b35aae91"],["/archives/2018/index.html","d28a40685d470a3ab6afd551577df440"],["/archives/2018/page/2/index.html","bddc62391cfa8bd35ca31968728e074d"],["/archives/2018/page/3/index.html","91a36c321d55f85a6bf0eefff9eece74"],["/archives/2018/page/4/index.html","cbc143b73db75401045bd8b57a6f3298"],["/archives/2018/page/5/index.html","56fa93202140e52096b8ec65d275c8d1"],["/archives/2018/page/6/index.html","e3e6c4d753ac0292f9c547996864ed9d"],["/archives/2018/page/7/index.html","3bc3445a8b0a31dad9aadc3ce0c0f2ef"],["/archives/index.html","a76e14882d2a64988d359bcb64677892"],["/archives/page/2/index.html","59a9028ddf8d7e435696aafdf19ee5da"],["/archives/page/3/index.html","49aa7a05644e03901010a55bcb651609"],["/archives/page/4/index.html","65c3ec6c4ba13482c6992a939f161410"],["/archives/page/5/index.html","649a2e5e0d398c4e5db1e9d10697390f"],["/archives/page/6/index.html","3dbf904981d1a648c0cd98897ae84bad"],["/archives/page/7/index.html","33ed5f68e796700a93a1e9eeac7a1c09"],["/archives/page/8/index.html","b42f45125fdda35a3740a9d9a6938632"],["/articles/18-4-27-things/index.html","0fe431bde531641757dc64ec21c77433"],["/articles/18-4-29-test/index.html","ad05ffc622445d771afb9d0d9ce6cd85"],["/articles/BigInt/index.html","770fcafd852fb16411b130e2cc8ce3a6"],["/articles/Chtholly-Tree-ODT/index.html","80d0def3405b567a442f6425f3694d36"],["/articles/Code-Style-for-OI/index.html","4c85a26b40ed2988089882791996e919"],["/articles/Computational-geometry1/index.html","275ba4170ae2f8082684b428759e1d72"],["/articles/Computational-geometry2/index.html","931d83c400c8e8858184367f94960369"],["/articles/Dirichle-product/index.html","3bebada632f0ddda0caf363456fc5368"],["/articles/HeatWave/index.html","947e0e2619586baee346a7fc5b9971ac"],["/articles/JSOI2009-游戏/index.html","ff0336fd0a04c90093b084477385441c"],["/articles/KMP-AC-automaton/index.html","8a718a211bcf4aeb8f8f67168f5084d1"],["/articles/KMP-AC-automaton2/index.html","af75808c7851838a1d8d3a89d8b4a574"],["/articles/KMP-AC-automaton3/index.html","ac07ebbce33e094a6f9e1c5b370759b6"],["/articles/Linear-sieve/index.html","7eb65fb8fbaea2def80a98ee0cd734e2"],["/articles/Lucas/index.html","3758c7823aa422dc382dcc82c1932508"],["/articles/Manacher/index.html","6cad45bafd24ea8838b9b27e6b32086c"],["/articles/Minimum-spanning-tree/index.html","3383589bd2a399f695c27337f91692cf"],["/articles/Mobius1/index.html","8efc212fdf2d176bfa2b8f1757823e8e"],["/articles/NOI2010-Plant/index.html","914ebf612372b1665cea8a64db6ac031"],["/articles/NOIP-2018-zero/index.html","86ef39165cf4103c983f9f43847979a7"],["/articles/OI常数优化-进阶/index.html","d7cd04c75c1b6ef91958f6de176197ac"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","5003a5c6ffd3055515faef62f4c3b3bf"],["/articles/P1984-SDOI2008-Water/index.html","898486f454a2636f23598505fc5049b7"],["/articles/P2018/index.html","5368d4a2064168c54df13891dbde2cc9"],["/articles/P3933Chtholly/index.html","3d0286c5756d912cb547999e81adb8da"],["/articles/Partitioned-Algorithm/index.html","9ddd76c59bce8d414d0f5afcf2609801"],["/articles/RP-introduction/index.html","799d26afb02835572578a965b55e61da"],["/articles/Sandaram/index.html","23f698b3141324db800f3cd7c657415c"],["/articles/SegmentTree/index.html","00a830ea9929577b4dab1ce6b68c319c"],["/articles/Segt-in-Treap/index.html","1c4f2ca2bbd82be71acd57641127e58b"],["/articles/ShqProblem1/index.html","16ea65e0ab94f84296235d7bf269e991"],["/articles/TreeArray/index.html","2748b1660d5760f8293d548b5e689fc9"],["/articles/TreeArray2/index.html","4a5b91016d86d7c5aaa8b01449c13afc"],["/articles/Union-find-sets/index.html","5fb6685d0f82d84e804bd4ae06fa4c36"],["/articles/ZJOI2007-矩阵游戏/index.html","f7f8a9704d4c41aa1ee20b545ae7b39e"],["/articles/a-bproblem/index.html","80fd12921b24611a9cc315ee67fe1ed1"],["/articles/aboutBlog/index.html","6d5dbfe1bc058607c7815b2e04334a49"],["/articles/aboutgit/index.html","ae94949015a89a499b58f5c60223d3c9"],["/articles/atom-plugins/index.html","fae7a5ab547000ce48935d52b2b4243c"],["/articles/autoAC-lemon/index.html","905eb25833af325f9767be03f9f90fbb"],["/articles/bzoj-3337/index.html","de5db78b8cb4a042575cc4137ec5b657"],["/articles/cppteach/index.html","12eacaf51c22f71d8a149a74e3a1aa2e"],["/articles/css-QWQ/index.html","96b258c1a0a45d80721ac70d4c1f0d9e"],["/articles/dijkstra-spfa/index.html","823aa1608546ff4aed6df9c7a31e8ec9"],["/articles/dijkstra/index.html","4f33a277c9161384c11c6662cd95a812"],["/articles/duliu/index.html","28268a5e47f1d0bd3b391ead01930ce8"],["/articles/dynamic-planning/index.html","8f72f4c1c66e559d36660306fd898cd8"],["/articles/elementaryos/index.html","7c59eab71562bbddf974293874862b64"],["/articles/er-fen-tu/index.html","3479bda038abcf907eb45475020462d6"],["/articles/fhq-treap/index.html","1c65e366bff0cbed18f2a05e47773221"],["/articles/group-theory/index.html","74dff4fa30a636c3962060be8c328da3"],["/articles/lgy-from/index.html","5dfb7956d40c69bef45e855e3822705e"],["/articles/linear-basis/index.html","b5bc1e9af6e81a8dcb2e2c788031bc9c"],["/articles/lyyz-test-2018-5-19/index.html","8e5263d0d68ec965d9580e609b948dd1"],["/articles/markdown/index.html","b88ec3287e3f3afc24ea59f9db8cddb6"],["/articles/moban/index.html","8493784b857d28b0f3e7a0fee1b08d8f"],["/articles/poem1/index.html","d6662cf94227b4cd7362ebb365167871"],["/articles/prims/index.html","bc09bb2dff637fcf4ccde463cba21519"],["/articles/python1/index.html","febd2de1e601d92d5afa2f8541c947af"],["/articles/question-01/index.html","2b1d87aeaf3c561397720b30ba0be7fa"],["/articles/recursion-to-no-recursion/index.html","a376de53ce5018cfcbb339fb2cd4d93a"],["/articles/scc1/index.html","79b66c70a1c140d9dcabd4dfe49e7a7a"],["/articles/somethinks1/index.html","f0167696ae669511314a1795c754ea82"],["/articles/terminal/index.html","d6f2052442345c15be5e3f9b1c284f48"],["/articles/terminal2/index.html","15c66679950f218b0aece7255f1c7524"],["/articles/test-mode/index.html","2e0f280c72bdceaf2a685ace428fc87a"],["/articles/test-polyline/index.html","34dd2c1096bcc95ef095724b3e995008"],["/articles/treap/index.html","cc03fef89a59714c81604a51f6c6dff6"],["/articles/tubaomb/index.html","e44251fb8e9d36355fc610a6bd8fc687"],["/articles/use-hexo/index.html","3a611e468b20377c113aed7333e3001a"],["/articles/use-hexo2/index.html","fb21d3728df86b5af165ece7b9979115"],["/articles/zkw-tree-algorithm/index.html","642f5dcedb4843a17eafde8a10987ea7"],["/articles/zzWA/index.html","b96e4b76e9cf93e78cf3b4842ec645c4"],["/articles/「LYOI2016-Summer」一次函数/index.html","1b49da193e77079fc45ebb7dc07da629"],["/articles/主席树详解/index.html","aac8010d962ab8c54eb8469f4952cf2f"],["/articles/分块-P1471/index.html","56513eba6796e930c7979abeede698f1"],["/articles/可持久化并查集-rope/index.html","efc530fd1078576d16e5ae9d48161f93"],["/articles/洲阁筛/index.html","47ae0d9b10e314c0be4ee3ba068df9d1"],["/articles/生成函数/index.html","439a85e79c970d4f5ce71a037fb92ca2"],["/categories/Blog/index.html","2d3b8c6f4676d7a37e983f021a565e91"],["/categories/OI/index.html","21e3e9ad4b95eb8938ec7d4c7d1d7ff1"],["/categories/Settings/index.html","6037c5fd9c243d3ab63a241804a9b804"],["/categories/Shq出的大水题/index.html","32e2fc83705e00cbb7c3f7e063a2a4e9"],["/categories/index.html","b5152ad30f46984faaed0ceb303cc2c2"],["/categories/system/index.html","b0b5996717008ad9bc7482c8e5dbfc67"],["/categories/《RP导论》/index.html","817e0d5a30611e1903586e6bd419f543"],["/categories/《Shq出的题目》/index.html","8be172d133506bf0bbd053259e63a85b"],["/categories/《Shq笔记》/index.html","e1075f665ea50b33b40bae13a1a67906"],["/categories/《Terminal教程系列》/index.html","06948efef43c77b9a6cd11d9899e9340"],["/categories/《hexo的玄学用法系列》/index.html","b9887ca3772d60b05d0c1da8dea32e54"],["/categories/《人生苦短》/index.html","3284f42dd97a9eec25c29b40827f63ac"],["/categories/《教程》/index.html","109770bb25aa4347065190898334e458"],["/categories/《最强的Lgy》/index.html","84afff1eeaa921cfc2eb25a359669c3a"],["/categories/《烟雨茫茫》/index.html","22121c598e9caff0d47bf9070e55724e"],["/categories/《玄学》/index.html","c584f8b4b312aadfe9486333fa3ba9ed"],["/categories/《算法模板》/index.html","97d565fcee47f9dae9b1cf5183bb6411"],["/categories/《算法详解》/index.html","f6af72948ffefe1f63257d5a31c4ea7c"],["/categories/《算法详解》/page/2/index.html","dfc7f684f4e22dc280908fdaee1e2907"],["/categories/《算法详解》/page/3/index.html","8401773ab20fd74fd71a1743022dcaab"],["/categories/《题解》/index.html","ae8225050f9615a9c9e762702caa0305"],["/categories/「日常卡评测机」/index.html","3b9708416605b6bd14f754f285a0a29e"],["/categories/题解/index.html","eafcf400f3ff84a52c51507bac5f32b7"],["/comments/index.html","fa46426f385203d9dbf296fcad4512ca"],["/css/main.css","3f00fee5bd4a2c3f2b504eb081695872"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","09976cb6b35eea01884c4b5b162b2a1c"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","2f3516aa1f19dc442ab1cb1d40ead24e"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","cc04a9f0b4f932cdfd581507950e35ab"],["/page/3/index.html","c6ca34b865094b2ae97fe7647fa09251"],["/page/4/index.html","205c181f36772b8a936bb8b0b9839ebd"],["/page/5/index.html","e3b14b1da487cadeb51f8658e7b15eed"],["/page/6/index.html","4eff045e8b4323f55fdbc4e7f6255484"],["/page/7/index.html","81bc7e8ea7427b1608a3fbff029ea021"],["/page/8/index.html","40126f4ea12bb4979d96f253dcbc0ad6"],["/photos/index.html","4c50bfc4307001f8833add5b1906f8a6"],["/sw-register.js","1032e490497e19e397c3edd7cafb3739"],["/tags/AC自动机/index.html","5473b5ddc376ad86604cba40204ade55"],["/tags/Algorithm/index.html","0fb06c3d513116bcb6e2fefb32546a63"],["/tags/Algorithm/page/2/index.html","a0a5cf6eb1b9eb76b80e80d08e80d482"],["/tags/Blog/index.html","563e3889881afc67baea38b3fb4f4c19"],["/tags/Chtholly/index.html","1867ff4cfc5ba9773946b826fa9b9612"],["/tags/DP/index.html","0b4608b5e34599a5c29e95eaaeac441b"],["/tags/FFT/index.html","bb5703fc61e75235ca99bd685b04b108"],["/tags/Ford/index.html","cbc44ccb88f78f0ccaa6d0b11fc138b9"],["/tags/JSOI/index.html","2fbbe8d39beb7615234e4c92b4170adb"],["/tags/KMP/index.html","bfbdd69deb831a89eb7439f0cd71d701"],["/tags/KMP自动机/index.html","a7d2b65300ce2c2c2e44038e4ad2530b"],["/tags/LYOI/index.html","d8cf240d45d4a848a2882b80ec65c268"],["/tags/Lemon/index.html","bdc5640e241a4fbbc34cf2c40b676fbd"],["/tags/Lgy/index.html","a23934318104c24ecdb29098499ff36a"],["/tags/Lucas/index.html","2bc7beca953fcc49a113af86881c4229"],["/tags/Luogu/index.html","d2561aeed6dbcfd140b13e9c87c9f3ea"],["/tags/Manacher/index.html","46363dbd012cf69d4d5b8fbbad84b2ab"],["/tags/NOI/index.html","544f4b19d7ff372e3ea2e7caf2ff4f0b"],["/tags/NOIP/index.html","b15aaaa15ee7d3326668be576d1e5a21"],["/tags/NOIP2018/index.html","b108704226d8900f599283340b88e982"],["/tags/NOI导刊/index.html","f80d5868ab1c7850b3a88a4c72ca9b2c"],["/tags/NTT/index.html","7cfe173b1a6f5838ac52f369315ac539"],["/tags/Problem/index.html","e841607d9e173670fe023bd8bf4daada"],["/tags/Problems/index.html","78fa0136709f69cae2323e9f3199b371"],["/tags/RP/index.html","72d209ad90e97ab9ea35f7a1f02594e6"],["/tags/STL/index.html","ae1c20c21ac1285349b260b49e9d298a"],["/tags/Splay/index.html","9876d7c0e3e7f86b859587e4fe50dc53"],["/tags/Tarjian/index.html","aa18a5752ba4d81793360b2e82731a22"],["/tags/Treap/index.html","3e0fc125c08e57d0f248cd01032d6285"],["/tags/Trie/index.html","b3b37103be2cc49769a694609bf5c9f1"],["/tags/USACO/index.html","e9209932b40807b5b33eb44a280e0452"],["/tags/ZJOI/index.html","10365b6742cec5753434690dd6eabda8"],["/tags/atom/index.html","e0ffa9fc4c98f67f7aedcefbbb6580e8"],["/tags/blog/index.html","f3bde2bd6239579f5a0ff5f99c609331"],["/tags/bzoj/index.html","66703693cba71f739404dfbbdc756c50"],["/tags/css/index.html","2dd93c24d885989c134124be904528f9"],["/tags/dijkstra/index.html","0e85ebbf580a9530b1d2565948516615"],["/tags/fhq-treap/index.html","c62771bb9dec6ea3e81e0c317961fcee"],["/tags/git/index.html","b249d48c7fd249abbc825165fc133dfe"],["/tags/hash/index.html","5921607d7a4487a5ced2c875a4d42021"],["/tags/hexo/index.html","07b38b0dd48489e4af80a0506fdc17d0"],["/tags/html/index.html","8687afc4dd8a5b23242a168d20f83241"],["/tags/index.html","4012430fc0b48ea9ac9406e55edb0580"],["/tags/lyoi/index.html","8527c13c06686e62b1d0a07b6abdc0ad"],["/tags/markdown/index.html","17d0ee90442ce7755e757d73d318e3a9"],["/tags/plugins/index.html","9671a9cf40184eda1cbe8ff3885ac878"],["/tags/problem/index.html","ee8a7654d0cff6fa6762ce4fcb2ff12a"],["/tags/python/index.html","0c650af44c12dcc28e8f943bef32dc2a"],["/tags/qbxt/index.html","90bdd22eaf3067e3fac86e5179d97aaa"],["/tags/rope/index.html","bc887b2f9a33aeefbd6d71e0e5d409d4"],["/tags/spfa/index.html","e2bdb29e0faa19de98c2f36f65809dbf"],["/tags/system/index.html","043c0bac85ba45c4225c23377c39213a"],["/tags/terminal/index.html","b5181d43ce7e514b6aeaa58353c41304"],["/tags/zkw线段树/index.html","7fbc7a459ae7b20825081efc82aabdbe"],["/tags/临沂一中/index.html","8b86fdf87119955f85f44691c8b994cc"],["/tags/主席树/index.html","24ea0df80964f13d83bdabe3a4c4223a"],["/tags/乱搞/index.html","212309b292f001e0ea5b56e1aa3c7e24"],["/tags/二分/index.html","d27afe9f3a97e62304a7132bb81dfaea"],["/tags/二分图/index.html","11c67eb7e376b76bfe25401f8881c096"],["/tags/二分图匹配/index.html","5f5f4c02ceb05d1139e64514516125a6"],["/tags/二分图最大匹配/index.html","50c9b3be1d501e865503be56ebd3fe47"],["/tags/二叉搜索树/index.html","53e65b45a65425caece5033039bfd583"],["/tags/二叉树/index.html","05939c8db7f92bd094664e4c0f3c461c"],["/tags/代码规范/index.html","573cbe6e9b2fa9d707577559e601c110"],["/tags/优化/index.html","9e8c7a82976e6a59cb3038fbd258efdc"],["/tags/几何/index.html","dee55f1bcc05fb261ab9302125839312"],["/tags/凸包/index.html","7766b048868e5e5ed16e2e9e2409141f"],["/tags/函数/index.html","818730c17eed47c0f4e81ed70bb09ef1"],["/tags/分块/index.html","594c8c5c80a090415c1c3787785b14bb"],["/tags/初等数论/index.html","30b58df1b5d802f1ea57ef47b55f4d4e"],["/tags/前缀和/index.html","eb08f67dcf6064fd35c349fd629dcb99"],["/tags/动态规划/index.html","9db98dac576ce232ec04c9a4d2644a12"],["/tags/匈牙利算法/index.html","8bdf2985c15e4ded66a2454490ad142f"],["/tags/区间/index.html","f4f25d19301d75557f3edcf432e951c3"],["/tags/区间操作/index.html","a942cd36766b1eda0165876e1237d5c6"],["/tags/单源最短路径/index.html","4c23c371dbba0c0270c792c69b24f2fc"],["/tags/博弈论/index.html","cb4bb5f30f08df8d3d885b0b35a10dd3"],["/tags/卡常/index.html","2c3432af2706709bc731294b5baf298d"],["/tags/卢卡斯定理/index.html","b3286bf1b480fe96365a077a94d07597"],["/tags/卷积/index.html","8d32522687bbc888fa0ee68426c6a012"],["/tags/叉积/index.html","b25cd2bab59a353fbd569726c2eb63b0"],["/tags/可持久化/index.html","7713f2378be49e98eb20d724510cba00"],["/tags/向量/index.html","17c44af0939f890dfba9414340e0215a"],["/tags/图/index.html","61ebb8d5510f83afb67547c456826180"],["/tags/图论/index.html","2ebe74282ad3695470fc3efb16d6e445"],["/tags/块状链表/index.html","c2c7fdf0805b6cced9c32bec32e7c67e"],["/tags/增广路/index.html","eb3ef23c0bb682a42b671ac81610dbca"],["/tags/字符串/index.html","a5840830e90b0ab72bdd54b2e6c3fb67"],["/tags/常数优化/index.html","976153ca991b34d73818ef80f3a25c2e"],["/tags/平衡树/index.html","24a2ed71aacc41992458512c714c4794"],["/tags/并查集/index.html","b80ae3813595d1c2011987a816e87a0f"],["/tags/强联通/index.html","29edc4d5076cbb0cc1aaabfc20fefef7"],["/tags/快速傅里叶变换/index.html","9d34f40a29d09905245637e43bba4aa9"],["/tags/总结/index.html","f4a8a90dd3685da16855cbb85053abd6"],["/tags/感悟/index.html","ec242afe3ebfddcfbc1954415ed1d5ed"],["/tags/技巧/index.html","b32c5e953281a885713c80c29b2f3411"],["/tags/抽象代数/index.html","2fba3b483521640c4d40781430428c5f"],["/tags/教程/index.html","775b282b5df65a08d4d7a45d20286d2a"],["/tags/数堆/index.html","7c7b94e5fa11c7b9d4239caf29449430"],["/tags/数学/index.html","3a2488678f1be4b27dec5c0386d58ce0"],["/tags/数学/page/2/index.html","c7ab53f3403a63e4942d58060643b87d"],["/tags/数据结构/index.html","a7c8b6389d55abd3211cd1efbd2d6beb"],["/tags/数据结构/page/2/index.html","9bbc86a673c7014556d766e153b56acb"],["/tags/数论/index.html","39b6b24c97051041fcafaca9a59b6c97"],["/tags/数论/page/2/index.html","1d79d3658237f2bbf3e1943d27c1ea97"],["/tags/文学/index.html","d748304f1e7bd539b70691b98acbc23f"],["/tags/方差/index.html","1c03925b54d7b336db841ba5bea93564"],["/tags/智熄/index.html","08894f55b810afda999fde9f2d603ab6"],["/tags/暴力/index.html","3242e747494040a43790d7b65ff05cd4"],["/tags/最优化/index.html","b14a082cb76a38441a9226f311325a38"],["/tags/最小生成树/index.html","bd2b2eaf977321e314ec2d9b32086d42"],["/tags/最短路/index.html","0e24a48b656897d84b27606d44c228c0"],["/tags/最长回文子串/index.html","998e1799db947a25456492e14f7a3965"],["/tags/极角/index.html","9c53ed625f0723cb542e4b660a564621"],["/tags/染色/index.html","2f6b6ddec92069d1fe7f22206c423b95"],["/tags/栈/index.html","9e3e239cded0b20595434d6c190a479b"],["/tags/树/index.html","ebf202ec5b66db6a67f9d23bbda11d9d"],["/tags/树剖/index.html","983800243bd1e642c31c8aad49c0e67a"],["/tags/树套树/index.html","390e134007bfbe81982b3c2e93a41f8c"],["/tags/树状数组/index.html","ad29d5cee28f0fbd57a0d2c6cfa073cf"],["/tags/树链剖分/index.html","befadcdc8e8a2482058e92800a42f706"],["/tags/模拟赛/index.html","d0011687b2e1e1859472eeca30112c79"],["/tags/模拟题/index.html","b30a8f9277d122951fb73214c7c17e9a"],["/tags/模板/index.html","4a8ec98c3851a75d7ca02633802c46cd"],["/tags/模版/index.html","072e5aee5c00e1bdd3bbd17eee1008b3"],["/tags/模版题/index.html","273b2c0ee596f9211584123b69ca1d2c"],["/tags/欧拉筛/index.html","adcc47a37bfc2b2039d4e6ea6e761c96"],["/tags/毒瘤/index.html","68ba469c0948b349c5dd78aa4093e452"],["/tags/测试题/index.html","d57c8ee649a8fe2060b0e76b99314d62"],["/tags/济南/index.html","d09a26cbd240310fd7d627701e29f1fc"],["/tags/清北/index.html","c6b746e7983668cae2bd0cc62103fb17"],["/tags/游记/index.html","356db96eaad7e5c9e342150fd8f04887"],["/tags/爆零/index.html","f161b780a63ed7123968ae3fe60ec7a7"],["/tags/玄学/index.html","eff56b5da4bb713b2781aaf646b9a1c5"],["/tags/珂朵莉/index.html","7869a8c030cf01e7258928c121ded367"],["/tags/生成函数/index.html","2bd9501a06f6027488d7952363588370"],["/tags/瞎搞/index.html","4a30ebecd20fa197649c39afa79a7342"],["/tags/矩阵/index.html","2ab8a31ffa21c99b79ef235d5c33e90b"],["/tags/矩阵翻转/index.html","3d509035ae3ec69e0405ef9949cbb9f6"],["/tags/算法/index.html","0dcb7ae001720a7ec1f1e277b2697460"],["/tags/算法竞赛/index.html","2d0887a2130848fe74c108361cecaeee"],["/tags/素数/index.html","3955fa45b51a8e35d3372d6b8230f43a"],["/tags/线性基/index.html","8f9c39678cebe1ec55ccf715400622ed"],["/tags/线性筛/index.html","ef3293761be59bc298c15827293af26c"],["/tags/线段树/index.html","a9297a8d32b0eeb3b3d071ef7eb818a4"],["/tags/网络流/index.html","a9b1f9d407478045b04d4ebd76d9d2f2"],["/tags/群论/index.html","c92739e1e28325fd084d7fd889b8583c"],["/tags/自动机/index.html","493f3bad6706a60fa7c5156278c54b5b"],["/tags/莫比乌斯/index.html","5c00467dde1f800a228b78eabc7d8c38"],["/tags/莫比乌斯反演/index.html","11c1cb19c0fa8b1dd900dbdadbc40d89"],["/tags/计算几何/index.html","fcca8d58ffcdbb2e2c40f915554f1411"],["/tags/证明/index.html","315cef0fb6d0559ad2d559c397956d23"],["/tags/评测机/index.html","0910452e0d6f4f1de1dbc763f179da07"],["/tags/诗/index.html","a5220f849096a7160105a68ee3b8cc68"],["/tags/路径压缩/index.html","890c41b0d18737527e47f0f34dd28eb8"],["/tags/逆元/index.html","31969e743261d9adf0bc3f0aa598ac7c"],["/tags/递归/index.html","e258b9fd93cebcbd3cb39b43b07880fe"],["/tags/递推/index.html","f0e3a7f80f5df661d489e28058c3012a"],["/tags/邻接表/index.html","dbf1f9e85b22d6f6bf9a83db799c857d"],["/tags/随笔/index.html","b384aa794f82c323b01dcd4f21567014"],["/tags/集合/index.html","51e8a8a533e6b377b89fe2d0d083cf64"],["/tags/集训/index.html","bd3d7abe091edda739691ea4c47f5bd8"],["/tags/非旋Treap/index.html","9cd3aea06917c3cae0ec9df58633ba65"],["/tags/非递归/index.html","90f264a89b1d20ea27ee6d75ff8a9f86"],["/tags/颓废/index.html","0b83daf93a91ebb80b72cbfb824c680e"],["/tags/题目/index.html","fe5358d7900504593d43586bf4d28161"],["/tags/题解/index.html","ab70f2d4da4da9d798a064d82a4ce56e"],["/tags/高性能/index.html","79567a87938912d2eb9bfe350819f761"],["/tags/高精度/index.html","f02c534596c8606f805c305719e22e01"],["/update/index.html","957617f70dde64e8981bc38096a60301"]];
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
