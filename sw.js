/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","7f18e5adeab118213997013c3249d7e2"],["/about/index.html","a924d8fbfa15bfd61736ad7be30c39ef"],["/archives/2017/12/index.html","e74c7afc0792aa24856019234a0387e5"],["/archives/2017/index.html","8fa5241f282b567c07b9dbd4136b0638"],["/archives/2018/01/index.html","f5dda8de7670bedebfafab659c13e183"],["/archives/2018/02/index.html","25f1573a7fbdb09f15812427c6605e43"],["/archives/2018/02/page/2/index.html","15ab443239dcb0bdd967c8125ddfd45b"],["/archives/2018/03/index.html","a01ef9f06301af8d5d84b699faa0e14d"],["/archives/2018/03/page/2/index.html","e4c052c22882f2504446c0f112592349"],["/archives/2018/04/index.html","981aea1d337d1e44a65f84284c6f417b"],["/archives/2018/04/page/2/index.html","9ffb5e071d9a1267783bd64737ab84ee"],["/archives/2018/05/index.html","46656e7aaa3790b1a7c50f9f93d1fab9"],["/archives/2018/06/index.html","915cec5acba4a3919738f19c07edb3d1"],["/archives/2018/06/page/2/index.html","cc4d02d7ea44ae9da3fe22484877a91c"],["/archives/2018/07/index.html","a070e6c381bb2483611fb273fe300bbb"],["/archives/2018/07/page/2/index.html","c4a33fead871b4aa91817eb1eca6d769"],["/archives/2018/08/index.html","ec6d3868d250e5c620205140b348f20e"],["/archives/2018/09/index.html","b310828f432929308f0c369ede846a0c"],["/archives/2018/index.html","158bd5875d259bf3a9cdd2554c6ba018"],["/archives/2018/page/2/index.html","32f0b99d109dbe431d2ee7be4db39cc7"],["/archives/2018/page/3/index.html","98bba7557a4ef278a34efd541ec41bd9"],["/archives/2018/page/4/index.html","00e6d500d1f55077a2f90d791dcf7d9b"],["/archives/2018/page/5/index.html","5263a3d3b4cc2636bbbeac551d5ba69d"],["/archives/2018/page/6/index.html","9ea06ebb629f3f4902471e2e1868af32"],["/archives/2018/page/7/index.html","d0e18940b570462c6424351d22aecb42"],["/archives/2018/page/8/index.html","203e04224f96ee1fa8a52fc17f0a6c93"],["/archives/2018/page/9/index.html","352295e71e44ce61bef3e01ad5594114"],["/archives/index.html","f2e36e8aeeb99816474aee13fd1f153e"],["/archives/page/10/index.html","d52f28a9e81d62cd5017c7fd6ce56a06"],["/archives/page/2/index.html","b234798559d005888a7cb49696e09119"],["/archives/page/3/index.html","e6bffb6ef76b71752ddede9270bcb910"],["/archives/page/4/index.html","79699a0a79dd34fc009d946b52a90d48"],["/archives/page/5/index.html","01ba6f90dd1bb64d82d42386d8fa80c0"],["/archives/page/6/index.html","cb71615420e0571caf6ead9703ac77bf"],["/archives/page/7/index.html","f98511ea5f1481a50b563166de66a69e"],["/archives/page/8/index.html","360eb872abad9df345ff1c4fea0fcd39"],["/archives/page/9/index.html","0379ea3ef3c9b388e37d69933a4a576e"],["/articles/18-4-27-things/index.html","28c1b7dfdd0bcbaafaad9223549baf20"],["/articles/18-4-29-test/index.html","4d4e09926dba51769d8771a9469b29fa"],["/articles/2018-五校联考-Round1/index.html","62a0e8165a405f79b4b2116868f16875"],["/articles/BigInt/index.html","5a76fd87e027d560e3fc759f4346fcb1"],["/articles/Chtholly-Tree-ODT/index.html","fe035a208ab47c7e4cf633e55035ce5b"],["/articles/Code-Style-for-OI/index.html","105afcd38b80c8a175f4994a1365a528"],["/articles/Computational-geometry1/index.html","85b6ff03ccfba7bdb3dabcd0f1b9d379"],["/articles/Computational-geometry2/index.html","4c9651f96b71d19b2efed272222cb44c"],["/articles/Computed-geometry/index.html","eb03ce4d4bf7bd5e14d16483d70b2223"],["/articles/Dirichle-product/index.html","9156c797bc0bfe20bf52e0a03888b690"],["/articles/FFT-study/index.html","60745c2e06d5098f22319c1e4477de26"],["/articles/HeatWave/index.html","4ae6d99f733273ca7ed0d4bc5e116988"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","024fa06d4e7f8b5336565601167bc347"],["/articles/JSOI2009-游戏/index.html","e7f4438df53f98a289376d025b783656"],["/articles/KMP-AC-automaton/index.html","6ea17008a8fc18a188b7969db3527daf"],["/articles/KMP-AC-automaton2/index.html","0689833de5e3dc9dd15a3a1f3ebe92d5"],["/articles/KMP-AC-automaton3/index.html","c437efa8455cfb7dee67dfce79cdfe34"],["/articles/Kernel-privilege-escalation/index.html","19082e520ad9c5f61578ab62d7ae2706"],["/articles/Linear-sieve/index.html","159c1cf870d14dd1a6602291b29e1f66"],["/articles/Lucas/index.html","07506c5e447812f892fff54ea0c5b24f"],["/articles/Luogu-P4276/index.html","1ab83946968d49bdc5f16d675eda066f"],["/articles/Manacher/index.html","5172e12987b2daa8fdd226860e25824f"],["/articles/Minimum-spanning-tree/index.html","b0d8b934bcce4239d2e795388673b3c1"],["/articles/Mobius1/index.html","5a3c9a5574e4707e19bb740e60dc999c"],["/articles/NOI2010-Plant/index.html","db8300ad761fd9e787a81590df8ec4de"],["/articles/Network-flow-Algorithms/index.html","ef57a2a516cce8c9b1df6a049c9a8755"],["/articles/Network-flow-start/index.html","5c181ecfa5cf59e11442d431d34c170e"],["/articles/OI常数优化-进阶/index.html","f6c1653bdc28814b2d5662c06c49941f"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","2ffee593850367588a522040819c321f"],["/articles/P1984-SDOI2008-Water/index.html","53b77eeaee67a4bf4d40bceee79851ae"],["/articles/P2018/index.html","169ed43de2826eb296201eef8b95a5c7"],["/articles/P3933Chtholly/index.html","5d8b615f896e61205f6dcecac55eed02"],["/articles/Partitioned-Algorithm/index.html","b0ffcfbe9b959d6d862240bc81749fa7"],["/articles/RP-introduction/index.html","f385b165f46c7f3c3859ab9f8071482d"],["/articles/Sandaram/index.html","4cb76781a5748308f0134921b90db0d6"],["/articles/SegmentTree/index.html","01bcb583530c6667b09ed264eab4c509"],["/articles/Segt-in-Treap/index.html","c1ce04968d3699916844b8c101f70d8d"],["/articles/ShqProblem1/index.html","1bd6057698c9a1df10f9926126ab689c"],["/articles/TreeArray/index.html","78a07fdbadc2373599e6d52993a57148"],["/articles/TreeArray2/index.html","da0c53b0c08df9f1d2fa8d4f9714ccde"],["/articles/Union-find-sets/index.html","56ca2f24b38bf19b34c9be58f03d1699"],["/articles/ZJOI2006-书架/index.html","10b9b9ea9441f57b9fa1b56fd3f44a75"],["/articles/ZJOI2007-矩阵游戏/index.html","e959732501ba11a814f664cb9252ed6c"],["/articles/a-bproblem/index.html","46d491a3c43c981c2aa1d321f452cfbf"],["/articles/aboutBlog/index.html","0e2c36e6d6554f3db0a5e1b844b08de2"],["/articles/aboutgit/index.html","1be7763130a6eea76e54cb6b569b3e1d"],["/articles/autoAC-lemon/index.html","fbbf465610bca6e3f64ee2ae2536c893"],["/articles/bzoj-3337/index.html","bf2655baa5be09002fefbbd647773225"],["/articles/cppteach/index.html","9e719d9b29f271b6a8b79a63e1517746"],["/articles/css-QWQ/index.html","6f783d4d75e85ff9a9688b6a428830af"],["/articles/dijkstra-spfa/index.html","421b6f5599a457788f74f8c59c50a9a3"],["/articles/dijkstra/index.html","b7d485ca60c0c361b65f5732ff62800c"],["/articles/dinic/index.html","90af1adb90313572e430f9d7e990f082"],["/articles/duliu/index.html","18bd2e5a9d2bb561d2c963e981e06f50"],["/articles/dynamic-planning/index.html","bb4c7e72a34f42b3c67dd651020d75b9"],["/articles/elementaryos/index.html","88037d68712f15b305f242a248871271"],["/articles/er-fen-tu/index.html","7d7d38fa9fbfa5b852c2b4091d48f94c"],["/articles/fhq-treap/index.html","cee0dbef587b38ed6d03c2740d3fbfc4"],["/articles/group-theory/index.html","6ccb89ec0862939f1715614b7162ddc5"],["/articles/hack-spfa/index.html","d489b73691cc44641bf645debee0bb5a"],["/articles/lgy-from/index.html","590c9403e1152b453ff73dd180696f78"],["/articles/linear-basis/index.html","959d245e54b8db2121aa0d24b85a0649"],["/articles/lyoi-Poetry/index.html","fd553a9c74e89e3c54221db8f06734e6"],["/articles/lyyz-test-2018-5-19/index.html","bc3d367407123ac3b2eac24b47e17cae"],["/articles/markdown/index.html","cd81f8cb150c2c0cc4ef94d67a2e7f75"],["/articles/moban/index.html","a4901bf73b78b2b7a81f42fffeaa05b2"],["/articles/poem1/index.html","87c2869beafc9f5267940d76fa4b0ce1"],["/articles/prims/index.html","622b5fa049026bbd94cd245bfc06144c"],["/articles/python1/index.html","e16e45de7c1376cdae7d8a589db69baf"],["/articles/question-01/index.html","822f5cced2a1a9b182ae8769111ab49d"],["/articles/recursion-to-no-recursion/index.html","0f7dd32a5f3272f439106b76e054262e"],["/articles/scc1/index.html","c0f7119ebb21159b23cb850db4cb59d3"],["/articles/somethinks1/index.html","8c91327f5364de6c41bef3294ba3652a"],["/articles/terminal/index.html","e5e25d06ab244d8b8d302bfcaae96401"],["/articles/terminal2/index.html","5d7bb5a70c81d0c34d3e5559cac7a57d"],["/articles/test-mode/index.html","ce948831a6944ebe756ee86f0596d13d"],["/articles/test-polyline/index.html","58c372dde08e2e7a2323ed4d9263c9a5"],["/articles/treap/index.html","0184dc4c5975e495e82babfac5fb2339"],["/articles/tubaomb/index.html","2171aa2e7c542f37c1e98ce1c495b8b6"],["/articles/use-hexo/index.html","e1b0eb8651e89e6b4d1ca363ef4d3730"],["/articles/use-hexo2/index.html","b2593a35b6bd6f7826c74c88e2fee70d"],["/articles/zkw-tree-algorithm/index.html","66b0d3351956877e4df985c3b7483802"],["/articles/zzWA/index.html","de00e0943d487808ca7e098fc07f5dce"],["/articles/「LYOI2016-Summer」一次函数/index.html","a8efe50bad3d6c2fa8f01d57b9d3fc07"],["/articles/主席树详解/index.html","2342fb62c4419c7d16a87167897d055d"],["/articles/分块-P1471/index.html","f371d72e7665f5373751e149f0fb76ea"],["/articles/可持久化并查集-rope/index.html","933a28f6f5c2c8cc8fa7d1210351019f"],["/articles/复数表示/index.html","bac5cc17e666e20500dd73e565cca9ac"],["/articles/洲阁筛/index.html","f279d4f268a4e2c5f8c6edfd905f33d8"],["/articles/生成函数/index.html","2f8d89d27cc540e3f54d75a85eb0483f"],["/articles/网络流-二分图最大匹配/index.html","c7e9e10dc02be7ae1dc952186590b9b0"],["/articles/自然数的和/index.html","8e0b1f0c8ff147746974ddd4da59eeaf"],["/categories/Linux/index.html","ad94a2e2d0fd01319db43ea66e5921c7"],["/categories/OI/index.html","18cde5a9a46c7a589a2cc93620e45cf4"],["/categories/OI/page/2/index.html","fb8b0b85bc4e19407c28073891c018a1"],["/categories/OI/page/3/index.html","509df70fca1a7085222886bf19a52221"],["/categories/OI/page/4/index.html","1b1a92a5a56598582a9c69208a029963"],["/categories/OI/page/5/index.html","13cba9167bb9dd8a49cf3991331ada39"],["/categories/OI/page/6/index.html","6ed94ed5ad0c1c42bc2c6a4013ed9402"],["/categories/OI/page/7/index.html","f5c0cf962af7174c40980d7df89b3f1a"],["/categories/OI/page/8/index.html","75f4c2e02b6bcb8825f62df7479e3cb7"],["/categories/OI/page/9/index.html","56ef2f614fea2dd5c8f27e09aff0da16"],["/categories/hexo/index.html","74bb8319aee316b96de13699129edf3f"],["/categories/index.html","e6aae14d1fc916bb4379927103d5f285"],["/categories/随笔/index.html","ac86e54ca0e39a4af74e11da58b16d14"],["/comments/index.html","9d61513926b3c3486abed3a232fe9b6a"],["/css/main.css","7f1bf6010c0d4ca3714f3a47aedf1ef0"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","b5a68eac915c71a3ad6952afa1617ff3"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","0d00b5b8a4021a2391cd8f4defa5d66e"],["/js/Error.html","49b9fe669681528cbbb39e3709a7941e"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","abaae5afe89dad0c749056f13b7ea632"],["/page/2/index.html","168d81121ea5afd81c433f8f96d09570"],["/page/3/index.html","aa4cf4f1390f24507838418f8cc9b01e"],["/page/4/index.html","4f030f5d58de0305858d11d370ea585b"],["/page/5/index.html","def22117c3d3c24443e8ae0e9d84fd57"],["/page/6/index.html","7b0aa82badca9916f3b322278527b845"],["/page/7/index.html","96b47616bfa55d921b314eeed51b6a28"],["/page/8/index.html","8718fb75a9afeffed6b4b3819c448411"],["/page/9/index.html","c19c15141c70a46af8324c00b14b5d7c"],["/photos/index.html","d70da7e31b43ce324b4f99cc8d0c9d41"],["/remittance/index.html","491bc98387813533a45b251bcfdc8598"],["/sw-register.js","7229c0678fd2cf42207d362e0715ce65"],["/tags/2018/index.html","7ac8e8281726b0e3840d7524eb6f991f"],["/tags/AC自动机/index.html","c94743ba51575a89e299c8e1952798c1"],["/tags/Algorithm/index.html","9218dfbfbd26fc0d7d966824a6c40f49"],["/tags/Algorithm/page/2/index.html","f438cc61e2a286d973a767641c4c6af2"],["/tags/Algorithm/page/3/index.html","d0d441efcec1b78b955117b3e8cd7cf3"],["/tags/Blog/index.html","fd94cd077c9d9c5a065cdc66300aff32"],["/tags/C-11/index.html","da4b1f20bb75ce4242575fb1141f86b2"],["/tags/Chtholly/index.html","8e9cad33fda7149d9792c8dbaa4fbebc"],["/tags/DFT/index.html","f11987f0d79f0579db0d11afe6e12fa7"],["/tags/DP/index.html","bc1a66c7479e3455c0601fa70061603a"],["/tags/Dinic/index.html","516d888d4ee034e949d05cdfa3d7769c"],["/tags/EK/index.html","5368822c1a41c3b4be5c7bf588b4258f"],["/tags/EK算法/index.html","ffbb358f9068b73c41d554e8ccf914a1"],["/tags/FFT/index.html","ca9215f613fb52dc978a1d1dbfe4daed"],["/tags/FF方法/index.html","24cc0f8ad1fe01e364dd958c4a3b1cf5"],["/tags/Ford/index.html","53e59be31a8ecc1a292d4b349d539163"],["/tags/HLPP/index.html","a387b3ab330ee0c710bdae2b67c27684"],["/tags/Hack/index.html","2d7dbc36edfc198479bee102e490fe49"],["/tags/IDFT/index.html","e71ea9746220b644ea3381de13c1c39c"],["/tags/ISAP/index.html","94f7078cab9881cab0cb8fa2a5aefef1"],["/tags/JSOI/index.html","9eabe19dcc0195698538265e1fa4d5b0"],["/tags/KMP/index.html","77b732ab0e8faebce37db56b31c056ad"],["/tags/KMP自动机/index.html","dca7b8105ca607d3b86ac560ffa3ff54"],["/tags/LYOI/index.html","793fd0d81e1e2dad3ac8cf106677c7a9"],["/tags/Lemon/index.html","3bec55d7edc26e297cd985894875c97b"],["/tags/Lgy/index.html","d4d9e7d387788bc2d63ca2c671fcf2e0"],["/tags/Linux/index.html","520532ad57618e790ee6b9edd687c202"],["/tags/Lucas/index.html","43f4e50ae3d1cc6ae5ad5464d33d4410"],["/tags/Luogu/index.html","b27436cc35521cdfe92f59ab05530240"],["/tags/Manacher/index.html","45310c46f565929d5cefd4fd7672eed8"],["/tags/NOI/index.html","b1bde3425eff45d40eac1ab4b70dba7e"],["/tags/NOIP/index.html","4f15d656a7983d6df25c1e0db515274d"],["/tags/NOI导刊/index.html","195d69f296a12a6ca7faae22ec587d42"],["/tags/NTT/index.html","c604f357e8cea9816dd2b0437db2ac8c"],["/tags/OI/index.html","d2e46b1f43ac235bbb5c8fa6a7387cb5"],["/tags/Problem/index.html","e19f3f2c942a7a5997afddd332808d37"],["/tags/Problems/index.html","4ea769bfa1f0e331d553b090aa1a43c0"],["/tags/RP/index.html","9801f8e1e12eaf68f38ae7bd23e8320a"],["/tags/SAP/index.html","6317dc209c923aa20b7dd631054e9a17"],["/tags/SPFA/index.html","a1876552c40c4a9c6ba42bfc3bf84cde"],["/tags/STL/index.html","53e95c0a11b7e53469f80d3b13b75e24"],["/tags/Splay/index.html","14c6a15ba3b2994763de054463eef575"],["/tags/Tarjian/index.html","6a5c786ba84dbe1fd9a24b564026b7fe"],["/tags/Treap/index.html","5161b30825f65d147612e6caf4378855"],["/tags/Trie/index.html","faa57f3e61f43210e0599c2a1a312341"],["/tags/USACO/index.html","90c6222f890562e010fe230f85711677"],["/tags/ZJOI/index.html","c190486c5ed290c585f9dc57aa54c7ef"],["/tags/blog/index.html","11a3940dfad7a52c3b8fcbd8df24f4f8"],["/tags/bzoj/index.html","cc11cdfc9fcf42810796d60b36dcb4b6"],["/tags/css/index.html","072ce9d9b72ba1d1f5d5c34b83a6084b"],["/tags/dijkstra/index.html","556ddb8f85e7b40fbeabb387273aea88"],["/tags/dinic/index.html","544943e65b3ed14281664d7b870e6805"],["/tags/fhq-treap/index.html","fde8f84405fd74f2f57aeaa246bc39ff"],["/tags/gcd/index.html","dd0733bd4e0deeffe47286f89138f245"],["/tags/git/index.html","34203996c9c5970fe832e3ab28862185"],["/tags/hash/index.html","1327c3a3e58d1dc7d34a59da0caca59d"],["/tags/hexo/index.html","a1f18e70c4383dc09746f91e382406eb"],["/tags/html/index.html","e44df4bb966f8e476839823936bc3514"],["/tags/index.html","1bd3b0e389675714b430ba5788e9a2f0"],["/tags/lambda/index.html","6ad33d8e650d30284cde84049df0219d"],["/tags/luogu/index.html","913b0808220eca8f752c5c59efbde793"],["/tags/lyoi/index.html","564a8666237efad16640e859cb1daf19"],["/tags/markdown/index.html","553946062b02ec1de81bdcad325dbbcf"],["/tags/problem/index.html","de56b7da62c7fe40008cd3ad5fb67523"],["/tags/python/index.html","d9a902f60a8df4b53e01cda74820106b"],["/tags/qbxt/index.html","df64e62a3061b4e97120ed3d6363518e"],["/tags/rope/index.html","9b26a15f66b3cb3978aa3cc09ae15593"],["/tags/spfa/index.html","884f64bb51aa72787ca410840ba57436"],["/tags/system/index.html","9b5b90bf47674af9f0e0758c49ba5af9"],["/tags/terminal/index.html","2ad9025205e04d5b27225f05e7d509cb"],["/tags/zjoi/index.html","e2900087c13eb7714e06e75858c0db1d"],["/tags/zkw线段树/index.html","c66f36d2a2d3c50bd5b57a65f2c336fb"],["/tags/临沂一中/index.html","98f21b6366fa279f7cbb2378f0e198ac"],["/tags/主席树/index.html","5208cedc23d8208cbfae472f9f747fb2"],["/tags/乱搞/index.html","8f8721d19ed3b3fa754ffb62e33ab414"],["/tags/二分/index.html","0a216a359598069c86a0173cc8d676b6"],["/tags/二分图/index.html","589c78f50980f117a3cc7e8190d6af2f"],["/tags/二分图匹配/index.html","d62357410f252702786062aaa485fedc"],["/tags/二分图最大匹配/index.html","34705ae99126d1034f637666099fb317"],["/tags/二叉搜索树/index.html","cfb471466cd634b4a2081f879ce21b7c"],["/tags/二叉树/index.html","e2eea9ded242f1a9aa22e1b93d5f7d22"],["/tags/五校联考/index.html","a76309a0c6ebae6eeec63b3a961820df"],["/tags/代码规范/index.html","9fbfd6e814711f20125cdf81beb3e0ad"],["/tags/优化/index.html","b601aba992d49ac66b3bcb61d0787b01"],["/tags/内核/index.html","c50cbf2e2eb4fc28c03133c19febff0c"],["/tags/内核提权/index.html","cee75f4ca9adc668290d2ac46031b03d"],["/tags/几何/index.html","96d2907e7b414520aba9275d948fb5af"],["/tags/凸包/index.html","db4f8a5c4fe8f5cb4999ff7ff8a5d6b4"],["/tags/函数/index.html","824355b309df184bd20f3ff950faa089"],["/tags/分块/index.html","20783fce1fa2476f174686d5cc774f99"],["/tags/初等数论/index.html","49075bd221950d677c2965444b309e68"],["/tags/前缀和/index.html","7659f4dac09f8453ada7e36ba0637e7e"],["/tags/动态规划/index.html","40a8574ee83238d9164a77004841e4fe"],["/tags/匈牙利算法/index.html","f21541413f987219e798104e7a1ef7af"],["/tags/区间/index.html","bca5bba47863e8ce558f70e72ff80204"],["/tags/区间操作/index.html","21778e80458753cdcc884e8570da5f7e"],["/tags/区间第k小/index.html","13cf595f4ff065548366188696d1c16e"],["/tags/半平面交/index.html","23ce0b75dfe0bcd69afcb17689c98a42"],["/tags/单源最短路径/index.html","0ea4e0d3a7bfbd2cb9347e060df16d49"],["/tags/博弈论/index.html","f07f5f67f79bedbc0919b67b3e1c4e50"],["/tags/卡常/index.html","f14cebcd1e808ad5f41af1013353c983"],["/tags/卢卡斯定理/index.html","d112343cd13e0c660454e4433c652da0"],["/tags/卷积/index.html","2c5b3d3db9b1c24b7a29d92a3328f467"],["/tags/叉积/index.html","f0f32cdbbe659e21d6c1bfe140be769a"],["/tags/可持久化/index.html","ffb309b8f38a6c946e29ea99c813592d"],["/tags/向量/index.html","078b073debb63fb528533a9229e16cf7"],["/tags/图/index.html","c5d4aeaaee7cd2ff41999fbda1a85eb4"],["/tags/图论/index.html","1da74b4a5f631cf6fc97e152230ae9a7"],["/tags/块状链表/index.html","1b7b5bdc4cc3ce6af697fbd3e1d61fe2"],["/tags/增广路/index.html","876eee7dc3ed4d8ae4b1741ff61aa0cc"],["/tags/复平面/index.html","5d3090c6b2bf0392d7aaf57fee53c8b7"],["/tags/复数/index.html","6a3e514b7401e77f8e7a97d933b5befc"],["/tags/字符串/index.html","811963ce8903789dcce783f2dd92fa63"],["/tags/学习笔记/index.html","66f413483f82f34c483a40dd536643aa"],["/tags/常数优化/index.html","647ce964dd948887e787459df33d1642"],["/tags/平衡树/index.html","664491f19774a97a46d2c205628adda7"],["/tags/平面几何/index.html","c75529e9fd01ea946140daec4d4c3683"],["/tags/并查集/index.html","2fcd92211223360fc9b7220c07893df3"],["/tags/强联通/index.html","480e8bc41294db21411d151b36a65c13"],["/tags/快速傅里叶变换/index.html","ab15861f87d83b28500e37089c864bba"],["/tags/总结/index.html","f19d9fe8c6e06516060eb892af51b2af"],["/tags/感悟/index.html","08e1000129e55cf0811ac832c1751dc6"],["/tags/技巧/index.html","ad5b573c21d782194c421fe086f21857"],["/tags/抽象代数/index.html","63ba72aa25b361465c3e8561e7128a0a"],["/tags/教程/index.html","0f17589ea3ace1240aa109d2959d37be"],["/tags/数堆/index.html","48c16a0c27fdf1e954156b40521694c4"],["/tags/数学/index.html","6adee3935c9aedb59cb8fbef39078bc4"],["/tags/数学/page/2/index.html","1a0c49512e500684832ca605b771e091"],["/tags/数据结构/index.html","cbe42dfd316c2456cb5b1ceb546c506c"],["/tags/数据结构/page/2/index.html","7f38c46650b5deaa7ad97efe79be0090"],["/tags/数论/index.html","26db01854305f0499145f5fdbd078db0"],["/tags/数论/page/2/index.html","8b82b26e4379ca31f161774be9ca8b8c"],["/tags/文学/index.html","925750b496a475bb161d7dfd713f0cd8"],["/tags/方差/index.html","104897f2f3f6ab8987eb9db194f08b59"],["/tags/智熄/index.html","da748a40bb072116a86a9606f7f8ae5f"],["/tags/暴力/index.html","26d06a53a6b9dad13505b07821c67667"],["/tags/替罪羊树/index.html","690ddd7b915462af266f9ed076168458"],["/tags/最优化/index.html","f6a1da7670961497449632e9fbf791f2"],["/tags/最大流/index.html","95c7ed177fb73162eaeaa7733d8af4cd"],["/tags/最小割/index.html","ff6c0000f2a16110a792d03106cdeb05"],["/tags/最小割最大流定理/index.html","69ecc02f4a2fe1e25c4da2823df66b64"],["/tags/最小生成树/index.html","ae73aa9fa2b3b922766f7f81f7d53a0b"],["/tags/最短路/index.html","9fa22a65167baf909dc03b3e07691e46"],["/tags/最长回文子串/index.html","c29577704e9f0b760e6596462b80be4e"],["/tags/极角/index.html","7401e9a6792c3f4ee922f3d2f61f369a"],["/tags/染色/index.html","0030163af6d51502db2aa93f917cb36f"],["/tags/栈/index.html","673dda00c533d5861990d1d65b658bad"],["/tags/树/index.html","3f060d9a872e63c23ae604d793b66bdd"],["/tags/树剖/index.html","6341e71d3cecf11a9e993391975f627f"],["/tags/树套树/index.html","18dfd458047ee4077ced3bca7da1d2c1"],["/tags/树状数组/index.html","968b0776cdd8f4f9501bb796db5c64d1"],["/tags/树链剖分/index.html","b2376ba675a49ba6ef0fca42c47388fc"],["/tags/模拟赛/index.html","cf0347a399335e91987a020169b21b20"],["/tags/模拟题/index.html","896a7ca785af64365353ec9661e11b35"],["/tags/模板/index.html","234a7bb05851ed2214e71745ee40a605"],["/tags/模版/index.html","f5410b1b1af438f4d633adbac91263c3"],["/tags/模版题/index.html","ee633bbeeb79b0aa4b8fbb44d445e777"],["/tags/欧拉函数/index.html","8a4eea5ed1586262d596b644fe17eeec"],["/tags/欧拉筛/index.html","a9ce7235c06adea28cbcc4ae299a630e"],["/tags/毒瘤/index.html","b09d2474b088aad57ef35f71cfbf0790"],["/tags/测试题/index.html","02c2218ddd30486ed0faedb5cee55755"],["/tags/济南/index.html","b2ca3f5b9dafe7cce5f0095f94f5d61a"],["/tags/清北/index.html","4eb3ec20028c7e25978ef86830eb76cb"],["/tags/爆零/index.html","b40ffb1983430a31066d90e3f449ae21"],["/tags/玄学/index.html","97fc43253e935da245730f5fe9d32097"],["/tags/珂朵莉/index.html","ee2dd12b8dcdfac8f2e74cc10f2cb282"],["/tags/生成函数/index.html","ebcc20cea7735662a0467a3bea43d4df"],["/tags/瞎搞/index.html","aff85176ca406112f56376a0eac45b04"],["/tags/矩阵/index.html","cc462b88d1226d6f300ab187d114eeb9"],["/tags/矩阵翻转/index.html","517d82a4637b8f020956af206b19276d"],["/tags/算法/index.html","a63c8c617658a0a33f651f647252a5d7"],["/tags/算法竞赛/index.html","b021722db1d36653b4722b2ac3cda1ec"],["/tags/素数/index.html","84f6be7175d17dbcfb933bb10485b803"],["/tags/线性基/index.html","22f85db05987da30152bef75ab5c3d49"],["/tags/线性筛/index.html","9bbeea8c5e1a058e771af06e6982cdba"],["/tags/线段树/index.html","c167c8d83e65d7d1030f4777b017c45d"],["/tags/网络流/index.html","0506be8b0c8d256761f200c4acfd84b0"],["/tags/群论/index.html","06cc3595030d862120322cd88424bb9e"],["/tags/脚本/index.html","b3b5760335faa983fab7fe144c7d5e09"],["/tags/自动机/index.html","0cff634f7e9c25bfca7704c8e13c282a"],["/tags/莫比乌斯/index.html","64dff521a70af02be80d493d2eb4cac6"],["/tags/莫比乌斯反演/index.html","78133c2217b8335bd2a8c01277eb6ca7"],["/tags/虚数/index.html","e6ff448b74fd01bfb889d1bf8479faf2"],["/tags/计算几何/index.html","77c46f8f180746f2588c96439a96b997"],["/tags/证明/index.html","524453cd36fda522377bc1e35d89b109"],["/tags/评测机/index.html","eb16432bcdbb01ffe0f5ddace763f890"],["/tags/诗/index.html","c924fd12a626184bc04a8f26ead07ead"],["/tags/诗歌/index.html","eb10a4f79fc3c40f3a8f2f17fcba53ab"],["/tags/费用流/index.html","c94087b94c53334949f872bfbbc664de"],["/tags/路径压缩/index.html","14fd9112057eb99cf2de1c9e747bd9a5"],["/tags/逆元/index.html","db64dcf4fbdac3454ce3414e13ba9c18"],["/tags/递归/index.html","788526f2b302cc8dd2b51289ff8636fd"],["/tags/递推/index.html","835b1c973c503f4ccc24fe20d1d13b71"],["/tags/邻接表/index.html","0d0ebe7fb7f8a3ad117bbdbfc888ce09"],["/tags/随笔/index.html","c815ec9095dc4da7d6f06c30769904b8"],["/tags/集合/index.html","3dcd44b886f108e362ba06056eb73658"],["/tags/集训/index.html","b9a031289e2e5ad5a63fd9a9c3377c7b"],["/tags/非旋Treap/index.html","f1ccb506fe0245e100a9b283a5868cf2"],["/tags/非递归/index.html","d541b61649580e10ac3659b47ae71a8c"],["/tags/预留推进/index.html","38b202a3bb7e69c56774da20f4dea4c4"],["/tags/颓废/index.html","7320d73aacc2d1f568323d64f7ead06e"],["/tags/题目/index.html","d1bfe3d9a1c9afbdf65c7843063f8024"],["/tags/题解/index.html","e00684c89e4bea1bca035f9613e2a5ab"],["/tags/题解/page/2/index.html","6c9e7a7a64ad866953b6ddc3b33b7859"],["/tags/高性能/index.html","0be2d9ace2d0501404eeaac6617a09f4"],["/tags/高精度/index.html","51cc8f48e2ec2bc304f1e9374c42692a"]];
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
