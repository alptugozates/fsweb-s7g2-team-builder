import { useState } from "react";
import List from "./components/List";

const Form = () => {
    const [array, setArray] = useState([]);
    const [formData, setFormData] = useState({
        id: 0,
        isim: "",
        mail: "",
        rol: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log("event:", e)
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        const oldNumber = array.find((item) => item.id === formData.id);
        if (oldNumber === undefined) {
            formData.id = array.length === 0 ? 1 : (array[array.length - 1].id + 1);
            setArray([...array, formData]);

        } else {
            const index = array.indexOf(oldNumber);
            oldNumber.isim = formData.isim;
            oldNumber.mail = formData.mail;
            oldNumber.rol = formData.rol;

            array[index] = oldNumber;

        }

        setFormData({
            id: null,
            isim: "",
            mail: "",
            rol: "",
        })
    }




    return (
        <div>
            <form onSubmit={(e) => { handleSumbit(e) }}>
                <label htmlFor="id">
                    <input onChange={handleChange} name="id" value={formData.id} type="text" hidden />
                </label>
                <br />
                <label htmlFor="isim">İsim:
                    <input onChange={handleChange} name="isim" value={formData.isim} type="text" />
                </label>
                <br />
                <label htmlFor="mail">E-mail:
                    <input onChange={handleChange} name="mail" value={formData.mail} type="email" />
                </label>
                <br />
                <label htmlFor="rol">Rol:
                    <input onChange={handleChange} name="rol" value={formData.rol} type="text" />
                </label>
                <br />

                <button type="submit">Ekle</button>
            </form>
            <List array={array} setFormData={setFormData} setArray={setArray} />

        </div >
    )


}

export default Form;