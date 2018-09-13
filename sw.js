/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","8226b550b0b4b64e5102c06771b3f1e9"],["/about/index.html","892840f443a8b8f9fe7fc1040a2c96a6"],["/archives/2017/12/index.html","6c1d225dc2c3f5fc9387c54b0d8efb41"],["/archives/2017/index.html","662d74a4cd92c0f0a40bcf7d0a304dea"],["/archives/2018/01/index.html","a7dc422bc5ab6dcbc7b7cad7388b53db"],["/archives/2018/02/index.html","b1af8368eeb62e4457cd3b5c8ecc3b25"],["/archives/2018/02/page/2/index.html","2620b840f454b1eab6cfb904c10df7ca"],["/archives/2018/03/index.html","96be06befeeb7f77a4fa37afb19ffdf1"],["/archives/2018/03/page/2/index.html","7706d01d16ac49aeca52f9313ff93831"],["/archives/2018/04/index.html","7c48e809e46de2c6037fd7db825ff126"],["/archives/2018/04/page/2/index.html","ae90a67a6a1b611aab14717cd3f62061"],["/archives/2018/05/index.html","37fbd6a26911ad8a7c81867db5c7b164"],["/archives/2018/06/index.html","7476a7945fcddf321cb2ebb4d60481cc"],["/archives/2018/06/page/2/index.html","dcfb81883e19c494039c12fb3a2f2a63"],["/archives/2018/07/index.html","102d278079c3d60bf8837e8c1ba14cbc"],["/archives/2018/07/page/2/index.html","7c732b074835f71d773ff118d87b3fe8"],["/archives/2018/08/index.html","ecfcdc1314681eaed0192400822a04c6"],["/archives/2018/09/index.html","e0a26f2b77d4434a3a990944bb5f9c4f"],["/archives/2018/index.html","0821aa0ecacc1fef90d1ce6d9764936e"],["/archives/2018/page/2/index.html","230b0c16efa2944bedf0b397698c5dc5"],["/archives/2018/page/3/index.html","af0194b6947987d143bc8bb4efd73d23"],["/archives/2018/page/4/index.html","6d01d711d73c396deb7aa44ab7c453bc"],["/archives/2018/page/5/index.html","d9b375c8858506ab82fcb4624f210188"],["/archives/2018/page/6/index.html","f90130ae90e7edc23874497aa4c915d5"],["/archives/2018/page/7/index.html","8aa42e7a2badfd8d6729ac06c5600194"],["/archives/2018/page/8/index.html","07e8402434f3ed927930b3ed033f41a0"],["/archives/2018/page/9/index.html","929ffca69dacdc1ccb9d8a9a294ff907"],["/archives/index.html","1fc4f72b90ce306a879a27277819944e"],["/archives/page/10/index.html","c8608bf7fe057b29033bbe4c1bfce8d2"],["/archives/page/2/index.html","e34be7893f87f7a7cd7937c640a42aeb"],["/archives/page/3/index.html","b8b70668edb3e11d12b23fc3e7e0d4b2"],["/archives/page/4/index.html","4c24ec434bafc69eaaaf37dd55736f96"],["/archives/page/5/index.html","0b541ee47402224172ac7c8e1d3d122f"],["/archives/page/6/index.html","d84ea9e7117fd143b0e7f6b8ab5b9ac1"],["/archives/page/7/index.html","415e5871e9f36a15eca6e8393d5a22ca"],["/archives/page/8/index.html","be3141c1ab9b14a014f2ff1ae980ac43"],["/archives/page/9/index.html","a500d7b6958eb303e97f81f311d488f2"],["/articles/18-4-27-things/index.html","cae9bb8a2e073008724ef3291c06939a"],["/articles/18-4-29-test/index.html","41d516ac8443d00145e5bffccf0b11c6"],["/articles/2018-五校联考-Round1/index.html","ce43c0079286925bc253bcf14bcdaa35"],["/articles/BigInt/index.html","cd9ab215789c9a25452c156ab377e6f8"],["/articles/Chtholly-Tree-ODT/index.html","c1937abe033497478165b71cc78c42fe"],["/articles/Code-Style-for-OI/index.html","a4431fc5a213acb4a3e6551673a00305"],["/articles/Computational-geometry1/index.html","ee20c51200162942cdf58bfb0ad9a749"],["/articles/Computational-geometry2/index.html","501b3bfed2e81871a22182805fffedb0"],["/articles/Computed-geometry/index.html","d766cbf7bafcb805281190293f59dafe"],["/articles/Dirichle-product/index.html","3544889a33409e36068cccb9c5e1accb"],["/articles/FFT-study/index.html","512a627b4fb315df227710ec4c92a391"],["/articles/HeatWave/index.html","504c87c255cf650cd5ec8a554fc96b1a"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","57df0785379ab3b8712b59ebb14b7c06"],["/articles/JSOI2009-游戏/index.html","c16f2ae7741c7310d08995e0dd5234a5"],["/articles/KMP-AC-automaton/index.html","ef41dce90133f87e292ab1142c2eeab1"],["/articles/KMP-AC-automaton2/index.html","fec55142d6f6a71d98858ab4677c3bd1"],["/articles/KMP-AC-automaton3/index.html","204484d68a5a853f440ea0976085a24f"],["/articles/Kernel-privilege-escalation/index.html","c9caddcc8bdc195cea964ba1ef5ae1ed"],["/articles/Linear-sieve/index.html","ea479502f52cd444ec87126294d5d975"],["/articles/Lucas/index.html","9b32a6e51b81f5d392f9bda73b1d6572"],["/articles/Luogu-P4276/index.html","c9d480be77cf6ef367c8757ab34f00f4"],["/articles/Manacher/index.html","8006fa4c0844a24e768021bc6737a6b8"],["/articles/Minimum-spanning-tree/index.html","1df88b9ab90f0e6a0195786be9a5e8b9"],["/articles/Mobius1/index.html","0bc77e7df21ec8ace3797b9b4efd7f19"],["/articles/NOI2010-Plant/index.html","27f43c913f8ac08f0440d810e287646e"],["/articles/Network-flow-Algorithms/index.html","5f20973bdc5a307d9e8ad072a2d3286f"],["/articles/Network-flow-start/index.html","0f7f8dc51cebca9a1d33db6008a013c2"],["/articles/OI常数优化-进阶/index.html","a010b5855155506904add03e41205874"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","433e3383b2466f0c3ba1704355cde477"],["/articles/P1984-SDOI2008-Water/index.html","0a524edb6f365ef74d135c98beb049c4"],["/articles/P2018/index.html","1f3b1d4b6b36ddd5831dcbde595f8ac2"],["/articles/P3933Chtholly/index.html","cd1fce349b6d44b8edba3f9ffa23c2e5"],["/articles/Partitioned-Algorithm/index.html","109ac03ada0bfefa1197bba512386aaf"],["/articles/RP-introduction/index.html","f49a5c25f5241e4e2482f09b82187442"],["/articles/Sandaram/index.html","ff0c65209ba1a18f6df450261b42ee4c"],["/articles/SegmentTree/index.html","7bc20513d38ece6e8cf66f20bfc0a14e"],["/articles/Segt-in-Treap/index.html","9b07cd8e0df6da397cf15ef7e2e8550d"],["/articles/ShqProblem1/index.html","ac95b80621a70d146a53a5b680276b10"],["/articles/TreeArray/index.html","e1709af85e751a2f1b121b6cbccbee8e"],["/articles/TreeArray2/index.html","4a6f9a4add42225e87dd9beb8036b072"],["/articles/Union-find-sets/index.html","4ce51f50c91bc731f480b61614a0b6cc"],["/articles/ZJOI2006-书架/index.html","571de1b4aea0b3b3ec23c1f08d055ae0"],["/articles/ZJOI2007-矩阵游戏/index.html","01ad717d522a5617830d059a17f45643"],["/articles/a-bproblem/index.html","9eae9cb22397e8131656b5b258500d46"],["/articles/aboutBlog/index.html","6ed0795074df087a1db112ee014cfe5a"],["/articles/aboutgit/index.html","27690c14f95474c01737b2a3108ba76f"],["/articles/autoAC-lemon/index.html","b7101a3ab6190991e4c7f1ac35113fc5"],["/articles/bzoj-3337/index.html","9d49ca3968a9624622b707a6e9e86f1f"],["/articles/cppteach/index.html","cfee13a3eda5428e83a170fafa487417"],["/articles/css-QWQ/index.html","688f849a972b9d38dc46c81775f824e6"],["/articles/dijkstra-spfa/index.html","7ada9e50f0da2c8e426a245b4c83eae9"],["/articles/dijkstra/index.html","0aa85de99eeeb375dad52760a1d4b64d"],["/articles/dinic/index.html","2f3d09f1f663a5e1a17207c08af2afe9"],["/articles/duliu/index.html","f2f594a2305ef3325933ca1ddaa2ffe1"],["/articles/dynamic-planning/index.html","f23159f96842cc745eeff5e56c458d7b"],["/articles/elementaryos/index.html","1d4e06e22966a292306461fb1885c350"],["/articles/er-fen-tu/index.html","783f311e5faee95e9832427d261476e8"],["/articles/fhq-treap/index.html","384f72fbb3628e632cd279b7b194adc0"],["/articles/group-theory/index.html","c15bd39c49bf41d8a7d1997ad87849f8"],["/articles/hack-spfa/index.html","2b2156b6a8ef739ffa29f9d53e6012ca"],["/articles/lgy-from/index.html","dca6e4e1abcaf9acda4f0247b6dc4ef8"],["/articles/linear-basis/index.html","62f962ef36174bc8ac9ecaf611558d7a"],["/articles/lyoi-Poetry/index.html","2af28237247b06ae61c6741b4e74e9f0"],["/articles/lyyz-test-2018-5-19/index.html","88a9c560c4b402b89ec85a1ab11b5472"],["/articles/markdown/index.html","904ab96cc3e842d48ba8202e9a7b8735"],["/articles/moban/index.html","b55ca809b816ed69d1e19a43a901e078"],["/articles/poem1/index.html","efbff8e37404e430e26a5260b75955ea"],["/articles/prims/index.html","1bc5b5bad2a4805bdc72ca03869c7de7"],["/articles/python1/index.html","eba444344d8d6d7fd67f07787931268f"],["/articles/question-01/index.html","f03a693fd3ac74b946a7a255b67c926c"],["/articles/recursion-to-no-recursion/index.html","bcd84329b867ce969275d0e984900499"],["/articles/scc1/index.html","409ab6cc0c826543b59d79b407f68b3b"],["/articles/somethinks1/index.html","6b2cd9c959362814b7424a7622c4f1c4"],["/articles/terminal/index.html","daa8fb921a332225626262303ae97b70"],["/articles/terminal2/index.html","b054c9b9a3281a1aa66cb697bef6d48f"],["/articles/test-mode/index.html","98c3f72ed478cf04131ec324bb3afab2"],["/articles/test-polyline/index.html","24c925ec09a32d10bec5caa3328eabbe"],["/articles/treap/index.html","7d4297cc8f9637f828c61fa703721894"],["/articles/tubaomb/index.html","14dd74b2c1a434334506901924a8a05c"],["/articles/use-hexo/index.html","88f72157ec35e56e922f7427f64a1fec"],["/articles/use-hexo2/index.html","cbce082700d9a0ecb9fa78794517da7f"],["/articles/zkw-tree-algorithm/index.html","fe0b61aae93e9379f596d697ba175a2f"],["/articles/zzWA/index.html","8ca6d93691efcb21ad30a2ad6245bfdb"],["/articles/「LYOI2016-Summer」一次函数/index.html","14e96211dd79455896c885b65cca604b"],["/articles/主席树详解/index.html","1a212835ae494d5803d5b8e74ecab33a"],["/articles/分块-P1471/index.html","fdd156b801d47320605a10f9ea52d081"],["/articles/可持久化并查集-rope/index.html","92e40bced4e37c1f0e42c9f8fbd7f27f"],["/articles/复数表示/index.html","d57edde379b27a93461c44012d6e761b"],["/articles/洲阁筛/index.html","347575a355c9d1008a42b0ccb23c9539"],["/articles/生成函数/index.html","424710613da869b8f1cd123ac2021b4d"],["/articles/网络流-二分图最大匹配/index.html","1f15aefe600976a00166fe555987ebb9"],["/articles/自然数的和/index.html","6b261fc35f1d8eb272e69230aa9c8102"],["/categories/Linux/index.html","0b525d6745a55b8e130cc3b682459011"],["/categories/OI/index.html","3b702723816449cb09e6515d9f664cb8"],["/categories/OI/page/2/index.html","1ad2a93580360ce5096685d85d81fd55"],["/categories/OI/page/3/index.html","1c3498601bcd645243ae8674e6ef4269"],["/categories/OI/page/4/index.html","313ae9ebd84b355d0a86dff29db4d3d6"],["/categories/OI/page/5/index.html","1a44b0d3681f656d765dbd66a3797289"],["/categories/OI/page/6/index.html","0f74e47c54613572b63c35790bf5d82c"],["/categories/OI/page/7/index.html","30a490c7bf8474684347595794e2ccb9"],["/categories/OI/page/8/index.html","6f22334594ea9247e017bf5b4557475d"],["/categories/OI/page/9/index.html","e5afe5d5a43d333fb435316b38671a3c"],["/categories/hexo/index.html","e73b28211dce5c3456c3f1e7519e34a1"],["/categories/index.html","f3cef5a8f3243af71ece81a9908b7843"],["/categories/随笔/index.html","c7926e476d0186d71f731910b194dcda"],["/comments/index.html","52500063d2ca8c5faa49a83586f2be4f"],["/css/main.css","abec7357cd78d1d6e06748cf566d304f"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","a56d3590280eb43674dd4bff14d5d6a0"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","0a786f804d0962832ebff43893d39e1d"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","ec6f387cbf68b1e5987a06d017063d0f"],["/page/2/index.html","4cb868db26b7a0ffbce0b0f14a0652fd"],["/page/3/index.html","0d273729014f07e69b7faa7513e6d7db"],["/page/4/index.html","1b1dc369fa19dd2646fc54e71b1d75b6"],["/page/5/index.html","2c5652f3623a9c5c75837106bc62181c"],["/page/6/index.html","e13ca76187a7f424bf8a39c707bdadbe"],["/page/7/index.html","57eacbfb8e2d927a3705a8467cc5823c"],["/page/8/index.html","6c859a5e41d33dde24a10a088e837d82"],["/page/9/index.html","3c207c30b82069c3c06d3c0751354f62"],["/photos/index.html","a2697d17f3bed70db6f9e321ab680ff8"],["/remittance/index.html","51729716aeb5b7648fb4fcc7bd30278d"],["/sw-register.js","400eee0b93296538f9aead73b4e42caf"],["/tags/2018/index.html","e01469c2e828bb2de01b35b19c1aa517"],["/tags/AC自动机/index.html","bf5bf31ca3bba5d9a5b27870e3d73f85"],["/tags/Algorithm/index.html","2af07637bc65f321c3174913739779d1"],["/tags/Algorithm/page/2/index.html","2a399aa07f5660717800bd25b0e2a67c"],["/tags/Algorithm/page/3/index.html","b9c5c59851318a51301caf3e33cfa235"],["/tags/Blog/index.html","d0e543d1d0cd4fab61b7a137c0ac95ca"],["/tags/C-11/index.html","2469a210b1ecf9123760017563aad5b3"],["/tags/Chtholly/index.html","29c1f580c79866097440bcaf51431bf6"],["/tags/DFT/index.html","9ba073c33c1c20f1f7fe3604222f1f9a"],["/tags/DP/index.html","0daad819f73a3cb6ed1e9c53d287f0ac"],["/tags/Dinic/index.html","7749d874406ee3c0fe8f41d22876a273"],["/tags/EK/index.html","f7cba4f8a7b525a5530466199277ff96"],["/tags/EK算法/index.html","dd4a237700cef1f6253ad3a6442b9583"],["/tags/FFT/index.html","9fef658c544ce9c1e23408d89da33493"],["/tags/FF方法/index.html","77662d490d89060addb4b926dca48e07"],["/tags/Ford/index.html","64536d4f70445583a2658cb681e2f42d"],["/tags/HLPP/index.html","8352395f09362e1fba111e41249351c7"],["/tags/Hack/index.html","5bf9f900b5ceb3fca0951f19d4bbf287"],["/tags/IDFT/index.html","a0a272175b0918edae3231f2c5dd81f2"],["/tags/ISAP/index.html","b4db31b7aab16d215166b0705cd2b538"],["/tags/JSOI/index.html","04a0e37582016445929d02ab211ad894"],["/tags/KMP/index.html","ebfbcb8dfa49b27f784d014d232b01a9"],["/tags/KMP自动机/index.html","bd973ccef99af67ff9a525a84bbff254"],["/tags/LYOI/index.html","8d8307c20b4b8aa066b4c89e9ca00d06"],["/tags/Lemon/index.html","3d34f0a4a5e4dcafb7473c1a13a43d82"],["/tags/Lgy/index.html","f82ced082823ca64180979eb9fe3ddee"],["/tags/Linux/index.html","3c0261dc5415ae4e4afb24decaa74508"],["/tags/Lucas/index.html","e793cf4b2710c413e087012ab48f6c0f"],["/tags/Luogu/index.html","3fb8b607200d7d13cdc7ac6b69cf1787"],["/tags/Manacher/index.html","c9652aefc48a85ee3d4473190333b2cd"],["/tags/NOI/index.html","198ea0e8adf101556052cdc99f58adc6"],["/tags/NOIP/index.html","67ef19c4f55e8fbf3c9d3d88388b6a7d"],["/tags/NOI导刊/index.html","add9d56bb2d2f3209cc6c4915296a9a4"],["/tags/NTT/index.html","e8526750083e6e366d1d42db8ff1323e"],["/tags/OI/index.html","f525f1a0aa59e3d4b63c4160b0775a05"],["/tags/Problem/index.html","7d934cfc96054425607d005075823dec"],["/tags/Problems/index.html","db99cf0bf3772ae7b7e210e8145eba3f"],["/tags/RP/index.html","49e3a4639aba2635be9ee3782e38166d"],["/tags/SAP/index.html","1b3b2ad582883b24809c13a48b15a32b"],["/tags/SPFA/index.html","526dabee434039bcacb28eaf89dc684c"],["/tags/STL/index.html","ec74cee782ce7f7fce2a6a8fd7b63e2f"],["/tags/Splay/index.html","30c7a1ae380ced33b6971a37d86a124e"],["/tags/Tarjian/index.html","9ca262b7b9057d53e085c0cb73231650"],["/tags/Treap/index.html","de4f9755eb0f6e51604aa3a3af8b8ea1"],["/tags/Trie/index.html","c7ebca6bfdc7b6aa50722873fa240cba"],["/tags/USACO/index.html","4a5f83d6536595bca567abc6bd02ca62"],["/tags/ZJOI/index.html","1b86c8e4fdfe3c64491874a305a4dd48"],["/tags/blog/index.html","c09407fe08955c98e3ce3cc8ba46aaaf"],["/tags/bzoj/index.html","883ccae41bf554984afd8aeb22f733b4"],["/tags/css/index.html","0b757bd6187e15d0f84ca3e3ef872794"],["/tags/dijkstra/index.html","c5aea5face9e902b57ac52d8454866d1"],["/tags/dinic/index.html","c01bb8be9a6bf5263707976c7cbfc546"],["/tags/fhq-treap/index.html","828c4e3948717b50695ecca11e4a431c"],["/tags/gcd/index.html","ed5b736fbc6ebd8f6dd37cddcc1f712c"],["/tags/git/index.html","422148f926a68faa1603b42647954dd2"],["/tags/hash/index.html","a9a7feadaee996d4edb4c25f7b629d8e"],["/tags/hexo/index.html","c496b4d03180de5ecd3a75153433a42a"],["/tags/html/index.html","6d0e4734129fa4105422c3062c70460a"],["/tags/index.html","0358ad354714ea55adfc43d51e471d05"],["/tags/lambda/index.html","58b9fbb04171fc430019346376b24f49"],["/tags/luogu/index.html","037ca8d883aee41cb4b8272866deeb04"],["/tags/lyoi/index.html","7c21920dfcb1012beeebe5bb24346ed3"],["/tags/markdown/index.html","cbb1bd18f75bef09d8bfad16de849382"],["/tags/problem/index.html","957b17426df06c91391bdb2cef0a9c3e"],["/tags/python/index.html","7aac0e144aceaf779c5f418df0482ce4"],["/tags/qbxt/index.html","3b00a8729b2f01b01bae3fde8cef4e48"],["/tags/rope/index.html","c5f7c45c7a0e208d9840626b5540f8c3"],["/tags/spfa/index.html","f4c88220c1217e67524b58bff38ac69f"],["/tags/system/index.html","9f15781eea37c779fbabca9ed371aac1"],["/tags/terminal/index.html","e53382f70b8dbc64f5e8da8b653a16e8"],["/tags/zjoi/index.html","ff96c47549e461dbd14e8e3186ffa8e9"],["/tags/zkw线段树/index.html","fd1648cdfbd17156428a88d85ed3f739"],["/tags/临沂一中/index.html","48d060c00dc79087881ddb85d7cfe4c3"],["/tags/主席树/index.html","822fa3cb88883de44a217c932b7dd274"],["/tags/乱搞/index.html","832db4a88cc08ee9cf1fc778522f9417"],["/tags/二分/index.html","b7078759b1bde04bfa7c159b3c9beddf"],["/tags/二分图/index.html","7a754d9b060d9721cf128ed9e398099f"],["/tags/二分图匹配/index.html","f56bbcacede92e119f950fcb8a028c13"],["/tags/二分图最大匹配/index.html","a76143eecfe5abe8f9f4f4251c802a02"],["/tags/二叉搜索树/index.html","2732ec16afc08854d23bcb9ea3157afc"],["/tags/二叉树/index.html","130efcee3ccb75bf9048279d81132f6a"],["/tags/五校联考/index.html","07ef488ecdff3511597e6ba151d5e1da"],["/tags/代码规范/index.html","2072d6bed01d38a4b4235bab18c1e594"],["/tags/优化/index.html","029302d6a0e1eda0e382b544fb64a3ba"],["/tags/内核/index.html","eaf83ad6be23b7193c0f808a214847f9"],["/tags/内核提权/index.html","683825ae2c626b9fc9414e8d9fdad8ae"],["/tags/几何/index.html","33489a3bad811d7a6c8c9cce50018d29"],["/tags/凸包/index.html","d4977298ba0256649eb22c4f1c73a413"],["/tags/函数/index.html","df1e3b1d0d7b0dc533d64c9a22cbae8e"],["/tags/分块/index.html","bfcfcc1ce1913c0d64122ce3fe33d437"],["/tags/初等数论/index.html","e0ac1e8db2a6560953dfd3efb3b47a8a"],["/tags/前缀和/index.html","5d4003f98228d350e2224990f19934a2"],["/tags/动态规划/index.html","fa9c7b16cbac0b43dac47952af4d8a54"],["/tags/匈牙利算法/index.html","b1da7d72526bd05455c7ae7fccbbb124"],["/tags/区间/index.html","c57c24064ccaf8307032f3ff2dc59c54"],["/tags/区间操作/index.html","5709f519cc4f03bc95320a8da7529ab2"],["/tags/区间第k小/index.html","838cb2f209e5fafec5547cdb0efac34e"],["/tags/半平面交/index.html","a659d6c358bb86d20ff1a2f1391a2f4d"],["/tags/单源最短路径/index.html","3ef37f32ac6ad2b9791f7a927f353738"],["/tags/博弈论/index.html","fa37d7e30c67459a699e33760a984754"],["/tags/卡常/index.html","60df690434979f77ac0f90efd3ac2a35"],["/tags/卢卡斯定理/index.html","7c468d5d05fe8c8ec4248634a03dd8b8"],["/tags/卷积/index.html","55e68ab018cf035ee4df5b1291f0f9a0"],["/tags/叉积/index.html","91c56ba3a6505886ad8204365429caf0"],["/tags/可持久化/index.html","95e35b4c12aae030b2068dd07048782d"],["/tags/向量/index.html","16b91b7475235e464f442d598bad781a"],["/tags/图/index.html","2a51b9a03df950a2c3d3a1da55590628"],["/tags/图论/index.html","25f4f92cf432795556c82fcc49adc935"],["/tags/块状链表/index.html","300d66bb86ea3e933af9c7f79b9f3721"],["/tags/增广路/index.html","99d6a64b5d9daf3d65bf7520e264c9ab"],["/tags/复平面/index.html","6e136c64affa22fd742ac0482bac3c94"],["/tags/复数/index.html","54dd1e83dd8fdf2f49974272f0cc6deb"],["/tags/字符串/index.html","834d79567cfc564ecabde6a823c646d7"],["/tags/学习笔记/index.html","c44ce2252abf83642dd20a0fd429e993"],["/tags/常数优化/index.html","dfaf5341544841cc10be5ed3cfa0fc54"],["/tags/平衡树/index.html","7e9890132cd9c78ee4e2f7c7f6bed74f"],["/tags/平面几何/index.html","15ce25ca7023b9e6839c7d6fecb2aad4"],["/tags/并查集/index.html","e796c11202de678849b45061e7fb6381"],["/tags/强联通/index.html","a224dcff33887d446bfd6f711f4735ae"],["/tags/快速傅里叶变换/index.html","3da130c682be920363d425392b81433a"],["/tags/总结/index.html","d3240916334b2277a5e55c6b4359f2cd"],["/tags/感悟/index.html","7d7a86064a616bdb01c3b3b38b7b997d"],["/tags/技巧/index.html","2bc78ad2ab410937ee129d871d82adc1"],["/tags/抽象代数/index.html","ba7b36f1865e565d60645ef2772cc5d1"],["/tags/教程/index.html","77b2ab930f3ac4906679b28a14e44e67"],["/tags/数堆/index.html","ed983d8476ca0d936f8640d22716953f"],["/tags/数学/index.html","7b5d5ee125b0d3ec98e68f96227e645e"],["/tags/数学/page/2/index.html","e8814fea52d8a7712baad9dc5077753e"],["/tags/数据结构/index.html","e6b5345e939f5d5ca029903e2468b90b"],["/tags/数据结构/page/2/index.html","82f20ed19e55923c1700bd47fbdb7846"],["/tags/数论/index.html","ae826e96429dc053f99aeecd304df569"],["/tags/数论/page/2/index.html","8e8d0300d947b4accdaaffa26bce809c"],["/tags/文学/index.html","b65de06074d999e01d2663fb53a72ee9"],["/tags/方差/index.html","90a4a5ca11f290afeae2d7478a44a8e1"],["/tags/智熄/index.html","098f6db264c7f1a4cc942abd354f1ccd"],["/tags/暴力/index.html","2ceba2fa96a1bbdbb21015cb986bc35e"],["/tags/替罪羊树/index.html","682a59135a0ec1444b32c6d7ef8e2779"],["/tags/最优化/index.html","99c5cbe2f71cc5a8f56f7552aa4e8047"],["/tags/最大流/index.html","6e34df4a24dade1c5b14bd8f522de8d5"],["/tags/最小割/index.html","5745846591dd8e31bf2bccf0beb3164c"],["/tags/最小割最大流定理/index.html","3af7f1dbc5b071da0c3a30d5dad39aca"],["/tags/最小生成树/index.html","91188b8c5c2cf6f6354221c41cfba250"],["/tags/最短路/index.html","c4b3bc992bc5c3672713081c5032a3e1"],["/tags/最长回文子串/index.html","a104a6756fd687fd90aeb2debdcde8d8"],["/tags/极角/index.html","57a40db66e86b42f37dfd4b93ba73cfd"],["/tags/染色/index.html","6e545461f7f33f948a9b4dc2221fb50b"],["/tags/栈/index.html","9434fdf3eb903752ec243881c885b0ce"],["/tags/树/index.html","1e0a411142e4ae90b4957a53c1cee20d"],["/tags/树剖/index.html","c5162ff690330c28f4abeeff41fe7611"],["/tags/树套树/index.html","16295245c841f9bbf124ac22d90e364c"],["/tags/树状数组/index.html","8e92b1dbd903a2e0c9fc48b49d1b3bcd"],["/tags/树链剖分/index.html","b6b3ed088e0feff2dce6417152ce5ca6"],["/tags/模拟赛/index.html","9eba70fa76b7086ee4e2fd4155e8af25"],["/tags/模拟题/index.html","19cffc822ae127049f35758348231986"],["/tags/模板/index.html","29bfa8a9f58e20dc6a565c9479e2f471"],["/tags/模版/index.html","df11df9380120044ef7c8b651fc2e589"],["/tags/模版题/index.html","09a020fef8485767c216c39e848fd877"],["/tags/欧拉函数/index.html","4db71497c58718a4fde2b79a4189772f"],["/tags/欧拉筛/index.html","937fa255d057c6a080ef9659efe7ff66"],["/tags/毒瘤/index.html","45ca7c175c0bee1d7949380a48e10d28"],["/tags/测试题/index.html","d7a45be6b99628f9d09f5c3b3096959c"],["/tags/济南/index.html","013e0fdc0df89dbab3ef4329bdfa27c3"],["/tags/清北/index.html","79f97585fbb878ac8c318ed253def713"],["/tags/爆零/index.html","5d6ce5728b5d05a987eb50be80d18e9b"],["/tags/玄学/index.html","76873df483c8bf763adc7e7c1d7a4c3f"],["/tags/珂朵莉/index.html","93458a8b760a1a30072e726104715caa"],["/tags/生成函数/index.html","c5d6526c4fdc2dde22a4faccf681fc78"],["/tags/瞎搞/index.html","e7ed885f3ed83eaafb10bc8d8e353426"],["/tags/矩阵/index.html","ea867b85e0b3fff79313f99188f8933d"],["/tags/矩阵翻转/index.html","7e2ba293cf1d9c8d3a0f4dd8b9f476fd"],["/tags/算法/index.html","e3a0d3d44598be3e4b4d958b8e30a23d"],["/tags/算法竞赛/index.html","eabb9510ffd8dbbd771f0b8e443f339d"],["/tags/素数/index.html","cc6e8bd2eaae6583280b613986950a1e"],["/tags/线性基/index.html","8e0c444cfb2a5c114521764fecfa4714"],["/tags/线性筛/index.html","baadfa9c70f03e3ae59c6929889bd901"],["/tags/线段树/index.html","7fe7ad13cfff6e3d6ddc7233bc86ea4b"],["/tags/网络流/index.html","c862813b69bedfcee3d0c7fdbcc9b966"],["/tags/群论/index.html","aad915a8752e3ddd8c538745e03e32d8"],["/tags/脚本/index.html","ed8ce2d3fb5e7be46b6e6ddc45e5222e"],["/tags/自动机/index.html","9c6003a559da92e870ccd5f4b69de52b"],["/tags/莫比乌斯/index.html","5b847036cf0a82198af287f904327cf5"],["/tags/莫比乌斯反演/index.html","89cd748cbd6f8298f2c3e6f47e6013f7"],["/tags/虚数/index.html","6c5bfda5504f9d9d1caa0dd9b60fa9ac"],["/tags/计算几何/index.html","8df5e999d4a83615e3151b55bee7bb25"],["/tags/证明/index.html","e170e70e5911da7a30cf7b498a4c5f31"],["/tags/评测机/index.html","394ffa0335dd62c19f1427a0fb70d1e9"],["/tags/诗/index.html","811e43878e06a969086e1ddd8e345dfc"],["/tags/诗歌/index.html","bf4477bbdbe8da39ebd5fcedda8577a0"],["/tags/费用流/index.html","e130cb2fb9e1dde64656dbda66c4a4ab"],["/tags/路径压缩/index.html","3eb3e79df3a6dd548f7c7e8a40dfe7d8"],["/tags/逆元/index.html","03b4011d6262b847c98a467ea1dae2e4"],["/tags/递归/index.html","e241025d6637d156345ac94b53f340d8"],["/tags/递推/index.html","b909b8546fc1a889f1e5b71b1884237e"],["/tags/邻接表/index.html","23144db1728fff7495da5ca3fdf0c047"],["/tags/随笔/index.html","243826cf8fab820dc1c68cd4e4cfa7d1"],["/tags/集合/index.html","917f737325fbf81f346814075a9a8104"],["/tags/集训/index.html","7b075b2eb1d93be54818ecdc884f0c6f"],["/tags/非旋Treap/index.html","9047aa47201ec566b29a9856dab64833"],["/tags/非递归/index.html","7625a639dbad0e1268f168af88077f3a"],["/tags/预留推进/index.html","ca885a215f7185509f1f7b900ab0cb95"],["/tags/颓废/index.html","2771a87b49e2ae850c6ab1ec450b8b45"],["/tags/题目/index.html","61a8e20639ba5b13770b757aef51dc15"],["/tags/题解/index.html","1a305cde91fc2da0f528fe99b2f1616a"],["/tags/题解/page/2/index.html","a165aee8ccb74df53097907a7790734d"],["/tags/高性能/index.html","b7107ea9c926989be45fdc817b9f463a"],["/tags/高精度/index.html","6a9b95974574dab4771cb731d11a9dae"]];
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
