/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","30c09066a573dd18d308728e99d1fe55"],["/about/index.html","e641bbdecac6d4111e91d80dc3307165"],["/archives/2017/12/index.html","cdbc732c627c571574d83edeb06879a2"],["/archives/2017/index.html","04dd5afbaea70d14ef65bb3df2702889"],["/archives/2018/01/index.html","ab93843af063c49615137dd3f22078c2"],["/archives/2018/02/index.html","477e1c11b293d79479eb1d63de1e3ae7"],["/archives/2018/02/page/2/index.html","1c36bbd733ecb4ffeee732f1e91f9df5"],["/archives/2018/03/index.html","20d99e4c92ab6f6beff5d93c81dd3daf"],["/archives/2018/03/page/2/index.html","d4025e66d72f3d922fc5442750e50459"],["/archives/2018/04/index.html","46ba04c3856fc871d928f7b4f687776d"],["/archives/2018/04/page/2/index.html","607608f93bbfe79e7ca1d59de40d5c55"],["/archives/2018/05/index.html","8c691a2515f6cae533ae88f7c7e98d3a"],["/archives/2018/06/index.html","46779276b00fbdc3b62e44c40e96819d"],["/archives/2018/06/page/2/index.html","dc9f7520f5b84cc218a01b084784fdef"],["/archives/2018/07/index.html","bea55a173455f7f235e6f91c81d646c4"],["/archives/2018/07/page/2/index.html","19b10298c723920dfd54bed7c9a9a76b"],["/archives/2018/08/index.html","bda4a4e63038d89beeedfbf884df97f7"],["/archives/2018/09/index.html","857cf828fe5cd8e675bc9ca2dc502c98"],["/archives/2018/index.html","138715acbcfbe68e4f9c18cf12a81138"],["/archives/2018/page/2/index.html","f12cc413619394b2e0a1ad1454d2c0e5"],["/archives/2018/page/3/index.html","fac398afd334eeeb3b352b55f5344ce6"],["/archives/2018/page/4/index.html","63d5be0eaa1b31678946cf9fc3e9bfb4"],["/archives/2018/page/5/index.html","2ac5293474f7f344d8adc5e7f5c68e38"],["/archives/2018/page/6/index.html","967670857b578387926318303022cd4e"],["/archives/2018/page/7/index.html","ba81cfa0a752fe0c8646dc6da7d860c1"],["/archives/2018/page/8/index.html","6292773753b2e79921373cf9c49c9d4c"],["/archives/2018/page/9/index.html","6fb3b426a6b32bb5f21d92e96ed72c02"],["/archives/index.html","08508d54d3e3de9ee35c07dcbe25a508"],["/archives/page/10/index.html","4a9a054cd878d97901feac7febe1aaf3"],["/archives/page/2/index.html","fdb8cd8e5ffeb916a4840a8e69186d9b"],["/archives/page/3/index.html","4a9023633042d4240d575ab1e48b4ff0"],["/archives/page/4/index.html","b911e40e7db011a5d1760b5e66948608"],["/archives/page/5/index.html","946eeb2fd6da709d35a83f60c8e0e620"],["/archives/page/6/index.html","de052b088d4afc2c2193351e7e90a816"],["/archives/page/7/index.html","744d063705e9de8775febdca59817d6c"],["/archives/page/8/index.html","69a36c59f50d5b678f7e7946228ac733"],["/archives/page/9/index.html","76bf0b7e07aeeb7e53e0108f088f9422"],["/articles/18-4-27-things/index.html","efb2bf8cae14fd5606642d64ab027eca"],["/articles/18-4-29-test/index.html","bea8ae995243ba91f1e581d6a691f158"],["/articles/2018-五校联考-Round1/index.html","6f2fc30c82f6eeaaf8143342f6785098"],["/articles/BigInt/index.html","386369327319e80f3147560d5117901f"],["/articles/CQOI2018-九连环/index.html","5ca51977854e54916709d22c0aca0de9"],["/articles/Chtholly-Tree-ODT/index.html","3840e46f2ec2bbce7b641e2e325a93b2"],["/articles/Code-Style-for-OI/index.html","0daf3054b5a76ffe5a1a6ad53e58c8a2"],["/articles/Computational-geometry1/index.html","fd42e614d931e0021b26707e838054d3"],["/articles/Computational-geometry2/index.html","b74a0de8eeae77ac5ace81fdfd28308a"],["/articles/Computed-geometry/index.html","5a8a01f1d0d49db989bbac55dc8fffd5"],["/articles/Dirichle-product/index.html","da080d25c18df1c77155110d2454b3d0"],["/articles/FFT-study/index.html","8c410db03de28aa85b790fa8379dd369"],["/articles/HeatWave/index.html","528244dd8124ba7574e9323405efa245"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","37bfe84d028645637f00a7fba4a2c21f"],["/articles/JSOI2009-游戏/index.html","c8262dd9daeec5bfb8135ca793a15e1a"],["/articles/KMP-AC-automaton/index.html","6c5c5d0063f2f9489121c43b9a0d671a"],["/articles/KMP-AC-automaton2/index.html","adbaca52a50582c5e345a3ce2173c415"],["/articles/KMP-AC-automaton3/index.html","583c1f22581e997f253b9939856274c1"],["/articles/Kernel-privilege-escalation/index.html","9404302a0b12901e410a4042de15eeaf"],["/articles/Linear-sieve/index.html","862fc90b2e02d5902b3d3f034a51a446"],["/articles/Lucas/index.html","ed75e09d575b831efed95ceca03667af"],["/articles/Luogu-P4276/index.html","2502bded27bccefc93b79e376971e46a"],["/articles/Manacher/index.html","c5f8211a58371f40c45dec4d992ffe99"],["/articles/Minimum-spanning-tree/index.html","95613db9b63ccce1f7179c0989cb1179"],["/articles/Mobius1/index.html","8c2e32a4c663fff1aa42d8ffa31b112a"],["/articles/NOI2010-Plant/index.html","8ec98dfabef344e8224ab51a506a172c"],["/articles/Network-flow-Algorithms/index.html","a45179295259c0b3af81e178238c6e71"],["/articles/Network-flow-start/index.html","ed0ddded3660a9e4a935f75e95447c0a"],["/articles/OI常数优化-进阶/index.html","8a04c6af60a53bc55ea03e5f027b2a48"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","2a0c23f395b3851c0b8611dc64383bb7"],["/articles/P1984-SDOI2008-Water/index.html","c04d9776e2769e7a719757c460618085"],["/articles/P2018/index.html","3598d61ac0c0e1d6fa203af925af0ddc"],["/articles/P3933Chtholly/index.html","e6385f1a22874cad5a9e857737adcf11"],["/articles/Partitioned-Algorithm/index.html","83a9d33c5b5bef52e7769774fc8c4152"],["/articles/RP-introduction/index.html","7c0be08548200e044e00114d5eb21593"],["/articles/Sandaram/index.html","1ef768d0098313767c5a525a5a378d17"],["/articles/SegmentTree/index.html","487ff08a3b282780c6f1d606e5ea5b7d"],["/articles/Segt-in-Treap/index.html","475c3ad28f819fd46a5a1ad7e2e09f99"],["/articles/ShqProblem1/index.html","c4c93da3f491106d68e087bdf9dc09ed"],["/articles/TreeArray/index.html","6dfca4c52a6ac6408d85c17e1c61d231"],["/articles/TreeArray2/index.html","f47d889655a664d4b7310bfc22511736"],["/articles/Union-find-sets/index.html","57043c7ccb67a5f9e23f399be2f988ab"],["/articles/ZJOI2006-书架/index.html","07f4233eacad6d4dda3ac3d7f693753d"],["/articles/ZJOI2007-矩阵游戏/index.html","56560156bea46f18ae40a2b93ce925d5"],["/articles/a-bproblem/index.html","ba7a7f1238d973df2b3bf7450a658670"],["/articles/aboutBlog/index.html","90d8fa34ab63d4d2a34b4b6bf02661d6"],["/articles/aboutgit/index.html","60d59292298eaafcdec082f9c643b4a3"],["/articles/autoAC-lemon/index.html","05dbf38d899a5adc27a29679a2f07361"],["/articles/bzoj-3337/index.html","7ac463ce29a05ec14cbe0625b65c7cf8"],["/articles/cppteach/index.html","cbe8e0440549131b7ed35064b8724d64"],["/articles/css-QWQ/index.html","afdcce9e91bbc487a4ec444cf322aacd"],["/articles/dijkstra-spfa/index.html","614b1cbd7d26714614e966a6322d21a3"],["/articles/dijkstra/index.html","998264237caa12e1d2c915cf92a7d015"],["/articles/dinic/index.html","7b16707520250889f850b1b515a93c92"],["/articles/duliu/index.html","3d49f34a99a8be98179dc9858d39caf6"],["/articles/dynamic-planning/index.html","a8653ff6132fdf627c6a16211b1ddb79"],["/articles/elementaryos/index.html","02745fe88f5c4d39da0ea7d31795b27f"],["/articles/er-fen-tu/index.html","981fd05e47d99a92addd9fce54e17ab7"],["/articles/fhq-treap/index.html","955af532edbecb2766ddfc0f83a7b468"],["/articles/group-theory/index.html","249c79a2041f60977e2ab1ac976ec4b7"],["/articles/hack-spfa/index.html","006dd3b37709449a6ab9a3b79f96c6ca"],["/articles/lgy-from/index.html","1d6c0208dd1c39efbc23695624695b47"],["/articles/linear-basis/index.html","eb26aa386af9d30ae996eb56bc9dc2ab"],["/articles/lyoi-Poetry/index.html","755e0cd185d4a4efe35fe7913fea50b4"],["/articles/lyyz-test-2018-5-19/index.html","0d1fdef7d78ad375ef70ec2bf844674e"],["/articles/markdown/index.html","d6246594f13fd407cab1a0eaf202abbd"],["/articles/moban/index.html","6a2a85f4050878a4428a296de5829dd6"],["/articles/poem1/index.html","7cef18dc399f557a42da9a7edc9eadae"],["/articles/prims/index.html","391a6c617804f7555c575c2dff2a27fe"],["/articles/python1/index.html","db8814c86c3ef6178d43454cc8b4a494"],["/articles/question-01/index.html","e100f5904954619da6e0e7ff25080a29"],["/articles/recursion-to-no-recursion/index.html","78749cdd5d934781068dddcb533aca56"],["/articles/scc1/index.html","ee0b7cc289e7a914183e2d9792851eff"],["/articles/somethinks1/index.html","4c0b486e10051f4facdb8006598f6dfa"],["/articles/terminal/index.html","27ab86f1d9186ef1a91b7ecad680d0b5"],["/articles/terminal2/index.html","19961d464b356e1060699afd01746b1e"],["/articles/test-mode/index.html","9e7d6590bf5565444a4a011cd301c9dc"],["/articles/test-polyline/index.html","680b6675a0803cae82a6d3e440170485"],["/articles/treap/index.html","a43ca54c79d23e21bf086c4120b3dd6f"],["/articles/tubaomb/index.html","c9b521244a1573a6141bb5f5a18d3e67"],["/articles/use-hexo/index.html","9ed05949f9d58d726bb070fbd7228003"],["/articles/use-hexo2/index.html","24760a10ddb5ff22a8feec68ce55a8dd"],["/articles/zkw-tree-algorithm/index.html","559841a5133307313403d6fcb7373ca4"],["/articles/zzWA/index.html","f9bafc377aeeb32c6ffa67bde7be05a2"],["/articles/「LYOI2016-Summer」一次函数/index.html","6113a3df868fe0efa17dc1a15f768468"],["/articles/主席树详解/index.html","7fafacc78db3102c1919f8dcf785f057"],["/articles/分块-P1471/index.html","3c7d2c5595fa85d6673f5782244f4035"],["/articles/可持久化并查集-rope/index.html","3fdd589556cceeff6952635aacbf1cfb"],["/articles/复数表示/index.html","46306ece60998be09925c26117117e75"],["/articles/洲阁筛/index.html","66c8d74e4d69909a41536094d024db39"],["/articles/生成函数/index.html","73d492544757ac4b596436cfcf442f98"],["/articles/网络流-二分图最大匹配/index.html","f60680097a1f4dd4361cd6915ed37667"],["/articles/自然数的和/index.html","431e23b0d2a8a5b3d1532ee5887c06a0"],["/categories/Linux/index.html","09717b05e7b3fca17f910a624785d7db"],["/categories/OI/index.html","3595f6b734ff0be9d190a14bab54e811"],["/categories/OI/page/2/index.html","1f405889b9854b7571dd23a7fbf395ef"],["/categories/OI/page/3/index.html","ca033589b94668b43c98b173d109d913"],["/categories/OI/page/4/index.html","0626591db246db3255328c27f437a059"],["/categories/OI/page/5/index.html","f86a6f4a8c3985138c4d7c7fd46be196"],["/categories/OI/page/6/index.html","0e171afb8eae7ef0485ebd34e8a31697"],["/categories/OI/page/7/index.html","5d60c479a40bfca316ed1579b24071f8"],["/categories/OI/page/8/index.html","2a01fabcda8adb1903282f6bdf679e9d"],["/categories/OI/page/9/index.html","bdda05bce86b2d8283db14c252707480"],["/categories/hexo/index.html","c34448fcf53cb676588e43bcdb88c84d"],["/categories/index.html","7adb1683436f2e42822ef56dbe9490d9"],["/categories/随笔/index.html","866479df91af12393e62e81e5eedd982"],["/comments/index.html","7d3fd7fbfa1380f90ee7f5f44c13d96b"],["/css/main.css","1683eaa90cf58863400af0390ab65043"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","b87935338966d8be0452cac62b36912d"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","4ae2d11684918c58781031878f2c8cf5"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","fe04bad952d207faf979c74fa60777b4"],["/page/2/index.html","16041c3f1c54eb733fb9aaea8566003a"],["/page/3/index.html","a95e5c624409568bd60bc15e81041135"],["/page/4/index.html","2473ca992906139c2561d8ba64f9199f"],["/page/5/index.html","f19abb2a0ee7aad60262ab503615ab98"],["/page/6/index.html","a53e942ca9c609e7a799203715bd4b14"],["/page/7/index.html","805c1e6e999d38050f6bbdc9cd2b7819"],["/page/8/index.html","1a2bd0e6981b28b83d8ef2afc389cd7b"],["/page/9/index.html","09ef7f400bb293daa1f3ade14f8280db"],["/photos/index.html","3ef5a3df039d9beaf09dab71fa0aebc2"],["/remittance/index.html","f7e485ae1fc1a9f6f4a5d7cc9d458fed"],["/sw-register.js","43e9db66b168a153936ca3efb0b9798c"],["/tags/2018/index.html","2f4dcb3939b402f71b71846310be9ec2"],["/tags/AC自动机/index.html","30d15a24a0280b6fec909d9cd310f246"],["/tags/Algorithm/index.html","1227d2c6844d05378b7bc6fd4a412edb"],["/tags/Algorithm/page/2/index.html","b552d6e0ca5a135adef34cd8822c46d5"],["/tags/Algorithm/page/3/index.html","1b254534f66645ccd6aabe020e110e06"],["/tags/Blog/index.html","96b556970e01511b613d76ac58d87349"],["/tags/C-11/index.html","d5142b5adafc2c8fcf6ca26f5ddff457"],["/tags/CQOI/index.html","088393be88a91d7fa4b3a13df52d0d76"],["/tags/Chtholly/index.html","9554c9221b9b15d3db6aac2b23c9ed93"],["/tags/DFT/index.html","2c9effaebf39167cfb21084034dd7694"],["/tags/DP/index.html","4cb5dfe189adbb983c0468cbea4bbb15"],["/tags/Dinic/index.html","88e6a79b22faf6a93a2b00180c5d5213"],["/tags/EK/index.html","c46c30d5e903a1f5c5cedf29cd07f704"],["/tags/EK算法/index.html","0269a6192d46942ee589280a0ed6583c"],["/tags/FFT/index.html","402cd14ca12981c4a83a17dcc049c959"],["/tags/FF方法/index.html","4a8241bd33c0de7a0b64ce7385dc6d9f"],["/tags/Ford/index.html","67818d0076a6987fa0c98b6bf28c82eb"],["/tags/HLPP/index.html","0e4bc19301357acaa2365bd8ef109d6d"],["/tags/Hack/index.html","6daf43198f8b48385a60c06febdf3864"],["/tags/IDFT/index.html","3ddd8205e0aa52c6cc9a4f72a62ee26f"],["/tags/ISAP/index.html","d9649af84ea248caaee73d6c25931c96"],["/tags/JSOI/index.html","7d189c02a041a3c1c1bb67ff250b65d0"],["/tags/KMP/index.html","395376e37c4e910736ca84436f2318d6"],["/tags/KMP自动机/index.html","c4743d937a7da87484ac11c26f65fa49"],["/tags/LYOI/index.html","ec9840d3520af02f92a8e09b5805165f"],["/tags/Lemon/index.html","1f540117cc2fa2d85c21e36e813c5558"],["/tags/Lgy/index.html","c52660e91f8b7000c712ac59a7674684"],["/tags/Linux/index.html","1fdcd5a75cd7e36c6a5b134f1d1ff146"],["/tags/Lucas/index.html","f38592e37462aebbad373e483909c2d7"],["/tags/Luogu/index.html","9bf067c275115b8e2fbe194f1147ecf0"],["/tags/Manacher/index.html","6118f096aa6eb5293ef0ec8e1bcb6187"],["/tags/NOI/index.html","f8a39b6b478f9dc5b73d1d073b3f16fb"],["/tags/NOIP/index.html","d73be4fbea535f582c033ff0e7c28976"],["/tags/NOI导刊/index.html","baae49651263ccfde15b17298608f549"],["/tags/NTT/index.html","5e3080e65804b1fe1cee2995b1963338"],["/tags/OI/index.html","270be89c06b9c8b96a25791d3b0c51d5"],["/tags/Problem/index.html","0e24e4482a9d2bee0476c146d32579cd"],["/tags/Problems/index.html","fcfc96e8848302e3a303757857038555"],["/tags/RP/index.html","87309a2b4141cbf5962a22b6423ef7f4"],["/tags/SAP/index.html","f9ff362ac97928276b1ce8e5be8265b5"],["/tags/SPFA/index.html","94a81f3fa72c9871c48e4a342918c52f"],["/tags/STL/index.html","c057df46e1e5f1171385f8e6a91075f5"],["/tags/Splay/index.html","cd230274fe6fa55b663760000b9f1c08"],["/tags/Tarjian/index.html","77955fed7e90a3a27206b9994cad778b"],["/tags/Treap/index.html","0e39322c70c5cb7d628fa5b2e0d4ba8c"],["/tags/Trie/index.html","cdf945eb4b53f9b782238ab32bafa0cd"],["/tags/USACO/index.html","5ae01df550721ffddf03edd56a368d81"],["/tags/ZJOI/index.html","e1034d25340d9f375b0382857eed9048"],["/tags/blog/index.html","c3212f5816de108c90a46af0c8e68525"],["/tags/bzoj/index.html","77698bc51f13a0936f90a478c210a675"],["/tags/css/index.html","975e24911d160bb2bb97a92f9fdf4af9"],["/tags/dijkstra/index.html","1f4a90757f66c6f3e7e0e1bfd75c4772"],["/tags/dinic/index.html","3a229f6c13aa30cfc17c4f7d92f9e17d"],["/tags/fhq-treap/index.html","224687dc5d59ec9791dd603ff11bd077"],["/tags/gcd/index.html","96ae14e928c9e46a3c19b2d33169066c"],["/tags/git/index.html","d55fdaff8bb369cf086b8712be904d7e"],["/tags/hash/index.html","097244f116b50a05e41721bed9c4ec69"],["/tags/hexo/index.html","29e925c7bb67e0b40ef4db3ca7859081"],["/tags/html/index.html","56e9b70b010428ce04be1b34b8bc40d8"],["/tags/index.html","bb1f9456ba2458f3ae0e759175e85f5d"],["/tags/lambda/index.html","adcc05ef277b8bfd10913f68cfa6a865"],["/tags/luogu/index.html","78a8d71edb7ac9ebb4e5396940ec73d2"],["/tags/lyoi/index.html","d6a638c653bcec5448fa2c770a53180f"],["/tags/markdown/index.html","4ec6028366913a336c979548fc263a51"],["/tags/problem/index.html","f777385250c97ca8b64bc80ac8297953"],["/tags/python/index.html","2b31fe9d472d4ab52559c72162117159"],["/tags/qbxt/index.html","17ae2fd17a9be046a683872f77503995"],["/tags/rope/index.html","d8f2f65e52cabe08bd9697d84b3dab0b"],["/tags/spfa/index.html","bddf336095803659bab4755c667ce3e6"],["/tags/system/index.html","37d2f431e2ae0e72d8660ffbef3edc83"],["/tags/terminal/index.html","c8811cab358ece702846cbc2fc693dbb"],["/tags/zjoi/index.html","ec2561a42f462813a4ba1c1db6f2f614"],["/tags/zkw线段树/index.html","2bb7272c09af088ffe5c5bb04e84f944"],["/tags/临沂一中/index.html","87752bd91ddf0691f1b3feecec6443df"],["/tags/主席树/index.html","cfc4c35def15b621da61a313b433de40"],["/tags/乱搞/index.html","46533e51ae77128e1303628948a9d93a"],["/tags/二分/index.html","0766bbb6d370f91cba5975e6e546af5c"],["/tags/二分图/index.html","53a26d2945a20b330076684127784e1e"],["/tags/二分图匹配/index.html","6d2bc25ceece9a6dc871aa991a1bc083"],["/tags/二分图最大匹配/index.html","9dd03319b728f041720a72dcb91c3204"],["/tags/二叉搜索树/index.html","0b20cb88806cbfb26167835b04039aac"],["/tags/二叉树/index.html","3d0328c4c9ec8e19618617cdbc2f3633"],["/tags/五校联考/index.html","1c9fa6c360013b74803ffaeba84fb300"],["/tags/代码规范/index.html","0c8ecb57980f36ee0cbd442eda90b6b1"],["/tags/优化/index.html","6ed3ea4d9ae6864125657e3e71f70dad"],["/tags/内核/index.html","af5cf75cb5b30bc5526b1b55393e0f57"],["/tags/内核提权/index.html","43c1fe258d1607540983acdda3ab99d5"],["/tags/几何/index.html","461c2a8d380a0e6affe88360c84dff06"],["/tags/凸包/index.html","50e2623061105bf8c1629024822fa42d"],["/tags/函数/index.html","79e381638bf40daa70643d3723224cfc"],["/tags/分块/index.html","c429de502dc30b0d9cfcefd2142b1208"],["/tags/初等数论/index.html","2a3301944e7e3276b111e045ae153009"],["/tags/前缀和/index.html","652de10fb52fd7083e3571013e1fe7b1"],["/tags/动态规划/index.html","0674ca8a8206acf17bc24d1ffae08a7b"],["/tags/匈牙利算法/index.html","3ef1e302d304aa93386452d3d5fa4f6b"],["/tags/区间/index.html","1746e8c75d7a0cf4d7cf82de273d6129"],["/tags/区间操作/index.html","5b69831a190fdc9fc2e498ad10938faa"],["/tags/区间第k小/index.html","2605bb37bcca577752b993ae618d0816"],["/tags/半平面交/index.html","3ad9fd47851989949f231a3c041c8f29"],["/tags/单源最短路径/index.html","2d5642f3eb675b65382d55ce6b1c63bb"],["/tags/博弈论/index.html","56cdf348c05756c29a4be41e800a827e"],["/tags/卡常/index.html","0974a472cd1eb3cb5deae3f1bb4c4ce3"],["/tags/卢卡斯定理/index.html","d935e8e383285882b9faef4358b7590f"],["/tags/卷积/index.html","414472a702c6554d08de0ce99048e355"],["/tags/叉积/index.html","e474800e9b1f27de4caf030abe112c8d"],["/tags/可持久化/index.html","ec08c9dde683d9ffd764c7a0ab5403fb"],["/tags/向量/index.html","e23c9dc579bdf9db21c52debcdce2b7d"],["/tags/图/index.html","da75610f4b81dad1a342bb0f5928916a"],["/tags/图论/index.html","ad243f0ae6063cdd8e9be284af164709"],["/tags/块状链表/index.html","a01c4ca7ca109d2a45e68cf9af1fe419"],["/tags/增广路/index.html","6ce8a27904a9e7464b5925eb167077f3"],["/tags/复平面/index.html","952e5530eced29dc4269b85fc16709e4"],["/tags/复数/index.html","d07aeb682f99ef55b322e2dc300af0b6"],["/tags/字符串/index.html","738c59691d5c9ffeabe50b644d35f25e"],["/tags/学习笔记/index.html","49415da9d814c753117455c740a8f206"],["/tags/常数优化/index.html","04c5d73fece522f72ad63c12f94cf6f7"],["/tags/平衡树/index.html","327b51aa58540f921dd37c3b694e6813"],["/tags/平面几何/index.html","d1bb7675032b77a0215defcf40e4b92d"],["/tags/并查集/index.html","e9c154a57ecfc400c16a17660c7b11eb"],["/tags/强联通/index.html","d2a63829eb86008a72d0e898bb982cbc"],["/tags/快速傅里叶变换/index.html","32a043a76074ce0e4d62f4edbfbb5d02"],["/tags/总结/index.html","14cfa9672b67bdb419e4a380efcdce92"],["/tags/感悟/index.html","7aa7184536a7a76feec80178831b2328"],["/tags/技巧/index.html","5dc852cae419eb30f48538ed7008ef1b"],["/tags/抽象代数/index.html","88d0afb8ce71acb8886bfd8c9dc8578c"],["/tags/教程/index.html","e765c4a3e338a2017f2f7f2279381cc7"],["/tags/数堆/index.html","b73e523373d57c71a640be55f81fe2a2"],["/tags/数学/index.html","20b4abd96ebf76e358814314b692cc91"],["/tags/数学/page/2/index.html","c66085903a999b79f81e9ae848955299"],["/tags/数据结构/index.html","e751b201433ab211d6e06611faedf524"],["/tags/数据结构/page/2/index.html","6e1dfd00e680081104932dec21541ccb"],["/tags/数论/index.html","bd9624b34978a88a2dbe572b5fa013ce"],["/tags/数论/page/2/index.html","242b4c66f8ed901f0c6a7bec166b45b1"],["/tags/文学/index.html","fee3a470e714c6f45f5780e65dc4ba5d"],["/tags/方差/index.html","443bc3e49500fe9dc02dae527ad2e1fa"],["/tags/智熄/index.html","98175d82f927cf7ff5b807b71872bff7"],["/tags/暴力/index.html","2d3bd3341b41bfd3e4e1cf9bad14d976"],["/tags/替罪羊树/index.html","0baf3dec7cb79948fe605a63d072bc90"],["/tags/最优化/index.html","0157c1b11106bdd121a27366d70ec059"],["/tags/最大流/index.html","a438b4e161e33e104a7920cc8ed1c2c8"],["/tags/最小割/index.html","4cf67218f5a4c1d9f7b8ed6e4060cfa3"],["/tags/最小割最大流定理/index.html","52d93d34c20faf50aab40bfae1e78359"],["/tags/最小生成树/index.html","16f2831ca7efda8d1e9dde5e188e3be5"],["/tags/最短路/index.html","491cb8b6c0fcaa570b950ae00472aa82"],["/tags/最长回文子串/index.html","e1189a61f321c7275c4147338111a15c"],["/tags/极角/index.html","6db3133340b4d3998717c2a00e18b097"],["/tags/染色/index.html","94c9321408ca6a199533aec705c961c0"],["/tags/栈/index.html","a2f20b27c621785bf6d392f21f427a58"],["/tags/树/index.html","762409ab14d6015a74399be6751bb8ec"],["/tags/树剖/index.html","f0f425ac0687b89e545ac1bc8f85ea47"],["/tags/树套树/index.html","2aab3b5c193f8af379701b7f667bc0d3"],["/tags/树状数组/index.html","3d751bdfef9e35363e0f31d2371211a5"],["/tags/树链剖分/index.html","4c6c69ec1f012048ca049274e9070f02"],["/tags/模拟赛/index.html","7dc53d39705345faec62852a984e28aa"],["/tags/模拟题/index.html","3004bebb584ce8b1a58e31c2c0367b1e"],["/tags/模板/index.html","52a89dac5bc540866113fba8934688f1"],["/tags/模版/index.html","c486ddc5c6eaa5f3537ccbef6faec9d7"],["/tags/模版题/index.html","906bc450ba90ea5f942345f24c2c74cf"],["/tags/欧拉函数/index.html","da68eb18087a6b7c6fd341e032a6fd69"],["/tags/欧拉筛/index.html","6becd840ddc2e73b15d62d15bcb15e30"],["/tags/毒瘤/index.html","4421e87c43e6b663ce176ba245120159"],["/tags/测试题/index.html","440d551f2c2b432f807c5277fc98a263"],["/tags/济南/index.html","b9624eea56e901a3b6338e8e07d9f4b0"],["/tags/清北/index.html","4941684427aa5db8834adacc2a5a6980"],["/tags/爆零/index.html","2aad50130869c3e9020fd3916afab955"],["/tags/玄学/index.html","117475dd6a7206b8f3fb225d04b6dcf6"],["/tags/珂朵莉/index.html","23d2f33deaa7b893cac6b1ea6346a9f7"],["/tags/生成函数/index.html","9632888ab2aa4ca2a1c54fdbb7e78eaa"],["/tags/瞎搞/index.html","8496effcaa9f1766fb54014154d09ff9"],["/tags/矩阵/index.html","92e50119cda488642cf99fd09471f6d5"],["/tags/矩阵翻转/index.html","17b93ecf20f4b3d14b8dca49d88e5c46"],["/tags/算法/index.html","dbc443216ec3999dd3f73f8b1bcf1a74"],["/tags/算法竞赛/index.html","c3a62f5063e3dc2bf24de6bea731a823"],["/tags/素数/index.html","8ce31ce2dcced4b84cc13a8aa857a541"],["/tags/线性基/index.html","5695b21d7b48732ec72b5c960affcbb6"],["/tags/线性筛/index.html","bb203e382d3d4c813a589192c87db3c2"],["/tags/线段树/index.html","df1d96dfe2c6d81e92c21429e6ac430e"],["/tags/网络流/index.html","ae4c3b860a6248b4555fc13503bcd4d8"],["/tags/群论/index.html","62a31c99f18b873af6792e7d77e0fb1e"],["/tags/脚本/index.html","d8d94c24e0c948be09a4a9a8607f01e6"],["/tags/自动机/index.html","aa16c56bf9c6f3b6bbd634aa273cbabe"],["/tags/莫比乌斯/index.html","de1bd5fcf7a7eee32b93e2003d90af86"],["/tags/莫比乌斯反演/index.html","bb14c7ee8c5c382591f065d283b84480"],["/tags/虚数/index.html","dacab8dacbaf6af7a691a21d9844101d"],["/tags/计算几何/index.html","05dd5ac17d60eebe0ff6870ae4cf1ab4"],["/tags/证明/index.html","3e504a12968b1dd8b6d900fbaa04833c"],["/tags/评测机/index.html","afd5c256ad803bab2f269106d73cdc0c"],["/tags/诗/index.html","638984bad015d4cf6028da8af25f2ee9"],["/tags/诗歌/index.html","6afae4fe88f8b13ded4a7899bd5223da"],["/tags/费用流/index.html","e21a76be1f648af4701c608437915bdf"],["/tags/路径压缩/index.html","e709ebcbef538ccbe83933801937aeb4"],["/tags/逆元/index.html","c6ef65dce35a4798d914e8a134ac8431"],["/tags/递归/index.html","f45f39b42ae2a8a03181e78274569f2e"],["/tags/递推/index.html","f0c754b087b9333d36447a6726e0853c"],["/tags/邻接表/index.html","7ef6df8490a7fc05bf314072ac764c1f"],["/tags/随笔/index.html","2d44ced9eb4ba36270af1c266f239db3"],["/tags/集合/index.html","6fca4af3e6bfcb0f2853cc6565f93347"],["/tags/集训/index.html","d310e3270fb808a94d0431e35fc6a31c"],["/tags/非旋Treap/index.html","74e04d436f8c356a833f488c43fe5bd6"],["/tags/非递归/index.html","d75170bd9cce0f44eeee6787fb5d8298"],["/tags/预留推进/index.html","533af0226f513eee606ac39357ad24d0"],["/tags/颓废/index.html","af5a4938784b4a6d69124551c842680b"],["/tags/题目/index.html","6805f147800e7b1e4fc86d2da0b0ff55"],["/tags/题解/index.html","2880fd2ddc48777ea017771aefdd700e"],["/tags/题解/page/2/index.html","c7be2b7ebbcb89142136a75677a45b64"],["/tags/高性能/index.html","671094fa7c8eb01094a943c556d8b5ff"],["/tags/高精/index.html","a151d66883879d1a6fe000d4a3b427f8"],["/tags/高精度/index.html","e74b6d0492fe23db1334c17224af5ecd"]];
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
