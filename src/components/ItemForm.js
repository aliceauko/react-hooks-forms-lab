import React , {useState}from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}){
  const [newIte, setNewIte] = useState("")
  const [category, setCategory] = useState("Produce")

   function submitItem(e){
    e.preventDefault()
    const newItem ={
    id:uuid(),
    newIte,
    category
   }
   onItemFormSubmit(newItem)
  }
  return (
    <form className="NewItem" onSubmit={submitItem}>
      <label>
        Name:
        <input type="text" name="name" onChange ={e =>setNewIte(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" onChange ={e=>setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
