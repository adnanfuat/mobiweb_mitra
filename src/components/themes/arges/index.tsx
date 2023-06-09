
import HeaderComp from "./header/index"
import FooterComp from "./footer/footercomp"
import {Triangle} from "./modules/triangle"
import {Welcome} from "./modules/welcome"
import {FixedWindow} from "./modules/fixedwindow"
import s from "./index.module.css"    ;
import Head from 'next/head';


// import styles from './page.module.css'
import {Index_Cuffs_V2_Visitor} from "@/components/cuffs/index_cuffs_v2_visitor"

// import Estates from "@/components/estates/estates";

import { Inter, Poppins } from 'next/font/google'
const inter = Inter({
        variable: '--inter-font',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })

const poppins = Poppins({
        variable: '--poppins-font',
        subsets:["latin","latin-ext"],
        weight:["100", "200","300","400","500","600", "700","800","900"]
      })


export const Arges =  (props) => {

    let {logo, params, dictionary, webdata, cuffs} = props ?? {};
  
    return ( 
              <div style={{position:"relative"}} className={poppins.className}>

              <Head>
                  <link rel="icon" href="/themes/arges/fav.png" sizes="any" />
                  <meta name="viewport" content="initial-scale=1, width=device-width" />
                  <meta name="Googlebot" content="index, follow" />
                  <meta name="robots" content="index, follow" />
                  <meta name="Robots" content="all" />              
                  <title>ARGES</title>
              </Head>
                                  
                        <HeaderComp logo={logo} locale={params?.locale} dictionary={dictionary} webdata={webdata} position="absolute"  sidepadding={42} topbottom={5}/>

                        <div className={s.main}>                                                                                      
                                                <Index_Cuffs_V2_Visitor cuffs={cuffs} locale={params?.locale}/>                                                             
                                                {/* <Estates adverts={webdata?.richcontents?.filter(a=>a?.bigbigparent_key=="1668310884")} locale={locale} sidepadding={42} />                                                 */}                        
                                                <Bant/>                        
                                                <Welcome/>  
                                                <Triangle/>
                                                <FixedWindow/>
                        </div> 
                        
                        <div className={s.footer}><FooterComp logo={logo}/></div>

            </div>      
            )
  }
  
  

  
    
  


  
  
  const Bant = () => {
    return (
      <div className={s.bantShell}>

            <div className={s.bantWr}>            
                    <div className={s.bantTextWr}>
                        <div className={s.bantTitle}>{`Arges İnşaat'dan Teklif İsteyin`}</div>  
                        <div>Hizmetlerimiz için teklif almak isterseniz hızlıca bizlere ulaşabilirsiniz.</div>  
                    </div>                    
                    <div  className={s.bantButton}>{`Arges İnşaat'dan Teklif İsteyin`}</div>  
              </div>
              
      </div>
    )
  }
  