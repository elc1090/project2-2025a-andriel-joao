import { useState } from "react";
import { findExercisesByName, getNameByLanguage } from "../functions/APIFunctions";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import SearchIcon from '@mui/icons-material/Search';

export const ExerciseSearch = ({ onSelected }) => {

    const [exercises, setExercises] = useState([]);
    const [language, setLanguage] = useState(2); //ingles
    const [filteringName, setFilteringName] = useState("");
    const [loading, setLoading] = useState(false)

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        useCSS: true
      };

    const handleSearch = async (event) => {
        setLoading(true);
        setExercises(await findExercisesByName(filteringName, 2));
        setLoading(false);
    };

    const selectedExercise = (selectedExercise) => {
        setExercises([]);
        onSelected(selectedExercise);
    }

    return (
        <Box >
            <Box sx={{display: "flex"}}>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        id="nome-exercicio"
                        label="Nome do exercício"
                        variant="outlined"
                        value={filteringName}
                        onChange={(e) => setFilteringName(e.target.value)}
                    />
                </Box>
                <Button
                    variant="contained"
                    onClick={handleSearch}
                    disabled={loading}
                    endIcon={<SearchIcon />}
                    color="primary"
                    sx={{ m: 1 }}
                >
                    {loading ? "Buscando..." : "Buscar"}
                </Button>
            </Box>
            
            <div className="exercise-options">
                {loading && <>
                    <Skeleton sx={{height: "500px", width: "500px"}}/>
                    <Skeleton sx={{height: "500px", width: "500px"}}/>
                    <Skeleton sx={{height: "500px", width: "500px"}}/>
                </>

                }
                {!loading &&
                    <Slider {...settings}>
                        {exercises.map((exercise) => (
                        <Card
                            key={exercise.id}
                            sx={{ maxWidth: 300, margin: '10px' }}
                            onClick={() => selectedExercise(exercise)}
                        >
                        <CardActionArea>
                            {exercise.images.length > 0 ? (
                            <CardMedia
                                component="img"
                                height="140"
                                image={exercise.images[0].image}
                                alt={getNameByLanguage(exercise, language)}
                            />
                            ) : (
                            <CardContent sx={{height: "8em"}}>
                                <Typography variant="body1" sx={{ color: 'text.secondary', height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    Exercício sem imagem
                                </Typography>
                            </CardContent>
                            )}
                            <CardContent sx={{height: "15em"}}>
                                <Typography gutterBottom variant="body1" component="div">
                                    {getNameByLanguage(exercise, language)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Card>
                    ))}
                    </Slider>
                }
            </div>
        </Box>
    )
}

