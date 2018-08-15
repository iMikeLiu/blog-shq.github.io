/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","f1fd33fe45c6915777417f785203271a"],["/about/index.html","15dc253195e3bc771b27ef6e246ebba5"],["/archives/2017/12/index.html","377af36a3e568276d3aebf0ee6356946"],["/archives/2017/index.html","ceb6751bb5340f66a8a2e737cc4900bd"],["/archives/2018/01/index.html","db03e13acb192c6c3e13c7ac8afc6741"],["/archives/2018/02/index.html","f62eeb93ca31a8bc60e8274a4514a01d"],["/archives/2018/02/page/2/index.html","ebcceb128cc3aa78813c3ae03fe8b09c"],["/archives/2018/03/index.html","1740b29d479268d401ac219307c2299e"],["/archives/2018/03/page/2/index.html","1cb03648196ffc6ff787797fbb4f9a1c"],["/archives/2018/04/index.html","3592e7e0c139f3842c483b0226a0badd"],["/archives/2018/04/page/2/index.html","5037801b96596825eb9db661c1df567f"],["/archives/2018/05/index.html","dc1e3987170c955afd6204dada2ee065"],["/archives/2018/06/index.html","81868cdd7708e7d89d5028d01253a3a4"],["/archives/2018/06/page/2/index.html","af958e8a0a2ea0a33a64b6e186618d7b"],["/archives/2018/07/index.html","d0cd2515365ceed42fbf238bcc4f85d2"],["/archives/2018/07/page/2/index.html","318d137f2dd00d3e90d32cd754f1a124"],["/archives/2018/08/index.html","182c61ecd0ae989615e3f44370999e1a"],["/archives/2018/index.html","7b909e78b93bed133963c9846c112dc6"],["/archives/2018/page/2/index.html","4eacd03198eeac01071a8f99e8e7a072"],["/archives/2018/page/3/index.html","763f36af1b8b23344c41f2b11169f0f9"],["/archives/2018/page/4/index.html","a3a4a76e49ef55eeaadad0b837397578"],["/archives/2018/page/5/index.html","f5334d878eed0429797e267f2c0142ae"],["/archives/2018/page/6/index.html","0ce855d8d83cef0dcb54bd3aa95df97c"],["/archives/2018/page/7/index.html","c9a9b55916512ebfddaec59138786bf2"],["/archives/2018/page/8/index.html","cbad8959711b70dfb09cbe1ed0c6d49e"],["/archives/2018/page/9/index.html","a3316be9ae45e7fc8c0f1c1bbf52a6c0"],["/archives/index.html","c138d48839e64060462cf55146801965"],["/archives/page/2/index.html","c04cbe041f892a1898d48a60b11a1404"],["/archives/page/3/index.html","bbfeaf42e852730f6fc335a745a3d335"],["/archives/page/4/index.html","e8b3f3e19a18a64d1feb9d2ab3b9d8a8"],["/archives/page/5/index.html","590af6c016ace3748817e570964fc261"],["/archives/page/6/index.html","f5d005c7073d64afa5f4e3f2dc6a1462"],["/archives/page/7/index.html","1b1b0950b103833b83b18b24c7ffed5b"],["/archives/page/8/index.html","a6870e2a36f5eed108ffe2613163a450"],["/archives/page/9/index.html","7f27f8ec8217685b61ab742ff62e9f6b"],["/articles/18-4-27-things/index.html","9c05ad9bb766c89381e5bfae2cd6a9c3"],["/articles/18-4-29-test/index.html","d5206e691ec5482fa21fd2c73df94e3d"],["/articles/BigInt/index.html","64d0b62157ba80cd10184a914bd7a392"],["/articles/Chtholly-Tree-ODT/index.html","2dfef9dd369157fb2c149fee6df5add7"],["/articles/Code-Style-for-OI/index.html","af02b80dfcfa8233c7b92d0de617f8b1"],["/articles/Computational-geometry1/index.html","d28ee70f4e0135133228b71068032853"],["/articles/Computational-geometry2/index.html","3497239a588520c1edabc674cb61dc14"],["/articles/Computed-geometry/index.html","5bc075502dca30d93a8aadf7ddc36d7f"],["/articles/Dirichle-product/index.html","03abaed82b9eb099a3e9cfd6d848ee43"],["/articles/FFT-study/index.html","b1ed2b3188aa7153a2034713e399bb3f"],["/articles/HeatWave/index.html","18c68e957a5d80d5bed6671a91627a1c"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","1ffaee1e597449ae53bac023ec4cfd70"],["/articles/JSOI2009-游戏/index.html","c465ef0985e7f526db78f3bc42ee8558"],["/articles/KMP-AC-automaton/index.html","3af2af4fa7238519d6614455e85d9492"],["/articles/KMP-AC-automaton2/index.html","9eeb7e159f215649969d731645a1f035"],["/articles/KMP-AC-automaton3/index.html","63d6330a58980c508231c36b6d4f8066"],["/articles/Kernel-privilege-escalation/index.html","d715d84708a3702069133d2e2dbf935d"],["/articles/Linear-sieve/index.html","cf569e70399a317486e6a874c35a1c19"],["/articles/Lucas/index.html","29bb064a183725ed944608fbb3e69906"],["/articles/Luogu-P4276/index.html","0ec8099348a2bdfac36fe10197104160"],["/articles/Manacher/index.html","e1203798c24e8efb5147536a32fd3fb5"],["/articles/Minimum-spanning-tree/index.html","aa43deed7e077254e9ece5e9096e9d96"],["/articles/Mobius1/index.html","2a0b7ab5398a02a544d27920eb051012"],["/articles/NOI2010-Plant/index.html","a9a057b101b00bdce8dca33bafbfcee8"],["/articles/Network-flow-Algorithms/index.html","a30d28706e8722235f32a03069831462"],["/articles/Network-flow-start/index.html","ab01d039a22b8498729d8d1d3599038d"],["/articles/OI常数优化-进阶/index.html","26d9b2a08fda9ab235c5cac51c876592"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","6c2eec12dc0db2d3633e2ece5d08c455"],["/articles/P1984-SDOI2008-Water/index.html","3d4734a59442e18d803b8f80a143b5a5"],["/articles/P2018/index.html","82c0ac4028e875244155303e316d024d"],["/articles/P3933Chtholly/index.html","19d6e8e65c3c776089943efce8f6b790"],["/articles/Partitioned-Algorithm/index.html","72322abb5f0a72e472d72bc0fffc2418"],["/articles/RP-introduction/index.html","4200e68fdef4c9fdc3207342c0f65077"],["/articles/Sandaram/index.html","4e0483c0decb394a686aa52e34d4f955"],["/articles/SegmentTree/index.html","af3820ba3859ef10e61616435d5e10ce"],["/articles/Segt-in-Treap/index.html","21ad9d48ee7e98f4ff95a13eb3b2f4d2"],["/articles/ShqProblem1/index.html","5878ef5adcfc1eab04fa6a8358a75a8d"],["/articles/TreeArray/index.html","db244f277ce227b52c6ca6b52e814719"],["/articles/TreeArray2/index.html","31b9463ec88d725131d681b2901ff844"],["/articles/Union-find-sets/index.html","e27a614bf735912f0537a23b37fd0f99"],["/articles/ZJOI2006-书架/index.html","f8b15705b10842d25308db12c9efdbe3"],["/articles/ZJOI2007-矩阵游戏/index.html","5790d8d6bb5c9155a32ae4d474161182"],["/articles/a-bproblem/index.html","5038d3e6752528e8b905f02af7fbb6a8"],["/articles/aboutBlog/index.html","bab7b87f93daa9df585921bc28e46119"],["/articles/aboutgit/index.html","12776b1c9828ea839a5b4adbd7916039"],["/articles/autoAC-lemon/index.html","7cbe3de8424309d7eba9bb974303989c"],["/articles/bzoj-3337/index.html","54b42361f1deb812f9d52d03b9142dda"],["/articles/cppteach/index.html","a97973f7eb7a4348fdc022f46356b297"],["/articles/css-QWQ/index.html","b9fb64428fb737922ff0ce7dc1ed0428"],["/articles/dijkstra-spfa/index.html","f93c861a4c7ed4d3e31187c3cdbf9a35"],["/articles/dijkstra/index.html","3c06b048085974397d103acf52eafbc9"],["/articles/dinic/index.html","6caecd66c52cbfac112de1a1c8f16ddd"],["/articles/duliu/index.html","67ba9c70df8987a2131ebcdd97cf2394"],["/articles/dynamic-planning/index.html","ea757944aabf0cbd5e223f6f95585a9f"],["/articles/elementaryos/index.html","2a541532e4180c943e12a2c59c79c2ac"],["/articles/er-fen-tu/index.html","f4dd6565debfedcbce3acc38a1ba5b7e"],["/articles/fhq-treap/index.html","7424df4263c34710abd947d416ec5304"],["/articles/group-theory/index.html","dcdca0fbff9d57bc6baa4502ca1600dd"],["/articles/lgy-from/index.html","a8ff1195e87634c509478db895b2bbf7"],["/articles/linear-basis/index.html","0c414acf15ab492869560857ae46355c"],["/articles/lyoi-Poetry/index.html","726426fa31c004913baa17c93d26b101"],["/articles/lyyz-test-2018-5-19/index.html","94f01386177d589cf98c53590eca8c6e"],["/articles/markdown/index.html","cc46c130526ae368c317b6b0b6a5b138"],["/articles/moban/index.html","e2b2f785d5e45f5386f6bc5a25bd82a8"],["/articles/poem1/index.html","9f5ca724297395551e8e861b42bca1b1"],["/articles/prims/index.html","8df8f57c64c83e78c41b54c21c769c16"],["/articles/python1/index.html","a87d7a26547c8b91e27d0fc25bba048a"],["/articles/question-01/index.html","e4773b6e30680ce5418beb9b18ed4987"],["/articles/recursion-to-no-recursion/index.html","f8a1d39db4ea14135d230df911054d89"],["/articles/scc1/index.html","4d71e480ecb993a86fbbdebaf61a40e3"],["/articles/somethinks1/index.html","6366dd926db410be24deba795030c759"],["/articles/terminal/index.html","2cc751c4c175ce07068092b5adea1900"],["/articles/terminal2/index.html","d4fd1a948530fb8e60ad670efdd0722e"],["/articles/test-mode/index.html","5fa2e6f7467a00b6532d088c06a8ea13"],["/articles/test-polyline/index.html","987d316a41c93b7754a0b429f8c65bec"],["/articles/treap/index.html","36b77661997a859f1f074e79e86b8336"],["/articles/tubaomb/index.html","cf8e34eb396fc44bc0624b0f0e5ebbfc"],["/articles/use-hexo/index.html","ad489cc1cd2c1b498e12febdd392ff9f"],["/articles/use-hexo2/index.html","7cca6110e9a561d18ec42ce32d24f2c0"],["/articles/zkw-tree-algorithm/index.html","dcf09b634010958e1655ff38462ed4ab"],["/articles/zzWA/index.html","4e12e571ab2588c2f7f76451509a922a"],["/articles/「LYOI2016-Summer」一次函数/index.html","c8b57440d4df631bfbf7adecffeba29f"],["/articles/主席树详解/index.html","0b2c279280164f65a21436bb18df65ef"],["/articles/分块-P1471/index.html","3f2da6533ea7b1d2ff0dc2de29b9a922"],["/articles/可持久化并查集-rope/index.html","994728018a55730a6f3da32e349c0d73"],["/articles/复数表示/index.html","a477719cf2ddc7173bceb74eaad78a1b"],["/articles/洲阁筛/index.html","7c52b92108b21eadcc8a253a9cb65bf9"],["/articles/生成函数/index.html","bda072f39c20e4d05e4e023ee6b62881"],["/articles/网络流-二分图最大匹配/index.html","f794894ae9ec941d341b81c3a74814ab"],["/articles/自然数的和/index.html","89444ae503dcecd5566f232e22abd39d"],["/categories/Linux/index.html","f8ec249b13fb65a9b3492668eaf191da"],["/categories/OI/index.html","5b07d24de8368d1ca29b812c20b58745"],["/categories/OI/page/2/index.html","edaaff47b7f39863e1487081a0d6f9cd"],["/categories/OI/page/3/index.html","0f321fcb726856acd14b56a9feaec0ce"],["/categories/OI/page/4/index.html","f8c73c00d735aa20de571eab5ec3a2a0"],["/categories/OI/page/5/index.html","a5ee2de9d53c6353e206a5a58dc916ed"],["/categories/OI/page/6/index.html","023e6101ad3a44bf74ce7e3f35fc4047"],["/categories/OI/page/7/index.html","8f4fe47a4a7dc14cdef2be19549278bd"],["/categories/OI/page/8/index.html","a34f49fb9e9df111068fa8772752c011"],["/categories/OI/page/9/index.html","0e217a4612d90e610844a8aca48823ef"],["/categories/hexo/index.html","569fdce8bbd033a226d1106049d36f10"],["/categories/index.html","cd7775a90b7e5813787fec915d21ebc0"],["/categories/随笔/index.html","078cd6bff6a8e12a0e6f036d85e2bd05"],["/comments/index.html","f42029e45ed30c217414f19628ed882a"],["/css/main.css","291078ab550170610418f12295a084e0"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","c410e9b2a71ea4e54141576ab3a0f524"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","49914a5029b1d2a8848510e6ed9661c7"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/2/index.html","ae9cd78937279a80d863a6a1e089a5ec"],["/page/3/index.html","90c7a155e6fa5ee3e1daeb203ac2a4aa"],["/page/4/index.html","3d322510ccd31d7ac24a15b4ff0c6868"],["/page/5/index.html","7fcd71e2d7bd9122e7d3c056d5555823"],["/page/6/index.html","801931cb7de4fe7851d3b22a34997ff3"],["/page/7/index.html","378babb0087432257ac0abbaa4f700fb"],["/page/8/index.html","d1d9dbef6da1232e1063718bed536964"],["/page/9/index.html","e0c66bba581b8c8b15a1082764c834f5"],["/photos/index.html","cbc85f757b42fcae2af4819c798414d5"],["/remittance/index.html","ee299c3f9492a700fa5c9257e31290a5"],["/sw-register.js","4d8bf93c5b517bfcc26ea5cea61b9ff8"],["/tags/AC自动机/index.html","e538392451d0b4a83aa656a1e3deb46a"],["/tags/Algorithm/index.html","955802bbbdef9f58a3821221d5541be3"],["/tags/Algorithm/page/2/index.html","a86e3f790e75b3fa0140e782c1395371"],["/tags/Algorithm/page/3/index.html","ab310dca7e3005d1af039d6c8bb7a0a8"],["/tags/Blog/index.html","295b9e98834e147838133938ab8b0abf"],["/tags/C-11/index.html","f9fa10af3a6d34ccc7805f71a5057c76"],["/tags/Chtholly/index.html","ce6feeae053db83c775ac39788ed2c84"],["/tags/DFT/index.html","43cfd1c657815fbf0ad9c96c4fe949c0"],["/tags/DP/index.html","ba9beb35c4d5c03e877b73bd1530eaeb"],["/tags/Dinic/index.html","458544cfbaee943893c6a03d2054674b"],["/tags/EK/index.html","cd2c5912287ede1e9e937e39d3969fbc"],["/tags/EK算法/index.html","189077b3dc50c6a8826d2cbd06b113ae"],["/tags/FFT/index.html","0a8f837c04ffdcce9b237dab6df22692"],["/tags/FF方法/index.html","16ba43fe42a9acbaebc3e68fbfa1d953"],["/tags/Ford/index.html","e0ec6e96c40aaf342e534c97f46e52b2"],["/tags/HLPP/index.html","fdbdf457f565b8f530bf958e623a14d2"],["/tags/IDFT/index.html","bc6a6b35f00126cce20d624e12131a92"],["/tags/ISAP/index.html","8814db2657100ab5c475e53909d76c19"],["/tags/JSOI/index.html","cf95f84fcc9685ec68efcd8f16dd4709"],["/tags/KMP/index.html","1994dd8474487fcb479a2ad49366c8ca"],["/tags/KMP自动机/index.html","35905fd571caa2d9ee39659f96bcb9ab"],["/tags/LYOI/index.html","7dc397a52297440dde5d69acb9db60e3"],["/tags/Lemon/index.html","4ccfb632e66e04066a2bb8b5173faa73"],["/tags/Lgy/index.html","d64f91fabd8e84a0e9739dac30577fd2"],["/tags/Linux/index.html","a0cc314181f230454089c1c4cdb3031e"],["/tags/Lucas/index.html","d3bd0f8742f34178298c7acf651b8ca5"],["/tags/Luogu/index.html","b6b8cc2674ee1f321b5d7e4b58a506e6"],["/tags/Manacher/index.html","b349ee0893242151051e29c5301e5f1f"],["/tags/NOI/index.html","8445ca5eeb14de1e91adfe0676f82b8a"],["/tags/NOIP/index.html","93fa7ab0bea51cfa668babfeeefe4e92"],["/tags/NOI导刊/index.html","e382ab68a318d7cbce63033e27463357"],["/tags/NTT/index.html","2a0699f5512bdf45cbd98baa383af029"],["/tags/OI/index.html","e4b52b8cbbe281d804cf782f180efe23"],["/tags/Problem/index.html","04f7593f187fa124d541d319332b0d62"],["/tags/Problems/index.html","4980d3347551ec8ecd5c703487660c90"],["/tags/RP/index.html","72bccd6e9311a11b8874ba67f7153ca8"],["/tags/SAP/index.html","47dc114a6c76590e6c39c3f3502434b3"],["/tags/STL/index.html","e3c2ae47a8c7abf5542164bef3a66ca6"],["/tags/Splay/index.html","69a660e87f3b5372cc12c0a915bbfeed"],["/tags/Tarjian/index.html","16f0ed461a4452067f6e074e2254aa78"],["/tags/Treap/index.html","ebc9a5c0e612529fef86ed713e6e16ed"],["/tags/Trie/index.html","9ce4617f17f8452ceffcfb23caf82fac"],["/tags/USACO/index.html","5ba976195cbedf26214e8735818d3898"],["/tags/ZJOI/index.html","f8f197e56e5cc6b69dd6f55e7c75aae2"],["/tags/blog/index.html","7221ca73e4d8fffd6a6c6ffd17f5908b"],["/tags/bzoj/index.html","31e120c8b0b2f582f3e91f9fd6065948"],["/tags/css/index.html","41389c70d6eeaf370147b0f4af3a52e3"],["/tags/dijkstra/index.html","7ff3e30cc74d12a43953c1286b91c0e4"],["/tags/dinic/index.html","a8178039404793d57f969ef268217cde"],["/tags/fhq-treap/index.html","664caae699f4fba61627cf6b732773d0"],["/tags/gcd/index.html","769c12459cd2fdfe81bdcff66f61294b"],["/tags/git/index.html","41cbdf2364e3f2e3afff86a53793ab26"],["/tags/hash/index.html","c5a7c16803eef17c41ff3beb0e9c1b1a"],["/tags/hexo/index.html","bdf0570c461caee01837f279c60ad1c6"],["/tags/html/index.html","c3139e3695c1d1ac8755370f682646f0"],["/tags/index.html","27107f4633c6ab8f29923e7a8ab6844e"],["/tags/lambda/index.html","9e1511fed695f04f12cb33dd13103fc3"],["/tags/luogu/index.html","bef9094bbda1175f5888bcd6bf483d06"],["/tags/lyoi/index.html","e9ed81135bdfbf21ec1ae13e84470e81"],["/tags/markdown/index.html","09d32b9f53c30884413a02e148d0f8c8"],["/tags/problem/index.html","42fc7d14f6d5c410a97aa46c777b8a6f"],["/tags/python/index.html","fc5eb124f3dc5504cb4a6d36f7939a95"],["/tags/qbxt/index.html","9ffe3ecded1a52179337f581ed5c54b3"],["/tags/rope/index.html","5bb280b7fb41fa61c5d6af91a4b7db0f"],["/tags/spfa/index.html","ee1d6a04386269b2861b551e5594602e"],["/tags/system/index.html","574feae6781681a46f0af6a3b22e57c6"],["/tags/terminal/index.html","fa2d45a25837351bbcdffb21591bd067"],["/tags/zjoi/index.html","f552a72a9f91c60ce6655e78b654dff5"],["/tags/zkw线段树/index.html","9f71a24ae865e20fcca00e8dfa65e5a0"],["/tags/临沂一中/index.html","4a8d3400846e1bb3969e6436a2f781b7"],["/tags/主席树/index.html","93c73d6d8b2b66a08ddd201acfa380f3"],["/tags/乱搞/index.html","df8d40e3dd4be33f202a33e95de17645"],["/tags/二分/index.html","96c77df49b72dfebe041134efbe7074d"],["/tags/二分图/index.html","ffa8927f85607f215d7db7a9647817d9"],["/tags/二分图匹配/index.html","ee1ef1776e33d379e9ea6d9332e56bca"],["/tags/二分图最大匹配/index.html","0bc495e167753177068ba776246a7abc"],["/tags/二叉搜索树/index.html","1a80bff9cd1e5ce564f51c947dc78d29"],["/tags/二叉树/index.html","9e7a873f56b14c47d6ee5320b87df270"],["/tags/代码规范/index.html","190acbfebebe3549483d16c372295c20"],["/tags/优化/index.html","a54f2d7b63af0227de4d3da0905e4be9"],["/tags/内核/index.html","3e9100d582691fc461a8f0664692ac69"],["/tags/内核提权/index.html","6fc41b969d653b3e9ef29748c6ba9642"],["/tags/几何/index.html","859fd383cd27636e90bb61943cc2d930"],["/tags/凸包/index.html","5c8d9c22019486a2a21d7114a63850c7"],["/tags/函数/index.html","ec04aa1a8e75590ff704252e74df77f4"],["/tags/分块/index.html","fdc658c46df1bea1a683d3550eac93d9"],["/tags/初等数论/index.html","336e6b300d295ec0cfbfe518c292a605"],["/tags/前缀和/index.html","d10151ab640735a55a7e72b44da3f29b"],["/tags/动态规划/index.html","d86efcf69e3991625cfaa97072b37e6f"],["/tags/匈牙利算法/index.html","72cfadc33244fc74f48a8d64d3ba8e43"],["/tags/区间/index.html","758e733b416fc0e06cf8e7287d043398"],["/tags/区间操作/index.html","693ffd40968295be78605b79b081839a"],["/tags/区间第k小/index.html","bdf36ec558e2f320d4b696c139d2ecdb"],["/tags/半平面交/index.html","2b79e3f9a3a4198c079c82e2772cdb8b"],["/tags/单源最短路径/index.html","465816b594a22f0900bcef68e281c428"],["/tags/博弈论/index.html","a6c36cc1fe28671d8bc88dff09db73b4"],["/tags/卡常/index.html","ff666b6cd26783a0ec28d20a40eb287e"],["/tags/卢卡斯定理/index.html","1d0f01ff8e673b58661b71aacd36761d"],["/tags/卷积/index.html","f11870307b6b04e5a274202d70325c00"],["/tags/叉积/index.html","3b84d87bb8233f2c0270728a67e4a5f5"],["/tags/可持久化/index.html","34808888da306d9c10bdbb8f2d53afc5"],["/tags/向量/index.html","d7b14fb8cbad2f527928cfe8cb5240be"],["/tags/图/index.html","f23e0f868691fea12114df23a4e30461"],["/tags/图论/index.html","5e229ecc4c3bea131582eb73707c3c2c"],["/tags/块状链表/index.html","ebd2ea2f893e150061237458cfe77b0d"],["/tags/增广路/index.html","83af14039b1fc6aefa66fb0027a85169"],["/tags/复平面/index.html","956c3f32f37df32dcc10391afdd05977"],["/tags/复数/index.html","8bfdbe47eb4192c06885e6143739d493"],["/tags/字符串/index.html","35c2bfaa181d7ec4f057593889cf2962"],["/tags/学习笔记/index.html","a916752bbd0395d19d75c7117b2c73ee"],["/tags/常数优化/index.html","e8161ab889a618c7ddea4fde13fa94e3"],["/tags/平衡树/index.html","b3bb0723550357306e8fd290d4e4ae8b"],["/tags/平面几何/index.html","2f3980c89a2ad0f0b3f642eb1a28fa17"],["/tags/并查集/index.html","b29eeef06e099848001c8c3bbf4f9648"],["/tags/强联通/index.html","58a8d29986abc99862e954ad08a6dcaf"],["/tags/快速傅里叶变换/index.html","f1dc07e33583396144ce00b1d06c5099"],["/tags/总结/index.html","071b5f74aeba5571c130d622563b6ba4"],["/tags/感悟/index.html","18a5b39cc7aeba2f76de3de52d077d21"],["/tags/技巧/index.html","4849aabd3d3a07e430afdff911ff1608"],["/tags/抽象代数/index.html","7fa6386efceeae13f0085b39d7b936c9"],["/tags/教程/index.html","70704cb5bed8df56699ec664a324f056"],["/tags/数堆/index.html","fbc44b8ca06c7aceeb0fc65823536d3c"],["/tags/数学/index.html","74b2de848790d6f90fd4b38fcb868757"],["/tags/数学/page/2/index.html","bbe8a480fbb8dc33747d30f4dcef0f56"],["/tags/数据结构/index.html","9c38196c1bae391461566e91b26d706e"],["/tags/数据结构/page/2/index.html","d0b8d7c62b43b437d7e46f5b7509bc4b"],["/tags/数论/index.html","9cf79ee913703084be89e35ad8c32450"],["/tags/数论/page/2/index.html","babc90324bdf231837c7050baf186102"],["/tags/文学/index.html","505d4d01bce09eef1d3d5f42cadc75d9"],["/tags/方差/index.html","fd6479e598b6da3069c363470cf5972e"],["/tags/智熄/index.html","913a922407cf4b18513d52f686e56e3b"],["/tags/暴力/index.html","fec3f54bb86a2c4a592cc1dc55f7b728"],["/tags/替罪羊树/index.html","5e9d89d37640fc697e03bcb9e07b2be2"],["/tags/最优化/index.html","9f7e3278ba9a7a87105d26bf258b405f"],["/tags/最大流/index.html","19df15e3643d9ae7a5b9df04d40583fe"],["/tags/最小割/index.html","edd8a628f87bbb653a763515784830fb"],["/tags/最小割最大流定理/index.html","91c9ffc23bc6c2173a16c1facb71b956"],["/tags/最小生成树/index.html","d415740cc888721eebf977a8e4f703cf"],["/tags/最短路/index.html","c45f504800c9bf72a0c51c54cf605c02"],["/tags/最长回文子串/index.html","e66fa6228dcaad6dec05caa2a534e3a4"],["/tags/极角/index.html","4a72c251adc9fa7dc8504dad60fd9519"],["/tags/染色/index.html","288c8d7ae2500dde79e05fc233783152"],["/tags/栈/index.html","51043d623d845faf0d583c561ec92179"],["/tags/树/index.html","b2a0a4018a362a904c613d69b970a09a"],["/tags/树剖/index.html","78d974366ba92f825d6bfbeeed72d039"],["/tags/树套树/index.html","8afd4ca41c113941bd77ab8f101db8cf"],["/tags/树状数组/index.html","0915871f3d8aad9949e3d0a2fd1c5a5f"],["/tags/树链剖分/index.html","8fe425d931ad0ae992ca78f2aa72b49e"],["/tags/模拟赛/index.html","265a9d7c886187736ce92bd5e3895f15"],["/tags/模拟题/index.html","e2b1c6414471778793e5ed86209c4329"],["/tags/模板/index.html","8275ab8ef9de5ed8b97cbb6eea494c94"],["/tags/模版/index.html","958306354e26e838e1827f6947565d05"],["/tags/模版题/index.html","dbbfae9118992d72fa0dce29406ef643"],["/tags/欧拉函数/index.html","9adef8df23a5adf29b44be4d340a97e7"],["/tags/欧拉筛/index.html","308c6aa4dbd6249e1ae5291c637f03c3"],["/tags/毒瘤/index.html","d5fd48949cfb7cb9a75ce444c475d530"],["/tags/测试题/index.html","358a4f4ca0a1b2bc9dbad108d935f761"],["/tags/济南/index.html","d5f80a9061842ef8a4e8b6c39036d461"],["/tags/清北/index.html","f7fe321976edabc366061b8f9b20d0c0"],["/tags/爆零/index.html","d81a5571c7fb9f11cf0340e0dd27cc85"],["/tags/玄学/index.html","0ef4f2befb8366cb95b79faf31caea82"],["/tags/珂朵莉/index.html","105dc51c23e5ab44ef1f093081680164"],["/tags/生成函数/index.html","555454902da55f13028d492a8d79d7a3"],["/tags/瞎搞/index.html","a9cdfdc82b22c2b3d468432fbc260e2f"],["/tags/矩阵/index.html","4dfe3af7424def6d004d786d57297983"],["/tags/矩阵翻转/index.html","7b64047a9bef89356ec56f24ec334c9f"],["/tags/算法/index.html","c41057f15cab0fe05fb2d5efb7334ad3"],["/tags/算法竞赛/index.html","6daf664d605fb5d5ad8287db9aa7d1dd"],["/tags/素数/index.html","e61d8602da24b4ee5110b7b700ca0abd"],["/tags/线性基/index.html","288d2581f1dcdc7225de850f8194e50b"],["/tags/线性筛/index.html","c4ef1577a2e6fcb6d6cd38745a24ac78"],["/tags/线段树/index.html","53c42b9d2a4aef329c824df45f7521d7"],["/tags/网络流/index.html","73fdfc3127b384bf24753132fd97318c"],["/tags/群论/index.html","a77a172e8ace34d1ce2daa245d5b19a3"],["/tags/脚本/index.html","82e71694a325367fcb7b104f885886f3"],["/tags/自动机/index.html","551971eea153ff782ec56b995d7bc3b9"],["/tags/莫比乌斯/index.html","afddc23486d9433e97114f3c6469f6be"],["/tags/莫比乌斯反演/index.html","52e6a60d945080dfb5e9dc1ea08eb518"],["/tags/虚数/index.html","267cde3d88893bd82944c136803355ff"],["/tags/计算几何/index.html","7ac91922033b64e35c72142b0179f401"],["/tags/证明/index.html","ce39d7be11561b185d3965ece224574e"],["/tags/评测机/index.html","e0900a751ef1183ee68c3a63ff9c6cfb"],["/tags/诗/index.html","bc3ba2cd917a427129a18e9bf63cdf9d"],["/tags/诗歌/index.html","be304b8a72f027153f3f314b40463e5f"],["/tags/费用流/index.html","ef2b004d335c11d3f49f092342253186"],["/tags/路径压缩/index.html","f2d218efbc67ebf00f4cac9089eef8c9"],["/tags/逆元/index.html","9c0014909711d470f48bbb5e7a2d6e9a"],["/tags/递归/index.html","b969571ee1e85a490b50aa0273ef70f6"],["/tags/递推/index.html","2b54da2e3ddfd53e3c55c60b18ed3c17"],["/tags/邻接表/index.html","3b6e6d754313faac6524d6b7308d8dbb"],["/tags/随笔/index.html","115c8d7a946c12889283b3cc8d7b1c67"],["/tags/集合/index.html","b033cba907d11828618fb602a560e8f6"],["/tags/集训/index.html","13c3d7c54a14e817575b61f382e652d1"],["/tags/非旋Treap/index.html","932b6a164a4daaa46b909e800d10bc5b"],["/tags/非递归/index.html","6b386ad17bddf4cca2601cef2cd29ad6"],["/tags/预留推进/index.html","993030382ffcc87e0e05aaaa8c143135"],["/tags/颓废/index.html","d19930098a5ec2347482dc4d41e3b6be"],["/tags/题目/index.html","0e49740311ea147b04410fe34fd3fbc9"],["/tags/题解/index.html","6476817b984e3ea06ce70c8c08842e60"],["/tags/题解/page/2/index.html","ed1ca4eeada4012cba6c130c052aba3e"],["/tags/高性能/index.html","e9d1bfb205fa0fae9dc64954a85031eb"],["/tags/高精度/index.html","816cde49e9e57e870b82e2d271a9bc93"]];
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
