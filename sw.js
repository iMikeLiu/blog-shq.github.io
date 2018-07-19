/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","1340b7878e1cdf4f97b7f635cc44df1f"],["/about/index.html","ff68cee27e60a7776104ed4a16ce4cef"],["/archives/2017/12/index.html","bee985db30cd472c2ce94883a5eb0ac9"],["/archives/2017/index.html","e54b0ba648cf72331d236ad22c44a226"],["/archives/2018/01/index.html","0934c2d1c886cb0cdcc4ca47cbb7db9c"],["/archives/2018/02/index.html","20fe19bb0a1954a8fe1192b3f8139bb2"],["/archives/2018/02/page/2/index.html","ecd0a93bb4b617685b9d4619c9063df1"],["/archives/2018/03/index.html","fb9b5f0aa88bfb1fa8623e521e67d65f"],["/archives/2018/03/page/2/index.html","35b7bd7db2ce1f4dd596e439c1b14882"],["/archives/2018/04/index.html","1ecc2636ccda5e79049df8c1c23b047e"],["/archives/2018/04/page/2/index.html","f1928b378f9f74e53f7e6369dcd91a68"],["/archives/2018/05/index.html","024d08970c329a05426313691aec44b6"],["/archives/2018/06/index.html","5d80061f1ac83c042d86c0d1d0182f23"],["/archives/2018/06/page/2/index.html","a3a5e29b217a0e595c7ac929dbea0218"],["/archives/2018/07/index.html","ec156907a4b871da189923989a2e7184"],["/archives/2018/07/page/2/index.html","e66623613d622c2492317f6a6c0a5539"],["/archives/2018/index.html","f92f939d39c9ccc82d43dda2a21f688d"],["/archives/2018/page/2/index.html","6852c7b1228d03a93251e5387d8eb787"],["/archives/2018/page/3/index.html","f49ec1cef8d794a67585c0ec6fe50409"],["/archives/2018/page/4/index.html","efc9e0502e6001435700c4f9a0f556ba"],["/archives/2018/page/5/index.html","1a172e57a13ac4955abb29dfc6d10645"],["/archives/2018/page/6/index.html","3530845ca29187c2dd2804160bfbcafb"],["/archives/2018/page/7/index.html","e8b9b4eadb69a0406a96a0df6511558b"],["/archives/2018/page/8/index.html","a64cae5e5a4cab40a0938a4bfc05427e"],["/archives/index.html","84044759e3bddd963f3fb226220bf734"],["/archives/page/2/index.html","5d883d31d2bfd804cdc11c7fc964eb8e"],["/archives/page/3/index.html","6cf0b7adbdac5f4b4d6ee95de774fc16"],["/archives/page/4/index.html","43ee276fa5cb5b6112bce5257a9247c9"],["/archives/page/5/index.html","cad7d659aa8b3992b1a94092c648b794"],["/archives/page/6/index.html","b2cb980b99859810ea15f2365d445d30"],["/archives/page/7/index.html","90bc3a4561b0caaff1969a0894120d7b"],["/archives/page/8/index.html","a06abc0735f26e2b7521989e1adc8476"],["/archives/page/9/index.html","df24b584212848a0d54d5f6a7c0d4c6b"],["/articles/18-4-27-things/index.html","382a650c94f6b62dd46ab1e67b6b7aed"],["/articles/18-4-29-test/index.html","e79b1acb76ef0270f2292fddfe702f56"],["/articles/BigInt/index.html","8bfa9236a28ba24ad00845fe6ded7453"],["/articles/Chtholly-Tree-ODT/index.html","12d08aada34c1fbbb26ba7163a2ecad1"],["/articles/Code-Style-for-OI/index.html","81875be0354c141100e74bcb814abdd0"],["/articles/Computational-geometry1/index.html","48362106acfcfc8daa7e6947a1e2fb70"],["/articles/Computational-geometry2/index.html","7df46396fca3e08eaf53f39860e8db08"],["/articles/Dirichle-product/index.html","71ef90e99ebfca097969c7737a69215a"],["/articles/FFT-study/index.html","b35c865a5d3d13384b35eb47c4229d2a"],["/articles/HeatWave/index.html","f4cdd05e39615e622deccc99161b1917"],["/articles/JSOI2009-游戏/index.html","a11e3570ae0e68da359b40f3566a69d1"],["/articles/KMP-AC-automaton/index.html","93cf347a6f4db9ddf2a3b15ffbff0f7f"],["/articles/KMP-AC-automaton2/index.html","3d24e11c890492b5e656de6772e16f3a"],["/articles/KMP-AC-automaton3/index.html","ab84b3c49fb5c3be85ec5c3e7707dcae"],["/articles/Linear-sieve/index.html","d3ea20f2b14ee2fd4b08d0c5fc031022"],["/articles/Lucas/index.html","e9d7f14fe2b8dcfcc2e5061a906c2f66"],["/articles/Luogu-P4276/index.html","cfa28b2af7fa8721a12488fe02d33685"],["/articles/Manacher/index.html","1b50b89f10f5b7b4c961da4f021218b2"],["/articles/Minimum-spanning-tree/index.html","7fe04fa396cab4548fa2f0959872e43c"],["/articles/Mobius1/index.html","99383be44abbd2dbee4a6f739add90c5"],["/articles/NOI2010-Plant/index.html","428ece758ac08f4f6f39060f43612e1d"],["/articles/NOIP-2018-zero/index.html","d6af0cc1be49e1f56712765ee4fac161"],["/articles/Network-flow-Algorithms/index.html","002270e9643cdb05a8d6f86e90ac81e2"],["/articles/OI常数优化-进阶/index.html","2ea329d4e996150fc2736b3515fb7e69"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","4cad54c0791fe83ccfaa9eb94560cd19"],["/articles/P1984-SDOI2008-Water/index.html","2272f9ef647f3630ab5d7e15dfffba35"],["/articles/P2018/index.html","cd58c76df2dfc1b64a1682706b0a671a"],["/articles/P3933Chtholly/index.html","55efeeba7c783323c27bb66e355f62ba"],["/articles/Partitioned-Algorithm/index.html","00fc16c4621928e7f5f348866b2cad95"],["/articles/RP-introduction/index.html","a91fd52c3380356d5128e55e48f487b0"],["/articles/Sandaram/index.html","27cbd6e7cddf9d2b161b3879ca036c06"],["/articles/SegmentTree/index.html","668f6aa3e5625bf942190958425d7d3a"],["/articles/Segt-in-Treap/index.html","f0984d6f1751835bbfbd9ce10c850937"],["/articles/ShqProblem1/index.html","d8914562c5b2658907de7a59b5835e10"],["/articles/TreeArray/index.html","d34592a8da2012fdd8b91ed584e11aea"],["/articles/TreeArray2/index.html","7cf00483c7aca87c55a1ef72acbf68af"],["/articles/Union-find-sets/index.html","d745f02fb8d5dbb3305b19ce26f44c83"],["/articles/ZJOI2006-书架/index.html","2ac761d7deaa7bd54cbf947c1e4f8dd0"],["/articles/ZJOI2007-矩阵游戏/index.html","705fc01567933936a329502e15a4707d"],["/articles/a-bproblem/index.html","c3066ab1e9a9ab1302841cb9d4b7a8f1"],["/articles/aboutBlog/index.html","c235031386eeb631a92274c87b0e190d"],["/articles/aboutgit/index.html","f92c78db44575ab7d349cd17febe568e"],["/articles/atom-plugins/index.html","0140ab717471798e65f3ec69d97a503a"],["/articles/autoAC-lemon/index.html","4161bed7dcc96537d23888b1454751be"],["/articles/bzoj-3337/index.html","40f09a2576029637195135f52b057113"],["/articles/cppteach/index.html","97acb9caa20b00be457fe5e6db2e0ba0"],["/articles/css-QWQ/index.html","e78f4060c14a307bd709b7fd25d5dc60"],["/articles/dijkstra-spfa/index.html","b80268ba98df8364e41af2a643488040"],["/articles/dijkstra/index.html","dba86ab26aa2fc03b0ee4bd4c4ff3487"],["/articles/dinic/index.html","45fc0ed7e8b91f2f549075c8c2e33f17"],["/articles/duliu/index.html","787f58e0da5c661cc6d83442c87ea0ef"],["/articles/dynamic-planning/index.html","de41064c9866b7ec3fa7aba0c0e04943"],["/articles/elementaryos/index.html","b31e67ac315b155ca853f0982cb4f1cf"],["/articles/er-fen-tu/index.html","4a48e412e6538a9e1cec7a834d5ba3c4"],["/articles/fhq-treap/index.html","f0c2a7392037b86f562a11de1642125e"],["/articles/group-theory/index.html","abd362ac60d6ce90ad476c3c5e1d830b"],["/articles/lgy-from/index.html","667b98f58d8486b47917f90a79b1b32d"],["/articles/linear-basis/index.html","a28ae31bcf8427c363aaf7a0690e1c43"],["/articles/lyyz-test-2018-5-19/index.html","44e3b35ed48efede9b773c00d47b6f65"],["/articles/markdown/index.html","5f11a6cf74b405fc99266bd29a5ae24a"],["/articles/moban/index.html","027d021f19f34b377a3bf2beff3047b6"],["/articles/poem1/index.html","3ad92d0c4032740fa0aaebab3ed114db"],["/articles/prims/index.html","e0b993bac4c769c728601390c745b62d"],["/articles/python1/index.html","c0aaf56c933af2f65fcbb46d94cfc82a"],["/articles/question-01/index.html","465819b68f115a357238c4c5588a8bba"],["/articles/recursion-to-no-recursion/index.html","7daafbed4abed681be9e06ee51c71e2c"],["/articles/scc1/index.html","9fe0ed6f550e8586727c96d17f88d8a5"],["/articles/somethinks1/index.html","d07d10239d8a1f22e7ae2c7a1a022e99"],["/articles/terminal/index.html","f8899937f8be5dd710730a198f488893"],["/articles/terminal2/index.html","782a3113eb5f0edc3ce7a55458f65517"],["/articles/test-mode/index.html","b92e6c2f11d61dc08a5f50fd15e25ba7"],["/articles/test-polyline/index.html","087b409f2d9a0f541d665a4d6ec84ed2"],["/articles/treap/index.html","d707ffdce21329ab9361e7ce080c0033"],["/articles/tubaomb/index.html","8f2cc8c24cc5e066a0e6710049d4cb7f"],["/articles/use-hexo/index.html","9385c8a5025ac130529ec2dfaa8caeb7"],["/articles/use-hexo2/index.html","0099c0a2db9296d8e2452c86031bb2ec"],["/articles/zkw-tree-algorithm/index.html","2ba2d721c8de56606a3e1522848dd8d9"],["/articles/zzWA/index.html","cc581f23106fde55e64723510087797b"],["/articles/「LYOI2016-Summer」一次函数/index.html","03788df3bc762f166a2b3c61d6753c57"],["/articles/主席树详解/index.html","7d78d728a791472348cc8253dfb1479e"],["/articles/分块-P1471/index.html","50596676b5c035f940938edf24259cf8"],["/articles/可持久化并查集-rope/index.html","04af934b0955bc5d0d433f7bcabb25a4"],["/articles/复数表示/index.html","a51453b5cfa11e2a8c2d24597b36cd0a"],["/articles/洲阁筛/index.html","4d592a8aaacf9951dba980f484042766"],["/articles/生成函数/index.html","fa1b66d3f318c8de2a33788daaf2effd"],["/articles/网络流-二分图最大匹配/index.html","de0d08b27ebd4036468cdbedb1e2d9df"],["/articles/自然数的和/index.html","4768291deec66b223e70df1195156d96"],["/categories/Blog/index.html","f6b7aa4a0f918e28921daa7941380741"],["/categories/OI/index.html","e696e8c5e0c572bede1e0ce3a73d41bd"],["/categories/Settings/index.html","f7178de9327c0d52acf5b33aef13aa20"],["/categories/Shq出的大水题/index.html","c5f3c9bc251c277456e456aa93da2f54"],["/categories/system/index.html","4000f79ba676cd812e4709465da156e6"],["/categories/《RP导论》/index.html","da91dfc72d33cc67c0cb1bcded737f16"],["/categories/《Shq出的题目》/index.html","ac1386da62b4b97f8652f31df668fc64"],["/categories/《Shq笔记》/index.html","073b576c223aa5386ff828efc4d3d072"],["/categories/《Terminal教程系列》/index.html","9c1a4c7d584333717ff2a8a17a25d9b7"],["/categories/《hexo的玄学用法系列》/index.html","5a94c352a62db0e1ecdcfc27656f6037"],["/categories/《人生苦短》/index.html","74465177bd19815617d100656bd4c63d"],["/categories/《教程》/index.html","4d4bd82886b88dd3715677e441351894"],["/categories/《最强的Lgy》/index.html","22dc5a2241dba4f21a0cc4857757ca5d"],["/categories/《烟雨茫茫》/index.html","b445c3b1c52e73d692657100ecf7a3cb"],["/categories/《玄学》/index.html","c786a30bf6671dc5ab4939e9b66ba9ee"],["/categories/《算法模板》/index.html","4b74a8f84d930af8bfc685c2e0154f66"],["/categories/《算法详解》/index.html","bc524530c2e645caeed4905363ab553f"],["/categories/《算法详解》/page/2/index.html","181a6840832a1e384931cdaad3ab283b"],["/categories/《算法详解》/page/3/index.html","fba4ced36e2490e16524d29a678d0c2f"],["/categories/《题解》/index.html","52664ee8dd9b0c7d9f3103610005d5b9"],["/categories/「日常卡评测机」/index.html","dbc36ba18a977553b512d256a504e1e0"],["/categories/题解/index.html","4131fa8709784582e58befd430491ef4"],["/comments/index.html","2df0c6c7f1c7f6de1a46ca21aadb38aa"],["/css/main.css","f6bedf3ae88ebc1565e5eac1c3edc17a"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","f67ca3c82092312dad557d524ca59fe0"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","ae31c686a8df09a3842e5c6712c7ed64"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","98b19f8bce73d6426e9170b363abb7d7"],["/page/3/index.html","6d82cd2b53d95aa6b228baf7843c2931"],["/page/4/index.html","1fb159f8cbdc981b7592a92ce61cafdd"],["/page/5/index.html","ec24ff99da517d6953c169a1f3298fa6"],["/page/6/index.html","27f60e3bd3d1d285df141a88e7aacfcf"],["/page/7/index.html","213fd5d9f613e015fef00f15ff240fac"],["/page/8/index.html","5a6d69c06e85746704c90511e4c511e2"],["/page/9/index.html","30341a8b18ee47d90ef098b2aa5c460b"],["/photos/index.html","7fdbc2d0c4007cc877babcbe4d7cc337"],["/remittance/index.html","00301d3e699823d2b3bb15df8e239d99"],["/sw-register.js","a3b17d96a39a9268906dd8bfab2b03c8"],["/tags/AC自动机/index.html","dbf9e27faa9485540acb98df81d335e1"],["/tags/Algorithm/index.html","f7810ca9202e2fc7aaf4621fb56ef995"],["/tags/Algorithm/page/2/index.html","4579b7963887dd7974f90ffe4fca8ae6"],["/tags/Algorithm/page/3/index.html","4eae4e5250b71d50bef0fe0a14e3deca"],["/tags/Blog/index.html","cec752b2291003d081ffe949059f9bd0"],["/tags/C-11/index.html","199d09d30f0d5b6eac47ff00c72a23e0"],["/tags/Chtholly/index.html","31247ccc0ba9116e3e9528f8b3d6694a"],["/tags/DFT/index.html","337f3dbb4a6f18ed255ff8417a7ae63e"],["/tags/DP/index.html","9f39256c532c10c013b91c83269b1d88"],["/tags/EK/index.html","782adae69337f9d7594355b4ddb2da33"],["/tags/FFT/index.html","127ae186058414706ac0dcb19773327c"],["/tags/Ford/index.html","acae4e506857123194f0c4d77f3cee89"],["/tags/IDFT/index.html","2bde687ecd3cecafda5ab7cd98054345"],["/tags/JSOI/index.html","1e4500f792562b05af716e480d0bcbca"],["/tags/KMP/index.html","76ff92e618a7a26e5ee975db16362b8f"],["/tags/KMP自动机/index.html","5c256fa746d17824ba01c62098ea7bd4"],["/tags/LYOI/index.html","1eccdfb1b302d071d3e2b8abb12c612d"],["/tags/Lemon/index.html","5375d5d31c6546aad1554e5ca8ca5752"],["/tags/Lgy/index.html","0e21adc8f7404498f340bf2e2008e063"],["/tags/Lucas/index.html","8e4d6899c584aa3702b7e05cf018b36d"],["/tags/Luogu/index.html","f0b0fef40f6517045ac5fe0b4e892b10"],["/tags/Manacher/index.html","c92c8b0a3bab05b5e96dd85ff79c8425"],["/tags/NOI/index.html","1bfa32865a9fd995fa781b9fa9b5e3ff"],["/tags/NOIP/index.html","0865579bd66298e55e1f91c8d9e5df2e"],["/tags/NOIP2018/index.html","514807e75d541a64e359833cf114cc31"],["/tags/NOI导刊/index.html","79141a887f12ff61f94e63cf6d19a1af"],["/tags/NTT/index.html","337a1d97d0cf1ac06c207f5cc3d57f33"],["/tags/Problem/index.html","5edef986eeb3e8657c7a5fdb1e5a963e"],["/tags/Problems/index.html","e935f147445e6942b45ec6c4fc0aadc5"],["/tags/RP/index.html","417b0caeb641e5892f6833950815eab8"],["/tags/STL/index.html","8c3136cf61e9c7706574a682b4ea38e1"],["/tags/Splay/index.html","70014f0f3d20b8b12a4cec701097adad"],["/tags/Tarjian/index.html","765a9cce69b142c7c9e5645ddfed18fc"],["/tags/Treap/index.html","0034d32f6174b8dc0c99b6094e7a3642"],["/tags/Trie/index.html","f829cf379fd80c1c6b733c6b0ddfd656"],["/tags/USACO/index.html","f30b85eba278648076e10f4c5e91700d"],["/tags/ZJOI/index.html","dbb31e7c34e9beea01d0e4050deba824"],["/tags/atom/index.html","68787e2da74f18f8d00c657299546768"],["/tags/blog/index.html","ec3b111153716363b73ae1369d6c306c"],["/tags/bzoj/index.html","eb5582644a7fcc4b3893153a121c9e2a"],["/tags/css/index.html","cb2bbbcca893c3c5a9d76989cd1cea16"],["/tags/dijkstra/index.html","8d6f3648683e82301a5cbfd5caa94d17"],["/tags/dinic/index.html","4eabd082645f67f318f62c544b31b035"],["/tags/fhq-treap/index.html","a91d5123ddecc5eafc512177ebf63a95"],["/tags/git/index.html","7668ac139a24aeb4370fe8fd561af2eb"],["/tags/hash/index.html","4731e0a9a4dca0b8903f54e7b66b660a"],["/tags/hexo/index.html","b4b483967b39fd446f6d4c8d0714003c"],["/tags/html/index.html","74d8f1330c29a0b4ec026ad29fac3c2c"],["/tags/index.html","32296295c833ff3160abd27dcede46b4"],["/tags/lambda/index.html","5369db515871e781db44473700561d84"],["/tags/luogu/index.html","b564c3f5b580c03c7cc6867f53b15589"],["/tags/lyoi/index.html","5fa9cda54b5afd86bb019702c9e672db"],["/tags/markdown/index.html","752a264926ecea518ad636e7379276ba"],["/tags/plugins/index.html","2e995061b25b7de73077bce55c7a5c04"],["/tags/problem/index.html","0eace29f2572cf89fa4be33583af4f2e"],["/tags/python/index.html","b9bf62fd498ea8894c1a04249e3f826c"],["/tags/qbxt/index.html","f224733147aab53504ad7f6c029fd0f3"],["/tags/rope/index.html","9a9ddf10511e0d73b79bc22d867ca5f6"],["/tags/spfa/index.html","6ac4101e641439d15254158301447149"],["/tags/system/index.html","462016cadaf2e53f3a7a62a05324706c"],["/tags/terminal/index.html","97ebb64af4ac0c1897a4062eb42a25cb"],["/tags/zjoi/index.html","91ed5b51eef8b4e99075f2b09764f1c2"],["/tags/zkw线段树/index.html","fbdb8fe8871de012e37b80727b1fa07d"],["/tags/临沂一中/index.html","5064673557f9710b0724180448d3aabd"],["/tags/主席树/index.html","17076a4243c452e15e0c31fd11be0b4f"],["/tags/乱搞/index.html","a8504b544e5eadc76e121eae1ba743f5"],["/tags/二分/index.html","cb1c3675d62edbb9f9faf44e4f319977"],["/tags/二分图/index.html","b1b580a5405b8eec182cdfa906814905"],["/tags/二分图匹配/index.html","ec69f5a8bf7b245356f721013388b411"],["/tags/二分图最大匹配/index.html","b76bd59490d00c633aaf6546c5ab0e6a"],["/tags/二叉搜索树/index.html","3bc25bf37d5eba34a6fa715d6c863bdd"],["/tags/二叉树/index.html","9ae46cdc12bb72cdbf43d22ecee893f1"],["/tags/代码规范/index.html","4dfc39af8de332dbc0cb427ee8635612"],["/tags/优化/index.html","dad0671548bf055ecbeca79912c6b2c2"],["/tags/几何/index.html","4609cce6bb9cf281d4f58d5e0c1baf60"],["/tags/凸包/index.html","65a2f3dc8bf9059402936c558cb79dc5"],["/tags/函数/index.html","b4e43008cd08120118634774d34d65b0"],["/tags/分块/index.html","1456c531b1959f23a259b6d8dc62dda5"],["/tags/初等数论/index.html","2edad87758153fab37c568c723a54949"],["/tags/前缀和/index.html","81881580778feeee213298e38bd25dff"],["/tags/动态规划/index.html","815d93768dcfffd9b4192456ab020314"],["/tags/匈牙利算法/index.html","880347d206506a0514463eb03eb7ded3"],["/tags/区间/index.html","93bb55c3524049778714de234ae662da"],["/tags/区间操作/index.html","2aa9e375e7deef0f49a72381e5cbf1ed"],["/tags/区间第k小/index.html","44fab0a49bf6b95a7388cfae3dae6c2c"],["/tags/单源最短路径/index.html","ded4297026f98e572a7480a6f1ad9f1f"],["/tags/博弈论/index.html","577c737862c09ef04b5fc728ef5d976b"],["/tags/卡常/index.html","24ce76d1793f8c31d4588710646f050c"],["/tags/卢卡斯定理/index.html","6017240fd9614c4a71c643da8717f385"],["/tags/卷积/index.html","79693d8e4448de876ea09cfe9fd2f6bd"],["/tags/叉积/index.html","09c41d3dfe57985658e163e1a8b80e04"],["/tags/可持久化/index.html","fd65ffb52bd3b32ac0730c9bdc7e167b"],["/tags/向量/index.html","88784a4251615f10a367ff8dfc6b55d6"],["/tags/图/index.html","aaee3dbad8ca5f0d62d5be87fe8852ba"],["/tags/图论/index.html","c1ffc84f1edae378c5ba1098a7275488"],["/tags/块状链表/index.html","04d0fd1fe3c7d2fa3d4a7bde314780b3"],["/tags/增广路/index.html","659d6ea17e59aa5b0ac4d8b218f7e48d"],["/tags/复平面/index.html","a4c1cfe2bddd7f3007bcd08e400a2265"],["/tags/复数/index.html","5d5499acca24b9fedc96617cda3ff828"],["/tags/字符串/index.html","b94af9f4dbb938b35deb9c58bd3fa4dc"],["/tags/学习笔记/index.html","1d60c6d10c867950109ea2c814ed805e"],["/tags/常数优化/index.html","fd9a021deda18c6d745a48e2bb613c6a"],["/tags/平衡树/index.html","6eac0391ef26367a17b6b1dfd5893907"],["/tags/并查集/index.html","a77001656fa146a61b90d7b102b16a76"],["/tags/强联通/index.html","5ecf5662f68aabf002f05ae0ac02ac50"],["/tags/快速傅里叶变换/index.html","eeb77279593b92e56b068c717fcd2549"],["/tags/总结/index.html","621f55fd982562160e8d6bf3f006f714"],["/tags/感悟/index.html","cdb7cc8ae41dcd680c04ba235e3311ae"],["/tags/技巧/index.html","021ac2d05a1e4c3f2ac94ee1defef0b1"],["/tags/抽象代数/index.html","77dc4c7b852d71aec3e404de5e0f63d7"],["/tags/教程/index.html","5cd37ba70b9c9ef8fb4698c204c3d77b"],["/tags/数堆/index.html","0a08bee222248b08d98ae28de4b39762"],["/tags/数学/index.html","54400725db07d367c5343b0ea35da7de"],["/tags/数学/page/2/index.html","eb2d64347da3cee8e57af6948ca1a80f"],["/tags/数据结构/index.html","c6ffb8f9aaf4f99e76e776ee00e3d099"],["/tags/数据结构/page/2/index.html","87d40108ee9c7e5ae37387fa62897b14"],["/tags/数论/index.html","eb32963ec260b5d7d25ad16ec1f36642"],["/tags/数论/page/2/index.html","faf42c14c69e357ffc19423bf9e3528f"],["/tags/文学/index.html","3885fb567458515183495efc784e7bfa"],["/tags/方差/index.html","a7a80f3409cf2c07e92b56b5fb22d633"],["/tags/智熄/index.html","ce0950822d83fcf25e3579072aa4e605"],["/tags/暴力/index.html","d97dc5deb8f4f24ff5048bf756e7d129"],["/tags/替罪羊树/index.html","cb38f8efd99183d15a50b82226ed6845"],["/tags/最优化/index.html","1047b2c3ff113f89733ada4a7d85f40e"],["/tags/最大流/index.html","5ed4539a2ed48b4e2871d03545c3a82c"],["/tags/最小生成树/index.html","82fb6600e38ab1bff94e9f76bc068bd4"],["/tags/最短路/index.html","ba0f4ff7718f386300c7329f1ba53a33"],["/tags/最长回文子串/index.html","6dd1c5654ac70445a5a7e224005c2b54"],["/tags/极角/index.html","52115211a0daa45a6afde63814ad5d89"],["/tags/染色/index.html","271c38eb2027b08e16765cd66d49412e"],["/tags/栈/index.html","fd9dd7e4baf4e4e2cce02588cbe0a87e"],["/tags/树/index.html","52e80529cc390f7809fb5cec89428bdf"],["/tags/树剖/index.html","fc073cbdf68d9e938d16f760d06f3bcf"],["/tags/树套树/index.html","b11d0f2d09260d67b670720214a8fa2a"],["/tags/树状数组/index.html","a407265e9ddb83209a8c9ea0accb38bc"],["/tags/树链剖分/index.html","16f2488b2da41d8468e85374c4f9fa41"],["/tags/模拟赛/index.html","bf676658f7a7cdc02c7942d3529f5b2c"],["/tags/模拟题/index.html","1002b5cafdcd3287fab4620d8215e80d"],["/tags/模板/index.html","948dd0bfcf253c1eecae79144032205c"],["/tags/模版/index.html","7fa4fa71960815485268720bd395351d"],["/tags/模版题/index.html","e4c961daad2285c855ddc01bc6be18e8"],["/tags/欧拉筛/index.html","84a0a959fbdd6f4fc39f15acd29dc72a"],["/tags/毒瘤/index.html","e5c2893d6a7e24d545310d28e6fa99ca"],["/tags/测试题/index.html","dbbcdc75a9844ff121089a18621bbd6f"],["/tags/济南/index.html","949aa24d8532cdbcc9bee615ec080828"],["/tags/清北/index.html","f57703f0c1ffa38305ea76ee66125cd6"],["/tags/游记/index.html","a6ab76cd2819e1d606df9682e5492959"],["/tags/爆零/index.html","94815c3561269e32f1268d0b7c2e5b55"],["/tags/玄学/index.html","813ca491c51d1ad2b3f67a76d7368e95"],["/tags/珂朵莉/index.html","92fca3e4165a2bf015bc3c3831cee7d5"],["/tags/生成函数/index.html","cf4f1ef78e7578cc8fecdc02d9fe0580"],["/tags/瞎搞/index.html","838b41262fbe419d7ec639a5eb61d127"],["/tags/矩阵/index.html","1f4967de47634ac25da48dea084e0712"],["/tags/矩阵翻转/index.html","b6d0766bbd1b24bef132a48d4151f93f"],["/tags/算法/index.html","ae9723a75e070eee255221f018647660"],["/tags/算法竞赛/index.html","879ca7a9e16544255a8a9d2b23a1d5d1"],["/tags/素数/index.html","a030151fb683db7bd71c7c778dac44b1"],["/tags/线性基/index.html","d2ef3d0be12a20bab9c562390c861926"],["/tags/线性筛/index.html","16f2b1af06f650aa899d42e2a53eecba"],["/tags/线段树/index.html","bf86e9ef9bd19023538dad917f8aa4ae"],["/tags/网络流/index.html","931444eec0db08bb1ac97764ddf63a9d"],["/tags/群论/index.html","20bbe8c0d8d39b1e3bd060d33b113093"],["/tags/自动机/index.html","2f7772152e46db380616329d0c0f1feb"],["/tags/莫比乌斯/index.html","3275966c0aa0a125efdb79469d03e4d6"],["/tags/莫比乌斯反演/index.html","29aecaf74c624fe3238b52282ff6be01"],["/tags/虚数/index.html","2428bd5f5cb8bd7fc9770e17995269c1"],["/tags/计算几何/index.html","9543811402344b8dde4fbbf2c83d7f44"],["/tags/证明/index.html","0adbdd5bd34e671c0964cdd83738be62"],["/tags/评测机/index.html","746c4f9971fd3a6efcb1d7698ad070b2"],["/tags/诗/index.html","9257a51d10fb9cce5df8604c391fb073"],["/tags/费用流/index.html","42c4376f93df80ef8c84325040a2a68a"],["/tags/路径压缩/index.html","a6c341d9661d3c0cbed0feb9795c33e5"],["/tags/逆元/index.html","3c6d3ef563a77ea023b870a3809bb354"],["/tags/递归/index.html","edca9b213be31641c915c6e83df9a00c"],["/tags/递推/index.html","32066621376a85d44e05b0c109266613"],["/tags/邻接表/index.html","45de24d1d792c827410af8c63d7e9340"],["/tags/随笔/index.html","066d5d8a3abd2bb8d96e49c5d3e259cb"],["/tags/集合/index.html","4c9225c6edd0039a4b127f1f3de8b074"],["/tags/集训/index.html","42cf431395912de0d481beb503b4eae2"],["/tags/非旋Treap/index.html","624c7c4c73bff3d3d3b78b1591e8d00c"],["/tags/非递归/index.html","79d003938aa6b5c3c1d4d342af9bfa3b"],["/tags/颓废/index.html","baf416ab03159265a5cf11fbeaa6b07c"],["/tags/题目/index.html","2bec5dc48832be74b4e89e9883979195"],["/tags/题解/index.html","c20f84e07c8d3e1f2dcf273824e920dd"],["/tags/题解/page/2/index.html","bae3f31539b8834f87501438a01f09c6"],["/tags/高性能/index.html","89dbe5e603f344c56c35612b00dbff11"],["/tags/高精度/index.html","79cd5414e77191d30c8d3fd83fc9ba54"],["/update/index.html","0d992e02e4e55f102eb6733fbd1bd1fd"]];
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
