/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","db36542fc6661d3d393de33878da271b"],["/about/index.html","5b802269a5f0f56b1deee856a844099f"],["/archives/2017/12/index.html","013de2d6f4802ebece666d78bdb088c8"],["/archives/2017/index.html","f397afa1294ac3ee8b238c7363608038"],["/archives/2018/01/index.html","0089a0cb94f97a149086b8691de64f55"],["/archives/2018/02/index.html","7f053d5b42f459f647279f147ac35f60"],["/archives/2018/02/page/2/index.html","8af1ff88e5f900215861ef163a661164"],["/archives/2018/03/index.html","3df1eb4edb3b64dce409be6eb309427f"],["/archives/2018/03/page/2/index.html","84b07eda0349261c55ae0497b1b71ce7"],["/archives/2018/04/index.html","78442baf3c9e9b969cc5e8a48a29386f"],["/archives/2018/04/page/2/index.html","2c0dfb14599948015e78e0ed7c50dcc7"],["/archives/2018/05/index.html","bff01786641ade1a45fd0d4df35ed8f9"],["/archives/2018/06/index.html","06475a4696c9305f78cc7abac6afb0b6"],["/archives/2018/06/page/2/index.html","ddbd4037b8a3bc0031ae03676536f7aa"],["/archives/2018/07/index.html","def54d65c0e825e84a13967c7124c786"],["/archives/2018/index.html","4d60aabe46bafeca6cee3c5d626850bf"],["/archives/2018/page/2/index.html","f9d3794d414af5cb7d8a13ebc56d474e"],["/archives/2018/page/3/index.html","3675d52c94b499d835ac7313f2e809ef"],["/archives/2018/page/4/index.html","07a6bd1a4d3421b5b1078ffe5d874b94"],["/archives/2018/page/5/index.html","5f2384bc82f52e67f06b29ed8cfd3912"],["/archives/2018/page/6/index.html","79350f40100adf921819266673acc722"],["/archives/2018/page/7/index.html","0dd1641c24db30b8b61e3066f4e1f224"],["/archives/2018/page/8/index.html","1c4aa69d89cdb72adfed8b6ad275bcce"],["/archives/index.html","ff3da7710bd96358783c954cc4f2469f"],["/archives/page/2/index.html","7541b1a155e09a73a507ebccc9a6e802"],["/archives/page/3/index.html","7bf2bce30c3f5ff24a8ab459d03fa6f1"],["/archives/page/4/index.html","03c80c02c665d8b443a030c25d7e6e51"],["/archives/page/5/index.html","1caa9a20e9edda6893a28658f5636fda"],["/archives/page/6/index.html","bf117b2414c4427b020743e7b91f1103"],["/archives/page/7/index.html","1869429c6e0a56eefa4b970ebd6c150f"],["/archives/page/8/index.html","e47464420a10214d3743e9857816459c"],["/archives/page/9/index.html","9c72edc06c8f4b4469f35897519ea73a"],["/articles/18-4-27-things/index.html","dc6907169b1411ae5e8c2ce4e4838e64"],["/articles/18-4-29-test/index.html","0d8621e77935ce8dee038ea0bd3fb24a"],["/articles/BigInt/index.html","55a3b6f401c6b078effde56486aa9e6e"],["/articles/Chtholly-Tree-ODT/index.html","b47545ea5a3c504398e0b09a73c32215"],["/articles/Code-Style-for-OI/index.html","a963c667ba526912b1216b4523a7183e"],["/articles/Computational-geometry1/index.html","3b1be85019768d54a3ef8d15b60bdc4d"],["/articles/Computational-geometry2/index.html","4a2475a53e2d08551f60f8f649f489ae"],["/articles/Dirichle-product/index.html","49046728789d61fde07ce20cfcc64297"],["/articles/HeatWave/index.html","97a5938e3a9f6390f0953cb27b02cbb4"],["/articles/JSOI2009-游戏/index.html","476de75b99f727e682026072bb1329a2"],["/articles/KMP-AC-automaton/index.html","7be3c3770007b172b5d83fb3c8d1bc7a"],["/articles/KMP-AC-automaton2/index.html","f29110e067622d1419ff0786b5a4b64c"],["/articles/KMP-AC-automaton3/index.html","55e3ba7de57ea0449e963bdf3154656d"],["/articles/Linear-sieve/index.html","06a6b7bda5bf2a7fa3aa6f026ee272f7"],["/articles/Lucas/index.html","700e6bd304754b8818efedd763ef2828"],["/articles/Manacher/index.html","bcc466ba11a4b2b5cc76ffc2263be456"],["/articles/Minimum-spanning-tree/index.html","ca43161f4b5450a5f47dcaecff16ef34"],["/articles/Mobius1/index.html","3897cabd81d8f60cc95b0582e72d0015"],["/articles/NOI2010-Plant/index.html","0d80aaccbfb2f72ac4c25b24df3df65d"],["/articles/NOIP-2018-zero/index.html","5cd04e4f23212ccb641d19df58735d68"],["/articles/Network-flow-Algorithms/index.html","9cf34a1e3827126cf236ebb705cf1a65"],["/articles/OI常数优化-进阶/index.html","9c72d11cb80c7c9ed35ca611235c8d48"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","56d1ac68f44d3cc1361836229aed692e"],["/articles/P1984-SDOI2008-Water/index.html","e3ea6d3cc6b13be84a1e7a60ba25e52e"],["/articles/P2018/index.html","1436777196178a5e259587bc359c0cc0"],["/articles/P3933Chtholly/index.html","514ef6ef1593c4f3ac5a007cb544949b"],["/articles/Partitioned-Algorithm/index.html","306442153ae046eaa7db21df43361f73"],["/articles/RP-introduction/index.html","f212dd2c6eaebfb2322b6b556f5e2daf"],["/articles/Sandaram/index.html","2804d68b5b0b19cbfd54ff0fa57ead60"],["/articles/SegmentTree/index.html","c2f22ce5266ae3c1dbff74948d5db09c"],["/articles/Segt-in-Treap/index.html","a3e9607bab2ca9fcd87910de4bdd9b85"],["/articles/ShqProblem1/index.html","cdf3f81ab6185a6771840f4e22a36ed5"],["/articles/TreeArray/index.html","85f067bd4910fa06a6c5fa43072987c0"],["/articles/TreeArray2/index.html","9de73584fc8c9d62db186b8b380ec94d"],["/articles/Union-find-sets/index.html","1bdf302ed258b45f1916c94306d02c95"],["/articles/ZJOI2007-矩阵游戏/index.html","bc18a5f97d1ce10680a05b5af59709f4"],["/articles/a-bproblem/index.html","fbcfb4243d112f31debac94d29251bf8"],["/articles/aboutBlog/index.html","1b771fa6be2d49faffcd2376e13747d3"],["/articles/aboutgit/index.html","b6dbe5288a84eb8586d8f75a4ba1ff9e"],["/articles/atom-plugins/index.html","1b48e535800e27833f5c11d0baf93366"],["/articles/autoAC-lemon/index.html","cb4dd6ba180a6243918692ee1c127b85"],["/articles/bzoj-3337/index.html","2e6a9775d3240bb346dd1e7c14a08786"],["/articles/cppteach/index.html","adfa4d76e4cb231509dab3fefab615c5"],["/articles/css-QWQ/index.html","f1780769cb8c6dc852195d70fc445487"],["/articles/dijkstra-spfa/index.html","6db4957e177a90bb9b60b1bc5c0786be"],["/articles/dijkstra/index.html","f6956954a0d2bbd22318624c522ae4a2"],["/articles/dinic/index.html","0b65d96d61a76c5d9c1adea71ca822c2"],["/articles/duliu/index.html","6b9fcf095a7233d372e485d78b98c594"],["/articles/dynamic-planning/index.html","90cbb43754f9ef5867b55c7428ddfe1f"],["/articles/elementaryos/index.html","0659dc184749e56383845f4072473b91"],["/articles/er-fen-tu/index.html","aa88e23a47a6fd00d74258f2e63532a1"],["/articles/fhq-treap/index.html","0706a8e2fc764de308467c8d48ee9f84"],["/articles/group-theory/index.html","af3654e8e80a9789cbc3f2429a3d981f"],["/articles/lgy-from/index.html","cb1a8ecc9e817f4d7aba134aeaf6dcab"],["/articles/linear-basis/index.html","35e8c2e674f6491681334924726022ce"],["/articles/lyyz-test-2018-5-19/index.html","effc4d51b11406433f0100a5a606ef71"],["/articles/markdown/index.html","c3aaad17a256f567da3b417b0ca7215b"],["/articles/moban/index.html","43649c15ad375fd8a9d900abc5629050"],["/articles/poem1/index.html","354c5f988af239b48a63471fda59c73f"],["/articles/prims/index.html","0f404fb72dd4936ea458968f2abec4e8"],["/articles/python1/index.html","0f10eb48d7220de479565e5fb970b7b0"],["/articles/question-01/index.html","0e0fedd009d9f317853559036c2c2c58"],["/articles/recursion-to-no-recursion/index.html","ac9daad2fdff8dca9b6a50b39fb3f298"],["/articles/scc1/index.html","969ffd76237a25ffe9088677f212e0a9"],["/articles/somethinks1/index.html","dbdbc83c2fe20840f448392ad6cc38fb"],["/articles/terminal/index.html","67290b60fec8cae8d8623a9847894c45"],["/articles/terminal2/index.html","d64034bbb61ea9a83e9f52259cfe4127"],["/articles/test-mode/index.html","ddf43b4850ea53c0cd4326158a955e08"],["/articles/test-polyline/index.html","ed367e8c79290b837adc8702f3e7b376"],["/articles/treap/index.html","c499b39e2916c5c4a8ca205ff222bd61"],["/articles/tubaomb/index.html","ef4ce7926b01381972cb8932077e3db2"],["/articles/use-hexo/index.html","b7941c465875f85226d3faabf3f462e4"],["/articles/use-hexo2/index.html","cc9642ae0d637f0dfd2fd07c7549f617"],["/articles/zkw-tree-algorithm/index.html","9f30b29c7a41589987b32f33f627cc0b"],["/articles/zzWA/index.html","ffb8fb545e5abfc0980cb90403902979"],["/articles/「LYOI2016-Summer」一次函数/index.html","d69715e083fef6e575d9f04fb9111b49"],["/articles/主席树详解/index.html","09be290f832620d3a88a0b95d90af0b3"],["/articles/分块-P1471/index.html","cda60406e53c82db703707c5925988c7"],["/articles/可持久化并查集-rope/index.html","39286893b3ee44eb890d282d88a549b2"],["/articles/洲阁筛/index.html","46605065a93ee868d661790fc7c73746"],["/articles/生成函数/index.html","45a5513c239802fa06a1e95c65b3ec6b"],["/articles/网络流-二分图最大匹配/index.html","eb41477c35e0e83a8729547a14b9f484"],["/articles/自然数的和/index.html","150936f447ebe1c203012e629e8229d1"],["/categories/Blog/index.html","e4120d691bb656187a0984ac71d541a6"],["/categories/OI/index.html","7ad0bf7a49611841f88a0b2b8793ce44"],["/categories/Settings/index.html","0162a95e7d7c99b77ea367e258f770fa"],["/categories/Shq出的大水题/index.html","a1c8f28ed6e3b075189a207ae8487c99"],["/categories/index.html","3da322645261c583e8f6598034c3a327"],["/categories/system/index.html","3e85918a99fed1c3788d78c007d25b71"],["/categories/《RP导论》/index.html","9f41c5fa0ec66d770eff2e65890a0b48"],["/categories/《Shq出的题目》/index.html","b9cb786d4333eed6ed495fa50212b0dc"],["/categories/《Shq笔记》/index.html","2d34da2931add5bacdf9e85dddfa7e08"],["/categories/《Terminal教程系列》/index.html","76413f2b8fe76ba2d04416bc31ebcbf2"],["/categories/《hexo的玄学用法系列》/index.html","b7b61ec02c5e913c0d51561398d8a858"],["/categories/《人生苦短》/index.html","45bb445c4368fffe220b2a6a85403284"],["/categories/《教程》/index.html","0a02e122788b52981ffc6afcd03b7159"],["/categories/《最强的Lgy》/index.html","210fe0940a9c25c6a0f6e742b1784cac"],["/categories/《烟雨茫茫》/index.html","7f476ed17b019aed3516b0de73dfaec9"],["/categories/《玄学》/index.html","c6d3a74ccbec64f1214d7043e8df2430"],["/categories/《算法模板》/index.html","5c512c2b18a3956c82294bccee6d1eaf"],["/categories/《算法详解》/index.html","3e6f21718c7f24f158ab0f22ac4adc0c"],["/categories/《算法详解》/page/2/index.html","2c3d3effaafa29c81cee07356cbef19d"],["/categories/《算法详解》/page/3/index.html","b4a06173b0353b20b1787cc1a18848e2"],["/categories/《题解》/index.html","545d4082063c98c356a3a666b0795e80"],["/categories/「日常卡评测机」/index.html","c0e0e5cdb90449162c1b924d13c8c7e4"],["/categories/题解/index.html","22d22b2e4dd4a490a3f5d9687425cf8f"],["/comments/index.html","b08088fccee3dbe22f6fab2a7bbc43c9"],["/css/main.css","a992d720bc532fb7ae67dda8b546bbbf"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","7e76a176629b46842ddfd24171a08865"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","705a6e0b77df37d84e793533bbfb17bc"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","0943135d43d9915a73a3c4fb72d576c6"],["/page/3/index.html","ee6507606c3a85c87777fd86caabed40"],["/page/4/index.html","31879672cffe88c50f647f8721e33fd0"],["/page/5/index.html","114c8d66104744835503b6b33771fb59"],["/page/6/index.html","9e6b17a28800452c358d6dd2217807b7"],["/page/7/index.html","54e0d1fc5268ff47bf2bfd193fa01c85"],["/page/8/index.html","e1994682805b475270c09aee2c429e64"],["/page/9/index.html","075dd00cb5fd13445dbb65a8dae25ae7"],["/photos/index.html","8d16e9c6786aa3b573ec02dddf5c9ce3"],["/remittance/index.html","ac45f2a203daedf947b6a5ccf4f778aa"],["/sw-register.js","56f73fe414176023f2679d8d264a6864"],["/tags/AC自动机/index.html","acd8610ae304adc1c56e0f3d2c04a145"],["/tags/Algorithm/index.html","f73473fad3f28191c41a227a6d94772b"],["/tags/Algorithm/page/2/index.html","cff7c0930eea605f74a388b0ae6426da"],["/tags/Algorithm/page/3/index.html","914435b6b4c4342ec1fb6c36f8b9fa84"],["/tags/Blog/index.html","b948b3321c13810846ef95f13b1a6679"],["/tags/Chtholly/index.html","df4d0bec0b9dfd6dcfd34554b69ed052"],["/tags/DP/index.html","9e330dc02597fe533b7ced8b6b01c8e5"],["/tags/EK/index.html","2ef85655e3d21819c5f33ac99a5c1a60"],["/tags/FFT/index.html","b7a6212643b21f94dbc8eef3d0e55fda"],["/tags/Ford/index.html","6449cbdd4559266366e8511b1cde0b3e"],["/tags/JSOI/index.html","1e6c2c232c352e82a2ccda350f3fc249"],["/tags/KMP/index.html","16ee70b3f79b3bf364f755636a91a117"],["/tags/KMP自动机/index.html","cf58932e1f74dad0dc6cfa3f85b15f04"],["/tags/LYOI/index.html","83de26212262bcb5c29a4737fd343613"],["/tags/Lemon/index.html","bc84526a07cdde471d39832072e3ec5c"],["/tags/Lgy/index.html","739deb8054fc8fd55555791c89b614d4"],["/tags/Lucas/index.html","3a927c2e7dbbb68cdf2f556f7dbc1f4e"],["/tags/Luogu/index.html","54c9935b8e53650c8817bdf7cb90e58d"],["/tags/Manacher/index.html","b95d6fd0091576a9da4cecbbeea69ad6"],["/tags/NOI/index.html","c2db9fb1e94f154ede5d5d1f38d9add6"],["/tags/NOIP/index.html","eedd28cefa4fd824ebaaef39a7baefb6"],["/tags/NOIP2018/index.html","dbbfb453249f38b2be23ce4138df8b89"],["/tags/NOI导刊/index.html","659eb2517ede1d797bda9d5c6fe2c7cc"],["/tags/NTT/index.html","08ed6d6afb2656268536d04e8f0abd91"],["/tags/Problem/index.html","f5367242cd06471740c8407d798783ca"],["/tags/Problems/index.html","26f3293e75575679eeab1a82c72450c4"],["/tags/RP/index.html","989d314ecb88e6dfec385b8c8538290c"],["/tags/STL/index.html","00aae9b4e6a1e7c075062f233c6a0487"],["/tags/Splay/index.html","c2fb03b1c18548b89b22610d70d8d957"],["/tags/Tarjian/index.html","d54c65261eb607d4572df7f59180baf6"],["/tags/Treap/index.html","e66c9ea3883f56825f35606ae9f4b1a4"],["/tags/Trie/index.html","12ebb5c7189ccad2e994b990c7a20dc1"],["/tags/USACO/index.html","5b57784f97a8881126605c1a3adab04f"],["/tags/ZJOI/index.html","356539bfc11da048e6b4914728a99309"],["/tags/atom/index.html","d8345600db871ad12d830df0cf266deb"],["/tags/blog/index.html","0b582dee83e82053ddc4aa88b41f3811"],["/tags/bzoj/index.html","f08740f806d702db3ee81d5e65af616e"],["/tags/css/index.html","dd5374843f7685f62c03a00ad54465aa"],["/tags/dijkstra/index.html","21ef15dc95c0db9d17888ee49910998d"],["/tags/dinic/index.html","d3bf85b036694f2f1172385d6146cbcc"],["/tags/fhq-treap/index.html","4571f1ccc1ffad9d59301c546d299b73"],["/tags/git/index.html","3265a212ccc6d328adc464c5b1649955"],["/tags/hash/index.html","357afe2ad4dea08323729c5602ec2d2b"],["/tags/hexo/index.html","cd431e4089b6cdd48705200e4477bdca"],["/tags/html/index.html","e84226e6605ee9f114f91ccad3fa7263"],["/tags/index.html","763e4e38e0a0f4526b9caa7a56a45d27"],["/tags/lyoi/index.html","35fcd547e8d16d105b09bb525af6302f"],["/tags/markdown/index.html","beda401b2de16bf0ca16b00f463d88bd"],["/tags/plugins/index.html","5c39fee6ecb029ccf0d27753efcbe029"],["/tags/problem/index.html","82c879968dee89b3cdf05c7e3e1c254e"],["/tags/python/index.html","358832a4f938fdef85cdd6d1f3193e8d"],["/tags/qbxt/index.html","d010e6ad73ceab529a8dfaa0e04282c8"],["/tags/rope/index.html","03af4c03a2b6d017e8ccb43694d549dd"],["/tags/spfa/index.html","f2d2c65af157081aaef237c6f4169976"],["/tags/system/index.html","c2baa05a88333986fd3a6ac3d56c817c"],["/tags/terminal/index.html","dd6e6b07066fed691ffe81f5aa406237"],["/tags/zkw线段树/index.html","e1f71711915c1ad7814e37662a6867b1"],["/tags/临沂一中/index.html","b39cd0176e31d149ba9200416b86c783"],["/tags/主席树/index.html","f5fac61202fb8b29c521ac20ee1ecf20"],["/tags/乱搞/index.html","e228d596a8e1da7d355974a8168c2c5a"],["/tags/二分/index.html","6e06406087c6c81b09ca1bf2b2429acf"],["/tags/二分图/index.html","cccb464ee0bca21a419b7a06c0fa0e02"],["/tags/二分图匹配/index.html","352f844f1406a0e331bb503970ea54ef"],["/tags/二分图最大匹配/index.html","c5a3c356b3d7b448929ca825a8b3ac87"],["/tags/二叉搜索树/index.html","ce01bf978520d2e129a0790d7d1d5612"],["/tags/二叉树/index.html","5e9e4336539093b5785dd6a1ad16b702"],["/tags/代码规范/index.html","5e23e2fa10e3554ea159a5aa628d7e20"],["/tags/优化/index.html","4de21d5f0e27f48041ac816086547844"],["/tags/几何/index.html","13c1491267d0f25da181a35e24a251b0"],["/tags/凸包/index.html","c5ff36486988424d609bd25e174863f0"],["/tags/函数/index.html","bf5e57196b579aa74cad7367273ea806"],["/tags/分块/index.html","4f6005667d7c8d1d8f8038741ede22f7"],["/tags/初等数论/index.html","c4af2e5e58e7348e413b0fc3a848c4e0"],["/tags/前缀和/index.html","1ed4dcc854903078456e98f1d65432a9"],["/tags/动态规划/index.html","743f35729f784c3403503d2981606b57"],["/tags/匈牙利算法/index.html","0479dfcb847740d546b22f5bea1b51ce"],["/tags/区间/index.html","6b054bc30b45c7295a15a9848e1ca509"],["/tags/区间操作/index.html","6218fb0b333fe073168038769af1ed0e"],["/tags/单源最短路径/index.html","394fbd2f9afb67d74eae69587b2d006b"],["/tags/博弈论/index.html","158a1a0e32092852379cc66ab119589c"],["/tags/卡常/index.html","49f4812904e6a426e33c020b22889e44"],["/tags/卢卡斯定理/index.html","7cf41da2b986a769c2d7c5a5f3472d07"],["/tags/卷积/index.html","45dfdd298c7985b726fa5e6f15e5d65d"],["/tags/叉积/index.html","ec364e928a5080b2ba993e2f62733aaa"],["/tags/可持久化/index.html","4a324caea90312ff546db32bd76b4ca1"],["/tags/向量/index.html","a6643893844bd9b3ccd4d329f6889628"],["/tags/图/index.html","48a7aeec3b4c5eb47724d0acbe4bc30e"],["/tags/图论/index.html","70f579a1c8f20ac20a2328b4b18fec74"],["/tags/块状链表/index.html","9a7a7f9cfc83756f39012a38e1cf990b"],["/tags/增广路/index.html","79eacf3c06f50fe81ea89bf3b20a0214"],["/tags/字符串/index.html","4888547747f35fc31360ffb6c50c7cdd"],["/tags/常数优化/index.html","6d78d837236787c4a27899fb8b28f596"],["/tags/平衡树/index.html","0f304e1d8998d0b22f387d3175de8ea8"],["/tags/并查集/index.html","00099a5e66a9c9d887ab091ca9cf407e"],["/tags/强联通/index.html","fcec11829aaa2f405663db262f457dd9"],["/tags/快速傅里叶变换/index.html","ab9c9d02fa38c0783560c15b24c37772"],["/tags/总结/index.html","d9740ad4afa3ee081ec90886c80722af"],["/tags/感悟/index.html","4447374b74a719ba47d9e3cbf2f0565f"],["/tags/技巧/index.html","284792c79918cbe87580e87026c79e83"],["/tags/抽象代数/index.html","8344d519a576078db0db0929fa79fb92"],["/tags/教程/index.html","72f59abf734b1244c89d5f8d90036a2a"],["/tags/数堆/index.html","881046f7ffb16ae413c6cce45a8daaa0"],["/tags/数学/index.html","b895695819de310ed9e8e3c4b03f6290"],["/tags/数学/page/2/index.html","bb745c13db55ac0b14c9274b1d533782"],["/tags/数据结构/index.html","0896b7b562605b7a48676f03cd98ad29"],["/tags/数据结构/page/2/index.html","8d26def8aecdaca7c8af81e5fd91c882"],["/tags/数论/index.html","a6052b9363f4dc3b30d42d34c087bd3d"],["/tags/数论/page/2/index.html","6e67e3349d959d32e8618ad35f828e8e"],["/tags/文学/index.html","a3db871504ce88235ffb6125d7d523fa"],["/tags/方差/index.html","2e709c5c6f60be53b90afa4758cbcec8"],["/tags/智熄/index.html","24abc424063b2bacd66cf525fb4e20a5"],["/tags/暴力/index.html","ef7b34c2d770de35b30101281b525365"],["/tags/最优化/index.html","66f96659fa7f3f0aeacca3d080075b59"],["/tags/最大流/index.html","637f654c6107115e43f43e055d08c586"],["/tags/最小生成树/index.html","88d5d7c8e07634b98a15daf25cb09ce3"],["/tags/最短路/index.html","afb2c6f32ff7857be3792ac4788c1d7f"],["/tags/最长回文子串/index.html","1beb753497b9d4402168a29375be2ff1"],["/tags/极角/index.html","1cb8b3a58f49e3d67a5dfd1969306a76"],["/tags/染色/index.html","b8e439e90843acc12c1e76eb301634f0"],["/tags/栈/index.html","386a7009c137752e256f39be0d204eda"],["/tags/树/index.html","e590ec24e4cbe543599e9fe029b600ad"],["/tags/树剖/index.html","29045b41ecfeec9a06ead959b1de0208"],["/tags/树套树/index.html","9b18ecfbafc54c8a0c8b37003db2c6c9"],["/tags/树状数组/index.html","66765c401daa80c0938b5b0e6108f3ee"],["/tags/树链剖分/index.html","78dfc9978c3d1dec5a1b320bca58686d"],["/tags/模拟赛/index.html","5b495952e63a9dee01f1fefe186ff9d3"],["/tags/模拟题/index.html","a4c8a73ac7ff769f0497d6d783b57dc9"],["/tags/模板/index.html","04cb46757831b569fe7beea016a59c85"],["/tags/模版/index.html","8fee8f0f3cc474172765de5fcf1ce438"],["/tags/模版题/index.html","17cf1cd2ae4233dafae47a6acce2e255"],["/tags/欧拉筛/index.html","63902e2504b4dec2cf41355fe797e260"],["/tags/毒瘤/index.html","6a3086b5a211a785fc970bafd6922819"],["/tags/测试题/index.html","ed73e8b31ce505d8028c9fb89838344b"],["/tags/济南/index.html","8a5e99422e8c7c490d07e494fec2f394"],["/tags/清北/index.html","6ce893454d6d9f1769c612999a7006e3"],["/tags/游记/index.html","46d5b015db5b25c8ffb0622c1638adbe"],["/tags/爆零/index.html","935052a94e83305f56c42b3621e33a49"],["/tags/玄学/index.html","c20952e99b54aa0c1b4e8fd48d99858a"],["/tags/珂朵莉/index.html","f168bf3766301e1fb55fa89d6fc7f0e8"],["/tags/生成函数/index.html","67ccb0ef4a735705907c728d8e1e67e6"],["/tags/瞎搞/index.html","d27181dee1007e52451e466fc422f5ab"],["/tags/矩阵/index.html","86198cd82c45e09689af336b71b13ea8"],["/tags/矩阵翻转/index.html","61c4d1c3c4fb913ce35471cf84bdfe81"],["/tags/算法/index.html","d520efa07d8e8a0891406879ada7cc67"],["/tags/算法竞赛/index.html","a8680c8c62409fa9b0a37ffcb6ef1a0a"],["/tags/素数/index.html","2b22ca15465edd55784f35eba9e4d986"],["/tags/线性基/index.html","0bb35fbb9e45c055c813175573663e0d"],["/tags/线性筛/index.html","dcc400dc499e912000e042c25f5b2002"],["/tags/线段树/index.html","4f7a2878f0a256ae64b1152e1e5c88eb"],["/tags/网络流/index.html","f1454deb2b469e1d9df88ce4a415ccb8"],["/tags/群论/index.html","94a506ff591c4301cbf6e4bba542b664"],["/tags/自动机/index.html","e617696c28bcb539451995b02a5ea677"],["/tags/莫比乌斯/index.html","6c04155d76b926cf877a13ac685e40ec"],["/tags/莫比乌斯反演/index.html","d866d47873228eaadcd2c1c450954902"],["/tags/计算几何/index.html","2ef3e889807dba62e2dd6126938c3b0c"],["/tags/证明/index.html","c23b73b41066e4c12652a4ae4a5067f4"],["/tags/评测机/index.html","862c62e8e449996ea6129ed59f2f3ff7"],["/tags/诗/index.html","423dfe7006cf440b5a909881d273018a"],["/tags/费用流/index.html","69495dea805cccbc1aebb89012c5f297"],["/tags/路径压缩/index.html","f4df4e310cbfebc80131d6c28ec829fb"],["/tags/逆元/index.html","371c232b888f999aa67152484c966d57"],["/tags/递归/index.html","b0bfd6ab8534083e116ffe1d37500d85"],["/tags/递推/index.html","3ced4d8ec4a8a12c9fc24872d3235381"],["/tags/邻接表/index.html","4723ff6e2e70c05983ba7c7125cacd3b"],["/tags/随笔/index.html","4cb27ca21759cde38ea425a09d332ed8"],["/tags/集合/index.html","5166ff2e6b509d9b7b32da2e829b9252"],["/tags/集训/index.html","0c4de7a3d1e43c08a3ecd3c2dff8759a"],["/tags/非旋Treap/index.html","c9da4a182d1ecd5e58bbe5fc34219a5e"],["/tags/非递归/index.html","7983f58735c0c1f3ed0d4c1588fda309"],["/tags/颓废/index.html","8ff7e19014f193d59b310da4e0328607"],["/tags/题目/index.html","971f7a28dba4c150419cf4d6337fb2ea"],["/tags/题解/index.html","2db30849711cb47ba92fe6944921e157"],["/tags/高性能/index.html","4db9669701c1c01c6f67bcd8bbecef96"],["/tags/高精度/index.html","4d6e91a46674017ef262527be6e6f24e"],["/update/index.html","1bc127a91bd1298b11fdd1b3a1dc6167"]];
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
