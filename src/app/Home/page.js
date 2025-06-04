

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-2 text-xl">
                <div className="color-black p-10 pt-20 pl-20">
                <h1 className="text-black font-bold text-4xl pb-5">Welcome to NSK</h1>
            <p>
              <b className="font-medium">Your Gateway to Meaningful Employment</b><br />
              Finding a job shouldn’t be hard. At <b className="font-medium">NSK</b>, we make it easier than ever for freshers and semi-skilled professionals to discover real opportunities fast.
              Using smart technology and deep industry insights, we connect you with jobs that match your skills, potential, and goals.<br /><br />
              <b className="font-medium">Why Choose <b className="font-medium">NSK</b>?</b><br />
              Tech-Enabled Hiring<br />
              Faster Matches, Better Fit<br />
              Built for Freshers & Semi-Skilled Workers<br />
              User-Friendly Interface
            </p>
            </div>
            <div className="pl-20">
                <img src="./image.png" width={"500px"} height={"500px"}></img>
            </div>
            </div>
        </>
    );
}