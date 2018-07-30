/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","1592b61662103b4dc41733eee53b01e6"],["/about/index.html","0aebc0057284fc3e274dabfe211cc765"],["/archives/2017/12/index.html","ca47b258d684eac0d15f11458152a794"],["/archives/2017/index.html","cf2a8d0936dc98378cd378bacfb02fed"],["/archives/2018/01/index.html","4e88ed8e780820e4f006ace8e78c9673"],["/archives/2018/02/index.html","92f59a06c605f496b75c0583fe3212e7"],["/archives/2018/02/page/2/index.html","bbf04e73cb637885cf9be22909a33c57"],["/archives/2018/03/index.html","9281332f66b935cbb9e932dbf367f36e"],["/archives/2018/03/page/2/index.html","c7207dbdcad1b7bd901a31ebe4aa73a3"],["/archives/2018/04/index.html","9fd9dac04f8116d63735c966130c61df"],["/archives/2018/04/page/2/index.html","967fbd7916a33ae2d150e55df249ad0d"],["/archives/2018/05/index.html","4a7a60caedb39712ccc3ab3405e68897"],["/archives/2018/06/index.html","519dd4cb1962363bc0778332efa5e510"],["/archives/2018/06/page/2/index.html","3a5f562ad9b08f94a58dd169ae81ea5d"],["/archives/2018/07/index.html","b8b2696dce3523bdb780929d595c7bda"],["/archives/2018/07/page/2/index.html","ccc7e82497ea16c085908a1e2333ef91"],["/archives/2018/index.html","a8ae0b2787b531c501c0b0fbb03e0564"],["/archives/2018/page/2/index.html","ab2c9504ad3fd4ade28d3397ccf4e66d"],["/archives/2018/page/3/index.html","4d14922f29835f489bd18e7142615136"],["/archives/2018/page/4/index.html","86e7f2022ff2bcdcdc8d0517d3f51e64"],["/archives/2018/page/5/index.html","7a9e632308bb90b0e0b56ecb24b80156"],["/archives/2018/page/6/index.html","6b9c046bf50293a950b66b52a8d78aad"],["/archives/2018/page/7/index.html","97943f76729f0a4a90788b003b84919f"],["/archives/2018/page/8/index.html","acb8388253dda41a393784b5ef45be29"],["/archives/index.html","fd79a0a095044e3ad96b2b11cbd2ff1b"],["/archives/page/2/index.html","6013df42e0284eff26d0895cab5b6766"],["/archives/page/3/index.html","4bea342a45cdeb324077196d6d39dd70"],["/archives/page/4/index.html","5e00fd5964a489e5469f5c261af38d4c"],["/archives/page/5/index.html","3fbbe84fafe21fdadfc3ebd81ec9a63d"],["/archives/page/6/index.html","9cae283af51397e789f4b6643843f73d"],["/archives/page/7/index.html","d2350a0ef12fb29a72ec1dea8074f211"],["/archives/page/8/index.html","875b974e35fbb95277293c22d190a58a"],["/archives/page/9/index.html","fb4ece7c789475deb799a854bac6d04e"],["/articles/18-4-27-things/index.html","5bb4a64dc3f57a70729e8413b6070802"],["/articles/18-4-29-test/index.html","e1268dcc7f5f54a5791ecc87d9135f55"],["/articles/BigInt/index.html","441e34ee1fc6a984758404084c3f8595"],["/articles/Chtholly-Tree-ODT/index.html","1d22ec4caaa0144d9d7c2237b8c4e5b7"],["/articles/Code-Style-for-OI/index.html","de9f607b6fea9ce54a58e563a559a5b4"],["/articles/Computational-geometry1/index.html","8d2bdacb5450916bb20d8aaeee70c80d"],["/articles/Computational-geometry2/index.html","74bcac440bcf6d17e7f344c57cac2f89"],["/articles/Dirichle-product/index.html","1d2920a9a5c9dfad787c654189d1ca14"],["/articles/FFT-study/index.html","b6baa37647d80d4d9b0288dab820dc9f"],["/articles/HeatWave/index.html","52e0bc0d707e0b316f925cca1bb61254"],["/articles/JSOI2009-游戏/index.html","67832d9dac4d4269b076a9b0e1e1ccbc"],["/articles/KMP-AC-automaton/index.html","a27950199153e0c90047744660f56f3b"],["/articles/KMP-AC-automaton2/index.html","36a276bd9d6607f6cfae271c5d1a2084"],["/articles/KMP-AC-automaton3/index.html","58fc5ccf773b6453b1b77a4a5ec71526"],["/articles/Linear-sieve/index.html","f9c312a62fd91c767b2744f4100a7934"],["/articles/Lucas/index.html","9be41230b4cdf8304b8866a80a13f344"],["/articles/Luogu-P4276/index.html","a683d10bbc8a25f9a4deec11948228ff"],["/articles/Manacher/index.html","656dbc668f0091d7807d9a02c89d651b"],["/articles/Minimum-spanning-tree/index.html","116964105a46969247f25ae399663467"],["/articles/Mobius1/index.html","3b4e0f114b4749cbd446456a738bb8e8"],["/articles/NOI2010-Plant/index.html","a49b440265d27e5e148fc8ad2947e213"],["/articles/Network-flow-Algorithms/index.html","7f98910b036f7987e85afa88a1fdf650"],["/articles/Network-flow-start/index.html","4615b00d03bb8ee1c6ead0098101cc9e"],["/articles/OI常数优化-进阶/index.html","be254e6547a340002b3181dab5db85b1"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","da6e877b57c7dfd8e5bae88ec4667b5d"],["/articles/P1984-SDOI2008-Water/index.html","8afff4b9d18ab8e54f441d72f288520f"],["/articles/P2018/index.html","458cf9399e2531a3bd6763f665a7d676"],["/articles/P3933Chtholly/index.html","5d5242cb167bf8a3b9417ac943710a82"],["/articles/Partitioned-Algorithm/index.html","0c45b7be6ace7c71cf9b788e6d16b5fa"],["/articles/RP-introduction/index.html","5e08053fa9f2e54214ff829acf42b19a"],["/articles/Sandaram/index.html","ce75c153991380ad32004686cddda283"],["/articles/SegmentTree/index.html","d2625cd543fcd086a8d0912d452ac3ee"],["/articles/Segt-in-Treap/index.html","94a21e5308c8efc16df76571b0db21d9"],["/articles/ShqProblem1/index.html","992e73c9d015ee2d362e1d04fbcf80f2"],["/articles/TreeArray/index.html","354b6b0cdfe6a7ab0dc6beb02cebd2c5"],["/articles/TreeArray2/index.html","3147c692b3091c65f898b013ae791cb7"],["/articles/Union-find-sets/index.html","84b58a23f7d1e2a24f06f4d231eb0f2a"],["/articles/ZJOI2006-书架/index.html","e6458426a30764c6fd3571f1030e916b"],["/articles/ZJOI2007-矩阵游戏/index.html","9e2fafc87cc172631ee8a3d2a8c51372"],["/articles/a-bproblem/index.html","3263f791978416c375d75cfa9505ff50"],["/articles/aboutBlog/index.html","93f618addf63d6e15d13cdf1f1990e17"],["/articles/aboutgit/index.html","73d1c8c9dc62e193331b896ce36c081d"],["/articles/atom-plugins/index.html","46c1ee8324098ad0e9c90509f311f01f"],["/articles/autoAC-lemon/index.html","ebf93081d9d0b57790ffdc93a366b19f"],["/articles/bzoj-3337/index.html","f4a6955b3d3d80c1faf5f2f5d430ae61"],["/articles/cppteach/index.html","ba4ee1a6baf490c3161b3cd6dd94c6e6"],["/articles/css-QWQ/index.html","f5352f4410a8225d0dcdf2fdcf958b61"],["/articles/dijkstra-spfa/index.html","e8324c1f363a722b812c6ca72c7103dc"],["/articles/dijkstra/index.html","7068777fa59e31d0f5007fc224a35d2d"],["/articles/dinic/index.html","b539dd3501a76c9002b00cf40fcd4a77"],["/articles/duliu/index.html","b83bfb5696925a1bba6c5d8c2b532e58"],["/articles/dynamic-planning/index.html","c314048879d158b60d89c86abefcc6d6"],["/articles/elementaryos/index.html","2e2ef7b28d1a6ee1b7e3477946ceeab2"],["/articles/er-fen-tu/index.html","1d840d219f152c7e04a73def6d8908f8"],["/articles/fhq-treap/index.html","48824e1efc51654e91314ed9c657105b"],["/articles/group-theory/index.html","c66f3f3043c5415e295830da5a356f8e"],["/articles/lgy-from/index.html","ae3c7ff0c4f8bd2c8ad022c17e564d51"],["/articles/linear-basis/index.html","f3aa852009cb6ffa00a14343e7a10600"],["/articles/lyoi-Poetry/index.html","dfcaaa13b3127fbeba3ddaea4c1e7e0c"],["/articles/lyyz-test-2018-5-19/index.html","2372dc00bf9ed63f8a22165feacaee14"],["/articles/markdown/index.html","981d350348fefa9f46f85d4412f43d9e"],["/articles/moban/index.html","82b3646e753d48b28326d4efd4c70abb"],["/articles/poem1/index.html","11f0e300c4c9cb645ffd3ea32baec564"],["/articles/prims/index.html","94d6821e22c36fa22eb83e79d861dd53"],["/articles/python1/index.html","be76be35099f22e878fc1c52effd2a86"],["/articles/question-01/index.html","b8101e7cf0ef069c1018825bdf25949d"],["/articles/recursion-to-no-recursion/index.html","03cb66343be3ba77b38ca191b781a412"],["/articles/scc1/index.html","db17cdd4968e0a1669551bbd8379f9ff"],["/articles/somethinks1/index.html","a24d7d8a7336d0feaf3c591b107fc814"],["/articles/terminal/index.html","f19d053e498ac189dce44dd6e72870c3"],["/articles/terminal2/index.html","e9bcd9c32a3f7c3ecea93a428b399ec9"],["/articles/test-mode/index.html","e2ddd82339adff24e769249bce999fe7"],["/articles/test-polyline/index.html","665607253e7437879a0ce0cadb5177dc"],["/articles/treap/index.html","013f0d092032a1ae60f70249863a8ef9"],["/articles/tubaomb/index.html","e885d07330741201b2dd3fb3f401761e"],["/articles/use-hexo/index.html","729f29de6ca22f42a0b980c067f5d746"],["/articles/use-hexo2/index.html","f8f34f5c8ff7c24d8de5b47340cb8d2a"],["/articles/zkw-tree-algorithm/index.html","fbce54c515ad4586b7ae9dd7fc819844"],["/articles/zzWA/index.html","1959c4e480bea086d34891c7b036ca57"],["/articles/「LYOI2016-Summer」一次函数/index.html","e6f1ea37aa3f8508880d99be3862fd95"],["/articles/主席树详解/index.html","26b5a7ad370a4121200a9b7aac03dc6e"],["/articles/分块-P1471/index.html","10c07e4427e776aec9cb2d1f77fb3940"],["/articles/可持久化并查集-rope/index.html","047bd79705029cfebdb4d522a5a5aa86"],["/articles/复数表示/index.html","7c57110645539b62eb0274ac33fa0bca"],["/articles/洲阁筛/index.html","7e7b97d9639ee503c9f6b8d262f2130d"],["/articles/生成函数/index.html","7cbb26845e95ae3189701de1fa2993d2"],["/articles/网络流-二分图最大匹配/index.html","2206f234c95dd889c4fde7e82b397902"],["/articles/自然数的和/index.html","eb5cf8294c3ba448ac96c35f5b4e1340"],["/categories/Blog/index.html","44992cc3ac9cf07bd9decf31610a39f8"],["/categories/OI/index.html","0daefbabe42b99c13b1d6ffe7049c222"],["/categories/Settings/index.html","206137d677afc33ff63895a704386acb"],["/categories/Shq出的大水题/index.html","42a5b54a5a52270f3c8d7604290ccbab"],["/categories/system/index.html","d980dcf21fe7f65f18304fa56fb9e1fd"],["/categories/《RP导论》/index.html","911e04565a808a4e3b2d25538a3dbc3c"],["/categories/《Shq出的题目》/index.html","666e2a7a1b715332ec0a553177a1f8e9"],["/categories/《Shq笔记》/index.html","efc6bfd895a2baca93cf9dff8e3bafe9"],["/categories/《Terminal教程系列》/index.html","497319e6457f9189b3d1c9124df71174"],["/categories/《hexo的玄学用法系列》/index.html","017d204f56100a821b9249140d16ae26"],["/categories/《人生苦短》/index.html","94a52bc9e7ec48c28ed05667f39fa0b2"],["/categories/《教程》/index.html","fe067a839de2b71a7223d39964c65470"],["/categories/《最强的Lgy》/index.html","7511437981374c68fe03bec0110234b2"],["/categories/《烟雨茫茫》/index.html","40f1970d88e2084da0294fc879f75583"],["/categories/《玄学》/index.html","9cfa7e727960829c6deb6aa9bc2adad1"],["/categories/《算法模板》/index.html","8d2b0b00ed49f167149a6166a185a1a8"],["/categories/《算法详解》/index.html","1174752de72a34fbf60402188431225f"],["/categories/《算法详解》/page/2/index.html","545328580f686b3c323baaf2c433ce98"],["/categories/《算法详解》/page/3/index.html","7fbed4771b86eed68211f83a63b49eff"],["/categories/《题解》/index.html","9849674107fcef8002502221c24477bb"],["/categories/「日常卡评测机」/index.html","3863005b4ba5d3095581524d6240ed39"],["/categories/题解/index.html","9f28bc1ee8381ad2d6270e4953b9b97d"],["/comments/index.html","e8fce857033f7e1ac8d654871b0cb771"],["/css/main.css","c9179ce08e5674dbb318663cd89e5412"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","98c7413d8b5b9688cbc07b7637a3e7bf"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","7c8a1a8b5f529ef797e3edc0c5e37dba"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ad2349a599df40824869e6932b9663ea"],["/page/3/index.html","3c1807c3d47a7997295f41857a40da0d"],["/page/4/index.html","b2305c6316a6f3ec527e0c8b76c8a4a7"],["/page/5/index.html","0a8c64785ec0eb65951e1a4f43b2e034"],["/page/6/index.html","e78c2d14b0f3660c1d06b19897d46472"],["/page/7/index.html","0c9153a7319d85546567541db121ec26"],["/page/8/index.html","721761b2fe92440aaad1ae6c89c5054b"],["/page/9/index.html","c129176f39f052e543e34d5966c94c98"],["/photos/index.html","ad4b2fc8dfdf30bf5232942172b77ce9"],["/remittance/index.html","e845fefc1dfad7df4714d2ceebf4a7fd"],["/sw-register.js","d6dcd2cdf30a8d9b77b100d457f72c78"],["/tags/AC自动机/index.html","3543ffb314fd707b797ed504e71f15cf"],["/tags/Algorithm/index.html","261aec6ee646c8363c32939fdf369625"],["/tags/Algorithm/page/2/index.html","93f6808f73742ea42edcc05fc8e83fc1"],["/tags/Algorithm/page/3/index.html","d58af3e90815131ac4f9504964753bd7"],["/tags/Blog/index.html","d4931a03081b143ca5b4314b192be0e0"],["/tags/C-11/index.html","bfc86d42a9dd41cff1f4e02eaefafa8a"],["/tags/Chtholly/index.html","37d471cb7942d5aa703a2e3c0c14c99c"],["/tags/DFT/index.html","8e6c33ca3d820e6fdbebe37a3b00f62f"],["/tags/DP/index.html","a322c3d56491ceeb8447381ccbaa8751"],["/tags/Dinic/index.html","7ecc29f3656571fa0b9cdaed03c93c80"],["/tags/EK/index.html","a06fb9f14671e0f9b80c783fe16863da"],["/tags/EK算法/index.html","640675d90b63c98e1a0c7ac7399be1e4"],["/tags/FFT/index.html","951d7b19fa1bd05cdfc0a7fc4ca45924"],["/tags/FF方法/index.html","ea183d791c88a7708980e83ec5f405a0"],["/tags/Ford/index.html","b355e07fd6b6cc9505ec1895aba91c24"],["/tags/HLPP/index.html","aabadd4303d3b047c47f94f257725e27"],["/tags/IDFT/index.html","c86ecd78ffa10d7902a0f78173b46104"],["/tags/ISAP/index.html","62a4054f8109c025ea9a0ce4550a4272"],["/tags/JSOI/index.html","5f90dc498dfd8acac823ab07d45739cc"],["/tags/KMP/index.html","3cce2477a187f9d478c1cf9b7e38389a"],["/tags/KMP自动机/index.html","cd4781b4fe3ed4676d90893da20ff120"],["/tags/LYOI/index.html","8280b94cab1f5134b4983178300d4ca2"],["/tags/Lemon/index.html","e2d24f8f8d7dc220c9f21c9ad24653f6"],["/tags/Lgy/index.html","8926fa82e890fbc1edfb2e7ca14d190f"],["/tags/Lucas/index.html","df1ba7a2ae2bea271c1de51b3e7b9826"],["/tags/Luogu/index.html","8c62ccbefc92ca0305429b2fe5d9da5f"],["/tags/Manacher/index.html","5dcd42561642c354cbb197f7746f6885"],["/tags/NOI/index.html","e654efacbd2eaa3399abf2217516daca"],["/tags/NOIP/index.html","02aac58579ae38c6cbb4f3edd4d143d0"],["/tags/NOI导刊/index.html","659eec71bdd0ef8f75bb1f1a7db05282"],["/tags/NTT/index.html","0538909799f178118010b90b5b00ef76"],["/tags/OI/index.html","6a16fa4742dc64bf6f569bdc9b460ee9"],["/tags/Problem/index.html","e0c4a3b05231583282a199885c6790a1"],["/tags/Problems/index.html","27d1042dc064303adf6c3d3d2086a314"],["/tags/RP/index.html","72752b0ce767e69395e0459fc136fe4e"],["/tags/SAP/index.html","00cfb9d406eb6aa93068be898e8e7637"],["/tags/STL/index.html","736607a640212fde16207c57cade518e"],["/tags/Splay/index.html","981e6db11b50e92365441863440f8728"],["/tags/Tarjian/index.html","f10a249c82654cfdec494a6aca6fd3d7"],["/tags/Treap/index.html","1322ac5ddc916f62a15b0097861906d5"],["/tags/Trie/index.html","99e03ca777572f3fe558c67458d796d1"],["/tags/USACO/index.html","08cd7850cc44d61af5a40b76c7b7034b"],["/tags/ZJOI/index.html","5b0310b1a5a7b3e145d27eb316255496"],["/tags/atom/index.html","b3f2ee9ba87e916acab5a6cb93a5bffb"],["/tags/blog/index.html","6f563818fbab0fd4ed0b5f4ce0587583"],["/tags/bzoj/index.html","21611822c7aa26f581988ade793b068e"],["/tags/css/index.html","a4ac7d942bacc445bd42a3e90f9d5e29"],["/tags/dijkstra/index.html","e96cbc8f9143a556daf945e9161380f2"],["/tags/dinic/index.html","305e5a928e4e2a8eb0c5db2deb1561a6"],["/tags/fhq-treap/index.html","508ff0c3a12ba5e189edf6f477911160"],["/tags/git/index.html","5ba3ca5a42f709e3554411638e082c99"],["/tags/hash/index.html","f09686e85f04387f15302859ffa3aa42"],["/tags/hexo/index.html","38f46d1a71220afeaaa4248865d28824"],["/tags/html/index.html","e7d21da53aa0d4c4af735f99ef0dbe24"],["/tags/index.html","ee06656f5a51d5393751f6fcc2be568e"],["/tags/lambda/index.html","182281c0fd1c4f9c4a89e8a98b048b0c"],["/tags/luogu/index.html","d2b37bbf63e23ba8863a7189cf41dbf6"],["/tags/lyoi/index.html","5153de1cb8bd957f192fad3f299099ad"],["/tags/markdown/index.html","7f12475158d6a691bc56c136fd8480f7"],["/tags/plugins/index.html","69e38bf4e6b3761d9932b3b88f3acd5f"],["/tags/problem/index.html","7cf7af152004c7a269562098b20e1021"],["/tags/python/index.html","a849a3cff7eaa58fc1d0a94e7a561f71"],["/tags/qbxt/index.html","4aef50250c894b14c8e850d2b9f0c65a"],["/tags/rope/index.html","796774b75b30361f4e6620c7400d1681"],["/tags/spfa/index.html","5e2af2b3f30cdb01bf83ffda384cd8b7"],["/tags/system/index.html","1a668bb58c0efb086f891cadb7b27636"],["/tags/terminal/index.html","b6c5f48101dff553637d4b3f6aac71f6"],["/tags/zjoi/index.html","27d501fa1bc3b1dc4bd7cd74ec0143cd"],["/tags/zkw线段树/index.html","ac5fa1495c9274f2010fe8d5a55e9b88"],["/tags/临沂一中/index.html","3cc06e5afc67d6b02c7458a7709d9a6a"],["/tags/主席树/index.html","b202389a58a71d33527db36b8405795e"],["/tags/乱搞/index.html","f175cfdeaf9e1ba08c70c5ca61f165e4"],["/tags/二分/index.html","f3acef0e707fe58779e690f2a0917e64"],["/tags/二分图/index.html","c48dd3eff4011ff5ede5707d594f9a5a"],["/tags/二分图匹配/index.html","a2b829e18f269ff35d2eb0c55a4de944"],["/tags/二分图最大匹配/index.html","cbd5449e1e2804d7ac6138287b847ffb"],["/tags/二叉搜索树/index.html","a78ec64f650668567e3d5f52ff6940ad"],["/tags/二叉树/index.html","cd3de825a68e9aa6564ec2106e9ed021"],["/tags/代码规范/index.html","3573408f0a8cdca5746298de9b4d1daf"],["/tags/优化/index.html","6979949f6bad8156db01723262937f1a"],["/tags/几何/index.html","b5e25769ca2a0d85113667cb130fe6ea"],["/tags/凸包/index.html","c52a69710925debb42de37563902abe6"],["/tags/函数/index.html","237de42bb0908dd7b09a83fd5c1b3529"],["/tags/分块/index.html","1993c1cd3fd684d6b1480a745dd8e152"],["/tags/初等数论/index.html","88887847ae04d0fb60f741694884c787"],["/tags/前缀和/index.html","02916fc8fe6e01b459099672659230eb"],["/tags/动态规划/index.html","2a3cd52d38f897ed46ed9d66101015f7"],["/tags/匈牙利算法/index.html","3afdd4e3ace89600cffb98896b1869fb"],["/tags/区间/index.html","1efdca3ec484cdb11c29821cc72966f3"],["/tags/区间操作/index.html","b73fcc422c1db56555c2b0dca0841259"],["/tags/区间第k小/index.html","a415595c4fd1412701d477933dcc4ae8"],["/tags/单源最短路径/index.html","c81846a9964e0b22603de15c8fdf736d"],["/tags/博弈论/index.html","430d3fddf772205b3f4f528a49532a96"],["/tags/卡常/index.html","86b2010740f97c9327a05d65757bece0"],["/tags/卢卡斯定理/index.html","60c869502959fc6ae739f895cfa327a8"],["/tags/卷积/index.html","c29fafb6e4a951d70846019c5d7ef9fc"],["/tags/叉积/index.html","c9ab978b8f899130c61b3e0fc067f626"],["/tags/可持久化/index.html","0e8bbdfe764e12495d05b74d3908669c"],["/tags/向量/index.html","8f3153eb05b56d4139c4e7b0ae0833cd"],["/tags/图/index.html","621ad7e4a2ec0ce326420f52d1bdb88d"],["/tags/图论/index.html","dc5354a15e82b8cdc9d5bbc93b8b5e7e"],["/tags/块状链表/index.html","b18aeff68d37f3bea8c7075c0acfc011"],["/tags/增广路/index.html","ef7d351070463ed574fb5678a7e371c1"],["/tags/复平面/index.html","48f02a0ba2e5d19bc6c8c90d2f47d0ba"],["/tags/复数/index.html","82036326b4a77c5869690d4a9d10d582"],["/tags/字符串/index.html","15e84ef4abe47f6e60919b76f039900a"],["/tags/学习笔记/index.html","bb987a8f5862283fe676ce34cb223b51"],["/tags/常数优化/index.html","18bc212a5ca9276f13e998f4a0ac6d4e"],["/tags/平衡树/index.html","5bd35038de75a2ebfef881de26f9f503"],["/tags/并查集/index.html","fd9e77c7b962ecbbb2657f79768b2dc2"],["/tags/强联通/index.html","aa0a9f85846d0599447c423a7910df28"],["/tags/快速傅里叶变换/index.html","c1ea9038103b643e692e1f5cb8bc6c2f"],["/tags/总结/index.html","9e1c6bd09cb5b086aad59195610024ee"],["/tags/感悟/index.html","ac64119151b2fd89228bd4af14838adf"],["/tags/技巧/index.html","1e21a4f52810c74bf2a1236a96bea572"],["/tags/抽象代数/index.html","04b73733215de20352dbba036e4400af"],["/tags/教程/index.html","7d7c0286141be0c597cd329b685b9ec5"],["/tags/数堆/index.html","3f19e6ea7466738014462422a27448c5"],["/tags/数学/index.html","cbf5f42c116d22d008a149b91e5c093c"],["/tags/数学/page/2/index.html","b1a338f8c2b1a74376a2d9223dd7a10e"],["/tags/数据结构/index.html","b1d37f97e2856fbbeb59bed899128e76"],["/tags/数据结构/page/2/index.html","5d11b147508c561934e4d399e2cd73f6"],["/tags/数论/index.html","8527a5f93a3a968ca6ef0118b6554ade"],["/tags/数论/page/2/index.html","be4e77fb0da74235873612928a4227ca"],["/tags/文学/index.html","5386077fb9f7d8b14d18b2e9751e4631"],["/tags/方差/index.html","e60f34fe351979b477b108be707b5474"],["/tags/智熄/index.html","8593d85f2e84c2823fd8eb172a044ce5"],["/tags/暴力/index.html","318d3d31fe703f3739205bfb02498f24"],["/tags/替罪羊树/index.html","38a4ac3887049f18f855b842d82c8b4b"],["/tags/最优化/index.html","a2afa98e0b1b11256aa9a7118e34ed8e"],["/tags/最大流/index.html","0e8d37708e22611f34b025174f1f79d4"],["/tags/最小割/index.html","c1b8f645b3754aca63ab99d619f0e649"],["/tags/最小割最大流定理/index.html","950bece07cb0ea33ec389c87d568e264"],["/tags/最小生成树/index.html","91d93befcb047d8921c75c56421d5719"],["/tags/最短路/index.html","89689e731309f64a19277bcd8f1556ae"],["/tags/最长回文子串/index.html","76293c85101b79cc48450e116ec34625"],["/tags/极角/index.html","ce3c6ebc668d9b61cf57652d2abce6a0"],["/tags/染色/index.html","7bae8bdf8c54a721bc528946b84ff5cc"],["/tags/栈/index.html","2e67c56554512e5f6d6c99c267a85de5"],["/tags/树/index.html","3bd0e78ae49b2c9015fbfcc8eca425ea"],["/tags/树剖/index.html","25aa0c2ccabbdf838b87c1ce4515199f"],["/tags/树套树/index.html","950a282fcef5ec74edea677945c8a5e7"],["/tags/树状数组/index.html","9a3db5fce950bbc9d0d7e652b91f0c3e"],["/tags/树链剖分/index.html","db7dd949538397ac5c736afd670a724b"],["/tags/模拟赛/index.html","27a68c0a747a871e9af8297f6a09d816"],["/tags/模拟题/index.html","8300c9afe160876a7a60f96b718e8e9c"],["/tags/模板/index.html","c1a41a9c09b76ab87cbf381eb766a442"],["/tags/模版/index.html","ea0c45d878ba963d57af55c84c5fd175"],["/tags/模版题/index.html","4b2563af7de4a641e2dee7ed45244100"],["/tags/欧拉筛/index.html","4573304b4f43be76b219d61c0ecebe8a"],["/tags/毒瘤/index.html","f9f6d0a4f9c0ccdadadc9de6c42bfa26"],["/tags/测试题/index.html","bcc6f4d0ffe07a4ae2f9622f2b037336"],["/tags/济南/index.html","01b0f1c2b4c3c86497b80214cb594c05"],["/tags/清北/index.html","4f6e98a05a84fa6629d8729818f30a1d"],["/tags/爆零/index.html","bc5b13ec02ca85c705295a55c34d7103"],["/tags/玄学/index.html","e45ac347b8206230b589370a9583e9dd"],["/tags/珂朵莉/index.html","9f44af59bb3f8fa929a998f321db1f86"],["/tags/生成函数/index.html","a415e082bd9d50ec1b6077d122688bd3"],["/tags/瞎搞/index.html","432608d4b2a78d295bea8989a0cd0a0b"],["/tags/矩阵/index.html","d9f9ed40f33602828b0bbc479d573281"],["/tags/矩阵翻转/index.html","faf58e1ec84cbcf5520fe6a75aa84f93"],["/tags/算法/index.html","eaddb454e914ee8dbac27d94c4db18c3"],["/tags/算法竞赛/index.html","9f1b359c71594948a530abc0032c71df"],["/tags/素数/index.html","6f8f9be0624a6d9b5df5b8435c749a63"],["/tags/线性基/index.html","db300036c69034bf39ccb0f780f74e60"],["/tags/线性筛/index.html","4b998d5fee8d75b3fa8c1ff1c33dd44a"],["/tags/线段树/index.html","8b79f23eddc427185f250b4f8e81c4d2"],["/tags/网络流/index.html","8bf1aa7b4bb81af530d7d44faa91686a"],["/tags/群论/index.html","fbd1ae30400302046e8bbeba0ec7a12c"],["/tags/自动机/index.html","92c896a14fba431519a0f928faf38814"],["/tags/莫比乌斯/index.html","616ad4d6dcb5fcb371624b42d314fe89"],["/tags/莫比乌斯反演/index.html","7a948b66505392eba1387a16c76ec53d"],["/tags/虚数/index.html","fcfe69ce1e9c113bf7b1bfc37e0fb75e"],["/tags/计算几何/index.html","b07722782fb19380996570ee2e2eba27"],["/tags/证明/index.html","99f22eee968bd4cb7eb637bd3f32c639"],["/tags/评测机/index.html","0b56a2c95795216bf16058cd1532d3dc"],["/tags/诗/index.html","476d4f98de514727bdaaaf789c765951"],["/tags/诗歌/index.html","bd58c002704edbbcd51cefd838831fd7"],["/tags/费用流/index.html","66e05a676e9064ae1b08dbcd1156ed69"],["/tags/路径压缩/index.html","2b1025b15115b647a45cb316e958ba17"],["/tags/逆元/index.html","6ab7ff264e5069fd811d0e663b7100d1"],["/tags/递归/index.html","636b62628634abe50817460cf9c5b3da"],["/tags/递推/index.html","9bcb7e1a913531bb6e17479f01149f0f"],["/tags/邻接表/index.html","298edcdf16bc926f41ae8e42ca07c30d"],["/tags/随笔/index.html","08a37d5caa88a8a23ece114397d77cb2"],["/tags/集合/index.html","c6ebe4f8655fd6eb6b241fbef2e67dcc"],["/tags/集训/index.html","be3f90ba506007e8772c49d8ae745554"],["/tags/非旋Treap/index.html","b30b010217238959253aef2b1cfc5344"],["/tags/非递归/index.html","5a8b885c580ba5557678ffefb7d2f971"],["/tags/预留推进/index.html","3dc16b46418e15cbbfaa85982a964b44"],["/tags/颓废/index.html","42f22267c538dda8ac5d87dfbb914d9b"],["/tags/题目/index.html","ccab0ad62246feb1bcb9a0b8eea5ea2d"],["/tags/题解/index.html","0d5c5272d9b439de0302d7a60293ba78"],["/tags/题解/page/2/index.html","d1fa05999a57f3bcd4d61c7c06f733d8"],["/tags/高性能/index.html","d82f54d6130b0e0051bc673557298bff"],["/tags/高精度/index.html","a6cb658cfab7ca6e2ce8bd9f105afaf7"]];
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
