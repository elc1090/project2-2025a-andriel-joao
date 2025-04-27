export const DisplayMeal = ({meal}) => {
    return (
        <section>
            {meal.name} - {meal.preparationTime}
        </section>
    )
}