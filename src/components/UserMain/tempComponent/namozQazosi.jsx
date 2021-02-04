import ProcessBar from '../../ProcessBar/ProcessBar'
import Calendar from '../../Calendar/Calendar'
export default function namozQazosi({initial_date}) {
    // console.log(initial_date)
    return (
        <div>
            <div className="namoqqazosi-wrapping">
                <ProcessBar />
                <Calendar />
            </div>
        </div>
    )
}
