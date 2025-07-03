'use client';

import { useEffect } from 'react';

export default function DomJs() {
  useEffect(() => {
    // === Resume Download ===
    /* const resume = document.querySelector('.resume') as HTMLElement | null;
    if (resume) {
      resume.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1tUyApo2vymzW25J2J7G6YQDTzPMDxpBJ/view?usp=sharing';
        link.download = 'John Mohsen UI/UX Designer.pdf';
        link.click();
      });
    } */

    // === Circle Menu on Scroll ===
    const menuCircle = document.getElementById('menucircle');
    const closeCircle = document.getElementById('closecircle');

    window.onscroll = function () {
      if (window.scrollY > 100) {
        menuCircle?.style.setProperty('display', 'block');
        menuCircle?.style.setProperty('animation', 'menuCircleOpenMov 0.5s ease-in-out');
      } else {
        ['menucircle', 'homecircle', 'aboutcircle', 'workcircle', 'contactcircle'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.style.display = 'none';
        });
        if (closeCircle) closeCircle.style.display = 'none';
        const hero = document.querySelector('.heroHeaderCircle') as HTMLElement;
        if (hero) hero.style.animation = 'menuCircleCloseMov 0.5s ease-in-out';
      }
    };

    menuCircle?.addEventListener('click', () => {
      ['homecircle', 'aboutcircle', 'workcircle', 'contactcircle'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'block';
      });
      if (closeCircle) {
        closeCircle.style.display = 'block';
        closeCircle.style.animation = 'none';
      }
      if (menuCircle) menuCircle.style.display = 'none';
    });

    closeCircle?.addEventListener('click', () => {
      ['homecircle', 'aboutcircle', 'workcircle', 'contactcircle'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
      if (closeCircle) closeCircle.style.display = 'none';
      if (menuCircle) {
        menuCircle.style.display = 'block';
        menuCircle.style.animation = 'none';
      }
    });

    // === Project Filtering ===
    const allProjectsBtn = document.querySelector('.allDesingsBtn') as HTMLElement;
    const companiesDesignsBtn = document.querySelector('.companiesDesigns') as HTMLElement;
    const manipulationBtn = document.querySelector('.ManipulationDesings') as HTMLElement;

    if (allProjectsBtn) {
      allProjectsBtn.style.backgroundColor = "rgb(253, 173, 0)";
      allProjectsBtn.style.borderRadius = "2em";

      allProjectsBtn.addEventListener('click', () => {
        document.querySelectorAll('.portfolio-design').forEach(project => {
          (project as HTMLElement).style.display = 'block';
        });
        
        allProjectsBtn.style.backgroundColor = "rgb(253, 173, 0)";
        companiesDesignsBtn.style.backgroundColor = "#191919";
        manipulationBtn.style.backgroundColor = "#191919";
      });
    }

    companiesDesignsBtn?.addEventListener('click', () => {
      document.querySelectorAll('.manipulation').forEach(el => (el as HTMLElement).style.display = 'none');
      document.querySelectorAll('.companiesProject').forEach(el => (el as HTMLElement).style.display = 'block');
      allProjectsBtn.style.backgroundColor = "#191919";
      companiesDesignsBtn.style.backgroundColor = "rgb(253, 173, 0)";
      companiesDesignsBtn.style.borderRadius = "2em";
      manipulationBtn.style.backgroundColor = "#191919";
    });

    manipulationBtn?.addEventListener('click', () => {
      document.querySelectorAll('.companiesProject').forEach(el => (el as HTMLElement).style.display = 'none');
      document.querySelectorAll('.manipulation').forEach(el => (el as HTMLElement).style.display = 'block');
      allProjectsBtn.style.backgroundColor = "#191919";
      companiesDesignsBtn.style.backgroundColor = "#191919";
      manipulationBtn.style.backgroundColor = "rgb(253, 173, 0)";
      manipulationBtn.style.borderRadius = "2em";
    });

    // === Modal Logic ===
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.closeBtn');
    
    const projectTitle = document.getElementById('project-title');
    const projectImage = document.getElementById('project-image') as HTMLImageElement | null;

    const projectData: Record<string, { title: string; image: string }> = {
      project1: { title: "Social Media Design For Mojo group",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495857/mojo_uvhlhf.jpg" },
     
      project2: { title: "Social Media Design For Freez Company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496002/Freez_nbhpjg.jpg" },
     
      project3: { title: "Social Media Design For GlamyLab For cosmetics",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495946/GlamyLab_bzt5of.jpg" },
     
      project4: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477209/graphic-design_lutlkw.jpg" },
     
      project5: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477206/web-developing_pf02y7.jpg" },
     
      project6: { title: "Social Media Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477176/happy_exl266.jpg" },
     
      project7: { title: "Social Media Design For Ayam Geprek Restaurant",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496114/soon_vwqpwe.jpg" },
     
      project8: { title: "Social Media Design For Cera ve For cosmetics",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495946/Cerve_mkut1e.jpg" },
     
      project9: { title: "Social Media Design For Ayam Geprek Restaurant",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495903/Chicken_f5irix.jpg" },
     
      project10: { title: "Unofficial Poster Design For FIFA World Cup",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495959/worldCup_xyb7n5.jpg" },
     
      project11: { title: "Unofficial Poster Design For Nissan Motors",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495845/car_him6vg.jpg" },
     
      project12: { title: "Social Media Poster Design For Deluxcious Restaurant",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495965/fish_qd5jah.jpg" },
     
      project13: { title: "Social Media Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477566/why_hikd7r.jpg" },
     
      project14: { title: "Social Media Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477470/challenge_gr2dtw.jpg" },
     
      project15: { title: "Social Media Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477536/start-programming_khjusw.jpg" },
     
      project16: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477771/social-media_kalvnz.jpg" },
     
      project17: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477587/English_tsg7oq.jpg" },
     
      project18: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477488/ICDL_a7tl7x.jpg" },
     
      project19: { title: "Logo Design For Devista Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477317/Devista_zspxi5.jpg" },
     
      project20: { title: "Social Media Design For Devista For Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478980/king_tvycgv.jpg" },
     
      project21: { title: "Social Media Design For Devista For Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478911/posts_dzod5t.jpg" },
     
      project22: { title: "Social Media Design For Devista For Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478929/dynamic_p9fo09.jpg" },
     
      project23: { title: "Social Media Design For Devista For Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478990/packages_hknjxc.jpg" },
     
      project24: { title: "Social Media Design For Devista For Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478928/vision_dng3mr.jpg" },
     
      project25: { title: "Social Media Design For Devista For Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478953/who2_nutnvr.jpg" },
     
      project26: { title: "Cover Design For Devista For Digital Solutions",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496458/cover_fb6oqs.jpg" },
     
      project27: { title: "Logo Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477313/High_Tech_v7tpe6.png" },
     
      project28: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496655/poster1_lvo9hw.jpg" },
     
      project29: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496673/poster2_hnzurp.jpg" },
     
      project30: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496669/poster3_f4ad2c.jpg" },
     
      project31: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751479295/software_d2a0fp.jpg" },
     
      project32: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751479312/UI_UX_nxod3y.jpg" },
     
      project33: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751479376/Web_development_n716at.jpg" },
     
      project34: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496674/data_analysis_mx7jst.jpg" },
     
      project35: { title: "Social Media Design for Techno Media Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496680/mobile_application_tpxnrw.jpg" },
     
      project36: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477546/mobile-course_fi7xm5.jpg" },
     
      project37: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477775/finance-course_vvif1t.jpg" },
     
      project38: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751477577/marketing-course_wpt4ag.jpg" },
     
      project39: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478493/English-poster_ijevfw.jpg" },
     
      project40: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478272/English2_pa8p2g.jpg" },
     
      project41: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478301/Digital-marketing-course_fosm1n.jpg" },
     
      project42: { title: "Social Media Design For High Tech Academy ",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478288/friends_mwci0n.jpg" },
     
      project43: { title: "Social Media Design For High Tech Academy ",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478525/worthit_zqhcnr.jpg" },
     
      project44: { title: "Social Media Design For High Tech Academy ",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478435/Ramadan-workspace_xqsu3w.jpg" },
     
      project45: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478419/Programming_nthmyu.jpg" },
     
      project46: { title: "Social Media Design For High Tech Academy ",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478170/dark_icnwej.jpg" },
     
      project47: { title: "Social Media Design For High Tech Academy ",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478433/teachers_vtx6s7.jpg" },
     
      project48: { title: "Social Media Design For High Tech Academy Courses",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478383/why-is-a-must_mqwgno.jpg" },
     
      project49: { title: "Social Media Design For High Tech Academy Cover",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751496978/cover_ahbowu.jpg" },
     
      project50: { title: "Social Media Design for E-teaching company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497312/lite_ic6i8g.jpg" },
     
      project51: { title: "Social Media Design for E-teaching company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497357/money_p7oedc.jpg" },
     
      project52: { title: "Social Media Design for E-teaching company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497313/any-time_iiqidg.jpg" },
     
      project53: { title: "Social Media Design for E-teaching company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497277/Dark_mdpbm3.png" },
     
      project54: { title: "Social Media Design for E-teaching company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497495/exam_itfpdh.png" },
     
      project55: { title: "Social Media Design for E-teaching company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497502/time_j4v9od.png" },
     
      project56: { title: "Social Media Design for E-teaching company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497322/effort_prr9xl.jpg" },
     
      project57: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493645/rose_ntcdgz.jpg" },
     
      project58: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493639/oud_uiagrk.jpg" },
     
      project59: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493735/herb-collection_h1klbu.jpg" },
     
      project60: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493758/hairtonic_zgtews.jpg" },
     
      project61: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493752/coconut_ovuzdt.jpg" },
     
      project62: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751480381/parsley_i2eafx.jpg" },
     
      project63: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493816/pomengranate_v8s6jg.png" },
     
      project64: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493815/lavender_gimggu.jpg" },
     
      project65: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493838/lemon-soap_eqfl2g.jpg" },
     
      project66: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751493853/sulfur_cl04ep.jpg" },
     
      project67: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751480258/hot-lemon_c4vvab.jpg" },
     
      project68: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751480364/olive_gqc9dd.jpg" },
     
      project69: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751480253/hibiscus_m9dfdd.jpg" },
     
      project70: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494030/olive-collection_ochgxv.jpg" },
     
      project71: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494031/repair_paas9n.jpg" },
     
      project72: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751480370/salt_fjsa1g.jpg" },
     
      project73: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751480306/mentha_zaveax.png" },
     
      project74: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494164/dips-collection_kr9xyw.jpg" },
     
      project75: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751480341/mosquito_cou81p.jpg" },
     
      project76: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494393/date_avnllp.jpg" },
     
      project77: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494460/camel_olcwet.jpg" },
     
      project78: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494487/dips-tammer_flke2d.png" },
     
      project79: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494487/hairtonic-collection_nzdmdr.jpg" },
     
      project80: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494450/honey_wukicd.jpg" },
     
      project81: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494685/lemon-soap2_l3x8t2.jpg" },
     
      project82: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494772/repair-small_fosxu5.jpg" },
     
      project83: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494779/dates-new_obcoul.jpg" },
     
      project84: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494785/oil-and-cream_hqqxzb.jpg" },
     
      project85: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751494774/jam-collection_ynfcxo.jpg" },
     
      project86: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495040/mud_f4aj87.jpg" },
     
      project87: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495065/sun-cream_qgaa1n.jpg" },
     
      project88: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495062/painkiller_zm1an0.jpg" },
     
      project89: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495042/hairtonic2_jpu6e8.jpg" },
     
      project90: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495002/olive-soap_ia0y9a.jpg" },
     
      project91: { title: "Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751497971/ramadan_sx1jmp.jpg" },
     
      project92: { title: "Social Media Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478467/200_krc94j.jpg" },
     
      project93: { title: "Social Media Design For High Tech Academy",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751478270/not-nessary_hgivil.jpg" },
     
      project94: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495232/sun-collection_gsiemj.jpg" },
     
      project95: { title: "Design for Osiwa company",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751495194/Frankincense_fz1kqz.jpg" },
     
      project96: { title: "Social Media Design for El King",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751479660/King-logo_rdwjyv.jpg" },
     
      project97: { title: "Social Media Design for El King",
                   image: "https://res.cloudinary.com/dx0wptkxr/image/upload/v1751479675/2nd-term_rar6he.jpg" },
    };

    document.querySelectorAll('.portfolio-design').forEach(design => {
      design.addEventListener('click', () => {
        const projectId = (design as HTMLElement).dataset.project;
        if (projectId && projectData[projectId]) {
          if (projectTitle) projectTitle.textContent = projectData[projectId].title;
          if (projectImage) projectImage.src = projectData[projectId].image;
          if (modal) modal.style.display = 'flex';
        }
      });
    });

    closeModal?.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });

    // === Mobile Menu ===
    const menu = document.querySelector('.menu');
    const menuBox = document.querySelector('.menuBox') as HTMLDivElement | null;
    const menuClose = document.querySelector('.close');
    const menuBoxText = document.querySelectorAll('.menuBoxText a h1');

    menu?.addEventListener('click', (e)=>{
      e.preventDefault
      if ( menuBox instanceof HTMLDivElement )  {
         menuBox.style.display = 'block'; 
        }
    })

    menuBoxText?.forEach (element =>{
      element.addEventListener ("click", ()=>{
        if (menuBox instanceof HTMLDivElement) 
          {
             menuBox.style.display = "none"
        }
      })
    })

    menuClose?.addEventListener('click', (x)=> {
      x.preventDefault
      if (menuBox instanceof HTMLDivElement) {
        menuBox.style.display = 'none' 
      }
    })
  }, []);

  return null;
}
