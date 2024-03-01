import {useState} from "react";
import {recipes} from "../data/recipes";

export const Gallery = () => {
    const [recipeIndex, setRecipeIndex] = useState(0);
    const handleNext = () => {
        const updateValue = recipeIndex >= recipes.length - 1 ? 0 : recipeIndex + 1;
        setRecipeIndex(updateValue);
    }
    const handlePrev = () => {
        const updateValue = recipeIndex <= 0 ? recipes.length - 1 : recipeIndex - 1;
        setRecipeIndex(updateValue)
    }
    return (
        <>
            <div style={{
                display:'grid',
                gridTemplateColumns:'1fr 1fr',
                margin:'auto'
            }}>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    alignItems: 'center',
                    justifyItems: 'center',
                    margin: '10em',
                }}>
                    <button className='nav-button' onClick={handlePrev}>{'<'}</button>
                    <img src={recipes[recipeIndex].image}
                         style={{
                             width: '500px',
                             height: '500px',
                             objectFit: 'cover',
                             display: 'block',
                             margin: 'auto',
                             borderRadius: '50%',
                             transition: 'transform 0.5s ease',
                         }} alt='recipe'/>
                    <button className='nav-button' onClick={handleNext}>{'>'}</button>
                </div>
                <div style={{
                    margin:'auto',
                    justifySelf:'start'
                }}>
                    <h2>{recipes[recipeIndex].title}</h2>
                    <h4>Ingredients:</h4>
                    {recipes[recipeIndex].ingredients.map((ingredient, index) => {
                        return <li key={index}>{ingredient}</li>
                    })}
                </div>
            </div>
        </>
    )
}
