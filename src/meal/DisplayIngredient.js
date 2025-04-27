export const DisplayIngredient = ({ingredient}) => {
    return (
        <section>
            {ingredient.ingredient.product_name} - {ingredient.quantity}
        </section>
    )
}