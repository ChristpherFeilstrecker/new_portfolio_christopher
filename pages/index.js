import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  let [skill, setSkill] = useState("")
  let [menu, setMenu] = useState(true)

  const skills = [
    {
      id: "js",
      titulo: "Javascript",
      descricao: "1 ano e meio",
      icone: "/images/javascripticon.png"
    },
    {
      id: "html",
      titulo: "HTML",
      descricao: "1 ano e meio",
      icone: "/images/htmlicon.png"
    },
    {
      id: "css",
      titulo: "CSS",
      descricao: "1 ano e meio",
      icone: "/images/cssicon.png"
    },
    {
      id: "node",
      titulo: "Node",
      descricao: "1 ano",
      icone: "/images/nodeicon.png"
    },
    {
      id: "next",
      titulo: "Next.js",
      descricao: "5 meses",
      icone: "/images/javascripticon.png"
    },
    {
      id: "react",
      titulo: "React",
      descricao: "1 ano e meio",
      icone: "/images/reacticon.png"
    },
    {
      id: "express.js", 
      titulo: "Express.js",
      descricao: "1 ano e meio",
      icone: "/images/expressicon.png"
    },
    {
      id: "typescript", 
      titulo: "Typescript",
      descricao: "1 ano",
      icone: "/images/typescripticon.png"
    },
    {
      id: "axios", 
      titulo: "Axios",
      descricao: "1 ano e meio",
      icone: "/images/axiosicon.png"
    },
    {
      id: "sql", 
      titulo: "SQL",
      descricao: "1 ano",
      icone: "/images/sqlicon.png"
    },
    {
      id: "figma", 
      titulo: "Figma",
      descricao: "6 meses",
      icone: "/images/figmaicon.png"
    },
    {
      id: "git", 
      titulo: "Git/Github",
      descricao: "1 ano e meio",
      icone: "/images/githubicon.png"
    },
    {
      id: "styledComponents", 
      titulo: "Styled-components",
      descricao: "1 ano e meio",
      icone: "/images/styledicon.png"
    },
    {
      id: "ssss", 
      titulo: "Sass",
      descricao: "6 meses",
      icone: "/images/scssicon.png"
    }
  ]

  const skillDetail = skills.map((skill) => {
                return <div  data-aos="fade-right" className={styles.skillContainer}>
        <div key={skill.id}  className={styles.skillIcon}>
          <Image className={styles.fotohabilities} src={skill.icone} width="150" height='180' alt={skill.id} />
        </div>
        <div>
          <strong>{skill.titulo}</strong>
          <div>{skill.descricao}</div>
        </div>
      </div>
            })


  return (
    <div className={styles.portfolio}>
      <script>
      </script>
      <Head>
        <title>Portfólio // Christopher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/rosto.png" />
      </Head>
      <header className={styles.navBar}>
        <div className={styles.logo}>
          <div>Christopher FS</div>

        </div>

        <div className={styles.lines} onClick={() => setMenu(!menu)}>
          <span className={menu ? styles.line1 : styles.line1Active}></span>
          <span className={menu ? styles.line2 : styles.line2Active}></span>
          <span className={menu ? styles.line3 : styles.line3Active}></span>
        </div>



        <nav className={menu ? styles.hideBtns : styles.btns}>
          <a onClick={() => setMenu(true)} className={menu ? styles.hideBtn : styles.btn} href='#inicio'>Início</a>
          <a onClick={() => setMenu(true)} className={menu ? styles.hideBtn : styles.btn} href='#about'>Quem Sou</a>
          <a onClick={() => setMenu(true)} className={menu ? styles.hideBtn : styles.btn} href='#projects'>Projetos</a>
          <a onClick={() => setMenu(true)} className={menu ? styles.hideBtn : styles.btn} href='#habilities'>Habilidades</a>
        </nav>


      </header>

      <main id="inicio" className={styles.main}>
        <div className={styles.boxLeft}>
          <div className={styles.name}>Oi, eu sou</div>
          <div className={styles.name}>
            Christopher <div className={styles.red}>Feilstrecker</div> da Silva.
            <div className={styles.line}></div>
          </div>
          <div className={styles.typingBox}>
            <div className={styles.typing}>Desenvolvedor Web Fullstack</div>

          </div>

          <div className={styles.btnsSocialMidia}>
            <a href="https://www.linkedin.com/in/christopher-feilstrecker/" target="_blank" rel="noreferrer"><div className={styles.btnSocialMidia}>Linkedin</div></a>
            <a href="https://github.com/ChristpherFeilstrecker" target="_blank" rel="noreferrer"><div className={styles.btnSocialMidia}>Github</div></a>
          </div>
        </div>

        <div className={styles.boxRigth}>
          <Image className={styles.rosto} src='/images/rosto.png' width="300" height='300' alt='icone rosto' />
        </div>

      </main>

      <about id="about" className={styles.aboutContainer}>

        <div data-aos="fade-right" className={styles.aboutboxLeft}>
          <Image className={styles.foto} src='/images/foto.jfif' width="350" height='350' alt='rosto' />

          <div className={styles.logo_2}>

            <div className={styles.logoStyle2_2}>
              <Image className={styles.icon} src='/images/javascripticon.png' width="50" height='50' alt='rosto' />
            </div>

            <div className={styles.logoStyle1_2}>
              <Image className={styles.icon} src='/images/htmlicon.png' width="50" height='50' alt='rosto' />
            </div>

            <div className={styles.logoStyle3_2}>
              <Image className={styles.icon} src='/images/cssicon.png' width="50" height='50' alt='rosto' />

            </div>
          </div>
        </div>

        <div data-aos="fade-left" className={styles.aboutboxRigth}>

          <div className={styles.title}><h1> Quem Sou </h1><h1 className={styles.red}> .</h1></div>

          <div>
            Meu nome é Christopher F. da Silva, sou apaixonado por tecnologia. Meu primeiro contato com programação foi em 2021 quando decidi mudar de carreira e um amigo me apresentou o desenvolvimento web.
          </div>
          <br />
          <div className={styles.textLabenu}>
            Iniciei meus estudos participando do bootcamp da  <a className={styles.btnLabenu} href="https://www.labenu.com.br/" target="_blank" rel="noreferrer">Labenu</a> para desenvolvedor web fullstack, com aulas diárias e projetos semanais, executando mais de 30 projetos durante todo curso.
          </div>

          <br />
          <div>
            Atualmente sou freelancer como desenvolvedor fullstack, criando desde o layout até a manutenção do site no servidor.
          </div>

        </div>
      </about>

      <projetcts id="projects" className={styles.projectsContainer}>
        <div className={styles.title}><h1> Projetos </h1><h1 className={styles.red}> .</h1></div>

        <div className={styles.projectContainerTop}>

          <div className={styles.projectBoxLeft}>
            <h2>Pokenext</h2>

            <div className={styles.projectText}>Site de lista de pokemons, feito em Next.js, Javascript e styled-components.</div>

            <div className={styles.projectBtnsContainer}>
              <h3 className={styles.projectBtnLeft}> <a href="https://github.com/ChristpherFeilstrecker/PokeNext" target="_blank" rel="noreferrer">Documentação</a></h3>
              <h3 className={styles.projectBtnLeft}> <a href="https://pokenext-7hlp.vercel.app/" target="_blank" rel="noreferrer">Visualizar projeto</a></h3>
            </div>

          </div>

          <div className={styles.projectBoxRight}>
            <h2>Labefood</h2>

            <div className={styles.projectText}>Projeto final do bootcamp da labenu, feito em React, Javascript e CSS.</div>

            <div className={styles.projectBtnsContainer}>
              <h3 className={styles.projectBtnRight}><a href="https://github.com/ChristpherFeilstrecker/Labe-food" target="_blank" rel="noreferrer">Documentação</a></h3>
              <h3 className={styles.projectBtnRight}> <a href="https://labe-food7.surge.sh/" target="_blank" rel="noreferrer">Visualizar projeto</a></h3>
            </div>
          </div>
        </div>

        <div className={styles.projectBoxBottom}>
          <h2>Aggostini</h2>

          <div className={styles.projectText}>Site para empresa de produtos e serviços hidráulicos, feito com React, Node e Javascript</div>

          <div className={styles.projectBtnsContainer}>
            <h3 className={styles.projectBtnBottom}><a href="https://github.com/ChristpherFeilstrecker/Aggostini" target="_blank" rel="noreferrer">Documentação</a></h3>
            <h3 className={styles.projectBtnBottom}> <a href="https://aggostini.com.br/" target="_blank" rel="noreferrer">Visualizar projeto</a></h3>
          </div>
        </div>

        <div></div>

        <div className={styles.boxbtnMore}>
          <a href="https://github.com/ChristpherFeilstrecker?tab=repositories" target="_blank" rel="noreferrer"><div className={styles.btnMore}>RepositóriosGithub</div></a>

        </div>
      </projetcts >

      <habilities id="habilities" className={styles.habilitiesContainer}>



        <div className={styles.title}><h1> Habilidades </h1><h1 className={styles.red}> .</h1></div>



        <div className={styles.habBoxContainer}>
          <div className={styles.habLeftBox}>

            {skillDetail}

          </div >

          <div data-aos="fade-left" className={styles.habRigthBox}>
          </div>

        </div>

      </habilities>

      <footer className={styles.footerContainer}>

        <div className={styles.footerCollumn}>
          <div className={styles.footerBox}>
            <Image className={styles.footericon} src='/images/emailicon.png' width="50" height='50' alt='reacticon' />
            christopher.feilstrecker@gmail.com
          </div>

          <div className={styles.footerBox}>
            <Image className={styles.footericon} src='/images/phoneicon.png' width="50" height='50' alt='reacticon' />
            +55 (51) 98947-7910
          </div>

          <div className={styles.footerBox}>
            <Image className={styles.footericon} src='/images/addressicon.png' width="50" height='50' alt='reacticon' />
            Rolante/RS
          </div>
        </div>

        <div className={styles.footerCollumnIcons}>
          <a href="https://github.com/ChristpherFeilstrecker" target="_blank" rel="noreferrer">
            <Image className={styles.footericon} src='/images/githubicon.png' width="50" height='50' alt='reacticon' />
          </a>
          <a href="https://www.linkedin.com/in/christopher-feilstrecker/" target="_blank" rel="noreferrer">
            <Image className={styles.footericon} src='/images/linkedinicon.png' width="50" height='50' alt='reacticon' />

          </a>

        </div>


      </footer>
    </div>
  )
}
