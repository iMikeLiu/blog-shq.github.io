/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","196d3a3fa7618f5b2b9e19cffe9ae212"],["/about/index.html","b3f085e7c362885f57a45e07b7531616"],["/archives/2017/12/index.html","252f1a808730878e78bacd2d54252309"],["/archives/2017/index.html","af9542e621fdaaf967d5b7e949c4042e"],["/archives/2018/01/index.html","7745f07a40f126dbc67da58f0d9424ef"],["/archives/2018/02/index.html","7bf967d0ceb90162cda336b41339d7d7"],["/archives/2018/02/page/2/index.html","33c938f5a685f1783e35d9f37627ecd0"],["/archives/2018/03/index.html","47214618d43c4cbe4acb86c35494a3d3"],["/archives/2018/03/page/2/index.html","a82143462f19cf91656ec6b2e2a8c763"],["/archives/2018/04/index.html","1ae9e301a820ea8b8ff6d7af325a8c80"],["/archives/2018/04/page/2/index.html","837d4fbeb047a49a58c6626b548eb6de"],["/archives/2018/05/index.html","9587a4a42481f362f80a760b4567d7f2"],["/archives/2018/06/index.html","d0d7f27d8b9317810c1eea2881316eec"],["/archives/2018/06/page/2/index.html","1132e56763f5292d2dab7c3645e49bab"],["/archives/2018/07/index.html","e030ead3e32a75b32dbcbd0cbb34916f"],["/archives/2018/07/page/2/index.html","ebaacd917606ac7a958172b59aad7d5f"],["/archives/2018/08/index.html","165c13f7faba527ca01bf0e87cad00eb"],["/archives/2018/09/index.html","b51c6fb6385c443cc27b947cca353ca8"],["/archives/2018/index.html","89a627a62355c341ec5bdbbb27ebb97b"],["/archives/2018/page/2/index.html","1ee89d1ac0945d997797e3462e266842"],["/archives/2018/page/3/index.html","eea69ba9b61103fd3dfcf7f1c6808d3f"],["/archives/2018/page/4/index.html","f4665b1533ee4c00277a77a6ab0202f5"],["/archives/2018/page/5/index.html","09e256f0558245b1504de99307ab959a"],["/archives/2018/page/6/index.html","653bf1939bbb6232f73c34c216fc6b31"],["/archives/2018/page/7/index.html","b0c083d03b0440c0bee0b11522a2005f"],["/archives/2018/page/8/index.html","0f05201b2c42bd56383971509e98bd91"],["/archives/2018/page/9/index.html","2056c3db21e854a899a22b8c284e127b"],["/archives/index.html","b17ee1818840b6f6a2e946af01af4375"],["/archives/page/10/index.html","517bd6d2a8911c340237083a59372305"],["/archives/page/2/index.html","c00bb7d4403280b6e98aa2e474625a9f"],["/archives/page/3/index.html","ce1f4c8aa06a4821af62fbf1a712fdd1"],["/archives/page/4/index.html","7f86020b5e2e0ec9e3d96e080153d158"],["/archives/page/5/index.html","07d77e0f7133095884b8fa38f0ea037a"],["/archives/page/6/index.html","d6d2ca2ee5be504f71a11aad44f63ea6"],["/archives/page/7/index.html","33c57efd3bd1bc442bcee70160766514"],["/archives/page/8/index.html","4a1422ccb7c37e937a7acc74277c0a63"],["/archives/page/9/index.html","83072466b917adc6cb8e0b70e1a4ce5e"],["/articles/18-4-27-things/index.html","03dded5c3273563774d86c8edf06c739"],["/articles/18-4-29-test/index.html","8721f5324769feb8f66914ed05883542"],["/articles/2018-五校联考-Round1/index.html","aceb6f28aa8f7d2ad3b20dc1de5df21e"],["/articles/BigInt/index.html","de4e92a4b54142c9f7d6daeb228f1e23"],["/articles/CQOI2018-九连环/index.html","0433e7b1728288869342b237fd704f17"],["/articles/Chtholly-Tree-ODT/index.html","0c4384adcb382ffdd57f855de0b9b1f8"],["/articles/Code-Style-for-OI/index.html","de3d0c0d57603af5a2b46264f8e489ac"],["/articles/Computational-geometry1/index.html","d8dbaa80fd518dc83deb38cbe1adb02e"],["/articles/Computational-geometry2/index.html","d20b15b71f4d5f8b62df71abcdc457ce"],["/articles/Computed-geometry/index.html","a7eba32e07320a5ddda3554a28d8ea4c"],["/articles/Dirichle-product/index.html","93d222ddb0f0786cfe2bbf4244096900"],["/articles/FFT-study/index.html","5dd592fcec6ab0da716bc70d01c4b960"],["/articles/HeatWave/index.html","ceca22ecf8e9aab10afdfa47b0aa2c5f"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","83a361e68119e2441ffd9be176662adf"],["/articles/JSOI2009-游戏/index.html","f4563d135a3933eb807dac4480386bfa"],["/articles/KMP-AC-automaton/index.html","cf51a29d788286ef0717e044604df3e0"],["/articles/KMP-AC-automaton2/index.html","06cf217280053937c17d94f008be1775"],["/articles/KMP-AC-automaton3/index.html","2cd47b47e45296da736cf4e746d24818"],["/articles/Kernel-privilege-escalation/index.html","0cf9772f42d6d2de439feb055d771027"],["/articles/Linear-sieve/index.html","3e2d1c6577c96faf1a3e24ca526d6e1c"],["/articles/Lucas/index.html","67aff21d4db02c3a2cdf5965a59568ad"],["/articles/Luogu-P4276/index.html","578ae4aa82a9d8bd742770ecf5c5a070"],["/articles/Manacher/index.html","4551119808b31b377b98d7c4f8cce6f3"],["/articles/Minimum-spanning-tree/index.html","56ba8cffcd3b006d755afa4240d4aeb3"],["/articles/Mobius1/index.html","dd37f26f2b5e81b997e007505f4f197c"],["/articles/NOI2010-Plant/index.html","51db460f8cfee167f09f8b2d1dfdba78"],["/articles/NOIP-Easy-Round-solution/index.html","6d4c7410befe4cb7932486cfffc6d3d1"],["/articles/Network-flow-Algorithms/index.html","9bae94780659b7ce8ac6e379e759a53f"],["/articles/Network-flow-start/index.html","21e498673f6a76cccc6d8cb7577d339f"],["/articles/OI常数优化-进阶/index.html","a6616e11ca50b30c18ce8d29348a6c14"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","06f0c347ecb18a9f2905edada6df1a57"],["/articles/P1984-SDOI2008-Water/index.html","18e55a8ff7c25c8010097556ba88087f"],["/articles/P2018/index.html","219bbfe20994b79aba5bd348548f2b7a"],["/articles/P3933Chtholly/index.html","bfd237ce8bc3bb27b7b917d94d223ae0"],["/articles/Partitioned-Algorithm/index.html","87308bbcb44b48dc4f3df7548284aa26"],["/articles/RP-introduction/index.html","38918375710e335ca93363820ad6fd1a"],["/articles/Sandaram/index.html","92f3ef7213f89478b28188dced0cb7dd"],["/articles/SegmentTree/index.html","a8787a8d4b8dee90915418120d7fb371"],["/articles/Segt-in-Treap/index.html","ad7f11524241f2ffd5e9c491cde6731f"],["/articles/ShqProblem1/index.html","e4614201b8444eb35e554182a2354665"],["/articles/TreeArray/index.html","61bb9b68daba7256dea2280d5af7feda"],["/articles/TreeArray2/index.html","a600fa76fa6612dab9dc3ea3312a455e"],["/articles/Union-find-sets/index.html","34ec22d56a659011e254c7536cba9362"],["/articles/ZJOI2006-书架/index.html","2989c440d3f3c6e1eed36447fcb93fb5"],["/articles/ZJOI2007-矩阵游戏/index.html","cf810ac3245235a1ee25738bb15b36c7"],["/articles/a-bproblem/index.html","118df25a23c71eed5f846ff8c301eae5"],["/articles/aboutBlog/index.html","ad15d314ae17ee4d327d24082f77cf01"],["/articles/aboutgit/index.html","e7b44927d7d70b5e357cc5f51e7edd28"],["/articles/autoAC-lemon/index.html","0c4755b504016c6f84f132efdfe43c0a"],["/articles/bzoj-3337/index.html","02579a69b45d437dc2af2347eba37e6e"],["/articles/cppteach/index.html","d940f56ba564658d47971415e8687ef1"],["/articles/css-QWQ/index.html","5a3718d95106d815f381f4bb6fa20acc"],["/articles/dijkstra-spfa/index.html","15d1ec5dafe68afe57d39c56d8ea3dd6"],["/articles/dijkstra/index.html","2af73a0d6cfb6a5e9be1d42013a0b3f9"],["/articles/dinic/index.html","913b9aed08d4cb8dba7ddd9c93afcc80"],["/articles/duliu/index.html","e0d541c0ca0bcc512830b0aa178a4b0c"],["/articles/dynamic-planning/index.html","d6970165613e84a627a46912d334b585"],["/articles/elementaryos/index.html","4524570910b32e750402876dac8d0aaa"],["/articles/er-fen-tu/index.html","61d2affd7f29a3c7cc05aac06f20378c"],["/articles/fhq-treap/index.html","508bc82df2db65f0a00c1b13d3763d57"],["/articles/group-theory/index.html","f5dcb93c9cb2744db39d31c541066e94"],["/articles/hack-spfa/index.html","22038812df04677cbce6c3011f7b7951"],["/articles/lgy-from/index.html","536b942541636a57040b9a7ed28156c1"],["/articles/linear-basis/index.html","4bc1b13b317b4152e54cfbfe7986be89"],["/articles/lyoi-Poetry/index.html","a7483841a1fa968159d3af76fd314cfe"],["/articles/lyyz-test-2018-5-19/index.html","f955d3380af3ecfcbd2b027311a64d9e"],["/articles/markdown/index.html","e903250c5078814b41bb33b2850a19db"],["/articles/moban/index.html","5dafe704efd9529b5a9215f0ec889f51"],["/articles/poem1/index.html","696c76aa31e60531142d1c24c8e0479b"],["/articles/prims/index.html","cecca97368e63192a6f4ce3284d4a9f3"],["/articles/python1/index.html","2c744668a8fafc310be72e9417fe23f3"],["/articles/question-01/index.html","15bc721e5cf810dbb885f01781515cbc"],["/articles/recursion-to-no-recursion/index.html","9032cb8b1966d98bcf6d3d920d5867a5"],["/articles/scc1/index.html","95081112ba8cd36f6ce0a45a4460fd96"],["/articles/somethinks1/index.html","9c9165d878a66bc1378bf7c0d5f9b4f7"],["/articles/terminal/index.html","a8d1a117e68727b29083b6251181e267"],["/articles/terminal2/index.html","637d32ba7bc93053476168cf13611564"],["/articles/test-mode/index.html","582659e5d499deee72f0f5ab804a6e08"],["/articles/test-polyline/index.html","b6357922c7337ec974827aaf58465d00"],["/articles/treap/index.html","c63de2d311811e71fe63286f571181c7"],["/articles/tubaomb/index.html","18e0030b510b5e1874554b23e31589b1"],["/articles/use-hexo/index.html","31917ce50dddca21aef376a69aa0161d"],["/articles/use-hexo2/index.html","396ec2bdf201b6af42942ace432027c6"],["/articles/zkw-tree-algorithm/index.html","d971207e87c46e76fab03474527478a2"],["/articles/zzWA/index.html","951ff0f31045570e4cefbe59409ad72c"],["/articles/「LYOI2016-Summer」一次函数/index.html","f6fc5e94cb7313f8f9913d83d4e91acf"],["/articles/主席树详解/index.html","f98098b6b94d74935fa6c8e072727453"],["/articles/分块-P1471/index.html","19fe8cc41af8004d7b30e21d6097964e"],["/articles/可持久化并查集-rope/index.html","27ac0781df2fab382e57bbed4df1a073"],["/articles/复数表示/index.html","dc75ae701cab6560b6e452ffddc10896"],["/articles/洲阁筛/index.html","b1b15b4c22c58f280b7f72a31ef2c472"],["/articles/生成函数/index.html","d91f0c5588fce07494b1feaf54c73d2e"],["/articles/网络流-二分图最大匹配/index.html","4fe288ec786b1901b200ca3160ddb5c2"],["/articles/自然数的和/index.html","7f4eccfd363000084e6ca5e84c79153d"],["/categories/Linux/index.html","4bae32e23e45fbcad2e3277b10752872"],["/categories/OI/index.html","8811a34ee77848ce5a4c3bbdc6a0e53f"],["/categories/OI/page/2/index.html","dba09a29a20bb5dc037c5c954b0ab727"],["/categories/OI/page/3/index.html","4b064bcf88adb298fb062bdb78a859fe"],["/categories/OI/page/4/index.html","c918e9b940d3fab5865c742748d8a938"],["/categories/OI/page/5/index.html","1fc54926ca699db7fe1a98fac374fbbc"],["/categories/OI/page/6/index.html","f1a9086fdc1c01eb937c7f2741bfaeae"],["/categories/OI/page/7/index.html","76eb2483b6e9d0971f1b55ee06d76198"],["/categories/OI/page/8/index.html","22d2e9e2c3671a17b13965f3b79664e3"],["/categories/OI/page/9/index.html","75b500098903cb4c51bc4656ffc6b6f5"],["/categories/hexo/index.html","bf38f1e42c6f8349ef42612625befe75"],["/categories/index.html","652f79955570c91dff0ee6f891aafea1"],["/categories/随笔/index.html","78134a1d713f0a49724a3944ab83b6ff"],["/comments/index.html","58a2c20df60aa23b83b5c41174b1482b"],["/css/main.css","70189a27973e6c2492b4b95ce54a3a2f"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","10f379f265ed63806e2fc4f6af00f4e6"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","f564da06942f11c0d1bbfce58ed23fa5"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","cbcf832cf11dad0630192551925f97db"],["/page/2/index.html","e045ca958461c6eb7d796d9b9c52ca9f"],["/page/3/index.html","a82ebbed7ea5a8ce89838a1efdd999d4"],["/page/4/index.html","4bb77178e3a171a0c2b28631b5fe2cfd"],["/page/5/index.html","e77791d29951439d2a1530dc7e6c3e4a"],["/page/6/index.html","03f2da8abbc6066557ad85c189467a1b"],["/page/7/index.html","80b91cb1088d2c40de4f02fe497ef7da"],["/page/8/index.html","e3c93b403435453360a5858bae9554e6"],["/page/9/index.html","64fdb3aab159032814a1eb403ef3ccc5"],["/photos/index.html","15cb33cd4d5702e9911cd36075d99cab"],["/remittance/index.html","1e708003c36439506fab0b9f9617e9ac"],["/sw-register.js","4677ef18556911cdd9cc6197d3f60588"],["/tags/2018/index.html","7bd5af271aa6bb8e9f480a6545680b0c"],["/tags/AC自动机/index.html","e1c525ab55a3dd0edce287010ff585a7"],["/tags/Algorithm/index.html","4a8d2da8d2b65d1426b744aa584a5dd8"],["/tags/Algorithm/page/2/index.html","2dbedd85e8f86f8239a903d228496829"],["/tags/Algorithm/page/3/index.html","c4c8e1a65b453e9f2b377b86de8641d9"],["/tags/Blog/index.html","8f40ab580209f56b0c3b5e49d50b3ee1"],["/tags/C-11/index.html","e78ebc82a716c5be0ed04d3ac57fa543"],["/tags/CQOI/index.html","50ce1ffdd609d00eb240bba60f0e7b5a"],["/tags/Chtholly/index.html","63a7a573168e5bb5c373139fe4697041"],["/tags/DFT/index.html","ae3b3d55554114d457d465f132538c0a"],["/tags/DP/index.html","22218e7d62797f191144f96ce91a79d6"],["/tags/Dinic/index.html","d4ccb3108a4efa5c5ed677d41ed0b109"],["/tags/EK/index.html","da863b9c17e7d61f122c1b745f41906d"],["/tags/EK算法/index.html","778cf7844f2ae5f2f74bf7e1742237c6"],["/tags/FFT/index.html","f90fa4f4da9006f926e3c6a8fe17d809"],["/tags/FF方法/index.html","2533599bcf57180b64c9509a2afa0ee5"],["/tags/Ford/index.html","406662878c132a75a044a516346903b0"],["/tags/HLPP/index.html","3ceae13cc00ab1a6d8e71c1471df218f"],["/tags/Hack/index.html","2eddf4b31e6302bc73b21e76bf1534dc"],["/tags/IDFT/index.html","5dfe4ab017165814932c47b403ec753c"],["/tags/ISAP/index.html","666cb01dcf22275fb10d98bc82b84c5b"],["/tags/JSOI/index.html","e4cfc3413d6b6d75282849aac43cd171"],["/tags/KMP/index.html","c6fe3698d8df95ca61e567442a334e1b"],["/tags/KMP自动机/index.html","865690208feb2ec7392273f2d7325aa7"],["/tags/LYOI/index.html","c157358ab55fa13989aa69d0cf8f2245"],["/tags/Lemon/index.html","8c72ba628bff6c7887e064c0f572f734"],["/tags/Lgy/index.html","40c43897782dbc7790eae1f6f3e4a0f9"],["/tags/Linux/index.html","67ad2673139aa3b7854e94af24f815aa"],["/tags/Lucas/index.html","aa1b0eaf005c14b16a6cb19dce6c46b4"],["/tags/Luogu/index.html","29d82f7f84e1c5493426bf195828c682"],["/tags/Manacher/index.html","15e537bac39930d81b7f368c20c2b5c8"],["/tags/NOI/index.html","4ed5fb7214be0a58a1dadaddb41df3a3"],["/tags/NOIP/index.html","aedfe5c4a9c092dc656741845ab8c1a2"],["/tags/NOI导刊/index.html","9360adf343c85ad376c9888fc2373da3"],["/tags/NTT/index.html","e3238a8a7b27ddee7ab23149a83c93a2"],["/tags/OI/index.html","acc21ee94943b5cd774e93ef0c041f17"],["/tags/Problem/index.html","5c04dfcf74d158f1ba93736bfcac9cd0"],["/tags/Problems/index.html","e1bd0fca303e1ce7b183c32be81055e6"],["/tags/RP/index.html","880bb7749b1cf2a668ff3efe279fdd9a"],["/tags/SAP/index.html","06191658e981148cc253708b0e1c93e5"],["/tags/SPFA/index.html","1b55d1c717639c6c036a285671165016"],["/tags/STL/index.html","b0c05750db6e487e95a1661daa15ba8f"],["/tags/Splay/index.html","7a7f29767a2cbaab8f899c633d982f21"],["/tags/Tarjian/index.html","48dec484bb098093b709ab6583291242"],["/tags/Treap/index.html","bbe77793bbf3738920277eb4ab410e2a"],["/tags/Trie/index.html","e2004ddce96767b8f9afce0b5484294b"],["/tags/USACO/index.html","036b30291c0b13134b7510ef5c8cfe2f"],["/tags/ZJOI/index.html","8bc6537ff888f5217ed0844786533528"],["/tags/blog/index.html","8dd2018c483ddfdc8de5abac1df088c2"],["/tags/bzoj/index.html","57603490f5e5420d0f5504e129a6b03d"],["/tags/css/index.html","4775d9006f49320f5676a7c6e2ed1c47"],["/tags/dijkstra/index.html","0da16bfe3ef0eded935778bb5bea5661"],["/tags/dinic/index.html","a0dbfbec88f128273ef79fa026693ab4"],["/tags/fhq-treap/index.html","6dc476b0500818625e171a055567ddab"],["/tags/gcd/index.html","99d0127b0afe2eeaacffd33c062be48d"],["/tags/git/index.html","a55d779e1236b1bdfcda3a5a3fe44ead"],["/tags/hash/index.html","60fccae6b493c5905b2b54e2b0579301"],["/tags/hexo/index.html","1dc543412b192ef9cf67d51286378beb"],["/tags/html/index.html","f2c95fdf723e576c3f04946e5c25751c"],["/tags/index.html","b78e8d0e344ffd24118293d18e7b0d4d"],["/tags/lambda/index.html","c042ca288e35f2fecf7573ec07b8e35c"],["/tags/luogu/index.html","7112fb830feddb7db34c4a3b7d1f04a3"],["/tags/lyoi/index.html","f6f55e8e1e95823bf8bcdcae9236bbd7"],["/tags/markdown/index.html","26f793c2e60fcc3c9d5a17feb862f333"],["/tags/problem/index.html","67471a03075fbcfb1f7f25eec4e92006"],["/tags/python/index.html","0d5ab1a2532e7c83e127be5f24ae22d5"],["/tags/qbxt/index.html","7a10877f3f4d5a8cb5014fd4fb44ef4c"],["/tags/rope/index.html","ba33400a76072384c1c1cbd40d13de30"],["/tags/spfa/index.html","a62e4a5132b6a9499f89d0f9e6694ac3"],["/tags/system/index.html","513d6f12787c65f2e645939b075306f7"],["/tags/terminal/index.html","bb1d2225bff5b0115890608f7d309ced"],["/tags/zjoi/index.html","988fc111e0a16a406a6c2e22b8957cc2"],["/tags/zkw线段树/index.html","eeb54a82dd4800f9a215840d14eede64"],["/tags/临沂一中/index.html","7ab1c5a0cb0a216a099bf6635de31300"],["/tags/主席树/index.html","ae0bc960d117de86d14d7f3c8ea7575a"],["/tags/乱搞/index.html","29f04f3d7cb2223fd996e7338b12e687"],["/tags/二分/index.html","eed30bce7c0eb2f91731fdc3e3636aec"],["/tags/二分图/index.html","c3987a9593c70ee6dc7854b19bc80320"],["/tags/二分图匹配/index.html","c06d95754255d1b77854a493bbc70062"],["/tags/二分图最大匹配/index.html","2d04b183c4e7de2ca34490dcd01b1f45"],["/tags/二叉搜索树/index.html","2c8d5daf2b7972741dd9d6f782925a1e"],["/tags/二叉树/index.html","c69cffe8eb346d46b95d76f1088cf1aa"],["/tags/五校联考/index.html","95ea7c7a7c61ada46a1d5edb19c0f869"],["/tags/代码规范/index.html","a03a3e7f06ab4cdd31172f4ce736a18c"],["/tags/优化/index.html","3244872fb7a21373af97ab75dc7c89ba"],["/tags/内核/index.html","f64769a265b083fdcc4a9f9003010d0a"],["/tags/内核提权/index.html","eea160292bc459de4f455d4362959c12"],["/tags/几何/index.html","7eef8ea88224fc319e4df3addc304d7f"],["/tags/凸包/index.html","0473fa78cba8ddabfe40bcdb4330c3c0"],["/tags/函数/index.html","f8c6f3b5bb7e1d7b61be3495bc5e4dd5"],["/tags/分块/index.html","50809f8db0e28ee000de135c89f8d32a"],["/tags/初等数论/index.html","2237d701f47ad44770745173267da331"],["/tags/前缀和/index.html","2806ddc7b20d9f005daa0f583e19aaed"],["/tags/动态规划/index.html","b5231384bf2a31e673de9ee58c15a5f7"],["/tags/匈牙利算法/index.html","433eee745c3cdf9a43efaa88e441364b"],["/tags/区间/index.html","e2cd453efe725b0cdd6f5be00a5cb8bc"],["/tags/区间操作/index.html","8c260e0bad1aa225a65c8fba29a1b12c"],["/tags/区间第k小/index.html","fe3ac215368864eaf12819dae8f84181"],["/tags/半平面交/index.html","e4a0b23942e8fa29556ab560b0e1e4d8"],["/tags/单源最短路径/index.html","9621de3fc07a1dc7cbe07f6e0c1ac4ad"],["/tags/博弈论/index.html","27fb02ad57c55c5186108cd815f79143"],["/tags/卡常/index.html","b841de8c951c2d83c23acf639b4f2650"],["/tags/卢卡斯定理/index.html","f3db5b9eb4798acda9ac4cc530a41640"],["/tags/卷积/index.html","545df47903cd4b7f914c6e794e2ab0d8"],["/tags/叉积/index.html","db81d5989165efddf1a137fef8b34500"],["/tags/可持久化/index.html","d9f2ff255a09103fe961fd4ae9e9a555"],["/tags/向量/index.html","def6bed477a79a891e7a0b2e99de462f"],["/tags/图/index.html","16e307d6b1d12ad5aec54b2aa4691df7"],["/tags/图论/index.html","272efff7b397544077b671371f937891"],["/tags/块状链表/index.html","d3742e0c6646614ca8a05f271f6541f5"],["/tags/增广路/index.html","620582e442cceb203182d04d90d482b2"],["/tags/复平面/index.html","9211ea284f3125b2043fe4b0dc09d07f"],["/tags/复数/index.html","73fc349589c070befdbce461720ca83e"],["/tags/字符串/index.html","9a5e8d486052d019da04cdeda10cb060"],["/tags/学习笔记/index.html","befcbc0d355b0de9decc14346cec124e"],["/tags/常数优化/index.html","1fe45910b26ebe634846d628f086e6ed"],["/tags/平衡树/index.html","fc1b7712229d8d8defc6ed7e4447f057"],["/tags/平面几何/index.html","3bc0d8d13bfa75631bcb1427edf35619"],["/tags/并查集/index.html","666b4549751c4832e812ddda82aae340"],["/tags/强联通/index.html","8906ea6609049992cf343e70b99a8c77"],["/tags/快速傅里叶变换/index.html","c8c11e2295090a9d7b08c6d7a0c04e15"],["/tags/总结/index.html","9f631cd6e1f5926ce97731235bc94a53"],["/tags/感悟/index.html","71ef8620d93cffc7866488b6f0aa019a"],["/tags/技巧/index.html","8762f28cdbedd47f0298a2230c120ed2"],["/tags/抽象代数/index.html","7040fec1a3682eaa6b8778b98c0b50d1"],["/tags/教程/index.html","9dcd04483da586b4cfa946860498e1bb"],["/tags/数堆/index.html","7f77ba41f64f694cc9bce4d404686808"],["/tags/数学/index.html","95ba4b2d71dc5e2a8b05b99d2789af65"],["/tags/数学/page/2/index.html","0781060d460d34a082113c2d8c06696a"],["/tags/数据结构/index.html","a38aea7bca295ff3ad30ccf1e131e8f6"],["/tags/数据结构/page/2/index.html","623adcb8b1fc7f31ef1e4fcd4a69c60a"],["/tags/数论/index.html","1571a021e711db93c761f6a8b9070512"],["/tags/数论/page/2/index.html","9d29e40a228b611493861a4587dd0193"],["/tags/文学/index.html","a8773a2e89a065b844976b8adf927aa9"],["/tags/方差/index.html","6e42f58d22a8aaeb121492a725bd7a36"],["/tags/智熄/index.html","cb2036a7e249e131376340324a02457a"],["/tags/暴力/index.html","5ce5fe280ae3df37ac81ef95f0f0b335"],["/tags/替罪羊树/index.html","265c214e4aa47e5c85f34d79b12a7af5"],["/tags/最优化/index.html","78e6233dd1ce5656e354bec804e80c59"],["/tags/最大流/index.html","446a21c550f02941b525ce0c36d858a1"],["/tags/最小割/index.html","7f78f4a89fe07279a2aca0ea0ef029b9"],["/tags/最小割最大流定理/index.html","580e5d9d0e0be20586643bc6f618a4df"],["/tags/最小生成树/index.html","76745c33882235aabc222778af12e6da"],["/tags/最小表示法/index.html","d6b948ebffc36aa72bad81fedc3d7c77"],["/tags/最短路/index.html","d1ceb597ec151dd251ea480b58d6e9d9"],["/tags/最长回文子串/index.html","1173cf2a57d377b32ad7418d455d7f13"],["/tags/极角/index.html","2e8707a806748b29658e1f7a24ee190f"],["/tags/染色/index.html","53d9c99fe0fbb9204b97bea02f00cca1"],["/tags/栈/index.html","f67e517ef7592bc2b0b7eca3a66f1bc3"],["/tags/树/index.html","1a7ad6d748b270342ffe867c599e6cd1"],["/tags/树剖/index.html","34c2d955200b5113f2f9b19f2242cff7"],["/tags/树套树/index.html","dcf4abe674c1cdafeaff41f4f010f58e"],["/tags/树状数组/index.html","f6c147a09a20540b778d806814d259af"],["/tags/树链剖分/index.html","7b20e3eeea9206986fda09fef73bf151"],["/tags/模拟赛/index.html","b81d5ee58b5f59182c9b2afb8f0f233f"],["/tags/模拟题/index.html","9f017675f326270de9de15c9c08cdb29"],["/tags/模板/index.html","d6a5ac57b72ae9d544bf50a6856f60db"],["/tags/模版/index.html","d9c74ae6be1bac0a1ac7b6e0438c8ebf"],["/tags/模版题/index.html","41d7d02e0ca8b7d65a5a9c44a63d1393"],["/tags/欧拉函数/index.html","f989aaafcfc09bccea2aa062bcb2f0bd"],["/tags/欧拉筛/index.html","8baeb2c782d2f6e85db648d600d0ede7"],["/tags/毒瘤/index.html","f6b9ff5c9cddc2bdea6dc535bfc5db10"],["/tags/测试题/index.html","44b9d4a0b0e9aa4e72e0cb573ea66ddc"],["/tags/济南/index.html","cd005dc1b931053b871168fd88703915"],["/tags/清北/index.html","f6e22e89973b177cf10bd6f69a1f272a"],["/tags/爆零/index.html","626cef5ee7865fcc95d1e631965a4e30"],["/tags/玄学/index.html","6fbee177bb5e44c37bc28f69978f7f54"],["/tags/珂朵莉/index.html","a9191cca24c5f1058accaa6989b3e33f"],["/tags/生成函数/index.html","a09bd48080d4e97e8ec200b2413b40eb"],["/tags/瞎搞/index.html","e71a9b860d9a24f1ec6681f12f2aa406"],["/tags/矩阵/index.html","5cb13de6579c4f4f1712a7120bc21a16"],["/tags/矩阵翻转/index.html","bee2bc999d02046be2e030a0162f922c"],["/tags/算法/index.html","3fb1c77d69fb7eaf41a9c74cde71f862"],["/tags/算法竞赛/index.html","9c34cccb31b8ae7cdb1b86f918f9ec60"],["/tags/素数/index.html","1104abdc2e28ccedb186feb8742085a6"],["/tags/线性基/index.html","d74121fa94404efb2103c6e8e04a3c3b"],["/tags/线性筛/index.html","68fae477b410345425ba52d8db18711a"],["/tags/线段树/index.html","d63876be77a2b8fdb17886726f702017"],["/tags/网络流/index.html","1c4c6081a7a48e47d873bf46e6a3932d"],["/tags/群论/index.html","4f17e8bdb3e8c39672c0fd5968c08922"],["/tags/脚本/index.html","d0917314a3906002f019f621995c9b63"],["/tags/自动机/index.html","bb3a445176452f0b9c81454bbd1fe0be"],["/tags/莫比乌斯/index.html","2076b8793bf2e290c504b9d50fe46236"],["/tags/莫比乌斯反演/index.html","572e4c9616e74107ff0c741c210bf8e6"],["/tags/虚数/index.html","16357ca281b37fefc629cea2fc125c54"],["/tags/计算几何/index.html","496c7a63acee5e3854bdf299b4bdafbb"],["/tags/证明/index.html","1541e64ef74cf8fabffedfb7dd449e61"],["/tags/评测机/index.html","40245e1e1e08ee6c68ef29114229347b"],["/tags/诗/index.html","a5ef0c4312372c0fecf122998ecf888f"],["/tags/诗歌/index.html","bb2c90ae17f24845f2b0f5573df54e7f"],["/tags/费用流/index.html","ecd519fda079cb029d56977031e3846c"],["/tags/路径压缩/index.html","c31626b8992c0658f37ebedd3b71fcc5"],["/tags/逆元/index.html","fead239f0bfe126578307fd8e7c5e720"],["/tags/递归/index.html","4fccc87d5f69b81a27a596ae9e575dbf"],["/tags/递推/index.html","7fb5f41d50aaf3adef040163f523b14b"],["/tags/邻接表/index.html","f995e969b65acf36b460560c03a383d0"],["/tags/随笔/index.html","cad585fa4a3c0c1bbd692983f8e791ef"],["/tags/集合/index.html","53596c709910fa228c44bfe26d3f2ff8"],["/tags/集训/index.html","6784321ef59f114cc15c6f1dfb882383"],["/tags/非旋Treap/index.html","d594502bbf29ca3faf475e0de1727243"],["/tags/非递归/index.html","9527b5a1e68d88fd616f47389e57c558"],["/tags/预留推进/index.html","c1da4526e49fbca7dc040e488aa05a5a"],["/tags/颓废/index.html","b2ebf2db96ff7fc0d711a7f44a59e2a8"],["/tags/题目/index.html","e046555a4bd77e75c3d53496cd2d2995"],["/tags/题解/index.html","7271f25cc2fd1397aca88ef9b10a479a"],["/tags/题解/page/2/index.html","89afe7fcfedfff665738c5b5728eef47"],["/tags/高性能/index.html","556da67d3dc4f5c6a252f4304d5e58b0"],["/tags/高精/index.html","ab3d4197b812828e736a72d15c5c0bb6"],["/tags/高精度/index.html","665ba1958c5527259e604ff57536562c"]];
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
