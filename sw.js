/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","9520f993e585bbf3e6a7348fe5bfa171"],["/about/index.html","b2bc4ad10a8043e5b8bd77a32972280d"],["/archives/2017/12/index.html","faa7936712338aa8135785a0cb0bd8b7"],["/archives/2017/index.html","4302ad80bb13394025a1fa76373ff74b"],["/archives/2018/01/index.html","82628745b12408a632220fd92cc62a1d"],["/archives/2018/02/index.html","9ea1e957867aa0661d83595bba494cbc"],["/archives/2018/02/page/2/index.html","f494647f08ff3ab39d97376538a959bc"],["/archives/2018/03/index.html","3fd28222937fddbeec47a68d5c57462f"],["/archives/2018/03/page/2/index.html","cdc131c28fec0063e2b85952db632ec7"],["/archives/2018/04/index.html","fa8387405bf99da6402ce02c381382ff"],["/archives/2018/04/page/2/index.html","1ffa8105c4f4cc7426f9dd48068e8507"],["/archives/2018/05/index.html","840f366f72ae60a3c216b20ab38cf29d"],["/archives/2018/06/index.html","ae856f4b6b2ab299eb9eca4c2d5acb54"],["/archives/2018/06/page/2/index.html","9d13d872eb7448e826a8aa8b13c62192"],["/archives/2018/07/index.html","1b67f18cf44a74ee213880fc3c47ba91"],["/archives/2018/07/page/2/index.html","ad182362452515dbf07481ad4baacc96"],["/archives/2018/08/index.html","6bbe03a9b52d7d9ea55f2e4a35ec154d"],["/archives/2018/index.html","deecd629c9632c2309ba03940d88d795"],["/archives/2018/page/2/index.html","dc7039d0c4ca448e11d981f6d0a57afe"],["/archives/2018/page/3/index.html","a9c10a011d150d555b194e510e95e8d1"],["/archives/2018/page/4/index.html","e87e0d0797be4559051ea602fbe36711"],["/archives/2018/page/5/index.html","80b9e498bfb9054d691b1b27de98b67b"],["/archives/2018/page/6/index.html","855ae5a1b4e881c94336c66345f19222"],["/archives/2018/page/7/index.html","bb5363f2be0c34bf6d264503c60eb2e8"],["/archives/2018/page/8/index.html","112768008c8686e1d5e962c84558940f"],["/archives/index.html","df9957671a544d208685e334a34d2615"],["/archives/page/2/index.html","6ffa3626feabb326276df68bd8ead430"],["/archives/page/3/index.html","4b2c8b7e2934f7b8f7af8324cfc0996c"],["/archives/page/4/index.html","2ed8bb15302fed3682de3e9d073f2dbf"],["/archives/page/5/index.html","cd183a954658a097e8d5d5b9b128a400"],["/archives/page/6/index.html","93007397206a62c4870a662150de0948"],["/archives/page/7/index.html","91e2020d7faa8188f65d179175465205"],["/archives/page/8/index.html","34be20301e6014526f614e38ae28e0be"],["/archives/page/9/index.html","c04460d8d0f5eeb8e158b5bebd058dff"],["/articles/18-4-27-things/index.html","1295fbe5a82dffa607c4359650e8884f"],["/articles/18-4-29-test/index.html","b9061cb85cc00ed582b271e9e939ea39"],["/articles/BigInt/index.html","3e237f675da3f2850bfb1af5bc60070b"],["/articles/Chtholly-Tree-ODT/index.html","5049842cdab97ac9fdb68ed1a205a79d"],["/articles/Code-Style-for-OI/index.html","68b097a4ed69255f7b57ad44779714c8"],["/articles/Computational-geometry1/index.html","e4df7cefcd4586103de2aa6afca154d8"],["/articles/Computational-geometry2/index.html","6824e7fdf6b35e1a203ed24cfd021196"],["/articles/Computed-geometry/index.html","12164b2251cf91c787303a21cb3bfd35"],["/articles/Dirichle-product/index.html","99563fba2ede98e65755c8295c84e6cf"],["/articles/FFT-study/index.html","78a1199a74bd401558f5c1f49cbf8990"],["/articles/HeatWave/index.html","5c448acc3bb2027edc139f3fe98b76b6"],["/articles/JSOI2009-游戏/index.html","3b251513229753633b92dc4616256b37"],["/articles/KMP-AC-automaton/index.html","0458a7143060cb1469282bc8fe6cfd65"],["/articles/KMP-AC-automaton2/index.html","e295b9668366e13dd9d340deeff3792a"],["/articles/KMP-AC-automaton3/index.html","204535c897f8417805a85d1844bf33d0"],["/articles/Linear-sieve/index.html","b3785cab7b8c1fb0df90551e3dbdf736"],["/articles/Lucas/index.html","92fa490e098bd82153db41895f5fcbde"],["/articles/Luogu-P4276/index.html","c4b3e31bc34cfb3eaafd9f51538b92b7"],["/articles/Manacher/index.html","7260aae2b3921f1bc520235e53af964d"],["/articles/Minimum-spanning-tree/index.html","8e42321edd1063ae503b6a07bc68d807"],["/articles/Mobius1/index.html","ec8c417961398c3c3aa3d893dc967237"],["/articles/NOI2010-Plant/index.html","db8a590b4daa3f423729232f8486b615"],["/articles/Network-flow-Algorithms/index.html","2817f03cb73c4b29cd6da800c0a53c7d"],["/articles/Network-flow-start/index.html","da6d8312eb0bcdc178b2e89912e558ef"],["/articles/OI常数优化-进阶/index.html","e60b5fbc346b3d6d7aea1029b12876ce"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","ea8d33a685bc6e333f60e33efd9190b6"],["/articles/P1984-SDOI2008-Water/index.html","b0f31c2b1cd529fa096b45db7e2b4b68"],["/articles/P2018/index.html","42933bed6a438d44af3da1b11fb866bf"],["/articles/P3933Chtholly/index.html","bbdb6016eb4789f955975a310b52cf62"],["/articles/Partitioned-Algorithm/index.html","13594c3852377cd022b937c8d8b760ac"],["/articles/RP-introduction/index.html","8a3ba5283a9fef9e65dee7c7dcce20e8"],["/articles/Sandaram/index.html","18ab065ed2b3ece869a52327e2b80bbc"],["/articles/SegmentTree/index.html","ede638a03d239d58b6e286ad9546cf84"],["/articles/Segt-in-Treap/index.html","b91a1af2f594869c8cca51ca85990cb6"],["/articles/ShqProblem1/index.html","02bde47feabfc86748b8342ebe89b3eb"],["/articles/TreeArray/index.html","e0855fa0e839df5f240208363c8e97d6"],["/articles/TreeArray2/index.html","3edeeade00df09d6e266de901da5ade2"],["/articles/Union-find-sets/index.html","dba6007bf58261984b7292385a2e185d"],["/articles/ZJOI2006-书架/index.html","f728271d8ebf4f4d880c93b62de44f54"],["/articles/ZJOI2007-矩阵游戏/index.html","536d60d7c9988e3cb60abf2f9450d0b1"],["/articles/a-bproblem/index.html","4c76f8bd46cdf1ae6294fafbb210b735"],["/articles/aboutBlog/index.html","41564879ad672af6298ea2e7a9fc011a"],["/articles/aboutgit/index.html","f84150f0593ef49c8f203fd8897509ef"],["/articles/autoAC-lemon/index.html","fe41d2373077e0064d17a859c4a674e5"],["/articles/bzoj-3337/index.html","bb225831a714379226c2a3398d868059"],["/articles/cppteach/index.html","cb84022450f738c7161854b9af65cd53"],["/articles/css-QWQ/index.html","888941def9a169931a01deacb6230fd3"],["/articles/dijkstra-spfa/index.html","5716824227f5693b4c047871ea762bae"],["/articles/dijkstra/index.html","c260f10bf8f5ee62bd9ab89a275a7b68"],["/articles/dinic/index.html","cc0217d4b17d9123bfd5c212bac07ba2"],["/articles/duliu/index.html","89b603fae867d9242cf7fc6109246c22"],["/articles/dynamic-planning/index.html","91f196f5ec19bbd8b46973e162d0bb4c"],["/articles/elementaryos/index.html","3f672d1753a3b17b6ba9935fb48b53fc"],["/articles/er-fen-tu/index.html","79cbda2996f1b2b29f220ddc91c378ad"],["/articles/fhq-treap/index.html","d7a1722c9d4b8bbb747f66936b5f16e0"],["/articles/group-theory/index.html","9f3455346fa634b4139ddf4555997629"],["/articles/lgy-from/index.html","113e6919dabcd7c329940933af865581"],["/articles/linear-basis/index.html","3b6ffb7abb9700a293cf82e7fda28182"],["/articles/lyoi-Poetry/index.html","e8f10cf311b6c4b4b06d573af5e56442"],["/articles/lyyz-test-2018-5-19/index.html","9d6e2c8675ac29e1ab484a6ecf4552db"],["/articles/markdown/index.html","c1d72de8595fa0a9aa89e9571d244ffc"],["/articles/moban/index.html","2384728edbf3e56f14621a4f42a26ed7"],["/articles/poem1/index.html","385643d58a0f71c1d17f335599805eb3"],["/articles/prims/index.html","2c5c3f841c2a5b12268348c270ea42cb"],["/articles/python1/index.html","34cf0b3e1293e78f388dcec03c4bb65e"],["/articles/question-01/index.html","0e79a354e7fc682a2967ec87954a9f0c"],["/articles/recursion-to-no-recursion/index.html","95ff242bcf8a6652da9698767f13a5d8"],["/articles/scc1/index.html","3b9ebcb30881a3d2c98f0f6b332fe855"],["/articles/somethinks1/index.html","731c1b98f69cee2d0bf947ae392c7070"],["/articles/terminal/index.html","27ec59bb4c2671f3c7ba85c0eef509df"],["/articles/terminal2/index.html","b44ddd94db08a73fc0fef1826a65e294"],["/articles/test-mode/index.html","8af5fd0667863605be0afc62af13f100"],["/articles/test-polyline/index.html","b3b1a3dbeb4505cae094a5c71e482b82"],["/articles/treap/index.html","6a27a7861461504be716d8fee9114936"],["/articles/tubaomb/index.html","ec534d2e670dce7155b678f70204a8c3"],["/articles/use-hexo/index.html","f8827b1479f6d7945030573ec3176145"],["/articles/use-hexo2/index.html","1c0fcea29f74b85e573be402d518ffe9"],["/articles/zkw-tree-algorithm/index.html","b91b8a67a1e6af3717b84779e3fa52d9"],["/articles/zzWA/index.html","95ea00ba1676b9fa02e05b913027c3e2"],["/articles/「LYOI2016-Summer」一次函数/index.html","8d834e0a793f166d4f07fc68b8487677"],["/articles/主席树详解/index.html","bdf08c2df97ea94c3d9dd8986aaaa49b"],["/articles/分块-P1471/index.html","e6eb13de91d67f1b0fdc847f519dbd83"],["/articles/可持久化并查集-rope/index.html","af6e6278de43d69b1dad50c0a01a0c63"],["/articles/复数表示/index.html","729cfc9a29f4abec4649ee5d7701421b"],["/articles/洲阁筛/index.html","91e4dae20f4ca73e5bd8ea6432437721"],["/articles/生成函数/index.html","3d38fa10f99b8b06e0111d48cefb0afa"],["/articles/网络流-二分图最大匹配/index.html","1987a45fd3aee7f1b3fc22caf756437d"],["/articles/自然数的和/index.html","4b9b8cfb3d08259b0f08681d6f669bce"],["/categories/OI/index.html","dd4aeca37a2ad4a7d11458dcb11cb5a6"],["/categories/OI/page/2/index.html","0ee6cdefb63c9d231ec5ca1e1f0b69e4"],["/categories/OI/page/3/index.html","a6f0558222293ad09d1b7e0549068657"],["/categories/OI/page/4/index.html","0d7db0b2d362955154f0cdec483c4c7d"],["/categories/OI/page/5/index.html","bac64ffc3482d2057f897b019749e93e"],["/categories/OI/page/6/index.html","17eaf6acbccd963a2b0ef6c98dc083a7"],["/categories/OI/page/7/index.html","a1451f2d735c8cbc1cce50b8f4f2e691"],["/categories/OI/page/8/index.html","73136c1803014038319d7a7e220a8753"],["/categories/hexo/index.html","5f438810757146eb98225d67597752ee"],["/categories/index.html","e1d2ae3a38de2d034dee90cbefb3c553"],["/categories/随笔/index.html","dec5926ceaa366bb33289b7e56cc87fd"],["/comments/index.html","a711ba67c26cad47d12c711bd0ac4b5b"],["/css/main.css","f377a71374f6cc153f97911cbedb6ad7"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","e63c606c9d09764530dd7a4733e4cbb6"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","03daa9e8af280f9e0333c2d37c9e86db"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","63a303a2a57150826cc2d0bfd9fb75bf"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/2/index.html","bdfea957397ebc6612613962fb967a58"],["/page/3/index.html","c93b976438ed806cd9c6077a70f47503"],["/page/4/index.html","23aad4615ba0a8184926d7a33c62dd2c"],["/page/5/index.html","e92ea185b48d20a7a81421d0318036c9"],["/page/6/index.html","5bda1f26c29d81c009f3befbf653bb8b"],["/page/7/index.html","a0e88687698f3f85c2a02ed61c379093"],["/page/8/index.html","0eb1d74f07f19db24244c00551e9b16e"],["/page/9/index.html","f7f250d55ac26c4d9d34e59987e5756f"],["/photos/index.html","65ad6f948122d5f342f0b5b3143faf0f"],["/remittance/index.html","cf8c95ff86d3ae3e99e48c5bc579f2fe"],["/sw-register.js","677297c62eabc3db9daa8e4e8412a13b"],["/tags/AC自动机/index.html","6f129029552d2d287ad8bf85ec0b7bbd"],["/tags/Algorithm/index.html","0916a45c82af75093d0f17405fde3450"],["/tags/Algorithm/page/2/index.html","81a781ed5df06822cc4f04bb62aa5409"],["/tags/Algorithm/page/3/index.html","723c20fa91794015483bacf571b79d5f"],["/tags/Blog/index.html","da9325929a16a598c307bb9ea0ab09c9"],["/tags/C-11/index.html","160fa669adb7ccf397ecedd7e53b70fb"],["/tags/Chtholly/index.html","77021f5897ca86c54855fe34a96796ef"],["/tags/DFT/index.html","6b4340be3ce05260f4cfe944339fba6b"],["/tags/DP/index.html","643331a9f5181f04aaa3f96c298df729"],["/tags/Dinic/index.html","97c1409ca7fb293d03b6f0f61a72d923"],["/tags/EK/index.html","d1ae86129522bdb2d12937854f556c80"],["/tags/EK算法/index.html","9306db91374486941228ea315b791605"],["/tags/FFT/index.html","f78be94786da760a56eb98025402c6e7"],["/tags/FF方法/index.html","3114fbba16ec3d666fa0e5526e67ab94"],["/tags/Ford/index.html","f14ab903a76a53b833d59a3a8e91ce36"],["/tags/HLPP/index.html","2e9bfe6270e3c1ffa353cd675328fe7b"],["/tags/IDFT/index.html","51d23a2532571133c053515e524bb118"],["/tags/ISAP/index.html","b1ae1512c34840f35609d2c2d6840ad5"],["/tags/JSOI/index.html","973ddff9cb0dad7b1e29a6b78fc6dfdb"],["/tags/KMP/index.html","b6bbc74863ec41425e6c002c182d247c"],["/tags/KMP自动机/index.html","60d735f0278aa7e0fdcda41010b14cff"],["/tags/LYOI/index.html","4f3be0e87108a1d856a4833f88936d5a"],["/tags/Lemon/index.html","d71326e8bd4fdc879346202ff599536b"],["/tags/Lgy/index.html","d40d0447502eef2c569905ede350aa8d"],["/tags/Lucas/index.html","b352a304f86426fd3c012cf8e8911c03"],["/tags/Luogu/index.html","68ff94ced9c24fd8eafed735b146f1c7"],["/tags/Manacher/index.html","41aa32573ff702a67beae895a39491d3"],["/tags/NOI/index.html","29669bff23e804e0cd3abe3dec1d3cb1"],["/tags/NOIP/index.html","28458dae4cba6854e450ede1a6f9ab01"],["/tags/NOI导刊/index.html","1b93562469e5d1b7d3a3fe703d7c6092"],["/tags/NTT/index.html","9b4b3e78da625f0d04d3361faeecf57b"],["/tags/OI/index.html","4ea21bb900d4b2220cd0abd7558029b4"],["/tags/Problem/index.html","3f33c3aaff74b586352bf45a541d88b3"],["/tags/Problems/index.html","8625ab573ea2110c47be90e90867783e"],["/tags/RP/index.html","e9a3b32202de1847d789f0ca9265e196"],["/tags/SAP/index.html","7e2ac9aa0fca5a138c9bae6291f2fad8"],["/tags/STL/index.html","332ca5327664061a525abbd718cee86a"],["/tags/Splay/index.html","105d1c252727443034b1afae536ea729"],["/tags/Tarjian/index.html","41146221cb1cda488e789f70a72624fb"],["/tags/Treap/index.html","7079876e99d8acaec27bfab3d1104770"],["/tags/Trie/index.html","f7ae773385b3695e8872d919725ec61b"],["/tags/USACO/index.html","011b8fda45ee3df675b0802cb56feb80"],["/tags/ZJOI/index.html","e426b6ead1cb5516997d1f7e69bb1734"],["/tags/blog/index.html","1f9c4d1df3f5e6c120d4afd5fab0e026"],["/tags/bzoj/index.html","1c844cd54bbcd86309e680aa386cdec0"],["/tags/css/index.html","be39bf46ea8c2a591e56660d64bc1339"],["/tags/dijkstra/index.html","a9ee9706bbcb1288ecf3482ef628834e"],["/tags/dinic/index.html","36f2fd1008f5f236ff79905bd03c1d90"],["/tags/fhq-treap/index.html","d331b2c2ecdefcb2511397a2c30f8433"],["/tags/gcd/index.html","8f32ce40b03d4f28867bd9387f36a611"],["/tags/git/index.html","0e30cc3a1388a29fec09335858e1795a"],["/tags/hash/index.html","636778dbef263600c38d349725a2fda9"],["/tags/hexo/index.html","1f85d667b44bc17a22cf750e3bcbbf4d"],["/tags/html/index.html","cfeaaa0c69e33218dd9a8c62cd870362"],["/tags/index.html","7db782c11a9192e4f796c1d41fd27b98"],["/tags/lambda/index.html","71803b263475c295482fec39a3d441a3"],["/tags/luogu/index.html","43b890f6d3b362962e83ad07be141665"],["/tags/lyoi/index.html","4c840e5112a0bbd354169def0ea6fda8"],["/tags/markdown/index.html","89123682c75eeba06f44ef4234d61a49"],["/tags/problem/index.html","63241ca05b4cec04578cf6b2a6fd39b4"],["/tags/python/index.html","da6ad16cf4d4f4b3146396d8b1df9971"],["/tags/qbxt/index.html","75ce0625a7bcc07fc656b0d42d333f27"],["/tags/rope/index.html","53bc3d6313378afd4581418c88fc73f8"],["/tags/spfa/index.html","4c235ddef92de77f30af7dfbf43c28e7"],["/tags/system/index.html","34bb9cb04713d7d72f348d421177265f"],["/tags/terminal/index.html","1344fb5c270db693a71353458e27a511"],["/tags/zjoi/index.html","96b05d6c7585967d2efb3f413d727435"],["/tags/zkw线段树/index.html","a014931a67155a7cdba46fe65f808546"],["/tags/临沂一中/index.html","054e86bf573dc88a3d1bc6c83c43b4e0"],["/tags/主席树/index.html","41a7b0c27907bf7380cdbd20358456ba"],["/tags/乱搞/index.html","c53bd191b6cc10fd1da8a215ab9a4c67"],["/tags/二分/index.html","1cce9ed1d0c2c6de9ef2bb11e1124295"],["/tags/二分图/index.html","3a3b1844b37588bd47858de4b45503b6"],["/tags/二分图匹配/index.html","2e83dc6ee0ab944c5062f78dab7fda59"],["/tags/二分图最大匹配/index.html","3092aebc6e5bfc4c0061cd0ee484ce0f"],["/tags/二叉搜索树/index.html","921b30539b9c6c063270acbb8c9181dc"],["/tags/二叉树/index.html","6f0dd9c336e80bd99d4e7618a28066a3"],["/tags/代码规范/index.html","19c28d92276f79ea166fdae72c857ef0"],["/tags/优化/index.html","3d6f6ce1d1708a585966c469a00aed74"],["/tags/几何/index.html","395d1b30c3d80018e10be65bb0fe5c1c"],["/tags/凸包/index.html","efcf3d78b028eebb70cf7642bde5ee17"],["/tags/函数/index.html","8815b53be4ae3ad458508989c6816be7"],["/tags/分块/index.html","917fa02edb788e19809116d20b268807"],["/tags/初等数论/index.html","ee9b4de5ac8f956af79c24ce58bb1483"],["/tags/前缀和/index.html","6a9bf4f520a8a205be8bf6c522c99ed0"],["/tags/动态规划/index.html","0f74ef70595d607dd6673f345f46503c"],["/tags/匈牙利算法/index.html","8f9ce7cd447592f7ebed54dae120f8cc"],["/tags/区间/index.html","d60495582c5453b5069725ea19ddf569"],["/tags/区间操作/index.html","d2b14eaedaad3f7c90eb11d04b04caba"],["/tags/区间第k小/index.html","7df0575259c114c1d4678141418200d4"],["/tags/半平面交/index.html","c39fcbf67f81bd1b4593ff29206d4f8c"],["/tags/单源最短路径/index.html","2c635d3c72458ecdb2c82ec3c7f32e5b"],["/tags/博弈论/index.html","42b2c3f9d03defd35e3831880a3f9b16"],["/tags/卡常/index.html","91c276c03a890478f85eb3f466311141"],["/tags/卢卡斯定理/index.html","b49846004b02e4c0d82517c3a61f5e9f"],["/tags/卷积/index.html","4d2be317165db06f9b81603745b49e4a"],["/tags/叉积/index.html","224d4bb9cbbac20bb2e81916b20dc969"],["/tags/可持久化/index.html","e4935dc005daa965933f74edc4cb074e"],["/tags/向量/index.html","9f922e3354c74d82c56fcfbd08b3f20b"],["/tags/图/index.html","04ec3c17d39d75b0a01fc6f86ed34c8e"],["/tags/图论/index.html","a4682769b39f0b08ebdec8b397180bdb"],["/tags/块状链表/index.html","49b22ac2ba32d4f98652b5a77adad9bc"],["/tags/增广路/index.html","67e54e7d2c9c06a09954ca291f4bfb01"],["/tags/复平面/index.html","4109c818f00f067d9faf0e22ccf600c8"],["/tags/复数/index.html","7cafbcf5af790b30e496571e44de1ad1"],["/tags/字符串/index.html","148fdf7dcce3821f6f3d05f4cc4dbb8d"],["/tags/学习笔记/index.html","1d02310bd3ef4f1bc12e7a04bce0e666"],["/tags/常数优化/index.html","2570d6dd8295d9b059d146850f193559"],["/tags/平衡树/index.html","3f00a64ac61f7ca5a6646b7ef56f120f"],["/tags/平面几何/index.html","66e07bd72bb7ba7ef385acd5874de51e"],["/tags/并查集/index.html","0d5e7307efdd101c857852e4c121f96a"],["/tags/强联通/index.html","572f21b74f50ec185b96d140ea7ead76"],["/tags/快速傅里叶变换/index.html","71681ae9425f300494d81219ca0dfbe5"],["/tags/总结/index.html","94ee265ff9a102fd8647830dc945e9e4"],["/tags/感悟/index.html","bd096accd8fe97716d2257ca0e6538a9"],["/tags/技巧/index.html","0db0408326dfcc3fabfdd58ef0e16ef1"],["/tags/抽象代数/index.html","819969d8c86e96144c81cbdcf3bd21f4"],["/tags/教程/index.html","6c949f470f13d76329f0a538e96392d2"],["/tags/数堆/index.html","af346fc2e55b5f248560a7e9bea69985"],["/tags/数学/index.html","b3fa13d2cc49b43f117ef9751a479acb"],["/tags/数学/page/2/index.html","e81a49bdc424aa3bf048c659b68f97e5"],["/tags/数据结构/index.html","caa6248f1caefaa120163ce329340a58"],["/tags/数据结构/page/2/index.html","039edec76bb308b170bc6643fe1bc25e"],["/tags/数论/index.html","b6d0ccae30c95aea616e519370b6d1f8"],["/tags/数论/page/2/index.html","caec929615a91883bfe0cd58866518ff"],["/tags/文学/index.html","29ff9f343771620e660aa4b80bc966cc"],["/tags/方差/index.html","d296b145571eb1d29ce04a5cbb3e7b4d"],["/tags/智熄/index.html","f05c42938d23ebc04ea5ee5429857bd5"],["/tags/暴力/index.html","d39f7d2fdc42f1088e43466147608139"],["/tags/替罪羊树/index.html","ae1b00073a6c03c449f9a48a5c9d5c3e"],["/tags/最优化/index.html","00593323b4c82642e02aaed395ecaa2b"],["/tags/最大流/index.html","acda952dc1fc56b77c1513fc2e45f2c9"],["/tags/最小割/index.html","db75ea2873627e2ecc0f7778652d6681"],["/tags/最小割最大流定理/index.html","68225c0554b6a3b9830ea366276fdeaf"],["/tags/最小生成树/index.html","14c6313777f137af98f14bb08df3e6f7"],["/tags/最短路/index.html","4f988ad4e5f028e6651163f162107932"],["/tags/最长回文子串/index.html","adb824024c9e4b90e12ad86707dc6551"],["/tags/极角/index.html","361fd25fb6378238fbc5c4a417b0bf8f"],["/tags/染色/index.html","de5c6a99b5a920ae4042e0704722ca41"],["/tags/栈/index.html","c593d96ee4367da145497f26e380ab21"],["/tags/树/index.html","37b851faa3e0d8edf97a8cf25abd3af3"],["/tags/树剖/index.html","02af17960238ab71ef381ea22033f411"],["/tags/树套树/index.html","a99f0ffb7ef41d30e6f4d01b2c33181f"],["/tags/树状数组/index.html","484f6647e8c6ca39b527c3bdd39e04c3"],["/tags/树链剖分/index.html","3fa9e8b11fa78be54333f82a27964f7e"],["/tags/模拟赛/index.html","d37c05605d77f4b1a278a356f1bfa5cc"],["/tags/模拟题/index.html","288bdf46ac5cfdb26a4d5549608ebe6d"],["/tags/模板/index.html","c1a81985738064bd2d17cbf04fba395c"],["/tags/模版/index.html","141f3c9f14a0ef7690817fd35a156ca9"],["/tags/模版题/index.html","3c3745c9ff973cb2c1215f9ec7090204"],["/tags/欧拉函数/index.html","29ad6951fd854d78ea1413292d96030e"],["/tags/欧拉筛/index.html","d742af93abeda46ec052add6e02b1a41"],["/tags/毒瘤/index.html","d0dbfff6da74fb4d2107f59b63d6e0bb"],["/tags/测试题/index.html","90295c4d89f9259a54965bbd5c4ffcf3"],["/tags/济南/index.html","547a821d4ba618a02e100cbb4c517d51"],["/tags/清北/index.html","3dd9cb5d397e7f4f353519f4c8c0f38d"],["/tags/爆零/index.html","cb9a957b7d9ea489466df1a2081a6073"],["/tags/玄学/index.html","2820c41651caa450533b7416e71ba77c"],["/tags/珂朵莉/index.html","ebd7ee73de1d327c69f3da3da6a3aac2"],["/tags/生成函数/index.html","596d3be6612c61e5de9e786ba062557f"],["/tags/瞎搞/index.html","3b01a21ad1adc67ac1fda5918b81cfc9"],["/tags/矩阵/index.html","7dc81b45455519597888f36fb908c1ae"],["/tags/矩阵翻转/index.html","dfab9f4c9861e95281b566062b6dc32b"],["/tags/算法/index.html","b69f80017500bcc3f0e702202e318a96"],["/tags/算法竞赛/index.html","0d1216668d84f8be1a9fa896d80d3aa2"],["/tags/素数/index.html","1854d95d968ac7638696a7579eede936"],["/tags/线性基/index.html","6f7aaa4f7412d15df921e8950b0eba8e"],["/tags/线性筛/index.html","5510018ff79711fffc427f3d1e55b2ca"],["/tags/线段树/index.html","6047687e2339a8e20194e277da7a1375"],["/tags/网络流/index.html","e8ebb14e289edec09a21cfaee3c4227a"],["/tags/群论/index.html","a48c938bb41a30d0be383a03c05bb0c2"],["/tags/自动机/index.html","cf8d61f306ed481f07dbc265324ae9be"],["/tags/莫比乌斯/index.html","a3c73be3464ffbcd82bdf7b4dcf4fe3f"],["/tags/莫比乌斯反演/index.html","273a825a3b31adcd216cd3a79b7399ea"],["/tags/虚数/index.html","6a3c540950de3f697bbfa79d32a32f61"],["/tags/计算几何/index.html","a8bfbd9cdb96a44711e0194bb2764c6c"],["/tags/证明/index.html","8c2064baf59cf502252b287157a9e7f6"],["/tags/评测机/index.html","e355fd1606dc9d52f7e65319a2e8c123"],["/tags/诗/index.html","7168aa78e2c4f17ad41a8e8bd9e693e2"],["/tags/诗歌/index.html","82cd155e6f88d3f9381e4c720882b3a7"],["/tags/费用流/index.html","3bd13d3bed59111a599dfd1d0a9438dc"],["/tags/路径压缩/index.html","957dd5c7d7cc09b210f2925365542958"],["/tags/逆元/index.html","0a86bc1524229860fb1c20fd290c65c2"],["/tags/递归/index.html","443046799a6d9256c37e3ae07e25c069"],["/tags/递推/index.html","5fbac1404cf3c3a5279ac2b27a4d0a34"],["/tags/邻接表/index.html","7c943ff990dad2c632e188b69d937a8c"],["/tags/随笔/index.html","27cd76715c62ae499cd2ceccd07a688b"],["/tags/集合/index.html","2218cbe6057a6327f9c47df7a36b31c1"],["/tags/集训/index.html","74c63e09fb1dbfe8812efb6483e0fd18"],["/tags/非旋Treap/index.html","901a5da0fbcd2ddae14c1c91bc11b6ec"],["/tags/非递归/index.html","75aef72c2b1ab37945f0a23cf2dba431"],["/tags/预留推进/index.html","0ea2d1c86bf5ad3b4a4f069e9f0c7ee4"],["/tags/颓废/index.html","2595256daf070b38b27100b6dd0fa582"],["/tags/题目/index.html","8d4a63bbad3b3b2e4e289479ea2f5a5d"],["/tags/题解/index.html","8ba0af0e8d2ca71aab9436b0f71645ab"],["/tags/题解/page/2/index.html","4a9710d4351c8864e56db5f5ce74c8ef"],["/tags/高性能/index.html","3ee234957fa35cfe57c73aae73b3f819"],["/tags/高精度/index.html","3b6a4f6b548486c767d70f6c5c1d7969"]];
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
