import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Home() {
    console.log("Home js file");
    return (

            <div  className="main">
                    <div> 
                        <h1> Home page</h1>
                    </div> 
                    <div>
                        <h1> Second Div</h1>
                    </div>
            </div>
    );
}

export default Home;