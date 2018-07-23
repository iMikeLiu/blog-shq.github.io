/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","ef2b16a31bf4e4f78c13e309bde7e3e6"],["/about/index.html","ecc317d8d41f9cbe205a174ed832e7a2"],["/archives/2017/12/index.html","295fc64c174e07988af87726de6af2f7"],["/archives/2017/index.html","e4162d35429267dee36eaee7721933d6"],["/archives/2018/01/index.html","51788ed67083ace82c5feae58e359ac5"],["/archives/2018/02/index.html","5ae2715e9955e805a7cc2da8aa8052be"],["/archives/2018/02/page/2/index.html","e9941eab401a88f82598a2eace733d3f"],["/archives/2018/03/index.html","ebec5be39da6640a9a695a0e91ca4281"],["/archives/2018/03/page/2/index.html","b1486e4ef15087b023dd225769f20841"],["/archives/2018/04/index.html","6cab35484027bfb9aacbd697aecde23a"],["/archives/2018/04/page/2/index.html","8d73709555ba97a81ffef6963ec9ea93"],["/archives/2018/05/index.html","d018c0358941ea58b6a2a07f4899fd01"],["/archives/2018/06/index.html","becc2ef4055783de0eda0cfaee69d5aa"],["/archives/2018/06/page/2/index.html","899f5548edf9601e503720b9a319c1d9"],["/archives/2018/07/index.html","e6949e2892e6524562b098a1dfe9fddb"],["/archives/2018/07/page/2/index.html","0f1aff62dc4e27fccc3ec1afc4dd4840"],["/archives/2018/index.html","9b4ab55e5bd4e5b33971c68fcd42cad2"],["/archives/2018/page/2/index.html","3c8483c9c107a74a24df2c0cdf54dd60"],["/archives/2018/page/3/index.html","2a693707a01ea5122024a69a2863ed76"],["/archives/2018/page/4/index.html","4cb4d0de1621a29c0388e1bc613738de"],["/archives/2018/page/5/index.html","1732d0a2f613cbad6fb92057b5f0cd57"],["/archives/2018/page/6/index.html","37e01a0a7515d418588939d3ef02d07d"],["/archives/2018/page/7/index.html","a2e1503d07ed26149a8be8f3a8aac8cb"],["/archives/2018/page/8/index.html","95d53a6b1ee04acd15ae42b747a7311e"],["/archives/index.html","08a0775b63809b72025037ffcb85184b"],["/archives/page/2/index.html","8d3dbbe6b86d70d99a4f6c6c62ce4535"],["/archives/page/3/index.html","11b11749cd7e544f97191fd5a3e7e7bf"],["/archives/page/4/index.html","c3a4b48b3e39efc84b69c63e4effb886"],["/archives/page/5/index.html","a45ee4ef873e043a015123b90f90a9b9"],["/archives/page/6/index.html","9d04335feed36eb82d676da7a2695374"],["/archives/page/7/index.html","c3dcc35d8d0de167e22c767ab1ac6e25"],["/archives/page/8/index.html","6d45b790870a7fb7b6f8c9459218fecc"],["/archives/page/9/index.html","04a6da1063368bf104841ef0bd724b1b"],["/articles/18-4-27-things/index.html","3d81a4ff611c8393bc7c0fbf967b488d"],["/articles/18-4-29-test/index.html","4d375474af0df032a48f7382f103c355"],["/articles/BigInt/index.html","a52429a82c0e4de74e8c3e596a83e744"],["/articles/Chtholly-Tree-ODT/index.html","ec7308adfda28335e1c692967d96b418"],["/articles/Code-Style-for-OI/index.html","cbc1986561a8ad2e0e29e89b60b024be"],["/articles/Computational-geometry1/index.html","0d9ce7097084479f8e7e599bd805f0f4"],["/articles/Computational-geometry2/index.html","d5813e347206f6ceb69e6120b6899fe5"],["/articles/Dirichle-product/index.html","11991472aa5941672b419499b5ac93ca"],["/articles/FFT-study/index.html","e34c15cfb2d94bdae9af4787c3e7017d"],["/articles/HeatWave/index.html","688b0f82c7ff44ef597b072d7121bb25"],["/articles/JSOI2009-游戏/index.html","b03a137a8dc770572e8cf912226bbbea"],["/articles/KMP-AC-automaton/index.html","c766318c9c061174eb863a747e118efc"],["/articles/KMP-AC-automaton2/index.html","83e3a64c483c9c1f4b39cb6d7462de7a"],["/articles/KMP-AC-automaton3/index.html","396698e18470f712b62278719f3c1d61"],["/articles/Linear-sieve/index.html","092744da224bbc62e2e1df230620d37a"],["/articles/Lucas/index.html","29be1d51269e7c2ab029263620aa9162"],["/articles/Luogu-P4276/index.html","c48429ee69bd02a4b9db22a3c3f6c7d9"],["/articles/Manacher/index.html","0e597b3111903d68b1ae1f9387224553"],["/articles/Minimum-spanning-tree/index.html","aa5f10d242d150ffeb7214fe5f714b7b"],["/articles/Mobius1/index.html","e845b3c307337388205f679af03319ec"],["/articles/NOI2010-Plant/index.html","3523f5f8300410eaf455e98d1905e64f"],["/articles/NOIP-2018-zero/index.html","99b0810f7e155b4a1a87a6874087dd60"],["/articles/Network-flow-Algorithms/index.html","cc44ccedc629d963c6c656ed724cc0a8"],["/articles/OI常数优化-进阶/index.html","76582b27984c26a2c13bddcff707f368"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","b3773850bfd1aabfa8404a8fa7cde840"],["/articles/P1984-SDOI2008-Water/index.html","11a5a97dfdee99740b7b29da9bcdb44d"],["/articles/P2018/index.html","f6008d7e27f5d3e531ec2a5411bf7d1f"],["/articles/P3933Chtholly/index.html","72ec398754dc793678a360ea7bb99c70"],["/articles/Partitioned-Algorithm/index.html","31f1e6a18bf0756acd261627a53f8339"],["/articles/RP-introduction/index.html","21eaa5fec31069af5a73204675acb273"],["/articles/Sandaram/index.html","b469b91772e4a45b1b5c20bb3d98e022"],["/articles/SegmentTree/index.html","dd1dd42c2d937e4b64f25ecc28f6d383"],["/articles/Segt-in-Treap/index.html","ce8ccd0e59620c36dd843d469ad51293"],["/articles/ShqProblem1/index.html","f00f25b03b5bc7a022b9746f8e3742f5"],["/articles/TreeArray/index.html","65544c4976d139adde1a1be142b557fb"],["/articles/TreeArray2/index.html","b99aecc3f7ba2807cbbb8c784c8a9732"],["/articles/Union-find-sets/index.html","686395929c1a5d7cc9a5825655c7d343"],["/articles/ZJOI2006-书架/index.html","a703e8b261c588f69cc55dc02e2cac71"],["/articles/ZJOI2007-矩阵游戏/index.html","dfc7aa9568b25e49a02f00dba8c84388"],["/articles/a-bproblem/index.html","8db4db41b95aad19bf4aaa15a3de478e"],["/articles/aboutBlog/index.html","998aad615cf425bfc68a5dec6541f705"],["/articles/aboutgit/index.html","dcd4846b81cfc2653fdf80f1db800864"],["/articles/atom-plugins/index.html","f3f655e857dbd25605ffeb9e055d4eff"],["/articles/autoAC-lemon/index.html","fe734d90b76279da815feba0e7e7aa3e"],["/articles/bzoj-3337/index.html","edadfc4a2f77ecae4f4ee4cc8cfbfe7a"],["/articles/cppteach/index.html","fcfe20d652428479c8aba71472ae9c72"],["/articles/css-QWQ/index.html","59a832040280644ec18d64ca0796d7bb"],["/articles/dijkstra-spfa/index.html","a39847a818ff3f9d944ffbb57a52d5e1"],["/articles/dijkstra/index.html","bac2a2f65ee51c4b1a839bf30ed30eba"],["/articles/dinic/index.html","87177aebe622c9ae16dd7aa6df7e771c"],["/articles/duliu/index.html","cc0c566e496a9165d61d62c058d0bf98"],["/articles/dynamic-planning/index.html","82eeb1703cc86cf5a9cdddeefad027c8"],["/articles/elementaryos/index.html","3eb8a590ecd48d1f204cdfa24ccd1a78"],["/articles/er-fen-tu/index.html","67de823d8904e2b3a641e32e7deeb2c2"],["/articles/fhq-treap/index.html","7586132d5a01aec0347b426da2c7f234"],["/articles/group-theory/index.html","90d5bd050bce09d1b3204f01ecbb13aa"],["/articles/lgy-from/index.html","bdc884e21db6e723a67f5b1efdd583d5"],["/articles/linear-basis/index.html","bca9fd8873b4113a5278fbf58dda89ef"],["/articles/lyoi-Poetry/index.html","8a9a03adc34c2ea0953a984784f5d899"],["/articles/lyyz-test-2018-5-19/index.html","8cc14bbebfcb512806a589961ef09997"],["/articles/markdown/index.html","525b9a8a555aa5ee1c6a236e93caeaeb"],["/articles/moban/index.html","00c55f2e8104ad2b33193ed24061c76b"],["/articles/poem1/index.html","302433ae2464ad9de093aeacef86244d"],["/articles/prims/index.html","a9002a2c928892972d9ebd45ad1d5169"],["/articles/python1/index.html","ca7be4f996b0868732304d4770cebc7c"],["/articles/question-01/index.html","d999e869c2f6baad832315938e5a9d3b"],["/articles/recursion-to-no-recursion/index.html","eee7a17aafe5fe0da61fffa4492f9b34"],["/articles/scc1/index.html","c9382df85e203eb5a3202bb2abc202a6"],["/articles/somethinks1/index.html","d22fbadc923401020c67e9cb7be15d1a"],["/articles/terminal/index.html","59406acd85a647410a5a3523f16d7dc7"],["/articles/terminal2/index.html","1d3134bf1c3d1d852719855957a30cff"],["/articles/test-mode/index.html","59e9ff4e02fad4abd4372d21b00a790d"],["/articles/test-polyline/index.html","92797d4a8f2b515eec28827df6ce7669"],["/articles/treap/index.html","616b28c23d90e04d6da178205963add9"],["/articles/tubaomb/index.html","d14031d3318fc003511bf0ff14096295"],["/articles/use-hexo/index.html","051cf747b7e43307f3eb8cfae72b1c26"],["/articles/use-hexo2/index.html","a80a7ac995568b133ae69f5112323676"],["/articles/zkw-tree-algorithm/index.html","80ab7fc4b1f6fd06b77bee4ad2ec1c2d"],["/articles/zzWA/index.html","69e3c8e829c0b7db0e62f9c5acd84534"],["/articles/「LYOI2016-Summer」一次函数/index.html","54ff1410fd39ccccdb688806466a752a"],["/articles/主席树详解/index.html","65db843e90a8f94a76c719ba0d8d4aba"],["/articles/分块-P1471/index.html","7697fad547b1153d2ce275441167ad49"],["/articles/可持久化并查集-rope/index.html","07d142a94d86c6e11715458c45aa29a4"],["/articles/复数表示/index.html","1b35e1dec50fb179e20cf957a1ef54d3"],["/articles/洲阁筛/index.html","581118200d654d9f42e6c4ba0c244cbc"],["/articles/生成函数/index.html","9112683d2f285122a5162418a9b4cbfd"],["/articles/网络流-二分图最大匹配/index.html","08cfe45c17b6023bffe548568717f3a6"],["/articles/自然数的和/index.html","554e82cdc421be83c6bf55553f1b737a"],["/categories/Blog/index.html","752cb49daa309a4d9b9a29e84995c3e7"],["/categories/OI/index.html","1b092af31cf9008c7a1b6d21c82455c6"],["/categories/Settings/index.html","6fed2d8fbfd6b5cb1044af59198acfb6"],["/categories/Shq出的大水题/index.html","2fc905f8fa8102807291f1bdc1c357c9"],["/categories/system/index.html","ddbf694d13cf88b3f17258f411f37cc6"],["/categories/《RP导论》/index.html","e97fe876dbb8aab294c1fbf86f10fe8a"],["/categories/《Shq出的题目》/index.html","44af20c1e0b95c888a621ddc658a3a25"],["/categories/《Shq笔记》/index.html","e95c3501a21a6759a737c4dc3b7242ee"],["/categories/《Terminal教程系列》/index.html","02e6e68fbe30c2deec99f174cc45306f"],["/categories/《hexo的玄学用法系列》/index.html","847acfa17942eeb003b4023064bee962"],["/categories/《人生苦短》/index.html","e43bffa16e7f33024b9f106fb1d5cb43"],["/categories/《教程》/index.html","2fb7e1619067f5f42b4c74706e1230b1"],["/categories/《最强的Lgy》/index.html","31108e51d923829f8e841aa8941e9a54"],["/categories/《烟雨茫茫》/index.html","0cabade392a9aa8cbc04e8a0b8e43b1d"],["/categories/《玄学》/index.html","8699992111abde1420a61693528035cc"],["/categories/《算法模板》/index.html","660783a64f7e54546b5bb1c0ba4ce4d7"],["/categories/《算法详解》/index.html","f9a090d35542b11af5563c2a91d756ae"],["/categories/《算法详解》/page/2/index.html","a6337d9529ed46d8724e5f8125145223"],["/categories/《算法详解》/page/3/index.html","a97f193b1a7ae698de5dcb11155437aa"],["/categories/《题解》/index.html","51e8875bb2ad271f406cddaba962222e"],["/categories/「日常卡评测机」/index.html","5851ef60de1c004eb0c00b296ade8c21"],["/categories/题解/index.html","52e9077b225e747a2f5495a430abe8bb"],["/comments/index.html","368c0da0650cbcb600054f9740c42762"],["/css/main.css","0f5db860ce86a788d8d24ff0e3aaf892"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","da22318425be2a707e06cc2e55bdc5c1"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/alipay.jpg","d2612d810e3fa64a474d6567b7bf4e00"],["/images/apple-touch-icon-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/avatar.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/background.jpg","5df45afbe954ad680607dbc240ba16f1"],["/images/background1.jpg","9d911b487de726a55b918ae747d80353"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/favicon-32x32-next.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","8351e44f9cf3ed290d64f4c2bf7250e0"],["/images/m-bg.jpg","d25441a976fd1cbc43ec515ecb51eab9"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","fe4443f1408496ac14be8fb1b9064df9"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","6e14f7bb4e818f7a6e3a6c792a135868"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","45218c259c24e73d68dfa1e7076e691d"],["/index.html","b133796a4deebdd30e11b37afe09fccc"],["/js/Error.html","e8b96860327dbc5e5e97a0f12abdc63c"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/background-shq.js","1c7f20d82a2335989aaf714d1f8052ee"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clock.js","9a97dae812b20d0254cea0650ed1b454"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","6860bdb15fc7c181dbf1953d336a64b7"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/paryticle.js","5b0355d9af3ebd254c78b339dd5aedaf"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/shahua.js","5667ca257463389bff7dd9f47b6b9455"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","43bf0eae9bef395e3a047d6513f7fe47"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","5afcc672c62ff4666326cd3a5ef954e1"],["/lib/jquery_lazyload/README.html","59f717213206beb75845d6d33805f6b6"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f7b5b03ae61c52bd447d444785db17f3"],["/page/3/index.html","df449017b55f1b472203332b4001940c"],["/page/4/index.html","8fe878168fffbac1c5cd183a10c6234a"],["/page/5/index.html","c52965984b96489dc14d36dd78a36f27"],["/page/6/index.html","24f6bf125f40bcffe945809d91495d0e"],["/page/7/index.html","1318157637c6ad482c936206202dd683"],["/page/8/index.html","fa2c9d719b37a196af82b56a2fa1d79d"],["/page/9/index.html","b38ec9389d26dfb1c6fdcc4dab28f64f"],["/photos/index.html","7fe77a8872e6d50eb8a7ebb013939b71"],["/remittance/index.html","3df58e0afc37cac635cf95bc5d36b528"],["/sw-register.js","da67d95dd252e537e8e2b530a076e839"],["/tags/AC自动机/index.html","7102360345d2c86f2ddf40589874dde7"],["/tags/Algorithm/index.html","1beb3177a8648e75913c3d678dad3446"],["/tags/Algorithm/page/2/index.html","f9a7e4f545d615ed3b61d1e84ff5f803"],["/tags/Algorithm/page/3/index.html","d86e79f3a6d4f2cdcf68f5e89ff09bb7"],["/tags/Blog/index.html","007f866861a89986843cd298deae6305"],["/tags/C-11/index.html","ae3a2de80aac31b45e0e8d62ff7ff332"],["/tags/Chtholly/index.html","a032b6c17f9e64b7eadb289d883332a0"],["/tags/DFT/index.html","02cf17c464e4d51323abae5e73104330"],["/tags/DP/index.html","005c674efd21d41bc7b745e2ffa72f8f"],["/tags/EK/index.html","679242981bb9a255f09f0d10db99d9af"],["/tags/FFT/index.html","4db23b6f5eae67f4aed5731695cb8d0e"],["/tags/Ford/index.html","24419f1a10b1c342aa35aa39f1461420"],["/tags/IDFT/index.html","4a62263b86d3593e0579c0bf524896c2"],["/tags/JSOI/index.html","c22f144c7293d8df51144da84602fa76"],["/tags/KMP/index.html","23a8a98960e96e61686d18a4d3bbb102"],["/tags/KMP自动机/index.html","73664190e7ad0f8370236a032b245d68"],["/tags/LYOI/index.html","eaaaaf508d162090e08b44c26e934a6e"],["/tags/Lemon/index.html","30578b3f88bc2d0ed037ad42038f10f9"],["/tags/Lgy/index.html","29578dcac58fc1aaed0847606c745a63"],["/tags/Lucas/index.html","353ce1f9a2bee0960f79f259156555a5"],["/tags/Luogu/index.html","9d8d361a93b8686215e2b1cd0e861e0d"],["/tags/Manacher/index.html","a4915f9f653960973bc73b0824f4f2d9"],["/tags/NOI/index.html","829dd4be94f650e8d73aedd4c86c6137"],["/tags/NOIP/index.html","dc86f7fd9e4e13c36059e5fd243be325"],["/tags/NOIP2018/index.html","af9e86fa71e65ef0f0893f5b96f943d3"],["/tags/NOI导刊/index.html","1e19102455dcf651346105d46c75e594"],["/tags/NTT/index.html","737b7f1d9c6e0003b5c110eb9522f952"],["/tags/OI/index.html","6c1349ec181c9b61688a2a6ebcd831da"],["/tags/Problem/index.html","97ebd329fdc508e2516ba90490781818"],["/tags/Problems/index.html","24ead2a825e2eda3fd2e7d7524bf39eb"],["/tags/RP/index.html","9ad5cc2c12ec994d993a86d93ae8bf83"],["/tags/STL/index.html","3de5144397e91dc13ca0aa3a1e4fadc7"],["/tags/Splay/index.html","b6a7069c03234f7039e25ca370eed4d5"],["/tags/Tarjian/index.html","5bfbbb345093dcd891c90c72af6ebe33"],["/tags/Treap/index.html","f57ba8b1dd995bf8a87495ddf994eb8d"],["/tags/Trie/index.html","71d1d62ffd129eafb3f27935654fe67e"],["/tags/USACO/index.html","cf35e6d586d1ca9b5fcae05e3e2811a7"],["/tags/ZJOI/index.html","486da37fa20a08d39a5a1e43fd535be7"],["/tags/atom/index.html","04a456873fbeab1e9a23d3d811ac98eb"],["/tags/blog/index.html","ace7a32492091e8aca0ffa087a5cb52f"],["/tags/bzoj/index.html","1b5865b9f73734f7e89264857eb8ddaa"],["/tags/css/index.html","c126bfb03bc2416d029a11bbbea62314"],["/tags/dijkstra/index.html","ede67723d0c98b609befa9c1c9ff0257"],["/tags/dinic/index.html","6518682d28f11a75c79dc07b17ee7253"],["/tags/fhq-treap/index.html","204efcff89e08ce8873a81e98710b574"],["/tags/git/index.html","26a856cd9dbcf5d46233e1b592e94cd3"],["/tags/hash/index.html","47cd93e6c5c3c54a3ceddd115b6ec274"],["/tags/hexo/index.html","2b7cdf7f1bbeb7004698e71f658123fd"],["/tags/html/index.html","8c8975c2cc370c555ff0668596cac411"],["/tags/index.html","c987bfa4f9e4d05bb343f9d20cf6a700"],["/tags/lambda/index.html","8b6b9b19f9398e5faedd2b5c1cabb669"],["/tags/luogu/index.html","55b996092f8f4c513572966e82b2e0ff"],["/tags/lyoi/index.html","b3d58267b5c27e33724bd9a522f13769"],["/tags/markdown/index.html","04157cf503af29456fb0c2205f949307"],["/tags/plugins/index.html","c6d29ff2063f1d48dd4d95a44f86bff2"],["/tags/problem/index.html","232ae58d22b33a9a6fcee237f6f4f958"],["/tags/python/index.html","d56a175cfda049edca25a7ffda08a0d1"],["/tags/qbxt/index.html","69a7ea640accce4d70eff18af3bd2eea"],["/tags/rope/index.html","5a22cb51f1786ee4fd20265c1cd7867e"],["/tags/spfa/index.html","cd2ac71f79aeb854f52e22bb21178490"],["/tags/system/index.html","821e129f24e10daca153ea3d2b841cd8"],["/tags/terminal/index.html","60bd147267f792eae0ebf92066cd2763"],["/tags/zjoi/index.html","bc4287e1b429b03da88ee52661597aba"],["/tags/zkw线段树/index.html","791515d36e24d7280693c3353871a8cd"],["/tags/临沂一中/index.html","2e45e6e7194fc491d375094053c3ef7b"],["/tags/主席树/index.html","d890f7fac2d1b9a17eada3b9c2b47ead"],["/tags/乱搞/index.html","321d85b7f898fa6c5c03b3d8b9beb578"],["/tags/二分/index.html","209279f55a2a33bd58841857bcf77986"],["/tags/二分图/index.html","115986a9c63013d5e05a5745c88b2a7e"],["/tags/二分图匹配/index.html","d8ef9bb2c5cd383c21adf5d62f159d68"],["/tags/二分图最大匹配/index.html","22ebbc4cd24e43430793e5d7d116bb27"],["/tags/二叉搜索树/index.html","bcd51d8099a2345c75b81e0d18b7eb75"],["/tags/二叉树/index.html","690b047495795f8a6cb06df226241d6c"],["/tags/代码规范/index.html","206314f860599402f5bf5cc95dbc5c5a"],["/tags/优化/index.html","a24db835209910018a23a37c105f4771"],["/tags/几何/index.html","8c0c71f7178fbcc92c39ff17320369bc"],["/tags/凸包/index.html","2fd901e6cc8aed134d635cdf1d898b72"],["/tags/函数/index.html","c8321c1c1566277b7c0319e54c9fa110"],["/tags/分块/index.html","c0770c5bdc8e6c447bb8ba91f6d13504"],["/tags/初等数论/index.html","d75c5824f7a98ae68e7e28426adb8fe6"],["/tags/前缀和/index.html","bdeb75cb2aa12d5c564295538322984d"],["/tags/动态规划/index.html","3a7de15578501f1ff0fcd60cc6269190"],["/tags/匈牙利算法/index.html","1418f87d7a42fc6419c3b8ae28006eff"],["/tags/区间/index.html","7992f1be19c62fca22fc9cbb3b8e695c"],["/tags/区间操作/index.html","c65b64b3511c31c9e3cae8565967bcb1"],["/tags/区间第k小/index.html","a0fb69465e44067dd1c53cd76c5ca09f"],["/tags/单源最短路径/index.html","ee5b58b4c45eb87e1de2fac622d904d5"],["/tags/博弈论/index.html","05e8113b22f24b4ebbb4c1e0d1a8bb91"],["/tags/卡常/index.html","46e10110e8eb651cf71846fcadef366c"],["/tags/卢卡斯定理/index.html","5f2a84dae641ff63a5644ebb3b6464f9"],["/tags/卷积/index.html","c59eb029bee9a0ca96ab8943a7eafcc5"],["/tags/叉积/index.html","686dfe7532829bb3af856881e734d057"],["/tags/可持久化/index.html","e3b4809e27cb57436e3648e1eb0b5337"],["/tags/向量/index.html","ec0020bb4394b93c887c16b17a3bda7c"],["/tags/图/index.html","318b90bfc77fba0c04bfae8b0602eba3"],["/tags/图论/index.html","7b807018176d069795bae4acd684138c"],["/tags/块状链表/index.html","6c5c889aa30fb8c034a7c6ec0d8dd9c3"],["/tags/增广路/index.html","54ac14a20628740f2083f09c7a089069"],["/tags/复平面/index.html","604bd1572fd0c38dd5f0625ef515163e"],["/tags/复数/index.html","fbffaa09b3cfc28beb3aaa4ff0f0cf3a"],["/tags/字符串/index.html","e0773910ddbc8f047c5b4833b8320ff0"],["/tags/学习笔记/index.html","32b51ef46fe0bc500d0fc85389b545fe"],["/tags/常数优化/index.html","6d92e91230e4eecb21f0f701b2ba79ae"],["/tags/平衡树/index.html","51deb41449e6a0b413d46de04e70ba44"],["/tags/并查集/index.html","35d63d0b4af9fb21a5dfc754163eb805"],["/tags/强联通/index.html","8ff0440bcc1f94a29eb47bad51d15dee"],["/tags/快速傅里叶变换/index.html","03fcfb35df86affe3b3c27fc1d3bf24d"],["/tags/总结/index.html","347b51e49cfc4c124446b3d4849495a9"],["/tags/感悟/index.html","e8f77ae2f6b9484ee31efc8d2a00705e"],["/tags/技巧/index.html","fa777910112f4667faa4a61ad4b20c20"],["/tags/抽象代数/index.html","cfe5ad4bb3c55d9490e1dc9e70ab9f7b"],["/tags/教程/index.html","f4fefa3252c7b21f897f2634c890b7db"],["/tags/数堆/index.html","98a90fcedb4e505ec6d4791116d74195"],["/tags/数学/index.html","6cc4be8a470a6d099059c9c589cac8fd"],["/tags/数学/page/2/index.html","eb104a732276184e8924ce6ebd4c260d"],["/tags/数据结构/index.html","4e22ff9f3cbd99ee4992fe072812a2a9"],["/tags/数据结构/page/2/index.html","a7a47f289f9d17c3ed0ea84e3f29c725"],["/tags/数论/index.html","a4bf16e8f33b986742542bbfbeab4409"],["/tags/数论/page/2/index.html","52362d8c759071dcf505f3530201db15"],["/tags/文学/index.html","efabcb5dfe556f5dfa889d0cfc2a7364"],["/tags/方差/index.html","1c1a8cf2a698728417a0b28c14d62cb2"],["/tags/智熄/index.html","eb1ab057a2c4070b2a7702c8f28d3f99"],["/tags/暴力/index.html","cb4e1fc2dfd41563fe083f97b58d2d93"],["/tags/替罪羊树/index.html","b9312c0ab8d6d3976758061550a53f46"],["/tags/最优化/index.html","ec9ee54b0a95637e25902d524e4a6cc7"],["/tags/最大流/index.html","b41adbe8b0e8be349ae9282a795d6834"],["/tags/最小生成树/index.html","00468f26a14659618022710064972dbc"],["/tags/最短路/index.html","1d889fa51823ac425bc3f4bd689fbcfa"],["/tags/最长回文子串/index.html","d31ea6171ffec3fe9b7d1bbdcb6eda6f"],["/tags/极角/index.html","0b4a2949a265deab0f64fa777b793823"],["/tags/染色/index.html","04e605efdc29b8b0ffcbe68358f1f9b2"],["/tags/栈/index.html","44297b1acd801c958828a10bf558c9ab"],["/tags/树/index.html","8615bc74e4af7ae6847b7cb03c73a256"],["/tags/树剖/index.html","51029346a74b39807abace89bf0800dc"],["/tags/树套树/index.html","9d919f6dd2f3a61be1b0a9ec8d09ec03"],["/tags/树状数组/index.html","4d6916d626a0b953ed304deb4754fbb7"],["/tags/树链剖分/index.html","0393cfafc509b8a2c254c85d6f4c4326"],["/tags/模拟赛/index.html","396214f38c4b77d45f459b09af83ffe9"],["/tags/模拟题/index.html","3d0cc482bf5f60fe2280a98be6e37d0e"],["/tags/模板/index.html","8a49e5c19defac2c8bb95f00326a2a5c"],["/tags/模版/index.html","2e48483f0d8c2d2eb094fb2b0250500e"],["/tags/模版题/index.html","e4c4d6df08d37ad98020f5358f123155"],["/tags/欧拉筛/index.html","8e0bf661d29bac6cc8b0398007d56d2d"],["/tags/毒瘤/index.html","6b5a44a250f8ffef6c92f7de5637fbbe"],["/tags/测试题/index.html","a2d4582ffcdf5d2074bdbebb891134b1"],["/tags/济南/index.html","332e7286eccfd36c029f69c6b01811db"],["/tags/清北/index.html","bb8dce1c4f38ff555224c9f14ca44e27"],["/tags/游记/index.html","dfe23b28290551bc7af83e60382ea90f"],["/tags/爆零/index.html","ad6f59e17cdfcd23ac9830d9ee9969ac"],["/tags/玄学/index.html","7126ee009cfdc2418e49154d27009d9b"],["/tags/珂朵莉/index.html","587390c60090291d327a8bea094f4512"],["/tags/生成函数/index.html","163ddfb50be62dd1106c5b32ab75a443"],["/tags/瞎搞/index.html","e7d0635734cede9ee75282602f54cf73"],["/tags/矩阵/index.html","800a3ea62031f34917f0db544d3e4abf"],["/tags/矩阵翻转/index.html","1b40846f4cb3dbd6181cc72bd0d0ebe6"],["/tags/算法/index.html","e11062ae7232454449669a746ee5d86c"],["/tags/算法竞赛/index.html","0c626141800aff8b461871925a872cf1"],["/tags/素数/index.html","094ff57fa50aabf1951142173d1af76c"],["/tags/线性基/index.html","07542bf7160a1be9384086068d3b5589"],["/tags/线性筛/index.html","40a2f6ec511f0f93ce7bb24223eef024"],["/tags/线段树/index.html","a452e158640fc937a1a63816337d421a"],["/tags/网络流/index.html","9e829deed1978cb010bb7cc4975c863c"],["/tags/群论/index.html","f96e45f0e460a7066b8a664e21cdc6a4"],["/tags/自动机/index.html","7a5df776214336f8e444e9ec89bf525d"],["/tags/莫比乌斯/index.html","0021ac4217a39fb0c543bd9ec1c9b8e9"],["/tags/莫比乌斯反演/index.html","d92caf788fa9d7b7f0686c750b64c5e3"],["/tags/虚数/index.html","bb5d2f85519ab69fa485763c50d40bd7"],["/tags/计算几何/index.html","9ba523232ebb9e155e0a7bc43ddc1320"],["/tags/证明/index.html","de4af3b92e0073f1fd6db65ac72bd6d2"],["/tags/评测机/index.html","89b455abfa28be48ff249fb262ed1bc4"],["/tags/诗/index.html","87ecbc7d26357e09cb50ac8a76604401"],["/tags/诗歌/index.html","dc9eb501f1f9b481f105ea41498bfae2"],["/tags/费用流/index.html","427786835baad0cf05c532fd50b3c12d"],["/tags/路径压缩/index.html","1a98d925680c69b61bf9d8b0f4ccefbf"],["/tags/逆元/index.html","80ce67f5c8ad689af5731b2078807c29"],["/tags/递归/index.html","3c4033473c02abcd469b1e6f8b11e03f"],["/tags/递推/index.html","e73438c6c888d60032da2e156b596099"],["/tags/邻接表/index.html","6814862896b4d485ec603f38a9bc8b54"],["/tags/随笔/index.html","693bcbe4d7b3c3728f24b362d7471f10"],["/tags/集合/index.html","437e5746ced5473a3ec81437a041c567"],["/tags/集训/index.html","fcac606563309a866bd99d8245503c5d"],["/tags/非旋Treap/index.html","93d891c292f05e295ebfa0f99382cad2"],["/tags/非递归/index.html","15ded24bf04e6f177aacbc9099ba98a6"],["/tags/颓废/index.html","74efb785b75e6cc866d44865eca4ed1a"],["/tags/题目/index.html","69ee46a7c7c40716906b8226647c44d4"],["/tags/题解/index.html","5055aca3a84eac925e65d15959d8beac"],["/tags/题解/page/2/index.html","273396130a2e48bd04c582f4bc1d2243"],["/tags/高性能/index.html","a636b065a44654ff9c03ef4461a4aa43"],["/tags/高精度/index.html","d5a3bdc0a3139462fea9c684f86e5b49"]];
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
