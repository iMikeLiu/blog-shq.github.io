/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","0ca9d288b03292646096c37703003075"],["/about/index.html","c294d3f34ef5a915d082e53e039db723"],["/archives/2017/12/index.html","a855c574deeb47628445cf6ded64b515"],["/archives/2017/index.html","4eb3d12349821f707fe7edb36dfb1761"],["/archives/2018/01/index.html","b7956ac520c16072cdfb4a22eb9b8a69"],["/archives/2018/02/index.html","aa32416e89a74a1e807206435d068cdd"],["/archives/2018/02/page/2/index.html","59e0fa9555570f1116cd8ff928219e7f"],["/archives/2018/03/index.html","8b32abc3c7e3c6a0b024765eba62ab3c"],["/archives/2018/03/page/2/index.html","9e225da6067ca3625a21583edf7744e7"],["/archives/2018/04/index.html","4b2f36882dcffc0d3cb44cd44f7761d9"],["/archives/2018/04/page/2/index.html","54f193d39e6fb4219cf5b1610d544712"],["/archives/2018/05/index.html","81760cf29d2af781fabf8c9e940539d1"],["/archives/2018/06/index.html","e22cc6a0ac1c223b042fd8290705a12f"],["/archives/2018/06/page/2/index.html","2249aeebadf9e5dc5957b69b23560ca6"],["/archives/2018/07/index.html","ef2dafc7d22672291255aaec13931f88"],["/archives/2018/07/page/2/index.html","fe713e7f680a4c063f5e4403bb2c5cb9"],["/archives/2018/08/index.html","27214544b87558248a1c509b7c4f3210"],["/archives/2018/09/index.html","60d44c04f0ce217871bd9e6a04804e9e"],["/archives/2018/10/index.html","ad8cc0e6bbd84c9cbfbecf80f5b81a5f"],["/archives/2018/index.html","51d166c9ce0b5c23e74e49ad50591d15"],["/archives/2018/page/2/index.html","5cd129ef66ceca9a5cc88990b2bcfa28"],["/archives/2018/page/3/index.html","beb0fd87663f604dd3a6409ab5857450"],["/archives/2018/page/4/index.html","cb3d7d19ecc1393ee419c09aa269b8f9"],["/archives/2018/page/5/index.html","4fd62fd0247a16a96f67b401f1f742eb"],["/archives/2018/page/6/index.html","742d58944bb379ea2ed4afcfd795fe09"],["/archives/2018/page/7/index.html","b8ac301e111b46006aa08f10d993394d"],["/archives/2018/page/8/index.html","7156cb575477115d24bb903f9a409cdd"],["/archives/2018/page/9/index.html","7e4db8ec75d9eab04568fb5791aaa324"],["/archives/index.html","fbe338427233b8eba190bf80eddd5c7d"],["/archives/page/10/index.html","664290651c01544b33c095f82ab6cb39"],["/archives/page/2/index.html","975c983aa3bbe4b3e1ba89bb9279eb8b"],["/archives/page/3/index.html","4f155cd624022ca9a741027cec52318d"],["/archives/page/4/index.html","48c30205477903fed3b3aa6c4a6807dd"],["/archives/page/5/index.html","69b2928e9442a1fc74aa0503fe4e791f"],["/archives/page/6/index.html","1f7c7bc21e7aa3fe619a34d7e0129656"],["/archives/page/7/index.html","49ea373a20924a1ac1ab539292ab1887"],["/archives/page/8/index.html","33731964acbdfd5531cadd3f6bb41bfc"],["/archives/page/9/index.html","a68c20c997d349c62bd1f6f0bc0ffd69"],["/articles/18-4-27-things/index.html","133b0eb6890d7340dbd71bc80451e15f"],["/articles/18-4-29-test/index.html","f97b26e8dcc86d4c56738eb25e9e93b3"],["/articles/2018-五校联考-Round1/index.html","e2e587b5def6d84aa9578c935760b693"],["/articles/BigInt/index.html","23a5d2d9cc59c67ef80e92da5716cd20"],["/articles/CQOI2018-九连环/index.html","1a58a53c3951e8c5fcd18921d32b9ecd"],["/articles/Chtholly-Tree-ODT/index.html","21bcd49988092e0153a2b0968f88f8f5"],["/articles/Code-Style-for-OI/index.html","688c61e01798d6854bfb06e0783b7dec"],["/articles/CodeForces1051/index.html","8541b39d9e1cd118bbcfb7c605f6813e"],["/articles/Computational-geometry1/index.html","d0b817cec5152cbebf04c68f9e8cc7a5"],["/articles/Computational-geometry2/index.html","6430481784495488cbea8ba1c2e2418b"],["/articles/Computed-geometry/index.html","21811f4acf0bcc517d126fe36e412a53"],["/articles/Dirichle-product/index.html","bc949e52018507e48b33923791a70cf6"],["/articles/FFT-study/index.html","c1586b8a0f2cdca9d969c109c973872b"],["/articles/HeatWave/index.html","21899a7d128475616072230b500ea546"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","62a537bdca97fd8270352fa1ceb01f9b"],["/articles/JSOI2009-游戏/index.html","d3b126b1a727cd57cafdcace81dd57f3"],["/articles/KMP-AC-automaton/index.html","4e332c74aeba0404d21976dbfd843004"],["/articles/KMP-AC-automaton2/index.html","2577a764272ef2b262f3e659a814bae0"],["/articles/KMP-AC-automaton3/index.html","f83b5d574c817c92e61ed3ed8a8b8013"],["/articles/Kernel-privilege-escalation/index.html","a460a7123f3b5ad106f5b16746deda47"],["/articles/Linear-sieve/index.html","64bdadea179879f775c016c3dd0d9336"],["/articles/Lucas/index.html","cb23f7be9ccd8d3fd115e35e75868680"],["/articles/Luogu-P4276/index.html","f7f7f093dd17983fa311603c3148cf12"],["/articles/Manacher/index.html","2a864585cda538883d94f4f60adb32a7"],["/articles/Minimum-spanning-tree/index.html","0883709d0f6152cda4035eccab0dadb2"],["/articles/Mobius1/index.html","25146eb9da264464f95bbcbced181774"],["/articles/NOI2010-Plant/index.html","98572cec6d15bc7017117a252d9b8d23"],["/articles/NOIPreliminaries-Prepare/index.html","722765a9d923773f2571d6961a4b115c"],["/articles/Network-flow-Algorithms/index.html","10b6e2a042d6299445e4ca328f071430"],["/articles/Network-flow-start/index.html","a29eb4613137405f5c2de41a32eb49d7"],["/articles/OI常数优化-进阶/index.html","9fbea53c039f41ce9bb9ac0415319d04"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","d90d09f3e769454d737eb00145bf9272"],["/articles/P1984-SDOI2008-Water/index.html","3f642d81f505367a6013d81b7d21eac6"],["/articles/P2018/index.html","c314116eb62b79b10634046bb594f699"],["/articles/P3933Chtholly/index.html","918f445c7fdc0e781ee1ecffb4c57cf2"],["/articles/Partitioned-Algorithm/index.html","3085288b8e9753fc512b71ca75094021"],["/articles/RP-introduction/index.html","de89d099911333ead2a185f9c585825a"],["/articles/Sandaram/index.html","31500b97064c1738233f847eca000c65"],["/articles/SegmentTree/index.html","f01932ef562dcb58681c9dab94d61cb0"],["/articles/Segt-in-Treap/index.html","91584b2e401aab46befa94ec1df1a58f"],["/articles/ShqProblem1/index.html","a881f38149f02376ad2f37cfd34b8da2"],["/articles/TreeArray/index.html","c4d2553bbc10c0f1cda1165953e45b9e"],["/articles/TreeArray2/index.html","bb35c65c0f814309db684d98415372f7"],["/articles/Twelvefold-way/index.html","5756ff80f18b0fec488671196fbe012a"],["/articles/Union-find-sets/index.html","9428d156e73164be374207d00d5ba61d"],["/articles/ZJOI2006-书架/index.html","905086a597e1a828faab2021402ff544"],["/articles/ZJOI2007-矩阵游戏/index.html","d278658ab256a3f0184914b0e44a6da9"],["/articles/a-bproblem/index.html","4e4a78df0470f5ae2023d664c9408724"],["/articles/aboutBlog/index.html","12bfd1da13523f88dcc02f68a267a956"],["/articles/aboutgit/index.html","0fe9444a716080479d4460ce523d3db2"],["/articles/autoAC-lemon/index.html","10fdd3f16293d4f49eb500b648482b65"],["/articles/bzoj-3337/index.html","d72838fc5e8bafd82c6f17ec89ae4759"],["/articles/cppteach/index.html","5ffef281be029107f4174ccd74c3a822"],["/articles/css-QWQ/index.html","4d1cb360cb706cb43591fd1d7959e766"],["/articles/dijkstra-spfa/index.html","4cd2361fb618035a1953ec7c20e9761f"],["/articles/dijkstra/index.html","efb050f2462e05ccaebaea67345b0bdb"],["/articles/dinic/index.html","d67ca077180fc951ee9c360e40066dea"],["/articles/duliu/index.html","f58ba9a7918b0448b0529e3e84422e4d"],["/articles/dynamic-planning/index.html","fd3a97318ed78495e2def0f093a1b60d"],["/articles/elementaryos/index.html","eb8aeb2e3087268cef712f639efdd598"],["/articles/er-fen-tu/index.html","6ef5771f630deffef9a96fa656e498e2"],["/articles/fhq-treap/index.html","4a6dd99e6d98d0d1a039f2d3a68d3000"],["/articles/group-theory/index.html","520229e29260c76454647bc30a0434db"],["/articles/hack-spfa/index.html","f53a86cc4ac753aa854cf4e8941cc0e5"],["/articles/lgy-from/index.html","0e6ad3327d25083ab81224b456a8c443"],["/articles/linear-basis/index.html","097bf40cac69e47e6e564e2f33a4c65a"],["/articles/lyoi-Poetry/index.html","117e38eb1e376e838592f45730fc7754"],["/articles/lyyz-test-2018-5-19/index.html","f27dbba179ed0de61930193fa68f6c3b"],["/articles/markdown/index.html","f60dce18b49cea8b1e45f12b442a1c8d"],["/articles/moban/index.html","c55fabdb663a96f43575eb675530e80a"],["/articles/poem1/index.html","9c5d2a624e8bcfb44bc7bfc366530da8"],["/articles/prims/index.html","222e983590381b6fee11884f574c0873"],["/articles/python1/index.html","52f8c16516348cc6a80229aa09a3f904"],["/articles/question-01/index.html","595216eecdf0605ef3e5c6349f053ab6"],["/articles/recursion-to-no-recursion/index.html","bc9aa07c48a93749534d80b6adde1544"],["/articles/scc1/index.html","c7bf358ff1823043ceea1f4961c34f57"],["/articles/somethinks1/index.html","80a1a731dd60a9e8013c81a06602fa09"],["/articles/terminal/index.html","aad37f04837086131bd2358f811a1ec6"],["/articles/terminal2/index.html","ac9dee5105e35953f14026480efca505"],["/articles/test-mode/index.html","45c202211482618dec858e1f71360cc0"],["/articles/test-polyline/index.html","b4e73714d801c92e9c1b1268d3e84ffb"],["/articles/treap/index.html","4b296641051dbf9c38602cf34f02a7f4"],["/articles/tubaomb/index.html","6de658616fcea6009b5f8d95049fcccb"],["/articles/use-hexo/index.html","a92f507b19df90a683b2a33f56a3f051"],["/articles/use-hexo2/index.html","a8a7595608686bd43b66d779884ce4d7"],["/articles/zkw-tree-algorithm/index.html","f9485633e1a9afe010670b7560fd42d1"],["/articles/zzWA/index.html","d190cf9da7cb1d79758fe751feb547fc"],["/articles/「LYOI2016-Summer」一次函数/index.html","e807a2f70184a2098c713f28f5508648"],["/articles/主席树详解/index.html","f090dd670591e74440088f87a96848d4"],["/articles/分块-P1471/index.html","db97d14c54610359679488def3db13da"],["/articles/可持久化并查集-rope/index.html","3912c769e2a37c0555aa1755f687ca19"],["/articles/复数表示/index.html","c784f65005fc3c44ec15035eab78d478"],["/articles/洲阁筛/index.html","0680a271c41301663994314b591252d2"],["/articles/生成函数/index.html","03818b8f4b415bd669fc8f8d07978014"],["/articles/网络流-二分图最大匹配/index.html","e74c6fbfed1d617e8f63e111c107fe98"],["/articles/自然数的和/index.html","34b82228dc6e0bcec54accd6b4ad35ac"],["/categories/Linux/index.html","85faa0b6ca83e6510a8f213d9f6d9215"],["/categories/OI/index.html","259ade48c64df3a83847561e9bb4eed0"],["/categories/OI/page/2/index.html","f1484b98ef162d3abbc91a75d9fe4bfe"],["/categories/OI/page/3/index.html","c2c58b675d954119c30769fed11bfa8c"],["/categories/OI/page/4/index.html","953f6a83b7b19ac8de0103d31ad1037f"],["/categories/OI/page/5/index.html","7122892d0e48f66ed5940f304a1de24c"],["/categories/OI/page/6/index.html","ef9c4207ff9d2d80e90008f44808bc6b"],["/categories/OI/page/7/index.html","631a2f32dab5cae3824e41982e172636"],["/categories/OI/page/8/index.html","15a8633aea69d9a39c2c364b55eaf167"],["/categories/OI/page/9/index.html","f8bdc5903d43329edea9b1addb54d36b"],["/categories/hexo/index.html","baa357c67e2b202232a746a73f5bccaa"],["/categories/index.html","e14bc8b04980050a9abc9411242b7aad"],["/categories/随笔/index.html","ecc620ddfb7dc7fc39922c2bd7435ff3"],["/comments/index.html","449554edf644d648d05543297416deec"],["/css/main.css","ba2e8b5c31a8b6d93f6ce2f3809c5333"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","0e5ac444cda2e7d325d250faaa6f592e"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","c32604259aa5b28a7a36e76701b82d3b"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","2ab9da9a17d0fce527dc47c8d2128fad"],["/page/2/index.html","f93cea8b665719bf1e4e21f35ac87986"],["/page/3/index.html","5b61571995ecb8ebf605fa03dc6f3b73"],["/page/4/index.html","f3a5f2eca0058161ba7296c811f9f456"],["/page/5/index.html","7eec74717e28125f8b481a538a5fb5df"],["/page/6/index.html","6402d8a516c5df469664eac8993cc42c"],["/page/7/index.html","73da8ba7d351c9de4c8689d7d703b64a"],["/page/8/index.html","453d4f0497b2dc68bb5783940cf9fcca"],["/page/9/index.html","2abc19ab53773306070d7df9272046e3"],["/photos/index.html","9644e9bf3073a1166d9306c7de08f49f"],["/remittance/index.html","bc306049a67b21b599747a5737e9af27"],["/sw-register.js","b958540b496298956a9038ed29f34a5b"],["/tags/2018/index.html","1c8b29d26c4e2d8dfec3e23a6c9ed369"],["/tags/AC自动机/index.html","12272bd88c18a114a22f1d9a110e51b0"],["/tags/Algorithm/index.html","9e6e1522fea7cc7c323e2a64d1412d56"],["/tags/Algorithm/page/2/index.html","05bc0458ae19087b05e95abadb54c5ec"],["/tags/Algorithm/page/3/index.html","78b6a580091a626d12a283ad9998a398"],["/tags/Blog/index.html","c4e38a39f66b061250adbfa0831d0057"],["/tags/C-11/index.html","ddaa46456b5e275d628bcf69224a51bc"],["/tags/CQOI/index.html","858470dea77d340d8d3607e93126c602"],["/tags/Chtholly/index.html","3294adf332a6f34b37b0f259a6a38fce"],["/tags/Codeforces/index.html","1f5140321d151f552a3b24d1c6f4c626"],["/tags/DFT/index.html","6eb65dcafce9ec7af9d619f057cabe47"],["/tags/DP/index.html","ddbfac131b519af66ee81f9bee369abe"],["/tags/Dinic/index.html","6cee21d488fb0a18b466c580127fc401"],["/tags/EK/index.html","d1667421f291f3a7b889666ba0af85fe"],["/tags/EK算法/index.html","9d3254fe1713e3778ed859eee5e29d29"],["/tags/FFT/index.html","2be5a4b33c6e5e1f310570bc39bbc992"],["/tags/FF方法/index.html","f872902f48b041e637df44dafd90f22b"],["/tags/Ford/index.html","d83a47593c6fe64fc265f41333aff958"],["/tags/HLPP/index.html","3a5384cf1ff84482054e059e565b2030"],["/tags/Hack/index.html","d5d4a6deffefb12cabc42c521370572e"],["/tags/IDFT/index.html","5e86dd57f8c7dd61aedb36ed4ef8e179"],["/tags/ISAP/index.html","6e175214fd47dc4e877462cb5f8dbf36"],["/tags/JSOI/index.html","34ab2a1ab9801a8470c4fc478ba6b146"],["/tags/KMP/index.html","8fabf9221743a2e1dd8a4a72d6fbbdb9"],["/tags/KMP自动机/index.html","3e1b593b16da2458c5dd2fdd01872281"],["/tags/LYOI/index.html","478fc43f7d13cc4fd5782d4d28763c7f"],["/tags/Lemon/index.html","574c9bdcebbc797154a983f4165e2aa9"],["/tags/Lgy/index.html","bc480519258fcfd3fa6426bebaa26a85"],["/tags/Linux/index.html","fa5dbf9a917bd7bc31b6ce461a1f7a64"],["/tags/Lucas/index.html","d77af68ab229085af707cb10a99a44ac"],["/tags/Luogu/index.html","4ca7df5b203572eb899cd1c2013c3ab9"],["/tags/Manacher/index.html","4f36111bff505bb9e2fc2c4a98d78f91"],["/tags/NOI/index.html","9c15d08dab66a2b5cdf459f345a32d42"],["/tags/NOIP/index.html","01d5dee6049b81c7e2a7195a1e4ba72a"],["/tags/NOI导刊/index.html","08303f3d93c95f7f6d3b3fb386e8cd01"],["/tags/NTT/index.html","da216a57cbb620822287ef5218f02639"],["/tags/OI/index.html","1162ddb3ccce45367f8a98021248c0f2"],["/tags/Problem/index.html","652f119dc34f4cfc931e4e12637c03d0"],["/tags/Problems/index.html","bced7e31da9029b9b9718fa62948bcb2"],["/tags/RP/index.html","dc27219bf863cfde965bc25130a74ba2"],["/tags/SAP/index.html","9caa1221ccbb0c03fa4e05d7dde6b87c"],["/tags/SPFA/index.html","be4d55b081605b28c07b089d69c85e5e"],["/tags/STL/index.html","6a8c3eca6eba53cd55da62e610a82662"],["/tags/Splay/index.html","17e04174bfbfa96c0b16fdfd9d0027d6"],["/tags/Tarjian/index.html","861527b450e11849c7f5e9acd517c94e"],["/tags/Treap/index.html","5b30d4e3afaa3c74320d9ffb38ec38cc"],["/tags/Trie/index.html","923d3270959517e4a0aa3bcd4c4c2a2d"],["/tags/USACO/index.html","0dab5245b91a64baa787b7c184e5694c"],["/tags/ZJOI/index.html","e49ccae215457df359f72fae127e76d1"],["/tags/blog/index.html","38a3791a9869fde6fea4e16f7292780f"],["/tags/bzoj/index.html","09268335fc76818bcfd2c1df5e17d896"],["/tags/css/index.html","ef80614c7636fae0062e61e3ec663d5a"],["/tags/dijkstra/index.html","fd9a7dd01c1a23930a33b9459d02128b"],["/tags/dinic/index.html","dc5e0e7aafb72d7d2aa67a959edace29"],["/tags/fhq-treap/index.html","93cc4a6a034f5d2c14fe32232e860711"],["/tags/gcd/index.html","c6a948df916ba62ae12c8f8de7ae42ef"],["/tags/git/index.html","b7d799ecf71db3e7ed30a407e0c9bc8b"],["/tags/hash/index.html","e5ee78d90945c5564401dfe7c66ecd54"],["/tags/hexo/index.html","eb2db3097c86be8e15cfc52f6c1ff2ef"],["/tags/html/index.html","8e21bc530f0524d42a97d7e68e9303cc"],["/tags/index.html","abaa8348b291f51a3b3cf2f003e616ec"],["/tags/lambda/index.html","7ca4ef8c6142c6a531a3b0126ad186c4"],["/tags/luogu/index.html","aab491e63c1b2506643a2f281381786a"],["/tags/lyoi/index.html","4badecd867c33da289b4e030fe6e3395"],["/tags/markdown/index.html","8f2e8aed2e75b786874bc619a739763d"],["/tags/problem/index.html","86c2f2ffa11c987aec9f051ec3d72133"],["/tags/python/index.html","5f0780facaf5ca06c3f73ecc0d3ad534"],["/tags/qbxt/index.html","c1656bc0624ea99f08de0dfee131dae0"],["/tags/rope/index.html","74a6acf138739c499f0ccb214df395e8"],["/tags/spfa/index.html","9329ad2f28e95ad89188065f4d63549d"],["/tags/system/index.html","694fa6b16d112cf43c405f0eea1691ec"],["/tags/terminal/index.html","d5be5fc60294e117c1680ea3078c1ff1"],["/tags/zjoi/index.html","3d17181b0e149b2f8b2c6088e363e9e5"],["/tags/zkw线段树/index.html","173b2fb8f87202120cf510d0f642c8f9"],["/tags/临沂一中/index.html","b3f6b57fc69cb7672d5d38ccc7586bc0"],["/tags/主席树/index.html","918d7ea3415ddc952c3257df72bc808a"],["/tags/乱搞/index.html","a63d94f5bd57054d05e62a19e4fed2d3"],["/tags/二分/index.html","32e33ebdfa82698913d1be55a53d66b1"],["/tags/二分图/index.html","a1ace04db8a271e58c2b5c78967f95b2"],["/tags/二分图匹配/index.html","915d4c80956730c9741577f40038826e"],["/tags/二分图最大匹配/index.html","0b038e7462e0a8f6fe7babe1d11e4401"],["/tags/二叉搜索树/index.html","998fe0ac91651fe5120912a05c9814f3"],["/tags/二叉树/index.html","2936714eae0454a7a06baec298fd9b68"],["/tags/五校联考/index.html","64fc28882e932f2155b1f4cacff65409"],["/tags/代码规范/index.html","048f8aff0046b3335e7dc788136ccda3"],["/tags/优化/index.html","c9d38304cb1a9f5c69347c717a6cb96e"],["/tags/内核/index.html","70b517ff5dd691ad8ee20d48ae00dde0"],["/tags/内核提权/index.html","e1b9f33b0d67c44ae6e69510d6273198"],["/tags/几何/index.html","d41be47528c3ff76d65557080b16b151"],["/tags/凸包/index.html","44e6ae6fdc1a2e66d14daf72e3324162"],["/tags/函数/index.html","c5e905cc42c31aa88947914d9c62680e"],["/tags/分块/index.html","beee1f73422ecdafdcb1f8bb649a2f5f"],["/tags/初等数论/index.html","2abc7b3eade71d342f50ad5c7e1720ac"],["/tags/初赛/index.html","837553cffe49f250cb58c04236b502b4"],["/tags/前缀和/index.html","e0157590f6ff5ac03f84ea46834b6f39"],["/tags/动态规划/index.html","8aae5f433364edf8081e4fec1d7097d6"],["/tags/匈牙利算法/index.html","42b916086fb9898b792f685dcbf4328c"],["/tags/区间/index.html","631eb3726e0e2eff370bf23ef0b3d004"],["/tags/区间操作/index.html","b883ca2cfb05b4c0c59f7e6df513f766"],["/tags/区间第k小/index.html","bed3bcd2dcba0686750ce9e4fed43421"],["/tags/半平面交/index.html","6de7edcdbc6dccbce63ec283737c9a80"],["/tags/单源最短路径/index.html","8e3fd25f3bf7156c924cd960ce1cb674"],["/tags/博弈论/index.html","ec0356f98b1943ae0e734a8a99b4c6a4"],["/tags/卡常/index.html","2f418f3cd49c1b31a70b29285511b272"],["/tags/卢卡斯定理/index.html","5c22982c7d8e0898bde09725627e8a6d"],["/tags/卷积/index.html","1079de1e4eab087fb7afbc624db875d9"],["/tags/叉积/index.html","09678cb87320823d0161f173ce63f88e"],["/tags/可持久化/index.html","caba2553566e547c597b80edbe69960b"],["/tags/向量/index.html","a1f578fcfc8adc4d8ff97cee4698c657"],["/tags/图/index.html","1f86fb037da46a624f012884f6275aa7"],["/tags/图论/index.html","f630d1edce70e4437d0e0c98a53dd51c"],["/tags/块状链表/index.html","3a347cc903baed1cf5dddae2b1335b62"],["/tags/增广路/index.html","de79656b80cafef5be1b6e7f09f9fda6"],["/tags/复平面/index.html","5c38c8276025a730ee3be77e0f9759a3"],["/tags/复数/index.html","d5d498816fabf8bbd6f058e39873f4ca"],["/tags/字符串/index.html","defb44a14d522d1adde41c536da72b02"],["/tags/学习笔记/index.html","335b224a8502f35606ae8fb5ed42cb40"],["/tags/容斥/index.html","8d3e4d5e0bf20d223bb0e418c6514af8"],["/tags/小学数学/index.html","1ebde05857e99fc5628d6d646106ef80"],["/tags/常数优化/index.html","28afdc9096ff47f76c289735169587ba"],["/tags/平衡树/index.html","a1d837902ea717e49a58c14f992cf103"],["/tags/平面几何/index.html","070e577926f0e1c26230a2b0b4219499"],["/tags/并查集/index.html","2e23fdb37c79c4ddfadb59acc6772786"],["/tags/强联通/index.html","bb2206047d03ee84e6994c2302487d0c"],["/tags/快速傅里叶变换/index.html","9bb107d32be6a4f4938e513372fbd0c4"],["/tags/总结/index.html","35204eed4b72423fb8e1ccd230e4578a"],["/tags/感悟/index.html","cbdf951e953c2af636ff91dce9a83757"],["/tags/技巧/index.html","bcdd47959744f03324c779ef21c59f86"],["/tags/抽象代数/index.html","d9e0acbfcd989a616534030240d1250f"],["/tags/教程/index.html","9a9e5995eae88d0a5f71ae09c3c8b4c1"],["/tags/数堆/index.html","7f9d87ca723b4d8bde8d8e2e5a020350"],["/tags/数学/index.html","40647c7177afd6f65039fc2d33f540e0"],["/tags/数学/page/2/index.html","935c043d24efc6d43a8e5583063ec29f"],["/tags/数据结构/index.html","71376f0125b19f1d441fe393f82abded"],["/tags/数据结构/page/2/index.html","c52401b661b25a1384c4d7078d99082a"],["/tags/数论/index.html","d6a626a4135ebda1399d4650365f1707"],["/tags/数论/page/2/index.html","8af3dd746dab1be427b4d4f5eaa81c3c"],["/tags/文学/index.html","cc0e32520f1967f1dbe8d2178a0b6595"],["/tags/方差/index.html","951126978bc54a1acedf04a86faf8fa2"],["/tags/智熄/index.html","bf61677b72f992ec5a208296c18122fb"],["/tags/暴力/index.html","f8b343ce7cc491f100eeb5db8a50ae33"],["/tags/替罪羊树/index.html","11cc9fefa157c0c3e51fec85b7a35ddb"],["/tags/最优化/index.html","b142eab185b56888d87c028bc3a8c5aa"],["/tags/最大流/index.html","96b01cb18486fc43ce4c18f2707ae14e"],["/tags/最小割/index.html","608fd3de66b7242c1a9a5b38dcc57f94"],["/tags/最小割最大流定理/index.html","a1ebf7aa53e2c038581dc1f71d23012e"],["/tags/最小生成树/index.html","ca204feb2c028be86e840ab6919e767d"],["/tags/最短路/index.html","e8159b6ae6885a4f47f88afa7958d479"],["/tags/最长回文子串/index.html","956d229c705c01d7bc7399df60dfc526"],["/tags/极角/index.html","a377bb1855b8eae70000953e8434373a"],["/tags/染色/index.html","6213a83b3d6ffbdb86ee5357f8684154"],["/tags/栈/index.html","b89b1b85a05371f9bba3f300983132c1"],["/tags/树/index.html","1a8ecd1ef11a3654a8e803b8317c7ce7"],["/tags/树剖/index.html","3318db5913525dc9354ad69f1fd92269"],["/tags/树套树/index.html","ef3d090ac8726d3395a47b10c2c76591"],["/tags/树状数组/index.html","71b9b19cd40cf03b523f058c2107372b"],["/tags/树链剖分/index.html","51910c7d06ca48bc9dd1da13eea0d959"],["/tags/模拟/index.html","7d644c593b763eb995a0447a1041ae48"],["/tags/模拟赛/index.html","3094b5dfb6e7cd9f6cfec25828a4e100"],["/tags/模拟题/index.html","0fdb5d2f30eaed934898a105eb45c2d5"],["/tags/模板/index.html","28d6d09ed5507532a40a24c6ecf69ec5"],["/tags/模版/index.html","c2a3b0b1b7ffa86be50be48826dd0cf2"],["/tags/模版题/index.html","1a155b1a1b17ae7546aa8c1adcf0d6fb"],["/tags/欧拉函数/index.html","f25782fac6bdbe03325c5d05b5f78f42"],["/tags/欧拉筛/index.html","bfd5f41560286b05f3ff69ce5bdfcc71"],["/tags/毒瘤/index.html","8636ef7954f47c349d2202b495bdca5f"],["/tags/测试题/index.html","07816a0fde254a3aa896075b2a7a0d2c"],["/tags/济南/index.html","3dd380edf7dcc06c864899d1910b0009"],["/tags/清北/index.html","f5bf132eb3ed1132d9e069f8225b206c"],["/tags/爆零/index.html","84274217fdfaae4ef2fddfde2b8ad946"],["/tags/玄学/index.html","825e890a90f70567cd9226e1c726f7fb"],["/tags/珂朵莉/index.html","efe071e0619eef09888b8d2dd0d7a7ea"],["/tags/生成函数/index.html","a1c72036ca1aeb857091ea0f616e6797"],["/tags/瞎搞/index.html","0a6c95d848732f88faa512b087a97301"],["/tags/矩阵/index.html","496eea030db1a37d361fbef06f2afa2f"],["/tags/矩阵翻转/index.html","c722af27a4aebed3bb58dbe8c63ac22b"],["/tags/算法/index.html","0066fa4ad0aee2e3ff36d65955621d88"],["/tags/算法竞赛/index.html","a0833929f0fe3c04a8b93ccbbc788314"],["/tags/素数/index.html","5617a5b20357382978f118492b113afc"],["/tags/线性基/index.html","829a50d859c70a4eeb488d4fb76864d8"],["/tags/线性筛/index.html","38a14f7f7a42e6c8233d3eb593a44302"],["/tags/线段树/index.html","586574c2ee32b075e52ead84d1310a8c"],["/tags/组合数/index.html","ab78523841f26d4322b4d0a52d491bba"],["/tags/网络流/index.html","9792cce0b3611b2fb38b376b77a90837"],["/tags/群论/index.html","599bad70ac081d7949e3c1eb1824d30a"],["/tags/脚本/index.html","be2ab99cdc6971ce346b6d8de5c162c5"],["/tags/自动机/index.html","0bfc54fc36a91e59fd6b168cc07daee4"],["/tags/莫比乌斯/index.html","7d9318bfc8a2d0ab07bddf954bb76055"],["/tags/莫比乌斯反演/index.html","352430fc385c1daa1766c81de84d41ea"],["/tags/虚数/index.html","b387365e41ced490ecd8156b785b4de6"],["/tags/计算几何/index.html","5e51b74dbe39957375538717cad938df"],["/tags/证明/index.html","da7f39bf8f7fe607232f38051c7933a2"],["/tags/评测机/index.html","ec789099035c80102cbfe6ce9b798018"],["/tags/诗/index.html","7b784f91f1d5c0dac91e0143d438ac16"],["/tags/诗歌/index.html","0db30a43c8d285430bef658d9b539f09"],["/tags/详解/index.html","23c87e4fb24dd6e7621132cd22215333"],["/tags/费用流/index.html","64461462d38551794a2dacd1c98d1d56"],["/tags/路径压缩/index.html","239b470334bd4b9fcaa113b5b3be4cc0"],["/tags/逆元/index.html","1a3f8c17735bccf60e3bab5cbb46dd2c"],["/tags/递归/index.html","0e09fef44f42882889604f3ae4dbc2f2"],["/tags/递推/index.html","79466942cda4b480b6c3e75abf463abd"],["/tags/邻接表/index.html","82ace745b4c7da5910885459f9874a56"],["/tags/随笔/index.html","ccc95d1f4a25f772f3096da0551349b4"],["/tags/集合/index.html","d067e8685635ea54bbcaae1bf96dd8d1"],["/tags/集训/index.html","951a2249d070a5b3c40452ad03cdcbb5"],["/tags/非旋Treap/index.html","9fe042a13a8d7c7a75bbca9b8b2db226"],["/tags/非递归/index.html","bf1506c0cac56e9a5315088b06b1c05b"],["/tags/预留推进/index.html","ddabf7a9fbbf34946c843213b1b651d3"],["/tags/颓废/index.html","23702bdb49e2cddcf10166c9fcc4e632"],["/tags/题目/index.html","25088f019d3292196762cfef44eaceba"],["/tags/题解/index.html","42fc8a96b4c8347b6139b4c002758883"],["/tags/题解/page/2/index.html","cf5b7fd73776f09336216f6b0157391f"],["/tags/高性能/index.html","3f4801c28bc779c31bfab44a8d19b781"],["/tags/高精/index.html","30bcd33c4799fdad7c8676fa65790b74"],["/tags/高精度/index.html","2be115b1210cf8d28726fadb031e6cbf"]];
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
