(function(e){function t(t){for(var a,i,u=t[0],l=t[1],s=t[2],m=0,c=[];m<u.length;m++)i=u[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(c.length)c.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2201508e":"040c6253","chunk-487b3e9c":"3f787223","chunk-86dbeb4c":"e3de72f3"}[e]+".js"}function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-487b3e9c":1,"chunk-86dbeb4c":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2201508e":"31d6cfe0","chunk-487b3e9c":"3584e943","chunk-86dbeb4c":"f431d15d"}[e]+".css",r=l.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],m=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(m===a||m===r))return t()}var c=document.getElementsByTagName("style");for(u=0;u<c.length;u++){s=c[u],m=s.getAttribute("data-href");if(m===a||m===r)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],p.parentNode.removeChild(p),n(o)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var s,m=document.createElement("script");m.charset="utf-8",m.timeout=120,l.nc&&m.setAttribute("nonce",l.nc),m.src=u(e);var c=new Error;s=function(t){m.onerror=m.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}r[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:m})}),12e4);m.onerror=m.onload=s,document.head.appendChild(m)}return Promise.all(t)},l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/animal-mbti/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],m=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=m;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e3b":function(e,t,n){},4769:function(e,t,n){},"4dcb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],o=(n("4dcb"),n("4769"),n("8d2a"),n("7f91"),n("1e3b"),n("aa46"),n("7368"),n("5ef8"),n("d21e"),{}),u=o,l=n("2877"),s=Object(l["a"])(u,i,r,!1,null,null,null),m=s.exports,c=n("8c4f");a["default"].use(c["a"]);const p=[{path:"/",name:"main",component:()=>Promise.all([n.e("chunk-2201508e"),n.e("chunk-487b3e9c")]).then(n.bind(null,"7f94"))},{path:"/all-view",name:"all-view",component:()=>Promise.all([n.e("chunk-2201508e"),n.e("chunk-86dbeb4c")]).then(n.bind(null,"bbc1"))}],f=new c["a"]({mode:"history",base:"/animal-mbti/",routes:p});var d=f,b=n("2f62");const g={namespaced:!0,state:{question:[{id:0,title:"놀이공원을 간 당신, 놀이기구를 탈 때의 나는?",type:"EI",A:"오, 저거 재밌어 보인다! 일단 보이는 것부터 탄다.",B:"오늘 이거 다섯개는 꼭 타야돼! 미리 계획을 세우고 간다."},{id:1,title:"소개팅을 나간 당신, 첫 만남에 어색할 때",type:"EI",A:"준비해온 멘트들을 건네며 대화를 한다.",B:"미소만 지으며 상대가 말할 때까지 기다린다."},{id:2,title:"돌아온 숙소, 게스트 하우스 사람들과 맥주를 마시러 온 나는",type:"EI",A:"대화를 주도하며 분위기를 이끈다.",B:"묵묵히 사람들의 이야기를 듣는다."},{id:3,title:"잠들기 전, 가족과 통화에서 나는",type:"SN",A:"구체적으로 있었던 일을 얘기한다.",B:"오늘 느꼈던 큰 감정을 얘기한다."},{id:4,title:"친구가 어제 다녀왔던 맛집의 위치를 물어본다.",type:"SN",A:"숙소에서부터 가는 법을 알려준다.",B:"식당 옆에 있는 큰 건물을 알려준다."},{id:5,title:"멍~때리며 버스를 기다리는 중, 나는 어떤 생각을 할까?",type:"SN",A:"오늘 저녁은... 남은 일정에 대해 생각한다.",B:"내가 여기산다면... 의식의 흐름을 따라 상상의 나래를 펼친다."},{id:6,title:"늦은 저녁, 친구가 오늘 크게 넘어졌다고 얘기할 때 나는",type:"TF",A:"왜 다쳤는지 물어보고 근처 약국을 알려준다.",B:"내가 다친 것처럼 공감하며 걱정을 한다."},{id:7,title:"여행지에서 친구가 평소 필요로 했던 선물이 생각날 때 나는",type:"TF",A:"나는 역시 기억력이 좋아.",B:"나는 역시 섬세한 사람이야."},{id:8,title:"비행기 옆자리에 마음에 드는 이상형이 있다. 어쩌다 대화를 시작한 나는",type:"TF",A:"이것저것 궁금한 것을 질문한다.",B:"풍부한 공감과 리액션을 해준다."},{id:9,title:"아직 여행 마지막 날의 일정을 짜지 못한 나는",type:"JP",A:"틈틈히 미리 루트를 구상해둔다.",B:"미루다 전날 잠들기 직전에 짠다."},{id:10,title:"마지막 여행지를 향해 걸어가던 중, 새로운 장소를 발견한 나는",type:"JP",A:"우선 남은 일정에 무리가 없는지 고려해본다.",B:"어떤 장소인지 궁금하다. 일단 가서 구경부터 한다."},{id:11,title:"전날 미리 찾아보았던 카페가 문이 닫았다. 나의 선택은?",type:"JP",A:"유명한 카페를 다시 검색해서 찾아본다.",B:"맛있어 보이는 옆 카페를 들어간다."}]},getters:{GE_QESTIONS:e=>e.question},mutations:{},actions:{}};var h=g;const v={namespaced:!0,state:{result:[{mbti:"ISTJ",animal:"거북이",explain:"청렴결백한 논리주의자",features:"성실하고 부지런하며 목표를 세우고 꾸준히 계획적으로 해낼 수 있는 타입입니다. 언변에 꾸밈이 없고, 한번 결정한 것은 굳건히 계속 지키므로 신뢰도 두텁습니다. 계획을 가지고 있고, 구체적인 사실과 세세한일을 기억하며 너무 꼼꼼하기 때문에 계획성이 없는 사람들을 이해하지 못하고 힘들어 할 수도 있습니다.",img:"turtle.png",soulmate_mbti:"ENFJ"},{mbti:"ISFJ",animal:"코뿔소",explain:"용감한 수호자",features:"조용하고 차분하며 친근하고 책임감이 있으며 헌신적이다. 책임감이 강하고 온정적이며 헌신적이고, 침착하며, 인내력이 강하다. 다른 사람의 사정을 고려하며 자신과 타인의 감정에 민감하며, 일 처리에 있어서 현실감각을 갖고 실제적이고 조직적으로 처리한다. 경험을 통해서 자신이 틀렸다고 인정할 때까지 어떠한 난관이 있어도 꾸준히 밀고 나가는 형이다. 때로 의존적이고 독창성이 요구되며 타인에게 자신을 충분히 명확하게 표현하는 것이 필요할 때가 있다. 이들이 일을 하고, 세상일에 대처할 때 그들의 행동은 분별력이 있다. ",img:"rhino.png",soulmate_mbti:"ENTJ"},{mbti:"INFJ",animal:"팬더",explain:"선의의 옹호자",features:"자신의 내면에 더 주의를 집중하며, 조용하고 내적 활동을 즐기는 경향이 있다. 생각이 많고, 말보다는 글로 표현하는 것을 더 편하게 느끼며, 이해한 다음에 경험하는 방식을 선호하여 생각을 마친 후에 행동하는 경향이 있다",img:"panda.png",soulmate_mbti:"ESTJ"},{mbti:"INTJ",animal:"호랑이",explain:"용의주도한 전략가",features:"자신이 가진 영감과 목적을 실현시키려는 의지와 결단력과 인내심을 가지고 있다. 자신과 타인의 능력을 중요시하며, 목적달성을 위하여 온 시간과 노력을 바쳐 일한다. 직관력과 통찰력이 활용되는 분야에서 능력을 발휘한다.",img:"tiger.png",soulmate_mbti:"ESFJ"},{mbti:"ISTP",animal:"뱀",explain:"만능 재주꾼",features:"조용하고 과묵하며 절제된 호기심으로 인생을 관찰하고, 상황을 파악하는 민감성과 도구를 다루는 뛰어난 능력이 있다. 말이 없으며, 객관적으로 인생을 관찰하는 유형이다. 필요 이상으로 자신을 발휘하지 않으며, 일과 관계되지 않는 이상 어떤 상황이나 인간관계에 직접 뛰어들지 않는다. 가능한 에너지 소비를 하지 않으려 하며, 사람에 따라 사실적 자료를 정리, 조직하기를 좋아하는 경향이 있으며 인과관계나 객관적 원리에 관심이 많다. 민첩하게 상황을 파악하는 능력이 있다.",img:"snake.png",soulmate_mbti:"ENFP"},{mbti:"ISFP",animal:"고양이",explain:"호기심 많은 예술가",features:"따뜻한 감성을 가지고 있는 동시에 겸손한 사람들입니다. 인간관계에 신경을 많이 쓰는 등 마음이 순하고 따뜻하여 정이 온화합니다. 남을 잘 믿고 그다지 의심을 하지 않는다고 해요. 미래지향적인 삶보다는 현재를 즐기는 삶을 선호하고 여유롭고 낙천적입니다.",img:"cat.png",soulmate_mbti:"ENTP"},{mbti:"INFP",animal:"물개",explain:"열정적인 중재자",features:"자신이 남들과는 다른 특별한 존재라고 생각하고 자기자신에 대한 애정이 강하다. 자신의 가치를 타인의 가치보다 높게 평가하는 경향이 있다. 다만 인간관계에서 타인을 지배하고자 하는 성향이나, 타인의 사생활에 참견을 하는 성향은 없다. 어느 부분에 대해서는 융통성이 아주 없는 편이다.",img:"seal.png",soulmate_mbti:"ESTP"},{mbti:"INTP",animal:"부엉이",explain:"논리적인 사색가",features:"사람을 중심으로 한 가치보다는 이이디어에 관심이 많으며 매우 분석적이고 논리적이며 객관적 비평을 잘한다. 일의 원리와 인관관계에 관심이 많으며 실체보다는 실체가 안고 있는 가능성에 관심이 많다. 이해가 빠르고 높은 직관력으로 통찰하는 재능과 지적 관심이 많다.",img:"owl.png",soulmate_mbti:"ESFP"},{mbti:"ESTP",animal:"하이에나",explain:"모험을 즐기는 사업가",features:"말도 많고 사교적이며, 농담도 잘하고 천성적으로 가볍고 진지하지 않은 사람들이기 때문에 겉으로 보면 정말 행복해 보입니다. 또한 자유롭고 낙천적으로 산다고 느낄 수 있습니다. 이들은 항상 일을 벌이는 스타일이기 때문에 주변에서 적절히 제어를 할 필요가 있습니다. 늘 바쁘게 살아가는 행동가들입니다.",img:"hyena.png",soulmate_mbti:"INFP"},{mbti:"ESFP",animal:"돌고래",explain:"자유로운 영혼의 연예인",features:"사교적이고 활동적이며 수용력이 강하고 친절하며 낙천적이다. 어떤 상황이든 잘 적응하며 현실적이고 실제적이다. 주위의 사람이나 일어나는 일에 대하여 관심이 많으며 사람이나 사물을 다루는 사실적인 상식이 풍부하다.",img:"dolphin.png",soulmate_mbti:"INTP"},{mbti:"ENFP",animal:"침팬지",explain:"재기발랄한 활동가",features:"에너지가 넘치고, 늘 퐈이팅! 을 외치는 유형으로, 풍부한 상상력을 가지고 있고 늘 번뜩이는 아이디어를 가지고 있답니다. 갑자기 필이 꽂히면 무슨 일이던 시작하는 열정을 가지고 있지만, 그 일이 끝나기 전에 다른 일을 게획 하거나 마무리가 흐지부지 되는 경우가 많습니다.",img:"chimpanzee.png",soulmate_mbti:"ISTP"},{mbti:"ENTP",animal:"앵무새",explain:"뜨거운 논쟁을 즐기는 변론가",features:"박식하고 독창적이며 창의력이 풍부하다. 안목이 넓고 다방면에 관심과 재능이 많다. 풍부한 상상력과 새로운 일을 시도하는 솔선력이 강하며 논리적이다. 새로운 문제나 복잡한 문제에 해결 능력이 뛰어나며 사람들의 동향에 대해 기민하고 박식하다.",img:"parrot.png",soulmate_mbti:"ISFP"},{mbti:"ESTJ",animal:"곰",explain:"엄격한 관리자",features:"진실과 사실에 주관심을 갖고 논리적이고 분석적이며 객관적으로 판단한다. 분명한 목적과 방향이 있으며 기한을 엄수하고 철저히 사전계획하고 체계적이다.",img:"bear.png",soulmate_mbti:"INFJ"},{mbti:"ESFJ",animal:"코끼리",explain:"사교적인 외교관",features:"사회성이 좋으며 상대가 이들을 편안하게 느끼고 좋아하게 만듭니다. 이들은 소속되는 것을 강하게 원하고 있으며, 짧은 대화부터 깊은 사회의 상황까지 적극적으로 개입하며 맡은 바 본분을 다합니다.",img:"elephant.png",soulmate_mbti:"INTJ"},{mbti:"ENFJ",animal:"강아지",explain:"정의로운 사회운동가",features:"따뜻하고 적극적이며 책임감이 강하고 사교성이 풍부하고 동정심이 많다. 상당히 이타적이고 민첩하고 동정심이 많으며 인화를 중요시하고 참을성이 많다. ",img:"dog.png",soulmate_mbti:"ISTJ"},{mbti:"ENTJ",animal:"사자",explain:"대담한 통솔자",features:"지식에 대한 욕구와 관심이 많으며 특히 지적인 자극을 주는 새로운 아이디어에 높은 관심을 가지고 있다. 일 처리에 있어 사전 준비를 철저히 하며 논리, 분석적으로 계획하고 조직하여 체계적으로 추진해 나가는 유형이다.",img:"lion.png",soulmate_mbti:"ISFJ"}]},getters:{GE_RESULT:e=>e.result},mutations:{},actions:{}};var y=v;a["default"].use(b["a"]);var E=new b["a"].Store({namespaced:!0,modules:{question:h,result:y}}),S=n("5c96"),P=n.n(S);n("0fae");a["default"].use(P.a),a["default"].config.productionTip=!1,new a["default"]({router:d,store:E,render:e=>e(m)}).$mount("#app")},"5ef8":function(e,t,n){},7368:function(e,t,n){},"7f91":function(e,t,n){},"8d2a":function(e,t,n){},aa46:function(e,t,n){},d21e:function(e,t,n){}});
//# sourceMappingURL=app.69f8b14a.js.map