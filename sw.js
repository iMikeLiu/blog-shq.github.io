/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","22c34c0115d078de9a73c6168d54fb7f"],["/about/index.html","85d5bbc3fd400f0552e12ba0ea0cb19a"],["/archives/2017/12/index.html","afaa0a2bc4dcb8414395d4b5d824ec3d"],["/archives/2017/index.html","a561c7f34cdc17da8d666da5d7ada8cc"],["/archives/2018/01/index.html","500991ba0f9f2f375f9ee81d480b0703"],["/archives/2018/02/index.html","d6ea35908fffd6933f31ef4f08aaa882"],["/archives/2018/02/page/2/index.html","5cf56735eb648521ae6eab10ebcc18fa"],["/archives/2018/03/index.html","7983adcfb1a31efe66df815862691719"],["/archives/2018/03/page/2/index.html","51559581a6f83a3f395fcaa4856ca0d4"],["/archives/2018/04/index.html","91d0509fb85870e5dc4cfc5ce61f7c5a"],["/archives/2018/04/page/2/index.html","959a808ff67e21813a942e6dcc2ab40b"],["/archives/2018/05/index.html","081f0535037dc53ed375a4523e6e7434"],["/archives/2018/06/index.html","6e7f733d878a1e1d21e222f3a35395bb"],["/archives/2018/06/page/2/index.html","a7d98b411fad1993b29cd94f538615fa"],["/archives/2018/07/index.html","9e4595ab32138f8ca3811a2a34a5bafe"],["/archives/2018/index.html","0626e1b950aeae5a3910c1bcf8ecd892"],["/archives/2018/page/2/index.html","ae6e51e2409db485b0368a4bbc5819fd"],["/archives/2018/page/3/index.html","0cb168d9529697ffca612faf1a7667a5"],["/archives/2018/page/4/index.html","121af4427f12f4572747ec9a197afd08"],["/archives/2018/page/5/index.html","827cb385cfd0ed39535bf7a188cd64c4"],["/archives/2018/page/6/index.html","b75e5a05e217ff1b7c429fae30b8ed8f"],["/archives/2018/page/7/index.html","8d9da39b353332ca624f4004f7a98f96"],["/archives/2018/page/8/index.html","69cd4d04ddcadb868046e592c0541b4d"],["/archives/index.html","7e8bc0d5436a8df386c43b17f3dd3477"],["/archives/page/2/index.html","84065e2fb70874b57ca27d2ef561c72b"],["/archives/page/3/index.html","7920668e28406c25d639c5a22b4cc2ff"],["/archives/page/4/index.html","10b9464deb3ac9663e40b4b49b4ca505"],["/archives/page/5/index.html","8f2ece61d7d00ecae207d4bfb8585c5f"],["/archives/page/6/index.html","077dc3aa5e697a863b0d8231be329cf1"],["/archives/page/7/index.html","64f41606c391981bd423cd0d006dcd05"],["/archives/page/8/index.html","a2909c0ff2e0c22d81997378250ffb1c"],["/archives/page/9/index.html","5380b66d8d2e3b8a091be89be6d70f82"],["/articles/18-4-27-things/index.html","50a7418bb71c91197afef8ad43631d3b"],["/articles/18-4-29-test/index.html","1d0e3b6ddd86b529cb5a9724eadfe046"],["/articles/BigInt/index.html","76837269f4ff5fea50f0d27dc04a9199"],["/articles/Chtholly-Tree-ODT/index.html","2f40afc95a03371cbdd1005b3dd5d0fc"],["/articles/Code-Style-for-OI/index.html","574a9bf62d86e223824b1c7208aacf17"],["/articles/Computational-geometry1/index.html","9695353b7f5af6f3d0996ebedc2abb46"],["/articles/Computational-geometry2/index.html","a04e2e8237fb047f8810e6e9f6ed86e0"],["/articles/Dirichle-product/index.html","40286a18f55141d605baba23219844bc"],["/articles/FFT-study/index.html","41804b25da4584b0d6ab2ee7dfe777ad"],["/articles/HeatWave/index.html","9a3f8af03c96b40094b4ad63115312fa"],["/articles/JSOI2009-游戏/index.html","d7bc7ff9c4ea5a4e20075c1e94e6d24e"],["/articles/KMP-AC-automaton/index.html","d74f86b73723017cd7362e552b1d4e3d"],["/articles/KMP-AC-automaton2/index.html","7f33789d2b9dab7baf49f15346ec3953"],["/articles/KMP-AC-automaton3/index.html","eeae124e82104d2e8cb867b7c545e6ee"],["/articles/Linear-sieve/index.html","9f7032a7ef8db310895e5e0a7c1d81ec"],["/articles/Lucas/index.html","98bd0c0b9ac4e8ae64d48d3ff56deb4c"],["/articles/Luogu-P4276/index.html","916e42206e7daea608de44e60eb7b78e"],["/articles/Manacher/index.html","4bc1e265616fe2d962ce0c0ce97e7b05"],["/articles/Minimum-spanning-tree/index.html","12e0fd249236d147852313121a0dc964"],["/articles/Mobius1/index.html","ee54368529f8b6311d710fb56a5c5a6e"],["/articles/NOI2010-Plant/index.html","6834427d958b9b4da88ce7d96696ca8c"],["/articles/NOIP-2018-zero/index.html","1720d1d58ef48c88ec944d99b46eba89"],["/articles/Network-flow-Algorithms/index.html","54996beeecb384c2a5463ba6a871db04"],["/articles/OI常数优化-进阶/index.html","9902b6e1218d5bf5ea2091edc1908f1f"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","4704e6a612921782283ee6d819117036"],["/articles/P1984-SDOI2008-Water/index.html","a01de71158f7e588af30307be6a7e707"],["/articles/P2018/index.html","eb49f9f15249af1962e9e8c4a05b6b15"],["/articles/P3933Chtholly/index.html","2b0e0914401557fe699963b96af57419"],["/articles/Partitioned-Algorithm/index.html","cd4f6b800e011911d9e8decbb493740e"],["/articles/RP-introduction/index.html","704568c84179c7327c54d5065e2baa73"],["/articles/Sandaram/index.html","31e5802391d2cd57d1df9a00f458b4ac"],["/articles/SegmentTree/index.html","758f189ed3cde66a5972cff7e30510c8"],["/articles/Segt-in-Treap/index.html","35d1406eb4e65e2267e7de18183920b0"],["/articles/ShqProblem1/index.html","cf12c731eb04ebcbb21964c334f69e34"],["/articles/TreeArray/index.html","c76e130de963b2d1de7f58f1ff48802c"],["/articles/TreeArray2/index.html","10700edbfe0545550a7cef1cbb3401fe"],["/articles/Union-find-sets/index.html","4560c43658ae411f72da48880c1d278c"],["/articles/ZJOI2007-矩阵游戏/index.html","427b988f09a89fbb25d5685809b58c7e"],["/articles/a-bproblem/index.html","b5f9405e3723ffb2c60dc9aa716075c4"],["/articles/aboutBlog/index.html","2cfc17e3bb5302da54a530ba7576f947"],["/articles/aboutgit/index.html","8c6c156172e0326b283913ab9cca0ac4"],["/articles/atom-plugins/index.html","68c0ac3e1c9c0090d3fb7810ccb94646"],["/articles/autoAC-lemon/index.html","5398a3549f7b76c3e26ff3d92bce7fd0"],["/articles/bzoj-3337/index.html","a82a77abc2684df57358f799fa2a213b"],["/articles/cppteach/index.html","2f6f7d96243b602c8a2f02d67addf276"],["/articles/css-QWQ/index.html","720f25ebbc523bc8bfe0d15fb47b9dea"],["/articles/dijkstra-spfa/index.html","2e58217c1b4ff3d992f3ba819835e90b"],["/articles/dijkstra/index.html","4fffca2414708be828647328174fd010"],["/articles/dinic/index.html","0ebaf570ccff0f605aab555acc944dcd"],["/articles/duliu/index.html","41f09e682e8eb69347fcdab4a7f94224"],["/articles/dynamic-planning/index.html","71014b4fae0d04ae28ddba71cb838c62"],["/articles/elementaryos/index.html","4a09da9107d5ff1d384af3f5c187c2cf"],["/articles/er-fen-tu/index.html","ef48393b007de74b3bd28e8e8b91e5d9"],["/articles/fhq-treap/index.html","abe4abad8c30283143ca24e910a8d25c"],["/articles/group-theory/index.html","3cd0719cbde148ab5eccde23a7220374"],["/articles/lgy-from/index.html","02e7fea1e51b891aa3fc509c2379e000"],["/articles/linear-basis/index.html","9e7951a7fee682ac6fa7b2f7e6746a58"],["/articles/lyyz-test-2018-5-19/index.html","6bfd5a3a5c71a051f23b74f8e383f45f"],["/articles/markdown/index.html","ed6acba446afb7cb8b85f4cf840c4f25"],["/articles/moban/index.html","54c40ef0d4200e1c337c676615d587d1"],["/articles/poem1/index.html","9e918cc2f9ca4391a876b0e4d3a8d543"],["/articles/prims/index.html","1311f03960a1f17d68a2603602eea92a"],["/articles/python1/index.html","3a712d3b1eac93cb3c5169365a3e8aae"],["/articles/question-01/index.html","613700488d12db843272d90bd4fce02a"],["/articles/recursion-to-no-recursion/index.html","9f338cda708c39a4ad2bfe458a03d676"],["/articles/scc1/index.html","3406f5cea1eacbfe588e153e7c542825"],["/articles/somethinks1/index.html","7db6655dbbc5a69a020ad1bacf52fd4b"],["/articles/terminal/index.html","f055d0b4ad2ff72c4db73fbb0f46a7f6"],["/articles/terminal2/index.html","c63d394a5cee5136d7c8ec145919e768"],["/articles/test-mode/index.html","ab3bfd5c73654d84d0edeef49e6e1750"],["/articles/test-polyline/index.html","2c3a66b1ca41b462919b991bf4a15e6f"],["/articles/treap/index.html","c664034c436e6afddb9a54d7e630664f"],["/articles/tubaomb/index.html","a397a562926505a7cb55128a9d6bed45"],["/articles/use-hexo/index.html","ec15954d9890ff8626ba07a413070efe"],["/articles/use-hexo2/index.html","bd7e88aca3aa56907e51bc5a59f10bf2"],["/articles/zkw-tree-algorithm/index.html","d5f23b55c40f1289df4c772fed969861"],["/articles/zzWA/index.html","722a690c393a954ba5c3061ef6bbf00d"],["/articles/「LYOI2016-Summer」一次函数/index.html","285ef85090ee1151ad230953e894425a"],["/articles/主席树详解/index.html","ed3a09de2189cddeb114ad03176fae0e"],["/articles/分块-P1471/index.html","999391ee51c1ddb901684a76f4476114"],["/articles/可持久化并查集-rope/index.html","72aee8deabcb31f6a8ff8f6113e7f12b"],["/articles/复数表示/index.html","496cf4e2963393368780bf15e2bebeb0"],["/articles/洲阁筛/index.html","026d679b069c61fc135206ddeae319ee"],["/articles/生成函数/index.html","bdd5c230e73bf3780834a2d221bec764"],["/articles/网络流-二分图最大匹配/index.html","2d221acc34ee2866de6f0851c1ee7ebf"],["/articles/自然数的和/index.html","60946e969c5cf2c0ea84f76f76672c71"],["/categories/Blog/index.html","70caf907251fe7d02170b7810f264020"],["/categories/OI/index.html","b9c651e6611031c96d3fdf35cf32a374"],["/categories/Settings/index.html","237578152544f13030ac562f55592ff5"],["/categories/Shq出的大水题/index.html","f86a2cadea0e9a5ba244cd1f0c5e2690"],["/categories/system/index.html","413a691545e62846a802473b489ebd63"],["/categories/《RP导论》/index.html","5e65690268c1c9628350c24f7cb0a640"],["/categories/《Shq出的题目》/index.html","b3bc18dc432df776505803e0d06bc08c"],["/categories/《Shq笔记》/index.html","a5b5012ce6ac0abaf6cb302b76d2c0f1"],["/categories/《Terminal教程系列》/index.html","8031306bda27a8442c95db80761e50d5"],["/categories/《hexo的玄学用法系列》/index.html","baaa03854bb20989657d0ff71c6f3607"],["/categories/《人生苦短》/index.html","1665c6ca82b709465798ddb30ed18174"],["/categories/《教程》/index.html","f54f973a35344f2fad53554cd2d73e35"],["/categories/《最强的Lgy》/index.html","0bcfaa274f449054c89773ae241dea25"],["/categories/《烟雨茫茫》/index.html","dc8faa51fff838d4e098eae0dd6871de"],["/categories/《玄学》/index.html","c57f1c523305ea23898b9300354b1072"],["/categories/《算法模板》/index.html","b663fa19b10c56efaa6d89cfe62207f2"],["/categories/《算法详解》/index.html","feed87b3e0b50ec4965961ede65d2b21"],["/categories/《算法详解》/page/2/index.html","ed8e1dbd80d176b97ae0f66be248bd7b"],["/categories/《算法详解》/page/3/index.html","05fd145da1b46f563169a525a6c1ae8c"],["/categories/《题解》/index.html","87be40c7fafd7f38db40c9708078bb5c"],["/categories/「日常卡评测机」/index.html","930934d808daee46a50e326e22ce26c2"],["/categories/题解/index.html","c9a9ee23283f80a2ec5d9b252f6f5de3"],["/comments/index.html","553f86884518d3932243b9ab1cb90ded"],["/css/main.css","c4675c50a6b4d7f1b9ff1db4337480bc"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","bd76b1593de0fc21f5ac3090f5cd90d3"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","ade367a7f19a80c13e9d52fcfac5585d"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7bfc2a9fdbe4217d94e1c282c0a79c40"],["/page/3/index.html","955b794bd303bd50c17fc7cd957ab619"],["/page/4/index.html","b39ddc66b19ebd0ef2bfe1c5bd35677b"],["/page/5/index.html","1d804d0b5cd9428df9f58300f90446ff"],["/page/6/index.html","9eb7dcecd4f889a8d75800f6c9eb88af"],["/page/7/index.html","4607a5b9476a979de20096924c914e4b"],["/page/8/index.html","c9292ab1e203eeea016fa170a02511a3"],["/page/9/index.html","71caadad18c43dc14c2a59705b160e5c"],["/photos/index.html","1d096edb8afb53d624bd51b451863a7e"],["/remittance/index.html","73e05f03a8dc4d25a7d19f15cffee72d"],["/sw-register.js","bc888a1662f2139f2caeb2e509a89262"],["/tags/AC自动机/index.html","2f2ddf196fc14f1f8fd800f38afce126"],["/tags/Algorithm/index.html","02d9ce5d4da44b3e3236749a7489509b"],["/tags/Algorithm/page/2/index.html","6979337b39a19add15f8e1809ecd07aa"],["/tags/Algorithm/page/3/index.html","9de8a88a7a78a8438d3e6ad9cf2eeb00"],["/tags/Blog/index.html","8ab62f8f67ff973e3daf6be513f3f147"],["/tags/Chtholly/index.html","deb6ba54b5f0a950110594a6babd1a8c"],["/tags/DFT/index.html","ae4d7da53a291a13ce5f8121902f26f2"],["/tags/DP/index.html","7c45bdc51eda5236a518c72f64f44c47"],["/tags/EK/index.html","de4a9a92701d2bc1e30029a01c53ec89"],["/tags/FFT/index.html","2464d95a95bf0c9341e5106cfff460ae"],["/tags/Ford/index.html","ad41dfce790b8e9e7ec386c1eb2f422d"],["/tags/IDFT/index.html","96f224ffb47c9a38915c3455f48a2cf7"],["/tags/JSOI/index.html","b6b6b5681d08fd0507efa88615f89bfd"],["/tags/KMP/index.html","2cb5e667f2bce8865b30d91a139ff43b"],["/tags/KMP自动机/index.html","2a63283d6e7352012ee113da25454993"],["/tags/LYOI/index.html","b8a2af1cd50dcd4f2c8dd25014ed4056"],["/tags/Lemon/index.html","a0d5278a10e520d0e904567490033576"],["/tags/Lgy/index.html","7f7bc39265bdec50521681c19b556bee"],["/tags/Lucas/index.html","1f498ab55038a43befcdba7ea0782814"],["/tags/Luogu/index.html","fb72b4f1ab6cb02348237f59a005d9fb"],["/tags/Manacher/index.html","135158040292558bf9ea0e154ddeddac"],["/tags/NOI/index.html","ed2659d46ff08abf1a88a65f1f17f0d5"],["/tags/NOIP/index.html","3c490a34b9e92b90a35168b395ab1c55"],["/tags/NOIP2018/index.html","b6f4481b1a553f539b1614b8cde2e725"],["/tags/NOI导刊/index.html","48d8459527ee037a1576c0a5642be737"],["/tags/NTT/index.html","973417b959c7ec7c20dc703b4d3a65bf"],["/tags/Problem/index.html","20b7d5e9eb2671d4da3274fbb1f263c7"],["/tags/Problems/index.html","39ab579435c1558b779d4dcb56db2645"],["/tags/RP/index.html","f8e9a81e5c92b306d96b0cf40c08883e"],["/tags/STL/index.html","d9241d5daf2092e18af5656d0c9b9532"],["/tags/Splay/index.html","25a0ea4d740524795e766a2fe60b3fba"],["/tags/Tarjian/index.html","492c366652e4c30c40535fa52f197db6"],["/tags/Treap/index.html","0a8fe3e0881f69fb483de584ac23a034"],["/tags/Trie/index.html","62bfe4de2c040026463916fe4bee816e"],["/tags/USACO/index.html","6fccea2f6c490f6664d4cd3ee528fec2"],["/tags/ZJOI/index.html","c80e6c90257046ac7f9fea73fd3aefe5"],["/tags/atom/index.html","e5aff2f220b908e95c65b0dcfcb835b3"],["/tags/blog/index.html","a6bc660304ba8811c50d6a602e7eb22d"],["/tags/bzoj/index.html","fd135214afd562139635987bc95b8d50"],["/tags/css/index.html","66cef46129a27410db49164400ad830f"],["/tags/dijkstra/index.html","f48e19e67beea6d90654b0b0da6a0618"],["/tags/dinic/index.html","e1c0830800dc36ece4abb3ef5ad667af"],["/tags/fhq-treap/index.html","893603d17974b87fc5ca8ea527b376a8"],["/tags/git/index.html","3f7092ef1be00cc8863f4fad43d34123"],["/tags/hash/index.html","46c457be4b2eac0b82fbf8c0f77c3122"],["/tags/hexo/index.html","3d3141eb450f3d77ba8309be85aed043"],["/tags/html/index.html","7c7f1d34690f5e4e07d971dca1aac407"],["/tags/index.html","b462252eebab862a6bd49fac755e3f2a"],["/tags/lyoi/index.html","842c65e39abd383f376d88fbf90c2794"],["/tags/markdown/index.html","aab8834db65172e9656a3f0bac8c0a52"],["/tags/plugins/index.html","7dd130606a9de292acb1d94f3d3dd9ea"],["/tags/problem/index.html","94cf0fbf9ff30ac4e2fb293d5e1ddaa8"],["/tags/python/index.html","d8108f0128483ab13231f9866653681e"],["/tags/qbxt/index.html","1ec46fb459c9e7977449675962a7b497"],["/tags/rope/index.html","fc158d8beef6d28c903be9ec8196ed42"],["/tags/spfa/index.html","da19fffc6976e12c2a147492bdf56462"],["/tags/system/index.html","2727cf0c6b2fb9e5188e94090fdff098"],["/tags/terminal/index.html","d3791b97fb43ffe97eb0b0c1857400fa"],["/tags/zkw线段树/index.html","45fe2e1239775bcb25e8b30ba8f8112c"],["/tags/临沂一中/index.html","0690d521856c87fa8e0928ba58360dce"],["/tags/主席树/index.html","b339bc638072424da89b5748a2adbe0b"],["/tags/乱搞/index.html","f471a3ff8716216fbe5dd65558bf3452"],["/tags/二分/index.html","95b7f171c51fa40a84bb276f20fb7f27"],["/tags/二分图/index.html","19cd4e2c979e1b538316ae0f18a770e6"],["/tags/二分图匹配/index.html","71a93468d178c3edb91ca8f7f46e5df3"],["/tags/二分图最大匹配/index.html","8950370f864287ded3564af51eb035bb"],["/tags/二叉搜索树/index.html","9a4674607ce40fdc1ce1e60fb2072484"],["/tags/二叉树/index.html","dc70c38901bfde28eeea5f50bdc00d14"],["/tags/代码规范/index.html","a39671360237cb640d8cbef882180c5e"],["/tags/优化/index.html","61e847416dcb2e595edefdc30503dfb6"],["/tags/几何/index.html","d656fa4eaca81d5131a6e21a4e4351fe"],["/tags/凸包/index.html","bcb86d891f0e4009f54f7a7d950e432b"],["/tags/函数/index.html","4c378258b512f7d758b58b0e5745af5a"],["/tags/分块/index.html","f73c09a9ee4ad02434910bb05ecb8854"],["/tags/初等数论/index.html","91a882f07da0795d8c823019b4aed01e"],["/tags/前缀和/index.html","d1864142a07f15b09b42630d679f2675"],["/tags/动态规划/index.html","47a6ea2e4a0fdd27a4c3ca1e7663701e"],["/tags/匈牙利算法/index.html","3f97b8f74d320705c4ec461640d4b9e3"],["/tags/区间/index.html","256cec00371752aee4807e10218a7c8e"],["/tags/区间操作/index.html","269d318a1f85d26abde6bfb6b1d631ca"],["/tags/区间第k小/index.html","ac2399530e35c8480806764d0a43ab67"],["/tags/单源最短路径/index.html","ded99c5d74e7210f12df929e8ec79e4d"],["/tags/博弈论/index.html","1c00323c7262bda3c0f9b38e702a3ea3"],["/tags/卡常/index.html","8ce31e76453d86b248a9fa65c78b1226"],["/tags/卢卡斯定理/index.html","5a0fe5c0c6ec59cb3510a51d7b5a701d"],["/tags/卷积/index.html","8637962376c71e8d6c1c605a98f0f28f"],["/tags/叉积/index.html","ddb7fe70a07ca54d801dfbc5e7b87c62"],["/tags/可持久化/index.html","fdea2838214e9c632ea3b802dfc4a186"],["/tags/向量/index.html","0abf6e688134ef189f37c40f9ac7c441"],["/tags/图/index.html","0db23fa17c6be85e589aa926361674f5"],["/tags/图论/index.html","22faf55cd174979ad20cde5b861f32e5"],["/tags/块状链表/index.html","2597ebd4db62fcfb89e351944a347245"],["/tags/增广路/index.html","4b35a5c59f07312992fd15efb5584d33"],["/tags/复平面/index.html","bb8272e0e184ce534493f0ac9a353f1f"],["/tags/复数/index.html","1bb5a8af424aa2e97190d24eb16940f9"],["/tags/字符串/index.html","17b1fa32d17c7f44b829b7e6a71bcbc1"],["/tags/学习笔记/index.html","fcb96f64b47a09d988edd4c171520677"],["/tags/常数优化/index.html","9761cfef95ace29b08203d0a50247cbc"],["/tags/平衡树/index.html","11213c5952fc70f5da1558e8ae8a4774"],["/tags/并查集/index.html","ea623b70b0ba8923d46e1d500765c20a"],["/tags/强联通/index.html","e96ccecf52575b67c511aa0e34b1c0bd"],["/tags/快速傅里叶变换/index.html","b4d5ba65430bf61acc6ffd9eaf62cbc9"],["/tags/总结/index.html","18f5dd49e1ff56e83afcccb28a09e26a"],["/tags/感悟/index.html","cb6a2aa73ad79f85d76f41093f522aa1"],["/tags/技巧/index.html","3a55833d58849d9139d6c1f5064c29b9"],["/tags/抽象代数/index.html","229437c6cbf3eed6a321963c7f891ec7"],["/tags/教程/index.html","8fe989f82e22f26508628e3cf531ec66"],["/tags/数堆/index.html","46cda474d042767ea7aca956853611a7"],["/tags/数学/index.html","fbdc60e6d135071ed7768a49d23617b4"],["/tags/数学/page/2/index.html","858307e050ed4a817e9650348df92380"],["/tags/数据结构/index.html","a531b50854b7837be2365bc44c36e73b"],["/tags/数据结构/page/2/index.html","a43fe16f6f537021d4d3930ea993ceb0"],["/tags/数论/index.html","065748a5f4fce6bb918d533f8b7a72f1"],["/tags/数论/page/2/index.html","f4c7127ed2aacd4722960d4135e0288d"],["/tags/文学/index.html","2bf99509ce86970315f76cd2e81e28e4"],["/tags/方差/index.html","5913dc2d914bb8e644aa9129ab5017a9"],["/tags/智熄/index.html","9f78720d852802b04da91474c6341652"],["/tags/暴力/index.html","1416120482d1bffc16d9289f040c44bb"],["/tags/替罪羊树/index.html","34caffd6bd2577d334dbe615d63b48a4"],["/tags/最优化/index.html","cdf7a3cf31409885c414aa1e56c3ea3c"],["/tags/最大流/index.html","7494960abc27756e469e988b8c294be2"],["/tags/最小生成树/index.html","d1a7f72414380a6f4f99878632042dff"],["/tags/最短路/index.html","823a30f6950526b45407239e8402530f"],["/tags/最长回文子串/index.html","cc1c9704790f47e238d9ef3d3a4b7ba1"],["/tags/极角/index.html","77548d73ef6b3ed1d3ac2bbaa6bdb5d2"],["/tags/染色/index.html","bbe8342a88181ff5746842d3acadc4cd"],["/tags/栈/index.html","bc82a38a78a3a6c75d85bb3375e87cbd"],["/tags/树/index.html","c28a3e10f32e8d47fbc91ec59ec3696f"],["/tags/树剖/index.html","7d30d1ad2671423e3febcef2cf38c630"],["/tags/树套树/index.html","58c130c9cc3445cb0de95187bf8f5692"],["/tags/树状数组/index.html","cec3690cfbc7c81e38303476a1d44e68"],["/tags/树链剖分/index.html","63515defc3599f9509a80f27f6706e9a"],["/tags/模拟赛/index.html","d101ffbf5d946ce7f7b386ac267f40f9"],["/tags/模拟题/index.html","bae9cde2e91883dd4fc22b40cb0d9f56"],["/tags/模板/index.html","792d6080f7298e54940eb859439bc6f0"],["/tags/模版/index.html","37e7d56b8f68c9c2b59f77e2630b2cab"],["/tags/模版题/index.html","6ba933e9c357f2c9189ea329d7476f8b"],["/tags/欧拉筛/index.html","f7ffdbdc3424f7d1cde466abf84d4134"],["/tags/毒瘤/index.html","7481ddb1ef07e82575de96577d830121"],["/tags/测试题/index.html","357a2f685098a375bcb86ad53dd3040c"],["/tags/济南/index.html","6df3ecd8628761400148a9b1d0787ed6"],["/tags/清北/index.html","16dc64e40d124b89b1f16d76d006f145"],["/tags/游记/index.html","81d14c475db11ce2df7db2f978dde1ea"],["/tags/爆零/index.html","99a6fc58814b8c4398d7b593265e6764"],["/tags/玄学/index.html","938b2ae57806034961f6445b3a9e9ae8"],["/tags/珂朵莉/index.html","1d79baa73f9723517e7190209ed5df3e"],["/tags/生成函数/index.html","f071c4efb9939038c0290e93c8385775"],["/tags/瞎搞/index.html","05f4493410cc5ba65450d233f7e8e653"],["/tags/矩阵/index.html","ff2d80ad57e66a71ed2e853e61488c9e"],["/tags/矩阵翻转/index.html","048f9f931efef820e0c8bce1a42f53bd"],["/tags/算法/index.html","2faeb5c353fb96cc585b179d2df35023"],["/tags/算法竞赛/index.html","794c16ec5fd016a88769bc7370528bfe"],["/tags/素数/index.html","d1d134b377ccd144add287c0f738976d"],["/tags/线性基/index.html","b8ab6c06d7a1b9d8b0da413aa5f5cc72"],["/tags/线性筛/index.html","e27bf3830300be50f81a85df469084ac"],["/tags/线段树/index.html","e8ab46095d62e147ee2d3f252b5728ae"],["/tags/网络流/index.html","594b8d5a653dcfdd99395e38d1535cf9"],["/tags/群论/index.html","048c21ecfc6e8bc6e1f7a72190aba011"],["/tags/自动机/index.html","57aecb63d38e55b0d39104f0c2934114"],["/tags/莫比乌斯/index.html","f1d52ea588a917ff22abbb41d35a24de"],["/tags/莫比乌斯反演/index.html","ace766df0215009eb646996d4ccec88a"],["/tags/虚数/index.html","e068dfd86ceddb97cc0e651b5e4ab162"],["/tags/计算几何/index.html","7528af13c620f85ce8754154084b00eb"],["/tags/证明/index.html","197eb9ffdc978636f3d066bb8f591c99"],["/tags/评测机/index.html","1115c55613ca704e64f3e0bd2c8891d4"],["/tags/诗/index.html","9a0d050888f57e42103b20f33cecefe0"],["/tags/费用流/index.html","3fdf6e464cbab0b12fcad2cd9675d3ea"],["/tags/路径压缩/index.html","c7c8b004388348e3c43dfc1839efc74d"],["/tags/逆元/index.html","51437b63f4cd1b8cefd54a9788dbd63d"],["/tags/递归/index.html","a6e66d6119a97b239bcb0043da35540c"],["/tags/递推/index.html","ed79cc73041bad5dc8499489bd681371"],["/tags/邻接表/index.html","b341f76b32d5c90bbce5bc250060e358"],["/tags/随笔/index.html","cb21c462daf6d4f898b0f978e7321ecf"],["/tags/集合/index.html","637ced8881ddf7743eb837bf0c2a5d90"],["/tags/集训/index.html","03f42cb7e7f7a6ca2f83c7068553c03d"],["/tags/非旋Treap/index.html","6467e2fccb6c3f8bf38f31c4b34bd249"],["/tags/非递归/index.html","e50f4b2135ef673c9241f0cbd32eecf4"],["/tags/颓废/index.html","5abb58657c1b5831f2338dd724146641"],["/tags/题目/index.html","da0c9631a0227c63be78b96ae0840f03"],["/tags/题解/index.html","df963300b6906229f6a7827585893a9a"],["/tags/高性能/index.html","93225d9bd04f41e111d334b8acd0624a"],["/tags/高精度/index.html","88596fb1a24745325b38e30c6b7895b2"],["/update/index.html","a2578d840af4b261ca4e2e4dd794cb0b"]];
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
