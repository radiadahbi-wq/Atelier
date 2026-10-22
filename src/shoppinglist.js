
import { plantList } from "./plantlist";
import "./shoppinglist.css";

function ShoppingList() {
const categories = plantList.reduce(
(acc, plant) =>
acc.includes(plant.category)
? acc
: acc.concat(plant.category),
[]
);

return (
    <div className="shopping-list">

        <h2>Catégories</h2>

        <ul>
            {categories.map((category) => (
                <li key={category}>
                    {category}
                </li>
            ))}
        </ul>

        <h2>Nos plantes 🌿</h2>

        <ul className="plant-list">

            {plantList.map((plant) => (
                <li
                    className="plant-card"
                    key={plant.id}
                >
                    <h3>{plant.name}</h3>

                    <p>Catégorie : {plant.category}</p>

                    {plant.isBestSale && (
                        <p>🔥 Best-seller</p>
                    )}

                    {plant.isSpecialOffer && (
                        <div className="lmj-sales">
                            Soldes
                        </div>
                    )}
                </li>
            ))}

        </ul>

    </div>
);

}

export default ShoppingList;