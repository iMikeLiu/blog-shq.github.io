/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/OI-diary/index.html","c8cc56b4f3908610d9ad5b75df43aebd"],["/about/index.html","2c4d008b4619ff0a0be080d573fda5dd"],["/archives/2017/12/index.html","cf728304e67558b3852549a75a920d08"],["/archives/2017/index.html","17e5e8b3bae9e9031d6dc40d30234671"],["/archives/2018/01/index.html","8f72dba2f00e2bbb9000b95c61ac5bbe"],["/archives/2018/02/index.html","44be22a89c089e0087918f8ff00d8258"],["/archives/2018/02/page/2/index.html","b934bfca0ac8c8dade4a72d9d97b8be5"],["/archives/2018/03/index.html","7d2a73c49c542b11a4f181e4fe76384c"],["/archives/2018/03/page/2/index.html","013dd9c07d82133ce02e56f09f076ac9"],["/archives/2018/04/index.html","bc5689ecd3b3da80f2d7309a592cd777"],["/archives/2018/04/page/2/index.html","01d29312ec14b1f6294a51cf3d9caf17"],["/archives/2018/05/index.html","d9c8e5b4dc6518a3d5a1f61cb814713d"],["/archives/2018/06/index.html","03246db66791fdadc1cc9eeabd7049c1"],["/archives/2018/06/page/2/index.html","8b88f309efd037921a14a8d45d8f813d"],["/archives/2018/07/index.html","3694a80c2644cc9d428079b97021dc12"],["/archives/2018/07/page/2/index.html","959e03f4d080eab4e407fa91f670c70e"],["/archives/2018/08/index.html","683b739ad511d53f3ba7537a303063fe"],["/archives/2018/09/index.html","57f27df5a584fbfccc326ea8d04c9672"],["/archives/2018/10/index.html","ee48c80069fa12389bb09aed51943bd7"],["/archives/2018/index.html","091835164ba844beb3c0a6f6d7fed834"],["/archives/2018/page/2/index.html","615de0450d50e6ef787f3e515ca226fd"],["/archives/2018/page/3/index.html","1fdb591ed079ffe56018b44f0bd326e3"],["/archives/2018/page/4/index.html","2d550f2b7f23b4c56babf1c4d6533c19"],["/archives/2018/page/5/index.html","4a4c1dade84da0ee5bdbec0b6567fa20"],["/archives/2018/page/6/index.html","6ed40cf427e0133d603cd0c8723eb716"],["/archives/2018/page/7/index.html","2aa41fad007bc30ed2d0ea6ac46120e0"],["/archives/2018/page/8/index.html","d08988fa32b074d384bc38a7412d38b2"],["/archives/2018/page/9/index.html","70de4f9f3d4c227096afe42e3d6cb95c"],["/archives/index.html","81a2a24910f731a00bc046a4837d77e9"],["/archives/page/10/index.html","1904c0e0425492fbdce704fad87e83ca"],["/archives/page/2/index.html","ab81d4e47966cb9e764dc0797b2beb05"],["/archives/page/3/index.html","2cb8cb5a1cede7da804c3d2c98fba6fa"],["/archives/page/4/index.html","d376136798cf1861cfb5682b7e7e50c2"],["/archives/page/5/index.html","ebb3e706caec91d13dbf74277e82ac31"],["/archives/page/6/index.html","f1d64fb697dce8d427c6c310f9abc35a"],["/archives/page/7/index.html","7f3b87bfd6b048a02d1cb1aef834637c"],["/archives/page/8/index.html","28c6c34daad4f58f862a5c990a62df96"],["/archives/page/9/index.html","abf87b37bb4386040fe1fba42f65b66b"],["/articles/18-4-27-things/index.html","76b4642a29c64545e56dfcdec3428175"],["/articles/18-4-29-test/index.html","9e47dd53911b31d0eaa587972557a50a"],["/articles/2018-五校联考-Round1/index.html","cc7a06c2f1bc76af1170cd5b507e3b2b"],["/articles/BigInt/index.html","dc115f9c249517e961ae4d8a5e42897e"],["/articles/CQOI2018-九连环/index.html","430ff9b748bd7b538fdab35a64640f9a"],["/articles/Chtholly-Tree-ODT/index.html","d8a55cfb300ba3534cb5b4089443c79c"],["/articles/Code-Style-for-OI/index.html","6772bb45d13d1621d9174cdee48faa9c"],["/articles/CodeForces1051/index.html","b7998507292327ef7ac694325d12c558"],["/articles/Computational-geometry1/index.html","6ad567a0f6e94f18ad233ab7d10e3275"],["/articles/Computational-geometry2/index.html","e47d8d0b952e9215422f22e877bf51d4"],["/articles/Computed-geometry/index.html","489e902b102d879ddcab640f1e765db8"],["/articles/Dirichle-product/index.html","afc5a6ea730d6199ae6a80e7e589a5db"],["/articles/FFT-study/index.html","a6e7c979e0ae8521e13f574caf5bcfd8"],["/articles/HeatWave/index.html","0a6e95bccdebf8a484512bb8b7c242b5"],["/articles/How-to-Make-A-Uneasy-to-Maintain-Code/index.html","a39eb3af7416e1b780802b1eae57c44f"],["/articles/JSOI2009-游戏/index.html","5dfaaf846fd5ed40ff5635a2290262ae"],["/articles/KMP-AC-automaton/index.html","ed52706d5b6792e1ecde2effe38a9572"],["/articles/KMP-AC-automaton2/index.html","8104dfb6763ae45853bb8c328caa9e2d"],["/articles/KMP-AC-automaton3/index.html","2f727fe6b7d56b7b229bfa9cd031e313"],["/articles/Kernel-privilege-escalation/index.html","a459ee3fd4134ea00a9d3d86abf37d83"],["/articles/Linear-sieve/index.html","b70d89b28f6d29651695b6334ea26af1"],["/articles/Lucas/index.html","a2e2a39b4d9729c78d25b3baab5fb9c9"],["/articles/Luogu-P4276/index.html","de27b11be11013e3ffe32a3dc540f384"],["/articles/Manacher/index.html","e113eae51f869c4a390c22e810c0dd5c"],["/articles/Minimum-spanning-tree/index.html","3a25fa6cd7489d74f39b48ed6a3aac26"],["/articles/Mobius1/index.html","f25289558f8e549222abfc8590fe1aeb"],["/articles/NOI2010-Plant/index.html","2cbd6163b799f429b8cc3bb8aa0a0d52"],["/articles/NOIPreliminaries-Prepare/index.html","423928fae40db028db84704dcb3d1c4e"],["/articles/Network-flow-Algorithms/index.html","aae76f173ae6047d2c0a34162cdfaf2f"],["/articles/Network-flow-start/index.html","ae0fd20bd25fa7e4296381c26212e525"],["/articles/OI常数优化-进阶/index.html","50278242457237f5302b15298e82993d"],["/articles/P1801-黑匣子-NOI导刊2010提高/index.html","58fcaf201c583f5a3cf2ff4f74d862bd"],["/articles/P1984-SDOI2008-Water/index.html","da2fb6b6836beaeffbea89dfb1da5955"],["/articles/P2018/index.html","a1c942fe714fcd2f8a74271c985f579b"],["/articles/P3933Chtholly/index.html","0913a6f77b88bbb0ff12fa24169d9cbf"],["/articles/Partitioned-Algorithm/index.html","bb863f8deda138ee3eafaeecb4c92015"],["/articles/RP-introduction/index.html","75fb3b86fee09ecaf494891a0b39b3e8"],["/articles/Sandaram/index.html","cadb5f03e57cbec6d6bbb7c18ca6a87d"],["/articles/SegmentTree/index.html","f35a4a696c7299c27ea3add3130b3a75"],["/articles/Segt-in-Treap/index.html","a6769a212d80fb32744678f9e6b0d71c"],["/articles/ShqProblem1/index.html","574b2fc5cdecd0b8ff7c593a1b5aba6f"],["/articles/TreeArray/index.html","0117b1acf7da33f7466471c214db55e6"],["/articles/TreeArray2/index.html","5995009f314a706a4cf565f183caa6e4"],["/articles/Twelvefold-way/index.html","49fa3e5ae8f850ec83715ab9ffcb1632"],["/articles/Union-find-sets/index.html","153f1c4ab02787eae0e1d7c9b7ba489d"],["/articles/ZJOI2006-书架/index.html","d22dfa3f2eb3a34477993ddb8218c033"],["/articles/ZJOI2007-矩阵游戏/index.html","40d0e130d4a105e47874c3eeee3bf5ef"],["/articles/a-bproblem/index.html","57e51fb8621c1f7400d3c91aef9703c3"],["/articles/aboutBlog/index.html","0a8d047e60444e8ae058ee69e70ae978"],["/articles/aboutgit/index.html","a368e1b98a4e97f0b35d7b46792f8fac"],["/articles/autoAC-lemon/index.html","de1737328e2ca21240740ee097ccbeb2"],["/articles/bzoj-3337/index.html","9abda78e12607f07878fedcee03b4b12"],["/articles/cppteach/index.html","6a33b65a8ae86b4e5e495fbddabbbfb4"],["/articles/css-QWQ/index.html","358f944dea865fc624fca50a7f537840"],["/articles/dijkstra-spfa/index.html","ff1699807271a14754f0ded77868ae70"],["/articles/dijkstra/index.html","001bf5992ae6a96be07d9fea829307e3"],["/articles/dinic/index.html","90fbf3e4cc0c335ebfebcba88e157fca"],["/articles/duliu/index.html","c7fe1edbef988c8d1b85bb3dcd83cec1"],["/articles/dynamic-planning/index.html","88f0f5fcb18130a85267ecb2f3224779"],["/articles/elementaryos/index.html","6f1c8a6e588b57fe1b0794dde155e311"],["/articles/er-fen-tu/index.html","1542c6a672d149ab0768d02a5212372d"],["/articles/fhq-treap/index.html","791b9a4fa1dddca0d2ec5a4615a6cdfc"],["/articles/group-theory/index.html","4cefe4777ed4a5224264b859f7879010"],["/articles/hack-spfa/index.html","8658791819c693ebf26f0813be776f29"],["/articles/lgy-from/index.html","5ea41c3b0299210ca2db420284456e41"],["/articles/linear-basis/index.html","9d4df93aba2d52009c9064c71cc4b97a"],["/articles/lyoi-Poetry/index.html","441f4e15f82a6569540bdd3ecb393f74"],["/articles/lyyz-test-2018-5-19/index.html","83d3e425a2ce95536b95cb44b7ba090e"],["/articles/markdown/index.html","3225617b43ae29bbced5ee25db7dd46f"],["/articles/moban/index.html","c4b57a94db6762b22793cf4006274682"],["/articles/poem1/index.html","a6b6fb10d5581601a60136ad3a2f8b3f"],["/articles/prims/index.html","95e34c9e12688539acc774ff630030de"],["/articles/python1/index.html","5130a6bbecc6bdea71fbb24be15d8f6a"],["/articles/question-01/index.html","130553811b7824b8f78703b8de78c29b"],["/articles/recursion-to-no-recursion/index.html","bc3303f279cd9c79254b968f02a3a79e"],["/articles/scc1/index.html","e2ed7ed5a86478bf223bb6bad2e5ddd7"],["/articles/somethinks1/index.html","0730873024000bbca8c2171a5678a596"],["/articles/terminal/index.html","43f67f7f7d96362a1f5bb27c9cf1c8b1"],["/articles/terminal2/index.html","eb1de923fd461d63519a1a5fed0aedd7"],["/articles/test-mode/index.html","d5737ef488161b24f36ddb1debfb5f66"],["/articles/test-polyline/index.html","98b309827875dc5fd8d2e8a42b7040b8"],["/articles/treap/index.html","da66855bcae04105ddb16ef1ed90b019"],["/articles/tubaomb/index.html","58a1d3a3ba6669fb8fd39f10f7a85133"],["/articles/use-hexo/index.html","47604155be1f9aca7dde9ec143dcddfd"],["/articles/use-hexo2/index.html","a666d70ccabf349a04f67b404ef864ea"],["/articles/zkw-tree-algorithm/index.html","c357ec76d6846624cc933217529c20a0"],["/articles/zzWA/index.html","604e866aa17977c202e4ae8c293de4a1"],["/articles/「LYOI2016-Summer」一次函数/index.html","55a7f32d7f743599d7aaa5d8969e33cd"],["/articles/主席树详解/index.html","5ad72bbdcf33646f5a9299cfd7678332"],["/articles/分块-P1471/index.html","d81a6cb99cc7b996ffbb42b6022d896e"],["/articles/可持久化并查集-rope/index.html","e5dee1b5eb6a895e60bd2bead9558fa9"],["/articles/复数表示/index.html","87e4574872b840f7fbddd9e7646d6860"],["/articles/洲阁筛/index.html","68a5c49ecf9288182c285b69f82bb1b4"],["/articles/生成函数/index.html","048693f608d19a7ee5a1a372bf86c019"],["/articles/网络流-二分图最大匹配/index.html","e6351d8afa8425237f838ee70836f902"],["/articles/自然数的和/index.html","96beeea75574de69caf225fcb14c8a81"],["/categories/Linux/index.html","531c487aac58caf066190bb5a8e1f854"],["/categories/OI/index.html","73905cc11faacbc347ba1b05fbb6f4c4"],["/categories/OI/page/2/index.html","655a9076df001d58d75636a05c1b9c65"],["/categories/OI/page/3/index.html","ddf3f503e833f3b96b730fc467340218"],["/categories/OI/page/4/index.html","aca22dd1a5a6474bb05a03f561527088"],["/categories/OI/page/5/index.html","a68bc1877af8f5030f45e42715d24e6a"],["/categories/OI/page/6/index.html","3d94f7f262d826cfe0dd37cc9cffce4c"],["/categories/OI/page/7/index.html","bfd791418f0af886ae1fdf87e6651b18"],["/categories/OI/page/8/index.html","bd23910e06ba91c46e4b0a9ec6a6e984"],["/categories/OI/page/9/index.html","174a071b04f69ca5943c6b5cf15e797f"],["/categories/hexo/index.html","0b3bf4551d9c1db28c442936a457d6de"],["/categories/index.html","4c7b6fe56ef82e4656deaad1cc71d043"],["/categories/随笔/index.html","0ba92450e32cf49dff5773bcd76eee79"],["/comments/index.html","901d39ca7b2f02b9f2d9b59b02ba69da"],["/css/main.css","98ce976e908056d8e3863b369a11bb6c"],["/fonts/background.jpg","b0e67c96c79aaf47851453e53d67f954"],["/frlink/index.html","1c344515762c1803a78869621ac13fb1"],["/images/1.jpg","b0e67c96c79aaf47851453e53d67f954"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/alipay.jpg","96e62cbf4f9458a362d52f3b4258f3dd"],["/images/apple-touch-icon-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/avatar.gif","b710a0ffc7f4f4ec2be398dbddc0c432"],["/images/avatar.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/background.jpg","399772e3be3df25df843befe6206b5bb"],["/images/background1.jpg","e67ad0a4abb65896ef08e2120ffbf72c"],["/images/cc-by-nc-nd.svg","7b63a831458437feab01ec613164924e"],["/images/cc-by-nc-sa.svg","3580192fdf9933fe562d67473f001357"],["/images/cc-by-nc.svg","a268ab2299bb1d7ea25f59b06e682eca"],["/images/cc-by-nd.svg","0d0f4b5bd3a4c8268fe5598055ce52f6"],["/images/cc-by-sa.svg","fd23f07f000a7d8050ef8fc1e2ef3806"],["/images/cc-by.svg","7caf7a276b6d1536224857c745770d2f"],["/images/cc-zero.svg","3fd81d1e01368ebcafdebac6a3491470"],["/images/favicon-16x16-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/favicon-32x32-next.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.png","55f5cb0ed595704ecf032974bf1b9805"],["/images/m-bg.jpg","8f483b0e862817e47570e6552c6969a5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","5d7a8d24ee0687e8d83c7833b59beae8"],["/images/quote-r.svg","030454e9cd4a732a7c695fde3309d863"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/timg2.jpg","8822e51ab8b768ebe2813cdd5c99c419"],["/images/timg3.jpg","d6b6747fc6ceeaf85b3093bbe8e6b914"],["/images/timg4.jpg","b4bd73252e7951fcc603abe1ab7255f9"],["/images/timg5.jpg","e3b23981004f8a2321292f3c698ca609"],["/images/timg6.jpg","e25226474087db101263b211ecf2eba4"],["/images/wechatpay.png","ebf1e7d13c1f8060aa97991f69d624c4"],["/index.html","641fc39db26b19b8e1ef0726053c8e18"],["/js/Error.html","240d3340dcd306f75fe67112e6d6872a"],["/js/src/affix.js","c40858b34259c64e91d89b0eba4d32d1"],["/js/src/algolia-search.js","3f06e8912a787b195fe7675cb74999ab"],["/js/src/background-shq.js","1042b5029eaee0e478fcf969dbd98ea5"],["/js/src/bootstrap.js","e2442b5def46967d181105994eee2c0a"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/clock.js","5021eeb8adde29d64da11f9cfe1a2f83"],["/js/src/custom.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/custom/instantclick.min.js","bd4406e51aaff43afedf3dd42de239f7"],["/js/src/exturl.js","da6e67acec3b260c4ed2a4505aaec626"],["/js/src/hook-duoshuo.js","f46d799d0bdb76c55ca4cd709538e629"],["/js/src/js.cookie.js","6ed466df7203276c7508e9409eb0c3a6"],["/js/src/love.js","11dae39d38c22606ac76522e2d18704d"],["/js/src/motion.js","719afd2c75540a1fec3464d322d96fa5"],["/js/src/paryticle.js","d67d6bbe46826c47460c39c03de74c33"],["/js/src/post-details.js","17207cd70a086df65bc005eeebb0f364"],["/js/src/schemes/pisces.js","c152420ba6bc8863927ebb30336beca7"],["/js/src/scroll-cookie.js","5c7e8a8bf797b8330840e0e20ff67f08"],["/js/src/scrollspy.js","08f362e035ef5aeeed9b8f2182d9e812"],["/js/src/shahua.js","4f07877d986b72865fc158b08513f5f4"],["/js/src/shq-background.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/src/utils.js","b5d5caab8fe4a036600789c1cff97e95"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","d1ff14c3dbe6f9a6cf0420da04b254c7"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","e16b2fa1be3cfc1892b8bf73b31d1faa"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","a6cb983e06029eecd067b666edd4d3d2"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","4ac188774675ee61485cfa8cd5b8ca8d"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","4dc5549322963d427e08c2018eeb07db"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","b0790f009f03a0bd69fb953e6cb1095d"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","32562dcd80b7d2a0d8002b961589f176"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","5130d43bae4662b899a8c7c20711a82c"],["/lib/fancybox/source/jquery.fancybox.pack.js","dfb47cbd0cbfd157a4f36b30e523ff90"],["/lib/fastclick/README.html","aaccd12254f123fc6960172f690b486f"],["/lib/fastclick/lib/fastclick.js","eb096bb0ea57c024c35c5b717d0cad6f"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","7cff6e54abb37fc3365d06da8e9e8d8f"],["/lib/jquery_lazyload/CONTRIBUTING.html","e338af929558fd2171b0e75b346eef17"],["/lib/jquery_lazyload/README.html","7488c7a19e31f58c3f2932a2dd310bfc"],["/lib/jquery_lazyload/jquery.lazyload.js","714b52f504d281f6ae5a0c7cdb306d62"],["/lib/jquery_lazyload/jquery.scrollstop.js","fdfdb03b057b7e0ee49d3e6b3ef2b8d2"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","43c0a40747b958dfefc2d605a84f0219"],["/lib/needsharebutton/needsharebutton.js","e9449a574d25cf7b08b1f83106fe80ba"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6670b2e7742ffb51b1f3abaf3dcdd99e"],["/lib/velocity/velocity.js","20f6c8ac2b330b0c69287e7c40e3d2e9"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","e9208607de1d4653e843adeaa56062d9"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/lib/zclip/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/page/10/index.html","66fb5665b9ce8e9591d0160608b604bb"],["/page/2/index.html","7fb48e30ee516c31a1bafa84d3883dec"],["/page/3/index.html","ee07ee0b8cc7340c916811a1c3455a82"],["/page/4/index.html","45aeffd0310c12946bfacc61a205beed"],["/page/5/index.html","e081ac9b63029f989cf3a79f37ee8b61"],["/page/6/index.html","3beef74b3cbebdc21c0560cb9c73cca2"],["/page/7/index.html","270ff8187e96fe381708ce71715c90f7"],["/page/8/index.html","2578ea0ce65e627c54a82c751319305b"],["/page/9/index.html","e6bef42e4ceee5a66ccdf925e7371558"],["/photos/index.html","4f43cfef1c765fd97193f10390d35eb9"],["/remittance/index.html","ceea5d9c44d05ab7d13c6c798ce12673"],["/sw-register.js","18a2799b5e822485f8a36b813731f695"],["/tags/2018/index.html","516ea1f2711f219d97d07df67f6cb42b"],["/tags/AC自动机/index.html","55c6ef1b76847ea13c56b909b5f1a959"],["/tags/Algorithm/index.html","fbda53ed27034a9c4485cd54fca8847e"],["/tags/Algorithm/page/2/index.html","b367c08d11aa50c378963032edb70f3e"],["/tags/Algorithm/page/3/index.html","c92eb03307605da393883297b9383d61"],["/tags/Blog/index.html","9484ffd7b927ed1c84c138c540a0b8d3"],["/tags/C-11/index.html","e7ebb0fd568cd026234f408c65012436"],["/tags/CQOI/index.html","929a69db5f204fcdb925de2ba9daf255"],["/tags/Chtholly/index.html","9e597f7d89dae24de1917834c143b70f"],["/tags/Codeforces/index.html","943eb8cdf82a9fe75da159432182053d"],["/tags/DFT/index.html","07342e9eeea96923e0602e296ce3f5ac"],["/tags/DP/index.html","4f455687dc9ea21c31f8406d886c9982"],["/tags/Dinic/index.html","e57ad416c91e14b1d8eb1ad0ccf9e27e"],["/tags/EK/index.html","971cb93bb0d308c343bacb605d19a7a3"],["/tags/EK算法/index.html","112580ad5a1e5d88ff7d1b5b06f515b3"],["/tags/FFT/index.html","d56de9ba054efc5b68a4309c4feebbbb"],["/tags/FF方法/index.html","6d99a38c72862fd2f24425d7f7f97069"],["/tags/Ford/index.html","d420a4f0a00eda71d1c82c9bdf08fbf1"],["/tags/HLPP/index.html","ac5b8554b139ce7f1d83ef88aac0c270"],["/tags/Hack/index.html","8748eec84477725eb2998d0640880835"],["/tags/IDFT/index.html","1989f2b3debcf5a7c676ecc64126fec5"],["/tags/ISAP/index.html","c78c990885866de81cad3c8b166a0b0b"],["/tags/JSOI/index.html","937ad8e99b0b9001a79a2a0397911e22"],["/tags/KMP/index.html","be1793397ddb2a69a5ec3b9eb82059ae"],["/tags/KMP自动机/index.html","6f596e631c07180ffc2893a13ea381d3"],["/tags/LYOI/index.html","ad582922415cc0a89c2c06da529ec8b7"],["/tags/Lemon/index.html","84bdfb508cc720a61f56ef08bec418b7"],["/tags/Lgy/index.html","27c59aec4e73e5bbd4b2eda206fc73a8"],["/tags/Linux/index.html","9fbd2c45d7477cb6b4805eb9b2205200"],["/tags/Lucas/index.html","5266db0fc5b6b385d6d027e4cdf49486"],["/tags/Luogu/index.html","1e28814b1413e4bfa4ab917e75d7596e"],["/tags/Manacher/index.html","71a338ab72ea6689e47f5656bf5d024f"],["/tags/NOI/index.html","a0669ed826d2b19cae2b07230248d27d"],["/tags/NOIP/index.html","39003940f4092ee31fbe5e6e87ed1c6a"],["/tags/NOI导刊/index.html","365500dbfd0d70de864b8a1d0228869b"],["/tags/NTT/index.html","c330b42204240ae9b7aaa9ea6ba590ff"],["/tags/OI/index.html","71a9d65a7a9fea7b0219fabd7ad618a9"],["/tags/Problem/index.html","0b51d83cee00f60fb2e92d333c391764"],["/tags/Problems/index.html","352315daf7f25d8b8c9ef0ad352890ad"],["/tags/RP/index.html","8777204a542683f2b3c472903c2d7bf4"],["/tags/SAP/index.html","0eaa8edeaa80fb37e2b7acf7eacc989a"],["/tags/SPFA/index.html","a7cc2af82e8aa47ba3637f6822a5a70a"],["/tags/STL/index.html","d63effe864b571f39ec45f233775cf8f"],["/tags/Splay/index.html","ac7d5604ed33a9e0d7484b7723e4e7af"],["/tags/Tarjian/index.html","3b09ed859f3b65f7af548a17967b4d1e"],["/tags/Treap/index.html","481d8e48251d1ea0e180b3852c90d024"],["/tags/Trie/index.html","d7c929cd18ef0d557e0643dc69271335"],["/tags/USACO/index.html","1a637e5e0b8214f775b2ed8a4c569d22"],["/tags/ZJOI/index.html","95338dc11d51f75eb268e680d4b2e9cf"],["/tags/blog/index.html","2717e79938122b87714ed955e63cd446"],["/tags/bzoj/index.html","0e8ea3e41a57f1a34e28ffd304e44b32"],["/tags/css/index.html","d2d90f8aaa45672580833d05e2b52263"],["/tags/dijkstra/index.html","bf9fd152205dc56bb554982d7cfe9803"],["/tags/dinic/index.html","0e12e9c929f3329680477cbed72825f1"],["/tags/fhq-treap/index.html","1a1c5f00949ed7bcd49f29c5f6c0224f"],["/tags/gcd/index.html","aa054d3d7f4f8ca0679d30a860d07241"],["/tags/git/index.html","eb61d9ddadd18488b636f1c50a06583a"],["/tags/hash/index.html","78720891cf0d1acd3cd7850129672279"],["/tags/hexo/index.html","1afbfd978560ecb46d33acf053238744"],["/tags/html/index.html","28048f6849ebe83bd762ac34b95e9a5b"],["/tags/index.html","f295008a0d762ac379bac360d755a26d"],["/tags/lambda/index.html","22d0e953c3fd5d532474a680872f8061"],["/tags/luogu/index.html","ba8b5f200fd83166ace30a3c8a07f347"],["/tags/lyoi/index.html","72e0e4b8c8f084493bc635f2f5472270"],["/tags/markdown/index.html","ec783a74e91569d61cff30502b9af4f1"],["/tags/problem/index.html","84596f4c51b6c445ef21e2c6b81e1cdf"],["/tags/python/index.html","19bc732ef297bbb99749352abd9d99e8"],["/tags/qbxt/index.html","54000387f17ef0f07bcec64ba11faf3a"],["/tags/rope/index.html","31a7b0dc2d3c2c30a1ed2ceab6acf5bd"],["/tags/spfa/index.html","2b2bc4d173dd0ce0e6c8800d6245943d"],["/tags/system/index.html","bcf288b2b70b899e6b25763c6fb33328"],["/tags/terminal/index.html","6349ce5e9eee6ee2535b4d3ae208d68e"],["/tags/zjoi/index.html","57aaa83596b258f55df6667c440d2c91"],["/tags/zkw线段树/index.html","87fbdfaf48ae0be6cacb09f9c2a2c753"],["/tags/临沂一中/index.html","72b24bf8923032442eeb1ae6ddd873bf"],["/tags/主席树/index.html","68967c6ac3f6bf0dcb5e04fe27099957"],["/tags/乱搞/index.html","c55085a503b44add06b04a8db23fb0ca"],["/tags/二分/index.html","2e84d0f8af8f06f670d2d9897e76cc73"],["/tags/二分图/index.html","c2f2cec53f480560318c8e7b1f8b5dbc"],["/tags/二分图匹配/index.html","12721a5c24503fa0d726d2d2067ef0ef"],["/tags/二分图最大匹配/index.html","45a6321caeaaafc4cb098e5572a984ac"],["/tags/二叉搜索树/index.html","fe6e2b10e142ddeb10fa60d8bbf78365"],["/tags/二叉树/index.html","e6a6dedcad2e24c850ba25ab089dcbdf"],["/tags/五校联考/index.html","16bb9360427e20f0802b29d91f95160d"],["/tags/代码规范/index.html","b09b6ea2e18edf8fb6dddd67e1818888"],["/tags/优化/index.html","7fb6a5a1bbc396b8dfbb39423ee25031"],["/tags/内核/index.html","24042158cf757ccc9193ea66e6497403"],["/tags/内核提权/index.html","d32bc701ea886d85af06de8f5e72f1b2"],["/tags/几何/index.html","cab61c764e9140d7c3f1355fb230c621"],["/tags/凸包/index.html","c32ebe51476854d2b0fcf6a2541dc0a5"],["/tags/函数/index.html","d3f70bd2154e2dacc9330f315867d3c9"],["/tags/分块/index.html","9c979d471a377e96a61606cacfaf2a79"],["/tags/初等数论/index.html","fb1eeb40e234abfe9dca40c8ceb95574"],["/tags/初赛/index.html","6396021636aa1eb94c314ee2fe74d107"],["/tags/前缀和/index.html","f8eeef41321b2965de9c4435d9bc4920"],["/tags/动态规划/index.html","6dca590a465237b148e18998269cb7ef"],["/tags/匈牙利算法/index.html","b9491dedd1fccc3c98197618ba8d2c2f"],["/tags/区间/index.html","c1dd22ad11b9a72f28f0949bf6ef1f0d"],["/tags/区间操作/index.html","0602cbb98ba88f1c81132a7991151620"],["/tags/区间第k小/index.html","9e8e2e541dfd6121ae18f829092524aa"],["/tags/半平面交/index.html","fbe833f57ce88d7231004685a742a409"],["/tags/单源最短路径/index.html","430c8a6ff49d29529b65b01e172c8630"],["/tags/博弈论/index.html","fb9929f90f019e4237862444485015af"],["/tags/卡常/index.html","5fb1e1e84b44d24df0b1b2df9778f3d8"],["/tags/卢卡斯定理/index.html","8ca045bf4602139d1bb8fb44a68160f4"],["/tags/卷积/index.html","d89a2501d7a6c888272f482c487b92aa"],["/tags/叉积/index.html","b56a55ad42f1f8973b9c2be74baa2a5c"],["/tags/可持久化/index.html","d5a5b07f2c49ac979a16b8c3c1fc37e1"],["/tags/向量/index.html","62c37a67a7f48cfe3d36c0ece45cf887"],["/tags/图/index.html","a9bdeae63e43d8e04e2ce48f9fe73606"],["/tags/图论/index.html","22007e2aeedc12f751eaf7fda7fffa0d"],["/tags/块状链表/index.html","30cec5c185a3fae8abae5e5ee36cad6f"],["/tags/增广路/index.html","52aa260431909e24cbd1ef604b006f7f"],["/tags/复平面/index.html","8115373a3f847ef13728f4905c4ec522"],["/tags/复数/index.html","573ad59b061661dc8097744a2e61c6f6"],["/tags/字符串/index.html","a07f73ca0e619d9b21e6a7507e0bcb2c"],["/tags/学习笔记/index.html","0c296c2e9573f06e41350e5e79f1eb20"],["/tags/容斥/index.html","577ab9e5cb5a67b956db6c8ca39a0d7d"],["/tags/小学数学/index.html","4c8ef836708a0e6e53634377329cc521"],["/tags/常数优化/index.html","4d23aaf2763ecd9d58d46085bd37b695"],["/tags/平衡树/index.html","b4a6f5c637124adf956cc0c6656d3387"],["/tags/平面几何/index.html","418b74f2aaca13e11e12478b64963762"],["/tags/并查集/index.html","fe8b25e2fb20212ccd256db23c3b9e27"],["/tags/强联通/index.html","dd4091e810d4ba60aa9393ef49bb813e"],["/tags/快速傅里叶变换/index.html","9f3c26351a46ffb39e0f563f09dd0dbf"],["/tags/总结/index.html","4d3a6ba8acb7c2635a1568b752a2ca6b"],["/tags/感悟/index.html","3aab52d648432e25d5d49d4203a8a7a9"],["/tags/技巧/index.html","fc51622cebb62ee0b48951daedb2dcdd"],["/tags/抽象代数/index.html","eb3791ee23a1e4214923e16283e69623"],["/tags/教程/index.html","413d6797852b2a7e168df7ea38cc1d8f"],["/tags/数堆/index.html","3adfb54b2bcdcec3c858527472b1cb0c"],["/tags/数学/index.html","3f9825633cb6e1720047121eecee5871"],["/tags/数学/page/2/index.html","356616e1fdc61e360cd06e3085bef10d"],["/tags/数据结构/index.html","6da7171b4000dcee09cca3480a0c61ee"],["/tags/数据结构/page/2/index.html","faf8b132f807a1836f2f19bf5784e19c"],["/tags/数论/index.html","cba8818a6d695c16d799435b3b64acf6"],["/tags/数论/page/2/index.html","63095ce3ba1525e8c2f84edec3a5ef7a"],["/tags/文学/index.html","a563fd6384eb61fb43af72bac4cca55f"],["/tags/方差/index.html","d9672a323565dd051fe4680b9e357367"],["/tags/智熄/index.html","2950063a88aacf2baec3274c7724cf2f"],["/tags/暴力/index.html","d3a2b90bde22b057b295ec624c6d712f"],["/tags/替罪羊树/index.html","d8085687dd09c2488fdac9f3e4fd647e"],["/tags/最优化/index.html","9b0073e852abb6a4b522527c0ad5439d"],["/tags/最大流/index.html","257fe32bef97f0b1def2fe0f3c60cc7d"],["/tags/最小割/index.html","ded2369c1e885d5bff9186972d90cbd0"],["/tags/最小割最大流定理/index.html","53da1319a638cd989fc78961ac1be8bf"],["/tags/最小生成树/index.html","5349ee5b016877bb559145f65aac7638"],["/tags/最短路/index.html","13eeab8a44fa5339afa137b9dedce636"],["/tags/最长回文子串/index.html","8e0397b12286e653c151adfb2f99ffac"],["/tags/极角/index.html","0700ce365177a278c9b07cefca58e468"],["/tags/染色/index.html","de0cce7f97a0e2264ac56ceefdbb5b64"],["/tags/栈/index.html","3ccf0005446371b0a700243a1e7bd43c"],["/tags/树/index.html","ff359f5d0b61247922217af4d5f7319d"],["/tags/树剖/index.html","2885e5afa5f8172df51d0565f158df36"],["/tags/树套树/index.html","b148d0cc073cbfcd96370d935eb2d108"],["/tags/树状数组/index.html","80e11ad477621b1003c362c63270dcd3"],["/tags/树链剖分/index.html","60e5b83b26c34c0be23b59edf7c292a5"],["/tags/模拟/index.html","ab19a42c58c446b4efdb84b54923966e"],["/tags/模拟赛/index.html","6b163ff24e8821ffdb86a617e15bfb0e"],["/tags/模拟题/index.html","08f67a7bd52bae1554c0c951e2d174bf"],["/tags/模板/index.html","b33376845892f6fbb7a98108bdccb03d"],["/tags/模版/index.html","3a503f7ee04d9684c492700bc1749b4d"],["/tags/模版题/index.html","8fff460661dacc5e7f8c23b5396665c8"],["/tags/欧拉函数/index.html","d8e5549a6b7e512b87e2af54cfe8df50"],["/tags/欧拉筛/index.html","68ff39f1e472a287cbaa519cc0bcf1d0"],["/tags/毒瘤/index.html","7d82495b95d66b62d8fa632db7fc1c55"],["/tags/测试题/index.html","81ab0753588c2e180d26625d11bef3c5"],["/tags/济南/index.html","2a43e22db6b1287fe1c16cba951f607b"],["/tags/清北/index.html","ab88cbe5dc4d81c2f04a75ee32db405b"],["/tags/爆零/index.html","b61b4cdd56618e649c3e544e25af0211"],["/tags/玄学/index.html","12d595865731b976b8235c87883103b5"],["/tags/珂朵莉/index.html","d33308d21ec0a54eaef1d14a869fd5f9"],["/tags/生成函数/index.html","4d817cdd4c19702ef434e43d1c108852"],["/tags/瞎搞/index.html","031d8e68afb795a2f77ddcba02bbf14a"],["/tags/矩阵/index.html","410d03178161d0b438daf357cf6693ea"],["/tags/矩阵翻转/index.html","54dd30a5ae78751d767cf3b957a4e4e6"],["/tags/算法/index.html","be9ed98202715b2a7cc3ce104cb0c92c"],["/tags/算法竞赛/index.html","51b390c9429e093a39854b382587af23"],["/tags/素数/index.html","7d9fb463702f1e27514c7ad91e0687ac"],["/tags/线性基/index.html","f02fcfe8244daecc3a7412d3b0ff5ed3"],["/tags/线性筛/index.html","3daab41fde60fdb70c85cc789b48d2a7"],["/tags/线段树/index.html","e10127429309122c1f79b4b349ffafb1"],["/tags/组合数/index.html","53a93f84821723a40e85b70d95f74475"],["/tags/网络流/index.html","3997144cc30742edaecb36b45507aac2"],["/tags/群论/index.html","88a1b173ab9df48ac7aefaabbfaa5a3a"],["/tags/脚本/index.html","a9245c37b67a055643f9de6743d46de0"],["/tags/自动机/index.html","0a462c8515a255d52876037bdb9d5c8c"],["/tags/莫比乌斯/index.html","c52045dea4a8b742286f956d42b8c84b"],["/tags/莫比乌斯反演/index.html","bb45f85935486446cfc60d9b72027876"],["/tags/虚数/index.html","76591b0f965319b175f5200522e03980"],["/tags/计算几何/index.html","8160487173f6d9092d45cfe5ab1e750f"],["/tags/证明/index.html","4fc747a1db97702ad0ea7c94c5179715"],["/tags/评测机/index.html","8c3d93eb9eaed20f489d8c7d163e9f31"],["/tags/诗/index.html","ceabf65e6865999719ea35e921e765e5"],["/tags/诗歌/index.html","1a898471e76d8b9882d4088cfd111b38"],["/tags/详解/index.html","ec852358ee74a21543f238cb3e015684"],["/tags/费用流/index.html","25a70718fc092552097fe71dd4f21243"],["/tags/路径压缩/index.html","371ff09ab444cb3d7363021659e4b642"],["/tags/逆元/index.html","4641a2a179f0b8d95c092577694e73ed"],["/tags/递归/index.html","170554fe27719cc0e1615944511098f6"],["/tags/递推/index.html","645c4df34273429eea500e1161eda9eb"],["/tags/邻接表/index.html","797b77215b8fd6f00f89f842e16ac9dc"],["/tags/随笔/index.html","87fb6548204f8bcc64b2781734466b99"],["/tags/集合/index.html","c19e86ee961792002fada5970444377b"],["/tags/集训/index.html","87db3eccc17a7f083c355490f8742bca"],["/tags/非旋Treap/index.html","aca10055fa4b3cf2d95053277493ec9d"],["/tags/非递归/index.html","202d35e32f790cab4a90633934fb21df"],["/tags/预留推进/index.html","dc31159e5f4cee65ba13de1dbb3a7119"],["/tags/颓废/index.html","9d6bf78af4305ce449af6b903b151d61"],["/tags/题目/index.html","b540f201ea793d5ad335603419765692"],["/tags/题解/index.html","44cba7c32683c9aeb6f5a260684bbafd"],["/tags/题解/page/2/index.html","9b37afa7bf045cc959b4513aec7ef7dd"],["/tags/高性能/index.html","60558477f351d0fc083b6811eafa431f"],["/tags/高精/index.html","215712147a19a9357f2dddab20e13526"],["/tags/高精度/index.html","d209544ebacb666ce4ca8e82e707b94a"]];
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
