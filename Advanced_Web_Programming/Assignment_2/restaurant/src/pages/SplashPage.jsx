const SplashPage = () => {

    return (
        <>
            <div className="row border-cream" style={{height: '100px'}}>

                <div className="col-lg-4 col-sm-4" style={{backgroundColor: 'var(--primary-black)'}}>
                    <img
                        src="../assets/grandpa_richard.png"
                        alt="Grandpa Richard and his Prized Pickle"
                        style={{
                            width: '100%',
                            marginTop: '50px',
                            border: 'var(--background-cream) solid 3px',
                            borderRadius: '50%'
                        }}
                    />
                </div>

                <div className="bebas-neue-regular col-lg-8 col-sm-8">
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