import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import patoIcon from '../assets/pato-gym.png';

function PresentationText (){
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
                    O que oferecemos
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

            <Typography variant="h6" component="h3" sx={{ fontStyle: 'italic', mt: 3 ,  fontFamily: 'Racing Sans One, Arial, sans-serif' }}>
                WorkOutOf<span style={{color: "#FFE500"}}>Time</span> — Para marombeiros sem <span style={{color: "#FFE500"}}>tempo.</span>
            </Typography>
        </Box>
    );
};
export default PresentationText;