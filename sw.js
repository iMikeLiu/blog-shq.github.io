/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","c6c47642ee75d6b90f8ddc487b3f8fef"],["/about/index.html","f9205ddc399eff5477efa330d4408fa1"],["/archives/2017/12/index.html","4d49b4a468100aef54c613f4209d92e9"],["/archives/2017/index.html","7c4e74efeb521c1d724a91b58e4db11d"],["/archives/2018/01/index.html","7300edc925326885fa2ff49879b147e8"],["/archives/2018/02/index.html","4bb4227a0cab7742e649c3ab2d5b284c"],["/archives/2018/02/page/2/index.html","31523ab74ec6570bffef02424c89cc6a"],["/archives/2018/03/index.html","4cd3dd6f65b5b60f835d9857e2461e7e"],["/archives/2018/03/page/2/index.html","4c373037f4f3afa4ac35f69c89d46512"],["/archives/2018/04/index.html","470c8af2ef5b812db178783c2fc35f65"],["/archives/2018/04/page/2/index.html","e778affc6f4e96289b092b7314485c16"],["/archives/2018/05/index.html","3423a45a58bf2215b0c1492432188f2a"],["/archives/2018/06/index.html","923cfb7e9211cfe1a0fc76f299df9486"],["/archives/2018/06/page/2/index.html","db961400d23cbc8edba9e25d80a155c9"],["/archives/2018/07/index.html","6dca04cbb6a6e02eb09ecb54b70a7043"],["/archives/2018/07/page/2/index.html","b2ad15c6f84030f448d01fb316d8e428"],["/archives/2018/08/index.html","d1e401c3d5b637dce837098e93b2d5bc"],["/archives/2018/index.html","d268999fbe9a8520c38434774aaf6f85"],["/archives/2018/page/2/index.html","238b73bcc3d32ba4782fb17d14a1baaf"],["/archives/2018/page/3/index.html","7890608ee123fb31f1f70ed3b04759d8"],["/archives/2018/page/4/index.html","1e24305e2c4ca4195fda64a51db2e727"],["/archives/2018/page/5/index.html","1d43231383e812ec056c231a58764b37"],["/archives/2018/page/6/index.html","1ae0df0618c2f35953f7a866b8d56b49"],["/archives/2018/page/7/index.html","1f3fb8eea7e1dfde842c2c3705d8b940"],["/archives/2018/page/8/index.html","426298bdacc8e397d0d17414932ee4f9"],["/archives/index.html","59155af441c876788a297e81894c287f"],["/archives/page/2/index.html","2e218b999baef29eb6221e00b644c6b0"],["/archives/page/3/index.html","47b92f025092b238c7bce690f408676d"],["/archives/page/4/index.html","31ba1072b5c5e4b063cae1c1d06645ee"],["/archives/page/5/index.html","7548c92409d385818a7ea880422d8da7"],["/archives/page/6/index.html","f94704a7343b2e78e6466becff3b8a71"],["/archives/page/7/index.html","b58d805da428decee9dc78140ffcce67"],["/archives/page/8/index.html","9d68b13d9b2b2c9e552cfe80d55c99ae"],["/archives/page/9/index.html","6d762d0c92b8fa3362135db8b5677c8c"],["/articles/18-4-27-things/index.html","a231c656e896924972b3db5a75290041"],["/articles/18-4-29-test/index.html","2059a554ddbe6f905831bbea458c58ec"],["/articles/BigInt/index.html","a9199a0dffac99917813c549b954439e"],["/articles/Chtholly-Tree-ODT/index.html","50e2c1d0fd75c0cfe81a8942a4c5cd14"],["/articles/Code-Style-for-OI/index.html","05af38f2d9a0d1cd9e75dde91f7f3e73"],["/articles/Computational-geometry1/index.html","11f2c1658acbb59d1e571c6a10d2bcea"],["/articles/Computational-geometry2/index.html","b44f5af658d55a214ed9519e586ce01c"],["/articles/Computed-geometry/index.html","9ca5a825e204ac4ee2d723491516a1af"],["/articles/Dirichle-product/index.html","52bb04e6763928734275a034e66de103"],["/articles/FFT-study/index.html","90b0ae81934b4ed8e6df0acb3f0624af"],["/articles/HeatWave/index.html","4ae1fafbd1e2802439a3854c3692960b"],["/articles/JSOI2009-游戏/index.html","72e3e49d49037a70b7979cf42fa95211"],["/articles/KMP-AC-automaton/index.html","3347ed015ed596b9a07fd0b09aaf4f5e"],["/articles/KMP-AC-automaton2/index.html","c8d2464199fde26b70f570483fd5f87d"],["/articles/KMP-AC-automaton3/index.html","37b25b8f370b4d4b853a162034b26359"],["/articles/Linear-sieve/index.html","ec22584752f449d65ed37bb40f66a6ed"],["/articles/Lucas/index.html","2e0e119ba66ddc13767cf8f841aed6e3"],["/articles/Luogu-P4276/index.html","65a3d572ad4eae28ce031d01755ae49b"],["/articles/Manacher/index.html","3af0ca1aa58aa9e44b1133313203c7e6"],["/articles/Minimum-spanning-tree/index.html","5587b78f5fae4ad088a24509fc202292"],["/articles/Mobius1/index.html","78adb5b8457ad8dbee9c4bb6c63f2211"],["/articles/NOI2010-Plant/index.html","5bcf46d12bf3ad341c4c963777a7ddff"],["/articles/Network-flow-Algorithms/index.html","824b79297b7731874fe33c27ebee192b"],["/articles/Network-flow-start/index.html","d7fa29592e19b5e8f40387cb365d98ea"],["/articles/OI常数优化-进阶/index.html","f1718bc6eb81a170b41094b2c9ef84ce"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","2be5540043d04753834bfa705832b38b"],["/articles/P1984-SDOI2008-Water/index.html","24326cd9ab7eeefa7d5a8e9ed9592ddd"],["/articles/P2018/index.html","513723cfd80e976a61610c62cac20245"],["/articles/P3933Chtholly/index.html","e71d18aa709e896442ce70a15873de53"],["/articles/Partitioned-Algorithm/index.html","dd9611ab085f3e906e4b5d3440239fe8"],["/articles/RP-introduction/index.html","2540474a669debdc6f9d8e338f78ca27"],["/articles/Sandaram/index.html","f2152568fbf825f9299151aa25d53e7f"],["/articles/SegmentTree/index.html","0e5754b8c81d3d49c011b171827a8c20"],["/articles/Segt-in-Treap/index.html","97d950e60b1ce3946cab036d61724067"],["/articles/ShqProblem1/index.html","290c971b9c451feb258b9eabf5312bb4"],["/articles/TreeArray/index.html","36601a56611844386711491410e189d8"],["/articles/TreeArray2/index.html","a54cb224ea8f2d9002765c8ecbc95c0e"],["/articles/Union-find-sets/index.html","1ef5a4374586baf1b9a350f6d2572c24"],["/articles/ZJOI2006-书架/index.html","4ec6d5ee08fd0219a2bd0fff8948e66e"],["/articles/ZJOI2007-矩阵游戏/index.html","5daf655c14e751044ea45ea83011a079"],["/articles/a-bproblem/index.html","3690290b13110081ee5b1ec1b289d08f"],["/articles/aboutBlog/index.html","d3aa6189cbef1e3703a09bfd5ae36f5c"],["/articles/aboutgit/index.html","7d032e479e9192d59e12489f4a086340"],["/articles/atom-plugins/index.html","1ee5c7e2f4041ebcf65c97262fc9f39d"],["/articles/autoAC-lemon/index.html","433bd6483aea4425c06ab39833833f0e"],["/articles/bzoj-3337/index.html","17087f6590e467727e86a0f06c9d994b"],["/articles/cppteach/index.html","9e9eaacf5dd0db25f6fceca2e5bf3254"],["/articles/css-QWQ/index.html","41a24dbe02cee29049de32a9a1075ed7"],["/articles/dijkstra-spfa/index.html","5b8b91fce7cc1fa90ac6cd6cd1346f96"],["/articles/dijkstra/index.html","02017f89aa4e72847ba79fc952551021"],["/articles/dinic/index.html","b2609c003fb4921aea803c12586fd2fc"],["/articles/duliu/index.html","0041d74110a7a1350430d7d8f986e226"],["/articles/dynamic-planning/index.html","47fe92d3bc7d8f80b669faf1dde812af"],["/articles/elementaryos/index.html","362c18ff532cf44110404114f39f92b0"],["/articles/er-fen-tu/index.html","978f9d64c307282e63e18bafca75299c"],["/articles/fhq-treap/index.html","4805214f35d704e04127b776ada29f10"],["/articles/group-theory/index.html","dd35dfe1ea291362dbf13f430f43fc06"],["/articles/lgy-from/index.html","90d531d2830adf73083fc164884cfb83"],["/articles/linear-basis/index.html","8c93449169872987d374b3b21d433a97"],["/articles/lyoi-Poetry/index.html","31902fb6c5ecdf39c210f5ef0aba909d"],["/articles/lyyz-test-2018-5-19/index.html","fdcce458283f37557de468b0992339c6"],["/articles/markdown/index.html","8cc68a99b0d5579d5c74b3f7c4f8902f"],["/articles/moban/index.html","aebc34353de2c076278a703fff676c6a"],["/articles/poem1/index.html","c5d39c5bda6220bd975f48514fcf3997"],["/articles/prims/index.html","957c72d286d6c7a207f738a34a725f0d"],["/articles/python1/index.html","72e8112bd426de5309df549d99118420"],["/articles/question-01/index.html","100c0a0627fa0981a7e9ed8ab1f9ffd4"],["/articles/recursion-to-no-recursion/index.html","aac7963d8590c94107c3e42b642e85c7"],["/articles/scc1/index.html","2904ad8a3bf6d13fbb55ecbfff2ff451"],["/articles/somethinks1/index.html","b4c37e4e5efd05584b53b600316839b2"],["/articles/terminal/index.html","80846ff5353b6c2bfae4457572466de5"],["/articles/terminal2/index.html","3ebdaba3ff7b349507202e80fc6ba441"],["/articles/test-mode/index.html","b53174847bd7ad43577e091f3f146f9f"],["/articles/test-polyline/index.html","2dc0cf281866ef2504c120b4a75c356a"],["/articles/treap/index.html","5155ca95de19773d94e28a034977d32e"],["/articles/tubaomb/index.html","c783496e880f7d1fa090c6942654b5b0"],["/articles/use-hexo/index.html","d5ee61c9cb8d75d96a0247df98af1eaa"],["/articles/use-hexo2/index.html","060756b19df9b527e672906d44cab74b"],["/articles/zkw-tree-algorithm/index.html","18229cd28093036d3b24f165637f4870"],["/articles/zzWA/index.html","a6ddc2d2af97c9a02bf4394161ff52a8"],["/articles/「LYOI2016-Summer」一次函数/index.html","b6e6143beeffef0f721a0d6912e350b9"],["/articles/主席树详解/index.html","9411450789ac9af47255fad61d89e478"],["/articles/分块-P1471/index.html","8e4f7218fd3efd6f3c0207c5417715e5"],["/articles/可持久化并查集-rope/index.html","11b98978e2b32116b581dece9d8fc86b"],["/articles/复数表示/index.html","f2b2262e37e1a6631566a7f3cfbb000f"],["/articles/洲阁筛/index.html","416c2b85f8de5974c1e66d2259582d1b"],["/articles/生成函数/index.html","4661a89122daa7cdb50db0443b4a14b4"],["/articles/网络流-二分图最大匹配/index.html","2f136e7d0f05222d5ef018615e2beb3f"],["/articles/自然数的和/index.html","ca2f418aead58751d11def255f6e700e"],["/categories/Blog/index.html","b55985838ad16bfd9a8012b10a94623d"],["/categories/OI/index.html","b54744ba4048f6cdde9d186e4cfe7c40"],["/categories/Settings/index.html","7f2df7bfc9ffdfcc8d18c5c848106c33"],["/categories/Shq出的大水题/index.html","8c53b1cac4de122cf6466d76481d561c"],["/categories/system/index.html","807add2ede4e2dbdb33262f2ca974b32"],["/categories/《RP导论》/index.html","b7568b3cc3da850983a021f7803c2375"],["/categories/《Shq出的题目》/index.html","e21a253492df8813ac479e017ffa30df"],["/categories/《Shq笔记》/index.html","4eb191fae1f5c7fba10bfb4ccf1147db"],["/categories/《Terminal教程系列》/index.html","8ba8b2eafec678459251916a8fd2ac61"],["/categories/《hexo的玄学用法系列》/index.html","5655bc55762a64d3b77485d6dbe5cf50"],["/categories/《人生苦短》/index.html","da240106c14fe5dc8035126758a4eb12"],["/categories/《教程》/index.html","c213264fb3b0553c4f9c121974bc35fb"],["/categories/《最强的Lgy》/index.html","a90a8a1ddf4bf6712e712efc3cce15eb"],["/categories/《烟雨茫茫》/index.html","08de55e2248748a71dc5e5f7167139eb"],["/categories/《玄学》/index.html","e51d91902bb34b44a0de611e0ebcaacb"],["/categories/《算法模板》/index.html","a5fd844015ff1dfee0f92a4a954b7fdb"],["/categories/《算法详解》/index.html","64062d3ebe3575f92d64afbc0117ced9"],["/categories/《算法详解》/page/2/index.html","db48a2ecf1c764d45ff1bc23794c913e"],["/categories/《算法详解》/page/3/index.html","deb447952f63650e03fdb6bed063c378"],["/categories/《题解》/index.html","df57f58b5712ef82f46d2112f5914a7c"],["/categories/「日常卡评测机」/index.html","ac84b46f5d930121898b8a97bdd396d8"],["/categories/题解/index.html","ec6db065466588e3322873436bc16d84"],["/comments/index.html","66833d6e6a7403bd0a53f76c037e16c2"],["/css/main.css","7e57c4a1f0ff547938efdbab0db786c6"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","ce1fa84a1522280a4b067d43a13bdf36"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","cbc89240246008a00001a29868ef06d8"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c1aea495fa61a4b824e3c568a3cb4f64"],["/page/3/index.html","d0a6e903caf1f705072187d27ceee2f3"],["/page/4/index.html","4928d87891426d889757a8fa4d8b4402"],["/page/5/index.html","dd9e7dcae20a973c7b83292ea279d47a"],["/page/6/index.html","aa26f3124d1332c6fb0b3ad6e74dc4f0"],["/page/7/index.html","672f574a53e54dfbd567f365481e3df7"],["/page/8/index.html","8e42f17b5a38d0ca255819f929657576"],["/page/9/index.html","fb1ba0fa34c0d37dadfa2b9933176e3c"],["/photos/index.html","d30cb110076c71b3f29050aa9237814d"],["/remittance/index.html","70150ca11e244e9c8a4fdc357b8e0912"],["/sw-register.js","e96d1488a696b1350238ea4d56faaa5c"],["/tags/AC自动机/index.html","4dede234f30c60ec03b77861e1eb9e37"],["/tags/Algorithm/index.html","39e9db10395df834d37e8a27da382f05"],["/tags/Algorithm/page/2/index.html","fffe9d8be569bcb71bdb91baeeeba97a"],["/tags/Algorithm/page/3/index.html","13ba2e2a9dd4fb3db11e943f0f00184f"],["/tags/Blog/index.html","f705b26d92a01c31562371a26b30f0df"],["/tags/C-11/index.html","dfd62af5834a0514ec22da3266a402e1"],["/tags/Chtholly/index.html","7de8b4b6d37f3c36dbaf6af3053551f0"],["/tags/DFT/index.html","24f3646d7a5bc2c4ec37887af47beaec"],["/tags/DP/index.html","bb7ba597c474b9f9631d8cf9bce48bcb"],["/tags/Dinic/index.html","262a2ecda2b3aa98d2463bc201fad951"],["/tags/EK/index.html","4330f430f3fed43b127e2307a40cc213"],["/tags/EK算法/index.html","9ce02b37118a3d740c3965c54e1896fb"],["/tags/FFT/index.html","b5c0e87a27dac6d9f28f152948b0514e"],["/tags/FF方法/index.html","5b99841124308b31c6da127c39372a0f"],["/tags/Ford/index.html","6f6b1f0ba391748a10087c3dab06a5ec"],["/tags/HLPP/index.html","1a62c05d2e7b96736c3eac50f1dfe948"],["/tags/IDFT/index.html","38319c22c36973fe652fe5872e3ffb53"],["/tags/ISAP/index.html","2dfe3dca4fa34741de5599d0dcee26ef"],["/tags/JSOI/index.html","ce6a03ccd030992caa9085bcd31c4fef"],["/tags/KMP/index.html","cf11b7dd38a3c85e91a4821f37ce76aa"],["/tags/KMP自动机/index.html","a80e2866d3904b3dcf3a909c7df70df3"],["/tags/LYOI/index.html","1570b4e9e1e7ccc9f69a442cc6af5f39"],["/tags/Lemon/index.html","d01ae86babc95f5ba63023a378f79d04"],["/tags/Lgy/index.html","8dfbdadf464256dac74af8e1db7c679d"],["/tags/Lucas/index.html","a717a07bc5f5f66ebc00f20ae4f1a859"],["/tags/Luogu/index.html","e2ab1e3cf4ef778e0266a4e06f4e10b5"],["/tags/Manacher/index.html","f07666c4ba7ae214d995759b53d1c3a9"],["/tags/NOI/index.html","09c53f2d573b0ed919f328915dc91cf2"],["/tags/NOIP/index.html","30f8b236c062296eed4b81c7edd3a3f9"],["/tags/NOI导刊/index.html","9d3edeac5325d7bbe00ad838e8310e8f"],["/tags/NTT/index.html","987536f86982ede7fd0bf8b7ea51f5a2"],["/tags/OI/index.html","fbeb35dfdae21a522f6fe62ce4f5b9f6"],["/tags/Problem/index.html","0aa69bc3d4e7bf61bc8eae0009d4f9ff"],["/tags/Problems/index.html","ac85bb74038b96f6c461835a9494f9f8"],["/tags/RP/index.html","8cbd28bc0f173004ec5a553002663bb9"],["/tags/SAP/index.html","dc5e1d4d563c986663b71219c999ef7e"],["/tags/STL/index.html","b4d5f6245c955a40ab580e563cf60c8e"],["/tags/Splay/index.html","7900e608590fde60dc57e05cac4243d5"],["/tags/Tarjian/index.html","327406bcdc1e38912180db656c325156"],["/tags/Treap/index.html","12bdc2057528b7555f7e94970005f41d"],["/tags/Trie/index.html","0d5158d03d897fe29858af519fce0c75"],["/tags/USACO/index.html","d2845dc6818d1ca1127c0b89e323a0a0"],["/tags/ZJOI/index.html","e013f3a50792be514a5fda1be29b56b8"],["/tags/atom/index.html","ce8bf1a29bfb3efc5938aa3c1cd461b4"],["/tags/blog/index.html","6d35411e502025546dec696f4bba9c67"],["/tags/bzoj/index.html","db551006e2be3a1b70dcd6a7a56098aa"],["/tags/css/index.html","a0ba71b8b58c383b0020e7556d770929"],["/tags/dijkstra/index.html","546accfad0513b9aebfd7544e18668ec"],["/tags/dinic/index.html","1e8873dd63950dfd9b3feafbd7c8c43c"],["/tags/fhq-treap/index.html","97dc4ea1d7f39eeacbcfe7aa28e17a90"],["/tags/git/index.html","23eafef3e46538cb88821df51b2c18c3"],["/tags/hash/index.html","f7ca32d8cd07e6375f6bedb3fb0f6a8b"],["/tags/hexo/index.html","2e65aa81b3d161766ba47c562169ceea"],["/tags/html/index.html","18fed4fce59c0aeb60da63f3f6ad09ba"],["/tags/index.html","3028e61f6877a97590241a201377385e"],["/tags/lambda/index.html","c66ff040709a00c5bc3f80b2df4cc427"],["/tags/luogu/index.html","c1b70603e1ba2db06a79b2c5b5638169"],["/tags/lyoi/index.html","7b2d46de57128bc66f7b6e8fe13bae62"],["/tags/markdown/index.html","d8bff7874c73a6e8fb98e5401e9db860"],["/tags/plugins/index.html","38dcf740a39aea005c22dcf3ab8c3bec"],["/tags/problem/index.html","d7bea14d8298bed5d9cd1cb225e73f4b"],["/tags/python/index.html","c0d79b63e0e9994a1c7e66725d70fe60"],["/tags/qbxt/index.html","942731b7bbe7a8ab56fd8fd452861d58"],["/tags/rope/index.html","8cfabea7e897c9ff0d7ad0e967923722"],["/tags/spfa/index.html","e66d808a2ef8dfddd0a7de1cb04921ec"],["/tags/system/index.html","ada796002363ce7e3c1dc6649418d35a"],["/tags/terminal/index.html","a6bda483f1abdc651f9992454362dade"],["/tags/zjoi/index.html","1ff2d32ea3048d30cce34b57c84af8c8"],["/tags/zkw线段树/index.html","d284792fbf63d11dc49148aea862637e"],["/tags/临沂一中/index.html","194bbb02f2db5a53fd42c2108cf3e3fd"],["/tags/主席树/index.html","2d6a3ee2a86432d1b458e98f5b16dbcb"],["/tags/乱搞/index.html","77f16dcdd773c172f6ab878fd7958d26"],["/tags/二分/index.html","d98d6510bb3aedb7b120b7d036238e55"],["/tags/二分图/index.html","66b00d4e039cdabd6df4edae3bc77d3b"],["/tags/二分图匹配/index.html","707bf9f3b9c89840e356523cc2078122"],["/tags/二分图最大匹配/index.html","18ba20a02b0bf4bad5c7290f2909a302"],["/tags/二叉搜索树/index.html","810a970fdec3d20e80d3a71a2e5ee986"],["/tags/二叉树/index.html","d7f87625d03f0f8860c3a70592563a84"],["/tags/代码规范/index.html","46d5c91a74ebe06d15fe4b63f54d3000"],["/tags/优化/index.html","977634ff70c4fdb0f147a7f0d9ac2467"],["/tags/几何/index.html","01d66996b2577d10631647170bf17f50"],["/tags/凸包/index.html","17c54a8da3d71e1d528a76c2ebf26200"],["/tags/函数/index.html","86a7f41f7da5347b94b998d9da168b19"],["/tags/分块/index.html","e9bb10a69c06754d434fd611a3169aa3"],["/tags/初等数论/index.html","6deee4857f8076b4ee01bcbff45f8d82"],["/tags/前缀和/index.html","b674dd22729c119a69ebfbd5148eedd7"],["/tags/动态规划/index.html","3d0a06eb8f5b376ce4485e4d45390b49"],["/tags/匈牙利算法/index.html","09316f58be432bc25f51a2c8078f3074"],["/tags/区间/index.html","f5ff39e036fb873a3ccafb1953bff5d6"],["/tags/区间操作/index.html","8aceb9c219ca0e87c969ada6835d2bcb"],["/tags/区间第k小/index.html","315df192470d7fa2d35fd2a9d66d8eee"],["/tags/半平面交/index.html","dea9749f855c8a5fc214fb9701d02afb"],["/tags/单源最短路径/index.html","0e833cddc4691cb77b4284e906bbd6b2"],["/tags/博弈论/index.html","cf59adc33675d1fc08f0f2bcc4139f2c"],["/tags/卡常/index.html","fc7db1b13b19f7d03ad66f13fc7a2101"],["/tags/卢卡斯定理/index.html","99e02bc9704fe4a805a608356140f766"],["/tags/卷积/index.html","5d210ef68eed999ddecbf7d7eb0c98f9"],["/tags/叉积/index.html","127e425fbfbbc23c051c5c896b93e1fa"],["/tags/可持久化/index.html","63475d7d2fe99366c832a5da873cc090"],["/tags/向量/index.html","ad73f33d1bfeb64d957caa1f0a6d6e32"],["/tags/图/index.html","be2e7f60cb65e910d3b27685d3e21430"],["/tags/图论/index.html","8d94af8174164f85061414f4155c8da6"],["/tags/块状链表/index.html","c9f9c6e3db3db9770ba70d345f9147c1"],["/tags/增广路/index.html","d59b37c492629606f811a388e717d8ac"],["/tags/复平面/index.html","7103d4a7c9686554bf290a57828bb857"],["/tags/复数/index.html","a694e7587a2609d6180c47052b792033"],["/tags/字符串/index.html","8d7a4216ac18ff4934f6817376460b1e"],["/tags/学习笔记/index.html","46c310a7f548947e15669042adb307fd"],["/tags/常数优化/index.html","7289be426b154a01021bf2214aa6eed3"],["/tags/平衡树/index.html","d7e7e98a83c3af925b657b1b1ebbba5c"],["/tags/平面几何/index.html","4051c8c4f5786759225c2d757040020a"],["/tags/并查集/index.html","5508dca908ec8585deca327739edfcf9"],["/tags/强联通/index.html","56e10a6ad1cac30c5b8b4ed8495d8d26"],["/tags/快速傅里叶变换/index.html","62a3c9a4caffa6e41ba28705462c0633"],["/tags/总结/index.html","d797d67176a7994d1a76f4082b5a3281"],["/tags/感悟/index.html","5f46fb0918e955343ee53c845ef01015"],["/tags/技巧/index.html","7b59b600a7a5c554d83cdf37044d16f3"],["/tags/抽象代数/index.html","3c81e57ac5f0e181bb6810ea1e5c4553"],["/tags/教程/index.html","55cef05c0626274186bd6a839708eca6"],["/tags/数堆/index.html","bc4912f30eead841d44214bf350d3e2d"],["/tags/数学/index.html","cf71ca21699c1d499b93d95e22748925"],["/tags/数学/page/2/index.html","e1a56a82dd30904758c3a829174aa5f3"],["/tags/数据结构/index.html","d10c97b2a4600776a371ebcaccbf9dce"],["/tags/数据结构/page/2/index.html","45ca85e5df8224e075e9959b64c72203"],["/tags/数论/index.html","6b34be5e5150051dba19f44ca555848e"],["/tags/数论/page/2/index.html","5ca1bc98b99da0eac40aa708e20eb146"],["/tags/文学/index.html","0d9987268b9aa4addcf93d214796a8ec"],["/tags/方差/index.html","3bcb88d65528e52b2c7bdb0f65999832"],["/tags/智熄/index.html","3efa96578c19106c6b19ed1532d75506"],["/tags/暴力/index.html","d11488ebafa267308de16caed2774521"],["/tags/替罪羊树/index.html","993d71388680c64eab2536dce544d0ab"],["/tags/最优化/index.html","3358a7b41d6b06d3d8a92c9d8522fd14"],["/tags/最大流/index.html","d1765680ce9821ee4da3e9af3781cc6c"],["/tags/最小割/index.html","f62558ded61e9b1a82c8d8623f6e1b6f"],["/tags/最小割最大流定理/index.html","debaaf014a1ed9966a00b3fd3db048cb"],["/tags/最小生成树/index.html","ed033f312f055e2fafd09738043afa7e"],["/tags/最短路/index.html","7cdb679abaa6e4b8a54b5aec152d47e6"],["/tags/最长回文子串/index.html","a16956f43f4a1e2375b018673d380aac"],["/tags/极角/index.html","c6b8ce8adb8cbadc53681a821a4ddc87"],["/tags/染色/index.html","6a331d62d11d53ea7c10fa3b63e778dd"],["/tags/栈/index.html","03c448d4825932e36008f8e8314aa20e"],["/tags/树/index.html","7095eece86ffa782374979a56053d1ed"],["/tags/树剖/index.html","4106cfa0e04d5576c1b3574bd8c8403e"],["/tags/树套树/index.html","f32ee89b6cc947e3dc95f1c1078351d5"],["/tags/树状数组/index.html","e60d5949f4360cd2598993a6fda5c2cb"],["/tags/树链剖分/index.html","53bd23f126714d5e36c5dadc72f099c6"],["/tags/模拟赛/index.html","77237e9ddf94490daba3ad420930fab3"],["/tags/模拟题/index.html","63810622b8efc99ea63b8c53db34844b"],["/tags/模板/index.html","e2b9405c7c40485c648f23bb4f9a0081"],["/tags/模版/index.html","dbfdcf88e4e532721fd68a445376222c"],["/tags/模版题/index.html","c8ad000496d325cf25c62bfd880c50ba"],["/tags/欧拉筛/index.html","182152f12ce60d9f0301fa6a5b718e5f"],["/tags/毒瘤/index.html","73c031cec7326dc7c5374a4b7d8e43e9"],["/tags/测试题/index.html","82bfb40b3d59cdb1e37ff62dfdd8d5ab"],["/tags/济南/index.html","252344d0b4c8ccd219fb04d491c36bb5"],["/tags/清北/index.html","043b8924be6f375a1d25524afaa3f7ae"],["/tags/爆零/index.html","f52b6bd53b968e8321f86b6df0bde731"],["/tags/玄学/index.html","939089af02fca0c48ebb03b447f3f89a"],["/tags/珂朵莉/index.html","feb5df4b36426045c46aab6637a72a33"],["/tags/生成函数/index.html","a35889da202d4fcf93c06dfa1298e047"],["/tags/瞎搞/index.html","d6edf731d8c57cbadb7895afbf4f3234"],["/tags/矩阵/index.html","65f360e8559e109b40bf39aa91f7c6ba"],["/tags/矩阵翻转/index.html","844f6324974674323bc48657384b19ba"],["/tags/算法/index.html","319f881ee6f58fa5e0a2492f94162ac3"],["/tags/算法竞赛/index.html","454c06985c629d7d3c93e2606024c49f"],["/tags/素数/index.html","1c907e73c748e0bfdcfbd2d80f773de6"],["/tags/线性基/index.html","de5df5ade9d2dfc22ce2af924bfc3906"],["/tags/线性筛/index.html","bbacfe5d4916bc7c1374c0537370a02d"],["/tags/线段树/index.html","1257fa6ed336256b74e6a4a3327ddfba"],["/tags/网络流/index.html","200c1a25ca75e96ca1e459c6c4760517"],["/tags/群论/index.html","812317652adbc5dc6567a6a781bc87ef"],["/tags/自动机/index.html","8d5187cb5fa0cd1df7e0fc2d2e2f5c3f"],["/tags/莫比乌斯/index.html","e0240b1811e8b2aff02c94db3f25e6e3"],["/tags/莫比乌斯反演/index.html","aaeb6945731491507197a0075ee8655f"],["/tags/虚数/index.html","f100581aebb2da264f65df8248310359"],["/tags/计算几何/index.html","a862976a4288430ed8e587d75c548e10"],["/tags/证明/index.html","c629ec8f2491c99a70d0fb0c7d7db801"],["/tags/评测机/index.html","a11e12f6822d4c7dbc6fdeb9ebd21800"],["/tags/诗/index.html","2eed861ebe28835a0813702824525a70"],["/tags/诗歌/index.html","e9f57ee4fc74183444141ea8dba342ff"],["/tags/费用流/index.html","0ef9d40c0a2a20c603d52693d8e69a6f"],["/tags/路径压缩/index.html","9e237e43520fbe3315b996bb5ea59e7a"],["/tags/逆元/index.html","263e1535aa917b87c7847f2ff34cbb15"],["/tags/递归/index.html","2c3852f1f16f3ad3152ce9261c22498d"],["/tags/递推/index.html","8fb33803069bc972acf2bd3357b3fa6f"],["/tags/邻接表/index.html","595e826b121dbfa4406bd680d9a1f95a"],["/tags/随笔/index.html","91c419c3b122c8fb6c4d9c18b9de608c"],["/tags/集合/index.html","655835501433b6ef658f3e88da0f2727"],["/tags/集训/index.html","54dd69f46c5ccf0f7051bcab444d1c2f"],["/tags/非旋Treap/index.html","ae73d22123f2c44f07401a9c99507514"],["/tags/非递归/index.html","10ccff954aeb83c0e46dab9c7823fe64"],["/tags/预留推进/index.html","a24f72adc7544dbe047325359cb7aa17"],["/tags/颓废/index.html","9960cc0f121c4116d1c573e4884e2778"],["/tags/题目/index.html","167820e8d6ba9781496a6143a43a1fcc"],["/tags/题解/index.html","a7d5dec73affaf97b13f0748382f85ce"],["/tags/题解/page/2/index.html","bd4ff3ab98cfa2f57f329f49af694ce8"],["/tags/高性能/index.html","02dd5c7d0a8bd2c7d0d31dde6e55a4fc"],["/tags/高精度/index.html","04d76d74d85ccad0828ff70a12f0a0d9"]];
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
