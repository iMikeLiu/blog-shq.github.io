/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","78f8d3c420a08f109d0d53815be58691"],["/about/index.html","fe5529f53e0a639f42a696b2535d0de8"],["/archives/2017/12/index.html","dac85d50c6924186a5c95d91ce80f822"],["/archives/2017/index.html","69263a7f1552e56365a4cc83c8d74495"],["/archives/2018/01/index.html","e30a18afa8d8ff739f0fd515dd82121e"],["/archives/2018/02/index.html","220fba09cc8ab22817b7573c3aab40f6"],["/archives/2018/02/page/2/index.html","f441c2a3fffa81672f2fe56e7ada713c"],["/archives/2018/03/index.html","54313a00feefadbc8155b0171975490e"],["/archives/2018/03/page/2/index.html","15b0c1a8eadd2de92dc6f2e21a0bfba2"],["/archives/2018/04/index.html","200ba1dea01fe41b37f49bf4b565be4b"],["/archives/2018/04/page/2/index.html","2f71ef2444cd8a59b5642b2d933bd30d"],["/archives/2018/05/index.html","a441a3847fb6b76ceded34561968b702"],["/archives/2018/06/index.html","5030672a92fac57814c9afbbdf2538bd"],["/archives/2018/06/page/2/index.html","42b59c9a40a7cb9899ecece13d078b19"],["/archives/2018/07/index.html","ada221bc0e233cff185ba505d4976693"],["/archives/2018/07/page/2/index.html","48e21408ac10807d3401856cd73b129c"],["/archives/2018/08/index.html","a7e7e6cf8902a1bdff11785fe2caed29"],["/archives/2018/index.html","3c84b913c7f9ad7c12808686e37b0b8c"],["/archives/2018/page/2/index.html","2530af8f4ffc84d5a55489eba0e2354c"],["/archives/2018/page/3/index.html","b6271abecda5591be09be7a8bae02492"],["/archives/2018/page/4/index.html","eb372fb39032ba692a7cac2efa262612"],["/archives/2018/page/5/index.html","a6991b0971ad8d7870dcca38305bc659"],["/archives/2018/page/6/index.html","202b7446b2113aae9404f6f0249f0003"],["/archives/2018/page/7/index.html","0a7a428c3eb9136b1c871ac52bc3d604"],["/archives/2018/page/8/index.html","5a11e8c055448e33def813a954f489a4"],["/archives/index.html","d8abc07f11ed9e0b2a6862ed39719059"],["/archives/page/2/index.html","c29cad7ab4bf43b5e70a24691fee3130"],["/archives/page/3/index.html","4842c4d53eb01ac4ab2df38811709cd7"],["/archives/page/4/index.html","23a30725e2f5fbb5b24271f21a56214a"],["/archives/page/5/index.html","1796789ee8ad5a2cb9edf797ab7d2169"],["/archives/page/6/index.html","47f84c9719077720fee43f0b1b74fd5d"],["/archives/page/7/index.html","b3f6a3ed5c1c27ec0e3481fab5137929"],["/archives/page/8/index.html","59ef06b6a4e3a774e6630ac28f37f261"],["/archives/page/9/index.html","526130335a95c2e3391b4d8493515bb3"],["/articles/18-4-27-things/index.html","b42c6240f606ee0383690850245334e9"],["/articles/18-4-29-test/index.html","e36f1778cdcc5c62a65ebb526c2f159f"],["/articles/BigInt/index.html","77dcef2d7903e73ba5993d306085e0de"],["/articles/Chtholly-Tree-ODT/index.html","9c76eaf8d228f17e2fedce0ceecbd488"],["/articles/Code-Style-for-OI/index.html","68fa0226a62d5955402fa99c90b6ea1d"],["/articles/Computational-geometry1/index.html","31c77b9ac6418ad0720f7b415d402967"],["/articles/Computational-geometry2/index.html","049e8c5f9f25d6f8df71eabb9e477b59"],["/articles/Computed-geometry/index.html","4d9a44cda47aa32e1ca717b49e9e76eb"],["/articles/Dirichle-product/index.html","b830cdfa80eb5285ebd2a7fc3b7b29c2"],["/articles/FFT-study/index.html","1c83477a5edd2ed8523c80beb4a791a7"],["/articles/HeatWave/index.html","c3191236ffa3041b9a69e18bcbce8581"],["/articles/JSOI2009-游戏/index.html","b890360b5166fa66664f455a5f57c850"],["/articles/KMP-AC-automaton/index.html","871e450f8811e14e6e152f2531935d83"],["/articles/KMP-AC-automaton2/index.html","31301f5e336017a1ff0cef426ae65c6b"],["/articles/KMP-AC-automaton3/index.html","fd76db814a0e80fa22820085e94be3fe"],["/articles/Linear-sieve/index.html","9f0d2a58b424148b32d9a3149fffecf4"],["/articles/Lucas/index.html","1652c5e2d2be2e4adc2d4848f825a77e"],["/articles/Luogu-P4276/index.html","680da2621d66a9a37ac7d4e91ea5cd3f"],["/articles/Manacher/index.html","86bfff28dda94eeae06366400fa562cc"],["/articles/Minimum-spanning-tree/index.html","0a7f0456ff3f6d4df429a15a5052f83b"],["/articles/Mobius1/index.html","164049a486c3be5e4e1d90384a026166"],["/articles/NOI2010-Plant/index.html","81980d1a65aae7ab47d00352eb535f00"],["/articles/Network-flow-Algorithms/index.html","bd4a82c212e202cfa85a134ed36ba5f9"],["/articles/Network-flow-start/index.html","1f7f58165386b81cfcbcf329529726c8"],["/articles/OI常数优化-进阶/index.html","fe2282cf77016975838595dcaae4f4ff"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","2a9fa4d06d524721fc3eb5de4a9037ac"],["/articles/P1984-SDOI2008-Water/index.html","7cd08e808cd2c7795a5ce59c67b019c3"],["/articles/P2018/index.html","4e1fae226794f4b616358337cc787d01"],["/articles/P3933Chtholly/index.html","dd3fec79618262dcf1fcd275399ed19a"],["/articles/Partitioned-Algorithm/index.html","d53cba0a4d18bf4be42ae0e1cb21da73"],["/articles/RP-introduction/index.html","59079602c44d3f4243419eab9558dd39"],["/articles/Sandaram/index.html","0bf02e8a380b921808b711380adba0d9"],["/articles/SegmentTree/index.html","a7c8ab9cea7770ca57fdccc4acd69812"],["/articles/Segt-in-Treap/index.html","38ef199f769e233c0c47bff1df5facd4"],["/articles/ShqProblem1/index.html","9a0afc44e7a1e615cd7d374c3084fdc7"],["/articles/TreeArray/index.html","1d3318752f2f82f226b838b8acc056c3"],["/articles/TreeArray2/index.html","3a1e63e2bc19f02429b9a027e1cd2f59"],["/articles/Union-find-sets/index.html","2929fcc54b730494f5e2a63347eeaa60"],["/articles/ZJOI2006-书架/index.html","8b6f9ffa0e916fe4bbf34a0c72d42de1"],["/articles/ZJOI2007-矩阵游戏/index.html","1ffe2fb1606eed8acb3c63ca44d6dd58"],["/articles/a-bproblem/index.html","f555cd5101f82f538be0fc37e6e673bb"],["/articles/aboutBlog/index.html","6c2f304af6392c79343060bf689d4cfc"],["/articles/aboutgit/index.html","5f411439d5f4fa44deea471bccbd39ba"],["/articles/autoAC-lemon/index.html","a1183e6571beace64621c872a02e4dd0"],["/articles/bzoj-3337/index.html","b743a35bcbeeec723ccbdb71dc9f803c"],["/articles/cppteach/index.html","c911063b697f612975db14f844905268"],["/articles/css-QWQ/index.html","f803237d36c10061b2bf882c403b0dd8"],["/articles/dijkstra-spfa/index.html","201c6a8b30bda212a5c61253f75ad6f6"],["/articles/dijkstra/index.html","4c110f820910b3cc51f25020fc10061f"],["/articles/dinic/index.html","2280d663bcce33db43cc813c59ff0a24"],["/articles/duliu/index.html","d0597c3258208e43c19703a4337e97e5"],["/articles/dynamic-planning/index.html","d023e533d9bee9585af857bbdd9fbf35"],["/articles/elementaryos/index.html","65ef6bac7f866ca6e88794fe3531e0a8"],["/articles/er-fen-tu/index.html","347ffd1e0fede03d9e5aee15a30fb2dc"],["/articles/fhq-treap/index.html","8975aeb35d57d46f86dfbdd87f5d0c2f"],["/articles/group-theory/index.html","6a1de821e558debb2ca341b4bd1453f0"],["/articles/lgy-from/index.html","53ca9ddfccd3e4c47444ae53a56c69ea"],["/articles/linear-basis/index.html","19cae7205521d3fd6427f4aff2a58d3d"],["/articles/lyoi-Poetry/index.html","6b7f2bddfed4694490e9cae59bf80499"],["/articles/lyyz-test-2018-5-19/index.html","d3fad384dd248c622e95c6accaf8d3a9"],["/articles/markdown/index.html","87e6afa12aa823338d3e3a7fe4737fb3"],["/articles/moban/index.html","e0c6754b6910d9e9fe94240b71a5ff10"],["/articles/poem1/index.html","04564ffb8183786a7b6010f3ff8fb006"],["/articles/prims/index.html","976bbcd658a4b18fd5eef6e758c55fbd"],["/articles/python1/index.html","16128d28040e8e4b349515f0d047959e"],["/articles/question-01/index.html","8f3cb4f059945e023b6f796691ed729c"],["/articles/recursion-to-no-recursion/index.html","98f81ebf2b7f3d04ea9cb4979456894c"],["/articles/scc1/index.html","aed2add9e6a4c9a813638c914b470fd1"],["/articles/somethinks1/index.html","a8e40b189cdb7d67f04e7052a9789440"],["/articles/terminal/index.html","3af0740fa93bdfb78fcb35f0191526c5"],["/articles/terminal2/index.html","d1162c22c5882037be6a2ab5ef115019"],["/articles/test-mode/index.html","9c58224e3bca622f45660e0b14264315"],["/articles/test-polyline/index.html","662790ef7e25a37f9960a68c3d6262e6"],["/articles/treap/index.html","af30f31e324f320cf1ce569fd6081e67"],["/articles/tubaomb/index.html","c2b84a0bafbe4076cc803e92898befac"],["/articles/use-hexo/index.html","a0b3005dac55b1566079998bf8bbea4f"],["/articles/use-hexo2/index.html","aca7afb5b2231c53f1d8ddc329a29d8d"],["/articles/zkw-tree-algorithm/index.html","048185e762cc6007c79a29a6e1fb8eec"],["/articles/zzWA/index.html","6157198aaa4aaaa1b4bc47fc9e138b10"],["/articles/「LYOI2016-Summer」一次函数/index.html","ea2635aa0b6084b9aa3779a78cf17d17"],["/articles/主席树详解/index.html","634ee2eefaf9d1398c7d62d0bef2db7b"],["/articles/分块-P1471/index.html","b4d278fb0532f204de410f49bc456c19"],["/articles/可持久化并查集-rope/index.html","85b3318384abbce4cf405ef7af9c931e"],["/articles/复数表示/index.html","63708ef812bbf9b2dd0fa88f7fad862e"],["/articles/洲阁筛/index.html","3a4cac415c97c00428e18462e6343cbd"],["/articles/生成函数/index.html","7dc37e4df0941db53a0821cdebcab63e"],["/articles/网络流-二分图最大匹配/index.html","4696fe2eb7da9c314568af55297060ea"],["/articles/自然数的和/index.html","a2801af134ea021b65a9e626bac216d6"],["/categories/OI/index.html","6e0605f1657a2cae1e5962fb6209c1c5"],["/categories/OI/page/2/index.html","dd60d4180a8474df0ec5104e102bd275"],["/categories/OI/page/3/index.html","d1882fd936e2b6c75f4081a3daf3f593"],["/categories/OI/page/4/index.html","323a127c5daf1934fb523e79b80962a8"],["/categories/OI/page/5/index.html","4c5535ca669fba8853265bb51c8439fe"],["/categories/OI/page/6/index.html","b56b9639fbcaa37b76cee3647564cc17"],["/categories/OI/page/7/index.html","3214e9ebaf7928febf78d5c488f5380b"],["/categories/OI/page/8/index.html","d1f958c8e4ecfd80b7cb487e8328942f"],["/categories/hexo/index.html","c807e619d8c5511f33867bc12add1f71"],["/categories/index.html","63926e0ad5b8ca096f090f179ab67eb1"],["/categories/随笔/index.html","232ec8d5140536324e833131b2c55af0"],["/comments/index.html","4637066117bd04b89a405b90e5286a72"],["/css/main.css","a632d347d0d5ec119cd15b92529926cb"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","141cdd2ebd371c10a2039568fe9682ec"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","b187b838a67191d10ed219f159491b8a"],["/js/Error.html","49b9fe669681528cbbb39e3709a7941e"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","63a303a2a57150826cc2d0bfd9fb75bf"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","a1f0b05f51271d047240645491caf587"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/2/index.html","4771f6d963a284b2d1b17cc115339478"],["/page/3/index.html","fe583d8c9f92d38f297cc99783383d53"],["/page/4/index.html","b957c0f437771b7f1f2d2401386518f0"],["/page/5/index.html","7d92cb330a69727024237758670aabbb"],["/page/6/index.html","43d4367447dbe50bda5d8856cb94d67b"],["/page/7/index.html","5d4316b257b8e2c88a2acda0d6467f91"],["/page/8/index.html","8df55b461631527eb2727b73aa61e61e"],["/page/9/index.html","efc7c8a37b5299b90b5b6d5119630843"],["/photos/index.html","1bbd1279a126ae738d41329bda68bac6"],["/remittance/index.html","a00e875ff22660b54d68e0968f60641b"],["/sw-register.js","ccf8464cbb864f1487fa5b5425033bba"],["/tags/AC自动机/index.html","8a9f9e34efd04cbf2b6db1406d56959b"],["/tags/Algorithm/index.html","cb253c52c8c2d1b34d1555c4e923d5bc"],["/tags/Algorithm/page/2/index.html","c12cd626707062640444ef774711d034"],["/tags/Algorithm/page/3/index.html","e0457537f209e57ff86e8b40bc865ea8"],["/tags/Blog/index.html","75e9baedca06ee4e8efa360a79da0ad7"],["/tags/C-11/index.html","e46c545e08425d594c99bc5637e54df8"],["/tags/Chtholly/index.html","5c13ef530a05b6aaf7d7f867be7e6bd5"],["/tags/DFT/index.html","30689ce9ba4df1ef8734e34af532697b"],["/tags/DP/index.html","318c54f64a040c74985458dbf3b36c5a"],["/tags/Dinic/index.html","892e020bd43ced4e09d3e4ac54066dbd"],["/tags/EK/index.html","16812acdbf8477d86b51f7e75b8dabf0"],["/tags/EK算法/index.html","eb133dee0770e3d89a0d81d57c965fe0"],["/tags/FFT/index.html","a3bb9e5b07f2ed69482500655fbed44b"],["/tags/FF方法/index.html","f7f5d93908ac739cd3a4ad8d140afb4f"],["/tags/Ford/index.html","4fdebaac4f728bbaaf9c4a82f422de29"],["/tags/HLPP/index.html","1844f43473de28f2168cdb458eb2cef6"],["/tags/IDFT/index.html","1af2f08c8b81433b1d6309129d397874"],["/tags/ISAP/index.html","1217c5d88c6e8a9006930a6083926064"],["/tags/JSOI/index.html","2b88e0e434b51630fcc3f2828d4b5b46"],["/tags/KMP/index.html","d8f495a0e089c4672701013c1ce7f7e3"],["/tags/KMP自动机/index.html","519de595ac918aa9a0479e54ba090cb4"],["/tags/LYOI/index.html","abf79c93a6e5868f380d55ea7e05cb8b"],["/tags/Lemon/index.html","0970f1e0503d207ba013a53b02e69c3f"],["/tags/Lgy/index.html","a67f1de0555115cffa4cdc69ce8763ba"],["/tags/Lucas/index.html","9400df9ce62c9566c1b9ff0bc7818baa"],["/tags/Luogu/index.html","7efd3bcd6f1d115936acf25d4222b3df"],["/tags/Manacher/index.html","946c9e22c85fd8aa393872d17b1ab09d"],["/tags/NOI/index.html","aacd7e6eb7406c1deb5386d02bdc4cc3"],["/tags/NOIP/index.html","b0dfc859b9637f75f397ef204bee0d5c"],["/tags/NOI导刊/index.html","da3d3e4ace5f0743defbcab9eccc7cf2"],["/tags/NTT/index.html","f908f6eb6c522c77350a7a6220a28730"],["/tags/OI/index.html","eb1483e164fcad5ab6e2b96ff20063ea"],["/tags/Problem/index.html","bb580f7c322cd7dc7f249890f098cf61"],["/tags/Problems/index.html","b13edeb012de3c56f7739993fb8ba726"],["/tags/RP/index.html","bdac8408dcd3296acfff269e4f6a18d2"],["/tags/SAP/index.html","71087f09f3b47f28bede0d40dd084473"],["/tags/STL/index.html","cef57b536a6767b753f5cde10ca17af0"],["/tags/Splay/index.html","61f3733a824baa00216e528dc461dc2a"],["/tags/Tarjian/index.html","e9f7f63f4a8309e3bc3395bfffdd3057"],["/tags/Treap/index.html","a86e071aa587c2379201bb8560f0de63"],["/tags/Trie/index.html","fe3493d3419780a0d4186a5dceaee856"],["/tags/USACO/index.html","b98f51ea664057f36bbf34bff072c49d"],["/tags/ZJOI/index.html","bcec1360d6b6331627ee9783e17ae900"],["/tags/blog/index.html","e73c0fef3a4a1e82828bd050dbc763ac"],["/tags/bzoj/index.html","fc8871f8cb99edbc6c54406459b32aa2"],["/tags/css/index.html","d57eeafaed993c3fdb0077e78d910aec"],["/tags/dijkstra/index.html","e18b886e15905eda9aa4852c16e0ade1"],["/tags/dinic/index.html","148cea658dbdd56ca0afa75502421264"],["/tags/fhq-treap/index.html","3200c4403be94c3475de398ff11314b6"],["/tags/gcd/index.html","6829efd31b7f4fb5ac8e5b9b025a6d7b"],["/tags/git/index.html","f028101a94bae9aaedc925a3ce283f98"],["/tags/hash/index.html","7f926ec156e5d82c38f2e6da0e44d56a"],["/tags/hexo/index.html","3bdacf7e663d92eee8911fae56ee1a60"],["/tags/html/index.html","6fabb51736dc80a00d8964f64fca8868"],["/tags/index.html","1cb9d762b5b713b14b5f426cbf579f31"],["/tags/lambda/index.html","c627edcccc33d756c59697e852996f4e"],["/tags/luogu/index.html","02a51fd30f65a7d222e414ee2fdbd7e0"],["/tags/lyoi/index.html","b21fbcfada71fd7d6b71ec08434ff039"],["/tags/markdown/index.html","e536be927016f55924f32f68501d4e17"],["/tags/problem/index.html","bd5ff6b4eaf0a8e12969af70f041d4f1"],["/tags/python/index.html","a39cd8998c555240fc9b1075c75bef23"],["/tags/qbxt/index.html","186cde4298c837810772ce62350fbf76"],["/tags/rope/index.html","ea53df7736e0665281f2040d0b519adb"],["/tags/spfa/index.html","84d9402bcd59bfd9e2b5416ac9fd6683"],["/tags/system/index.html","e02453db701fc2861ffdbe125cf9b108"],["/tags/terminal/index.html","36aa2cf25e27cb934eb2a41869a8b78e"],["/tags/zjoi/index.html","69b55e0321ad89dbccf76e992c2b4cf3"],["/tags/zkw线段树/index.html","2eba2b6a1ce6938df348680289203bf0"],["/tags/临沂一中/index.html","1457c1ce1eee881e57a632bbecd853dc"],["/tags/主席树/index.html","0766cacd6cd6567625a54ba1e0d039de"],["/tags/乱搞/index.html","9d82bd7546af880e7bfa516c297118d6"],["/tags/二分/index.html","15dcac9a8b84fd7e82a24fcd9c3bfb55"],["/tags/二分图/index.html","8b27c95e09e55ff129f363a57eca646e"],["/tags/二分图匹配/index.html","bf0cb0615adf4289d5505d4fac2edcaa"],["/tags/二分图最大匹配/index.html","bf1854186810e574afb066681d2ab403"],["/tags/二叉搜索树/index.html","9e13710000a3a36d883bfa2c8edd22ca"],["/tags/二叉树/index.html","e3bc26df5200c366dab8674d48943e13"],["/tags/代码规范/index.html","7c978d17420f8a8f3680001dbe589748"],["/tags/优化/index.html","aadf6a4300169279a1f8840fdf23438d"],["/tags/几何/index.html","0c03d8e180ccbbb5fdd889db43769ae2"],["/tags/凸包/index.html","c168f31e26165bd1c778a1c087438453"],["/tags/函数/index.html","d0cc14923cb9822ec4618282b3ce546d"],["/tags/分块/index.html","683df78d5f8fa941d045c669203138df"],["/tags/初等数论/index.html","1f592781c43d535c1dc26921070d2fb5"],["/tags/前缀和/index.html","84d3703678bc1e1db15690eec7882f91"],["/tags/动态规划/index.html","4345d73e10b6534a73d8c55710298de5"],["/tags/匈牙利算法/index.html","db1a66c6a3fb6d6f604db935a3ddc73e"],["/tags/区间/index.html","a50b4da60299aae09dc9b3acd3e10396"],["/tags/区间操作/index.html","ad78db209bf0513e42366e0516a5f407"],["/tags/区间第k小/index.html","28dec6423d303a64c7a05d4402ff7c5c"],["/tags/半平面交/index.html","28d41604286bb81ca4bde88d2503548b"],["/tags/单源最短路径/index.html","2dae6fbe613e16cd6925eba75c393b1f"],["/tags/博弈论/index.html","9afa0d17e4d6ceddc8195036eb2285e0"],["/tags/卡常/index.html","77376c44a4305bc69a15313bc08a082f"],["/tags/卢卡斯定理/index.html","6b451c74a2ea09acc4367703b70ce37f"],["/tags/卷积/index.html","30b524b8d0b07889424253e7d05b7e5c"],["/tags/叉积/index.html","e6fada325d1783d1e587d6a0f6c8d8bc"],["/tags/可持久化/index.html","8caa24f5dcb4848861122afe46cabd96"],["/tags/向量/index.html","b1672b2b13200682bc805e10ca11fa22"],["/tags/图/index.html","f686fd2b83ea38e2fe6388fceb611a2a"],["/tags/图论/index.html","9453ee83bf67f21609a4d78171a2ed18"],["/tags/块状链表/index.html","9a4a42907aea0ec70ca86157a9c462c4"],["/tags/增广路/index.html","0ac979639fb014aeb867fafde80b8b0f"],["/tags/复平面/index.html","e03aa595eb7f4b87532dcec988d2417b"],["/tags/复数/index.html","6dbb650bddb2cdd8fe0f6b2eab061169"],["/tags/字符串/index.html","07f87463380da096ccd72729e42fde9e"],["/tags/学习笔记/index.html","255af29089b38fd69e8d7f9aa873b5dc"],["/tags/常数优化/index.html","e720a25a9be4eb1ac2f48de4315fd88f"],["/tags/平衡树/index.html","e3e61b34b167544656d9adb3e1254b1a"],["/tags/平面几何/index.html","e21b330624e61c0e49cf1105d62ba9f0"],["/tags/并查集/index.html","797d506b99407cd8f5cab1c34f1d009f"],["/tags/强联通/index.html","ad212481b14bc414acf20226e8341976"],["/tags/快速傅里叶变换/index.html","e91ff0f41422d9ec24221400d669062c"],["/tags/总结/index.html","95fa8abc02882a76440d1d68b51a5169"],["/tags/感悟/index.html","dd564a7fc4dc5e622a77a6877cf8e6f1"],["/tags/技巧/index.html","39cd28e2a816e061d30f417af17ebe25"],["/tags/抽象代数/index.html","e6eae2bc0a04d6c77dc36458e474cbc6"],["/tags/教程/index.html","a0a1c31ce33ff2ddb274d7cc4046a542"],["/tags/数堆/index.html","4f424f6436f2b41a1bb8d938db145fb9"],["/tags/数学/index.html","415ae936007efe542831b47601fef8e4"],["/tags/数学/page/2/index.html","3dfd40df371e6e48a64701898a6b56de"],["/tags/数据结构/index.html","b470a793f0113eb711bfc6e2ede82e11"],["/tags/数据结构/page/2/index.html","b3f41f48f84fd3c00c636f4404a00d79"],["/tags/数论/index.html","29346a59ba9b0cd38053cb8e52a488ff"],["/tags/数论/page/2/index.html","f7f3b51e4b152fc0d3f5c44b4f87bb5c"],["/tags/文学/index.html","67975ae5be9f250f32b1e2e6dfed24b3"],["/tags/方差/index.html","0b3bd2d162bf89ffbc3a94cbb57e6a70"],["/tags/智熄/index.html","436be998c32e958f892054a1a653d132"],["/tags/暴力/index.html","161aba501fed8f77002a91358529c75f"],["/tags/替罪羊树/index.html","b08a60b85da930abcbe26f5b814f7e4c"],["/tags/最优化/index.html","2925b24fdf5a3a4b1f1d7f5855007eaa"],["/tags/最大流/index.html","48e2a53a6cba3bbb00b2f2cd74f6bbe2"],["/tags/最小割/index.html","9236f1e67ef13ef9091c9c676f68591a"],["/tags/最小割最大流定理/index.html","92f0ab81b2efe19eeb50299fde9a7123"],["/tags/最小生成树/index.html","047af95c1cf362599fcc6973c64ecb1f"],["/tags/最短路/index.html","210672507f09ba88162120732ce5b7cc"],["/tags/最长回文子串/index.html","1f46fce1e533429466a4e3f8d4acb0c7"],["/tags/极角/index.html","5c0d570be2989a3ccd46b16b166d8a95"],["/tags/染色/index.html","74db4f595a7bc11ae6c26e5d80cdd9e6"],["/tags/栈/index.html","aef99fadeb464b814c743f47de70b31d"],["/tags/树/index.html","2af9f851250ab27dba97ae0583509c8e"],["/tags/树剖/index.html","0e6c1f7fe4521d8daf2408ff70a32c74"],["/tags/树套树/index.html","43c99b96bc14576b26dac49e933e9d59"],["/tags/树状数组/index.html","fb689cbfc4e01d9879588020a79bc492"],["/tags/树链剖分/index.html","15521c9e7a3de1f1a883b16a44b59788"],["/tags/模拟赛/index.html","395909452543409fce8543c73b659021"],["/tags/模拟题/index.html","c62351d92389e73209fa70317befd8b9"],["/tags/模板/index.html","8c42d8037a1a58c5df95081afea8a7de"],["/tags/模版/index.html","983545cdaaf1c1699ec2ff1ee8a8b559"],["/tags/模版题/index.html","c1ff2b65bdb76eb427f0a990836b017a"],["/tags/欧拉函数/index.html","09a1a0013090cb7bf00573372da1a201"],["/tags/欧拉筛/index.html","b4eb7116b445508ae7f92a0be35f35da"],["/tags/毒瘤/index.html","6923881ea419fad0e88ced683e45481b"],["/tags/测试题/index.html","71d4fa04fbf3a0a81fb40c90db3318f1"],["/tags/济南/index.html","c3a35b07bf520a1a60a19bd24d2849e6"],["/tags/清北/index.html","607c64cef251740cba2861938507276d"],["/tags/爆零/index.html","7bcb6b147675d3659cb8dc8abec72086"],["/tags/玄学/index.html","2d6021fdfd7272651a4171c9f25cb825"],["/tags/珂朵莉/index.html","e358eac7d300ae7d1009c8b0a06fd0dd"],["/tags/生成函数/index.html","df9ede02ccb77f304c768c9da270ae0e"],["/tags/瞎搞/index.html","b7c017f47feebc9162d60e3c85c5b2bf"],["/tags/矩阵/index.html","84c42804867092a8366ad0fb6962fd10"],["/tags/矩阵翻转/index.html","9fde7e9d01141f13b09df856edbf0050"],["/tags/算法/index.html","dcb8240be9dbadafe15eb271590913ff"],["/tags/算法竞赛/index.html","0f8ffd8c5fa9669eabd011d45e1b40e5"],["/tags/素数/index.html","121908026909741b170f45118d10a059"],["/tags/线性基/index.html","91ae9ac1e9f76165e6b28c67c8feaed6"],["/tags/线性筛/index.html","1739533fa9b1a0218f845bb903dc7b12"],["/tags/线段树/index.html","e71a0eaed11673ab5eb23b15c7b62faf"],["/tags/网络流/index.html","3f537c4e6925a5f443408af042516f66"],["/tags/群论/index.html","672fce88fdd8c74208e0cd0f117dae31"],["/tags/自动机/index.html","5d73660543590b163401c503b9bebb8a"],["/tags/莫比乌斯/index.html","4dea705f72a83cd71bab0bae105f3fa2"],["/tags/莫比乌斯反演/index.html","78526dd02f2b759592d6f7efafde5224"],["/tags/虚数/index.html","bff93224c246fe03964913ed1b60e6b4"],["/tags/计算几何/index.html","7d6283e209ad9af37dc48c71a20e3c7b"],["/tags/证明/index.html","a21742137c8035becd64b2b929a1ab7e"],["/tags/评测机/index.html","b08f6db7079e2954a0b5f4e65a827b37"],["/tags/诗/index.html","52fc50171f59218ba78a4a17241da1d1"],["/tags/诗歌/index.html","9520ac8edd45fcd2bf9122aff1495ee1"],["/tags/费用流/index.html","c532f8b99bc571b5ef96869dddb9bbdc"],["/tags/路径压缩/index.html","a9f9e54e0df36e6ee81ba3665c8aa832"],["/tags/逆元/index.html","5e2378106a7f6ac82ad32bd8957737fe"],["/tags/递归/index.html","8106bd8426267d1e2a596d7e04074804"],["/tags/递推/index.html","7c5a73f8e3afe5ac1bfe3f13e47c1b8d"],["/tags/邻接表/index.html","19669c545c1ae84d5c90932c0ace8392"],["/tags/随笔/index.html","da428559b26cc820f23b97ba182fa620"],["/tags/集合/index.html","bc3341ea7f291cba25de3e1fb23ec1dc"],["/tags/集训/index.html","ee73d46408e99db1f10218c6ef2b3c18"],["/tags/非旋Treap/index.html","c4fcde3508de29aed31bf656c5ac0bbf"],["/tags/非递归/index.html","096992d9fb6c773506d5cdd7673adc23"],["/tags/预留推进/index.html","164f30149a447f301fe58f237b092964"],["/tags/颓废/index.html","08b12841d80635b208769a531cd01916"],["/tags/题目/index.html","64e2f1e5bbdbb227476feba937fc2c43"],["/tags/题解/index.html","248639a000153813bc181266fb2a88fa"],["/tags/题解/page/2/index.html","88a0a124ff57ee31ced801c8cf80cfb6"],["/tags/高性能/index.html","077c831dd8dfe50d8a49a4b85bfd104d"],["/tags/高精度/index.html","a2c22b2ea18ba203326d0bb3c8586458"]];
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
