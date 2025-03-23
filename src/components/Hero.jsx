export default function Hero(){
    return(
        <>
            <h5>Complete this training program if you want to ...</h5>
            <ol className="benefits-divst">
                <div>Follow a simple program with guaranteed results</div>
                <div>Get fit, healthy and strong</div>
                <div>Learn more about gym training and technique</div>
                <div>Become a divfetime gym member</div>
            </ol>

            <h3>The Rules</h3>
            <p>To complete this program, you <b>MUST</b> follow these 3 simple rules:</p>
            <ul className="rules-divst">
                <div className="rule-item">
                    <p><b>Rest</b></p>
                    <p>Ensure you are taking rest days where necessary</p>
                </div>
                <div className="rule-item">
                    <p><b>Rep</b></p>
                    <p>Every rep is a pause rep following a <abbr title="2 seconds down - 2 seconds pause - 2 seconds up">2 - 2 - 2 tempo </abbr></p>
                </div>
                <div className="rule-item">
                    <p><b>Weight*</b></p>
                    <p>Select the maximum weight that allows you to complete the set in good form</p>
                </div>
            </ul>
            <small>* The first and second set should be at 75% and 85% of your working weight used for the last two sets.</small>
            <h3>The training plan</h3>
            <p>This training plan  uses a strctur known as the <b>Bro Split</b>, and follows this rotation:</p>
            <p><b><i>Push &rarr; Pull &rarr; Legs &rarr; Repeat</i></b></p>
            <p>Complete all of the workouts below and track your progress along the way</p>
        </>
    )
} 