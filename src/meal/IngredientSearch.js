import { useState } from "react"
import { getFoodByName } from "../functions/APIFunctions";
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

export const IngredientSearch = ({onSelect}) => {
    
    const [ingredientOptions, setIngredientOptions] = useState([]); 
    const [filteringName, setFilteringName] = useState(null);
    const [loading, setLoading] = useState(false);

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        useCSS: true
    };

    const searchIngredients = async () => {
        setLoading(true);
        setIngredientOptions(await getFoodByName(filteringName));
        setLoading(false);
    }

    const selectIngredient = (ingredient) => {
        setIngredientOptions([]);
        onSelect(ingredient);
    }

    return (
        <article>
            <Box sx={{display: "flex"}}>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField
                        id="nome-exercicio"
                        label="Nome do ingrediente"
                        variant="outlined"
                        value={filteringName}
                        onChange={(e) => setFilteringName(e.target.value)}
                    />
                </Box>
                <Button
                    variant="contained"
                    onClick={searchIngredients}
                    disabled={loading}
                    endIcon={<SearchIcon />}
                    color="primary"
                    sx={{ m: 1 }}
                >
                    {loading ? "Buscando..." : "Buscar"}
                </Button>
            </Box>
            <section>
            </section>
            <section>
                {loading && (
                <>
                    <Skeleton sx={{ height: "500px", width: "500px" }} />
                    <Skeleton sx={{ height: "500px", width: "500px" }} />
                    <Skeleton sx={{ height: "500px", width: "500px" }} />
                </>
                )}

                {!loading && ingredientOptions.length > 0 && (
                <Slider {...settings}>
                    {ingredientOptions.map((ingredientOption) => (
                    <Card
                        key={ingredientOption.code}
                        sx={{ maxWidth: 300, margin: '10px' }}
                        onClick={() => selectIngredient(ingredientOption)}
                    >
                        <CardActionArea>
                            {ingredientOption.image_front_url ? (
                                <CardMedia
                                component="img"
                                height="350"
                                image={ingredientOption.image_front_url}
                                alt={ingredientOption.product_name}
                                />
                            ) : (
                            <CardContent sx={{ height: "10em" }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                    color: 'text.secondary',
                                    height: 140,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    }}
                                >
                                    Produto sem imagem
                                </Typography>
                        </CardContent>
                        )}
                        <CardContent sx={{ height: "15em" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {ingredientOption.product_name || "Nome não encontrado"}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{mt: 3}}>
                                {ingredientOption.brands || "Marca desconhecida"}
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                    ))}
                </Slider>
                )}
            </section>
        </article>
    )
}