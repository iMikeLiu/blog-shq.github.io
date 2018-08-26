/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","d581cee27337e4f29df432d351565b2d"],["/about/index.html","4d1552d91385b55f8b76731dcdf35690"],["/archives/2017/12/index.html","d44a51c8e84347c48e0a2453dd2890d3"],["/archives/2017/index.html","e092df235ab747488cd003026be3ed7a"],["/archives/2018/01/index.html","d1587d10946741a2f0c2eb883ce976f7"],["/archives/2018/02/index.html","d7fff953d728ec137d5501b1b482ebff"],["/archives/2018/02/page/2/index.html","c237bdb1070a64c49725e835699ecd57"],["/archives/2018/03/index.html","620b21cb26cb9f97eefdbcc8ebfaf50a"],["/archives/2018/03/page/2/index.html","d76d456d50cdc08e6f676643bc23192f"],["/archives/2018/04/index.html","f871af957364a9b653db972a2ace9f38"],["/archives/2018/04/page/2/index.html","749066410e66f0635b6fc2cdcd50c449"],["/archives/2018/05/index.html","c4808b466325258f9e4bf190f49b3d33"],["/archives/2018/06/index.html","54f2657719019401ef4bfe042d85a8ba"],["/archives/2018/06/page/2/index.html","283e91957c4a0a2e4773d9efada68eb2"],["/archives/2018/07/index.html","5ab04b65b0157addb2482ec88a03d9da"],["/archives/2018/07/page/2/index.html","5928b7fb9cb7501e8b592f16b292f888"],["/archives/2018/08/index.html","c9a771b185377c7284b5193f4e0979f7"],["/archives/2018/index.html","0b70923903b9af240f27ac88fd11c0ab"],["/archives/2018/page/2/index.html","bf0453f04bedbb4bae4bfa3855556751"],["/archives/2018/page/3/index.html","bc692a30459aa5c22db281181cb03c52"],["/archives/2018/page/4/index.html","b8aa60fca594facdd06ef44d11e3eea6"],["/archives/2018/page/5/index.html","bb4d133789dae22c48c14778f634544a"],["/archives/2018/page/6/index.html","2973c6664a1bdada3ef80daf26b2cd8f"],["/archives/2018/page/7/index.html","5ad4f0be5f8c9ffe23affbb1037b3fac"],["/archives/2018/page/8/index.html","cc7157330b3a4e03689b6e3cfcda193e"],["/archives/2018/page/9/index.html","3304ef69f7ecb9af65ee19632957c812"],["/archives/index.html","1971361416e02b60dce12a76ed903793"],["/archives/page/10/index.html","ee262662588e9e383352aa831990851e"],["/archives/page/2/index.html","8045d0519af57474156676968fcb3c82"],["/archives/page/3/index.html","66c29ec30c0c08785f60edda06795f42"],["/archives/page/4/index.html","b2167a60c30805001895f9e18d1b9e44"],["/archives/page/5/index.html","527d295e4c9d61d6a4478cef29f2799d"],["/archives/page/6/index.html","81ab122224085cf12eb60c224d6e8ba6"],["/archives/page/7/index.html","edf9642854f58e0b8c29701fe8fe9ca7"],["/archives/page/8/index.html","27568e6e30b5cddd8f2b25bed46cb4fe"],["/archives/page/9/index.html","22d9790e725723b7f48b541195fd2830"],["/articles/18-4-27-things/index.html","bbaad576e9fd7d28a967102208029bda"],["/articles/18-4-29-test/index.html","fc56aab804f9c1dafea5528d59cc4a9d"],["/articles/2018-五校联考-Round1/index.html","62a8f0b1971ebd12aa816efc1d7e480e"],["/articles/BigInt/index.html","fd05e82233d8ad2fbd8101e16d837e55"],["/articles/Chtholly-Tree-ODT/index.html","7b7efb56a362918da5f7928505793171"],["/articles/Code-Style-for-OI/index.html","873b37f0dcac979c656f845f04856767"],["/articles/Computational-geometry1/index.html","6978b0a8f0dddfd8e83f09ce9c7d4d6a"],["/articles/Computational-geometry2/index.html","78ef2b9d10d6940773bc54ef13cc522c"],["/articles/Computed-geometry/index.html","78a95ef0cf9332cf59509e7983a4ac3c"],["/articles/Dirichle-product/index.html","1cb89fc65165beda407d07883f742d19"],["/articles/FFT-study/index.html","3005acc7389e6d496156a5872e678072"],["/articles/HeatWave/index.html","c9c51c57e58fe2ebd1124e6a75439694"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","5452c0fe0b2b6b947d7ea85a46f616ec"],["/articles/JSOI2009-游戏/index.html","0100c1188679a01a6f04d4844bd2ca91"],["/articles/KMP-AC-automaton/index.html","032c45ccbf0ecf35de0f16f655367d06"],["/articles/KMP-AC-automaton2/index.html","072cd84029716ab9caaa96c907807d42"],["/articles/KMP-AC-automaton3/index.html","4b1da63387b5b444682a557c444a17dd"],["/articles/Kernel-privilege-escalation/index.html","914cd49322b1cb0d5ac04ce199730e1f"],["/articles/Linear-sieve/index.html","38a94ba09005b7359d3d26b64aafab4a"],["/articles/Lucas/index.html","7713cd3e5a52603b1ce3ae2daa4d6e31"],["/articles/Luogu-P4276/index.html","a8c57951776d9115c1839c34cc8e0e7b"],["/articles/Manacher/index.html","795417d2d649ca54233fd1a405690016"],["/articles/Minimum-spanning-tree/index.html","47a251065ed86c8332d508ae4a9ffa4c"],["/articles/Mobius1/index.html","f45b7e282c305d21b302ce08bb135ea1"],["/articles/NOI2010-Plant/index.html","e5728b08f735b1e53777b035e8975ceb"],["/articles/Network-flow-Algorithms/index.html","5c184f584cba9e04597d08a23da32328"],["/articles/Network-flow-start/index.html","b266b8515d8d59dea5eb45becf15dad6"],["/articles/OI常数优化-进阶/index.html","9051ee741df642788681da18cea3981b"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","bae717c65bdd741af100f6ba9f724d76"],["/articles/P1984-SDOI2008-Water/index.html","271ad035481da0b2e248bd6620390528"],["/articles/P2018/index.html","e6287dc14127ff6d5a08212a28aa3e45"],["/articles/P3933Chtholly/index.html","53ac7b58b97283a8c5f82fe90383087a"],["/articles/Partitioned-Algorithm/index.html","198d667e4b078ae17e9fe5f093f7b5b9"],["/articles/RP-introduction/index.html","003fbd0d8c03dc4a3773682c0aad9e3a"],["/articles/Sandaram/index.html","0550eb7d8fd513134f8fb913ef939fea"],["/articles/SegmentTree/index.html","56bde82d689f8df288289e1458574dd6"],["/articles/Segt-in-Treap/index.html","dd578dee2dc706b9aed20ce100eae389"],["/articles/ShqProblem1/index.html","ff981b8316e3927095d322efed6edc42"],["/articles/TreeArray/index.html","98e792018f774ebe117afd329467e83d"],["/articles/TreeArray2/index.html","5cfb55634c98596f54f90af4c0f9dea3"],["/articles/Union-find-sets/index.html","c7db0659315a8f6a0f3c26110dce5649"],["/articles/ZJOI2006-书架/index.html","e7406716a2d88bbec0490d51418eb60e"],["/articles/ZJOI2007-矩阵游戏/index.html","ad14e871dada1e1b544efe400826ae5d"],["/articles/a-bproblem/index.html","8245f55e0ad3add5533f5880699ba5a5"],["/articles/aboutBlog/index.html","0223940cea7f8ca8d6e3af4a6f02e4aa"],["/articles/aboutgit/index.html","f455b5106a2dbccdcb87eda5911168d9"],["/articles/autoAC-lemon/index.html","d0dda3db36ccdf089249fdfcded7049d"],["/articles/bzoj-3337/index.html","d76e4d82fc4c1d26d5274eeca886f84a"],["/articles/cppteach/index.html","0e888d6d62c253cdaa4b150f27d41ad1"],["/articles/css-QWQ/index.html","9aece2a35f395f29a1f1a9b088df7247"],["/articles/dijkstra-spfa/index.html","a783a61c88ad50ef7677f9dba1a2b1b0"],["/articles/dijkstra/index.html","0bd6663db01973c8830038b7ee183e74"],["/articles/dinic/index.html","57e3e5fc007e55cc72f97283dea881ae"],["/articles/duliu/index.html","9b811b80efc5d7e6c32b5a642519b911"],["/articles/dynamic-planning/index.html","84a239b48eff1276ea6a2096cfeb88c0"],["/articles/elementaryos/index.html","2457256864aefe5af7005e3e923173a2"],["/articles/er-fen-tu/index.html","5764c6231e1e37a32ac6f73283b4b327"],["/articles/fhq-treap/index.html","c5cfb83805d492551007b7607c565076"],["/articles/group-theory/index.html","026e390a90329e842b934452c7f65fbf"],["/articles/lgy-from/index.html","e9f6e074338bd7b50c99237fdafa88cf"],["/articles/linear-basis/index.html","185896449d06e84b48c11f88a8f75541"],["/articles/lyoi-Poetry/index.html","34b74ec8c3701927c0b31ca456d8feb6"],["/articles/lyyz-test-2018-5-19/index.html","4c37cf5f3d71abca731c7e46477e6fd3"],["/articles/markdown/index.html","710c8dfcc534a41284778c9a1af4eef8"],["/articles/moban/index.html","67a6f459cce9d14a6703bc7b01895f3a"],["/articles/poem1/index.html","9a539c0cf8241811f0b93e3adac996d7"],["/articles/prims/index.html","231206e3a45064880c5b601516311e31"],["/articles/python1/index.html","36c903086fd324387cf99182a969cdf5"],["/articles/question-01/index.html","ade19ae1fbdf172e6af56df34fbc8192"],["/articles/recursion-to-no-recursion/index.html","2dc294293cc94d92e954fb48aa008899"],["/articles/scc1/index.html","eb0169ee5c56550a7d4eafcca5d109a6"],["/articles/somethinks1/index.html","55064e67dcca3c6a6778363b9623e75b"],["/articles/terminal/index.html","6fbcf45eb143dada19eaf2dc40541bd2"],["/articles/terminal2/index.html","63be9d4d7ac15684dc2e93d795e5f0b2"],["/articles/test-mode/index.html","fdb36881cb110fbcd7c51378d92ffa90"],["/articles/test-polyline/index.html","1bbd32774c85a2989aaef6903fdc2280"],["/articles/treap/index.html","9fdcfc655fbf1f8b7e7cf174c36ce55e"],["/articles/tubaomb/index.html","05c9b3c9e68ec35725ca6a0dcf9a5572"],["/articles/use-hexo/index.html","47f1d68f6129b1154a16028cc8d64324"],["/articles/use-hexo2/index.html","218a488ebac5fd256fee7626db01f159"],["/articles/zkw-tree-algorithm/index.html","3ebfc4e822a3f6114750a03e0240f058"],["/articles/zzWA/index.html","aa36e82d7481def364fe75497d0f64c0"],["/articles/「LYOI2016-Summer」一次函数/index.html","3e3f4ed2999f2452d48e348f905bb49d"],["/articles/主席树详解/index.html","ef46cf1f0c2bb04ce88c520db5c01486"],["/articles/分块-P1471/index.html","ca166b695283eb141e3a143f51731eef"],["/articles/可持久化并查集-rope/index.html","a4460c883c743f557bf9aa62d777b5ec"],["/articles/复数表示/index.html","1609ab05353f43941d79879df591a139"],["/articles/洲阁筛/index.html","3904cc2b22ed00dceabfba173fb306b8"],["/articles/生成函数/index.html","e6995e06b37bd54fef922793286dc750"],["/articles/网络流-二分图最大匹配/index.html","4e35f9721a0222df86d48ec5717f7173"],["/articles/自然数的和/index.html","bd77b361fd79710af9ad7ad89814a6aa"],["/categories/Linux/index.html","424b92c9817c54a93f1146810d0b30d8"],["/categories/OI/index.html","67c29ab44e2590d984dc2b7fb6c94b7c"],["/categories/OI/page/2/index.html","349f0563aeabb30be71334e08e249254"],["/categories/OI/page/3/index.html","4e4ea873c88427089fa4a550674af34f"],["/categories/OI/page/4/index.html","e448ae2245e81ed2e236ce4ec1779cd9"],["/categories/OI/page/5/index.html","57e0ae74ce15dca376108197c31e4e5b"],["/categories/OI/page/6/index.html","6945dfb9fc23c8c6ee78c29b0d8083e6"],["/categories/OI/page/7/index.html","e2bc61e22854e75fcba7a252f4f2e12e"],["/categories/OI/page/8/index.html","dbabfa5df8521118e6b1d7fe0ae7c3ca"],["/categories/OI/page/9/index.html","7ab48435333fec108cb042e2edc44647"],["/categories/hexo/index.html","e770242a413cde710e50cc0e6d5e949c"],["/categories/index.html","6b8f6ed0cf5d58a96e051be689d141fa"],["/categories/随笔/index.html","4773a1f03704a31b19373704cf235773"],["/comments/index.html","e15eb80981859e1ac6503d637851f596"],["/css/main.css","7f1bf6010c0d4ca3714f3a47aedf1ef0"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","dc6c03b05c1387541c15ff8aeec70b4c"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","b6c98221d0d8fbe4ddc0fe113adb6e94"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","d8fc149a4b2b6291071f4cec10b094a4"],["/page/2/index.html","a7e92254c6ef153e49d0e4b84845c5ad"],["/page/3/index.html","1052b6fc7ccf15cbbd8a4d8f9e5e48c8"],["/page/4/index.html","20d7123e0db344a76cde6306f459e4e9"],["/page/5/index.html","17868693cf062d9e381f011449b01d16"],["/page/6/index.html","c07bdac682fc6fa645bec57f74df459e"],["/page/7/index.html","29b73d28761d9023127e1d63d4c52d46"],["/page/8/index.html","010c89cb4414d3dc2b94c5be534cfb2f"],["/page/9/index.html","951d0beecddf9cd710318582a8552602"],["/photos/index.html","baa8b5469518bcb940543d65e63d6094"],["/remittance/index.html","9e6e1c3a99d78b43d1d38c7debf61025"],["/sw-register.js","6c509ee0df3f9a634d7f1381283d9fcd"],["/tags/2018/index.html","8124a53f03640783664db9589ce47d9e"],["/tags/AC自动机/index.html","a9d01c72e845e325886330c1a086e0f9"],["/tags/Algorithm/index.html","9e141a6606fd26d80adf8352d5bd7b20"],["/tags/Algorithm/page/2/index.html","eb88fc90e31ff5a373cc7112eadb343c"],["/tags/Algorithm/page/3/index.html","14eb71ae38fbe6f3b6cef7077ac5c615"],["/tags/Blog/index.html","b202ffd0a3a3f8344d65bb4de0819cc6"],["/tags/C-11/index.html","792cbf30b2069b6a2d67c88b03f38d17"],["/tags/Chtholly/index.html","07a63049a4e64678abbeb7df5d5675d5"],["/tags/DFT/index.html","878bbc6bf9a08a6c501dd95bcfae49db"],["/tags/DP/index.html","4332ac5ced5d7e87dd7c99816917b102"],["/tags/Dinic/index.html","17aad9adb9f01661c0a171ffa9e170cb"],["/tags/EK/index.html","92d941fe8355b07559ad2fae9b3b1766"],["/tags/EK算法/index.html","de40710d715f4bade4108356f1bcd9f8"],["/tags/FFT/index.html","1a8a9385a6da8dbdec313b149d24d397"],["/tags/FF方法/index.html","bb0601c80f787e3f34f392e5b38ebe97"],["/tags/Ford/index.html","8bcc579717df8690d509354cec493c8b"],["/tags/HLPP/index.html","db00bbecb671f116a5261d6acb27a208"],["/tags/IDFT/index.html","e7845f2e06c99c6a426a053f306a5865"],["/tags/ISAP/index.html","7eef22325242a035c1e38bd525d1fb50"],["/tags/JSOI/index.html","9f1037cefe7d1434ffcc418796ae5ec5"],["/tags/KMP/index.html","632dbc46f98249c532ae3dfa70289e75"],["/tags/KMP自动机/index.html","f8b575d86d59c3f3797f840c09e753b9"],["/tags/LYOI/index.html","d47d27c3cedee6122fb9323bf28e1057"],["/tags/Lemon/index.html","ff0deca897d3c48dc060d98044202a09"],["/tags/Lgy/index.html","bfe954ee17bf6d2ab4ebb544b702bef1"],["/tags/Linux/index.html","0929602b25e849b92f288bea974ba07e"],["/tags/Lucas/index.html","ec30e1b008c70b47f7ad931af4a636ba"],["/tags/Luogu/index.html","986528afc76bfc11b985e165e9ef4fd6"],["/tags/Manacher/index.html","09fea08ca88b31d46a6c38c91decc3b4"],["/tags/NOI/index.html","00068bdbc06b1a784b33882f1ba1840b"],["/tags/NOIP/index.html","953f487f3320f92ac791aa66fca40613"],["/tags/NOI导刊/index.html","2f00cac432542b31314051651408bb23"],["/tags/NTT/index.html","9c2cd65c89f140b86802f4ecf58ba610"],["/tags/OI/index.html","e8f46587c25763cb21e1e240e6decda3"],["/tags/Problem/index.html","3f0b520b03fe9be4aa8dadbd3dc42203"],["/tags/Problems/index.html","2753d0d2fd326ce1c1e2e13f293d375f"],["/tags/RP/index.html","077e82b94bba4f4b42d80e832b5cff8e"],["/tags/SAP/index.html","73022693a36ae585c30b9c23398bf0e1"],["/tags/STL/index.html","ec7ee7ee80da77f6df3f0310b25fdbd1"],["/tags/Splay/index.html","cd1d72422a7b33000a95f89ff520c290"],["/tags/Tarjian/index.html","0b7217d1c1c4643863017f53325b6ed8"],["/tags/Treap/index.html","e0d92ea63a3e4bcaf633b358bbcb080c"],["/tags/Trie/index.html","ca8bb908c7d65b54a8112ab3f8a1b836"],["/tags/USACO/index.html","d01dece2d88d61cb78faa811acacd372"],["/tags/ZJOI/index.html","937c5de9fac183edfced4d8a39600dcf"],["/tags/blog/index.html","c603e9caf8f198b5cbcff9122e773bb9"],["/tags/bzoj/index.html","24f451b4b4ef83074ffc7a6d83cca882"],["/tags/css/index.html","b4e52fae43b64ddfbdf057a6b4e1fd57"],["/tags/dijkstra/index.html","a3da04611029d294d41dac6b3590bb21"],["/tags/dinic/index.html","22a76169f8009513e98803424ee93ae6"],["/tags/fhq-treap/index.html","0c0ef6df8f8f394e6a7abf2f5bf3515b"],["/tags/gcd/index.html","bc6d96ba5231328684e9f623a07ac7b9"],["/tags/git/index.html","3053fe6e32960f152230cb25cf3a4337"],["/tags/hash/index.html","22381b8cd41805a312c533534e249f8c"],["/tags/hexo/index.html","e28ba662bf38b0d7ea20613b91ab76d4"],["/tags/html/index.html","4cd2c4b578c2e28fa745f3314e93fea1"],["/tags/index.html","39bd5bc1fd96b43675ab35794d0ef557"],["/tags/lambda/index.html","5e509a1803f4f82308266ff73b633d43"],["/tags/luogu/index.html","b42776ba9475d248c3e5034cb575959f"],["/tags/lyoi/index.html","88ba5a118d0decd4f15697f7e01a7fcd"],["/tags/markdown/index.html","2a3db0a746b4fddaac40ab8c05700fd0"],["/tags/problem/index.html","ea8f16d8cbdc65401b55609a267e8ac6"],["/tags/python/index.html","d7848eb1a09ea35b8c97ad65433afb35"],["/tags/qbxt/index.html","39d6a5975335856756b89f6ad4d946ed"],["/tags/rope/index.html","000dcd982e59b854f58c81510eebbe63"],["/tags/spfa/index.html","839ad04a56458d8f6d4a43cb1dac15a5"],["/tags/system/index.html","468817fec2c12ea14a86252103a862b4"],["/tags/terminal/index.html","49618099ff67410d14e0e8c53e600f73"],["/tags/zjoi/index.html","ec7496635813a1d59eebe53b9bb2c726"],["/tags/zkw线段树/index.html","c4b0824bfdbbc15606503e452c81e9f2"],["/tags/临沂一中/index.html","618ebfc4420cf210219af3053e7baeb1"],["/tags/主席树/index.html","621803182516aa509d38e3949c6899df"],["/tags/乱搞/index.html","27ed5faaf183fc71e2d5ba41f5d9e0d5"],["/tags/二分/index.html","36c9815951f2acd16610a40e2b07c05e"],["/tags/二分图/index.html","accf15e77fcd7e6ceb0d7f5b0093ed39"],["/tags/二分图匹配/index.html","9ead33e59abf5e76d47cecf25dea9388"],["/tags/二分图最大匹配/index.html","fcc32b073df615d922e972c3fe157f6b"],["/tags/二叉搜索树/index.html","0fa292ac059a7673a2cd7e462c8822eb"],["/tags/二叉树/index.html","7753a14a2346e6da00b435daa46fa6a0"],["/tags/五校联考/index.html","4a4d64bb3c7c5354b6a338dc1d0b3ec9"],["/tags/代码规范/index.html","91f60815045e1eebcaad44fe8cd5219b"],["/tags/优化/index.html","893c27c90803d6325f5ca3803800adbf"],["/tags/内核/index.html","04c75d02746f4e4aeecab50868ef4929"],["/tags/内核提权/index.html","a4e6f7d28d797cec367fbd476bc63691"],["/tags/几何/index.html","79ff14012b4150ab820131fabb5aabb7"],["/tags/凸包/index.html","0714455daf98fca08c68e30198341f1a"],["/tags/函数/index.html","ba7596386033bbc4115b16969fc25669"],["/tags/分块/index.html","da55773e5c36e994b3f1b39cf08a48c5"],["/tags/初等数论/index.html","6b2aa96b9e676831a101a2198a88002d"],["/tags/前缀和/index.html","b23748c5973ae658c63fe5b2db7cd697"],["/tags/动态规划/index.html","86a6b5fb6eb4ea8f3e28b0cd0ed5570e"],["/tags/匈牙利算法/index.html","f73e1f5ee79bf1dae6f6e76bd908e36d"],["/tags/区间/index.html","64409422f8703cda6a8a53a9bbb931c1"],["/tags/区间操作/index.html","49decc52ea2d95ebe95cbadbb82126ed"],["/tags/区间第k小/index.html","25ed419a5bb571db809dfefff244421f"],["/tags/半平面交/index.html","948397336e064951d2c605b7ddcae415"],["/tags/单源最短路径/index.html","d72c40f0d552ba94faff77c65f05c99c"],["/tags/博弈论/index.html","c464ec3cf179cc3528029f0914faae3b"],["/tags/卡常/index.html","4de0ed2ff3d9578ae56cae2fe4c6f213"],["/tags/卢卡斯定理/index.html","9df021841df9e4fe0ad79713b7ad26be"],["/tags/卷积/index.html","a04dc23f26be6d5ef4995f3a5cd3bcee"],["/tags/叉积/index.html","c238562d67d0479921629dca3c289233"],["/tags/可持久化/index.html","400a0638e7bc12806aec37e33c39e981"],["/tags/向量/index.html","d73bd9f4986a063b35c4fb90105eec00"],["/tags/图/index.html","b1a6ba1924a3e8eb9e3131c42e4b432b"],["/tags/图论/index.html","2a091b1fe2b761516e0eb367e8287657"],["/tags/块状链表/index.html","e91f5c8b92ee90bcd0e6b90055bca512"],["/tags/增广路/index.html","134633746ce7618f62698a484266c100"],["/tags/复平面/index.html","04d8458046e6dd287f99c8a95dca699d"],["/tags/复数/index.html","f9ea46c2eabc286bd07317c2db77378c"],["/tags/字符串/index.html","e50b5331edb07a5af6787e5240817b53"],["/tags/学习笔记/index.html","4038fa8aaf75c9e5ea9604772a5804fd"],["/tags/常数优化/index.html","6f399d7d4e4d3cebe168b878210123eb"],["/tags/平衡树/index.html","1daf8cf2649b97e09529b9dd25a8d890"],["/tags/平面几何/index.html","420d005f20715c6c1aa42c59785083ce"],["/tags/并查集/index.html","480fc91fb2b41d13de3a9ea5b29368c7"],["/tags/强联通/index.html","97f24797772557adae481fff5cfeedb5"],["/tags/快速傅里叶变换/index.html","fb5873e6ae3f0d141e0a793b01fe1210"],["/tags/总结/index.html","fdeda86f62fa20f185e9543618b09583"],["/tags/感悟/index.html","f9814b20be30adf6ea0e7f7f8cded7fe"],["/tags/技巧/index.html","b3c60493fd2a76a8a751a93b6779c1d5"],["/tags/抽象代数/index.html","169f515f2ba0e29911f7bee7e8f27c45"],["/tags/教程/index.html","30c19a99292bbb207e26964baea9de95"],["/tags/数堆/index.html","8054829e48d3dc795c90b55daf9fa9ea"],["/tags/数学/index.html","2ff9430a099f3b1b0cf0bf1944478a1c"],["/tags/数学/page/2/index.html","bdad25b52c3483fe9f07bdfb8167f6c5"],["/tags/数据结构/index.html","6158dad940627eec11f80ed34c7d12b5"],["/tags/数据结构/page/2/index.html","ebc793d278c5a7c97827fb4d72116e5c"],["/tags/数论/index.html","2799445c9ed12f8d6363beac677dc55c"],["/tags/数论/page/2/index.html","dcac4937c265bc9feae59dc024b60f08"],["/tags/文学/index.html","a7af43456ec7addd514874ba912313eb"],["/tags/方差/index.html","c366ae92b56480a4e1ba93a1a392aa79"],["/tags/智熄/index.html","a959dcb5c33a41900ad6bc61b1e185ce"],["/tags/暴力/index.html","572c889da7884b5a5a5f918b0b80c7ed"],["/tags/替罪羊树/index.html","6df69f4dda7b92f1d9a9dc479f2f125d"],["/tags/最优化/index.html","0978d77a738d60e6cf109c109abcba55"],["/tags/最大流/index.html","42723740ba6e27b45c54144aabc55501"],["/tags/最小割/index.html","41fe44900b77470dbe1121f5fe42a345"],["/tags/最小割最大流定理/index.html","a40c0051883d6cc68bca194be7c3d060"],["/tags/最小生成树/index.html","bd3e819409771d5e00a5d42a4ddb4bb0"],["/tags/最短路/index.html","6e48105da9f28ada64b791834179c8e5"],["/tags/最长回文子串/index.html","64ab03a47056913ee1671c7a69a79006"],["/tags/极角/index.html","720bc7cdfadfc27a9647f23f879ce617"],["/tags/染色/index.html","8eb425074f7142f7fe8d4078e4a91e21"],["/tags/栈/index.html","f160141ff2bc4ddf71ba7cc4e2c9782a"],["/tags/树/index.html","92ba53c762a9dea6c5fb53560e1cf71b"],["/tags/树剖/index.html","bb31d4caddd593be3f9c5fe2792c22ff"],["/tags/树套树/index.html","204197e7bf7c23d715fbd52f38373eec"],["/tags/树状数组/index.html","820da30f3957bb40bb8c3ff80e462ba4"],["/tags/树链剖分/index.html","8d55849da6156c2ba49cedf05c304da7"],["/tags/模拟赛/index.html","218b0beca1a652bb3a050dc8c79d72f7"],["/tags/模拟题/index.html","e80e1b11bd7f8f2246d999811e91ca70"],["/tags/模板/index.html","717d0fc87fde9621e4495e5e6756a561"],["/tags/模版/index.html","4da8a92c0646d7f7619b05b689b58762"],["/tags/模版题/index.html","c961b9a57185372fd9faeb40c99db8c8"],["/tags/欧拉函数/index.html","8f8d291f43bb2cf06bd3d268c22c8073"],["/tags/欧拉筛/index.html","580e7b2758536583df99a308dd1cca4f"],["/tags/毒瘤/index.html","9c8897ee9aac4eaa60a3407e8987bb34"],["/tags/测试题/index.html","9d544eaf61a745deaa98c79e1ffb3bb3"],["/tags/济南/index.html","855528dff449d5030f5ba23796556cb3"],["/tags/清北/index.html","75670dc1da5f4c7c6765c8e176b38eae"],["/tags/爆零/index.html","a3587d7c5e960c4662d3e27561a95247"],["/tags/玄学/index.html","8a2860418d9483603df6c493ae785971"],["/tags/珂朵莉/index.html","be675dac2041a25d9b8c39134d0ba293"],["/tags/生成函数/index.html","e774fa6e2d62a7c5e663d24678cf950e"],["/tags/瞎搞/index.html","16df49e2af0007837c7a6b8d3ddcc85d"],["/tags/矩阵/index.html","a060b125936191dcb94b327f6c40512f"],["/tags/矩阵翻转/index.html","4451a5e7d00a96c64acaf0fa554cbd6c"],["/tags/算法/index.html","2410f18f3ea108209cc19fd1a14c1600"],["/tags/算法竞赛/index.html","7aa80df28ff9da8c65735e4562f9b464"],["/tags/素数/index.html","487b5b5d675b4572a3fe51a91fc60c46"],["/tags/线性基/index.html","0cbefa4f46e41ba219aa849fd806be0f"],["/tags/线性筛/index.html","491064ea17f1fa8f608062732a0f8b98"],["/tags/线段树/index.html","b223a37352adc97157b1ade4a3d1b8ad"],["/tags/网络流/index.html","a65403dcea88424587e8f4848785fe6a"],["/tags/群论/index.html","58b667f7113e60f7d33e0026c5d8e158"],["/tags/脚本/index.html","4953eca5b712893ee5a13777f7cff7b2"],["/tags/自动机/index.html","57e7457227005d6da96bb3927dac95a1"],["/tags/莫比乌斯/index.html","c5f96f275ebadbc1931af66329c5c257"],["/tags/莫比乌斯反演/index.html","0d6a894e5020cc353a953cd840f71487"],["/tags/虚数/index.html","18ae2eb334336080cd051a04162cfb7f"],["/tags/计算几何/index.html","099c39650ec7d30dd6811f0195c45892"],["/tags/证明/index.html","c89e470f067c58c653f0d9b6876196aa"],["/tags/评测机/index.html","4fdf2d367171753f6dd90b2e55a05ae9"],["/tags/诗/index.html","027a2fe8a0981ef6d3fa91e2feb88c51"],["/tags/诗歌/index.html","648d5ed25099fa95233c00a10bcce02a"],["/tags/费用流/index.html","c6c0280ea8f1a9f85d53a91fd9bd4007"],["/tags/路径压缩/index.html","f5239b41a294acfaca86e2e9caf7ed8c"],["/tags/逆元/index.html","2cf740c84b044106ce45da439f464ad8"],["/tags/递归/index.html","d803a39498945424d33cf313f55d3941"],["/tags/递推/index.html","4ef967e057c952c31ad3f394851c1bdb"],["/tags/邻接表/index.html","69b8f749d5774040020d91121ded780f"],["/tags/随笔/index.html","7d77453134f55377647aae54eb37ec26"],["/tags/集合/index.html","605d449855454177b0130e613e90bd65"],["/tags/集训/index.html","4d472f4c3220e05f71c2456a5a2a7a33"],["/tags/非旋Treap/index.html","9f81ab85a071f3637afc9c7ea4423da3"],["/tags/非递归/index.html","e9dfe1f3112fdfcd5fb439a6bf3b55a7"],["/tags/预留推进/index.html","dea0905084b5fc35831edadf70e6710c"],["/tags/颓废/index.html","79401ba6bd46e8158888faefdff92684"],["/tags/题目/index.html","34714df85e2197bdece651fb9cc5f2cf"],["/tags/题解/index.html","5f0cd6e551fa0dee279ec6253549f302"],["/tags/题解/page/2/index.html","30628d81ec021d47aaee90528f35fed7"],["/tags/高性能/index.html","0e287e24de4851450d33c6f22fc923ed"],["/tags/高精度/index.html","e4b7b3d9b5bb42c94f0a3c1b08af077c"]];
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
