import React, { useRef, useState, useEffect } from "react";
function Forms() {
    const userRef = useRef();
    const [formsData, setFormData] = useState({
        firstName: "",
        lastName: "",
        telephone: "",
    });
    const [nameArray, setName] = useState([])
    useEffect(() => {
        userRef.current.focus();
    }, []);
    function changed(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formsData);
        setName(oldArray => [...oldArray, formsData])
        nameArray.sort()
        console.log(nameArray)
    }
    function onHeaderClick(e) {
        setName([...nameArray].sort((a, b) => a.firstName.localeCompare(b.firstName)));
        console.log(nameArray)
    }
    return (<div className="m-10">
        <form onSubmit={handleSubmit}>
            <label>Nom</label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="FirstName"
                ref={userRef}
                onChange={changed}
                name="firstName"
                value={formsData.firstName}
            />
            <br />
            <label>prenom </label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="LastName"
                onChange={changed}
                name="lastName"
                value={formsData.lastName}
            /><br />
            <label>Telephone </label>
            <input className=" border border-black m-4 p-3 rounded "
                type="text"
                placeholder="email"
                onChange={changed}
                name="telephone"
                value={formsData.telephone}
            />
            <br />
            <button type="Submit" className="border ml-80 m-4 p-1  px-3  bg-blue-600  text-white rounded-md " > Submit</button>
        </form>
        <br />
        <table className="border-collapse border border-slate-400  ... ">
            <thead>
                <tr >
                    <th className="border border-slate-400 px-10 p-2">
                        <h3>Prenom</h3>
                    </th>
                    <th className="border border-slate-400  px-10 p-2">
                        <h3>Nom</h3>
                    </th>
                    <th className="border border-slate-400  px-10 p-2">
                        <h3>Telephone</h3>
                    </th>
                </tr>
            </thead>
            <tbody>
                {nameArray.map(item => {
                    return (
                        <tr>
                            <td className="border border-slate-400  px-10 p-2"> {item.firstName}</td>
                            <td className="border border-slate-400  px-10 p-2">{item.lastName}</td>
                            <td className="border border-slate-400  px-10 p-2">{item.telephone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

        <button onClick={onHeaderClick} className="border ml-80 m-4 p-1  px-3  bg-green-600  text-white rounded-md "  > Order</button>
    </div>);
}


export default Forms