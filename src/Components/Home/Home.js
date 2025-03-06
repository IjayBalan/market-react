import React from "react";
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { favUpdate, addUpdt, minusProducts, addProducts,vegfavUpdate,vegaddUpdt,vegminusProducts,vegaddProducts} from "../Redux/Slice";
import { useNavigate } from "react-router-dom";

let Home = () => {
    let state = useSelector((p) => p.data);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let change = (index) => {
        const addItems = state.Items.map((a, b) => {
            return b === index ? { ...a, Visible: !a.Visible } : a;
        });
        dispatch(addUpdt(addItems));
    };
    let vegChange=(index)=>{
        let vegaddItems=state.vegItems.map((a,b)=>{
            return b===index ?{...a,Visible:!a.Visible}:a
        })
        dispatch(vegaddUpdt(vegaddItems))
    }
    
    let minus = (index) => {
        if (state.Items[index].Count == 1) {
            change(index)
        }
        else{
            
            const subPrdts = state.Items.map((a, b) => {
                return b === index ? { ...a, Count: a.Count - 1 } : a;
            });
            dispatch(minusProducts(subPrdts));
        }
    };
    let vegminus=(index)=>{
        if(state.vegItems[index].Count ==1){
            vegChange(index)
        }
        else{
            let vegsubPrdts =state.vegItems.map((a,b)=>{
                return b === index ?{...a,Count:a.Count - 1}:a
            })
            dispatch(vegminusProducts(vegsubPrdts))
        }
    }

    let add = (index) => {
        if (state.Items[index].Count < 10) {
            const addPrdts = state.Items.map((a, b) => {
                return b === index ? { ...a, Count: a.Count + 1 } : a;
            });
            dispatch(addProducts(addPrdts));
        } else {
            alert("Maximum limit reached");
        }
    };
    let vegadd=(index)=>{
        if(state.vegItems[index].Count < 10){
            let vegaddPdts =state.vegItems.map((a,b)=>{
                return b===index?{...a,Count:a.Count+1}:a
            })
            dispatch(vegaddProducts(vegaddPdts))
        }
        else{
            alert("Maximum limit reached")
        }
    }

    let favItem = (index) => {
        const updatedItems = state.Items.map((a, b) => {
            return b === index ? { ...a, IsFav: !a.IsFav } : a;
        });
        dispatch(favUpdate(updatedItems));
    };

    let vegfavItem=(index)=>{
        let vegupdatedItems =state.vegItems.map((a,b)=>{
            return b===index?{...a,IsFav:!a.IsFav}:a
        })
        dispatch(vegfavUpdate(vegupdatedItems))
    }
    let favoritePage = () => {
        navigate('/FavPage');
    };

    let adminPage = () => {
        navigate('/AdminPage');
    };

    let fruits= state.Items.filter((a,b)=>a.Type==="fruit")
    let vegetables=state.vegItems.filter((a,b)=>a.Type==="vegetable")
    return (
        <div>
            <div style={{ backgroundColor: "lightblue",width:"100%" }}>
                <nav>
                    <div className="d-flex justify-content-center">
                        <h4 className="col-4 col-md-4 col-lg-3 col-xl-3 col-xxl-3 m-2 p-2 d-flex justify-content-center  align-items-center" style={{fontFamily:"monospace",fontWeight:"bold",color:"green",backgroundColor:"lightyellow"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                            </svg>
                        Market</h4>
                        <p className="col-3 m-3 d-flex justify-content-center  align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16" onClick={favoritePage}>
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                            </svg>
                        </p>
                        <p className="col-2 m-3 d-flex justify-content-center  align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16" onClick={adminPage}>
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                        </p>
                    </div>
                </nav>
            </div>
            <div className="row d-flex justify-content-center align-items-center" style={{width:"100%"}}>
                <h5 className="col-5 col-md-3 col-lg-2 col-xl-1 col-xxl-1 text-center m-2" style={{backgroundColor:"green",color:"white"}}>Fruits</h5>
            </div>
            <div className="container">
            <div className="row d-flex justify-content-center" style={{width:"100%"}}>
                {fruits.map((a, b) =>(
                    <div className="col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-3 m-3 " style={{ backgroundColor: "lightYellow", border: "1px solid", height: "100%" }} key={b}>
                        <div style={{ border: "1px solid", width: "70%", height: "40%", marginLeft: "15%", marginTop: "7%" }}>
                            <img src={a.Image} style={{ width: "100%", height: "100%" }} alt={a.Name} />
                        </div>
                        <p className="d-flex justify-content-start ms-4 " style={{ display: "flex", marginBottom: "1px", marginTop: "10px" }}>Name:<h5>{a.Name}</h5></p>
                        <p className="d-flex justify-content-start ms-4" style={{ display: "flex", marginBottom: "1px" }}>Kg:<h5>{a.Kg}</h5></p>
                        <p className="d-flex  justify-content-start ms-4" style={{ display: "flex", marginBottom: "1px" }}>Price:<h5>{a.Price}</h5></p>
                        <hr style={{ border: "1px solid" }} />
                        <div className="d-flex justify-content-between">
                            <p>
                                {a.IsFav ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="red" className="bi bi-bookmark-fill" viewBox="0 0 16 16" onClick={() => favItem(b)}>
                                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16" onClick={() => favItem(b)}>
                                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                    </svg>}
                            </p>
                            {a.Visible ?
                                <div style={{ display: 'flex', marginBottom: "2%" }}>
                                    <button className="btn btn-outline-danger" onClick={() => minus(b)}>-</button>
                                    <button className="btn btn-outline-danger">{a.Count}</button>
                                    <button className="btn btn-outline-danger" onClick={() => add(b)}>+</button>
                                </div>
                                :
                                <button className="btn btn-danger" style={{ marginLeft: "50%", marginBottom: "2%" }} onClick={() => change(b)}>Add</button>
                            }
                        </div>
                    </div> 
                ))}
            </div>
            </div>


            <div className="row d-flex justify-content-center align-items-center" style={{width:"100%"}}>
                <h5 className="col-5 col-md-3 col-lg-2 col-xl-1 col-xxl-1 text-center m-2" style={{backgroundColor:"green",color:"white"}}>Vegetables</h5>
            </div>
            <div className="container">
            <div className="row d-flex justify-content-center" style={{width:"100%"}}>
                {vegetables.map((a, b) =>(
                    <div className="col-8 col-md-5 col-lg-3 col-xl-3 col-xxl-3 m-3 " style={{ backgroundColor: "lightYellow", border: "1px solid", height: "100%" }} key={b}>
                        <div style={{ border: "1px solid", width: "70%", height: "40%", marginLeft: "15%", marginTop: "7%" }}>
                            <img src={a.Image} style={{ width: "100%", height: "100%" }} alt={a.Name} />
                        </div>
                        <p className="d-flex justify-content-start ms-4 " style={{ display: "flex", marginBottom: "1px", marginTop: "10px" }}>Name:<h5>{a.Name}</h5></p>
                        <p className="d-flex justify-content-start ms-4" style={{ display: "flex", marginBottom: "1px" }}>Kg:<h5>{a.Kg}</h5></p>
                        <p className="d-flex  justify-content-start ms-4" style={{ display: "flex", marginBottom: "1px" }}>Price:<h5>{a.Price}</h5></p>
                        <hr style={{ border: "1px solid" }} />
                        <div className="d-flex justify-content-between">
                            <p>
                                {a.IsFav ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="red" className="bi bi-bookmark-fill" viewBox="0 0 16 16" onClick={() => vegfavItem(b)}>
                                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-bookmark-fill" viewBox="0 0 16 16" onClick={() => vegfavItem(b)}>
                                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
                                    </svg>}
                            </p>
                            {a.Visible ?
                                <div style={{ display: 'flex', marginBottom: "2%" }}>
                                    <button className="btn btn-outline-danger" onClick={() => vegminus(b)}>-</button>
                                    <button className="btn btn-outline-danger">{a.Count}</button>
                                    <button className="btn btn-outline-danger" onClick={() => vegadd(b)}>+</button>
                                </div>
                                :
                                <button className="btn btn-danger" style={{ marginLeft: "50%", marginBottom: "2%" }} onClick={() => vegChange(b)}>Add</button>
                            }
                        </div>
                    </div> 
                ))}
            </div>
            </div>
        </div>
    );
};

export default Home;
