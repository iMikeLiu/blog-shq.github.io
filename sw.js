/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","b29aeb77b6c9d414435114919f5ad0ab"],["/about/index.html","e0f123d26b76e59a7062c040fef534e8"],["/archives/2017/12/index.html","835dd5ffb6ae54fdb822f63f00752923"],["/archives/2017/index.html","e8ca1e8ed9e5a6f18919156fea28ba3c"],["/archives/2018/01/index.html","39720389b9dc9260bf325fed21715b03"],["/archives/2018/02/index.html","0633efeb2529386acbdeff8d06f6d2ed"],["/archives/2018/02/page/2/index.html","a9548b7dc206421a94da9dba846dc75a"],["/archives/2018/03/index.html","958994d70874efd901330f0eb222367f"],["/archives/2018/03/page/2/index.html","e2d43e1108fdddae8dd3b6ae96ce86c6"],["/archives/2018/04/index.html","ecfbc4e9c83c236ae265f4888b4634a1"],["/archives/2018/04/page/2/index.html","d2a72c2e3f73d59b9aa3b03618763e52"],["/archives/2018/05/index.html","4f24de2986d81f7b33fbcc3ea5d7de58"],["/archives/2018/06/index.html","b91a70f82e3ee8bae47febec7708aef2"],["/archives/2018/06/page/2/index.html","8c81f54a79695a988ad006edb16573bb"],["/archives/2018/07/index.html","d77a548c8ac51153409c3954239ad1af"],["/archives/2018/07/page/2/index.html","1ac660814429cd8c1396db5917688873"],["/archives/2018/08/index.html","54c90fc4195cbe8dc436c61977450bf8"],["/archives/2018/09/index.html","4f0d8297846fb344d8c1272996d82715"],["/archives/2018/10/index.html","5ff0785c69fff030088df12aa67d4ebf"],["/archives/2018/index.html","238a52ea11fc425f2051cea966e33d51"],["/archives/2018/page/2/index.html","0c171a56a911296fac830ca13ae837d5"],["/archives/2018/page/3/index.html","8c2382616827a275b240446b94496c63"],["/archives/2018/page/4/index.html","dcc365a09c2ad61d6f1c820594c6014c"],["/archives/2018/page/5/index.html","437cd6c46cb9d6f48382051c42d65f0e"],["/archives/2018/page/6/index.html","24f9e61d7419c2c729227d8f1b541c58"],["/archives/2018/page/7/index.html","ca293daf26676400b623dc00efa5db40"],["/archives/2018/page/8/index.html","0b74e65e225c15860e9a8643f8429379"],["/archives/2018/page/9/index.html","d6fed6979f23d9c0be52e07ae10fe014"],["/archives/index.html","f8ed8d39cc561c99fd4d4f29a66f98a7"],["/archives/page/10/index.html","88ee234420309f8a804d132ee22e4dd4"],["/archives/page/2/index.html","649c185d7647e3b567717fd8686917bb"],["/archives/page/3/index.html","48d0a8545a038287c2fb791982abeba2"],["/archives/page/4/index.html","f81af806413d355f0b139697863af6ef"],["/archives/page/5/index.html","2f23fe3e9adc3f7b1af114113c4b574c"],["/archives/page/6/index.html","9e2b5e098948416fddb21a47f37aaf6b"],["/archives/page/7/index.html","09cb8a3625a6d38504109a827ee20135"],["/archives/page/8/index.html","944dd5c5faf962d749226022e363ffaf"],["/archives/page/9/index.html","ff9c6acca48995fb31bb554b6148da3a"],["/articles/18-4-27-things/index.html","fcddd6348b8d7de5fb35f9119e8e52cd"],["/articles/18-4-29-test/index.html","888ccac5d54b1bd6750af860f5be9d74"],["/articles/2018-五校联考-Round1/index.html","71cd5e277de88120eb93a9504f89b757"],["/articles/BigInt/index.html","18e86b326a9fa87d4fbbbe2eedab3fbe"],["/articles/CQOI2018-九连环/index.html","8f36deefb6664dea9a983c9b5d691cb5"],["/articles/Chtholly-Tree-ODT/index.html","5db7c68592f2b031365b0ababc0b3b1a"],["/articles/Code-Style-for-OI/index.html","25d71d9eac4956bd975d6912bf3f6f05"],["/articles/CodeForces1051/index.html","23ec5724c79f7f5616602aaf3a050c69"],["/articles/Computational-geometry1/index.html","66383c86f56436dca91110d7c9c455bc"],["/articles/Computational-geometry2/index.html","ae3bc0e12ccbe654c1ebd4132eea23a6"],["/articles/Computed-geometry/index.html","f2b3802a83b5176338fadcf34774c3b9"],["/articles/Dirichle-product/index.html","01d01fb5b4e282d2dc9fb105b56d793b"],["/articles/FFT-study/index.html","c417652a22056eb3230e812c46c039b5"],["/articles/HeatWave/index.html","4cc9c327021f3315666554adf17ad785"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","0e22c431ed30258852d44d64b9cf5f97"],["/articles/JSOI2009-游戏/index.html","f1fe1cc6f4f2cf2a6ad6d88c3ab89f11"],["/articles/KMP-AC-automaton/index.html","2e6eb4c941b2c17be92b0ddfad187f85"],["/articles/KMP-AC-automaton2/index.html","5c852c69785d75c1514598147d5a86c3"],["/articles/KMP-AC-automaton3/index.html","d0dfc890a0757755da43460156431bb4"],["/articles/Kernel-privilege-escalation/index.html","fe71a237ec616baefa164c7f93db05b2"],["/articles/Linear-sieve/index.html","7b42e2b927e71f3509087ab7de0b8957"],["/articles/Lucas/index.html","edc7294a0a5b0f95d9d6c0b2ede74105"],["/articles/Luogu-P4276/index.html","8cf03a87a24f6a6aacc779fecd735cce"],["/articles/Manacher/index.html","9ccf39d388999afe098b6d11f7b4a586"],["/articles/Minimum-spanning-tree/index.html","fd0361c44d67afe8d8bac8fb1b2eebe2"],["/articles/Mobius1/index.html","cb094ce733ed70427f78b55c7268ee44"],["/articles/NOI2010-Plant/index.html","a06b1d79421c2365f232e70fcedce82b"],["/articles/NOIPreliminaries-Prepare/index.html","796dcc4e4ad38af5dc24f97f075bd3ca"],["/articles/Network-flow-Algorithms/index.html","e3e04c2ffcbbee425c4cbc5c43a008ed"],["/articles/Network-flow-start/index.html","b24a76953a14723cf1033ccbaec37e45"],["/articles/OI常数优化-进阶/index.html","dac94f5f37b6dcae196f432aa126ccaa"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","64db776b6f4a17553f698c716cfb2842"],["/articles/P1984-SDOI2008-Water/index.html","b72406830568a160293a237bfd4c2699"],["/articles/P2018/index.html","b36bbbce70390e29cb0deaf8f1098bca"],["/articles/P3933Chtholly/index.html","315e1b7021c579e57aff098dfedc088b"],["/articles/Partitioned-Algorithm/index.html","1804bd4227aa2938a2c09019112b7157"],["/articles/RP-introduction/index.html","7e90bd192aeac61964f5f000201ee9cf"],["/articles/Sandaram/index.html","4fd3f127d17b143aa600a6d9cf64c89c"],["/articles/SegmentTree/index.html","36778e87adce47baac02b79013cf9a54"],["/articles/Segt-in-Treap/index.html","718c84fd8db245e41a4fd4ab5e1fc780"],["/articles/ShqProblem1/index.html","1d76c32f99bc76784a2ea003a274bfb4"],["/articles/TreeArray/index.html","0e38d79a431d98a0043e704775b49732"],["/articles/TreeArray2/index.html","827593b9f7820a4e578c9c27f9307e3b"],["/articles/Twelvefold-way/index.html","252e219aca54fd19d5c9df41b297fb9e"],["/articles/Union-find-sets/index.html","4897488590e623b4d1defe58d00aa21c"],["/articles/ZJOI2006-书架/index.html","9396977530b30c723029775fda550f3d"],["/articles/ZJOI2007-矩阵游戏/index.html","f2650b1dcc216469f02a727f1e7e6fc7"],["/articles/a-bproblem/index.html","4579a6edf1521e2beba445cb507384d4"],["/articles/aboutBlog/index.html","12d8bab5e6c91dc0d55ac9f035bd9b3e"],["/articles/aboutgit/index.html","4e83626b18f46d8f29bf99571d3522b5"],["/articles/autoAC-lemon/index.html","34e74ab8af53c34eea00f9dd8f9776c1"],["/articles/bzoj-3337/index.html","0af108d3fe1889371c23ec6e292b7666"],["/articles/cppteach/index.html","3d1e992e25a4b6ea2164ee29cd7fb505"],["/articles/css-QWQ/index.html","2a07f70a2f860f54a8e73a62a11e9034"],["/articles/dijkstra-spfa/index.html","0314ca2ebb4b30374280556aa3b78c9f"],["/articles/dijkstra/index.html","bb148eda93717e7fa898d23abe147120"],["/articles/dinic/index.html","363761704a781456441a6dd7973b1053"],["/articles/duliu/index.html","6c5260d87b6b10c03f270f6de52ce2eb"],["/articles/dynamic-planning/index.html","35b009b4907664c2df09a6b3f2d76676"],["/articles/elementaryos/index.html","dfb75c070fa9b31477ded6f5826c8fde"],["/articles/er-fen-tu/index.html","d890e8715c45be4520b81f76847aaa58"],["/articles/fhq-treap/index.html","07c2a98cc9c196c929111b1d3ac91bb6"],["/articles/group-theory/index.html","a5cddef60c790e61875e1527964414e9"],["/articles/hack-spfa/index.html","9684ba2169cbc96dccef8e7cf37cbaf0"],["/articles/lgy-from/index.html","a2f9577b73b0b18f9a4ea2fa870253b7"],["/articles/linear-basis/index.html","75d95ff159de24d7d0e43221ca09f26c"],["/articles/lyoi-Poetry/index.html","040ed97c83a0d728cf9a3e27a049904f"],["/articles/lyyz-test-2018-5-19/index.html","967029900507f5ba87758c22f31914a5"],["/articles/markdown/index.html","4d2c8b388a08a3be2836e5b53a204dc8"],["/articles/moban/index.html","142096af8f7542efe856998c7ea76bcb"],["/articles/poem1/index.html","996e64ad227fedc5b06cb2ab8b746ea7"],["/articles/prims/index.html","ad7a018c7f3a0c104a4ce1666072a5d1"],["/articles/python1/index.html","b37906a1da122aa0bbdd8c8bfa268a18"],["/articles/question-01/index.html","35c7bf12cac32ef23777d6c717daa67a"],["/articles/recursion-to-no-recursion/index.html","c9d79690bf2a5cec824d329b420070e6"],["/articles/scc1/index.html","09e9b6dd3cc49def2bdf71c4a1a3493e"],["/articles/somethinks1/index.html","3ba6c71272c1e39e8bd7a0b9d016ba3c"],["/articles/terminal/index.html","8d8d42eba97de5960642ec010d621436"],["/articles/terminal2/index.html","dede432cd35dbe68d8dcf0aa3a1f04d9"],["/articles/test-mode/index.html","616e0ae582434ddbe135eef1e458a1bb"],["/articles/test-polyline/index.html","e5986ba8d2a59901acb9ec6911797c7e"],["/articles/treap/index.html","f5fc109f7de63fdde7d49b43f1fefb4d"],["/articles/tubaomb/index.html","f5349f8782821c63d0329fa7aad65ccd"],["/articles/use-hexo/index.html","535139e8229796ab138949cb023cb814"],["/articles/use-hexo2/index.html","6c43fab87f6edf4b8ccdd9aacffe188e"],["/articles/zkw-tree-algorithm/index.html","93216fcf9080c73a85125f3263f83ccc"],["/articles/zzWA/index.html","d3395df09ed26f862f54e3df4d1be62d"],["/articles/「LYOI2016-Summer」一次函数/index.html","7df934d6b64c0744b9f283379b475ac0"],["/articles/主席树详解/index.html","68f762e1f685de2745e109ddaa4b147a"],["/articles/分块-P1471/index.html","789c0ded077822e76c44a399f0dbcd82"],["/articles/可持久化并查集-rope/index.html","5e35196aa2a920d245df2621947a32c2"],["/articles/复数表示/index.html","30dddcb72995214782ffb4067fe6c6f4"],["/articles/洲阁筛/index.html","071bcab15bd42a75979eaca41e3fd7b6"],["/articles/生成函数/index.html","50f470fffb3eb6aa1155b8a525c44b0f"],["/articles/网络流-二分图最大匹配/index.html","6edac4ea2044d75390e7dea4ba4487d4"],["/articles/自然数的和/index.html","9aaa7150f0f3de538ea8a69ff89955da"],["/categories/Linux/index.html","366f41e01d5ffe197c60969b6173d512"],["/categories/OI/index.html","da4489a5222c3534f4a63a48a79da002"],["/categories/OI/page/2/index.html","e07366fd670c799179232881aa3855b6"],["/categories/OI/page/3/index.html","9e0ed26631c1fd265852f9821a294a96"],["/categories/OI/page/4/index.html","4fea411cd45f280ada1903fd0ce51766"],["/categories/OI/page/5/index.html","3785efc6e6a98d59f3d551f75afea630"],["/categories/OI/page/6/index.html","d01603354d9f30cde3fa1364eb472383"],["/categories/OI/page/7/index.html","c7cd6b2b5904a06fed78032786b2bd63"],["/categories/OI/page/8/index.html","93f037e073b96910af380603abfc1654"],["/categories/OI/page/9/index.html","79457fe931ea66620c4d0e36b0a21519"],["/categories/hexo/index.html","3a51a9ac24ccadb15d6c0da32bda1658"],["/categories/index.html","1b381337da6a24515172d970639e0e0d"],["/categories/随笔/index.html","10b381851d5cdb79b56dc32ec47b1706"],["/comments/index.html","92d34be98211b9f9f19f8f7700adf8be"],["/css/main.css","ba2e8b5c31a8b6d93f6ce2f3809c5333"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","2a6091530bcdb2d78df4b446478cc983"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","1a395a70b0d8e924dd681872a6f604ff"],["/js/Error.html","49b9fe669681528cbbb39e3709a7941e"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","9decc2bc64f757b9e13fdd92ec6b4d2c"],["/page/2/index.html","c2aabce778b3839eeab727c08b224407"],["/page/3/index.html","a1d90058b02776f70b616e0abb9d0ce1"],["/page/4/index.html","e69c8ad1d33cb6505b67ef2f231185fe"],["/page/5/index.html","75bd78b9a855ed5b308b5bda9261906e"],["/page/6/index.html","cf9d9717379828ce44726f45af631305"],["/page/7/index.html","b08d418da909407f4b2c0a3feef7e970"],["/page/8/index.html","9425ee50c7706e70f1c6448d9d2a1f1b"],["/page/9/index.html","f41e159d4594ca7e7be097d1bd3ba7ff"],["/photos/index.html","40c9d98525a744ad407ddddc0032fa05"],["/remittance/index.html","2f33955eb04895afc624729d4de295da"],["/sw-register.js","d7eacb22c469a60628500b61ee96edac"],["/tags/2018/index.html","f69153778ba16a777a20e23c831c039a"],["/tags/AC自动机/index.html","2073352269bd98f8b4d86eeb56a19d5c"],["/tags/Algorithm/index.html","6d8ee19c514a4a02609d1be0170043b1"],["/tags/Algorithm/page/2/index.html","c8dc17559f0e7892ac2fc5fd37854b1d"],["/tags/Algorithm/page/3/index.html","3b2b06fe1ac4ea6a02c946f4002c62c3"],["/tags/Blog/index.html","f0e4a3dfcf581be01e59e3786514ae9c"],["/tags/C-11/index.html","07a441984ca68790e659921a050c3894"],["/tags/CQOI/index.html","03274a341c1a43782c80898e56b332a1"],["/tags/Chtholly/index.html","6569c1bf6d308e1a04c6cf9ea286fb68"],["/tags/Codeforces/index.html","66ee5e1476dbe35f8d3d9bc4cfd957d1"],["/tags/DFT/index.html","1549057fa72ab0364f8c76dbc0263044"],["/tags/DP/index.html","f3e8790f9301aedc1eecaf5c33a45f0f"],["/tags/Dinic/index.html","764a744157df761e1c10182ea6bcee68"],["/tags/EK/index.html","4016d7051f441f0bd96f0e6ca5b45b7f"],["/tags/EK算法/index.html","ae4b7fdbe64600ff4b4afad872fb5e1c"],["/tags/FFT/index.html","30c62deef933d73ea9187fa60225eae3"],["/tags/FF方法/index.html","701dbfdeb947a7a0cc846fc9f3a1023c"],["/tags/Ford/index.html","7436b852c2e5609549529cb0ae208655"],["/tags/HLPP/index.html","4c65390c2d1a758ed31cf6c515e606bc"],["/tags/Hack/index.html","3be20d91cd6e9d4dd5848cd03cbb7f9d"],["/tags/IDFT/index.html","2fa049aaf101b3d9329d8f6ba0916a42"],["/tags/ISAP/index.html","d36f7d21b3d4051299418acf42727c2a"],["/tags/JSOI/index.html","768e0cab1b93e94a79c02bb82ab12a34"],["/tags/KMP/index.html","aeeafa584e9986be7a11d1c9ac255180"],["/tags/KMP自动机/index.html","c49fc3fc40be21302dbfa5db7ee93238"],["/tags/LYOI/index.html","7197e656ebd1e58102949b79802aa330"],["/tags/Lemon/index.html","a92a23659d4dbdc2dcbeece8d93b9edd"],["/tags/Lgy/index.html","2401611a3ac322a66de76a819cc21661"],["/tags/Linux/index.html","60595b1f7e47abffe6c902d7bb88d0aa"],["/tags/Lucas/index.html","98b72ecb7602e3dac33ba692311ed1d2"],["/tags/Luogu/index.html","f43e10133ac86943a2650b795c000709"],["/tags/Manacher/index.html","a45bf94a156fd3f07cd2270db20f9004"],["/tags/NOI/index.html","a44bc3c6c542c710604678b1c8270573"],["/tags/NOIP/index.html","f716f156184bd86239d846ace7c64421"],["/tags/NOI导刊/index.html","99ea1c1b5f95e6519ef9936d0c97d69a"],["/tags/NTT/index.html","eeec68cf4010ad221df2fa9f62a95247"],["/tags/OI/index.html","6378a06b01677ccd93c90fe09ec02671"],["/tags/Problem/index.html","c5b080949d922cd384b5b077605b757f"],["/tags/Problems/index.html","a302d9ab5bd5da137a1c184c2a08895d"],["/tags/RP/index.html","146f12ccbc5aff7ab7009905c975e877"],["/tags/SAP/index.html","a61e929105b81064e69dec5098c30605"],["/tags/SPFA/index.html","32c0e1c88b137362035726ff5c5a7273"],["/tags/STL/index.html","c64695544d75d8a99eedbe54190b7b68"],["/tags/Splay/index.html","138ff51de73ca98018522d6157952f2c"],["/tags/Tarjian/index.html","0f315e283432cd279c6b34c2bf152190"],["/tags/Treap/index.html","45e758df9738a520097fb4cdc0cca025"],["/tags/Trie/index.html","a6b402ba067e9fbb02af0eac8398cbad"],["/tags/USACO/index.html","e160e4cbd2d1f298a004c04d2fc8be76"],["/tags/ZJOI/index.html","b64862c1028f7c438db2549282b8c020"],["/tags/blog/index.html","9a588efe3c7cc38dead28b509e74d8ce"],["/tags/bzoj/index.html","ca7a0bedb663e7e5198c1a8e9151c8b4"],["/tags/css/index.html","76ce17524989590f956595e0daf8306c"],["/tags/dijkstra/index.html","71da841b11d199307d19ec41a02ec513"],["/tags/dinic/index.html","3d63c4753f21d661cf0c7739e29e66f4"],["/tags/fhq-treap/index.html","704819c0899a69918ec9c1fc136f175d"],["/tags/gcd/index.html","4888a68a3e7a8d5a480f64433f8b9faf"],["/tags/git/index.html","f152414abcf03130c16cf0f8ee8a306a"],["/tags/hash/index.html","53c6df788a7d32f2a852d42c7d8d4586"],["/tags/hexo/index.html","dc234a5288645655efe74f365888185a"],["/tags/html/index.html","03f0ad237cf1671ec863201a5bbc354c"],["/tags/index.html","fdf5776b5bf1e0d629d460f35d65ac95"],["/tags/lambda/index.html","a51ad6560fa4499ad3d67bb3bc2d0603"],["/tags/luogu/index.html","06e9b5546c8262cbd8523e35d0428a00"],["/tags/lyoi/index.html","39826955959499d5aa24bd783c4f7f41"],["/tags/markdown/index.html","890944d4eaabb89d53705c41e843aea4"],["/tags/problem/index.html","52f3d757559178e8920d6b3aecbc7ea3"],["/tags/python/index.html","c910a46c03bf383f789af1be30304c59"],["/tags/qbxt/index.html","9c5b5371a6730d3e90936c7ad9762282"],["/tags/rope/index.html","9a2f16b3102df6df4f9285d1bf9ab02c"],["/tags/spfa/index.html","e0a457cb796f6db38306407ad966d767"],["/tags/system/index.html","58870f9a92b230dd883075952b3e8e2d"],["/tags/terminal/index.html","a2a7ce9f9edaaf3ed1e270c0fbedf4f5"],["/tags/zjoi/index.html","efb4027b0f3e953a253262ef1a9dfea2"],["/tags/zkw线段树/index.html","2f9c852f17ef04e440a70a02455362d5"],["/tags/临沂一中/index.html","71372f90fefe632c7ecaa24707db4378"],["/tags/主席树/index.html","196a64bde88e1396cc2cb19d17d3611e"],["/tags/乱搞/index.html","3035efa0e3383257ba41b89d09db483f"],["/tags/二分/index.html","23d1b3eacee7dcccbca2e7b531d386ff"],["/tags/二分图/index.html","aa6ad3341268e6b3f29f672287fcfd9a"],["/tags/二分图匹配/index.html","0445e180d4ce15012ba1337ebee76149"],["/tags/二分图最大匹配/index.html","8eea204bff90f7b38dda9d89dfbeb0a8"],["/tags/二叉搜索树/index.html","93503399470ad65766f82c544b523573"],["/tags/二叉树/index.html","d37f5e87b88c873181040536855f5be5"],["/tags/五校联考/index.html","7f4bab5ab25b4d561b17b5e4855e7027"],["/tags/代码规范/index.html","92849b9fa5a7cd173f088afb63bac36a"],["/tags/优化/index.html","8d31e705d7e2e7cd7f028df171ccb4c9"],["/tags/内核/index.html","d848ace428453a7991b7435c2584357c"],["/tags/内核提权/index.html","2f7a49b44e6a1691bbef632130607cc7"],["/tags/几何/index.html","0510082839d3fdd58cdb324afe818472"],["/tags/凸包/index.html","16d167413c8b7923f249118718845886"],["/tags/函数/index.html","7811675673b1df54a74e414751157f60"],["/tags/分块/index.html","dd1ef7d07a201887db486ae96c47e8f7"],["/tags/初等数论/index.html","ecc70f9e94d6c9822eb686b3ee11cfcf"],["/tags/初赛/index.html","4cb1a7ef05a2eb57486ff5dc689e033f"],["/tags/前缀和/index.html","470c1454bcf136449341b405d378c7c0"],["/tags/动态规划/index.html","d7aefba16e2a7604555ce7531b30d81e"],["/tags/匈牙利算法/index.html","089598389f79ea13d21954e1e40e599f"],["/tags/区间/index.html","d33c72b6b6acb2e0c74d7ff0af605b8a"],["/tags/区间操作/index.html","07ad9e3305244445102893bc3b7626ab"],["/tags/区间第k小/index.html","fbd23f49414a148b75ca1fe87bc94750"],["/tags/半平面交/index.html","898cc04c4bfa482e52d06f8228f0b7ea"],["/tags/单源最短路径/index.html","a7d884314f0a49995862f328ca966c59"],["/tags/博弈论/index.html","43eda3f835da857fde03f96b28b5b97f"],["/tags/卡常/index.html","aaedf2fcea85106698a555b2b3630ebe"],["/tags/卢卡斯定理/index.html","7da5b023ced8daf0e26f63d3a0f36a83"],["/tags/卷积/index.html","3b9ac010bf41898428f3d0b35ef22af7"],["/tags/叉积/index.html","2929be124e8260d3e5ba1aa007644412"],["/tags/可持久化/index.html","bd5c2e89c9d755daabca2a7b348184c4"],["/tags/向量/index.html","06a684ce2b4ee4389a922c2cd741e9ae"],["/tags/图/index.html","0827719f0739855217c9f036467aca1c"],["/tags/图论/index.html","1c49bca48f84e43d1a67688c73d8d314"],["/tags/块状链表/index.html","63d703d42cc65d183a54fa16d9fca8f2"],["/tags/增广路/index.html","daa150513cdbcae62df14d675a6eea65"],["/tags/复平面/index.html","534e3818908a56be8819fde5810b4409"],["/tags/复数/index.html","7fb069ab47c7aa7ef543ec03ae5efead"],["/tags/字符串/index.html","fdaaab88e21060c17b93ca0e6371a2d7"],["/tags/学习笔记/index.html","25699a7946d951405f395cb387654f08"],["/tags/容斥/index.html","55b317918e6c811043c538002225bd0b"],["/tags/小学数学/index.html","0b121de1b8a97eff476a94335038a94f"],["/tags/常数优化/index.html","3fa57ed355d9e75ecb3da67b71577372"],["/tags/平衡树/index.html","f9ca1fccb8431ffa0cadf4d8b5f4df54"],["/tags/平面几何/index.html","0f8fb7aab70085cf1fb2ef217e31173d"],["/tags/并查集/index.html","2fb4a4a8129e61051f1a9c2cd66e0e29"],["/tags/强联通/index.html","77455e80f6d3646f60209210adeffb48"],["/tags/快速傅里叶变换/index.html","e133eb67a7d41f2a0e03f42578370357"],["/tags/总结/index.html","1fbd2906aaf9ac3860a81c07f5a8044d"],["/tags/感悟/index.html","4f04654a82858e3fd5f29812f87b576c"],["/tags/技巧/index.html","cd625b6099b08071a946c9c74420b277"],["/tags/抽象代数/index.html","4be739a78044e19b2864c53c068994be"],["/tags/教程/index.html","c8678bc6a879dbdba32b06104ca9d528"],["/tags/数堆/index.html","a0d6db40e390f8898f292f591661c578"],["/tags/数学/index.html","05ddb7c56b3b324b274907b4b43d4518"],["/tags/数学/page/2/index.html","b69fa9f419fadc5769cc5d03dd6e1b64"],["/tags/数据结构/index.html","e3fc2b2660db3f573e1fef9da55b1863"],["/tags/数据结构/page/2/index.html","77105e4c0fe873778fb71e15fb07fc1a"],["/tags/数论/index.html","162bf72e442b33cf2341b2c9ecfbade3"],["/tags/数论/page/2/index.html","0a60d389645caa513a5581387bacc56c"],["/tags/文学/index.html","2ac7c8012213077100bb0ca9f34392e8"],["/tags/方差/index.html","3a72ab403d16c7f0cdaa7a0ece6d223e"],["/tags/智熄/index.html","7f05b8472e98faf8d4e26e843caee5d2"],["/tags/暴力/index.html","04a840f15abfb26dc1f6badd400a8cac"],["/tags/替罪羊树/index.html","8a13df767339257f11bdc87280f9d623"],["/tags/最优化/index.html","2268aeea4a06a1aeb20bdaa31c21f05f"],["/tags/最大流/index.html","44527e07d5f7aba2c09d7b1a53759356"],["/tags/最小割/index.html","5c62539312b2928bf6aa003f5b2d02fe"],["/tags/最小割最大流定理/index.html","bf2f02c073312046682b222cbac778da"],["/tags/最小生成树/index.html","8effeead6acf495daa8f037ddd65ab19"],["/tags/最短路/index.html","404441ec222b55b428ee61f34ef68e7b"],["/tags/最长回文子串/index.html","2e4d5a875fb8522dc3e9405807543926"],["/tags/极角/index.html","9e797231ab4a4b46b094d697bae9ddf1"],["/tags/染色/index.html","e9422dda7f2bbb20f565de94e650ad28"],["/tags/栈/index.html","8c55fee30baf422912f9a1a5d6b994f6"],["/tags/树/index.html","a694d688cde6586c18b1b07b7782843f"],["/tags/树剖/index.html","519167d7342bbd6916c4f365b37289b6"],["/tags/树套树/index.html","3d01e7c2161297bd4cae075ae40c5771"],["/tags/树状数组/index.html","f16727e6051a37b8434c3bda14d708b6"],["/tags/树链剖分/index.html","ae2739b0759f523f96dfed6e145a79bb"],["/tags/模拟/index.html","95b9788d30925a55199b8f5e08837f99"],["/tags/模拟赛/index.html","1628a5e13e6be506e902026fadb9e7eb"],["/tags/模拟题/index.html","16360815d3d614a58f122eee5c83be14"],["/tags/模板/index.html","d8e6d5868cae045c97957600726a6e5f"],["/tags/模版/index.html","359e88984a4baf22cbf4108c1499b4af"],["/tags/模版题/index.html","744ac6cfe7df2dc2627cc83030c0e17c"],["/tags/欧拉函数/index.html","a69a0cb5afff03a43a1fd4dd1f0bbd65"],["/tags/欧拉筛/index.html","a178564cb233d8d666cf2772210463ec"],["/tags/毒瘤/index.html","73361cc41d280744eb51833771c61f6e"],["/tags/测试题/index.html","d263ce23c33217c7a2ad5a3ded27aab5"],["/tags/济南/index.html","dbbdb3833b2d7ebbe37493255439082c"],["/tags/清北/index.html","b23cd3f6ff22d89b0cb8485941379ed9"],["/tags/爆零/index.html","090bbcff133d29cec0a1bae6c7ed7807"],["/tags/玄学/index.html","6d23d5d7ebe9ec1d8cbcb324847726b9"],["/tags/珂朵莉/index.html","085a735a81ea7882b849a4ba746f2112"],["/tags/生成函数/index.html","13f8453d4d7af264e5dc9e7adf670655"],["/tags/瞎搞/index.html","925aa14dae03dde224a226f4b70cb50b"],["/tags/矩阵/index.html","4985e0cd32c41da89331271ea801c977"],["/tags/矩阵翻转/index.html","a0e9895b8166d888e851551202c6d985"],["/tags/算法/index.html","f61cff9f4228ea7b168139f6c1e651df"],["/tags/算法竞赛/index.html","7f4cdf6e2424cc063c075a12bfaf01a0"],["/tags/素数/index.html","10ae39133e8ce3579bcc23dbde5daae6"],["/tags/线性基/index.html","6c6ce2cdbd237d5a70fd423b5309fc2a"],["/tags/线性筛/index.html","77e52467cec0eae9773b921f3109cce4"],["/tags/线段树/index.html","a6440656589f0744ae279dd1471f64e5"],["/tags/组合数/index.html","124196e57b7d12dd0aeba588bbc2b257"],["/tags/网络流/index.html","d12b31bb93226189ab9d7d0c3f3aaf62"],["/tags/群论/index.html","f85860952fd9b30361bcc12c898b08f6"],["/tags/脚本/index.html","41b15b8078ccf560ce6164575da020c6"],["/tags/自动机/index.html","fdb27751ecf4dd924a382e96669ef6e9"],["/tags/莫比乌斯/index.html","872c86d623ba769f787950c92a9e5030"],["/tags/莫比乌斯反演/index.html","4c5578e901f700f439364aec967ed6e9"],["/tags/虚数/index.html","a756cbe765dc699b4e8b25e54e7bda7f"],["/tags/计算几何/index.html","c738be2f087514b070057b26432ecd77"],["/tags/证明/index.html","7782ef36d945133a79efb2fdcbb3faf9"],["/tags/评测机/index.html","d4e770a67e0f1301416ac145f064bffd"],["/tags/诗/index.html","8c22d4c663641638ff0f144c212eff10"],["/tags/诗歌/index.html","f2e69198baa6d7729e967895e165420a"],["/tags/详解/index.html","31422e41279d73777ef9934f42ffb640"],["/tags/费用流/index.html","1d0ca3215d0097ecaa61776627948b62"],["/tags/路径压缩/index.html","9c53e28be6c5d38fe4ae5cd6466ad7c3"],["/tags/逆元/index.html","9b29be94b1be8eecc69de40bcb6b8c86"],["/tags/递归/index.html","5109f0d567e3f8423f226a17e8967493"],["/tags/递推/index.html","7c6a0b0a21f98ba2d9ad1af26645b202"],["/tags/邻接表/index.html","622b27c6bba2c096e1652574e4144154"],["/tags/随笔/index.html","4b8e65d75cfe1885085c8958039fe234"],["/tags/集合/index.html","b49b2545515b4897f0628408418cd60e"],["/tags/集训/index.html","618db97956730723fa76f2acdb562608"],["/tags/非旋Treap/index.html","268b4f90cd7837adc3ad0600a6d91302"],["/tags/非递归/index.html","ab81aded14cb946f006192ecc8b18b06"],["/tags/预留推进/index.html","f7e34909bf8840065ca2e798741f6a2f"],["/tags/颓废/index.html","943f107facc63b2b59200b76b571610a"],["/tags/题目/index.html","5d34e040cf7991312a48e3bfa44b06eb"],["/tags/题解/index.html","69611a85b675c976887b7e4e2c919a41"],["/tags/题解/page/2/index.html","ee008b50a828db0bd0f783987d87e908"],["/tags/高性能/index.html","9a8a5731d818b9e82ef1973748c7201b"],["/tags/高精/index.html","a1b2a8b38876aa30d45afa23cf02f7dc"],["/tags/高精度/index.html","8277754799399420445e872207e0f0c1"]];
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
