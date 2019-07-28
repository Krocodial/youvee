import { Component, OnInit } from "@angular/core";
import { Page, backgroundRepeatProperty, View } from "tns-core-modules/ui/page";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "about", loadChildren: "./about/about.module#AboutModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "About",
    moduleId: module.id,
    templateUrl: "./about.component.html"
})
export class AboutComponent implements OnInit {
    name: string;
    email: string;
    password: string;
    news;
    tos;


    constructor(private page: Page) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
       this.news = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ligula ac ipsum tempor tempor nec ut justo. Vivamus iaculis lorem tempor, scelerisque nisl at, euismod arcu. Sed purus turpis, pulvinar non pretium eu, cursus et neque. Phasellus dui dui, lacinia rutrum laoreet sed, bibendum id leo. Suspendisse quis viverra neque. Integer semper magna at ultrices posuere. Ut mattis id lorem eget vehicula. Pellentesque vitae aliquam urna. Sed placerat maximus nulla. Vestibulum a commodo nisl. Praesent in eros enim. Curabitur eu est malesuada, congue risus sit amet, dictum eros. Aliquam ac euismod nulla. In finibus nibh a enim pharetra, at sollicitudin ipsum condimentum.",
                     "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec vitae nisi lorem. Morbi commodo sem erat, id pretium lorem pharetra ut. Aenean blandit nisl sit amet sollicitudin mollis. In sit amet mauris vulputate, bibendum purus id, varius ligula. Aliquam tincidunt felis urna, finibus elementum nisl semper vitae. Suspendisse a dui id nunc aliquam dapibus sit amet vel augue. Cras non tellus blandit, dapibus odio ultricies, tincidunt sapien. Nunc nec augue eleifend, luctus libero id, imperdiet metus. Nam rhoncus ac augue sed euismod. Nulla rhoncus vehicula dui, at lobortis massa rutrum porta. Nam iaculis nisl malesuada, rhoncus ipsum eget, aliquet lacus. Nulla est ipsum, mattis ac nisi in, interdum ornare lorem. Nunc dapibus ornare maximus. Quisque sed lacinia eros.",
                     "Fusce pharetra fringilla lorem, eget auctor quam faucibus ut. Praesent vitae risus eu justo malesuada pretium in a lorem. Duis hendrerit hendrerit lacus eget blandit. In pretium eleifend dolor, eu imperdiet nulla convallis sit amet. Curabitur at magna metus. Suspendisse et turpis lacinia, feugiat libero eu, gravida mi. Praesent sit amet tristique mi, ac scelerisque eros."]
        
        this.tos = `Lorem ipsum dolor sit amet, sea eu mollis pertinax, vitae gubergren appellantur ex vis, vix eu ferri omnium. Iriure oporteat indoctum cu mel, nam atqui dolores lobortis ne. An nusquam comprehensam vis, vel ad legimus mandamus. Vidit luptatum has ea, ex molestie aliquando elaboraret mei? Quo appetere recusabo an! Ea enim pertinax expetenda ius, ad hendrerit argumentum has.

        Pri utinam possim facilisis cu, vis in nullam admodum? Mel hinc case omnesque te. Ei duo omnium fierent dignissim, tation nostro gubergren et duo. Dicta ornatus partiendo ea eos, sea no iuvaret iracundia democritum.
        
        Mazim tantas pro eu, nam veniam neglegentur no, ne vis aeque maluisset. At has liber eligendi voluptaria? Ea debet nullam repudiandae mel, te omittantur conclusionemque usu, ei eam nullam accusam ponderum! Eam utinam iudicabit periculis ut, eu eleifend erroribus mel, et cum duis pertinacia.
        
        Eum quaeque insolens torquatos at. Elit inimicus in pro, case mundi ex nam. Ei qui suas summo iudicabit? Persius sapientem ea his, sed quando habemus id. Harum habemus per ei.
        
        Ea graece aliquip sit, postea diceret est an. Sale porro cum ne, an tantas interesset vel! Et quot efficiantur theophrastus vix. Summo legimus oporteat vel id. Ad his lorem delectus, doctus voluptua apeirian ne nam. Prima viris sententiae ea mei? Unum causae animal ea pro, id everti honestatis inciderint usu?
        
        Quem latine te eam. His ludus intellegebat in. Nonumy facete accumsan nec id. Movet vivendo eam eu. Solum commodo voluptaria eu duo, his audire viderer salutandi eu, vis velit commodo eu?
        
        Everti volumus ocurreret cu vix. Eu nostrum philosophia cum, odio paulo habemus ea mel! Est sumo laoreet eu. Unum sale civibus sit id, solum feugiat electram usu ei, usu cu alii ullum nostrud?
        
        Cibo voluptaria expetendis ex quo. Pri quis quot vulputate id, ad sea summo ornatus! Duo ei partem temporibus, eum cibo delectus ocurreret ad. No populo definiebas eam, has ne choro prompta! Doming honestatis cu vix. Sea ne facete insolens pertinax!
        
        Ea mei convenire assentior, eros legimus tractatos nec ad. Mel probo homero minimum ex, duo equidem dissentiet eu. Tollit accumsan appareat mea ut, odio petentium has no, at stet facer deleniti sea. Per graecis ancillae splendide ad. Eos elitr dicam et!
        
        Omnis atqui pro ea, per tempor euismod patrioque cu, quem consectetuer id mea? Te iudico virtute comprehensam mea, corrumpit consequat consequuntur at mea, nec ea suscipit imperdiet omittantur. Cu tota noster eum! Repudiare urbanitas sea eu. Eos no alii errem melius? Et eam ullum tempor menandri?
        
        Habeo partem disputationi vim te. Has ex dicunt facilisis definitionem, usu ad singulis explicari. Sint molestiae ea per, eu percipit intellegam duo. Cu nisl graeci pertinacia vel, nam primis vivendum definitiones ad, sale vocibus id cum? Est in ipsum movet legendos, eum ea virtute dolorum corpora, eirmod voluptua te duo? Malis suavitate nec id, tacimates assueverit an his?
        
        Alii nisl iudico te per, has aeque dicunt propriae at. An lorem elitr delicata quo, sit no utinam pertinacia. Eros lorem elitr eos ex, utinam mandamus elaboraret usu te, in munere vivendum vix. In ipsum ceteros elaboraret per. Nostro honestatis ius ne, no dolorum iracundia eam? Liber torquatos eu est! Quot dicant scriptorem no his, vis pertinacia inciderint id, vel discere mediocrem eu.
        
        Natum facilis id sit, ex case constituam eum. Pro civibus consequuntur in, ne atqui postea mel? Qui ei nostrum blandit! Vix et illud nonumes mediocrem, error propriae ea est, in per nulla mandamus. Cu has minim fabellas, stet dicant inermis nec id. Aeterno nonumes definitiones ei vel, an etiam voluptua mea.
        
        Ut solum vulputate ius! Modus inciderint et eos, eirmod rationibus ut est. Albucius reprimique ea has, illum ludus vix te! Quo ea tation probatus, mei et dicit efficiantur. Propriae accumsan intellegat at nec.
        
        Indoctum imperdiet qui ei? Zril legimus inciderint quo cu, solet fastidii interpretaris eu duo, veri omnis vidisse mea ut? Cu velit aliquando consequuntur vel, aliquam volumus id qui. Ea eius definitiones his, utinam impetus disputando ea eam. Vel atqui fabulas eleifend ei, fugit docendi invidunt eum eu.
        
        Cu per ubique commune, pro ne tantas concludaturque, vis solum laoreet in. Saepe iriure disputando eum ex, wisi populo te per, quo cu harum constituto. Ullum congue mediocritatem at qui, an inani quaestio evertitur nec, sit posse consul volutpat ad. Alterum definiebas signiferumque no vix. Sea ei causae hendrerit deterruisset! Et eos atqui solet nominavi!
        
        Ei splendide voluptatum mei, nec purto affert ne. Ad ignota putant alterum eam, dicit ludus persecuti per no. No populo malorum est. Corpora persequeris ut eos. No errem doctus saperet est, eos aperiam labores in. Per ea dolorum sapientem adversarium.
        
        Ius at maiorum voluptua, purto noluisse hendrerit no nec, convenire efficiendi duo eu. Oportere evertitur assentior in qui, copiosae reprimique mel no! Latine virtute id vim. Duo tation detraxit an.
        
        Vel dolore possit nusquam at? Has in case recteque! Eum in viris eripuit. Mea id putent suavitate. Prima erroribus sed te, ea eos aperiam alienum.
        
        Eos iudico apeirian volutpat at, decore utroque instructior ius no, ad mei cibo integre evertitur. An usu habemus petentium, probo voluptua voluptatum eos ei. Numquam complectitur sit ad, sed in ullum atomorum conceptam. Sit ex modo consulatu, maiorum scaevola duo id. Natum postea sanctus no nec, ne laudem aliquam est. Erant putant oblique eam in, no mollis suscipit sed, nec prima laudem cu! Hinc dolore laudem no sea, has partem dictas iracundia ne.
        
        Te eleifend adipiscing usu. Eu eum tale viris dissentias, sed et ferri modus viris, his duis atqui no? Mel cibo sanctus disputando ex, vel ad ipsum convenire. No usu assueverit adversarium? His ex corpora incorrupte.
        
        Mel zril recusabo dissentias no, cum adipisci periculis ne, et dolorem aliquando eum? Nec ut persecuti scripserit disputationi. Mea et aeque possit, vis eu alienum iudicabit, maiorum propriae deterruisset eam eu. Dictas possim an mei, ea eos quem noster.
        
        Qui tale eros at, id est ubique percipit atomorum, eam melius rationibus eu. Te ius veri virtute menandri, pro in altera appareat. Eirmod aperiri mei ea, sint persius qui ut. Ex quas veniam cum, choro volumus mei at? Ex fugit fabulas vix, pro adhuc paulo no. Vix ut iudicabit intellegebat, nulla omnesque nominavi vim ne. Has in ubique diceret petentium, mel et elit repudiandae.
        
        Te reque legere dolorem vix. Graece discere similique nam in, et vel autem iusto mucius? Nam an velit tritani, augue inimicus dissentias pro ex? Ex utinam soleat facilis sed. Sit et reque noluisse, eum eius conceptam in, at harum appetere singulis vix.
        
        Has falli dicit eu, ad reque suavitate sea. Has ut quis vivendum, nonumes insolens tacimates mei eu, qui te civibus denique. In has viris nihil vocibus, eirmod dissentias referrentur ad duo. Ei per dico iusto accumsan, illum discere corrumpit cum ea. Usu in veritus ancillae salutatus, ei mea debitis consequat.
        
        Ei dicit alterum quaestio mei, idque omnes indoctum pri ad, qui no nonumy epicurei. Eruditi denique nominati vis te. Vim in quot diceret, et ius graeco reformidans? Aperiam maiestatis ius ex, mea postea petentium ut, habemus intellegebat in qui.
        
        At sea altera mollis conceptam, phaedrum adipisci delicata sea id. No malorum voluptua oporteat est, iuvaret gubergren abhorreant vix no. Ea facete maluisset complectitur nec, iudico mucius complectitur vis et, sed erat postulant scripserit ei? Mei commune pericula honestatis et, ea doming tamquam vis, et est vidisse torquatos cotidieque! Ex eos solum dolorum, reque liber sea ex!
        
        Sale falli essent pri ex? Est ut primis mediocritatem. Nec ei dico epicuri convenire, an eam legere option signiferumque. Agam philosophia consectetuer per eu. Perfecto patrioque aliquando cu pri, eu mel clita delicatissimi, vel eu mazim putant percipitur! Natum dicant dissentias per in, ut ius ocurreret torquatos percipitur. Tota equidem expetenda ne mel, duo ne liber postulant, elitr feugiat ea vel.
        
        Mutat molestiae scriptorem sit cu, ut meis illum audire est. Et meliore noluisse usu? Ea novum adolescens vix. Te melius viderer quaerendum eos, has ad agam oporteat.
        
        Dico veri eruditi cu pri. Quo quaestio periculis ne, vim sint eius id. Exerci vocibus te nec, eros aeque theophrastus id eum. Idque perpetua id vix, nam debitis lobortis appellantur ne. Graeci postulant in usu, nec ad alii aperiam. Eos te diceret erroribus voluptatibus.
        
        Ne dicta fuisset interesset eos, facer saepe tibique pro te, pri an insolens delicatissimi. His ei eros legimus, has eu facilis principes consulatu. Wisi dissentiet te vis, id magna recteque assueverit pro. Ex dicam gloriatur his, populo noster appetere ne sed, usu ex lobortis neglegentur! Et pro eruditi deserunt interpretaris, nec an legendos oportere assentior. Principes dissentiet est in, pro oblique graecis cu! Te mundi corrumpit vituperata qui, nec cu tale tollit legimus!
        
        Pro ne cetero accusamus elaboraret, cibo prima efficiendi vim et, paulo omittam omittantur eum no! No cetero petentium dissentiet nam, ea quodsi recteque democritum eos, nonumy vituperata suscipiantur at eos. Eum ad essent tibique adipiscing. Qui et vulputate definitionem, commodo nominavi ex pri, te quo justo dolorem delectus. Cu duo dolorem appetere laboramus!
        
        Exerci aliquando pro et. Vim ornatus comprehensam an, has blandit quaestio hendrerit ad. Nam id posse legere appellantur. Novum reformidans mei at, suas tantas sed no.
        
        Eu mea soleat graeco, cibo quaerendum reprehendunt sea ex. Wisi inciderint in eum, mucius tincidunt his at, an vim agam facilis! Partem urbanitas eos ex, no aeque integre invenire sea. In inani lucilius recteque sed, pro ex vide abhorreant, his integre expetendis in. Iudicabit disputando usu in, no has dicta euismod dolorem, ad agam semper appetere mel?
        
        Est ne commune detraxit torquatos, per iuvaret facilis accusata no? Ex eros solet constituam has, in verear meliore ocurreret est. Ei has nihil sanctus minimum? Duo id vivendo salutandi.
        
        Ius iuvaret consulatu persequeris ex, et modus nobis eum. Ei eam dicta postea! Vim ex percipit rationibus, debitis consequuntur vim eu. Est cu principes scriptorem. Nam sale disputando ei, iriure accommodare ius ei! Postea omnium ornatus eos no.
        
        Duo recusabo omittantur in, vim an mutat melius consequat? Duo te regione eligendi suscipiantur, eum quem propriae ei. Cu vocent audire vis, id idque fierent dissentiunt has! Ex nam electram suscipiantur, quo impedit petentium ne, at vis illum efficiantur. Ius epicurei percipitur id, veniam quaerendum eam et, nullam inermis lucilius et mel!
        
        In partem alterum gubergren vis, duo zril tritani labores cu, id aeque populo pro. Ne vix minim numquam vocibus. Te dictas labores consulatu mea, id duo partem omnesque. Et mnesarchum percipitur mel, ius illud maiorum tibique at, sed ne electram mediocrem. Illud altera ea duo. Te dicta sapientem qui, soluta dolorem cum ut, soluta doming no sit. Sumo ipsum ea est?
        
        Eos te pertinacia dissentiunt, ea eam vitae accusata? Solet altera pertinacia ut quo, ex usu labore tritani, autem doming inimicus eum ei. Elaboraret contentiones ea mea. Vide decore antiopam id ius, zril nemore interesset quo in.
        
        His quaestio sadipscing accommodare ex. Libris vulputate reprimique pro cu, vide principes ad qui. Ut pro essent scripta similique. Mel ne nisl harum epicuri, et aliquid eleifend cum? Dicta debet nemore qui et!
        
        Agam sapientem scripserit mea cu, viderer epicurei ea nec, sed ei vero petentium corrumpit. Quis debitis ex eum, pro eu antiopam persecuti definitiones! Harum meliore comprehensam cum ne? Dicam bonorum eu ius, at vim nihil offendit. Ornatus argumentum ex sed.
        
        Ei ius minim euripidis! Mei ridens oporteat eloquentiam ea, nam case error minimum ad, eos agam oratio splendide ea! Nec unum mazim an. Pericula prodesset mediocritatem at has, ut justo dolor vim. Maiorum salutatus sadipscing sed at, pri in numquam recusabo. In quot volumus voluptatibus sea, explicari repudiare ne duo, essent inermis elaboraret eu nec. Eu falli mazim nostrud eam, no duo errem dignissim.
        
        Te mel minim volumus, quot aliquid his no, discere blandit no has. Eum odio definitionem cu, no quo iusto suavitate, at vix delenit meliore. Ea vim sumo alterum delicata, putant possim ad pro. Sed appetere corrumpit in, his quem exerci in. Alii oporteat constituto ei nec, graeco aliquando nam at, ius modus adipisci te.
        
        Erant noluisse epicurei mei eu? In case aliquando sit, ei quo agam dignissim. Definiebas conclusionemque pro ea. Mel in illud probatus atomorum, at nec soluta pertinacia. Per vero intellegam at. Fuisset hendrerit sed eu, eos no esse civibus, usu iudico melius labitur at!
        
        Usu ubique saperet habemus ad, in affert feugiat philosophia ius, ea inani suscipiantur definitionem pri. Ea causae latine accommodare quo, affert petentium reformidans at nec, quo ne persius volumus apeirian. Possim volutpat mnesarchum qui an, mea ex velit choro maiestatis! No ius mutat posse, pri id habemus alienum praesent, exerci noster ei vim? Et congue equidem vel, eos habeo aeterno philosophia id, mandamus eloquentiam usu ei.
        
        Autem verterem intellegam ius cu, an mel eros fierent. Perfecto interpretaris ei mea, eam id homero fabellas. Albucius singulis ius ne, dicta evertitur vim ei? Pro id doming molestie maiestatis! Ut paulo imperdiet sit, eos sententiae eloquentiam et. Id reque minim vivendo eos, natum assueverit id his, vix at fabellas vulputate expetendis!
        
        Sed dicant delicatissimi ad, ad commodo imperdiet eum. Cu ius munere postea, et doctus detraxit pro! Vix eu erat mediocrem, posidonium definitiones ex nam, te has quis nibh verear? Cu nec prima rebum aperiam!
        
        Vitae deseruisse at pri, te duo sumo mutat fastidii. Appareat comprehensam vel in, his te adversarium disputationi. Sed quod fugit libris at, te sit elit electram. Ne his graece dolorum theophrastus, cu doctus officiis qui, eum veritus omittam id!
        
        Tempor alterum posidonium vel in, te sea tantas tempor efficiantur! Tibique assentior in vix? Malis tempor reprimique quo te. Cum ad laudem comprehensam, vis elaboraret cotidieque ex! Facilis consequat sadipscing no eam? Idque semper comprehensam sit ea. Quo bonorum accusam at, sit eu doctus fastidii pertinax.
        
        Ut quot duis vim. Est ferri diceret no, in qui mundi eripuit nonumes. Ius eu soluta tritani facilisis, ex vix aperiam gubergren repudiandae. Nam ne graeci causae complectitur, eu soleat fabellas suavitate est. Ut est dicant ceteros tacimates.
        
        At has facer singulis, melius vivendum elaboraret an sit, ius audiam explicari mediocritatem no. Everti nusquam eos in! Ne solum malis hendrerit est, mel in zril dolore nostrum. Autem commune sed te.
        
        Ancillae fastidii scripserit ne sed, voluptua accusamus vel id? Ut sea porro putent. Te his solum urbanitas. Dico facete necessitatibus ad has. Ea tale evertitur eos, at doming quaestio his, fabulas dignissim eum at. Nec ei nostro nostrud, eam cu periculis constituam omittantur, ex pro nihil imperdiet! Ea cum inermis suscipit luptatum.
        
        Malis vocent id eam, error oblique ex pro, et causae accusata nec. Quo purto primis fierent an. Nam graeci putant legimus cu, mutat menandri moderatius vel ne. Ad pri sint sensibus, ea mei eros solet. Eam feugait hendrerit ex, civibus dissentiet at his, eripuit adolescens ea eum.
        
        Ei est putent deseruisse, vix at diam suscipiantur. Viris noster an mel. Pri ex agam natum habeo, tale ludus instructior eos et, in putent possit antiopam eos. An duo nullam aperiri, est fastidii percipit persecuti at, vero primis adipisci vix cu! Indoctum rationibus concludaturque at mei.
        
        At sea nobis prompta suavitate. Cum in mazim reformidans voluptatibus. Te tale legendos eum, ad eos phaedrum hendrerit disputando. Sit ea simul persius posidonium.
        
        Viderer diceret eam an, eos ei modus cetero hendrerit. Sea malis sensibus ne. Nec et eleifend hendrerit, ad ius dolore dolores? Vel ex causae disputationi. Cum ne lucilius quaestio assueverit.
        
        Sit an quis atqui labitur, ea vix fabulas iudicabit imperdiet! Ut cum eripuit adipisci, id exerci quaeque repudiare nec, eam quidam voluptua indoctum an? Eum eruditi nominavi volutpat ei, assum omnes repudiandae sed eu, at sit mutat praesent dissentiunt. Ne prima consulatu mel. Veri recusabo ut nec, vis ei meis salutandi.
        
        Iriure labores petentium vim id? Nibh voluptatibus cu vim, duo ei inimicus conceptam accommodare. Cu amet voluptaria vis, mei cu fabulas utroque fuisset. Vis an liber graece feugiat, nec reque equidem et, ex ius agam adipisci. Vel ad expetendis interpretaris, mel munere nominati consequat no, tollit dolore omittam ex eam. Eu mea utinam eloquentiam, illum liber intellegat mea an, alia integre mandamus per ne.
        
        Cum modo maiorum cu, pri vivendum volutpat laboramus ex. Brute novum an cum, inani voluptatibus has ut. Ex munere volumus per, eum in dicant labores prodesset, ea usu summo iusto antiopam! Labitur feugiat mea te.
        
        Sit stet copiosae ei. Ea sea vero suavitate definitionem. Sed enim movet aeterno ex, duo ad petentium theophrastus, sea maiorum definiebas persequeris ea. Pro aeque ornatus lobortis et.
        
        Amet consequat disputationi at ius, et qui dicit postea. Dicit tantas delicata cu vis, vim quidam accumsan volutpat et. Cu sed enim option impedit, at usu tale quas dolor, bonorum detracto mel id? Ea eam facete vidisse, te mel aliquip molestie delicata, ut pri modus movet democritum. Facer utinam laboramus duo ut, no mel alterum tibique.
        
        Ad vivendo oporteat scriptorem quo, cu facilis consequuntur nam. Mel id esse ubique sanctus, iudico suscipiantur ei eum! Lorem semper sapientem est ea, errem platonem pericula sed cu. Tation impedit invidunt mel eu, ut ius vitae ignota, qui audiam fabellas an? Mundi accusata volutpat ex eum, ludus labores posidonium sed ea.
        
        Modus lorem conceptam nec cu, cu tacimates evertitur definitionem vel, cu qui laoreet postulant repudiare! Et has brute insolens, wisi mediocritatem sed ut. Ea duo suas eligendi. Dico suscipit has ea, omnium efficiantur per et, nam quas regione oblique eu! Illud ludus nemore ad qui, eu dicat conceptam ius. Cu vel admodum apeirian, ex postulant ullamcorper voluptatibus per? Eu admodum voluptaria vis, cum cu tamquam maiorum appareat.
        
        Cu vim sumo facilisis, cu idque impetus eam. Usu no vidit ferri civibus, mel natum nihil id, ei vix maiorum hendrerit urbanitas. An est integre utroque, te vel quis autem aliquip! Modo rebum nam ne, et hinc iriure gloriatur nam. Vim invenire consequat at, et vis dico laudem! Aperiam ancillae vix cu?
        
        Quo eu posse antiopam intellegat. Sit feugait intellegat te. Ne quidam suavitate conclusionemque eos, cu vel decore tritani. Vix facilis albucius persecuti ei? Usu autem legere civibus in. At qui facer volutpat ocurreret. Duo legere sententiae contentiones ex, dolorem urbanitas quaerendum vim cu, eu vel tation laboramus honestatis.
        
        Ubique audiam reprimique ea eam, qui te postea vulputate, iusto saepe at vim. An delenit fuisset per, ea has dicam convenire, omittam mediocrem cu sit. Vim doming equidem officiis et, mel tollit intellegam eu, usu in albucius mnesarchum! Ad eos movet insolens, esse.`;

    }

    ngOnInit(): void {
        //this.page.actionBarHidden = true;
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    onSignupButtonTap(): void {
        const name = this.name;
        const email = this.email;
        const password = this.password;

        /* ***********************************************************
        * Call your custom signup logic using the email and password data.
        *************************************************************/
    }
}
