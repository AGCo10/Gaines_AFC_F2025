import grandpa_richard from '../assets/grandpa_richard.png'
const SplashPage = () => {

    return (
        <>
            <div className="row" style={{height: '100px'}}>

                <div className="col-lg-4 col-sm-4">
                    <img
                        src= {grandpa_richard}
                        alt="Grandpa Richard and his Prized Pickle"
                        className="Founder-Image"

                    />
                </div>

                <div className="bebas-neue-regular col-lg-8 col-sm-8 mt-3">
                    <p>
                        Richard's pickles strives to bring a unique addition to the restaurants in our local area: A
                        Pickle Entree. Healthy, lean, and wildly tasteful, Richard's Pickles are a delightful change to
                        the routine.
                    </p>
                    <p>
                        "Well, sonny, the secret to making good pickles is simple: just add a dash of patience, a
                        sprinkle of love, and a whole lot of pickles! Remember, if they don’t make you laugh, they’re
                        just cucumbers in disguise!"
                    </p>
                    <p>
                        <strong><em>- Grandpa Richard "Dick" Pickleton</em></strong>
                    </p>
                </div>
            </div>

        </>
    );
}

export default SplashPage;