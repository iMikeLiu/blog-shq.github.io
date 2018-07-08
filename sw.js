/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","7fca8ae5d8d5c299d6ac7bafe2f21f5e"],["/about/index.html","6440338bb860052cdbeef1afd3a883ee"],["/archives/2017/12/index.html","861e4f014ce9b01401ecdb9bfdbf28b2"],["/archives/2017/index.html","a1b785777788b34dbec79bcb4352d39e"],["/archives/2018/01/index.html","5ae4a043562e844d1d2ab384cc5b8866"],["/archives/2018/02/index.html","237a7e7ea648f3a2498f4ea8465c19b2"],["/archives/2018/02/page/2/index.html","905b75d87b6d6642b3769001bafe881a"],["/archives/2018/03/index.html","86fcf0868ced14a6d110451caa3e8fe9"],["/archives/2018/03/page/2/index.html","e1dbb67b85faf2ae125602e118d40986"],["/archives/2018/04/index.html","e561a8905ed18153fce8a937ff0db91d"],["/archives/2018/04/page/2/index.html","b8d0b8b6d7e65f16f61fb61a0781a86e"],["/archives/2018/05/index.html","b2fd1617ab9fb4f2a69f1fb2bba730c0"],["/archives/2018/06/index.html","11a61b976de6d66c2fdd1d62941a06d2"],["/archives/2018/06/page/2/index.html","133c6eff466373453b9b151dd5868663"],["/archives/2018/07/index.html","1845acaf97daef52f4fe095eebeba3f0"],["/archives/2018/index.html","9c3e3c3a84c3ed8436b8d643e67f4aec"],["/archives/2018/page/2/index.html","8458af7cbcdb50eae06387fb00e69ca6"],["/archives/2018/page/3/index.html","6a70d1526aa67dc95663569fb335ca6b"],["/archives/2018/page/4/index.html","b5a7dae97c96b15838d49538cfca4d95"],["/archives/2018/page/5/index.html","48cd2d12cd7bf93134c8b0878aeae63e"],["/archives/2018/page/6/index.html","963f7765eeb5dd7f73f1ace00d48ae53"],["/archives/2018/page/7/index.html","74bbd3e824be888088d1860662a7328c"],["/archives/2018/page/8/index.html","646416318941c74792bcba624a00d7cf"],["/archives/index.html","df268f7a55012a7b918a837680e12e87"],["/archives/page/2/index.html","93e9dfe94aa0e322d4e1caf1b9d31265"],["/archives/page/3/index.html","fcd592142914d58f6f66805a7c2c98dd"],["/archives/page/4/index.html","02a459842ac7d1f0cb987df8e65248e9"],["/archives/page/5/index.html","a4346406714784df88d02f7e9b283e79"],["/archives/page/6/index.html","6ea1eeb590375198e1412830fbacc113"],["/archives/page/7/index.html","05e6f9b05073e65f375779cf7bba35ab"],["/archives/page/8/index.html","186cff4f942a96bfa7184933e5386575"],["/archives/page/9/index.html","4b17958fe186b61927b734e1c26549a2"],["/articles/18-4-27-things/index.html","0f23a80390e165f44167a6be2324f553"],["/articles/18-4-29-test/index.html","bbce6ef306cfc26175aaea8fe50cfa61"],["/articles/BigInt/index.html","c6cbcf2efdb1fee7b4c253fb02e522fb"],["/articles/Chtholly-Tree-ODT/index.html","fb280608df3aa7b5424cfc8b0c311e72"],["/articles/Code-Style-for-OI/index.html","e418d9dbb4f20359900f107a2d8d609c"],["/articles/Computational-geometry1/index.html","9859bc03bf0fbb4270f88850713f8b34"],["/articles/Computational-geometry2/index.html","53151e06a834d4caaac7fd557f17d8e6"],["/articles/Dirichle-product/index.html","972b0fca0d546225fdb1fae71e03bc7c"],["/articles/HeatWave/index.html","8de84c9832a54c65c7a14ae64d5428c0"],["/articles/JSOI2009-游戏/index.html","dd3194a575997ec9a9f096d65bce33fa"],["/articles/KMP-AC-automaton/index.html","eb1da3e5f70b52491bac90ab5be77140"],["/articles/KMP-AC-automaton2/index.html","c39df92ba731c8b15a8b762d7394168b"],["/articles/KMP-AC-automaton3/index.html","0a1588c53b0f77c4ec1ba558f36bddd6"],["/articles/Linear-sieve/index.html","7359d280e545d55f877da83b558187ac"],["/articles/Lucas/index.html","6153277de2489812eac1db2e38997606"],["/articles/Manacher/index.html","1e4e194c46f353353ef0cc4bcaea12b1"],["/articles/Minimum-spanning-tree/index.html","e792f1be4e606d907bb0a60d5b175345"],["/articles/Mobius1/index.html","ee7e8b075818798d2b82a55d4ff56c81"],["/articles/NOI2010-Plant/index.html","1dcb680dbceb507a3793e03e2b1387dd"],["/articles/NOIP-2018-zero/index.html","9fafa7674abbef667ad129ba552bac6e"],["/articles/Network-flow-Algorithms/index.html","921e1cb74186c6814d0bf407fd1e2f3a"],["/articles/OI常数优化-进阶/index.html","98620c3c53c989e866c511b9ac70edb4"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","4741d32838672ce3d48258bbe622fc8c"],["/articles/P1984-SDOI2008-Water/index.html","fce8b08f7fdd08e33b495c07264fc59a"],["/articles/P2018/index.html","5dbe1173ec3a9fde15f8a87b686e36b3"],["/articles/P3933Chtholly/index.html","ae2a6c684d9b63e1f0a9add174f7b382"],["/articles/Partitioned-Algorithm/index.html","1d5eb43603846568e20bd9e91df67746"],["/articles/RP-introduction/index.html","928509e87b8ca1ee5431454a528f5a19"],["/articles/Sandaram/index.html","7227dbcb1bf453bdb7dafd8ca6af20a2"],["/articles/SegmentTree/index.html","4331cd30b16f044b2da13a6eeaecc66b"],["/articles/Segt-in-Treap/index.html","6b0080d4a3e890d3314377fdfc62ff6e"],["/articles/ShqProblem1/index.html","bc421035d5431b6a2460c39a7abe1aab"],["/articles/TreeArray/index.html","da5ee278e3a42bcc2ab16f736e3f653b"],["/articles/TreeArray2/index.html","93a2482263dd7c1b3a9179d7d900ac74"],["/articles/Union-find-sets/index.html","e43c1cd63383e01dc4d42b8c7598a145"],["/articles/ZJOI2007-矩阵游戏/index.html","673586a83d4274c0f3b08f676514238b"],["/articles/a-bproblem/index.html","13e78e9910c95bcb6ba68e0341d52fc6"],["/articles/aboutBlog/index.html","da81aea8331b543925e307106244d3ff"],["/articles/aboutgit/index.html","0c00746d4a9bc34ff4b1098b01d289bd"],["/articles/atom-plugins/index.html","60971d80e64917610f00b8796ce951f8"],["/articles/autoAC-lemon/index.html","c9632629431454b49ea5fe213c5be768"],["/articles/bzoj-3337/index.html","4fb68b7bb4d80b3590b098b5a6554c3e"],["/articles/cppteach/index.html","7cb22eda607acd053a6a782c6b342067"],["/articles/css-QWQ/index.html","e950a8023cab439b5941c49c736e13de"],["/articles/dijkstra-spfa/index.html","fe499008892e411e45b7e376925028f6"],["/articles/dijkstra/index.html","ddfbfcd906ecc1e04d4c0af50aca760b"],["/articles/dinic/index.html","3fe34f77aff68c8d80889d144735093b"],["/articles/duliu/index.html","68488093714ecca42d18b9e6bd25f3df"],["/articles/dynamic-planning/index.html","9b7b6d31cbbfe00b917552058bf03577"],["/articles/elementaryos/index.html","558e767367f224c5b968ec55913d3fa3"],["/articles/er-fen-tu/index.html","6b24dec642bd7595b7fb9c6eba8b97c8"],["/articles/fhq-treap/index.html","949b744c9c6a7d71c693d918852d77ca"],["/articles/group-theory/index.html","4c25a5b9ca2791d6dbe78c74e08e1ed3"],["/articles/lgy-from/index.html","dce6d2c56844ca990120026239f1818b"],["/articles/linear-basis/index.html","e65d9fa0efc6b7590d80dc797d811188"],["/articles/lyyz-test-2018-5-19/index.html","b395cf16547653ddce490719395167cf"],["/articles/markdown/index.html","f889a209a9e1f948f12cbed5bc01e9f9"],["/articles/moban/index.html","502efe14cea88053e8f70ac008a181b5"],["/articles/poem1/index.html","4b60cbfd02c155eae89c878b94d2741f"],["/articles/prims/index.html","2a9cc5fe3d3e6a7b8d5dba114ddcc531"],["/articles/python1/index.html","dbcf5c0de7e6a8f10068b6a7ffab223a"],["/articles/question-01/index.html","0cbaff2c1037a553a0b29b69a19b2bfe"],["/articles/recursion-to-no-recursion/index.html","3e3effccbae64c413ffe63e6065865ed"],["/articles/scc1/index.html","62f27e5c9bfa8c6fb00b0e2f469cb752"],["/articles/somethinks1/index.html","afc16126280519756ec46d7fd52fe6d9"],["/articles/terminal/index.html","473537b9567604b835d5c09ac3793491"],["/articles/terminal2/index.html","6bf028b27a76740a43ae11664433fac4"],["/articles/test-mode/index.html","71270c698cb9de2412b0e4f8db02a8fc"],["/articles/test-polyline/index.html","99699fdd6909d67d193362ea416bcbab"],["/articles/treap/index.html","d133e7c913635907608c813e35e1dc49"],["/articles/tubaomb/index.html","7830cd58aec4f498a2ece5fafdff0660"],["/articles/use-hexo/index.html","c67904382ef2bbcb07dc23cc823d2863"],["/articles/use-hexo2/index.html","7e8a770881b30199a4800dad9a729587"],["/articles/zkw-tree-algorithm/index.html","7bc32adffce371444d68e907987754b0"],["/articles/zzWA/index.html","c382414aeb755d1fa9e63cb98ea9baf9"],["/articles/「LYOI2016-Summer」一次函数/index.html","f6e627b9496fa88a4430514070dd25e9"],["/articles/主席树详解/index.html","5d4cb27bddd69256765e906da8c9bc0a"],["/articles/分块-P1471/index.html","1705d96dfecff353aae5e57c48caae0d"],["/articles/可持久化并查集-rope/index.html","9c356e15dc6cac62ec315883167c179e"],["/articles/洲阁筛/index.html","58f1b4b37f61e03727f58ffb96ea91ab"],["/articles/生成函数/index.html","c71ada2340305aa055eb3aba3b4f739f"],["/articles/网络流-二分图最大匹配/index.html","97c61e525079c682aea196adbdaa4794"],["/articles/自然数的和/index.html","8f83de86d54bc9a35b72cca92a7f8c74"],["/categories/Blog/index.html","dcb596a2b47de2a17442966e49dd3fca"],["/categories/OI/index.html","4c88c77c869db94fb13871bff4426ece"],["/categories/Settings/index.html","e6e5348aa7ffc5fc659c9aa9bac20b06"],["/categories/Shq出的大水题/index.html","d95e70e7d1f736cf4fcd1fc3b07f34db"],["/categories/index.html","91c10cb9a45fb25e19497df3919306ca"],["/categories/system/index.html","8f1a42e0cf4250220d7ed790f77582e8"],["/categories/《RP导论》/index.html","7a919dc650111d61b7a5e6505f5d1fbd"],["/categories/《Shq出的题目》/index.html","b01899fb91728f982c4d35540fe80ba5"],["/categories/《Shq笔记》/index.html","cd6923e99d1f0bfb1e1fc3c7f302e230"],["/categories/《Terminal教程系列》/index.html","15a1f4eee64c366b1458c7bbf620b19b"],["/categories/《hexo的玄学用法系列》/index.html","be6f04d15af1e6493699cefdae796551"],["/categories/《人生苦短》/index.html","c5dc75b05432cfbdae44409874616d43"],["/categories/《教程》/index.html","401af6fa9ede05284fe0703b78c9b76a"],["/categories/《最强的Lgy》/index.html","93e15bc7dc58d67536f59a4b53ed278d"],["/categories/《烟雨茫茫》/index.html","02404a6b61ce0ec42d7086f938f85545"],["/categories/《玄学》/index.html","6d038981fcd62b1ae97835a8092f4514"],["/categories/《算法模板》/index.html","07bdb589e89d7399cfb39cbd123b28cc"],["/categories/《算法详解》/index.html","c0ba7321743870f7c7ac955041e5fa2d"],["/categories/《算法详解》/page/2/index.html","e3bc8326bbc19b6607f2f4a3c332ecc6"],["/categories/《算法详解》/page/3/index.html","7ed0ebc646a1466685bb6a37cec8df93"],["/categories/《题解》/index.html","c27e13cd2546aa0228fae64a3415c7ed"],["/categories/「日常卡评测机」/index.html","0d5205f74589fd992e0f97b95c78b373"],["/categories/题解/index.html","2a7a7f6cdd7882045993cd9d7e3da593"],["/comments/index.html","8d97a3030235edd65e85ce72209b64bf"],["/css/main.css","9e50d87a41ff7a0c7a2be7e5b4aa58ae"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","52ec1fae3e710b17e795cbda324d6b7e"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","522e7a5d76b10f4e4a5a9667f2c92d7d"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ed438b663ae5aef156115533bb725f58"],["/page/3/index.html","b2cd63216e0cadb1d59649f6372a6fb8"],["/page/4/index.html","a75c39e4f6ea3de6cb13978d353c512d"],["/page/5/index.html","7dcfcb3c69f99e9c792931de66d17b4b"],["/page/6/index.html","faac245417104a91abec5573e7d1fb42"],["/page/7/index.html","8583b03b195ede3e6029dae10cf4ce46"],["/page/8/index.html","58058e260bc5840ed33a3d0bc8970bf9"],["/page/9/index.html","f3f88c829d778465b3bc8da73644502b"],["/photos/index.html","7e0dc7d2e742ad41f5bd8f0233eb8ce0"],["/sw-register.js","e3ecc4f6717d9c83e234c9e8b78a4b52"],["/tags/AC自动机/index.html","9f727677842d9bd001b9e14e5b2d7045"],["/tags/Algorithm/index.html","01c636d17a7e5958cfd04d7fe4e27c06"],["/tags/Algorithm/page/2/index.html","5808cb619fd3890482850769d484b245"],["/tags/Algorithm/page/3/index.html","86f023e1174fc66a890e55c449dac133"],["/tags/Blog/index.html","d7b204052bbc599f4632e0189bb9c956"],["/tags/Chtholly/index.html","11dd1207c47fe41f14084f6110c715b3"],["/tags/DP/index.html","55c6ba9cca4481a2718e66f8622c623a"],["/tags/EK/index.html","607ec3f981c34e9f7452a65b5a558ac8"],["/tags/FFT/index.html","b76c50a0c816f0cf80d2a700170efdbc"],["/tags/Ford/index.html","41360554c482327ed764f831e444cb09"],["/tags/JSOI/index.html","c6aa77901404e0d17e2b6f8a395900a3"],["/tags/KMP/index.html","aeb53345656af5b5b5334c04c1599963"],["/tags/KMP自动机/index.html","4a253bcdd0718fff9e1bf69900c3359c"],["/tags/LYOI/index.html","7194dab4b39f6678206dd5df39923921"],["/tags/Lemon/index.html","6b48d6c1de758a4a4515e402cff881c4"],["/tags/Lgy/index.html","d7f6d78926f368741836fef758de4f0b"],["/tags/Lucas/index.html","0974440bfd58abace104d6d732dfdbb8"],["/tags/Luogu/index.html","1d42acf673c8d255473cde371952ffb6"],["/tags/Manacher/index.html","67c93831b552f3d3a8612ce8d5c503b5"],["/tags/NOI/index.html","bdc0d53a0b1964ddb0c0bcbf4a3bb7ed"],["/tags/NOIP/index.html","89969075790881be51e67077bf8e8ab1"],["/tags/NOIP2018/index.html","a3e363dbc02f82f8ca97797d98f121b0"],["/tags/NOI导刊/index.html","aece2bdf5d8be79d628d576a53eb5f35"],["/tags/NTT/index.html","c04bf82bbb33a04331b56d75369e5ee6"],["/tags/Problem/index.html","47e1942cd02d9f08c5c363f7dc95fc2c"],["/tags/Problems/index.html","6b783e4302a7e3b922ccf46a5e556055"],["/tags/RP/index.html","23b3c4c9f1a148ceee3ccb510c318daa"],["/tags/STL/index.html","088b8a835aae2bcd0f3ce12ae0cff102"],["/tags/Splay/index.html","bf554330c52a9cd10be6707d05d3dc02"],["/tags/Tarjian/index.html","5d800be8129f13053280db7cae149d7a"],["/tags/Treap/index.html","1112e44d0a712894d31d8e67c6ae13c0"],["/tags/Trie/index.html","186b06bffd450c52938d8a4a76adaae4"],["/tags/USACO/index.html","44fd27e11e3ac977b878f3597c267440"],["/tags/ZJOI/index.html","414c3c1d0e4073825eaae4fd5790c24b"],["/tags/atom/index.html","36e2f3312a5cc58196844ba8b6248e6f"],["/tags/blog/index.html","321950557c6f29a196d31e97b93cf4fe"],["/tags/bzoj/index.html","aa9232de069ee8aab3c8888e363483ad"],["/tags/css/index.html","7a3453c09f8f3286c64af859e3006f67"],["/tags/dijkstra/index.html","9966d1117e096207ed1b5c67cace5ae5"],["/tags/dinic/index.html","7e1cfe1d6f2085f66c777edde2f77849"],["/tags/fhq-treap/index.html","ae395b0d0685c6988da4ac00ae150a71"],["/tags/git/index.html","5dba633935f53c2c3e992131480f791d"],["/tags/hash/index.html","62ea79f6844780ffff02a5de17751eb3"],["/tags/hexo/index.html","054e57f4a26c7f2f5d216b8f86dd7be7"],["/tags/html/index.html","39bebc0f956a451acff12634648789dd"],["/tags/index.html","bc22f8b8e0e29f89c27602f141cbcd5f"],["/tags/lyoi/index.html","656032f2ad3732de9429e6c186292e29"],["/tags/markdown/index.html","e4655762c8815d56f3881aab5c39d6b6"],["/tags/plugins/index.html","e671a779a49de08fe27e74b8d60b09e5"],["/tags/problem/index.html","bec4e18cd5f89d1fa6fd99a939d94cb8"],["/tags/python/index.html","e61ea1a910f414929c7d4bf27530c186"],["/tags/qbxt/index.html","614ef968f292f29b57f738060bb4a073"],["/tags/rope/index.html","86bcb751223f65990a1dcc8c871094c7"],["/tags/spfa/index.html","caef90f1ca6a6914388e8b3646c849fd"],["/tags/system/index.html","1b3002d9137d2e9360a8a49cb66f390b"],["/tags/terminal/index.html","ad745566c3d65955a6a2338252db95fb"],["/tags/zkw线段树/index.html","760083fe10a167245c925749a8df69da"],["/tags/临沂一中/index.html","1152d39f5b7904b7c0b8f3b2c50c4229"],["/tags/主席树/index.html","ab2f86cdf1aad86f1cb3924ab6c0616f"],["/tags/乱搞/index.html","db472a7c58b7b47d8b101fe3b93f63a0"],["/tags/二分/index.html","27b24d9776f8aa6c6b9df75c0a6bbf26"],["/tags/二分图/index.html","8caf25dcb6a74ee36e6d78e0b39f9cea"],["/tags/二分图匹配/index.html","6a0ce68550d31c12198d81cc55fcd2a0"],["/tags/二分图最大匹配/index.html","7b7b8f6720e263bc9eb7d2686c3199ab"],["/tags/二叉搜索树/index.html","d7d7bb2b9401f1578edc7d75460ef06a"],["/tags/二叉树/index.html","a92225f8e5caeb545ec3f793c180dba7"],["/tags/代码规范/index.html","ae98dac54556338975e7b22a3e87609b"],["/tags/优化/index.html","29a0cb0f91c9fdc0bc2233927149ebd5"],["/tags/几何/index.html","3905203ec636985b4fb1cd9a5b8263a9"],["/tags/凸包/index.html","f7c1fd115e3682219943c7703434eced"],["/tags/函数/index.html","ef65b179842030c826c339e1c154f98f"],["/tags/分块/index.html","1e27257bf7a0015c2229a57f803347da"],["/tags/初等数论/index.html","64d5c7c53070c1bd54f7b0ada8b63c4d"],["/tags/前缀和/index.html","06ef18b617ed088a8168099ecfc3f0e0"],["/tags/动态规划/index.html","791e6426af17119c61c1851a8cc6b3e4"],["/tags/匈牙利算法/index.html","afbb8e24524d26e35755c3bbd2cf52f4"],["/tags/区间/index.html","f3d4dc5ec8c449153438c94ce360560f"],["/tags/区间操作/index.html","620c1b643fdd98d77bd6116b18f4a1ab"],["/tags/单源最短路径/index.html","3eb4d7a70b4719486db39ff9cf56da6e"],["/tags/博弈论/index.html","5e870515c498be9f3926e27a0fe4271e"],["/tags/卡常/index.html","57f02f8762e993c84683917274c3e79d"],["/tags/卢卡斯定理/index.html","42e70aea9dc7d69fe55db9754051b438"],["/tags/卷积/index.html","8f2758d454d42f0086872146060d6dff"],["/tags/叉积/index.html","8081746172d00c9db12d21666e2002b3"],["/tags/可持久化/index.html","15ee152e4b48cb73736c744a808cd6ea"],["/tags/向量/index.html","f812808491788ac2f2bc63758e4b3ce4"],["/tags/图/index.html","f10f3c61db474f334050ca95ad59fa9c"],["/tags/图论/index.html","1e44dcb16af9aabe7372373987834f90"],["/tags/块状链表/index.html","f889a1b5ecaa3d64b0e0c803f7fa96c2"],["/tags/增广路/index.html","a8c8bbdf54a788ddfce013d5013aa6c2"],["/tags/字符串/index.html","0d431883e92f3964f95f02db14cca2eb"],["/tags/常数优化/index.html","37f8f4b1524de5aed26308e7e8886a9e"],["/tags/平衡树/index.html","11385903b8f05e29a15d084b93782f92"],["/tags/并查集/index.html","0b7a2936cc054410ba7952c262f3e0ff"],["/tags/强联通/index.html","cabbbc452ed3fc329cc3141bd9d4f0d4"],["/tags/快速傅里叶变换/index.html","6603a24eab6f3e6a1cfb2095bb2c6517"],["/tags/总结/index.html","0c1b32997bce7df6f091f4cc60f1f304"],["/tags/感悟/index.html","f3583a6b629239e12250c40580248c6f"],["/tags/技巧/index.html","aeab28f11ea131546c252329f6a6e9e5"],["/tags/抽象代数/index.html","78a0d302c8b8044fe5d3ba5bf9e29e02"],["/tags/教程/index.html","4cef4bf7909ee03950aa44f5bdceef46"],["/tags/数堆/index.html","028050fdae5af94b22c68c34d5af56fc"],["/tags/数学/index.html","34c9c52ce7c8ace969c4abbc5752c5bc"],["/tags/数学/page/2/index.html","d4cd9a345247a45ce9416c89226a7d2a"],["/tags/数据结构/index.html","7c6928e10768ee090aa78649658056db"],["/tags/数据结构/page/2/index.html","810d9851ee7b84aa3189fdec68ff1cc2"],["/tags/数论/index.html","88cb99d81ac6b76e25bb6aae95502905"],["/tags/数论/page/2/index.html","718b125320702d8338a01d44d9226ff4"],["/tags/文学/index.html","c6036d2dc8787f7b4e4ef620a9eb2d27"],["/tags/方差/index.html","a95df0fabad821636ef1b47ff18f591a"],["/tags/智熄/index.html","6190651109ea20fd53ec94e12436ece7"],["/tags/暴力/index.html","313edc2793b8a1d62ff7cd05c19ad494"],["/tags/最优化/index.html","cc8d910248e42f0274f46670fdad2222"],["/tags/最大流/index.html","4861184d6c7801ee510acac2017b55b4"],["/tags/最小生成树/index.html","2dabd74d05fe763defb9c7255ee641b5"],["/tags/最短路/index.html","a2866990595ba1c83e3c8321c1ff9b96"],["/tags/最长回文子串/index.html","b4196aab0bddea065c63764a0ae6dd5a"],["/tags/极角/index.html","4db3ac45b2dd200b285dbabaaed9981a"],["/tags/染色/index.html","51ca1db0c2cfb5f5259790ce95c185c1"],["/tags/栈/index.html","cfbd09786e8c4d1cd28b1fba04745a9b"],["/tags/树/index.html","c2f24b74f9010ce173d0a0182a599b74"],["/tags/树剖/index.html","2263f9847791fd2cc7bf105ecb22b7b3"],["/tags/树套树/index.html","4ec43c4d82f6540aa7ba895a479733d0"],["/tags/树状数组/index.html","a64b61494c158dcfa411b85fcab10491"],["/tags/树链剖分/index.html","7d8e529883cb48a8a91e623e88ce6c1f"],["/tags/模拟赛/index.html","f1df419754093842aaf3642d27a7aa56"],["/tags/模拟题/index.html","d0fc34e264bd503b95d06abd5449b4ab"],["/tags/模板/index.html","8053e8122a13f12570760359b77a3654"],["/tags/模版/index.html","4111b3b63b655ef9dde0744a242b475d"],["/tags/模版题/index.html","43f6bf7d92428a7f49ceab108b565690"],["/tags/欧拉筛/index.html","ea00dc83ec8e98b9220c9929b22963b3"],["/tags/毒瘤/index.html","00ade01776aab10b348b4a556685f613"],["/tags/测试题/index.html","ccd491dfb6db53c5c3bed0e85e1438d0"],["/tags/济南/index.html","4199d3fba13d08c29c9015125f32f4c2"],["/tags/清北/index.html","8580dc77e3d84dc13342f38c1c295184"],["/tags/游记/index.html","0f132be570026072e7e8ef0617ceb595"],["/tags/爆零/index.html","0fbf9bfcc1dcb04da732a06ee86c0632"],["/tags/玄学/index.html","994f79ba2d58d07952cfcf64a4c2e11f"],["/tags/珂朵莉/index.html","ae999f595b3ed1da043b4f57be9980d4"],["/tags/生成函数/index.html","d763455e483f04ddb36f965ec5db5851"],["/tags/瞎搞/index.html","9bcd5413b1e4ddf60570680f417f9e38"],["/tags/矩阵/index.html","60d3c1fdb0a5235b8b51d76db5275f2c"],["/tags/矩阵翻转/index.html","0170e410aab66c31f34655148a5ec5b6"],["/tags/算法/index.html","e9d87317dc16f98e62948531cb9562e5"],["/tags/算法竞赛/index.html","a255f4049d0cc6033462eb807000e479"],["/tags/素数/index.html","b081d6c605045ded4ecddfd876f540d8"],["/tags/线性基/index.html","57b98ae50224f286d777527a3fbefc15"],["/tags/线性筛/index.html","15c2b026099cbb0e7804f573c7d20979"],["/tags/线段树/index.html","1b25e87d0c5d851beb5d86347d912b5b"],["/tags/网络流/index.html","4a65fda074b5a1e053c1fb0a7b3c01d2"],["/tags/群论/index.html","8c06546044675260d9c1317c8e6d3fe5"],["/tags/自动机/index.html","b4f3c3208859dc2a13ccffffd793f6d1"],["/tags/莫比乌斯/index.html","0c2d9d7d85192abda46955b8f69c175f"],["/tags/莫比乌斯反演/index.html","7c85a8ac4366cb09f0a3312f71718c16"],["/tags/计算几何/index.html","164d660d100eda1250df8466d5cbc214"],["/tags/证明/index.html","3c3052cbae85ce644aded4d2a7b93cce"],["/tags/评测机/index.html","8f52d2f62cce736a77d80bc2b6f31d38"],["/tags/诗/index.html","f3d6a5de26ff4f04a982d12d7cec990c"],["/tags/费用流/index.html","bcc2eff9acbc32b635497a0bd7ea1aad"],["/tags/路径压缩/index.html","54b2726b731d0c6d2f782d4c23e48932"],["/tags/逆元/index.html","8e298b4c1589a8509a5460dadc48ed89"],["/tags/递归/index.html","5ba250723ae956a66b17551d57bdc7b4"],["/tags/递推/index.html","7991c1c4fdd808e242f0a41cde36f16f"],["/tags/邻接表/index.html","5f9247cdded4bd25ebb620f696840330"],["/tags/随笔/index.html","b3c0e7c27d84ab755c0f5f459fd9be51"],["/tags/集合/index.html","fe1d6ae5ac5d7533bdd0532ebc9ad655"],["/tags/集训/index.html","5cc8b6d51daf71f2bb2d828d4a051919"],["/tags/非旋Treap/index.html","ffc1a66cf8e0d18d91c06c5842b54444"],["/tags/非递归/index.html","4bc312c3ef793c5fcc966e043b72a655"],["/tags/颓废/index.html","f3789279f553e5dec9c7b87a024abd2e"],["/tags/题目/index.html","ec1aee83deaa4c1800e9be5523dc12f4"],["/tags/题解/index.html","8cda00751baed8326bc322991c984bef"],["/tags/高性能/index.html","730bbcf9715bcecf177cdeaf2c90595b"],["/tags/高精度/index.html","121c59c0582ae955fc071a00f515fcbb"],["/update/index.html","caae12436f1b6632452f7a8cb472be8d"]];
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
