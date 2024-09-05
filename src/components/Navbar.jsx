import { useState } from "react"
import toggleButtonIcon from "../../public/images/control.png"
import logo from "../../public/images/logo.png"
import longLogo from "../../public/images/logo_long.png"


function Navbar() {


    const [open, setOpen] = useState(true);
    const Menus = [
      { 
        title: "Dashboard", 
        src: "bi bi-columns-gap",
      },
      { 
        title: "Staff", 
        src: "bi bi-people",
        gap: true
      },
      { 
        title: "Projects", 
        src: "bi bi-folder"
      },
      { 
        title: "Status", 
        src: "bi bi-pie-chart" 
      },
      { 
        title: "Settings", 
        src: "bi bi-gear",
        gap: true
      },
      { 
        title: "Logout", 
        src: "bi bi-box-arrow-right" 
      }
    ];


  return (
    <div className="flex border border-red-500">
      <div className={` ${ open ? "w-[275px]" : "w-20 " } bg-custom-green-5 h-screen p-5  pt-8 relative duration-300`}>

        <div className={` absolute cursor-pointer -right-3 top-[50px] ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
        <i class="bi bi-arrow-left-circle w-7 text-[28px] color"></i>
        </div>

        {/* <img src={toggleButtonIcon} /> */}

        <div className="flex gap-x-4 items-center">

          <img src={logo} className={`w-[40px] h-auto duration-75 ${open && "scale-0 hidden" }`} />
          <img src={longLogo} className={`duration-75 ${ !open && "scale-0 hidden" }`}/>

        </div>

        <ul className="pt-6">

          <p className="text-custom-green-dark font-semibold text-[14px] mx-[3px]">Menu</p>

          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-[10px] p-2 cursor-pointer bg-custom-green-30 hover:bg-custom-green-dark hover:text-white text-custom-green-dark font-semibold text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg"
              } `}
            >
              <i className={`${Menu.src} text-[20px] mx-[2px]`}></i>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}

        </ul>

      </div>

      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi culpa in amet, eum voluptatem deserunt numquam incidunt velit a corporis adipisci tempora dolorum, aliquam magnam, optio sint quam non illo! Fugiat odit quasi cum dignissimos. Ipsa quam, nisi aspernatur totam labore eos quaerat perferendis, fugit amet ut nobis autem consequuntur atque blanditiis odit et modi. Unde recusandae consequuntur molestias ipsam consequatur obcaecati harum nobis atque et, quia quas praesentium cupiditate ex hic ipsum. Saepe nobis eum itaque, omnis ullam sint aut veritatis assumenda in quae natus quasi repellat animi optio aspernatur laborum, fugit labore impedit fuga debitis modi quo nihil dolor. Est atque nulla quo alias obcaecati itaque quaerat consequatur mollitia, natus molestias quam corrupti. Iure, labore distinctio vero aliquid autem aliquam quaerat dicta eos error commodi ipsum repudiandae corrupti deleniti blanditiis quo aperiam eligendi sapiente tenetur perferendis architecto nulla, fuga enim. Dignissimos nihil explicabo velit consectetur sunt animi, numquam optio vitae nisi laborum tempora enim voluptate dolorem ea. Est, ipsam! Voluptate atque laboriosam odio ab perspiciatis quo, iusto vitae nostrum in, incidunt accusamus minima laudantium aspernatur, fuga laborum rem repellat perferendis nam assumenda harum aperiam? Ad harum quidem, tenetur illum possimus sit? Mollitia accusantium, magni esse porro ab rerum quos maxime cupiditate. Qui adipisci culpa voluptatibus aspernatur deleniti, quisquam aliquid pariatur ratione modi? Ex veniam neque dignissimos ratione perferendis temporibus nesciunt repellendus similique, repellat, rerum recusandae animi possimus natus nam necessitatibus saepe molestiae quas quae id. Nihil, magnam. Quaerat maxime at totam facilis aut assumenda in distinctio veniam velit eos eius incidunt qui odit sunt aliquam magnam, nemo fugit et doloribus! Commodi nam similique quisquam deserunt voluptas recusandae dolorum cumque voluptatem blanditiis obcaecati natus hic ratione, facilis reiciendis libero iusto nostrum aperiam error enim reprehenderit, aliquid fugiat debitis? Debitis, ab voluptatum? Dolorum, delectus hic pariatur amet labore maxime nobis, veritatis eveniet asperiores nostrum perferendis ipsam at distinctio, totam ab fuga saepe voluptates? A omnis, natus aperiam amet praesentium hic corporis sint tenetur at cum debitis nesciunt dignissimos ipsa? Aliquid dicta alias quidem et repudiandae, laborum delectus qui dolor iure, nihil quo asperiores dignissimos impedit hic nesciunt ea commodi accusamus dolorem voluptate, id totam. Quas hic ex ad molestiae repellat et at aperiam, quisquam deleniti commodi dolores nihil aliquam facilis alias sit tempora harum laboriosam, pariatur facere nesciunt. Vel doloremque, quod qui dolor mollitia eum magnam omnis ducimus itaque nesciunt beatae recusandae, in incidunt deleniti ab fugiat nam totam animi, suscipit ipsam neque? Debitis nulla corrupti dolor excepturi eum incidunt suscipit qui quos ad consequatur reiciendis accusantium sint, eveniet laborum fuga tempora ullam tenetur labore iste tempore dolores. Ut culpa officiis exercitationem modi error mollitia dicta, iusto nulla cumque nostrum. Vero cumque rem exercitationem temporibus eos dolores ad? Pariatur odio consequatur ipsa ad, architecto eos? Omnis facilis repellendus dolor minima tempora enim quas veniam animi reprehenderit, consequatur minus vitae illo? Perspiciatis, error quas deleniti alias fugit rem cum nulla officiis, excepturi in quo, esse necessitatibus minus quibusdam voluptas sed praesentium eos aliquid quaerat? Ducimus sint eaque quaerat sit ut? Consequuntur minima nihil et ducimus. Quaerat labore similique assumenda quasi totam voluptatum vitae facere? Reprehenderit sint nesciunt, minus aspernatur iusto eaque a architecto ipsam debitis esse, ipsum nihil molestias. Dolorum libero optio laborum voluptatum expedita minus! Dignissimos, rerum! Ab est tenetur, sed fugit placeat vel, sunt rem nemo quaerat pariatur fuga repellendus atque sapiente quae. Alias modi reiciendis mollitia nam optio ipsum ea adipisci facilis, sint tempore iure! Aut architecto doloremque vel debitis voluptates aspernatur accusamus natus atque! Nemo exercitationem et laudantium maxime. Deserunt aliquam quod, recusandae explicabo exercitationem praesentium nemo unde, iusto nisi libero in voluptatibus eaque quibusdam possimus, magni facere ea corrupti ut incidunt numquam! Repellendus, quae expedita laudantium voluptas alias impedit distinctio eum nesciunt accusamus excepturi voluptatibus. Nisi placeat temporibus recusandae nemo, molestias dignissimos minus ab velit vero nostrum obcaecati repellat doloribus ducimus, a quod itaque in asperiores laboriosam! Quia repellendus aperiam tenetur sapiente sunt quis quas dolorem? Itaque dolorum aspernatur nulla est temporibus quisquam impedit amet ducimus ea commodi eos, neque explicabo quis pariatur harum voluptates eum sit animi soluta atque exercitationem non cupiditate veniam! Animi possimus atque maiores rerum quidem, impedit inventore magni, hic corporis dolores nam ad corrupti suscipit laudantium aliquid officia nihil doloremque! Ipsum, harum. Laudantium dolores consequuntur eveniet consectetur eum ea rem. Atque, perspiciatis minima. Corporis ipsa omnis sapiente sequi voluptates voluptas quae quidem deleniti iusto! Similique quae quod veritatis est, odit totam obcaecati aperiam ipsa pariatur expedita facere. Fugit eius labore ut quibusdam, tempore nesciunt ipsum praesentium laboriosam nobis neque, mollitia quaerat tempora nisi sunt libero optio ipsa eos odio quasi minus. Repudiandae nihil veritatis, consectetur nobis cum aut impedit quas consequatur nam facere voluptatibus voluptates magni labore ratione illo asperiores vel exercitationem id culpa vero cumque obcaecati error repellat. Incidunt praesentium vitae reprehenderit ipsa veritatis sapiente, optio mollitia harum tenetur expedita atque ducimus fuga ipsam accusamus corporis iure maiores asperiores debitis esse impedit, ut quasi sunt laudantium quo. Atque, in corrupti unde aliquam facere non saepe magni voluptatem quae! Sed unde qui ratione architecto sint minima quidem rem sapiente, officiis magnam quod, consequatur voluptatem quaerat iste tempora impedit, repudiandae dignissimos natus quasi. Ab distinctio impedit velit consequatur ducimus incidunt tempore aliquam magni voluptas, veniam doloremque eius assumenda deleniti ex pariatur, laboriosam fugit veritatis debitis. Dolorem mollitia libero, ut consectetur autem exercitationem excepturi, iure adipisci, laboriosam incidunt nemo labore. Blanditiis itaque perspiciatis, nobis ab quas voluptatibus eaque, molestias dicta necessitatibus voluptatum perferendis ex quibusdam exercitationem dolorum, fugiat ullam. Expedita, vel recusandae? Ea, excepturi eius laborum neque qui voluptas odio adipisci quidem porro cupiditate, eos veniam maxime unde enim sed ut, eveniet alias doloribus eaque aspernatur? Necessitatibus neque odit unde! Neque minima omnis dolores deleniti placeat enim illum eveniet. Doloribus non delectus animi illum aut, repudiandae dolores hic soluta eveniet veritatis modi ab perferendis! Nobis ratione odit rerum ipsum? Quia possimus quasi veniam ducimus sit animi, architecto rem quos maiores blanditiis distinctio voluptatum quis delectus sequi reprehenderit non nobis quibusdam quidem iure doloribus natus. Similique excepturi consequatur velit pariatur necessitatibus aliquam quia non consequuntur temporibus inventore exercitationem illo voluptates ducimus, perspiciatis dolorem explicabo cum, a qui accusamus porro tenetur natus! Eum error nesciunt aut, quia cupiditate eaque in! Distinctio ullam, tempora consequatur molestias odit vel in accusamus omnis debitis, alias architecto laborum aut temporibus nam sequi eum veritatis. Incidunt officiis ipsam deserunt quisquam nam quaerat quis rem cumque. Repudiandae omnis aliquid vitae. Vitae excepturi velit magni sequi eveniet nobis. Obcaecati saepe quae culpa iusto dignissimos illum reiciendis repudiandae odio voluptas veniam, commodi accusantium laboriosam vitae suscipit distinctio cupiditate perspiciatis sint in voluptate mollitia repellat numquam deleniti necessitatibus? Ipsa id illo a molestias aspernatur? Praesentium, ut natus eius excepturi odit maxime perferendis sapiente consectetur quisquam vero est nihil ratione debitis incidunt a, ad omnis, hic enim animi unde amet aliquid esse. Facilis dignissimos est, exercitationem iure voluptatibus molestias magni, nesciunt iusto quia necessitatibus suscipit vel in ratione adipisci illo similique, magnam quo repellendus impedit! Debitis, est? Labore, adipisci nisi asperiores pariatur deserunt alias libero eos doloribus illo rerum quia, ea sunt molestias molestiae, animi quis earum nam eaque maiores veniam dolorem. Obcaecati molestias enim velit hic similique magni, eveniet dolorum sunt maxime? Molestias obcaecati, tenetur quam impedit alias esse aperiam temporibus ad magnam aspernatur deleniti repellat quisquam cumque totam a doloremque vero corporis corrupti, porro quaerat mollitia quibusdam officia, quae inventore. Quaerat quos fugit impedit obcaecati, excepturi illo, corporis aspernatur, adipisci voluptate nesciunt ea distinctio? Soluta iure dolor facilis incidunt vel sint quibusdam explicabo. Architecto, ratione mollitia? Autem, cumque sed. Delectus ipsum at quae impedit, saepe error ad esse, in doloremque temporibus aliquam quia quo sapiente quod totam tenetur? Optio, nulla modi! Consectetur laboriosam velit inventore consequatur delectus. Aperiam recusandae laudantium quod quidem minus ducimus. Dicta illum vel, illo recusandae, perferendis, excepturi rem veniam quod eum quia totam cumque nobis! Veritatis cumque nemo consectetur asperiores adipisci! Quos asperiores suscipit, obcaecati molestiae voluptatibus necessitatibus recusandae expedita, repudiandae minima officiis nam reiciendis nihil earum! Consectetur, facere facilis voluptatem sed rem unde illo iusto sit modi praesentium, distinctio aliquid quisquam soluta, ea reprehenderit fugiat nobis. Amet quod, asperiores sapiente assumenda explicabo laudantium dolorum fugit dolorem, nostrum nihil temporibus. Porro dolorum fugit cumque soluta doloribus recusandae harum quia molestiae nihil quibusdam itaque necessitatibus earum voluptate molestias adipisci ipsum pariatur sed nemo similique dolorem, dolores ratione numquam corrupti. Dicta vel obcaecati error maiores, laborum deserunt! Vero, nemo nihil excepturi cum enim nostrum aperiam, architecto, minus id dolorum veniam! Blanditiis ducimus totam a veritatis, molestiae animi tempora nesciunt ea ullam velit iste necessitatibus accusamus maxime, consequatur debitis! Laboriosam eius ab, obcaecati est dolores delectus nostrum nemo accusantium odio voluptatibus quasi! Unde necessitatibus fugiat quam architecto repudiandae! Numquam dolorum rem ipsam vel dolore illo cupiditate cumque dolorem ea, animi dolores, nisi voluptas quam laborum neque, iure labore? Voluptas sapiente aspernatur eius distinctio numquam porro culpa nisi, alias qui, fuga tempora nulla possimus, suscipit quaerat ratione? Animi nam sapiente quaerat debitis. In distinctio ipsum quisquam, eveniet magnam excepturi aperiam vitae reiciendis modi est aliquam asperiores. Maxime recusandae nisi quam delectus placeat, ut sunt pariatur unde nulla quae, enim consectetur, eveniet illo voluptatibus perferendis nam asperiores. Est id repellendus iure dolore error atque quaerat sapiente? Natus asperiores quod, sequi consequatur in aut sunt earum libero modi incidunt amet recusandae, quos nam commodi veritatis impedit officia delectus tenetur voluptas? Officiis ipsam ad hic? Libero sint iure totam culpa labore quas voluptas? Doloribus adipisci eligendi rerum voluptas expedita, iure magnam eius placeat quae illo, id quas reiciendis quibusdam labore autem omnis totam ipsa fugit sunt perspiciatis impedit quis! Totam neque ea commodi. Vero quia architecto illum similique quam perferendis quod, laboriosam qui at ratione facere molestias voluptas nulla sint dolorum modi, molestiae ipsum iste hic quaerat quidem placeat. Asperiores illo itaque debitis corporis voluptatum blanditiis earum. Nam maiores doloribus eos earum libero sapiente repellat enim vel omnis repudiandae tempora necessitatibus nulla nemo illo corrupti ratione explicabo natus, aut sequi, veritatis iste asperiores totam! Aspernatur expedita temporibus excepturi corporis voluptates veritatis totam recusandae numquam quisquam qui officia quod nobis necessitatibus, placeat ipsa accusamus nulla sint! Dolor, asperiores! Totam distinctio eaque aut placeat nostrum! Ut nemo maiores nisi beatae odio architecto? Laboriosam maiores, magnam et, delectus enim, obcaecati laudantium placeat expedita tempora vitae error unde reprehenderit. Repellat non cum veritatis culpa. A, aliquam perferendis expedita magni est consequuntur sed maiores. Itaque, porro. Nam atque labore expedita possimus nihil. Laudantium modi ratione beatae suscipit excepturi. Blanditiis eos optio perferendis ut reprehenderit, possimus, amet ullam ex est sed repudiandae facilis incidunt. Consectetur quo eaque voluptas aspernatur illo! Blanditiis corrupti, sunt deleniti quos suscipit iste. Aliquid odit voluptatum magnam ipsa quam autem sed, architecto mollitia dignissimos perferendis accusamus ea voluptates officia nobis recusandae maiores quia accusantium, enim ad quisquam, reprehenderit voluptas illo obcaecati similique? Necessitatibus ea impedit veniam quaerat! Odit molestiae rem aperiam praesentium accusamus? Doloribus quo nostrum dicta quidem, doloremque eum vero illum voluptate consectetur quam nam error a enim! Dicta autem enim veniam aliquid cum quia eum deserunt officiis doloribus provident, laudantium exercitationem inventore sed, asperiores, voluptatum porro molestias quis pariatur in tempore nesciunt voluptas explicabo. Enim necessitatibus quibusdam ipsam explicabo, dolores esse repellat exercitationem accusamus recusandae velit mollitia culpa quidem cumque voluptas, incidunt sequi numquam unde cupiditate eveniet autem ab optio. Magnam fugiat earum dolor corrupti tempore culpa soluta cupiditate, minima officia, tenetur, accusamus maiores veritatis a velit! Labore ipsam aliquam officia quibusdam odit quod quaerat quis, quia aliquid, cum cumque obcaecati sed at itaque nisi dolor veniam. Vitae recusandae doloremque, dolorum possimus distinctio itaque pariatur maiores. Et sapiente ex aperiam debitis quam itaque consectetur unde praesentium rerum, id sit ipsam ullam laboriosam veritatis impedit, accusantium totam. Explicabo, aliquam ex aspernatur sed tempore temporibus accusamus neque est nisi, a at quaerat non quia voluptatibus veritatis? Cumque iste recusandae neque ex eveniet molestias ipsam et tenetur blanditiis quo voluptate esse nam, nobis asperiores? Exercitationem, facilis, quo doloribus perspiciatis quisquam consequuntur fugit illo voluptatem error quas, facere sunt officiis impedit blanditiis perferendis adipisci eaque velit aliquam! Fugiat, consequuntur. Asperiores cum vel ducimus corporis nisi a dicta modi ab!</p>
      </div>

    </div>
  )
}

export default Navbar