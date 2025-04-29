import { useState } from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'; 
import SaveIcon from '@mui/icons-material/Save';

export const IngredientEditor = ({ingredient, onSave}) => {

    const [quantity, setQuantity] = useState(null);

    const getServingQuantity = () => {
        if (ingredient.serving_quantity != undefined) {
            return ingredient.serving_quantity;
        }
        const match = ingredient.serving_size.match(/^([\d.]+)([a-zA-Z]+)$/);
        if (match) {
            const value = parseFloat(match[1]);
            const unit = match[2].toLowerCase();
            switch (unit) {
                case "g", "gm":
                return value;
                case "kg":
                return value * 1000;
                case "mg":
                return value / 1000;
                case "l":
                return value * 1000; // Assuming 1L = 1000g for water-like density
                case "ml":
                return value; // Assuming 1ml = 1g for water-like density
                default:
                return null; // Unknown unit
            }
        }
        return null;
    }

    const saveIngredient = () => {
        const newIngredient = {
            quantity: quantity,
            ingredient: ingredient,
            protein: getProteins(),
            energy: getKcal(),
        }
        onSave(newIngredient);
    }

    const getProteins = () => {
        return ((ingredient.nutriments.proteins / getServingQuantity()) * quantity).toFixed(0);
    }

    const getKcal = () => {
        return ((ingredient.nutriments["energy-kcal"] / getServingQuantity()) * quantity).toFixed(0);
    }

    return (
        <Box  sx={{backgroundColor: '#F8F8FF', height: 220, mb: 5}}>
            <Box>
                <Box sx={{ width: "100%",height: 50, backgroundColor: "#F8F8FF"}}><br/>
                    <Typography variant="h5" component="h1" gutterBottom sx={{marginInline: 3}}>
                        Adicionar: {ingredient.product_name}
                    </Typography>
                </Box>
                <Box sx={{display: "flex", mt: 3}}>
                    <TextField
                        label="Quantidade (g)"
                        variant="outlined"
                        onChange={(e) => setQuantity(e.target.value)}
                        sx={{marginInline: 3, mb: 2}}
                    />

                    <Box sx={{ display: 'flex', flexDirection: 'column', marginInline: 2 }}>
                        <Typography variant="body1">Calorias: {getKcal()} kcal</Typography>
                        <Typography variant="body1">Proteínas: {getProteins()} g</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{textAlign: "right"}}>
                <Button
                    variant="contained"
                    onClick={saveIngredient}
                    color="warning"
                    endIcon={<AddIcon/>}
                    sx={{marginRight: 9.5, height: 50, width: 200}}
                >
                    Adicionar 
                </Button>
                <br/>
            </Box>
        </Box>
    )
}