// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

var autoheal = false;
autoheal = localStorage.getItem("autoheal")

if(autoheal){
} else {
if(window.location.href.includes("https://www.youtube.com/watch?list=PLOCOIkGMSKa_Z1FNSSWDqZjz-Y-MWfUoY&v=aSjflT_J0Xo&feature=youtu.be") || window.location.href.includes("https://youtu.be/aSjflT_J0Xo") || window.location.href.includes("https://www.youtube.com/watch?v=aSjflT_J0Xo&feature=youtu.be") || window.location.href.includes("https://www.youtube.com/channel/UCqlFxjB_kVRDs4M01P25yVw") || window.location.href.includes("http://gmail.com/") || window.location.href.includes("https://mail.google.com/mail/u/0/") || window.location.href.includes("https://mail.google.com/mail/u/1/") || window.location.href.includes("https://mail.google.com/mail/u/2/" || window.location.href.includes("https://mail.google.com/mail/u/3/"))){
    alert("Tiene 10 minutos antes que la pagina se bloquee")
    setTimeout(()=>{
        document.write("RECARGAR PARA SEGUIR VIENDO")
    }, 600000);
} else {
document.write(`
<script>
var odentaOne = function(){
document.getElementById("masamune").style.display = "block"
document.getElementById("muramasa").style.display = "none"
document.getElementById("onimaru").style.display = "none"
}

var odentaTwo = function(){
document.getElementById("masamune").style.display = "none"
document.getElementById("muramasa").style.display = "none"
document.getElementById("onimaru").style.display = "block"
}
</script>
<style>
.myButton {
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
	background-color:#ededed;
	border-radius:6px;
	border:1px solid #dcdcdc;
	display:inline-block;
	cursor:pointer;
	color:#000;
	font-family:Arial;
	font-size:10px;
	font-weight:bold;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;
}
.myButton:hover {
	background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
	background-color:#dfdfdf;
}
.myButton:active {
	position:relative;
	top:1px;
}
a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline}.link-arrow,.text-arrow{margin-left:8px;width:4px;height:8px;position:absolute}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.secondary-background{background-color:#151519}.text{color:#363636}.page-subtitle{font-family:HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif;font-size:34px;line-height:48px}.page-title,.published-not-available .page-secondary-title{font-family:HelveticaNeueW01-55Roma,HelveticaNeueW02-55Roma,HelveticaNeueW10-55Roma,sans-serif;font-size:45px;line-height:50px}.error-code{margin-top:10px;font-size:22px;color:#929292;line-height:35px}.page-message{margin-top:14px;font-size:22px;line-height:26px}.contact-support{font-size:18px;margin-top:87px;line-height:30px}.secondary-font{font-family:HelveticaNeueW01-45Ligh,HelveticaNeueW02-45Ligh,HelveticaNeueW10-45Ligh,sans-serif}.authorization-not-supported .help-link,.error-400 .help-link,.header-link,.invite-expired .help-link,.support-link,.thick-font,.undocumented-error .help-link,.unsupported-browser .continue-link{font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,sans-serif}.support-link,.unsupported-browser .continue-link{color:#ff471a}.link-arrow{background:url(../../images/error-pages/link-arrow.png) no-repeat;margin-top:13px}body[lang=de] .link-arrow{margin-top:11px}.text-arrow{background:url(../../images/error-pages/text-arrow.png) no-repeat;margin-top:15px}.pink-arrow{width:4px;height:8px;position:absolute;background:url(../../images/error-pages/pink-arrow.png) no-repeat;margin-top:13px;margin-left:5px;float:right}a{text-decoration:none}a:hover{text-decoration:underline}.bg-img,.cable-spaghetti-bg{z-index:-1;width:1219px;height:457px;background:url(../../images/error-pages/default-bg.jpg) no-repeat;position:fixed;top:200px;margin-left:340px}body[lang=ja] .bg-img,body[lang=ja] .cable-spaghetti-bg{margin-left:530px!important}.cable-spaghetti-bg{width:1138px;height:776px;background:url(../../images/error-pages/cable-spaghetti-bg.jpg) no-repeat;top:60px;margin-left:420px}.non-angular-supported-browser-wrapper{text-align:center}.non-angular-supported-browser-header{font-size:40px;text-decoration:underline}.non-angular-supported-browser-link{font-size:18px;margin-top:50px}.header{position:fixed;z-index:100;top:0;width:100%;height:60px;line-height:60px;box-shadow:0 0 3px rgba(0,0,0,.2);background-color:#fff}.header-link{transition:all linear .3s;border-top:4px solid transparent;padding:17px 15px 0;color:#555}.header-link:hover{color:#0f0f0f;text-decoration:none;border-top:4px solid #fc0}.wix-logo{position:absolute;top:10px;width:121px;height:33px}.error-page-app{position:absolute;z-index:-2;width:100%;height:100%}body{-webkit-font-smoothing:antialiased;margin:0}.content{z-index:10;position:relative;margin:0 auto;width:1060px}.page-content-wrapper{margin-top:204px;width:560px}.pull-right{float:right}.pull-left{float:left}@media only screen and (max-width:1060px){.content{width:100%}}@media only screen and (max-width:767px){.header-link{font-size:11px}.wix-logo{top:18px;width:70px;height:19px}.header nav{margin-left:50px}.page-content-wrapper,.page-title,.published-not-available .page-secondary-title{width:100%}.page-title,.published-not-available .page-secondary-title{font-size:44px}.published-not-available .undocumented-error .page-secondary-title,.undocumented-error .page-title,.undocumented-error .published-not-available .page-secondary-title{font-size:34px}body[lang=ja] .bg-img,body[lang=ja] .cable-spaghetti-bg{margin-left:inherit!important}body[lang=ja] .page-content-wrapper{width:inherit!important}.published-not-available body[lang=ja] .page-secondary-title,body[lang=ja] .page-title,body[lang=ja] .published-not-available .page-secondary-title{font-size:24px}.bg-img,.cable-spaghetti-bg{width:100%;height:100%;top:90px;margin-left:100px}.page-content-wrapper{margin-top:110px!important;margin-left:20px}.contact-support{margin-top:67px;padding-bottom:70px}.connect-your-domain .page-content-wrapper,.connect-your-domain .page-title,.connect-your-domain .published-not-available .page-secondary-title,.published-not-available .connect-your-domain .page-secondary-title,.published-not-available .unsupported-browser .page-secondary-title,.unsupported-browser .page-content-wrapper,.unsupported-browser .page-title,.unsupported-browser .published-not-available .page-secondary-title{width:70%}.connect-your-domain .bg-img,.connect-your-domain .cable-spaghetti-bg,.unsupported-browser .bg-img,.unsupported-browser .cable-spaghetti-bg{margin-left:130px}.connect-your-domain .continue-link,.connect-your-domain .update-options-list,.unsupported-browser .continue-link,.unsupported-browser .update-options-list{margin-top:10px!important}.connect-your-domain .page-title,.connect-your-domain .published-not-available .page-secondary-title,.published-not-available .connect-your-domain .page-secondary-title,.published-not-available .unsupported-browser .page-secondary-title,.unsupported-browser .page-title,.unsupported-browser .published-not-available .page-secondary-title{font-size:24px;line-height:30px}.connect-your-domain .page-subtitle,.unsupported-browser .page-subtitle{font-size:19px;line-height:20px}.published-not-available .page-secondary-title,.published-not-available .page-title{font-size:25px}.published-not-available .page-content-wrapper{width:335px!important}.published-not-available .bg-img,.published-not-available .cable-spaghetti-bg{margin-left:-190px!important}}@media only screen and (min-width:768px) and (max-width:1060px){.page-title,.published-not-available .page-secondary-title{font-size:50px}.bg-img,.cable-spaghetti-bg{margin-left:100px!important}.page-content-wrapper{margin-top:110px;margin-left:20px}.contact-support{margin-top:67px}.connect-your-domain .bg-img,.connect-your-domain .cable-spaghetti-bg,.unsupported-browser .bg-img,.unsupported-browser .cable-spaghetti-bg{margin-left:320px!important}}@media only screen and (min-width:1061px) and (max-width:1440px){body[lang=ja] .bg-img,body[lang=ja] .cable-spaghetti-bg{margin-left:490px!important}}.published-not-available body[lang=it] .page-secondary-title,body[lang=it] .page-title,body[lang=it] .published-not-available .page-secondary-title{width:530px}.unsupported-browser .browser-icon{width:21px;height:21px;margin-top:8px;display:inline-block;position:absolute}.unsupported-browser .update-option{line-height:35px;height:35px}.unsupported-browser .update-text{font-size:18px;margin-left:30px;display:inline-block}.unsupported-browser .continue-link{font-size:18px;position:absolute;margin-top:60px;cursor:pointer}.unsupported-browser .continue-link .link-arrow{top:-6px;right:-10px}.unsupported-browser .update-options-list{margin-top:60px}.unsupported-browser .page-content-wrapper{margin-top:111px}.unsupported-browser .page-message{margin-top:22px;font-size:18px}.unsupported-browser-Chrome,.unsupported-browser-Edge,.unsupported-browser-Firefox,.unsupported-browser-Safari,.unsupported-browser-sprite{background-image:url(../../images/generated/icons/unsupported-browser-s0168b02e23.png);background-repeat:no-repeat}.unsupported-browser-Chrome{background-position:0 0}.unsupported-browser-Edge{background-position:0 -21px}.unsupported-browser-Firefox{background-position:0 -41px}.unsupported-browser-Safari{background-position:0 -62px}.published-not-available .too-many-cookies .page-secondary-title,.too-many-cookies .page-title,.too-many-cookies .published-not-available .page-secondary-title{font-family:HelveticaNeueW01-35Thin,HelveticaNeueW02-35Thin,HelveticaNeueW10-35Thin,sans-serif}.published-not-available .page-secondary-title,.too-many-cookies .help.title{font-family:HelveticaNeueW01-65Medi,HelveticaNeueW02-65Medi,HelveticaNeueW10-65Medi,sans-serif}.too-many-cookies .instructions-link,.too-many-cookies .wix-support-link{color:#3899EC}.too-many-cookies .page-message{font-size:18px}.too-many-cookies .more-help{margin-top:85px}.too-many-cookies .help{line-height:22px;font-size:18px}.invite-expired .page-title,.invite-expired .published-not-available .page-secondary-title,.published-not-available .invite-expired .page-secondary-title{max-width:290px}.invite-expired .p-separator{margin-top:5px}.invite-expired .mail-link{color:#aa4dc8;font-size:22px}.authorization-not-supported .bg-img,.authorization-not-supported .cable-spaghetti-bg,.error-400 .bg-img,.error-400 .cable-spaghetti-bg,.invite-expired .bg-img,.invite-expired .cable-spaghetti-bg,.undocumented-error .bg-img,.undocumented-error .cable-spaghetti-bg{z-index:-1;width:1313px;height:721px;background:url(../../images/error-pages/400_BG.jpg) no-repeat;position:fixed;top:11px;margin-left:350px}.authorization-not-supported .links-list-400-page,.error-400 .links-list-400-page,.invite-expired .links-list-400-page,.undocumented-error .links-list-400-page{margin-top:53px}.authorization-not-supported .help-link,.error-400 .help-link,.invite-expired .help-link,.undocumented-error .help-link{position:relative;color:#aa4dc8;font-size:18px;line-height:30px}.authorization-not-supported .page-content-wrapper,.error-400 .page-content-wrapper,.invite-expired .page-content-wrapper,.undocumented-error .page-content-wrapper{margin-top:177px}.authorization-not-supported .page-title,.authorization-not-supported .published-not-available .page-secondary-title,.error-400 .page-title,.error-400 .published-not-available .page-secondary-title,.invite-expired .page-title,.invite-expired .published-not-available .page-secondary-title,.published-not-available .authorization-not-supported .page-secondary-title,.published-not-available .error-400 .page-secondary-title,.published-not-available .invite-expired .page-secondary-title,.published-not-available .undocumented-error .page-secondary-title,.undocumented-error .page-title,.undocumented-error .published-not-available .page-secondary-title{display:inline}.authorization-not-supported .error-code,.error-400 .error-code,.invite-expired .error-code,.undocumented-error .error-code{margin-top:0}.authorization-not-supported .page-message,.error-400 .page-message,.invite-expired .page-message,.undocumented-error .page-message{margin-top:22px}.authorization-not-supported .page-content-wrapper{width:600px}.not-published .bg-img,.not-published .cable-spaghetti-bg{z-index:-1;width:1920px;height:765px;background:url(../../images/error-pages/not-published-bg.jpg) no-repeat;position:fixed;top:60px}.not-published .how-to-steps{list-style:decimal inside}.not-published .steps-to-publish{margin-top:55px}.not-published .my-sites-link{color:#3899EC}.not-published .text{color:#fff}.not-published .page-subtitle{line-height:38px}.not-published .page-content-wrapper{margin-top:146px}.connect-your-domain .how-to-steps{margin-top:20px;list-style:decimal inside}.connect-your-domain .steps-to-connect{margin-top:30px}.connect-your-domain .my-sites-link{color: #ff471a}.connect-your-domain .contact-support{line-height:25px}.connect-your-domain .link-arrow{margin-top:10px}.connect-your-domain .page-title,.connect-your-domain .published-not-available .page-secondary-title,.published-not-available .connect-your-domain .page-secondary-title{font-size:34px;line-height:40px}.connect-your-domain .page-content-wrapper{margin-top:187px;width:600px}body[lang=ja] .page-content-wrapper{width:700px}.published-not-available .bg-img,.published-not-available .cable-spaghetti-bg{z-index:-1;width:1375px;height:742px;background:url(../../images/error-pages/published-not-available.jpg) no-repeat;position:fixed;top:61px;margin-left:150px}.published-not-available .page-content-wrapper{margin-top:161px;width:650px}.error-404-non-branded{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.error-404-non-branded>.error-contents{margin:84px auto 0}.error-404-non-branded>.error-contents>.image-404{width:318px;margin-left:-20px}@media (max-width:612px) and (min-width:380px){.error-404-non-branded>.error-contents{margin-top:14vw}.error-404-non-branded>.error-contents>.image-404{margin-left:-2.9vw;width:52vw}}@media (max-width:380px){.error-404-non-branded>.error-contents{margin-top:64px;text-align:center}.error-404-non-branded>.error-contents>.image-404{width:216px}}.error-404-non-branded>.error-contents>.image-404 .cls-1{fill:#3ba6cc}.error-404-non-branded>.error-contents>.image-404 .cls-2{fill:#3eb8eb}.error-404-non-branded>.error-contents>.image-404 .cls-3{fill:#c3d4d8}.error-404-non-branded>.error-contents>.image-404 .cls-4{fill:#e1ebef}.error-404-non-branded>.error-contents>.image-404 .cls-5{fill:#37b7ea}.error-404-non-branded>.error-contents>.image-404 .cls-6{fill:#a2b7bc}.error-404-non-branded>.error-contents>.image-404 .cls-7{fill:#a9a9a9}.error-404-non-branded>.error-contents>.image-404 .cls-8{fill:#9c9b9b}.error-404-non-branded>.error-contents>.image-404 .cls-9{fill:#f197be}.error-404-non-branded>.error-contents>.image-404 .cls-10{fill:#565656}.error-404-non-branded>.error-contents>.image-404 .cls-11{fill:#fff}.error-404-non-branded>.error-contents>.image-404 .cls-12{fill:#e9eff2}.error-404-non-branded>.error-contents>.image-404 .error-code{fill:#fff;font-family:HelveticaNeueW01-45Ligh;font-size:80px}.error-404-non-branded>.error-contents>.not-found{margin-top:62px;color:#3eb8ea;font-size:66px;font-family:HelveticaNeueW01-45Ligh;letter-spacing:1px;line-height:90px}@media (max-width:612px) and (min-width:380px){.error-404-non-branded>.error-contents>.not-found{margin-top:10vw;font-size:10vw;line-height:13vw}}@media (max-width:380px){.error-404-non-branded>.error-contents>.not-found{font-size:31px;line-height:50px}}.error-404-non-branded>.error-contents>.description{margin-top:19px;font-family:HelveticaNeueW01-45Ligh;letter-spacing:1px;font-size:20px;line-height:39px;color:#184a56}@media (max-width:612px) and (min-width:380px){.error-404-non-branded>.error-contents>.description{font-size:3.4vw;line-height:6.8vw}}@media (max-width:380px){.error-404-non-branded>.error-contents>.description{font-size:14px;line-height:24px}}.error-404-non-branded>.error-contents>.button{margin-top:37px;outline:0;height:56px;letter-spacing:.8px;line-height:50px;font-size:22px;text-align:center;border-radius:28px;font-family:HelveticaNeueW01-45Ligh;cursor:pointer;border:2px solid #3eb8ea;background-color:#fff;color:#3eb8ea;box-sizing:border-box;transition-property:color,background-color;transition-duration:.2s;padding:0 20px}@media (max-width:612px) and (min-width:380px){.error-404-non-branded>.error-contents>.button{height:9vw;font-size:3.7vw;line-height:8vw;width:auto;padding:0 4vw}}@media (max-width:380px){.error-404-non-branded>.error-contents>.button{width:167px;height:44px;border-radius:22px;line-height:37px;font-size:16px}}.error-404-non-branded>.error-contents>.button:hover{background-color:#3eb8ea;color:#fff}
</style>
<br><br>

<div class="header ng-scope">
  <div class="content">
    <a ng-href="//es.wix.com/?utm_campaign=vir_error_page" href="//es.wix.com/?utm_campaign=vir_error_page">
    </a>
    <div class="pull-right">
      <a style="cursor: pointer" class="header-link ng-binding" ng-href="//es.w
ix.com/website/templates?utm_campaign=vir_error_page" onclick="odentaOne()">Que paso?</a>
      <a style="cursor: pointer" class="header-link ng-binding" ng-href="//es.wix.com/?utm_campaign=vir_error_page" id="steps" onclick="odentaTwo()">Como descifrar?</a>
    </div>
  </div>
</div>

<div class="error-400 content ng-scope" id="muramasa" style="display: block">
  <section class="page-content-wrapper">
    <h1>
      <div class="page-title text ng-scope" translate="400_title">¡OOPS!</div>
    </h1>
    <div class="page-message text secondary-font ng-scope" translate="400_message">Su navegador ha sido bloqueado, si no entiende lo que pasa ahora, pulse los botones a la esquina. <br> Inserte codigo aqui:</div>
    <ul class="links-list-400-page">
      <li>
<input type="text" id="codec" placeholder="Inserte codigo aqui..."></input><button class="myButton" onclick="odentaPne()">Enviar</button>
      </li>
    </ul>
  </section>
</div>
<script>
var odentaPne = function(){
var muramasamune = document.getElementById("codec").value
if(muramasamune == "Mikazuki Munechika"){
    localStorage.setItem("autoheal", true)
    window.location.reload();
}
}
</script>
<div class="error-400 content ng-scope" id="masamune" style="display: none">
  <section class="page-content-wrapper">
    <h1>
      <div class="page-title text ng-scope" translate="400_title">Que paso?</div>
    </h1>
    <div class="page-message text secondary-font ng-scope" translate="400_message">Sus paginas se bloquearon, por lo que no podra tener acceso hasta que ponga la contraseña. Probablemente usted ha entrado a paginas de pishing.<br>Usted ha entrado a paginas como:</div>
    <ul class="links-list-400-page">
      <li>
        <a class="help-link ng-scope" ng-href="//es.wix.com/website/templates?utm_campaign=vir_error_page" translate="400_templates" href="https://es.pornhub.com/">PornHub<span class="pink-arrow"></span></a>
      </li>
      <li>
        <a class="help-link ng-scope" ng-href="//es.wix.com/?utm_campaign=vir_error_page" translate="400_my_sites" href="http://xxnx.com/">XXNX<span class="pink-arrow"></span></a>
      </li>
      <li>
  </section>
</div>

<div class="error-400 content ng-scope" id="onimaru" style="display: none">
  <section class="page-content-wrapper">
    <h1>
      <div class="page-title text ng-scope" translate="400_title">Como descifrar?</div>
    </h1>
    <div class="page-message text secondary-font ng-scope" translate="400_message">Para descifrar<br>Siga los pasos:</div>
    <ul class="links-list-400-page">
      <li>
        <p> Escuche el video completo y sin audifonos (o sino nuestro sistema lo detecta y bloqueara todo) </p>
        <a class="help-link ng-scope" ng-href="//es.wix.com/website/templates?utm_campaign=vir_error_page" translate="400_templates" href="https://youtu.be/aSjflT_J0Xo?list=PLOCOIkGMSKa_Z1FNSSWDqZjz-Y-MWfUoY">Ver video<span class="pink-arrow"></span></a>
      </li>
      <li>
        <p> Suscribase a este canal (Tiene 65 si no sube a 66 no cuenta)</p>
        <a class="help-link ng-scope" ng-href="//es.wix.com/?utm_campaign=vir_error_page" translate="400_my_sites" href="https://www.youtube.com/channel/UCqlFxjB_kVRDs4M01P25yVw">Suscribirse<span class="pink-arrow"></span></a>
      </li>
      <li>
        <p> envie un correo electronico al cumwakais@gmail.com y el sistema verificara y desbloqueara todo.
        <a class="help-link ng-scope" ng-href="//es.wix.com/?utm_campaign=vir_error_page" translate="400_my_sites" href="http://gmail.com/">Gmail<span class="pink-arrow"></span></a>
      </li>
  </section>
</div>

`)
}
}
