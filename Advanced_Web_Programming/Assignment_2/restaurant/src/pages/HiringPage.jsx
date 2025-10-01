
const HiringPage = () => {

    return (
    <>
        <div className="container" style={{height: "400px"}}>
            <div className="row">
                <div className="col-lg-2 col-sm-2" style={{height: "90px"}}></div>
                <div className="col-lg-8 col-sm-8" style={{height: "90px"}}>
                    <h2 className="bebas-neue-regular">Are Your Pickles... BORING?</h2></div>
                <div className="col-lg-2 col-sm-2" style={{height: "90px"}}></div>

            </div>
            <div className="row">

                <div className="col-lg-8 col-sm-8">
                    <h5>Full or Part-Time Team Member</h5>
                    <h6>Basic Requirements</h6>
                    <ul>- Great communication and customer service skills (Must have pleasant/courteous demeanor)</ul>
                    <ul>- Ability to function in a high-volume, fast-paced environment</ul>
                    <ul>- Clean, neat appearance</ul>
                    <ul>- Have reliable transportation</ul>
                    <ul>- Able to stand/walk on hard floors for 8 hours</ul>
                    <ul>- Flexible work hours and available weekends & holidays (We are closed Thanksgiving & Christmas Day)
                    </ul>
                    <ul>- Be able to pass a drug test</ul>
                </div>
                <div className="col-lg-4 col-sm-4">
                    <h5>Become a Legendary Pickler!!</h5>
                    Richard's Pickles is currently seeking highly motivated, positive people to join our team at both the
                    local store and pickle factory. Click below to apply!
                </div>

            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-4" style={{height: "90px"}}></div>
                <div className="col-lg-4 col-sm-4" style={{height: "90px"}}></div>
                <div className="col-lg-4 col-sm-4" style={{height: "90px"}}>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#apply_here"> GET STARTED!
                    </button>
                </div>
            </div>
        </div>
    </>) ;
}

export default HiringPage ;