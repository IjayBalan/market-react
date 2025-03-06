import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletItems, newProducts ,vegDeletItems,newVegProducts} from "../Redux/Slice";

let AdminPage = () => {
    let state = useSelector((p) => p.data);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [Name, setName] = useState("");
    let [Price, setPrice] = useState("");
    let [Image, setImage] = useState("");
    let [Type,setType] = useState("")
    let [editIndex, setEditIndex] = useState(null);
    let homepage = () => {
        navigate('/');
    };

    let favpage = () => {
        navigate('/FavPage');
    };

    let handle = (e) => {
        if (e.target.name === "Name") {
            setName(e.target.value);
        } else if (e.target.name === "Price") {
            setPrice(e.target.value);
        } else if (e.target.name === "Image") {
            setImage(e.target.value);
        } else if(e.target.name==="Type"){
            setType(e.target.value)
        }
    };

    let edit = (a, index) => {
        setImage(a.Image);
        setName(a.Name);
        setPrice(a.Price);
        setType(a.Type)
        setEditIndex(index);
    };

    let delt = (index) => {
        let delet = state.Items.filter((a, b) => b !== index);
        dispatch(deletItems(delet));
    };
    let vegdelt=(index)=>{
        let vegDelet=state.vegItems.filter((a,b)=>b!==index)
        dispatch(vegDeletItems(vegDelet))
    }

    let update = () => {
        let obj = { Name, Price, Image, Type, Kg: 1, IsFav: false, IsCart: false, Count: 1, Visible: false };
        let newItems = [...state.Items];
        let vegnewItems = [...state.vegItems];
    
        if (editIndex === null) {
            if (obj.Type === 'vegetable') {
                vegnewItems.push(obj);
            } else {
                newItems.push(obj);
            }
        } else {
            if (obj.Type === 'vegetable') {
                vegnewItems[editIndex] = obj;
            } else {
                newItems[editIndex] = obj;
            }
            setEditIndex(null);
        }
    
        dispatch(newProducts(newItems));
        dispatch(newVegProducts(vegnewItems));
        setName("");
        setPrice("");
        setImage("");
        setType("");
    };
    

    console.log(state.Items);

    return (
        <div>
            <div style={{ backgroundColor: "lightblue",width:"100%"}}>
                <nav >
                    <div className="d-flex justify-content-center">
                        <h4 className="col-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3 m-2 p-2 d-flex justify-content-center  align-items-center" style={{fontFamily:"monospace",fontWeight:"bold",color:"green",backgroundColor:"lightyellow"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                            </svg>
                        Market</h4>
                        <p className="col-3 m-3 d-flex justify-content-center  align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16" onClick={homepage}>
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
                            </svg>
                        </p>
                        <p className="col-3 m-3 d-flex justify-content-center  align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16" onClick={favpage}>
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </p>
                    </div>
                </nav>
            </div>
            <div className="row m-5 p-3 mb-0">
                <div className="m-2"><label className="col-4 col-md-1 col-lg-1 col-xl-1">Name:</label><input className="col-8 col-md-5 col-lg-3 col-xl-2 mt-1" value={Name} name="Name" onChange={handle}></input></div>
                <div className="m-2"><label className="col-4 col-md-1 col-lg-1 col-xl-1">Price:</label><input className="col-8 col-md-5 col-lg-3 col-xl-2" value={Price} name="Price" onChange={handle}></input></div>
                <div className="m-2"><label className="col-4 col-md-1 col-lg-1 col-xl-1">Image:</label><input className="col-8 col-md-5 col-lg-3 col-xl-2" value={Image} name="Image" onChange={handle}></input></div>
                <div className="m-2"><label className="col-4 col-md-1 col-lg-1 col-xl-1">Type:</label><input className="col-8 col-md-5 col-lg-3 col-xl-2" value={Type} name="Type" onChange={handle}></input></div>
                <button className="btn btn-success col-4 col-md-2 col-lg-1 col-xl-1 m-3 mb-0" onClick={update}>Save</button>
                <p className="col-12" style={{color:"lightgray"}}>(NOTE:"When you click the save button, it will add new products and update existing ones in the list.")</p>
            </div>
            <div className="container">
            <div className="row">
                {state.Items.map((a, b) => {
                    return (
                        <div className="col-10 col-md-5 col-lg-3 col-xl-3 col-xxl-3 m-4 m-md-4 m-lg-3 m-xl-3 " style={{ backgroundColor: "lightYellow", border: "1px solid", height: "100%" }} key={b}>
                            <div style={{ border: "1px solid", width: "70%", height: "40%", marginLeft: "15%", marginTop: "7%" }}>
                                <img src={a.Image} style={{ width: "100%", height: "100%" }} alt={a.Name} />
                            </div>
                            <p style={{ display: "flex", marginBottom: "1px", marginLeft: "50px", marginTop: "10px" }}>Name:<h5>{a.Name}</h5></p>
                            <p style={{ display: "flex", marginBottom: "1px", marginLeft: "50px" }}>Kg:<h5>{a.Kg}</h5></p>
                            <p style={{ display: "flex", marginBottom: "1px", marginLeft: "50px" }}>Price:<h5>{a.Price}</h5></p>
                            <button className="btn btn-primary" style={{ marginLeft: "20%" }} onClick={() => edit(a, b)}>Edit</button>
                            <button className="btn btn-danger m-3" onClick={() => delt(b)}>Delete</button>
                        </div>
                    );
                })}
            </div>
            </div>

            <div className="container">
            <div className="row">
                {state.vegItems.map((a, b) => {
                    return (
                        <div className="col-10 col-md-5 col-lg-3 col-xl-3 col-xxl-3 m-4 m-md-4 m-lg-3 m-xl-3 " style={{ backgroundColor: "lightYellow", border: "1px solid", height: "100%" }} key={b}>
                            <div style={{ border: "1px solid", width: "70%", height: "40%", marginLeft: "15%", marginTop: "7%" }}>
                                <img src={a.Image} style={{ width: "100%", height: "100%" }} alt={a.Name} />
                            </div>
                            <p style={{ display: "flex", marginBottom: "1px", marginLeft: "50px", marginTop: "10px" }}>Name:<h5>{a.Name}</h5></p>
                            <p style={{ display: "flex", marginBottom: "1px", marginLeft: "50px" }}>Kg:<h5>{a.Kg}</h5></p>
                            <p style={{ display: "flex", marginBottom: "1px", marginLeft: "50px" }}>Price:<h5>{a.Price}</h5></p>
                            <button className="btn btn-primary" style={{ marginLeft: "20%" }} onClick={() => edit(a, b)}>Edit</button>
                            <button className="btn btn-danger m-3" onClick={() => vegdelt(b)}>Delete</button>
                        </div>
                    );
                })}
            </div>
            </div>
        </div>
    );
};

export default AdminPage;
