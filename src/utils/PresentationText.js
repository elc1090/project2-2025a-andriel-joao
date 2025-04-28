import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import patoIcon from '../assets/pato-gym.png';
import Personas from './CardPersonas'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FitScreen } from '@mui/icons-material';

function PresentationText (){
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        useCSS: true
    };

    const personas = [
        {
            name: "Lucas Lima",
            opinion: "Com a minha rotina de freelancer, sempre foi difícil organizar os treinos e alimentação. O WorkOutOfTime me ajudou a planejar treinos rápidos e ajustar minha alimentação de forma prática e eficiente!",
            image: "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png" // Você pode passar a URL ou deixar vazio
        },
        {
            name: "Mariana Martins",
            opinion: "Minha rotina de advogada sempre foi um desafio para conciliar treinos e alimentação. O WorkOutOfTime me ajudou a ter treinos rápidos e receitas saudáveis, tudo sem perder tempo.",
            image: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png"
        },
        {
            name: "Felipe Ferreira",
            opinion: "Como desenvolvedor, eu ficava o dia todo na frente do computador e não conseguia manter uma rotina de treino e alimentação. O WorkOutOfTime facilitou a organização de treinos rápidos e refeições práticas.",
            image: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png"
        },
        {
            name: "Beatriz Barbosa",
            opinion: "Com a agenda apertada no marketing, eu nunca tinha tempo para treinar. O WorkOutOfTime me ajudou a encaixar treinos rápidos e receitas práticas, o que me permitiu manter a saúde em dia.",
            image: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png"
        },
        {
            name: "Carlos Costa",
            opinion: "Eu sou personal trainer e o WorkOutOfTime ajudou a organizar os treinos dos meus clientes de forma eficiente, sem precisar de muita perda de tempo. Agora, consigo personalizar planos em minutos!",
            image: "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png"
        },
        {
            name: "Sofia Souza",
            opinion: "Com a rotina intensa de minha empresa, sempre foi difícil conciliar minha alimentação e o treino. O WorkOutOfTime me oferece planos rápidos e completos, sem sair do meu foco de trabalho.",
            image: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png"
        },
        {
            name: "Ricardo Rocha",
            opinion: "Trabalho em turnos e sempre era difícil manter uma alimentação saudável. O WorkOutOfTime me permite ter receitas rápidas e treinos curtos, sem perder a qualidade do resultado.",
            image: "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png"
        }
    ];
    
    return (
        <Box component="section" sx={{ paddingInline: "10%", textAlign: 'justify', marginTop: "30px" }}>
            <div className='HeaderContainer' style={{display: 'flex'}}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                    Quem somos?
                </Typography>
                <img src={patoIcon} style={{height: '53px', width: '44px', paddingLeft: '10px'}} alt='Icone de um pato vestido com trajes esportivos em pixel art'/>
            </div>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '32px 0' // espaçamento vertical
            }} />

            <Typography variant='body1'>
                <strong>WorkOutOfTime</strong> é a solução perfeita para quem leva a vida corrida, mas não quer abrir mão de treinar e se alimentar bem. Nosso site foi pensado especialmente para <strong>marombeiros sem tempo</strong>, oferecendo uma maneira rápida e prática de criar treinos personalizados e receitas saudáveis adaptadas à sua rotina.
            </Typography>

            <Typography variant='body1'>
                Com <strong>2 anos de atuação</strong> no ramo de saúde, fitness e tecnologia, nossa equipe une especialistas apaixonados por bem-estar e eficiência. Trabalhamos para entregar uma plataforma intuitiva, capaz de atender desde iniciantes até atletas mais experientes.
            </Typography>

            <Typography variant='body1'>
                Hoje, contamos com mais de <strong>5.000 usuários ativos</strong>, a maioria entre <strong>18 e 35 anos</strong>, que confiam no WorkOutOfTime para organizar seus treinos e refeições sem perder preciosos minutos do dia.
            </Typography>

            <div className='HeaderContainer' style={{display: 'flex', marginTop: "20px" }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif'}}>
                    O que oferecemos?
                </Typography>
                <img src='https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_ssOP5i1GVAAMAi-BjRz6sfHGdv2qFTmdx6hIB-3D0fHMQQYK0JV_rh8p98p91LSmF0n1GIWVvcZ7ie_U0I4oojtujhubPfVQMrvOR4-lKjbMq8jDh87wkFgClI_c0vCIqd_-cAFVEY8yTX63bUPWm80o4Ax_O4QLwbUayhEw=s0-d' style={{width: "55px", height: "80px", paddingLeft: '10px'}}/>
            </div>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '32px 0' // espaçamento vertical
            }} />

            <Box component="ul" sx={{ pl: 4 }}>
                <Typography component="li">
                    Modelar treinos sob medida conforme seus objetivos (hipertrofia, definição, resistência, etc.);
                </Typography>
                <Typography component="li">
                    Criar e salvar receitas fitness práticas e nutritivas;
                </Typography>
                <Typography component="li">
                    Visualizar e ajustar sua semana de treinos e alimentação com poucos cliques;
                </Typography>
                <Typography component="li">
                    Compartilhar suas rotinas e receitas favoritas com outros marombeiros.
                </Typography>
            </Box>

            <Typography paragraph>
                Nossa missão é simples: <strong>te ajudar a ser constante, mesmo com pouco tempo</strong>. Afinal, saúde e performance não podem esperar.
            </Typography>

            <div className='HeaderContainer' style={{display: 'flex', marginTop: "20px" }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontFamily: 'Racing Sans One, Arial, sans-serif'}}>
                    O que nossos usuários dizem?
                </Typography>
                <img src='https://habboxwiki.com/wiki/images/b/be/VPV22.png' style={{width: "48px", height: "50px", paddingLeft: '10px'}}/>
            </div>
            <hr style={{
                border: 'none',
                height: '1px',
                backgroundColor: '#e0e0e0', // cinza bem claro
                margin: '32px 0' // espaçamento vertical
            }} />
            <Slider  {...settings} style={{ }}>
                {personas.map((persona, index) => (
                    <Personas 
                        key={index}
                        name={persona.name}
                        opinion={persona.opinion}
                        image={persona.image}
                    />
                ))}
            </Slider>



            <Typography variant="h6" component="h3" sx={{ fontStyle: 'italic', mt: 3 ,  fontFamily: 'Racing Sans One, Arial, sans-serif', marginBottom: 5}}>
                WorkOutOf<span style={{color: "#FFE500"}}>Time</span> — Para marombeiros sem <span style={{color: "#FFE500"}}>tempo.</span>
            </Typography>
        </Box>
    );
};
export default PresentationText;