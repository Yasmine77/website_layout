import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container" >
        <h1 className='Title text-lg-left text-uppercase font-weight-bold align-items-center' > Form To fill</h1>

        <form  className='border border-dark rounded-top' >
  <div className="row mb-4">
    <div className="col">
      <div className="form-outline">
      <label className="form-label" for="form6Example1">First name</label>

        <input type="text" id="form6Example1" className="form-control " style={{backgroundColor: "gainsboro"}} />
      </div>
    </div>
    <div className="col">
      <div className="form-outline">
      <label className="form-label" for="form6Example2">Last name</label>
        <input type="text" id="form6Example2" className="form-control " style={{backgroundColor: "gainsboro"}} />
      </div>
    </div>
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example3">Company name</label>
    <input type="text" id="form6Example3" className="form-control " style={{backgroundColor: "gainsboro"}} />
   
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example4">Address</label>
    <input type="text" id="form6Example4" className="form-control "  style={{backgroundColor: "gainsboro"}} />
    
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example5">Email</label>
    <input type="email" id="form6Example5" className="form-control " style={{backgroundColor: "gainsboro"}} />
    
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example6">Phone</label>
    <input type="number" id="form6Example6" className="form-control "  style={{backgroundColor: "gainsboro"}}/>
    
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form6Example7">Additional information</label>
    <textarea className="form-control "  style={{backgroundColor: "gainsboro"}}id="form6Example7" rows="4"></textarea>
   
  </div>

  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label className="form-check-label" for="form6Example8"> Create an account? </label>

  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Subscribe</button>
</form>
    </div>
  );
}

export default App;

