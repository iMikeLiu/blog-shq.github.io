/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","52ca462319e62993593d9941b07efab1"],["/about/index.html","609d5a9e814489ac2109e62115e1ed98"],["/archives/2017/12/index.html","df91c4dda0e97c48da426bbe7ee2bf52"],["/archives/2017/index.html","d18ec0ff3cf928b9627c6805b31922ac"],["/archives/2018/01/index.html","fdf8c068f50ed6fa9d8bcc7ef5f9dce4"],["/archives/2018/02/index.html","58d74db5d944ac81f2a2b1968d6927e6"],["/archives/2018/02/page/2/index.html","3b9bef46525db0ae9ea055e6b0faa386"],["/archives/2018/03/index.html","74b6868d90c88f80f2329a95e19de22e"],["/archives/2018/03/page/2/index.html","42efe077c452404e122f047738f41f2f"],["/archives/2018/04/index.html","ddf74fa26da60087d7e910e6b0040e4b"],["/archives/2018/04/page/2/index.html","2aec325ffaee4cbea7a5f5eab01f10a2"],["/archives/2018/05/index.html","5af8308027e2e17f0d7f1a55bd03f4be"],["/archives/2018/06/index.html","95ac60a523c5c008b3cb11807e8c3ac6"],["/archives/2018/06/page/2/index.html","dd9095edf85b31d926f3be0ad559c5b9"],["/archives/2018/07/index.html","662d423e429b2aa0284790d549e7660d"],["/archives/2018/07/page/2/index.html","f13338057d09d40a81d6b165f266d15b"],["/archives/2018/08/index.html","f358e946fef03705eecbc8d992e91231"],["/archives/2018/09/index.html","c8530cac2add3d52c7a28e91bfea6cc3"],["/archives/2018/index.html","c0831f1616292184b1ff24025d33b32b"],["/archives/2018/page/2/index.html","f3fc30c1e53d5a854c7f056a5fe8a768"],["/archives/2018/page/3/index.html","c8dda743e8146254911741fa1716f73e"],["/archives/2018/page/4/index.html","d6f35dbf972a88f4b29d8fab626b7f1b"],["/archives/2018/page/5/index.html","054e3807843c340db16e0486b7cb3e23"],["/archives/2018/page/6/index.html","a9e0ad3e3617b89424065e201c4e72eb"],["/archives/2018/page/7/index.html","477607f88d39866cf972b652dbceb6bd"],["/archives/2018/page/8/index.html","37df03042f5f2360ad6de8e3696c4071"],["/archives/2018/page/9/index.html","7fd52a7a980f70b3c069c8dfb0995ffe"],["/archives/index.html","add92356afd4b0fb0783cfbb85310b47"],["/archives/page/10/index.html","db750e6a4782388249b8f8a7d8c1a3ef"],["/archives/page/2/index.html","a218f26c39f5a12111291f8be6e93735"],["/archives/page/3/index.html","165bd21e33fec456a1dcac324666d8ed"],["/archives/page/4/index.html","f26e8753763991663827f599d79f657a"],["/archives/page/5/index.html","b97894d5978ce945bf1cf78dfacb51a3"],["/archives/page/6/index.html","013a4a4cb222bf2f982f0da135b68854"],["/archives/page/7/index.html","bea93610e1b2510b4773d9b3e086f058"],["/archives/page/8/index.html","d1dbbbfbe30a67458eb4c7a70ef20851"],["/archives/page/9/index.html","a314753ddb5966e4c12b641ca506078c"],["/articles/18-4-27-things/index.html","cde8c6c9c5c5852ffc5ba6f3158d772e"],["/articles/18-4-29-test/index.html","2478bf6550f1bea3416ea912110f6166"],["/articles/2018-五校联考-Round1/index.html","61a926666fd39694973772710a56607e"],["/articles/BigInt/index.html","3023825c030e5187ffa236fbb6caaf94"],["/articles/CQOI2018-九连环/index.html","53051829e6339b075c563fb11faa8b67"],["/articles/Chtholly-Tree-ODT/index.html","956c1daf8f383156931c44923231ce5e"],["/articles/Code-Style-for-OI/index.html","5d4362343e3f6952f80e31a0d40a3412"],["/articles/CodeForces1051/index.html","02ef8f7c4cfd320a714a1f5534b011be"],["/articles/Computational-geometry1/index.html","530efe3ab99ba3618e1ab4bb8c7ab6f7"],["/articles/Computational-geometry2/index.html","24968bcdf235cedb21dd6aa5ccf1bdd6"],["/articles/Computed-geometry/index.html","272e553e6e626d276efa8c5cd32c665d"],["/articles/Dirichle-product/index.html","1d0722a2192881f7015c1c39802b7dfa"],["/articles/FFT-study/index.html","aeb4011c0620fdfafe6a36942521f6f4"],["/articles/HeatWave/index.html","7b8c9a03b1709e1fffed0f98ca12ffba"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","1aadc7d86bc6833bcb3d10b2853ca097"],["/articles/JSOI2009-游戏/index.html","fc0d747b28d59a015d77c561c45ffecb"],["/articles/KMP-AC-automaton/index.html","3a3ef9e98c6a79f395ef1b995ed1a95f"],["/articles/KMP-AC-automaton2/index.html","57869b85a369ec5a33aa91a873af978c"],["/articles/KMP-AC-automaton3/index.html","9854c29a7b691147f76e6a0af47e5d63"],["/articles/Kernel-privilege-escalation/index.html","792a171d12953fc0ae9eaf8769e99907"],["/articles/Linear-sieve/index.html","49a03a4dc85fa36374851b847462335e"],["/articles/Lucas/index.html","a58b4a32ea5f9d7e9b7575bc9e66e7a5"],["/articles/Luogu-P4276/index.html","e2098bca01f90c86101417165ae033d6"],["/articles/Manacher/index.html","7a15a31fb0b5dff4e31d86e80c6ba15f"],["/articles/Minimum-spanning-tree/index.html","ae352cddeabeb6e0cf595600dde5e77a"],["/articles/Mobius1/index.html","761d041d71835218d148d7dcde6c5c89"],["/articles/NOI2010-Plant/index.html","ce7fb5abf590794bb7ba60d222eda26a"],["/articles/Network-flow-Algorithms/index.html","82bd62a68f21d342c8d0d3ac57053ea2"],["/articles/Network-flow-start/index.html","9542b0305c2e7b687e2d97e8da8aebb5"],["/articles/OI常数优化-进阶/index.html","5e755d571764eeb208e12196f3643397"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","c62cf1ddbd4653c3bace5e9ec154276b"],["/articles/P1984-SDOI2008-Water/index.html","bea3da06e64459019a019bcca11f8bba"],["/articles/P2018/index.html","d858ae9fc6cc09010895b416f236be31"],["/articles/P3933Chtholly/index.html","3fee882e5f7b08c465b389ec0fd1f63e"],["/articles/Partitioned-Algorithm/index.html","ec1d5a66f6b3c8df295473136b9bf0d9"],["/articles/RP-introduction/index.html","e04c39bd8bc0edc1619151eda1184298"],["/articles/Sandaram/index.html","55f2294771882f3550f2bbc669b8cce8"],["/articles/SegmentTree/index.html","9ee490ef3971d94e6765375bf0134a80"],["/articles/Segt-in-Treap/index.html","59603bb60dd5013aaaa99e3a52de5415"],["/articles/ShqProblem1/index.html","ef41fc49f48fdf900a7ad42bd0ab3e56"],["/articles/TreeArray/index.html","554f66abc67988fe76cbeb35108b1935"],["/articles/TreeArray2/index.html","ab8f6123f6c5315278c4b3582fb5fdb2"],["/articles/Union-find-sets/index.html","4f23cc81532db85f736ebd55e123fc0b"],["/articles/ZJOI2006-书架/index.html","f49aff52d734b33c340cda363c372417"],["/articles/ZJOI2007-矩阵游戏/index.html","1e18d2934e47b89ba9cb982d39adeed4"],["/articles/a-bproblem/index.html","f569c68b90c683df31a32520748f799e"],["/articles/aboutBlog/index.html","7d4db6381a22eb4c1f8e59d99b99822d"],["/articles/aboutgit/index.html","9b3d80a1da66ecc62ba5167ccc3c9b51"],["/articles/autoAC-lemon/index.html","3875c185565f4322de8101d4461dc9ba"],["/articles/bzoj-3337/index.html","fe9154aef784baa469834637b3d6a3d0"],["/articles/cppteach/index.html","d5a1f390b26c7ac492f8e06672af5574"],["/articles/css-QWQ/index.html","aa259dc3600819aa6a1ea2cfbae83996"],["/articles/dijkstra-spfa/index.html","da0e635a679c41e9cc95e5d4eb2c7548"],["/articles/dijkstra/index.html","40c5ea94b1ffd9e776061eb9d0bc160d"],["/articles/dinic/index.html","27874cd968a2444d9ad1e167a99411d5"],["/articles/duliu/index.html","a60aca3943bb306775666bceb1d5e9fb"],["/articles/dynamic-planning/index.html","02bb1adc7a9f92eaa7d1c0e8e420f7e5"],["/articles/elementaryos/index.html","ddb9d938b808c93d29db9c19b73e8d42"],["/articles/er-fen-tu/index.html","4b407df621faf2596881a79edfa2aafa"],["/articles/fhq-treap/index.html","d42aa6cb746ccb5dd80688581ea160af"],["/articles/group-theory/index.html","86e72ecddd9c03a0f7744bdddf48d245"],["/articles/hack-spfa/index.html","c6510d58ba8ec88666c4c3d17e165225"],["/articles/lgy-from/index.html","ce08b9f896f0ca6767355e1be98396a0"],["/articles/linear-basis/index.html","3cadebf8fade2fbd246c6c9bef793766"],["/articles/lyoi-Poetry/index.html","3875df376cea31283317971573217b4f"],["/articles/lyyz-test-2018-5-19/index.html","2a3b813b7fe507a020859637598fa6fd"],["/articles/markdown/index.html","b1e809c1c14fdbc0fac86eea9115ebd6"],["/articles/moban/index.html","246d15733cf37b9a0fdc26f099ecd83e"],["/articles/poem1/index.html","0b6c27bfec2f05433bc2fd80bfcda3a8"],["/articles/prims/index.html","70a15a14d2f01151de7676028116181c"],["/articles/python1/index.html","fd146567ccecb8c2b766f2e5e8248442"],["/articles/question-01/index.html","74467fbc8232669a8ac036c192d88d8f"],["/articles/recursion-to-no-recursion/index.html","493e359153ed72b996287e07a60a0e71"],["/articles/scc1/index.html","8db87e799e2b0cf387284befbc32ccd1"],["/articles/somethinks1/index.html","4bdfce7d6ec65aff295edb05cdb07421"],["/articles/terminal/index.html","1e978cfaf79fa474614552a9a7c4e889"],["/articles/terminal2/index.html","f7b789a346494ba0356a07194fd4ee14"],["/articles/test-mode/index.html","602a508339a8a12fb185e32a23bd614a"],["/articles/test-polyline/index.html","b687cd5cc9411ffb209a3b1141085958"],["/articles/treap/index.html","5c6dc412ebf49cbc4ab5198066e11263"],["/articles/tubaomb/index.html","3e0289ec0d6a1fa69fa5da01de04e964"],["/articles/use-hexo/index.html","eca3622ae59ddbdc5043a5dfdc34e565"],["/articles/use-hexo2/index.html","a3a0520c1bf31ff5356e7576c2b7cbe9"],["/articles/zkw-tree-algorithm/index.html","5b0439ba5d7ef3c8ec73cd9662ef485f"],["/articles/zzWA/index.html","0517bf7ca2fcc30bfded04eb714cc08f"],["/articles/「LYOI2016-Summer」一次函数/index.html","8dc951f43fd5df5f5cd49ec69d3b6177"],["/articles/主席树详解/index.html","5ce485c92120d99c54f0818cd13f1c4f"],["/articles/分块-P1471/index.html","6bd2174b4de2c5779d8bb695c63f4452"],["/articles/可持久化并查集-rope/index.html","eeb70cf0d125ea315d00d6f5bd021345"],["/articles/复数表示/index.html","934ec8d14e1cdfc34475c7c76b8b0b38"],["/articles/洲阁筛/index.html","7a4c575f7b7f6987fbf64a06dd5538f6"],["/articles/生成函数/index.html","bf0e603756021f32d84d299a3f2c2dfd"],["/articles/网络流-二分图最大匹配/index.html","d66e1554f0631abbeaac68e59294d36f"],["/articles/自然数的和/index.html","ea7acfed75e4953674a20ddb99296037"],["/categories/Linux/index.html","6ad06dce30ac5989e3146ac64aef484c"],["/categories/OI/index.html","df1db2f763ca9b75ac148d1678750e00"],["/categories/OI/page/2/index.html","f5077476318c36e0c02a6c08ed7a9eca"],["/categories/OI/page/3/index.html","958e5bbffc295986cb8ec29da289c777"],["/categories/OI/page/4/index.html","11ea5323305291e191089ec44aa884e1"],["/categories/OI/page/5/index.html","a05d76b4ba41c613c6c3c7a871287984"],["/categories/OI/page/6/index.html","2aad44ecc442aad64961513cdcc17fd4"],["/categories/OI/page/7/index.html","edb5afe2ed9077b3cb80b4150fea0216"],["/categories/OI/page/8/index.html","b3c5dbfe605dd6eacb683ae9232131f5"],["/categories/OI/page/9/index.html","9b14e9ec04f8394ecf29e32552b55935"],["/categories/hexo/index.html","803245961ba0a3c9546275dd38c84f4d"],["/categories/index.html","aa90b337bb94e34d858a5d15451f1e97"],["/categories/随笔/index.html","e4d3cbec393f860ddf08c6bbdade6ae8"],["/comments/index.html","41ee0dd314b32050a9f609d730bc5fff"],["/css/main.css","72dde1d1f4764a0558cf42ec823a55f3"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","8d9ba322092375358b853c9967b2ff42"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","e141bbe968ad5d4caa152fc17b0b8fa7"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","06ebf3592adb39597df25b99ff86776b"],["/page/2/index.html","68a3f3aa17816b275cb61745ff1c63bd"],["/page/3/index.html","690c50eb154d7278bf9c22f829ed9fff"],["/page/4/index.html","89d0ed5da9596f70f93118c77d029166"],["/page/5/index.html","52dc71d23d7439b47096c3776a78f746"],["/page/6/index.html","5324e45af5dec46d666f16dd1149fae9"],["/page/7/index.html","d52aa9c90f4be8acb6cbd881706ba3ee"],["/page/8/index.html","e7a16d120f6e60f7bdb1ce5a9113b8ac"],["/page/9/index.html","353aeb92d473e7efe91c02c4b50399c8"],["/photos/index.html","993149621fe7c801bead99dea1a8868c"],["/remittance/index.html","d4a1a97cd61a75e091d45729bcd55261"],["/sw-register.js","32eb0dab587f13990b55619d8b4ca2a3"],["/tags/2018/index.html","96e6a019c31f53161233d423d6cc90c8"],["/tags/AC自动机/index.html","3293b6676965e8cbf3f1653aab682d7b"],["/tags/Algorithm/index.html","81e9ff32ac380f0849f52ab30e03d5b4"],["/tags/Algorithm/page/2/index.html","56c3606e799d1dc323e7c1fefde9bed2"],["/tags/Algorithm/page/3/index.html","e11bea674bb825da20e5ca4ddaa269a9"],["/tags/Blog/index.html","c42465b3447efa2de6c18531abbbcd20"],["/tags/C-11/index.html","1add374dd2fdbd039d07125a9cd0d995"],["/tags/CQOI/index.html","59dd90729ba4e52012014b8bf78d7643"],["/tags/Chtholly/index.html","7373ee93b79729f77a7e32d511460b29"],["/tags/Codeforces/index.html","c4030caedbb87780f844609f032859c1"],["/tags/DFT/index.html","672d798bc568bc5f775a60ed10b341e8"],["/tags/DP/index.html","069540c92ba7fc6a2f47eb7855121f59"],["/tags/Dinic/index.html","566eae34e6ab5a6646d606939760f399"],["/tags/EK/index.html","18e6212b206f1bfd842b891e5bf45617"],["/tags/EK算法/index.html","ef5cfd297cad05495f0431047faa8c5a"],["/tags/FFT/index.html","6cc15f60fe7df36c085bd777cd6fd801"],["/tags/FF方法/index.html","b610d02ed0c4cb783e53d5c42ca52f3a"],["/tags/Ford/index.html","e442a24f27a2a9f37f87bce46b71c58c"],["/tags/HLPP/index.html","118df4f233c6d9ee611cf5004001c076"],["/tags/Hack/index.html","9f58f4a60a79b03b0467eade2af00c9e"],["/tags/IDFT/index.html","4663c998e627fa275919508cc4f6aa80"],["/tags/ISAP/index.html","0251a73adce0a321c931ade51872bc7e"],["/tags/JSOI/index.html","3efd11532a96bcbdf48f99e2026ea461"],["/tags/KMP/index.html","860085cafda6a1dafc87cf50283079f3"],["/tags/KMP自动机/index.html","5e0a61a369a6e8760b44e55de401b0d0"],["/tags/LYOI/index.html","ca25fdc42051f30ae006d66d173b3617"],["/tags/Lemon/index.html","dbf6dee4a8f11e3616015f8886bb3a09"],["/tags/Lgy/index.html","ad189d7e876ddf41214c9ed483729f0c"],["/tags/Linux/index.html","06f248790c36d88667d796ef4085cb08"],["/tags/Lucas/index.html","afb6b22ee1bccde6e17d628b4cf01a63"],["/tags/Luogu/index.html","21158ffcdb9a10a14e7c3e73377df858"],["/tags/Manacher/index.html","acde3e0b3cc6d512d0c0816ce63f2e4f"],["/tags/NOI/index.html","8ae2976cee83d94c4aa9bffacd8e5ecd"],["/tags/NOIP/index.html","acebff867558aa0293ab84d3844a74ce"],["/tags/NOI导刊/index.html","c94d1b311b96fd3834c30e521c5b5a65"],["/tags/NTT/index.html","ec2e54a288c9972e27e1e376a958039b"],["/tags/OI/index.html","46e7894223a79f5b87f41a09e395f0b3"],["/tags/Problem/index.html","f28a3a9ebf6eafe5076f7263b92070e2"],["/tags/Problems/index.html","1a0cd113b0ca91a02cf6b311fcba5edb"],["/tags/RP/index.html","3d6df980568bce47b1b9a00357c63823"],["/tags/SAP/index.html","af02db92fd4363302c79dcc8d3d475c2"],["/tags/SPFA/index.html","ba4aae721f24424f906e26d9628ac7b8"],["/tags/STL/index.html","21ee19892ecc17cd73483e4db42d6e9d"],["/tags/Splay/index.html","91eaa3e19f42d95bfde2f56444557413"],["/tags/Tarjian/index.html","ee833ae3f9aa059d0a14febf8b06abb9"],["/tags/Treap/index.html","9015c092c06eddfd1b15175979239f8f"],["/tags/Trie/index.html","283ef8c15c973bd230808ef5968e98ef"],["/tags/USACO/index.html","34860290f52f2f406241bda67c2356fd"],["/tags/ZJOI/index.html","d75bf5391075683f22eb6abf593cac19"],["/tags/blog/index.html","896706266b5fa4a3c6d60f6e1f968408"],["/tags/bzoj/index.html","fc2035037708a768f1d8b001f7e1c9ae"],["/tags/css/index.html","d0b2b0957f25f31e09dec3162738a105"],["/tags/dijkstra/index.html","9bf15e724468d41d9b72acb024f45b9b"],["/tags/dinic/index.html","04177ba9e9d6fb1d48577dc4a2b3c8b2"],["/tags/fhq-treap/index.html","4a40e818d5630da22fcdd76148e1ca4a"],["/tags/gcd/index.html","bc7c27201bac3135cafc83dfcd6d48d4"],["/tags/git/index.html","daa6aa39caba185b66810f52f931e35b"],["/tags/hash/index.html","9cd9bbcd029eafe5f415460196aab6ba"],["/tags/hexo/index.html","f96e09ede24304b48b7beddb6421d4dc"],["/tags/html/index.html","cb9510414a0f3de5cfefed155ee9cf54"],["/tags/index.html","e09d3441ed4b2db4c323f785763fdb05"],["/tags/lambda/index.html","049cf37415fd4091c834ffbb8ce09895"],["/tags/luogu/index.html","9afeafe0ac0afb9d1fc20215547f39f9"],["/tags/lyoi/index.html","8deb327d49ca691f686bb59d6cfb2622"],["/tags/markdown/index.html","862dc8a43657dea5a24590e934238d94"],["/tags/problem/index.html","c561f06af3dc46b0afa527669be12153"],["/tags/python/index.html","46b6adade07effbaad31ce6a69e88e57"],["/tags/qbxt/index.html","949ea5142a4296c1cb89d93626e109d6"],["/tags/rope/index.html","4bb3cf29ce1f9d7c3d2c0c68c190331d"],["/tags/spfa/index.html","b1c12da390cc2fe48de875882029ec60"],["/tags/system/index.html","f0c5ca26701bd5cbee9f811043c2083a"],["/tags/terminal/index.html","14f6fed856f531c40c2666be25a181a7"],["/tags/zjoi/index.html","9314d4f9b87197a420fba02935add707"],["/tags/zkw线段树/index.html","07acf66bc3655fb034c6c0a990a5fd8b"],["/tags/临沂一中/index.html","699a3813f171383a22349d7778a406b8"],["/tags/主席树/index.html","fb6da6020ce870de45bbbce45af897fd"],["/tags/乱搞/index.html","1647b5c3858fe2b650fb8adafeff1640"],["/tags/二分/index.html","13f9be5e2277b1176511d05f4a1ec33a"],["/tags/二分图/index.html","cf8870ae00f4b515a2018c678b6a9bb0"],["/tags/二分图匹配/index.html","d63e16ce2176d890222a6a490221f7d7"],["/tags/二分图最大匹配/index.html","f2b9454df9144bd4712f56ac0e262f56"],["/tags/二叉搜索树/index.html","2919e8dc923e3bc4c3c101cbf3237454"],["/tags/二叉树/index.html","7c28b60fc0b651fd252c0e7382d05e29"],["/tags/五校联考/index.html","7626e3085e5ae4186806e4c9b0090794"],["/tags/代码规范/index.html","2fcd409ddca1106d157f653a3c681ba6"],["/tags/优化/index.html","820b0c52b8b3a67bcbda26eb536790ce"],["/tags/内核/index.html","f60c73f57f784e54da61f7442d0a34be"],["/tags/内核提权/index.html","1cc9f58538402128bfe77b64b9c8b51f"],["/tags/几何/index.html","611c515ef9094f678c87c534e1f5541b"],["/tags/凸包/index.html","e2192bf257034c17844d6b0361246b6d"],["/tags/函数/index.html","4af6ecf1b01694169c731c224129cc20"],["/tags/分块/index.html","dbab7db3d39e06b4494fd80f62aa392a"],["/tags/初等数论/index.html","9f27e7569dd31db5aefbb333c6206f2b"],["/tags/前缀和/index.html","0beba97fa629c645aac9b45242d0542c"],["/tags/动态规划/index.html","f6bc7aaa8470e602da33b61e3e8bc643"],["/tags/匈牙利算法/index.html","fc667ad9c7d36c94416712c3b1e59fc0"],["/tags/区间/index.html","02aa04b11bfe62a4e7eae5f6772ef5d0"],["/tags/区间操作/index.html","faf9ceacfe211c3053fa80079c1bb2e0"],["/tags/区间第k小/index.html","36ea9d6b081278e390a05521c5efa5bb"],["/tags/半平面交/index.html","055e06ad2be95df322dad4b4bfece4be"],["/tags/单源最短路径/index.html","38c5cc6971ba8084a96f7deab76d1e9f"],["/tags/博弈论/index.html","bd884b7006e844b49f57937f0cadc7fa"],["/tags/卡常/index.html","2992110dd874d0f08610fcd02f7bb770"],["/tags/卢卡斯定理/index.html","3e0e10efdd2db1c54f1716ddc3399cbb"],["/tags/卷积/index.html","f6cdd61627c75a5feb9614de8db23c18"],["/tags/叉积/index.html","b670a2022c06cbcef3765f16c11782f4"],["/tags/可持久化/index.html","b30f11ff069027391c96dce4dfbfdb15"],["/tags/向量/index.html","d1613c46c148d67183cab9319c0d38a6"],["/tags/图/index.html","2102b31bc2260aaa10598d2fdcfa1251"],["/tags/图论/index.html","29469359508f01978daf31609ff8cd02"],["/tags/块状链表/index.html","f67a16465d278e248bba70141c6d99c6"],["/tags/增广路/index.html","15814fb2ce27991a26779c03e0070486"],["/tags/复平面/index.html","04d0aa5f9d9d01b5689d378d77aca478"],["/tags/复数/index.html","cd1bf856583a1e065218e4536fa81f00"],["/tags/字符串/index.html","d1b49e845b84675707cb67f6deb57b83"],["/tags/学习笔记/index.html","3a30081ddb13e98a34834758b77133dd"],["/tags/常数优化/index.html","c3649b54340b3d5ca93a3314b2c02746"],["/tags/平衡树/index.html","f1a50092074eee5cf7b086c20a6d4996"],["/tags/平面几何/index.html","8c793efbe8f58208d6e58b3e3b2cf429"],["/tags/并查集/index.html","d62eb528783c7d94133cdef8d395ceba"],["/tags/强联通/index.html","38e33c428bc14247a679bc5ca3065c8f"],["/tags/快速傅里叶变换/index.html","ecc10c70f2be2317851c8a92ada1236b"],["/tags/总结/index.html","84c8a6f6ce0f270498066157d79b0f79"],["/tags/感悟/index.html","c1cbb02d6b76e827339dbce607b04601"],["/tags/技巧/index.html","fb2d40841eade72b906bd7149e7a3120"],["/tags/抽象代数/index.html","b48d8e96b7b1acf13e9c68793f44c9fd"],["/tags/教程/index.html","f535cd28b62b225d992f0ae5868ab237"],["/tags/数堆/index.html","c45ca1dad9e640f9da85e1a3473f401b"],["/tags/数学/index.html","4b740e3b0c17b2a98b564e4097156c7a"],["/tags/数学/page/2/index.html","80da6133df6db305e3cddac364d19a09"],["/tags/数据结构/index.html","a287ab0d220b50798cc5767c9225f61a"],["/tags/数据结构/page/2/index.html","31168c7cf14be24adfa2f2ea915639f7"],["/tags/数论/index.html","1e13dc8cf70a8194e30d7e169e63adaa"],["/tags/数论/page/2/index.html","b7f2c9ec731a2704b99991c51328d59d"],["/tags/文学/index.html","5a780b2d4152cdec85d0ec012da419b6"],["/tags/方差/index.html","43f07b710f123b9727778452e6cc253d"],["/tags/智熄/index.html","c5a30a704116e83dcc89b69e241a0b4d"],["/tags/暴力/index.html","b1e8e989c762aa466dc17d39e073b808"],["/tags/替罪羊树/index.html","26a8d5fe90ca70a428dfdbf796b32c2a"],["/tags/最优化/index.html","0164a35611a07a78f46bd10686fe6922"],["/tags/最大流/index.html","ac2376941b960e58191645352b1a3019"],["/tags/最小割/index.html","01bf2648cb39da561dcbdf3a6a595cd0"],["/tags/最小割最大流定理/index.html","84f12f9eb52b05fcd7f60c0aa2a7c2d9"],["/tags/最小生成树/index.html","81542e99f8b2931cf996f1313593b31c"],["/tags/最短路/index.html","e018315f6637bd836871e9fcfa9e2034"],["/tags/最长回文子串/index.html","e1801bd0759fe032de890267a55677c3"],["/tags/极角/index.html","baaf14279ec5d7f5ce1394b50e7328d9"],["/tags/染色/index.html","ca6ad28853c778eaa833b02bd0ccc67f"],["/tags/栈/index.html","402eb0cabad4f487ff5f7be735f6dfe4"],["/tags/树/index.html","03ce46b53727afb522b701b9ad2b3330"],["/tags/树剖/index.html","24a8484850c028d2d6af3c0785e2de97"],["/tags/树套树/index.html","01b1f8c48a075ae8b231acb60793a96d"],["/tags/树状数组/index.html","c376af73cd71ef67c854e9b9d386eddf"],["/tags/树链剖分/index.html","62a08ac6efd446eefdd4f867bbb95c6e"],["/tags/模拟/index.html","c1469d9389b49a7f1666e20def1bab84"],["/tags/模拟赛/index.html","a59b7f626c8f36d2647ecf991bae2565"],["/tags/模拟题/index.html","7a3680d5a9981d40b6c57fe8b84bc0f7"],["/tags/模板/index.html","a4e82c14fa3e112f0783f7db9ead6b40"],["/tags/模版/index.html","ea50ec149d16f102f4eaa44372be7993"],["/tags/模版题/index.html","0cce7aedf3d81d152e4f84b8f2030f20"],["/tags/欧拉函数/index.html","50570a32109f01b37f34454b39a7ab75"],["/tags/欧拉筛/index.html","15878f5515e1ff556c41d62e26d684ee"],["/tags/毒瘤/index.html","3a397c1535214a017fe5bbce302f1188"],["/tags/测试题/index.html","7aa69209939e0b5e88ab1a9987dca60f"],["/tags/济南/index.html","bc057ed34cdfabdfc81ecac01a920ee4"],["/tags/清北/index.html","de202fd97d8187b5f2f98ebb44bf409a"],["/tags/爆零/index.html","65921eed53ec6b1cd156ee70d5dadf07"],["/tags/玄学/index.html","303d188501152b0585581fad6b9c7b9c"],["/tags/珂朵莉/index.html","d79f840d95094800bd724fbe7f29b3c6"],["/tags/生成函数/index.html","0e4c7746ae3681e2dfded1e0dfb5ae9e"],["/tags/瞎搞/index.html","47679b56f12b08300cbf957945349e53"],["/tags/矩阵/index.html","694e4405d29396cd48845ae6f6ef9ead"],["/tags/矩阵翻转/index.html","c9c0cdac93a163def4ba9e8da5a2ecf1"],["/tags/算法/index.html","40977294e1f0bc18243e4e53d5d423a4"],["/tags/算法竞赛/index.html","b3e0685dc12adc9248d546528c921e4f"],["/tags/素数/index.html","699b27c392c471469c8ec8b1ea56610c"],["/tags/线性基/index.html","fe40fc73d29a53be51cdd8f35f0cc5f6"],["/tags/线性筛/index.html","fcb96235bb35523597a21ee5aa87e100"],["/tags/线段树/index.html","3d6893668e5f9f9ae366924e46b9febd"],["/tags/网络流/index.html","171f2180c46f0a5337c532bed8402789"],["/tags/群论/index.html","48fe41a471ee4afd4e63061094ee8977"],["/tags/脚本/index.html","25602ead682b52fdd6857e34871ddaa4"],["/tags/自动机/index.html","f0f5805e6924be98690c06b53017d0dc"],["/tags/莫比乌斯/index.html","bdf773d58b8991bcebb6e9244da7b4bb"],["/tags/莫比乌斯反演/index.html","0907c391809d37b3c6d3e141c041a1b5"],["/tags/虚数/index.html","39fbe230baad87a3ee01bf5c8ed2736b"],["/tags/计算几何/index.html","2419b4e219e0b93e61825fd4cdb9a466"],["/tags/证明/index.html","fbb4f49dc7975b641c66ca263c94442c"],["/tags/评测机/index.html","c4a7b4b03cf06cd510da402a059684e5"],["/tags/诗/index.html","ea2591f9231dad044d8e3871cc9fdc24"],["/tags/诗歌/index.html","55d5f08833837eb8d2d55ef118a123aa"],["/tags/费用流/index.html","9b61b6610c8f174b3ab088b293ff1843"],["/tags/路径压缩/index.html","049c608d377c8d331c1adfdfa66dfcc0"],["/tags/逆元/index.html","f23eec7e07d4fa519f3c9032414f61b6"],["/tags/递归/index.html","dbf95b7ba7ca921edb69dfa4fe0159ef"],["/tags/递推/index.html","81743cedc56debf3ec6827f3b7fdc76d"],["/tags/邻接表/index.html","f3a9785218ac1ad72806e8a111a0dfdb"],["/tags/随笔/index.html","76c22f7c8330c94ce3c3c73f93adb753"],["/tags/集合/index.html","2f69b414ea4af2db7eaa2bdf993d95b0"],["/tags/集训/index.html","be8b0ee45b1c0a34609e054c1a0180ef"],["/tags/非旋Treap/index.html","6846ed6b84aee669b2fb08dbff7ed6eb"],["/tags/非递归/index.html","c63938496939de9fc336308cd671d0e2"],["/tags/预留推进/index.html","7e1c5c2525abcd8c2bf1b93377871ca0"],["/tags/颓废/index.html","99d6d4fcc8c773d028b96164b77ecc3e"],["/tags/题目/index.html","4620e0f7d7172b6a90ec8892b2b685b6"],["/tags/题解/index.html","4b396ece46493a8d8f442f94c4c31b20"],["/tags/题解/page/2/index.html","a731056dcc29c35365895efe9877e641"],["/tags/高性能/index.html","524d716c67fb3df46941ab7767d8b2bd"],["/tags/高精/index.html","93937059fd67689fdb63d67562e17b25"],["/tags/高精度/index.html","978d4bc3c6057bcae963bd6d84535044"]];
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
